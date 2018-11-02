function getPHP() {
    var http = new XMLHttpRequest();
    http.open("GET", "get.php?file="+this.value);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("text").innerHTML = http.response;
            console.log("OK");
        }
    }
    http.send();
}

window.onload = function () {
    this.document.getElementById("hungaryGraph").onclick = getPHP.bind(document.getElementById("hungaryGraph"));
    this.document.getElementById("lineGraph").onclick = getPHP.bind(document.getElementById("lineGraph"));
}
