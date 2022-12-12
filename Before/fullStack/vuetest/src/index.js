import { initGlobalAPI } from './gloablAPI'
import { initMixin } from './init'
import { initLifecycle } from './lifecycle.js'
import { initStateMixin } from './state'

function Vue(options) {
  // 初始化
  this._init(options)
}


initMixin(Vue) // 扩展init方法

initLifecycle(Vue) // vm._undate vm._render

initGlobalAPI(Vue) // 全局api的实现

initStateMixin(Vue) // 实现了nextTick $watch

// 




export default Vue
