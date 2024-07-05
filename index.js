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
    player = new Player(
        11,
        11,
        1,
        tileSize / 2,
        (tileSize / 4) * 3,
        controlHandler
    );
    createCanvas(xResulution, yResulution);
}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();

    player.Update();
    textbox.Update();

    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles();
    player.Draw(xShift, yShift, tileSize);
    // rect(100, 100, 50, 50);

    // UI DRAWING  ON TOP OF ALL
    textbox.Draw();
}
