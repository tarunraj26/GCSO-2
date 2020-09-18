var wall,thickness

var bullet,speed,weight


function setup() {
  createCanvas(1500,400);
  car=createSprite(50, 200, 70, 30);
  wall=createSprite(1200,200,thickness,height/2)
  speed=random(55,90)
  thickness=random(22,83)
  weight=random(40,76)
}

function draw() {
  background(0);  
bullet.velocityX=speed;

if (wall.x-ball.x<(ball.width+wall.width)/2) {
  
ball.velocityX=0;
var deformation=0.5*weight * speed * speed/22509;
if (deformation>108) {
  car.shapeColor="red"
}
if (deformation<180 && deformation>100) {
  car.shapeColor="yellow"
}
if (deformation<100) {
  car.shapeColor="green"
}

}
  drawSprites();
}