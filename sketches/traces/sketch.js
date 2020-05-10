let diam = 10;
let centX, cenyY

function setup(){
    ww = windowWidth;
    wh = windowHeight;
    //Logger.toggle();

    createCanvas(ww, wh);

    smooth()
    background(180)

    centX = width/2
    centY = height/2
    stroke(0);
    strokeWeight(1);

    //  Transparency or no fill
    // noFill()
    fill(255,20)
}

function draw(){
    if (diam <= 400){
        // Play with this
        //background(180)
        ellipse(centX, centX, diam, diam)
        diam += 10
    }
}
