<template>
  <div class="stats-chart">
    <div class="chart-header">
      <h3>Rilis per Tahun</h3>
      <div class="chart-legend">
        <span v-for="t in types" :key="t" class="legend-item">
          <span class="legend-dot" :style="{ background: colorFor(t) }"></span>
          {{ labelFor(t) }}
        </span>
      </div>
    </div>
    <div class="chart-bars">
      <div v-for="year in years" :key="year.year" class="chart-column">
        <div class="bars">
          <div
            v-for="t in types"
            :key="t"
            class="bar"
            :style="{
              height: barHeight(year.items.filter(i => i.type === t).length, maxCount) + 'px',
              background: colorFor(t),
            }"
          ></div>
        </div>
        <div class="year-label">{{ year.year }}</div>
        <div class="year-total">{{ year.items.length }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DiscEntry {
  code: string
  title: string
  date: string
  type: string
}

const props = defineProps<{
  items: DiscEntry[]
}>()

const types = computed(() => {
  const s = new Set(props.items.map(i => i.type))
  return [...s].sort()
})

const years = computed(() => {
  const map: Record<string, DiscEntry[]> = {}
  for (const item of props.items) {
    const year = item.date.slice(0, 4)
    if (!map[year]) map[year] = []
    map[year].push(item)
  }
  return Object.entries(map)
    .map(([year, items]) => ({ year, items }))
    .sort((a, b) => a.year.localeCompare(b.year))
})

const maxCount = computed(() => Math.max(...years.value.map(y => y.items.length), 1))

const palette = ['#e8c4a0', '#d4a574', '#c4895a', '#a06840', '#e8d4b0', '#b89070', '#907050']

function colorFor(type: string) {
  const idx = types.value.indexOf(type)
  return palette[idx % palette.length]
}

function labelFor(type: string) {
  return type.replace(/SOD (star - |クリエイト - )?/, '').trim() || type
}

function barHeight(count: number, max: number) {
  return Math.max(4, (count / max) * 120)
}
</script>

<style scoped>
.stats-chart {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 8px;
}

.chart-header h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.legend-item {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 4px;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  min-height: 160px;
}

.chart-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.bars {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2px;
  width: 100%;
  min-height: 130px;
}

.bar {
  width: 60%;
  border-radius: 3px 3px 0 0;
  min-height: 4px;
  transition: height 0.3s;
  opacity: 0.8;
}

.bar:hover {
  opacity: 1;
}

.year-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.year-total {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-2);
}
</style>