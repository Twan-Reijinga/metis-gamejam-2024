class TimeMashine {
    constructor(x, y, z, sprite) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.position = createVector(x, y, z);
        this.sprite = sprite;
    }

    Draw() {
        let screenCoords = Tiles.coordsToScreenPos(this.x, this.y, tileSize);
        Renderer.AddDrawCall(
            this.sprite,
            this.position,
            createVector(0, -tileSize / 2),
            createVector(tileSize, tileSize * 2),
            tileSize
        );
    }
}
