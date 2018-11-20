function handleError() {
    document.getElementById("result").innerHTML = "Hiba a mérés elvégzése során :(";
	document.getElementById("result_box").style.visibility = "visible";
}

function writeParsedData() {
    var result = "";
    for (var i in dataList) {
        for (var j in dataList[i]) {
            result += dataList[i][j] + "\t";
        }
        result += "\n<br/>";
    }
    document.getElementById("result_box").style.visibility = "visible";
    document.getElementById("result").innerHTML = result;
}

function parseData(rawData) {
    dataList.length = 0;
    var lines = rawData.toString().split('##');
    for (var i in lines) {
        dataList.push(lines[i].split('#'));
    }
}

function getPHP(filename, sensor, time, freq) {
    var http = new XMLHttpRequest();
    http.open("GET", "get.php?filename=" + filename + "&time=" + time + "&freq=" + freq + "&scriptname=" + list[sensor][3]);
    //http.open("GET", "/main/get.php?sensor=" + list[sensor][3] + "&time=" + time + "&freq=" + freq);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            if (http.response[0] == '0') {
                parseData(http.response.substr(1));
                writeParsedData();
                
            }
            else handleError();
		document.getElementById("start").disabled = false;
        }
    }
    http.send();
}

var inter;

function setTimer() {
    var counter = document.getElementById("counter");
    var content = counter.textContent;
    var split = content.split(':');
    var time = parseInt(split[0]) * 60 + parseInt(split[1]);
    time -= 1;
    if (time <= 0) clearInterval(inter);
    counter.textContent = Math.floor(time / 60) + ":" + Math.floor(time % 60);
}

function startTimer(time) {
    document.getElementById("counter").textContent = Math.floor(time / 60) + ":" + Math.floor(time % 60);
    inter = setInterval(setTimer, 1000)
}

function preprocessCall() {
    var time = checkInput("time");
    var freq = checkInput("freq");
    var filename = document.getElementById("report_filename").textContent;
    var sensor = document.getElementById("measure_select").selectedIndex;
    if (sensor == 0) return window.alert("Válassz szenzort!");
    if (time === null || freq === null) return window.alert("Adj meg helyes mérési paramétereket!");
    startTimer(time);
    document.getElementById("result").innerHTML = "";
    document.getElementById("start").disabled = true;
    getPHP(filename, sensor, time, freq);
}

