import { createHTML } from "./index"

function createComponent(vNode: Vnode, container: Element) {
  if (typeof vNode.tag === 'function') {
    const subtree = vNode.tag()
    createHTML(subtree, container)
  }
}


function render(vNode: Vnode, container: Element) {
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
        render(item(),el)
      }else {
        render(item, el)
      }
    })
  }

  else if(typeof vNode.children === 'function'){
    console.log(vNode.children,el,'22')
    render(vNode.children(),el)
  }

  if(vNode.style){
    el.style.cssText = vNode.style
  }
  container.appendChild(el)
}
export {
  createComponent,
  render
}
