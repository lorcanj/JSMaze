import Grid from './Grid.js';
import Cell from './Cell.js';

 class Draw {

    static draw_maze(grid, canvas, cell_size=10) {
        var ctx = canvas.getContext('2d');
        
        for (var cell of grid.each_cell()) {
            var x1 = cell.column * cell_size;
            var y1 = cell.row * cell_size;

            var x2 = (cell.column + 1) * cell_size;
            var y2 = (cell.row + 1) * cell_size;

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


        ctx.fillStyle = "blue";
        ctx.fillRect(30, 30, 50, 50);
    }
}

export default Draw;