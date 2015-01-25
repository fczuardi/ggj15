var Crafty = require('craftyjs');

var c = require('../../../constants').game;

Crafty.c('Floor', {
    init: function(){
        this.requires("2D, Canvas, Color");
        this.attr({
            x: 0,
            w: c.FLOOR_WIDTH,
            h: c.FLOOR_HEIGHT
        });
        this.color('orange');
    }
});
