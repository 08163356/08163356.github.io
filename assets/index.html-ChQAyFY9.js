import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(r,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p><a href="https://juejin.cn/post/7199321655734190140" target="_blank" rel="noopener noreferrer">参考文档</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    resolve(&#39;success1&#39;);</span></span>
<span class="line"><span>    reject(&#39;error&#39;);</span></span>
<span class="line"><span>    resolve(&#39;success2&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>promise.then((res) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;then:&#39;, res);</span></span>
<span class="line"><span>}).catch((err) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;catch:&#39;, err);</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>解析</span></span>
<span class="line"><span>resolve 函数将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；</span></span>
<span class="line"><span>reject 函数将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</span></span>
<span class="line"><span>而一旦状态改变，就不会再变。</span></span>
<span class="line"><span>所以 代码中的reject(&#39;error&#39;); 不会有作用。</span></span>
<span class="line"><span>Promise 只能 resolve 一次，剩下的调用都会被忽略。</span></span>
<span class="line"><span>所以 第二次的 resolve(&#39;success2&#39;); 也不会有作用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>then: success1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在</span></span>
<span class="line"><span>//解析红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次，意思就是3秒，执行一次 red 函数，2秒执行一次 green 函数，1秒执行一次 yellow 函数，不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以就利用递归来实现。</span></span>
<span class="line"><span>function red() {</span></span>
<span class="line"><span>    console.log(&#39;red&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function green() {</span></span>
<span class="line"><span>    console.log(&#39;green&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function yellow() {</span></span>
<span class="line"><span>    console.log(&#39;yellow&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function light(timer, cb){</span></span>
<span class="line"><span>    return new Promise((resolve)=&gt;{</span></span>
<span class="line"><span>        setTimeout(()=&gt;{</span></span>
<span class="line"><span>            cb()</span></span>
<span class="line"><span>            resolve()</span></span>
<span class="line"><span>        }, timer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function step(){</span></span>
<span class="line"><span>    Promise.resolve().then(()=&gt;{</span></span>
<span class="line"><span>        return light(300, red)</span></span>
<span class="line"><span>    }).then(()=&gt;{</span></span>
<span class="line"><span>        return light(200, green)</span></span>
<span class="line"><span>    }).then(()=&gt;{</span></span>
<span class="line"><span>        return light(200, yellow)</span></span>
<span class="line"><span>    }).then(()=&gt;{</span></span>
<span class="line"><span>        step()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>step()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请实现main函数，让dataList列表执行顺序保存和并发保存</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//请实现main函数，让dataList列表执行顺序保存和并发保存</span></span>
<span class="line"><span>// 要保存的列表</span></span>
<span class="line"><span>const dataList = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>// 保存的接口函数</span></span>
<span class="line"><span>async function saveData(data){</span></span>
<span class="line"><span>    return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>        setTimeout(()=&gt;{ resolve(data) }, Math.random() * 100)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main(){</span></span>
<span class="line"><span>    // 串行执行，按顺序保存12345</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //并行执行，顺序无关，可以并发请求</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)])])}const d=n(l,[["render",p]]),o=JSON.parse(`{"path":"/pages/1ca332/","title":"promise的执行顺序的问题","lang":"zh-CN","frontmatter":{"title":"promise的执行顺序的问题","date":"2024-03-12T21:33:27.000Z","permalink":"/pages/1ca332/","categories":["就业","面试内容"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"参考文档 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在 请实现main函数，让dataList列表执行顺序保存和并发保存","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/1ca332/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"promise的执行顺序的问题"}],["meta",{"property":"og:description","content":"参考文档 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在 请实现main函数，让dataList列表执行顺序保存和并发保存"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T00:07:03.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-03-12T21:33:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T00:07:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"promise的执行顺序的问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-12T21:33:27.000Z\\",\\"dateModified\\":\\"2024-03-25T00:07:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1710339826000,"updatedTime":1711325223000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":2,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"07.就业/35.面试内容/2.promise的执行顺序的问题.md","localizedDate":"2024年3月13日","autoDesc":true}`);export{d as comp,o as data};
