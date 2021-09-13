//实例化vue对象
new Vue({
    el:'#vue-app',
    data:{
        health: 100,
        ended: false
    },
    methods:{
        punch:function(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart:function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{

    }
});

/**
 * el: element 需要获取的元素，一定是html中根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-inding:给属性绑定对应的值
 */
