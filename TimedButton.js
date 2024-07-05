class TimedButton {
    constructor(x, y, sprite, maxTimer) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y, 0);
        this.pressed = false;
        this.depressedSprite = sprite[0];
        this.pressedSprite = sprite[1];
        this.maxTimer = maxTimer;
        this.timer = 0;
    }
    Draw() {
        let screenCoords = Tiles.coordsToScreenPos(this.x, this.y, tileSize);
        let sprite;

        if (this.pressed) {
            sprite = this.pressedSprite;
        } else {
            sprite = this.depressedSprite;
        }
        image(sprite, screenCoords.x, screenCoords.y, tileSize, tileSize);
    }
    Update(delta) {
        if (this.pressed) {
            if (this.maxTimer < this.timer) {
                this.pressed = false;
                this.timer = 0;
            } else {
                this.timer += delta;
            }
        }
    }
    CheckForPlayer() {
        for (let i = 0; i < Player.players.length; i++) {
            let p = Player.players[i];
            if (
                this.position.equals(p.tilePosition) &&
                p.controls.INTERACT.down
            ) {
                this.pressed = true;
            }
        }
    }
}
