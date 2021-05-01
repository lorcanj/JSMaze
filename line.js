document.addEventListener('DOMContentLoaded', () => {

    var canvas = document.querySelector('#mycanvas');

    var ctx = canvas.getContext('2d');

    var but = document.querySelector('#create_maze');


    but.onclick = function() {
        animate();
    }
    // ctx.beginPath();
    // ctx.moveTo(50, 300);
    // ctx.lineTo(300, 100);
    // ctx.stroke();

    var x = 50;
    var y = 50;
    var dx = Math.random();
    var dy = 1;
    
    ctx.strokeStyle = 'black';
    function animate() {
        
        if (x < 400) {
            requestAnimationFrame(animate);
        }
           
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + dx, y);
        ctx.stroke();
        x += dx;
        //y += dy;

    }
})
