const xMargin = 15;
const yMargin = 20;
const xSpacing = 10;
const ySpacing = 10;
const variability = 0.1 // range [0,1], lower value = less variable
const circleSize = 2 // size of circles
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
let t = 0;

function setup() {
    createCanvas(windowWidth-12, windowHeight-12); // makes the canvas (between header and footer)
    // making array 1.2x larger than screen so screen will always be full
    for (let x=0; x<=1.2*(width-(2*xMargin)); x+=xSpacing) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=0; y<=1.2*(height-(2*yMargin)); y+=ySpacing) { // making array 1.2x larger than screen so screen will always be full
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

function draw() {
    colorMode(HSB);
    background(0,0,8, 0.5);
    for (let x=0; x<dotArray.length; x++) {
        //xPos = x*xSpacing;
        //xPos = map(noise(xPos,frameCount),0,1,xPos-variability, xPos+variability);
        xPos = dotArray[x][0][0];
        for (let y=0; y<dotArray[0].length; y++) {
            //yPos = dotArray[x][y][1];
            //yPos = map(noise(yPos,frameCount),0,1,yPos-variability,yPos+variability);
            yPos = dotArray[x][y][1];
            push();
            stroke(map(noise(xPos/300,yPos/300,t+15),0,1,263,283),map(noise(xPos/300,yPos/300,t+15),0,1,0,100),80);
            strokeWeight(2);
            fill(map(noise(xPos/300,yPos/300,t+15),0,1,263,283),map(noise(xPos/300,yPos/300,t+15),0,1,0,100),60)
            circle(xPos+xMargin,yPos+xMargin,circleSize)
            pop();
        }
    }
    t+=0.05
}

function windowResized(){
    resizeCanvas(windowWidth-12, windowHeight-12);
  }