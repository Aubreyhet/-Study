var app = new Vue({
    el: '#app',
    data: {
        movies: ['夺冠', '花木兰', '我和我的祖国', '信条', '八佰'],
        currentIndex: 0
    },
    methods: {
        liClick(index) {
            this.currentIndex = index
        }
    }
})