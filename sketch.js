var PLAY=1;
var END=0;

var bow , arrow,  scene;
var redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("badhiya paani.jpg");
  arrowImage = loadImage("badhiya torpedo.png");
  bowImage = loadImage("ohio.png");
  red_balloonImage = loadImage("akula.png");
  green_balloonImage = loadImage("akula.png");
  pink_balloonImage = loadImage("akula.png");
  blue_balloonImage = loadImage("akula.png");
  
}



function setup() {
  createCanvas(2000,800);
  
  //creating background
  scene = createSprite(0,0,400,2000);
  scene.addImage(backgroundImage);
  scene.scale = 1.5
  
  // creating bow to shoot arrow
  bow = createSprite(100,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x =scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  
 if (keyDown("space")){
   createArrow();
 }
  
  if (arrowGroup.isTouching(redB)){
   redB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  }
  
  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
   score=score+1;
  }
  
  if (arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  if (arrowGroup.x<50){
    arrowGroup.destroyEach();
  }

  
  if (arrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   arrowGroup.destroyEach();
   score=score+3;
 }
  
  arrowGroup.setLifetimeEach(1.2);
  redB.setLifetimeEach(-2);
  drawSprites();
  text("Score: "+ score, 270,30);
}


function redBalloon() {
  var red = createSprite(600,Math.round(random(100, 200)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX =- 3;
  red.lifetime = 150;
  red.scale = 0.4;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(600,Math.round(random(100, 200)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = -3;
  blue.lifetime = 150;
  blue.scale = 0.5;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(600,Math.round(random(100, 200)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = -3;
  green.lifetime = 150;
  green.scale = 0.5;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(600,Math.round(random(100, 200)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX =- 3;
  pink.lifetime = 150;
  pink.scale = 0.5
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = 4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
