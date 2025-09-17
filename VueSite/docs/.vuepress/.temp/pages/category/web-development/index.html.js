import comp from "D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/category/web-development/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/web-development/\",\"title\":\"Category Web Development\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category Web Development\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Web Development\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
