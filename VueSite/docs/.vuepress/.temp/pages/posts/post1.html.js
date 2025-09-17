import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/post1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/post1.html\",\"title\":\"My First Post\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"My First Post\",\"date\":\"2024-01-15T00:00:00.000Z\",\"author\":\"Muhammed Mustafa\",\"category\":[\"Web Development\"],\"tag\":[\"JavaScript\",\"VuePress\"]},\"headers\":[{\"level\":2,\"title\":\"What I'm Learning\",\"slug\":\"what-i-m-learning\",\"link\":\"#what-i-m-learning\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"c342d4297c8e2516d2c6e46a04887ec6cbc7a0b2\",\"time\":1758149256000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Changed styling 2\"},{\"hash\":\"e0191d05c20ae6fcadd8b0d751e2981ad8c94acc\",\"time\":1758145621000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Removed the top navigation bar\"},{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"posts/post1.md\"}")
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
