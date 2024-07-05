let controlHandler = new ControlHandler();
let imgs = [];

let tiles;
let player;
let xShift = xResulution / 2;
let yShift = yResulution / 2;
let delta;
let tileSize = 64;
var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
}

let textbox = new TextBoxHandler(xResulution, yResulution, controlHandler);

function setup() {
    tiles = new Tiles(5, 6, tileSize, imgs);
    player = new Player(0, 0);
    createCanvas(xResulution, yResulution);
}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();
    textbox.Update();

    // Drawing
    noSmooth();
    background(220);
    tiles.drawTiles();
    player.Draw(xShift, yShift, tileSize);
    textbox.Draw();
}
