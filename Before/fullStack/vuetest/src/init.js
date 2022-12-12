import { compileToFunction } from "./compiler/index.js"
import { callHook, mountComponent } from "./lifecycle.js"
import { initState } from "./state.js"
import { mergeOptions } from "./utils.js"
export function initMixin(Vue){
  Vue.prototype._init = function(options) {
    const vm = this
    vm.$options = mergeOptions(this.constructor.options, options) 
    
    callHook(vm, 'beforeCreate')
    initState(vm)
    callHook(vm, 'created')


    if(options.el) {
      vm.$mount(options.el) // 实现数据的挂载
    }
  }

  Vue.prototype.$mount = function(el) {
    const vm = this
    el = document.querySelector(el)
    let ops = vm.$options
    if(!ops.render) {
      let template
      if(!ops.template && el) {
        template = el.outerHTML
      } else {
        if(el) {
          template = ops.template
        }
      }
      if(template) {
        // 编译模板
        const render = compileToFunction(template)
        ops.render = render
      }
    }
    mountComponent(vm, el)
    // console.log(ops.render)
  }
}

