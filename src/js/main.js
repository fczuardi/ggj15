console.log('hey');
// Require pixi module
var PIXI = require('pixi');
console.log(PIXI);

    // You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
    var renderer = new PIXI.WebGLRenderer(800, 600);

    document.body.appendChild(renderer.view);

    var stage = new PIXI.Stage();

    var bunnyTexture = PIXI.Texture.fromImage("/img/spritesheet_caveman.png");
    var bunny = new PIXI.Sprite(bunnyTexture);

    bunny.position.x = 400;
    bunny.position.y = 300;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    stage.addChild(bunny);

    requestAnimationFrame(animate);

    function animate() {
        bunny.rotation += 0.01;

        renderer.render(stage);

        requestAnimationFrame(animate);
    }
