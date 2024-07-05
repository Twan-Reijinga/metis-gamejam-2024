let imgs = []

let tiles;
let player;
let xResulution = 6*170;
let yResulution = xResulution/6*5;
let xShift = xResulution/2;
let yShift = yResulution/2;

function preload() {
    imgs.push(
        loadImage('/Assets/Textures/placeholder.png')
    );
}

let controls = new Controls();

function setup() {
    tiles = new Tiles(5,5, 64, imgs);
    player = new Player(0,0);
    createCanvas(xResulution, xResulution/5*4);

}
function draw() {
    background(220);
    tiles.drawTiles()
}
