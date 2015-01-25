var Crafty = require('craftyjs');

var c = require('../../constants').game;

require('./components/floor');
require('./components/avatar');
require('./components/playableAvatar');
require('./components/balloon');
require('./components/portal');
require('./components/fps');

Crafty.init(c.WIDTH, c.HEIGHT);
Crafty.background('#cce');


var world = Crafty.e('2D,Canvas'),
    screenA = Crafty.e('2D, Canvas')
                .attr({
                    x:0,
                    y:c.HEIGHT/2,
                    w:c.WIDTH,
                    h:c.HEIGHT/2
                })
                .origin('center'),
    screenB = Crafty.e('2D, Canvas')
                .attr({
                    x:0,
                    y:0,
                    w:c.WIDTH,
                    h:c.HEIGHT/2
                })
                .origin('center'),
    floorA = Crafty.e('Floor')
                .attr({
                    y: c.HEIGHT - c.FLOOR_HEIGHT
                }),
    avatarA = Crafty.e('PlayableAvatar')
                .attr({
                    x: 0,
                    y: floorA.y - c.PLAYER_HEIGHT
                }),
    floorB = Crafty.e('Floor')
                .attr({
                    y: c.HEIGHT/2 - c.FLOOR_HEIGHT
                }),
    avatarB = Crafty.e('Avatar')
                .attr({
                    x: 0,
                    y: floorB.y - c.PLAYER_HEIGHT
                }),
    portal = Crafty.e('Portal'),
    balloon = Crafty.e('Balloon')
                .attr({
                    x: 100,
                    y: floorA.y - c.BALLOON_HEIGHT
                })
                .color('yellow');

avatarA.color('red');
avatarB.color('darkgray');
screenA.attach(floorA, avatarA, balloon);
screenB.attach(floorB, avatarB).attr({rotation:180});
world.attach(screenA, screenB).attr({rotation:0});

Crafty.e('FPSCounter, Fps');
