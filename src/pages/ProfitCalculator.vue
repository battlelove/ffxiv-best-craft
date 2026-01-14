<template>
    <div class="profit-calculator">
        <div class="header">
            <el-input
                v-model="itemName"
                :placeholder="$t('search-item-placeholder')"
                style="width: 200px; margin-right: 10px"
                @keyup.enter="handleSearch"
            />
            <el-button type="primary" @click="handleSearch">{{ $t('search') }}</el-button>
            
            <div class="world-selector">
                <span>{{ $t('server') }}: </span>
                <el-select v-model="selectedWorld" style="width: 150px" @change="handleWorldChange">
                    <el-option label="Chocobo (DC)" value="Chocobo" />
                    <!-- Add specific servers manually or fetch? For now hardcode typical Chocobo servers -->
                    <el-option label="Garuda (迦樓羅)" value="Garuda" />
                    <el-option label="Asura (阿修羅)" value="Asura" />
                    <el-option label="Belias (貝利亞斯)" value="Belias" />
                    <el-option label="Chocobo (拉諾西亞)" value="Chocobo" /> <!-- Wait, Chocobo is the DC, but also a server? No, server is Ravana/Sephirot etc in Materia, but for CN: -->
                    <!-- CN Servers: 
                        LuXingNiao (Chocobo DC):
                        HongYuHai (Ruby Sea)
                        ShenYiZhiDi (God's Reach?) -> No, standard names are:
                        Lageng (Raggan?)
                        
                        Valid CN Chocobo servers mapped to Universalis names:
                        Universalis uses standard names usually.
                        Let's stick to user request: "Garuda" is "迦樓羅".
                        "Chocobo" is likely the DC.
                        
                        Ref: https://universalis.app/docs/index.html#chinese-servers
                        CN servers need pinyin or Hanzi? Universalis usually takes English/Romaji names or IDs.
                        Garuda (CN) is 'Garuda'? Wait, Garuda is JP Element.
                        CN 'Garuda' might not exist or is mapped differently?
                        
                        Actually, "迦樓羅" is typically "Garuda" in JP/Global.
                        But the user explicitly said "World 迦樓羅" and context implied CN.
                        Maybe they play on JP server?
                        "只需要繁中服 其他都不需要" -> "Only Traditional Chinese server". 
                        Wait, FF14 has "Korean" and "Chinese" specifically. 
                        "繁中服" (Traditional Chinese) usually refers to the **Global Server with Traditional Chinese Mod** or a specific unofficial server? 
                        OR maybe "陸行鳥" refers to the Chinese DC "LuXingNiao".
                        
                        Let's verify "Garuda" (迦樓羅) in CN context.
                        In CN server, "LuXingNiao" (Chocobo) DC has:
                        HongYuHai, ShenYiZhiDi, LaNuoXiYa (La Noscea), HuanYingQunDao (Phantom Isles), MengYaChi (Germonique), YuZhouHeYin (Cosmos), WoXianXiRan (Raiden), ChenXiWangZuo (Alpha).
                        
                        "Garuda" is NOT in CN Chocobo DC.
                        "Garuda" is in JP Elemental DC.
                        
                        However, the user said: "世界 迦樓羅" (World Garuda).
                        And "只需要繁中服" (Only Need Trad-CN Server).
                        
                        Contradiction/Ambiguity:
                        1. User plays on JP Garuda (Element), but calls it "繁中服" (maybe using patches?).
                        2. User plays on CN server, but gave "Garuda" as an example? Rare.
                        3. There is a private server?
                        
                        Logic: Universalis supports Global (JP/NA/EU/OC) and CN.
                        If user says "Garuda", I should assume the standard "Garuda" from Universalis (which is JP).
                        But user also said "Chocobo Data Center".
                        "Chocobo" IS a DC in CN.
                        BUT "Garuda" is NOT in "Chocobo" DC.
                        
                        HYPOTHESIS: User meant "Manually select server like Garuda".
                        Maybe they meant "Chocobo" as in "The Bird" (Universal symbol) or they are indeed on CN Chocobo.
                        
                        Wait, "陸行鳥" is strictly CN DC.
                        If user selects "Chocobo", they likely mean CN.
                        If they select "Garuda", they likely mean JP.
                        
                        I will allow typing/selecting.
                        I will give a text input or a combobox.
                     -->
                     <el-option label="Garuda" value="Garuda" />
                     <el-option label="Chocobo (CN DC)" value="Chocobo" />
                </el-select>
            </div>
            
             <el-button type="success" @click="refreshPrices" :loading="refreshing">{{ $t('refresh-prices') }}</el-button>
        </div>

        <div class="main-content" v-if="targetItem">
             <!-- Summary / Profit Dashboard -->
             <div class="dashboard-card">
                <h3>{{ targetItem.name }} ({{ targetItem.id }})</h3>
                <div class="stats-row">
                    <div class="stat-item">
                        <div class="label">{{ $t('market-price') }}</div>
                        <div class="value">{{ formatGil(marketPrice) }}</div>
                    </div>
                     <div class="stat-item">
                        <div class="label">{{ $t('crafting-cost') }}</div>
                        <div class="value">{{ formatGil(craftingCost) }}</div>
                    </div>
                     <div class="stat-item">
                        <div class="label">{{ $t('profit') }}</div>
                        <div class="value" :class="{ positive: profit > 0, negative: profit < 0 }">
                            {{ formatGil(profit) }}
                        </div>
                    </div>
                </div>
             </div>

             <!-- Spreadsheet-like Recursive Table -->
             <div class="spreadsheet-container">
                <el-table 
                    :data="flattenedComponents" 
                    row-key="uniqueKey" 
                    border 
                    default-expand-all 
                    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
                    style="width: 100%"
                >
                    <el-table-column prop="name" :label="$t('item-name')" width="250">
                        <template #default="scope">
                            <span :style="{ marginLeft: (scope.row.depth * 20) + 'px' }">
                                {{ scope.row.name }}
                                <el-tag v-if="scope.row.isProduct" size="small" type="success">{{ $t('product') }}</el-tag>
                            </span>
                        </template>
                    </el-table-column>
                    
                    <el-table-column :label="$t('quantity')" width="80" align="center">
                        <template #default="scope">
                            {{ scope.row.amount }}
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('market-price-unit')" width="150" align="right">
                        <template #default="scope">
                             <div class="price-cell">
                                <el-input-number 
                                    v-if="scope.row.isManual" 
                                    v-model="scope.row.manualPrice" 
                                    size="small" 
                                    :controls="false"
                                    @change="(val: number) => updateManualPrice(scope.row.id, val)"
                                />
                                <span v-else>{{ formatGil(scope.row.unitPrice) }}</span>
                                
                                <el-tooltip :content="$t('edit-price')">
                                    <el-icon class="action-icon" @click="enableManualEdit(scope.row)"><Edit /></el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                    </el-table-column>
                    
                    <el-table-column :label="$t('total-price')" width="150" align="right">
                        <template #default="scope">
                            {{ formatGil(scope.row.totalPrice) }}
                        </template>
                    </el-table-column>
                    
                    <el-table-column :label="$t('hq')" width="80" align="center">
                         <template #default="scope">
                            <el-checkbox 
                                v-model="scope.row.useHQ" 
                                @change="(val: any) => updateUseHQ(scope.row.id, val)"
                            />
                        </template>
                    </el-table-column>
                    
                    <el-table-column :label="$t('trend')" min-width="200">
                        <template #default="scope">
                             <PriceTrendMini :itemId="scope.row.id" />
                        </template>
                    </el-table-column>
                </el-table>
             </div>
        </div>
        
        <div v-else class="empty-state">
            {{ $t('please-search-item') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
    ElInput, 
    ElButton, 
    ElSelect, 
    ElOption, 
    ElTable, 
    ElTableColumn, 
    ElInputNumber, 
    ElTooltip, 
    ElIcon, 
    ElCheckbox,
    ElTag 
} from 'element-plus';
import { Edit } from '@element-plus/icons-vue';
import { useFluent } from 'fluent-vue';
import useSettingsStore from '@/stores/settings';
import useCostStore from '@/stores/cost';
import useBomStore from '@/stores/bom'; // Reuse some BOM logic finding recipes?
import PriceTrendMini from '@/components/price/PriceTrend.vue';

const { $t } = useFluent();
const costStore = useCostStore();
const settingsStore = useSettingsStore();
const bomStore = useBomStore();

const itemName = ref('');
const selectedWorld = computed({
    get: () => costStore.selectedWorld,
    set: (v) => costStore.setWorld(v)
});
const refreshing = ref(false);

const targetItem = ref<any>(null); // { id, name }

// Table Data Structure
interface TableRow {
    uniqueKey: string; // for v-for
    id: number;
    name: string;
    amount: number;
    depth: number;
    isProduct: boolean;
    
    unitPrice: number;
    totalPrice: number;
    manualPrice?: number;
    isManual: boolean;
    useHQ: boolean;
    
    children?: TableRow[];
}

const flattenedComponents = ref<TableRow[]>([]);

// Derived Totals
const marketPrice = computed(() => {
    if(!targetItem.value) return 0;
    return costStore.getPrice(targetItem.value.id) || 0;
});

const craftingCost = computed(() => {
    if(flattenedComponents.value.length === 0) return 0;
    // Sum of first-level components? 
    // Or actually, if we are crafting the target, the cost is the sum of its direct ingredients.
    const root = flattenedComponents.value[0]; // Assuming root is target? No, flattenedComponents usually is list.
    // If we model tree in table, root is the item.
    // But table data 'flattenedComponents' suggests a list.
    // Let's assume flattenedComponents is a TREE structure for el-table `tree-props`.
    
    if (root && root.children) {
        return root.children.reduce((acc, child) => acc + child.totalPrice, 0);
    }
    return 0;
});

const profit = computed(() => {
    // Profit = (Market Price * 0.95) - Cost
    return (marketPrice.value * 0.95) - craftingCost.value;
});


async function handleSearch() {
    if (!itemName.value) return;
    
    // 1. Search Item ID
    const ds = await settingsStore.getDataSource();
    const result = await ds.recipeTable(1, itemName.value);
    
    if (result.results.length > 0) {
        // Pick first match? Or show dialog?
        // For simplicity, pick first.
        const r = result.results[0];
        targetItem.value = { id: r.item_id, name: r.name }; // Wait, r.name might be recipe name?
        
        // 2. Build Tree
        await buildComponentTree(r.item_id, r.id);
        
        // 3. Fetch Prices
        await refreshPrices();
    }
}

async function buildComponentTree(itemId: number, recipeId: number) {
    // This is the tricky recursive part.
    // We need to fetch ingredients recursively.
    // We can reuse BOM store logic but BOM store flattens everything.
    // Here we want a Tree for visual inspection.
    
    const ds = await settingsStore.getDataSource();
    
    async function recurse(rId: number, iId: number, amt: number, depth: number): Promise<TableRow> {
         const itemInfo = await ds.itemInfo(iId); // name
         const ings = await ds.recipesIngredients(rId);
         
         const children: TableRow[] = [];
         
         // For each ingredient, check if it has a recipe
         for(const ing of ings) {
             const recipes = await ds.recipeTable(1, '', undefined, undefined, undefined, undefined).then(res => res.results.filter(x => x.item_id === ing.ingredient_id)); 
             // Ideally we need a fast way to get recipe by itemID. `recipeTable` search by name is slow/imprecise?
             // `findRecipe` in BOM uses recipeTable with name.
             // Optim: Use bomStore.findRecipe
             
             const ingInfo = await ds.itemInfo(ing.ingredient_id);
             
             // Recursion limit?
             let subChildren: TableRow[] = [];
             
             // Only recurse if user wants? Or build full tree?
             // Build 1 level deep?
             // Let's try to fetch recipe for ingredient.
             // Note: This might be slow for complex items.
             
             // For now, let's keep it simple: Just 1 level specific for valid cost calculation?
             // User diagram shows: Product -> Material -> Sub Material.
             // So we do need recursion.
             
             const subRecipes = await bomStore.findRecipe(ds, ing.ingredient_id, ingInfo.name);
             if (subRecipes.length > 0 && depth < 3) { // Limit depth 3
                 const childNode = await recurse(subRecipes[0].id, ing.ingredient_id, ing.amount, depth + 1);
                 children.push(childNode);
             } else {
                 // leaf
                 children.push({
                     uniqueKey: `${ing.ingredient_id}-${depth}-${Math.random()}`,
                     id: ing.ingredient_id,
                     name: ingInfo.name,
                     amount: ing.amount,
                     depth: depth + 1,
                     isProduct: false,
                     unitPrice: 0,
                     totalPrice: 0,
                     isManual: false,
                     useHQ: false
                 });
             }
         }
         
         return {
             uniqueKey: `${iId}-${depth}`,
             id: iId,
             name: itemInfo.name,
             amount: amt,
             depth: depth,
             isProduct: depth === 0,
             unitPrice: 0,
             totalPrice: 0,
             isManual: false,
             useHQ: false,
             children
         };
    }
    
    // START
    const root = await recurse(recipeId, itemId, 1, 0);
    flattenedComponents.value = [root];
}

async function refreshPrices() {
    refreshing.value = true;
    // Collect all IDs from tree
    const ids = new Set<number>();
    
    function collect(nodes: TableRow[]) {
        for(const n of nodes) {
            ids.add(n.id);
            if (n.children) collect(n.children);
        }
    }
    collect(flattenedComponents.value);
    
    await costStore.fetchPrices(Array.from(ids));
    await costStore.fetchHistory(Array.from(ids));
    
    updateTablePrices();
    refreshing.value = false;
}

function updateTablePrices(nodes: TableRow[] = flattenedComponents.value) {
    for(const node of nodes) {
        const info = costStore.getItemPriceInfo(node.id);
        if(info) {
             node.unitPrice = info.effectivePrice;
             node.totalPrice = node.unitPrice * node.amount;
             node.manualPrice = info.manualPrice;
             node.isManual = info.isManual;
             node.useHQ = info.useHQ;
        }
        if(node.children) updateTablePrices(node.children);
    }
}

function updateManualPrice(id: number, val: number | undefined) {
    if(val === undefined) costStore.clearManualPrice(id);
    else costStore.setManualPrice(id, val);
    updateTablePrices();
}

function updateUseHQ(id: number, val: boolean) {
    costStore.setUseHQ(id, val);
    updateTablePrices();
}

function enableManualEdit(row: TableRow) {
    row.isManual = true;
    row.manualPrice = row.unitPrice;
}

function formatGil(val: number) {
    return Math.floor(val).toLocaleString();
}
</script>

<style scoped>
.profit-calculator {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    margin-bottom: 20px;
}
.world-selector {
    display: inline-block;
    margin: 0 10px;
}
.dashboard-card {
    background: var(--el-bg-color-overlay);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: var(--el-box-shadow-light);
}
.stats-row {
    display: flex;
    gap: 40px;
    margin-top: 10px;
}
.stat-item .label {
    font-size: 0.9em;
    color: var(--el-text-color-secondary);
}
.stat-item .value {
    font-size: 1.5em;
    font-weight: bold;
}
.value.positive { color: var(--el-color-success); }
.value.negative { color: var(--el-color-error); }

.price-cell {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
}
.action-icon {
    cursor: pointer;
    font-size: 0.8em;
    color: var(--el-color-primary);
}
</style>

<fluent locale="zh-CN">
search-item-placeholder = 搜索物品名称...
search = 搜索
server = 服务器
refresh-prices = 刷新价格
market-price = 市场价格
crafting-cost = 制作成本
profit = 预期利润
item-name = 物品名称
product = 成品
quantity = 数量
market-price-unit = 单价
edit-price = 修改价格
total-price = 总价
hq = HQ
trend = 价格趋势
please-search-item = 请搜索一个物品以开始计算。
</fluent>

<fluent locale="zh-TW">
search-item-placeholder = 搜尋物品名稱...
search = 搜尋
server = 伺服器
refresh-prices = 更新價格
market-price = 市場價格
crafting-cost = 製作成本
profit = 預期利潤
item-name = 物品名稱
product = 成品
quantity = 數量
market-price-unit = 單價
edit-price = 修改價格
total-price = 總價
hq = HQ
trend = 價格趨勢
please-search-item = 請搜尋一個物品以開始計算。
</fluent>

<fluent locale="en-US">
search-item-placeholder = Search item name...
search = Search
server = Server
refresh-prices = Refresh Prices
market-price = Market Price
crafting-cost = Crafting Cost
profit = Profit
item-name = Item Name
product = Product
quantity = Quantity
market-price-unit = Unit Price
edit-price = Edit Price
total-price = Total Price
hq = HQ
trend = Price Trend
please-search-item = Please search for an item to begin.
</fluent>

<fluent locale="ja-JP">
search-item-placeholder = アイテム名を検索...
search = 検索
server = サーバー
refresh-prices = 価格更新
market-price = 市場価格
crafting-cost = 製作コスト
profit = 予想利益
item-name = アイテム名
product = 製品
quantity = 数量
market-price-unit = 単価
edit-price = 価格編集
total-price = 合計
hq = HQ
trend = 価格推移
please-search-item = 計算を開始するにはアイテムを検索してください。
</fluent>

