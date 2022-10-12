export const data = JSON.parse("{\"key\":\"v-2a2f2812\",\"path\":\"/posts/guide.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"这里是前端路线\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/guide.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"EricKiku\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"这里是前端路线\",\"slug\":\"这里是前端路线\",\"link\":\"#这里是前端路线\",\"children\":[]}],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"posts/guide.md\"}")

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
