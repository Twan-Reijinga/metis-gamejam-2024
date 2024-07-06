class ControlHandler {
    constructor(recordControls, name) {
        this.name = name;
        this.time = 0;
        this.enabled = true;

        this.isRecording = recordControls;
        this.isReplaying = false;
        this.keyBinds = [
            new KeyBind([87, 38]),
            new KeyBind([83, 40]),
            new KeyBind([65, 37]),
            new KeyBind([68, 39]),
            new KeyBind([67, 69]),
            new KeyBind([82]),
        ];
        this.UP = this.keyBinds[0];
        this.DOWN = this.keyBinds[1];
        this.LEFT = this.keyBinds[2];
        this.RIGHT = this.keyBinds[3];
        this.INTERACT = this.keyBinds[4];
        this.REPLAY = this.keyBinds[5];

        this.recordedInputs = {};
        this.recordingHeldInputs = [83];
    }

    Update() {
        if (!this.enabled) return;

        if (this.isReplaying && this.time in this.recordedInputs) {
            for (var i = 0; i < this.recordedInputs[this.time].length; i++) {
                let code = this.recordedInputs[this.time][i];
                if (this.recordingHeldInputs.includes(code)) {
                    let index = this.recordingHeldInputs.indexOf(code);
                    this.recordingHeldInputs.splice(index, 1);
                    continue;
                } else {
                    this.recordingHeldInputs.push(code);
                }
            }
        }

        for (let i = 0; i < this.keyBinds.length; i++) {
            let keybind = this.keyBinds[i];
            let down = false;
            keybind.pressed = false;
            keybind.released = false;
            for (let j = 0; j < keybind.keycodes.length; j++) {
                let code = keybind.keycodes[j];
                if (this.checkKey(code)) {
                    down = true;
                }
            }

            if (down) {
                if (!keybind.down) {
                    keybind.pressed = true;

                    if (this.isRecording) {
                        this.recordInput(keybind.keycodes[0]);
                    }
                }
                keybind.down = true;
            } else {
                if (keybind.down) {
                    keybind.released = true;

                    if (this.isRecording) {
                        this.recordInput(keybind.keycodes[0]);
                    }
                }
                keybind.down = false;
            }
        }
        this.time += 1;
    }

    checkKey(code) {
        if (this.isReplaying) {
            return this.recordingHeldInputs.includes(code);
        } else {
            return keyIsDown(code);
        }
    }

    recordInput(code) {
        if (!(this.time in this.recordedInputs)) {
            this.recordedInputs[this.time] = [code];
        } else {
            this.recordedInputs[this.time].push(code);
        }
    }

    startReplay() {
        this.isRecording = false;
        this.isReplaying = true;
        this.time = 0;
        this.recordingHeldInputs = [];
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
