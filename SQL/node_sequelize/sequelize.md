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
    schema: 'string, /* A schema to use */
    set: 'object', /* Default options for sequelize.set */
    sync: 'object', /* Default options for sequelize.sync */
    timezone: 'string', /* The timezone used when converting a date from the database into a JavaScript date */
    clientMinMessages: 'string|boolean', /* The PostgreSQL client_min_messages session parameter. Set to false to not override the database's default. */
    standardConformingStrings: 'boolean', /* default true; The PostgreSQL standard_conforming_strings session parameter. Set to false to not set the option. WARNING: Setting this to false may expose vulnerabilities and is not recommended! */
    logging: 'Function', /* default console.log; A function that gets executed every time Sequelize would log something. Function may receive multiple parameters but only first one is printed by console.log. To print all values use (...msg) => console.log(msg) */
    benchmark: 'boolean', /* default false; Pass query execution time in milliseconds as second argument to logging function (options.logging). */
    omitNull: 'boolean', /* default false; A flag that defines if null values should be passed as values to CREATE/UPDATE SQL queries or not.*/
    native: 'boolean', /* default false; A flag that defines if native library shall be used or not. Currently only has an effect for postgres*/
    replication: 'boolean', /* default false; Use read / write replication. To enable replication, pass an object, with two properties, read and write. Write should be an object (a single server for handling writes), and read an array of object (several servers to handle reads). Each read/write server can have the following properties: host, port, username, password, database*/
    pool: {
        max: 'number', /* default 5; Maximum number of connection in pool */
        min: 'number', /* default 0; Minimum number of connection in pool */
        idle: 'number', /* default 10000 The maximum time, in milliseconds, that a connection can be idle before being released. */
        acquire: 'number', /* default 60000 The maximum time, in milliseconds, that pool will try to get connection before throwing error */
        evict: 'number', /* default 1000 The time interval, in milliseconds, after which sequelize-pool will remove idle connections. */
        validate: 'Function', /* A function that validates a connection. Called with client. The default function checks that client is an object, and that its state is not disconnected */
        maxUses: 'number', /* default Infinity The number of times a connection can be used before discarding it for a replacement, used for eventual cluster rebalancing. */
    }, /* sequelize connection pool configuration */
    quoteIdentifiers: 'boolean', /* default true; Set to false to make table names and attributes case-insensitive on Postgres and skip double quoting of them. WARNING: Setting this to false may expose vulnerabilities and is not recommended! */
    transactionType: 'string', /* default DEFERRED; Set the default transaction type. See Sequelize.Transaction.TYPES for possible options. Sqlite only. */
    isolationLevel: 'string', /* Set the default transaction isolation level. See Sequelize.Transaction.ISOLATION_LEVELS for possible options. */
    retry: {
        match: 'Array', /* Only retry a query if the error matches one of these strings. */
        max: 'number', /* How many times a failing query is automatically retried. Set to 0 to disable retrying on SQL_BUSY error. */
    }, /* Set of flags that control when a query is automatically retried. Accepts all options for retry-as-promised. */
    typeValidation: 'boolean', /* default false; Run built-in type validators on insert and update, and select with where clause, e.g. validate that arguments passed to integer fields are integer-like. */
    operatorsAliases: 'object', /* String based operator alias. Pass object to limit set of aliased operators. */
    hooks: 'object', /* An object of global hook functions that are called before and after certain lifecycle events. Global hooks will run after any model-specific hooks defined for the same event (See Sequelize.Model.init() for a list). Additionally, beforeConnect(), afterConnect(), beforeDisconnect(), and afterDisconnect() hooks may be defined here. */
    minifyAliases: 'boolean', /* default false; A flag that defines if aliases should be minified (mostly useful to avoid Postgres alias character limit of 64) */
    logQueryParameters: 'boolean', /* default false; A flag that defines if show bind parameters in log. */
})
```

## 测试连接
使用authenticate()函数测试是否连接成功  
默认情况下，sequelize将保持连接，并对所有的查询使用同一个连接，关闭可通过sequelize.close()方法，返回的是promise
```javascript
try{
    await sequelize.authenticate()
    console.log('connection success')
} catch (e) {
    console.error('connection error'+JSON.stringify(e))
}
```

## 创建数据表模型
