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
// 子组件，然后在任何后代组件里，我们都可以使用 inject 选项来接收指定的我们想要添加在这个实例上的 property
inject: ['getMap']
```
