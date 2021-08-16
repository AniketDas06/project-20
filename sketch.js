var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=("white");
  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor=("blue");
}

function draw() {
  background("red");  

if(wall.x-car.x < (car.width+wall.width/2)){
  car.velocityX=0;
  var deformation= 0.5 * weight * speed* speed/22500;
  console.log(deformation)
  if(deformation > 180)
  {
    car.shapeColor="green";
    console.log(1)
}


  if(deformation<180 && deformation>100)
  {
    car.shapeColor="yellow";
    console.log(2)
  }

  if(deformation<100)
  {
    car.shapeColor="black";
  }

}

  drawSprites();
}