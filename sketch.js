
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, dustbinImage;

function preload() {

	dustbinImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(400,680,800,20, {isStatic: true});
	World.add(world, ground);

	box1 = new Box(500,600,20,100);
	box2 = new Box(700,600,20,100);
	box3 = new Box(600,660,200,20);

	dustbin = Bodies.rectangle(500,550,200,100, {isStatic: true});
	World.add(world, dustbin);

	paper = new Paper(100,300,20);

	Engine.run(engine);
  
}


function draw() {

	background("white");
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, 800, 20);
  
  box1.display();
  box2.display();
  box3.display();

 image(dustbinImage, dustbin.position.x, dustbin.position.y, 200, 100);

  paper.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60});
	}

}



