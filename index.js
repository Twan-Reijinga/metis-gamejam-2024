let controlHandlers = [];
let imgs = [];
let playerSprite;
let playerghostSprite;

let tiles;

let xResulution = 6 * 170;
let yResulution = (xResulution / 6) * 5;
let xShift = xResulution / 2;
let yShift = yResulution / 2;
let delta;
let tileSize = 64;

function preload() {
    imgs.push(loadImage("/Assets/Textures/placeholder.png"));
    playerSprite = loadImage("/Assets/playerCharacter.png");
    playerghostSprite = loadImage("/Assets/playerCharacter.png");
}

let textbox;

function setup() {
    tiles = new Tiles(12, 12, tileSize, imgs);
    textbox = new TextBoxHandler(xResulution, yResulution, null);
    createNewPlayer();
    createCanvas(xResulution, yResulution);

    tiles.buildTileMap();
}

function draw() {
    // Update
    delta = deltaTime * 0.001;

    for (let i = 0; i < Player.players.length; i++) {
        Player.players[i].Update();
    }
    textbox.Update();

    // Drawing
    noSmooth();
    background(84, 78, 104);
    tiles.drawTiles();
    for (let i = 0; i < Player.players.length; i++) {
        Player.players[i].Draw(xShift, yShift, tileSize);
    }
    // rect(100, 100, 50, 50);

    // UI DRAWING  ON TOP OF ALL
    textbox.Draw();

    frameRate(30);
}

function createNewPlayer() {
    controlHandlers.push(new ControlHandler(true, controlHandlers.length));
    Player.players.push(
        new Player(
            11,
            11,
            0,
            playerSprite,
            playerghostSprite,
            tileSize,
            tileSize,
            controlHandlers[controlHandlers.length - 1],
            createVector(11, 11, 0)
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
