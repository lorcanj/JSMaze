import Distance_Grid from '../Structure/Grid.js';
import BinaryTree from '../Maze/BinaryTree.js';
import Cell from '../Structure/Cell.js';



// need to just add this to can.js to see whether it works
var grid = Distance_Grid(5, 5);

BinaryTree.create(grid);

var start = grid.plane_grid[0][0];
var distance = start.distances();
grid.set_distance(distance);


