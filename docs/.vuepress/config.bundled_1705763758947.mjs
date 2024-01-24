// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";

// docs/.vuepress/config/baiduCode.ts
var baiduCode_default = "503f098e7e5b3a5b5d8c5fc2938af002";

// docs/.vuepress/config/htmlModules.ts
var htmlModule = {
  homeSidebarB: `<div style="padding: 0.95rem">
    <p style="
      color: var(--textColor);
      opacity: 0.9;
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 8px 0;
    ">\u516C\u4F17\u53F7</p>
    <img src="https://open.weixin.qq.com/qr/code?username=gh_0cf4b813918c"  style="width:100%;" />
    \u5173\u6CE8\u516C\u4F17\u53F7\uFF0C\u56DE\u590D[<b>\u524D\u7AEF\u8D44\u6E90</b>]\uFF0C\u53EF\u83B7\u53D6 <a href="https://game.xugaoyi.com" arget="_blank" >\u524D\u7AEF\u5B66\u4E60\u8D44\u6E90<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a>
    </p>
    </div>`
};
var htmlModules_default = htmlModule;

// docs/.vuepress/config.ts
var DOMAIN_NAME = "xugaoyi.com";
var WEB_SITE = `https://${DOMAIN_NAME}`;
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "aXing's blog",
      description: "\u8BA1\u7B97\u673A\u6280\u672F\u535A\u5BA2,\u8BB0\u5F55\u4E2A\u4EBA\u5173\u4E8E\u524D\u7AEF\u3001\u540E\u7AEF\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u5174\u8DA3\u7231\u597D\u3001\u4E66\u7C4D\u9605\u8BFB\u7684\u5B66\u4E60\u4E0E\u603B\u7ED3"
    }
  },
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u524D\u7AEF",
        link: "/web/",
        items: [
          {
            text: "\u524D\u7AEF\u6587\u7AE0",
            items: [
              { text: "JavaScript", link: "/pages/8143cc480faf9a11/" }
            ]
          },
          {
            text: "\u5B66\u4E60\u7B14\u8BB0",
            items: [
              { text: "\u300AJavaScript\u6559\u7A0B\u300B", link: "/note/javascript/" },
              { text: "\u300AJavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u300B", link: "/note/js/" },
              { text: "\u300AES6 \u6559\u7A0B\u300B", link: "/note/es6/" },
              { text: "\u300AVue\u300B", link: "/note/vue/" },
              { text: "\u300AReact\u300B", link: "/note/react/" },
              {
                text: "\u300ATypeScript \u4ECE\u96F6\u5B9E\u73B0 axios\u300B",
                link: "/note/typescript-axios/"
              },
              {
                text: "\u300AGit\u300B",
                link: "/note/git/"
              },
              {
                text: "TypeScript",
                link: "/pages/51afd6/"
              },
              {
                text: "JS\u8BBE\u8BA1\u6A21\u5F0F\u603B\u7ED3",
                link: "/pages/4643cd/"
              }
            ]
          }
        ]
      },
      {
        text: "\u9875\u9762",
        link: "/ui/",
        items: [
          { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
          { text: "CSS", link: "/pages/0a83b083bdf257cb/" }
        ]
      },
      {
        text: "\u6280\u672F",
        link: "/technology/",
        items: [
          { text: "\u6280\u672F\u6587\u6863", link: "/pages/9a7ee40fc232253e/" },
          { text: "GitHub\u6280\u5DE7", link: "/pages/4c778760be26d8b3/" },
          { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
          { text: "\u535A\u5BA2\u642D\u5EFA", link: "/pages/41f87d890d0a02af/" }
        ]
      },
      {
        text: "\u66F4\u591A",
        link: "/more/",
        items: [
          { text: "\u5B66\u4E60", link: "/pages/f2a556/" },
          { text: "\u9762\u8BD5", link: "/pages/aea6571b7a8bae86/" },
          { text: "\u5FC3\u60C5\u6742\u8D27", link: "/pages/2d615df9a36a98ed/" },
          { text: "\u5B9E\u7528\u6280\u5DE7", link: "/pages/baaa02/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", link: "/friends/" }
        ]
      },
      { text: "\u5173\u4E8E", link: "/about/" },
      {
        text: "\u6536\u85CF",
        link: "/pages/beb6c0bd8a66cea6/"
      },
      {
        text: "\u7D22\u5F15",
        link: "/archives/",
        items: [
          { text: "\u5206\u7C7B", link: "/categories/" },
          { text: "\u6807\u7B7E", link: "/tags/" },
          { text: "\u5F52\u6863", link: "/archives/" }
        ]
      }
    ],
    sidebarDepth: 2,
    logo: "/img/logo.png",
    repo: "08163356",
    searchMaxSuggestions: 10,
    lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "\u7F16\u8F91",
    sidebar: "structuring",
    author: {
      name: "aXing",
      link: "https://github.com/08163356"
    },
    blogger: {
      avatar: "https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200103123203.jpg",
      name: "aXing",
      slogan: "\u8BA1\u7B97\u673A\u754C\u7684\u5E7C\u513F\u56ED\u5B66\u751F"
    },
    social: {
      icons: [
        {
          iconClass: "icon-youjian",
          title: "\u53D1\u90AE\u4EF6",
          link: "mailto:2537334510@qq.com"
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/08163356"
        }
      ]
    },
    footer: {
      createYear: 2024,
      copyrightInfo: '\u963F\u5174 | <a href="https://github.com/08163356" target="_blank">MIT License</a>'
    },
    extendFrontmatter: {
      author: {
        name: "aXing",
        link: "https://github.com/08163356"
      }
    },
    htmlModules: htmlModules_default
  },
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u535A\u5BA2,\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5\u9898,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"
      }
    ],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }]
  ],
  plugins: [
    [
      "sitemap",
      {
        hostname: WEB_SITE
      }
    ],
    "vuepress-plugin-baidu-autopush",
    [
      "vuepress-plugin-baidu-tongji",
      {
        hm: baiduCode_default
      }
    ],
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "\u5728MDN\u4E2D\u641C\u7D22",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=",
            behindUrl: ""
          },
          {
            title: "\u5728Runoob\u4E2D\u641C\u7D22",
            frontUrl: "https://www.runoob.com/?s="
          },
          {
            title: "\u5728Vue API\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.vuejs.org/v2/api/#"
          },
          {
            title: "\u5728Bing\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.bing.com/search?q="
          },
          {
            title: "\u901A\u8FC7\u767E\u5EA6\u641C\u7D22\u672C\u7AD9\u7684",
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`
          }
        ]
      }
    ],
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false
        }
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "a6e1355287947096b88b",
          clientSecret: "f0e77d070fabfcd5af95bebb82b2d574d7248d71",
          repo: "blog-gitalk-comment",
          owner: "aXing",
          admin: ["aXing"],
          pagerDirection: "last",
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
          title: "\u300C\u8BC4\u8BBA\u300D<%- frontmatter.title %>",
          labels: ["Gitalk", "Comment"],
          body: "\u9875\u9762\uFF1A<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>"
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  extraWatchFiles: [
    ".vuepress/config.ts",
    ".vuepress/config/htmlModules.ts"
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9iYWlkdUNvZGUudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL2h0bWxNb2R1bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFx1NjNEMFx1NzkzQVx1RkYxQVx1NTk4Mlx1NjBBOFx1NjBGM1x1NEY3Rlx1NzUyOEpTXHU3MjQ4XHU2NzJDXHU3Njg0XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU1M0VGXHU1M0MyXHU4MDAzXHVGRjFBaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWkvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL3RyZWUvYTJmMDNlOTkzZGQyZjJhM2FmZGM1N2NmNzJhZGZjNmYxYjZiMGMzMi9kb2NzLy52dWVwcmVzc1xuICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSwgVXNlclBsdWdpbnMgfSBmcm9tICd2dWVwcmVzcy9jb25maWcnXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBiYWlkdUNvZGUgZnJvbSAnLi9jb25maWcvYmFpZHVDb2RlJyAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFobVx1NzgwMVxuaW1wb3J0IGh0bWxNb2R1bGVzIGZyb20gJy4vY29uZmlnL2h0bWxNb2R1bGVzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XG5cbmNvbnN0IERPTUFJTl9OQU1FID0gJ3h1Z2FveWkuY29tJyAvLyBcdTU3REZcdTU0MEQgKFx1NEUwRFx1NUUyNmh0dHBzKVxuY29uc3QgV0VCX1NJVEUgPSBgaHR0cHM6Ly8ke0RPTUFJTl9OQU1FfWAgLy8gXHU3RjUxXHU1NzQwXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xuICB0aGVtZTogJ3Zkb2luZycsIC8vIFx1NEY3Rlx1NzUyOG5wbVx1NEUzQlx1OTg5OFx1NTMwNVxuICAvLyB0aGVtZTogcmVzb2x2ZShcIkY6XFxcXHZ1ZXByZXNzLXRoZW1lLXZkb2luZy1tYXN0ZXJcXFxcZG9jc1xcXFwudnVlcHJlc3NcIiwgJy4uLy4uL3Zkb2luZycpLCAvLyBcdTRGN0ZcdTc1MjhcdTY3MkNcdTU3MzBcdTRFM0JcdTk4OThcdTUzMDVcblxuICBsb2NhbGVzOiB7XG4gICAgJy8nOiB7XG4gICAgICBsYW5nOiAnemgtQ04nLFxuICAgICAgdGl0bGU6IFwiYVhpbmcncyBibG9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1x1OEJBMVx1N0I5N1x1NjczQVx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMixcdThCQjBcdTVGNTVcdTRFMkFcdTRFQkFcdTUxNzNcdTRFOEVcdTUyNERcdTdBRUZcdTMwMDFcdTU0MEVcdTdBRUZcdTMwMDFcdTY0Q0RcdTRGNUNcdTdDRkJcdTdFREZcdTMwMDFcdTUxNzRcdThEQTNcdTcyMzFcdTU5N0RcdTMwMDFcdTRFNjZcdTdDNERcdTk2MDVcdThCRkJcdTc2ODRcdTVCNjZcdTRFNjBcdTRFMEVcdTYwM0JcdTdFRDMnLFxuICAgIH1cbiAgfSxcbiAgLy8gYmFzZTogJy8nLCAvLyBcdTlFRDhcdThCQTQnLydcdTMwMDJcdTU5ODJcdTY3OUNcdTRGNjBcdTYwRjNcdTVDMDZcdTRGNjBcdTc2ODRcdTdGNTFcdTdBRDlcdTkwRThcdTdGNzJcdTUyMzBcdTU5ODIgaHR0cHM6Ly9mb28uZ2l0aHViLmlvL2Jhci9cdUZGMENcdTkwQTNcdTRFNDggYmFzZSBcdTVFOTRcdThCRTVcdTg4QUJcdThCQkVcdTdGNkVcdTYyMTAgXCIvYmFyL1wiLFx1RkYwOFx1NTQyNlx1NTIxOVx1OTg3NVx1OTc2Mlx1NUMwNlx1NTkzMVx1NTNCQlx1NjgzN1x1NUYwRlx1N0I0OVx1NjU4N1x1NEVGNlx1RkYwOVxuXG4gIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxuICB0aGVtZUNvbmZpZzoge1xuICAgIC8vIFx1NUJGQ1x1ODIyQVx1OTE0RFx1N0Y2RVxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUYnLFxuICAgICAgICBsaW5rOiAnL3dlYi8nLCAvL1x1NzZFRVx1NUY1NVx1OTg3NVx1OTRGRVx1NjNBNVx1RkYwQ1x1NkI2NFx1NTkwNGxpbmtcdTY2MkZ2ZG9pbmdcdTRFM0JcdTk4OThcdTY1QjBcdTU4OUVcdTc2ODRcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdTY3MDlcdTRFOENcdTdFQTdcdTVCRkNcdTgyMkFcdTY1RjZcdUZGMENcdTUzRUZcdTRFRTVcdTcwQjlcdTUxRkJcdTRFMDBcdTdFQTdcdTVCRkNcdTgyMkFcdThERjNcdTUyMzBcdTc2RUVcdTVGNTVcdTk4NzVcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAvLyBcdThCRjRcdTY2MEVcdUZGMUFcdTRFRTVcdTRFMEJcdTYyNDBcdTY3MDlsaW5rXHU3Njg0XHU1MDNDXHU1M0VBXHU2NjJGXHU1NzI4XHU3NkY4XHU1RTk0bWRcdTY1ODdcdTRFRjZcdTU5MzRcdTkwRThcdTVCOUFcdTRFNDlcdTc2ODRcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcdUZGMDhcdTRFMERcdTY2MkZcdTRFQzBcdTRFNDhcdTcyNzlcdTZCOEFcdTdGMTZcdTc4MDFcdUZGMDlcdTMwMDJcdTUzRTZcdTU5MTZcdUZGMENcdTZDRThcdTYxMEZcdTdFRDNcdTVDM0VcdTY2MkZcdTY3MDlcdTY1OUNcdTY3NjBcdTc2ODRcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU2NTg3XHU3QUUwJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0phdmFTY3JpcHQnLCBsaW5rOiAnL3BhZ2VzLzgxNDNjYzQ4MGZhZjlhMTEvJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUzMDBBSmF2YVNjcmlwdFx1NjU1OVx1N0EwQlx1MzAwQicsIGxpbms6ICcvbm90ZS9qYXZhc2NyaXB0LycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUzMDBBSmF2YVNjcmlwdFx1OUFEOFx1N0VBN1x1N0EwQlx1NUU4Rlx1OEJCRVx1OEJBMVx1MzAwQicsIGxpbms6ICcvbm90ZS9qcy8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1MzAwQUVTNiBcdTY1NTlcdTdBMEJcdTMwMEInLCBsaW5rOiAnL25vdGUvZXM2LycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUzMDBBVnVlXHUzMDBCJywgbGluazogJy9ub3RlL3Z1ZS8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1MzAwQVJlYWN0XHUzMDBCJywgbGluazogJy9ub3RlL3JlYWN0LycgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTMwMEFUeXBlU2NyaXB0IFx1NEVDRVx1OTZGNlx1NUI5RVx1NzNCMCBheGlvc1x1MzAwQicsXG4gICAgICAgICAgICAgICAgbGluazogJy9ub3RlL3R5cGVzY3JpcHQtYXhpb3MvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTMwMEFHaXRcdTMwMEInLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvbm90ZS9naXQvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzLzUxYWZkNi8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ0pTXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGXHU2MDNCXHU3RUQzJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzLzQ2NDNjZC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OTg3NVx1OTc2MicsXG4gICAgICAgIGxpbms6ICcvdWkvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdIVE1MJywgbGluazogJy9wYWdlcy84MzA5YTViODc2ZmM5NWUzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDU1MnLCBsaW5rOiAnL3BhZ2VzLzBhODNiMDgzYmRmMjU3Y2IvJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjI4MFx1NjcyRicsXG4gICAgICAgIGxpbms6ICcvdGVjaG5vbG9neS8nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1NjI4MFx1NjcyRlx1NjU4N1x1Njg2MycsIGxpbms6ICcvcGFnZXMvOWE3ZWU0MGZjMjMyMjUzZS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2l0SHViXHU2MjgwXHU1REU3JywgbGluazogJy9wYWdlcy80Yzc3ODc2MGJlMjZkOGIzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdOb2RlanMnLCBsaW5rOiAnL3BhZ2VzLzExNzcwOGUwYWY3ZjBiZDkvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NTM1QVx1NUJBMlx1NjQyRFx1NUVGQScsIGxpbms6ICcvcGFnZXMvNDFmODdkODkwZDBhMDJhZi8nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2NkY0XHU1OTFBJyxcbiAgICAgICAgbGluazogJy9tb3JlLycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1QjY2XHU0RTYwJywgbGluazogJy9wYWdlcy9mMmE1NTYvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1OTc2Mlx1OEJENScsIGxpbms6ICcvcGFnZXMvYWVhNjU3MWI3YThiYWU4Ni8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RkMzXHU2MEM1XHU2NzQyXHU4RDI3JywgbGluazogJy9wYWdlcy8yZDYxNWRmOWEzNmE5OGVkLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTVCOUVcdTc1MjhcdTYyODBcdTVERTcnLCBsaW5rOiAnL3BhZ2VzL2JhYWEwMi8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1JywgbGluazogJy9mcmllbmRzLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEUnLCBsaW5rOiAnL2Fib3V0LycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjUzNlx1ODVDRicsXG4gICAgICAgIGxpbms6ICcvcGFnZXMvYmViNmMwYmQ4YTY2Y2VhNi8nLFxuICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAvLyAgIHsgdGV4dDogJ1x1N0Y1MVx1N0FEOScsIGxpbms6ICcvcGFnZXMvYmViNmMwYmQ4YTY2Y2VhNi8nIH0sXG4gICAgICAgIC8vICAgeyB0ZXh0OiAnXHU4RDQ0XHU2RTkwJywgbGluazogJy9wYWdlcy9lZWU4M2E5MjExYTcwZjlkLycgfSxcbiAgICAgICAgLy8gICB7IHRleHQ6ICdWdWVcdThENDRcdTZFOTAnLCBsaW5rOiAnL3BhZ2VzLzEyZGY4YWNlNTJkNDkzZjYvJy