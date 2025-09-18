export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/posts/post1.html", { loader: () => import(/* webpackChunkName: "posts_post1.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/post1.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/posts/post2.html", { loader: () => import(/* webpackChunkName: "posts_post2.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/post2.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/posts/index.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"Muhammed Mustafa"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Codes/Vue/VueSite/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
