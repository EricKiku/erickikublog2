---
icon: markdown
title: VueRouter路由
date: 2022-10-11
category:
  - vue
tag:
  - vue2
  - vueRouter
---
# 

# 路由

安装

vue2用vue-router3

vue3用vue-router4

```
npm i vue-router@3
```

## 新建路由器

`src/router/index.js`

```js
//这是一个路由器文件

//引入VueRouter
import VueRouter from 'vue-router'

//引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue'

//创建一个路由
const router = new VueRouter({
    routes: [
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

export default router
```



## 使用路由器

在`main.js`中使用

```js
import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'//----------------
//引入路由器
import router from './router/index,js'//--------------引入router文件
Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)				//-------------------

new Vue({
  render: h => h(App),
  router,//----------------------直接使用router文件暴露的对象配置
}).$mount('#app')

```

## 使用路由

凭借一个新标签来使用路由，转换页面

`<router-link to="/">`

```vue
<router-link to="/about" active-class="blue">About</router-link>
<router-link to="/home" active-class="blue">Home</router-link>
```

`to`属性用于指定路由路径，来切换路由

`active-class`属性用于在激活标签时，添加css选择器，`blue`有一组样式，在激活`router-link`时，会添加在标签上



指定展示位置：

```html
<router-view></router-view>
```



## 注意点

1. 路由组件一般放在`/pages`文件夹中，一般组件放在`/components`文件夹中
2. 通过切换，被换掉的路由组件是被销毁了
3. 每个组件都有自己的`$route`属性，其中存储了自己的路由信息
4. 所有应用都只有一个router，可以通过`$router`属性获取



## 嵌套多级路由

1. 配置路由规则，使用`children`配置

   ```js
   routes: [
           {
               path:'/about',
               component:About,
   
           },
           {
               path:'/home',
               component:Home,
               children:[//------------------home的子路由配置
                   {
                       path:'news',//--------不需要加/，路径是/home/news
                       component:News
                   },
                   {
                       path:'message',
                       component:Message
                   }
               ]
           }
       ]
   ```

2. 跳转

   ```html
   <router-link to="/home/news">News</router-link>
   ```

   要写完整路径



## 路由传参

### query

1. 传递参数

   ```html
   <!-- 跳转时携带query参数 to的字符串写法，要加冒号 -->
   <router-link :to="/home/message/detail?id=001&title=hellow"></router-link>
   
   <!--to的对象式写法 -->
   <router-link :to="{
   	path:'/home/message/detail',
       query:{
       	id：'001',
           title:'hellow'
       }
   }">
       跳转
   </router-link>
   ```

2. 接收参数
   每个组件实例对象上都有一个`$route`，存储本身的路径和参数等数据，`query`是一个包含了传递的参数的对象

   ```
   $route.query.id
   $route.query.title
   ```

### params

和query方式一样，需要在路由器中配置一些参数，

```js
{	
    name:'about'
    path:'/about/:id/:title',
    component:About,
},
```

1. 传递参数

   ```html
   <router-link :to="{
   	name:'about'
       params:{
       	id：'001',
           title:'hellow'
       }
   }">
       跳转
   </router-link>
   ```

   > 注意：使用params传参时，若使用to的对象写法，不能使用path配置，只能用name配置

2. 接收参数

   ```
   $route.params.id
   $route.params.title
   ```

   

## 命名路由

简化路由的跳转

使用:

1. 给路由命名

   ```js
   {
       path:'/home',
       component:Home,
       children:[
           {
               path:'news',
               component:News
           },
           {
               path:'message',
               component:Message,
               children:[
                   {
                   	name:'detail'
                       path:'detail',
                       component:Details
                   }
               ]
           }
       ]
   }
   ```

2. 简化跳转
   一般用于多级路由的长路径时使用，简单的路径大可不必

   ```html
   <!-- 简化前，需要完整路径 -->
   <router-link to="/home/message/detail"></router-link>
   
   <!-- 简化后，直接使用name跳转 -->
   <router-link :to="{name:'detail'}"></router-link>
   
   <!-- 简化后，配合传参 -->
   <router-link 
   	:to="{
        	name:'detail',
            query:{
            	id:'001',
            	title:'hello'
            }
        }">
   	跳转
   </router-link>
   ```

   

## props

让路由组件可以更简单的收到query或params参数

1. 配置props
   第三种会把该组件的`route`传递，所以可以获取传递给该组件的参数，在路由器中就配置好，
   接收时，就会省很多代码

   ```js
   //第一种写法，把对象中的值通过props方式传给组件
   // props: {id:'001',title:'hello'}
   
   //第二种写法，props为布尔值，为true，就把路由收到的所有params参数通过props传给组件
   //props:true
   
   //第三种写法，函数，该函数中的返回值中的每一组键值都会通过props传给组件
   props(route){
       return {
           id:route.query.id,
           title:route.query.title
       }
   }
   ```

2. 接收

   ```vue
   {{id}}{{title}}
   
   //vc实例：
   props: ['id','title'],
   ```

   



## replace

1. 控制路由跳转时操作浏览器历史记录的模式

2. 浏览器历史记录的模式分为两种写入方式：`push`和`replace`，`push`是追加历史记录，`replace`是替换当前记录，默认是`push`

3. 如何开启`replace`模式：

   ```html
   <router-link replace >Home</router-link>
   ```

   



## 编程式路由导航

作用：不使用`<router-link>`去实现路由的跳转，可以使用任意标签

具体代码：

绑定鼠标事件，在`methods`配置中触发路由，配置和`<router-link>`标签一样

借助`$router`这个全局路由器实现跳转

```js
methods: {
    puchBtn(msg){
        this.$router.push({//------触发路由的压栈操作
            name:'detail',
            query:{
                id:msg.id,
                title:msg.title
            }
        })
    },
    replaceBtn(msg){
        this.$router.replace({//-----触发路由的替换操作
            name:'detail',
            query:{
                id:msg.id,
                title:msg.title
            }
        })
    }
},
```



浏览器历史记录操作：

```js
this.$router.forward()	//前进一次
this.$router.back()		//后退
this.$router.go()		//可前进，可后退
```



## 缓存路由组件

1. 作用：让不展示的路由组件不被销毁

2. 实现：
   所有被`<keep-alive>`标签包裹，并且被`include`指定的组件，在被切换时不销毁，输入的数据还在。`include`中的值是，各组件的`name`属性

   ```html
   <keep-alive include="News">
   	<router-view></router-view>
   </keep-alive>
   ```

3. 多个需要缓存
   当有多个组件需要缓存时：
   冒号、数组

   ```html
   <keep-alive :include="['News','Message']">
   	<router-view></router-view>
   </keep-alive>
   ```

   

## activated

两个新的生命周期钩子

作用：路由组件独有的两个钩子，用于捕获组件激活的状态

`activated`：路由组件被激活时触发

`deactivated`：路由组件失活时触发

只有被`<keep-alive>`包裹的组件才会触发这两个钩子，如果是走销毁路线，就不会触发



## 路由守卫



### 全局路由守卫

作用：

`全局前置路由守卫`：用于在路由跳转**`前`**，进行一些判断，是否可以跳转，类似`权限`

`全局后置路由守卫`：后置路由守卫是切换后，进行数据处理，如果前置判断失败，没有跳转，则不进行任何操作





在`/router/index.js`文件中，在暴露`router`之前

`router.beforeEach`有一个回调函数，回调函数可以接收三个参数，分别是

`to`：去哪个组件

`from`：从哪个组件跳

`next`：是否放行

前两个组件`to、from`的值有：

|                             |
| --------------------------- |
| **fullPath**: "/home/news"  |
| **hash**: ""                |
| **matched**: (2) [{…}, {…}] |
| **meta**: {}                |
| **name**: "news"            |
| **params**: {}              |
| **path**: "/home/news"      |
| **query**: {}               |

所以可以从`path、name、meta`来判断跳往的组件

```js
router.beforeEach((to,from,next)=>{})
```



1. 判断是否需要验证权限
   在路由配置中添加一个新的属性`meta`，用来放置一些自定义的键值

   ```js
   {
       name:'news',
       path:'news',
       component:News,
       meta: { //----------meta 元数据，可以放置键值
       	isAdmin:true   //isAdmin:true  开启管理员验证
       }
   }
   
   //全局前置路由守卫
   router.beforeEach((to,from,next)=>{
       if(to.meta.isAdmin){	//isAdmin是否为true，为true则需要验证
       	if(localStorage.getItem('quanxian')==='admin'){	//判断条件
           	next()		//如果成功，则放行
       	}
           alert('你是一个游客，无权查看该内容');
           return;		//如果失败，则不跳转
       }
       next()	//没有isAdmin或为false的，一律放行
   })
   
   //全局后置路由守卫
   //参数只有to,from，没有next
   router.afterEach((to,from)=>{
       进行处理...
   })
   ```

   

### 独享路由守卫

只管理一个路由配置

写在哪个路由配置中，当跳转到这个路由时，就会判断

```js
{
    name:'news',
    path:'news',
    component:News,
    meta: { 
        isAdmin:true    
    },
    beforeEnter: (to, from, next) => {	//--只管理news路由
        // ...
    }
},
```





### 组件路由守卫

和`data`等配置平级

```js
//进入守卫，通过路由规则进入组件时被调用
beforeRouteEnter (to, from, next) {
    // ...该方法的to，永远是该组件
},
    
//离开守卫，通过路由规则离开组件时被调用
beforeRouteLeave (to, from, next) {
    // ...该方法的from，永远是该组件
}
```



## history/hash

`hash:`	

1. 地址中有#号，不美观，#号后边的都是hash值
2. 若以后地址通过第三方手机app分享，若app校验严格，则地址会标记不合法
3. 兼容性好
4. 在HTTP请求中，hash值不会带给服务器

`history:`

1. 地址干净，美观
2. 兼容性和hash相比略差
3. 应用部署上线后需要后端人员支持，解决刷新页面时服务端404问题
