const xMargin = 0; // margin from edge of screen
const yMargin = 0;
const xSpacing = 12; // space between each point
const ySpacing = 12;
const xWidth = 1920; // size of design
const yWidth = 1080;
const variability = 0.1 // range [0,1], lower value = less variable
const pointSize = 1 // size of points
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
let transparency;
const minTransparency = -0.3;
const maxTransparency = 1.2;
let saturation;
const minSaturation = 0;
const maxSaturation = 110;
let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight); // makes the canvas (between header and footer)
    colorMode(HSB);
    rectMode(CENTER);

    // making array 1.2x larger than screen so screen will always be full
    for (let x=-xWidth/2; x<=xWidth/2; x+=xSpacing) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=-yWidth/2; y<=yWidth/2; y+=ySpacing) { // making array 1.2x larger than screen so screen will always be full
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

function draw() {
    background(0,0,8,1);
    translate(width/2, height/2);
    for (let x=0; x<dotArray.length; x++) { // iterating over x-values of points in dotArray
        xPos = dotArray[x][0][0];
        for (let y=0; y<dotArray[0].length; y++) { // iterating over y-values of points in dotArray
            yPos = dotArray[x][y][1];
            transparency = map(noise((xPos+xWidth/2)/300,(yPos+yWidth/2)/300,t+15),0,1,minTransparency,maxTransparency) // can map to brightness levels < 0 and > 100 to increase numbers of very dark and very bright points
            saturation = map(transparency,minTransparency,maxTransparency,minSaturation,maxSaturation);
            push();
            stroke(0,saturation,255,transparency);
            strokeWeight(pointSize);
            point(xPos+xMargin,yPos+yMargin);
            pop();
        }
    }
    t+=0.03
}

function windowResized(){
    resizeCanvas(windowWidth-12, windowHeight-12);
}