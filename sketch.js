var car,car1,car2,car3,car4,wall;
var speed,weight;

function setup() {
createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car1 = createSprite(50, 170, 30, 30);
  car2 = createSprite(50, 120, 30, 30);
  car3 = createSprite(55, 220, 30, 30);
  car4 = createSprite(50, 270, 30, 30);

  wall = createSprite(1500,200,100,height/2);
  wall.shapeColor = color(80,80,80);

  

}

function draw() {
  background(0,0,0);  

  if(wall.x-car1.x < (car1.width + wall.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5 *weight *speed *speed/22500

    if(deformation>108)
    {
      car1.shapeColor = color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car1.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car1.shapeColor = color(0,255,0);
    }

  }

  if(wall.x-car2.x < (car2.width + wall.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5 *weight *speed *speed/22500

    if(deformation>108)
    {
      car2.shapeColor = color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car2.shapeColor = color(0,255,0);
    }

  }

  if(wall.x-car3.x < (car3.width + wall.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5 *weight *speed *speed/22500

    if(deformation>108)
    {
      car3.shapeColor = color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car3.shapeColor = color(0,255,0);
    }

  }

  if(wall.x-car4.x < (car4.width + wall.width)/2)
  {
    car4.velocityX = 0;
    var deformation = 0.5 *weight *speed *speed/22500

    if(deformation>108)
    {
      car4.shapeColor = color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car4.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car4.shapeColor = color(0,255,0);
    }

  }
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
  drawSprites();
}