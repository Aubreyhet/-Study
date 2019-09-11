//实例化vue对象
var one = new Vue({
    el:'#vue-app-one',
    data:{
        title:'app one里边的内容'
    },
    methods:{
        
    },
    computed:{
        greet:function(){
            return 'hello app one'
        }
    }
});
var two = new Vue({
    el:'#vue-app-two',
    data:{
        title:'app two里边的内容'        
    },
    methods:{
        changeTitle: function(){
            one.title = '已经改名了'
        }
    },
    computed:{
        greet:function(){
            return 'hello app two'
        }
    }
});
two.title = '2也被改变'
/**
 * el: element 需要获取的元素，一定是html中根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-inding:给属性绑定对应的值
 */
