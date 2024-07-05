let controlHandler = new ControlHandler();
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

var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;
var player = new Player(0, 0);
var xShift = xResulution / 2;
var yShift = yResulution / 2;
var textbox = new TextBoxHandler(xResulution, yResulution, controlHandler);

function setup() {
    createCanvas(xResulution, yResulution);
}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();
    textbox.Update();

    // Drawing
    background(220);
    image(imgs[0], 0, 0, 64, 64);

    player.Draw(xShift, yShift, tileSize);

    player.Draw(xShift, yShift);
    textbox.Draw();
}
