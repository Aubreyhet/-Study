// 组件化
// 1.创建组件构造器
const cpnC = Vue.extend({
    template: `<div>
    <h2>这个是标题</h2>
    <p>这个是正文</p>
    </div>`
})
// 2.注册组件
Vue.component('cpn', cpnC)
// 3.使用组件
const app = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    }
})