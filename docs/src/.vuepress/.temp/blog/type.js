export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-a8973ab4","v-1b2054ed","v-0a26fa0c","v-453c62a2","v-41d2b164","v-353f8d68","v-54d50a29","v-61e121e3","v-690b978e","v-43c41046","v-6f074341","v-6bc711c4","v-14b1dcca","v-d00d7670","v-7d41c404","v-dbc50b80","v-20bbce66","v-6e19edb7","v-184f4da6","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-2a2f2812"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-c151bf32"]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-a8973ab4","v-1b2054ed","v-0a26fa0c","v-453c62a2","v-41d2b164","v-353f8d68","v-54d50a29","v-61e121e3","v-690b978e","v-43c41046","v-6f074341","v-6bc711c4","v-14b1dcca","v-d00d7670","v-7d41c404","v-dbc50b80","v-20bbce66","v-6e19edb7"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
