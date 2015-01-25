var Crafty = require('craftyjs');

var c = require('../../../constants').game;

Crafty.c('Balloon', {
    init: function(){
        this.requires("2D, Canvas, Color, Gravity");
        this.attr({
            w: c.BALLOON_WIDTH,
            h: c.BALLOON_HEIGHT
        });
    }
});
