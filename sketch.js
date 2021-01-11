function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 0, 50, 50);
  movingRect=createSprite(400,400,50,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

fixedRect.velocityY = 5;
movingRect.velocityY = -5;

}

function draw() {
  background(255,255,255);
  
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){

      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRect.velocityX = movingRect.velocityX * (-1);



  }

  if( movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
  }

  drawSprites();
}