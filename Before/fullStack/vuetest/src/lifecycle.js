import Watcher from './observe/watcher.js';
import { createElementVNode, createTextVNode} from './vdom/index.js'
import { patch } from './vdom/patch.js';

export function initLifecycle(Vue) {
  Vue.prototype._update = function(vnode) {
    const vm = this
    const el = vm.$el
    // console.log('update', vnode)
    // console.log(el, vnode)
    // 将虚拟dom 转换成真实dom patch既有初始化真实dom也有更新dom
    const prevVnode = vm._vnode
    vm._vnode = vnode
    if(prevVnode) {
      vm.$el = patch(prevVnode, vnode)
    } else {
      vm.$el = patch(el, vnode)
    }
  }
  Vue.prototype._c = function() {
    return createElementVNode(this, ...arguments)

  }
  Vue.prototype._v = function() {
    return createTextVNode(this, ...arguments)
  }
  Vue.prototype._s = function(value) {
    if(typeof value !== 'object') return value
    return JSON.stringify(value)
  }
  Vue.prototype._render = function() {
    return this.$options.render.call(this)
  }
}

export function mountComponent(vm, el) {
  vm.$el = el
  // 调用render函数 生成虚拟dom
  // 根据虚拟dom生成真实dom
  // 插入到el中
  const updateComponent = () => {
    vm._update(vm._render())
  }
  const watcher = new Watcher(vm, updateComponent, true)
  // console.log(watcher)
}

export function callHook(vm, hook) {
  const handlers = vm.$options[hook]
  if(handlers){
    handlers.forEach(handelr => handelr.call(vm))
  }
}
