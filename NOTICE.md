# Taro 项目注意事项

## 与 React 的差异

- 不要以 `id`/`class`/`style` 作为自定义组件的 属性名

- 不要使用 HTML 标签

- 事件绑定须以 `on` 开头

- 只能使用 `map` 操作 JSX 数组

- 组件使用大驼峰 命名

- 不支持组件的点表示法，且不能在运行时指定

  ```jsx
  <Radio.Group /> // 不支持
  ```

- 不支持用扩展符传递属性

- 一个文件，一个 组件

- 类函数组件，方法名需要以 `render` 开头，会被编译成 `template`

- 不支持 `className` 属性的传递，需要使用 `externalClass`

- 在小程序中，匿名函数比 `bind` 更占用内存

## 编写规范

- 定义组件时声明 `defaultProps`

- 浮点数的计算使用 `bignumber.js`

- 渲染列表 时需要指定 `key`，便于在列表增加/删除时确定一个元素

- 条件渲染的简写形式

  ```jsx
  {maybeExist && <View />}

  {red ? <Red /> : <Blue />}

  {
    {
      'dog': <Dog />,
      'cat': <Cat />,
      'mouse': <Mouse />,
    }[animal]
  }
  ```
