function draw_by_chunks(points, f){
    for (var i = 0; i < points.length - 1; i++) {
        f(...points[i], ...points[i+1])
    }
}

function partition_two_points(p1,p2,n){
    // Direction vector
    v = [p2[0]-p1[0], p2[1]-p1[1]]

    // Creating partition of the vector
    let p = [p1]
    for (var i = 1; i < n; i++) {
        p.push([p1[0] + (i*v[0])/n, p1[1] + (i*v[1])/n])
    }
    p.push(p2)
}

function partition_two_points2(p1,p2,n,variation=.25){

    // Direction vector
    v1 = p2[0]-p1[0]
    v2 = p2[1]-p1[1]

    x = p1[0]
    y = p1[1]
    dy = abs(v2)/n

    noise_seed = random(n)
    let p = [p1]

    for (var i = 1; i < n-1; i++) {
        x = x + (v1)/(n-i+1)
        ruido = noise(noise_seed)
        logg((ruido - .5)*(abs(v2)/(n-i+1))*variation)
        y = y + (v2)/(n-i+1) + (ruido - .5)*(dy*variation)

        v1 = p2[0] - x
        v2 = p2[1] - y

        p.push([x,y])

        noise_seed += .1
    }
    p.push(p2)
    return p
}

function setup(){
    ww = windowWidth;
    wh = windowHeight;
    //Logger.toggle();

    createCanvas(ww, wh);

    p = partition_two_points2([100,100],[400,400],100,5)
    for (var i = 0; i < 50; i++) {
        for (var j = 0; j < p.length; j++) {
            p[j][1] += 5
        }
        draw_by_chunks(p,line)
    }


}

function draw(){

}
