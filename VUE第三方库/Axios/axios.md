Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

# Axios API
通过向axios传递配置来创建请求
```js
axios({
  method: 'POST' | 'GET' | '···',
  url: '',
  data: {
    a: 1,
    b: 2
  }
})
axios.post(url,data).then(res => {})
```