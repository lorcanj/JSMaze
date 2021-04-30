class Cell {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
        this.links = new Map();
    }
    // need to update the functions with map to use the correct methods
    // check the bookmark
    link(cell, bidi=true) {
        this.links.set(cell, true);
        if(bidi) {
            cell.link(this, false);
        }
        return this;
    }

    unlink(cell, bidi=true) {
        this.links.delete(cell);
        if(bidi) {
            cell.unlink(this, false);
        }
        return self;
    }

    links() {
        return Array.from(Object.keys(this.links));
    }

    is_linked(cell) {
        if(!cell) {
            return false;
        }
        if(this.links.has(cell)) {
            return true;
        }
        return false;
    }

    neighbours() {
        var list_of_neighbours = new Array();
        
        if(this.north) {
            list_of_neighbours.push(this.north);
        }
        if(this.south) {
            list_of_neighbours.push(this.south);
        }
        if(this.east) {
            list_of_neighbours.push(this.east);
        }
        if(this.west) {
            list_of_neighbours.push(this.west);
        }
        return list_of_neighbours;
    }

    random_neighbour() {
        var neighbours = this.neighbours();
        var number_of_neighbours = neighbours.length - 1;
        var random_number = Math.round(Math.random() * number_of_neighbours);
        return neighbours[random_number];
    }
}

export default Cell;