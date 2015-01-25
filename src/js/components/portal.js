var Crafty = require('craftyjs');

var c = require('../../../constants').game;

Crafty.c('Portal', {
    init: function(){
        this.requires("2D, Canvas, Color");
        this.attr({
            x: 0,
            y: c.HEIGHT/2 - c.PORTAL_HEIGHT,
            w: c.PORTAL_WIDTH,
            h: c.PORTAL_HEIGHT
        });
        this.color('rgba(0,0,0,0.5)');
    }
});
