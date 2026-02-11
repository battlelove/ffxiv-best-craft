<template>
    <div class="grand-company-page">
        <h2>{{ $t('gc-supply-title') }}</h2>
        
        <div class="filter-card">
            <div class="filter-row">
                <span class="label">{{ $t('level-range') }}:</span>
                <el-input-number v-model="minLevel" :min="1" :max="100" size="small" />
                <span class="separator">-</span>
                <el-input-number v-model="maxLevel" :min="1" :max="100" size="small" />
                
                <el-button type="primary" @click="calculateDemand" :loading="calculating" style="margin-left: 20px;">
                    {{ $t('calculate-demand') }}
                </el-button>
            </div>
            <p class="hint-text">{{ $t('gc-hint') }}</p>
        </div>

        <div class="content-row">
            <!-- Left: GC Items List -->
            <div class="section-card half-width">
                <h3>{{ $t('gc-items-list') }} ({{ displayedGCItems.length }})</h3>
                <el-table :data="displayedGCItems" height="500" style="width: 100%" stripe>
                    <el-table-column prop="level" label="Lv" width="60" sortable />
                    <el-table-column prop="job" :label="$t('job')" width="80" sortable />
                    <el-table-column prop="nameTC" :label="$t('item-name')" />
                    <el-table-column :label="$t('status')" width="100" align="center">
                        <template #default="scope">
                            <el-tag v-if="scope.row.isCraftable" type="success" size="small">{{ $t('craftable') }}</el-tag>
                            <el-tag v-else type="info" size="small">{{ $t('gathering-or-other') }}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- Right: Material Demand -->
            <div class="section-card half-width">
                <h3>{{ $t('material-demand-stats') }}</h3>
                <p class="hint-text">{{ $t('material-demand-hint') }}</p>
                
                <el-table :data="materialDemandList" height="500" style="width: 100%" stripe>
                    <el-table-column prop="name" :label="$t('material-name')" />
                    <el-table-column prop="amount" :label="$t('total-demand')" width="120" sortable />
                    <el-table-column :label="$t('type')" width="100">
                         <template #default="scope">
                            <el-tag v-if="scope.row.isSubCraft" type="warning" size="small">{{ $t('intermediate') }}</el-tag>
                            <el-tag v-else type="info" size="small">{{ $t('raw') }}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElInputNumber, ElButton, ElTable, ElTableColumn, ElTag, ElMessage } from 'element-plus';
import { useFluent } from 'fluent-vue';
import { getGCItemsByLevel, GCSupplyItem } from '@/libs/GrandCompanySupply';
import { findRecipesByResultItem, findRecipesUsingItem } from '@/libs/RecipeMap';
import { searchLocalItem } from '@/libs/ItemMap';

const { $t } = useFluent();

const minLevel = ref(1);
const maxLevel = ref(50);
const calculating = ref(false);

interface DisplayGCItem extends GCSupplyItem {
    isCraftable: boolean;
}

interface MaterialDemand {
    id: number;
    name: string;
    amount: number;
    isSubCraft: boolean;
}

const displayedGCItems = ref<DisplayGCItem[]>([]);
const materialDemandList = ref<MaterialDemand[]>([]);

async function calculateDemand() {
    calculating.value = true;
    displayedGCItems.value = [];
    materialDemandList.value = [];
    
    try {
        const gcItems = getGCItemsByLevel(minLevel.value, maxLevel.value);
        
        const validItems: DisplayGCItem[] = [];
        const demandMap = new Map<number, MaterialDemand>();

        for (const item of gcItems) {
             let recipeFound = false;
             
             if (item.id) {
                 const recipes = findRecipesByResultItem(item.id);
                 if (recipes.length > 0) {
                     recipeFound = true;
                     const targetRecipe = recipes[0]; // Assume first recipe (primary)
                     
                     // Calculate materials for this item (Assuming 1 item needed per GC turn-in, CSV says quantity but usually it's 1 for gear, maybe more for food?)
                     // Use 'amount' from CSV if available, else 1
                     const requiredAmount = item.amount || 1; 
                     // Recipe yield might be > 1 (e.g. food produces 3), so we need ceil(required / yield) * ingredients
                     const craftsNeeded = Math.ceil(requiredAmount / targetRecipe.yield);
                     
                     for (const ing of targetRecipe.ingredients) {
                         const totalIngQty = ing.amount * craftsNeeded;
                         
                         if (!demandMap.has(ing.id)) {
                             // Check if this ingredient is itself craftable (intermediate)
                             const subRecipes = findRecipesByResultItem(ing.id);
                             
                             demandMap.set(ing.id, {
                                 id: ing.id,
                                 name: ing.name,
                                 amount: 0,
                                 isSubCraft: subRecipes.length > 0
                             });
                         }
                         
                         const entry = demandMap.get(ing.id)!;
                         entry.amount += totalIngQty;
                     }
                 }
             }

             validItems.push({
                 ...item,
                 isCraftable: recipeFound
             });
        }
        
        // Filter: Only show craftable items in the main list? User said "list all products ... and exclude basic materials (no processing)". 
        // This likely means: Display the GC items that ARE craftable products.
        // And for the demand list, "tell me which semi-finished products are most needed". 
        
        displayedGCItems.value = validItems.filter(i => i.isCraftable);
        
        // Filter demand list: User wants "Semi-finished" mostly.
        const allDemand = Array.from(demandMap.values());
        
        // Let's sort by amount desc
        materialDemandList.value = allDemand
            .filter(d => d.isSubCraft) // Only show intermediate materials per request? "Tell me those 'semi-finished' needs most"
            .sort((a, b) => b.amount - a.amount);
            
    } catch (e) {
        console.error(e);
        ElMessage.error("Calculation failed: " + String(e));
    } finally {
        calculating.value = false;
    }
}
</script>

<style scoped>
.grand-company-page {
    padding: 20px;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.filter-card {
    background: var(--el-bg-color-overlay);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    flex: none;
}

.filter-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.separator {
    margin: 0 5px;
}

.hint-text {
    font-size: 0.9em;
    color: var(--el-text-color-secondary);
    margin: 0;
}

.content-row {
    display: flex;
    gap: 20px;
    flex: auto;
    overflow: hidden; 
}

.section-card {
    background: var(--el-bg-color-overlay);
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.half-width {
    flex: 1;
    overflow: hidden;
}

h3 {
    margin-top: 0;
}
</style>

<fluent locale="zh-CN">
gc-supply-title = 军需品需求统计
level-range = 等级范围
calculate-demand = 计算需求
gc-hint = 筛选指定等级范围的军需品，并统计所需的半成品数量。
gc-items-list = 军需品清单 (可制作)
job = 职业
item-name = 物品名称
status = 状态
craftable = 可制作
gathering-or-other = 采集/其他
material-demand-stats = 半成品需求统计
material-demand-hint = 仅显示需制作的半成品材料，按需求量排序。
material-name = 材料名称
total-demand = 总需求
type = 类型
intermediate = 半成品
raw = 原材料
</fluent>

<fluent locale="zh-TW">
gc-supply-title = 軍需品需求統計
level-range = 等級範圍
calculate-demand = 計算需求
gc-hint = 篩選指定等級範圍的軍需品，並統計所需的半成品數量。
gc-items-list = 軍需品清單 (可製作)
job = 職業
item-name = 物品名稱
status = 狀態
craftable = 可製作
gathering-or-other = 採集/其他
material-demand-stats = 半成品需求統計
material-demand-hint = 僅顯示需製作的半成品材料，按需求量排序。
material-name = 材料名稱
total-demand = 總需求
type = 類型
intermediate = 半成品
raw = 原材料
</fluent>

<fluent locale="en-US">
gc-supply-title = Grand Company Supply Demand
level-range = Level Range
calculate-demand = Calculate
gc-hint = Filter supply items by level and calculate material demand.
gc-items-list = Supply Items (Craftable)
job = Job
item-name = Item Name
status = Status
craftable = Craftable
gathering-or-other = Gathering/Other
material-demand-stats = Intermediate Material Demand
material-demand-hint = Showing only craftable intermediate materials, sorted by demand.
material-name = Material Name
total-demand = Total Demand
type = Type
intermediate = Intermediate
raw = Raw
</fluent>
