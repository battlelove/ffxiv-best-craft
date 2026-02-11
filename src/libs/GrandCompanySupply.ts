import gcSupplyCsv from '@/assets/軍需品_整理.csv?raw';
import { searchLocalItem } from '@/libs/ItemMap';

export interface GCSupplyItem {
    job: string;
    level: number;
    nameTC: string;
    amount: number;
    nameSC: string;
    id?: number;
}

const gcItems: GCSupplyItem[] = [];
const gcItemMap = new Map<number, GCSupplyItem>(); // Key: Item ID
let isLoaded = false;

function parseLine(line: string): string[] {
    // Basic CSV parser, assumes no commas in values based on file inspection
    return line.split(',').map(p => p.trim());
}

export function loadGCSupplyData() {
    if (isLoaded) return;

    const lines = gcSupplyCsv.split(/\r?\n/);
    // Skip header (Line 1)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = parseLine(line);
        if (cols.length < 5) continue;

        // Formats: 職業,等級,物品(繁中),數量,物品(簡中)
        const job = cols[0];
        const level = parseInt(cols[1], 10);
        const nameTC = cols[2];
        const amount = parseInt(cols[3], 10);
        const nameSC = cols[4];

        if (isNaN(level)) continue;

        // Resolve ID
        // Try TC Name first
        let id = searchLocalItem(nameTC);

        // If not found, maybe try SC name logic? 
        // Current ItemMap only supports what's in items_zh.txt (which seemed to be TC+ID based on inspection).
        // If items_zh.txt is mixed, it might work.
        // Based on previous file view, items_zh.txt keys are user-defined or standard.
        // We will stick to TC Name lookup as primary. 

        const item: GCSupplyItem = {
            job,
            level,
            nameTC,
            amount,
            nameSC,
            id
        };

        gcItems.push(item);
        if (id) {
            gcItemMap.set(id, item);
        }
    }

    isLoaded = true;
    console.log(`[GCSupply] Loaded ${gcItems.length} items, mapped ${gcItemMap.size} IDs.`);
}

export function isGrandCompanyItem(itemId: number): boolean {
    loadGCSupplyData();
    return gcItemMap.has(itemId);
}

export function getGrandCompanyItem(itemId: number): GCSupplyItem | undefined {
    loadGCSupplyData();
    return gcItemMap.get(itemId);
}

/**
 * Get GC items within a level range (inclusive).
 * @param minLevel Minimum level (e.g. 1)
 * @param maxLevel Maximum level (e.g. 50)
 * @param jobFilter Optional job name filter
 */
export function getGCItemsByLevel(minLevel: number, maxLevel: number, jobFilter?: string): GCSupplyItem[] {
    loadGCSupplyData();
    return gcItems.filter(item => {
        if (item.level < minLevel || item.level > maxLevel) return false;
        if (jobFilter && item.job !== jobFilter) return false;
        return true;
    });
}

export function getAllGCJobs(): string[] {
    loadGCSupplyData();
    const jobs = new Set<string>();
    gcItems.forEach(i => jobs.add(i.job));
    return Array.from(jobs);
}
