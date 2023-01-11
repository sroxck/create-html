/*
 * @Author: sroxck
 * @Date: 2023-01-11 14:25:09
 * @LastEditors: sroxck
 * @LastEditTime: 2023-01-11 14:25:58
 * @Description: 
 */
type PropsObject = {
  [key: string]: any
  onClick?: () => any,
}

interface Vnode {
  tag: string | Function;
  props?: PropsObject;
  children?: string | Array<Vnode | string| Function> |Function;
  style?:string;
  class?:string
}
