import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/post2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/post2.html\",\"title\":\"Muhammed Mustafa\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Post 2\",\"slug\":\"post-2\",\"link\":\"#post-2\",\"children\":[]}],\"git\":{\"contributors\":[{\"name\":\"Muhammed\",\"username\":\"Muhammed\",\"email\":\"mhammd.best12@gmail.com\",\"commits\":5,\"url\":\"https://github.com/Muhammed\"}],\"changelog\":[{\"hash\":\"0b5189cd95e27f359dfb1e6b26f06d694d9553d6\",\"time\":1758157025000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Edited the markdown files 2\"},{\"hash\":\"c8bcccb2469b6b3f9643245b78705214b7d3b244\",\"time\":1758155598000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Edited the markdown files\"},{\"hash\":\"c342d4297c8e2516d2c6e46a04887ec6cbc7a0b2\",\"time\":1758149256000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Changed styling 2\"},{\"hash\":\"e0191d05c20ae6fcadd8b0d751e2981ad8c94acc\",\"time\":1758145621000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"Removed the top navigation bar\"},{\"hash\":\"b9e3c63a7e5c540fe21f2c01c505a2da3e98c86f\",\"time\":1758130648000,\"email\":\"mhammd.best12@gmail.com\",\"author\":\"Muhammed\",\"message\":\"First commit\"}]},\"filePathRelative\":\"posts/post2.md\"}")
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
