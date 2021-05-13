import Grid from './main/Structure/Grid.js';
import Draw from './main/Structure/Draw.js';
import BinaryTree from './main/Maze/BinaryTree.js';
import Sidewinder from './main/Maze/Sidewinder.js';
import Distance_Grid from './main/Structure/Distance_Grid.js';
import AldousBroder from './main/Maze/AldousBroder.js';


document.addEventListener('DOMContentLoaded', () => {
    
    var button = document.querySelector('#create_maze');
    button.onclick = function () {
        var canvas = document.querySelector('#mycanvas');
        var ctx = canvas.getContext('2d');
        canvas.height = 500;
        canvas.width = 500;
        
        var grid = new Distance_Grid(5, 5);
        //BinaryTree.create(grid);
        
        // currently an issue with AldousBroder
        AldousBroder.create(grid);

        var start = grid.plane_grid[0][0];
        // need to update the function for distances in cell
        var distance = start.distances();
        grid.set_distance(distance);
        
        Draw.draw_maze(grid, canvas);
        Draw.display_distance(grid, canvas);
        //var g = new Grid(10, 10);

        //BinaryTree.create(g);
        // Sidewinder.create(g);
        // Draw.draw_maze(g, canvas);


    }

});
    
