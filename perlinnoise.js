const xMargin = 100;
const yMargin = 50;
const xSpacing = 10;
const ySpacing = 10;
const variability = 10 // how many pixels away a point can be from its original position before noise
let dotArray = [];
let pointCoords;
let xPos;
let yPos;
console.log(dotArray);

function setup() {
    createCanvas(windowWidth-4, windowHeight-4); // makes the canvas (between header and footer)
    frameRate(60);
    for (let x=0; x<=width-(2*xMargin); x+=xSpacing) { // creating an array with coordinates of every point in dot field
        dotArray.push([]); // add empty array for each column of dots
        for (let y=0; y<=height-(2*yMargin); y+=ySpacing) {
            dotArray[dotArray.length-1].push([x,y]); // add coordinates of each point to the last item in dotArray
        }
    }
}

// debugging dotArray
for (i=0;i<dotArray.length;i++) {
    for (j=0; j<dotArray[i].length;j++) {
        for (k=0; k<dotArray[i][j].length;k++) {
            console.log(dotArray[i][j][k].toString());
        }
    }
}

function draw() {
    colorMode(HSB);
    background(60,6,96);
    for (let x=0; x<dotArray.length; x++) {
        for (let y=0; y<dotArray[0].length; y++) {
            xPos = dotArray[x][y][0];
            xPos = map(noise(xPos),0,1,xPos-variability, xPos+variability);
            yPos = dotArray[x][y][1];
            yPos = map(noise(yPos),0,1,yPos-variability,yPos+variability);
            push();
            stroke(217,2,7);
            strokeWeight(1);
            point(xPos +xMargin,yPos+yMargin);
            pop();
        }
    }
    console.log(xPos.toString());
}