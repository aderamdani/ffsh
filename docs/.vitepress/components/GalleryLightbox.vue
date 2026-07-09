<template>
  <div class="gallery">
    <div class="gallery-grid">
      <div
        v-for="(img, idx) in images"
        :key="idx"
        class="gallery-item fade-in"
        :class="`fade-in-delay-${idx % 4}`"
        @click="open(idx)"
      >
        <img :src="getImagePath(img)" :alt="img.alt" loading="lazy" />
        <div class="gallery-overlay">
          <span>{{ img.title }}</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showLightbox" class="lightbox" @click.self="close">
        <button class="lightbox-close" @click="close">✕</button>
        <button class="lightbox-nav lightbox-prev" @click="prev">‹</button>
        <div class="lightbox-content">
          <img :src="getImagePath(images[currentIdx])" :alt="images[currentIdx].title" />
          <div class="lightbox-info">
            <span>{{ images[currentIdx].title }}</span>
          </div>
        </div>
        <button class="lightbox-nav lightbox-next" @click="next">›</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

function getImagePath(img: GalleryImage) {
  return img.src.startsWith('http') ? img.src : `/images/suzu-honjo/${img.src}`
}

function open(idx: number) {
  currentIdx.value = idx
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
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
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
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
  padding: 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  font-size: 0.85rem;
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