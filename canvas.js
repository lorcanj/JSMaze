var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';

// ctx.fillRect(100, 100, 1000, 100)

//Line

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.stroke();

class Circle {

    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

}



var x = 200;
var y = 200;
var dx = 20;
var dy = 20;

var radius = 30

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2 + 1, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    

    if (x + radius > innerWidth || x - radius < 0) {
        dx *= -1;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy *= -1;
    }

    x += dx;
    y += dy;
}

animate();