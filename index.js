let imgs = []

let tiles;
let player;
let xShift = xResulution/2;
let yShift = yResulution/2;
let delta;
let tileSize = 64;
var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
}

let controls = new Controls();
let textbox = new TextBoxHandler(xResulution, yResulution);

function setup() {
    tiles = new Tiles(5, 6, 64, imgs);
    player = new Player(0,0);
    createCanvas(xResulution, yResulution);

    textbox.AddMessageStream(
        [
            "this",
            "should",
            "be",
            "working",
            "I really hope that this works well and does what it should do and to the thingymajiggy",
        ],
        20
    );
}

var controlTimer = 0;
var controlTimerMax = 0.2;

function checkControls(delta) {
    controlTimer += delta;
    if (controlTimer > controlTimerMax) {
        // console.log(controlTimer)
        if (controls.up) {
            player.y -= 1;
            controlTimer = 0;
        } else if (controls.down) {
            player.y += 1;
            controlTimer = 0;
        } else if (controls.left) {
            player.x -= 1;
            controlTimer = 0;
        } else if (controls.right) {
            player.x += 1;
            controlTimer = 0;
        }
    } else {
        if (
            !controls.up &&
            !controls.down &&
            !controls.left &&
            !controls.right
        ) {
            controlTimer = controlTimerMax;
        }
    }
}

var controlTimer = 0;
var controlTimerMax = 0.2;

function checkControls(delta) {
    controlTimer += delta;
    if (controlTimer > controlTimerMax) {
        // console.log(controlTimer)
        if (controls.up) {
            player.y -= 1;
            controlTimer = 0;
        } else if (controls.down) {
            player.y += 1;
            controlTimer = 0;
        } else if (controls.left) {
            player.x -= 1;
            controlTimer = 0;
        } else if (controls.right) {
            player.x += 1;
            controlTimer = 0;
        }
    } else {
        if (
            !controls.up &&
            !controls.down &&
            !controls.left &&
            !controls.right
        ) {
            controlTimer = controlTimerMax;
        }
    }
}
function draw() {
    // Update
    delta = deltaTime * 0.001;
    checkControls(delta);

    // Drawing
    background(220);
    tiles.drawTiles()
    player.Draw(xShift, yShift, tileSize);
    textbox.Draw();
}

//! TEMPORARY: TESTING PURPOSES ONLY!!!
function keyPressed() {
    textbox.OnContinuePressed();
}
