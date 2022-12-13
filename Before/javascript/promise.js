
function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  this.callbacks = []

  // 保存实例对象的this
  const self = this

  function resolve(data) {
    // 判断状态值是否向下执行
    if(self.PromiseState !== 'pending') return
    // 修改对象的状态  promiseState
    self.PromiseState = 'fulfilled'
    // 设置对象值 promiseResult
    self.PromiseResult = data
    // 调用成功回调
    // if(self.callback.onResolved) {
    //   self.callback.onResolved(data)
    // } 
    setTimeout(() => {
      self.callbacks.forEach(cb => {
        cb.onResolved(data)
      })
    })
  }
  function reject(data) {
    if(self.PromiseState !== 'pending') return
    // 修改对象的状态  promiseState
    self.PromiseState = 'rejected'
    // 设置对象值 promiseResult
    self.PromiseResult = data

    // if(self.callback.onRejected) {
    //   self.callback.onRejected(data)
    // } 
    setTimeout(() => {
      self.callbacks.forEach(cb => {
        cb.onRejected(data)
      })
    })
  }
  try {
    // 同步调用执行器函数
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
Promise.prototype.then = function (onResolved, onRejected) {
  let self = this
  if(typeof onRejected !== 'function') {
    onRejected = reason => {
      throw reason
    }
  }
  if(typeof onResolved !== 'function') {
    onResolved = value => value
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        let result = type(self.PromiseResult)
        if(result instanceof Promise) {
          result.then(v => {
            resolve(v)
          },r => {
            reject(r)
          })
        } else {
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }
    if(this.PromiseState === 'fulfilled') {
      setTimeout(() => {
        callback(onResolved)
      })
    }
    if(this.PromiseState === 'rejected') {
      setTimeout(() => {
        callback(onRejected)
      })
    }

    if(this.PromiseState === 'pending') {
      // 保存回调函数 方便
      this.callbacks.push({
        onResolved: function() {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      })
    }  
  })
}

// 异常穿透
Promise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}


Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    if(value instanceof Promise) {
      value.then(v => {
        resolve(v)
      }, e => {
        reject(e)
      })
    } else {
      resolve(value)
    }
  })
}

Promise.reject = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let arr = []
    for(let i = 0; i < promises.length; i++) {
      promises[i].then(
        v => {
          count++
          arr[i] = v
          if(arr.length === promises.length) {
            resolve(arr)
          }
        },
        e => {
          reject(e)
        }
      )
    }
  })
}

Promise.race = function(promises) {
 return new Promise((resolve, reject) => {
  for(let i = 0; i < promises.length; i++) {
    promises[i].then(v => {
      resolve(v)
    }, e => {
      reject(e)
    })
  }
 }) 
}

class Covenant{
  constructor(executor){
        // 添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callbacks = []

    // 保存实例对象的this
    const self = this

    function resolve(data) {
      // 判断状态值是否向下执行
      if(self.PromiseState !== 'pending') return
      // 修改对象的状态  promiseState
      self.PromiseState = 'fulfilled'
      // 设置对象值 promiseResult
      self.PromiseResult = data
      // 调用成功回调
      // if(self.callback.onResolved) {
      //   self.callback.onResolved(data)
      // } 
      setTimeout(() => {
        self.callbacks.forEach(cb => {
          cb.onResolved(data)
        })
      })
    }
    function reject(data) {
      if(self.PromiseState !== 'pending') return
      // 修改对象的状态  promiseState
      self.PromiseState = 'rejected'
      // 设置对象值 promiseResult
      self.PromiseResult = data

      // if(self.callback.onRejected) {
      //   self.callback.onRejected(data)
      // } 
      setTimeout(() => {
        self.callbacks.forEach(cb => {
          cb.onRejected(data)
        })
      })
    }
    try {
      // 同步调用执行器函数
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onResolved, onRejected) {
    let self = this
    if(typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }
    if(typeof onResolved !== 'function') {
      onResolved = value => value
    }
    return new Covenant((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.PromiseResult)
          if(result instanceof Covenant) {
            result.then(v => {
              resolve(v)
            },r => {
              reject(r)
            })
          } else {
            resolve(result)
          }
        } catch (e) {
          reject(e)
        }
      }
      if(this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      if(this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
      }
  
      if(this.PromiseState === 'pending') {
        // 保存回调函数 方便
        this.callbacks.push({
          onResolved: function() {
            callback(onResolved)
          },
          onRejected: function () {
            callback(onRejected)
          }
        })
      }  
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
    return new Covenant((resolve, reject) => {
      if(value instanceof Covenant) {
        value.then(v => {
          resolve(v)
        }, e => {
          reject(e)
        })
      } else {
        resolve(value)
      }
    })
  }

  static reject(reason) {
    return new Covenant((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new Covenant((resolve, reject) => {
      let count = 0
      let arr = []
      for(let i = 0; i < promises.length; i++) {
        promises[i].then(
          v => {
            count++
            arr[i] = v
            if(arr.length === promises.length) {
              resolve(arr)
            }
          },
          e => {
            reject(e)
          }
        )
      }
    })
  }

  static race(promises) {
    return new Covenant((resolve, reject) => {
     for(let i = 0; i < promises.length; i++) {
       promises[i].then(v => {
         resolve(v)
       }, e => {
         reject(e)
       })
     }
    }) 
   }
}

