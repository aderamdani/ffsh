import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: '本庄鈴 | Suzu Honjo',
  description: 'Library lengkap Suzu Honjo - Biodata, Galeri, Video, Diskografi & Trivia',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap', rel: 'stylesheet' }],
  ],

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aderamdani/ffsh' },
    ],

    footer: {
      message: 'Fan Library for Suzu Honjo 本庄鈴',
      copyright: '© 2024-present ffsh',
    },
  },
})