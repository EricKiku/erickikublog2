<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h2>
<p>提高编写CSS的效率，最终编译为CSS代码</p>
<blockquote>
<p>使用less</p>
</blockquote>
<p>这行代码是嵌入到html文件中去编译Less代码，也可以通过其他软件预编译，就不再需要该代码</p>
<p><code v-pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/less@4&quot; &gt;&lt;/script&gt;</code></p>
<p>在代码最后引入上面的代码，必须在引入CSS之后再引入这句话</p>
<blockquote>
<p>预编译</p>
</blockquote>
<p><code v-pre>vs code</code>的插件<code v-pre>EASY LESS</code>可以自动生成与less文件对应的css文件</p>
<p>新建<code v-pre>.less</code>文件，以Less风格写CSS代码，使用<code v-pre>vs code</code>可以自动编译成<code v-pre>.css</code>文件,方便了管理和扩展，最后只要引入对应的<code v-pre>.css</code>文件就行了</p>
<p>Less之间可以导入，想要在一个less文件中使用另一个less文件中的变量啥的，需要导入</p>
<p><code v-pre>@import &quot;路径.less&quot;</code></p>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 🌿注释</h2>
<hr>
<p>以<code v-pre>//</code>开头的注释，预编译之后	，在CSS文件中没有这个注释</p>
<p>以<code v-pre>/**/</code>包裹的注释会被编译到CSS文件中</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 🌿变量</h2>
<hr>
<p>使用<code v-pre>@</code>来声明一个变量，变量都是块级作用域，被大括号分隔</p>
<h3 id="普通变量" tabindex="-1"><a class="header-anchor" href="#普通变量" aria-hidden="true">#</a> 普通变量:</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译之后的CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性变量" tabindex="-1"><a class="header-anchor" href="#属性变量" aria-hidden="true">#</a> 属性变量</h3>
<p>把一个变量的值设为一个选择器，或者一个属性,或者一个URL路径，就需要这样使用<code v-pre>@{变量名}</code></p>
<p>less文件</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@head<span class="token punctuation">:</span></span>#header<span class="token punctuation">;</span>
<span class="token variable">@wid<span class="token punctuation">:</span></span>width<span class="token punctuation">;</span>

<span class="token selector">@{head}</span> <span class="token punctuation">{</span>
  <span class="token property">@{wid}</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译的CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的延迟加载" tabindex="-1"><a class="header-anchor" href="#变量的延迟加载" aria-hidden="true">#</a> 变量的延迟加载</h3>
<p>因为less的变量是块级作用域，在这个块中使用这个变量时，会等待该块代码全部执行完毕之后再赋值，也就是如果后面有使用的变量，则会使用后面的变量值</p>
<p>less:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@value<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>class<span class="token punctuation">{</span>
    @value<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span>box<span class="token punctuation">{</span>
        @value<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token literal-property property">three</span><span class="token operator">:</span>@value<span class="token punctuation">;</span>
        @value<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">one</span><span class="token operator">:</span>@value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .box</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less的嵌套规则" tabindex="-1"><a class="header-anchor" href="#less的嵌套规则" aria-hidden="true">#</a> 🌿Less的嵌套规则</h2>
<p>类似于HTML的嵌套，卸载内部的就是默认的子类，在选择器上会有一个<code v-pre>空格</code>，因为是子类</p>
<p>如果想让他作为兄弟元素，则需要在前加<code v-pre>&amp;</code>,常用于<code v-pre>:hover、:after</code>等,就没有空格</p>
<p>less:</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
         <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token selector">box:hover</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 🌿混合</h2>
<h4 id="普通混合" tabindex="-1"><a class="header-anchor" href="#普通混合" aria-hidden="true">#</a> 普通混合</h4>
<p>当某个代码片段经常使用，比如一个特定的样式，就可以使用混合，将该代码片段定义在一个混合中，</p>
<blockquote>
<p>定义混合:<code v-pre>.变量名{代码片段}</code>。如果不加括号，就会编译到css文件中，如果<code v-pre>.变量名(){}</code>就不会编译到css中</p>
<p>使用混合:<code v-pre>.变量名</code>，有括号时，加括号<code v-pre>.变量名()</code></p>
</blockquote>
<p>定义一个juzhong混合，然后给<code v-pre>#inner和#inner1</code>使用,在css文件中相当于把混合直接复制到指定位置</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.juzhong()</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
    <span class="token selector">#inner</span><span class="token punctuation">{</span>
        <span class="token mixin-usage function">.juzhong</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#inner1</span><span class="token punctuation">{</span>
        <span class="token mixin-usage function">.juzhong</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带参混合" tabindex="-1"><a class="header-anchor" href="#带参混合" aria-hidden="true">#</a> 带参混合</h4>
<p>定义混合时，可以在括号中传输参数，在使用时，也需要带参数使用</p>
<p>参数在代码块中直接当变量使用</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.juzhong(<span class="token variable">@width</span>,<span class="token variable">@height</span>,<span class="token variable">@color</span>)</span><span class="token punctuation">{</span>....<span class="token punctuation">}</span>

<span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.juzhong</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span>100px<span class="token punctuation">,</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带默认值的参数混合" tabindex="-1"><a class="header-anchor" href="#带默认值的参数混合" aria-hidden="true">#</a> 带默认值的参数混合</h4>
<p>定义混合时，括号中的形参可以使用默认值，这样即是不传参也不会报错<code v-pre>@变量:默认值</code></p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>.<span class="token function">juzhong</span><span class="token punctuation">(</span><span class="token variable">@width<span class="token punctuation">:</span></span>100px<span class="token punctuation">,</span><span class="token variable">@height<span class="token punctuation">:</span></span>100px<span class="token punctuation">,</span><span class="token variable">@color<span class="token punctuation">:</span></span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.juzhong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命名参数" tabindex="-1"><a class="header-anchor" href="#命名参数" aria-hidden="true">#</a> 命名参数</h4>
<p>在使用混合时，可以指定该参数传给哪个形参.<code v-pre>.juzhong(@变量:值)</code></p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.juzhong(<span class="token variable">@w</span>:100px,<span class="token variable">@h</span>:100px,<span class="token variable">@c</span>:red)

box</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.juzhong</span><span class="token punctuation">(</span><span class="token variable">@c<span class="token punctuation">:</span></span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配模式混合" tabindex="-1"><a class="header-anchor" href="#匹配模式混合" aria-hidden="true">#</a> 匹配模式混合</h4>
<p>在调用一个混合时，会自动调用同一个名字的混合，并且第一个参数是<code v-pre>@_</code>的混合。</p>
<p>不管调用哪个混合，都会调用同名且参数第一个是<code v-pre>@_</code>的混合</p>
<p>L,R是匹配标识，在调用时，直接<code v-pre>.mixin(L/R,..)</code>就可以调用指定的混合</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.mixin(<span class="token variable">@_</span>)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.mixin(L,<span class="token variable">@h</span>,<span class="token variable">@c</span>)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.mixin(R,<span class="token variable">@h</span>,<span class="token variable">@bo</span>)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arguments混合" tabindex="-1"><a class="header-anchor" href="#arguments混合" aria-hidden="true">#</a> arguments混合</h4>
<p>和js里的<code v-pre>arguments</code>一样，保存的是实参列表，传输的实参不传给形参也可以使用，是一个伪数组</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@1</span>,<span class="token variable">@2</span>,<span class="token variable">@3</span>)</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span><span class="token variable">@arguments</span>
<span class="token punctuation">}</span>

<span class="token selector">#box</span><span class="token punctuation">{</span>
    <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span>solid<span class="token punctuation">,</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid red
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 🌿运算</h2>
<p>less运算时，只要有一个值带单位就可以计算</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token selector">box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token punctuation">(</span>100 <span class="token operator">+</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有看完的</p>
<p><a href="https://www.bilibili.com/video/BV1YW411T7vd?p=6&amp;spm_id_from=pageDriver&amp;vd_source=4826e78be6a985a9a8641312e495221e" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1YW411T7vd?p=6&amp;spm_id_from=pageDriver&amp;vd_source=4826e78be6a985a9a8641312e495221e<ExternalLinkIcon/></a></p>
<p>怀疑少集</p>
</div></template>


