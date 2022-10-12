<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> VueX</h1>
<p>在Vue中实现集中式状态管理的一个Vue插件</p>
<p>什么时候使用vuex：1. 多个组件依赖于同一个状态	2.来自不同的组件的行为需要变更同一状态</p>
<p><img src="@source/.vuepress/public/vue/vue3.png" alt="vuex" loading="lazy"></p>
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
</div></template>


