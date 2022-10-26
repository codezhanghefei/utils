# utils
常用工具函数

### formatHump
#### 功能
Object命名大驼峰和小驼峰相互转换。
该方法接受两个参数:
- 第一个参数是需要转换的Ojbect
- 第二个是可选参数，转换规格，默认是false，表示大驼峰转换为小驼峰。

#### 用法
```js
const result = formatHump(originObject, reversal);
```


### isNull

#### 功能
判断入参是否为空

#### 用法
```js
const result: boolean = isNull(arg);
```