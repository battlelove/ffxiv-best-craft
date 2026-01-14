<template>
    <div class="market-advice" v-if="visible">
        <el-alert
            v-if="loading"
            :title="$t('checking-prices')"
            type="info"
            show-icon
            :closable="false"
        />
        <el-alert
            v-else-if="error"
            :title="$t('price-check-failed')"
            type="warning"
            show-icon
            @close="visible = false"
        />
        <el-alert
            v-else
            :title="adviceTitle"
            :type="adviceType"
            show-icon
            :closable="true"
            @close="visible = false"
        >
            <template #default>
                <div class="advice-content">
                    <span>
                        {{ $t('market-price') }}: <b>{{ formatGil(marketPrice) }}</b>
                    </span>
                    <el-divider direction="vertical" />
                    <span>
                        {{ $t('crafting-cost') }}: <b>{{ formatGil(craftingCost) }}</b>
                    </span>
                    <el-divider direction="vertical" />
                    <span>
                        {{ $t('profit') }}: <b>{{ formatGil(profit) }}</b>
                    </span>
                    <el-button link type="primary" size="small" @click="openProfitCalculator" style="margin-left: 10px">
                        {{ $t('details') }} &gt;
                    </el-button>
                </div>
            </template>
        </el-alert>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useFluent } from 'fluent-vue';
import useSettingsStore from '@/stores/settings';
import useCostStore from '@/stores/cost';
import { useRouter } from 'vue-router';

const props = defineProps<{
    itemId: number;
    recipeId: number;
}>();

const { $t } = useFluent();
const settingsStore = useSettingsStore();
const costStore = useCostStore();
const router = useRouter();

const visible = ref(true);
const loading = ref(true);
const error = ref(false);

const marketPrice = ref(0);
const craftingCost = ref(0);

const profit = computed(() => {
    // Simple profit: Price - Cost (Tax?)
    // User asked "Buy or Craft".
    // If Cost < Price * 0.95 (Tax), then Craft.
    // If Cost > Price, then Buy.
    return (marketPrice.value * 0.95) - craftingCost.value;
});

const adviceType = computed(() => {
    if (profit.value > 0) return 'success'; // Crafting is good
    return 'warning'; // Buying is better (Profit negative)
});

const adviceTitle = computed(() => {
    if (profit.value > 0) return $t('advice-craft');
    return $t('advice-buy');
});

function formatGil(val: number) {
    return Math.floor(val).toLocaleString();
}

function openProfitCalculator() {
    // Navigate to Profit Calculator with query?
    // Current Profit Page implementation uses internal state.
    // I should update Profit Page to accept query param `itemId` if I want deep linking.
    // But for now, let's just go there.
    router.push({ path: '/profit' }); 
    // Ideally pass item name but I don't have it easily here without fetching itemInfo.
    // Actually I can pass itemId if I update ProfitCalculator to handle it.
}

async function check() {
    loading.value = true;
    error.value = false;
    visible.value = true;
    
    try {
        const ds = await settingsStore.getDataSource();
        
        // 1. Get Ingredients
        const ingredients = await ds.recipesIngredients(props.recipeId);
        
        // 2. Prepare IDs: Product + Ingredients
        const ids = [props.itemId, ...ingredients.map(i => i.ingredient_id)];
        
        // 3. Fetch Prices
        await costStore.fetchPrices(ids);
        
        // 4. Calculate
        // Product Price (Min of HQ/NQ? Usually comparing for personal use -> assume NQ unless specified. 
        // But for Profit -> assume Product HQ if possible?
        // Let's use costStore logic.
        
        const productInfo = costStore.getItemPriceInfo(props.itemId);
        marketPrice.value = productInfo?.effectivePrice || 0;
        
        // If effective price is 0 (no listings), maybe fallback to something?
        // If 0, we can't accept "Buy", so "Craft" might be default or "Unknown".
        
        let cost = 0;
        for (const ing of ingredients) {
             const p = costStore.getPrice(ing.ingredient_id);
             cost += p * ing.amount;
        }
        craftingCost.value = cost;
        
        if (marketPrice.value === 0 && cost === 0) {
            // Failed to fetch or invalid
            error.value = true;
        }
        
    } catch (e) {
        console.error(e);
        error.value = true;
    } finally {
        loading.value = false;
    }
}

watch(() => props.recipeId, () => {
    check();
}, { immediate: true });

</script>

<style scoped>
.market-advice {
    margin: 10px 0;
}
.advice-content {
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>

<fluent locale="zh-CN">
checking-prices = 正在查询市场价格...
price-check-failed = 无法获取市场数据
advice-buy = 建议直接购买 (购买更便宜)
advice-craft = 建议制作 (制作更便宜)
market-price = 市场价
crafting-cost = 成本
profit = 预计利润
details = 详情
</fluent>

<fluent locale="zh-TW">
checking-prices = 正在查詢市場價格...
price-check-failed = 無法獲取市場數據
advice-buy = 建議直接購買 (購買更便宜)
advice-craft = 建議製作 (製作更便宜)
market-price = 市場價
crafting-cost = 成本
profit = 預計利潤
details = 詳情
</fluent>

<fluent locale="en-US">
checking-prices = Checking market prices...
price-check-failed = Failed to fetch market data
advice-buy = Suggest Buying (Cheaper to Buy)
advice-craft = Suggest Crafting (Cheaper to Craft)
market-price = Market Price
crafting-cost = Cost
profit = Est. Profit
details = Details
</fluent>
