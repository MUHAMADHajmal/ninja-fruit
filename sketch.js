var alien1Img ,alien1,alien1Group;
var alien2Img, alien2,alien2Group;
var fruit1Img,fruit1,fruit1Group;
var fruit2Img,fruit2,fruit2Group;
var fruit3Img,fruit3,fruit3Group;
var fruit4Img,fruit4,fruit4Group;
var knifeImg,knife;
var gameoverImg,gameover;
var score;
var gameState = "play";



function preload(){
  alien1Img = loadImage("alien1.png"); 
  alien2Img = loadImage("alien2.png");
  
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  
  knifeImg = loadImage("sword.png");
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
  
  gameoverImg = loadImage("gameover.png");
  gameoverSound = loadSound("gameover.mp3");
  
}

function setup(){
 createCanvas(600,600); 
  
  knife = createSprite(300,300,50,50);
  knife.addImage("knife",knifeImg);
  knife.scale = 0.5
  
  
  
  score = 0;
  
  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  
  alien1Group = new Group();
  alien2Group = new Group();
  
  
  
  
}

function draw(){
  
 background('lightblue'); 
  
  
  
  text("Score: "+ score, 500,50);
  
  
  gameover = createSprite(300,300,50,50);
  gameover.addImage("gameover",gameoverImg);
     
  
  gameover.visible=false;
  
  
     knife.y = World.mouseY;
  knife.x = World.mouseX;
  
  var select_fruit = Math.round(random(1,4));
  
   if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      fruit_1();
    } else if (select_fruit == 2) {
      fruit_2();
    } else if (select_fruit == 3) {
      fruit_3();
    } else {
      fruit_4();
    }
  }
  
   var select_alien = Math.round(random(1,4));
  
   if (World.frameCount % 100 == 0) {
    if (select_alien == 1) {
      alien_1();
    } else if (select_alien == 2) {
      alien_2();
      
    } 
  }
  
  if(knife.isTouching(fruit1Group)){
     
    fruit1Group.destroyEach();
    
     score = score+1;
     
    knifeSound.play();
     
     }
  
  if(knife.isTouching(fruit2Group)){
     
    fruit2Group.destroyEach();
    
     score = score+2;
     
    knifeSound.play();
     
     }
  
  if(knife.isTouching(fruit3Group)){
     
    fruit3Group.destroyEach();
    
     score = score+3;
     
    knifeSound.play();
     
     }
  
  if(knife.isTouching(fruit4Group)){
     
    fruit4Group.destroyEach();
    
     score = score+4;
     
    knifeSound.play();
     
     } 
  
  if(knife.isTouching(alien1Group)  ){
     
    alien1Group.destroyEach();
    
    
    score = score-5;
    
     }
  
 if(knife.isTouching(alien2Group)  ){
   
   alien2Group.destroyEach();
   
   score=score-5;
   
   
 }
  if (score < 0 ){
      
    
    fruit1Group.destroyEach();
    fruit2Group.destroyEach();
    fruit3Group.destroyEach();
    fruit4Group.destroyEach();
    
    alien1Group.destroyEach();
    alien2Group.destroyEach();
    
    gameover.visible=true;
    
    text("Press 'spacebar' to restart", 50,50);
    
    
    
      }
  
  if(keyDown("space")){
     
    gameover.visible=false;
               
    
    score=0;
     
     }
  
drawSprites();
  
  
  
}

function fruit_1 () {
  
  fruit1=createSprite(0,Math.round(random(20,370)), 10, 10);
  fruit1.addImage("fruit1",fruit1Img);
  fruit1.scale = 0.3;
  fruit1Group.add(fruit1);
  fruit1.lifetime=250;
  fruit1.velocityX=4;
  
  
  
  
}

function fruit_2 (){
  
  fruit2=createSprite(0,Math.round(random(20,370)), 10, 10);
  fruit2.addImage("fruit2",fruit2Img);
  fruit2.scale = 0.3;
  fruit2Group.add(fruit2);
  fruit2.lifetime=250;
  fruit2.velocityX=4;
}

function fruit_3 (){
  
  fruit3=createSprite(0,Math.round(random(20,370)), 10, 10);
  fruit3.addImage("fruit3",fruit3Img);
  fruit3.scale = 0.3;
  fruit3Group.add(fruit3);
  fruit3.lifetime=250;
  fruit3.velocityX=4;
}

function fruit_4 (){
  
  fruit4=createSprite(0,Math.round(random(20,370)), 10, 10);
  fruit4.addImage("fruit4",fruit4Img);
  fruit4.scale = 0.3;
  fruit4Group.add(fruit4);
  fruit4.lifetime=250;
  fruit4.velocityX=4;
}

function alien_1 (){
  
  alien1=createSprite(0,Math.round(random(20,370)), 10, 10);
  alien1.addImage("alien1",alien1Img);
  alien1.scale = 1;
  alien1Group.add(alien1);
  alien1.lifetime=250;
  alien1.velocityX=3;
}

function alien_2 (){
  
  alien2=createSprite(0,Math.round(random(20,370)), 10, 10);
  alien2.addImage("alien2",alien2Img);
  alien2.scale = 1;
  alien2Group.add(alien2);
  alien2.lifetime=250;
  alien2.velocityX=3
  
}










