//实例化vue对象
new Vue({
    el: '#app',
    data: {
        fristName: 'kobe',
        lastName: 'Bryant'
    },
    methods: {
    },
    computed: {
        // fullName: {
        //     get: function () {
        //         return this.fristName + " " + this.lastName
        //     }
        // }
        fullName: function () {
            return this.fristName + " " + this.lastName
        }

    }
});
