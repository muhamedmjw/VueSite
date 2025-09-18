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
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap' }],
    ['style', {}, `
      

      body {
        margin: 0 !important;
        padding: 0 !important;
        background: #1a1a1a !important;
        color: #ecececff !important;
        font-family: 'Noto Serif', serif !important;
      }

      div {
        width: 800px !important;
      }

      h1 {
        padding-top: 12px !important;
        margin: 0 !important;
        margin-bottom: 8px !important;
        font-size: 3em !important;
        font-weight: 700 !important;
        text-align: left !important;
        color: #ecececff !important;
        font-family: 'Noto Serif', serif !important;
      }

      p{
        font-weight: 300 !important;
      }

      /* Style the main navigation links (/posts /about) to be closer to h1 */
      p:first-of-type {
        margin-top: 0 !important;
        margin-bottom: 30px !important;
        padding: 0 !important;
      }

      /* Style the breadcrumb navigation (~ / posts) to be closer to h2 */
      p:nth-of-type(2) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding: 0 !important;
      }

      h1 a {
        margin: 0 !important;
        text-decoration: none !important;
        color: #ecececff !important;
      }

      h2 {
        border: none !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding: 4px 0px !important;
        font-size: 2.5em !important;
        font-weight: 400 !important;
        text-align: left !important;
        color: #ecececff !important;
        font-family: 'Noto Serif', serif !important;
      }

      p a {
        font-weight: 300 !important;
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

      ul li a {
        color: #ecececff !important;
      }

      ul li {
        margin-left: 15px !important;
      }

      ul {
        margin-top: 0 !important;
      }

      ul li p {
        font-weight: 300 !important;
      }
    
    `]
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
})