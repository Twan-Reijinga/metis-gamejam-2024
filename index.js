let controlHandler = new ControlHandler();
let imgs = [];
let interactablesImg = [];
let playerSprite;

let tiles;
let player;

let xResulution = 6 * 170;
let yResulution = (xResulution / 6) * 5;
let xShift = xResulution / 2;
let yShift = yResulution / 2;
let delta;
let tileSize = 64;
let level = 0;

function preload() {
    imgs.push(loadImage("/Assets/Textures/TileNormal.png"));
    interactablesImg.push(loadImage('/Assets/Interact/Button/ButtonDepressed.png'));
    interactablesImg.push(loadImage('/Assets/Interact/Button/ButtonPressed.png'));
    interactablesImg.push(loadImage('/Assets/Interact/Button/ButtonAltDepressed.png'));
    interactablesImg.push(loadImage('/Assets/Interact/Button/ButtonAltPressed.png'));

    playerSprite = loadImage("/Assets/playerCharacter.png");
    timeMashineImg = loadImage("/Assets/timeMashine.png");

}

let textbox = new TextBoxHandler(xResulution, yResulution, controlHandler);

let button1;
let lever1;
let timedButton1;
let timeMashine;
function setup() {
    tiles = new Tiles(12, 12, tileSize, imgs);

    player = new Player(
        11,
        11,
        0,
        playerSprite,
        tileSize,
        tileSize,
        controlHandler
    );
    createCanvas(xResulution, yResulution);
    frameRate(60);

    tiles.tileMapings(mapTemplate.mappings);
    tiles.buildTileMap(mapTemplate.levels[level].layers);

    button1 = new Button(6, 6, interactablesImg);
    lever1 = new Lever(8, 8, interactablesImg);
    timedButton1 = new TimedButton(4, 4, interactablesImg, 2);

    timeMashine = new TimeMashine(2, 2, timeMashineImg);

}

function draw() {
    // Update
    delta = deltaTime * 0.001;
    controlHandler.Update();

    player.Update();
    textbox.Update();

    button1.CheckForPlayer(player, controlHandler);
    lever1.CheckForPlayer(player, controlHandler);
    timedButton1.Update(delta);
    timedButton1.CheckForPlayer(player, controlHandler);



    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles();
    player.Draw(xShift, yShift, tileSize);
    button1.Draw();
    lever1.Draw();
    timedButton1.Draw();
    timeMashine.Draw();
    // rect(100, 100, 50, 50);
    // UI DRAWING  ON TOP OF ALL
    textbox.Draw();
}
