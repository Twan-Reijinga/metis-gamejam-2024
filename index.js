var xResulution = 1100;
let imgs = []

var xResulution = 6*170;
var yResulution = xResulution/6*5;
var player = new Player(0,0);
var xShift = xResulution/2;
var yShift = yResulution/2;

function preload() {
    imgs.push(
        loadImage('/Assets/Textures/placeholder.png')
    );
}

var controls = new Controls();

function setup() {
    createCanvas(xResulution, xResulution/5*4);
}
function draw() {
    background(220);
    image(imgs[0], 0, 0, 64, 64);
}
