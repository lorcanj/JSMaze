import Distances from "../Util/Distances.js";

class Cell {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
        this.links = new Map();
        this.value = null;
        
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

    retrieve_links() {
        return Array.from(this.links);
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
        var number_of_neighbours = neighbours.length;
        var random_number = Math.floor(Math.random() * number_of_neighbours);
        return neighbours[random_number];
    }

    distances() {
        var distances = new Distances(this);
        var frontier = [];
        frontier.push(this);
        
        this.value = 0;

        while(frontier.length > 0) {
            var new_frontier = [];

            for (var cell of frontier) {
                // linked is just the key for all the linked cells
                for (const [key, value] of cell.links.entries()) {    
                    if (distances.return_distance(key) == undefined && distances.return_distance(cell) != undefined) {
                        distances.record_distance(key, Number(distances.return_distance(cell)) + 1);
                        key.value = Number(distances.return_distance(cell)) + 1;
                        new_frontier.push(key);
                    }
                }
            }
            frontier = new_frontier;
        }
        return distances;
    }
}

export default Cell;