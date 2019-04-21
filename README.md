# suspend-button

a react suspend button

- [demo](https://kkfor.github.io/suspend-button/)
- [github](https://github.com/kkfor/suspend-button)

## 安装
npm install suspend-button -S

## 使用

```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SuspendButton from 'suspend-button'

class App extends Component {
  render() {
    return (
      <SuspendButton></SuspendButton>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
```

## 属性

| 属性名 | 类型 | 说明 |
| - | - | - |
| img| String | 图片地址 |
| style | obj | 样式 |