import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import GalleryLightbox from '../components/GalleryLightbox.vue'
import TimelineTimeline from '../components/TimelineTimeline.vue'
import VideoCard from '../components/VideoCard.vue'
import TriviaCard from '../components/TriviaCard.vue'
import StatsChart from '../components/StatsChart.vue'
import QuoteBanner from '../components/QuoteBanner.vue'
import BirthdayCountdown from '../components/BirthdayCountdown.vue'
import ParticlesPlugin from './plugin'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('GalleryLightbox', GalleryLightbox)
    app.component('TimelineTimeline', TimelineTimeline)
    app.component('VideoCard', VideoCard)
    app.component('TriviaCard', TriviaCard)
    app.component('StatsChart', StatsChart)
    app.component('QuoteBanner', QuoteBanner)
    app.component('BirthdayCountdown', BirthdayCountdown)
    app.use(ParticlesPlugin)
  },
}