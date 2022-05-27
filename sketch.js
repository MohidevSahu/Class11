
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,60)
 trex.addAnimation("runningTrex",trex_running)
 trex.scale=0.5
 ground=createSprite(300,190,600,10)
}

function draw(){
  background("lightgray")
  drawSprites()

  if(keyDown("space")){
      trex.velocityY=-12   
  }

  trex.velocityY+=1
  trex.collide(ground) 
}
