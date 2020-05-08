//实例化对象
new Vue({
    el: '#vue-app',
    data() {
        return {
            name: 'Aubrey',
            age: 23,
            x: 0,
            y: 0,
            value: '',
            myChangeColor: 'false',
            purpose: 'http://www.baidu.com',
            webseitTag: `<a href='http://www.taobao.com'>taobao</a>`
        };
    },
    methods: {
        // greet: function () {
        //     return 'good night ' + this.name;
        // }
        greet(time) {
            return `Good ${time} ${this.name}`;
        },
        haveLunch() {
            return '你吃饭了吗！';
        },
        add(a) {
            this.age += a;
        },
        less(i) {
            this.age -= i;
        },
        updataXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handleClick() {
            alert(1);
        },
        logName() {
            console.log('正在输入姓名...');
        },
        logAge() {
            console.log('正在输入年龄...');
        },
        getName() {
            this.value = this.$refs.value.value;
            // console.log(this.$refs)
        }
    },
    // 计算属性

})