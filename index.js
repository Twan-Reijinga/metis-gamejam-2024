let controlHandler = new ControlHandler();
let imgs = [];

let tiles;
let player;

let xResulution = 6 * 170;
let yResulution = (xResulution / 6) * 5;
let xShift = xResulution/2;
let yShift = yResulution/2;
let delta;
let tileSize = 64;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
}

let textbox = new TextBoxHandler(xResulution, yResulution, controlHandler);

function setup() {
    tiles = new Tiles(12, 12, tileSize, imgs);
    player = new Player(0,0);
    createCanvas(xResulution, yResulution);

    tiles.buildTileMap();
}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();
    textbox.Update();

    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles()
    player.Draw(xShift, yShift, tileSize);
    textbox.Draw();
}
