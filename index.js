var xResulution = 6*170;
var yResulution = xResulution/6*5;
var player = new Player(0,0);
var xShift = xResulution/2;
var yShift = yResulution/2;


function setup() {
    createCanvas(xResulution, yResulution);
}
function draw() {
    background(220);
    player.Draw(xShift, yShift);
}