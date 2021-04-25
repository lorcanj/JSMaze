var canvas = document.querySelector("#mycanvas");

var ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF9900';
ctx.fillRect(20, 20, 150, 100);

canvas.onclick = showAlert;

function showAlert(event) {
    for (var i = 0; i < 5; i++){
        ctx.fillStyle = "#777777";
        ctx.fillRect(20, 20, 150, 100);
        ctx.fillStyle = "#000000";
        ctx.fillRect(20 + i * 10, 20, 150, 100);
    }
    
    alert(i);
}
    
