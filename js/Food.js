class Food{
    constructor(){
        this.image = loadImage("images/milk.png");
        this.foodStock = foodStock;
        this.lastFed;
    }
    updateFoodStock(){

    }
    getFoodStock(){

    }
    deductFood(){
        
    }
    display(){
        var x = 500, y= 300

        imageMode(CENTER)
        image(this.image, 700, 300, 70, 70)

        if(this.foodStock!=0) {
            for(var i = 0; i < this.foodStock; i++){
                if(i%10 === 0){
                    x = 500;
                    y = y+50;
                }
                imageMode(CENTER);
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }
}