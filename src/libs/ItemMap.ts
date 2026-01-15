import itemsText from '@/assets/items_zh.txt?raw';

const itemMap = new Map<string, number>();
const idMap = new Map<number, string>();
let isLoaded = false;

function loadItems() {
    if (isLoaded) return;

    const lines = itemsText.split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('name_tw')) continue; // Skip header and empty lines

        // Split by tab or space
        const parts = trimmed.split(/\s+/);
        if (parts.length >= 2) {
            // Improved Parser:
            // 1. Tokenize by whitespace
            // 2. Look for the *last numeric* token as the ID.
            // 3. Everything before that token is the Name.

            let id = NaN;
            let idIndex = -1;

            // Iterate from end to start to find the ID
            for (let i = parts.length - 1; i >= 0; i--) {
                if (/^\d+$/.test(parts[i])) {
                    id = parseInt(parts[i], 10);
                    idIndex = i;
                    break;
                }
            }

            // Regex approach is safer for preserving internal spaces in names if any (though TW items usually don't have spaces, but just in case)
            // Pattern: Capture Name (any char non-greedy) then whitespace then ID (digits) then optional whitespace/garbage
            // But split is already done. Let's stick to split parts for now as it handles tab/space mix well.

            if (!isNaN(id) && idIndex > 0) {
                // Reconstruct name from parts[0...idIndex-1]
                // This effectively collapses multiple spaces/tabs in the name into single spaces, which is generally fine.
                const name = parts.slice(0, idIndex).join(' ');
                if (name) {
                    itemMap.set(name, id);
                    idMap.set(id, name);
                }
            }
        }
    }
    isLoaded = true;
    console.log(`[ItemMap] Loaded ${itemMap.size} items from local items_zh.txt`);
}

export function searchLocalItem(name: string): number | undefined {
    // Lazy load
    loadItems();
    // Try exact match first
    if (itemMap.has(name)) {
        return itemMap.get(name);
    }
    // Try fuzzy? For now just strict matching or simplified fuzzy could be added.
    // Given the request is for specific item lookup table, exact match is probably desired first.
    return undefined;
}

export function getLocalItemName(id: number): string | undefined {
    loadItems();
    return idMap.get(id);
}

export function searchLocalItemsFuzzy(query: string): { id: number, name: string }[] {
    loadItems();
    const results: { id: number, name: string }[] = [];

    // If query is empty, return first 50 items (default view)
    if (!query) {
        let count = 0;
        for (const [name, id] of itemMap.entries()) {
            results.push({ id, name });
            count++;
            if (count >= 50) break;
        }
        return results;
    }

    // Simple inclusion search
    for (const [name, id] of itemMap.entries()) {
        if (name.includes(query)) {
            results.push({ id, name });
            if (results.length >= 50) break; // Limit results
        }
    }
    return results;
}
