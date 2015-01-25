var Crafty = require('craftyjs');

var c = require('../../../constants').game;

Crafty.c('Avatar', {
    init: function(){
        this.requires("2D, Canvas, Color, Gravity");
        this.attr({
            w: c.PLAYER_WIDTH,
            h: c.PLAYER_HEIGHT
        });
    }
});
