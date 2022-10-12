<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h3 id="查看自己安装过的全局包" tabindex="-1"><a class="header-anchor" href="#查看自己安装过的全局包" aria-hidden="true">#</a> 查看自己安装过的全局包</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm list <span class="token operator">-</span>g <span class="token operator">--</span>depth <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-node-js-简介" tabindex="-1"><a class="header-anchor" href="#_1-node-js-简介" aria-hidden="true">#</a> 1. Node.js 简介</h2>
<h3 id="_1-1-什么是node-js" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是node-js" aria-hidden="true">#</a> 1.1  什么是Node.js</h3>
<p>​	<code v-pre>Node.js</code>是一个基于 Chrome V8引擎的<code v-pre> JavaScript 运行环境		</code></p>
<p>​	 除了把JS代码放在浏览器运行，放在 Node 中也可以执行，作为后端开发使用</p>
<p>​	 NodeJs 教程官网：<a href="http://nodejs.cn/learn" target="_blank" rel="noopener noreferrer">http://nodejs.cn/learn<ExternalLinkIcon/></a></p>
<h3 id="_1-2-node-js中的javascript-运行环境" tabindex="-1"><a class="header-anchor" href="#_1-2-node-js中的javascript-运行环境" aria-hidden="true">#</a> 1.2 Node.js中的JavaScript 运行环境</h3>
<p>​		包含：<code v-pre>V8引擎、内置API、js代码</code></p>
<p>​		内置API：<code v-pre>fs、path、http、js内置对象、querystring...</code></p>
<p>​		①<code v-pre>浏览器</code>是JS的<code v-pre>前端运行环境</code></p>
<p>​		②<code v-pre>Node.js</code>是JS的<code v-pre>后端运行环境</code></p>
<p>​		③Node.js中 无法调用DOM 和 BOM 的<code v-pre>浏览器内置API</code></p>
<h3 id="_1-3-在-node-js-环境中执行-js代码" tabindex="-1"><a class="header-anchor" href="#_1-3-在-node-js-环境中执行-js代码" aria-hidden="true">#</a> 1.3 在 Node.js 环境中执行 JS代码</h3>
<p>​		① 打开终端</p>
<p>​		②输入： <code v-pre>node</code> 执行JS文件的路径</p>
<h2 id="_2-fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#_2-fs-文件系统模块" aria-hidden="true">#</a> 2. fs 文件系统模块</h2>
<h3 id="_2-1-什么是fs文件系统模块" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是fs文件系统模块" aria-hidden="true">#</a> 2.1 什么是fs文件系统模块</h3>
<p>​		<code v-pre>fs 模块</code>是Node.js官方提供的，用来操作文件的模块，提供了一系列的方法和属性，用来满足用户对文件的操作需求</p>
<p>​</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>fs.readFile()</code></td>
<td>用来读取指定文件中的内容</td>
</tr>
<tr>
<td><code v-pre>fs.writeFile()</code></td>
<td>用来向指定的文件中写入内容</td>
</tr>
</tbody>
</table>
<p>​		如果再JS中使用fs模块来操作文件，需要先导入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-读取指定文件中的内容" tabindex="-1"><a class="header-anchor" href="#_2-2-读取指定文件中的内容" aria-hidden="true">#</a> 2.2 读取指定文件中的内容</h3>
<h4 id="_1-fs-readfile" tabindex="-1"><a class="header-anchor" href="#_1-fs-readfile" aria-hidden="true">#</a> 1. fs.readFile()</h4>
<p>​		  使用<code v-pre>fs.readFile()</code>方法，可以读取文件中的内容，语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		 参数：</p>
<ul>
<li>参数1：<code v-pre>path</code>。必须参数，字符串，表示文件的路径</li>
<li>参数2：<code v-pre>options</code>。可选参数，表示以什么编码格式来读取文件</li>
<li>参数3：<code v-pre>callback</code>。必选参数，文件读取成功以后，通过函数回调来获取数据</li>
</ul>
<h4 id="_2-使用fs-readfile" tabindex="-1"><a class="header-anchor" href="#_2-使用fs-readfile" aria-hidden="true">#</a> 2.使用fs.readFile()</h4>
<p>​			以urf8编码格式，读取内容，并打印<code v-pre>err</code>和<code v-pre>dataStr</code>的值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.导入fs模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//调用 fs.readFile()来读取文件</span>
<span class="token comment">//参数1：文件路径</span>
<span class="token comment">//参数2：编码格式</span>
<span class="token comment">//参数3：回调函数， 拿到读取失败和成功的结果 err  dataStr</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"./1.txt"</span><span class="token punctuation">,</span><span class="token string">"utf8"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//如果读取成功，则err的值为null</span>
    <span class="token comment">//如果读取失败，err的值是 错误对象，dataStr的值是 undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//打印成功的结果，返回内容</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-向指定的文件中写入内容" tabindex="-1"><a class="header-anchor" href="#_2-3-向指定的文件中写入内容" aria-hidden="true">#</a> 2.3 向指定的文件中写入内容</h3>
<h4 id="_1-fs-writefile" tabindex="-1"><a class="header-anchor" href="#_1-fs-writefile" aria-hidden="true">#</a> 1. fs.writeFile()</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		 参数：</p>
<ul>
<li>参数1：<code v-pre>file</code>。必须参数，字符串，表示存放文件的路径</li>
<li>参数2：<code v-pre>data</code>。必选参数，表示要写入的内容</li>
<li>参数3：<code v-pre>options</code>。可选参数，表示以什么格式写入文件内容，默认值utf8</li>
<li>参数4：<code v-pre>callback</code>。必选参数，文件写入完成之后的回调函数</li>
</ul>
<h4 id="_2-使用fs-writefile" tabindex="-1"><a class="header-anchor" href="#_2-使用fs-writefile" aria-hidden="true">#</a> 2.使用fs.writeFile()</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">"./files/2.txt"</span><span class="token punctuation">,</span><span class="token string">"hello world"</span><span class="token punctuation">,</span><span class="token string">"utf8"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//如果文件写入成功，err的值是 null</span>
    <span class="token comment">//如果文件写入失败，err的值是 错误对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="成绩整理练习" tabindex="-1"><a class="header-anchor" href="#成绩整理练习" aria-hidden="true">#</a> 成绩整理练习</h3>
<p>把</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>小红=100 小白=99 小绿=98 小蓝=89 小黑=92
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>整理成：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1:小红:100 
2:小白:99 
3:小绿:98 
4:小蓝:89 
5:小黑:92 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"./成绩,txt"</span><span class="token punctuation">,</span><span class="token string">"utf8"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"文件读取失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> dataStr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> result1<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">=</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span><span class="token string">":"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result1 <span class="token operator">=</span> result1 <span class="token operator">+</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">" \n"</span><span class="token punctuation">;</span>            
        <span class="token punctuation">}</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">"./成绩-ok,txt"</span><span class="token punctuation">,</span>result1<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">'a+'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"操作失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"操作成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"操作完毕。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-文件路径动态拼接问题" tabindex="-1"><a class="header-anchor" href="#_2-4-文件路径动态拼接问题" aria-hidden="true">#</a> 2.4 文件路径动态拼接问题</h3>
<p>​		Node.js会动态拼接相对路径，会把当前路径拼接在文件路径上，很容易出错，所以解决方法是：</p>
<p>​		使用**<code v-pre>__dirname</code>**</p>
<p>​		__dirname的值返回的是，该JS文件所在的目录</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">"./1.txt"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-path-路径模块" tabindex="-1"><a class="header-anchor" href="#_3-path-路径模块" aria-hidden="true">#</a> 3. path 路径模块</h2>
<h3 id="_3-1-什么是path-路径模块" tabindex="-1"><a class="header-anchor" href="#_3-1-什么是path-路径模块" aria-hidden="true">#</a> 3.1 什么是path 路径模块</h3>
<p>​		<code v-pre>path模块</code>是node官方提供的，用来处理路径的模块，提供了一系列的方法和属性，用来满足用户对路径的处理需求</p>
<p>​</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>path.join()</code></td>
<td>用来将多个路径片段拼接成一个完整的路径字符串</td>
</tr>
<tr>
<td><code v-pre>path.basename()</code></td>
<td>用来从路径字符串中，将文件名解析出来</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-使用-path模块" tabindex="-1"><a class="header-anchor" href="#_3-2-使用-path模块" aria-hidden="true">#</a> 3.2 使用 path模块</h3>
<p>​		使用<code v-pre>path</code>模块需要先导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-path-join" tabindex="-1"><a class="header-anchor" href="#_3-3-path-join" aria-hidden="true">#</a> 3.3 path.join()</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pathStr <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/a'</span><span class="token punctuation">,</span><span class="token string">'/b/c'</span><span class="token punctuation">,</span><span class="token string">'../'</span><span class="token punctuation">,</span><span class="token string">'/d'</span><span class="token punctuation">,</span><span class="token string">'/e'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span> <span class="token comment">//输出 \a\b\d\e		'../'会抵消前面最近的一个路径，所以\c没了</span>

<span class="token keyword">const</span> pathStr2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"/files/1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathStr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 当前文件所在的目录\files\1.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-path-basename" tabindex="-1"><a class="header-anchor" href="#_3-4-path-basename" aria-hidden="true">#</a> 3.4 path.basename()</h3>
<p>​		可以获取到路径中的最后一部分，就是文件名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>ext<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		参数：</p>
<ul>
<li><code v-pre>path</code>：必选参数，表示路径</li>
<li><code v-pre>ext</code>：可选参数，表示文件扩展名</li>
<li>返回字符串：表示路径中的最后一部分</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fpath <span class="token operator">=</span> <span class="token string">"/a/b/index.html"</span>

<span class="token keyword">let</span> fullName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span>	<span class="token comment">//输出 index.html</span>

<span class="token keyword">let</span> fullName2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">,</span><span class="token string">'.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName2<span class="token punctuation">)</span>	<span class="token comment">//输出 index</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-path-extname" tabindex="-1"><a class="header-anchor" href="#_3-5-path-extname" aria-hidden="true">#</a> 3.5 path.extname</h3>
<p>​		可以获取路径中文件的扩展名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>路径<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-时钟分离案例" tabindex="-1"><a class="header-anchor" href="#_3-6-时钟分离案例" aria-hidden="true">#</a> 3.6 时钟分离案例</h3>
<p>​		需要一个带有<code v-pre>&lt;style&gt;</code>和<code v-pre>&lt;script&gt;</code>的html文件，可以把其中的<code v-pre>&lt;style&gt;、&lt;script&gt;</code>和HTML全部分离到新的文件中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolveObjectURL <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"buffer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> regStyle <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;style>[\s\S]*&lt;\/style></span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> regScript <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;script>[\s\S]*&lt;\/script></span><span class="token regex-delimiter">/</span></span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"./index.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"读取错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">resolveStyle</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolveScript</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolveHtml</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//处理css样式</span>
<span class="token keyword">function</span> <span class="token function">resolveStyle</span><span class="token punctuation">(</span><span class="token parameter">htmlStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r1 <span class="token operator">=</span> regStyle<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newCss <span class="token operator">=</span> r1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"&lt;style>"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"&lt;/style>"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"./index.css"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>newCss<span class="token punctuation">,</span><span class="token string">'utf-8'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"写入css失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//处理js</span>
<span class="token keyword">function</span> <span class="token function">resolveScript</span><span class="token punctuation">(</span><span class="token parameter">htmlStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r2 <span class="token operator">=</span> regScript<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> newScript <span class="token operator">=</span> r2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"&lt;script>"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"&lt;/script>"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"./index.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>newScript<span class="token punctuation">,</span><span class="token string">"utf-8"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"写入js失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//处理html</span>
<span class="token keyword">function</span> <span class="token function">resolveHtml</span><span class="token punctuation">(</span><span class="token parameter">htmlStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newHtml <span class="token operator">=</span> htmlStr
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regStyle<span class="token punctuation">,</span><span class="token string">"&lt;link rel='stylesheet' href='./index.css'/>"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regScript<span class="token punctuation">,</span><span class="token string">"&lt;script src='./index.js'>&lt;/script>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"./indexNew.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>newHtml<span class="token punctuation">,</span><span class="token string">'utf-8'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"写入html失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-http-模块" tabindex="-1"><a class="header-anchor" href="#_4-http-模块" aria-hidden="true">#</a> 4. Http 模块</h2>
<h3 id="_4-1-什么是http模块" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是http模块" aria-hidden="true">#</a> 4.1 什么是Http模块</h3>
<p>​		<code v-pre>http模块</code>是Node.js官方提供的、用来<code v-pre>创建 Web 服务器</code>的模块，通过 http 模块的<code v-pre>http.createServer()</code>方法，就能把电脑变为一台web服务器</p>
<p>使用http模块需要先导入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-使用-http-模块" tabindex="-1"><a class="header-anchor" href="#_4-2-使用-http-模块" aria-hidden="true">#</a> 4.2 使用 http 模块</h3>
<h4 id="_1-导入http模块" tabindex="-1"><a class="header-anchor" href="#_1-导入http模块" aria-hidden="true">#</a> 1.导入http模块</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-创建web服务器实例" tabindex="-1"><a class="header-anchor" href="#_2-创建web服务器实例" aria-hidden="true">#</a> 2. 创建web服务器实例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-为服务器绑定request事件" tabindex="-1"><a class="header-anchor" href="#_3-为服务器绑定request事件" aria-hidden="true">#</a> 3. 为服务器绑定request事件</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//只有有客户端开请求服务器，就会触发request事件,从而触发回调函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"i am server"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-启动服务器" tabindex="-1"><a class="header-anchor" href="#_4-启动服务器" aria-hidden="true">#</a> 4. 启动服务器</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//调用server.listen(端口号,回调函数)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//启动之后触发回调函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-在终端启动服务器" tabindex="-1"><a class="header-anchor" href="#_5-在终端启动服务器" aria-hidden="true">#</a> 5. 在终端启动服务器</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node js文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-创建基本的web服务器" tabindex="-1"><a class="header-anchor" href="#_4-3-创建基本的web服务器" aria-hidden="true">#</a> 4.3 创建基本的web服务器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"触发函数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"服务器已启动"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-req-请求对象" tabindex="-1"><a class="header-anchor" href="#_4-4-req-请求对象" aria-hidden="true">#</a> 4.4 req 请求对象</h3>
<p>​		<code v-pre>req</code>包含了客户端相关的数据额属性</p>
<p>​		<code v-pre>req.url</code> 是客户端请求的URL地址</p>
<p>​		<code v-pre>req.method</code>	是客户端的method请求类型</p>
<h3 id="_4-5-res-响应" tabindex="-1"><a class="header-anchor" href="#_4-5-res-响应" aria-hidden="true">#</a> 4.5 res 响应</h3>
<p>​		<code v-pre>res.end()</code> 向客户端响应内容</p>
<h3 id="_4-6-解决中文乱码问题" tabindex="-1"><a class="header-anchor" href="#_4-6-解决中文乱码问题" aria-hidden="true">#</a> 4.6 解决中文乱码问题</h3>
<p>​		<code v-pre>res.setHeader('COntent-Type','text/html; charset=utf-8')</code></p>
<h2 id="_5-模块化" tabindex="-1"><a class="header-anchor" href="#_5-模块化" aria-hidden="true">#</a> 5. 模块化</h2>
<blockquote>
<ul>
<li>知道模块化的好处</li>
<li>知道<code v-pre>CommonJS</code>规定了哪些内容</li>
<li>说出Node.js 中模块的三大分类</li>
<li>能够使用npm 管理包</li>
<li>了解什么是规范的包结构</li>
<li>了解模块的加载机制</li>
</ul>
</blockquote>
<h3 id="_5-1-node-js-模块分类" tabindex="-1"><a class="header-anchor" href="#_5-1-node-js-模块分类" aria-hidden="true">#</a> 5.1 Node.js 模块分类</h3>
<h4 id="内置模块-nodejs官方提供-如fs、path、http" tabindex="-1"><a class="header-anchor" href="#内置模块-nodejs官方提供-如fs、path、http" aria-hidden="true">#</a> <code v-pre>内置模块</code>：Nodejs官方提供，如fs、path、http</h4>
<h4 id="自定义模块-创建的每个-js文件-都是自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块-创建的每个-js文件-都是自定义模块" aria-hidden="true">#</a> <code v-pre>自定义模块</code>：创建的每个.js文件，都是自定义模块</h4>
<h4 id="第三方模块-由第三方开发的模块-并非官方提供-使用前需要下载" tabindex="-1"><a class="header-anchor" href="#第三方模块-由第三方开发的模块-并非官方提供-使用前需要下载" aria-hidden="true">#</a> <code v-pre>第三方模块</code>：由第三方开发的模块，并非官方提供，使用前需要下载</h4>
<h3 id="_5-2-module对象" tabindex="-1"><a class="header-anchor" href="#_5-2-module对象" aria-hidden="true">#</a> 5.2 <code v-pre>module</code>对象</h3>
<p>​		每个  .js 自定义模块中都有一个 <code v-pre>module</code>	对象，存储了和该模块有关的信息。默认是一个空对象。</p>
<p>​		其中有一个属性：<code v-pre>module.exports</code>		,可以将本模块内的成员暴露出去，供外界使用。</p>
<p>​		当外界使用<code v-pre>require()</code>方法导入自定义模块时，得到的正是<code v-pre>module.exports</code>所指向的对象</p>
<p>​		并且只会暴露最后一次指向的对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'eric'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">19</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'kiku'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./暴露成员'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//{ name: 'kiku', age: 20 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-exports对象" tabindex="-1"><a class="header-anchor" href="#_5-3-exports对象" aria-hidden="true">#</a> 5.3 <code v-pre>exports对象</code></h3>
<p>​		<code v-pre>exports</code>对象，和<code v-pre>module.exports</code>指向的是同一个对象，通过exports对象向外共享的和module.exports一样</p>
<p>​		但是，暴露的永远是<code v-pre>module.exports</code>指向的对象，如果这两个指向的对象不是同一个，那么以<code v-pre>module.exports</code>为准</p>
<h3 id="_5-4-commonjs" tabindex="-1"><a class="header-anchor" href="#_5-4-commonjs" aria-hidden="true">#</a> 5.4 CommonJS</h3>
<p>​		Node.js 遵循了 CommonJS 模块化规范，规定了模块之间的特性和各个模块之间如何相互依赖</p>
<pre><code>	* 每个模块内部，`module` 代表该模块
	* module 是一个对象，他的exports 属性是对外的接口
	* 加载某个模块，其实是加载该模块的module.exprts属性,`require()`用于加载模块
</code></pre>
<h2 id="_6-npm-与-包" tabindex="-1"><a class="header-anchor" href="#_6-npm-与-包" aria-hidden="true">#</a> 6. npm 与 包</h2>
<h3 id="_6-1-快速创建-package-json" tabindex="-1"><a class="header-anchor" href="#_6-1-快速创建-package-json" aria-hidden="true">#</a> 6.1 快速创建 package.json</h3>
<p>​		<code v-pre>npm init -y</code></p>
<p>​		项目文件夹不用有中文，在使用npm安装包时会自动在<code v-pre>package.json</code>中把包的版本号和名称标注</p>
<p>​		package.json中有一个<code v-pre>dependencies</code>节点，其中标注了所有安装过的包名和版本</p>
<h3 id="_6-2-一次安装所有项目使用的包" tabindex="-1"><a class="header-anchor" href="#_6-2-一次安装所有项目使用的包" aria-hidden="true">#</a> 6.2 一次安装所有项目使用的包</h3>
<p>​		<code v-pre>npm install</code>：一次安装所有的包</p>
<p>​		会先读取<code v-pre>package.json</code>中所有包名和版本号，然后会自动下载</p>
<h3 id="_6-3-卸载包" tabindex="-1"><a class="header-anchor" href="#_6-3-卸载包" aria-hidden="true">#</a> 6.3 卸载包</h3>
<p>​		<code v-pre>npm uninstall 包名</code></p>
<p>​		会把包从<code v-pre>package.json</code>中移除</p>
<h3 id="_6-4-devdependencies" tabindex="-1"><a class="header-anchor" href="#_6-4-devdependencies" aria-hidden="true">#</a> 6.4 devDependencies</h3>
<p>​		如果某些包在<code v-pre>项目开发阶段</code>用到，就把这些包放在<code v-pre>devDependencies</code>节点中</p>
<p>​		如果某些包在开发和上线都用到，就放在<code v-pre>dependencies</code>节点</p>
<p>​		<code v-pre>npm i 包名 -D</code>	：安装包时，把包放在<code v-pre>devDependencies</code>节点</p>
<h3 id="_6-5-镜像服务器" tabindex="-1"><a class="header-anchor" href="#_6-5-镜像服务器" aria-hidden="true">#</a> 6.5 镜像服务器</h3>
<p>​		淘宝镜像服务器：每隔一段时间，自动同步官方服务器的包，对用户提供下包服务</p>
<p>​		切换 下包的服务器地址：</p>
<p>​		<code v-pre>npm config get registry</code>	：查看当前的下包镜像源</p>
<p>​		<code v-pre>npm config set registry=https://registry.npm.taobao.org/</code>	：把下包镜像源切换为淘宝镜像源</p>
<p>​		<code v-pre>npm config get registry</code>	： 检查镜像源是否下载成功</p>
<h3 id="_6-6-nrm" tabindex="-1"><a class="header-anchor" href="#_6-6-nrm" aria-hidden="true">#</a> 6.6 nrm</h3>
<p>​		方便切换下包的镜像源</p>
<p>​		<code v-pre>npm i nrm -g</code>	：安装nrm</p>
<p>​		<code v-pre>nrm ls</code>	：查看所有可用的镜像源</p>
<p>​		<code v-pre>nrm use taobao</code>	：将下包镜像源切换到淘宝</p>
<h3 id="_6-7-项目包" tabindex="-1"><a class="header-anchor" href="#_6-7-项目包" aria-hidden="true">#</a> 6.7 项目包</h3>
<p>​		<code v-pre>开发依赖包</code>	：开发期间用的包，记录在<code v-pre>devDependencies</code>节点</p>
<p>​		<code v-pre>核心依赖包</code>	：开发和上线都用到的包，记录在<code v-pre>dependencies</code>节点</p>
<h3 id="_6-8-全局包" tabindex="-1"><a class="header-anchor" href="#_6-8-全局包" aria-hidden="true">#</a> 6.8 全局包</h3>
<p>​		如果在安装包时，加上<code v-pre>-g</code> ，这说明是安装的全局包</p>
<p>​		全局包会被安装在C:\Users\Administrator\AppData\Roaming\npm</p>
<p>​		<code v-pre>npm i 包名 -g </code>	：安装全局包</p>
<p>​		<code v-pre>npm uninstall 包名 -g</code>	卸载全局包</p>
<p>​		参考官方建议安装全局包</p>
<h3 id="_6-9-i5ting-toc" tabindex="-1"><a class="header-anchor" href="#_6-9-i5ting-toc" aria-hidden="true">#</a> 6.9 i5ting_toc</h3>
<p>​		<code v-pre>i5ting_toc</code>	 是一个可以把<code v-pre>md文档</code>转为<code v-pre>html</code>页面的工具</p>
<p>​		<code v-pre>npm install -g i5ting_toc</code>：安装i5ting_toc</p>
<p>​		<code v-pre>i5ting_toc	-f md文件路径 -o</code>	：使用工具</p>
<h2 id="_7-开发自己的包" tabindex="-1"><a class="header-anchor" href="#_7-开发自己的包" aria-hidden="true">#</a> 7. 开发自己的包</h2>
<h3 id="_7-1-初始化包的基本结构" tabindex="-1"><a class="header-anchor" href="#_7-1-初始化包的基本结构" aria-hidden="true">#</a> 7.1 初始化包的基本结构</h3>
<pre><code>	1. 新建文件夹，作为包的根目录
	2. 在文件夹中，需要三个文件夹：
   		1. `package.json`	：包管理配置文件
   		2. `index.js` ：包入口文件
   		3. `README.md`： 包说明文档
</code></pre>
<h3 id="_7-2-初始化-package-json" tabindex="-1"><a class="header-anchor" href="#_7-2-初始化-package-json" aria-hidden="true">#</a> 7.2 初始化 package.json</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"ek-tools"</span><span class="token punctuation">,</span> 		<span class="token comment">//包名</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>		<span class="token comment">//版本号：大版本.功能版本.bug版本</span>
    <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>		<span class="token comment">//入口文件</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"erickiku's tools"</span><span class="token punctuation">,</span>		<span class="token comment">//对包的描述</span>
    <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"kiku"</span><span class="token punctuation">,</span><span class="token string">"tools"</span><span class="token punctuation">,</span><span class="token string">"erickiku"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//搜索关键字</span>
    <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span>		<span class="token comment">//遵循的开源许可协议，推荐ISC</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js 入口函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> hh <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> mm <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ss <span class="token operator">=</span> <span class="token function">padZero</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>m<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>d<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hh<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mm<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ss<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>		<span class="token comment">//注意用反引号</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">padZero</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">></span> <span class="token number">9</span> <span class="token operator">?</span>n <span class="token operator">:</span> <span class="token string">'0'</span><span class="token operator">+</span>n
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    dateFormat
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编写README.md文件</p>
<h3 id="_7-3-注册npm-账号并发布包" tabindex="-1"><a class="header-anchor" href="#_7-3-注册npm-账号并发布包" aria-hidden="true">#</a> 7.3 注册npm 账号并发布包</h3>
<p>​		未使用</p>
<h2 id="_8-express" tabindex="-1"><a class="header-anchor" href="#_8-express" aria-hidden="true">#</a> 8. Express</h2>
<h3 id="_8-1-express-作用" tabindex="-1"><a class="header-anchor" href="#_8-1-express-作用" aria-hidden="true">#</a> 8.1 Express 作用</h3>
<p>​		1.<code v-pre>Web</code> 网站服务器</p>
<p>​		2.<code v-pre>API</code> 接口服务器</p>
<h3 id="_8-2-使用" tabindex="-1"><a class="header-anchor" href="#_8-2-使用" aria-hidden="true">#</a> 8.2 使用</h3>
<p>​		见 <a href="http://Ajax.md" target="_blank" rel="noopener noreferrer">Ajax.md<ExternalLinkIcon/></a></p>
<h3 id="_8-3-获取-url-中所携带的参数" tabindex="-1"><a class="header-anchor" href="#_8-3-获取-url-中所携带的参数" aria-hidden="true">#</a> 8.3 获取 URL 中所携带的参数</h3>
<p>​		<code v-pre>request.query</code> ：获取客户端发送来的查询参数，默认是一个控对象</p>
<p>​		如果请求的URL中带有参数，就可以获取到，通过<code v-pre>xhr.send()</code>是不可以的</p>
<h3 id="_8-4-获取-url-中的动态参数" tabindex="-1"><a class="header-anchor" href="#_8-4-获取-url-中的动态参数" aria-hidden="true">#</a> 8.4 获取 URL 中的动态参数</h3>
<p>​		<code v-pre>req.params</code>：可以访问到URL中通过<code v-pre>:</code>匹配到的动态参数，默认是一个空对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span><span class="token string">"http://127.0.0.1:8000/server/eric/123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后端：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/server/:admin/:pwd'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-托管静态资源" tabindex="-1"><a class="header-anchor" href="#_8-5-托管静态资源" aria-hidden="true">#</a> 8.5 托管静态资源</h3>
<h4 id="_8-5-1-express-static" tabindex="-1"><a class="header-anchor" href="#_8-5-1-express-static" aria-hidden="true">#</a> 8.5.1  express.static()</h4>
<p>​			<code v-pre>express.static()</code>：通过这个，可以创建一个静态资源服务器，参数是目录,就可以通过URL访问目录下的文件，多次调用，就可以托管多个目录。而且使用资源不需要写目录名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//调用express.static()方法</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./clock'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-5-2-挂在路径前缀" tabindex="-1"><a class="header-anchor" href="#_8-5-2-挂在路径前缀" aria-hidden="true">#</a> 8.5.2 挂在路径前缀</h4>
<p>​			有前缀时，想要使用目录的资源需要加前缀，前缀自定义。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/clock'</span><span class="token punctuation">,</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./clock'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-6-路由" tabindex="-1"><a class="header-anchor" href="#_8-6-路由" aria-hidden="true">#</a> 8.6 路由</h3>
<p>​		Express中路由由三部分组成：<code v-pre>请求的类型</code>、<code v-pre>请求的URL地址</code>、<code v-pre>处理函数</code></p>
<p>​		<code v-pre>app.get('/')</code>、<code v-pre>app.post('/')</code>	：就是简单的路由</p>
<p>​		方便路由的管理，不建议挂在在app上，推荐抽离为单独的模块</p>
<h4 id="_8-6-1-模块化路由" tabindex="-1"><a class="header-anchor" href="#_8-6-1-模块化路由" aria-hidden="true">#</a> 8.6.1 模块化路由</h4>
<p>​			1.创建路由对应的.js文件</p>
<p>​			2.调用<code v-pre>express.Router()</code>	函数创建路由对象</p>
<p>​			3.向路由对象上挂在具体的路由</p>
<p>​			4.使用<code v-pre>module.exprts()</code>向外共享路由对象</p>
<p>​			6.使用<code v-pre>app.use()</code>函数注册路由模块</p>
<h4 id="_8-6-2-使用模块化路由" tabindex="-1"><a class="header-anchor" href="#_8-6-2-使用模块化路由" aria-hidden="true">#</a> 8.6.2 使用模块化路由</h4>
<p>​			先创建一个路由对象，代码如下路由对象，并且导出路由对象</p>
<p>​			在服务器中导入路由模块，并且注册导入的路由对象，就可以使用</p>
<p>​			创建服务器.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//导入路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./router'</span><span class="token punctuation">)</span>

<span class="token comment">//注册路由模块</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>


app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8001</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器启动，端口号8001'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​			一个路由对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//路由模块</span>
<span class="token comment">//导入express</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建路由对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//挂在具体的路由</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'user Get router module'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'user Post router module'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//导出路由对象</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-6-3-路由前缀" tabindex="-1"><a class="header-anchor" href="#_8-6-3-路由前缀" aria-hidden="true">#</a> 8.6.3 	路由前缀</h4>
<p>​			在注册路由模块时，在前面加上一个前缀，则每次访问路由都需要加上这个前缀</p>
<p>​			<code v-pre>app.use('/api',router)</code>	,则上面的服务器代码应该变为</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//导入路由模块</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./router'</span><span class="token punctuation">)</span>

<span class="token comment">//注册路由模块,并且添加了路由前缀</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>


app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8001</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器启动，端口号8001'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-中间件" tabindex="-1"><a class="header-anchor" href="#_8-7-中间件" aria-hidden="true">#</a> 8.7 中间件</h3>
<p>​	<code v-pre>中间件</code>，指业务处理的中间处理环节</p>
<p>​	当一个请求到达服务器之后，可以连续调用多个中间件，对这次请求进行预处理</p>
<h4 id="_8-7-1-格式" tabindex="-1"><a class="header-anchor" href="#_8-7-1-格式" aria-hidden="true">#</a> 8.7.1 格式</h4>
<p>​	中间件的形参列表中，必须包含next参数，而路由处理函数中只包含req和res</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-7-2-next函数的作用" tabindex="-1"><a class="header-anchor" href="#_8-7-2-next函数的作用" aria-hidden="true">#</a> 8.7.2  <code v-pre>next</code>函数的作用</h4>
<p>​		next函数是实现多个中间件连续调用的关键，他表示把请求交给下一个中间件还是路由</p>
<h4 id="_8-7-3-中间件的使用" tabindex="-1"><a class="header-anchor" href="#_8-7-3-中间件的使用" aria-hidden="true">#</a> 8.7.3 中间件的使用</h4>
<p>​		在中间件的最后，一定要调用<code v-pre>next()</code>方法，去把请求交给下一个中间件或路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mw</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是一个中间件'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-7-3-全局的中间件" tabindex="-1"><a class="header-anchor" href="#_8-7-3-全局的中间件" aria-hidden="true">#</a> 8.7.3 全局的中间件</h4>
<p>​		客户端发起任意请求，都会触发的中间件，叫全局生效中间件</p>
<p>​		创建一个中间件之后，通过调用<code v-pre>app.use(中间件)</code>，即可定义一个全局生效的中间件</p>
<p>​		全局中间件可以定义多个，按顺序执行</p>
<h4 id="_8-7-4-中间件的作用" tabindex="-1"><a class="header-anchor" href="#_8-7-4-中间件的作用" aria-hidden="true">#</a> 8.7.4 中间件的作用</h4>
<p>​		多个中间件之间，共享一份<code v-pre>req</code>和<code v-pre>res</code>，所以我们可以在上游的中间件中，统一的为req或res添加<code v-pre>自定义</code>的<code v-pre>属性</code>或<code v-pre>方法</code>，供下游的中间件或路由使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">zjj</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> tiem <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    req<span class="token punctuation">.</span>time <span class="token operator">=</span> time<span class="token punctuation">;</span>
    
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-7-5-中间件注意事项" tabindex="-1"><a class="header-anchor" href="#_8-7-5-中间件注意事项" aria-hidden="true">#</a> 8.7.5 中间件注意事项</h4>
<p>​	1.在<code v-pre>路由之前</code>注册中间件</p>
<p>​	2.可以对请求连续调用多个中间件</p>
<p>​	3.一定要在最后调用<code v-pre>next()</code></p>
<p>​	4.不要在<code v-pre>next()</code>之后写代码</p>
<p>​	5.多个中间件之间，共享req和res</p>
<h4 id="_8-7-6-中间件分类" tabindex="-1"><a class="header-anchor" href="#_8-7-6-中间件分类" aria-hidden="true">#</a> 8.7.6 中间件分类</h4>
<p>​	1. <code v-pre>应用级别中间件</code></p>
<p>​			直接被app挂载的：<code v-pre>app.use()、app.get()、app.post()</code></p>
<p>​	2.<code v-pre>路由级别中间件</code></p>
<p>​			和应用级别中间件没有却别，路由中间件是绑定在<code v-pre>路由对象</code>上，不是<code v-pre>app</code>上</p>
<p>​	3.<code v-pre>错误级别中间件</code></p>
<p>​			用来捕获项目中发生的异常错误，防止项目崩溃</p>
<p>​			参数必须有四个，分别是<code v-pre>(err,req,res,next)</code></p>
<p>​			格式：<code v-pre>app.use(function(err,req,res,next){..})</code></p>
<p>​	4.<code v-pre>Express内置中间件</code></p>
<p>​			1. express.static()	：托管静态资源</p>
<p>​			2.express.json	：解析JSON格式的请求体数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​			3.express.urlencoded	: 解析URL-encoded	格式的请求体数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">,</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​	5.<code v-pre>第三方中间件</code></p>
<p>​			由第三方提供的中间件，按需下载，提高开发效率</p>
<p>​			例如：<code v-pre>body-parser</code>：来解析请求数据，使用如下</p>
<p>​				1.<code v-pre>npm install body-parser</code> 安装中间件</p>
<p>​				2.使用<code v-pre>require</code>导入中间件</p>
<p>​				3.调用<code v-pre>app.use()</code>注册并使用中间件</p>
<p>​			注册之后，在路由中使用<code v-pre>req.body</code>可以获取请求发送过来的数据</p>
<h2 id="_9-mysql" tabindex="-1"><a class="header-anchor" href="#_9-mysql" aria-hidden="true">#</a> 9.MySQL</h2>
<p>常见的数据库有：</p>
<ul>
<li><code v-pre>MySQL</code>数据库</li>
<li><code v-pre>Oracle</code>数据库</li>
<li><code v-pre>SQL Server</code>数据库</li>
<li><code v-pre>Mongodb</code>数据库</li>
</ul>
<p>前三者属于<code v-pre>关系型数据库</code>,设计理念相同，用法类似</p>
<p><code v-pre>Mongodb</code>数据库属于<code v-pre>非关系型数据库</code>，一定程度弥补了关系型数据库的缺陷</p>
<h3 id="_9-1-sql语法" tabindex="-1"><a class="header-anchor" href="#_9-1-sql语法" aria-hidden="true">#</a> 9.1 	SQL语法</h3>
<p>网站：<a href="https://www.w3school.com.cn/sql/sql_select.asp" target="_blank" rel="noopener noreferrer">https://www.w3school.com.cn/sql/sql_select.asp<ExternalLinkIcon/></a></p>
<h3 id="_9-2-在项目中操作数据库步骤" tabindex="-1"><a class="header-anchor" href="#_9-2-在项目中操作数据库步骤" aria-hidden="true">#</a> 9.2 在项目中操作数据库步骤</h3>
<p>​	1.安装操作数MySQL数据库的第三方模块<code v-pre>mysql</code>	：<code v-pre>npm i mysql</code></p>
<p>​	2.通过mysql模块连接到MySQL数据库</p>
<p>​	3.通过mysql模块执行SQL语句</p>
<h3 id="_9-3-配置mysql模块" tabindex="-1"><a class="header-anchor" href="#_9-3-配置mysql模块" aria-hidden="true">#</a> 9.3 配置mysql模块</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//导入 mysql 模块</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mysql'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>     <span class="token comment">//数据库的 IP 地址</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">'root'</span><span class="token punctuation">,</span>          <span class="token comment">//数据库的账号</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">'123456'</span><span class="token punctuation">,</span>    <span class="token comment">//数据库的密码</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span><span class="token string">'node_db'</span>    <span class="token comment">//指定数据库     </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-测试-mysql-模块是否连接成功" tabindex="-1"><a class="header-anchor" href="#_9-4-测试-mysql-模块是否连接成功" aria-hidden="true">#</a> 9.4 测试 mysql 模块是否连接成功</h3>
<p>​	<code v-pre>db.query()</code>，如果返回的result结果是<code v-pre>[ RowDataPacket { '1': 1 } ]</code>，说明连接成功</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//测试 是否 连接 成功</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'select 1'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//连接错误时触发</span>
        <span class="token keyword">return</span>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'连接错误'</span><span class="token operator">+</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//成功连接数据库</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-查询数据" tabindex="-1"><a class="header-anchor" href="#_9-5-查询数据" aria-hidden="true">#</a> 9.5 查询数据</h3>
<p>​	第一个参数是SQL语句</p>
<p>​	返回的结果是一个数组，可以用数组的方法来获取其中具体的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//查询</span>
<span class="token keyword">let</span> sqlQuery <span class="token operator">=</span> <span class="token string">'select * from nodejs'</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sqlQuery<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'查询失败，请重试'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-6-插入数据" tabindex="-1"><a class="header-anchor" href="#_9-6-插入数据" aria-hidden="true">#</a> 9.6 插入数据</h3>
<p>​	插入SQL中把数据用<code v-pre>?</code>当占位符，在<code v-pre>db.query()</code>中，第二个参数是插入的值，用数组的形式使用</p>
<p>​	返回结果是一个对象，对象中有个属性，如下</p>
<p>​	使用<code v-pre>result.affectedRows === 1</code>，说明插入成功</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//插入</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'eric'</span><span class="token punctuation">,</span><span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token string">'213055'</span><span class="token punctuation">,</span><span class="token literal-property property">cj</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> insertSQL <span class="token operator">=</span> <span class="token string">'INSERT INTO nodejs VALUES(?,?,?,?)'</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>insertSQL<span class="token punctuation">,</span><span class="token punctuation">[</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>user<span class="token punctuation">.</span>pwd<span class="token punctuation">,</span>user<span class="token punctuation">.</span>cj<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"插入错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	插入数据的<code v-pre>简单</code>方法</p>
<p>​	把SQL语句的最后写成<code v-pre>SET ?</code>，在插入时，把参数设置为一个对象，那么会把这个对象里对应的列名插入进去</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'eric'</span><span class="token punctuation">,</span><span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token string">'213055'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> insertSQL <span class="token operator">=</span> <span class="token string">'INSERT INTO nodejs SET ?'</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>insertSQL<span class="token punctuation">,</span>user<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"插入错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-7-更新数据" tabindex="-1"><a class="header-anchor" href="#_9-7-更新数据" aria-hidden="true">#</a> 9.7 更新数据</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//更新</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">,</span><span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token string">'213055'</span><span class="token punctuation">,</span><span class="token literal-property property">cj</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> updatedSQL <span class="token operator">=</span> <span class="token string">'UPDATE nodejs SET name=?,pwd=?,cj=? WHERE id=?'</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>updatedSQL<span class="token punctuation">,</span><span class="token punctuation">[</span>user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>user<span class="token punctuation">.</span>pwd<span class="token punctuation">,</span>user<span class="token punctuation">.</span>cj<span class="token punctuation">,</span>user<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"更新错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>affectedRows <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'更新数据成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	更新数据的<code v-pre>简单</code>方法：</p>
<p>​	更新字段用<code v-pre>SET ?</code>，传参第二个参数用对象和<code v-pre>对象.id</code>，传的对象匹配的字段会更新</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//更新</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">,</span><span class="token literal-property property">pwd</span><span class="token operator">:</span><span class="token string">'213055'</span><span class="token punctuation">,</span><span class="token literal-property property">cj</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> updatedSQL <span class="token operator">=</span> <span class="token string">'UPDATE nodejs SET ? WHERE id=?'</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>updatedSQL<span class="token punctuation">,</span><span class="token punctuation">[</span>user<span class="token punctuation">,</span>user<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"更新错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>affectedRows <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'更新数据成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-8删除数据" tabindex="-1"><a class="header-anchor" href="#_9-8删除数据" aria-hidden="true">#</a> 9.8	删除数据</h3>
<p>​</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//删除</span>
<span class="token keyword">const</span> deleteSQL <span class="token operator">=</span> <span class="token string">'DELETE FROM nodejs WHERE id=?'</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>deleteSQL<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"删除错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>affectedRows <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'删除数据成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>推荐使用标记删除，使用更新SQL语句，把对应的删除标识位修改为删除</code></p>
<h2 id="_10-web-开发模式" tabindex="-1"><a class="header-anchor" href="#_10-web-开发模式" aria-hidden="true">#</a> 10. Web 开发模式</h2>
<h3 id="_10-2-身份认证" tabindex="-1"><a class="header-anchor" href="#_10-2-身份认证" aria-hidden="true">#</a> 10.2 身份认证</h3>
<p>​	1.<code v-pre>服务端渲染</code>	使用 <code v-pre>Session 认证机制</code></p>
<p>​	2.<code v-pre>前后端分离</code> 使用 <code v-pre>JWT 认证机制</code></p>
<h3 id="_10-3-cookie" tabindex="-1"><a class="header-anchor" href="#_10-3-cookie" aria-hidden="true">#</a> 10.3 Cookie</h3>
<p>​	<code v-pre>Cookie</code>是存储在浏览器的一个字符串，一般不超过4kb，由<code v-pre>一个名称和一个值</code>组成,和其他几个控制Cookie有效期、安全性等的可选属性。</p>
<p>​	不同域名下的Cookie相互独立，当客户端发出请求时，<code v-pre>会自动把未过期的Cookie一同发送到服务器</code></p>
<p>​	Cookie没有安全性，可以被伪造</p>
<h3 id="_10-4-session" tabindex="-1"><a class="header-anchor" href="#_10-4-session" aria-hidden="true">#</a> 10.4 Session</h3>
<p>​	作用：	提高身份认证的安全性</p>
<h2 id="_11-express-session" tabindex="-1"><a class="header-anchor" href="#_11-express-session" aria-hidden="true">#</a> 11. express-session</h2>
<h4 id="_11-1-配置-express-session-中间件" tabindex="-1"><a class="header-anchor" href="#_11-1-配置-express-session-中间件" aria-hidden="true">#</a> 11.1 配置 express-session 中间件</h4>
<p>​		安装：<code v-pre>npm install express-session</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//导入session中间件</span>
<span class="token keyword">let</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express-session'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//配置session中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span><span class="token string">'keyboard cat'</span><span class="token punctuation">,</span>	<span class="token comment">//secret 属性的值可以为任意字符</span>
    <span class="token literal-property property">resave</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>			<span class="token comment">//固定写法</span>
    saveUninitialized；<span class="token boolean">true</span> <span class="token comment">//固定写法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-使用session" tabindex="-1"><a class="header-anchor" href="#_11-2-使用session" aria-hidden="true">#</a> 11.2 使用session</h3>
<p>​		配置成功之后，可以通过<code v-pre>req.session</code>来访问和使用session对象，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user <span class="token operator">=</span> req<span class="token punctuation">.</span>body		<span class="token comment">//把用户的信息存储在session中</span>
req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>islogin <span class="token operator">=</span> <span class="token boolean">true</span>		<span class="token comment">//把用户的登录状态存储到session中</span>

<span class="token keyword">let</span> login <span class="token operator">=</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>islogin	<span class="token comment">//获取session中的数据</span>

req<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment">//清空session，清空对应的客户端的session，不会清空其他客户端的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<h2 id="_12-jwt-认证机制" tabindex="-1"><a class="header-anchor" href="#_12-jwt-认证机制" aria-hidden="true">#</a> 12. JWT 认证机制</h2>
<p>​	<code v-pre>JWT</code>:<code v-pre>JSON Web Token</code></p>
<p>​	由于Session 需要配合 Cookie，而Cookie又不能跨域，所以在前后端分离项目中，使用 <code v-pre>JWT 认证机制</code>，在存在跨域接口时，推荐使用</p>
<p>​	在请求服务器之后，把客户端的用户信息保存在<code v-pre>Token</code>字符串中，保存在客户端浏览器中，服务器通过还原Token字符串的形式来认证用户</p>
<h4 id="_12-1-jwt-组成部分" tabindex="-1"><a class="header-anchor" href="#_12-1-jwt-组成部分" aria-hidden="true">#</a> 12.1 JWT 组成部分</h4>
<p>​		由三部分组成，分别是<code v-pre>Header、Payload(载荷)、Signature(签名)</code>，三者之间用<code v-pre>.</code>分隔</p>
<p>​		<code v-pre>Payload</code>是真正的用户信息，其他两个是安全性相关的，保证Token的安全性</p>
<h3 id="_12-2-安装jwt" tabindex="-1"><a class="header-anchor" href="#_12-2-安装jwt" aria-hidden="true">#</a> 12.2 安装JWT</h3>
<p>​		<code v-pre>npm install jsonwebtoken express-jwt</code></p>
<pre><code>	*  `jsonwebtoken` 用于生成 JWT 字符串
	*  `express-jwt` 用于将JWT 字符串解析还原成 JSON 对象
</code></pre>
<h3 id="_12-3-使用" tabindex="-1"><a class="header-anchor" href="#_12-3-使用" aria-hidden="true">#</a> 12.3 使用</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jsonwebtoken'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> expressJWT <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express-jwt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		定义 secret 密钥</p>
<p>​		定义一个字符串，字符串随意，就是一个密钥</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> secretKey <span class="token operator">=</span> <span class="token string">'erickiku xyz'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		使用 jsonwebtoken 包提供的<code v-pre>sign()</code>方法，把用户的信息加密成JWT字符串，响应给客户端</p>
<p>​		有三个参数：<code v-pre>用户对象</code>、<code v-pre>secret密钥</code>、<code v-pre>有效时间</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span>username<span class="token punctuation">}</span><span class="token punctuation">,</span>secretKey<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">expiresIn</span><span class="token operator">:</span><span class="token string">'30s'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		把<code v-pre>JWT字符串还原为JSON对象</code></p>
<p>​		客户端每次访问接口时，需要想服务器传递请求头中的<code v-pre>Authorization字段</code>，将Token发送到服务器进行身份验证</p>
<p>​		通过<code v-pre>express-jwt</code>中间件，自动将客户端发送过来的Token解析还原成JSON对象</p>
<p>​		只要配置了<code v-pre>express-jwt</code>中间件，就可以把解析出来的用户信息，挂在到<code v-pre>req.user</code>属性上</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//用app.use()注册中间件</span>
<span class="token comment">//expressJWT({secret:secretKey})	用来解析指定的密钥的Token</span>
<span class="token comment">//.unless({path:[/^\/api\///]})		指定哪些接口不需要访问权限</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">expressJWT</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">secret</span><span class="token operator">:</span>secretKey<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unless</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">/</span><span class="token operator">^</span>\<span class="token operator">/</span>api\<span class="token operator">/</span><span class="token comment">//]}))	//api开头的接口不需要权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-4-解析jwt失败后捕获错误" tabindex="-1"><a class="header-anchor" href="#_12-4-解析jwt失败后捕获错误" aria-hidden="true">#</a> 12.4 解析JWT失败后捕获错误</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//token 解析失败导致的错误</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'UnauthorizedError'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span><span class="token number">401</span><span class="token punctuation">.</span>message<span class="token operator">:</span><span class="token string">'无效的token'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//其他原因导致错误</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'未知错误'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大事件项目" tabindex="-1"><a class="header-anchor" href="#大事件项目" aria-hidden="true">#</a> 大事件项目</h2>
<p><a href="http://escook.cn:8088/#/mds/1.init" target="_blank" rel="noopener noreferrer">http://escook.cn:8088/#/mds/1.init<ExternalLinkIcon/></a></p>
</div></template>


