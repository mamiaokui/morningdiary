function Time()
{
    this.globalDate = new Date()
    this.date = this.globalDate.getDate()
    this.day = this.globalDate.getDay()
    this.year = this.globalDate.getYear()
    this.month = this.globalDate.getMonth()
    this.showTime = function(ele)
    {
        //document.getElementById("date").innerText = date + "hao xinqi" + day + " " + (year + 1900) + "nian " + (month + 1) + "yue"
        ele.innerText = this.date + "hao xinqi" + this.day + " " + (this.year + 1900) + "nian " + (this.month + 1) + "yue"
    }
}

function init()
{
    localStorage["abc"] = [{"family":["good","healthy"]},{"work":["good too", "up"]}]
    localStorage["def"] = [{"family2":["good2","healthy2"]},{"work2":["good too2", "up2"]}]
    localStorage["ghi"] = [{"family3":["good3","healthy3"]},{"work3":["good too3", "up3"]}]
}

function showDiary(ele, content)
{
    for (var i in content)
    {

    }
    ele.innerHTML = content
}


init();
var time = new Time();
time.showTime(document.getElementById("date"));

showDiary(document.getElementById("weekAgo"),localStorage["abc"]);
showDiary(document.getElementById("monthAgo"),localStorage["def"]);
showDiary(document.getElementById("yearAgo"),localStorage["ghi"]);

document.getElementById("main").style.display="block"
