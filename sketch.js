function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
    // TODO: Draw horizontal and vertical guidelines
  
  function draw() {
    translate(width/2, height/2);
    push();
    rectMode(CENTER);
    stroke(0)
    strokeWeight(5)
    fill(200)
    rect(0, 0, 100, 100);
    pop();
  }