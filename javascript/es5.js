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


//













