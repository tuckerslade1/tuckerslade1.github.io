function setup() {
    createCanvas(windowWidth-20, windowHeight-126); // makes the canvas (between header and footer)
    frameRate(60);
  }
   
let squareSpacing = 100
let squareWidth = 35
function draw() {
  background(20, 20, 20, 40);
  translate(width/2, height/2);
  rotate(radians(frameCount)); // rotating the grid of the canvas to make it look like squares are spinning

  push();
  colorMode(HSB);
  rectMode(CENTER);
  strokeWeight(2); // thickness of outline
  let row = 0;
  for (let posX = 3 * -width/2; posX <= 3 * width/2; posX += squareSpacing) {
    let column = 0;
    row++;
    for (let posY = 3 * -height/2; posY <= 3 * height/2; posY += squareSpacing) {
      let hue = (row * column) % 360 // color of square determined by its row and column
      stroke(hue, 100, 100); // changes color of square outline
      fill(hue, 100, 100) // changes fill color of squares
      square(posX, posY, squareWidth); // makes a square
      column++;
    }
  }
  pop();

}