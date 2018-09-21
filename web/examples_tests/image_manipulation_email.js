function zoom(greater) {
    var frame = document.getElementById("frame");
    var pic = frame.contentWindow.document.getElementById("pic");
    var wid = parseInt(pic.getAttribute("width"));
    if (greater == 'in') wid += 10;
    else if (greater == 'out') wid -= 10;
    else wid = 100;
    pic.setAttribute("width", wid.toString() + "%");
}

function modifyimage(selector) {
    var frame = document.getElementById("frame");
    var pic = frame.contentWindow.document.getElementById("pic");
    var sel = selector.options[selector.selectedIndex].value;
    pic.setAttribute("src", sel);
}

function email() {
    var email = document.getElementById("email").value;
    window.alert("Email kuldese ide: " + email);
    window.open("mailto:" + email + "?subject=Meresi adatok&body=valami");
}
