const video = document.querySelector('video');
video.oncanplay = function(){
    const time = timechange(video.duration);
    document.querySelector('#totalTime').innerHTML = time;
}
//播放中的方法

video.onplaying = function(){
}
video.ontimeupdate = function(){
    const time = timechange(video.currentTime);
    document.querySelector('#currentTime').innerHTML = time;
    const ratio = video.currentTime*100 / video.duration;
    const loade = document.querySelector('#elapse');
    loade.style.width = ratio+'%';
    // document.querySelector('#progress').onclick = function (e){
    //     const ratio = (e.clientX-40)/this.clientWidth;
    //     const loade = document.querySelector('#elapse');
    //     loade.style.width = ratio+'%';
    // }
}
const btn = document.querySelector('#button');
btn.onclick = function(){
    if(video.paused){
        video.play();
    }else{
        video.pause()
    }
}

//描述转换时分秒函数
function timechange(timeString){
    timeString = Math.floor(timeString);
    var h = Math.floor(timeString/3600);
    var min = Math.floor(timeString/60 - h*60);
    var sec = Math.floor(timeString-h*3600-min*60);
    h = h < 10 ? '0'+h : h;
    min = min < 10 ? '0'+min : min;
    sec = sec < 10 ? '0'+sec : sec;
    return `${h}:${min}:${sec}`;
}