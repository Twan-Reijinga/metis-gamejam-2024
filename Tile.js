class Tile {
    constructor(x, y, tileSize, spriteImg) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.spriteImg = spriteImg;
    }
    
    draw() {
        Image(this.spriteImg, x, y, this.tileSize, this.tileSize);
    }
}