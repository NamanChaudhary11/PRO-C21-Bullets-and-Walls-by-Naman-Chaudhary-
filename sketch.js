var bullet,speed,weight;
var wall,thickness;


function setup() {                                 
  createCanvas(1600,400);
 
 
  speed=random(223,321);
  weight=random(30,52);
 


  bullet=createSprite(50, 200, 50, 10 );
  bullet.shapeColor=color(255,215,0);
  bullet.velocityX=25;
  

  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
   
  }

function draw() {
background(0,0,0);  


 
if(hasCollided(bullet,wall)){
bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  
 if(damage>10)
 {
    wall.shapeColor=color(255,0,0);
    fill("red");
    stroke("orange");
    textSize(30);
    text("LOT OF !! DAMAGE OCCURED  :( ",180,200);
}


if(damage<10)
{
  wall.shapeColor=color(0,255,0);
  fill("yellow");
  stroke("Green");
  textSize(30);
  text(" :) BE HAPPY!! NOT A LOT OF DAMAGE OCCURED :)",160,200);
}
}

 drawSprites();
}

function hasCollided(Zbullet,Zwall)
{
  bulletRightEdge=Zbullet.x+Zbullet.width;
  wallLeftEdge=Zwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

}






