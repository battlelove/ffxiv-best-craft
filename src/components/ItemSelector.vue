<template>
    <el-dialog
        v-model="visible"
        :title="$t('select-recipe')"
        width="800px"
        append-to-body
        @closed="handleClose"
    >
        <div class="search-bar">
            <el-input
                v-model="searchQuery"
                :placeholder="$t('search-item-placeholder')"
                style="width: 300px; margin-right: 10px"
                @keyup.enter="handleSearch"
                clearable
            />
            <el-button type="primary" @click="handleSearch" :loading="loading">{{ $t('search') }}</el-button>
        </div>

        <el-table
            :data="results"
            style="width: 100%; margin-top: 20px"
            height="400"
            v-loading="loading"
            @row-click="handleSelect"
            stripe
            highlight-current-row
        >
            <el-table-column prop="icon" width="60">
                <template #default="scope">
                    <!-- Placeholder for icon if available, or just use a generic one -->
                    <!-- We might need image URL logic later. For now, empty or generic -->
                    <el-icon><Goods /></el-icon>
                </template>
            </el-table-column>
            <el-table-column prop="name" :label="$t('item-name')" />
            <el-table-column prop="item_id" label="ID" width="100" />
            <el-table-column prop="job" :label="$t('job')" width="100">
                <template #default="scope">
                    {{ scope.row.job_code || scope.row.job_name || '-' }}
                </template>   
            </el-table-column>
             <el-table-column prop="rlv" :label="$t('level')" width="80" />
        </el-table>

        <div class="pagination-container">
             <el-pagination
                v-if="results.length > 0"
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                v-model:current-page="currentPage"
                @current-change="handlePageChange"
            />
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { 
    ElDialog, 
    ElInput, 
    ElButton, 
    ElTable, 
    ElTableColumn, 
    ElIcon,
    ElPagination,
    ElMessage
} from 'element-plus';
import { Goods } from '@element-plus/icons-vue';
import { useFluent } from 'fluent-vue';
import useSettingsStore from '@/stores/settings';

const { $t } = useFluent();
const settingsStore = useSettingsStore();

const props = defineProps<{
    modelValue: boolean;
    initialQuery?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'select', item: { id: number; name: string; recipeId: number }): void;
}>();

const visible = ref(false);
const searchQuery = ref('');
const loading = ref(false);
const results = ref<any[]>([]);
const total = ref(0);
const pageSize = 10; // API page size usually fixed or default
const currentPage = ref(1);

// Sync modelValue with visible
watch(() => props.modelValue, (val) => {
    visible.value = val;
    if (val && props.initialQuery && props.initialQuery !== searchQuery.value) {
        searchQuery.value = props.initialQuery;
        handleSearch();
    }
});

watch(visible, (val) => {
    emit('update:modelValue', val);
});

async function handleSearch() {
    if (!searchQuery.value) return;
    currentPage.value = 1;
    await fetchResults();
}

async function handlePageChange(page: number) {
    currentPage.value = page;
    await fetchResults();
}

async function fetchResults() {
    loading.value = true;
    try {
        const ds = await settingsStore.getDataSource();
        // recipeTable(page, query, job?, rlv_min?, rlv_max?, category?)
        const res = await ds.recipeTable(currentPage.value, searchQuery.value);
        results.value = res.results.map(r => ({
            ...r,
            // Add derived fields if necessary
        }));
        total.value = res.totalPages * 10; // Estimation if total items count is unknown, but totalPages is known.
        // Wait, RecipeSourceResult has `totalPages` but maybe not `totalCount`.
        // Pagination component needs total count.
        // If API doesn't give total count, we can mimic "Infinite Scroll" or just rely on totalPages * 10 (assuming 10 per page).
        
    } catch (e) {
        ElMessage.error($t('search-error') + ': ' + String(e));
    } finally {
        loading.value = false;
    }
}

function handleSelect(row: any) {
    emit('select', { id: row.item_id, name: row.name, recipeId: row.id });
    visible.value = false;
}

function handleClose() {
    // Clear results?
    // results.value = [];
}
</script>

<style scoped>
.search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
</style>

<fluent locale="zh-CN">
select-recipe = 选择配方
search-item-placeholder = 搜索物品名称...
search = 搜索
item-name = 物品名称
job = 职业
level = 等级
search-error = 搜索失败
</fluent>

<fluent locale="zh-TW">
select-recipe = 選擇配方
search-item-placeholder = 搜尋物品名稱...
search = 搜尋
item-name = 物品名稱
job = 職業
level = 等級
search-error = 搜尋失敗
</fluent>

<fluent locale="en-US">
select-recipe = Select Recipe
search-item-placeholder = Search item name...
search = Search
item-name = Item Name
job = Job
level = Level
search-error = Search failed
</fluent>

<fluent locale="ja-JP">
select-recipe = レシピを選択
search-item-placeholder = アイテム名を検索...
search = 検索
item-name = アイテム名
job = クラス
level = レベル
search-error = 検索失敗
</fluent>
