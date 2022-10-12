<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="一、创建vue3-0" tabindex="-1"><a class="header-anchor" href="#一、创建vue3-0" aria-hidden="true">#</a> 一、创建Vue3.0</h1>
<blockquote>
<h3 id="使用vue-cli创建" tabindex="-1"><a class="header-anchor" href="#使用vue-cli创建" aria-hidden="true">#</a> 使用vue-cli创建</h3>
</blockquote>
<p>查看@vue-cli版本，确保@vue/cli版本在<code v-pre>4.5.0</code>以上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装或升级@vue/cli</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create vue_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd vue_test
npm run serve	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="使用-vite-创建" tabindex="-1"><a class="header-anchor" href="#使用-vite-创建" aria-hidden="true">#</a> 使用 vite 创建</h3>
</blockquote>
<p>官方文档：<a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">https://cn.vitejs.dev/<ExternalLinkIcon/></a></p>
<p>使用vite创建工程：<a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noopener noreferrer">https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project<ExternalLinkIcon/></a></p>
<p>使用vite创建：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">##创建的时候可以会需要安装一个包，输入y回车即可</span>
<span class="token function">npm</span> init vite-app 项目名

<span class="token builtin class-name">cd</span> 项目名

<span class="token comment">##因为vite创建的时候不会去创建node_modules，所以看起来很快，之后需要自己安装</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">##vite的启动方式变了</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3和vue2中不一样的地方：</p>
<p><code v-pre>main.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//引入的不再是Vue,而是引入了一个createApp的工厂函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>

<span class="token comment">//相当于vue2的创建vm来说，app更轻量</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>App.vue</code></p>
<p>模板中，没有根标签了</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Welcome to Your Vue.js App<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">'./components/HelloWorld.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、常用composition-api" tabindex="-1"><a class="header-anchor" href="#二、常用composition-api" aria-hidden="true">#</a> 二、常用Composition API</h1>
<p>组合式API</p>
<h2 id="_1-setup" tabindex="-1"><a class="header-anchor" href="#_1-setup" aria-hidden="true">#</a> 1. setup</h2>
<ol>
<li>
<p>Vue3.0中的一个新的配置项，值为一个函数</p>
</li>
<li>
<p>setup是所有<code v-pre>Composition API(组合API)</code>&quot;表演的舞台&quot;</p>
</li>
<li>
<p>组件中所用到的：数据、方法等，都要配置在<code v-pre>setup</code>中。</p>
</li>
<li>
<p>setup函数的两种返回值：</p>
<ol>
<li>返回一个<code v-pre>对象</code>，则对象中的属性，方法，在模板中可以直接使用（主要）</li>
<li>若返回一个渲染函数，则可以自定义渲染内容</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我是{{name}},今年{{age}}了,我喜欢说<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>say<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>说<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'李云龙'</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'你他娘的意大利炮那'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        name<span class="token operator">=</span><span class="token string">'东方不败'</span>	<span class="token comment">//修改属性</span>
    <span class="token punctuation">}</span>
      
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>say
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意</p>
<ol>
<li>尽量不要与Vue2配置混用
<ul>
<li>Vue2配置(data、methods、computed)中<code v-pre>可以访问</code>到setup中的属性和方法</li>
<li>但是setup中<code v-pre>不能访问</code>到Vue2配置中的属性和方法</li>
<li>如果重名，setup优先</li>
</ul>
</li>
<li>setup不能是一个<code v-pre>async</code>函数，因为返回值不再是return的对象，而是promise,模板看不见对象中的属性</li>
<li>以上setup中的属性<code v-pre>不是响应式</code>，就算修改了，也只是数据修改了，页面不会响应，想要实现响应式，需要使用<code v-pre>ref</code></li>
</ol>
</li>
</ol>
<h2 id="_2-ref函数" tabindex="-1"><a class="header-anchor" href="#_2-ref函数" aria-hidden="true">#</a> 2. ref函数</h2>
<ol>
<li>
<p>使用<code v-pre>ref</code>可以让setup中的属性变成响应式的属性</p>
</li>
<li>
<p>语法：<code v-pre>const ** = ref(initValue)</code></p>
</li>
<li>
<p>原理是：把ref管理的属性变为一个<code v-pre>对象</code>，该对象中有<code v-pre>getter/setter</code>方法</p>
</li>
<li>
<p>修改属性的时候，需要把属性当做一个对象来使用，使用<code v-pre>属性.value</code>可以完成响应式</p>
</li>
<li>
<p>使用ref</p>
<ol>
<li>需要先导入ref:<code v-pre>import {ref} from 'vue'</code></li>
<li>把属性的值交给ref管理:<code v-pre>let name = ref('李云龙');</code></li>
<li>修改属性的值：<code v-pre>name.value='东方不败'</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'李云龙'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'01'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">department</span><span class="token operator">:</span><span class="token string">'工程系'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token string">'东方不败'</span>
      age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>say<span class="token punctuation">,</span>change
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>ref管理普通数据类型，就是转为<code v-pre>RefImpl</code>对象，<code v-pre>属性.value</code>就可以获取到值
利用了<code v-pre>Object.defineProperty()</code>的<code v-pre>get/set</code>完成的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//结果是</span>
RefImpl <span class="token punctuation">{</span><span class="token literal-property property">__v_isShallow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">.</span> _value<span class="token operator">:</span> <span class="token string">'李云龙'</span><span class="token punctuation">}</span>

李云龙
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>ref管理对象数据类型，也是转为<code v-pre>RefImpl</code>对象，但是<code v-pre>对象.value</code>获取的是一个<code v-pre>Proxy</code>对象
所以获取对象中的值：<code v-pre>obj.value.id</code>
利用了：Vue3.0中的一个新函数——<code v-pre>reactive</code>函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//结果</span>
RefImpl <span class="token punctuation">{</span><span class="token literal-property property">__v_isShallow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">.</span> _value<span class="token operator">:</span> Proxy<span class="token punctuation">}</span>

Proxy <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'01'</span><span class="token punctuation">,</span> <span class="token literal-property property">department</span><span class="token operator">:</span> <span class="token string">'工程系'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_3-reactive函数" tabindex="-1"><a class="header-anchor" href="#_3-reactive函数" aria-hidden="true">#</a> 3. reactive函数</h2>
<ol>
<li>
<p>作用：定义一个<code v-pre>对象类型</code>的响应式数据，基本类型不要使用，必须使用<code v-pre>ref</code></p>
</li>
<li>
<p>语法：<code v-pre>let 代理对象 = reactive(源对象)</code></p>
</li>
<li>
<p>reactive函数接收一个<code v-pre>对象或数组</code>，返回一个<code v-pre>代理对象(Proxy实例对象)</code></p>
</li>
<li>
<p>reactive定义的响应式数据是深层次的，多层对象也可以响应式</p>
</li>
<li>
<p>内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'李云龙'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'01'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">department</span><span class="token operator">:</span><span class="token string">'工程系'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>change<span class="token punctuation">,</span>obj
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用<code v-pre>ref</code>管理的对象，也会去调用reactive，来返回一个Proxy对象，并且修改对象中的属性值需要：<code v-pre>对象.value.属性 = 值</code></p>
</li>
<li>
<p>如果使用<code v-pre>reactive</code>代理对象，则会直接返回一个<code v-pre>代理对象</code>Proxy对象，修改对象中的值需要：<code v-pre>对象.属性 =  值</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//结果</span>
Proxy <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'01'</span><span class="token punctuation">,</span> <span class="token literal-property property">department</span><span class="token operator">:</span> <span class="token string">'工程系'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_4-vue3-0-响应式原理" tabindex="-1"><a class="header-anchor" href="#_4-vue3-0-响应式原理" aria-hidden="true">#</a> 4. Vue3.0 响应式原理</h2>
<p>借助了window上的一个构造函数<code v-pre>Proxy(代理)</code></p>
<p>将源对象代理为一个代理对象，第二个参数是配置，get/set和删除，当代理对象中的数据进行增删改查时，也会操作源对象的数据。</p>
<p>使用<code v-pre>get/set/deleteProperty</code>的原因是：要劫持到属性的增删改查，来进行页面更新，从而达到响应式页面</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
<span class="token punctuation">}</span>
<span class="token comment">//p是代理对象，person是源对象</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span>propName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">delete</span> target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，修改源对象时，不是直接修改的，而是通过ES6的对象<code v-pre>Reflect(反射)</code>，对对象进行操作，</p>
<p>而且，<code v-pre>Reflect</code>是有返回值的，操作成功返回true，失败则返回false</p>
<p>所以，真正的原理应该是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span>propName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>propName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-reactive对比ref" tabindex="-1"><a class="header-anchor" href="#_5-reactive对比ref" aria-hidden="true">#</a> 5. reactive对比ref</h2>
<ul>
<li>从定义数据角度对比
<ul>
<li>ref用来定义：<code v-pre>基本数据类型</code></li>
<li>reactive用来定义：<code v-pre>对象或数组类型数据</code></li>
<li>ref也可以用来定义<code v-pre>对象或数组类型数据</code>，内部也会通过调用reactive转为代理对象</li>
</ul>
</li>
<li>从原理角度对比
<ul>
<li>ref通过<code v-pre>Object.defineProperty</code>的<code v-pre>get/set</code>来实现响应式</li>
<li>reactive通过使用<code v-pre>Proxy</code>来实现响应式（数据劫持），并通过<code v-pre>Reflect</code>操作源对象内部数据</li>
</ul>
</li>
<li>从使用角度对比
<ul>
<li>ref定义的数据：操作需要<code v-pre>.value</code>，模板中不需要.value</li>
<li>reactive定义的数据：操作和读取均不需要<code v-pre>.value</code></li>
</ul>
</li>
</ul>
<h2 id="_6-setup两个要点" tabindex="-1"><a class="header-anchor" href="#_6-setup两个要点" aria-hidden="true">#</a> 6. setup两个要点</h2>
<ul>
<li>setup执行时机
<ul>
<li>在beforeCreate生命周期之前执行，并且<code v-pre>this</code>是undefined</li>
</ul>
</li>
<li>setup的参数
<ul>
<li>props：值为对象，包含组件外部传递的，并且组件内部使用<code v-pre>props:[]</code>声明接收的属性，如果没有接收，则不会包含</li>
<li>context：上下文对象
<ul>
<li>attrs：值为对象，包含组件外部传递的，但是没有在props配置中声明的属性，属于是兜底了，相当于<code v-pre>this.$attrs</code></li>
<li>slots：收到的插槽内容，相当于<code v-pre>this.$slots</code></li>
<li>emit：触发自定义事件的函数，相当于<code v-pre>this.$emit</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="_7-计算属性与侦听" tabindex="-1"><a class="header-anchor" href="#_7-计算属性与侦听" aria-hidden="true">#</a> 7.计算属性与侦听</h2>
<h3 id="_1-computed函数" tabindex="-1"><a class="header-anchor" href="#_1-computed函数" aria-hidden="true">#</a> 1. computed函数</h3>
<p>与Vue2的computed功能一致</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'张'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'三'</span><span class="token punctuation">)</span>
    
    <span class="token comment">//计算属性简写</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token comment">//计算属性完整</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
     fullName<span class="token punctuation">,</span>firstName<span class="token punctuation">,</span>lastName
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-侦听" tabindex="-1"><a class="header-anchor" href="#_2-侦听" aria-hidden="true">#</a> 2. 侦听</h3>
<p>语法：<code v-pre>watch(属性名/[多个属性名],回调函数,配置)</code></p>
<p>回调函数接收两个参数：新值和旧值</p>
<p>配置中用于监听配置：<code v-pre>immediate:true</code>立即监听一次、<code v-pre>deep:true</code>深度监听</p>
<p>侦听都不需要<code v-pre>.value</code>，因为.value就返回一个具体的值，监听是要监听属性，而不是值</p>
<p>如果使用<code v-pre>ref</code>来定义对象，则需要加<code v-pre>.value</code>，因为加了才返回<code v-pre>Proxy</code>，监听对象只能监听<code v-pre>Proxy</code>，第二种方法就是开启深度监听</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">//监听一个属性</span>
<span class="token function">watch</span><span class="token punctuation">(</span>fullName<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据修改被侦听到了'</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//同时监听多个属性</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>firstName<span class="token punctuation">,</span>lastName<span class="token punctuation">,</span>fullName<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据修改被侦听到了'</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>侦听<code v-pre>reactive</code>所定义的一个响应式数据<code v-pre>对象类型数据</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> chengji <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">chinese</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token literal-property property">english</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wenzong</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">zhengzhi</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lishi</span><span class="token operator">:</span><span class="token number">80</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//监听reactive定义的响应式数据的全部属性</span>
<span class="token comment">//		1. 监听对象时：oldValue获取的也是最新的数据，就是oldValue无效了</span>
<span class="token comment">//		2. 强制开启了深度监视(deep配置无效)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>chengji<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>old</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'chengji被修改了 '</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>old<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//监听reactive定义的对象中的某个属性</span>
<span class="token comment">//必须是一个函数,这个函数就是该属性的getter方法</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>chengji<span class="token punctuation">.</span>chinese<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newV<span class="token punctuation">,</span>oldV</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'语文成绩被修改了'</span><span class="token punctuation">,</span>newV<span class="token punctuation">,</span>oldV<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//监听reactive定义对象的某些属性</span>
<span class="token comment">//数组中使用函数</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>chengji<span class="token punctuation">.</span>chinese<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>chengji<span class="token punctuation">.</span>english<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newV<span class="token punctuation">,</span>oldV</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'语文或英语被修改了'</span><span class="token punctuation">,</span>newV<span class="token punctuation">,</span>oldV<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//监听reactive定义对象中的对象属性</span>
<span class="token comment">//因为是属性，所以deep生效，不写deep就无法深度监视</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span>chengji<span class="token punctuation">.</span>wenzong<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newV<span class="token punctuation">,</span>oldV</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文综被修改了'</span><span class="token punctuation">,</span>newV<span class="token punctuation">,</span>oldV<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-watcheffect函数" tabindex="-1"><a class="header-anchor" href="#_3-watcheffect函数" aria-hidden="true">#</a> 3. watchEffect函数</h3>
<p>和侦听功能一样，区别是：</p>
<ul>
<li>watch是：既要指明监听的属性，又要指明监听的回调</li>
<li>watchEffect是：不用指明监听哪个属性，监听的回调中用到了哪个属性，就监听哪个属性</li>
<li>watchEffedt更像computed，但是，computed注重返回值，watchEffect注重回调中的过程</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> name<span class="token punctuation">.</span>value
    <span class="token keyword">let</span> age <span class="token operator">=</span> age<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当属性name或age修改时，都会触发watchEffect的回调</p>
<h2 id="_8-vue3生命周期" tabindex="-1"><a class="header-anchor" href="#_8-vue3生命周期" aria-hidden="true">#</a> 8. Vue3生命周期</h2>
<p><img src="@source/.vuepress/public/vue/vue3_1.png" alt="" loading="lazy"></p>
<p>Vue3中也可以使用Vue2中的生命周期钩子，只有最后两个钩子名称变了。</p>
<p>Vue3.0也提供了组合式API的生命周期钩子，也就是在setup中使用的钩子：</p>
<ul>
<li><code v-pre>beforeCreate</code>----&gt;<code v-pre>setup()</code></li>
<li><code v-pre>create</code>---------------&gt;<code v-pre>setup()</code></li>
<li><code v-pre>beforeMount</code>------&gt;<code v-pre>onBeforeMount</code></li>
<li><code v-pre>mounted</code>-------------&gt;<code v-pre>onMounted</code></li>
<li><code v-pre>beforeUpdate</code>----&gt;<code v-pre>onBeforeUpdate</code></li>
<li><code v-pre>update</code>---------------&gt;<code v-pre>onUpdated</code></li>
<li><code v-pre>beforeUnmount</code>---&gt;<code v-pre>onBeforeUnmount</code></li>
<li><code v-pre>unmounted</code>----------&gt;<code v-pre>onUnmounted</code></li>
</ul>
<p>前两个就是setup()，没有对应的生命周期钩子</p>
<h2 id="_9-自定义hook" tabindex="-1"><a class="header-anchor" href="#_9-自定义hook" aria-hidden="true">#</a> 9. 自定义hook</h2>
<p>本质是一个函数，把setup函数中使用的API进行封装成一个文件，一般有一个返回值</p>
<p>类似于Vue2中的混入</p>
<p>优势：复用代码，让setup中的逻辑更清楚</p>
<p>新建文件，hook函数约定以<code v-pre>use</code>开头，其他自定义</p>
<p><code v-pre>hooks/usePoint.js</code></p>
<p>在setup中使用需要先使用<code v-pre>import</code>引入</p>
<h2 id="_10-toref" tabindex="-1"><a class="header-anchor" href="#_10-toref" aria-hidden="true">#</a> 10.toRef</h2>
<p>作用： 创建一个ref对象，其value值指向另一个对象中的某个属性</p>
<p>意思就是，如果setup返回了一个对象，那么在模板中，需要使用<code v-pre>对象.属性</code>来获取值，属性过多时，比较麻烦，可以使用<code v-pre>toRef</code>将一个属性，绑定到一个对象中的属性上，<code v-pre>toRef</code>返回的是个ref对象，所以自动有响应式</p>
<p>语法：<code v-pre>let name = toRef(对象,'属性')</code></p>
<p>应用：想要把响应式中的某个属性单独提供给外部使用时</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>toRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> chengji <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">chinese</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">english</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">wenzong</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">zhengzhi</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lishi</span><span class="token operator">:</span><span class="token number">80</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">chinese</span><span class="token operator">:</span><span class="token function">toRef</span><span class="token punctuation">(</span>chengji<span class="token punctuation">,</span><span class="token string">'chinese'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">english</span><span class="token operator">:</span><span class="token function">toRef</span><span class="token punctuation">(</span>chengji<span class="token punctuation">,</span><span class="token string">'english'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lishi</span><span class="token operator">:</span><span class="token function">toRef</span><span class="token punctuation">(</span>chengji<span class="token punctuation">.</span>wenzong<span class="token punctuation">,</span><span class="token string">'lishi'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展：<code v-pre>toRefs</code></p>
<p>功能与toRef一致，可以批量创建多个ref对象，语法:<code v-pre>toRefs(对象)</code></p>
<p>例如：<code v-pre>toRefs(person)</code></p>
<p>但是，只能把第一级的属性转换为ref对象，更深一级任然是一个<code v-pre>Proxy</code>对象，如果需要，还要用<code v-pre>toRef(对象,'属性')</code>单独转换</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>toRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> chengji <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">chinese</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">english</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">wenzong</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">zhengzhi</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lishi</span><span class="token operator">:</span><span class="token number">80</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>chengji<span class="token punctuation">)</span>	<span class="token comment">//解构赋值，把参数对象中的所有一级属性转为ref对象，并展开</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、其他组合api" tabindex="-1"><a class="header-anchor" href="#三、其他组合api" aria-hidden="true">#</a> 三、其他组合API</h1>
<h2 id="_1-shallowreactive" tabindex="-1"><a class="header-anchor" href="#_1-shallowreactive" aria-hidden="true">#</a> 1. shallowReactive</h2>
<p>功能和<code v-pre>reactive</code>一样，实现对象的响应式</p>
<p>区别：<code v-pre>shallowReactive</code>只对对象第一层实现响应式</p>
<p>适用于，只有一层的对象</p>
<h2 id="_2-shallowref" tabindex="-1"><a class="header-anchor" href="#_2-shallowref" aria-hidden="true">#</a> 2. shallowRef</h2>
<p>功能和<code v-pre>ref</code>一样</p>
<p>区别：<code v-pre>ref</code>会对<code v-pre>基本数据</code>类型和<code v-pre>对象数据</code>类型都做响应式，而<code v-pre>shallowRef</code>不会对<code v-pre>对象数据类型</code>做响应式，只会管理<code v-pre>基本数据</code>类型</p>
<p>当管理对象时，修改对象的属性，不会有响应式，适用于：不修改属性，而是直接修改对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zs'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
n <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">}</span>	<span class="token comment">//修改n的对象可以触发响应式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-readonly-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#_3-readonly-shallowreadonly" aria-hidden="true">#</a> 3.  readonly/shallowReadonly</h2>
<p><a href="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/reactivity-core.html#readonly<ExternalLinkIcon/></a></p>
<h2 id="_4-toraw-martraw" tabindex="-1"><a class="header-anchor" href="#_4-toraw-martraw" aria-hidden="true">#</a> 4.toRaw/martRaw</h2>
<p><a href="https://cn.vuejs.org/api/reactivity-advanced.html#toraw" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/reactivity-advanced.html#toraw<ExternalLinkIcon/></a></p>
<h2 id="_5-customref" tabindex="-1"><a class="header-anchor" href="#_5-customref" aria-hidden="true">#</a> 5. customRef</h2>
<p><a href="https://cn.vuejs.org/api/reactivity-advanced.html#customref" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/reactivity-advanced.html#customref<ExternalLinkIcon/></a></p>
<p>自定义封装一个响应式函数，用于在响应式时，处理问题，例如：防抖</p>
<p><strong>详细信息</strong></p>
<p><code v-pre>customRef()</code> 预期接收一个工厂函数作为参数，这个工厂函数接受 <code v-pre>track</code> 和 <code v-pre>trigger</code> 两个函数作为参数，并返回一个带有 <code v-pre>get</code> 和 <code v-pre>set</code> 方法的对象。</p>
<p><code v-pre>自定义hook</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>customRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useCustomRef</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout
    <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span>trigger</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> value
               
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
                timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    value <span class="token operator">=</span> newValue
                    <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import useCustom from './hooks/useCustom.js'

let customMsg = useCustom('hello')

return {
    customMsg
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customMsg<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>输入框的数据是：{{customMsg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-provide与inject" tabindex="-1"><a class="header-anchor" href="#_6-provide与inject" aria-hidden="true">#</a> 6.provide与inject</h2>
<p><a href="https://cn.vuejs.org/api/composition-api-dependency-injection.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/composition-api-dependency-injection.html<ExternalLinkIcon/></a></p>
<p>用于祖先组件与后代组件之间传输数据</p>
<p><strong>详细信息</strong></p>
<p><code v-pre>provide()</code> 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。</p>
<p><code v-pre>inject()</code>接收两个参数，第一个是祖先提供的<code v-pre>key</code>，第二个是可选，是没有匹配到key时的默认值</p>
<p><code v-pre>祖先组件.vue</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>provide<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>


<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 注入</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'宝马'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'白色'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>	<span class="token comment">//提供key和值，值可以是响应式的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>后代组件.vue</code></p>
<p>后代组件接收后，就可以直接使用了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>inject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        car
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-响应式数据的判断" tabindex="-1"><a class="header-anchor" href="#_7-响应式数据的判断" aria-hidden="true">#</a> 7. 响应式数据的判断</h2>
<ul>
<li><code v-pre>isRef</code>：检查一个值是否为一个<code v-pre>ref</code>对象</li>
<li><code v-pre>isReactive</code>：检查一个对象是否是由<code v-pre>reactive</code>创建的响应式代理</li>
<li><code v-pre>isReadonly</code>：检查一个对象是否是由<code v-pre>readonly</code>创建的只读代理</li>
<li><code v-pre>isProxy</code>：检查一个对象是否是由<code v-pre>reactive</code>或<code v-pre>readonly</code>方法创建的代理</li>
</ul>
<h1 id="四、新组件" tabindex="-1"><a class="header-anchor" href="#四、新组件" aria-hidden="true">#</a> 四、新组件</h1>
<h2 id="_1-fragment" tabindex="-1"><a class="header-anchor" href="#_1-fragment" aria-hidden="true">#</a> 1. Fragment</h2>
<p>Vue3的模板不需要根标签，Vue2需要。Vue3其实在最外层包裹了一层<code v-pre>fragment</code>标签，但是不渲染，使用Vue开发者工具可以看到</p>
<h2 id="_2-teleport" tabindex="-1"><a class="header-anchor" href="#_2-teleport" aria-hidden="true">#</a> 2. Teleport</h2>
<p>把标签内的元素传送到其他地方，</p>
<p>如果想要做对话框之类的效果，组件的位置是个很大的问题，组件中弹窗元素很容易被其他组件中的CSS干扰，所以可以用Teleport，把弹窗元素传送到另一个地方</p>
<p><code v-pre>&lt;Teleport&gt;</code> 提供了一个更简单的方式来解决此类问题，让我们不需要再顾虑 DOM 结构的问题。让我们用 <code v-pre>&lt;Teleport&gt;</code> 改写一下 <code v-pre>&lt;MyModal&gt;</code>：</p>
<p><code v-pre>&lt;Teleport&gt;</code> 接收一个 <code v-pre>to</code> prop 来指定传送的目标。<code v-pre>to</code> 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段<strong>传送到 <code v-pre>body</code></strong> 标签下”。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello from the modal!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-suspense" tabindex="-1"><a class="header-anchor" href="#_3-suspense" aria-hidden="true">#</a> 3. Suspense</h2>
<p><a href="https://cn.vuejs.org/guide/built-ins/suspense.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/guide/built-ins/suspense.html<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>可以<code v-pre>异步引入组件</code>
异步引入组件在组件因为一些原因加载变慢时，会优先显示加载完成的组件，而不是像Vue2一样，会等待所有组件加载完成。需要配合<code v-pre>Suspense</code>使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Child.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>&lt;Suspense&gt;</code> 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。
<code v-pre>子组件</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token operator">...</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>car<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件的return是一个异步的Promise对象，在正常的组件中，return的值不能是一个Promise，必须是一个对象，但是如果该子组件在父组件中被<code v-pre>Suspense</code>标签包裹，则可以是一个异步组件</p>
<p><code v-pre>父组件</code></p>
<p><code v-pre>Suspense</code>底层是有两个插槽，一个用来插入原本的子组件，一个用来插入在<code v-pre>子组件异步处理未完成</code>时，先展示的样式</p>
<p>被<code v-pre>Suspense</code>标签包裹的子组件可以是异步组件。没有包裹的不能是异步组件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 具有深层异步依赖的  子组件 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dashboard</span> <span class="token punctuation">/></span></span>					
    
  <span class="token comment">&lt;!--子组件异步处理未完成时 在 #fallback 插槽中显示 “正在加载中” --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span>
    Loading...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="五、其他" tabindex="-1"><a class="header-anchor" href="#五、其他" aria-hidden="true">#</a> 五、其他</h1>
<h2 id="_1-全局api的转移" tabindex="-1"><a class="header-anchor" href="#_1-全局api的转移" aria-hidden="true">#</a> 1. 全局API的转移</h2>
<p>Vue3将全局的API，从<code v-pre>Vue.***</code>调整到<code v-pre>app</code>上</p>
</div></template>


