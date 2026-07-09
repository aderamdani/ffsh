<template>
  <div class="trivia-grid">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="trivia-item card fade-in"
      :class="`fade-in-delay-${idx % 4}`"
    >
      <div class="trivia-icon">{{ item.icon }}</div>
      <div class="trivia-text">
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TriviaEntry {
  icon: string
  title: string
  content: string
}

defineProps<{
  items: TriviaEntry[]
}>()
</script>

<style scoped>
.trivia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.trivia-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px;
}

.trivia-icon {
  font-size: 1.8rem;
  line-height: 1;
  flex-shrink: 0;
  width: 40px;
  text-align: center;
}

.trivia-text h4 {
  margin: 0 0 6px;
  font-size: 0.95rem;
  color: var(--vp-c-brand-2);
}

.trivia-text p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>