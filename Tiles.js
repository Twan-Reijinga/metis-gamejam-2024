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
            this.tileMap.push([]);
            for(let j = 0; j < this.width; j++) {
                let worldPos = Tiles.coordsToScreenPos(j, i, this.tileSize);
                let newTile = new Tile(worldPos.x, worldPos.y, this.tileSize, this.tileImgs[0]);
                this.tileMap[i].push(newTile);
            }
        }
    }

    drawTiles() {
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                // let worldCoords = Tiles.coordsToScreenPos(j, i, this.tileSize);
                // this.drawTile(worldCoords.x, worldCoords.y);
                this.tileMap[i][j].draw();
            }
        }
    }

    static coordsToScreenPos(x, y, tileSize) {
        let worldCoords = createVector(0, 0);
        worldCoords.x = (x - y - 1) * 0.5 * tileSize + 0.5 * xResulution;
        worldCoords.y = (x + y) * 0.25 * tileSize;
        return worldCoords;
    }

    // static screenPosToCoords(screenX, screenY, tileSize) {
    //     // console.log("x", screenX);
    //     let coords = createVector(0, 0);
    //     coords.x = (screenY + screenX) / tileSize; 
    //     coords.y = (screenY - screenX) / tileSize;
    //     return coords;
    // }

}
