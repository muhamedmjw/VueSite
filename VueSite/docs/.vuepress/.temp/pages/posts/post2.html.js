import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/post2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/post2.html\",\"title\":\"Learning Database Design\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Learning Database Design\",\"date\":\"2024-01-20T00:00:00.000Z\",\"author\":\"Muhammed Mustafa\",\"category\":[\"Database\"],\"tag\":[\"SQL\",\"Database Design\"]},\"headers\":[{\"level\":2,\"title\":\"Key Concepts\",\"slug\":\"key-concepts\",\"link\":\"#key-concepts\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"e0191d05c20ae6fcadd8b0d751e2981ad8c94acc\",\"time\":1758145621000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Removed the top navigation bar\"},{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"posts/post2.md\"}")
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
