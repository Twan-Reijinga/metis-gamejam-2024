class Player {
    constructor(x, y, z, playersprite, width, height, controlHandler) {
        this.tilePosition = createVector(x, y, z);
        this.sprite = playersprite;
        this.width = width;
        this.height = height;
        this.controlHandler = controlHandler;
        this.isflipped = false;
    }

    Update() {
        if (this.controlHandler.UP.pressed) {
            this.tilePosition.x -= 1;
            this.isflipped = false;
        }
        if (this.controlHandler.DOWN.pressed) {
            this.tilePosition.x += 1;
            this.isflipped = true;
        }

        if (this.controlHandler.RIGHT.pressed) {
            this.tilePosition.y -= 1;
            this.isflipped = true;
        }
        if (this.controlHandler.LEFT.pressed) {
            this.tilePosition.y += 1;
            this.isflipped = false;
        }
    }

    Draw(xShift, yShift, tileSize) {
        let screenCoords = Tiles.coordsToScreenPos(
            this.tilePosition.x,
            this.tilePosition.y,
            tileSize
        );
        push();

        image(
            this.sprite,
            screenCoords.x - this.width / 2 + tileSize / 2,
            screenCoords.y -
                this.height +
                tileSize / 2 -
                (tileSize / 2) * this.tilePosition.z, //! last part should be removed
            this.width,
            this.height
        );
        pop();
    }
}
