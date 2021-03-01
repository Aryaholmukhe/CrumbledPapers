
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, trashcan, ground, groundBody, s1, s2, s3

function preload()
{
	
}

function setup() {
	createCanvas(1367, 700);

	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	groundBody = Bodies.rectangle(width/2, height-35, width,10, {isStatic:true})
	World.add(world, groundBody)
	ground = createSprite(width/2, height-35, width,10);
	paperObject = new Paper(200, 500);
	paperObject.shapeColor="white";

	s1 = new Dustbin(1000, 610, 20, 100)
	s2 = new Dustbin(1100, 650, 200, 20)
	s3 = new Dustbin(1200, 610, 20, 100)
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  groundBody.x=ground.x;
  drawSprites();
  paperObject.display()
  ground.display()
  s1.display()
  s2.display()
  s3.display()
  keyPressed();
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW) ){
	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:5, y:-10})
}
}

