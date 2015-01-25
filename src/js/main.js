var Phaser = require('phaser');

var c = require('../../constants').game

var caveman, caveman2, woman, man, bgTop, bgBottom;

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
            // game.load.spritesheet('woman', 'img/asianwomanwithbaby_running.png', 110, 167);
            // game.load.spritesheet('man', 'img/minimalObjects_32x32Tiles.png', 32, 32);
        },
        create: function(){
            game.physics.startSystem(Phaser.Physics.ARCADE);
            bgTop = game.add.sprite(c.WIDTH - c.BG_WIDTH, c.BG_HEIGHT, 'background');
            bgBottom = game.add.sprite(0, c.BG_HEIGHT, 'background');
            caveman = game.add.sprite(30,c.HEIGHT - 32,'caveman');
            caveman2 = game.add.sprite(c.WIDTH - 30, 32,'caveman');
            caveman.animations.add('walk');
            caveman2.animations.add('walk2');
            caveman.animations.play('walk', 30, true);
            caveman2.animations.play('walk2', 30, true);
            // woman = game.add.sprite(300,100,'woman');
            // woman.animations.add('walk');
            // woman.animations.play('walk', 30, true);
            // man = game.add.sprite(200,200,'man');
            // man.animations.add('walk', [0,1,2,3,4,5]);
            // man.play('walk', 10, true);

            bgTop.anchor.setTo(0,0);
            bgTop.scale.y *= -1;

            caveman.anchor.setTo(0.5, 0.5);
            caveman.scale.x *= -1;
            caveman2.anchor.setTo(0.5, 0.5);
            caveman2.scale.y *= -1;
        },
        update: function(){
            if (bgBottom.x > c.WIDTH/2 - c.BG_WIDTH/2){
                bgTop.x += 2;
                bgBottom.x -= 2;
            } else if ((caveman.x < c.WIDTH/2) && (caveman2.x > c.WIDTH/2)){
                caveman.x += 2;
                caveman2.x -= 2;
            } else{
                caveman.animations.stop();
                caveman2.animations.stop();
            }
        }
    }
);
