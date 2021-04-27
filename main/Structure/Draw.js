import Grid from './Grid.js';
import Cell from './Cell.js';

 class Draw {
    static draw_maze(grid, canvas, cell_size=10) {
        var ctx = canvas.getContext('2d');
        
        for (var cell of grid.each_cell()) {
            x1 = cell.column * cell_size;
            y1 = cell.row * cell_size;

            x2 = (cell.column + 1) * cell_size;
            y2 = (cell.row + 1) * cell_size;

            if (cell.north == null) {
                
            }
        }


        ctx.fillStyle = "blue";
        ctx.fillRect(30, 30, 50, 50);
    }
}

export default Draw;