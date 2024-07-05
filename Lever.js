class Lever {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
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
        image(sprite, screenCoords.x, screenCoords.y , tileSize, tileSize);
    }
    CheckForPlayer(player, input){
        if (this.x == player.tilePosition.x && this.y == player.tilePosition.y) {
            if (input.INTERACT.pressed){
                this.pressed = !this.pressed;
            }
        }
    }
}