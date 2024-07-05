class Tiles {
    constructor(width, height, tileSize, tileImgs) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tileImgs = tileImgs;
    }

    drawTiles() {
        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.width; j++) {
                if(j % 2 == 0) {
                    this.drawTile(i * this.tileSize, (j / 4) * this.tileSize);
                } else {
                    this.drawTile((i + 0.5) * this.tileSize, (j / 4) * this.tileSize);
                }
            }
        }
    }

    drawTile(x, y) {    
        // console.log(this.tileImgs);
        image(this.tileImgs[0], x, y, this.tileSize, this.tileSize);
    }
}
