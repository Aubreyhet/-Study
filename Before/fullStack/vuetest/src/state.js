import Dep from "./observe/dep.js";
import { observe } from "./observe/index.js";
import Watcher, { nextTick } from './observe/watcher.js'


export function initState(vm) {
  const opts = vm.$options;
  if(opts.data) {
    initData(vm)
  }
  if(opts.computed) {
    initComputed(vm)
  }
  if(opts.watch){
    initWatch(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data // 可能是函数
  data = typeof data === 'function' ? data.call(this) : data
  // 对数据进行劫持
  // vue2使用
  vm._data = data
  observe(data)

  for(let key in data) {
    proxy(vm, '_data', key)
  }
}

function initComputed(vm) {
  let computed = vm.$options.computed
  let watchers = vm._computedWatchers = {}
  for(let key in computed) {
    let userDef = computed[key]
    let fn = typeof userDef === 'function' ? userDef : userDef.get
    // const setter = userDef.set || (() => {})
    watchers[key] = new Watcher(vm, fn, { lazy: true })
    defineComputed(vm, key, userDef)
  }
}

function defineComputed(target, key, userDef) {
  // const getter = typeof userDef === 'function' ? userDef : userDef.get
  const setter = userDef.set || (() => {})
  Object.defineProperty(target, key, {
    get: createComputedGetter(key),
    set: setter
  })
}

function proxy(vm, target, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[target][key]
    },
    set(newValue) {
      vm[target][key] = newValue
    }
  })
}

function createComputedGetter(key) {
  return function () {
    const watcher = this._computedWatchers[key]
    if(watcher.dirty) {
      watcher.evaluate()
    }
    if(Dep.target) {
      watcher.depend()
    }
    return watcher.value
  }
}


function initWatch(vm) {
  let watch = vm.$options.watch
  for(let key in watch) {
    const handel = watch[key]
    if(Array.isArray(handel)) {
      for(let i = 0; i < handel.length; i++ ){
        createWatcher(vm, key, handel[i])
      }
    }else {
      createWatcher(vm, key, handel)
    }
  }
}


function createWatcher(vm, key, handeler) {
  if(typeof handeler === 'string') {
    handeler = vm[handeler]
  }
  return vm.$watch(key, handeler)
}


export function initStateMixin(Vue) {

  Vue.prototype.$nextTick = nextTick

  Vue.prototype.$watch = function(exprOfFn, cb) {
    new Watcher(this, exprOfFn, {user:true}, cb)
  }

}
