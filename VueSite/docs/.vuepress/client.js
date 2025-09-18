import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // Import your CSS file
    import('./styles/style.css')
  },
})