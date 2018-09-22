function draw_random_dyn() {
    var step = document.getElementById("step").value * 1000;
    var start = new Date().getTime();
    var until = start + document.getElementById("until").value * 1000 + step;

    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    ctx.lineJoin = "round";
    ctx.lineWidth = "3";
    ctx.font = "bold 20px Courier New";
    ctx.fillStyle = "red";
    ctx.setLineDash([5]);

    var i = 0;
    
    set = setInterval(function () {
        if (until < new Date().getTime()) clearInterval(1);
        else {
            i++;
            var rnd = Math.round(Math.random() * canvas.height);
            x = canvas.width / ((until - start) / step + 1) * i;
            y = canvas.height - rnd;
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.fillText(rnd, x - 20, y - 10);
        }
    }, step);
}
