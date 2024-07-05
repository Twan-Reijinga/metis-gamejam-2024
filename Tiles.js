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
                let worldCoords = this.tileToWorldCoords(j, i);
                this.drawTile(worldCoords.x, worldCoords.y);
            }
        }
    }

    tileToWorldCoords(x, y) {
        let worldCoords = createVector(0, 0);
        worldCoords.x = (x - y - 1) * 0.5 * this.tileSize + 0.5 * xResulution;
        worldCoords.y = (x + y) * 0.25 * this.tileSize;
        return worldCoords;
    }

    drawTile(x, y) {    
        // console.log(this.tileImgs);
        image(this.tileImgs[0], x, y, this.tileSize, this.tileSize);
    }
}
