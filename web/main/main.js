function checkInput(node) {
    var input = document.getElementById(node).value;
    if (!isNaN(input) && Number.isInteger(parseFloat(input)) && parseInt(input) > 0) return input;
    else return null;
}

function updateReport() {
    var date = new Date();
    var strDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    document.getElementById("report_filename").textContent = "meresi_jegyzokonyv_" + strDate +"_"+ document.getElementById("report_input").value + ".xlsx";
}

function updateCount() {
    var count = document.getElementById("count");
    var time = checkInput("time");
    var freq = checkInput("freq");
    if (freq!==null) {
        if (time !== null) {
            count.textContent = time * freq;
        }
        else count.textContent = "ROSSZ IDŐ ADAT!";
    }
    else count.textContent = "ROSSZ FREKVENCIA ADAT!";
}

function fillupSelection() {
    var select = document.getElementById("measure_select");
    for (var i in list) {
        var opt = document.createElement("option");
        opt.innerHTML = list[i][0];
        console.log(list[i][0]);
        select.appendChild(opt);
    }
}

function changeSelection() {
    var selectedIndex = document.getElementById("measure_select").selectedIndex;
    var img_sensor = document.getElementById("img_sensor");
    img_sensor.setAttribute("src", list[selectedIndex][1]);
    var img_sensor_wiring = document.getElementById("img_sensor_wiring");
    img_sensor_wiring.setAttribute("src", list[selectedIndex][2]);
    if (parseInt(selectedIndex) == 0) {
        document.getElementById("measure_data_box").style.visibility = "hidden";
        document.getElementById("start").disabled = true;
        img_sensor.removeAttribute("src");
        img_sensor_wiring.removeAttribute("src");
    }
    else {
        document.getElementById("measure_data_box").style.visibility = "visible";
        document.getElementById("start").disabled = false;
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("result");
    var temp = document.createElement("textarea");
    temp.value = copyText.innerHTML.replace(/<br>/g, "");
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
}

function openGeogebra() {
    window.open("/geogebra", "geogebra", "toolbar=no,titlebar=no");
}

function sendEmail() {
    var dialog = window.prompt("Add meg az email cimed!");
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (dialog === null || !regex.test(String(dialog).toLowerCase())) window.alert("Adj meg helyes email cimet! :/");
    var filename = document.getElementById("report_filename").textContent;
    var http = new XMLHttpRequest();
    http.open("GET", "sendmail.php?address="+dialog+"&filename="+filename);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            if (!http.response.includes("ERROR")) window.alert("Sikeres kuldes! :)");
            else window.alert("Sikertelen kuldes! :(");
        }
    }
    http.send();
}

window.onkeyup = function () {
    updateReport();
    updateCount();
}

window.onload = function () {
    fillupSelection();
    updateReport();
    document.getElementById("measure_select").onchange = changeSelection;
    document.getElementById("measure_data_box").style.visibility = "hidden";
    document.getElementById("start").onclick = preprocessCall;
    document.getElementById("copy_clipboard").onclick = copyToClipboard;
    document.getElementById("open_geogebra").onclick = openGeogebra;
    document.getElementById("sendmail").onclick = sendEmail;
}