<template>
  <div class="timeline">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="timeline-item fade-in"
      :class="`fade-in-delay-${idx % 4}`"
    >
      <div class="timeline-dot"></div>
      <div class="timeline-content card">
        <div class="timeline-date">{{ item.date }}</div>
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <span v-if="item.tag" class="tag">{{ item.tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TimelineEvent {
  date: string
  title: string
  description: string
  tag?: string
}

defineProps<{
  items: TimelineEvent[]
}>()
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
  margin: 32px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--vp-c-brand-2), var(--vp-c-brand-1), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 28px;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-brand-2);
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-2);
  z-index: 1;
}

.timeline-content {
  padding: 16px 20px;
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--vp-c-brand-3);
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
}

.timeline-content h4 {
  margin: 4px 0 8px;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.timeline-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.timeline-content .tag {
  margin-top: 8px;
}
</style>