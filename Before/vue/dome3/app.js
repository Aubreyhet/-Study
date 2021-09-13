var app = new Vue({
    el: '#app',
    data: {
        list: ['写代码', '睡觉', '玩耍'],
        inputValue: ''
    },
    methods: {
        add: function () {
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        remove: function (index) {
            this.list.splice(index, 1)
        },
        clear: function () {
            this.list = []
        }
    }
})