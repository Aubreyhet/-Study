document.querySelector('.get').onclick = function () {
    axios.get('https://autumnfish.cn/api/joke/list?num=3')
        .then(function (respose) {
            console.log(respose)
        }, function (err) {
            console.log(err)
        })
}