<template>
  <div class="section-divider">
    <component :is="iconComponent" :size="16" class="divider-icon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Camera, Calendar, Star, Sparkles, HelpCircle } from '@lucide/vue'

const props = defineProps<{
  icon?: string
}>()

const icons: Record<string, any> = { camera: Camera, calendar: Calendar, star: Star, sparkles: Sparkles }

const iconComponent = computed(() => icons[props.icon || ''] || HelpCircle)
</script>

<style scoped>
.section-divider {
  text-align: center;
  margin: 40px 0;
  position: relative;
}

.section-divider::before,
.section-divider::after {
  content: '—';
  color: var(--vp-c-text-3);
  margin: 0 12px;
  opacity: 0.5;
}

.divider-icon {
  color: var(--vp-c-brand-3);
  vertical-align: middle;
  opacity: 0.6;
}
</style>