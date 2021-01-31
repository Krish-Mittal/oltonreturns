
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bd,bx,by,b3,b1,b2,b4,b5,b6,rod,r1,r2;
function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;
	
	rod=new bar(400,200,600,20);
	bd=50;
	bx=400;
	by=600;
  b3=new bob(bx,by,bd);
	r3=new chain(b3.body,rod.body,0,0);
  b2=new bob(450,600,bd)
  r2=new chain(b2.body,rod.body,100,0)
  b1=new bob(350,600,bd)
  r1=new chain(b1.body,rod.body,-100,0)
	b4=new bob(300,600,bd)
  r4=new chain(b4.body,rod.body,-200,0)
  b5=new bob(500,600,bd)
  r5=new chain(b5.body,rod.body,200,0)
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(011111);
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  b4.display();
  b5.display();
  b3.display();
  b2.display();
  b1.display();
  rod.display();
  if(keyWentDown("Up_Arrow"))
  {
    Matter.Body.applyForce(b4.body,b4.body.position,{x:-0.2,y:-0.2});
  }
  
  drawSprites();
 
}



