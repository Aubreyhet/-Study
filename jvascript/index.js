//获取用户去鼠标位置信息的方法
var myDivOne = document.getElementById('myDivOne');
myDivOne.onclick = function(){
    alert(
            //获取客户区鼠标坐标位置
          '客户区坐标位置：X=' + event.clientX + ' ' + 'Y=' + event.clientY
          //获取页面坐标位置
          + '页面坐标位置：X=' + event.pageX + ' ' + 'Y=' + event.pageY
          //获取鼠标相对整个桌面的坐标位置
          +  '鼠标相对整个桌面的位置坐标：X=' + event.screenX + ' ' + event.screenY
    )
}

