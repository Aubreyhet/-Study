//实例化vue对象
new Vue({
    el:'#vue-app',
    data:{
        age: 30,
        name:'Aubrey',
        job:'前端开发',
        website:'http://www.baidu.com',
        websiteTag:'<a herf="http://www.baidu.com">Auberyhet</a>',
        X: 0,
        Y: 0
    },
    methods:{
        greet: function(time){
            return `Good ${time} ${this.name}!`
        },
        add: function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        updateXY:function(){
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        stopMoving:function(){
            event.stopPropagation();
        },
        alert:function(){
            alert('hello')
        },
        logName:function(){
            console.log('你正在输入你的名字');
        },
        logAge:function(){
            console.log('你正在输入你的年龄')
        }
    }
});

/**
 * el: element 需要获取的元素，一定是html中根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-inding:给属性绑定对应的值
 */
