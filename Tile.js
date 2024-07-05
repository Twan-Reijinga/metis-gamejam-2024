class Tile {
    constructor(x, y, tileSize, spriteImg) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.spriteImg = spriteImg;
    }
    
    draw() {
        image(this.spriteImg, this.x, this.y, this.tileSize, this.tileSize);
    }
}