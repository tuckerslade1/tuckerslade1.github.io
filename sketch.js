function setup() {
    createCanvas(windowWidth, windowHeight); // makes the canvas (between header and footer)
    frameRate(60);
}

let x=0;
let y=0;
let z=0;
let t=0;

function draw() {
  background(20, 20, 20, 40);
  translate(width/2, height/2);
  stroke(255,255,255);
  strokeWeight(40);
  point(x,y);
  t+=0.005
}