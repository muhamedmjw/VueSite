export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Muhammed Mustafa\",\"description\":\"A VuePress Site\",\"head\":[[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Pixelify+Sans:wght@400..700&display=swap\"}],[\"style\",{},\"\\n    \\n    body {\\n      background: #1a1a1a !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', serif !important;\\n    }\\n    \\n    h1 {\\n      font-size: 3.5em !important;\\n      font-weight: 400 !important;\\n      text-align: left !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', monospace !important;\\n    }\\n\\n    h2 {\\n      font-size: 2.5em !important;\\n      font-weight: 400 !important;\\n      text-align: left !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', monospace !important;\\n    }\\n\\n    a {\\n      color: #ecececff !important;\\n    }\\n    \\n    a:hover {\\n      color: #b9b9b9ff !important;\\n    }\\n    \\n    #app, .theme-default-content, .page {\\n      max-width: 700px !important;\\n      margin: 0 auto !important;\\n      padding: 20px 0px !important;\\n    }\\n    \\n  \"]],\"locales\":{}}")

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
