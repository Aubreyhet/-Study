(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  const strats = {};
  const LIFECYCLE = [
    'beforCreate',
    'created',
    'beforMount'
  ];

  LIFECYCLE.forEach(hook => {
    strats[hook] = function(p, c) {
      if(c) {
        if(p) {
          return p.concat(c)
        }else {
          return [c]
        }
      }else {
        return p
      }
    };
  });

  strats.components = function(parentVal, childVal) {
    const res = Object.create(parentVal);
    if(childVal) {
      for(let key in childVal) {
        res[key] = childVal[key];
      }
    }
    return res
  };


  function mergeOptions(parent, child) {
    let options = {};
    for(let key in parent){
      mergeField(key);
    }
    for(let key in child) {
      if(!parent.hasOwnProperty(key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      if(strats[key]) {
        options[key] = strats[key](parent[key], child[key]);
      } else {
        options[key] = child[key] || parent[key];
      }
    }
    return options
  }

  function initGlobalAPI(Vue) {
    Vue.options = {
      _base: Vue
    }; 
    Vue.mixin = function(mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
    Vue.extend = function(options) {
      function Sub(options = {}){
        this._init(options);
      }
      Sub.prototype = Object.create(Vue.prototype);
      Sub.prototype.constructor = Sub;
      Sub.options = mergeOptions(Vue.options, options);
      return Sub
    };
    Vue.options.components = {};
    Vue.component = function(id, definition) {
      definition = typeof definition === 'function' ? definition : Vue.extend(definition);
      Vue.options.components[id] = definition;
    };
  }

  // 正则匹配规则
  const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
  const qnameCapture = `((?:${ncname}\\:)?${ncname})`;

  const startTagOpen = new RegExp(`^<${qnameCapture}`);

  const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);

  const attrbute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>']+)))?/;

  const startTagClose = /^\s*(\/?)>/;

  function parseHTML(html) {
    const ELEMENT_TYPE = 1;
    const TEXT_TYPE = 3;
    const stack = [];
    let currentParent;
    let root;

    function createASTElement(tag, attrs) {
      return {
        tag,
        type: ELEMENT_TYPE,
        children: [],
        attrs,
        parent: null
      }
    }

    function start(tag, attrs) {
      let node = createASTElement(tag, attrs);
      if(!root) {
        root = node;
      }
      if(currentParent) {
        node.parent = currentParent;
        currentParent.children.push(node);
      }
      stack.push(node);
      currentParent = node;
    }
    function chars(text) {
      text = text.replace(/\s/g, '');
      text && currentParent.children.push({
        type: TEXT_TYPE,
        text,
        parent: currentParent
      });
    }
    function end(tag) {
      stack.pop();
      currentParent = stack[stack.length - 1];
    }

    function advance(n) {
      html = html.substring(n);
    }
    function parseStartTag() {
      const start = html.match(startTagOpen);
      if(start) {
        const match = {
          tagName: start[1], //标签名 
          attr: []
        };
        advance(start[0].length);
        let attr,end;
        while(!(end = html.match(startTagClose)) && (attr = html.match(attrbute))){
          advance(attr[0].length);
          match.attr.push({
            name: attr[1],
            value: attr[3] || attr[4] || attr[5] || true
          });
        }
        if(end){
          advance(end[0].length);
        }
        // console.log(match)
        return match
      }
      return false
    }
    while(html) {
      let textEnd = html.indexOf('<'); // 开始标签
      if(textEnd == 0) {
        const startTagMatch = parseStartTag();
        if(startTagMatch) {
          start(startTagMatch.tagName, startTagMatch.attr);
          continue
        }
        let endTagMatch = html.match(endTag);
        if(endTagMatch) {
          advance(endTagMatch[0].length);
          end(endTagMatch[1]);
          continue
        }
      }
      if(textEnd > 0) {
        let text = html.substring(0, textEnd);
         if(text) {
          chars(text);
          advance(text.length);
         }
      }
    }
    return root
  }

  function genProps(attrs) {
    let str = '';
    for(let i = 0; i < attrs.length; i++) {
      let attr = attrs[i];
      if(attr.name === 'style') {
        let obj = {};
        attr.value.split(';').forEach(item => {
          let [key, value] = item.split(':');
          obj[key] = value;
        });
        attr.value = obj;
      }
      str += `${attr.name}:${JSON.stringify(attr.value)},`;
    }
    return `{${str.slice(0, -1)}}`
  }

  const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // 处理表达式


  function gen(node) {
    if(node.type === 1) {
      return codegen(node)
    } else {
      let text = node.text;
      if(!defaultTagRE.test(text)) {
        return `_v(${JSON.stringify(text)})`
      } else {
        let tokens = [];
        let match;
        // console.log(text)
        defaultTagRE.lastIndex = 0;
        let lastIndex = 0;
        while(match = defaultTagRE.exec(text)) {
          let index = match.index;
          if(index > lastIndex) {
            tokens.push(JSON.stringify(text.slice(lastIndex, index)));
          }
          tokens.push(`_s(${match[1].trim()})`);
          lastIndex = index + match[0].length;
        }
        if(lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)));
        }
        // console.log(tokens)
        return `_v(${tokens.join('+')})`

      }
    }
  }

  function genChildren(children) {
    return children.map(child => gen(child)).join(',')
  } 

  function codegen(ast) {
    let children = genChildren(ast.children);
    let code = `_c('${ast.tag}',${ast.attrs.length > 0 ? genProps(ast.attrs) : 'null'}${ast.children.length ? `,${children}`:''})`;
    return code
  }

  function compileToFunction(template) {
    // 讲模板转换成ast语法树
    let ast = parseHTML(template);
    // 生成render函数
    let code = codegen(ast);
    code = `with(this){return ${code}}`;
    let render = new Function(code);
    return render
  }

  let id$1 = 0;

  class Dep{
    constructor() {
      this.id = id$1++;
      this.subs = [];
    }
    depend() {
      // this.subs.push(Dep.target)
      Dep.target.addDep(this);
    }
    addSub(watcher){
      this.subs.push(watcher);
    }
    notify() {
      this.subs.forEach(watcher => watcher.update());
    }
  }

  Dep.target = null;

  let stack = [];
  function pushTarget(watcher){
    stack.push(watcher);
    Dep.target = watcher;
  }
  function popTarget() {
    stack.pop();
    Dep.target = stack[stack.length - 1];
  }

  let id = 0;
  class Watcher{
    constructor(vm, fn, options, cb) {
      this.id = id++;
      this.renderWatcher = options;
      if(typeof fn === 'string') {
        this.getter = function() {
          return vm[fn]
        };
      }else {
        this.getter = fn;
      }
      this.deps = [];
      this.depsId = new Set();
      this.lazy = options.lazy;
      this.cb = cb;
      this.dirty = options.lazy;
      this.vm = vm;
      this.user = options.user;
      this.value = this.lazy ? undefined : this.get();

      // this.get()
    }
    addDep(dep) {
      let id = dep.id;
      if(!this.depsId.has(id)) {
        this.deps.push(dep);
        this.depsId.add(id);
        dep.addSub(this);
      }
    }
    evaluate() {
      this.value = this.get();
      this.dirty = false;
    }
    get() {
      // Dep.target = this
      pushTarget(this);
      let value = this.getter.call(this.vm);
      popTarget();
      // Dep.target = null
      return value
    }
    depend() {
      let i = this.deps.length;
      while(i--){
        this.deps[i].depend();
      }
    }
    update() {
      // this.get()
      if(this.lazy) {
        this.dirty = true;
      } else {
        queueWatcher(this);
      }
    }
    run() {
      let oldval = this.value;
      let newval = this.get();
      if(this.user){
        this.cb.call(this.vm, newval, oldval);
      }
    } 
  }



  let queue = [];
  let has = {};
  let pending = false;


  function flushSchedulerQueue() {
    let flushQueue = queue.slice(0);
    queue = [];
    has = {};
    pending = false;
    flushQueue.forEach(q => q.run());
  }


  function queueWatcher(watch) {
    const id = watch.id;
    if(!has[id]) {
      queue.push(watch);
      has[id] = true;
      if(!pending) {
        setTimeout(flushSchedulerQueue, 0);
        pending = true;
      }
    }
  }

  let callbacks = [];
  let waiting = false;
  function flushCallbacks() {
    let cbs = callbacks.slice(0);
    waiting = false;
    callbacks = [];
    cbs.forEach(cb => cb());
  }

  if(Promise) ;else if(MutationObserver) {
    let observer = new MutationObserver(flushCallbacks);
    let textNode = document.createTextNode(1);
    observer.observe(textNode, {
      characterData: true
    });
  }else if(setImmediate) ;else ;

  function nextTick(cb) {
    callbacks.push(cb);
    if(!waiting) {
      setTimeout(() => {
        flushCallbacks();
      }, 0);
      // timerFunc()
      waiting = true;
    }
  }

  // h() _c
  const isReservedTag = (tag) => {
    return [
      "html","body","base","head","link","meta","style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","nav","section","div","dd","dl","dt",
      "figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby",
      "s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins",
      "caption","col", "colgroup", "table", "thead", "tbody", "td", "th", "tr", "button", "datalist", "fieldset", "form", "input", "label", "legend", "meter", "optgroup",
      "option","output","progress","select","textarea","details","dialog","menu","menuitem","summary","content","element","shadow","template","blockquote","iframe","tfoot"
    ].includes(tag)
  };
  function createElementVNode(vm, tag, data, ...children) {
    if (data == null) {
      data = {};
    }
    let key = data.key;
    if (key) {
      delete data.key;
    }
    if(isReservedTag(tag)) {
      return vnode(vm, tag, key, data, children)
    } else {
      // console.log(tag)
      let Ctor = vm.$options.components[tag];
      createComponentVnode(vm, tag, key, data, children, Ctor);
    }
  }

  function createComponentVnode(vm, tag, key, data, children, Ctor) {
    if(typeof Ctor === 'object') {
      Ctor = vm.$options._base.extend(Ctor);
    }
    data.hook = {
      init() {

      }
    };
    return vnode(vm, tag, key, data, children, null, {Ctor})
  }
  // _v()
  function createTextVNode (vm, text) {
    return vnode(vm, undefined, undefined, undefined, undefined, text)
  }


  function vnode (vm, tag, key, data, children, text, components) {
    return {
      vm,
      tag,
      key,
      data,
      children,
      text,
      components
    }
  }

  function isSameVnode (vnode1, vnode2) {
    return vnode1.tag === vnode2.tag && vnode1.key === vnode2.key
  }

  function createElm(vnode) {
    let { tag, data, children, text} = vnode;
    if(typeof tag === 'string') {
      // 是标签就创建标签
      vnode.el = document.createElement(tag);
      patchProps(vnode.el, {}, data);
      children.forEach(child => {
        vnode.el.appendChild(createElm(child));
      });
    }else {
      vnode.el = document.createTextNode(text);
    }
    return vnode.el
  }

  function patchProps(el, oldprops = {}, props = {}) {
    let oldStyle = oldprops.style || {};
    let newStyle = props.style || {};
    for(let key in oldStyle) {
      if(!newStyle[key]){
        el.style[key] = '';
      }
    }
    for(let key in oldprops) {
      if(!props[key]) {
        el.removeAttribute(key);
      }
    }

    for(let key in props) {
      if(key === 'style') {
        for(let styleName in props.style) {
          el.style[styleName] = props.style[styleName];
        }
      }else {
        el.setAttribute(key, props[key]);
      }
    }
  }

  function patch(oldVNode, vnode) {
    const isRealElement = oldVNode.nodeType;
    if(isRealElement) {
      // 初始渲染页面
      const elm = oldVNode;
      const parentElm = elm.parentNode;
      // 产生的新元素
      const newElm = createElm(vnode);
      // 先添加新元素到旧元素的下一个元素前
      parentElm.insertBefore(newElm, elm.nextSibling);
      // 再删除掉旧元素
      parentElm.removeChild(elm);
      // console.log(newElm)
      return newElm
    }else {
      // diff算法
      return patchVnode(oldVNode, vnode)
    }
  }

  function patchVnode(oldVNode, vnode) {
    if(!isSameVnode(oldVNode, vnode)) {
      oldVNode.el.parentNode.replaceChild(createElm(vnode), oldVNode.el);
    }

    let el = vnode.el = oldVNode.el;
    if(!oldVNode.tag) {
      if(oldVNode.text !== vnode.text) {
        el.textContent = vnode.text;
      }
    }

    patchProps(el, oldVNode.data, vnode.data);

    // 比较儿子
    let oldChildren = oldVNode.children || [];
    let newChildren = vnode.children || [];

    if(oldChildren.length > 0 && newChildren.length > 0) {
      updateChildren(el, oldChildren, newChildren);
    }else if(newChildren.length > 0) {
      mountChildren(el);
    }else if(oldChildren.length > 0) {
      el.innerHTML = '';
    }

    return el
  }


  function mountChildren(newChildren) {
    for(let i = 0; i < newChildren.length; i++){
      let child = newChildren[i];
      el.appendChild(createElm(child));
    }
  }


  function updateChildren(el, oldChildren, newChildren) {
    let oldStartIndex = 0;
    let newStartIndex = 0;
    let oldEndIndex = oldChildren.length - 1;
    let newEndIndex = newChildren.length - 1;

    let oldStartVnode = oldChildren[0];
    let newStartVnode = newChildren[0];

    let oldEndVnode = oldChildren[oldEndIndex];
    let newEndVnode = newChildren[newEndIndex];

    function makeIndexByKey(children) {
      let map = {};
      children.forEach((child, index) => {
        map[child.key] = index;
      });
    }
    let map = makeIndexByKey(oldChildren);

    while(oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex){
      if(!oldStartVnode) {
        oldStartVnode = oldChildren[++oldStartIndex];
      } else if(!oldEndVnode){
        oldEndVnode = oldChildren[--oldEndIndex];
      } else if(isSameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode);
        oldStartVnode = oldChildren[++oldStartIndex];
        newStartVnode = newChildren[++newStartIndex];
      } else if(isSameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode);
        oldEndVnode = oldChildren[--oldEndIndex];
        newEndVnode = newChildren[--newEndIndex];
      } else if(isSameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode);
        el.insertBefore(oldEndVnode.el, oldStartVnode.el);
        oldEndVnode = oldChildren[--oldEndIndex];
        newStartVnode = newChildren[++newStartIndex];
      } else if(isSameVnode(oldStartVnode, newEndVnode)){
        patchVnode(oldStartVnode, newEndVnode);
        el.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling);
        oldStartVnode = oldChildren[++oldStartIndex];
        newEndVnode = newChildren[--newEndIndex];
      } else {
        let moveIndex = map[newStartVnode.key];
        if(moveIndex !== undefined) {
          let moveVnode = oldChildren[moveIndex];
          el.insertBefore(moveVnode.el, oldStartVnode.el);
          oldChildren[moveIndex] = undefined;
          patchVnode(moveVnode, newStartVnode);
        } else {
          el.insertBefore(createElm(newStartVnode), oldStartVnode.el);
        }
        newStartVnode = newChildren[++newStartIndex];
      }
      // 交叉比对
    }
    // 考虑新旧虚拟dom多余节点 新的多了就加上 旧的多了就删除
    if(newStartIndex <= newEndIndex) {
      for(let i = newStartIndex; i < newEndIndex; i++) {
        let chilEl = createElm(newChildren[i]);
        let anchor = newChildren[newEndIndex + 1] ? newChildren[newEndIndex + 1].el : null;
        el.insertBefore(chilEl, anchor);
      }
    }
    if(oldStartIndex < oldEndIndex) {
      for(let i = oldStartIndex; i <= oldEndIndex; i++) {
        if(oldChildren[i]) {
          let chilEl = oldChildren[i].el;
          el.removeChild(chilEl);
        }
      }
    }
  }

  function initLifecycle(Vue) {
    Vue.prototype._update = function(vnode) {
      const vm = this;
      const el = vm.$el;
      // console.log('update', vnode)
      // console.log(el, vnode)
      // 将虚拟dom 转换成真实dom patch既有初始化真实dom也有更新dom
      const prevVnode = vm._vnode;
      vm._vnode = vnode;
      if(prevVnode) {
        vm.$el = patch(prevVnode, vnode);
      } else {
        vm.$el = patch(el, vnode);
      }
    };
    Vue.prototype._c = function() {
      return createElementVNode(this, ...arguments)

    };
    Vue.prototype._v = function() {
      return createTextVNode(this, ...arguments)
    };
    Vue.prototype._s = function(value) {
      if(typeof value !== 'object') return value
      return JSON.stringify(value)
    };
    Vue.prototype._render = function() {
      return this.$options.render.call(this)
    };
  }

  function mountComponent(vm, el) {
    vm.$el = el;
    // 调用render函数 生成虚拟dom
    // 根据虚拟dom生成真实dom
    // 插入到el中
    const updateComponent = () => {
      vm._update(vm._render());
    };
    new Watcher(vm, updateComponent, true);
    // console.log(watcher)
  }

  function callHook(vm, hook) {
    const handlers = vm.$options[hook];
    if(handlers){
      handlers.forEach(handelr => handelr.call(vm));
    }
  }

  const oldArrayProto = Array.prototype;
  let newArrayProto = Object.create(oldArrayProto);

  let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice'
  ];

  methods.forEach(method => {
    newArrayProto[method] = function(...args) {
      const result = oldArrayProto[method].call(this, ...args);
      // 新增方法数据再次劫持
      let inserted;
      let ob = this.__ob__;
      switch(method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
      }
      if(inserted) {
        ob.observeArray(inserted);
      }

      ob.dep.notify();

      return result
    };
  });

  class Observe{
    constructor(data) {

      this.dep = new Dep();
      // 只能劫持已经存在的属性
      Object.defineProperty(data, '__ob__', {
        value: this,
        enumerable: false
      });
      if(Array.isArray(data)) {
        data.__proto__ = newArrayProto;
        this.observeArray(data);
      } else {
        this.walk(data);
      }

    }
    walk(data) {
      Object.keys(data).forEach(key => definReactive(data, key, data[key]));
    }
    observeArray(data) {
      data.forEach(item => observe(item));
    }
  }

  function dependArray(value) {
    for(let i =0; i < value.length; i++) {
      let current = value[i];
      current.__ob__ && current.__ob__.dep.depend();
      if(Array.isArray(current)) {
        dependArray(current);
      }
    }
  }

  function definReactive(target, key, value) {
    let childOb = observe(value); // childOb.dep 收集
    let dep = new Dep();
    Object.defineProperty(target, key, {
      get(){
        if(Dep.target) {
          dep.depend();
          if(childOb) {
            childOb.dep.depend();
            if(Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set(newValue){
        if(newValue === value) return 
        observe(newValue);
        value = newValue;
        dep.notify();
      }
    });
  }


  function observe(data) {
    if(typeof data !== 'object' || data == null) { return }
    if(data.__ob__ instanceof Observe) {
      return data.__ob__
    } 
    return new Observe(data)
  }

  function initState(vm) {
    const opts = vm.$options;
    if(opts.data) {
      initData(vm);
    }
    if(opts.computed) {
      initComputed(vm);
    }
    if(opts.watch){
      initWatch(vm);
    }
  }

  function initData(vm) {
    let data = vm.$options.data; // 可能是函数
    data = typeof data === 'function' ? data.call(this) : data;
    // 对数据进行劫持
    // vue2使用
    vm._data = data;
    observe(data);

    for(let key in data) {
      proxy(vm, '_data', key);
    }
  }

  function initComputed(vm) {
    let computed = vm.$options.computed;
    let watchers = vm._computedWatchers = {};
    for(let key in computed) {
      let userDef = computed[key];
      let fn = typeof userDef === 'function' ? userDef : userDef.get;
      // const setter = userDef.set || (() => {})
      watchers[key] = new Watcher(vm, fn, { lazy: true });
      defineComputed(vm, key, userDef);
    }
  }

  function defineComputed(target, key, userDef) {
    // const getter = typeof userDef === 'function' ? userDef : userDef.get
    const setter = userDef.set || (() => {});
    Object.defineProperty(target, key, {
      get: createComputedGetter(key),
      set: setter
    });
  }

  function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      get() {
        return vm[target][key]
      },
      set(newValue) {
        vm[target][key] = newValue;
      }
    });
  }

  function createComputedGetter(key) {
    return function () {
      const watcher = this._computedWatchers[key];
      if(watcher.dirty) {
        watcher.evaluate();
      }
      if(Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }


  function initWatch(vm) {
    let watch = vm.$options.watch;
    for(let key in watch) {
      const handel = watch[key];
      if(Array.isArray(handel)) {
        for(let i = 0; i < handel.length; i++ ){
          createWatcher(vm, key, handel[i]);
        }
      }else {
        createWatcher(vm, key, handel);
      }
    }
  }


  function createWatcher(vm, key, handeler) {
    if(typeof handeler === 'string') {
      handeler = vm[handeler];
    }
    return vm.$watch(key, handeler)
  }


  function initStateMixin(Vue) {

    Vue.prototype.$nextTick = nextTick;

    Vue.prototype.$watch = function(exprOfFn, cb) {
      new Watcher(this, exprOfFn, {user:true}, cb);
    };

  }

  function initMixin(Vue){
    Vue.prototype._init = function(options) {
      const vm = this;
      vm.$options = mergeOptions(this.constructor.options, options); 
      
      callHook(vm, 'beforeCreate');
      initState(vm);
      callHook(vm, 'created');


      if(options.el) {
        vm.$mount(options.el); // 实现数据的挂载
      }
    };

    Vue.prototype.$mount = function(el) {
      const vm = this;
      el = document.querySelector(el);
      let ops = vm.$options;
      if(!ops.render) {
        let template;
        if(!ops.template && el) {
          template = el.outerHTML;
        } else {
          if(el) {
            template = ops.template;
          }
        }
        if(template) {
          // 编译模板
          const render = compileToFunction(template);
          ops.render = render;
        }
      }
      mountComponent(vm, el);
      // console.log(ops.render)
    };
  }

  function Vue(options) {
    // 初始化
    this._init(options);
  }


  initMixin(Vue); // 扩展init方法

  initLifecycle(Vue); // vm._undate vm._render

  initGlobalAPI(Vue); // 全局api的实现

  initStateMixin(Vue); // 实现了nextTick $watch

  return Vue;

}));
//# sourceMappingURL=vue.js.map
