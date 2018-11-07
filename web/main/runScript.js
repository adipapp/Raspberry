function getPHP(filename, sensor, time, freq) {
    var http = new XMLHttpRequest();
    http.open("GET", "get.php?filename=" + filename + "&sensor=" + sensor + "&time=" + time + "&freq=" + freq);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("countdown").innerHTML = http.response;
            console.log("OK");
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
    //getPHP(filename, sensor, time, freq);
}

