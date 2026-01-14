<template>
    <div class="inventory-page">
        <h2>{{ $t('inventory-management') }}</h2>
        
        <!-- Add Item Section -->
        <div class="section-card">
            <div class="search-bar">
                <el-input
                    v-model="searchQuery"
                    :placeholder="$t('search-item-placeholder')"
                    @keyup.enter="handleSearch"
                    style="width: 300px; margin-right: 10px"
                >
                    <template #append>
                        <el-button @click="handleSearch" :icon="Search" />
                    </template>
                </el-input>
            </div>
            
            <!-- Search Results -->
            <div v-if="searchResults.length > 0" class="search-results">
                <el-tag 
                    v-for="item in searchResults" 
                    :key="item.id" 
                    class="search-result-item"
                    effect="plain"
                    @click="addToInventory(item)"
                >
                    {{ item.name }}
                    <el-icon class="add-icon"><Plus /></el-icon>
                </el-tag>
            </div>
        </div>

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
                <el-table-column prop="name" :label="$t('recipe-name')" />
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

const { $t } = useFluent();
const inventoryStore = useInventoryStore();
const settingsStore = useSettingsStore();

const searchQuery = ref('');
const searchResults = ref<Item[]>([]);
const searchLoading = ref(false);

const solving = ref(false);
const solvedRecipes = ref<SolvedRecipe[]>([]);

// Using BetaXivApi explicitly for searching
const xivApi = new BetaXivApiRecipeSource(BetaXivapiBase, 'zh'); // Force ZH for now or use settings

interface SolvedRecipe {
    id: number;
    name: string;
    completeness: number; // 0-1
    maxCraftable: number;
    missing: { id: number, name: string, amount: number }[];
}

// Enhance inventory list with names (basic for now, ideally cache this)
// For now, we only show items that were added via search (so we have name) 
// or fetch name. Since store only has ID.
// For MVP: We assume user just added them. But on reload names are lost if not cached.
// Let's rely on fetching or just showing ID if missing? 
// Better: Fetch names for IDs in inventory on mount.
const inventoryItemDetails = ref<Map<number, string>>(new Map());

const inventoryListWithInfo = computed(() => {
    return inventoryStore.itemList.map(item => ({
        ...item,
        name: inventoryItemDetails.value.get(item.id) || `Item #${item.id}`
    }));
});

// Update names on mount/change
// Simplified: Just-in-time fetching could be complex here. 
// Ideally InventoryStore should cache names. 
// For this session, I will assume we fetch names when running solver or searching.

async function handleSearch() {
    if(!searchQuery.value) return;
    searchLoading.value = true;
    try {
        const ds = await settingsStore.getDataSource(); // Use current DS for basic item search
        // Note: if DS is WebSource, it supports search.
        const res = await ds.recipeTable(1, searchQuery.value); 
        // recipeTable returns recipes. We want ITEMS.
        // WebSource doesn't have explicit Item Search?
        // Let's use recipe search and extract result items.
        // Or use XivApi for item search.
        
        // Let's use XivApi for reliable item search
        // xivApi.itemInfo is by ID.
        // We need search... XivApi recipeTable uses 'search' endpoint. 
        // But we want to add ingredients (Materials), not just Recipes.
        // Many materials don't have recipes.
        
        // Workaround: Use Universalis? Or XivApi Search 'Item' sheet.
        // BetaXivApi source implementation only exposes recipeTable.
        // Let's extend it or use a raw fetch here for simplicity.
        
        const url = `${BetaXivapiBase}search?sheets=Item&query=${encodeURIComponent(searchQuery.value)}&language=zh`; 
        const resp = await fetch(url);
        const data = await resp.json();
        
        searchResults.value = data.results.map((r: any) => ({
            id: r.row_id,
            name: r.fields.Name,
            level: r.fields.LevelItem,
            can_be_hq: r.fields.CanBeHq
        }));
        
    } catch(e) {
        ElMessage.error(String(e));
    } finally {
        searchLoading.value = false;
    }
}

function addToInventory(item: Item) {
    inventoryStore.addItem(item.id, 1);
    inventoryItemDetails.value.set(item.id, item.name);
    // Clear search? No, user might add multiple.
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
        const chunk = inventoryIds.slice(0, 5); // Limit to 5 items for test/performance
        if (inventoryIds.length > 5) {
             ElMessage.info($t('solver-limit-warning'));
        }
        
        const queries = chunk.map(id => `Ingredient=${id}`);
        const queryString = queries.join(' '); // Space = OR in XivApi? No, default is AND?
        // ElasticSearch syntax string.
        // "Ingredient=123 OR Ingredient=456"
        const query = chunk.map(id => `Ingredient=${id}`).join(' '); 
        // Note: XivApi 1 (beta) search syntax needs verification. 
        // Default space might be AND. Need "OR"?
        // Actually, let's try querying recipes for each item individually? No, too many requests.
        
        // Correct syntax for OR? "Ingredient:123 | Ingredient:456" ?
        // Or simply query 1 by 1 and merge. Simpler for now.
        
        const candidates = new Map<number, SolvedRecipe>(); // RecipeID -> Info
        
        for (const itemId of chunk) {
            // Find recipes using this item
            // Querying XivApi...
           const url = `${BetaXivapiBase}search?sheets=Recipe&query=Ingredient=${itemId}&language=zh&limit=50`; 
           const res = await fetch(url).then(r => r.json());
           
           for (const r of res.results) {
               if (candidates.has(r.row_id)) continue;
               
               // We have a candidate recipe.
               // Now we need its FULL ingredient list to calculate completeness.
               // fetch recipe details
               const details = await xivApi.recipeInfo(r.row_id);
               // fetch ingredients
               const ingredients = await xivApi.recipesIngredients(r.row_id);
               
               // Calculate completeness
               let totalIngs = 0;
               let presentIngs = 0;
               let maxCraft = 999;
               const missing = [];
               
               for (const ing of ingredients) {
                   // Ignore crystals? Usually people care about main mats.
                   // But let's count everything.
                   // Check inventory
                   const inBag = inventoryStore.items.get(ing.ingredient_id) || 0;
                   
                   // Limiting factor for max craftable
                   const canMake = Math.floor(inBag / ing.amount);
                   if (canMake < maxCraft) maxCraft = canMake;
                   
                   if (inBag >= ing.amount) {
                       presentIngs++;
                   } else {
                       // Need to fetch name for missing item
                       // Optimization: We don't have name here easily unless we fetch ItemInfo or cache.
                       // Let's fetch item info for proper display.
                       const info = await xivApi.itemInfo(ing.ingredient_id);
                       missing.push({
                           id: ing.ingredient_id,
                           name: info.name,
                           amount: ing.amount - inBag
                       });
                   }
                   totalIngs++;
               }
               
               candidates.set(r.row_id, {
                   id: r.row_id,
                   name: details.item_name,
                   completeness: Math.max(0, presentIngs / totalIngs), // Simple metric
                   maxCraftable: maxCraft,
                   missing: missing
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
search-item-placeholder = 搜索物品以添加...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名称
quantity = 数量
crafting-solver = 制作求解器 (Solver)
analyze-recipes = 分析可制作配方
solver-hint = 提示：目前仅分析前5個素材，且使用XIVAPI数据。如有不准确请见谅。
recipe-name = 配方名称
completeness = 完整度
max-craftable = 可制作数量
missing-materials = 缺少的素材
ready-to-craft = 素材齐备！
inventory-empty = 背包是空的，请先添加素材。
solver-limit-warning = 为避免过载，目前仅使用前5个素材进行分析。
solver-error = 分析失败
</fluent>

<fluent locale="zh-TW">
inventory-management = 背包管理
search-item-placeholder = 搜尋物品以新增...
my-inventory = 我的素材
clear-all = 清空
item-name = 物品名稱
quantity = 數量
crafting-solver = 製作求解器 (Solver)
analyze-recipes = 分析可製作配方
solver-hint = 提示：目前僅分析前5個素材，且使用XIVAPI數據。如有不準確請見諒。
recipe-name = 配方名稱
completeness = 完整度
max-craftable = 可製作數量
missing-materials = 缺少素材
ready-to-craft = 素材齊全！
inventory-empty = 背包是空的，請先新增素材。
solver-limit-warning = 為避免過載，目前僅使用前5個素材進行分析。
solver-error = 分析失敗
</fluent>

<fluent locale="en-US">
inventory-management = Inventory Management
search-item-placeholder = Search items to add...
my-inventory = My Inventory
clear-all = Clear All
item-name = Item Name
quantity = Quantity
crafting-solver = Crafting Solver
analyze-recipes = Analyze Recipes
solver-hint = Note: Analyzes only first 5 items due to API limits.
recipe-name = Recipe Name
completeness = Completeness
max-craftable = Max Craftable
missing-materials = Missing Materials
ready-to-craft = Ready to Craft!
inventory-empty = Inventory is empty.
solver-limit-warning = Only first 5 items are used for analysis.
solver-error = Analysis Failed
</fluent>

<fluent locale="ja-JP">
inventory-management = 所持品管理
search-item-placeholder = アイテムを検索して追加...
my-inventory = 所持素材
clear-all = クリア
item-name = アイテム名
quantity = 数量
crafting-solver = 製作ソルバー
analyze-recipes = レシピを分析
solver-hint = ヒント：API制限のため、最初の5つのアイテムのみ分析されます。
recipe-name = レシピ名
completeness = 完成度
max-craftable = 製作可能数
missing-materials = 不足素材
ready-to-craft = 製作可能！
inventory-empty = 所持品が空です。
solver-limit-warning = 最初の5つのアイテムのみ分析に使用されます。
solver-error = 分析失敗
</fluent>
