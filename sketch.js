var fixrect;
var movingrect;

function setup() {

  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300,100,100,40);
  fixrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixrect.x < fixrect.width/2 + movingrect.width/2 && 
    fixrect.x - movingrect.x < fixrect.width/2 + movingrect.width/2 && 
    movingrect.y - fixrect.y < fixrect.height/2 + movingrect.height/2 &&
    fixrect.y - movingrect.y < fixrect.height/2 + movingrect.height/2){
    
      fixrect.shapeColor = "red";
      movingrect.shapeColor = "red"
    }
    else{
      fixrect.shapeColor = "green";
      movingrect.shapeColor = "green";
    }


  drawSprites();
}