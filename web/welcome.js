function changePage() {
    window.location.replace("index.html");
}

function openMain(){
    var win = window.open("main.html", "main", "toolbar=no,titlebar=no");
}

window.onload = function () {
    //setTimeout(changePage, 5000);
    document.getElementById("gotomain").onclick = openMain;
}