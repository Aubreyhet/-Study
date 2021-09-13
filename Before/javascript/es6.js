// function bar2(x = 2, y = x) {
//   return [x, y]
// }
// bar2()


// var x = x;
// let x = x;


// function myfun(){
//   let a = 10;
//   var a = 1;
// }
// myfun();


// function myfun1(){
//   let a = 10;
//   let a = 1;
// }
// myfun1();


// var tmp = new Date();
// function f(){
//     console.log(tmp);
//     if (false){
//         var tmp = 'hello world!';
//     }
// }
// f(); 


// var s = 'hello';
// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }
// console.log(i);


// function f1() {
//   let n = 5;
//   if(true) {
//       let n = 10;
//   }
//   console.log(n);
// }
// f1();


// const PI = 3.1415;
// PI = 3;
// console.log(PI);


// const foo;


// let [x = 'a'] = [null];
// console.log(x);


// let [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e)


// function add([x, y]){
//   return x + y;
// }
// console.log(add([2, 3]));


function move({x = 0, y = 0} = {}) {
  return [x, y];
}
console.log(move({x: 3, y: 8}))