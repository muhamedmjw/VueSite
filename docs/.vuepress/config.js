import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: '',
  description: 'A VuePress Site',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap' }],
    ],

  markdown: {
    anchor: false
  },

  theme: defaultTheme({
    navbar: false,
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    smoothScroll: true,
  }),

  bundler: viteBundler(),

  base: '/',
})