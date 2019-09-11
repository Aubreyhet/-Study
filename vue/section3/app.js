//实例化vue对象
new Vue({
    el:'#vue-app',
    data:{
        error:false,
        success:false,
        characters:['mario','luffy','yoshi'],
        users:[
            {name:'aubrey',age:22},
            {name:'Song',age:20},
            {name:'dog',age:18}
        ]
    },
    methods:{
        
    }
});

/**
 * el: element 需要获取的元素，一定是html中根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-inding:给属性绑定对应的值
 */
