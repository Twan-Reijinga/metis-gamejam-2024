var xResulution = 1100;
let imgs = []

function preload() {
    imgs.push(
        loadImage('/Assets/Textures/placeholder.png')
    );
}

function setup() {
    createCanvas(xResulution, xResulution/5*4);
}
function draw() {
    background(220);
    image(imgs[0], 0, 0, 64, 64);
}
