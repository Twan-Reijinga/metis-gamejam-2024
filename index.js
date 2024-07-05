let delta;
let imgs = [];
var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;
var player = new Player(0, 0);
var xShift = xResulution / 2;
var yShift = yResulution / 2;
let tileSize = 32;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
}

var controls = new Controls();
var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;
var player = new Player(0, 0);
var xShift = xResulution / 2;
var yShift = yResulution / 2;
var textbox = new TextBoxHandler(xResulution, yResulution);

function setup() {
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
    image(imgs[0], 0, 0, 64, 64);
    player.Draw(xShift, yShift, tileSize);

    player.Draw(xShift, yShift);
    textbox.Draw();
}

//! TEMPORARY: TESTING PURPOSES ONLY!!!
function keyPressed() {
    textbox.OnContinuePressed();
}
