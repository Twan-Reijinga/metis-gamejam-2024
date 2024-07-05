class TextBoxHandler {
    constructor(screenWidth, screenHeight, controlHandler) {
        this.controlHandler = controlHandler;

        this.currentMessage = "";
        this.startTime = 0;
        this.enabled = false;
        this.skipped = false;
        this.charSpeed = 5;
        this.typing = false;
        this.messageStream = [];
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.messageWidth = screenWidth - 20;
        this.messageHeight = screenHeight / 4;
        this.cooldown = 0;
    }

    AddMessageStream(messages, charspeed) {
        this.messageStream = messages;
        this.charSpeed = charspeed;
        this.messages = messages;
        this.AddMessage(this.messages.shift());
    }

    AddMessage(message) {
        this.skipped = false;
        this.currentMessage = message;
        this.startTime = Date.now();
        this.enabled = true;
        this.typing = true;
    }

    Update() {
        if (this.controlHandler.INTERACT.pressed) {
            this.OnContinuePressed();
        }
    }

    OnContinuePressed() {
        if (Date.now() - this.cooldown < 100) return;
        if (this.typing) {
            this.skipped = true;
            this.cooldown = Date.now();
        } else {
            this.CloseMessage();
            this.cooldown = Date.now();
        }
    }

    CloseMessage() {
        this.enabled = false;
        if (this.messageStream.length != 0) {
            this.AddMessage(this.messages.shift());
        }
    }

    Draw() {
        if (this.enabled) {
            rect(
                10,
                this.screenHeight - (this.messageHeight + 10),
                this.messageWidth,
                this.messageHeight
            );
            textAlign(CENTER);
            var charcount = round(
                (this.GetElapsedTime() / 1000) * this.charSpeed
            );

            if (this.skipped) {
                charcount = 999999999999999;
            }

            var message = this.currentMessage.slice(0, charcount);

            if (charcount > this.currentMessage.length) {
                this.typing = false;
            }

            text(
                message,
                this.screenWidth / 2,
                (this.screenHeight / 8) * 7 - 10
            );
        }
    }

    GetElapsedTime() {
        return Date.now() - this.startTime;
    }
}
