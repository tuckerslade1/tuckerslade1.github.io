function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // makes the canvas (between header and footer)
    frameRate(60);
}

let x=-100;
let y=0;
let z=0;
let t=0;

function draw() {
  x=map(noise(x,t),0,1,-100,100);
  y=map(noise(y,t),0,1,-100,100);
  z=map(noise(z,t),0,1,-100,100);
  stroke(255,255,z+155);
  strokeWeight(2);
  point(x,y,z);
  orbitControl();
  t+=0.0001
}