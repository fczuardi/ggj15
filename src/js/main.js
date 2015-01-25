var Crafty = require('craftyjs');

var c = require('../../constants').game;

Crafty.init(c.WIDTH, c.HEIGHT);
Crafty.background('#cce');

Crafty.e('FloorA, 2D, Canvas, Color')
    .attr({
        x: 0,
        y: c.HEIGHT - c.FLOOR_HEIGHT,
        w: c.FLOOR_WIDTH,
        h: c.FLOOR_HEIGHT
    })
    .color('orange');

Crafty.e('PlayerA, 2D, Canvas, Color, Gravity')
    .attr({
        x: 0,
        y: c.HEIGHT / 2,
        w: c.PLAYER_WIDTH,
        h: c.PLAYER_HEIGHT
    })
    .color('red')
    .gravityConst(c.GRAVITY)
    .gravity('FloorA');

//-----

Crafty.e('FloorB, 2D, Canvas, Color')
    .attr({
        x: 0,
        y: 0,
        w: c.FLOOR_WIDTH,
        h: c.FLOOR_HEIGHT
    })
    .color('orange');

Crafty.e('PlayerB, 2D, Canvas, Color, Gravity')
    .attr({
        x: 0,
        y: c.HEIGHT / 2 - c.PLAYER_HEIGHT,
        w: c.PLAYER_WIDTH,
        h: c.PLAYER_HEIGHT
    })
    .color('darkgray')
    .gravityConst(c.GRAVITY * -1)
    .gravity('FloorB');
