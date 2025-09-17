export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Muhammed Mustafa\",\"description\":\"A VuePress Site\",\"head\":[[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap\"}],[\"style\",{},\"\\n    \\n\\n    body {\\n      margin: 0 !important;\\n      padding: 0 !important;\\n      background: #1a1a1a !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', serif !important;\\n    }\\n\\n    div {\\n      width: 800px !important;\\n    }\\n\\n    h1 {\\n      padding-top: 12px !important;\\n      margin: 0 !important;\\n      margin-bottom: 8px !important;\\n      font-size: 3em !important;\\n      font-weight: 700 !important;\\n      text-align: left !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', serif !important;\\n    }\\n\\n    p{\\n      font-weight: 300 !important;\\n    }\\n\\n    /* Style the main navigation links (/posts /about) to be closer to h1 */\\n    p:first-of-type {\\n      margin-top: 0 !important;\\n      margin-bottom: 25px !important;\\n      padding: 0 !important;\\n    }\\n\\n    /* Style the breadcrumb navigation (~ / posts) to be closer to h2 */\\n    p:nth-of-type(2) {\\n      margin-top: 0 !important;\\n      margin-bottom: 0 !important;\\n      padding: 0 !important;\\n    }\\n\\n    h1 a {\\n      margin: 0 !important;\\n      text-decoration: none !important;\\n    }\\n\\n    h2 {\\n      border: none !important;\\n      margin-top: 0 !important;\\n      margin-bottom: 8px !important;\\n      font-size: 2.5em !important;\\n      font-weight: 400 !important;\\n      text-align: left !important;\\n      color: #ecececff !important;\\n      font-family: 'Noto Serif', serif !important;\\n    }\\n\\n    a {\\n      color: #ecececff !important;\\n    }\\n    \\n    a:hover {\\n      color: #b9b9b9ff !important;\\n    }\\n    \\n    #app, .theme-default-content, .page {\\n      max-width: 700px !important;\\n      margin: 0 auto !important;\\n      padding: 20px 0px !important;\\n    }\\n   \\n  \"]],\"locales\":{}}")

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
