<template>
  <div class="countdown card" v-if="timeLeft">
    <div class="countdown-label">
      <Cake :size="18" class="inline-icon" />
      Ulang Tahun Suzu Honjo berikutnya
    </div>
    <div class="countdown-grid">
      <div class="cd-item">
        <span class="cd-value">{{ timeLeft.days }}</span>
        <span class="cd-label">Hari</span>
      </div>
      <div class="cd-item">
        <span class="cd-value">{{ timeLeft.hours }}</span>
        <span class="cd-label">Jam</span>
      </div>
      <div class="cd-item">
        <span class="cd-value">{{ timeLeft.minutes }}</span>
        <span class="cd-label">Menit</span>
      </div>
      <div class="cd-item">
        <span class="cd-value">{{ timeLeft.seconds }}</span>
        <span class="cd-label">Detik</span>
      </div>
    </div>
    <div class="countdown-date">12 Januari 1997 ({{ age }} tahun)</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Cake } from '@lucide/vue'

const BIRTHDAY = { month: 0, day: 12 }
const now = ref(Date.now())
let timer: ReturnType<typeof setInterval> | null = null

const targetDate = computed(() => {
  const d = new Date(now.value)
  const year = d.getFullYear()
  const target = new Date(year, BIRTHDAY.month, BIRTHDAY.day)
  if (target.getTime() < d.getTime()) {
    target.setFullYear(year + 1)
  }
  return target
})

const timeLeft = computed(() => {
  const diff = targetDate.value.getTime() - now.value
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
})

const age = computed(() => {
  const birth = new Date(1997, 0, 12)
  const d = new Date(now.value)
  let a = d.getFullYear() - birth.getFullYear()
  const m = d.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && d.getDate() < birth.getDate())) a--
  return a
})

onMounted(() => { timer = setInterval(() => { now.value = Date.now() }, 1000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.countdown {
  text-align: center;
  padding: 24px;
}

.countdown-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.inline-icon {
  color: var(--vp-c-brand-2);
}

.countdown-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 12px;
}

.cd-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cd-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand-2);
  line-height: 1;
  min-width: 50px;
}

.cd-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.countdown-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>