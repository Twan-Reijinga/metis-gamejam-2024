class Player {
    constructor(x, y, z, width, height, controlHandler) {
        this.tilePosition = createVector(x, y, z);
        this.width = width;
        this.height = height;
        this.controlHandler = controlHandler;
    }

    Update() {
        if (this.controlHandler.UP.pressed) {
            this.tilePosition.x -= 1;
        }
        if (this.controlHandler.DOWN.pressed) {
            this.tilePosition.x += 1;
        }

        if (this.controlHandler.RIGHT.pressed) {
            this.tilePosition.y -= 1;
        }
        if (this.controlHandler.LEFT.pressed) {
            this.tilePosition.y += 1;
        }
    }

    Draw(xShift, yShift, tileSize) {
        let screenCoords = Tiles.coordsToScreenPos(
            this.tilePosition.x,
            this.tilePosition.y,
            tileSize
        );
        rect(
            screenCoords.x - this.width / 2 + tileSize / 2,
            screenCoords.y -
                this.height +
                (tileSize / 5) * 1.5 -
                (tileSize / 2) * this.tilePosition.z, //!last part should be removed
            this.width,
            this.height
        );
    }
}
