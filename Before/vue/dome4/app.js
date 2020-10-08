const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        less(index) {
            // if (this.books[index].count == 1) {
            //     alert('已经是最小数据了')
            // } else {
            //     this.books[index].count--
            // }
            this.books[index].count--
        },
        add(index) {
            this.books[index].count++
        },
        remove(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            // 1.普通for循环
            // let sum = 0
            // for (let i = 0; i < this.books.length; i++) {
            //     sum += this.books[i].price * this.books[i].count
            // }
            // return sum

            // 2.for in 循环
            // let sum = 0
            // for (const i in this.books) {
            //     sum += this.books[i].price * this.books[i].count
            // }
            // return sum

            // 3.for of 循环
            let sum = 0
            for (const item of this.books) {
                sum += item.price * item.count
            }
            return sum

            // 4.reduce 高阶函数
        }
    },
    filters: {
        fullPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})