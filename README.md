# parser-vnode
通过指定格式对象字面量(通常是VNode)创建并渲染DOM




## Requirement

- node version:>=14

## Install

``` zsh
pnpm i parser-vnode -S
```


## Usage


``` js
import { createHTML } from 'parser-vnode'
const toptic = () => {
  return {
    tag: 'h3',
    children: [h1, 'h3']
  }
}

const h1 = () => {
  return {
    tag: 'h1',
    children: '测试'
  }
}

createHTML({
  tag: 'h1',
  props: {},
  children: [toptic, '顶级h1']
}, '#app')
```

<!-- ## Options


``` ts

``` -->



