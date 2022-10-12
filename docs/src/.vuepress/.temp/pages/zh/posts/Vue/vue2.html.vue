<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<p>中文文档：<a href="https://vuejs.bootcss.com/guide/" target="_blank" rel="noopener noreferrer">https://vuejs.bootcss.com/guide/<ExternalLinkIcon/></a></p>
<p>菜鸟教程：<a href="https://www.runoob.com/vue2/vue-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/vue2/vue-tutorial.html<ExternalLinkIcon/></a></p>
<h1 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h1>
<blockquote>
<p><strong>Object.defineProperty(对象，属性名，配置)</strong></p>
</blockquote>
<p>为一个对象添加一个属性，并指定键的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zs'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'man'</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>	<span class="token comment">//添加一个age属性，值是18</span>
    <span class="token comment">//enumerable:true,	//控制属性是否可以枚举，默认值是false</span>
    <span class="token comment">//writable:true,	//控制属性是否可以被修改，默认值是false</span>
    <span class="token comment">//configurable:true	//控制属性是否可以被删除，默认是false</span>
    
    <span class="token comment">//当有人读取person的age属性时，就会触发get函数，必须有返回值</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> number	<span class="token comment">//将number返回，则number修改时，age也会修改</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//当有人修改person的age属性时，就会触发set函数，并且会收到要修改的具体值</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	number <span class="token operator">=</span> value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>什么是数据代理</strong></p>
</blockquote>
<p>通过一个对象代理对另一个对象中的属性进行读写操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> per1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zs'</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> per2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>per2<span class="token punctuation">,</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> per1<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        per1<span class="token punctuation">.</span>name <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>Vue 的数据代理</strong></p>
</blockquote>
<p>创建的<code v-pre>data</code>对象中的属性和值，会被<code v-pre>Vue实例</code>所复制，然后在<code v-pre>vm.name和vm.address</code>这两个属性做数据代理。每次访问<code v-pre>vm.name</code>都会触发<code v-pre>getter</code>方法的<code v-pre>_data.name</code>，或者修改时触发<code v-pre>setter</code>方法。页面只有在<code v-pre>data</code>中的数据修改时才会重新渲染</p>
<ol>
<li>
<p>Vue中的数据代理</p>
<p>​	通过vm对象来代理data对象中属性的操作</p>
</li>
<li>
<p>Vue中数据代理的好处</p>
<p>​	更加方便的操作data中的数据</p>
</li>
<li>
<p>基本原理</p>
<p>​	通过<code v-pre>Object.defineProperty()</code>把data对象中所有的属性添加到vm上</p>
<p>​	为每一个添加到vm上的属性，都指定一个<code v-pre>getter/setter</code></p>
<p>​	在getter/setter内部去操作读写data中的属性</p>
</li>
</ol>
<p><img src="https://gitee.com/EricKiku/web/raw/master/Vue/数据代理.png" alt="img" loading="lazy"></p>
<h1 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"firstName"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入姓"</span><span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>    
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"lastName"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入名"</span><span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>
            你的姓名是：<span class="token punctuation">{</span><span class="token punctuation">{</span>fullName<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>


<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">fullName</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token operator">...</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当只有get方法，不需要set方法的时候就可以简写：</p>
<p>计算属性<code v-pre>fullName</code>后的函数就是<code v-pre>getter</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"firstName"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入姓"</span><span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>    
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"lastName"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入名"</span><span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>
            你的姓名是：<span class="token punctuation">{</span><span class="token punctuation">{</span>fullName<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>


<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="监视属性" tabindex="-1"><a class="header-anchor" href="#监视属性" aria-hidden="true">#</a> 监视属性</h1>
<p><a href="https://www.runoob.com/vue2/vue-watch.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/vue2/vue-watch.html<ExternalLinkIcon/></a></p>
<p>深度监视：</p>
<ol>
<li>Vue中的<code v-pre>watch</code>默认不监测对象内部值的改变</li>
<li>需要配置<code v-pre>deep:true</code>可以监测对象内部值改变</li>
<li>Vue自身可以监测对象内部值改变，但是<code v-pre>watch</code>默认不可以</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>a的值是:{{numbers.a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>b的值是:{{numbers.b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>numbers.a++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击a+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>numbers.b++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击b+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">//监视对象中的某个属性的变化</span>
            <span class="token comment">//只监视numbers的a属性</span>
            <span class="token string-property property">'numbers.a'</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">//监视整个对象中所有属性的变化，而不是对象地址的变化</span>
            <span class="token comment">//成为深度监视</span>
            <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token comment">//深度监视开关</span>
                <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'numbers改变了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>监视的简写形式</p>
</blockquote>
<p>当只有一个<code v-pre>handler函数时</code>，就可以简写</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">numbers</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'numbers改变了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="计算属性-监视" tabindex="-1"><a class="header-anchor" href="#计算属性-监视" aria-hidden="true">#</a> 计算属性/监视</h1>
<p><code v-pre>computed</code>和<code v-pre>watch</code>之间的区别：</p>
<ol>
<li>
<p><code v-pre>computed</code>能完成的功能，<code v-pre>watch</code>都可以完成</p>
</li>
<li>
<p><code v-pre>watch</code>能完成的功能，<code v-pre>computed不一定可以完成</code></p>
</li>
<li>
<p>被<code v-pre>Vue</code>所管理的函数，最好写成普通函数，这样<code v-pre>this</code>的指向才是<code v-pre>vm</code>或者<code v-pre>组件实例对象</code></p>
</li>
<li>
<p>所有不被<code v-pre>Vue</code>管理的函数，如<code v-pre>定时器的回调函数、ajax的回调函数、Promise的回调函数等</code>，最好写成<code v-pre>箭头函数</code>，这样<code v-pre>this</code>的指向就是箭头函数外层的<code v-pre>vm</code>或<code v-pre>组件实例对象</code></p>
</li>
</ol>
<h1 id="列表过滤" tabindex="-1"><a class="header-anchor" href="#列表过滤" aria-hidden="true">#</a> 列表过滤</h1>
<p>使用<code v-pre>watch</code>和<code v-pre>computed</code>过滤</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"name"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入姓名"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(p, index) in filPersons"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"p.id"</span><span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">--</span><span class="token punctuation">{</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">--</span><span class="token punctuation">{</span><span class="token punctuation">{</span>p<span class="token punctuation">.</span>sex<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>



    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">persons</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'002'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三丰'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'003'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'004'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李克勤'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">//计算属性方式</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">filPersons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>persons<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> item<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">//侦听属性方式</span>
            <span class="token comment">// watch:{</span>
            <span class="token comment">//     name:{</span>
            <span class="token comment">//         immediate:true,</span>
            <span class="token comment">//         handler(value){</span>
            <span class="token comment">//             this.filPersons = this.persons.filter(item=>{</span>
            <span class="token comment">//                 return item.name.indexOf(value) !== -1;</span>
            <span class="token comment">//             })</span>
            <span class="token comment">//         }</span>
            <span class="token comment">//     }</span>
            <span class="token comment">// }</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在过滤基础上增加排序：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入姓名<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeSort(1)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>降序<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeSort(2)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>升序<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeSort(0)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>原序<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(p, index) in filPersons<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{p.id}}-{{p.name}}--{{p.age}}--{{p.sex}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>



    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">persons</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'002'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三丰'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'003'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'004'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李克勤'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sortType</span><span class="token operator">:</span><span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">filPersons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">let</span> arr <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>persons<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> item<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sortType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span>p2</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sortType <span class="token operator">===</span> <span class="token number">1</span><span class="token operator">?</span>p2<span class="token punctuation">.</span>age <span class="token operator">-</span> p1<span class="token punctuation">.</span>age<span class="token operator">:</span>p1<span class="token punctuation">.</span>age<span class="token operator">-</span>p2<span class="token punctuation">.</span>age
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> arr
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">changeSort</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>sortType <span class="token operator">=</span> value
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// watch:{</span>
            <span class="token comment">//     name:{</span>
            <span class="token comment">//         immediate:true,</span>
            <span class="token comment">//         handler(value){</span>
            <span class="token comment">//             this.filPersons = this.persons.filter(item=>{</span>
            <span class="token comment">//                 return item.name.indexOf(value) !== -1;</span>
            <span class="token comment">//             })</span>
            <span class="token comment">//         }</span>
            <span class="token comment">//     }</span>
            <span class="token comment">// }</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="vue-set" tabindex="-1"><a class="header-anchor" href="#vue-set" aria-hidden="true">#</a> Vue.set()</h1>
<p>在vue运行之后，向<code v-pre>data</code>中的某个属性中添加键值，将不会被vue所检测到，所以页面也不会有响应，因为添加的属性没有<code v-pre>get/set</code>方法，只是一个普通的属性，如果想要在运行之后添加属性需要用到<code v-pre>Vue.set方法()</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vue.set(目标对象，键，值)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目标对象就是<code v-pre>data</code>中的属性、键值就是想添加的键值</p>
<p>如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vue.set(vm._data.student,'sex','男')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vm.$set(vm._data.student,'sex','男')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="vue监视数据原理" tabindex="-1"><a class="header-anchor" href="#vue监视数据原理" aria-hidden="true">#</a> Vue监视数据原理</h1>
<ol>
<li>
<p>vue会监视<code v-pre>data</code>中所有层次的数据。</p>
</li>
<li>
<p>如何监视对象中的数据</p>
<ol>
<li>
<p>通过<code v-pre>setter</code>实现监视，且要在<code v-pre>new Vue</code>时，就传入要检测的数据。</p>
<p>​		对象中后追加的属性，Vue默认不做响应式处理</p>
<p>​		如果需要给后添加的数据做响应式，需要使用以下API</p>
<p>​				<code v-pre>Vue.set(target,propertyName/index,value)</code></p>
<p>​				<code v-pre>vm.$set(target,propertyName/index,value)</code></p>
</li>
</ol>
</li>
<li>
<p>如果监视数组中的数据</p>
<ol>
<li>通过包裹数组更新元素的方法实现，本质就是做了两件事
<ol>
<li>调用原生数组方法对数组进行更新</li>
<li>重新解析模板，进而更新页面</li>
</ol>
</li>
</ol>
</li>
<li>
<p>在Vue中修改修改数组中的某个元素一定要使用如下方法：</p>
<ol>
<li><code v-pre>push()、pop()、shift()、unshift()、splice()、sort()、reverse()</code></li>
<li><code v-pre>Vue.set</code>或<code v-pre>vm.$set</code></li>
</ol>
</li>
</ol>
<p>注意：Vue.set和 vm.$set 不能给 vm 或者 vm 的根数据对象(vm._data) 添加属性</p>
<h1 id="表单v-model" tabindex="-1"><a class="header-anchor" href="#表单v-model" aria-hidden="true">#</a> 表单v-model</h1>
<p><img src="https://gitee.com/EricKiku/web/raw/master/Vue/表单v-model.png" alt="image-20220909224212979" loading="lazy"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tijiao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>账号:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>密码:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
            性别:
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fmale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fmale<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            爱好:
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smoke<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>抽烟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smoke<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>抽烟<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>drink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>喝酒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>drink<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>喝酒<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>烫头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hale<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>烫头<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            所属校区:
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.school<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span><span class="token punctuation">></span></span>--请选择校区--<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beijing<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shanghai<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tianjin<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>天津<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            其他信息:
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.other<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo.agree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
            阅读并接受<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户协议<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Reset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>



<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">userInfo</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'male'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">other</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">checkbox</span><span class="token operator">:</span><span class="token string">''</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">tijiao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h1>
<p>定义：对要显示的数据进行特定格式化后再显示，(适用于一些简单逻辑处理)</p>
<p>语法：</p>
<ol>
<li>
<p>注册过滤器：<code v-pre>Vue.filter(name,callback)的全局过滤器或者new Vue({filters:{}})的局部过滤器</code></p>
</li>
<li>
<p>使用过滤器：<code v-pre>{{ xxx | 过滤器名}}</code> 或者<code v-pre>v-bind:属性='xxx | 过滤器名'</code></p>
</li>
<li>
<p>过滤器中可以传参，传递的参数作为第二个形参被接收，过滤器管道符左侧的数据一直是第一个参数，不用写，默认会传递</p>
</li>
</ol>
<h1 id="内置指令" tabindex="-1"><a class="header-anchor" href="#内置指令" aria-hidden="true">#</a> 内置指令</h1>
<blockquote>
<p><strong>1. v-text</strong></p>
</blockquote>
<ol>
<li>向其所在的节点中渲染文本内容</li>
<li>与插值语法的区别，v-text会替换掉节点中的内容，插值不会</li>
</ol>
<blockquote>
<p><strong>2. v-html</strong></p>
</blockquote>
<p>和v-text一样，写在标签内，但是可以解析html结构语法</p>
<blockquote>
<p><strong>3. v-clock</strong></p>
</blockquote>
<p>没有值</p>
<p>本质是一个特殊属性，Vue实例创建完毕之后，会删掉接管的<code v-pre>v-clock</code>属性</p>
<p>配合CSS的可以解决网速过慢的时候页面没有渲染就显示的问题</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">[v-clock]:</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>4. v-once</strong></p>
</blockquote>
<p>只有第一次会被vue解析，之后就不会再被vue修改了</p>
<blockquote>
<p><strong>5. v-pre</strong></p>
</blockquote>
<p>让vue跳过所在节点的编译过程</p>
<p>可以利用这个跳过没有指令，插值语法的节点，可以加快编译速度</p>
<h1 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h1>
<p>自定义指令只需要指定<code v-pre>v-</code>后面的名字，当自定义指令是一个函数时，有两个参数，分别是<code v-pre>真实DOM对象</code>和<code v-pre>传输的data</code>，data中包含，指令名，带v-的指令明，和指令后指定的参数</p>
<p>自定义指令中的<code v-pre>this</code>都是<code v-pre>window</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-big</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击n+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">big</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                el<span class="token punctuation">.</span>innerText <span class="token operator">=</span> data<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义指令有两种方式：<code v-pre>函数、对象</code>。</p>
<p>函数就是上面的代码，只能处理一些简单的方法，函数方式就是合并了对象方式的<code v-pre>bind和update</code></p>
<p>最好使用对象的形式：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>big:{
	//在指令与元素绑定成功时就触发
    bind(element,binding){
        
    },
	//指令所在元素被插入页面时触发
    inserted(element,binding){

    },
	//指令所在的模板被重新解析时触发
	update(element,binding){

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="vue组件实例化对象" tabindex="-1"><a class="header-anchor" href="#vue组件实例化对象" aria-hidden="true">#</a> Vue组件实例化对象</h1>
<p>于VueComponent:
1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。</p>
<p>2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：new VueComponent(options).</p>
<p>3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent!!！！</p>
<p>4.关于this指向：
(1).组件配置中：
<code v-pre>data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。</code></p>
<p>(2).new Vue(options)配置中：
<code v-pre>data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。</code></p>
<p>5.VueComponent的实例对象，以后简称vc(也可称之为：组件实例对象)。
Vue的实例对象，以后简称vm。</p>
<h1 id="vue单文件工作流程" tabindex="-1"><a class="header-anchor" href="#vue单文件工作流程" aria-hidden="true">#</a> Vue单文件工作流程</h1>
<h3 id="_1-创建组件" tabindex="-1"><a class="header-anchor" href="#_1-创建组件" aria-hidden="true">#</a> 1. 创建组件</h3>
<p><code v-pre>Student.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学生名称:{{name}}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学生年龄:{{age}}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Student'</span><span class="token punctuation">,</span>
   <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'erickiku'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>School.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学校名称:{{name}}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>学校地址:{{address}}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我显示学校名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'School'</span><span class="token punctuation">,</span>
   <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'shangguigu'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">'beijing'</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建app-vue" tabindex="-1"><a class="header-anchor" href="#_2-创建app-vue" aria-hidden="true">#</a> 2. 创建App.vue</h3>
<p>用于管理所有的组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Schllo</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Schllo</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Student</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//引入组件</span>
    <span class="token keyword">import</span> School <span class="token keyword">from</span> <span class="token string">'./School.vue'</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> Student <span class="token keyword">from</span> <span class="token string">'./Student.vue'</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'App'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//注册引入的组件</span>
        School<span class="token punctuation">,</span>
        Student
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建main-js" tabindex="-1"><a class="header-anchor" href="#_3-创建main-js" aria-hidden="true">#</a> 3.创建main.js</h3>
<p>用于创建vue实例，和管理App.vue</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>App<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-创建index-html" tabindex="-1"><a class="header-anchor" href="#_4-创建index-html" aria-hidden="true">#</a> 4. 创建index.html</h4>
<p>最后把<code v-pre>main.js</code>引入html，即可</p>
<p>最终需要脚手架去管理</p>
<h1 id="vue脚手架" tabindex="-1"><a class="header-anchor" href="#vue脚手架" aria-hidden="true">#</a> Vue脚手架</h1>
<p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/<ExternalLinkIcon/></a></p>
<h1 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h1>
<p>给DOM标签一个<code v-pre>ref</code>属性，用来代替<code v-pre>id</code>属性，可以通过ref获取真实DOM元素</p>
<p>获取元素：<code v-pre>this.$refs.标签上ref指定的名字</code></p>
<p>如果把ref放在组件标签上，就可以获取这个组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>school<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token operator">...</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>school		<span class="token comment">//获取School组件</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h1>
<p>功能：让组件接收外部传过来的数据</p>
<pre><code>1. 传递数据：

1. ```
   &lt;Demo name='xxx'/&gt;
   ```

2. 接收数据：

	1. 第一种方式：

    	1. ```
        props:['name']		//只接收
        ```

	2. 第二种方式

    	1. ```
        props:{
        	name:String		//限制类型
        }
        ```

	3. 第三种方式

    	1. ```
        props:{			//限制类型，限制必要性和指定默认值
        	name:{
        		type:String,
        		required:true,		//是否必要
        		default:'张三'		//默认值
        	}
        }
        ```

3. props中的数据不能更改，更改会报错
</code></pre>
<h1 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> 混入</h1>
<p>功能：可以把多个组件共用的配置提取成一个混入对象</p>
<p>使用方式：</p>
<p>​	创建混入.js文件</p>
<p>​	定义混合:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> mixin <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	使用混合：</p>
<ol>
<li>局部混入：<code v-pre>mixins:['混合文件名']</code></li>
<li>全局混入:<code v-pre>Vue.mixin(混合文件名)</code></li>
</ol>
<p>当组件和混合中都有一个属性时，按照组件为准，但是生命周期钩子函数是全部都触发</p>
<h1 id="scoped" tabindex="-1"><a class="header-anchor" href="#scoped" aria-hidden="true">#</a> scoped</h1>
<p>在组件的<code v-pre>&lt;style&gt;</code>标签上写上<code v-pre>scoped</code>可以设置单独作用域，指定该样式只为该组件使用，不会与其他组件冲突</p>
<h1 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage" aria-hidden="true">#</a> webStorage</h1>
<p>浏览器端通过<code v-pre>Window.sessionStorage</code>和<code v-pre>Window.localStorage</code>属性来实现本地存储机制</p>
<h2 id="浏览器本地存储" tabindex="-1"><a class="header-anchor" href="#浏览器本地存储" aria-hidden="true">#</a> 浏览器本地存储</h2>
<h3 id="_1-保存数据" tabindex="-1"><a class="header-anchor" href="#_1-保存数据" aria-hidden="true">#</a> 1.保存数据：</h3>
<p>value可以是任意类型，但是为对象类型时，最好用<code v-pre>JSON.stringify()</code>来转换成JSON字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-读取数据" tabindex="-1"><a class="header-anchor" href="#_2-读取数据" aria-hidden="true">#</a> 2.读取数据：</h3>
<p>如果再读取对象时，最好用<code v-pre>JSON.parse()</code>做一个转换</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除数据" tabindex="-1"><a class="header-anchor" href="#_3-删除数据" aria-hidden="true">#</a> 3.删除数据：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-清空数据" tabindex="-1"><a class="header-anchor" href="#_4-清空数据" aria-hidden="true">#</a> 4.清空数据：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session存储" tabindex="-1"><a class="header-anchor" href="#session存储" aria-hidden="true">#</a> Session存储</h2>
<p>和浏览器本地存储代码一模一样，只是把local换成了<code v-pre>session</code></p>
<p>区别：SessionStorage中存储的内容随着浏览器窗口关闭而消失，LocalStorage的数据不会</p>
<h1 id="生成唯一id" tabindex="-1"><a class="header-anchor" href="#生成唯一id" aria-hidden="true">#</a> 生成唯一id</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i nanoid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import {nanoid} from 'nanoid'
...
congt obj = {
	id:nanoid()	//就可以获取一个唯一的id
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件之间的通信" tabindex="-1"><a class="header-anchor" href="#组件之间的通信" aria-hidden="true">#</a> 组件之间的通信</h1>
<p><a href="https://segmentfault.com/a/1190000019208626" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000019208626<ExternalLinkIcon/></a></p>
<h2 id="父传子" tabindex="-1"><a class="header-anchor" href="#父传子" aria-hidden="true">#</a> <strong><code v-pre>父传子</code></strong></h2>
<p>使用<code v-pre>props</code>来接收数据</p>
<p><strong>父组件</strong>App.vue:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>李四<span class="token punctuation">"</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Student</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子组件</strong>Student.vue:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>props:{
    name:{
    	type:String,
    },
    age:{
    	type:Number
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：在父组件中的子组件标签上添加属性和值，在子组件中使用props来接收，接收到的值正常使用</p>
<h2 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父" aria-hidden="true">#</a> <code v-pre>子传父</code></h2>
<blockquote>
<p>方式一：父组件给子组件传递函数类型的props</p>
</blockquote>
<p><strong>父组件</strong>App.vue:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">:msgFromChild</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msgFromChildfun<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">></span></span>
..
methods:{
    msgFromChildfun(x){
    	console.log(x);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子组件</strong>School.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>props:['msgFromChild'],
methods:{
    send(){
        this.msgFromChild('i am msg that from child')
    },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：父组件在子组件标签上通过属性传递一个方法，子组件接收方法，然后调用，父组件的方法就被调用</p>
<blockquote>
<p>方式二：父组件给子组件绑定自定义事件</p>
</blockquote>
<p><strong>父组件</strong>app.vue:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span> <span class="token attr-name"><span class="token namespace">v-on:</span>msgsend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msgsendfun<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Student</span><span class="token punctuation">></span></span>

methods:{
    msgsendfun(value){
    	console.log('msgsend被触发了,返回值：'+value);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子组件</strong>Student.vue:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>methods: {
    senddiy(){
    	this.$emit('msgsend',this.name)
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：在父组件中，给子组件标签一个自定义事件，在子组件中使用<code v-pre>$emil</code>触发事件，不需要接收数据，可以直接触发</p>
<p>解绑事件：</p>
<p>在哪个组件上绑定，就在哪个组件解绑</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>this.$off(['事件1','事件2'])	//解绑多个自定义组件
this.$off()		//解绑所有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局事件总线" tabindex="-1"><a class="header-anchor" href="#全局事件总线" aria-hidden="true">#</a> 全局事件总线</h2>
<p>设置一个全局的总线，所有组件都可以使用这个总线</p>
<p>想要绑定事件的组件<code v-pre>在总线上绑定事件</code>，可以在任何组件中触发<code v-pre>总线上对应</code>的事件，事件名不可重复，所以在组件销毁之前要解绑</p>
<p>一、设置全局事件总线</p>
<p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span><span class="token parameter">h</span><span class="token operator">=></span><span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bug <span class="token operator">=</span> <span class="token keyword">this</span>       <span class="token comment">//设置全局事件总线</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、绑定事件</p>
<p>在生命周期钩子函数中设置<code v-pre>事件绑定$on</code></p>
<p>//第一个参数是事件名，第二个参数是，触发事件的组件返回的值</p>
<p>在销毁之前解绑，不能为空</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bug<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'givemename'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>	<span class="token comment">//往事件总线上绑定事件</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$bug<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'givemename'</span><span class="token punctuation">)</span>    <span class="token comment">//解绑，不能为空，为空就把总线上的所有事件全部解绑</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、触发事件</p>
<p>在某个组件中，可以使用<code v-pre>$emil</code>来触发事件，一个是事件名，一个是返回值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">sendmsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$bug<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'givemename'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布" aria-hidden="true">#</a> 消息订阅与发布</h2>
<p>推荐使用<code v-pre>pubsub-js</code>库</p>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i pubsub-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在哪个组件使用，就需要在哪个组件引入</p>
<p>消息订阅：</p>
<p>当订阅开启后，相当于一直处于监听状态，当有人发布对应的消息时，就会触发回调函数，回调函数两个参数<code v-pre>1.消息名，2.返回值</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//订阅`submessage`消息</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pubId <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'submessage'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">pubname<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>pubmsg <span class="token operator">=</span> value	<span class="token comment">//this是vm，如果是普通函数，this就是undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pubId<span class="token punctuation">)</span>	<span class="token comment">//组件销毁时，销毁订阅</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息发布：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">pubsubsend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'submessage'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>   <span class="token comment">//发布submessage消息，并携带返回值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h1>
<p>功能：下一次DOM更新之后触发，使用vue的<code v-pre>$nextTick</code>API可以等待DOM节点更新完成之后，再执行回调。</p>
<p>一般用于更新DOM之后立刻对DOM进行一些操作，如获取焦点，但是会失败，因为会先把代码执行完毕之后在更新，所以设置焦点时，元素还只是虚拟DOM，需要<code v-pre>this.$nextTick()</code>来等待DOM更新之后在执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>更新<span class="token constant">DOM</span>操作<span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h1>
<p><a href="https://vuejs.bootcss.com/guide/transitions.html" target="_blank" rel="noopener noreferrer">https://vuejs.bootcss.com/guide/transitions.html<ExternalLinkIcon/></a></p>
<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用在其他的笔记</p>
<p>笔记：<a href="https://gitee.com/EricKiku/web/blob/master/axios/%E7%AC%94%E8%AE%B0/axios.md" target="_blank" rel="noopener noreferrer">https://gitee.com/EricKiku/web/blob/master/axios/笔记/axios.md<ExternalLinkIcon/></a></p>
<h2 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h2>
<p>由于同源问题，需要有一个代理服务器，来间接访问想要访问的服务器，来获取数据。</p>
<p>因为服务器与服务器之前的访问不会有跨域问题</p>
<p>配置代理服务器：</p>
<p><code v-pre>vue.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vue/cli-service'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>		<span class="token comment">//开启代理服务器(有更好的方式)</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token string">'http://localhost:5555'</span>	
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在发送请求时，就不需要去向目标地址发送请求了，可以直接访问代理服务器地址，本机去访问代理服务器中的地址</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8080/server'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//本机地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就相当于访问本机地址，然后代理到<code v-pre>http://localhost:5555</code>这个地址，请求<code v-pre>server</code>路由，一般代理服务器地址都是本机服务器地址</p>
<p>第二种方式：	更灵活</p>
<p>可以指定多个代理，<code v-pre>./api</code>就是一个代理的<code v-pre>请求前缀</code>，如果没有前缀就不触发代理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>			<span class="token comment">//请求前缀</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:5555'</span><span class="token punctuation">,</span>	<span class="token comment">//目标地址</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">'^/api'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">,</span>	<span class="token comment">//把实际请求路径中的api换为空串</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment">//用于支持 websocket	默认true</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>	<span class="token comment">//用于控制请求头中host值，默认true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/foo'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'&lt;other_url>'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>changeOrigin</code>：为true时，服务器收到的请求头就是5555，和目标服务器端口号路径一致。</p>
<p>为false时，服务器收到的请求头就是8080，始终都是自己的路径端口号</p>
<p>发送请求:</p>
<p>需要加上请求前缀</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8080/api/server1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h1>
<h2 id="默认插槽" tabindex="-1"><a class="header-anchor" href="#默认插槽" aria-hidden="true">#</a> 默认插槽</h2>
<p>当父组件中使用子组件标签时，使用了双标签，并且其中还有一段DOM元素，就需要在子组件中使用插槽<code v-pre>slot</code>，相当于父组件给子组件一个DOM元素，子组件把元素插在指定的位置</p>
<p><code v-pre>父组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Category</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>我是插槽中应该出现的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Category</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>子组件Category</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in shows<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{item}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>我是插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>	//父组件给的元素就会插在这个位置上
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有多个默认插槽都会被填充，除非是具名插槽</p>
<p>插槽有默认值，如果不向插槽中填充DOM元素，就会输出默认值<code v-pre>我是插槽</code></p>
<h2 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h2>
<p>给插槽一个<code v-pre>name</code>属性，让插槽可以被指名插入，在父组件的子组件标签上也要指名插槽名字</p>
<p><code v-pre>父组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Category</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽中应该出现的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽中应该出现的数据2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Category</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>子组件Category</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用<code v-pre>template</code>标签，来让多个元素同时被插入</strong>：</p>
<p>需要在template标签上写<code v-pre>v-slot</code>属性，值没有引号</p>
<p><code v-pre>父组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Category</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>one</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>template中的数据1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>template中的数据1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Category</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>子组件Category</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h2>
<p>当想要插入的元素中所使用的数据不在父组件中，而是在插槽所在的子组件中。父组件是不能使用子组件中的数据的，就需要用<code v-pre>作用域插槽</code>把子组件中的数据，通过<code v-pre>slot</code>传递到父组件中插槽的位置</p>
<p><code v-pre>父组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Category</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{ slotProps.text }} {{ slotProps.count }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Category</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>子组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greetingMessage<span class="token punctuation">"</span></span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例中，子组件插槽上有两个属性<code v-pre>text</code>和<code v-pre>count</code>，在使用该组件的标签中的<code v-pre>template</code>上，有个属性<code v-pre>v-slot</code>，指定了一个值。就相当于给<code v-pre>slotProps</code>这个对象中添加了两个键<code v-pre>text、count</code>，值就是键对应的值，在这个子组件标签中可以使用这些数据</p>
<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> VueX</h1>
<p>在Vue中实现集中式状态管理的一个Vue插件</p>
<p>什么时候使用vuex：1. 多个组件依赖于同一个状态	2.来自不同的组件的行为需要变更同一状态</p>
<p><img src="https://vuex.vuejs.org/vuex.png" alt="vuex" loading="lazy"></p>
<p><code v-pre>Vue components</code>发出响应，如果有操作需要逻辑或者需要调用接口，就需要先经过<code v-pre>Actions</code>，如果没有逻辑，就是一个简单的修改数据，则可以直接访问<code v-pre>Mutations</code>，从而修改或读取数据，再响应给<code v-pre>State</code>，最后重新渲染页面</p>
<p>安装：</p>
<p>Vue2只能使用<code v-pre>Vuex3</code>，但是现在默认安装的是<code v-pre>Vuex4</code>，所以需要指定版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i vuex@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建环境" tabindex="-1"><a class="header-anchor" href="#创建环境" aria-hidden="true">#</a> 创建环境</h2>
<p>创建文件:<code v-pre>src/store/index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//该文件用于创建Vuex中核心的Store</span>

<span class="token comment">//引入Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">//引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token comment">//使用vuex</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">//创建actions-用于响应组件中的动作</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//创建mutations-用于操作数据</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//创建state-用于存储数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    actions<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    state
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>main.js</code>中引入Store的<code v-pre>index.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store/index'</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>				<span class="token comment">//引入了在这里使用，就可以让所有组件访问state</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>首先在组件的方法中，调用<code v-pre>dispatch</code>方法，调用<code v-pre>actions</code>配置中对应的方法，再调用<code v-pre>mutations</code>配置中对应的方法，在<code v-pre>mutations</code>中修改<code v-pre>state</code>中的值.
在任意组件上，都可以访问<code v-pre>$store</code>，在组件实例中使用<code v-pre>this.$store</code>，在模板的插值语法中可以:<code v-pre>$store.state.xxx</code>来访问Vuex中<code v-pre>state</code>中的值</p>
<p><code v-pre>子组件</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>methods: {
    add(){
		//参数是 方法名,值
    	this.$store.dispatch('add',this.msg)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>store/index.js</code></p>
<p>上下文<code v-pre>context</code>中有很多属性，其中也有<code v-pre>state</code>，可以直接获取到state中的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//参数是: 上下文,值</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//调用上下文的commite方法，找mutations(方法名,值)</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'ADD'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//参数是:state,值</span>
    <span class="token constant">ADD</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>result <span class="token operator">+=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">result</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：如果没有逻辑，也就是只操作数据，可以不使用<code v-pre>actions</code>，直接访问<code v-pre>mutations</code>。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>methods: {
    add(){
		//可以在组件中，直接commit，直接访问mutations
    	this.$store.commit('ADD',this.msg)
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> getters</h2>
<p>一个新的store配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//getters中方法的参数是state，所以可以直接获取state中的值</span>
    <span class="token function">bigResult</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">.</span>result <span class="token operator">*</span> <span class="token number">10</span>	<span class="token comment">//加工，把数据变为十倍</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//创建并暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    actions<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    state<span class="token punctuation">,</span>
    getters	<span class="token comment">//getters</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用是相当于一个<code v-pre>计算属性</code>，所有组件都可以获取这个属性，上面的例子中的一个属性<code v-pre>bigResult</code>，所有组件都可以通过插值语法<code v-pre>$store.getters.bigResult</code>或<code v-pre>this.$store.getters.bigResult</code>来获取数据</p>
<h2 id="mapstate" tabindex="-1"><a class="header-anchor" href="#mapstate" aria-hidden="true">#</a> mapState</h2>
<p>借助mapState生成计算属性，从<code v-pre>state</code>中读取数据：</p>
<p>意思就是**<code v-pre>用于帮助我们映射state中的数据为计算属性</code>**</p>
<p>一个可以自动生成计算属性的函数，由于一直写<code v-pre>$store.state</code>比较麻烦，可以使用计算属性来简化这个操作，也可以用<code v-pre>mapState</code>这个vue提供的简化操作，把想要的名字和对应的<code v-pre>state中的数据</code>传入参数</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import {mapState} from 'vuex'

computed:{
    ...mapState({
		result:'result',
		result1:'result1'
	})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>里面的参数是这样的：<code v-pre>键：result</code>是想要的名字，<code v-pre>值：result</code>是<code v-pre>state</code>中的真实存在的数据，以前在模板中使用<code v-pre>result</code>是这样的：<code v-pre> $store.state.result </code>，配置了<code v-pre>mapState</code>后，可以直接<code v-pre> result</code></p>
<p>上面是对象写法，如果键值相同的话，可以使用数组写法，想要在模板使用的名字和访问state中数据的名字一模一样的时候就可以用数组的写法，<code v-pre>必须和state中数据名字一样</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">,</span><span class="token string">'result1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mapgetters" tabindex="-1"><a class="header-anchor" href="#mapgetters" aria-hidden="true">#</a> mapGetters</h2>
<p>功能和上面的一模一样，就是名字不一样，读取数据的位置不一样，一个是<code v-pre>state</code>，一个是<code v-pre>getters</code>，<code v-pre>getters</code>中的数据就相当于计算属性，以<code v-pre>state</code>中的数据为源数据，进行一些操作所的的数据放在<code v-pre>getters</code>中，必须是<code v-pre>return</code>返回的值，以前是通过<code v-pre>$store.getters.bigResult</code>来读取数据，用了这个之后，就可以直接<code v-pre>bigResult</code>来读取数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'bigResult'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapmutations" tabindex="-1"><a class="header-anchor" href="#mapmutations" aria-hidden="true">#</a> mapMutations</h2>
<p>功能相同，前两个是映射计算属性，后两个是映射方法，写在<code v-pre>methods</code>配置里，格式是：<code v-pre>mapMutations({方法名:'mutation中的方法名'})</code>。键方法名是用于按钮点击时绑定的方法名，值方法名是<code v-pre>mutation</code>中改变数据的方法名，这个是属于没有逻辑，直接修改数据的方式。</p>
<p>注意：如果这样的话，模板中按钮绑定的点击事件必须带括号并且有实参，如果没有就返回的是鼠标事件<code v-pre>event</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add(msg)"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">...</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">ADD</span><span class="token operator">:</span><span class="token string">'ADD'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于代替：<code v-pre>this.$store.commit('ADD',this.msg)</code>。用来这个之后，就不需要前面的代码了 ，在按钮上有点击事件就行了，可以自动调用commit方法</p>
<p>也有数组方式，名字一样就用数组方式，都是以<code v-pre>mutation</code>中方法名为准</p>
<h2 id="mapactions" tabindex="-1"><a class="header-anchor" href="#mapactions" aria-hidden="true">#</a> mapActions</h2>
<p>功能相同，也是写在<code v-pre>methods</code>配置中，用于映射方法，也要在按钮点击事件上写实参，要不就返回点击事件event了。</p>
<p>代替了：<code v-pre>this.$store.dispatch('add',this.msg)</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"add(msg)"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">...</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">add</span><span class="token operator">:</span><span class="token string">'add'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也有数组写法</p>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<p>当一个Vuex管理多个不同的功能时，如果都写在一个Store中，就会混乱，所以，根据功能划分多个模块，每个模块都有完整的<code v-pre>actions,mutation,state,getters等</code>配置</p>
<p>每个模块就是一个对象，其中有完整的结构，最后在暴露时，通过modules指名模块</p>
<p>之前，使用方法是：<code v-pre>$store.state、this.$store.commit()、this.$store.dispatch()</code>。</p>
<p>如果使用模块化，则<code v-pre>$store</code>上就没有这些了，有的是模块的名字<code v-pre>schllo,student</code>，需要使用模块名字来调用其中的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    cot state<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span>
        school<span class="token punctuation">,</span>
        student
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果还是想要使用<code v-pre>mapState</code>，那么就必须在模块上添加一个属性<code v-pre>namespaced:true</code>，开启后，才可以让mapState认识模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">'school'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个代码的意思是，把<code v-pre>school</code>模块中的<code v-pre>state</code>中的name变为计算属性，新添加的参数，第一个参数指定使用哪个模块，模块必须开启<code v-pre>namespaced</code></p>
<p>如果不使用mapState，在模块上访问模块中的数据时：</p>
<p><code v-pre>$store.state.school.name</code></p>
<p>不管是<code v-pre>mapState、mapActions、mapMutations、mapGetters</code>，都需要在第一个参数的位置写上模块名，才可以解析第二个参数中的数据或者方法名</p>
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
<h2 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> props</h2>
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
<h1 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h1>
<p>项目打包后可以部署在后端服务器上，这里使用nodejs模拟一下</p>
<ol>
<li>
<p>打包vue脚手架代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>把<code v-pre>disp</code>目录中的静态资源放在后端项目中的<code v-pre>static或public</code>文件夹下</p>
</li>
<li>
<p>若使用后端<code v-pre>express</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname<span class="token operator">+</span><span class="token string">'/static'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来指定静态页面资源路径</p>
</li>
<li>
<p>最后直接访问服务器路径</p>
</li>
</ol>
<h1 id="vue-ui组件库" tabindex="-1"><a class="header-anchor" href="#vue-ui组件库" aria-hidden="true">#</a> Vue UI组件库</h1>
<ul>
<li>移动端常用UI组件库
<ul>
<li>Vant</li>
<li>Cube UI    <a href="https://didi.github.io/cube-ui/#/zh-CN" target="_blank" rel="noopener noreferrer">https://didi.github.io/cube-ui/#/zh-CN<ExternalLinkIcon/></a></li>
<li>Mint UI</li>
</ul>
</li>
<li>PC段常用UI组件库
<ul>
<li>Element UI    <a href="https://element.eleme.cn/#/zh-CN" target="_blank" rel="noopener noreferrer">https://element.eleme.cn/#/zh-CN<ExternalLinkIcon/></a></li>
<li>IView UI    <a href="https://www.iviewui.com/" target="_blank" rel="noopener noreferrer">https://www.iviewui.com/<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</div></template>


