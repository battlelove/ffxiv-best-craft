import { defineStore } from 'pinia';
import { UniversalisClient, CurrentlyShown, UniversalisHistory } from '@/libs/Universalis';
import { useStorage } from '@vueuse/core';

export interface ItemPriceInfo {
    itemId: number;
    updatedAt: number;

    // Market Board Data
    marketPriceNQ: number; // Lowest NQ
    marketPriceHQ: number; // Lowest HQ
    averagePriceNQ: number;
    averagePriceHQ: number;

    // User Preferences / Overrides
    manualPrice?: number;
    useHQ: boolean; // If true, use HQ price for calculation (unless manual is set)

    // Derived
    effectivePrice: number; // The price used for calculation (Manual | Min(HQ, NQ) | etc)

    // Meta
    isManual: boolean;
}

export default defineStore('cost', {
    state: () => ({
        // Map ItemID -> PriceInfo
        prices: new Map<number, ItemPriceInfo>(),

        // Settings
        selectedWorld: useStorage('bestcraft-cost-world', 'Chocobo'), // Default to data center

        // Cache history for trend graphs: ItemID -> History
        historyCache: new Map<number, UniversalisHistory>(),
    }),

    getters: {
        getPrice: (state) => (itemId: number): number => {
            const info = state.prices.get(itemId);
            if (!info) return 0;
            return info.effectivePrice;
        },

        getItemPriceInfo: (state) => (itemId: number): ItemPriceInfo | undefined => {
            return state.prices.get(itemId);
        }
    },

    actions: {
        /**
         * Update prices for a list of items from Universalis
         */
        async fetchPrices(itemIds: number[]) {
            if (itemIds.length === 0) return;
            // Filter out items we recently updated? (Optional, skip for now for "Refresh" button logic)

            const results = await UniversalisClient.getMarketData(this.selectedWorld, itemIds);

            const now = Date.now();

            for (const [id, data] of results.entries()) {
                const existing = this.prices.get(id);

                // Determine lowest prices
                // Sometimes minPriceNQ/HQ might be 0 if no listings, fallback to average or other stats?
                // For now, trust the API.

                const minNQ = data.minPriceNQ || 0;
                const minHQ = data.minPriceHQ || 0;

                const newVal: ItemPriceInfo = {
                    itemId: id,
                    updatedAt: now,
                    marketPriceNQ: minNQ,
                    marketPriceHQ: minHQ,
                    averagePriceNQ: data.averagePriceNQ || 0,
                    averagePriceHQ: data.averagePriceHQ || 0,

                    manualPrice: existing?.manualPrice,
                    useHQ: existing?.useHQ ?? false,
                    isManual: existing?.isManual ?? false,

                    effectivePrice: 0 // Recalculate below
                };

                this.updateEffectivePrice(newVal);
                this.prices.set(id, newVal);
            }
        },

        /**
         * Update price history
         */
        async fetchHistory(itemIds: number[]) {
            const results = await UniversalisClient.getHistory(this.selectedWorld, itemIds);
            for (const [id, data] of results.entries()) {
                this.historyCache.set(id, data);
            }
        },

        updateEffectivePrice(info: ItemPriceInfo) {
            if (info.isManual && info.manualPrice !== undefined) {
                info.effectivePrice = info.manualPrice;
                return;
            }

            // If explicit HQ required
            if (info.useHQ) {
                // If HQ price exists, use it. Else fallback to NQ? Or considered infinite/unavailable?
                // Let's assume if HQ is 0 (no listing), user might want to know. 
                // But for calculation safety, maybe fallback to NQ usually happens in game if no HQ? 
                // Actually usually you just buy NQ if no HQ, or you MUST have HQ.
                // Simplification logic: Use HQ price.
                info.effectivePrice = info.marketPriceHQ;
            } else {
                // Determine logic for "Low Quality allowed"
                // Usually take the minimum of NQ and HQ (sometimes HQ is cheaper!)
                // If minPriceNQ is 0 (no stock), try HQ.
                const pNQ = info.marketPriceNQ;
                const pHQ = info.marketPriceHQ;

                if (pNQ > 0 && pHQ > 0) {
                    info.effectivePrice = Math.min(pNQ, pHQ);
                } else if (pNQ > 0) {
                    info.effectivePrice = pNQ;
                } else {
                    info.effectivePrice = pHQ;
                }
            }
        },

        setManualPrice(itemId: number, price: number) {
            let info = this.prices.get(itemId);
            if (!info) {
                // Create dummy info if not fetched yet
                info = {
                    itemId,
                    updatedAt: Date.now(),
                    marketPriceNQ: 0,
                    marketPriceHQ: 0,
                    averagePriceNQ: 0,
                    averagePriceHQ: 0,
                    useHQ: false,
                    manualPrice: price,
                    isManual: true,
                    effectivePrice: price
                };
                this.prices.set(itemId, info);
                return;
            }

            info.manualPrice = price;
            info.isManual = true;
            this.updateEffectivePrice(info);
        },

        clearManualPrice(itemId: number) {
            const info = this.prices.get(itemId);
            if (info) {
                info.isManual = false;
                info.manualPrice = undefined;
                this.updateEffectivePrice(info);
            }
        },

        setUseHQ(itemId: number, useHQ: boolean) {
            const info = this.prices.get(itemId);
            if (info) {
                info.useHQ = useHQ;
                this.updateEffectivePrice(info);
            }
        },

        setWorld(world: string) {
            this.selectedWorld = world;
            // Maybe clear cache or trigger re-fetch?
            // For now, just set. User should click "Refresh".
        }
    }
});
