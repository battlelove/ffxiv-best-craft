import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

interface InventoryItem {
    id: number;
    amount: number;
    // Optional: we might cache name here to avoid lookup on every render,
    // but looking up from itemInfo is safer for valid data.
    // For simplicity, let's keep it minimal.
}

// Custom serializer for Map persistence
// Custom serializer for Map persistence
const mapSerializer = {
    read: (v: string) => {
        try {
            const parsed = JSON.parse(v);
            return new Map(parsed);
        } catch (e) {
            console.warn('Failed to parse inventory storage, resetting.', e);
            return new Map();
        }
    },
    write: (v: Map<number, number>) => JSON.stringify(Array.from(v.entries())),
};

export const useInventoryStore = defineStore('inventory', () => {
    // Persist to local storage with custom serializer
    const items = useStorage<Map<number, number>>(
        'inventory-items',
        new Map(),
        localStorage,
        { serializer: mapSerializer }
    );

    const itemList = computed(() => {
        // Ensure items.value is a Map (in case of storage errors)
        if (!(items.value instanceof Map)) {
            // Fallback for corrupted storage
            return [];
        }
        return Array.from(items.value.entries()).map(([id, amount]) => ({
            id,
            amount
        }));
    });

    function addItem(id: number, amount: number) {
        const current = items.value.get(id) || 0;
        items.value.set(id, current + amount);
    }

    function setItem(id: number, amount: number) {
        if (amount <= 0) {
            removeItem(id);
        } else {
            items.value.set(id, amount);
        }
    }

    function removeItem(id: number) {
        items.value.delete(id);
    }

    function clear() {
        items.value.clear();
    }

    function hasItem(id: number, amount: number = 1): boolean {
        return (items.value.get(id) || 0) >= amount;
    }

    function fromJson(json: string) {
        if (!json) return;
        try {
            const parsed = JSON.parse(json);
            // Expected format: [[id, amount], [id, amount]]
            if (Array.isArray(parsed)) {
                items.value = new Map(parsed);
            }
        } catch (e) {
            console.error('Failed to load inventory from custom logic', e);
        }
    }

    function toJson(): string {
        return JSON.stringify(Array.from(items.value.entries()));
    }

    return {
        items,
        itemList,
        addItem,
        setItem,
        removeItem,
        clear,
        hasItem,
        fromJson,
        toJson
    };
});

export default useInventoryStore;
