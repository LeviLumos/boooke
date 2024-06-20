import { navbar } from "vuepress-theme-hope"

export const zhNavbar = navbar([
  { text: "快速导航", icon: "location-arrow", link: "/quicknav/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  {
    text: "深歌浅醉",
    icon: "house",
    prefix: "/lumos/",
    children: [
      {
        text: "爱生活",
        icon: "headset",
        link: "dolife/",
      },
    ],
  },
]);
