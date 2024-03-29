### 对vue的理解？
vue是目前三大主流前端框架之一，不同过去不管是原生js也好还是jq也好，开发者需要频繁操作dom。vue等框架的诞生，一种数据驱动视图的开发理念极大的提升了开发效率。响应式数据绑定、虚拟DOM、组件化、指令、生命周期是vue的一些核心特点。

### SPA MPA 应用？ 优缺点？ 如何针对SPA做SEO优化？
SPA是单页面应用，不存在页面的跳转，所谓的跳转其实是通过JS对同一页面上的内容做的替换。也正是这种不实际存在的跳转，避免页面之间切换打断用户体验，但是这种页面不利于SEO且首屏加载时间会略长，因为搜索引擎无法分析JS执行的部分内容。MPA则是多页面应用，设置vue-router为history模式。

### vue2兼容低版本ie8的策略？
因为vue2是设计用于现在浏览器的，不支持ie8及更早的浏览器，采用了ES5新特性，早期浏览器不支持，可采用Polyfills，模拟ie8所缺失的es5新特性

### vue的路由懒加载？组件懒加载？
懒加载顾名思义就是实际当用到了再加载，这是一种优化策略，可提升首屏加载速度。形式上都是通过函数返回对应的路由页面或者组件页面。再通过webpack等构建工具，可将懒加载的内容分割为单独的文件，并按需加载，可以提升浏览器性能，改善用户体验

### vue2和vue3的diff算法区别？v2和v3的区别？diff是怎么样的？diff原理？
v3相比v2引入了ES6新特性、组件支持多个根节点、通过teleport将模板移动到 DOM 中 Vue app 之外
 - 速度更快：重写了虚拟DOM的实现、编译模版的优化、更高效的组件初始化、update性能提高1.3～2倍、SSR速度提升2～3倍
 - 体积更小：通过webpack的tree-shaking功能，将无用模块剪辑，减少打包后的体积
 - 更易维护：新支持composition API 组合式API，灵活的逻辑组合与复用
 - 更好的ts支持：v3基于ts编写，享受到自动的类型定义提示
 - 编译器重写
 - 自定义渲染器：将 vue 的开发模型扩展到其他平台

v3中的变更：
 1. 全局API 由原来的Vue.xxx变更为使用应用程序实例，而且支持tree-shaking。
 2. v-if 和 v-for 优先级做了更改
 3. 生命周期名字变更，destroyed => unmounted  beforeDestroy => beforeUnmount
 4. 取消this的绑定
 5. 取消过滤器filter
 6. 支持组合式API
 7. 支持多个根节点

diff算法：
  一种同层的树节点进行比较的算法，比较只会在同层级进行, 不会跨层级比较，在diff比较的过程中，循环从两边向中间比较。
  深度优先，同层比较
  用于渲染更新时新旧 VNode 节点比较

### 实现过vue的hook吗？
是一种组织和重用逻辑的方法，是一种将逻辑抽象和封装以便在多个组件之间共享的方式

### vue中$nextTick什么作用？原理？实际应用场景？
在下次 DOM 更新循环结束之后执行延迟回调。解决DOM更新的延迟问题，并确保在DOM更新完成后执行特定的操作  
原理：Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新  
是一种优化策略，针对短时间内多次对同一变量的赋值，可以避免不必要的重复渲染。  
当需要在修改数据后立即操作更新后的DOM元素时，由于Vue的更新是异步的，可以使用$nextTick来确保DOM已经更新

### vue组件的通讯有哪些方式？
props、$emit、provide/inject、$parent、$children、$refs、vuex、EventBus、插槽slot（父组件 => 子组件）、直接访问windows对象

### v-model的原理？与v-bind的区别？
v-model指令一般用在表单元素上，它监听了元素的input事件，当用户输入内容时会自动将值同步到绑定的数据属性上  
当对数据属性进行修改时，得益于vue的响应式特点，vue也会自动去更新视图  
v-bind是单向数据绑定，将数据绑定到元素的属性上，不自动处理用户输入的变化

### 插槽使用场景？渲染原理？
作用域插槽，具名插槽、默认插槽  
当一个组件被复用，但内部有不完全相同的内容时，通过使用插槽，替换不同的内容，提高组件的可复用性，不用为了内部的一些小改动重写组件。  
在Vue组件渲染过程中，插槽的内容会被替代，具体渲染的内容取决于父组件的提供

### vue实现数据双向绑定或者说响应式的原理？proxy和object.defineProperty？
基于数据劫持  
双向绑定由三个重要部分构成：Model（数据层，应用的数据及业务逻辑）、View（视图层，应用的展示效果，各类UI）、ViewModel（业务逻辑层，框架封装的核心，负责将数据与视图关联起来）  
业务逻辑层负责数据变化后更新视图，视图变化后更新数据  
主要由Observer（监听器）和Compiler（解析器），监听器负责对所有数据的属性进行监听，解析器负责对各个元素的指令进行扫描和解析，根据指令模版替换数据以及绑定相应的更新函数  
proxy提供了更全面的劫持能力，可以拦截对象上的任何操作  
Object.defineProperty 用于定义和配置数据属性，包括属性的可写性、可枚举性和可配置性，可以用于创建“getter”和“setter”，允许你在属性的读取和写入时执行自定义的操作  

### 为什么vue的data要返回对象？不返回有啥问题？
因为组件化开发，一个组件可能会有多个实例，采用函数返回一个全新的data形式，可以确保每个实例对象的数据不会受到其他实例对象数据的污染  
根实例对象可以是对象，因为根实例是单例，不会产生数据污染

### vue的生命周期？对应能做些什么？
 - beforeCreate（实例创建之初）：做不了任何事。在此之后，在下一个之前，初始化VUE实例，数据观测
 - created（实例创建之后）：完成数据观测，属性与方法的运算，watch、event事件回调的配置，可调用methods中的方法，可通过computed和watch计算数据
 - beforeMount（挂载前）：在此阶段可获取到vm.el，但并没挂载到el上
 - mounted（挂载后）：可获取DOM，操作DOM
 - beforeUpdate（组件数据更新前）：更新的数据必须是被渲染在模板上，此时view层还未更新，若在beforeUpdate中再次修改数据，不会再次触发更新方法
 - updated（组件数据更新之后）：完成view的更新，若在updated中再次修改数据，会再次触发更新方法
 - beforeDestroy（组件实例被销销毁前）：实例被销毁前调用，此时实例属性与方法仍可访问，通常可用来取消定时器，防止内存泄漏的一些问题
 - destroyed（销毁后）：组件实例已被销毁，无法操作，并不能清除DOM，仅仅销毁实例
 - activated（keep-alive 缓存的组件激活时）
 - deactivated（keep-alive 缓存的组件停用时调用）
 - errorCaptured（捕获一个来自子孙组件的错误时被调用）

### eventBus是什么，什么作用？（node内置EventEmitter）
一种事件总线或事件发布/订阅框架，软件设计模式，用于简化组件之间的通信  
用于在软件应用程序中实现组件之间的解耦通信。它允许不同部分的代码（通常是不同的模块或组件）以一种松散耦合的方式进行通信，而不需要它们直接引用或依赖于彼此。EventBus模式的核心思想是将消息发送者（事件的发布者）和消息接收者（事件的订阅者）解耦，从而提高代码的可维护性和扩展性。

### computed和watch的用法与区别？原理？watch如何实现深度监听？
computed是一个计算属性，是根据其所依赖的数据动态计算来的，相当于会有多个变量的变动都会触发重新计算值  
watch是vue提供的一个选项，能够监听特定数据的变化，然后执行自定义逻辑。  
都是通过vue的响应式系统侦听属性变化  
watch有配置项，通过deep：true开启深度监听

### v-if和v-show的用法和区别？
都能控制元素在页面是否显示  
- 控制方法不同 v-show是增加css属性display:none  v-if则是整个元素的增加或删除
- 编译过程不同 v-if切换有一个局部编译/卸载的过程 v-show只是简单的基于css切换
- 编译条件不同 v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建 v-show的切换不会触发生命周期

### 常用的指令有哪些（v-开头）
v-bing、v-model、v-if、v-show、v-else、v-for、v-on（@）、v-once  
自定义指令的钩子函数：bind、inserted、update、componentUpdated、unbind  
全局注册通过Vue.directive，局部注册通过directive选项

### 什么是虚拟DOM？有什么好处？
虚拟DOM是使用JS对象描述真实DOM结构的树形数据结构  
用于提高前端性能，虚拟DOM因为是JS层面数据的计算，效率远高与JS操作真实DOM  
同其它相同采用虚拟DOM实现的框架可实现跨平台开发，比如react

### vue2怎么实现对数组和对象的监听的？
- 数组
  直接使用索引赋值或修改数组的长度，可能无法检测到变化  
  建议使用push、pop、shift、unshift、splice或者使用Vue.set来更新数组元素。复杂的还能通过深拷贝，重新给数组赋值
  
- 对象
  对于修改嵌套的对象属性，将不会触发响应式，只对顶层属性具有响应式  
  新增对象属性因为一开始对象被设置为响应式数据，后面新增属性并没有通过Object.defineProperty设置成响应式数据
  通过Vue.set方法可实现响应式

- vue3中采用proxy实现响应式，功能更强大，可以拦截的操作更多，同时对嵌套对象会进行递归遍历并为它们设置proxy代理，使他们都具有响应式

### vue中的几类watcher
 - 渲染 Watcher：渲染 Watcher 是最常见的 Watcher 类型。它负责监视组件模板中的数据依赖，当数据变化时，渲染 Watcher 将重新渲染组件视图。每个组件实例都有一个渲染 Watcher  
 - 计算属性 Watcher：计算属性 Watcher 监视计算属性的依赖，只有在相关依赖发生变化时才会重新计算和缓存计算属性的值  
 - 侦听器 Watcher：侦听器 Watcher 用于监视数据变化并执行自定义的回调函数。你可以使用 watch 选项创建侦听器 Watcher
 - 数组变异方法 Watcher：这些 Watcher 监视对数组的变异方法（如 push、pop、shift、unshift、splice 等）的调用，以便在数组发生变化时触发视图更新。这也是vue2中实现对数组响应式的办法  
 - 自定义 Watcher：通过原生方法，自行创建数据的监听

### keep-live原理？什么？
keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM  
原理在于维护一个缓存列表，根据激活和停用状态来动态管理子组件的渲染和状态。这有助于提高应用程序的性能和用户体验，特别是在需要频繁切换页面或组件时。  
被keep-live包裹的组件会被缓存起来，当组件被切换到活动状态，它会重新激活缓存的子组件。当组件不再活动时，子组件将被停用。  
当子组件被激活时，<keep-alive> 会检查缓存中是否有匹配的子组件实例。如果有匹配的子组件实例，它将从缓存中取出并重新渲染，而不是创建新的实例  
在keep-live中可实现的生命周期钩子有activated&deactivated，以及路由钩子beforeRouteEnter

### v-for和v-if为什么不建议同时使用？v-for中key的作用？
每次渲染都会先循环再进行条件判断，带来性能方面的浪费（vue2中 v-for优先级大于v-if）
设置key值，便于diff算法进行优化

### vue导航守卫有哪些？
 - 全局前置守卫：beforeEach（在路由跳转前被调用）、beforeResolve（在导航被确认前，解析异步路由组件）
 - 全局后置守卫：afterEach（在路由跳转完成后被调用），通常完成一些如日志记录或页面追踪
 - 路由独享的守卫：beforeEnter（在路由配置中定义的单个路由上，可用于执行特定路由的前置逻辑）
 - 组件内的守卫：
   - beforeRouteEnter（在被进入的组件内调用，允许你访问组件实例，但在组件实例化之前。）
   - beforeRouteUpdate（在当前组件再次被导航到时调用，但参数的路由发生变化）
   - beforeRouteLeave（在当前组件离开前被调用，通常用于阻止离开或提示用户保存未保存的数据。）

### 你是如何封装一个组件的？
首先我会确定是否有必要封装成组件，根据它的在项目内的复用的可能性、通用性确定组件需不需要使用插槽等一些因素  
然后我会确定这个组件的要实现的具体功能，然后确定需要传入的props以及往外需要发布的事件  
我会对这个组件的出口和入口做注释，以及注释这个组件所实现的功能
我还会根据这个组件是局部组件还是全局组件，放到相对应的文件里，全局组件通过main.js内组件批量自动注册，局部组件则现引现用
require.context

### 父子组件生命周期执行顺序？
父级beforeCreate => 父级created => 父级beforeMount => 子级beforeCreate => 子级created => 子级beforeMount => 子级mounted => 父级mounted

### mixins有几个生命周期
同组件的生命周期  
混入的对象可以包含任意生命周期钩子函数，因此 mixins 可以影响组件的生命周期钩子函数的执行顺序。如果多个 mixins 混入到一个组件中，它们的生命周期钩子函数将按照混入的顺序依次执行，最后执行组件内的钩子函数

### $router和$route的区别？
$router是 Vue Router 实例，它用于处理路由的导航和跳转  
通过 $router，你可以执行路由的编程式导航、push、replace、go等  
$router 提供了整个路由系统的控制权，允许你在代码中进行路由导航，例如跳转到不同的路由页面  

$route 是一个包含当前路由信息的对象，它提供了有关当前路由的详细信息，如路径、参数、查询参数、哈希、元信息等  

### 常用的事件修饰符？作用？
 - 表单修饰符
   1. v-model.lazy  延迟将用户输入内容更新至绑定的变量属性上，在change事件之后更新（光标离开）  
   2. v-model.trim  自动过滤用户输入的首空格字符，而中间的空格不会过滤
   3. v-model.number  自动将用户的输入值转为数值类型，但如果这个值无法被parseFloat解析，则会返回原来的值
 - 事件修饰符
   1. @click.stop  阻止事件冒泡
   2. @click.prevent  阻止默认事件
   3. @click.self  当前元素自身时触发
   4. @click.once  绑定了事件以后只能触发一次，第二次就不会触发
   5. @click.capture  使事件触发从包含这个元素的顶层开始往下触发（捕获模式）
   6. @click.passive  修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能，延迟事件触发
   7. @click.native  让组件变成像html内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件，操作普通HTML标签是会令事件失效的
 - 鼠标按键修饰符
   1. @click.left
   2. @click.right
   3. @click.middle
 - 键盘修饰符
   1. @keyup.keyCode[键码]、@keyup.enter、@keyup.tab（enter、tab、delete、space、esc、up、ctrl、alt、meta、shift）
 - v-bind修饰符
   1. v-bind.sync  能对props进行一个双向绑定，但需注意子组件传递的事件名格式必须为update:value（this.$emit('update:value', params)），使用该修饰符后切不可使用表达式
   2. v-bind.prop  设置自定义标签属性，避免暴露数据，防止污染HTML结构
   3. v-bind.camel  将命名变为驼峰命名法

### 组件与插件区别
编写形式不同
注册方式不同
使用方式不同
组件是系统的某个业务模块，插件是用来增强系统功能的