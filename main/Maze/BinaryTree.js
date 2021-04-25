import {Grid} from "./Structure/Grid.js"
import {Cell} from "./Structure/Cell.js"


class BinaryTree {

    create(grid) {
        for(var cell of grid.each_cell()) {
            var neighbours = new Array();

            if (cell.north) {
                neighbours.push(cell.north);
            }
            if (cell.east) {
                neighbours.push(cell.east);
            }
            var index = Math.round(Math.random() * neighbours.length);
            if (neighbours.length != 0) {
                var neighbour = neighbours[index];
            }
            if (neighbour) {
                cell.link(neighbour);
            }
        }
        return grid; 
    }
}