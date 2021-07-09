var KK
var KKimg
var krabsAni, krabs
var plank, plankimg, plankGroup
var bottle, bottleimg
var money, moneyimg, moneyGroup
var PLAY = 1
var END = 0
var gameState = PLAY
var invisGround
var edges
var GameOver, GameOverimg

function preload(){
  KKimg = loadImage("KKinside.png")
  krabsAni = loadAnimation("Krabs3.png","Krabs2.png")
  plankimg = loadAnimation("plank1.png","plank2.png")
  bottleimg = loadImage("bottle.png")
  moneyimg = loadImage("money.png")
  GameOverimg = loadImage("gameOver.png")
}

function setup(){
  
  createCanvas(700,600);
  
// Moving background
KK=createSprite(300,300,800,800);
KK.addImage(KKimg);
KK.velocityX = -3

krabs = createSprite(200,350,10,10)
krabs.addAnimation("KrabsRunning",krabsAni)
krabs.scale = 0.25

bottle = createSprite(50,400,10,10)
bottle.addImage(bottleimg)
bottle.scale = 0.1

edges = createEdgeSprites()

invisGround = createSprite(350,450,600,10)
invisGround.visible = false


plankGroup = new Group();
moneyGroup = new Group();
}



function draw() {
  background(0);
 if(KK.x<300){
   KK.x = 400
 }
krabs.collide(invisGround)
 if (gameState = PLAY){
  SpawnMoney()
  SpawnPlankton()
  if(keyDown("space") && krabs.y>=100){
      krabs.velocityY = -12;
  }
  krabs.velocityY = krabs.velocityY +0.8
  if(plankGroup.isTouching(bottle)){
    plankGroup.destroyEach()
    GameOver = createSprite(350,300,200,10)
    GameOver.addImage(GameOverimg)
    textSize(20)
    text("PLANKTON STOLE THE SECRET FORMULA!",350,500)
  }
  if(moneyGroup.isTouching(edges)){
    moneyGroup.destroyEach()
    GameOver = createSprite(350,300,200,10)
    GameOver.addImage(GameOverimg)
    textSize(20)
    text("KRABS DIDNT COLLECT THE MONEY!",350,500)
  }
  if(krabs.isTouching(plankGroup)){
    plankGroup.destroyEach()
  }
  if(krabs.isTouching(moneyGroup)){
    moneyGroup.destroyEach()
  }
 }
 
 
  drawSprites();
 
}
function SpawnPlankton(){
  if(frameCount%200=== 0){
    console.log("hey")
    plank = createSprite(740,400,100,10)
    plank.addAnimation("planktonRunning",plankimg)
    plank.scale = 0.125
    plank.velocityX = -3
    plankGroup.add(plank)
  }
  
}

function SpawnMoney(){
if(frameCount%307===0){
  money = createSprite(660,200,100,10)
  money.addImage(moneyimg)
  money.scale = 0.125
  money.velocityX = -3
  moneyGroup.add(money)
  if(moneyGroup.x>700){
    moneyGroup.visible = false
  }
  else{
    moneyGroup.visible = true
  }
}
}
