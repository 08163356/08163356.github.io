(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,6,7,8,9,13],{237:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return b}));n(88);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return t.replace(i,"").replace(r,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}function h(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);if(r&&n!==r)return!1;return a(t.path)===a(e)}function f(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=a(e);for(let n=0;n<t.length;n++)if(a(t[n].path)===i)return Object.assign({},t[n],{type:"page",path:p(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){if("auto"===t.frontmatter.sidebar)return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const{pages:r,themeConfig:s}=n,o=(i&&s.locales&&s.locales[i]||s).sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,i,r){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}}(e,r,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},238:function(t,e,n){},239:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},r=(n(240),n(15)),s=Object(r.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},240:function(t,e,n){"use strict";n(238)},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){"use strict";n.r(e);var i=n(237),r={props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.e,isMailto:i.f,isTel:i.g}},s=n(15),o=Object(s.a)(r,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=o.exports},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var i=n(237);function r(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function s(t,e,n,o,a,l=1){return!e||l>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(i.d)(o,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[r(t,"#"+e.slug,e.title,u),s(t,e.children,n,o,a,l+1)])}))}var o={functional:!0,props:["item"],render(t,{parent:{$page:e,$site:n,$route:o},props:{item:a}}){const l=Object(i.d)(o,a.path),u="auto"===a.type?l||a.children.some(t=>Object(i.d)(o,a.basePath+"#"+t.slug)):l,c=r(t,a.path,a.title||a.path,u),p=null!=e.frontmatter.sidebarDepth?e.frontmatter.sidebarDepth:n.themeConfig.sidebarDepth,h=null==p?1:p;if("auto"===a.type)return[c,s(t,a.children,a.basePath,o,h)];if(u&&a.headers&&!i.c.test(a.path)){return[c,s(t,Object(i.b)(a.headers),a.path,o,h)]}return c}},a=(n(248),n(15)),l=Object(a.a)(o,void 0,void 0,!1,null,null,null);e.default=l.exports},247:function(t,e,n){"use strict";n(241)},248:function(t,e,n){"use strict";n(242)},249:function(t,e,n){"use strict";n.r(e);var i=n(243),r=n(239),s={components:{NavLink:i.default,DropdownTransition:r.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},o=(n(247),n(15)),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=a.exports},250:function(t,e,n){"use strict";n(244)},252:function(t,e,n){"use strict";n(245)},253:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var i=n(249),r=n(237),s={components:{NavLink:n(243).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(r=>{const s=t[r],o=i[r]&&i[r].label||s.lang;let a;return s.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,r),n.some(t=>t.path===a)||(a=r)),{text:o,link:a}})};return[...this.userNav,r]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(r.h)(t),{items:(t.items||[]).map(r.h)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:"https://github.com/"+t},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},o=(n(250),n(15)),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports},255:function(t,e,n){"use strict";n.r(e);var i=n(246),r=n(239),s={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:i.default,DropdownTransition:r.default}},o=(n(252),n(15)),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return e("li",[e("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=a.exports},257:function(t,e,n){"use strict";n(253)},262:function(t,e,n){"use strict";n.r(e);var i=n(255),r=n(246),s=n(254),o=n(237);var a={components:{SidebarGroup:i.default,SidebarLink:r.default,NavLinks:s.default},props:["items"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if("group"===i.type&&i.children.some(e=>Object(o.d)(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(o.d)(this.$route,t.path)}}},l=(n(257),n(15)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,first:0===i,open:i===t.openGroupIndex,collapsable:n.collapsable},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{item:n}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports}}]);