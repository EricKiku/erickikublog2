<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h2 id="es6-入门网址" tabindex="-1"><a class="header-anchor" href="#es6-入门网址" aria-hidden="true">#</a> ES6 入门网址</h2>
<p><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">https://es6.ruanyifeng.com/<ExternalLinkIcon/></a></p>
<h2 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> <code v-pre>let</code></h2>
<p>​	用于变量声明，具有块级作用域，也就是在大括号中有块级作用域，而<code v-pre>var</code>没有这个特点</p>
<ul>
<li>
<p>不存在变量提升</p>
</li>
<li>
<p>块级作用域</p>
</li>
<li>
<p>具有暂时性死去</p>
</li>
<li>
<p>不能重复声明</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//num is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>​	面试题:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//0 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	面试题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//0 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> <code v-pre>const</code></h2>
<ol>
<li>声明一个常量</li>
<li>定义时必须要赋值</li>
<li>一般常量需要大写</li>
<li>定义的值不能修改</li>
<li>具有块级作用域</li>
<li>用const定义的数组，对象，内容可以发生改变</li>
</ol>
<h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> <code v-pre>解构赋值</code></h2>
<p>ES6 允许按照一定的模式从数组和对象中提取值，对变量进行赋值，被称为<code v-pre>解构赋值</code></p>
<p>数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token string">'李四'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>zs<span class="token punctuation">,</span>lisi<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//张三</span>
<span class="token function">log</span><span class="token punctuation">(</span>lisi<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//李四</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">21</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>naem<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//张三</span>
<span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> <code v-pre>模板字符串[``]</code></h2>
<p>新的声明字符串的方法：单引号==``==</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是字符串</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优势：</p>
<ol>
<li>可以直接出现换行符</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
			&lt;div>
			&lt;/div>
		  </span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>变量拼接<code v-pre>${}</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'我是人，叫'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">张三</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简化对象和方法写法" tabindex="-1"><a class="header-anchor" href="#简化对象和方法写法" aria-hidden="true">#</a> <code v-pre>简化对象和方法写法</code></h2>
<ol>
<li>可以直接在对象中，写入变量和函数</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    sayHello
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    <span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我会打代码'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> <code v-pre>箭头函数</code></h2>
<p>​	ES6允许使用箭头来定义函数<code v-pre>()=&gt;{}</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特性：</p>
<ol>
<li><code v-pre>this</code>是静态的，始终指向函数声明时所在的作用域下的<code v-pre>this</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"window.name"</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span>
<span class="token punctuation">}</span>

<span class="token function">fun1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//张三</span>
<span class="token function">fun2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//window.name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>不能作为构造函数使用</p>
</li>
<li>
<p>不能使用<code v-pre>arguments</code>获取实参变量伪数组</p>
</li>
<li>
<p>箭头函数简写</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//当形参有且只有一个的时候，可以省略小括号</span>
<span class="token keyword">let</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token parameter">name</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//当代码体只有一条语句时，可以省略大括号,并且执行结果就是函数的返回值</span>
<span class="token keyword">let</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=></span>  n <span class="token operator">*</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>箭头函数需求：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//从数组返回偶数的元素</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>
<p>箭头函数适合与<code v-pre>this</code>无关的回调，如定时器、数组的方法</p>
</li>
<li>
<p>不适合与<code v-pre>this</code>有关的回调，事件回调，对象的方法</p>
</li>
</ol>
<h2 id="函数参数默认值" tabindex="-1"><a class="header-anchor" href="#函数参数默认值" aria-hidden="true">#</a> <code v-pre>函数参数默认值</code></h2>
<p>​	ES6允许给函数参数赋值初始值</p>
<ol>
<li><strong>形参初始值，具有默认值的参数，一般放在最后</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">10</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>可以与结构赋值结合</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">{</span>host<span class="token punctuation">,</span>username<span class="token punctuation">,</span>password<span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token string">'8080'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">log</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>

<span class="token keyword">let</span> local <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">'localhost'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">'root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">'123456'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">3306</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rest参数" tabindex="-1"><a class="header-anchor" href="#rest参数" aria-hidden="true">#</a> <code v-pre>rest参数</code></h2>
<p>​	1.用来获取函数的实参，代替<code v-pre>arguments</code>，如果前面有多个参数，<code v-pre>rest参数</code>必须放在形参最后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//one two three</span>
<span class="token punctuation">}</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">,</span><span class="token string">'two'</span><span class="token punctuation">,</span><span class="token string">'three'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> <code v-pre>扩展运算符</code></h2>
<p>​	把一个<code v-pre>数组</code>转换为一个<code v-pre>逗号</code>分隔的<code v-pre>参数序列</code>。就相当于把数组的中括号给去掉了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> tfboys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'易烊千玺'</span><span class="token punctuation">,</span><span class="token string">'王俊凯'</span><span class="token punctuation">,</span><span class="token string">'王源'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">tf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">//'易烊千玺','王俊凯','王源'	,不是一个数组</span>
<span class="token punctuation">}</span>

<span class="token function">tf</span><span class="token punctuation">(</span><span class="token operator">...</span>tfboys<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//把数组拆分成三个单独的字符串，当做实参传递</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>应用：数组的合并</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'赵四'</span><span class="token punctuation">,</span><span class="token string">'刘能'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'王宝强'</span><span class="token punctuation">,</span><span class="token string">'宋小宝'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arrAll <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span><span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span>	<span class="token comment">//就合并在一块了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>数组的克隆</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">'C'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">;</span>		<span class="token comment">//这样arr1的值就和arr一模一样</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>将伪数组转换为真正的数组</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">//得到一个伪数组</span>

<span class="token keyword">let</span> divArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>divs<span class="token punctuation">]</span><span class="token punctuation">;</span>		<span class="token comment">//把伪数组转换成为真数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> <code v-pre>symbol</code></h2>
<p>~未完。。。</p>
</div></template>


