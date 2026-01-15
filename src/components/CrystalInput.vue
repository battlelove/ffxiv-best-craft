<template>
    <div class="crystal-input-container">
        <h3>{{ $t('crystals') }}</h3>
        <div class="crystal-grid">
            <!-- Header Row -->
            <div class="grid-header"></div>
            <div class="grid-header">{{ $t('shard') }}</div>
            <div class="grid-header">{{ $t('crystal') }}</div>
            <div class="grid-header">{{ $t('cluster') }}</div>

            <!-- Rows for each element -->
            <template v-for="(element, index) in elements" :key="element.name">
                <div class="element-label" :style="{ color: element.color }">
                    <el-icon><component :is="element.icon" /></el-icon>
                    <span class="element-name">{{ $t(element.name) }}</span>
                </div>
                
                <div class="crystal-cell">
                    <el-input-number 
                        v-model="crystalAmounts[element.ids[0]]" 
                        :min="0" 
                        controls-position="right"
                        size="small"
                        @change="(val: number) => updateAmount(element.ids[0], val)"
                    />
                </div>
                <div class="crystal-cell">
                    <el-input-number 
                        v-model="crystalAmounts[element.ids[1]]" 
                        :min="0" 
                        controls-position="right"
                        size="small"
                        @change="(val: number) => updateAmount(element.ids[1], val)"
                    />
                </div>
                <div class="crystal-cell">
                    <el-input-number 
                        v-model="crystalAmounts[element.ids[2]]" 
                        :min="0" 
                        controls-position="right"
                        size="small"
                        @change="(val: number) => updateAmount(element.ids[2], val)"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { ElInputNumber, ElIcon } from 'element-plus';
import { Sunny, Moon, WindPower, Ship, Lightning, Pouring } from '@element-plus/icons-vue'; // Approximate icons
import { useFluent } from 'fluent-vue';
import useInventoryStore from '@/stores/inventory';

const { $t } = useFluent();
const inventoryStore = useInventoryStore();

// Crystal IDs
// Fire: 2, 8, 14
// Ice: 3, 9, 15
// Wind: 4, 10, 16
// Earth: 5, 11, 17
// Lightning: 6, 12, 18
// Water: 7, 13, 19

const elements = [
    { name: 'fire', color: '#ff4d4f', icon: Sunny, ids: [2, 8, 14] },
    { name: 'ice', color: '#40a9ff', icon: Moon, ids: [3, 9, 15] },
    { name: 'wind', color: '#73d13d', icon: WindPower, ids: [4, 10, 16] },
    { name: 'earth', color: '#d4b106', icon: Ship, ids: [5, 11, 17] }, // Ship as anchor/earth?
    { name: 'lightning', color: '#f7ba2a', icon: Lightning, ids: [6, 12, 18] },
    { name: 'water', color: '#1890ff', icon: Pouring, ids: [7, 13, 19] },
];

const crystalAmounts = ref<Record<number, number>>({});

function syncFromStore() {
    elements.forEach(el => {
        el.ids.forEach(id => {
            crystalAmounts.value[id] = inventoryStore.items.get(id) || 0;
        });
    });
}

onMounted(() => {
    syncFromStore();
});

// Watch for external changes (e.g. clear all)
watch(() => inventoryStore.items, () => {
    syncFromStore();
}, { deep: true });

function updateAmount(id: number, val: number) {
    if (val === undefined || val === null) val = 0;
    inventoryStore.setItem(id, val);
}
</script>

<style scoped>
.crystal-input-container {
    background: var(--el-bg-color-overlay);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.crystal-grid {
    display: grid;
    grid-template-columns: 100px 1fr 1fr 1fr;
    gap: 10px;
    align-items: center;
}

.grid-header {
    font-weight: bold;
    text-align: center;
    color: var(--el-text-color-secondary);
}

.element-label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
}

.crystal-cell {
    display: flex;
    justify-content: center;
}

:deep(.el-input-number) {
    width: 100%;
}
</style>

<fluent locale="zh-CN">
crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 风
earth = 土
lightning = 雷
water = 水
</fluent>

<fluent locale="zh-TW">
crystals = 水晶
shard = 碎晶
crystal = 水晶
cluster = 晶簇
fire = 火
ice = 冰
wind = 風
earth = 土
lightning = 雷
water = 水
</fluent>

<fluent locale="en-US">
crystals = Crystals
shard = Shard
crystal = Crystal
cluster = Cluster
fire = Fire
ice = Ice
wind = Wind
earth = Earth
lightning = Lightning
water = Water
</fluent>

<fluent locale="ja-JP">
crystals = クリスタル
shard = シャード
crystal = クリスタル
cluster = クラスター
fire = 火
ice = 氷
wind = 風
earth = 土
lightning = 雷
water = 水
</fluent>
