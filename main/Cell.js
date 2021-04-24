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

    link(cell, bidi=true) {
        this.links[cell] = true;
        if(bidi) {
            cell.link(this, false);
        }
        return this;
    }

    unlink(cell, bidi=True) {
        this.links.get(cell, null);
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
        if(cell in this.links) {
            return true;
        }
        return false;
    }

    neighbours() {
        list_of_neighbours = new Array();
        
    }
}