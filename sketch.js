
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball,groundObj,leftSide,rightSide;
let ground, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
	var ball_options={
		isStatic: false,
		restituion: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200, 10, 30, ball_options);
	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x, ball.position.y, 30, 30);
  groundObj.display();
  leftSide.display();
  rightSide.display();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}