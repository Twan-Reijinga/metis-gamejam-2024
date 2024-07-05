let controlHandler = new ControlHandler();
let imgs = [];

let tiles;
let player;

let xResulution = 6 * 170;
let yResulution = (xResulution / 6) * 5;
let xShift = xResulution / 2;
let yShift = yResulution / 2;
let delta;
let tileSize = 64;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
}

let textbox = new TextBoxHandler(xResulution, yResulution, controlHandler);

function setup() {
    tiles = new Tiles(12, 12, tileSize, imgs);
    player = new Player(100, 100, 0, tileSize / 2, tileSize);
    createCanvas(xResulution, yResulution);
}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();
    textbox.Update();

    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles();
    player.Draw(0, 0, tileSize);
    // rect(100, 100, 50, 50);

    // UI DRAWING  ON TOP OF ALL
    textbox.Draw();
}
