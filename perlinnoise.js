const xMargin = 0; // margin from edge of screen
const yMargin = 0;
const squareSize = 72; // size of each square
const variability = 0.1 // range [0,1], lower value = less variable
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
let transparency;
const minTransparency = -0.05;
const maxTransparency = 1.0;
let saturation;
const minSaturation = 0;
const maxSaturation = 110;
let brightness;
const minBrightness = 0;
const maxBrightness = 50;
let t = 0;
let squareColor;

function setup() {
    createCanvas(windowWidth, windowHeight); // makes the canvas (between header and footer)
    rectMode(CENTER);

    
    for (let x=-width/2; x<=width/2 + 2*squareSize; x+=squareSize) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=-height/2; y<=height/2 + 2*squareSize; y+=squareSize) { // 2*squareSize is just to remove small gap at bottom of screen
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

function draw() {
    translate(width/2, height/2);
    for (let x=0; x<dotArray.length; x++) { // iterating over x-values of points in dotArray
        xPos = dotArray[x][0][0];
        for (let y=0; y<dotArray[0].length; y++) { // iterating over y-values of points in dotArray
            yPos = dotArray[x][y][1];
            //transparency = map(noise((xPos+width/2)/300,(yPos+height/2)/300,t+15),0,1,minTransparency,maxTransparency) // can map to brightness levels < 0 and > 100 to increase numbers of very dark and very bright points
            //saturation = map(noise((yPos+height/2)/300,t+15),0,1,minSaturation,maxSaturation);
            //brightness = map(saturation,minSaturation,maxSaturation,minBrightness,maxBrightness);
            push();
            strokeWeight(5);
            stroke(200,200,200,3);
            noFill();
            square(xPos+xMargin,yPos+yMargin,squareSize);
            pop();
        }
    }
    t+=0.01
    push();
    noStroke();
    fill(200,200,200,10);
    circle(mouseX-width/2,mouseY-height/2,40);
    pop();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}