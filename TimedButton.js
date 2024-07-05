class TimedButton {
    constructor(x, y, sprite, maxTimer) {
        this.x = x;
        this.y = y;
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
        image(sprite, screenCoords.x, screenCoords.y , tileSize, tileSize);
    }
    Update(delta){
        if (this.pressed) {
            if(this.maxTimer < this.timer) {
                this.pressed = false;
                this.timer = 0;
            } else {
                this.timer += delta;
            }
        }
    }
    CheckForPlayer(player, input){
        if (this.x == player.tilePosition.x && this.y == player.tilePosition.y) {
            if (input.INTERACT.down) {
                this.pressed = true;
            }
        }
    }
}