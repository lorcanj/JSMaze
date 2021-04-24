var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// ctx.fillRect(100, 100, 1000, 100)

//Line

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.stroke();


function animate() {
    requestAnimationFrame(animate);
    ctx.beginPath();
    ctx.arc(200, 200, 30, 0, Math.PI * 2 + 1, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}

animate();