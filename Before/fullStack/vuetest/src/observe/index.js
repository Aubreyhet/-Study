import { newArrayProto } from "./array"
import Dep from "./dep"

class Observe{
  constructor(data) {

    this.dep = new Dep()
    // 只能劫持已经存在的属性
    Object.defineProperty(data, '__ob__', {
      value: this,
      enumerable: false
    })
    if(Array.isArray(data)) {
      data.__proto__ = newArrayProto
      this.observeArray(data)
    } else {
      this.walk(data)
    }

  }
  walk(data) {
    Object.keys(data).forEach(key => definReactive(data, key, data[key]))
  }
  observeArray(data) {
    data.forEach(item => observe(item))
  }
}

function dependArray(value) {
  for(let i =0; i < value.length; i++) {
    let current = value[i]
    current.__ob__ && current.__ob__.dep.depend()
    if(Array.isArray(current)) {
      dependArray(current)
    }
  }
}

export function definReactive(target, key, value) {
  let childOb = observe(value) // childOb.dep 收集
  let dep = new Dep()
  Object.defineProperty(target, key, {
    get(){
      if(Dep.target) {
        dep.depend()
        if(childOb) {
          childOb.dep.depend()
          if(Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set(newValue){
      if(newValue === value) return 
      observe(newValue)
      value = newValue
      dep.notify()
    }
  })
}


export function observe(data) {
  if(typeof data !== 'object' || data == null) { return }
  if(data.__ob__ instanceof Observe) {
    return data.__ob__
  } 
  return new Observe(data)
}
