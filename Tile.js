class Tile {
    constructor(x, y, tileSize, spriteImg, worldPosition) {
        this.x = x;
        this.y = y;
        this.position = worldPosition;
        this.tileSize = tileSize;
        this.spriteImg = spriteImg;
    }

    draw() {
        Renderer.AddDrawCall(
            this.spriteImg,
            this.position,
            createVector(0, 0),
            createVector(this.tileSize, this.tileSize),
            this.tileSize
        );
        //image(this.spriteImg, this.x, this.y, this.tileSize, this.tileSize);
    }
}
