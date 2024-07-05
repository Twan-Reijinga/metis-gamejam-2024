class Player{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Draw(xShift, yShift){
        rect(this.x-10/2+xShift, this.y-10/2+yShift, 10, 10);
    }
}