var Phaser = require('phaser');

var c = require('../../constants').game

var caveman, woman, man;

// documentation at http://docs.phaser.io/Phaser.Game.html
var game = new Phaser.Game(
    c.WIDTH,
    c.HEIGHT,
    Phaser.CANVAS,
    document.body,
    {
        preload: function(){
            game.load.image('background', 'img/panoramica.jpg');
            game.load.spritesheet('caveman', 'img/spritesheet_caveman.png', 32, 32);
            game.load.spritesheet('woman', 'img/asianwomanwithbaby_running.png', 110, 167);
            game.load.spritesheet('man', 'img/minimalObjects_32x32Tiles.png', 32, 32);
        },
        create: function(){
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.sprite(0, 0, 'background');
            caveman = game.add.sprite(100,100,'caveman');
            caveman.animations.add('walk');
            caveman.animations.play('walk', 30, true);
            woman = game.add.sprite(300,100,'woman');
            woman.animations.add('walk');
            woman.animations.play('walk', 30, true);

            man = game.add.sprite(200,200,'man');
            man.animations.add('walk', [0,1,2,3,4,5]);
            man.play('walk', 10, true);

            caveman.anchor.setTo(0.5, 0.5);
            caveman.scale.x *= -1;
        },
        update: function(){
        }
    }
);
