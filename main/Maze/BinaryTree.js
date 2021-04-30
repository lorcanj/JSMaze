import Grid from "../Structure/Grid.js";
import Cell from '../Structure/Cell.js'


class BinaryTree {

    static create(grid) {
        for(var cell of grid.each_cell()) {
            var neighbours = [];

            if (cell.north) {
                neighbours.push(cell.north);
            }
            if (cell.east) {
                neighbours.push(cell.east);
            }
            var index = Math.floor(Math.random() * neighbours.length);
            var neighbour = neighbours[index];
            if(neighbour) {
                cell.link(neighbour);
            }
        }
        return grid; 
    }
}

export default BinaryTree;