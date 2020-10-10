// 组件化
// 1.创建第一个组件构造器
const cpnC1 = Vue.extend({
    template: `<div>
    <h2>这个是标题1</h2>
    <p>这个是正文，哈哈哈</p>
    </div>`
})
// 创建第二个组件 相对于cpn1是父组件
const cpnC2 = Vue.extend({
    template: `<div>
    <h2>这个是标题2</h2>
    <p>这个是正文，hehe</p>
    <cpn1></cpn1>
    </div>`,
    components: {
        // 注册局部子组件
        cpn1: cpnC1
    }

})
// 3.使用组件
const app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        // 2.注册组件  这里注册的组件是局部组件
        cpn2: cpnC2
    },
    methods: {

    }
})
