import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as e}from"./app-BBpi8vMY.js";const l={};function i(p,s){return e(),a("div",null,[...s[0]||(s[0]=[t(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>1.数据驱动是什么意思？</p><p>2.生命周期钩子是什么？</p><p>3.当前组件要用其他组件的值怎么办？</p><p>4.其他组件要改当前组件的值怎么办？</p><p>5.组件之间的通信</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p>https://www.cnblogs.com/keepfool/p/5619070.html</p><p>vue-loader：https://vue-loader-v14.vuejs.org/zh-cn/</p><h2 id="知识总结" tabindex="-1"><a class="header-anchor" href="#知识总结"><span>知识总结：</span></a></h2><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if"><span>v-if</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id = &quot;app&quot; v-if= &quot;show&quot;&gt;{{x}}&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var element = {</span></span>
<span class="line"><span>data (){</span></span>
<span class="line"><span>   x:true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vue.use(element).mount(#app)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show"><span>v-show</span></a></h3><p>v-if 会对dom元素进行操作，v-show只改变他的样式。两者使用方法一摸一样。</p><p>v-else</p><p>必须在前两者后面使用，否则识别不到。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;head&gt;</span></span>
<span class="line"><span>		&lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>		&lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>	&lt;/head&gt;</span></span>
<span class="line"><span>	&lt;body&gt;</span></span>
<span class="line"><span>		&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>			&lt;h1 v-if=&quot;age &gt;= 25&quot;&gt;Age: {{ age }}&lt;/h1&gt;</span></span>
<span class="line"><span>			&lt;h1 v-else&gt;Name: {{ name }}&lt;/h1&gt;</span></span>
<span class="line"><span>			&lt;h1&gt;---------------------分割线---------------------&lt;/h1&gt;</span></span>
<span class="line"><span>			&lt;h1 v-show=&quot;name.indexOf(&#39;keep&#39;) &gt;= 0&quot;&gt;Name: {{ name }}&lt;/h1&gt;</span></span>
<span class="line"><span>			&lt;h1 v-else&gt;Sex: {{ sex }}&lt;/h1&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>	&lt;/body&gt;</span></span>
<span class="line"><span>	&lt;script src=&quot;js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>	&lt;script&gt;</span></span>
<span class="line"><span>		var vm = new Vue({</span></span>
<span class="line"><span>			el: &#39;#app&#39;,</span></span>
<span class="line"><span>			data: {</span></span>
<span class="line"><span>				age: 28,</span></span>
<span class="line"><span>				name: &#39;keepfool&#39;,</span></span>
<span class="line"><span>				sex: &#39;Male&#39;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3><p>对数组内的值遍历访问</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;head&gt;</span></span>
<span class="line"><span>		&lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>		&lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>		&lt;link rel=&quot;stylesheet&quot; href=&quot;styles/demo.css&quot; /&gt;</span></span>
<span class="line"><span>	&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;body&gt;</span></span>
<span class="line"><span>		&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>			&lt;table&gt;</span></span>
<span class="line"><span>				&lt;thead&gt;</span></span>
<span class="line"><span>					&lt;tr&gt;</span></span>
<span class="line"><span>						&lt;th&gt;Name&lt;/th&gt;</span></span>
<span class="line"><span>						&lt;th&gt;Age&lt;/th&gt;</span></span>
<span class="line"><span>						&lt;th&gt;Sex&lt;/th&gt;</span></span>
<span class="line"><span>					&lt;/tr&gt;</span></span>
<span class="line"><span>				&lt;/thead&gt;</span></span>
<span class="line"><span>				&lt;tbody&gt;</span></span>
<span class="line"><span>					&lt;tr v-for=&quot;person in people&quot;&gt;</span></span>
<span class="line"><span>						&lt;td&gt;{{ person.name  }}&lt;/td&gt;</span></span>
<span class="line"><span>						&lt;td&gt;{{ person.age  }}&lt;/td&gt;</span></span>
<span class="line"><span>						&lt;td&gt;{{ person.sex  }}&lt;/td&gt;</span></span>
<span class="line"><span>					&lt;/tr&gt;</span></span>
<span class="line"><span>				&lt;/tbody&gt;</span></span>
<span class="line"><span>			&lt;/table&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>	&lt;/body&gt;</span></span>
<span class="line"><span>	&lt;script src=&quot;js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>	&lt;script&gt;</span></span>
<span class="line"><span>		var vm = new Vue({</span></span>
<span class="line"><span>			el: &#39;#app&#39;,</span></span>
<span class="line"><span>			data: {</span></span>
<span class="line"><span>				people: [{</span></span>
<span class="line"><span>					name: &#39;Jack&#39;,</span></span>
<span class="line"><span>					age: 30,</span></span>
<span class="line"><span>					sex: &#39;Male&#39;</span></span>
<span class="line"><span>				}, {</span></span>
<span class="line"><span>					name: &#39;Bill&#39;,</span></span>
<span class="line"><span>					age: 26,</span></span>
<span class="line"><span>					sex: &#39;Male&#39;</span></span>
<span class="line"><span>				}, {</span></span>
<span class="line"><span>					name: &#39;Tracy&#39;,</span></span>
<span class="line"><span>					age: 22,</span></span>
<span class="line"><span>					sex: &#39;Female&#39;</span></span>
<span class="line"><span>				}, {</span></span>
<span class="line"><span>					name: &#39;Chris&#39;,</span></span>
<span class="line"><span>					age: 36,</span></span>
<span class="line"><span>					sex: &#39;Male&#39;</span></span>
<span class="line"><span>				}]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v-for中key属性的作用：key属性的值应唯一，起到身份认证的作用，避免v-for“就地更新”策略导致的问题。</p><p>v-for中调用函数：</p><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3><p>https://www.jianshu.com/p/98dfa4c6389c</p><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on"><span>v-on</span></a></h3><p>v-bind指令可以缩写为一个冒号，v-on指令可以缩写为@符号</p><h3 id="v-slot" tabindex="-1"><a class="header-anchor" href="#v-slot"><span>v-slot</span></a></h3><h2 id="随笔" tabindex="-1"><a class="header-anchor" href="#随笔"><span>随笔</span></a></h2><p>1.回答面试题要体现自己的深度。</p><p>src</p><p>class</p><p>name</p><p>click</p><p>index</p><p>id</p>`,35)])])}const v=n(l,[["render",i]]),r=JSON.parse(`{"path":"/pages/aff997/","title":"VUE快速入门","lang":"zh-CN","frontmatter":{"title":"VUE快速入门","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/aff997/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"问题 1.数据驱动是什么意思？ 2.生命周期钩子是什么？ 3.当前组件要用其他组件的值怎么办？ 4.其他组件要改当前组件的值怎么办？ 5.组件之间的通信 参考文档 https://www.cnblogs.com/keepfool/p/5619070.html vue-loader：https://vue-loader-v14.vuejs.org/zh-...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/aff997/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"VUE快速入门"}],["meta",{"property":"og:description","content":"问题 1.数据驱动是什么意思？ 2.生命周期钩子是什么？ 3.当前组件要用其他组件的值怎么办？ 4.其他组件要改当前组件的值怎么办？ 5.组件之间的通信 参考文档 https://www.cnblogs.com/keepfool/p/5619070.html vue-loader：https://vue-loader-v14.vuejs.org/zh-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VUE快速入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]},{"level":2,"title":"知识总结：","slug":"知识总结","link":"#知识总结","children":[{"level":3,"title":"v-if","slug":"v-if","link":"#v-if","children":[]},{"level":3,"title":"v-show","slug":"v-show","link":"#v-show","children":[]},{"level":3,"title":"v-for","slug":"v-for","link":"#v-for","children":[]},{"level":3,"title":"v-bind","slug":"v-bind","link":"#v-bind","children":[]},{"level":3,"title":"v-on","slug":"v-on","link":"#v-on","children":[]},{"level":3,"title":"v-slot","slug":"v-slot","link":"#v-slot","children":[]}]},{"level":2,"title":"随笔","slug":"随笔","link":"#随笔","children":[]}],"git":{},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/38.VUE快速入门.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{v as comp,r as data};
