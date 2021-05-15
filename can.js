import Grid from './main/Structure/Grid.js';
import Draw from './main/Structure/Draw.js';
import BinaryTree from './main/Maze/BinaryTree.js';
import Sidewinder from './main/Maze/Sidewinder.js';
import Distance_Grid from './main/Structure/Distance_Grid.js';
import AldousBroder from './main/Maze/AldousBroder.js';


document.addEventListener('DOMContentLoaded', () => {
    var maze_created = false;
    var canvas = document.querySelector('#mycanvas');
    var button = document.querySelector('#create_maze');
    var grid = new Distance_Grid(5, 5);
    button.onclick = function () {

        maze_created = true;
        var ctx = canvas.getContext('2d');
        canvas.height = 500;
        canvas.width = 500;
        
        grid = new Distance_Grid(5, 5);
        
        var algorithm = document.querySelector('#select_algs').value;
        if (algorithm === "Aldous Broder") {
            AldousBroder.create(grid);
        }
        else if (algorithm === "Binary Tree") {
            BinaryTree.create(grid);
        }
        else if (algorithm === "Sidewinder") {
            Sidewinder.create(grid);
        }
        else {
            AldousBroder.create(grid);
        }
        
        var start = grid.plane_grid[0][0];
        
        // want to alter the below to find the longest path
        var distance = start.distances();
        grid.set_distance(distance);
        
        grid.distances = distances.path_to(grid.plane_grid[grid.rows - 1][0]);
        
        Draw.draw_maze(grid, canvas);
        
    }

    var longest_path_button = document.querySelector('#longest_path');

    longest_path_button.onclick = () => {
        if (maze_created) {
            Draw.display_path_nums_proper(grid, canvas);    
        }
        else {
            alert("need a maze created first!");
        }
    }


});
    
