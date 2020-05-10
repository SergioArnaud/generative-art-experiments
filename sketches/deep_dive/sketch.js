function setup(){
    ww = windowWidth;
    wh = windowHeight;
    //Logger.toggle();
    background(0)
    //background(0) // Para la 3
    createCanvas(ww, wh);

    x_seed = random(10)
    x_initial_seed = x_seed
    x_noise_factor = .01 // .005, .01, .1

    y_seed = random(10)
    y_noise_factor = .01

    for (var i = 0; i < ww; i+=5) {
        y_seed += y_noise_factor
        for (var j = 0; j < wh; j+=5) {
            x_seed += x_noise_factor
            draw_point4(i,j,noise(x_seed, y_seed))
        }
        x_seed = x_initial_seed
    }

}

function draw_point(x,y,noise_factor){
    len = 10 * noise_factor;
    rect(x, y, len, len);
}

function draw_point2(x,y,noise_factor){
    push()
    translate(x,y);
    rotate(noise_factor * radians(360));
    stroke(noise_factor*50, noise_factor*120 + 135);
    line(0,0,20,0);
    pop()
}

function draw_point4(x,y,noise_factor){
    palette = [
        [0,91,150]
    ]

    push()
    translate(x,y);
    rotate(noise_factor * radians(360));
    stroke(... palette[floor(noise_factor)], noise_factor*60 + 190);
    line(0,0,20,0);
    pop()
}


function draw_point3(x,y,noise_factor){
    push()
    translate(x,y);
    rotate(noise_factor * radians(540));
    size = noise_factor*35
    noStroke()
    fill(150 + noise_factor*120, 150 + noise_factor*120)
    ellipse(0,0,size,size/2)
    pop()
}

function draw(){
}
