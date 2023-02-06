function setup() {
    createCanvas(windowWidth-4, windowHeight-126, WEBGL); // makes the canvas (between header and footer)
    frameRate(60);
    colorMode(HSB);
    strokeWeight(2); // thickness of outline
  }
   
let squareSpacing = 100
let squareWidth = 35
function draw() {
  background(20, 20, 20, 40);

  push();
  let row = 0;
  for (let posX = 0; posX <= width; posX += squareSpacing) {
    let column = 0;
    push(); // used to reset the row position after generating each row
    for (let posY = 0; posY <= width; posY += squareSpacing) {
      // rotating cubes based on mouse position
      let x = posX - width/2
      let y = posY - height/2
      let angle = atan2((mouseY - height/2) - y, (mouseX - width/2) - x)
      rotateX(angle)
      rotateY(angle)
      rotateZ(angle)

      let hue = map(row, 0, windowWidth/squareSpacing + 1, 0, 360) // color of cube determined by its column
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

function windowResized(){
  resizeCanvas(windowWidth-4, windowHeight-126);
}