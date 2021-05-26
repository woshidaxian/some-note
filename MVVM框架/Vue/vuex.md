# state
mapState 辅助函数
当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。但是自从有了对象展开运算符 (opens new window)，我们可以极大地简化写法

# getters
可以认为是 store 的计算属性
Getter 接受 state 作为其第一个参数
Getter 也可以接受其他 getter 作为第二个参数
也可以让getters返回一个函数，来实现给getters传参
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
```js
getters: {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }，
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }

// 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
```

# mutations
每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
state 作为第一个参数
可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：
```js
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}

this.$store.commit('increment', payload)
this.$store.({
  type: 'increment',
  payload: {
    amount: 10
  }
})
```
使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
```js
methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
```

# action
提交的是 mutation，而不是直接变更状态
可以包含任意异步操作
Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
context 对象不是 store 实例本身
```js
// 普通action
action: {
  increment(context){
    contxt.commit('')
  }
}

action: {
  increment({commit}){
    commit('')
  }
}

this.$store.dispatch('')
// 参数解构
```
组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用