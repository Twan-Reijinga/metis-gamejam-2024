let controlHandlers = [];
let imgs = [];
let interactablesImg = [];
let playerSprite;
let playerghostSprite;

let tiles;

let xResulution = 6 * 170;
let yResulution = (xResulution / 6) * 5;
let xShift = xResulution / 2;
let yShift = yResulution / 2;
let delta;
let tileSize = 64;
let level = 0;

function preload() {
    imgs.push(loadImage("/Assets/Textures/TileNormal.png"));
    interactablesImg.push(
        loadImage("/Assets/Interact/Button/ButtonDepressed.png")
    );
    interactablesImg.push(
        loadImage("/Assets/Interact/Button/ButtonPressed.png")
    );
    interactablesImg.push(
        loadImage("/Assets/Interact/Button/ButtonAltDepressed.png")
    );
    interactablesImg.push(
        loadImage("/Assets/Interact/Button/ButtonAltPressed.png")
    );

    playerSprite = loadImage("/Assets/playerCharacter.png");
    playerghostSprite = loadImage("/Assets/playerCharacter.png");
    timeMashineImg = loadImage("/Assets/timeMashine.png");
}

let textbox;

let button1;
let lever1;
let timedButton1;
let timeMashine;
function setup() {
    tiles = new Tiles(12, 12, tileSize, imgs);
    textbox = new TextBoxHandler(xResulution, yResulution, null);
    createNewPlayer();
    createCanvas(xResulution, yResulution);

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

    for (let i = 0; i < Player.players.length; i++) {
        Player.players[i].Update();
    }
    textbox.Update();

    button1.CheckForPlayer();
    lever1.CheckForPlayer();
    timedButton1.Update(delta);
    timedButton1.CheckForPlayer();

    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles();
    timeMashine.Draw();

    for (let i = 0; i < Player.players.length; i++) {
        Player.players[i].Draw(xShift, yShift, tileSize);
    }
    button1.Draw();
    lever1.Draw();
    timedButton1.Draw();
    // rect(100, 100, 50, 50);
    // UI DRAWING  ON TOP OF ALL
    textbox.Draw();

    frameRate(30);
}

function createNewPlayer() {
    controlHandlers.push(new ControlHandler(true, controlHandlers.length));
    Player.players.push(
        new Player(
            2,
            2,
            0,
            playerSprite,
            playerghostSprite,
            tileSize,
            tileSize,
            controlHandlers[controlHandlers.length - 1],
            createVector(2, 2, 0)
        )
    );
    textbox.controlHandler = controlHandlers[controlHandlers.length - 1];
    Player.activePlayer = Player.players[Player.players.length - 1];
}

function startReplay() {
    for (let i = 0; i < Player.players.length; i++) {
        let p = Player.players[i];
        p.tilePosition.x = p.startPosition.x;
        p.tilePosition.y = p.startPosition.y;
        p.tilePosition.z = p.startPosition.z;
        p.controls.startReplay();
    }

    createNewPlayer();
    Player.activePlayer.disableInput(15);
}
