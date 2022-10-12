---
icon: markdown
title: HTML与CSS
date: 2022-10-11
category:
  - 基础
tag:
  - html
  - css
---
# 
# 1.`<h1>`

> 将有关联的一组标签放在一个组里

```html
<hgroup>
	<h1>Title 1</h1>
    <h2>Title 2</h2>
</hgroup>
```

# 2.`块级元素`

> 块级元素（block element）在浏览器中占据整行，并排斥其它元素与其位于同一行。也就是说，块级元素的宽度是 100%
>
> 块级元素不管宽度有多小，总是独占一行

|                  块级元素                   | 意义                      |
| :-----------------------------------------: | ------------------------- |
|                     div                     | 最典型的块元素，常用      |
|                      p                      | 表示段落                  |
|                    h1-h6                    | 表示1-6级标题（默认加粗） |
|                     br                      | 表示换行                  |
| [ol](http://c.biancheng.net/view/7534.html) | 有序列表                  |
| [ul](http://c.biancheng.net/view/7534.html) | 无序列表                  |

# 3.`行内元素`

> 行内元素又称内联元素（inline block）。在浏览器中可以与其它行内元素共占一行，只有当多个元素的总宽度大于浏览器的宽度时，才会换行显示

|                    行内元素                     | 说明           |
| :---------------------------------------------: | -------------- |
|   [a](http://c.biancheng.net/view/7529.html)    | 超链接         |
|                      span                       | 常用行级，常用 |
|                     strong                      | 加粗，强调     |
|                        b                        | 加粗，不强调   |
|                       em                        | 斜体，强调     |
|                        i                        | 斜体，不强调   |
|  [img](http://c.biancheng.net/view/7528.html)   | 图片           |
| [input](http://c.biancheng.net/view/7574.html)  | 输入框         |
| [select](http://c.biancheng.net/view/7613.html) | 下拉列表       |
|                     ::after                     | 伪元素         |

Tips:不建议在行内元素中嵌套块元素，这样不仅不符合开发规范，还会导致行内元素也独占一行。
# 4.`blockquote`

> 引用标签，用于引用别人的话，块级元素
>
> 相同还有q标签，自动添加一对引号，行内元素，

```html
子曰
<blockquote>
    逝者如斯夫，不舍昼夜
</blockquote>

子曰<q>学而不思则罔，思而不学则殆</q>
```

# 5.`结构标签`

> 结构标签，用于区分网页的大致结构

| 标签    | 含义                         |
| ------- | ---------------------------- |
| header  | 表示网页头部                 |
| main    | 网页主体部分                 |
| footer  | 网页底部，或某一的区域的底部 |
| nav     | 导航栏                       |
| aside   | 侧边栏                       |
| article | 一个独立的文章               |

# 6.`定义列表`

> dl创建一个定义列表
>
> dt，定义内容
>
> dd，对内容解释说明
>
> `list-style: none`		把列表项的点去除

```html
<dl>
	<dt>三国演义</dt>
    <dd>一本好书</dd>
</dl>
```

# 7.`超链接`

> target属性值为_self  在当前页面中打开超链接
>
> 值为_blank	在一个新的页面中打开超链接
>
> 可以通过超链接跳转到页面的任意位置，只需在任意位置的标签属性中添加id属性，在超链接的href属性中值为#+想要跳转的位置的标签的id值
>
> 
>
> 超链接去除下划线  `text-decoration: none;`

```html
<a href="#one"></a>
<p id="one">
    跳转到我这里
</p>
```

#  8.`内联框架`

> 用于在当前页面中引入一个其他页面
>
> frameborder设置边框

```html
<iframe src="www.baidu.com" frameborder="0"></iframe>
```

==把百度页面引入到此页面==

# 9.`选择器`
## ①class选择器

> 为一个标签作用多个class类选择器，需要用空格隔开

```html
.one{

	}
.two{

	}


<p class="one two">
    
</p>
```

## ②通配选择器

> 作用于页面中所有的元素

```css
*{
    margin: 0;
    padding: 0;
}
```

## ③复合选择器

1.需要同时满足两个条件（==交集选择器==）

```css
div.red{}
```

`代表选择class=“red”的div标签`

## ④伪类选择器

> 伪类前有冒号		: 
>
> 伪元素前有两个冒号	::
>
> 伪类用来描述一个元素的特殊状态，如第一个子元素，被点击的元素

1.`:first-child`			`last-child`

==**选择第一个此类的元素**			**选择最后一个此类的元素**==

```html
ul > li:first-child{}--选中第一个li元素
ul > li:last-child{}--选中最后一个li元素
```

2.`nth-child()`

==**选择第几个此类元素**==

```html
ul >li:nth-child(1)--选中第几个li元素
特殊值:n,0-无穷		2n,偶数(even)	2n+1,奇数(odd)
```

- [x] 上述的伪类是全类型元素排序

  > `:first-of-type`、`last-of-type`、`nth-of-type`是只按照选中类型排序

3.`not`伪类

> 除去选中的元素

4.**超链接伪类**

| 伪类名称   | 作用                     |
| ---------- | ------------------------ |
| `:link`    | 设置未访问过的链接样式   |
| `:visited` | 设置访问过的链接样式     |
| `:hover`   | 用于设置鼠标悬浮时的效果 |
| `:active`  | 表示鼠标点击时的效果     |

## ⑤伪元素选择器

> 伪元素作用于一些特殊的位置

| 伪元素代码       | 作用                                   |
| ---------------- | -------------------------------------- |
| `::first-letter` | 选中第一个字母                         |
| `::first-line`   | 选中第一行                             |
| `::selection`    | 为鼠标拖拽选择的内容作效果             |
| `::before`       | 元素的开始，位于标签与内容之间的部分   |
| `::after`        | 元素的最后，位于标签尾与内容之间的部分 |
|                  |                                        |
|                  |                                        |

> ::before 和 ::after必须结合content属性来使用



## ***选择器的权重***

`内联样式1000`	>	`id选择器100`	>	`类选择器10`	>	`标签选择器1`	>	`*选择器0`	>`继承选择器None`

多个选择器同时使用，如 div.red	，将div和.red的权重值相加，越高的会优先显示，并集选择器不会，如，p,div,.red,则单独计算

并且同一类选择器相加再多，也不会高于前一个选择器

----

# 10.单位

> **em**和**rem**

1em=1font-size

```html
p{
	font-size:20px;
	width:10em;
}
则宽度就为10*20=200px
p{
	font-size:20px;
	width:10rem;
}
则不会生效，rem的font-size依据的是根元素html的字体大小，默认是16px
```

# 11.盒子模型

### 1.盒子边框

```html
border-style:指定边框的样式;
solid 表示实线
dotted 点状虚线
dashed 线状虚线
double 双线
```

> border会改变页面布局
>
> outline不会改变页面布局
>
> 用法一样

### 2.水平布局

>  一个元素在其父元素中,必须要满足以下等式

`margin-left`+`border-left`+`padding-left`+`width`+`padding-right`+`border-right`+`marign-right`=**其父容器的宽度**

如果相加没有达到要求，成为过度约束，则等式会将`margin-right`的值调整为可以达到要求的值

但是，如果，其中有的值为`auto`,则不会调整`margin-right`,而是调整`auto`元素的值

### 3.垂直布局

> 如果子元素超出父元素的高度，可以使用在父元素中使用`overflow`来处理超出的部分

```html
overflow: hidden		直接隐藏超出的部分
overflow: scroll		会加入垂直和水平滚动条
overflow: auto			只加入垂直滚动条
```

**`overflow-x和overflow-y`**	:	单独处理水平或垂直方向上的溢出内容

### 4.行内元素盒子模型

```
不支持设置宽度和高度
可以设置padding，但是垂直方向的padding对页面没有影响
可以设置border，但是不会影响页面
可以设置margin，但是只会影响水平布局
没有外边距重叠
```

**`display`** : 用于设置元素显示的类型

| 值             | 作用                                                     |
| -------------- | -------------------------------------------------------- |
| `block`        | 将元素设置为块元素                                       |
| `inline`       | 元素设置为行内元素                                       |
| `inline-block` | 将元素设置为行内块元素，既可以设置宽高，也不是独占一行将 |
| `table`        | 将元素设置为一个表格                                     |
| `none`         | 元素不在页面中显示，不占位置                             |

> Tips:`visibility: hidden/visible`			元素隐藏或显示，仍然占位置

# 12.浏览器默认样式去除

```html
*{
	margin: 0;
	padding: 0;
}
```

# 13.盒子阴影

## `box-shadow`

`box-shadow: 0px 0px 0px rgba`

| 参数       | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| 第一个参数 | 水平偏移量，相当于margin-left,正值向右移动                   |
| 第二个参数 | 垂直偏移量，相当于margin-top,正值向下移动                    |
| 第三个参数 | 模糊半径，像素越高越模糊                                     |
| 第四个参数 | 阴影颜色,通常是`rgba(0,0,0,0.1)`,第四个参数是透明，越靠近1越明显 |

# 14.圆角

## `border-radius`

> `border-**-**-radius: 0px 0px`

| 参数      | 作用                   |
| --------- | ---------------------- |
| **        | 用于确定是四个角哪个角 |
| 第一个0px | 确定x轴半径长度        |
| 第二个0px | 确定y轴半径长度        |

**==如果两个参数不一样，就是一个椭圆==**

# 15.浮动特点

1.浮动的元素不会覆盖文字，可以设置一些文字环绕效果

2.浮动后脱离文档流，脱离后的特点

| 块元素特点               | 行内元素特点                 |
| ------------------------ | ---------------------------- |
| 不再独占一行             | 变成块元素，拥有块元素的特点 |
| 宽度和高度默认和内容一样 |                              |

***`clear`***:	清除前面浮动元素对此元素的影响

```html
clear: left		清除左侧的影响
clear: right	清除右侧的影响
clear: both		清除两侧中影响最大的影响
```



# 16.浮动导致的高度塌陷问题

解决方法：**BFC	块级格式化环境**

> 开启元素的BFC后元素会变成一个独立的布局区域

特点

* 开启后的元素不会被浮动元素所覆盖
* 开启的元素和父元素外边距不会重叠
* 开启的元素可以包含浮动的子元素

开启BFC的方法

* 设置元素的浮动
* 将元素设置为块元素
* 将元素的overflow设置为非visible的值

```html
overflow: auto/hidden			开启BFC最优的方法
```

> 最终解决方法:

***`::after`***:为父元素设置after伪元素

```html
.box1::after{
	content:'';
	clear: both;
	display: block;		因为after是行内元素，需要变为块元素
}
```

# 17.子元素外边距导致父元素移动的问题

使用***`::before`***

```html
.box1::before{
	content: '';		空值不行
	display: table;		加上这句话就可以
}
```

此时子元素的外边距就不会影响父元素

# 18.同时解决高度塌陷和外边距重叠

```html
.clearfix::before,.clearfix::after{
	content: '';
	display: table;
	clear: both;
}


<div class="box1 clearfix">			在div.box1中引入clearfix类，即可
    
</div>
```

# 19.定位position

**`position`**	

| 值         | 效果                   |
| ---------- | ---------------------- |
| `static`   | 元素静止，没有开启定位 |
| `relative` | 开启元素的相对定位     |
| `absolute` | 开启元素的绝对定位     |
| `fixed`    | 开启元素的固定定位     |
| `sticky`   | 开启元素的粘滞定位     |

## *相对定位*

> * 开启相对定位以后，可以通过偏移量来设置元素的位置
>
> * 是相对于元素左上角来定位
> * 相对定位会提升元素的层级
> * 不会使元素脱离文档流
> * 不会改变行内还是块元素

| 代码     | 效果                                                         |
| -------- | ------------------------------------------------------------ |
| `top`    | 定位元素和其上侧的距离，类似于`margin-top`,但是不会影响其他元素位置 |
| `left`   | 其左侧                                                       |
| `right`  | 其右侧                                                       |
| `bottom` | 其下侧                                                       |

```html
.box2{
            width: 300px;
            height: 300px;
            background-color: rgb(29, 138, 138);
            position: relative;						开启相对定位
            left: 100px;							向右移动100px
	}
```

## *绝对定位*

> * 绝对定位会使元素从文档流中脱离
> * 会改变元素的性质，行内变成块元素，并且会被内容撑开
> * 会使元素提升一个层级
> * 是相对于其包含块来定位的
> * 其包含块是距离此元素最近的开启了任意定位的祖先元素

值和相对定位一样

## *固定定位*

> 和绝对定位一模一样，唯一的不同是，固定定位始终相对于浏览器的左上角
>
> 不会随着网页滚动条滚动

## *粘滞定位*

> 当元素移动到指定位置的时候，固定在浏览器视图上

```html
.nav{
            width: 80%;
            height: 50px;
            background-color: #c1c1c1;
            margin: 0 auto;
            margin-top: 100px;
            position: sticky;	开启粘滞定位
            top: 0;				当元素top值到达top: 0 的时候就不会随着页面滚动而移动
  
    }
```

# 20.元素水平垂直居中的方法

```html
.box1{
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
```

# 21.文字的水平垂直对齐

## *水平对齐*

**`text-align`**

| 值        | 效果     |
| --------- | -------- |
| `left`    | 左对齐   |
| `right`   | 右对齐   |
| `center`  | 居中对齐 |
| `justify` | 两端对齐 |

## *垂直对齐*

**`vertical-align`**

| 值         | 效果                                         |
| ---------- | -------------------------------------------- |
| `baseline` | 基线对齐，子元素文字底部与父元素文字底部对齐 |
| `top`      | 顶部对齐                                     |
| `bottom`   | 底部对齐                                     |
| `middle`   | 居中对齐，将子元素的中线和父元素对齐         |
| 10px       | 用像素值调整                                 |

# 22.文字的特殊效果

**`white-space`**	设置网页如何处理空白

| 值       | 效果         |
| -------- | ------------ |
| `normal` | 超出自动换行 |
| `nowrap` | 不换行       |
| `pre`    | 保留空白     |

`word-wrap: *break-word*;`:强制文字换行

文字溢出时省略号效果

```html
.box1{
            width: 50px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
     }
```

# 23.背景图片处理

> 背景铺满处理

**`background-repeat`**	: 背景的重复方式

| 值          | 效果                 |
| ----------- | -------------------- |
| `repeat`    | 铺满，不断重复       |
| `repeat-x`  | 沿着x轴方向重复      |
| `repeat-y`  | 沿着y轴方向重复      |
| `no-repeat` | 不重复，图片保持大小 |

> 图片位置处理

**`background-position`**	: 设置背景图片的位置

| 值       |
| -------- |
| `top`    |
| `left`   |
| `right`  |
| `bottom` |
| px       |

```html
background-position: top left;			左上,其他位置一样
background-position: center center;		正中间
background-position: 100px 100px;		向右向下分别100px
```

> 图片裁剪设置

**`background-clip`**	:	设置背景出现的位置

| 值            | 效果                                       |
| ------------- | ------------------------------------------ |
| `border-box`  | 默认值，背景会在边框下边                   |
| `padding-box` | 背景不会出现的边框下，出现在内边距和内容区 |
| `content-box` | 背景只出现在内容区                         |

> 图片原点起始位置

| 值            | 效果                     |
| ------------- | ------------------------ |
| `padding-box` | 图片原点从内边距开始计算 |
| `content-box` | 图片原点从内容区开始计算 |
| `border-box`  | 图片原点从边框处开机计算 |

> 背景图片大小

**`background-size`**	:	设置图片大小

```html
background-size: 200px 200px;				宽度200，高度200px
background-size: 200px;						宽度200，高度自适应
background-size: 200px auto;					宽度200，高度自适应
background-size: cover;			图片比例不变，将盒子铺满
background-size: contain;		图片比例不变，将图片显示完整
```

# 24.渐变

## 线性渐变

> 颜色沿着线变化

**`linear-gradient()`**

通过background-image来设置

| 代码                                | 效果                                          |
| ----------------------------------- | --------------------------------------------- |
| `linear-gradient(RGB,RGB)`          | 从第一个RGB颜色向第二个RGB颜色渐变，自上向下  |
| `linear-gradient(to right,RGB,RGB)` | to 方向，向什么方向渐变，to right就是自左向右 |
| to left,to right,to top,to bottom   | 四个方向                                      |
| to left top,                        | 左上角，其他角相同                            |
| 45deg                               | 旋转45°                                       |
| 0.5turn                             | 转半圈                                        |
| `linear-gradient(RGB,RGB,RGB...)`   | 可以是很多颜色的渐变                          |

## 径向渐变

> 从中心向四周延伸

**`radial-gradient()`**

通过background-image来设置

使用方法基本和线性一样



# 做三角

css做三角形的方法：首先创建一个div元素，设置div的width和height为0，只用边框宽来填充，边框样式设置为实线“solid”；然后顶部边框设置颜色，剩下的三个边框的颜色设置为透明“transparent”值即可。

```css
.sanjiao{
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: transparent transparent red transparent;
}
```

