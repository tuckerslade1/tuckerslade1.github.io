function setup() {
    createCanvas(windowWidth-4, windowHeight-4); // makes the canvas (between header and footer)
    frameRate(1);
}

const xMargin = 100;
const yMargin = 50;
const xSpacing = 10;
const ySpacing = 10;
const variability = 0.1; // 0 - 1, higher value = more movement
let x;
let y;

function draw() {
    colorMode(HSB);
    background(60,6,96,10);
    for (let xPos=xMargin; xPos<=width-xMargin; xPos+=xSpacing) {
        x = map(noise(frameCount),0,1,1-variability,1+variability); // x starts as factor between 1-variability and 1+variability
        x *= xPos; // x value scaled to the correct position
        for (let yPos=yMargin; yPos<=height-yMargin; yPos+=ySpacing) {
            
            y = map(noise(frameCount),0,1,1-variability,1+variability); // y starts as factor between 1-variability and 1+variability
            y *= yPos; // y value scaled to the correct position
            push();
            stroke(217,2,7);
            strokeWeight(1);
            point(x,y);
            pop();
        }
    }
}