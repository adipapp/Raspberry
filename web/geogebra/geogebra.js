window.onload = function () {
    var ggbApp = new GGBApplet({
        "appName": "classic", "width": window.screen.availWidth+100, "height": window.screen.availHeight,
        "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true }, true);
    ggbApp.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
    ggbApp.inject('geogebra');
}