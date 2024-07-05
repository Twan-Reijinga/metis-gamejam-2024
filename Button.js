class Button {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.position = createVector(x, y, 0);
        this.pressed = false;
        this.depressedSprite = sprite[0];
        this.pressedSprite = sprite[1];
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
    CheckForPlayer() {
        let pressed = false;
        for (let i = 0; i < Player.players.length; i++) {
            let p = Player.players[i];
            if (
                this.position.equals(p.tilePosition) &&
                p.controls.INTERACT.down
            ) {
                pressed = true;
            }
        }

        this.pressed = pressed;
    }
}
