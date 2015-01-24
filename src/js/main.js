function init(){
    var Crafty = require('craftyjs');
    Crafty.init(360,640);
    Crafty.background('black');
    Crafty.e('2D, Canvas, Color, Fourway')
        .attr({x: 10, y: 10, w: 30, h: 30})
        .color('orange')
        .fourway(3);
}

init();
