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















