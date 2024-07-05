var xResulution = 6*170;
var yResulution = xResulution/6*5;
var player = new Player(0,0);
var xShift = xResulution/2;
var yShift = yResulution/2;


var controls = new Controls();

function setup() {
    createCanvas(xResulution, yResulution);
}
function draw() {
    if (controls.up){
        player.y -= 1;
    }
    if (controls.down){
        player.y += 1;
    }
    if (controls.left){
        player.x -= 1;
    }
    if (controls.right){
        player.x += 1;
    }
    background(220);
    player.Draw(xShift, yShift);
}