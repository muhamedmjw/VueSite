export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Web Development\":{\"path\":\"/category/web-development/\",\"indexes\":[0]},\"Database\":{\"path\":\"/category/database/\",\"indexes\":[1]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"JavaScript\":{\"path\":\"/tag/javascript/\",\"indexes\":[0]},\"VuePress\":{\"path\":\"/tag/vuepress/\",\"indexes\":[0]},\"SQL\":{\"path\":\"/tag/sql/\",\"indexes\":[1]},\"Database Design\":{\"path\":\"/tag/database-design/\",\"indexes\":[1]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

