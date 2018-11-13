window.onload = function () {
    var div = document.getElementById("geogebra");
    var ggbApp = new GGBApplet({
        "appName": "classic", "width": window.screen.availWidth,
        "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true
    }, true);
        ggbApp.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
        ggbApp.inject('geogebra');
}