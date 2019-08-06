// document.write("你好");
// document.write(7);
// document.write(8);


// alert('hello');
// alert('2');


// console.log(123);


//输入语句
// prompt('请输入你的年龄');


//  单行注释
/* 多行

  注释*/

//使用转义符输出特殊符号
// console.log('hello \' world');  //hello ' world

// console.log('hello \nworld'); // \n  输出换行


// console.log(undefined);
//  undefined

//输出对象
//对象书写
// console.log({
//     name:'aubrey',
//     oge: 24,
//     gender: '男',
//     isStu: false,
//     address: {
//         country:'中国',
//         province:'上海',
//         postCode: 20000,
//     }
// });


//查看数据类型  typeof
// console.log(typeof 123);
//      number
// console.log(typeof true);
//      boolean
// console.log(typeof null);
//      object   js的特征
 

//声明变量
// var pid;
// console.log(pid);
// console.log(typeof pid);
//只是声明 没有赋值 ，目前变量为undefined


// 变量的赋值
// var pid;
// pid = '12345678';
// console.log(typeof pid);  //string
// pid = true;
// console.log(typeof pid);  //布尔
//变量可以重新赋值 新的值覆盖旧的值


//变量声明赋值
// var num = 123;

//将变量的a的数据复制到变量b
// var a = 23;
// var b = a;
// console.log(b);
//  23


// var user = {
//   account: 'abc',
//   pwd: '123456',
//   gender: '男',
//   age: 24,
// };
// console.log(user);
// console.log(user.gender);

//更改属性的值
// var user = {
//   account: 'abc',
//   pwd: '123456',
//   gender: '男',
//   age: 24,
// };
// user.pwd = '54321';
// user.height = 180;  //相当于添加属性
// console.log(user);


//undefined，null不能设置属性，
// var user2;
// user2.password = '12345';
// console.log(user2);


// var user = {
//     name:'aubrey',
//     oge: 24,
//     gender: '男',
//     isStu: false,
//     address: {
//         country:'中国',
//         province:'上海',
//         postCode: 20000,
//     }
// };
// console.log(user.address.province);
//   上海

// var user2 = {
//   account: user.address.province
// }
// console.log(user2.account);
//  上海


//删除属性
// var user = {
//     name:'aubrey',
//     oge: 24,
//     gender: '男',
//     isStu: false,
//     address: {
//         country:'中国',
//         province:'上海',
//         postCode: 20000,
//     }
// };
// delete user.age;   // user.age = undefined;
// console.log(user.age);
// //     undefined;


//使用属性表达式读取属性
// var user = {
//       name:'aubrey',
//       oge: 24,
//       gender: '男',
//       isStu: false,
//       address: {
//           country:'中国',
//           province:'上海',
//           postCode: 20000,
//       }
//   };
// console.log(user['gender']);
//       男


// var user = {
//       name:'aubrey',
//       oge: 24,
//       gender: '男',
//       isStu: false,
//       address: {
//           country:'中国',
//           province:'上海',
//           postCode: 20000,
//       }
//   };
// var prop = 'isStu';
// console.log(user[prop]);
// //       false


//在浏览器环境下 name是属于window对象的属性的  所有下边的name变量会当做字符串
// var name;
// console.log(name);
// console.log(typeof name);


// var obj1 = {
//   num: 123,
// };
// var obj2 = obj1;   //obj1和obj2指向同一个内存地址空间
// obj2.num = 456;
// console.log(obj1.num, obj2.num);
// //   456  456

// var obj1 = {
//   num: 123,
//   age: 24,
// };
// var obj2 = obj1;
// obj2 = {
//   num: 456
// }
// console.log(obj1.num, obj2.num,obj2.age);
// //     123   456   undefined


//设施温度转华氏温度 
// var C = 36;
// var f = 9 / 5 * C + 32;
// console.log(f);

//计算利息
// var money = 10000, month = 12, rate = 3.6;
// var earnMoney = money * rate / 100 / 12 * month;
// console.log(earnMoney);


//自增自减
// var a = 0;
// a = a + 1;
// console.log(a);
// a++;
// console.log(a);
// a--;
// console.log(a);


// var x = 0;
// // console.log(x++);   //0
// // console.log(++x);   //2
// var y = x++ + 1;
// console.log(y);       //1
//  var x = 1;
//  var y = x + x++ * ++x;
//  console.log(y);    //4

// var x = 1;
// var y = x + x * x / 2;
// console.log(y);   //1.5

// var x = 1;
// var y = x++ + ++x + x++ * ++x + ++x;
// console.log(y);  //25

// var x = 1;
// var y = x + x++ * (x = x + x++ * ++x) + x;
// console.log(y);  //21

// x = 10
// y = 1+1*10+10
// 21?

// console.log(null !== undefined);

// var x = 1;
// console.log(x > 2 && x++ > 0);
// console.log(x);
//   false 
//   1

// var x = 45;
// console.log(x>=60);


//三目运算符计算是否为闰年  以及2月天数
// var y = 2100;
// var isLeap = y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
// var days = isLeap ? 29 : 28;
// console.log(`二月的天数为${days}天`);


// var x = 1;
// x = x++ >= 1 ? x++ * x++ : ++x * ++x;
// console.log(x);
//     6

//模板字符串
// var user = {
//   name: 'aubrey',
//   gender: '男',
//   age: 24
// }
// var say = `我的名字是${user.name},今年${user.age}岁。`;
// console.log(say);

// var x = '1';
// var y = x * 2;
// console.log(y);             //2
// console.log(x, typeof x);   //"1" string


// var score = 100;
// if(score < 60){
//   console.log('加油')
// }else if(score >= 60 && score < 80){
//   console.log('合格')
// }else{
//   console.log('优秀！')
// }


//用户输入内容 ，如果用户点击取消，，就显示取消，如果输入内容就弹出内容以及内容数据类型
// var x = prompt();
// if(x == null){
//   alert('取消成功！')
// }else{
//   x = +x;
//   if(isNaN(x)){
//     alert("转换失败！输入有误！")
//   }else{
//     alert(x + ': ' + typeof x)
//   }
// }



//提示用户输入一个三位数，若不是三位数则提示用户输入有误，如果输入的为三位数则判断是否能被13整除
// var x = +prompt('请输入了个三位数：')
// if(isNaN(x) || x < 100 || x > 999){
//   alert('请输入正确的内容！')
// }else{
//   x % 13 === 0 ? alert(x + '能被13整除！') : alert(x + '不能被13整除！')  
// }


//输入成绩判断 成绩在哪一阶段
// var x = +prompt('请输入你的成绩：');
// if(x == null || isNaN(x)){
//   alert('请输入数字')
// }else{
//   if(x >= 0 && x <= 100){
//     if(x < 60){
//       alert('C')
//     }else if(x < 80){
//       alert('B')
//     }else{
//       alert('A')
//     }
//   }else{
//     alert('请输入0 - 100 的数字！')
//    }
// }


//标准体重计算
// var gender = prompt('请输入性别：');
// var height = +prompt('请输入身高：');
// var weight = +prompt('请输入体重：');
// if(gender != '男' && gender != '女' || isNaN(height) || isNaN(weight)){
//   alert('输入有误');
// }else{
//   var differ;
//   if(gender === '女'){
//     differ = (height - 80) * 0.7;
//   }else{
//     differ = (height - 70) * 0.6;
//   }
//   if(weight > differ * 1.1){
//     alert('偏重')
//   }else if(weight < differ * 0.9){
//     alert('偏重')
//   }else{
//     alert('完美')
//   } 
// }

//计算理财情况
// var yeras = +prompt('请输入存入年限：');
// var money = +prompt('请输入存入金额（万元）：');
// if(isNaN(yeras) || isNaN(money)){
//   alert('输入有误');
// }else{
//   var rate = 0.04;
//   if(money > 50){
//     rate = 0.45;
//   }
//   var balance = money * yeras * rate;
//   if(balance > 200){
//     balance += balance * 0.1
//   }
//   alert(balance)
// }


//猜拳
// var fist = prompt('请出拳（剪刀，石头，布）');
// if(fist === '剪刀' || fist === '石头' || fist === '布'){
//   var rand = Math.random();
//   var pcFise;
//   if(rand < 0.333){
//     pcFise = '剪刀'
//   }else if(rand < 0.666){
//     pcFise = '石头'
//   }else{
//     pcFise = '布'
//   }
//   alert(`你出的拳：${fist}， 计算机出的拳：${pcFise}`);
//   if(fist == '剪刀' && pcFise == '布' ||
//      fist == '布' && pcFise == '石头' || 
//      fist =='石头' && pcFise == '剪刀'){
//        alert('你赢了！')
//      }else if(fist == pcFise){
//        alert('平局！')
//      }else{
//        alert('你输了！')
//      }
// }else{
//   alert('输入有误！')
// }


// var x = 2;
// switch(x){
//   case 1:
//     console.log('1');
//     break
//   case 20:
//     console.log('20')
//     break
//   default:
//     console.log('30')
// }


//输出100个holle world！
// var x = 0;
// while(x < 10){
//   console.log('hello world');
//   x++;
// }


//for循环输出0-100的数字
// for(var i = 0; i <= 100; i++){
//   console.log(i);
// }
//输出100-1的数字
// for(var i = 100; i >= 1; i--){
//   console.log(i)
// }
//输出1-100 的所有奇数
// for(var i = 1; i <= 100; i++){
//   if(i % 2 != 0){
//     console.log(i)
//   }
// }

//循环嵌套
// for(var i = 0; i < 3; i++){
//   for(var j = 0; j <= 3; j++){
//     console.log(i, j)
//     if(i + j == 3){
//       break;
//     }
//   }
// }
// for(var i = 0; i < 100; i++){
//   if(i % 2 == 0){
//     console.log(i)
//   }
// }


//1-100数字相加
// var x =0;
// for(var i = 0; i <= 100; i++){
//   x += i;
// }
// console.log(x);

//1-10 数字相乘
// var x = 1;
// for(var i = 1; i <= 10; i++)
// {
//   x *= i;
// }
// console.log(x);

//1-100所有奇数相加
// var x = 0;
// for(var i = 1; i <= 100; i++){
//   if(i % 2 !== 0){
//     x += i;
//   } 
// }
// console.log(x);

// for(var i = 135; i <= 145; i++){
//   if(i % 26 == 0){
//     console.log('有能整除的');
//     break;
//   }else{
//     console.log('没有能整除的数字');
//     break;
//   }
// }

// var isFind = false;
// var max = 180;
// var min = 135;
// for(var i = min; i <= max; i++){
//   if(i % 26 == 0){
//     isFind = true;
//     console.log(i);
//     break;
//   }
// }
// if(isFind){
//   console.log('存在');
// }else{
//   console.log('不存在')
// }


//打印 123 到 568 之间第一个能整除37的数字
// var isFind = false;
// var min = 123;
//     max = 133;
// for(var i = min; i <= max; i++){
//   if(i % 37 === 0){
//     isFind = true;
//     console.log(i);
//     break;
//   }
// }
// if(!isFind){
//   console.log('不存在')
// }


//判断是否为素数
// var num = 3;
// var isFind = 0;
// for(i = 0; i <= num; i++){
//   if(num % i === 0){
//     isFind++;
//   }
// }
// if(isFind > 2){
//   console.log('不是');
// }else{
//   console.log('是的')
// }

//打印1-100 的所有素数
// for(var i = 1; i <= 100; i++){
//   var isFind = false;
//   for(var j = 2; j <= i-1; j++){
//     if(i % j === 0){
//       isFind = true;
//       break;
//     }
//   }
//   if(i > 1 && !isFind){
//     console.log(i)
//   }
// }


//在控制台上输出100个*
// for(var i = 1; i <= 100; i++){
//   console.log('*');
// }

//让用户输入数字x然后输出x个*
// var x = +prompt('请输入一个数字：');
// if(isNaN(x)){
//   console.log('请输入正确的数字')
// }else{
//   for(var i = 1; i <= x; i++){
//     console.log('*')
//   }
// }

//输出一个三行五列的*
// var row = 3;
//     col = 5;
// for(var i = 1; i <= row; i++){
//   var y = '';
//   for(var j = 1; j <= col; j++){
//     y += '*';
//   }
//   console.log(y)
// }

//输出一个直角三角形
// var x = 5;
// for(var i = 1; i <= x; i++){
//   var y = '';
//   for(var j = 1; j <= i; j++){
//     y += '*';
//   }
//   console.log(y)
// }

//用*输出一个等腰三角形
// var row = 10;
// for(var i = 1; i < 5; i++){
//   var y = '';
//   for(var j = 0; j < row-i; j++){
//     y += ' ';
//   }
//   for(var z = 0; z < i*2-1; z++){
//     y += '*'
//   }
//   console.log(y);
// }

//输出1-100 的数字
// var x = 100;
// for(var i = 1; i <= x; i++){
//   console.log(i);
// }

//输出1-100所有奇数
// var x = 100;
// for(var i = 0; i <= x; i++){
//   if(i % 2 != 0){
//     console.log(i);
//   }
// }

//输出1-100内奇数之和
// var sum = 0;
//     x = 100;
// for(var i = 0; i <= x; i++){
//   if(i % 2 != 0){
//     sum += i;
//   }
// }
// console.log(sum);

//输出1到100之和
// var num = 100;
//     sum = 0;
// for(var i = 0; i <= num; i++){
//   sum += i;
// }
// console.log(sum);

//1-10 数字积
// var num = 10;
//     sum = 1;
// for(var i = 1; i <= num; i++){
//   sum *= i;
// }
// console.log(sum);

//判断一个数知否为素数
// var num = 132;
//     isFind = 0;
// for(var i = 2; i < num-1; i++){
//   if(num % i == 0){
//     isFind++;
//   }
// }
// if(isFind > 0){
//   console.log('bushi')
// }else{
//   console.log('shi')
// }


//输出1-100之间的素数
// for(var i = 1; i <= 100; i++){
//   var isFind = false;
//   for(var j = 2; j <= i-1; j++){
//     if(i % j === 0){
//       isFind = true;
//       break;
//     }
//   }
//   if(i > 1 && !isFind){
//     console.log(i)
//   }
// }


//求1-100之间素数之和
// var num = 100;
// sum = 0;
// for(var i = 1; i <= 100; i++){
//   var isFind = false;
//   for(var j = 2; j <= i-1; j++){
//     if(i % j === 0){
//       isFind = true;
//       break;
//     }
//   }
//   if(i > 1 && !isFind){
//     sum += i;
//     console.log(i)
//   }
// }
// console.log(sum);

//99乘法表
// for(var i = 1; i < 10; i++){
//   y = '';
//   for(var j = 1; j <= i; j++){
//     y = y+ `${j}*${i}=${i*j}\t`;
//   }
//   console.log(y);
// }


//小游戏
// 游戏开始
// ============第1轮============
// 系统几分， 玩家几分
// 你的出拳：剪刀
// 系统出拳：石头
// 系统赢了！
// 游戏结束

// console.log('游戏开始！');
// var gameNum = 1,
//     player = 0,
//     pcNum = 0;
// while(true){
//   console.log(`============第${gameNum}轮============`);
//   console.log(`系统${pcNum}分， 玩家${player}分`);
//   var fist = prompt('请出拳（石头，剪刀，布）');
//   if(fist === null){
//     break;
//   }
//   if(fist !== '石头' && fist !== '剪刀' && fist !== '布'){
//     alert('请重新出拳！')
//     continue;
//   }
//   var rand = Math.random();
//   var pcFise;
//   if(rand < 0.333){
//     pcFise = '剪刀'
//   }else if(rand <0.666){
//     pcFise = '石头'
//   }else{
//     pcFise = '布'
//   }
//   console.log(`你的出拳: ${fist}!`);
//   console.log(`系统出拳：${pcFise}!`)
//   if(fist == '石头' && pcFise == '剪刀' ||
//      fist == '剪刀' && pcFise == '布' ||
//      fist == '布' && pcFise == '石头'
//   ){
//     player++;
//     console.log('你赢了！')
//   }else if(fist == pcFise){
//     console.log('平局！')
//   }else{
//     pcNum++;
//     console.log('系统赢了！')
//   }
//   gameNum++
// }
// console.log(`==========游戏结束！==========`);
// console.log(`系统${pcNum}分， 玩家${player}分`)


//数组
// var arr = new Array(13);
// var arr2 = new Array(1,2,3,4,5);
// var arr3 = [5,6,7,8,9,11];
// console.log(arr3.length)

// //数组操作
// var arr = [5,234,654,23];
// arr[arr.length] = 'asd';   //向数组的末尾添加一项数据


// var arr = [5,234,654,23];
// arr.push('wew');   //向数组的末尾添加一项数据
// console.log(arr);

// var arr = [5,234,654,23];
// arr.unshift('wew');   //向数组的开头添加一项数据
// console.log(arr);

// var arr = [5,234,654,23];
// arr.splice(2,2)  //从下标2开始删除2个数据
// console.log(arr);


// var arr = [1,2,3,4,5,6,7,8,9,34,35,67,45,345,3456,23];
// var arr2 = arr.slice(3,10);      //截取新的数组
// console.log(arr,arr2)


// var obj ={
//   a:'qwe'
// }
// console.log('a' in obj)


// var obj = {
//   a: 's',
//   b: 'd',
//   c: 'k'
// }
// for (const prop in obj) {
//  console.log(prop)
// }

//数组遍历
// var arr = [2,3,4,56,67,55,23]
// for(var prop in arr){
//   console.log(arr[prop]);
// }


//创建一个长度为一百的数组 并为每一项赋值为abc   这里使用for循环
// var arr = new Array(100);
// for(var i = 0; i < arr.length; i++){
//     arr[i] = 'abc'
// }
// console.log(arr)

// var arr = new Array(100);
// arr.fill('abc');
// console.log(arr)


// var arr1 = [1,2,3,4,5,6];
// var arr2 = arr1.slice(0);
// console.log(arr2);
// arr2 = [1,2,3,4,5,6]
//but arr1 !== arr2


//数组求和  使用for循环
// var arr1 = [2,3,4,5,6,7];
// sum = 0;
// for(var i = 0; i < arr1.length; i++){
//   sum += arr1[i];
// }
// console.log(sum);


//使用数组遍历 for-in
// var arr2 = [9,8,7,6,5,4,3];
// sum = 0;
// for(var i in arr2){
//   sum += arr2[i] 
// }
// console.log(sum)


//二维数组
// var arr1 = [
//   [1,2,3],
//   [3,4,5],
//   [5,6,7]
// ];
// sum = 0;
// for(var i = 0; i < arr1.length; i++){
//   for(var j = 0; j < arr1[i].length; j++){
//     sum += arr1[i][j];
//   }
// }
// console.log(sum);


// //字符串拼接数组每一项
// var arr1 = [1,2,3,4,5,6,7];
//     str = '';
// for(var i = 0; i < arr1.length; i++){
//   str += arr1[i];
//   if(arr1[i] < arr1.length){
//     str += ','
//   }
// }
// console.log(str);

// //同上
// var arr1 = [1,2,3,4,5,6,7];
//     str = arr1.join('-')
// console.log(str);


// //拼接数组
// var arr1 = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// for(var i = 0; i < arr2.length; i++){
//   // console.log(arr1[arr1.length])
//   arr1[arr1.length] = arr2[i];
// }
// console.log(arr1);

// var arr1 = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);


//提示用户输入数组的长度，以及数组的每一项的值  打印该数组
// var len = +prompt('请输入数组的长度');
// if(isNaN(len) ||  len < 0){
//   console.log('输入有误')
// } else{
//   var arr = new Array(len);
//   for(var i = 0; i < len; i++){
//     arr[i] = prompt(`请输入第${i+1}项的值`);
//   }
//   console.log(arr);
// }


//求和数组
// var arr = [3,45,67,889,89,];
//     sum = 0;
// for(var i = 0;i < arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum);

//求和数组function
// var arr = [2,4,5,6,7,8];
// function sunfun(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sunfun(arr))


//输出数组中的所有奇数
// var arr = [3,4,5,6,7,8,9,21,45,34,54,67,87,66,77,88];
// let newarr =[];
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 !== 0){
//     newarr[newarr.length] = arr[i];
//   }
// }
// console.log(newarr);
//将以上封装function
// function oddNum(arr){
//   let newarr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       newarr[newarr.length] = arr[i]
//     }
//   }
//   return newarr;
// }
// //调用封装函数
// let arr1 = [3,4,5,6,7,8,9,67,87,66,77,88];
// let arr2 = oddNum(arr1)
// console.log(arr2);


// //提取数组中的素数
// function oddNum(arr){
//   let newarr = [];
//   for(let i = 0; i < arr.length; i++){
//     let isFind = false;
//     for(let j = 2; j < arr[i]; j++){
//       if(arr[i] % j === 0){
//         isFind = true;
//         break;
//       }
//     }  
//     if(arr[i] >= 2 && !isFind){
//       newarr.push(arr[i])
//     } 
//   }
//   return newarr;
// }
// //调用封装函数
// let arr1 = [3,4,5,6,7,8,9,67,87,66,77,88];
// let arr2 = oddNum(arr1)
// console.log(arr2);


// //斐波拉数
// let len = +prompt('请输入长度：');
// let arr = [];
// for(let i = 0; i < len; i++){
//   if(isNaN(len) || len < 0){
//     console.log('请输入正确的数字！')
//   }else{
//     if(i == 0 || i == 1){
//       arr.push(1);
//     }else{
//       arr.push(arr[i-1]+arr[i-2])
//     }
//   }
// }
// console.log(arr)

// //封装以上
// function paula(len){
//   let arr = [];
//   for(let i = 0; i < len; i++){
//     if(isNaN(len) || len < 0){
//       console.log('请输入正确的数字！')
//     }else{
//       if(i == 0 || i == 1){
//         arr.push(1);
//       }else{
//         arr.push(arr[i-1]+arr[i-2])
//       }
//     }
//   }
//   return arr;
// }
// //调用函数
// console.log(paula(12))


// let userInfo = [
//   {
//     name: 'Aubrey',
//     psd: 'ygg1996'
//   },
//   {
//     name: 'Song',
//     psd: 'song1998'
//   },
//   {
//     name: 'zhangSan',
//     psd: 'zhangsan1996'
//   },
//   {
//     name: 'liSi',
//     psd: 'lisi1996'
//   }
// ]


// function login(userName,userPsd,arr){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].psd === userPsd  && arr[i].name === userName){
//         console.log('登陆成功')
//         break;
//     }else{
//         console.log('登陆失败')
//         break;
//     }
//   }
// }

// login('Song','song1998',userInfo)


// let arr = [
//   [1,2,3,4,5],
//   [6,7,8,9,10],
//   [11,12,13,14,15],
//   [15,16,17,18,19],
//   [21,31,41,51,61]
// ]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr[i].length; j++){
//     if(i === j || i + j === arr.length - 1){
//       sum += arr[i][j]
//     }
//   }
// }
// console.log(sum)


//排序  冒泡
// let arr = [3,5,1,98,45,23,66,2,12,4];
// for(let i = 1; i < arr.length; i++){
//   for(let j = 0; j < arr.length - 1; j++){
//     if(arr[j] > arr[j+1]){
//       let tmp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = tmp;

//     }
//   }
// }
// console.log(arr)


//判断一个数是不是一个奇数
// function oddFun(num){
//   if(num % 2 !== 0){
//     console.log(num + '是奇数')
//   }else{
//     console.log(num + '不是奇数')
//   }
// }
// oddFun(4)


//判断数组中的每一项是不是为奇数  是就返回成数组
// function judgeOdd(arr){
//   let isOdds = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       isOdds.push(arr[i])
//     }
//   }
//   return isOdds
// }
// let oldarr = [2,3,4,5,6,7,8,9,11,34,56,57];
// let newarr = judgeOdd(oldarr);
// console.log(newarr)


//输出两个数相加的结果
// function sumFun(x, y){
//   return x + y;
// }

// console.log(sumFun(1,2))

//数组求和
// function sumArr(arr){
//   let sumNum = 0;
//   for(let i = 0; i < arr.length; i++){
//     sumNum += arr[i]
//   }
//   return sumNum
// }
// let Arr = [3,4,5,6,7,8,9,10];
// console.log(sumArr(Arr))

//删除数组末尾指定的数据
// function deleteArr(arr, num){
//   let newArr = [];
//   for(let i = 0; i < arr.length - num; i++){
//     newArr.push(arr[i]);
//   }
//   return newArr
// }
// let Arr = [1,2,3,4,5,6,7,8,9]
// let NewArr;
// NewArr = deleteArr(Arr,4)
// console.log(NewArr)

//判断一个数是否是素数


// function prime(num){
//   for(let i = 2; i < num; i++){
//     if(num % i !== 0){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }
// let number = 6;
// if(prime(number)){
//   console.log(number + '是素数')
// }else{
//   console.log(number + '不是素数')
// }
// prime()

//返回数组最大值

function maxOfArr(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
      let tmp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tmp;
    }
  }
  return arr[arr.length - 1]
}
console.log(maxOfArr([2,8,6,12343,100,234,432,12,2356,45,678,98,567]))