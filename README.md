**学习本课程的前置条件**

* 会使用 create-react-app 搭建工程项目
* 已经掌握了 React 的基础知识
* 已经知道了状态管理的相关知识
* 已经学习过 ES6 的新特性，如装饰器、箭头函数等


**安装 Mobx**
```
cnpm install mobx -S
cnpm install mobx-react -S
```


**使用两个 Babel 插件，支持ES6装饰器语法**
```
cnpm install @babel/plugin-proposal-decorators -D
cnpm install @babel/plugin-proposal-class-properties -D
```
在 package.json 中配置如下：
```
[
 "@babel/plugin-proposal-decorators",
 {
 "legacy": true}],

[
 "@babel/plugin-proposal-class-properties",
 {
 "loose": true}
]
```
```
"parserOptions": {
   "ecmaFeatures": {
   "legacyDecorators": true
   }
 }
 ```
