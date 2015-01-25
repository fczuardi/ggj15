var Phaser = require('phaser');

var c = require('../../constants').game

var caveman,
    caveman2,
    bgTop,
    bgBottom,
    floorTop,
    floorBottom,
    flagTop,
    flagBottom,
    topGroup,
    bottomGroup,
    topTransitioning = false,
    topScreenNextStop = c.WIDTH,
    bottomTransitioning = false,
    bottomScreenNextStop = - c.WIDTH;

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
            game.load.spritesheet('flag', 'img/flagRed2Frame.png', 70, 70);
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


            //flag
            flagTop = game.add.sprite(c.WIDTH - c.BG_WIDTH/2,0 + 70, 'flag');
            flagTop.animations.add('all');
            flagTop.animations.play('all', 4, true);

            flagTop.anchor.setTo(0,1);
            flagTop.scale.y *= -1;

            flagBottom = game.add.sprite(c.BG_WIDTH/2, floorBottom.y - 70, 'flag');
            flagBottom.animations.add('all');
            flagBottom.animations.play('all', 4, true);

            // avatar
            caveman = game.add.sprite(30,c.HEIGHT - 70 - 17,'caveman');
            caveman2 = game.add.sprite(c.WIDTH - 30, 70 + 17,'caveman');
            caveman.animations.add('walk');
            caveman2.animations.add('walk');
            caveman.animations.play('walk', 30, true);
            caveman2.animations.play('walk', 30, true);

            caveman.anchor.setTo(0.5, 0.5);
            caveman.scale.x *= -1;
            caveman2.anchor.setTo(0.5, 0.5);
            caveman2.scale.y *= -1;

            //groups (top x bottom)
            topGroup = game.add.group();
            topGroup.add(floorTop);
            topGroup.add(flagTop);
            topGroup.add(caveman2);
            bottomGroup = game.add.group();
            bottomGroup.add(floorBottom);
            bottomGroup.add(flagBottom);
            bottomGroup.add(caveman);
            bottomGroup.x = 0;


        },
        update: function(){
            var v = 2;


            //pagination
            if ( bottomTransitioning === false){
                if (caveman.x < c.WIDTH - 15 + (bottomGroup.x * -1)){
                    caveman.x += v;
                } else {
                    bottomTransitioning = true;
                }
            }else{
                if  (( bottomTransitioning === true) && (bottomGroup.x > bottomScreenNextStop )){
                    caveman.animations.stop();
                    bottomGroup.x -= v*5;
                } else{
                    bottomTransitioning = false;
                    caveman.animations.play('walk');
                    bottomGroup.x = bottomScreenNextStop;
                    bottomScreenNextStop -= c.WIDTH;
                }
            }
            if ( topTransitioning === false){
                if (caveman2.x > 15 + (topGroup.x * -1)){
                    caveman2.x -= v;
                } else {
                    topTransitioning = true;
                }
            }else{
                if  (( topTransitioning === true) && (topGroup.x < topScreenNextStop )){
                    caveman2.animations.stop();
                    topGroup.x += v*5;
                } else{
                    topTransitioning = false;
                    caveman2.animations.play('walk');
                    topGroup.x = topScreenNextStop;
                    topScreenNextStop += c.WIDTH;
                }
            }
        },
        render: function() {
            // game.debug.geom(floorTop,'#0fffff');
        }
    }
);
