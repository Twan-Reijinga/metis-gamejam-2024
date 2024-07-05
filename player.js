class Player {
    static activePlayer;

    static players = [];

    constructor(
        x,
        y,
        z,
        playersprite,
        playerspriteReplay,
        width,
        height,
        controlHandler,
        replayPosition
    ) {
        this.startPosition = createVector(x, y, z);
        this.tilePosition = createVector(x, y, z);
        this.sprite = playersprite;
        this.othersprite = playerspriteReplay;
        this.width = width;
        this.height = height;
        this.controls = controlHandler;
        this.isflipped = false;
        this.replayPosition = replayPosition;

        this.timeToWait = 0;
        this.hasMoved = false;
    }

    Update() {
        if (this.timeToWait > 0) {
            this.timeToWait -= 1;
            console.log(this.timeToWait);
            if (this.timeToWait <= 0) this.controls.enabled = true;
        }

        this.controls.Update();
        if (this.controls.UP.pressed) {
            this.tilePosition.x -= 1;
            this.isflipped = false;
            this.hasMoved = true;
        }
        if (this.controls.DOWN.pressed) {
            this.tilePosition.x += 1;
            this.isflipped = true;
            this.hasMoved = true;
        }

        if (this.controls.RIGHT.pressed) {
            this.tilePosition.y -= 1;
            this.isflipped = true;
            this.hasMoved = true;
        }
        if (this.controls.LEFT.pressed) {
            this.tilePosition.y += 1;
            this.isflipped = false;
            this.hasMoved = true;
        }
        if (
            this.tilePosition.x == this.replayPosition.x &&
            this.tilePosition.y == this.replayPosition.y &&
            this.tilePosition.z == this.replayPosition.z &&
            !this.controls.isReplaying &&
            this.hasMoved
        ) {
            startReplay();
        }
    }

    disableInput(time = -1) {
        this.controls.enabled = false;
        this.timeToWait = time;
    }

    enableInput() {
        this.controls.enabled = true;
    }

    Draw(xShift, yShift, tileSize) {
        let screenCoords = Tiles.coordsToScreenPos(
            this.tilePosition.x,
            this.tilePosition.y,
            tileSize
        );
        push();

        this.othersprite.filter(GRAY);

        Renderer.AddDrawCall(
            this.sprite,
            this.tilePosition,
            createVector(0, 0),
            createVector(this.width, this.height),
            tileSize
        );

        // image(
        //     this.controls.isReplaying ? this.othersprite : this.sprite,
        //     screenCoords.x - this.width / 2 + tileSize / 2,
        //     screenCoords.y -
        //         this.height +
        //         tileSize / 2 -
        //         (tileSize / 2) * this.tilePosition.z, //! last part should be removed
        //     this.width,
        //     this.height
        // );
        pop();
    }
}
