const xMargin = 15;
const yMargin = 20;
const xSpacing = 5;
const ySpacing = 5;
const variability = 0.1 // range [0,1], lower value = less variable
const circleSize = 1 // size of circles
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
let brightness;
let t = 0;

function setup() {
    createCanvas(windowWidth-12, windowHeight-12); // makes the canvas (between header and footer)
    colorMode(HSB);
    rectMode(CENTER);

    // making array 1.2x larger than screen so screen will always be full
    for (let x=0; x<=1.2*(width-(2*xMargin)); x+=xSpacing) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=0; y<=1.2*(height-(2*yMargin)); y+=ySpacing) { // making array 1.2x larger than screen so screen will always be full
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

function draw() {
    background(0,0,8,1);
    for (let x=0; x<dotArray.length; x++) {
        xPos = dotArray[x][0][0];
        for (let y=0; y<dotArray[0].length; y++) {
            yPos = dotArray[x][y][1];
            brightness = map(noise(xPos/30,yPos/30,t+15),0,1,0,100)// mapping to brightness levels < 0 and > 100 to increase numbers of very dark and very bright points
            push();
            stroke(0,0,brightness) 
            strokeWeight(2);
            fill(0,0,brightness)
            square(xPos+xMargin,yPos+yMargin,circleSize)
            pop();
        }
    }
    t+=0.01
}

function windowResized(){
    resizeCanvas(windowWidth-12, windowHeight-12);
}