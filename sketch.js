const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let canvas, bgColor;
let person, pImage;
let thunderBolt,tbImage;
let drops=[];
function preload(){
    pImage = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
    tbImage = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}
function setup(){
    canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
        
    person = createSprite(500,580,100,100);
    person.addAnimation('personWalking',pImage);
    person.scale=0.30;

    thunderbolt = createSprite(500,90,100,100);
    thunderbolt.addAnimation('thunderbolt',tbImage);
    thunderbolt.scale=0.50;

    var maxdrops =100;

    for (var i=0; i<maxdrops;i++){
        drops.push(new Raindrops(random(10,990),random(10,690)));
    }

}

function draw(){
    bgColor = background('#000');

    Engine.update(engine);

    drops[1].display();

    drawSprites();
}   

