let imgs = []

let tiles;
let player;
let xResulution = 6*170;
let yResulution = xResulution/6*5;
let xShift = xResulution/2;
let yShift = yResulution/2;
let delta;
let tileSize = 64;


function preload() {
    imgs.push(
        loadImage('/Assets/Textures/placeholder.png')
    );
}

let controls = new Controls();

function setup() {
    tiles = new Tiles(5,5, 64, imgs);
    player = new Player(0,0);
    createCanvas(xResulution, yResulution);
}

var controlTimer = 0;
var controlTimerMax = 0.2;

function checkControls(delta){
    controlTimer += delta;
    if(controlTimer > controlTimerMax){
        // console.log(controlTimer)
        if (controls.up){
            player.y -= 1;
            controlTimer = 0;
        }else if (controls.down){
            player.y += 1;
            controlTimer = 0;
        }else if (controls.left){
            player.x -= 1;
            controlTimer = 0;
        }else if (controls.right){
            player.x += 1;
            controlTimer = 0;
        }
    } else {
        if (!controls.up && !controls.down && !controls.left && !controls.right){
            controlTimer = controlTimerMax;
        }
    }


}
function draw() {
    // Update
    delta = deltaTime*0.001;
    checkControls(delta);

    // Drawing
    background(220);
    tiles.drawTiles()
    image(imgs[0], 0, 0, 64, 64);
    player.Draw(xShift, yShift, tileSize);
}
