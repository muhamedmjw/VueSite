export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Muhammed Mustafa\",\"description\":\"A VuePress Site\",\"head\":[[\"style\",{},\"\\n      body {\\n        background: #1a1a1a !important;\\n        color: #e0e0e0 !important;\\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;\\n      }\\n      \\n      h1 {\\n        font-size: 2.5em !important;\\n        font-weight: 400 !important;\\n        text-align: left !important;\\n        color: #f5f5f5 !important;\\n      }\\n      \\n      #app, .theme-default-content, .page {\\n        max-width: 700px !important;\\n        margin: 0 auto !important;\\n        padding: 60px 20px !important;\\n      }\\n      \\n      a {\\n        color: #d0d0d0 !important;\\n      }\\n      \\n      a:hover {\\n        color: #fff !important;\\n      }\\n    \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
