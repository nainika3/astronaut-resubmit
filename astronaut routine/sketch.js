var astronaut;
var bg,sleep,brush,gym,eat,drink,move;


function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym1","gym2");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(400, 400);

astronaut=createSprite(300,230,20,20);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;

text("Up Arrow=Brushing",295,35);
text("Down Arrow=Gymming",295,40);
text("Left Arrow=Eating",295,45);
text("Right Arrow=Bathing",295,50);
text("m key=Moving",295,55);

}

function draw() {
  background(bg);
 
  createEdgeSprites();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    
    }

    if(keyDown("m")){
      astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.y=350;
      astronaut.velocityX=5;
      astronaut.velocityY=-5;
      
      }

  drawSprites();
}