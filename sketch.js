var trex, trex_running, trex_collided, Cloudsimage, Obstacle1, Obstacle2, Obstacle3, Obstacle4;
var ground, invisibleGround, groundImage, Obstacle5, Obstacle6, Clouds, PlayIcon, RestartIcon;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  Cloudsimage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  Obstacle1 = loadImage("obstacle1.png");
  Obstacle2 = loadImage("obstacle2.png");
  Obstacle3 = loadImage("obstacle3.png");
  Obstacle4 = loadImage("obstacle4.png");
  Obstacle5 = loadImage("obstacle5.png");
  Obstacle6 = loadImage("obstacle6.png");    
  }

function setup() {
  createCanvas(800, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnObstacles();
  spawnClouds();
  drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(800,160,10,80);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    console.log(rand);
    switch(rand){
      case 1 : obstacle.addImage(Obstacle1);  
      break;
      case 2 : obstacle.addImage(Obstacle2);
      break;
      case 3 : obstacle.addImage(Obstacle3);
      break;
      case 4 : obstacle.addImage(Obstacle4);
      break;
      case 5 : obstacle.addImage(Obstacle5);
      break;
      case 6 : obstacle.addImage(Obstacle6);
      break;  
      }
            
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 500;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(800,100,40,10);
    cloud.y = random(10,100);
    cloud.addImage(Cloudsimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 1000;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}