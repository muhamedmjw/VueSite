import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Muhammed Mustafa\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello!\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":6,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"c8bcccb2469b6b3f9643245b78705214b7d3b244\",\"time\":1758155598000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Edited the markdown files\"},{\"hash\":\"530e5d9575058e3d414a3b796738ef95f3495e95\",\"time\":1758151749000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Changed styling 3\"},{\"hash\":\"c342d4297c8e2516d2c6e46a04887ec6cbc7a0b2\",\"time\":1758149256000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Changed styling 2\"},{\"hash\":\"d8e187e6ee106cdb333054c33cfab8a98934c25a\",\"time\":1758146469000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Changed styling\"},{\"hash\":\"e0191d05c20ae6fcadd8b0d751e2981ad8c94acc\",\"time\":1758145621000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Removed the top navigation bar\"},{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"README.md\"}")
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
