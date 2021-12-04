var towerImg, tower;
var doorImg, door,doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var gameState = end
var invisibleBlock2

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 2;

  //ghost
  ghost = createSprite(300,400,10,10)
  ghost.addImage("host",ghostImg)
  ghost.scale =0.5

 //groups
 invisibleBlockGroup = new Group ();
 climbersGroup = new Group();
 doorsGroup = new Group ();

 //something
 invisibleBlock2 = createSprite(300,600,650,1);


 invisibleBlockGroup.add(invisibleBlock2)








}

function draw() {
  background("black");
  
  if(tower.y > 400){
      tower.y = 300
  }
 
 //gamestate
 if (gameState==="play") {
   //control
   if(keyDown(UP_ARROW)) {
    ghost.velocityY = -10


   }
   if(keyDown(LEFT_ARROW)){
    ghost.x = ghost.x -4

   } 
   if(keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x +4
 
   }

   //gravity
   ghost.velocityY = ghost.velocityY +0.3
 


   //somethig
   if (ghost.isTouching(invisibleBlockGroup)) {
   gameState = "end"

   }

   if (ghost.isTouching(climbersGroup)){
   ghost.velocityY = 0

   }

   //music
   spookySound.loop()

   

   spawndoors ();
  }

  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fim de Jogo", 230,250)
    ghost.destroy();
    invisibleBlockGroup.destroyEach();
    climbersGroup.destroyEach();
    doorsGroup.drestroyEach();
    tower.destroy();
    



  }

 











 drawSprites ();   
}


function spawndoors () {
  if(frameCount % 240 === 0) {
   var door = createSprite(300,0,40,50);
   var climber = createSprite(300,70,40,50);
   var invisibleBlock = createSprite(300,70,40,5);
   door.x = Math.round(random(100,500));
   door.velocityY = 2;
   climber.velocityY = 2;
   invisibleBlock.velocityY = 2;
   //door.scale = 1;
   door.lifeTime = 300;
   climber.lifeTime = 300;
   invisibleBlock.lifeTime = 300;
   door.depth = ghost.depth;
   ghost.depth = ghost.depth +1;
   
   //about groups
   climbersGroup.add(climber);
   invisibleBlockGroup.add(invisibleBlock);
   doorsGroup.add(door)

   climber.x = door.x;
   invisibleBlock.x = door.x;

  door.addImage("doors",doorImg)
  climber.addImage("climbers",climberImg)
  }





}