<template>
  <div class="gallery">
    <div class="filter-tabs">
      <button
        v-for="tab in filterTabs"
        :key="tab.key"
        :class="['filter-tab', { active: activeFilter === tab.key }]"
        @click="activeFilter = tab.key"
      >
        {{ tab.label }}
        <span class="filter-count">{{ tab.count }}</span>
      </button>
    </div>

    <div class="gallery-grid">
      <div
        v-for="(img, idx) in filteredImages"
        :key="idx"
        class="gallery-item fade-in"
        :class="`fade-in-delay-${idx % 4}`"
        @click="open(images.indexOf(img))"
      >
        <img :src="getImagePath(img)" :alt="img.alt" loading="lazy" />
        <div class="gallery-overlay">
          <span>{{ img.title }}</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showLightbox" class="lightbox" @click.self="close" ref="lightboxEl" role="dialog" aria-modal="true" aria-label="Galeri foto lightbox">
        <button class="lightbox-close" @click="close" aria-label="Tutup">✕</button>
        <button class="lightbox-nav lightbox-prev" @click="prev" aria-label="Sebelumnya">‹</button>
        <div class="lightbox-content">
          <img :src="getImagePath(images[currentIdx])" :alt="images[currentIdx].title" />
          <div class="lightbox-info">
            <span>{{ images[currentIdx].title }}</span>
          </div>
        </div>
        <button class="lightbox-nav lightbox-next" @click="next" aria-label="Berikutnya">›</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'

export interface GalleryImage {
  src: string
  title: string
  alt?: string
  category?: string
}

const props = defineProps<{
  images: GalleryImage[]
}>()

const showLightbox = ref(false)
const currentIdx = ref(0)
const activeFilter = ref('all')
const lightboxEl = ref<HTMLElement>()

const filterTabs = computed(() => {
  const counts: Record<string, number> = { all: props.images.length }
  for (const img of props.images) {
    const key = img.category || 'uncategorized'
    counts[key] = (counts[key] || 0) + 1
  }
  return Object.entries(counts).map(([key, count]) => ({
    key,
    label: key === 'all' ? 'Semua' : key.charAt(0).toUpperCase() + key.slice(1),
    count,
  }))
})

const filteredImages = computed(() => {
  if (activeFilter.value === 'all') return props.images
  return props.images.filter(img => (img.category || 'uncategorized') === activeFilter.value)
})

function getImagePath(img: GalleryImage) {
  return img.src.startsWith('http') ? img.src : `/images/suzu-honjo/${img.src}`
}

function open(idx: number) {
  currentIdx.value = idx
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => lightboxEl.value?.focus())
}

function close() {
  showLightbox.value = false
  document.body.style.overflow = ''
}

function next() {
  currentIdx.value = (currentIdx.value + 1) % props.images.length
}

function prev() {
  currentIdx.value = (currentIdx.value - 1 + props.images.length) % props.images.length
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

watch(showLightbox, (val) => {
  if (val) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.filter-tab {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
}

.filter-tab:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}

.filter-tab.active {
  background: rgba(212, 165, 116, 0.15);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
}

.filter-count {
  font-size: 0.75rem;
  opacity: 0.7;
  background: var(--vp-c-bg-alt);
  padding: 1px 6px;
  border-radius: 8px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 24px 0;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  border: 1px solid var(--vp-c-border);
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  font-size: 0.75rem;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-info {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 12px;
  text-align: center;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.lightbox-close:hover { opacity: 1; }

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 48px;
  cursor: pointer;
  padding: 20px;
  opacity: 0.5;
  transition: opacity 0.2s;
  z-index: 10;
}

.lightbox-nav:hover { opacity: 1; }
.lightbox-prev { left: 10px; }
.lightbox-next { right: 10px; }
</style>