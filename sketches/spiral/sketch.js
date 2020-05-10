function setup(){
    ww = windowWidth;
    wh = windowHeight;
    smooth();
    background(255);
    noFill()
    //Logger.toggle();
    createCanvas(ww, wh);

    let [cx, cy] = [ww/2, wh/2]
    let [seed_angle, seed_radius] = [random(1),random(1)]
    let [sc1, sc2] = [random(1),random(1)]

    col = 0
    angle = 0

    for (var j = 0; j < 4000; j+=1 ) {
        angle += noise(seed_angle+=.005)*8 - 4
        r = noise(seed_radius += .005)*200

        dcx = noise(sc1+=.01)*100 - 50
        dcy = noise(sc2+=.01)*100 - 50

        px1 = cx + dcx + r*cos(radians(angle))
        px2 = cx + dcx + r*cos(radians(angle + 180))

        py1 = cy + dcy + r*sin(radians(angle))
        py2 = cy + dcy + r*sin(radians(angle + 180))

        if (col == 255){
            change = -1
        }
        if (col == 0) {
            change = 1
        }
        strokeWeight(1);
        stroke( col+=change, 60)
        line(px1,py1,px2,py2)
    }

}

function spiral(){
    r = 9;
    lx = -999
    ly = -999

    stroke(0, 30);
    noFill();

    centX = ww/2
    centY = wh/2

    seed_noise = random(10)
    for (var ang = 0; ang < 100000; ang+=1) {
        r += .5
        nr = r + noise(seed_noise)*50 - 25
        seed_noise += .1

        rad = radians(ang)
        x = centX + (nr * cos(rad))
        y = centY + (nr * sin(rad))
        if (lx > -999) {
            line(x,y,lx,ly)
        }
        lx = x
        ly = y
    }
}
