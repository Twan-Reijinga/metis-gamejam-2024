class Renderer {
    static drawCalls = [];

    static AddDrawCall(sprite, position, offset, size, tileSize) {
        this.drawCalls.push(
            new DrawCall(sprite, position, offset, size, tileSize)
        );
    }

    static DrawAllCalls() {
        Renderer.drawCalls.sort(
            (a, b) => a.distanceToCamera - b.distanceToCamera
        );
        for (let i = 0; i < Renderer.drawCalls.length; i++) {
            Renderer.drawCalls[i].Execute();
        }
        Renderer.drawCalls = [];
    }
}

class DrawCall {
    constructor(sprite, position, offset, size, tileSize) {
        this.worldposition = position;
        this.tileSize = tileSize;
        this.sprite = sprite;
        this.size = size;
        this.offset = offset;

        this.screenposition = Tiles.coordsToScreenPos(
            this.worldposition.x,
            this.worldposition.y,
            this.tileSize,
            this.worldposition.z
        ).add(this.offset);
        let x = this.worldposition.x;
        let y = this.worldposition.y;
        let z = this.worldposition.z;
        this.distanceToCamera = x + y + z;
    }

    Execute() {
        image(
            this.sprite,
            this.screenposition.x,
            this.screenposition.y,
            this.size.x,
            this.size.y
        );
    }
}
