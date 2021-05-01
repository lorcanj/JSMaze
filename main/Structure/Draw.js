import Grid from './Grid.js';
import Cell from './Cell.js';

 class Draw {

    static draw_maze(grid, canvas) {
        var cell_size = canvas.width / grid.columns;
        var ctx = canvas.getContext('2d');
        
        for (var cell of grid.each_cell()) {
            var x1 = cell.column * cell_size;
            var y1 = cell.row * cell_size;

            var x2 = (cell.column + 1) * cell_size;
            var y2 = (cell.row + 1) * cell_size;
            

            // for the below I could try animating the lines from x1 to x2
            // rather than it being drawn in one go
            if (cell.north == null) {
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y1);
                ctx.stroke();
            }

            if (cell.west == null) {
                ctx.moveTo(x1, y1);
                ctx.lineTo(x1, y2);
                ctx.stroke();
            }

            if(!cell.is_linked(cell.east)) {
                ctx.moveTo(x2, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            if(!cell.is_linked(cell.south)) {
                ctx.moveTo(x1, y2);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        }
    }
    // here I want to write a function that takes 2 points, breaks
    // it down to a given number of sections and then animate from point to point
    static animate_lines(){

    }
}

export default Draw;