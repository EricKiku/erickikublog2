export const data = JSON.parse("{\"key\":\"v-7643f25f\",\"path\":\"/zh/tag/webpack/\",\"title\":\"webpack 标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"webpack 标签\",\"blog\":{\"type\":\"category\",\"name\":\"webpack\",\"key\":\"tag\"},\"layout\":\"Blog\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/tag/webpack/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"EricKiku\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"webpack 标签\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")

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
