// 定义一个栈操作对象
function Stack() {
  // 栈中的属性
  this.items = []
  // 栈中的操作
  // 1.在栈顶压入一个元素
  Stack.prototype.push = function (item) {
    this.items.push(item)
  }
  // 2.弹出栈顶的元素
  Stack.prototype.pop = () => {
    return this.items.pop()
  }
  // 3.查看栈顶的元素
  // 4.查看栈是否为空
  // 5.查看栈的大小
  // 6.toString方法

}