import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"Muhammed Mustafa\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"About Me\",\"slug\":\"about-me\",\"link\":\"#about-me\",\"children\":[{\"level\":3,\"title\":\"What I Do\",\"slug\":\"what-i-do\",\"link\":\"#what-i-do\",\"children\":[]},{\"level\":3,\"title\":\"Current Focus\",\"slug\":\"current-focus\",\"link\":\"#current-focus\",\"children\":[]},{\"level\":3,\"title\":\"Get in Touch\",\"slug\":\"get-in-touch\",\"link\":\"#get-in-touch\",\"children\":[]}]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"about/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
