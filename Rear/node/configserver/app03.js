const url = require('url');
var api = 'https://www.bilibili.com/video/BV1Gz4y1X7Uq?p=2';
// console.log(url.parse(api, true))
var getValue = url.parse(api, true).query;
console.log(getValue)
console.log(`这是第${getValue.p}个视频`)