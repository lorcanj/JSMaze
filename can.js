import Grid from './main/Structure/Grid.js';
import Draw from './main/Structure/Draw.js';
import BinaryTree from './main/Maze/BinaryTree.js';
import Sidewinder from './main/Maze/Sidewinder.js';

document.addEventListener('DOMContentLoaded', () => {
    
    var button = document.querySelector('#create_maze');
    button.onclick = function () {
        var canvas = document.querySelector('#mycanvas');
        var ctx = canvas.getContext('2d');
        canvas.height = 500;
        canvas.width = 500;
        
        var g = new Grid(10, 10);

        //BinaryTree.create(g);
        Sidewinder.create(g);
        Draw.draw_maze(g, canvas);
    }

});
    
