//实例化vue对象
Vue.component('greeting',{
    template:
    `
    <p>{{name}}:大家好，我是被调用模板<button @click='changeName'>Change</button></p>
    `,
    data:function(){
        return {
            name:'Aubrey'
        }
    },
    methods:{
        changeName:function (){
            this.name = 'Song'
        }
    }
})
new Vue({
    el:'#vue-app-one',
});
new Vue({
    el:'#vue-app-two',
});
/**
 * el: element 需要获取的元素，一定是html中根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-inding:给属性绑定对应的值
 */
