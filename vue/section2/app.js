//实例化vue对象
new Vue({
    el:'#vue-app',
    data:{
        age:'',
        name:'',
        a:0,
        b:0,
        sum:20,
        changeColor: false,
        changeLength: false
    },
    methods:{
        // logName:function(){
        //    this.name = this.$refs.name.value;
        // },
        // logAge:function(){
        //    this.age = this.$refs.age.value;
        // },
        // addToA:function(){
        //     return this.a + this.sum
        // },
        // addToB:function(){
        //     return this.b + this.sum
        // }
    },
    computed:{
        addToA:function(){
            return this.a + this.sum
        },
        addToB:function(){
            return this.b + this.sum
        },
        compClasses:function(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});


