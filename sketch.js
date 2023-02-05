function setup() {
    createCanvas(windowWidth-20, windowHeight-126);
    frameRate(60);
  }
   
let squareSpacing = 100
let squareWidth = 35
function draw() {
  background(20, 20, 20, 40);
  translate(width/2, height/2);
  rotate(radians(frameCount));

  push();
  colorMode(HSB);
  rectMode(CENTER);
  strokeWeight(2);
  let xCount = 0;
  for (let posX = 3 * -width/2; posX <= 3 * width/2; posX += squareSpacing) {
    let yCount = 0;
    xCount++;
    for (let posY = 3 * -height/2; posY <= 3 * height/2; posY += squareSpacing) {
      stroke((xCount * yCount) % 360, 100, 100);
      fill((xCount * yCount) % 360, 100, 100)
      square(posX, posY, squareWidth);
      yCount++;
    }
  }
  pop();

}