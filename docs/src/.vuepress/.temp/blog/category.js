export const categoryMap = {"category":{"/":{"path":"/category/","map":{"进阶":{"path":"/category/%E8%BF%9B%E9%98%B6/","keys":["v-a8973ab4","v-61e121e3","v-690b978e","v-43c41046","v-6f074341","v-6bc711c4","v-14b1dcca","v-d00d7670","v-7d41c404"]},"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-4e65ec78","v-c151bf32","v-438ffe52","v-6e19edb7"]},"ES":{"path":"/category/es/","keys":["v-1b2054ed","v-0a26fa0c"]},"基础":{"path":"/category/%E5%9F%BA%E7%A1%80/","keys":["v-dbc50b80","v-20bbce66"]},"vue":{"path":"/category/vue/","keys":["v-453c62a2","v-41d2b164","v-353f8d68","v-54d50a29"]}}}},"tag":{"/":{"path":"/tag/","map":{"css":{"path":"/tag/css/","keys":["v-a8973ab4","v-dbc50b80"]},"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4e65ec78"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-c151bf32"]},"Markdown":{"path":"/tag/markdown/","keys":["v-438ffe52"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-6e19edb7"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7"]},"js":{"path":"/tag/js/","keys":["v-1b2054ed","v-0a26fa0c","v-20bbce66","v-6bc711c4"]},"es":{"path":"/tag/es/","keys":["v-1b2054ed","v-0a26fa0c"]},"promise":{"path":"/tag/promise/","keys":["v-0a26fa0c"]},"html":{"path":"/tag/html/","keys":["v-dbc50b80"]},"ajax":{"path":"/tag/ajax/","keys":["v-61e121e3","v-690b978e"]},"axios":{"path":"/tag/axios/","keys":["v-690b978e"]},"git":{"path":"/tag/git/","keys":["v-43c41046"]},"github":{"path":"/tag/github/","keys":["v-43c41046"]},"node":{"path":"/tag/node/","keys":["v-6f074341"]},"后端":{"path":"/tag/%E5%90%8E%E7%AB%AF/","keys":["v-6f074341"]},"ts":{"path":"/tag/ts/","keys":["v-6bc711c4"]},"webpack":{"path":"/tag/webpack/","keys":["v-14b1dcca","v-d00d7670","v-7d41c404"]},"vue2":{"path":"/tag/vue2/","keys":["v-453c62a2","v-41d2b164","v-353f8d68","v-54d50a29"]},"vue3":{"path":"/tag/vue3/","keys":["v-453c62a2","v-41d2b164"]},"vueRouter":{"path":"/tag/vuerouter/","keys":["v-353f8d68"]},"vueX":{"path":"/tag/vuex/","keys":["v-54d50a29"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
