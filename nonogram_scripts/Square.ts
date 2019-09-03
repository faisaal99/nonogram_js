class Square {
    fillType: string; // Either blank, black or cross (red)
    constructor() {
        const status = Math.floor(Math.random() * (0 - 3)) + 0;
        
        switch (status) {
            case 0:
                this.fillType = "blank";
                break;
            case 1:
                this.fillType = "filled";
                break;
            default:
                this.fillType = "error";
                console.log("Error -- Status is: " + status);
        }
    }
}