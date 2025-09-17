export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/index.html.js"), meta: {"_blog":{"title":"","author":"","date":null,"category":[],"tag":[],"excerpt":""},"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
