var FIXED, MOVING, object, object2, o1, o2;

function setup() {
  createCanvas(displayWidth-20,displayHeight-100);
  o1=createSprite(60,100,400,height);
  o2=createSprite(500,100,30,30);
  o2.shapeColor="pink";
  FIXED = createSprite(width/2+100,height/2+100,20,20);
  MOVING = createSprite(200,200,15,15);
  object = createSprite(width/2-100,height/2-100,20,20);
  object2 = createSprite(width/2,height/2,30,30);
  FIXED.shapeColor="blue";
  MOVING.shapeColor="red";
  object.shapeColor="purple";
  object2.shapeColor="black";
  object.velocityX=6;
  object.velocityY=5;
  o2.velocityX=-5;
}

function draw() {
  background("lightblue");  
  
  MOVING.x=World.mouseX;
  MOVING.y=World.mouseY;

bounceOff(object, object2);

collide(o2, o1);

if(isTouching(MOVING, FIXED)){
  MOVING.shapeColor="green";
  FIXED.shapeColor="yellow";
}
else{
  FIXED.shapeColor="blue";
  MOVING.shapeColor="red";
}

  drawSprites();
}