var Phaser = require('phaser');

var c = require('../../constants').game

var caveman,
    caveman2,
    bgTop,
    bgBottom,
    floorTop,
    floorBottom;

// documentation at http://docs.phaser.io/Phaser.Game.html
var game = new Phaser.Game(
    c.WIDTH,
    c.HEIGHT,
    Phaser.CANVAS,
    document.body,
    {
        preload: function(){
            game.load.image('background', 'img/BGSkyBlue.png');
            game.load.spritesheet('caveman', 'img/spritesheet_caveman.png', 32, 32);
            game.load.spritesheet('tiles', 'img/tiles_spritesheet.png', 72, 72);
            game.load.spritesheet('grass', 'img/grassMid.png');
        },
        create: function(){
            game.physics.startSystem(Phaser.Physics.ARCADE);


            //sky
            bgTop = game.add.tileSprite(0, 0, c.BG_WIDTH, c.BG_HEIGHT, 'background');
            bgBottom = game.add.tileSprite(0, c.HEIGHT - c.BG_HEIGHT, c.BG_WIDTH, c.BG_HEIGHT, 'background');

            bgTop.anchor.setTo(0,1);
            bgTop.scale.y *= -1;


            //ground
            floorTop = game.add.tileSprite(c.WIDTH - c.BG_WIDTH, 70, c.BG_WIDTH, 70, 'grass');
            floorBottom = game.add.tileSprite(0, c.HEIGHT - 70, c.BG_WIDTH, 70, 'grass');


            floorTop.anchor.setTo(0,0);
            floorTop.scale.y *= -1;


            // avatar
            caveman = game.add.sprite(30,c.HEIGHT - 70 - 17,'caveman');
            caveman2 = game.add.sprite(c.WIDTH - 30, 70 + 17,'caveman');
            caveman.animations.add('walk');
            caveman2.animations.add('walk2');
            caveman.animations.play('walk', 30, true);
            caveman2.animations.play('walk2', 30, true);

            caveman.anchor.setTo(0.5, 0.5);
            caveman.scale.x *= -1;
            caveman2.anchor.setTo(0.5, 0.5);
            caveman2.scale.y *= -1;

        },
        update: function(){
            if (floorBottom.x > c.WIDTH/2 - c.BG_WIDTH/2){
                floorTop.x += 2;
                floorBottom.x -= 2;
            } else if ((caveman.x < c.WIDTH/2) && (caveman2.x > c.WIDTH/2)){
                caveman.x += 2;
                caveman2.x -= 2;
            } else{
                caveman.animations.stop();
                caveman2.animations.stop();
            }
        },
        render: function() {
            // game.debug.geom(floorTop,'#0fffff');
        }
    }
);
