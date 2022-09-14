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
```javascript
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
    schema: 'string', /* A schema to use */
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

## 模型定义
- sequelize.define(modelName, attributes, options)
- 扩展Model并调用init(attributes, options)
模型定义后，可通过其模型名称在sequelize.models中使用该模型
sequelize.define()在内部调用Model.init，因此两种方法本质上等效的
```javascript
// sequelize.define()
const User = sequelize.define('User',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
},{
    sequelize, // 传递连接实例
    modelName: 'User',
    tableName: 'Users'
})
console.log(User === sequelize.models.User); // true

// 扩展Model并调用init()
class User extends Model{}
User.init({
    ...
},{
    sequelize, // 传递连接实例
    modelName: 'User',
    tableName: 'Users'
})
```

**公共类字段注意事项：**
1. 添加与模型属性之一同名的公共类字段会出现问题，Sequelize 为通过 Model.init 定义的每个属性添加一个 getter 和一个 setter. 添加公共类字段将隐藏那些 getter 和 setter，从而阻止对模型的实际数据的访问
2. 在TypeScript中，您可以使用declare关键字添加键入信息，而无需添加实际的公共类字段
```javascript
// 错误的
class User extends Model{
    id; // 这里公共类字段
    otherPublicField;
}
User.init({
    id: {
        // 不得与公共类字段同名
    }
},{...})

// 正确的（typescript）
class User extends Model{
    declare id: number; // 使用declare关键字键入信息,而非实际申明公共类字段
}

```

## 表名推断
- 在默认情况下，Sequelize会将模型名称（modelName）的复数作为表的名称
当然也可以通过配置改变上述情况  
使用freezeTableName: true;停止Sequelize自行自动复数化，此时modelName = tableName
- 在配置了表名（tableName）后，则直接使用配置项参数值

## 模型同步
- 当代码中的模型结构与数据库中的不一致时会出现这种情况
- 更改发生在数据库端，而非JavaScript端的模型
- 单个模型或者是sequelize连接实例同样拥有以下方法，区别在于效果是局部的还是全局的。
```javascript
User.sync() // 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
User.sync({ force: true }) // 将创建表,如果表已经存在,则将其首先删除
User.sync({ alter: true }) // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
sequelize.sync({alter: true}) // 一次同步所有模型
```

## 时间戳
- createAt、updateAt在默认情况会被添加至模型中，并且由Sequelize自动进行管理
- timestamps: false 配置项则可禁止上面的行为
- 两者也可做分别配置，但不论开启哪一项，都不要忘了配置timestamps: true
```javascript
{
    timestamps: true,
    createAt: false,
    updateAt: 'updateTimeStamps'
}
```

## 模型字段配置项
- 如果关于列的唯一指定内容是其数据类型,则可以缩短语法 name: DataTypes.STRING
- 默认情况，Sequelize 假定列的默认值为 NULL

```javascript
class User extends Model{}
User.init({
    XXX: {
        type: DataTypes.xxx, // 数据类型
        defaultValue: '',    // 默认值
        allowNull: true,     // 默认true，是否允许为NULL
        primarykey: true,    // 默认false，主键
        unique: true,        // 默认false，唯一约束 string | boolean
        autoIncrement: true, // 默认false，自动增长
        field: String,       // 指定列名称，即不以申明的模型列名称作为实际数据库列名称
        references: {        // 外键
            // 这是对另一个模型的参考
            model: Bar,
            // 这是引用模型的列名
            key: 'id',
            // 使用 PostgreSQL,可以通过 Deferrable 类型声明何时检查外键约束.
            deferrable: Deferrable.INITIALLY_IMMEDIATE
            // 参数:
            // - `Deferrable.INITIALLY_IMMEDIATE` - 立即检查外键约束
            // - `Deferrable.INITIALLY_DEFERRED` - 将所有外键约束检查推迟到事务结束
            // - `Deferrable.NOT` - 完全不推迟检查(默认) - 这将不允许你动态更改事务中的规则
        },
        comment: String,     // 注释
    }
},{...})
```

## 数据类型 DataTypes
```javascript
// 字符串
const { DataTypes } = require('sequelize')
DataTypes.STRING()       // VARCHAR(255)
DataTypes.STRING(1234)   // VARCHAR(1234)
DataTypes.STRING.BINARY  // VARCHAR BINARY
DataTypes.TEXT           // TEXT
DataTypes.TEXT('tiny')   // TINYTEXT

// 布尔
DataTypes.BOOLEAN        // TINYINT(1)

// 数字
DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)

DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)

DataTypes.REAL               // REAL            仅 PostgreSQL.
DataTypes.REAL(11)           // REAL(11)        仅 PostgreSQL.
DataTypes.REAL(11, 12)       // REAL(11,12)     仅 PostgreSQL.

DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)

DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)

// 在 MySQL 和 MariaDB 中,可以将数据类型INTEGER, BIGINT, FLOAT 和 DOUBLE 设置为无符号或零填充(或两者),如下所示：
DataTypes.INTEGER.UNSIGNED
DataTypes.INTEGER.ZEROFILL
DataTypes.INTEGER.UNSIGNED.ZEROFILL
// 你还可以指定大小,即INTEGER(10)而不是简单的INTEGER
// 同样适用于 BIGINT, FLOAT 和 DOUBLE

// 时间
DataTypes.DATE       // DATETIME 适用于 mysql / sqlite, 带时区的TIMESTAMP 适用于 postgres
DataTypes.DATE(6)    // DATETIME(6) 适用于 mysql 5.6.4+. 支持6位精度的小数秒
DataTypes.DATEONLY   // 不带时间的 DATE

// UUID
// 对于 UUID,使用 DataTypes.UUID. 对于 PostgreSQL 和 SQLite,它会是 UUID 数据类型;对于 MySQL,它则变成CHAR(36). Sequelize 可以自动为这些字段生成 UUID,只需使用 DataTypes.UUIDV1 或 DataTypes.UUIDV4 作为默认值即可：
{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // 或 DataTypes.UUIDV1
}
```

## 模型实例方法
- 模型虽然是个类，但是不应使用new关键字来创建实例
- 利用模型作为类，添加自定义实例或类级别的方法
- build、save、create、toJSON、set、update、destroy、reload、increment、decrement
```javascript
class User extends Model{
    createUser(){
        console.log(this.name)
    },
    static changeUserInfo(){

    }
}
User.init({
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER
})

// 通过build创建实例，仅存在于内存，不会同步于数据库
const hwg = User.build({name: 'HWG'})
console.log(hwg.name) // HWG

// 通过save，将实例存储于数据库
await hwg.save();

// build + save = create，
const hwg = User.create({name: 'HWG'});

// toJSON() 替代console.log(hwg) & JSON.stringify(hwg)
console.log(hwg.toJSON());

// 更新实例
hwg.name = 'hwg';
hwg.set({
    name: 'hwg',
    age: 18
})

// update 用于更新一组特定的字段，直接保存至数据库
// destroy 删除实例，同步至数据库
// reload 重新加载实例，从数据库获取
// increment / decrement 为了解决递增递减实例的值不会遇到并发问题
hwg.increment('age', { by: 2 })
hwg.increment({
    'age': 2,
    'cash': 100
})
hwg.increment(['age', 'cash'], { by: 2 })
```

## 模型查询（基础）
1. INSERT 查询
Model.create() = Model.build() + instance.save()
可通过配置create方法中的属性，允许将模型限制为具体某些字段更新至最新值
```javascript
const user = User.create({
    username: 'hwg',
    age: 12,
    isAdmin: true
},{fields: ['username']})
// 假设 isAdmin 的默认值为false
console.log(user.username) // hwg
console.log(user.isAdmin)  // false
```
2. SELECT 查询
    - findAll 方法从数据库中读取整个表 => SELECT * from ...
    ```javascript
    const users = await User.findAll()
    // 查询全部属性
    const users = await User.findAll({
        attributes: ['age', 'username', ['isAdmin', 'admin']]
        // 通过嵌套数组来重命名属性
        attributes: {
            include: [
                [sequelize.fn('count', sequelize.col('hats'), 'n_hats')]
            ], // 包含某些属性，使用聚合函数时
            exclude: [], // 去除某些属性
        }
    })
    // 查询某些属性
    ```
    - 配合 WHERE 子句
    

