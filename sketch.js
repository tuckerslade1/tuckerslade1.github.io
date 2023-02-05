function setup() {
    createCanvas(windowWidth-20, windowHeight-122);
    frameRate(60);
  }
  
    // TODO: Draw horizontal and vertical guidelines
  
  function draw() {
    background(20, 20, 20, 40);
    translate(width/2, height/2);
    rotate(radians(frameCount));
    push();
    colorMode(HSB);
    rectMode(CENTER);
    stroke(frameCount/2, 100, 100);
    strokeWeight(2);
    fill(255);
    rect(0, 0, 100, 100);
    pop();
  
  }