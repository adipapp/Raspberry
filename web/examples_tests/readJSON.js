function convertJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data.json');

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var o = JSON.parse(xhttp.response);
            for (var i = 0; i < o.rounds.length; i++) {
                for (var j = 0; j < o.rounds[i].matches.length; j++) {
                    document.getElementById("div1").innerHTML += o.rounds[i].matches[j].date + "\t";
                }
                document.getElementById("div1").innerHTML += "<br />";
            }
        }
    };
    xhttp.send();
}
