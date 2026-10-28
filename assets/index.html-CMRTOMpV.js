import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(t,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<p>基于ip配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ifconfig ens33:0 192.168.184.31 netmask 255.255.255.0 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>		listen 192.168.184.30:80;					#设置监听地址</span></span>
<span class="line"><span>		server_name www.lic.com;</span></span>
<span class="line"><span>		charset utf-8;</span></span>
<span class="line"><span>		access_log logs/www.lic.access.log; </span></span>
<span class="line"><span>		location / {</span></span>
<span class="line"><span>			root /var/www/html/kgc;</span></span>
<span class="line"><span>			index index.html index.php;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span>		location = 50x.html{</span></span>
<span class="line"><span>			root html;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>	listen 192.168.184.31:80;					#设置监听地址</span></span>
<span class="line"><span>	server_name www.accp.com;</span></span>
<span class="line"><span>	charset utf-8;</span></span>
<span class="line"><span>	access_log logs/www.accp.access.log; </span></span>
<span class="line"><span>	location / {</span></span>
<span class="line"><span>		root /var/www/html/accp;</span></span>
<span class="line"><span>		index index.html index.php;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	error_page 500 502 503 504 /50x.html;</span></span>
<span class="line"><span>	location = 50x.html{</span></span>
<span class="line"><span>		root html;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}	</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>systemctl restart nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/weixin_51432770/article/details/112350471#:~:text=Nginx%E7%BD%91%E7%AB%99%E6%9C%8D%E5%8A%A1%E9%85%8D%E7%BD%AE%EF%BC%8C%E5%9B%BE%E6%96%87%E8%AF%A6%E8%A7%A3%EF%BC%88%E8%B6%85%E8%AF%A6%E7%BB%86%EF%BC%89%201%20Nginx%E7%BD%91%E7%AB%99%E6%9C%8D%E5%8A%A1%202%20%E4%B8%80%E3%80%81%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85Nginx%E6%9C%8D%E5%8A%A1%20%E5%AE%89%E8%A3%85%E5%8C%85%201%E3%80%81%E5%85%B3%E9%97%AD%E9%98%B2%E7%81%AB%E5%A2%99%E5%B0%86nginx%E6%89%80%E9%9C%80%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%88%B0%2Fopt%E7%9B%AE%E5%BD%95%E4%B8%8B%20...,2%E3%80%81%E4%B8%BA%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E5%87%86%E5%A4%87%E7%BD%91%E9%A1%B5%E6%96%87%E6%A1%A3%20...%208%20%E4%B8%83%E3%80%81%E5%9F%BA%E4%BA%8EIP%20%E7%9A%84%20Nginx%20%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%20%E6%9B%B4%E5%A4%9A%E9%A1%B9%E7%9B%AE" target="_blank" rel="noopener noreferrer">参考文档</a></p><p>知识点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>配置 server_name, 解释是：CODE 没有为 websocket 连接提供正确的主机，如果在它前面有一个代理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,5)])])}const d=s(l,[["render",p]]),o=JSON.parse(`{"path":"/pages/b14c42/","title":"一些配置","lang":"zh-CN","frontmatter":{"title":"一些配置","date":"2025-04-30T17:17:25.000Z","permalink":"/pages/b14c42/","categories":["技术","计算机网络","nginx"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"基于ip配置 参考文档 知识点：","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/b14c42/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"一些配置"}],["meta",{"property":"og:description","content":"基于ip配置 参考文档 知识点："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2025-04-30T17:17:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一些配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-30T17:17:25.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"01.技术/21.计算机网络/02.nginx/03.一些配置.md","localizedDate":"2025年5月1日","autoDesc":true}`);export{d as comp,o as data};
