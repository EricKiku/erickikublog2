---
icon: markdown
title: VueX
date: 2022-10-11
category:
  - vue
tag:
  - vue2
  - vueX
---
# 

# VueX

在Vue中实现集中式状态管理的一个Vue插件

什么时候使用vuex：1. 多个组件依赖于同一个状态	2.来自不同的组件的行为需要变更同一状态

![vuex](./../../.vuepress/public/vue/vue3.png)

`Vue components`发出响应，如果有操作需要逻辑或者需要调用接口，就需要先经过`Actions`，如果没有逻辑，就是一个简单的修改数据，则可以直接访问`Mutations`，从而修改或读取数据，再响应给`State`，最后重新渲染页面



安装：

Vue2只能使用`Vuex3`，但是现在默认安装的是`Vuex4`，所以需要指定版本

```
npm i vuex@3
```
## 创建环境

创建文件:`src/store/index.js`

```js
//该文件用于创建Vuex中核心的Store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//创建actions-用于响应组件中的动作
const actions = {}
//创建mutations-用于操作数据
const mutations = {}
//创建state-用于存储数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

在`main.js`中引入Store的`index.js`

```js
import store from './store/index'

new Vue({
  render: h => h(App),
  store,				//引入了在这里使用，就可以让所有组件访问state
}).$mount('#app')
```
## 使用
首先在组件的方法中，调用`dispatch`方法，调用`actions`配置中对应的方法，再调用`mutations`配置中对应的方法，在`mutations`中修改`state`中的值.
在任意组件上，都可以访问`$store`，在组件实例中使用`this.$store`，在模板的插值语法中可以:`$store.state.xxx`来访问Vuex中`state`中的值

`子组件`

```vue
methods: {
    add(){
		//参数是 方法名,值
    	this.$store.dispatch('add',this.msg)
    }
}
```

`store/index.js`

上下文`context`中有很多属性，其中也有`state`，可以直接获取到state中的值

```js
const actions = {
    //参数是: 上下文,值
    add(context,value){
        //调用上下文的commite方法，找mutations(方法名,值)
        context.commit('ADD',value)
    }
}
const mutations = {
    //参数是:state,值
    ADD(state,value){
        state.result += value
    }
}
const state = {
    result:0
}
```



注意：如果没有逻辑，也就是只操作数据，可以不使用`actions`，直接访问`mutations`。

```vue
methods: {
    add(){
		//可以在组件中，直接commit，直接访问mutations
    	this.$store.commit('ADD',this.msg)
    }
},
```



## getters

一个新的store配置

```js
const getters = {
    //getters中方法的参数是state，所以可以直接获取state中的值
    bigResult(state){
        return state.result * 10	//加工，把数据变为十倍
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters	//getters
})
```

作用是相当于一个`计算属性`，所有组件都可以获取这个属性，上面的例子中的一个属性`bigResult`，所有组件都可以通过插值语法`$store.getters.bigResult`或`this.$store.getters.bigResult`来获取数据





## mapState

借助mapState生成计算属性，从`state`中读取数据：

意思就是**`用于帮助我们映射state中的数据为计算属性`**

一个可以自动生成计算属性的函数，由于一直写`$store.state`比较麻烦，可以使用计算属性来简化这个操作，也可以用`mapState`这个vue提供的简化操作，把想要的名字和对应的`state中的数据`传入参数

```vue
import {mapState} from 'vuex'

computed:{
    ...mapState({
		result:'result',
		result1:'result1'
	})
}
```

里面的参数是这样的：`键：result`是想要的名字，`值：result`是`state`中的真实存在的数据，以前在模板中使用`result`是这样的：`  $store.state.result  `，配置了`mapState`后，可以直接` result`

上面是对象写法，如果键值相同的话，可以使用数组写法，想要在模板使用的名字和访问state中数据的名字一模一样的时候就可以用数组的写法，`必须和state中数据名字一样`

```js
...mapState(['result','result1'])
```

## mapGetters

功能和上面的一模一样，就是名字不一样，读取数据的位置不一样，一个是`state`，一个是`getters`，`getters`中的数据就相当于计算属性，以`state`中的数据为源数据，进行一些操作所的的数据放在`getters`中，必须是`return`返回的值，以前是通过`$store.getters.bigResult`来读取数据，用了这个之后，就可以直接`bigResult`来读取数据

```js
import {mapState,mapGetters} from 'vuex'
...mapGetters(['bigResult'])
```

## mapMutations

功能相同，前两个是映射计算属性，后两个是映射方法，写在`methods`配置里，格式是：`mapMutations({方法名:'mutation中的方法名'})`。键方法名是用于按钮点击时绑定的方法名，值方法名是`mutation`中改变数据的方法名，这个是属于没有逻辑，直接修改数据的方式。

注意：如果这样的话，模板中按钮绑定的点击事件必须带括号并且有实参，如果没有就返回的是鼠标事件`event`

```js
<button @click="add(msg)"></button>
...
methods:{
    ...mapMutations({ADD:'ADD'})
}
```

用于代替：`this.$store.commit('ADD',this.msg)`。用来这个之后，就不需要前面的代码了 ，在按钮上有点击事件就行了，可以自动调用commit方法

也有数组方式，名字一样就用数组方式，都是以`mutation`中方法名为准



## mapActions

功能相同，也是写在`methods`配置中，用于映射方法，也要在按钮点击事件上写实参，要不就返回点击事件event了。

代替了：`this.$store.dispatch('add',this.msg)`

```js
<button @click="add(msg)"></button>
...
methods:{
    ...mapActions({add:'add'})
}
```

也有数组写法



## 模块化

当一个Vuex管理多个不同的功能时，如果都写在一个Store中，就会混乱，所以，根据功能划分多个模块，每个模块都有完整的`actions,mutation,state,getters等`配置

每个模块就是一个对象，其中有完整的结构，最后在暴露时，通过modules指名模块

之前，使用方法是：`$store.state、this.$store.commit()、this.$store.dispatch()`。

如果使用模块化，则`$store`上就没有这些了，有的是模块的名字`schllo,student`，需要使用模块名字来调用其中的方法

```js
const school = {
    namespaced:true,
    actions:{},
    mutations:{},
    state:{},
    getters:{}
}
const student = {
    namespaced:true,
    actions:{},
    mutations:{},
    cot state:{},
    getters:{}
}
export default new Vuex.Store({
    modules:{
        school,
        student
    }
})
```

如果还是想要使用`mapState`，那么就必须在模块上添加一个属性`namespaced:true`，开启后，才可以让mapState认识模块

```js
...mapState('school',['name'])
```

这个代码的意思是，把`school`模块中的`state`中的name变为计算属性，新添加的参数，第一个参数指定使用哪个模块，模块必须开启`namespaced`

如果不使用mapState，在模块上访问模块中的数据时：

`$store.state.school.name`

不管是`mapState、mapActions、mapMutations、mapGetters`，都需要在第一个参数的位置写上模块名，才可以解析第二个参数中的数据或者方法名	

