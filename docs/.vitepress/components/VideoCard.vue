<template>
  <div class="video-list">
    <div
      v-for="(video, idx) in videos"
      :key="idx"
      class="video-card card fade-in"
      :class="`fade-in-delay-${idx % 4}`"
    >
      <a :href="video.url" target="_blank" rel="noopener" class="video-thumb">
        <img :src="getThumb(video)" :alt="video.title" loading="lazy" />
        <div class="play-icon">▶</div>
        <div class="video-source">{{ video.source }}</div>
      </a>
      <div class="video-info">
        <h4>{{ video.title }}</h4>
        <div class="video-meta">
          <span class="tag">{{ video.code }}</span>
          <span class="tag tag-primary">{{ video.type }}</span>
          <span v-if="video.date" class="video-date">{{ video.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface VideoEntry {
  title: string
  code: string
  url: string
  source: 'supjav' | 'missav' | 'external'
  type: string
  date?: string
  thumb?: string
}

const props = defineProps<{
  videos: VideoEntry[]
}>()

function getThumb(video: VideoEntry): string {
  if (video.thumb) return video.thumb
  return `https://placehold.co/320x240/1a1a35/e8c4a0?text=${video.code}`
}
</script>

<style scoped>
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.video-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
}

.video-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.video-thumb:hover img {
  transform: scale(1.05);
}

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  transition: background 0.2s, transform 0.2s;
}

.video-thumb:hover .video-icon {
  background: var(--vp-c-brand-3);
  transform: translate(-50%, -50%) scale(1.1);
}

.video-source {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  color: var(--vp-c-brand-2);
  letter-spacing: 0.05em;
}

.video-info {
  padding: 12px 0;
}

.video-info h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.video-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.video-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-left: auto;
}
</style>