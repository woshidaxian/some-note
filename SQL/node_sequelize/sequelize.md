# Sequelize
Sequelize 是一个基于 promise 的 Node.js ORM(Object Relational Mapping)  
改变传统的sql语句查询，通过ORM框架构建查询模型  

*以下以mysql数据库为例*

## 开始使用前
做如下准备：
```
npm install sequelize
# OR
yarn add sequelize

# 数据库驱动依赖
npm install mysql2
```

## 建立连接
通过将连接参数分别传递到 Sequelize 构造函数或通过传递一个连接 URI 来完成（mysql采用传递参数）
```
const { Sequelize } = require('sequelize')

# sqlite/postgres
const sequelize = new Sequelize(URL)
# sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
})
# 其他数据库
const sequelize = new Sequelize('database', 'username', 'password', {
    # 基础配置
    host: 'localhost',
    dialect: 'mysql', /* mysql | mariadb | postgres | mssql */
    # 其他配置
    port: '3306', /* 端口号，默认3306 */
    username: 'username',
    password: 'password',
    database: 'database',
    dialectModule: 'string', /* If specified, use this dialect library. For example, if you want to use pg.js instead of pg when connecting to a pg database, you should specify 'require("pg.js")' here */
    dialectOptions: {}, /* An object of additional options，直接传递到连接库 */
    storage: 'string', /* only used by sqlite */
    protocol: 'string', /* default tcp; The protocol of the relational database. 链接协议 */
    define: 'object', /* default options for model definitions. see Model.init. */
    query: 'object', /* default options for sequelize.query */
    schema: 'string, /*  */
})
```
