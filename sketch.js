//Create variables here
var dog, dogImage, happyDog;
var database;
var foodS, foodStock;
var addFoodButton, feedButton;
var feedTime, lastFed;
var foodObj;
var milkFood;

function preload(){
  dogImage = loadImage("images/dogImage.png");
  happyDog = loadImage("images/happyDogImage.png");
}

function setup() {
  createCanvas(1000, 500);
  
  database = firebase.database();

  dog = createSprite(725,250);
  dog.addImage(dogImage);
  dog.scale = 0.4;

  milkFood = new Food();

  foodStock = database.ref("Food").on("value", readStock);

  feedTime = database.ref("FeedTime").on("value", (data)=>{
    lastFed = data.val();
  })

  addFoodButton = createButton("Add food!");
  addFoodButton.position(1230,350);
  addFoodButton.mousePressed(()=>{
    ++foodStock;
    milkFood.foodStock = foodStock;
  });

  feedButton = createButton("Feed Bruno!");
  feedButton.position(1225,250);   
  feedButton.mousePressed(()=>{
    dog.addImage(happyDog);
    writeStock(foodStock);

    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()
    })
  })

  foodObj = new Food();
}

function draw() {  
  background(46, 139, 87);

  fill(255,255,254);
  textSize(22);
  if(lastFed>=12){
    text("Last Fed: "+ lastFed%12 + " PM",50,100);
  }else if(lastFed === 0){
    text("Last Fed: 12 AM",50,100);
  }else{
    text("Last Fed: "+ lastFed + " AM",50,100);
  }

  fill("Yellow");
  textSize(40);
  text("SHREYA'S VIRTUAL PET!", 250, 50);

  fill("Black");
  textSize(22);
  text("Food remaining: " + foodStock, 650, 475);

  fill("White");
  textSize(18);
  text("Hint: Press the 'Feed Bruno!' button to feed Shreya's pet!", 70, 475);

  milkFood.display();

  drawSprites();
}

function readStock(data){
  foodStock = data.val();
  milkFood.foodStock = foodStock;
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

