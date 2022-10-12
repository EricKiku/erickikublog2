<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1>
<p>安装</p>
<p>vue2用vue-router3</p>
<p>vue3用vue-router4</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i vue-router@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="新建路由器" tabindex="-1"><a class="header-anchor" href="#新建路由器" aria-hidden="true">#</a> 新建路由器</h2>
<p><code v-pre>src/router/index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//这是一个路由器文件</span>

<span class="token comment">//引入VueRouter</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token comment">//引入组件</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'../components/About.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../components/Home.vue'</span>

<span class="token comment">//创建一个路由</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/about'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>About
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/home'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>Home
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用路由器" tabindex="-1"><a class="header-anchor" href="#使用路由器" aria-hidden="true">#</a> 使用路由器</h2>
<p>在<code v-pre>main.js</code>中使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token comment">//引入VueRouter</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token comment">//----------------</span>
<span class="token comment">//引入路由器</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router/index,js'</span><span class="token comment">//--------------引入router文件</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">//应用插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>				<span class="token comment">//-------------------</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span><span class="token comment">//----------------------直接使用router文件暴露的对象配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用路由" tabindex="-1"><a class="header-anchor" href="#使用路由" aria-hidden="true">#</a> 使用路由</h2>
<p>凭借一个新标签来使用路由，转换页面</p>
<p><code v-pre>&lt;router-link to=&quot;/&quot;&gt;</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>to</code>属性用于指定路由路径，来切换路由</p>
<p><code v-pre>active-class</code>属性用于在激活标签时，添加css选择器，<code v-pre>blue</code>有一组样式，在激活<code v-pre>router-link</code>时，会添加在标签上</p>
<p>指定展示位置：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2>
<ol>
<li>路由组件一般放在<code v-pre>/pages</code>文件夹中，一般组件放在<code v-pre>/components</code>文件夹中</li>
<li>通过切换，被换掉的路由组件是被销毁了</li>
<li>每个组件都有自己的<code v-pre>$route</code>属性，其中存储了自己的路由信息</li>
<li>所有应用都只有一个router，可以通过<code v-pre>$router</code>属性获取</li>
</ol>
<h2 id="嵌套多级路由" tabindex="-1"><a class="header-anchor" href="#嵌套多级路由" aria-hidden="true">#</a> 嵌套多级路由</h2>
<ol>
<li>
<p>配置路由规则，使用<code v-pre>children</code>配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/about'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>About<span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/home'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token comment">//------------------home的子路由配置</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span><span class="token comment">//--------不需要加/，路径是/home/news</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>News
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'message'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>Message
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>跳转</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/news<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>News<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要写完整路径</p>
</li>
</ol>
<h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h2>
<h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h3>
<ol>
<li>
<p>传递参数</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 跳转时携带query参数 to的字符串写法，要加冒号 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message/detail?id=001&amp;title=hellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--to的对象式写法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
	path:'/home/message/detail',
    query:{
    	id：'001',
        title:'hellow'
    }
}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    跳转
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>接收参数
每个组件实例对象上都有一个<code v-pre>$route</code>，存储本身的路径和参数等数据，<code v-pre>query</code>是一个包含了传递的参数的对象</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3>
<p>和query方式一样，需要在路由器中配置一些参数，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>	
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'about'</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/about/:id/:title'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>About<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>传递参数</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
	name:'about'
    params:{
    	id：'001',
        title:'hellow'
    }
}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    跳转
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：使用params传参时，若使用to的对象写法，不能使用path配置，只能用name配置</p>
</blockquote>
</li>
<li>
<p>接收参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h2>
<p>简化路由的跳转</p>
<p>使用:</p>
<ol>
<li>
<p>给路由命名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/home'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>News
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'message'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'detail'</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'detail'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>Details
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>简化跳转
一般用于多级路由的长路径时使用，简单的路径大可不必</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 简化前，需要完整路径 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message/detail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 简化后，直接使用name跳转 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:'detail'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 简化后，配合传参 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
     	name:'detail',
         query:{
         	id:'001',
         	title:'hello'
         }
     }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	跳转
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>
<p>让路由组件可以更简单的收到query或params参数</p>
<ol>
<li>
<p>配置props
第三种会把该组件的<code v-pre>route</code>传递，所以可以获取传递给该组件的参数，在路由器中就配置好，
接收时，就会省很多代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//第一种写法，把对象中的值通过props方式传给组件</span>
<span class="token comment">// props: {id:'001',title:'hello'}</span>

<span class="token comment">//第二种写法，props为布尔值，为true，就把路由收到的所有params参数通过props传给组件</span>
<span class="token comment">//props:true</span>

<span class="token comment">//第三种写法，函数，该函数中的返回值中的每一组键值都会通过props传给组件</span>
<span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>接收</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>{{id}}{{title}}

//vc实例：
props: ['id','title'],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h2>
<ol>
<li>
<p>控制路由跳转时操作浏览器历史记录的模式</p>
</li>
<li>
<p>浏览器历史记录的模式分为两种写入方式：<code v-pre>push</code>和<code v-pre>replace</code>，<code v-pre>push</code>是追加历史记录，<code v-pre>replace</code>是替换当前记录，默认是<code v-pre>push</code></p>
</li>
<li>
<p>如何开启<code v-pre>replace</code>模式：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">replace</span> <span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="编程式路由导航" tabindex="-1"><a class="header-anchor" href="#编程式路由导航" aria-hidden="true">#</a> 编程式路由导航</h2>
<p>作用：不使用<code v-pre>&lt;router-link&gt;</code>去实现路由的跳转，可以使用任意标签</p>
<p>具体代码：</p>
<p>绑定鼠标事件，在<code v-pre>methods</code>配置中触发路由，配置和<code v-pre>&lt;router-link&gt;</code>标签一样</p>
<p>借助<code v-pre>$router</code>这个全局路由器实现跳转</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">puchBtn</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//------触发路由的压栈操作</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'detail'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span>msg<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span>msg<span class="token punctuation">.</span>title
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">replaceBtn</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//-----触发路由的替换操作</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'detail'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span>msg<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span>msg<span class="token punctuation">.</span>title
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器历史记录操作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//前进一次</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">//后退</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">//可前进，可后退</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存路由组件" tabindex="-1"><a class="header-anchor" href="#缓存路由组件" aria-hidden="true">#</a> 缓存路由组件</h2>
<ol>
<li>
<p>作用：让不展示的路由组件不被销毁</p>
</li>
<li>
<p>实现：
所有被<code v-pre>&lt;keep-alive&gt;</code>标签包裹，并且被<code v-pre>include</code>指定的组件，在被切换时不销毁，输入的数据还在。<code v-pre>include</code>中的值是，各组件的<code v-pre>name</code>属性</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>News<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>多个需要缓存
当有多个组件需要缓存时：
冒号、数组</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">:include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['News','Message']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="activated" tabindex="-1"><a class="header-anchor" href="#activated" aria-hidden="true">#</a> activated</h2>
<p>两个新的生命周期钩子</p>
<p>作用：路由组件独有的两个钩子，用于捕获组件激活的状态</p>
<p><code v-pre>activated</code>：路由组件被激活时触发</p>
<p><code v-pre>deactivated</code>：路由组件失活时触发</p>
<p>只有被<code v-pre>&lt;keep-alive&gt;</code>包裹的组件才会触发这两个钩子，如果是走销毁路线，就不会触发</p>
<h2 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h2>
<h3 id="全局路由守卫" tabindex="-1"><a class="header-anchor" href="#全局路由守卫" aria-hidden="true">#</a> 全局路由守卫</h3>
<p>作用：</p>
<p><code v-pre>全局前置路由守卫</code>：用于在路由跳转**<code v-pre>前</code>**，进行一些判断，是否可以跳转，类似<code v-pre>权限</code></p>
<p><code v-pre>全局后置路由守卫</code>：后置路由守卫是切换后，进行数据处理，如果前置判断失败，没有跳转，则不进行任何操作</p>
<p>在<code v-pre>/router/index.js</code>文件中，在暴露<code v-pre>router</code>之前</p>
<p><code v-pre>router.beforeEach</code>有一个回调函数，回调函数可以接收三个参数，分别是</p>
<p><code v-pre>to</code>：去哪个组件</p>
<p><code v-pre>from</code>：从哪个组件跳</p>
<p><code v-pre>next</code>：是否放行</p>
<p>前两个组件<code v-pre>to、from</code>的值有：</p>
<table>
<thead>
<tr>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>fullPath</strong>: &quot;/home/news&quot;</td>
</tr>
<tr>
<td><strong>hash</strong>: &quot;&quot;</td>
</tr>
<tr>
<td><strong>matched</strong>: (2) [{…}, {…}]</td>
</tr>
<tr>
<td><strong>meta</strong>: {}</td>
</tr>
<tr>
<td><strong>name</strong>: &quot;news&quot;</td>
</tr>
<tr>
<td><strong>params</strong>: {}</td>
</tr>
<tr>
<td><strong>path</strong>: &quot;/home/news&quot;</td>
</tr>
<tr>
<td><strong>query</strong>: {}</td>
</tr>
</tbody>
</table>
<p>所以可以从<code v-pre>path、name、meta</code>来判断跳往的组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>
<p>判断是否需要验证权限
在路由配置中添加一个新的属性<code v-pre>meta</code>，用来放置一些自定义的键值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>News<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//----------meta 元数据，可以放置键值</span>
    	<span class="token literal-property property">isAdmin</span><span class="token operator">:</span><span class="token boolean">true</span>   <span class="token comment">//isAdmin:true  开启管理员验证</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//全局前置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAdmin<span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//isAdmin是否为true，为true则需要验证</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'quanxian'</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'admin'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//判断条件</span>
        	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">//如果成功，则放行</span>
    	<span class="token punctuation">}</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'你是一个游客，无权查看该内容'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>		<span class="token comment">//如果失败，则不跳转</span>
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//没有isAdmin或为false的，一律放行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//全局后置路由守卫</span>
<span class="token comment">//参数只有to,from，没有next</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    进行处理<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="独享路由守卫" tabindex="-1"><a class="header-anchor" href="#独享路由守卫" aria-hidden="true">#</a> 独享路由守卫</h3>
<p>只管理一个路由配置</p>
<p>写在哪个路由配置中，当跳转到这个路由时，就会判断</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'news'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>News<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">isAdmin</span><span class="token operator">:</span><span class="token boolean">true</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>	<span class="token comment">//--只管理news路由</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件路由守卫" tabindex="-1"><a class="header-anchor" href="#组件路由守卫" aria-hidden="true">#</a> 组件路由守卫</h3>
<p>和<code v-pre>data</code>等配置平级</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//进入守卫，通过路由规则进入组件时被调用</span>
<span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...该方法的to，永远是该组件</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    
<span class="token comment">//离开守卫，通过路由规则离开组件时被调用</span>
<span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...该方法的from，永远是该组件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="history-hash" tabindex="-1"><a class="header-anchor" href="#history-hash" aria-hidden="true">#</a> history/hash</h2>
<p><code v-pre>hash:</code></p>
<ol>
<li>地址中有#号，不美观，#号后边的都是hash值</li>
<li>若以后地址通过第三方手机app分享，若app校验严格，则地址会标记不合法</li>
<li>兼容性好</li>
<li>在HTTP请求中，hash值不会带给服务器</li>
</ol>
<p><code v-pre>history:</code></p>
<ol>
<li>地址干净，美观</li>
<li>兼容性和hash相比略差</li>
<li>应用部署上线后需要后端人员支持，解决刷新页面时服务端404问题</li>
</ol>
</div></template>


