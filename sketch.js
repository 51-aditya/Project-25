const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var line1;


function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,20);

	paper = new Paper(200,200,50); 

	line1 =  new Bin(700,635,180,110);
	//line2 =  new Bin(500,590,20,140);
	//line3 =  new Bin(700,590,20,200);

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(225);
  drawSprites();

  paper.display();
  line1.display();
  //line2.display();
  //line3.display();
  ground.display();
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-300});
	}
}