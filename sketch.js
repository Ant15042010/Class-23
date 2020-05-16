const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball,ground,box1;
function setup (){
  createCanvas (400,400);
  engine = Engine.create ();
  world = engine.world;
  ground=new Ground();
  box1=new Box(200,200,40,40);
  box2=new Box(204,10,40,40);
  console.log (ball);
}
function draw (){
  background (rgb(0,75,0));
  Engine.update(engine);
  ground.display ();
  box1.display();
  box2.display();
}