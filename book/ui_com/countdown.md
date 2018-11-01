## 基础使用
```html
<lemon-countdown formate="ss秒" :seconds="60" :begin="countdown_begin" initText="发送验证码" @click="getCode" @over="onCountDownOver"></lemon-countdown>
```

## 元素属性

```
formate 倒计时显示格式
seconds 倒计时初始秒数
begin 是否开始倒计时
initText 初始化文案
```

## 事件
```
click  点击事件
over   倒计时结束事件
```