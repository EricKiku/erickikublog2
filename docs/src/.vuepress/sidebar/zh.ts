import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "前端路线",
      icon: "creative",
      prefix: "posts/",
      link: "posts/guide",
      activeMatch: "^/zh/$",
    },
    {
      text: "文章",
      icon: "note",
      children: [
        {
          text: "前端基础",
          icon: "note",
          prefix: "posts/frontBase",
          collapsable: true,
          children: [
            {
              text: "HTML5与CSS3",
              icon: "creative",
              link: "css",
            },
            {
              text: "JS",
              icon: "creative",
              link: "js",
            },
          ],
        },
        {
          text: "前端进阶",
          icon: "note",
          collapsable: true,
          prefix: "posts/frontPro",
          children: [
            {
              text: "Ajax",
              icon: "creative",
              link: "ajax",
            },
            {
              text: "Axios",
              icon: "creative",
              link: "axios",
            },
            {
              text: "Git",
              icon: "creative",
              link: "git",
            },
            {
              text: "NodeJS",
              icon: "creative",
              link: "node",
            },
            {
              text: "TypeScript",
              icon: "creative",
              link: "typescript",
            },
            {
              text: "WebPack5",
              icon: "creative",
              link: "webpack5",
            },
            {
              text: "WebPack高级",
              icon: "creative",
              link: "webpack5高级",
            },
            {
              text: "WebPack5模式",
              icon: "creative",
              link: "webpack5模式",
            },
          ],
        },
        {
          text: "ES6",
          icon: "note",
          collapsable: true,
          prefix: "posts/ES6",
          children: [
            {
              text: "ES6",
              icon: "creative",
              link: "es6",
            },
            {
              text: "Promise",
              icon: "creative",
              link: "promise",
            },
          ],
        },
        {
          text: "Vue",
          icon: "note",
          collapsable: true,
          prefix: "posts/Vue",
          children: [
            {
              text: "Vue2",
              icon: "creative",
              link: "vue2",
            },
            {
              text: "Vue3",
              icon: "creative",
              link: "vue3",
            },
            {
              text: "VueRouter",
              icon: "creative",
              link: "vuerouter",
            },
            {
              text: "VueX",
              icon: "creative",
              link: "vuex",
            },
          ],
        },
      ],
    },
    "intro",
    
  ],
});
