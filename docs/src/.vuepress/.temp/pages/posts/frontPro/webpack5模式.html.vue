<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="webpack生产模式" tabindex="-1"><a class="header-anchor" href="#webpack生产模式" aria-hidden="true">#</a> Webpack生产模式</h1>
<p>生产模式是开发完代码之后，需要得到代码来部署上线，这个模式下要对代码进行优化，让性能更好</p>
<p>只要优化两个点：</p>
<ul>
<li>代码运行性能</li>
<li>代码打包速度</li>
</ul>
<h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h1>
<p>因为开发模式不需要输出，所以可以把输出<code v-pre>output</code>中的<code v-pre>path:undefined</code>。</p>
<p>需要两个配置文件:</p>
<ul>
<li><code v-pre>webpack.dev.js</code>：开发模式配置</li>
<li><code v-pre>webpack.prod.js</code>：生产模式配置</li>
</ul>
<h2 id="开发模式配置" tabindex="-1"><a class="header-anchor" href="#开发模式配置" aria-hidden="true">#</a> 开发模式配置:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'eslint-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment">//入口</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'./src/main.js'</span><span class="token punctuation">,</span><span class="token comment">//相对路径</span>
    <span class="token comment">//输出</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//指定文件的输出路径</span>
        <span class="token comment">//_dirname 代表当前文件的文件夹目录</span>
        <span class="token comment">// path:path.resolve(__dirname,'dist'),    //绝对路径</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>
        <span class="token comment">//文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'static/js/main.js'</span><span class="token punctuation">,</span>
        <span class="token comment">// clean:true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//加载器</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">//loader的配置</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//插件的配置</span>
        <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">context</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../src'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//模块，指定以那个文件为模块创建新的html文件，否则内容会全部丢失</span>
            <span class="token comment">//新的html：1.结构和指定的一模一样 2.自动引入打包输出的资源</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../public/index.html'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//开发服务器</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token comment">//启动服务器域名</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token string">"3000"</span><span class="token punctuation">,</span><span class="token comment">//启动服务器端口号</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token comment">//是否自动打开浏览器</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'development'</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动开发模式配置：<code v-pre>npx webpack server --config ./config/webpack.dev.js</code></p>
<h2 id="生产模式配置" tabindex="-1"><a class="header-anchor" href="#生产模式配置" aria-hidden="true">#</a> 生产模式配置：</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'eslint-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment">//入口</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'./src/main.js'</span><span class="token punctuation">,</span><span class="token comment">//相对路径</span>
    <span class="token comment">//输出</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//指定文件的输出路径</span>
        <span class="token comment">//_dirname 代表当前文件的文件夹目录</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">//绝对路径</span>
        <span class="token comment">//文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'static/js/main.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//加载器</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">//loader的配置</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//插件的配置</span>
        <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">context</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../src'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//模块，指定以那个文件为模块创建新的html文件，否则内容会全部丢失</span>
            <span class="token comment">//新的html：1.结构和指定的一模一样 2.自动引入打包输出的资源</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../public/index.html'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'production'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动生产模式配置文件：<code v-pre>npx webpack --config ./config/webpack.prod.js</code></p>
<h2 id="简化启动代码" tabindex="-1"><a class="header-anchor" href="#简化启动代码" aria-hidden="true">#</a> 简化启动代码</h2>
<p>配置文件的打包启动代码有点长，可以在<code v-pre>package.json</code>中设置一下</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"start"</span><span class="token operator">:</span><span class="token string">"npm run dev"</span><span class="token punctuation">,</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack server --config ./config/webpack.dev.js"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config ./config/webpack.prod.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动开发模式配置：<code v-pre>npm run dev</code>，或者<code v-pre>npm start</code>。</p>
<p>启动生产模式配置：<code v-pre>npm run build</code></p>
<h1 id="css处理" tabindex="-1"><a class="header-anchor" href="#css处理" aria-hidden="true">#</a> CSS处理</h1>
<h2 id="提取css成单独文件" tabindex="-1"><a class="header-anchor" href="#提取css成单独文件" aria-hidden="true">#</a> 提取CSS成单独文件</h2>
<p>CSS目前被打包在js文件中，当js文件加载时，会创建一个style标签来生成样式</p>
<p>会产生闪屏现象，应该是单独的CSS文件，通过 link 标签加载</p>
<h3 id="_1-下载包" tabindex="-1"><a class="header-anchor" href="#_1-下载包" aria-hidden="true">#</a> 1.下载包</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install mini-css-extract-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-引入包" tabindex="-1"><a class="header-anchor" href="#_2-引入包" aria-hidden="true">#</a> 2.引入包</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-配置loader" tabindex="-1"><a class="header-anchor" href="#_3-配置loader" aria-hidden="true">#</a> 3.配置loader</h3>
<p>之前开发模式的处理css的loader中的<code v-pre>style-loader</code>不再使用，把它改为<code v-pre>MiniCssExtractPlugin.loader</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">//loader的配置</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//执行顺序是 从右到左，从下到上</span>
            MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">//将css提取成单独的文件</span>
            <span class="token string">'css-loader'</span>    <span class="token comment">//将css资源编译成commonjs的模块到js中</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-在插件new创建" tabindex="-1"><a class="header-anchor" href="#_4-在插件new创建" aria-hidden="true">#</a> 4.在插件new创建</h3>
<p><code v-pre>filename</code>是指定输出的css文件目录和名称</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'static/css/main.css'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css兼容性处理" tabindex="-1"><a class="header-anchor" href="#css兼容性处理" aria-hidden="true">#</a> CSS兼容性处理</h2>
<h3 id="_1-下载包-1" tabindex="-1"><a class="header-anchor" href="#_1-下载包-1" aria-hidden="true">#</a> 1.下载包</h3>
<p>三个包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install postcss-loader postcss postcss-preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-配置loader" tabindex="-1"><a class="header-anchor" href="#_2-配置loader" aria-hidden="true">#</a> 2.配置loader</h3>
<p>配置<code v-pre>postcss-loader</code>，一定要在<code v-pre>css-loader</code>之后，<code v-pre>less-loader和sass-loader</code>之前</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//执行顺序是 从右到左，从下到上</span>
                MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">//将css提取成单独的文件</span>
                <span class="token string">'css-loader'</span><span class="token punctuation">,</span>    <span class="token comment">//将css资源编译成commonjs的模块到js中</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                <span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span>   <span class="token comment">//解决大部分兼容性问题</span>
                            <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置兼容性的兼容程度：</p>
<p>在<code v-pre>package.json</code>中，添加一个配置，在最高级，不属于哪一个里面</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"browserslist"</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">"last 2 version"</span><span class="token punctuation">,</span>
    <span class="token string">"> 1%"</span><span class="token punctuation">,</span>
    <span class="token string">"not dead"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css压缩" tabindex="-1"><a class="header-anchor" href="#css压缩" aria-hidden="true">#</a> CSS压缩</h2>
<h3 id="_1-下载包-2" tabindex="-1"><a class="header-anchor" href="#_1-下载包-2" aria-hidden="true">#</a> 1.下载包</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install css-minimizer-webpack-plugin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-引入插件" tabindex="-1"><a class="header-anchor" href="#_2-引入插件" aria-hidden="true">#</a> 2.引入插件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"css-minimizer-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-在插件new创建" tabindex="-1"><a class="header-anchor" href="#_3-在插件new创建" aria-hidden="true">#</a> 3.在插件new创建</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//插件的配置</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">'static/css/main.css'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


