import { isSameVnode } from "./index";

export function createElm(vnode) {
  let { tag, data, children, text} = vnode
  if(typeof tag === 'string') {
    // 是标签就创建标签
    vnode.el = document.createElement(tag)
    patchProps(vnode.el, {}, data)
    children.forEach(child => {
      vnode.el.appendChild(createElm(child))
    });
  }else {
    vnode.el = document.createTextNode(text)
  }
  return vnode.el
}

export function patchProps(el, oldprops = {}, props = {}) {
  let oldStyle = oldprops.style || {}
  let newStyle = props.style || {}
  for(let key in oldStyle) {
    if(!newStyle[key]){
      el.style[key] = ''
    }
  }
  for(let key in oldprops) {
    if(!props[key]) {
      el.removeAttribute(key)
    }
  }

  for(let key in props) {
    if(key === 'style') {
      for(let styleName in props.style) {
        el.style[styleName] = props.style[styleName]
      }
    }else {
      el.setAttribute(key, props[key])
    }
  }
}

export function patch(oldVNode, vnode) {
  const isRealElement = oldVNode.nodeType
  if(isRealElement) {
    // 初始渲染页面
    const elm = oldVNode
    const parentElm = elm.parentNode
    // 产生的新元素
    const newElm = createElm(vnode)
    // 先添加新元素到旧元素的下一个元素前
    parentElm.insertBefore(newElm, elm.nextSibling)
    // 再删除掉旧元素
    parentElm.removeChild(elm)
    // console.log(newElm)
    return newElm
  }else {
    // diff算法
    return patchVnode(oldVNode, vnode)
  }
}

function patchVnode(oldVNode, vnode) {
  if(!isSameVnode(oldVNode, vnode)) {
    oldVNode.el.parentNode.replaceChild(createElm(vnode), oldVNode.el)
  }

  let el = vnode.el = oldVNode.el
  if(!oldVNode.tag) {
    if(oldVNode.text !== vnode.text) {
      el.textContent = vnode.text
    }
  }

  patchProps(el, oldVNode.data, vnode.data)

  // 比较儿子
  let oldChildren = oldVNode.children || []
  let newChildren = vnode.children || []

  if(oldChildren.length > 0 && newChildren.length > 0) {
    updateChildren(el, oldChildren, newChildren)
  }else if(newChildren.length > 0) {
    mountChildren(el, newChildren)
  }else if(oldChildren.length > 0) {
    el.innerHTML = ''
  }

  return el
}


function mountChildren(newChildren) {
  for(let i = 0; i < newChildren.length; i++){
    let child = newChildren[i]
    el.appendChild(createElm(child))
  }
}


function updateChildren(el, oldChildren, newChildren) {
  let oldStartIndex = 0
  let newStartIndex = 0
  let oldEndIndex = oldChildren.length - 1
  let newEndIndex = newChildren.length - 1

  let oldStartVnode = oldChildren[0]
  let newStartVnode = newChildren[0]

  let oldEndVnode = oldChildren[oldEndIndex]
  let newEndVnode = newChildren[newEndIndex]

  function makeIndexByKey(children) {
    let map = {}
    children.forEach((child, index) => {
      map[child.key] = index
    })
  }
  let map = makeIndexByKey(oldChildren)

  while(oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex){
    if(!oldStartVnode) {
      oldStartVnode = oldChildren[++oldStartIndex]
    } else if(!oldEndVnode){
      oldEndVnode = oldChildren[--oldEndIndex]
    } else if(isSameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldChildren[++oldStartIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if(isSameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldChildren[--oldEndIndex]
      newEndVnode = newChildren[--newEndIndex]
    } else if(isSameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      el.insertBefore(oldEndVnode.el, oldStartVnode.el)
      oldEndVnode = oldChildren[--oldEndIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if(isSameVnode(oldStartVnode, newEndVnode)){
      patchVnode(oldStartVnode, newEndVnode)
      el.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling)
      oldStartVnode = oldChildren[++oldStartIndex]
      newEndVnode = newChildren[--newEndIndex]
    } else {
      let moveIndex = map[newStartVnode.key]
      if(moveIndex !== undefined) {
        let moveVnode = oldChildren[moveIndex]
        el.insertBefore(moveVnode.el, oldStartVnode.el)
        oldChildren[moveIndex] = undefined
        patchVnode(moveVnode, newStartVnode)
      } else {
        el.insertBefore(createElm(newStartVnode), oldStartVnode.el)
      }
      newStartVnode = newChildren[++newStartIndex]
    }
    // 交叉比对
  }
  // 考虑新旧虚拟dom多余节点 新的多了就加上 旧的多了就删除
  if(newStartIndex <= newEndIndex) {
    for(let i = newStartIndex; i < newEndIndex; i++) {
      let chilEl = createElm(newChildren[i])
      let anchor = newChildren[newEndIndex + 1] ? newChildren[newEndIndex + 1].el : null;
      el.insertBefore(chilEl, anchor)
    }
  }
  if(oldStartIndex < oldEndIndex) {
    for(let i = oldStartIndex; i <= oldEndIndex; i++) {
      if(oldChildren[i]) {
        let chilEl = oldChildren[i].el
        el.removeChild(chilEl)
      }
    }
  }
}

