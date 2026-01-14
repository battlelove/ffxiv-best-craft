export interface CurrentlyShown {
    lastUploadTime: number;
    listings: Listing[];
    recentHistory: History[];
    currentAveragePrice: number;
    currentAveragePriceNQ: number;
    currentAveragePriceHQ: number;
    regularSaleVelocity: number;
    nqSaleVelocity: number;
    hqSaleVelocity: number;
    averagePrice: number;
    averagePriceNQ: number;
    averagePriceHQ: number;
    minPrice: number;
    minPriceNQ: number;
    minPriceHQ: number;
    maxPrice: number;
    maxPriceNQ: number;
    maxPriceHQ: number;
    stackSizeHistogram: { [key: string]: number };
    stackSizeHistogramNQ: { [key: string]: number };
    stackSizeHistogramHQ: { [key: string]: number };
    worldName?: string;
    worldID?: number;
    dcName?: string;
    regionName?: string;
}

export interface Listing {
    lastReviewTime: number;
    pricePerUnit: number;
    quantity: number;
    stainID: number;
    worldName?: string;
    worldID?: number;
    creatorName?: string;
    creatorID?: string;
    hq: boolean;
    isCrafted: boolean;
    materia?: Materia[];
    total: number;
}

export interface Materia {
    slotID: number;
    materiaID: number;
}

export interface History {
    hq: boolean;
    pricePerUnit: number;
    quantity: number;
    timestamp: number;
    worldName?: string;
    worldID?: number;
    buyerName?: string;
    total: number;
}

export interface UniversalisHistory {
    itemID: number;
    worldID: number;
    lastUploadTime: number;
    entries: History[];
    stackSizeHistogram: { [key: string]: number };
    stackSizeHistogramNQ: { [key: string]: number };
    stackSizeHistogramHQ: { [key: string]: number };
    regularSaleVelocity: number;
    nqSaleVelocity: number;
    hqSaleVelocity: number;
}

const BASE_URL = 'https://universalis.app/api/v2';

export class UniversalisClient {
    /**
     * Fetch current market data for items
     * @param worldDcRegion World, Data Center, or Region (e.g., "Chocobo", "Garuda")
     * @param itemIds List of Item IDs
     */
    static async getMarketData(
        worldDcRegion: string,
        itemIds: number[],
    ): Promise<Map<number, CurrentlyShown>> {
        if (itemIds.length === 0) return new Map();

        // Max IDs per request is technically limited, but usually high enough.
        // We'll chunk if necessary, but 100 items is usually fine.
        const ids = itemIds.join(',');
        const url = `${BASE_URL}/${worldDcRegion}/${ids}?listings=5&entries=0`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Universalis API error: ${response.statusText}`);
            }
            const data = await response.json();

            const result = new Map<number, CurrentlyShown>();

            if (itemIds.length === 1) {
                // If single item, response is the object itself (if valid)
                // Note: Universalis single item response structure
                result.set(itemIds[0], data as CurrentlyShown);
            } else {
                // If multiple items, response has 'items' key or keys are itemIDs
                // Universalis v2 returns: { itemID: Data, itemID2: Data } or { items: ... } for some endpoints
                // For /{world}/{ids}, if ids has comma, it returns:
                // { "items": { "123": {...}, "456": {...} }, "unresolvedItems": [...] }
                if (data.items) {
                    for (const id in data.items) {
                        result.set(Number(id), data.items[id]);
                    }
                }
            }
            return result;
        } catch (e) {
            console.error('Failed to fetch Universalis data', e);
            return new Map();
        }
    }

    /**
     * Fetch history data for items (last 7 days by default from API logic, though we might need 'entries' param)
     */
    static async getHistory(
        worldDcRegion: string,
        itemIds: number[],
        entriesToReturn = 1000, // Universalis default might be less
    ): Promise<Map<number, UniversalisHistory>> {
        if (itemIds.length === 0) return new Map();
        
        const ids = itemIds.join(',');
        // history endpoint: /api/v2/history/{worldDcRegion}/{itemIds}
        const url = `${BASE_URL}/history/${worldDcRegion}/${ids}?entriesWithin=604800&entries=${entriesToReturn}`; 
        // 604800 = 7 days in seconds

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Universalis API history error: ${response.statusText}`);
            }
            const data = await response.json();

            const result = new Map<number, UniversalisHistory>();

            if (itemIds.length === 1) {
               result.set(itemIds[0], data as UniversalisHistory);
            } else {
                 if (data.items) {
                    for (const id in data.items) {
                        result.set(Number(id), data.items[id]);
                    }
                }
            }
            return result;
        } catch (e) {
            console.error('Failed to fetch Universalis history', e);
            return new Map();
        }
    }
}
