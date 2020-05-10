// Solo corre una vez (es como un init)

Array.prototype.randomElement = function () {
    k = Math.floor(Math.random() * this.length)
    return [this[k],k]
}

function sample_points(n, x_interval, y_interval){
    var points = [];

    if (x_interval.constructor != Array){
        x_interval = [0,x_interval]
    }
    if (y_interval.constructor != Array){
        y_interval = [0,y_interval]
    }
    for (let i=0; i<n; i++){
        points.push([random(...x_interval), random(...y_interval)])
    }
    return points
}

function points_to_center(points){
    for (var i = 0; i < points.length; i++) {
        point = points[i]
        line(...point, ...center)
    }
}

function color_points(points){
    for (var i = 0; i < points.length; i++) {
        logg(1)
        fill(random(250), 50, 100, random(255));
        logg(1)
        noStroke();
        beginShape();
        vertex(... points[i]);
        vertex(... points[(i+1) % points.length]);
        vertex(... center);
        endShape();
    }
}

function my_sort(arr, how, where){
    if (how == 'ascending'){
        return arr.sort(function(a,b){return a[where] - b[where]})
    }
    else{
        return arr.sort(function(a,b){return b[where] - a[where]})
    }
}

function setup(){
    palette = [
        [220,220,220],
        [211,211,211],
        [192,192,192],
        [169,169,169],
        [128,128,128],
        [105,105,105],
        [119,128,144],
        [112,128,144],
        [47,79,79],
        [0,0,0]
    ]
    palette = [
        [1,31,75],
        [211,211,211],
        [192,192,192],
        [169,169,169],
        [128,128,128],
        [3,57,108],
        [47,79,79],
        [0,91,150],
        [0,0,0]
    ]

    ww = windowWidth;
    wh = windowHeight;
    //Logger.toggle();

    createCanvas(ww, wh);

    n = 8
    parts = []
    for (var i = 0; i < n+1; i++) {
        parts.push(i/n)
    }

    for(let k1 = 0; k1 < parts.length-1; k1++ ){
        for (var k2 = 0; k2 < parts.length-1; k2++) {
            a11 = parts[k1]
            a12 = parts[k1+1]
            a21 = parts[k2]
            a22 = parts[k2+1]

            if (sqrt(k1*k2) < random(n-1)){
                for(let j=0; j<random(80,100 + 50/(n)); j++){
                    circle_center = [random(a11*ww, a12*ww), random(a21*wh, a22*wh)]
                    initial_radius = (a11*ww-a12*ww)*(a21*wh-a22*wh)/4000

                    for (let i = 0; i < 8; i++) {
                        noFill()
                        c1 = (circle_center[0] + initial_radius < a12*ww)
                        c2 = (circle_center[0] - initial_radius > a11*ww)
                        c3 = (circle_center[1] + initial_radius < a22*wh)
                        c4 = (circle_center[1] - initial_radius > a21*wh)

                        if ((c1 && c2 && c3 && c4)){
                            strokeWeight(random(1));
                            stroke(... palette.randomElement()[0]);
                            circle(...circle_center, initial_radius)
                        }
                        circle_center = [circle_center[0] + randomGaussian()*initial_radius/2,
                                         circle_center[1] + randomGaussian()*initial_radius/2]

                        initial_radius = initial_radius + 5*randomGaussian()
                    }
                }
            }
            else{
                for (let i = 0; i < random(200,300); i++) {
                    circle_center = [random(a11*ww, a12*ww), random(a21*wh, a22*wh)]
                    initial_radius = (a11*ww-a12*ww)*(a21*wh-a22*wh)*random(4)/1000

                    c1 = (circle_center[0] + initial_radius < a12*ww)
                    c2 = (circle_center[0] - initial_radius > a11*ww)
                    c3 = (circle_center[1] + initial_radius < a22*wh)
                    c4 = (circle_center[1] - initial_radius > a21*wh)

                    if ((c1 && c2 && c3 && c4)){
                        fill('white')
                        strokeWeight(random(1));
                        stroke(... palette.randomElement()[0]);
                        circle(...circle_center, initial_radius)
                        for (var j = 0; j < 4; j++) {
                            initial_radius = random(initial_radius/3,initial_radius)
                            stroke(... palette.randomElement()[0]);
                            strokeWeight(random(1));
                            circle(...circle_center, initial_radius)
                        }
                    }
                }
            }

        }
    }




}

function setup23134(){
    palette = [
        [220,220,220],
        [211,211,211],
        [192,192,192],
        [169,169,169],
        [128,128,128],
        [105,105,105],
        [119,128,144],
        [112,128,144],
        [47,79,79],
        [0,0,0]
    ]
    ww = windowWidth;
    wh = windowHeight;
    //Logger.toggle();

    createCanvas(ww, wh);

    for (let i = 0; i < 210; i++) {
        circle_center = [random(.1*ww, .9*ww), random(.1*wh, .9*wh)]
        initial_radius = random(100)

        //noFill()
        strokeWeight(random(3));
        stroke(... palette.randomElement()[0]);
        circle(...circle_center, initial_radius)
        for (var j = 0; j < 9; j++) {
            initial_radius = random(initial_radius/3,initial_radius)
            nc = [circle_center[0] + randomGaussian()*initial_radius/3,
                  circle_center[1] + randomGaussian()*initial_radius/3]
            stroke(... palette.randomElement()[0]);
            strokeWeight(random(3));
            circle(...nc, initial_radius)
        }
    }

}

function setup00(){
    ww = windowWidth
    wh = windowHeight
    center = [ww/2, wh/2]
    n = 5

    Logger.toggle();
    createCanvas(ww, wh);

    up = sample_points(n,ww,[wh,wh])
    up = my_sort(up,'ascending',0)

    right = sample_points(n,[ww,ww],wh)
    right = my_sort(right,'descending',1)

    down = sample_points(n,ww,[0,0])
    down = my_sort(down,'descending',0)

    left = sample_points(n,[0,0],wh)
    left = my_sort(left,'ascending',1)

    points = up.concat(right, down, left)
    points_to_center(points)
    color_points(points)

    for (let i = 0; i < n; i++){
        let [e1, k1] = up.randomElement()
        up.splice(k1,1)
        logg(4)
        let [e2, k2] = down.randomElement()
        down.splice(k2,1)
        line(...e1,...center)
        line(...e2,...center)
    }

    logg(right)
    logg(left)
    for (let i = 0; i < n; i++){
        let [e1, k1] = left.randomElement()
        left.splice(k,1)
        let [e2, k2] = right.randomElement()
        right.splice(k,1)
        line(...e1,...center)
        line(...e2,...center)
        logg(2)
    }

}



function setup0() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 1500; i++) {
    a = random(51,100)
    fill(a, a, a-100, random(255));
    ellipse(random(windowWidth), random(windowHeight), random(100));

    fill(255, 255, random(200), random(255));
    ellipse(random(windowWidth), random(windowHeight), random(100));
  }

};

function setup1() {
    createCanvas(windowWidth, windowHeight);
    //Logger.toggle();

    logg('h')
    for (let i = 0; i < 500; i++) {

        var k = 10;
        var params = [];

        for (let j=0; j < k; j++){
            params.push(random(windowWidth/100, windowWidth - windowWidth/100));
            params.push(random(windowHeight/100, windowHeight - windowHeight/100));

        }
        bezier(... params);
    }
};


function setup2() {
    createCanvas(windowWidth, windowHeight);
    Logger.toggle();

    for (let i = 0; i < 1; i++) {

        var k = 6;
        var params = [];
        var params2 = [];

        for (let j=0; j < k; j++){
            params.push(random(windowWidth/10, windowWidth - windowWidth/10));
            params.push(random(windowHeight/10, windowHeight - windowHeight/10));

            if (j == 1 || j == k-2){
                params2 = params2.concat(params.slice(-2))
            }
            else{
                params2.push(random(windowWidth/10, windowWidth - windowWidth/10));
                params2.push(random(windowHeight/10, windowHeight - windowHeight/10));
            }
        }
        noFill();
        curve(... params);

        noFill();
        curve(... params2);
    }
};
