var garden,rabbit,apple,orange,leaves;
var gardenImg,rabbitImg,appleImg,orangeImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orange.png")
  leavesImg = loadImage("leaves.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(200,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprite=Math.round(random(1,2))

  if (frameCount % 80==0) {
   if (select_sprite==1) {
    createApples()
   } 
   else if(select_sprite==2){
   createOranges()
   }
   else{
   createLeaves()
   }
  }

}

function createApples() {
 apple=createSprite(random(50,350),40,10,10)
 apple.addImage(appleImg)
 apple.scale = 0.1 
 apple.velocityY=3
 apple.lifetime=80

}

function createOranges(){
 orange=createSprite(random(50,350),40,10,10)
 orange.addImage(orangeImg)
 orange.scale = 0.1
 orange.velocityY=3
 orange.lifetime=80

}

function createLeaves(){
 leaves=createSprite(random(50,350),40,10,10)
 leaves.addImage(leavesImg)
 leaves.scale = 0.1
 leaves.velocityY=5
 leaves.lifetime=80


}










