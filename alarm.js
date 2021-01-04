var currentTime = document.querySelector('h2');
var setTime = document.querySelector('input');

function getTime(){
    var time = new Date();

    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();

    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}
function getAlarm(){
    var setValue = setTime.value;
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var current = hours + ':' + mins;
    if(current === setValue){
        location.replace("https://www.youtube.com/watch?v=Ww147bBSIfo");
    }
}
function init(){
    getTime();   
    setInterval(getTime, 1000);
    setInterval(getAlarm, 1000);
}
init();