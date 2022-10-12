<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<p>vscode字体</p>
<p><code v-pre>Consolas, 'Courier New', monospace</code></p>
<p><code v-pre>'Cascadia Code','黑体',Consolas,'Courier New',monospace</code></p>
<h1 id="_1-ajax" tabindex="-1"><a class="header-anchor" href="#_1-ajax" aria-hidden="true">#</a> 1.Ajax</h1>
<h2 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h2>
<p><strong>AJAX</strong> = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。</p>
<p>AJAX 不是新的编程语言，而是一种使用现有标准的新方法。</p>
<p>AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。</p>
<p>AJAX 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。</p>
<h2 id="_1-2-xml简介" tabindex="-1"><a class="header-anchor" href="#_1-2-xml简介" aria-hidden="true">#</a> 1.2 XML简介</h2>
<p>XML 可扩展标记语言</p>
<p>XML 被设计来用来传输和保存数据</p>
<p>XML 没有预定义标签，全是自定义标签，用来表示一些数据</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>孙悟空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gender</span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gender</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>早期使用XML从服务器获取数据，并解析，后被JSON代替</mark></p>
<h2 id="_1-3-ajax特点" tabindex="-1"><a class="header-anchor" href="#_1-3-ajax特点" aria-hidden="true">#</a> 1.3 Ajax特点</h2>
<h3 id="_1-3-1-优点" tabindex="-1"><a class="header-anchor" href="#_1-3-1-优点" aria-hidden="true">#</a> 1.3.1 优点</h3>
<ul>
<li>可以无刷新的获取服务器端的数据</li>
<li>可以更新页面部分内容</li>
</ul>
<h4 id="_1-3-2-缺点" tabindex="-1"><a class="header-anchor" href="#_1-3-2-缺点" aria-hidden="true">#</a> 1.3.2 缺点</h4>
<ul>
<li>没有历史记录</li>
<li>存在跨域问题</li>
<li>SEO(搜索引擎)不友好，异步请求过来的数据，在源代码里是没有的</li>
</ul>
<h1 id="_2-http" tabindex="-1"><a class="header-anchor" href="#_2-http" aria-hidden="true">#</a> 2.HTTP</h1>
<h2 id="_2-1-请求报文" tabindex="-1"><a class="header-anchor" href="#_2-1-请求报文" aria-hidden="true">#</a> 2.1 请求报文</h2>
<p>请求格式与参数</p>
<p>头的格式是	<code v-pre>属性: 值</code>，空格不能少</p>
<p>空行不能少</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>行	GET   /?pwd = ...	HTTP/1.1
头	Host: baidu.com
	Cookie: name=user
	...
空行(不能少)
体	username=admin&amp;password=123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-响应报文" tabindex="-1"><a class="header-anchor" href="#_2-2-响应报文" aria-hidden="true">#</a> 2.2 响应报文</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>行	HTTP1.1   200  OK
头	Host: baidu.com
	Cookie: name=user
	...
空行(不能少)
体	&lt;html>代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-express" tabindex="-1"><a class="header-anchor" href="#_3-express" aria-hidden="true">#</a> 3. Express</h1>
<p>基于<strong>Node.js</strong>平台，快速、极简的Web开发框架</p>
<h2 id="_3-1-安装express" tabindex="-1"><a class="header-anchor" href="#_3-1-安装express" aria-hidden="true">#</a> 3.1 安装express:</h2>
<p>终端:</p>
<p><code v-pre>npm i express</code></p>
<h2 id="_3-2-引入及使用-express" tabindex="-1"><a class="header-anchor" href="#_3-2-引入及使用-express" aria-hidden="true">#</a> 3.2 引入及使用 express</h2>
<blockquote>
<p>1.引入express</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>2.创建应用对象</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>3.创建路由规则</p>
</blockquote>
<p><strong>request</strong>是对请求报文的封装</p>
<p><strong>response</strong>是对响应报文的封装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>4.监听端口启动服务</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"服务已经启动，8000端口正在监听"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>5.在路由规则中设置响应</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello Express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>6.把文件放在Node中运行</p>
</blockquote>
<p>终端：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node 文件名.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以在浏览器输入:127.0.0.0:端口号</p>
<h1 id="_4-ajax发送请求" tabindex="-1"><a class="header-anchor" href="#_4-ajax发送请求" aria-hidden="true">#</a> 4. Ajax发送请求</h1>
<p>需要两个文件，一个前端，一个后端服务</p>
<h2 id="_4-1-准备" tabindex="-1"><a class="header-anchor" href="#_4-1-准备" aria-hidden="true">#</a> 4.1 准备</h2>
<p>前端页面代码:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Ajax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#app</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>136<span class="token punctuation">,</span> 46<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>点击发送请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端服务器代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/server'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 设置响应头</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置响应</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Hello Ajax"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务已经启动，端口号8000'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>在响应的代码块中，把路径修改为/server，在访问浏览器的指定路径时会使用回调函数</mark></p>
<p><mark>设置响应头的部分是为了解决跨域问题</mark></p>
<h2 id="_4-2-发送请求" tabindex="-1"><a class="header-anchor" href="#_4-2-发送请求" aria-hidden="true">#</a> 4.2 发送请求</h2>
<p>发送GET请求，与POST请求的区别就是<code v-pre>open</code>初始化的时候，和服务器需要有一个<code v-pre>app.post</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.创建对象</span>
    <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2.初始化， 设置请求的方法和url</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">"http://127.0.0.1:8000/server"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3.发送</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4.事件绑定，处理服务器返回的结果</span>
    <span class="token comment">//readystate是xhr中的属性，表示状态</span>
    <span class="token comment">//0 未初始化    1 open方法调用完毕  2 send方法调用完毕</span>
    <span class="token comment">//3 服务器返回了结果    4 服务器返回所有结果</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断(服务器返回了所有的结果)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//判断响应状态码200 404 403 401 500</span>
            <span class="token comment">//2开头的都是成功</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//处理结果  行 头 空行 体</span>
                <span class="token comment">//1.响应行  .status 状态码  statusText 状态字符串</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//2.响应头,所有响应头</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//3.响应体</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>

                app<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>发送请求时，如果带参数，GET请求的参数是直接拼接在URL后，使用?pwd=123&amp;...</code></p>
<p><code v-pre>而POST的请求参数是写在.send()发送方法中:</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"admin=zs&amp;pwd=123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>且参数的格式不止一个:<code v-pre>admin=zs/admin:zs</code></p>
<h2 id="设置请求头信息" tabindex="-1"><a class="header-anchor" href="#设置请求头信息" aria-hidden="true">#</a> 设置请求头信息</h2>
<p><code v-pre>xhr.setRequestHeader(&quot;键&quot;,&quot;值)</code></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>'Content-Type'</code>(设置请求参数的格式)</td>
<td>'application/x-www-form-urlencoded'</td>
</tr>
<tr>
<td><code v-pre>name</code></td>
<td>'atguigu'</td>
</tr>
</tbody>
</table>
<p>设置name会不被允许，则需要在服务器端添加</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发送和接收json数据" tabindex="-1"><a class="header-anchor" href="#发送和接收json数据" aria-hidden="true">#</a> 发送和接收JSON数据</h2>
<p>在服务器端设置返回数据为<strong>JSON</strong>格式</p>
<p>首先定义对象，在通过<code v-pre>JSON.stringify()</code>来装换为JSON格式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">"/json-server"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"eric"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span>
    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在前端接收时，分<code v-pre>自动转换为对象</code>和<code v-pre>手动转换为对象</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>btn<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">"json"</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span><span class="token string">"http://127.0.0.1:8000/json-server"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span><span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// let data = JSON.parse(xhr.response);</span>
                <span class="token comment">// app.innerHTML = data.name + data.age;</span>
                app<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">.</span>name
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>自动转换:</mark></p>
<p>在<code v-pre>open</code>之前设置接收的数据格式:<code v-pre>xhr.responseType = &quot;json&quot;</code>。接收的数据会自动转换为json格式</p>
<p><mark>手动转换</mark></p>
<p>在接收数据之后，通过<code v-pre>JSON.parse()</code>来转换</p>
<h2 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon" aria-hidden="true">#</a> Nodemon</h2>
<p>用处：自动重启服务器			<a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noopener noreferrer">nodemon网址<ExternalLinkIcon/></a></p>
<p>安装：终端：<code v-pre>npm install -g nodemon</code></p>
<p>使用nodemon来管理服务端:<code v-pre>nodemon server.js</code></p>
<h2 id="ie缓存问题" tabindex="-1"><a class="header-anchor" href="#ie缓存问题" aria-hidden="true">#</a> IE缓存问题</h2>
<p>IE会对Ajax请求缓存，导致更新之后，ie依然使用之前的ajax请求</p>
<p>解决方法：在请求URL上添加一个值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xhr.open("GET","http://127.0.0.1:8000/server?t="+Date.now())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样每次请求都不一样，不会被缓存影响</p>
<h2 id="请求超时和网络异常" tabindex="-1"><a class="header-anchor" href="#请求超时和网络异常" aria-hidden="true">#</a> 请求超时和网络异常</h2>
<p>超时响应：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.创建对象</span>
<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置超时2s就触发超时回调函数</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
<span class="token comment">//超时回调</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'网络超时，请重试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网络出错响应</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.创建对象</span>
<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//网络出错</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'you new is not link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动取消ajax请求" tabindex="-1"><a class="header-anchor" href="#手动取消ajax请求" aria-hidden="true">#</a> 手动取消Ajax请求</h2>
<p>调用XMLHttpRequest创建的对象的<code v-pre>.abort()</code>方法，可以取消Ajax请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.创建对象</span>
<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多次ajax请求处理" tabindex="-1"><a class="header-anchor" href="#多次ajax请求处理" aria-hidden="true">#</a> 多次Ajax请求处理</h2>
<p>使用一个变量，来标识是否有<code v-pre>多个相同的</code>Ajax请求正在发送，如果有就停止上一个，再发送新的请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">//定义标识</span>
<span class="token keyword">let</span> inSending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//如果标识为true则说明有请求正在发送，则停止他，并且再创建一个</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>isSending <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//修改标识为正在发送</span>
    isSending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//说明请求完成了，把标识修改为没有请求</span>
            isSending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-jquery发送ajax请求" tabindex="-1"><a class="header-anchor" href="#_5-jquery发送ajax请求" aria-hidden="true">#</a> 5.JQuery发送AJAX请求</h1>
<p>未学</p>
<h1 id="_6-axios发送ajax请求" tabindex="-1"><a class="header-anchor" href="#_6-axios发送ajax请求" aria-hidden="true">#</a> 6.axios发送AJAX请求</h1>
<h3 id="_6-1安装" tabindex="-1"><a class="header-anchor" href="#_6-1安装" aria-hidden="true">#</a> 6.1	安装</h3>
<p>终端：<code v-pre>npm install axios</code></p>
<p>CDN页面链接：</p>
<p><code v-pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js&quot;&gt;&lt;/script&gt;</code></p>
<p>速度更快的CND:网址	<a href="https://www.bootcdn.cn/axios/" target="_blank" rel="noopener noreferrer">https://www.bootcdn.cn/axios/<ExternalLinkIcon/></a></p>
<h3 id="需要跨域" tabindex="-1"><a class="header-anchor" href="#需要跨域" aria-hidden="true">#</a> 需要跨域:</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-发送请求" tabindex="-1"><a class="header-anchor" href="#_6-2-发送请求" aria-hidden="true">#</a> 6.2 发送请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置baseURL</span>
<span class="token comment">// axios.defaults.baseURL = "http://127.0.0.1:8000";</span>
btns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/axios-server"</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token comment">//url参数</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">admin</span><span class="token operator">:</span><span class="token string">"eric"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token string">"213055"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"atguigu"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求体要写在第二个参数位置</p>
<h3 id="_6-3-发送请求方式二" tabindex="-1"><a class="header-anchor" href="#_6-3-发送请求方式二" aria-hidden="true">#</a> 6.3 发送请求方式二</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> btns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token comment">//请求方法</span>
         <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token string">'POST'</span><span class="token punctuation">,</span>
         <span class="token comment">//url</span>
         <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/server'</span><span class="token punctuation">,</span>
         <span class="token comment">//url参数</span>
         <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
             <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">"zs"</span><span class="token punctuation">,</span>
             <span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token number">1234565</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">//头信息</span>
         <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span>
             <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
             <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">100</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">//请求体参数</span>
         <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
             <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span>
             <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">"admin"</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-fetch-发送ajax请求" tabindex="-1"><a class="header-anchor" href="#_7-fetch-发送ajax请求" aria-hidden="true">#</a> 7. fetch 发送Ajax请求</h1>
<p>未学</p>
<h1 id="_8-同源策略" tabindex="-1"><a class="header-anchor" href="#_8-同源策略" aria-hidden="true">#</a> 8.同源策略</h1>
<p>同源：<code v-pre>协议、域名、端口号</code>必须完全相同</p>
<p>违背同源策略就是跨域</p>
<h1 id="_9-jsonp" tabindex="-1"><a class="header-anchor" href="#_9-jsonp" aria-hidden="true">#</a> 9. JSONP</h1>
<p>非官方的跨域解决方案，只支持get请求</p>
<h1 id="_10-cors" tabindex="-1"><a class="header-anchor" href="#_10-cors" aria-hidden="true">#</a> 10. CORS</h1>
<p>官方的跨域解决方案</p>
<p>在服务器设置响应头，即可跨域</p>
<p><strong><code v-pre>response.setHeader(&quot;Access-Control-Allow-Origin&quot;,&quot;*&quot;);</code></strong></p>
<p><strong><code v-pre>response.setHeader(&quot;Access-Control-Allow-Headers&quot;,&quot;*&quot;);</code></strong></p>
</div></template>


