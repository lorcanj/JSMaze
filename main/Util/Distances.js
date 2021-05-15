import Cell from "../Structure/Cell.js";

class Distances {
    constructor(root) {
        this.root = root;
        this.cells = new Map();
        this.cells.set(root, 0);
    }

    return_distance(cell) {
        return this.cells.get(cell);
    }

    record_distance(cell, distance) {
        this.cells.set(cell, distance);
    }

    return_cells() {
        return this.cells.keys();
    }

    // returns a Distance object with path from cell to root
    // this is not correctly assigning the values of it
    path_to(start) {
        var current = start;
        start = this.root;
        var path = new Distances(start);
        path.cells.set(current, this.cells.get(current));

        var changed = false;
        while(this.cells.get(current) != 0) {
            for(var link of current.retrieve_links()) {
                for (var l of link){
                    if(l.value + 1 === this.cells.get(current)) {
                        path.cells.set(l, this.cells.get(l));
                        current = l;
                        changed = true;
                        break;
                    }
                }
                if (changed) {
                    changed = false;
                    break;
                }
            }
        }
        return path;
    }

    path_to_with_end(start, end) {
        var current = start;
        var path = Distances(end);
        path.cells.set(current, this.cells.get(current));

        while(this.cells.get(current) != 0) {
            for(var link of current.links) {

                if(this.cells.get(link) + 1 === this.cells.get(current)) {
                    // might have a problem at this links and the path.cells.set
                    path.cells.set(link, this.cells.get(link));
                    current = link;
                }
            }
        }
        return path.return_path();
    }

    longest_path() {
        var max_distance = 0;
        var max_cell = this.root;

        for(var cell of this.cells) {
            if(this.return_distance(cell) > max_distance) {
                max_distance = this.return_distance(cell);
                max_cell = cell;
            }
        }
        return max_cell;
    }

    return_path() {
        return this.cells;
    }

}

export default Distances;