## js调用
```javascript
let loading = this.$loading({
  text: "加载中"
})
...
loading.close() // 关闭loading
```

## 参数

```
text 提示文字
mask 是否显示遮罩层
```

## vue指令 v-loading
```javascript

data: return () => {
  loading: true
}

<div v-loading="loading">
```