let axios = require('axios');
// console.log(axios)
let httpUrl = 'https://www.piaohua.com/'
axios.get(httpUrl).then(function (res) {
    console.log(res)
})