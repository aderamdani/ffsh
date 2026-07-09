import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: '本庄鈴 | Suzu Honjo',
  description: 'Library lengkap Suzu Honjo - Biodata, Galeri, Video, Diskografi & Trivia',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap', rel: 'stylesheet' }],
    ['meta', { property: 'og:title', content: '本庄鈴 | Suzu Honjo - Fan Library' }],
    ['meta', { property: 'og:description', content: 'Library lengkap Suzu Honjo - Biodata, Galeri, Video, Diskografi & Trivia' }],
    ['meta', { property: 'og:image', content: '/images/suzu-honjo/og-image.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  sitemap: {
    hostname: 'https://ffsh-lilac.vercel.app',
  },

  themeConfig: {
    logo: '/images/suzu-honjo/logo.svg',
    siteTitle: false,

    nav: [
      { text: 'Beranda', link: '/' },
      { text: '本庄鈴', items: [
        { text: 'Biodata', link: '/suzu-honjo/biodata' },
        { text: 'Galeri Foto', link: '/suzu-honjo/galeri' },
        { text: 'Video', link: '/suzu-honjo/video' },
        { text: 'Diskografi', link: '/suzu-honjo/diskografi' },
        { text: 'Timeline', link: '/suzu-honjo/timeline' },
        { text: 'Trivia', link: '/suzu-honjo/trivia' },
      ]},
    ],

    sidebar: {
      '/suzu-honjo/': [
        {
          text: '本庄鈴',
          items: [
            { text: 'Biodata', link: '/suzu-honjo/biodata' },
            { text: 'Galeri Foto', link: '/suzu-honjo/galeri' },
            { text: 'Video', link: '/suzu-honjo/video' },
            { text: 'Diskografi', link: '/suzu-honjo/diskografi' },
            { text: 'Timeline', link: '/suzu-honjo/timeline' },
            { text: 'Trivia', link: '/suzu-honjo/trivia' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aderamdani/ffsh' },
    ],

    footer: {
      message: 'Fan Library for Suzu Honjo 本庄鈴',
      copyright: '© 2024-present ffsh',
    },

    editLink: {
      pattern: 'https://github.com/aderamdani/ffsh/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub',
    },
  },
})