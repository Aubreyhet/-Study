import Dep, { popTarget, pushTarget } from "./dep"

let id = 0
class Watcher{
  constructor(vm, fn, options, cb) {
    this.id = id++
    this.renderWatcher = options
    if(typeof fn === 'string') {
      this.getter = function() {
        return vm[fn]
      }
    }else {
      this.getter = fn
    }
    this.deps = []
    this.depsId = new Set()
    this.lazy = options.lazy
    this.cb = cb
    this.dirty = options.lazy
    this.vm = vm
    this.user = options.user
    this.value = this.lazy ? undefined : this.get()

    // this.get()
  }
  addDep(dep) {
    let id = dep.id
    if(!this.depsId.has(id)) {
      this.deps.push(dep)
      this.depsId.add(id)
      dep.addSub(this)
    }
  }
  evaluate() {
    this.value = this.get()
    this.dirty = false
  }
  get() {
    // Dep.target = this
    pushTarget(this)
    let value = this.getter.call(this.vm)
    popTarget()
    // Dep.target = null
    return value
  }
  depend() {
    let i = this.deps.length
    while(i--){
      this.deps[i].depend()
    }
  }
  update() {
    // this.get()
    if(this.lazy) {
      this.dirty = true
    } else {
      queueWatcher(this)
    }
  }
  run() {
    let oldval = this.value
    let newval = this.get()
    if(this.user){
      this.cb.call(this.vm, newval, oldval)
    }
  } 
}



let queue = []
let has = {}
let pending = false


function flushSchedulerQueue() {
  let flushQueue = queue.slice(0)
  queue = []
  has = {}
  pending = false
  flushQueue.forEach(q => q.run())
}


function queueWatcher(watch) {
  const id = watch.id
  if(!has[id]) {
    queue.push(watch)
    has[id] = true
    if(!pending) {
      setTimeout(flushSchedulerQueue, 0)
      pending = true
    }
  }
}

let callbacks = []
let waiting = false
function flushCallbacks() {
  let cbs = callbacks.slice(0)
  waiting = false
  callbacks = []
  cbs.forEach(cb => cb())
}

let timerFunc

if(Promise) {
  timerFunc = () => {
    Promise.resolve().then(flushCallbacks)
  }
}else if(MutationObserver) {
  let observer = new MutationObserver(flushCallbacks)
  let textNode = document.createTextNode(1)
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    textNode.textContent = 2
  }
}else if(setImmediate) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
}else {
  timerFunc = () => {
    setTimeout(flushCallbacks)
  }
}

export function nextTick(cb) {
  callbacks.push(cb)
  if(!waiting) {
    setTimeout(() => {
      flushCallbacks()
    }, 0)
    // timerFunc()
    waiting = true
  }
}

export default Watcher
