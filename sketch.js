
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var paper1;
var ground1;
var dustbin;
var ground2;
var launcher;


function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(250,500,60)
	ground1 = new Ground(800,690,1600,10)

	dustbin = new Dustbin(1350,675,170,170)

    ground2 = new Ground(1520,350,2,700)

    launcher = new Launcher(paper1.body,{x:200,y:50})

	Engine.run(engine);
  
}


function draw() {
	background("magenta");

  rectMode(CENTER);

  Engine.update(engine)

  
//paper1.bounceOff(ground2)

  paper1.display();
  ground1.display();
  dustbin.display();


  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:650,y:-900})
	}

}


function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}



