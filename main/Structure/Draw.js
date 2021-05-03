import Grid from './Grid.js';
import Cell from './Cell.js';

 class Draw {

    static dx = 0.5;
    static dy = 0.5;

    static draw_maze(grid, canvas) {
        // cell_size should be a property of cell or grid
        // this should probably be moved
        var cell_size = canvas.width / grid.columns;
        window.ctx = canvas.getContext('2d');
        
        for (var cell of grid.each_cell()) {
            var x1 = cell.column * cell_size;
            var y1 = cell.row * cell_size;

            var x2 = (cell.column + 1) * cell_size;
            var y2 = (cell.row + 1) * cell_size;

            // for the below I could try animating the lines from x1 to x2
            // rather than it being drawn in one go
            if (cell.north == null) {
                Draw.animate_east(x1, x2, y1);
            }

            if (cell.west == null) {
                Draw.animate_north(x1, y1, y2);
            }

            if(!cell.is_linked(cell.east)) {
                Draw.animate_north(x2, y1, y2);
            }

            if(!cell.is_linked(cell.south)) {
                Draw.animate_east(x1, x2, y2);
            }
        }



    }
    // here I want to write a function that takes 2 points, breaks
    // it down to a given number of sections and then animate from point to point
    static animate_north(x1, y1, y2) {
        // window.ctx.moveTo(x1, y1);
        // window.ctx.lineTo(x1, y2);
        // window.ctx.stroke();
        
        Draw.animate_N(x1, y1, y2);
    }

    static animate_east(x1, x2, y1) {
        // window.ctx.moveTo(x1, y1);
        // window.ctx.lineTo(x2, y1);
        // window.ctx.stroke();
        
        Draw.animate_E(x1, x2, y1);
    }

    static animate_N(x1, y1, y2) {
        if (y2 > y1) {
            window.requestAnimationFrame(function () {
                Draw.animate_N(x1, y1 + Draw.dy, y2);
            });
        }
        window.ctx.beginPath();
        window.ctx.moveTo(x1, y1);
        window.ctx.lineTo(x1, Math.min(y1 + Draw.dy, y2));
        window.ctx.stroke();
        //y1 += Draw.dy;
        
    }

    static animate_E(x1, x2, y1) {
        if (x2 > x1) {
            window.requestAnimationFrame(function() {
                Draw.animate_E(x1 + Draw.dx, x2, y1);
            });
        }
        window.ctx.beginPath();
        window.ctx.moveTo(x1, y1);
        window.ctx.lineTo(Math.min(x1 + Draw.dx, x2), y1);
        window.ctx.stroke();
        //x1 += Draw.dx;
        
    }

    static display_distance(grid, canvas) {
        // change this to the commented part to see if it prints out the cell value
        var cell_size = canvas.width / grid.columns;
        window.ctx.font = "50px Georgia";
        // window.ctx.fillText("Hello World!", 50, 50);
        for (var cell of grid.each_cell()) {
            var x = cell.column + (cell_size / 2);
            var y = cell.row + (cell_size / 2);
            window.ctx.fillText(cell.value, x, y);
        }
    }
}

export default Draw;