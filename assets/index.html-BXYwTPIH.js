import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as l}from"./app-BBpi8vMY.js";const e={};function p(t,s){return l(),n("div",null,[...s[0]||(s[0]=[a(`<h3 id="一、学前思考" tabindex="-1"><a class="header-anchor" href="#一、学前思考"><span>一、学前思考</span></a></h3><p>1.命令模式可以应用到撤回和反撤回功能的使用</p><p>行为变化模式之Command（命令模式）</p><p>2.个人理解：命令模式就是把请求的执行请求的行为隔离</p><h3 id="二、行为模式之command-命令模式" tabindex="-1"><a class="header-anchor" href="#二、行为模式之command-命令模式"><span>二、行为模式之Command（命令模式）</span></a></h3><h4 id="_1-动机" tabindex="-1"><a class="header-anchor" href="#_1-动机"><span>1.动机</span></a></h4><p>将行为实现着和行为请求者解耦，因为在诸如对行为进行“记录、撤销/反撤销（undo/redo）、事物”等处理中这种无法抵御变化的紧耦合是合适的。</p><h4 id="_2-模式定义" tabindex="-1"><a class="header-anchor" href="#_2-模式定义"><span>2.模式定义</span></a></h4><p>将一个请求（行为）封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可撤销操作。</p><h4 id="_3-结构" tabindex="-1"><a class="header-anchor" href="#_3-结构"><span>3.结构</span></a></h4><p>泛化关系实际就是继承关系。</p><p>实现关系实际上就是实现某一个接口，用带箭头虚线表示</p><p>关联关系用带箭头实线表示，表示一个类还持有一个对象或者另一个类</p><h4 id="_4-要点总结" tabindex="-1"><a class="header-anchor" href="#_4-要点总结"><span>4.要点总结</span></a></h4><ul><li>Command模式的根本目的在于将“行为请求者”与“行为实现者”解耦，在面向对象语言中，常见的实现手段是“将行为抽象为对象”</li><li>实现Command接口的具体命令对象ConcreteCommand有时候根据需要会保存一些额外的状态信息。通过使用Composite模式，可以将多个命令封装成一个“复合命令”MacroCommand</li><li>Command模式于C++中的函数对象有点类似。的那两者定义行为接口的规范有所区别：Command以面向对象中的“接口-实现”来定义行为接口规范，更严格。但有性能损失；C++函数对象以函数签名来定义行为接口，更灵活，性能更高。</li></ul><p>5.实例</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">Receiver接受者，命令传递到这儿就被执行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">Command命令，所有命令在此声明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">Invoker调用者，接受到命令并且执行命令</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">**/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Receiver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　　Receiver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　virtual</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ~Receiver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　virtual</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> doSomething</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteReceiver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Receiver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> doSomething</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　　　cout </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;doSomething....&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">endl;　　</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">claas Command</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　　Command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　virtual</span><span style="--shiki-light:#A626A4;--shiki-dark:#56B6C2;"> ~</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　virtual</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ConcreteCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　　ConcreteCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Receiver</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> re</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　　　:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_receiver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(re)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　{}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">　　~ConcreteCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">　　　　_receiver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">doSomething</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();　　</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　Receiver </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _receiver;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Invoke</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　Command </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _cmd;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Command</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　　　_cmd </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cmd;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">　　void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> action</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">　　　　_cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">　　}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.cnblogs.com/lang5230/p/5328005.html" target="_blank" rel="noopener noreferrer">代码参考</a></p><h3 id="三、散装知识点、问题" tabindex="-1"><a class="header-anchor" href="#三、散装知识点、问题"><span>三、散装知识点、问题</span></a></h3><p>1.invoker：调用程序</p><p>2.行为抽象为对象的方式是将一个方法抽象为一个类然后再实例化调用这个方法调用它是吗？</p><p>3.元编程是什么？</p><blockquote><p>元编程简言之，就是<strong>用代码生成（操纵）代码</strong>。</p><p>元编程应用场景：扩展（重构）语法、开发DSL、生成代码、根据特定场景自动选择代码优化、解决一些正交的架构设计问题、AOP等等</p><p>目的：多提供了一个抽象层次</p></blockquote><p>4.C++用到命令模式的地方基本都被函数对象代替了，因为C++是以性能优先的。java、C#等语言中这种模式被广泛应用。</p><p>5.和迭代器模式类似，都用的少，被泛型编程代替了。</p>`,25)])])}const k=i(e,[["render",p]]),r=JSON.parse(`{"path":"/pages/8f4184/","title":"命令模式","lang":"zh-CN","frontmatter":{"title":"命令模式","date":"2024-01-29T04:23:55.000Z","permalink":"/pages/8f4184/","categories":["技术","设计模式"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"一、学前思考 1.命令模式可以应用到撤回和反撤回功能的使用 行为变化模式之Command（命令模式） 2.个人理解：命令模式就是把请求的执行请求的行为隔离 二、行为模式之Command（命令模式） 1.动机 将行为实现着和行为请求者解耦，因为在诸如对行为进行“记录、撤销/反撤销（undo/redo）、事物”等处理中这种无法抵御变化的紧耦合是合适的。 2...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/8f4184/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"命令模式"}],["meta",{"property":"og:description","content":"一、学前思考 1.命令模式可以应用到撤回和反撤回功能的使用 行为变化模式之Command（命令模式） 2.个人理解：命令模式就是把请求的执行请求的行为隔离 二、行为模式之Command（命令模式） 1.动机 将行为实现着和行为请求者解耦，因为在诸如对行为进行“记录、撤销/反撤销（undo/redo）、事物”等处理中这种无法抵御变化的紧耦合是合适的。 2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:23:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:23:55.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":3,"title":"一、学前思考","slug":"一、学前思考","link":"#一、学前思考","children":[]},{"level":3,"title":"二、行为模式之Command（命令模式）","slug":"二、行为模式之command-命令模式","link":"#二、行为模式之command-命令模式","children":[{"level":4,"title":"1.动机","slug":"_1-动机","link":"#_1-动机","children":[]},{"level":4,"title":"2.模式定义","slug":"_2-模式定义","link":"#_2-模式定义","children":[]},{"level":4,"title":"3.结构","slug":"_3-结构","link":"#_3-结构","children":[]},{"level":4,"title":"4.要点总结","slug":"_4-要点总结","link":"#_4-要点总结","children":[]}]},{"level":3,"title":"三、散装知识点、问题","slug":"三、散装知识点、问题","link":"#三、散装知识点、问题","children":[]}],"git":{"createdTime":1706109170000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":3,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":2.7,"words":809},"filePathRelative":"01.技术/22.设计模式/9.命令模式.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{k as comp,r as data};
