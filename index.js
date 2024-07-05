var xResulution = 6 * 170;
var yResulution = (xResulution / 6) * 5;
var player = new Player(0, 0);
var xShift = xResulution / 2;
var yShift = yResulution / 2;
var textbox = new TextBoxHandler(xResulution, yResulution);

function setup() {
    createCanvas(xResulution, yResulution);

    textbox.AddMessageStream(
        [
            "this",
            "should",
            "be",
            "working",
            "I really hope that this works well and does what it should do and to the thingymajiggy",
        ],
        20
    );
}
function draw() {
    background(220);
    player.Draw(xShift, yShift);
    textbox.Draw();
}

//! TEMPORARY: TESTING PURPOSES ONLY!!!
function keyPressed() {
    textbox.OnContinuePressed();
}
