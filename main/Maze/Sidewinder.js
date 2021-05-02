import Grid from "../Structure/Grid.js";
import Cell from "../Structure/Cell.js";

class Sidewinder {

    static create(grid) {
        
        for(var row of grid.each_row()) {
            var run = [];
            for(var cell of row) {
                run.push(cell);
                var north_barrier = false;
                var east_barrier = false;
                if(cell.north == null) {
                    north_barrier = true;
                }
                if(cell.east == null) {
                    east_barrier = true;
                }
                var coin_flip = Math.round(Math.random());

                if(north_barrier && !east_barrier) {
                    cell.link(cell.east);
                }
                if(east_barrier && !north_barrier) {
                    cell.link(cell.north);
                    if(run.length > 1) {
                        for(var i = 0; i < run.length - 1; ++i){
                            run[i].link(run[i].east);
                        }
                        run = []
                        break;
                    }
                }
                if(coin_flip == 1) {
                    if(!east_barrier) {
                        for(var i = 0; i < run.length - 1; ++i){
                            run[i].link(run[i].east);
                        }
                    }
                    if(!north_barrier) {
                        var index = Math.floor(Math.random() * run.length);
                        run[index].link(run[index].north);
                    }
                    run = []
                }
            }
        }
        return grid
    }
}

export default Sidewinder;