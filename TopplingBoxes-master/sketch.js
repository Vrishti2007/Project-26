const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,780,1200,20)
    box1 = new Box(800,750,50,50);
    box2 = new Box(1000,750,50,50);
    pig1 = new Pig(900,750,40,40);
    log1 = new Log(900,700,300,PI/2)
    box3 = new Box(800,650,50,50)
    box4 = new Box(1000,650,50,50)
    pig2 = new Pig(900,650,50,50)
   log2 = new Log(900,600,300,PI/2)
    box5 = new Box(900,550,50,50)
    log3 = new Log(870,500,100,PI/5)
    log4 = new Log(930,500,100,PI/-5)
    bird = new Bird(200,200,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}