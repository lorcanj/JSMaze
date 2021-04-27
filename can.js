import Grid from './main/Structure/Grid.js';
// import {BinaryTree} from "./main/Maze/BinaryTree.js";
import Draw from './main/Structure/Draw.js';

document.addEventListener('DOMContentLoaded', () => {
  
});

var canvas = document.querySelector('#mycanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle='black';
ctx.fillRect(20, 20, 150, 10);  

var g = new Grid(30, 30);

Draw.draw_maze(g, canvas);

//d.draw_maze();


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.innerHTML = "Hello";

// var grid = new Grid(100, 100);

// var d = new Draw(grid)

// d.draw_maze();

// var thing = document.querySelector("#mycanvas");
    
