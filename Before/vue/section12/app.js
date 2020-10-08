// 组件化
// 1.创建第一个组件构造器
const cpnC1 = Vue.extend({
    template: `<div>
    <h2>这个是标题1</h2>
    <p>这个是正文，哈哈哈</p>
    </div>`,
    components: {

    }
})
const cpnC2 = Vue.extend({
    template: `<div>
    <h2>这个是标题2</h2>
    <p>这个是正文，hehe</p>
    </div>`

})
// 3.使用组件
const app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        // 2.注册组件  这里注册的组件是局部组件
        cpn: cpnC
    },
    methods: {

    }
})

const app2 = new Vue({
    el: 'app2'
})