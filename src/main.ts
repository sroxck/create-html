
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
type PropsObject = {
  [key: string]: any
  onClick?: () => any
}
interface Vnode {
  tag: string | Function;
  props?: PropsObject;
  children?: string | Array<Vnode | string| Function> |Function;
  style?:string
}

const SubCom = () => {
  return {
    tag: 'div',
    props: {
      
    },
    style:'margin-top:30px',
    children: [SubCom3,'22']
  }
}
const SubCom3 = () => {
  return {
    tag: 'div',
    props: {
      onClick:()=>{
        console.log('222')
      }
    },
    style:'color:red',
    children: '测试3'
  }
}
const Vnode: Vnode = {
  tag: 'div',
  children:[SubCom,SubCom]

}

function render(Vnode: Vnode, container: HTMLElement) {
  if (typeof Vnode.tag === 'string') {
    createHTML(Vnode, container)
  } else if (typeof Vnode.tag === 'function') {
    createComponent(Vnode, container)

  }
}
function createComponent(vNode: Vnode, container: HTMLElement) {
  if (typeof vNode.tag === 'function') {
    const subtree = (Vnode as any).tag()
    render(subtree, container)
  }
}

function createHTML(vNode: Vnode, container: HTMLElement) {
  const el = document.createElement(vNode.tag as string)
  for (const key in vNode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substring(2).toLowerCase(), vNode.props[key])
    }

  }
  if (typeof vNode.children === 'string') {
    el.appendChild(document.createTextNode(vNode.children))
  }
  else if (Array.isArray(vNode.children)) {
    vNode.children.forEach(item => {
      if (typeof item === 'string') {
        el.appendChild(document.createTextNode(item))
      } else if(typeof item === 'function'){
        createHTML(item(),el)
      }else {
        createHTML(item, el)
      }
    })
  }
  else if(typeof vNode.children === 'function'){
    console.log(vNode.children,el,'22')
    createHTML(vNode.children(),el)
  }
  if(vNode.style){
    el.style.cssText = vNode.style
  }
  container.appendChild(el)
}
render(Vnode, document.querySelector<HTMLElement>('#app')!)


export { render, createHTML }
export type {
  Vnode,
  PropsObject
}
