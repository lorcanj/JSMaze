document.addEventListener('DOMContentLoaded', () => {

    var canvas = document.querySelector('#mycanvas');

    var ctx = canvas.getContext('2d');

    var but = document.querySelector('#create_maze');
    var clr = document.querySelector('#clear');

    clr.addEventListener("click", clearCanvas);

    clr.onclick = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    but.onclick = function() {
        animate();
    }
    // ctx.beginPath();
    // ctx.moveTo(50, 300);
    // ctx.lineTo(300, 100);
    // ctx.stroke();

    function animate() {
        var x = 50;
        var y = 50;

        var dx = 1;
        var dy = 1;
        requestAnimationFrame(animate);
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        while(x < 300){
            
            
            ctx.moveTo(x, y);
            ctx.lineTo(x + dx, y);
            ctx.stroke();
            x += dx;
            //y += dy;
        }

    }
})
