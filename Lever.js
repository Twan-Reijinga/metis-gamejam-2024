class Lever {
    constructor(x, y, z, sprite) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.position = createVector(x, y, z);
        this.pressed = false;
        this.depressedSprite = sprite[2];
        this.pressedSprite = sprite[3];
    }
    Draw() {
        let screenCoords = Tiles.coordsToScreenPos(this.x, this.y, tileSize);
        let sprite;

        if (this.pressed) {
            sprite = this.pressedSprite;
        } else {
            sprite = this.depressedSprite;
        }

        Renderer.AddDrawCall(
            sprite,
            this.position,
            createVector(0, tileSize / 2),
            createVector(tileSize, tileSize),
            tileSize
        );
    }
    CheckForPlayer() {
        for (let i = 0; i < Player.players.length; i++) {
            let p = Player.players[i];
            if (
                this.position.equals(p.tilePosition) &&
                p.controls.INTERACT.pressed
            ) {
                this.pressed = !this.pressed;
            }
        }
    }
}
