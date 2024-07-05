class Tiles {
    constructor(width, height, tileSize, tileImgs) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tileImgs = tileImgs;
        this.tileMap = [];
    }

    buildTileMap() {
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                let worldCoords = Tiles.coordsToScreenPos(j, i, this.tileSize);
                new Tile(worldCoords.x, worldCoords.y, this.tileSize, this.tileImgs[0]);
            }
        }
    }

    drawTiles() {
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                let worldCoords = Tiles.coordsToScreenPos(j, i, this.tileSize);
                this.drawTile(worldCoords.x, worldCoords.y);
            }
        }
    }

    static coordsToScreenPos(x, y, tileSize) {
        let worldCoords = createVector(0, 0);
        worldCoords.x = (x - y - 1) * 0.5 * tileSize + 0.5 * xResulution;
        worldCoords.y = (x + y) * 0.25 * tileSize;
        return worldCoords;
    }

    drawTile(x, y) {    
        image(this.tileImgs[0], x, y, this.tileSize, this.tileSize);
    }
}
