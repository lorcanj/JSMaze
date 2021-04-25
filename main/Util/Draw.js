import {Grid} from "./main/Structure/Grid.js"

export default class Draw {
    constructor(grid) {
        this.canvas = document.querySelector("#mycanvas");
        this.grid = grid;
    }

    draw_maze(cell_size=10) {
        var ctx = canvas.getContext('2d');

        img_width = cell_size * this.columns;
        img_height = cell_size * this.rows;

        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}