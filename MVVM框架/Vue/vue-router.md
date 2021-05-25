# 动态路由匹配
某种模式匹配到到所有路由全部映射到同个组件
path: 'user/:id',
component: User
在组件内可以通过this.$route.params访问到参数，更多参数查询可参考API文档

## 响应路由参数到变化
当使用路由参数时，/user/foo => /user/bar 原来到组件实例会被复用，不会销毁再重建，所以想要对路由参数的变化做出响应可简单地watch $route对象或使用beforeRouteUpdate钩子
```js
watch: {
  $route(to, from) {
    // 对路由变化作出响应
  }
}
OR
beforeRouteUpdate(to, from, next) {
  // react to route changes...
  // do not forget to call next()
}
```

## 通配符路由
$route.params内会自带pathMatch参数，包含URL通过通配符被匹配对部分
```js
{
  // 匹配所有路径
  path: '*'
}
{
  // 匹配以/user-开头对任意路径
  path: '/user-*'
}
```
## 高级匹配模式
正则匹配等
## 匹配优先级
按照路由的定义等顺序：路由定义得越早，优先级越高

# 嵌套路由
```js
<div id="app">
  <router-view></router-view>
</div>
const User = {
  template: `
    <div>
      <div>User {{ $route.params.id }}</div>
      <router-view></router-view>
    </div>
  `
}
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

# 编程式路由
router.push(location, onComplete?, onAbort?)
向history栈添加一个新的记录
使用<router-link :to="...">等同于调用router.push(...)

router.replace(location, onComplete?, onAbort?)
<router-link :to="..." replace>
不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

router.go(n)
在 history 记录中向前或者后退多少步，类似 window.history.go(n)

# 命名视图
```js
<div>
  <h1>User Settings</h1>
  <NavBar/>
  <router-view/>
  <router-view name="helper"/>
</div>
{
  path: '/settings',
  // 你也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```
# html5 history模式
vue-router默认hash模式：使用URL的hash来模拟一个完整的URL
如果想要替换掉hash，就给路由配置history模式
http://localhost:8080/index/XX
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```


# API

## <router-link> props
to -> 至某个路由
replace -> 路由替换，不存入history记录
append -> 当前路径前添加基路径
tag -> 渲染成的标签，默认“a”
active-class -> 设置链接激活时使用的CSS类名
exact -> 似懂非懂，“是否激活”默认类名的依据是包含匹配
event -> 声明触发导航的事件，string ｜ Array<string>
exact-active-class -> 配置当链接被精确匹配的时候应该激活的 class
aria-current-value -> 确实没看懂，当链接根据精确匹配规则激活时配置的 aria-current 的值。这个值应该是 ARIA 规范中允许的 aria-current 的值 (opens new window)。在绝大多数场景下，默认值 page 应该是最合适的。'page' | 'step' | 'location' | 'date' | 'time'

## <router-view> props
name -> if name渲染对应的路由配置中components下的相应组件

## router构建选项
routes完整可选定义类型
```js
interface RouteConfig = {
  path: string,
  component?: Component,
  name?: string, // 命名路由
  components?: { [name: string]: Component }, // 命名视图组件
  redirect?: string | Location | Function,
  props?: boolean | Object | Function,
  alias?: string | Array<string>,
  children?: Array<RouteConfig>, // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void,
  meta?: any,

  // 2.6.0+
  caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object // 编译正则的选项
}
```
mode -> 配置路由模式 hash｜history｜abstract
base -> 应用的基路径，默认“/”
linkActiveClass -> 全局配置 <router-link> 默认的激活的 class
linkExactActiveClass -> 全局配置 <router-link> 默认的精确激活的 class
scrollBehavior -> 滚动行为
parseQuery / stringifyQuery -> 莫名奇妙，提供自定义查询字符串的解析/反解析函数。覆盖默认行为
fallback -> 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。

## router实例属性
router.app -> 配置了router的Vue根实例
router.mode -> 路由使用的模式
router.currentRoute -> 当前路由对应的路由信息对象
router.START_LOCATION -> 以路由对象的格式展示初始路由地址

## router 实例方法
router.beforeEach
router.beforeResolve
router.afterEach
router.push
router.replace
router.go
router.back
router.forward
router.getMatchedComponents
router.addRoutes 废弃
router.addRoute
router.getRoutes
router.onReady
router.onError

## 路由对象属性
$route.path -> 当前路径，总是解析为绝对路径
$route.params -> 包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象
$route.query -> 表示 URL 查询参数
$route.hash -> 当前路由的hash值
$route.fullpath -> 完成解析后的 URL，包含查询参数和 hash 的完整路径
$route.matched -> 一个数组，包含当前路由的所有嵌套路径片段的路由记录 
$route.name -> 当前路由的名称，如果有的话
$route.redirectedFrom -> 如果存在重定向，即为重定向来源的路由的名字

## 组件注入
this.$router -> router实例
this.$route -> 当前激活的路由信息对象，只读

增加的组件配置选项
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave