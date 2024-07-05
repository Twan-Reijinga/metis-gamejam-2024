class ControlHandler {
    constructor(recordControls) {
        this.recordControls = recordControls;
        this.keyBinds = [
            new KeyBind([87, 38]),
            new KeyBind([83, 40]),
            new KeyBind([65, 37]),
            new KeyBind([68, 39]),
            new KeyBind([67, 69]),
        ];
        this.UP = this.keyBinds[0];
        this.DOWN = this.keyBinds[1];
        this.LEFT = this.keyBinds[2];
        this.RIGHT = this.keyBinds[3];
        this.INTERACT = this.keyBinds[4];
    }
    Update() {
        for (let i = 0; i < this.keyBinds.length; i++) {
            let keybind = this.keyBinds[i];
            let down = false;
            for (let j = 0; j < keybind.keycodes.length; j++) {
                let code = keybind.keycodes[j];
                if (keyIsDown(code)) {
                    down = true;
                }
            }
            keybind.pressed = false;
            keybind.released = false;

            if (down) {
                if (!keybind.down) {
                    keybind.pressed = true;
                }
                keybind.down = true;
            } else {
                if (keybind.down) {
                    keybind.released = true;
                }
                keybind.down = false;
            }
        }
    }
}

class KeyBind {
    constructor(keycodes) {
        this.keycodes = keycodes;
        this.down = false;
        this.pressed = false;
        this.released = false;
    }
}
