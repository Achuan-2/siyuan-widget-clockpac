function copy() {
        var val = document.getElementById("now_time");
        window.getSelection().selectAllChildren(val);
        document.execCommand("Copy"); // 执行浏览器复制命令
}
document.getElementById('copy').addEventListener('click', copy);
function add(s) {
        return s < 10 ? '0' + s : s;
}

var _width = 0;
var timer;
timer = setInterval(function () {
    var now = new Date();
    var year = add(now.getFullYear()); //得到年份
    var month = add(now.getMonth() + 1);//得到月份
    var date = add(now.getDate());//得到日期
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var day = week[new Date().getDay()]; //获得周几
    var hour = add(now.getHours());//得到小时数
    var minute = add(now.getMinutes());//得到分钟数
    var second = add(now.getSeconds());//得到秒数
    document.getElementById("now_date").innerHTML = year + "." + month + "." + date + " "  + day;
    document.getElementById("now_time").innerHTML = hour + ":" + minute + ":" + second;
    var end = new Date(new Date(now.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000); // 当天24:00
    var remain = (end - now) / 1000; // times是剩余时间总的秒数 
    var h = add(parseInt(remain / 60 / 60 % 24)); //时
    var m = add(parseInt(remain / 60 % 60)); // 分
    var s = add(parseInt(remain % 60) + 1); // 当前的秒
    document.getElementById("remain_time").innerHTML = h + ':' + m + ':' + s;
    _width = (86400-remain)/86400*60;
    // _width +=1; 
    // 6:00
    if (_width > 15) {
        document.getElementsByClassName("inner")[0].style.background = "#71f971";
        document.getElementById("pac").setAttribute('src', './src/pacman2.svg')
    }
    // 12:00
    if (_width > 30) {
        document.getElementsByClassName("inner")[0].style.background = "#ffce54";
        document.getElementById("pac").setAttribute('src', './src/pacman3.svg')
    }
    // 18:00
    if (_width > 45) {
        document.getElementsByClassName("inner")[0].style.background = "#fde9eb";
        document.getElementById("pac").setAttribute('src', './src/pacman4.svg')
    }
    // 20:00
    if (_width > 50) {
        document.getElementsByClassName("inner")[0].style.background = "#ee5e6c";
        document.getElementById("pac").setAttribute('src', './src/pacman5.svg')
    }
    // 22:00
    if (_width > 55) {
        document.getElementsByClassName("inner")[0].style.background = "#db172a";
        document.getElementById("pac").setAttribute('src', './src/pacman6.svg');
    }
    // 24:00
    if (_width >= 60) {
        _width=0;
        // clearInterval(timer);
    }
    document.getElementsByClassName("inner")[0].style.width = _width + "vw";
    document.getElementsByTagName("img")[0].style.left = -1 + _width + "vw";
    var _data = Math.floor((_width / 60) * 100);
    document.getElementsByClassName("data")[0].innerText = _data + "%";
    document.getElementsByClassName("data")[0].style.left = 0 + _width + "vw";


}, 1000);

