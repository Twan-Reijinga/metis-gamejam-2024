class TimeMashine {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    Draw() {
        let screenCoords = Tiles.coordsToScreenPos(this.x, this.y, tileSize);
        image(this.sprite, screenCoords.x, screenCoords.y- tileSize, tileSize, tileSize*2);
    }
}