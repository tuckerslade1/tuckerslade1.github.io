function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // makes the canvas (between header and footer)
    frameRate(60);
}

let x=-100;
let y=0;
let z=0;
let t=0;

function draw() {
  background(20, 20, 20, 255);
  stroke(255,255,255);
  strokeWeight(10);
  point(x,map(noise(x,y),0,1,-100,100), 100);
  orbitControl();
  x+=1
}