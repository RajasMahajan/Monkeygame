
var monkey , monkey_running;
var FoodGroup, obstacleGroup;
var score=0;
var bananaImage,obstaceImage;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
createCanvas(400,400);
ground=createSprite(200,360,410,10)
monkey=createSprite(50,310,10,10)
monkey.addAnimation("ff",monkey_running)
  monkey.scale=0.16;
 FoodGroup=new Group();
 obstacleGroup=new Group();
 

}


function draw() {
background("white")
  ground.velocityX=-3
text("Score:"+score,200,15)
 if(ground.x>100){
  ground.x=200;
}
monkey.collide(ground);

  if(keyDown("space")){
  monkey.velocityY=-7;  
}
 monkey.velocityY=monkey.velocityY+1.6;
  
  if(monkey.isTouching(FoodGroup)){
    score=score+2;
    FoodGroup.destroyEach();
  }
  
banana();
obstace();
drawSprites();
}

function banana(){
var banana;
if(frameCount%160===0){
  banana=createSprite(400,Math.round(random(130,240)),20,20);
  banana.velocityX=-6;
  banana.addImage(bananaImage)
  banana.scale=0.1;
  FoodGroup.add(banana);
}
}

function obstace(){
var obstace
if(frameCount%120===0){
obstace=createSprite(400,320,20,20)
obstace.velocityX=-4;
ground.collide(obstace);
  obstace.addImage(obstaceImage);
  obstace.scale=0.2;
  obstacleGroup.add(obstace);
}
}


