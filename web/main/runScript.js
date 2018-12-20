function handleError() {
    document.getElementById("result").innerHTML = "Hiba a mérés elvégzése során :(";
	document.getElementById("result_box").style.visibility = "visible";
}

function writeParsedData() {
    var result = "";
    for (var i in dataList) {
        for (var j in dataList[i]) {
            result += dataList[i][j] + "\t";
		console.log(dataList[i][j]);
        }
        result += "\n<br/>";
    }
    document.getElementById("result_box").style.visibility = "visible";
    document.getElementById("result").innerHTML = result;
}



function getTXT() {
    var http = new XMLHttpRequest();
    http.open("GET", "data.txt");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            if (http.responseText.length != 0){ console.log(http.responseText); return http.responseText; }
            else handleError();
        }
    }
    http.send();
}




function parseData() {
	var result = "";
	var http = new XMLHttpRequest();
    http.open("GET", "data.txt");
    http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
    if (http.responseText.length != 0){
    		var lines = http.responseText.split('##');
    		for (var k in lines) {
				console.log(lines[k]);
				for (var i in lines[k].split('#')) {
					result += lines[k].split('#')[i] + "\t";
					console.log(lines[k].split('#')[i]);				
				}
				result += "\n<br/>";
    		}
    		document.getElementById("result_box").style.visibility = "visible";
			document.getElementById("result").innerHTML = result;		
	 }
            else handleError();
        }
    }
    http.send();
    
}

function getPHP(filename, sensor, time, freq) {
    var http = new XMLHttpRequest();
    http.open("GET", "get.php?filename=" + filename + "&time=" + time + "&freq=" + freq + "&scriptname=" + list[sensor][3]);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            if (http.response.length != 0) {
				console.log(http.response);
                parseData();
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

