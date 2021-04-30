import Grid from './main/Structure/Grid.js';
// import {BinaryTree} from "./main/Maze/BinaryTree.js";
import Draw from './main/Structure/Draw.js';
import BinaryTree from './main/Maze/BinaryTree.js';




// need to correct the binary tree and the links because it is not doing it correctly
// as there is a cell which is not linked which shouldn't be possible
document.addEventListener('DOMContentLoaded', () => {
    
    var button = document.querySelector('#create_maze');
    button.onclick = function () {
        var canvas = document.querySelector('#mycanvas');
        var ctx = canvas.getContext('2d');
        canvas.height = 500;
        canvas.width = 500;
        
        var g = new Grid(10, 10);

        var b = BinaryTree.create(g);

        Draw.draw_maze(g, canvas);
    }

    
    

    

});




// ctx.fillStyle='black';
// ctx.fillRect(20, 20, 150, 10);  

//need to implement the maze creator before the draw thing is called!!!!!!



//d.draw_maze();


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.innerHTML = "Hello";

// var grid = new Grid(100, 100);

// var d = new Draw(grid)

// d.draw_maze();

// var thing = document.querySelector("#mycanvas");
    
