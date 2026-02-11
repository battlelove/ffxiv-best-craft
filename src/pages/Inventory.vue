<template>
    <div class="inventory-page">
        <h2>{{ $t('inventory-management') }}</h2>
        
        <!-- Add Item Section -->
        <div class="section-card">
            <div class="search-bar">
                <el-button @click="showItemSelector = true" :icon="Plus" type="primary">
                    {{ $t('add-item') }}
                </el-button>
            </div>
            

        </div>

        <!-- Crystal Quick Input -->
        <CrystalInput />

        <!-- Inventory List -->
        <div class="section-card">
            <div class="header-row">
                <h3>{{ $t('my-inventory') }}</h3>
                <el-button type="danger" link @click="clearInventory">{{ $t('clear-all') }}</el-button>
            </div>
            
            <el-table :data="inventoryListWithInfo" style="width: 100%" max-height="400">
                <el-table-column prop="name" :label="$t('item-name')" />
                <el-table-column :label="$t('quantity')" width="200">
                    <template #default="scope">
                        <el-input-number 
                            v-model="scope.row.amount" 
                            :min="1" 
                            size="small"
                            @change="(val:number) => updateAmount(scope.row.id, val)"
                        />
                    </template>
                </el-table-column>
                <el-table-column width="100" align="right">
                    <template #default="scope">
                        <el-button type="danger" :icon="Delete" circle size="small" @click="removeItem(scope.row.id)" />
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- Solver Section -->
        <div class="section-card solver-section">
            <div class="header-row">
                <h3>{{ $t('crafting-solver') }}</h3>
                <el-button type="success" @click="runSolver" :loading="solving">{{ $t('analyze-recipes') }}</el-button>
            </div>
            <p class="hint-text">{{ $t('solver-hint') }}</p>

            <el-table v-if="solvedRecipes.length > 0" :data="solvedRecipes" style="width: 100%">
                <el-table-column :label="$t('recipe-name')">
                    <template #default="scope">
                        <div style="display: flex; align-items: center; gap: 5px;">
                            <span>{{ scope.row.name }}</span>
                            <el-tag v-if="scope.row.isGC" type="warning" size="small" effect="dark">GC</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('completeness')" width="180" sortable :sort-method="(a,b) => a.completeness - b.completeness">
                    <template #default="scope">
                        <el-progress 
                            :percentage="Math.round(scope.row.completeness * 100)" 
                            :status="scope.row.completeness === 1 ? 'success' : 'warning'"
                        />
                    </template>
                </el-table-column>
                <el-table-column :label="$t('max-craftable')" width="120" align="center" prop="maxCraftable" />
                <el-table-column :label="$t('missing-materials')">
                    <template #default="scope">
                        <div v-if="scope.row.missing.length === 0" class="success-text">{{ $t('ready-to-craft') }}</div>
                        <div v-else class="missing-list">
                            <span v-for="m in scope.row.missing" :key="m.id" class="missing-item">
                                {{ m.name }} x{{ m.amount }}
                            </span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <ItemSelector 
            v-model="showItemSelector" 
            :title="$t('select-item')"
            mode="item"
            :custom-search="searchItems"
            @select="handleItemSelect"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
    ElInput, ElButton, ElTag, ElTable, ElTableColumn, ElInputNumber, ElIcon, ElProgress, ElMessage 
} from 'element-plus';
import { Search, Plus, Delete } from '@element-plus/icons-vue';
import { useFluent } from 'fluent-vue';
import useInventoryStore from '@/stores/inventory';
import useSettingsStore from '@/stores/settings';
import { BetaXivApiRecipeSource, BetaXivapiBase } from '@/datasource/beta-xivapi-source';
import { Item } from '@/libs/Craft';

import ItemSelector from '@/components/ItemSelector.vue';
import CrystalInput from '@/components/CrystalInput.vue';

const { $t } = useFluent();
const inventoryStore = useInventoryStore();
const settingsStore = useSettingsStore();

const showItemSelector = ref(false);

const solving = ref(false);
const solvedRecipes = ref<SolvedRecipe[]>([]);

// Using BetaXivApi explicitly for searching
const xivApi = new BetaXivApiRecipeSource(BetaXivapiBase, 'zh'); // Force ZH for now or use settings

import { isGrandCompanyItem } from '@/libs/GrandCompanySupply';

interface SolvedRecipe {
    id: number;
    name: string;
    completeness: number; // 0-1
    maxCraftable: number;
    missing: { id: number, name: string, amount: number }[];
    isGC?: boolean;
}

// Enhance inventory list with names (basic for now, ideally cache this)
const inventoryItemDetails = ref<Map<number, string>>(new Map());

import { onMounted, watch } from 'vue';

async function resolveItemNames() {
    const list = inventoryStore.itemList;
    if (!list) return;
    
    // Import local map dynamically
    const { getLocalItemName } = await import('@/libs/ItemMap');
    
    // For each item, try to find a name
    for (const item of list) {
        if (inventoryItemDetails.value.has(item.id)) continue;

        // 1. Local Lookup
        const localName = getLocalItemName(item.id);
        if (localName) {
            inventoryItemDetails.value.set(item.id, localName);
            continue;
        }

        // 2. Try DataSource (SettingsStore) - if it's a recipe
        // This is expensive to do one by one if not cached. 
        // Note: DataSources (like beta-xivapi) usually search by name or recipe ID, not Item ID directly unless we implement it.
        // But for MVP, if we can't find it locally, we might skip or try CafeMaker item fetch?
        
        // Let's try to query SettingsStore (Recipe Source) which might have generic Item lookup?
        // Actually, existing `xivApi` in this file is `BetaXivApiRecipeSource`.
        // It has `recipeTable` but maybe not direct item lookup by ID unless we dig into `BetaXivapiBase`.
        
        // Fallback: Just show ID if not found locally for now, 
        // OR implement a batch lookup if possible.
        // Since user provided LOCAL TABLE, that is the primary source.
    }
}

onMounted(() => {
    resolveItemNames();
});

// Watch for changes in inventory list to resolve new items
watch(() => inventoryStore.itemList, () => {
    resolveItemNames();
}, { deep: true });

const inventoryListWithInfo = computed(() => {
    const list = inventoryStore.itemList;
    if (!list || !Array.isArray(list)) return [];
    return list
        .filter(item => !(Number(item.id) >= 2 && Number(item.id) <= 19)) // Filter out crystals
        .map(item => ({
            ...item,
            name: inventoryItemDetails.value.get(item.id) || `Item #${item.id}`
        }));
});

// Custom search function for ItemSelector to find Items (not just recipes)
async function searchItems(page: number, query: string): Promise<{ results: any[], totalPages: number }> {
    const settingsStore = useSettingsStore();

    // 0. Local Lookup (Traditional Chinese Override)
    // Always include local results on the first page to ensure highest priority matches appear immediately.
    const localResultsPromise = (async () => {
        if (page > 1) return []; 
        const { searchLocalItemsFuzzy } = await import('@/libs/ItemMap'); 
        const matches = searchLocalItemsFuzzy(query);
        return matches.map(m => ({
            id: m.id,
            name: m.name,
            level: 1, 
            can_be_hq: false,
            is_recipe: false,
            is_local: true
        }));
    })();

    // 1. Search CafeMaker (Item Search - Good for Raw Materials & generic items, supports Simplified Chinese)
    // Note: CafeMaker might catch some recipes too as items.
    const cafeMakerPromise = (async () => {
        try {
            // CafeMaker works best with Simplified Chinese. 
            // Ideally we'd convert TC -> SC, but for now we pass query directly.
            const url = `https://cafemaker.wakingsands.com/search?string=${encodeURIComponent(query)}&indexes=Item&limit=20&page=${page}`;
            const resp = await fetch(url, { mode: 'cors' });
            const data = await resp.json();
            if (!data.Results) return [];
            return data.Results.map((r: any) => ({
                id: r.ID,
                name: r.Name,
                level: 1, // CafeMaker search doesn't provide level
                can_be_hq: false,
                is_recipe: false
            }));
        } catch (e) {
            console.warn("CafeMaker search failed", e);
            return [];
        }
    })();

    // 2. Search DataSource (Recipe Search - Good for Recipes, uses configured language e.g. TC/EN)
    // This replicates the behavior of the "List Page" selector.
    const recipeSourcePromise = (async () => {
        try {
             // We only want the first page of recipe results to mix in, or match the pagination?
             // DataSource pagination is separate. For simplicity in this hybrid mode:
             // - If page > 1, maybe skip recipe search if we treat it as infinite scroll?
             // But for now let's just query it.
             const ds = await settingsStore.getDataSource();
             const res = await ds.recipeTable(page, query);
             return res.results.map(r => ({
                id: r.item_id, // We want the ITEM ID here, not recipe ID, for the selector.
                name: r.item_name,
                level: r.rlv,
                can_be_hq: r.can_hq,
                is_recipe: true,
                // store generic info
                original_recipe: r 
             }));
        } catch (e) {
            console.warn("DataSource search failed", e);
            return [];
        }
    })();

    const [localRes, cafeRes, recipeRes] = await Promise.all([localResultsPromise, cafeMakerPromise, recipeSourcePromise]);

    // 3. Merge & Deduplicate
    // Priority: Local > Recipe Source > CafeMaker
    // We leverage Map behavior: later set() overwrites earlier ones.
    const combined = new Map<number, any>();

    // Lowest Priority: CafeMaker
    cafeRes.forEach(r => combined.set(r.id, r));

    // Medium Priority: Recipe
    recipeRes.forEach(r => combined.set(r.id, r));

    // Highest Priority: Local Lookup
    localRes.forEach(r => combined.set(r.id, r));

    const finalResults = Array.from(combined.values());
    
    // Normalize Names to Local (TC) if available
    // This ensures that even if a result came from CafeMaker (SC), we show the TC name.
    const { getLocalItemName } = await import('@/libs/ItemMap');
    for (const r of finalResults) {
        const localName = getLocalItemName(r.id);
        if (localName) {
            r.name = localName;
        }
    }
    
    // Pagination Logic Fix
    let calcTotalPages = page;
    if (cafeRes.length >= 20 || recipeRes.length >= 20 || localRes.length >= 50) {
        calcTotalPages = page + 1;
    }
    
    return {
        results: finalResults,
        totalPages: calcTotalPages 
    };
}

function handleItemSelect(item: { id: number; name: string }) {
    inventoryStore.addItem(item.id, 1);
    inventoryItemDetails.value.set(item.id, item.name);
}

function updateAmount(id: number, val: number) {
    inventoryStore.setItem(id, val);
}

function removeItem(id: number) {
    inventoryStore.removeItem(id);
}

function clearInventory() {
    inventoryStore.clear();
}

async function runSolver() {
    if (inventoryStore.itemList.length === 0) {
        ElMessage.warning($t('inventory-empty'));
        return;
    }
    
    solving.value = true;
    solvedRecipes.value = [];
    
    try {
        // 1. Get List of Ingredients
        const inventoryIds = inventoryStore.itemList.map(i => i.id);
        
        // 2. Reverse Lookup: Find recipes using these ingredients
        // XivApi: search?sheets=Recipe&query=ItemIngredient0.row_id=123 + ...
        // Query might be too long. We should query for each item? 
        // Or use "Ingredient.row_id" if XivApi supports it (array check).
        
        // Strategy: Query recipes that contain ANY of these ingredients.
        // "Recipe" sheet has "Ingredient" array (raw).
        // Query: `Ingredient=<id1> OR Ingredient=<id2>...`
        // Max URL length is concern.
        
        // Let's chunk it.
        // Let's chunk it.
        // const chunk = inventoryIds.slice(0, 5); // Limit removed
        
        // Optimization: Only check for the first few items or "valuable" items to avoid spamming API?
        // Analyzing ALL items is slow (N items * API call).
        // Let's increment.
        
        let checkedCount = 0;
        // const maxCheck = 20; // Limit removed
        const candidates = new Map<number, SolvedRecipe>(); // Restore candidates map
        
        for (const [itemId, amount] of inventoryStore.items.entries()) {
            // if (checkedCount >= maxCheck) break;
            checkedCount++;
            
            // Skip crystals (IDs 2-19) as they return too many recipes
            if (itemId >= 2 && itemId <= 19) continue; 
            
            // Local Lookup using RecipeMap
            const { findRecipesUsingItem } = await import('@/libs/RecipeMap');
            const localRecipes = findRecipesUsingItem(itemId);
            
            for (const lr of localRecipes) {
                 // Use Result Item ID as key (or we need a unique recipe ID, but result ID is okay-ish if 1 item = 1 recipe mostly)
                 // Or we generate a pseudo ID? 
                 // The 'lr' structure doesn't have a unique ID. 
                 // Let's use resultItemId as key. If conflicting (multiple recipes for same item), we might overwrite.
                 // For simplified solver, this is acceptable.
                 
                 if (candidates.has(lr.resultItemId)) continue;
                 
                  // Calculate completeness locally
                   let totalIngs = 0;
                   let presentIngs = 0;
                   let maxCraft = 999;
                   const missing = [];
                   
                   for (const ing of lr.ingredients) {
                       const inBag = inventoryStore.items.get(ing.id) || 0;
                       
                       // Limiting factor
                       const canMake = Math.floor(inBag / ing.amount);
                       if (canMake < maxCraft) maxCraft = canMake;
                       
                       if (inBag >= ing.amount) {
                           presentIngs++;
                       } else {
                           missing.push({
                               id: ing.id,
                               name: ing.name,
                               amount: ing.amount - inBag
                           });
                       }
                       totalIngs++;
                   }
                   
                   candidates.set(lr.resultItemId, {
                       id: lr.resultItemId,
                       name: lr.name,
                       completeness: totalIngs > 0 ? presentIngs / totalIngs : 0,
                       maxCraftable: maxCraft,
                       missing: missing,
                       isGC: isGrandCompanyItem(lr.resultItemId)
                   });
            }
        }
        
        // Sort: 100% complete first, then descending
        solvedRecipes.value = Array.from(candidates.values())
            .filter(r => r.completeness > 0.1) // Filter very low relevance
            .sort((a, b) => b.completeness - a.completeness);

    } catch (e) {
        console.error(e);
        ElMessage.error($t('solver-error') + ': ' + String(e));
    } finally {
        solving.value = false;
    }
}
</script>

<style scoped>
.inventory-page {
    padding: 20px;
    height: 100%;
    overflow-y: auto;
}
.section-card {
    background: var(--el-bg-color-overlay);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}
.search-bar {
    display: flex;
    align-items: center;
}
.search-results {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.search-result-item {
    cursor: pointer;
    transition: all 0.2s;
}
.search-result-item:hover {
    background-color: var(--el-color-primary-light-9);
}
.add-icon {
    margin-left: 5px;
}
.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.missing-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.missing-item {
    font-size: 0.85em;
    color: var(--el-color-danger);
}
.success-text {
    color: var(--el-color-success);
    font-weight: bold;
}
.hint-text {
    font-size: 0.9em;
    color: var(--el-text-color-secondary);
    margin-bottom: 10px;
}
</style>

<fluent locale="zh-CN">
inventory-management = 背包管理
add-item = 添加物品
select-item = 选择物品
search-item-placeholder = 搜索物品以添加...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名称
quantity = 数量
crafting-solver = 制作求解器 (Solver)
analyze-recipes = 分析可制作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名称
completeness = 完整度
max-craftable = 可制作数量
missing-materials = 缺少的素材
ready-to-craft = 素材齐备！
inventory-empty = 背包是空的，请先添加素材。
solver-error = 分析失败
</fluent>

<fluent locale="zh-TW">
inventory-management = 背包管理
add-item = 新增物品
select-item = 選擇物品
search-item-placeholder = 搜尋物品以新增...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名稱
quantity = 數量
crafting-solver = 製作求解器 (Solver)
analyze-recipes = 分析可製作配方
solver-hint = 提示：使用本地數據分析所有素材。
recipe-name = 配方名稱
completeness = 完整度
max-craftable = 可製作數量
missing-materials = 缺少素材
ready-to-craft = 素材齊全！
inventory-empty = 背包是空的，請先新增素材。
solver-error = 分析失敗
</fluent>

<fluent locale="en-US">
inventory-management = Inventory Management
add-item = Add Item
select-item = Select Item
search-item-placeholder = Search items to add...
my-inventory = My Inventory
clear-all = Clear All
item-name = Item Name
quantity = Quantity
crafting-solver = Crafting Solver
analyze-recipes = Analyze Recipes
solver-hint = Note: Analyzing all items using local data.
recipe-name = Recipe Name
completeness = Completeness
max-craftable = Max Craftable
missing-materials = Missing Materials
ready-to-craft = Ready to Craft!
inventory-empty = Inventory is empty.
solver-error = Analysis Failed
</fluent>

<fluent locale="ja-JP">
inventory-management = 所持品管理
add-item = アイテム追加
select-item = アイテムを選択
search-item-placeholder = アイテムを検索して追加...
my-inventory = 所持素材
clear-all = クリア
item-name = アイテム名
quantity = 数量
crafting-solver = 製作ソルバー
analyze-recipes = レシピを分析
solver-hint = ヒント：ローカルデータを使用してすべてのアイテムを分析します。
recipe-name = レシピ名
completeness = 完成度
max-craftable = 製作可能数
missing-materials = 不足素材
ready-to-craft = 製作可能！
inventory-empty = 所持品が空です。
solver-error = 分析失敗
</fluent>
