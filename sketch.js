var groundImage;
function preload(){
  groundImage = loadImage("sea.png");
  movement = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  var ground = createSprite(200,200,400,400);
  ground.addImage(groundImage);
  var ship = createSprite(150,200,50,20);
  ship.addAnimation("moving",movement);

}

function draw() {
  background("blue");
 ground.velocityX=2;
 if(sea.x<0){
   sea.x=sea.width/2
 }
}