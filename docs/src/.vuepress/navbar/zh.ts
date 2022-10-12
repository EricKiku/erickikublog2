import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "笔记", icon: "discover", link: "/demo/", activeMatch: "^/posts", },
  {
    text: "随笔",
    icon: "edit",
    prefix: "/suibi/",
    activeMatch: "^/zh/suibi",
    children: [
      {
        text: "Less",
        icon: "note",
        link: "Less",
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
