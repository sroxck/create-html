/*
 * @Author: sroxck
 * @Date: 2023-01-11 14:24:09
 * @LastEditors: sroxck
 * @LastEditTime: 2023-01-11 14:56:59
 * @Description: 
 */
import { render,createComponent } from "./create"
function createHTML(Vnode: Vnode, container: Element|string) {
  if(typeof container === "string"){
    container = document.querySelector(container)!
  }
  if (typeof Vnode.tag === 'string') {
    render(Vnode, container)
  } else if (typeof Vnode.tag === 'function') {
    createComponent(Vnode, container)

  }
}

export {
  createHTML
}
