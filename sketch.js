function setup() {
    createCanvas(windowWidth-20, windowHeight-126, WEBGL); // makes the canvas (between header and footer)
    frameRate(60);
  }
   
let squareSpacing = 100
let squareWidth = 35
function draw() {
  background(20, 20, 20, 40);

  //rotateX(radians(frameCount*1.2)); // rotating the grid of the canvas to make it look like squares are spinning
  //rotateY(radians(frameCount));

  push();
  translate(-width/2, -height/2) // start at top left corner
  colorMode(HSB);
  strokeWeight(2); // thickness of outline
  let row = 0;
  for (let posX = 3 * -width/2; posX <= 3 * width/2; posX += squareSpacing) {
    let column = 0;
    push(); // used to reset the row position after generating each row
    for (let posY = 3 * -height/2; posY <= 3 * height/2; posY += squareSpacing) {
      let hue = (row * column) % 360 // color of square determined by its row and column
      stroke(0); // changes color of square outline
      fill(hue, 100, 100) // changes fill color of squares
      box(squareWidth); // makes a square
      translate(0, squareSpacing) // move across rows
      column++;
    }
    pop(); // used to reset the row position after generating each row
    row++;
    translate(squareSpacing, 0) // move across columns
  }
  pop();

}