
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = createSprite(1200, 680, 20, 100);
	wall2 = createSprite(1300, 690, 200, 20);
	wall3 = createSprite(1400, 680, 20, 100);
	wall1.shapeColor = ("red");
	wall2.shapeColor = ("red");
	wall3.shapeColor = ("red");

	paper = new Paper(300, 500, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



