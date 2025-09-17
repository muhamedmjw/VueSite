import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Muhammed Mustafa\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hi!\",\"slug\":\"hi\",\"link\":\"#hi\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\",\"excerpt\":\"\\n<p><a href=\\\"/posts\\\">posts</a></p>\\n<h2>Hi!</h2>\\n<p>I am a student at Salahaddin University passionate about web development and solving interesting problems. I love learning new things about programming, databases, and web security.</p>\\n<p>Feel free to look at my <a href=\\\"/posts\\\">posts</a>.</p>\\n<!-- \\n<ul class=\\\"social-icons\\\">\\n  <li><a href=\\\"https://linkedin.com/in/your-linkedin\\\" target=\\\"_blank\\\" aria-label=\\\"LinkedIn\\\">🔗</a></li>\\n  <li><a href=\\\"https://github.com/muhamedmjw\\\" target=\\\"_blank\\\" aria-label=\\\"GitHub\\\">🐙</a></li>\\n</ul> -->\"}")
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
