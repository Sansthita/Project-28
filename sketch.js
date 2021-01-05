var boy, boy_image;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	boy_image = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);

	var boy = createSprite(150, 450, 30, 30);
	boy.addImage(boy_image);
	boy.scale = 0.2;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500, 500, 50, 50);
	stone = new Stone(300, 1200);
	mango1 = new Mango(900, 357);
	mango2 = new Mango(950, 220);
	mango3 = new Mango(990, 320);
	mango4 = new Mango(820, 356);
	mango5 = new Mango(750, 390);
	mango6 = new Mango(1100, 400);
	mango7 = new Mango(850, 230);
	slingshot = new Slingshot(boy.body, {x:200, y:160});
	Engine.run(engine);

	
  
}


function draw() {
 
  background("white");
  
  
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
	Matter.body.setPosition(boy, {x: mouseX, y:mouseY});
}