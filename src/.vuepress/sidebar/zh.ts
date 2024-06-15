import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [],

  // 深歌浅醉的侧边栏
  "/floatinglife/": [
    {
      text: "深歌浅醉",
      icon: "note",
      collapsible: true,
      prefix: "/floatinglife/",
      children: [
        {
          text: "something",
          icon: "animation",
          link: "/salay.html",
        },
      ],
    },
  ],
});
