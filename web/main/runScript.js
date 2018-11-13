function writeParsedData() {
    var result;
    for (var i in dataList) {
        for (var j in dataList[i]) {
            result += dataList[i][j] + "    ";
        }
        result += "\n";
    }
    document.getElementById("result").innerHTML = result;
}

function parseData(rawData) {
    var lines = rawData.toString().split('##');
    for (var i in lines) {
        dataList.push(lines[i].split('#'));
    }
}

function getPHP(filename, sensor, time, freq) {
    var http = new XMLHttpRequest();
    http.open("GET", "get.php?filename=" + filename + "&time=" + time + "&freq=" + freq + "&scriptname=" + list[sensor][3]);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            parseData(http.response);
            console.log("OK");
            writeParsedData();
        }
    }
    http.send();
}

function preprocessCall() {
    var time = checkInput("time");
    var freq = checkInput("freq");
    var filename = document.getElementById("report_filename").textContent;
    var sensor = document.getElementById("measure_select").selectedIndex;
    if (sensor == 0) return window.alert("Válassz szenzort!");
    if (time === null || freq === null) return window.alert("Adj meg helyes mérési paramétereket!");
    getPHP(filename, sensor, time, freq);
}

