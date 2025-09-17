import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Muhammed Mustafa\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hi!\",\"slug\":\"hi\",\"link\":\"#hi\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"\\n<p><a href=\\\"/posts\\\">/posts</a> <a href=\\\"/about\\\">/about</a></p>\\n<h2>Hi!</h2>\\n<p>I am a student at Salahaddin University passionate about web development and solving interesting problems. I love learning new things about programming, databases, and web security.</p>\\n<p>Feel free to look at my <a href=\\\"/posts\\\">posts</a>.</p>\"}")
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
