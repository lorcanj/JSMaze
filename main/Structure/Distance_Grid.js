import Grid from './Grid.js';

class Distance_Grid extends Grid {
    constructor(rows, columns) {
        super(rows, columns);
        this.distances = null;
    }

    set_distance(distance) {
        self.distances = distance;
    }

    get_distance() {
        return self.distances;
    }

    contents_of(cell) {
        cell.value = value;
    }
}

export default Distance_Grid;