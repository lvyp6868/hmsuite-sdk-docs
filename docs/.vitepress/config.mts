import { defineConfig } from "vitepress";

export default defineConfig({
  title: "同源维护开放平台",
  description: "同源维护开放平台",
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/guide/summary",
        activeMatch: "/guide/",
      },
      {
        text: "地图文档",
        link: "/api/map/lifecycle",
        activeMatch: "/api/map/",
      },
      {
        text: "地图示例",
        link: "/example/map/map-create",
        activeMatch: "/example/map/",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "概述", link: "/guide/summary" },
            { text: "准备", link: "/guide/prerequisites" },
            { text: "快速上手", link: "/guide/getting-started" },
          ],
        },
      ],
      "/api/map/": [
        {
          text: "地图 JS API",
          collapsed: false,
          items: [
            {
              text: "生命周期",
              link: "/api/map/lifecycle",
            },
            {
              text: "交互事件",
              link: "/api/map/bind",
            },
            {
              text: "业务组件",
              link: "/api/map/components",
            },
          ],
        },
      ],
      "/api/thematic/": [
        {
          text: "",
          items: [
            { text: "概述", link: "/javascript/summary" },
            { text: "快速上手", link: "/javascript/gettingstarted" },
            {
              text: "开发指南",
              collapsed: false,
              items: [
                {
                  text: "地图",
                  base: "/javascript/guide/map/",
                  items: [
                    { text: "生命周期", link: "lifecycle" },
                    { text: "地图状态", link: "state" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "/example/": [
        {
          text: "JS API 示例",
          items: [
            {
              text: "生命周期",
              collapsed: false,
              items: [
                { text: "地图的创建", link: "/example/map/map-create" },
                { text: "地图加载完成", link: "/example/map/map-complete" },
              ],
            },
            {
              text: "地图属性",
              collapsed: false,
              items: [
                {
                  text: "获取地图中心点/级别",
                  link: "/example/map/get-mapzoom",
                },
                {
                  text: "设置地图中心点/级别",
                  link: "/example/map/change-map-center",
                },
              ],
            },
          ],
        },
      ],
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
