import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";

const DOMAIN_NAME = "ablog.axingit.top";
const WEB_SITE = `https://${DOMAIN_NAME}`;

export default defineUserConfig({
  base: "/",

  // 已下线敏感稿的兜底排除（原稿在本机 G:\axingSpace\blog-private）
  pagePatterns: [
    "**/*.md",
    "!.vuepress",
    "!node_modules",
    "!04.更多/20.缪斯/**",
    "!03.生活/2024家庭活动/**",
    "!03.生活/个人保障/**",
    "!01.技术/25.日志上报/**",
    "!08.项目/03.game中台/**",
    "!08.项目/06.王者/**",
    "!08.项目/02.家庭网站/**",
    "!01.技术/24.onlyOffice/60.AI配表预研/**",
    "!01.技术/6.JIRA/**",
    "!07.就业/55.AI梳理项目/**",
    "!07.就业/25.面试经验/05.被人面试/**",
    "!09.后端/02.需求实现/**",
    "!13.培训/**",
    "!03.生活/2026过年/01.过年费用计划.md",
    "!03.生活/2026过年/02.家庭网站.md",
    "!07.就业/01.个人简历/15.个人信息【详细】/**",
    "!07.就业/01.个人简历/01.个人简历.md",
    "!10.职业发展/01.提晋升失败后的想法.md",
    "!11.投资/01.基金/01.过往反思.md",
    "!08.项目/04.onlyoffice/01.1008国庆回来开会.md",
    "!01.技术/24.onlyOffice/13.onlyoffice破解.md",
    "!12.AI/01.需求探索/01.AIasMe探索.md",
  ],
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "aXing's blog",
      description: "计算机技术博客,记录个人关于前端、后端、操作系统、兴趣爱好、书籍阅读的学习与总结",
    },
  },

  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          strict: false,
          // 允许访问 docs 目录下的所有文件
          allow: ['..'],
        },
      },
      // 将 .assets 目录中的图片视为静态资源
      assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
      // Vue 编译选项：忽略未闭合的自定义标签
      vue: {
        template: {
          compilerOptions: {
            // 将单字母大写标签视为自定义元素（如 <T>, <U> 等泛型）
            isCustomElement: (tag) => /^[A-Z]$/.test(tag),
          },
        },
      },
    },
  }),

  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "个人技术博客,前端,后端，前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css" }],
  ],

  theme: hopeTheme({
    hostname: WEB_SITE,
    
    author: {
      name: "aXing",
      url: "https://github.com/08163356",
    },

    logo: "/img/logoLx.png",
    
    repo: "08163356/08163356.github.io",
    docsDir: "docs",

    // 博客模式配置
    blog: {
      avatar: "/img/avtar.png",
      name: "aXing",
      description: "终身学习",
      intro: "/pages/about-me/",
      medias: {
        Email: "mailto:2537334510@qq.com",
        GitHub: "https://github.com/08163356",
      },
    },

    // 导航栏
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "🌐 技术",
        link: "/web/",
        children: [
          {
            text: "前端开发",
            children: [
              { text: "前端工程化", link: "/pages/1f8c4b/" },
              { text: "前端三件套", link: "/pages/044aeb/" },
              { text: "性能优化", link: "/pages/perf-index/" },
              { text: "Vue2/Vue3", link: "/pages/c5f8c8/" },
              { text: "浏览器知识", link: "/pages/d6f366/" },
            ],
          },
          {
            text: "程序语言",
            children: [
              { text: "TypeScript", link: "/pages/d50c7e/" },
              { text: "ES6", link: "/pages/bbd59e/" },
              { text: "Node.js", link: "/pages/2cc2a3/" },
              { text: "C++", link: "/pages/315c31/" },
              { text: "Python", link: "/pages/04ee36/" },
            ],
          },
          {
            text: "计算机基础",
            children: [
              { text: "操作系统", link: "/pages/884275/" },
              { text: "数据结构与算法", link: "/pages/95e5a3/" },
              { text: "计算机网络", link: "/pages/6f90e7/" },
              { text: "设计模式", link: "/pages/6044ee/" },
            ],
          },
          {
            text: "后端开发",
            children: [
              { text: "后端入门", link: "/pages/969ee3/" },
            ],
          },
          {
            text: "工具技术",
            children: [
              { text: "Git知识", link: "/pages/68f805/" },
              { text: "OnlyOffice", link: "/pages/oo-index/" },
              { text: "正则表达式", link: "/pages/a34e0a/" },
              { text: "脚本汇总", link: "/pages/bcc616/" },
            ],
          },
          {
            text: "其他",
            children: [
              { text: "Android", link: "/pages/548dc4/" },
              { text: "AI技术", link: "/pages/ffba7e/" },
              { text: "Bug解决", link: "/pages/5036c3/" },
            ],
          },
        ],
      },
      {
        text: "📚 书籍",
        link: "/ui/",
        children: [
          { text: "阅读笔记", link: "/pages/d9db23/" },
          { text: "阅读摘抄", link: "/pages/cc91aa/" },
          { text: "读书知识图谱", link: "https://ablog.axingit.top/daily/#/" },
        ],
      },
      {
        text: "👨🏻‍🎓 工作",
        link: "/work/",
        children: [
          { text: "技术技能", link: "/pages/665502/" },
          { text: "项目经历", link: "/pages/d3cff9/" },
          { text: "面试他人", link: "/pages/f29e50/" },
          { text: "个人面试", link: "/pages/f0ff9f/" },
        ],
      },
      {
        text: "🧰 收藏",
        link: "/pages/beb6c0bd8a66cea6/",
      },
      {
        text: "👣 索引",
        link: "/archives/",
        children: [
          { text: "分类", link: "/category/" },
          { text: "标签", link: "/tag/" },
          { text: "归档", link: "/timeline/" },
        ],
      },
    ],

    // 侧边栏 - 自动生成
    sidebar: "structure",

    // 页脚
    footer: "阿兴 | MIT License",
    displayFooter: true,
    copyright: "Copyright © 2019-present aXing",

    // 全屏按钮
    fullscreen: true,

    // 在深色模式和浅色模式之间切换
    darkmode: "toggle",

    // 文章信息显示
    pageInfo: ["Author", "Date", "Original", "Category", "Tag", "ReadingTime", "Word"],

    // Markdown 配置 (新位置)
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },

    // 插件配置
    plugins: {
      // 启用组件
      components: {
        components: ["VPCard"],
      },

      // 博客插件
      blog: {
        excerpt: false,
        // 分类和标签配置
        category: "/category/",
        categoryItem: "/category/:name/",
        tag: "/tag/",
        tagItem: "/tag/:name/",
        // 时间线
        timeline: "/timeline/",
        // 文章列表
        article: "/article/",
        // 每页显示文章数
        articlePerPage: 10,
      },

      // Giscus 未填 repoId/categoryId，先关掉空壳评论
      comment: false,

      // 阅读时间与字数统计
      readingTime: {
        wordPerMinute: 300,  // 每分钟阅读字数
      },

      // 代码复制
      copyCode: {
        showInMobile: false,
      },

      // 图片预览
      photoSwipe: true,

      // 搜索 - 使用 slimsearch
      slimsearch: {
        indexContent: true,
        autoSuggestions: true,
      },

      // Sitemap
      sitemap: {
        changefreq: "weekly",
      },
    },

    // 最后更新时间
    lastUpdated: true,
    contributors: true,
    editLink: true,
    editLinkPattern: ":repo/edit/:branch/:path",
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    },
    // 将未知的 HTML 标签视为普通文本，避免 Vue 编译错误
    vPre: {
      block: true,
      inline: true,
    },
  },

  // 性能优化
  shouldPrefetch: false,
});
