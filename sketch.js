var tom, tomStartImage, back, backImage, tom_running, tomEndImage;
var jerry, jerryImage, jerryTeasing, jerryEndImage;

function preload() {
    //load the images here
    tomStartImage = loadAnimation("images/tomOne.png");
    tom_running = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tomEndImage = loadAnimation("images/tomFour.png");

    backImage = loadAnimation("images/garden.png");

    jerryImage = loadAnimation("images/jerryOne.png");
    jerryTeasing = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerryEndImage = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1200, 800);
    //create tom and jerry sprites here

back = createSprite(500, 300);
back.addAnimation("back", backImage);

tom = createSprite(700, 500, 50, 50);
tom.addAnimation("start", tomStartImage);
tom.addAnimation("tomRunning", tom_running);
tom.addAnimation("end", tomEndImage)
tom.scale = 0.1;

jerry = createSprite(200, 505, 50, 50);
jerry.addAnimation("start", jerryImage);
jerry.addAnimation("teasing", jerryTeasing);
jerry.addAnimation("end", jerryEndImage);
jerry.scale = 0.08;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width) / 2 &&
    jerry.x - tom.x < (tom.width - jerry.width) / 2){
    jerry.addAnimation("end", jerryEndImage);
    jerry.changeAnimation("end");
    tom.velocityX = 0;
    tom.addAnimation("end", tomEndImage);
    tom.changeAnimation("end");
    tom.x = 250;
    }


    drawSprites();
   
    text(mouseX + ',' + mouseY, 10, 45);
}


function keyPressed(){

  //For moving and changing animation write code here
    
  if (keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning", tom_running);
      tom.changeAnimation("tomRunning");
      jerry.addAnimation("teasing", jerryTeasing);
      jerry.changeAnimation("teasing");
  }

}
