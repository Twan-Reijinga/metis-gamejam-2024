class Tiles {
    constructor(width, height, tileSize, tileImgs) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tileImgs = tileImgs;
    }

    drawTiles() {
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                if(i % 2 == 0) {
                    this.drawTile(j * this.tileSize, (i / 4) * this.tileSize);
                } else {
                    this.drawTile((j + 0.5) * this.tileSize, (i / 4) * this.tileSize);
                }
            }
        }
    }

    drawTile(x, y) {    
        // console.log(this.tileImgs);
        image(this.tileImgs[0], x, y, this.tileSize, this.tileSize);
    }
}
