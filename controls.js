class Controls{
    constructor(){
        this.up=false;
        this.down=false;
        this.left=false;
        this.right=false;


        this.enter = false;
        this.escape = false;



        this.upKey = "w";
        this.downKey = "s";
        this.leftKey = "a";
        this.rightKey = "d";

        this.enterKey = "Enter";
        this.escapeKey = "Escape";


        this.#addKeyboardListeners();
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case this.upKey:
                    this.up=true;
                    break;
                case this.downKey:
                    this.down=true;
                    break;
                case this.leftKey:
                    this.left=true;
                    break;
                case this.rightKey:
                    this.right=true;
                    break;
                case this.enterKey:
                    this.enter=true;
                    break;
                case this.escapeKey:
                    this.escape=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case this.upKey:
                    this.up=false;
                    break;
                case this.downKey:
                    this.down=false;
                    break;
                case this.leftKey:
                    this.left=false;
                    break;
                case this.rightKey:
                    this.right=false;
                    break;
                case this.enterKey:
                    this.enter=false;
                    break;
                case this.escapeKey:
                    this.escape=false;
                    break;
            }
        }
    }
}