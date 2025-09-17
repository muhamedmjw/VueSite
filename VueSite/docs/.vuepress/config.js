import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Muhammed Mustafa',
  description: 'A VuePress Site',

  head: [
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Pixelify+Sans:wght@400..700&display=swap' }],
  ['style', {}, `
    
    body {
      background: #1a1a1a !important;
      color: #ecececff !important;
      font-family: 'Noto Serif', serif !important;
    }
    
    h1 {
      font-size: 3.5em !important;
      font-weight: 400 !important;
      text-align: left !important;
      color: #ecececff !important;
      font-family: 'Noto Serif', monospace !important;
    }

    h2 {
      font-size: 2.5em !important;
      font-weight: 400 !important;
      text-align: left !important;
      color: #ecececff !important;
      font-family: 'Noto Serif', monospace !important;
    }

    a {
      color: #ecececff !important;
    }
    
    a:hover {
      color: #b9b9b9ff !important;
    }
    
    #app, .theme-default-content, .page {
      max-width: 700px !important;
      margin: 0 auto !important;
      padding: 20px 0px !important;
    }
    
  `]
],

  theme: defaultTheme({
    navbar: false,
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    smoothScroll: true,
    
  }),


  bundler: viteBundler(),
})