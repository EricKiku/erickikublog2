<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="webpack高级" tabindex="-1"><a class="header-anchor" href="#webpack高级" aria-hidden="true">#</a> Webpack高级</h1>
<p>高级就是进行webpack优化，让代码在编译或运行时性能更好</p>
<p>以以下角度进行优化</p>
<ul>
<li>提升开发体验</li>
<li>提升打包构建速度</li>
<li>减少代码体积</li>
<li>优化代码运行性能</li>
</ul>
<h1 id="提升开发体验" tabindex="-1"><a class="header-anchor" href="#提升开发体验" aria-hidden="true">#</a> 提升开发体验</h1>
<h2 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> SourceMap</h2>
<h4 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用" aria-hidden="true">#</a> 为什么使用</h4>
<p>开发时运行的代码是通过编译的。</p>
<p>所有的css和js合并成一个文件，报错时不能准确找到错误的地方</p>
<h4 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h4>
<p><code v-pre>SourceMap(源代码映射)</code>是一个用来生成源代码和构建后代码一一映射的文件的方案</p>
<p>会生成一个<code v-pre>xxx.map</code>文件，包含了源代码和构建后的代码每一行每一列的映射关系</p>
<h4 id="怎么使用" tabindex="-1"><a class="header-anchor" href="#怎么使用" aria-hidden="true">#</a> 怎么使用</h4>
<ul>
<li>开发模式：<code v-pre>cheap-module-source-map</code>
<ul>
<li>优点：打包编译速度快，只包含行映射</li>
<li>缺点：没有列映射</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">"development"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">"cheap-module-source-map"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>生产模式：<code v-pre>source-map</code>
<ul>
<li>优点：包含行列映射</li>
<li>缺点：打包速度慢</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">"development"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span><span class="token string">"source-map"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="提升打包速度" tabindex="-1"><a class="header-anchor" href="#提升打包速度" aria-hidden="true">#</a> 提升打包速度</h1>
<h2 id="hotmodulereplacement" tabindex="-1"><a class="header-anchor" href="#hotmodulereplacement" aria-hidden="true">#</a> HotModuleReplacement</h2>
<h4 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么" aria-hidden="true">#</a> 为什么</h4>
<p>开发时修改了其中一个模块的代码，webpack会把所有的模块全部重新打包，但是我们只需要修改某个模块代码，就这个模块需要重新打包，其他不变，就很快</p>
<p>使用 vue-loader来自动使用</p>
<h2 id="oneof" tabindex="-1"><a class="header-anchor" href="#oneof" aria-hidden="true">#</a> OneOf</h2>
<h3 id="为什么-1" tabindex="-1"><a class="header-anchor" href="#为什么-1" aria-hidden="true">#</a> 为什么</h3>
<p>每当有资源去查找loader，就会挨个查找，就算找到对应的loader，也会再向下找完</p>
<h4 id="怎么使用-1" tabindex="-1"><a class="header-anchor" href="#怎么使用-1" aria-hidden="true">#</a> 怎么使用</h4>
<p>把所有的loader放在一个oneOf中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">oneOf</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    loader<span class="token operator">...</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="include-exclude" tabindex="-1"><a class="header-anchor" href="#include-exclude" aria-hidden="true">#</a> Include/Exclude</h2>
<h4 id="为什么-2" tabindex="-1"><a class="header-anchor" href="#为什么-2" aria-hidden="true">#</a> 为什么</h4>
<p>有些下载到node_modules中的文件是不需要编译就可以直接使用的。</p>
<p>所以对js文件处理时，要排除node_modules下的文件</p>
<h4 id="是什么-1" tabindex="-1"><a class="header-anchor" href="#是什么-1" aria-hidden="true">#</a> 是什么</h4>
<ul>
<li>include</li>
</ul>
<p>包含，只处理.xxx文件</p>
<ul>
<li>exclude</li>
</ul>
<p>排除，除了.xxx文件以外的都处理</p>
<h4 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h4>
<p><code v-pre>exclude:</code>不处理指定的文件夹</p>
<p><code v-pre>include:path.resolve(__dirname,&quot;../src&quot;),</code>：只处理哪些目录</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>modules<span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">//排除node_modules中的js文件，这些文件不处理</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>    
            <span class="token comment">//include:path.resolve(__dirname,"../src"),</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">//智能预设，能够编译ES6的语法</span>
                <span class="token comment">// presets: ['@babel/preset-env']</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> Cache</h2>
<h4 id="为什么-3" tabindex="-1"><a class="header-anchor" href="#为什么-3" aria-hidden="true">#</a> 为什么</h4>
<p>每次打包时，js文件都要经过Eslint和Babel，速度比较慢</p>
<p>可以缓存之前的Eslint检查和Babel编译结果，这时第二次打包速度就快了</p>
<h4 id="是什么-2" tabindex="-1"><a class="header-anchor" href="#是什么-2" aria-hidden="true">#</a> 是什么</h4>
<p>对Eslint检查和Babel编译结果进行缓存</p>
<h4 id="怎么用-1" tabindex="-1"><a class="header-anchor" href="#怎么用-1" aria-hidden="true">#</a> 怎么用</h4>
<p>在<code v-pre>webpack.dev.js配置文件</code>或者<code v-pre>webpack.prod.js</code>中</p>
<p>开启Eslint缓存：</p>
<p><code v-pre>cache:true</code>：开启缓存</p>
<p><code v-pre>cacheLocation:path.resolve(__dirname,&quot;../node_modules/.cache/eslintcache&quot;)</code>：为缓存文件指定目录</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>开启Babel缓存：</p>
<p><code v-pre> cacheDirectory:true,</code>//开启babel缓存</p>
<p><code v-pre>cacheCompression:false</code>//关闭缓存文件压缩</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">//排除node_modules中的js文件，这些文件不处理</span>
            <span class="token comment">// exclude: /node_modules/,    </span>
            <span class="token literal-property property">include</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"../src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">//智能预设，能够编译ES6的语法</span>
                <span class="token comment">// presets: ['@babel/preset-env']</span>
                <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启babel缓存</span>
                <span class="token literal-property property">cacheCompression</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token comment">//关闭缓存文件压缩</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thead" tabindex="-1"><a class="header-anchor" href="#thead" aria-hidden="true">#</a> Thead</h2>
<h4 id="为什么-4" tabindex="-1"><a class="header-anchor" href="#为什么-4" aria-hidden="true">#</a> 为什么</h4>
<p>对js文件处理的主要就是eslint、babel、thread三个工具，所以要提升打包速度，可以开启多进程同时处理js文件</p>
<h4 id="是什么-3" tabindex="-1"><a class="header-anchor" href="#是什么-3" aria-hidden="true">#</a> 是什么</h4>
<p>多进程打包：开启电脑的多进程同时干一件事，速度更快</p>
<p>需要注意：仅在特别耗时的操作中使用，因为每个进程启动就大约有600ms的开销。</p>
<h4 id="怎么用-2" tabindex="-1"><a class="header-anchor" href="#怎么用-2" aria-hidden="true">#</a> 怎么用</h4>
<p>直接看文档吧：<a href="https://webpack.docschina.org/loaders/thread-loader/" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/loaders/thread-loader/<ExternalLinkIcon/></a></p>
<p>启动进程的数量就是CPU的核数</p>
<ol>
<li>如何获取CPU的核数</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//nodejs核心模块，直接使用</span>
<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//cpu核数</span>
<span class="token keyword">const</span> threads <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terserwebpackplugin" tabindex="-1"><a class="header-anchor" href="#terserwebpackplugin" aria-hidden="true">#</a> TerserWebpackPlugin</h2>
<p>压缩js代码，直接看文档：</p>
<p><a href="https://webpack.docschina.org/plugins/terser-webpack-plugin/" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/plugins/terser-webpack-plugin/<ExternalLinkIcon/></a></p>
<h1 id="减少代码体积" tabindex="-1"><a class="header-anchor" href="#减少代码体积" aria-hidden="true">#</a> 减少代码体积</h1>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h2>
<h4 id="为什么-5" tabindex="-1"><a class="header-anchor" href="#为什么-5" aria-hidden="true">#</a> 为什么</h4>
<p>开发时会引入一些工具库，如果没有特殊处理的话，就会引入整个库，实际上可能只会使用其中一小部分的功能，这样整个库都打包进来，体积太大</p>
<h4 id="是什么-4" tabindex="-1"><a class="header-anchor" href="#是什么-4" aria-hidden="true">#</a> 是什么</h4>
<p><code v-pre>Tree Shaking</code>是一个术语，通常用于移除JS中没有用的代码</p>
<p>依赖于：<code v-pre>ES module</code></p>
<h4 id="怎么用-3" tabindex="-1"><a class="header-anchor" href="#怎么用-3" aria-hidden="true">#</a> 怎么用</h4>
<p>Webpack已经默认开启了功能，不需要配置</p>
<h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h2>
<h4 id="为什么-6" tabindex="-1"><a class="header-anchor" href="#为什么-6" aria-hidden="true">#</a> 为什么</h4>
<p>Babel 为编译的每个文件都插入了辅助代码，使代码体积过大</p>
<p>Babel对一些公共方法使用了 非常小的辅助代码，这个方法会被添加到每一个需要它的文件中</p>
<p>可以将这些辅助代码作为一个独立的模块，来避免重复引入</p>
<h4 id="是什么-5" tabindex="-1"><a class="header-anchor" href="#是什么-5" aria-hidden="true">#</a> 是什么</h4>
<p><code v-pre>@babel/plugin-transform-runtime</code>：禁用了Babel对每个文件的runtime注入，而是引入<code v-pre>@babel/plugin-transform-runtime</code>并且使得所有的辅助代码从这里引用。</p>
<h4 id="怎么用-4" tabindex="-1"><a class="header-anchor" href="#怎么用-4" aria-hidden="true">#</a> 怎么用</h4>
<ol>
<li>下载包</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install @babel/plugin-transform-runtime -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>配置</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">//排除node_modules中的js文件，这些文件不处理</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>    
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">//智能预设，能够编译ES6的语法</span>
                        <span class="token comment">// presets: ['@babel/preset-env']</span>
                        <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启babel缓存</span>
                        <span class="token literal-property property">cacheCompression</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//关闭缓存文件压缩</span>
                        <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"@babel/plugin-transform-runtime"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//减少代码体积</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image-minimizer" tabindex="-1"><a class="header-anchor" href="#image-minimizer" aria-hidden="true">#</a> Image Minimizer</h2>
<h4 id="为什么-7" tabindex="-1"><a class="header-anchor" href="#为什么-7" aria-hidden="true">#</a> 为什么</h4>
<p>开发时如果引入了多个图片，那么图片体积过大，就会让请求速度变慢，可以对图片进行压缩，减少图片体积</p>
<h4 id="是什么-6" tabindex="-1"><a class="header-anchor" href="#是什么-6" aria-hidden="true">#</a> 是什么</h4>
<p><code v-pre>image-minimizer-webpack-plugin</code>：用来压缩图片的插件</p>
<h4 id="怎么用-5" tabindex="-1"><a class="header-anchor" href="#怎么用-5" aria-hidden="true">#</a> 怎么用</h4>
<ol>
<li>下载包</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i image-minimizer-webpack-plugin imagemin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还需要两个包：</p>
<ul>
<li>无损压缩：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>有损压缩</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>网址：	<a href="https://webpack.docschina.org/plugins/image-minimizer-webpack-plugin/" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/plugins/image-minimizer-webpack-plugin/<ExternalLinkIcon/></a></p>
<h1 id="优化代码运行性能" tabindex="-1"><a class="header-anchor" href="#优化代码运行性能" aria-hidden="true">#</a> 优化代码运行性能</h1>
<h2 id="code-split" tabindex="-1"><a class="header-anchor" href="#code-split" aria-hidden="true">#</a> Code Split</h2>
<h4 id="为什么-8" tabindex="-1"><a class="header-anchor" href="#为什么-8" aria-hidden="true">#</a> 为什么</h4>
<p>打包时会把所有的js文件打包到一个文件中，用不到的js也会加载</p>
<p>所以需要将打包生成的文件进行分割，生成多个js文件，加载哪个页面就只加载哪个js文件</p>
<h4 id="是什么-7" tabindex="-1"><a class="header-anchor" href="#是什么-7" aria-hidden="true">#</a> 是什么</h4>
<p>代码分割：</p>
<ol>
<li>分割文件：将打包的文件进行分割，生成多个js文件</li>
<li>按需加载：需要哪个文件就加载哪个文件。</li>
</ol>
<h4 id="怎么用-6" tabindex="-1"><a class="header-anchor" href="#怎么用-6" aria-hidden="true">#</a> 怎么用</h4>
<p>网址：	<a href="https://www.webpackjs.com/guides/code-splitting/" target="_blank" rel="noopener noreferrer">https://www.webpackjs.com/guides/code-splitting/<ExternalLinkIcon/></a></p>
<h2 id="preload-prefetch" tabindex="-1"><a class="header-anchor" href="#preload-prefetch" aria-hidden="true">#</a> Preload/Prefetch</h2>
<p>Preload：<code v-pre>让浏览器立即加载资源</code></p>
<p>Prefetch：<code v-pre>让浏览器在空闲时加载资源</code></p>
<h1 id="原理部分" tabindex="-1"><a class="header-anchor" href="#原理部分" aria-hidden="true">#</a> 原理部分</h1>
<p>视频：	<a href="https://www.bilibili.com/video/BV14T4y1z7sw?p=65&amp;vd_source=4826e78be6a985a9a8641312e495221e" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV14T4y1z7sw?p=65&amp;vd_source=4826e78be6a985a9a8641312e495221e<ExternalLinkIcon/></a></p>
</div></template>


