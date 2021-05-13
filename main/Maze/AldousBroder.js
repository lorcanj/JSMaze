import Grid from '../Structure/Grid.js';
import Cell from '../Structure/Cell.js';

class AldousBroder {

    static create(grid) {
        var cell = grid.random_cell();
        var unvisited = grid.size() - 1;

        while (unvisited > 0) {
            var neighbour = cell.random_neighbour();

            if (neighbour.retrieve_links().length === 0) {
                cell.link(neighbour);
                unvisited -= 1;
            }
            cell = neighbour;
        }
        return grid;
    }
}

export default AldousBroder;