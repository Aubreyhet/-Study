// h() _c
const isReservedTag = (tag) => {
  return [
    "html","body","base","head","link","meta","style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","nav","section","div","dd","dl","dt",
    "figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby",
    "s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins",
    "caption","col", "colgroup", "table", "thead", "tbody", "td", "th", "tr", "button", "datalist", "fieldset", "form", "input", "label", "legend", "meter", "optgroup",
    "option","output","progress","select","textarea","details","dialog","menu","menuitem","summary","content","element","shadow","template","blockquote","iframe","tfoot"
  ].includes(tag)
}
export function createElementVNode(vm, tag, data, ...children) {
  if (data == null) {
    data = {}
  }
  let key = data.key
  if (key) {
    delete data.key
  }
  if(isReservedTag(tag)) {
    return vnode(vm, tag, key, data, children)
  } else {
    // console.log(tag)
    let Ctor = vm.$options.components[tag]
    createComponentVnode(vm, tag, key, data, children, Ctor)
  }
}

function createComponentVnode(vm, tag, key, data, children, Ctor) {
  if(typeof Ctor === 'object') {
    Ctor = vm.$options._base.extend(Ctor)
  }
  data.hook = {
    init() {

    }
  }
  return vnode(vm, tag, key, data, children, null, {Ctor})
}
// _v()
export function createTextVNode (vm, text) {
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

export function isSameVnode (vnode1, vnode2) {
  return vnode1.tag === vnode2.tag && vnode1.key === vnode2.key
}
