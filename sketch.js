var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleIMG ;
var leaf , leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
apple = new Group();
leaf = new Group();

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX; 

  createapples();
  createleaf();

//creating continous enemies
var select_sprite = Math.round(random(1,2));
  
if (World.frameCount % 100 == 0) {
  if (select_sprite == 1) {
    createapples();
  } else if (select_sprite == 2) {
    createleaf();
  
}  
}



  drawSprites();
}



function createapples() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50,350),40,10,10);
    //add image here
    apple.addImage(appleIMG);
    //give scale here
    apple.scale = 0.1 ;
    //give velocity here
    apple.velocityY = 7
    //give lifettime hre
    apple.lifetime = 45
    
    }
}

function createleaf() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    leaf = createSprite(random(50,350),40,10,10);
    //add image here
    leaf.addImage(leafImg);
    //give scale here
    leaf.scale = 0.1 ;
    //give velocity here
    leaf.velocityY = 7
    //give lifettime hre
    leaf.lifetime = 45
    
    }
}


