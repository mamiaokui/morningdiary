function Time()
{
    this.globalDate = new Date()
    this.date = this.globalDate.getDate()
    this.day = this.globalDate.getDay()
    this.year = this.globalDate.getYear()
    this.month = this.globalDate.getMonth()
    this.showTime = function(ele)
    {
        ele.innerText = this.date + "hao xinqi" + this.day + " " + (this.year + 1900) + "nian " + (this.month + 1) + "yue"
    }

    this.getDaysInMonth = function(y,m)
    {
        return /8|3|5|10/.test(--m)?30:m==1?(!(y%4)&&y%100)||!(y%400)?29:28:31;
    }

    this.getDay = function(y,m,d)
    {
        str = "" + y +"/"+m+"/"+d
        d = new Date(str)
        return d.getDay();
    }
    
}

function init()
{
    localStorage["abc"] = "[{\"title\":\"family\", \"content\":\"good, healthy\",\"image\":\"/sdcard/a.jpg\"},{\"title\":\"family2\", \"content\":\"good, healthy\",\"image\":\"/sdcard/a.jpg\"}]"
    localStorage["def"] = "[{\"title\":\"family\", \"content\":\"good, healthy\",\"image\":\"/sdcard/a.jpg\"},{\"title\":\"family\", \"content\":\"good, healthy4\",\"image\":\"/sdcard/a.jpg\"}]"
    localStorage["ghi"] = "[{\"title\":\"family\", \"content\":\"good, healthy\",\"image\":\"/sdcard/a.jpg\"},{\"title\":\"family\", \"content\":\"good, healthy\",\"image\":\"/sdcard/a6.jpg\"}]"
}

function showDiary(ele, content)
{
    content = eval(content)
    for (var i in content)
    {
        ele.innerHTML += content[i].title+"|" +content[i].content+"|"+content[i].image
    }
}


init();
var time = new Time();
time.showTime(document.getElementById("date"));

showDiary(document.getElementById("weekAgo"),localStorage["abc"]);
showDiary(document.getElementById("monthAgo"),localStorage["def"]);
showDiary(document.getElementById("yearAgo"),localStorage["ghi"]);

document.getElementById("main").style.display="block"
