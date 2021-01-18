class Food{
    constructor(){
        this.image = loadImage("images/milk.png");
        /* refers to the object of Food class's property */
        this.foodStock = foodStock /*global variable*/
        this.foodStock = 0;
        this.lastFed;
    }
    updateFoodStock(){

    }
    getFoodStock(){

    }
    deductFood(){
        
    }
    display(){
        var x = 100, y= 200

        //imageMode(CENTER)
        //image(this.image, 700, 300, 70, 70)

        if(this.foodStock!=0){
            for(var i = 0; i < this.foodStock; i++){
                if(i%10 === 0){
                    x = 100;
                    y = y+50;
                }
                imageMode(CENTER);
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }
}