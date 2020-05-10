function setup() {
    ww = windowWidth;
    wh = windowHeight;
    createCanvas(ww, wh);
}

function draw() {
  background(255);
  drawCircle(width/2,height/2,350);
}

function drawCircle( x,  y,  radius) {
    ellipse(x, y, radius, radius);
    if(radius > 8) {
        noFill()
        drawCircle(x + radius/2, y, radius/2);
        drawCircle(x - radius/2, y, radius/2);
        drawCircle(x, y + radius/2, radius/2);
        drawCircle(x, y - radius/2, radius/2);
    }
}
