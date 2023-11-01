## 页面刷新后vuex状态丢失怎么办？
使用持久化存储（sessionStorage、localStorage、cookie）
使用插件 vuex-persistedstate
服务端存储

## vuex有什么特点？怎么获取数据和操作数据的？怎么调用mutations和actions方法？
特点：集中式状态管理、数据响应式、支持模块化
获取方式：$store.state.xx或使用getters来派生或计算状态数据，通过$store.state.getters来获取派生数据。使用辅助函数 mapState 和 mapGetters 来简化状态和派生数据的获取
操作数据：提交 mutations 来执行同步的状态变更操作，使用 actions 来处理异步操作，例如发起网络请求

commit和dispatch

## vuex有哪些属性？作用？
- state，存储数据的地方
- getters，getters 用于从 state 中派生出一些衍生数据，类似于计算属性。它们可以缓存计算结果，以提高性能。
- actions，actions 用于处理异步操作，例如发起网络请求，然后提交 mutations 来修改 state。它们可以包含异步代码和业务逻辑。使用：通过 dispatch 方法来触发 actions 的执行。
- modules，modules 允许将 store 拆分为多个模块，每个模块可以有自己的 state、getters、mutations 和 actions
- Mutation，mutations 是用于修改 state 的唯一途径。它们是同步函数，用于记录状态变更。使用：通过 commit 方法来触发 mutations 的执行