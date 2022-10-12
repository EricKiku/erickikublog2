import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "EricKiku",
      description: "vuepress-theme-hope 的博客演示",
    }
  },

  theme,

  shouldPrefetch: false,
});
