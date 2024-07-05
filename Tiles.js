class Tiles {
    constructor(width, height, tileSize, tileImgs) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tileImgs = tileImgs;
        this.tileMap = [];
        this.textures = {};
    }

    tileMapings(mappings) {
        for (const [symbol, textures] of Object.entries(mappings)) {
            let textureList = []
            for(let i = 0; i < textures.length; i++) {
                textureList.push(
                    loadImage("/Assets/Textures/" + textures[i])
                );
            }
            this.textures[symbol] = textureList;
        };
    }

    buildTileMap(layers) {
        this.width = layers[0].length;
        this.height = layers[0][0].length;
        for(let layer = 0; layer < layers.length - 1; layer++) {
            for(let i = 0; i < this.width; i++) {
                this.tileMap.push([]);
                for(let j = 0; j < height; j++) {
                    let img = Tiles.getImg(this.textures, layers[layer][i][j]);
                    let worldPos = Tiles.coordsToScreenPos(j, i, this.tileSize);
                    let newTile = new Tile(worldPos.x, worldPos.y, this.tileSize, img);
                    this.tileMap[i].push(newTile);
                }
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

    static coordsToScreenPos(x, y, tileSize, z = 0) {
        let worldCoords = createVector(0, 0);
        worldCoords.x = (x - y - 1) * 0.5 * tileSize + 0.5 * xResulution;
        worldCoords.y = (x + y) * 0.25 * tileSize - (tileSize/2 * z);
        return worldCoords;
    }

    static getImg(textures, symbol) {
        if(textures[symbol] == undefined) {
            return textures['u'][0];
        }
        if(symbol == 's') {
            let r = Math.floor(Math.random() * textures['s'].length);
            return textures[symbol][r];
        } else {
            return textures[symbol][0];
        }
    }

    // static screenPosToCoords(screenX, screenY, tileSize) {
    //     // console.log("x", screenX);
    //     let coords = createVector(0, 0);
    //     coords.x = (screenY + screenX) / tileSize; 
    //     coords.y = (screenY - screenX) / tileSize;
    //     return coords;
    // }

}
