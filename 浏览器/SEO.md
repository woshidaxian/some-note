## vue-meta
vue2:
- 安装vue-meta
```bash
npm install vue-meta
```
- 插件导入注册使用
```js
// main.js
import Vue from 'vue';
import Meta from 'vue-meta';

Vue.use(Meta)
```
- 在组件中使用
```vue
<!-- component.vue -->
<template>
  ...
</template>
<script>
export default {
  metaInfo: {
    title: 'My Page', // 页面标题
    meta: [
      { name: 'description', content: 'This is my page description.' },
      { name: 'keywords', content: 'vue, meta, example' }
    ]
  },
  mounted() {
    // 动态更新页面信息
    this.$meta().setTitle('Dynamic Title');
    this.$meta().addMeta('property', 'og:title', 'My Dynamic Page');
  },
  // 组件的其他内容...
};
</script>
```

vue3:
- 安装vue-meta@next
注意版本^3.0.0-alpha.8
```bash
npm install vue-meta@next
```

- 导入注册
```js
import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

const metaManager = createMetaManager(false, {
  meta: { tag: 'meta', nameless: true }
})
const app = createApp(App)
app.use(metaManager)
app.use(store)
app.use(router)
app.mount('#app')

```

- 在页面中使用
```vue
<template>
  <metainfo></metainfo>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore()
    useMeta({
      title: store.state.metaInfo.title,
      meta: [
        { name: 'keywords', content: store.state.metaInfo.keywords },
        { name: 'description', content: store.state.metaInfo.description }
      ]
    })
  },

});
</script>
```