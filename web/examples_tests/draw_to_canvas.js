function draw(container) {
    var points = container.value.split(',');
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    ctx.lineJoin = "round";
    ctx.lineWidth = "3";
    ctx.font = "bold 20px Courier New";
    ctx.fillStyle = "red";

    var x, y;
    for (var i = 0; i < points.length; i++) {
        x = canvas.width / (points.length + 1) * (i + 1);
        y = canvas.height - parseInt(points[i]);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillText(parseInt(points[i]), x - 20, y - 10);
    }
}
