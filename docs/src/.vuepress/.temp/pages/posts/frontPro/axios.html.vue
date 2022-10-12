<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h2 id="_1-json-server" tabindex="-1"><a class="header-anchor" href="#_1-json-server" aria-hidden="true">#</a> 1.  JSON-Server</h2>
<p>文档：	<a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">https://github.com/typicode/json-server<ExternalLinkIcon/></a></p>
<p>可以很快的创建http服务，无须编写代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g json-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-创建db-json文件" tabindex="-1"><a class="header-anchor" href="#_2-创建db-json文件" aria-hidden="true">#</a> 2. 创建<code v-pre>db.json</code>文件</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"posts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"json-server"</span><span class="token punctuation">,</span> <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"typicode"</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"comments"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">"body"</span><span class="token operator">:</span> <span class="token string">"some comment"</span><span class="token punctuation">,</span> <span class="token property">"postId"</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"profile"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"typicode"</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-启动服务" aria-hidden="true">#</a> 3.启动服务</h3>
<p>启动服务的目录，必须是<code v-pre>db.json</code>所在的目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>json-server --watch db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动之后可以通过提示的URL来访问</p>
<h2 id="_2-axios" tabindex="-1"><a class="header-anchor" href="#_2-axios" aria-hidden="true">#</a> 2. axios</h2>
<p>文档：<a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">https://www.axios-http.cn/docs/intro<ExternalLinkIcon/></a></p>
<p>Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js</p>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<ul>
<li>从浏览器创建 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XMLHttpRequests<ExternalLinkIcon/></a></li>
<li>从 node.js 创建 <a href="http://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">http<ExternalLinkIcon/></a> 请求</li>
<li>支持 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a> API</li>
<li>拦截请求和响应</li>
<li>转换请求和响应数据</li>
<li>取消请求</li>
<li>自动转换JSON数据</li>
<li>客户端支持防御<a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank" rel="noopener noreferrer">XSRF<ExternalLinkIcon/></a></li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>使用 npm:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 yarn:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 jsDelivr CDN:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 unpkg CDN:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/axios/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p><code v-pre>axios</code>中的参数：</p>
<p><code v-pre>method</code>：请求的类型，可以是<code v-pre>GET、POST、PUT、DELETE</code></p>
<p><code v-pre>url</code>：请求的路径</p>
<p><code v-pre>data</code>：请求体</p>
<p><code v-pre>axios</code>返回的是一个<code v-pre>Promise</code>对象，所以可以用<code v-pre>.then()</code>来接收回调的结果</p>
<p><code v-pre>then</code>的参数<code v-pre>response</code>包含了很多参数，其中<code v-pre>data</code>是响应体，用来获取服务器返回的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>post<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//请求类型</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        <span class="token comment">//请求URL</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">' http://localhost:3000/posts'</span><span class="token punctuation">,</span>
        <span class="token comment">//设置请求体</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"我是一片文章"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">"EircKiku"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他发送方式" tabindex="-1"><a class="header-anchor" href="#其他发送方式" aria-hidden="true">#</a> 其他发送方式</h3>
<h5 id="axios-request-config" tabindex="-1"><a class="header-anchor" href="#axios-request-config" aria-hidden="true">#</a> axios.request(config)</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>get<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">' http://localhost:3000/posts'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="axios-get-url-config" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config" aria-hidden="true">#</a> axios.get(url[, config])</h5>
<h5 id="axios-delete-url-config" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config" aria-hidden="true">#</a> axios.delete(url[, config])</h5>
<h5 id="axios-head-url-config" tabindex="-1"><a class="header-anchor" href="#axios-head-url-config" aria-hidden="true">#</a> axios.head(url[, config])</h5>
<h5 id="axios-options-url-config" tabindex="-1"><a class="header-anchor" href="#axios-options-url-config" aria-hidden="true">#</a> axios.options(url[, config])</h5>
<h5 id="axios-post-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config" aria-hidden="true">#</a> axios.post(url[, data[, config]])</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>post<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
        <span class="token string">'http://localhost:3000/comments'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"body"</span><span class="token operator">:</span><span class="token string">"你真是666啊"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"postId"</span><span class="token operator">:</span><span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="axios-put-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config" aria-hidden="true">#</a> axios.put(url[, data[, config]])</h5>
<h5 id="axios-patch-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-patch-url-data-config" aria-hidden="true">#</a> axios.patch(url[, data[, config]])</h5>
<h3 id="配置config" tabindex="-1"><a class="header-anchor" href="#配置config" aria-hidden="true">#</a> 配置config</h3>
<p>基本上每个axios发送的参数中，都有<code v-pre>config</code>配置对象，配置对象大概有以下参数：</p>
<p>这些是创建请求时可以用的配置选项。只有 <code v-pre>url</code> 是必需的。如果没有指定 <code v-pre>method</code>，请求将默认使用 <code v-pre>GET</code> 方法。</p>
<p>网址：<a href="https://www.axios-http.cn/docs/req_config" target="_blank" rel="noopener noreferrer">https://www.axios-http.cn/docs/req_config<ExternalLinkIcon/></a></p>
<h3 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置" aria-hidden="true">#</a> 默认配置</h3>
<p>可以把一些重复的配置写在<code v-pre>全局默认配置</code>中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">'GET'</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">'http://localhost:3000'</span>
get<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/posts'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实例对象" tabindex="-1"><a class="header-anchor" href="#创建实例对象" aria-hidden="true">#</a> 创建实例对象</h3>
<p>默认配置只能为一个协议，域名，做默认配置，让他变得简单，但是多个协议，域名就不可以，需要用到<code v-pre>实例对象</code></p>
<p>实例对象创建方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> 对象名 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//该对象的默认的配置</span>
    <span class="token comment">//如基本URL</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span>'https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>apiopen<span class="token punctuation">.</span>top<span class="token punctuation">,</span>
    <span class="token comment">//超时时间</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span><span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以创建多个对象，用来给多个不同的路径配置默认值</p>
<p>实例对象的使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">duanzi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/getJoke'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2>
<p>在请求或响应被 then 或 catch 处理前拦截它们。</p>
<p><code v-pre>axios.interceptors.request</code>的<code v-pre>use</code>方法有两个回调函数，一个成功，一个失败</p>
<p>如果请求拦截器成功的返回值是失败的Promise，则响应拦截器也会走失败的回调，自己的请求回调也会走失败的Promise</p>
<h3 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器" aria-hidden="true">#</a> 请求拦截器</h3>
<p>多个请求拦截器时，靠后的先执行，然后向上执行</p>
<p>其中，参数<code v-pre>config</code>就是请求对象的配置，可以对配置进行修改</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器" aria-hidden="true">#</a> 响应拦截器</h3>
<p>多个响应拦截器时，靠前的先执行，向下执行其他的</p>
<p>参数<code v-pre>response</code>就是服务器返回的对象，有头，请求体，请求状态，如果想在自己的请求回调中直接处理请求体，则在响应拦截器中可以返回<code v-pre>response.data</code>，这样，自己的回调获取的直接就是请求体</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios取消请求" tabindex="-1"><a class="header-anchor" href="#axios取消请求" aria-hidden="true">#</a> axios取消请求</h2>
<h3 id="canceltoken-deprecated" tabindex="-1"><a class="header-anchor" href="#canceltoken-deprecated" aria-hidden="true">#</a> CancelToken <code v-pre>deprecated</code></h3>
<p>您可以使用 <em>cancel token</em> 取消一个请求。</p>
<ol>
<li>先在请求配置对象中添加属性<code v-pre>cancelToken</code>，值为<code v-pre>new axios.CancelToken(c=&gt;{})</code></li>
<li>在创建全局变量，在第一部的属性的值的回调函数中把这个变量的值赋为形参<code v-pre>c</code></li>
<li>在全局中，调用第二部的变量，即可取消请求</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//2.声明全局变量</span>
<span class="token keyword">let</span> cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
get<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/posts'</span><span class="token punctuation">,</span>
        <span class="token comment">//1.添加配置对象的属性cancleToken</span>
        <span class="token literal-property property">cancelToken</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token operator">=></span><span class="token punctuation">{</span>
            cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//3.点击取消请求</span>
cancleBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常用户多次点击时，需要取消上一次的请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//2.声明全局变量</span>
<span class="token keyword">let</span> cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
get<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//检测上一个请求是否完成</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>cancel <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//取消上一次的请求</span>
        <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/posts'</span><span class="token punctuation">,</span>
        <span class="token comment">//1.添加配置对象的属性cancleToken</span>
        <span class="token literal-property property">cancelToken</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token operator">=></span><span class="token punctuation">{</span>
            cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">//请求完成时，把cancel初始化</span>
        cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//3.点击取消请求</span>
cancleBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>
</div></template>


