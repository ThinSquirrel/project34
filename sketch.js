
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,bouncepad1;
var ballbtn;




function setup() {
  createCanvas(400,400);

 
  
  engine = Engine.create();
  world = engine.world;
  

 

  ball = new Ball(100,100,20)

  bouncepad1 = new Bounce(200,350,70,20);

  

  
  
}


function draw() 
{
  background("white");
  


  Engine.update(engine);


  
  bouncepad1.display();
  ball.display();

  drawSprites();
}

