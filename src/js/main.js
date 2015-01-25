var Crafty = require('craftyjs');

require('./components/avatar');
require('./components/playableAvatar');
require('./components/floor');
require('./components/portal');

var c = require('../../constants').game;

Crafty.init(c.WIDTH, c.HEIGHT);
Crafty.background('#cce');

Crafty.e('FloorA, Floor')
    .attr({
        y: c.HEIGHT - c.FLOOR_HEIGHT
    });

Crafty.e('PlayerA, PlayableAvatar')
    .attr({
        x: 0,
        y: c.HEIGHT / 2
    })
    .color('red')
    .gravityConst(c.GRAVITY)
    .gravity('FloorA');

//-----

Crafty.e('FloorB, Floor')
    .attr({
        y: 0
    });

Crafty.e('PlayerB, Avatar')
    .attr({
        x: 0,
        y: c.HEIGHT / 2 - c.PLAYER_HEIGHT
    })
    .color('darkgray')
    .gravityConst(c.GRAVITY * -1)
    .gravity('FloorB');

//----- Portal -------

Crafty.e('MainPortal, Portal');
