var app = new Vue({
    el: '#app',
    data: {
        names: ['aubrey', 'kobe', 'james', 'curry'],
        info: {
            name: 'aubrey',
            age: 22,
        },
        letters: ['f', 'A', 'B', 'C', 'D', 'E']
    },
    methods: {
        btnclick() {
            // 1.push方法可以做到数据响应式 可以一次接受多个数据
            // this.letters.push('aaa')

            //2.通过索引添加或者更改数据   数据不能响应式
            // this.letters[0] = 'bbbb' 

            // 3.pop() 方法 删除数组最后一个元素 可以做到数据响应式
            // this.letters.pop()。

            // 4.shift() 方法 删除数组第一个元素 可以做到数据响应式
            // this.letters.shift()

            // 5.unshift() 方法 在数组最前边添加一个元素 可以做到数据响应式 可以一次接受多个数据
            // this.letters.unshift('123')

            // 6.数组的 splice() 方法  删除元素 插入元素 替换元素
            // 第一个参数是从哪个元素开始的 
            // 如果是删除元素 第二个元素是 删除几个 不传参数会将后边的元素都删掉
            // 如果是替换元素 从第三个参数开始 传入新的元素
            // 如果是插入数据 第二个参数是0 从第三个参数开始传入要插入的数据
            // this.letters.splice(2, 0, 'l')

            // 7.sort() 方法 排序  数据可以响应式
            // this.letters.sort()

            // vue的set方法 set(要修改的数组对象，索引值，修改后的值)
            Vue.set(this.letters, 0, 'hhh')
        }
    }
})