# 生命周期
new Vue() -> beforeCreate() -> create() -> beforeMount() -> mounted() -> beforeUpdate() -> update() -> beforeDestroy() -> destroyed()
初始化Vue实例 => 创建前（此时data、methods、computed上的内容无法调用） => 创建后（此时DOM元素不可获取） => 挂载前（组件挂载到html页面之前） => 挂载后（此时可以获取DOM元素） => 数据更新前调用 => 数据更新后调用 => 实例销毁前 => 实例销毁后

# 计算属性与侦听器
create后有效
computed与watch
计算属性，当一些数据发生改变时，其它地方需要经过在此数据基础上计算出来的可以在这里，减少模版中太多复杂的运算
侦听器，当一个数据发生改变 ······

# 特殊的指令
v-once 只加载或执行一次
v-html 将绑定的属性值以html显示

# 事件修饰符
.stop 阻止单击事件继续传播
.prevent 提交事件不重载页面
.capture 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
.self 即事件不是从内部元素触发的
.once 执行一次
.passive 滚动事件的默认行为 (即滚动行为) 将会立即触发

# 按键修饰符
```html
<button @keyup.enter="submit"></button>
<button @keyup.13="submit"></button>
```
Vue.config.keyCodes.f1 = 112
获取焦点的状态下
vue提供常用按键码别名，也可使用keycode，也可通过Vue.config.keyCodes对象自定义按键修饰符别名
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

# 系统修饰符
.exact修饰符允许你控制由精确的系统修饰符组合触发的事件
```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button v-on:click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button v-on:click.exact="onClick">A</button>
```
鼠标按钮修饰符
.left
.right
.middle

# 表单绑定修饰符
.lazy
.number
.trim

# 样式与类名绑定
```html
<div v-bind:class="{ active: isActive }"></div>
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```
active类和text-danger类是否起作用由isActive和hasError决定

# 条件渲染
v-if
v-else-if
v-else

v-show通过改变display来实现，元素仍然存在在页面中

# 访问元素与组件
$root 访问根元素实例
$parent 访问父级组件实例
依赖注入
```js
// 父组件，provide 选项允许我们指定我们想要提供给后代组件的数据/方法
provide: function () {
  return {
    getMap: this.getMap
  }
}
// 子组件，然后在任何后代组件里，我们都可以使用 inject（注入） 选项来接收指定的我们想要添加在这个实例上的 property
inject: ['getMap']
```

# 过渡&动画
v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
appear 初始化渲染效果

# 混入
数据对象在内部进行递归合并，冲突时以组件本身为准
同名钩子函数合并为一个数组，混入对象的钩子在组件本身钩子之前调用
值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
Vue.extend() 也使用同样的策略进行合并。

# 自定义指令
支持动态指令参数，对象字面量
全局注册
```js
Vue.directive('focus', {
  bind: () => {
    // 仅调用一次，指令第一次绑定到元素时调用，可以进行一次性的初始化设置
  },
  inserted: function(el, binding, vnode, oldVnode) {
    // 被绑定元素插入父节点时调用
    el.focus()
  },
  update: () => {
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
  },
  componentUpdated: () => {
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  },
  unbind: () => {
    // 只调用一次，指令与元素解绑时调用
  }
})
```
局部注册
```js
directives: {
  focus: {
    inserted: function(el, binding, vnode, oldVnode){
      el.focus()
    }
  }
}
```

# 渲染函数
好复杂
虚拟节点实际为dom节点的描述信息

# 插件
使用插件Vue.use()
开发插件X.install()
```js
X.install = function(Vue, options){
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })
  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

# 过滤器
用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示  
过滤器可以串联，上一个为下一个的参数，过滤器也可接收参数
```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```
```js
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

# API
## 全局配置
Vue.config 是一个对象，包含 Vue 的全局配置
```js
Vue.config.silent = true // 取消 Vue 所有的日志与警告。
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}// 自定义合并策略的选项
Vue.config.devtools = true // 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  // 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例
}
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  // 为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略
}
Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
  // 须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)。否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告。
]
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
  // 给 v-on 自定义键位别名。
}
Vue.config.performance = true // 默认为false,设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。
Vue.config.productionTip = false // 默认值为true，设置为 false 以阻止 vue 在启动时生成生产提示
```

## 全局API
```js
Vue.extend() // 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
Vue.nextTick() // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
Vue.set() // 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property
Vue.delete() // 删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。
Vue.directive() // 注册/获取全局指令
Vue.filter() // 注册或获取全局过滤器
Vue.component() // 注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称
Vue.use() // 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。该方法需要在调用 new Vue() 之前被调用。当 install 方法被同一个插件多次调用，插件将只会被安装一次。
Vue.mixin() // 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。
Vue.compile() // 将一个模板字符串编译成 render 函数。只在完整版时可用。
Vue.observable( object ) // 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景
Vue.version // 提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。
```