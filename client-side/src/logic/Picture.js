class Picture{

    constructor(width, height){
        for (let i = 0; i < height; i++) {
            this.array.push(new Array(width).fill(null));
        }
    }

}