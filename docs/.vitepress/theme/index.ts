import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import GalleryLightbox from '../components/GalleryLightbox.vue'
import TimelineTimeline from '../components/TimelineTimeline.vue'
import VideoCard from '../components/VideoCard.vue'
import TriviaCard from '../components/TriviaCard.vue'
import ParticlesPlugin from './plugin'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('GalleryLightbox', GalleryLightbox)
    app.component('TimelineTimeline', TimelineTimeline)
    app.component('VideoCard', VideoCard)
    app.component('TriviaCard', TriviaCard)
    app.use(ParticlesPlugin)
  },
}