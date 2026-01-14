<template>
    <div ref="chartRef" class="trend-chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'; // Added computed import
import * as d3 from 'd3';
import useCostStore from '@/stores/cost';

const props = defineProps<{
    itemId: number
}>();

const costStore = useCostStore();
const chartRef = ref<HTMLElement | null>(null);

const historyData = computed(() => {
    return costStore.historyCache.get(props.itemId);
});

watch(historyData, () => {
    drawChart();
});

onMounted(() => {
    drawChart();
    window.addEventListener('resize', drawChart);
});

function drawChart() {
    if (!chartRef.value || !historyData.value || !historyData.value.entries) return;
    
    const data = historyData.value.entries.map(e => ({
        date: new Date(e.timestamp * 1000),
        price: e.pricePerUnit
    })).sort((a, b) => a.date.getTime() - b.date.getTime());

    if (data.length === 0) return;

    // Clear previous
    d3.select(chartRef.value).selectAll('*').remove();

    const width = 180;
    const height = 40;
    const margin = { top: 2, right: 2, bottom: 2, left: 2 };

    const svg = d3.select(chartRef.value)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.date) as [Date, Date])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.price) || 0, d3.max(data, d => d.price) || 0])
        .range([height - margin.bottom, margin.top]);

    const line = d3.line<{date: Date, price: number}>()
        .x(d => x(d.date))
        .y(d => y(d.price))
        .curve(d3.curveMonotoneX);

    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#8884d8') // Purple-ish
        .attr('stroke-width', 1.5)
        .attr('d', line);
        
    // Optional: Add Min/Max markers or current price line?
    // Keep it simple sparkline for now.
}
</script>

<style scoped>
.trend-chart {
    width: 100%;
    height: 40px;
}
</style>
