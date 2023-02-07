function setup() {
    createCanvas(windowWidth-4, windowHeight-126); // makes the canvas (between header and footer)
    frameRate(60);
    strokeWeight(1); // thickness of outline
}

let spacing = 30;

function draw() {
    background(20, 20, 20);
    for (x = width/2; x >=width/4; x--) {
        push();
        colorMode(HSB);
        stroke(map(noise(x),0,1,185,215), map(noise(x),0,1,80,100), 100);
        noFill();
        circle(width/2,height/2,(width/2)-x);
        pop();
    }
}