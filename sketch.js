var groundImage;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  var sea = createSprite(200,200,40,40);
  sea.addImage(seaImg);
  var ship = createSprite(150,200,50,20);
  ship.addAnimation("shipanimation",shipImg1);

}

function draw() {
  background("blue");
 ground.velocityX = 2;
 if(sea.x < 0){
   sea.x=sea.width/2
 }
}