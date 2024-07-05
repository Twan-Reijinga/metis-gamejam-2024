class Player {
    constructor(x, y, z, width, height) {
        this.tilePosition = createVector(x, y, z);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Draw(xShift, yShift) {
        rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
    }
}
