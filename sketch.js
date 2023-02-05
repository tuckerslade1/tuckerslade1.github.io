function setup() {
    createCanvas(windowWidth-20, windowHeight-126);
    frameRate(60);
    //background(20, 20, 20, 255);
  }
   
let squareSpacing = 100
let squareWidth = 25
function draw() {
  background(20, 20, 20, 40);
  translate(width/2, height/2);
  rotate(radians(frameCount));

  push();
  colorMode(HSB);
  rectMode(CENTER);
  stroke((frameCount/2) % 360, 100, 100);
  strokeWeight(2);
  fill(255);
  for (let posX = 3 * -width/2; posX <= 3 * width/2; posX += squareSpacing) {
    for (let posY = 3 * -height/2; posY <= 3 * height/2; posY += squareSpacing) {
      square(posX, posY, squareWidth);
    }
  }
  pop();

}