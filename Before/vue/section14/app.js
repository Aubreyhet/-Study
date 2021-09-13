// 父组件向子组件传值 通过props
const cpn = {
    template: '#cpn',
    data() {
        return {
            title: '这个是标题'
        }
    },
    // props: ['cname']
    props: {
        // 使用对象的方式可以对传入的属性进行数据类型限制
        // cname: Array
        // 提供默认值
        cName: {
            type: Array,
            // 当没有传值的时候 设置默认值(工场模式)
            default() {
                return []
            },
            // 是否必须传值
            required: true
        }
    }
}
const app = new Vue({
    el: '#app',
    data: {
        names: ['aubrey', 'kobe', 'james', 'curry']
    },
    components: {
        cpn
    },
    methods: {

    }
})
