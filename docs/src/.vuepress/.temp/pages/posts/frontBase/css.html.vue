<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="_1-h1" tabindex="-1"><a class="header-anchor" href="#_1-h1" aria-hidden="true">#</a> 1.<code v-pre>&lt;h1&gt;</code></h1>
<blockquote>
<p>将有关联的一组标签放在一个组里</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hgroup</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Title 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Title 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hgroup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-块级元素" tabindex="-1"><a class="header-anchor" href="#_2-块级元素" aria-hidden="true">#</a> 2.<code v-pre>块级元素</code></h1>
<blockquote>
<p>块级元素（block element）在浏览器中占据整行，并排斥其它元素与其位于同一行。也就是说，块级元素的宽度是 100%</p>
<p>块级元素不管宽度有多小，总是独占一行</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">块级元素</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">div</td>
<td>最典型的块元素，常用</td>
</tr>
<tr>
<td style="text-align:center">p</td>
<td>表示段落</td>
</tr>
<tr>
<td style="text-align:center">h1-h6</td>
<td>表示1-6级标题（默认加粗）</td>
</tr>
<tr>
<td style="text-align:center">br</td>
<td>表示换行</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7534.html" target="_blank" rel="noopener noreferrer">ol<ExternalLinkIcon/></a></td>
<td>有序列表</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7534.html" target="_blank" rel="noopener noreferrer">ul<ExternalLinkIcon/></a></td>
<td>无序列表</td>
</tr>
</tbody>
</table>
<h1 id="_3-行内元素" tabindex="-1"><a class="header-anchor" href="#_3-行内元素" aria-hidden="true">#</a> 3.<code v-pre>行内元素</code></h1>
<blockquote>
<p>行内元素又称内联元素（inline block）。在浏览器中可以与其它行内元素共占一行，只有当多个元素的总宽度大于浏览器的宽度时，才会换行显示</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">行内元素</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7529.html" target="_blank" rel="noopener noreferrer">a<ExternalLinkIcon/></a></td>
<td>超链接</td>
</tr>
<tr>
<td style="text-align:center">span</td>
<td>常用行级，常用</td>
</tr>
<tr>
<td style="text-align:center">strong</td>
<td>加粗，强调</td>
</tr>
<tr>
<td style="text-align:center">b</td>
<td>加粗，不强调</td>
</tr>
<tr>
<td style="text-align:center">em</td>
<td>斜体，强调</td>
</tr>
<tr>
<td style="text-align:center">i</td>
<td>斜体，不强调</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7528.html" target="_blank" rel="noopener noreferrer">img<ExternalLinkIcon/></a></td>
<td>图片</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7574.html" target="_blank" rel="noopener noreferrer">input<ExternalLinkIcon/></a></td>
<td>输入框</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://c.biancheng.net/view/7613.html" target="_blank" rel="noopener noreferrer">select<ExternalLinkIcon/></a></td>
<td>下拉列表</td>
</tr>
<tr>
<td style="text-align:center">::after</td>
<td>伪元素</td>
</tr>
</tbody>
</table>
<p>Tips:不建议在行内元素中嵌套块元素，这样不仅不符合开发规范，还会导致行内元素也独占一行。</p>
<h1 id="_4-blockquote" tabindex="-1"><a class="header-anchor" href="#_4-blockquote" aria-hidden="true">#</a> 4.<code v-pre>blockquote</code></h1>
<blockquote>
<p>引用标签，用于引用别人的话，块级元素</p>
<p>相同还有q标签，自动添加一对引号，行内元素，</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>子曰
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">></span></span>
    逝者如斯夫，不舍昼夜
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>

子曰<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">></span></span>学而不思则罔，思而不学则殆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-结构标签" tabindex="-1"><a class="header-anchor" href="#_5-结构标签" aria-hidden="true">#</a> 5.<code v-pre>结构标签</code></h1>
<blockquote>
<p>结构标签，用于区分网页的大致结构</p>
</blockquote>
<table>
<thead>
<tr>
<th>标签</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>表示网页头部</td>
</tr>
<tr>
<td>main</td>
<td>网页主体部分</td>
</tr>
<tr>
<td>footer</td>
<td>网页底部，或某一的区域的底部</td>
</tr>
<tr>
<td>nav</td>
<td>导航栏</td>
</tr>
<tr>
<td>aside</td>
<td>侧边栏</td>
</tr>
<tr>
<td>article</td>
<td>一个独立的文章</td>
</tr>
</tbody>
</table>
<h1 id="_6-定义列表" tabindex="-1"><a class="header-anchor" href="#_6-定义列表" aria-hidden="true">#</a> 6.<code v-pre>定义列表</code></h1>
<blockquote>
<p>dl创建一个定义列表</p>
<p>dt，定义内容</p>
<p>dd，对内容解释说明</p>
<p><code v-pre>list-style: none</code>		把列表项的点去除</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>三国演义<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>一本好书<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-超链接" tabindex="-1"><a class="header-anchor" href="#_7-超链接" aria-hidden="true">#</a> 7.<code v-pre>超链接</code></h1>
<blockquote>
<p>target属性值为_self  在当前页面中打开超链接</p>
<p>值为_blank	在一个新的页面中打开超链接</p>
<p>可以通过超链接跳转到页面的任意位置，只需在任意位置的标签属性中添加id属性，在超链接的href属性中值为#+想要跳转的位置的标签的id值</p>
<p>超链接去除下划线  <code v-pre>text-decoration: none;</code></p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    跳转到我这里
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-内联框架" tabindex="-1"><a class="header-anchor" href="#_8-内联框架" aria-hidden="true">#</a> 8.<code v-pre>内联框架</code></h1>
<blockquote>
<p>用于在当前页面中引入一个其他页面</p>
<p>frameborder设置边框</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>把百度页面引入到此页面</mark></p>
<h1 id="_9-选择器" tabindex="-1"><a class="header-anchor" href="#_9-选择器" aria-hidden="true">#</a> 9.<code v-pre>选择器</code></h1>
<h2 id="_1class选择器" tabindex="-1"><a class="header-anchor" href="#_1class选择器" aria-hidden="true">#</a> ①class选择器</h2>
<blockquote>
<p>为一个标签作用多个class类选择器，需要用空格隔开</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.one{

	}
.two{

	}


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one two<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2通配选择器" tabindex="-1"><a class="header-anchor" href="#_2通配选择器" aria-hidden="true">#</a> ②通配选择器</h2>
<blockquote>
<p>作用于页面中所有的元素</p>
</blockquote>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3复合选择器" tabindex="-1"><a class="header-anchor" href="#_3复合选择器" aria-hidden="true">#</a> ③复合选择器</h2>
<p>1.需要同时满足两个条件（<mark>交集选择器</mark>）</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div.red</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>代表选择class=“red”的div标签</code></p>
<h2 id="_4伪类选择器" tabindex="-1"><a class="header-anchor" href="#_4伪类选择器" aria-hidden="true">#</a> ④伪类选择器</h2>
<blockquote>
<p>伪类前有冒号		:</p>
<p>伪元素前有两个冒号	::</p>
<p>伪类用来描述一个元素的特殊状态，如第一个子元素，被点击的元素</p>
</blockquote>
<p>1.<code v-pre>:first-child</code>			<code v-pre>last-child</code></p>
<p><mark><strong>选择第一个此类的元素</strong>			<strong>选择最后一个此类的元素</strong></mark></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>ul > li:first-child{}--选中第一个li元素
ul > li:last-child{}--选中最后一个li元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<code v-pre>nth-child()</code></p>
<p><mark><strong>选择第几个此类元素</strong></mark></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>ul >li:nth-child(1)--选中第几个li元素
特殊值:n,0-无穷		2n,偶数(even)	2n+1,奇数(odd)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 上述的伪类是全类型元素排序</label></p>
<blockquote>
<p><code v-pre>:first-of-type</code>、<code v-pre>last-of-type</code>、<code v-pre>nth-of-type</code>是只按照选中类型排序</p>
</blockquote>
</li>
</ul>
<p>3.<code v-pre>not</code>伪类</p>
<blockquote>
<p>除去选中的元素</p>
</blockquote>
<p>4.<strong>超链接伪类</strong></p>
<table>
<thead>
<tr>
<th>伪类名称</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:link</code></td>
<td>设置未访问过的链接样式</td>
</tr>
<tr>
<td><code v-pre>:visited</code></td>
<td>设置访问过的链接样式</td>
</tr>
<tr>
<td><code v-pre>:hover</code></td>
<td>用于设置鼠标悬浮时的效果</td>
</tr>
<tr>
<td><code v-pre>:active</code></td>
<td>表示鼠标点击时的效果</td>
</tr>
</tbody>
</table>
<h2 id="_5伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_5伪元素选择器" aria-hidden="true">#</a> ⑤伪元素选择器</h2>
<blockquote>
<p>伪元素作用于一些特殊的位置</p>
</blockquote>
<table>
<thead>
<tr>
<th>伪元素代码</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>::first-letter</code></td>
<td>选中第一个字母</td>
</tr>
<tr>
<td><code v-pre>::first-line</code></td>
<td>选中第一行</td>
</tr>
<tr>
<td><code v-pre>::selection</code></td>
<td>为鼠标拖拽选择的内容作效果</td>
</tr>
<tr>
<td><code v-pre>::before</code></td>
<td>元素的开始，位于标签与内容之间的部分</td>
</tr>
<tr>
<td><code v-pre>::after</code></td>
<td>元素的最后，位于标签尾与内容之间的部分</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>::before 和 ::after必须结合content属性来使用</p>
</blockquote>
<h2 id="选择器的权重" tabindex="-1"><a class="header-anchor" href="#选择器的权重" aria-hidden="true">#</a> <em><strong>选择器的权重</strong></em></h2>
<p><code v-pre>内联样式1000</code>	&gt;	<code v-pre>id选择器100</code>	&gt;	<code v-pre>类选择器10</code>	&gt;	<code v-pre>标签选择器1</code>	&gt;	<code v-pre>*选择器0</code>	&gt;<code v-pre>继承选择器None</code></p>
<p>多个选择器同时使用，如 div.red	，将div和.red的权重值相加，越高的会优先显示，并集选择器不会，如，p,div,.red,则单独计算</p>
<p>并且同一类选择器相加再多，也不会高于前一个选择器</p>
<hr>
<h1 id="_10-单位" tabindex="-1"><a class="header-anchor" href="#_10-单位" aria-hidden="true">#</a> 10.单位</h1>
<blockquote>
<p><strong>em</strong>和<strong>rem</strong></p>
</blockquote>
<p>1em=1font-size</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>p{
	font-size:20px;
	width:10em;
}
则宽度就为10*20=200px
p{
	font-size:20px;
	width:10rem;
}
则不会生效，rem的font-size依据的是根元素html的字体大小，默认是16px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-盒子模型" tabindex="-1"><a class="header-anchor" href="#_11-盒子模型" aria-hidden="true">#</a> 11.盒子模型</h1>
<h3 id="_1-盒子边框" tabindex="-1"><a class="header-anchor" href="#_1-盒子边框" aria-hidden="true">#</a> 1.盒子边框</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>border-style:指定边框的样式;
solid 表示实线
dotted 点状虚线
dashed 线状虚线
double 双线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>border会改变页面布局</p>
<p>outline不会改变页面布局</p>
<p>用法一样</p>
</blockquote>
<h3 id="_2-水平布局" tabindex="-1"><a class="header-anchor" href="#_2-水平布局" aria-hidden="true">#</a> 2.水平布局</h3>
<blockquote>
<p>一个元素在其父元素中,必须要满足以下等式</p>
</blockquote>
<p><code v-pre>margin-left</code>+<code v-pre>border-left</code>+<code v-pre>padding-left</code>+<code v-pre>width</code>+<code v-pre>padding-right</code>+<code v-pre>border-right</code>+<code v-pre>marign-right</code>=<strong>其父容器的宽度</strong></p>
<p>如果相加没有达到要求，成为过度约束，则等式会将<code v-pre>margin-right</code>的值调整为可以达到要求的值</p>
<p>但是，如果，其中有的值为<code v-pre>auto</code>,则不会调整<code v-pre>margin-right</code>,而是调整<code v-pre>auto</code>元素的值</p>
<h3 id="_3-垂直布局" tabindex="-1"><a class="header-anchor" href="#_3-垂直布局" aria-hidden="true">#</a> 3.垂直布局</h3>
<blockquote>
<p>如果子元素超出父元素的高度，可以使用在父元素中使用<code v-pre>overflow</code>来处理超出的部分</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>overflow: hidden		直接隐藏超出的部分
overflow: scroll		会加入垂直和水平滚动条
overflow: auto			只加入垂直滚动条
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>overflow-x和overflow-y</code></strong>	:	单独处理水平或垂直方向上的溢出内容</p>
<h3 id="_4-行内元素盒子模型" tabindex="-1"><a class="header-anchor" href="#_4-行内元素盒子模型" aria-hidden="true">#</a> 4.行内元素盒子模型</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>不支持设置宽度和高度
可以设置padding，但是垂直方向的padding对页面没有影响
可以设置border，但是不会影响页面
可以设置margin，但是只会影响水平布局
没有外边距重叠
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>display</code></strong> : 用于设置元素显示的类型</p>
<table>
<thead>
<tr>
<th>值</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>block</code></td>
<td>将元素设置为块元素</td>
</tr>
<tr>
<td><code v-pre>inline</code></td>
<td>元素设置为行内元素</td>
</tr>
<tr>
<td><code v-pre>inline-block</code></td>
<td>将元素设置为行内块元素，既可以设置宽高，也不是独占一行将</td>
</tr>
<tr>
<td><code v-pre>table</code></td>
<td>将元素设置为一个表格</td>
</tr>
<tr>
<td><code v-pre>none</code></td>
<td>元素不在页面中显示，不占位置</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Tips:<code v-pre>visibility: hidden/visible</code>			元素隐藏或显示，仍然占位置</p>
</blockquote>
<h1 id="_12-浏览器默认样式去除" tabindex="-1"><a class="header-anchor" href="#_12-浏览器默认样式去除" aria-hidden="true">#</a> 12.浏览器默认样式去除</h1>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>*{
	margin: 0;
	padding: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-盒子阴影" tabindex="-1"><a class="header-anchor" href="#_13-盒子阴影" aria-hidden="true">#</a> 13.盒子阴影</h1>
<h2 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow" aria-hidden="true">#</a> <code v-pre>box-shadow</code></h2>
<p><code v-pre>box-shadow: 0px 0px 0px rgba</code></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>第一个参数</td>
<td>水平偏移量，相当于margin-left,正值向右移动</td>
</tr>
<tr>
<td>第二个参数</td>
<td>垂直偏移量，相当于margin-top,正值向下移动</td>
</tr>
<tr>
<td>第三个参数</td>
<td>模糊半径，像素越高越模糊</td>
</tr>
<tr>
<td>第四个参数</td>
<td>阴影颜色,通常是<code v-pre>rgba(0,0,0,0.1)</code>,第四个参数是透明，越靠近1越明显</td>
</tr>
</tbody>
</table>
<h1 id="_14-圆角" tabindex="-1"><a class="header-anchor" href="#_14-圆角" aria-hidden="true">#</a> 14.圆角</h1>
<h2 id="border-radius" tabindex="-1"><a class="header-anchor" href="#border-radius" aria-hidden="true">#</a> <code v-pre>border-radius</code></h2>
<blockquote>
<p><code v-pre>border-**-**-radius: 0px 0px</code></p>
</blockquote>
<table>
<thead>
<tr>
<th>参数</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>**</td>
<td>用于确定是四个角哪个角</td>
</tr>
<tr>
<td>第一个0px</td>
<td>确定x轴半径长度</td>
</tr>
<tr>
<td>第二个0px</td>
<td>确定y轴半径长度</td>
</tr>
</tbody>
</table>
<p><strong><mark>如果两个参数不一样，就是一个椭圆</mark></strong></p>
<h1 id="_15-浮动特点" tabindex="-1"><a class="header-anchor" href="#_15-浮动特点" aria-hidden="true">#</a> 15.浮动特点</h1>
<p>1.浮动的元素不会覆盖文字，可以设置一些文字环绕效果</p>
<p>2.浮动后脱离文档流，脱离后的特点</p>
<table>
<thead>
<tr>
<th>块元素特点</th>
<th>行内元素特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>不再独占一行</td>
<td>变成块元素，拥有块元素的特点</td>
</tr>
<tr>
<td>宽度和高度默认和内容一样</td>
<td></td>
</tr>
</tbody>
</table>
<p><em><strong><code v-pre>clear</code></strong></em>:	清除前面浮动元素对此元素的影响</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>clear: left		清除左侧的影响
clear: right	清除右侧的影响
clear: both		清除两侧中影响最大的影响
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-浮动导致的高度塌陷问题" tabindex="-1"><a class="header-anchor" href="#_16-浮动导致的高度塌陷问题" aria-hidden="true">#</a> 16.浮动导致的高度塌陷问题</h1>
<p>解决方法：<strong>BFC	块级格式化环境</strong></p>
<blockquote>
<p>开启元素的BFC后元素会变成一个独立的布局区域</p>
</blockquote>
<p>特点</p>
<ul>
<li>开启后的元素不会被浮动元素所覆盖</li>
<li>开启的元素和父元素外边距不会重叠</li>
<li>开启的元素可以包含浮动的子元素</li>
</ul>
<p>开启BFC的方法</p>
<ul>
<li>设置元素的浮动</li>
<li>将元素设置为块元素</li>
<li>将元素的overflow设置为非visible的值</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>overflow: auto/hidden			开启BFC最优的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>最终解决方法:</p>
</blockquote>
<p><em><strong><code v-pre>::after</code></strong></em>:为父元素设置after伪元素</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.box1::after{
	content:'';
	clear: both;
	display: block;		因为after是行内元素，需要变为块元素
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_17-子元素外边距导致父元素移动的问题" tabindex="-1"><a class="header-anchor" href="#_17-子元素外边距导致父元素移动的问题" aria-hidden="true">#</a> 17.子元素外边距导致父元素移动的问题</h1>
<p>使用***<code v-pre>::before</code>***</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.box1::before{
	content: '';		空值不行
	display: table;		加上这句话就可以
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时子元素的外边距就不会影响父元素</p>
<h1 id="_18-同时解决高度塌陷和外边距重叠" tabindex="-1"><a class="header-anchor" href="#_18-同时解决高度塌陷和外边距重叠" aria-hidden="true">#</a> 18.同时解决高度塌陷和外边距重叠</h1>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.clearfix::before,.clearfix::after{
	content: '';
	display: table;
	clear: both;
}


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1 clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>			在div.box1中引入clearfix类，即可
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_19-定位position" tabindex="-1"><a class="header-anchor" href="#_19-定位position" aria-hidden="true">#</a> 19.定位position</h1>
<p><strong><code v-pre>position</code></strong></p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>static</code></td>
<td>元素静止，没有开启定位</td>
</tr>
<tr>
<td><code v-pre>relative</code></td>
<td>开启元素的相对定位</td>
</tr>
<tr>
<td><code v-pre>absolute</code></td>
<td>开启元素的绝对定位</td>
</tr>
<tr>
<td><code v-pre>fixed</code></td>
<td>开启元素的固定定位</td>
</tr>
<tr>
<td><code v-pre>sticky</code></td>
<td>开启元素的粘滞定位</td>
</tr>
</tbody>
</table>
<h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> <em>相对定位</em></h2>
<blockquote>
<ul>
<li>
<p>开启相对定位以后，可以通过偏移量来设置元素的位置</p>
</li>
<li>
<p>是相对于元素左上角来定位</p>
</li>
<li>
<p>相对定位会提升元素的层级</p>
</li>
<li>
<p>不会使元素脱离文档流</p>
</li>
<li>
<p>不会改变行内还是块元素</p>
</li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th>代码</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>top</code></td>
<td>定位元素和其上侧的距离，类似于<code v-pre>margin-top</code>,但是不会影响其他元素位置</td>
</tr>
<tr>
<td><code v-pre>left</code></td>
<td>其左侧</td>
</tr>
<tr>
<td><code v-pre>right</code></td>
<td>其右侧</td>
</tr>
<tr>
<td><code v-pre>bottom</code></td>
<td>其下侧</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.box2{
            width: 300px;
            height: 300px;
            background-color: rgb(29, 138, 138);
            position: relative;						开启相对定位
            left: 100px;							向右移动100px
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> <em>绝对定位</em></h2>
<blockquote>
<ul>
<li>绝对定位会使元素从文档流中脱离</li>
<li>会改变元素的性质，行内变成块元素，并且会被内容撑开</li>
<li>会使元素提升一个层级</li>
<li>是相对于其包含块来定位的</li>
<li>其包含块是距离此元素最近的开启了任意定位的祖先元素</li>
</ul>
</blockquote>
<p>值和相对定位一样</p>
<h2 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位" aria-hidden="true">#</a> <em>固定定位</em></h2>
<blockquote>
<p>和绝对定位一模一样，唯一的不同是，固定定位始终相对于浏览器的左上角</p>
<p>不会随着网页滚动条滚动</p>
</blockquote>
<h2 id="粘滞定位" tabindex="-1"><a class="header-anchor" href="#粘滞定位" aria-hidden="true">#</a> <em>粘滞定位</em></h2>
<blockquote>
<p>当元素移动到指定位置的时候，固定在浏览器视图上</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.nav{
            width: 80%;
            height: 50px;
            background-color: #c1c1c1;
            margin: 0 auto;
            margin-top: 100px;
            position: sticky;	开启粘滞定位
            top: 0;				当元素top值到达top: 0 的时候就不会随着页面滚动而移动
  
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_20-元素水平垂直居中的方法" tabindex="-1"><a class="header-anchor" href="#_20-元素水平垂直居中的方法" aria-hidden="true">#</a> 20.元素水平垂直居中的方法</h1>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.box1{
	width: 100px;
	height: 100px;
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
让box1盒子在父元素中水平垂直居中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_21-文字的水平垂直对齐" tabindex="-1"><a class="header-anchor" href="#_21-文字的水平垂直对齐" aria-hidden="true">#</a> 21.文字的水平垂直对齐</h1>
<h2 id="水平对齐" tabindex="-1"><a class="header-anchor" href="#水平对齐" aria-hidden="true">#</a> <em>水平对齐</em></h2>
<p><strong><code v-pre>text-align</code></strong></p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>left</code></td>
<td>左对齐</td>
</tr>
<tr>
<td><code v-pre>right</code></td>
<td>右对齐</td>
</tr>
<tr>
<td><code v-pre>center</code></td>
<td>居中对齐</td>
</tr>
<tr>
<td><code v-pre>justify</code></td>
<td>两端对齐</td>
</tr>
</tbody>
</table>
<h2 id="垂直对齐" tabindex="-1"><a class="header-anchor" href="#垂直对齐" aria-hidden="true">#</a> <em>垂直对齐</em></h2>
<p><strong><code v-pre>vertical-align</code></strong></p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>baseline</code></td>
<td>基线对齐，子元素文字底部与父元素文字底部对齐</td>
</tr>
<tr>
<td><code v-pre>top</code></td>
<td>顶部对齐</td>
</tr>
<tr>
<td><code v-pre>bottom</code></td>
<td>底部对齐</td>
</tr>
<tr>
<td><code v-pre>middle</code></td>
<td>居中对齐，将子元素的中线和父元素对齐</td>
</tr>
<tr>
<td>10px</td>
<td>用像素值调整</td>
</tr>
</tbody>
</table>
<h1 id="_22-文字的特殊效果" tabindex="-1"><a class="header-anchor" href="#_22-文字的特殊效果" aria-hidden="true">#</a> 22.文字的特殊效果</h1>
<p><strong><code v-pre>white-space</code></strong>	设置网页如何处理空白</p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>normal</code></td>
<td>超出自动换行</td>
</tr>
<tr>
<td><code v-pre>nowrap</code></td>
<td>不换行</td>
</tr>
<tr>
<td><code v-pre>pre</code></td>
<td>保留空白</td>
</tr>
</tbody>
</table>
<p><code v-pre>word-wrap: *break-word*;</code>:强制文字换行</p>
<p>文字溢出时省略号效果</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.box1{
            width: 50px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
     }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_23-背景图片处理" tabindex="-1"><a class="header-anchor" href="#_23-背景图片处理" aria-hidden="true">#</a> 23.背景图片处理</h1>
<blockquote>
<p>背景铺满处理</p>
</blockquote>
<p><strong><code v-pre>background-repeat</code></strong>	: 背景的重复方式</p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>repeat</code></td>
<td>铺满，不断重复</td>
</tr>
<tr>
<td><code v-pre>repeat-x</code></td>
<td>沿着x轴方向重复</td>
</tr>
<tr>
<td><code v-pre>repeat-y</code></td>
<td>沿着y轴方向重复</td>
</tr>
<tr>
<td><code v-pre>no-repeat</code></td>
<td>不重复，图片保持大小</td>
</tr>
</tbody>
</table>
<blockquote>
<p>图片位置处理</p>
</blockquote>
<p><strong><code v-pre>background-position</code></strong>	: 设置背景图片的位置</p>
<table>
<thead>
<tr>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>top</code></td>
</tr>
<tr>
<td><code v-pre>left</code></td>
</tr>
<tr>
<td><code v-pre>right</code></td>
</tr>
<tr>
<td><code v-pre>bottom</code></td>
</tr>
<tr>
<td>px</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>background-position: top left;			左上,其他位置一样
background-position: center center;		正中间
background-position: 100px 100px;		向右向下分别100px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>图片裁剪设置</p>
</blockquote>
<p><strong><code v-pre>background-clip</code></strong>	:	设置背景出现的位置</p>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>border-box</code></td>
<td>默认值，背景会在边框下边</td>
</tr>
<tr>
<td><code v-pre>padding-box</code></td>
<td>背景不会出现的边框下，出现在内边距和内容区</td>
</tr>
<tr>
<td><code v-pre>content-box</code></td>
<td>背景只出现在内容区</td>
</tr>
</tbody>
</table>
<blockquote>
<p>图片原点起始位置</p>
</blockquote>
<table>
<thead>
<tr>
<th>值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>padding-box</code></td>
<td>图片原点从内边距开始计算</td>
</tr>
<tr>
<td><code v-pre>content-box</code></td>
<td>图片原点从内容区开始计算</td>
</tr>
<tr>
<td><code v-pre>border-box</code></td>
<td>图片原点从边框处开机计算</td>
</tr>
</tbody>
</table>
<blockquote>
<p>背景图片大小</p>
</blockquote>
<p><strong><code v-pre>background-size</code></strong>	:	设置图片大小</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>background-size: 200px 200px;				宽度200，高度200px
background-size: 200px;						宽度200，高度自适应
background-size: 200px auto;					宽度200，高度自适应
background-size: cover;			图片比例不变，将盒子铺满
background-size: contain;		图片比例不变，将图片显示完整
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_24-渐变" tabindex="-1"><a class="header-anchor" href="#_24-渐变" aria-hidden="true">#</a> 24.渐变</h1>
<h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2>
<blockquote>
<p>颜色沿着线变化</p>
</blockquote>
<p><strong><code v-pre>linear-gradient()</code></strong></p>
<p>通过background-image来设置</p>
<table>
<thead>
<tr>
<th>代码</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>linear-gradient(RGB,RGB)</code></td>
<td>从第一个RGB颜色向第二个RGB颜色渐变，自上向下</td>
</tr>
<tr>
<td><code v-pre>linear-gradient(to right,RGB,RGB)</code></td>
<td>to 方向，向什么方向渐变，to right就是自左向右</td>
</tr>
<tr>
<td>to left,to right,to top,to bottom</td>
<td>四个方向</td>
</tr>
<tr>
<td>to left top,</td>
<td>左上角，其他角相同</td>
</tr>
<tr>
<td>45deg</td>
<td>旋转45°</td>
</tr>
<tr>
<td>0.5turn</td>
<td>转半圈</td>
</tr>
<tr>
<td><code v-pre>linear-gradient(RGB,RGB,RGB...)</code></td>
<td>可以是很多颜色的渐变</td>
</tr>
</tbody>
</table>
<h2 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h2>
<blockquote>
<p>从中心向四周延伸</p>
</blockquote>
<p><strong><code v-pre>radial-gradient()</code></strong></p>
<p>通过background-image来设置</p>
<p>使用方法基本和线性一样</p>
<h1 id="做三角" tabindex="-1"><a class="header-anchor" href="#做三角" aria-hidden="true">#</a> 做三角</h1>
<p>css做三角形的方法：首先创建一个div元素，设置div的width和height为0，只用边框宽来填充，边框样式设置为实线“solid”；然后顶部边框设置颜色，剩下的三个边框的颜色设置为透明“transparent”值即可。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.sanjiao</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent red transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


