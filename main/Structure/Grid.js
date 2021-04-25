import {Cell} from "./Cell.js"


export default class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.plane_grid 
    }

    each_row() {
        for (var row = 0; row < this.rows; row++) {
            yield this.plane_grid[row];
        }
    }

    each_cell() {
        for (row of this.each_row()) {
            for(cell of row) {
                yield cell;
            }
        }
    }

    prepare_grid() {

        let arr = new Array(this.columns);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(this.columns);
        }

        for (var i = 0; i < this.columns; i++){
            for(var j = 0; j < this.rows; j++) {
                arr[i][j] = new Cell(i, j);
            }
        }
        return arr;   
    }

    configure_cells() {
        for (cell of this.each_cell()) {
            row = cell.row;
            col = cell.column;

            cell.north = this.check_cell(row - 1, col)
            cell.south = this.check_cell(row + 1, col)
            cell.west = this.check_cell(row, col - 1)
            cell.east = this.check_cell(row, col + 1)
        }
    }

    check_cell(row, column) {
        if (row < 0 || row > this.rows - 1) {
            return null;
        }
        if (column < 0 || column > this.columns - 1) {
            return null;
        }
        return this.plane_grid[row][column]
    }

    random_cell() {
        row = Math.round((Math.random() * this.rows));
        column = Math.round((Math.random() * this.columns));
        return this.plane_grid[row][column];
    }

    size() {
        return this.rows * this.columns;
    }
}