---
icon: markdown
title: Vue3
date: 2022-10-11
category:
  - vue
tag:
  - vue2
  - vue3
---
# 

# 一、创建Vue3.0

>  ### 使用vue-cli创建

查看@vue-cli版本，确保@vue/cli版本在`4.5.0`以上

```
vue --version
```

安装或升级@vue/cli

```
npm install -g @vue/cli
```

创建

```
vue create vue_test
```

启动

```
cd vue_test
npm run serve	
```

> ### 使用 vite 创建

官方文档：https://cn.vitejs.dev/

使用vite创建工程：https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project

使用vite创建：

```bash
##创建的时候可以会需要安装一个包，输入y回车即可
npm init vite-app 项目名

cd 项目名

##因为vite创建的时候不会去创建node_modules，所以看起来很快，之后需要自己安装
npm install

##vite的启动方式变了
npm run dev
```



vue3和vue2中不一样的地方：

`main.js`

```js
//引入的不再是Vue,而是引入了一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//相当于vue2的创建vm来说，app更轻量
createApp(App).mount('#app')

```

`App.vue`

模板中，没有根标签了

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1></h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>

```



# 二、常用Composition API

组合式API

## 1. setup

1. Vue3.0中的一个新的配置项，值为一个函数

2. setup是所有`Composition API(组合API)`"表演的舞台"

3. 组件中所用到的：数据、方法等，都要配置在`setup`中。

4. setup函数的两种返回值：

   1. 返回一个`对象`，则对象中的属性，方法，在模板中可以直接使用（主要）
   2. 若返回一个渲染函数，则可以自定义渲染内容

   ```vue
   <template>
     <h1>我是{{name}},今年{{age}}了,我喜欢说</h1>
     <button @click="say">说</button>
   </template>
   <script>
   export default {
     name: 'App',
     setup() {
       let name = '李云龙';
       let age = 45;
   
       function say() {
         alert('你他娘的意大利炮那');
           name='东方不败'	//修改属性
       }
         
       return {
         name,age,say
       }
     }
   }
   </script>
   ```

5. 注意

   1. 尽量不要与Vue2配置混用
      * Vue2配置(data、methods、computed)中`可以访问`到setup中的属性和方法
      * 但是setup中`不能访问`到Vue2配置中的属性和方法
      * 如果重名，setup优先
   2. setup不能是一个`async`函数，因为返回值不再是return的对象，而是promise,模板看不见对象中的属性
   3. 以上setup中的属性`不是响应式`，就算修改了，也只是数据修改了，页面不会响应，想要实现响应式，需要使用`ref`

## 	2. ref函数

1. 使用`ref`可以让setup中的属性变成响应式的属性

1. 语法：`const ** = ref(initValue)`

2. 原理是：把ref管理的属性变为一个`对象`，该对象中有`getter/setter`方法

3. 修改属性的时候，需要把属性当做一个对象来使用，使用`属性.value`可以完成响应式

4. 使用ref

   1. 需要先导入ref:`import {ref} from 'vue'`
   2. 把属性的值交给ref管理:`let name = ref('李云龙');`
   3. 修改属性的值：`name.value='东方不败'`

   ```js
   <script>
   import {ref} from 'vue'
   export default {
     name: 'App',
     setup(props) {
       let name = ref('李云龙');
       let age = ref(45);
       let obj = ref({
           id:'01',
           department:'工程系'
       })
   
       function change() {
         name.value='东方不败'
         age.value = 60
       }
       return {
         name,age,say,change
       }
     }
   }
   </script>

1. ref管理普通数据类型，就是转为`RefImpl`对象，`属性.value`就可以获取到值
   利用了`Object.defineProperty()`的`get/set`完成的

   ```js
   console.log(name);
   console.log(name.value);
   
   //结果是
   RefImpl {__v_isShallow: false,.... _value: '李云龙'}
   
   李云龙
   ```

2. ref管理对象数据类型，也是转为`RefImpl`对象，但是`对象.value`获取的是一个`Proxy`对象
   所以获取对象中的值：`obj.value.id`
   利用了：Vue3.0中的一个新函数——`reactive`函数

   ```js
   console.log(obj);
   console.log(obj.value);
   
   //结果
   RefImpl {__v_isShallow: false,.... _value: Proxy}
   
   Proxy {id: '01', department: '工程系'}
   ```

   

## 3. reactive函数

1. 作用：定义一个`对象类型`的响应式数据，基本类型不要使用，必须使用`ref`

2. 语法：`let 代理对象 = reactive(源对象)`

3. reactive函数接收一个`对象或数组`，返回一个`代理对象(Proxy实例对象)`

4. reactive定义的响应式数据是深层次的，多层对象也可以响应式

5. 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作

   ```js
   <script>
   import {ref,reactive} from 'vue'
   
   export default {
     name: 'App',
     setup(props) {
       let name = ref('李云龙');
       let obj = reactive({
         id:'01',
         department:'工程系'
       })
       
       function change() {
         console.log(obj);
       }
       return {
         name,age,change,obj
       }
     }
   }
   </script>
   ```

6. 使用`ref`管理的对象，也会去调用reactive，来返回一个Proxy对象，并且修改对象中的属性值需要：`对象.value.属性 = 值`

7. 如果使用`reactive`代理对象，则会直接返回一个`代理对象`Proxy对象，修改对象中的值需要：`对象.属性 =  值`

   ```js
   console.log(obj);
   
   //结果
   Proxy {id: '01', department: '工程系'}
   ```

   

## 4. Vue3.0 响应式原理

借助了window上的一个构造函数`Proxy(代理)`

将源对象代理为一个代理对象，第二个参数是配置，get/set和删除，当代理对象中的数据进行增删改查时，也会操作源对象的数据。

使用`get/set/deleteProperty`的原因是：要劫持到属性的增删改查，来进行页面更新，从而达到响应式页面

```js
let person = {
    name:'张三',
    age:20
}
//p是代理对象，person是源对象
let p = new Proxy(person,{
    get(target,propName){
        return target[propName]
    },
    set(target,propName,value){
        target[propName] = value
    },
    deleteProperty(target,propName){
        return delete target[propName]
    }
})
```

但是，修改源对象时，不是直接修改的，而是通过ES6的对象`Reflect(反射)`，对对象进行操作，

而且，`Reflect`是有返回值的，操作成功返回true，失败则返回false

所以，真正的原理应该是：

```js
new Proxy(data,{
    get(target,propName){
        return Reflect.get(target,propName)
    },
    set(target,propName,value){
        return Reflect.set(target,propName,value)
    },
    deleteProperty(target,propName){
        return Reflect.deleteProperty(target,propName)
    }
})
```



## 5. reactive对比ref

* 从定义数据角度对比
  * ref用来定义：`基本数据类型`
  * reactive用来定义：`对象或数组类型数据`
  * ref也可以用来定义`对象或数组类型数据`，内部也会通过调用reactive转为代理对象
* 从原理角度对比
  * ref通过`Object.defineProperty`的`get/set`来实现响应式
  * reactive通过使用`Proxy`来实现响应式（数据劫持），并通过`Reflect`操作源对象内部数据
* 从使用角度对比
  * ref定义的数据：操作需要`.value`，模板中不需要.value
  * reactive定义的数据：操作和读取均不需要`.value`

## 6. setup两个要点

* setup执行时机
  * 在beforeCreate生命周期之前执行，并且`this`是undefined
* setup的参数
  * props：值为对象，包含组件外部传递的，并且组件内部使用`props:[]`声明接收的属性，如果没有接收，则不会包含
  * context：上下文对象
    * attrs：值为对象，包含组件外部传递的，但是没有在props配置中声明的属性，属于是兜底了，相当于`this.$attrs`
    * slots：收到的插槽内容，相当于`this.$slots`
    * emit：触发自定义事件的函数，相当于`this.$emit`



## 7.计算属性与侦听

### 1. computed函数

与Vue2的computed功能一致

```js
import {computed} from 'vue'

export default {
  name: 'App',
  setup(props) {
    let firstName = ref('张')
    let lastName = ref('三')
    
    //计算属性简写
    let fullName = computed(()=>{
        return firstName.value + '-' + lastName.value
    })
    
    //计算属性完整
    let fullName = computed({
      get(){
        return firstName.value + '-' + lastName.value
      },
      set(value){
        
      }
    })

    return {
     fullName,firstName,lastName
    }
  }
}
```



### 2. 侦听

语法：`watch(属性名/[多个属性名],回调函数,配置)`

回调函数接收两个参数：新值和旧值

配置中用于监听配置：`immediate:true`立即监听一次、`deep:true`深度监听

侦听都不需要`.value`，因为.value就返回一个具体的值，监听是要监听属性，而不是值

如果使用`ref`来定义对象，则需要加`.value`，因为加了才返回`Proxy`，监听对象只能监听`Proxy`，第二种方法就是开启深度监听

```js
import {watch} from 'vue'

//监听一个属性
watch(fullName,(newValue,oldValue)=>{
    console.log('数据修改被侦听到了',newValue,oldValue);
},{immediate:true})

//同时监听多个属性
watch([firstName,lastName,fullName],(newValue,oldValue)=>{
    console.log('数据修改被侦听到了',newValue,oldValue);
},{immediate:true})
```



侦听`reactive`所定义的一个响应式数据`对象类型数据`

```js
let chengji = reactive({
    chinese:90,
    english:80,
    wenzong:{
        zhengzhi:90,
        lishi:80
    }
})

//监听reactive定义的响应式数据的全部属性
//		1. 监听对象时：oldValue获取的也是最新的数据，就是oldValue无效了
//		2. 强制开启了深度监视(deep配置无效)
watch(chengji,(newValue,old)=>{
    console.log('chengji被修改了 ',newValue,old);
})

//监听reactive定义的对象中的某个属性
//必须是一个函数,这个函数就是该属性的getter方法
watch(()=>chengji.chinese,(newV,oldV)=>{
    console.log('语文成绩被修改了',newV,oldV);
})

//监听reactive定义对象的某些属性
//数组中使用函数
watch([()=>chengji.chinese,()=>chengji.english],(newV,oldV)=>{
    console.log('语文或英语被修改了',newV,oldV);
})

//监听reactive定义对象中的对象属性
//因为是属性，所以deep生效，不写deep就无法深度监视
watch(()=>chengji.wenzong,(newV,oldV)=>{
    console.log('文综被修改了',newV,oldV);
},{deep:true})
```



### 3. watchEffect函数

和侦听功能一样，区别是：

* watch是：既要指明监听的属性，又要指明监听的回调
* watchEffect是：不用指明监听哪个属性，监听的回调中用到了哪个属性，就监听哪个属性
* watchEffedt更像computed，但是，computed注重返回值，watchEffect注重回调中的过程

```js
let name = ref('')
let age = ref()

watchEffect(()=>{
    let name = name.value
    let age = age.value
})
```

当属性name或age修改时，都会触发watchEffect的回调



## 8. Vue3生命周期

![](./../../.vuepress/public/vue/vue3_1.png)

Vue3中也可以使用Vue2中的生命周期钩子，只有最后两个钩子名称变了。

Vue3.0也提供了组合式API的生命周期钩子，也就是在setup中使用的钩子：

* `beforeCreate`---->`setup()`
* `create`--------------->`setup()`
* `beforeMount`------>`onBeforeMount`
* `mounted`------------->`onMounted`
* `beforeUpdate`---->`onBeforeUpdate`
* `update`--------------->`onUpdated`
* `beforeUnmount`--->`onBeforeUnmount`
* `unmounted`---------->`onUnmounted`

前两个就是setup()，没有对应的生命周期钩子



## 9. 自定义hook

本质是一个函数，把setup函数中使用的API进行封装成一个文件，一般有一个返回值

类似于Vue2中的混入

优势：复用代码，让setup中的逻辑更清楚

新建文件，hook函数约定以`use`开头，其他自定义

`hooks/usePoint.js`

在setup中使用需要先使用`import`引入



## 10.toRef

作用： 创建一个ref对象，其value值指向另一个对象中的某个属性

意思就是，如果setup返回了一个对象，那么在模板中，需要使用`对象.属性`来获取值，属性过多时，比较麻烦，可以使用`toRef`将一个属性，绑定到一个对象中的属性上，`toRef`返回的是个ref对象，所以自动有响应式

语法：`let name = toRef(对象,'属性')`

应用：想要把响应式中的某个属性单独提供给外部使用时

```js
import {toRef} from 'vue'

setup(){
    let chengji = reactive({
        chinese:90,
        english:80,
        wenzong:{
            zhengzhi:90,
            lishi:80
        }
    })

    return {
        chinese:toRef(chengji,'chinese'),
        english:toRef(chengji,'english'),
        lishi:toRef(chengji.wenzong,'lishi')
    }
}

```

扩展：`toRefs`

功能与toRef一致，可以批量创建多个ref对象，语法:`toRefs(对象)`

例如：`toRefs(person)`

但是，只能把第一级的属性转换为ref对象，更深一级任然是一个`Proxy`对象，如果需要，还要用`toRef(对象,'属性')`单独转换

```js
import {toRef} from 'vue'

setup(){
    let chengji = reactive({
        chinese:90,
        english:80,
        wenzong:{
            zhengzhi:90,
            lishi:80
        }
    })

    return {
		...toRefs(chengji)	//解构赋值，把参数对象中的所有一级属性转为ref对象，并展开
    }
}
```



# 三、其他组合API

## 1. shallowReactive

功能和`reactive`一样，实现对象的响应式

区别：`shallowReactive`只对对象第一层实现响应式

适用于，只有一层的对象



## 2. shallowRef

功能和`ref`一样

区别：`ref`会对`基本数据`类型和`对象数据`类型都做响应式，而`shallowRef`不会对`对象数据类型`做响应式，只会管理`基本数据`类型

当管理对象时，修改对象的属性，不会有响应式，适用于：不修改属性，而是直接修改对象

```js
let n = shallowRef({name:'zs'})
...
n = {name:'李四'}	//修改n的对象可以触发响应式
```



## 3.  readonly/shallowReadonly

https://cn.vuejs.org/api/reactivity-core.html#readonly



## 4.toRaw/martRaw

https://cn.vuejs.org/api/reactivity-advanced.html#toraw



## 5. customRef

https://cn.vuejs.org/api/reactivity-advanced.html#customref

 自定义封装一个响应式函数，用于在响应式时，处理问题，例如：防抖

**详细信息**

`customRef()` 预期接收一个工厂函数作为参数，这个工厂函数接受 `track` 和 `trigger` 两个函数作为参数，并返回一个带有 `get` 和 `set` 方法的对象。

`自定义hook`

```js
import {customRef} from 'vue'

export default function useCustomRef(value) {
    let timeout
    return customRef((track,trigger)=>{
        return {
            get(){
                track()
                return value
               
            },
            set(newValue){
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, 300);
            }
        }
    })
} 
```

调用：

```vue
import useCustom from './hooks/useCustom.js'

let customMsg = useCustom('hello')

return {
    customMsg
}

<template>
	<input v-model="customMsg"/>
	<h3>输入框的数据是：{{customMsg}}</h3>
</template>
```



## 6.provide与inject

https://cn.vuejs.org/api/composition-api-dependency-injection.html

用于祖先组件与后代组件之间传输数据

**详细信息**

`provide()` 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。

`inject()`接收两个参数，第一个是祖先提供的`key`，第二个是可选，是没有匹配到key时的默认值

`祖先组件.vue`

```js
import {provide} from 'vue'


setup(){
    // 注入
    let car = reactive({
        name:'宝马',
        color:'白色'
    })
    provide('car',car)	//提供key和值，值可以是响应式的
}
```

`后代组件.vue`

后代组件接收后，就可以直接使用了

```js
import {inject} from 'vue'

setup(){
    let car = inject('car')
    return {
        car
    }
}
```



## 7. 响应式数据的判断

* `isRef`：检查一个值是否为一个`ref`对象
* `isReactive`：检查一个对象是否是由`reactive`创建的响应式代理
* `isReadonly`：检查一个对象是否是由`readonly`创建的只读代理
* `isProxy`：检查一个对象是否是由`reactive`或`readonly`方法创建的代理



# 四、新组件

## 1. Fragment

Vue3的模板不需要根标签，Vue2需要。Vue3其实在最外层包裹了一层`fragment`标签，但是不渲染，使用Vue开发者工具可以看到



## 2. Teleport

把标签内的元素传送到其他地方，

如果想要做对话框之类的效果，组件的位置是个很大的问题，组件中弹窗元素很容易被其他组件中的CSS干扰，所以可以用Teleport，把弹窗元素传送到另一个地方

`<Teleport>` 提供了一个更简单的方式来解决此类问题，让我们不需要再顾虑 DOM 结构的问题。让我们用 `<Teleport>` 改写一下 `<MyModal>`：

`<Teleport>` 接收一个 `to` prop 来指定传送的目标。`to` 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段**传送到 `body`** 标签下”。



```vue
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>

```



## 3. Suspense

https://cn.vuejs.org/guide/built-ins/suspense.html

* 可以`异步引入组件`
  异步引入组件在组件因为一些原因加载变慢时，会优先显示加载完成的组件，而不是像Vue2一样，会等待所有组件加载完成。需要配合`Suspense`使用

  ```js
  import {defineAsyncComponent} from 'vue'
  const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
  ```

  

* `<Suspense>` 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。
  `子组件`

  ```js
  setup(props) { 
      ...
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
              resolve({car})
          }, 2000);
      })
  }
  ```

  子组件的return是一个异步的Promise对象，在正常的组件中，return的值不能是一个Promise，必须是一个对象，但是如果该子组件在父组件中被`Suspense`标签包裹，则可以是一个异步组件
  

  `父组件`

  `Suspense`底层是有两个插槽，一个用来插入原本的子组件，一个用来插入在`子组件异步处理未完成`时，先展示的样式

  被`Suspense`标签包裹的子组件可以是异步组件。没有包裹的不能是异步组件

  ```html
  <Suspense>
    <!-- 具有深层异步依赖的  子组件 -->
    <Dashboard />					
      
    <!--子组件异步处理未完成时 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  ```

  

# 五、其他

## 1. 全局API的转移

Vue3将全局的API，从`Vue.***`调整到`app`上

