var PLAY=1;
var END=0;
var gameState=PLAY;

var cat1,cat2,cat3,cat4,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1,mouse2,mouse3,mouse4,mouse1Img,mouse2Img,mouse3Img,mouse4Img;

var garden,gardenImg;

var bg,bgImg;

function preload() {
    
    mouseImg1 = loadAnimation("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png","mouse3.png");
    mouseStop = loadAnimation("cat4.png");

    catImg1 = loadAnimation("cat1.png");
    catRunning = loadAnimation("cat1.png","cat3.png");
    catStop = loadAnimation("mouse4.png");

    gardenImg = loadAnimation("garden.png");

}

function setup(){
    createCanvas(1000,667);
    //create all sprites.

    bg = createSprite(500,330);
    bg.addImage(gardenImg);

    mouse1 = createSprite(150,550);
    mouse1.addImage(mouseImg1);
    mouse1.scale=0.14;

    cat1 = createSprite(750,550);
    cat1.addImage(catImg1);
    cat1.scale=0.14;
    

}

function draw() {
    background("garden");//255
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){
        mouse.addAnimation("mouseTeasing");
        cat.addAnimation("catRunning");

        cat.setVelocity = 0;
        mouse.setVelocity = 0;

        cat.scale = 0.5;
        mouse.scale = 0.5;
    }   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW)
  {
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation(mouseStop);
      mouse.frameDelay = 25;

      cat.addAnimation("catRunning",cat1Img);
      cat.changeAnimation(catStop);
  }

}
