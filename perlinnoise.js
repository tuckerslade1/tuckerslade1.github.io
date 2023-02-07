const xMargin = 0;
const yMargin = 0;
const xSpacing = 100;
const ySpacing = 100;
const variability = 0.1 // range [0,1], lower value = less variable
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
let t = 0;

function setup() {
    createCanvas(windowWidth-4, windowHeight-4); // makes the canvas (between header and footer)
    // making array 4x larger than screen so screen will always be full
    for (let x=0; x<=4*(width-(2*xMargin)); x+=xSpacing) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=0; y<=4*(height-(2*yMargin)); y+=ySpacing) { // making array 4x larger than screen so screen will always be full
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

/*
// debugging dotArray
for (i=0;i<dotArray.length;i++) {
    for (j=0; j<dotArray[i].length;j++) {
        for (k=0; k<dotArray[i][j].length;k++) {
            console.log(dotArray[i][j][k].toString());
        }
    }
}
*/

function draw() {
    colorMode(HSB);
    background(60,3,90, 0.3);
    for (let x=0; x<dotArray.length; x++) {
        //xPos = x*xSpacing;
        //xPos = map(noise(xPos,frameCount),0,1,xPos-variability, xPos+variability);
        xPos = dotArray[x][0][0] * map(noise(t+15),0,1,1-variability,1+variability);
        for (let y=0; y<dotArray[0].length; y++) {
            //yPos = dotArray[x][y][1];
            //yPos = map(noise(yPos,frameCount),0,1,yPos-variability,yPos+variability);
            yPos = dotArray[x][y][1] * map(noise(t+5),0,1,1-variability,1+variability);
            push();
            stroke(0,2,6);
            strokeWeight(20);
            point(xPos+xMargin,yPos+yMargin);
            pop();
        }
    }
    t+=0.005
}