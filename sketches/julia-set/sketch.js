var iter = 256;
var a = .915;
var b = -0.507;
//var c = -0.713;
var c =  0.610

function setup(){
    w = 5000
    h = 5000
    createCanvas(w, h);

    for(var i=0;i<w;i++){
        for(var j=0;j<h;j++){
            var ds = (i*1.0-height/2)/height
            var es = (j*1.0-width/2)/width
            var intensity = get_intensity(a, b, c, ds, es);
            set(i , j, color(255, 224, 0, intensity));
        }
    }
    updatePixels();
    saveCanvas('JuliaSet', 'jpg');
}

function f(a, b, c, d, e){
  return [a*d*d-a*e*e+b, 2*a*d*e+c];
}

function get_intensity(a, b, c, d, e){
  var real = d;
  var img = e;
  var max = iter - 1;
  for(var i=0;i<max;i++){
    var complex = f(a, b, c, real, img);
    real = complex[0];
    img = complex[1];
    if(sqrt(real*real + img*img) > 2){
      max = i+1;
      break;
    }
  }
  return max;
}

function get_intensity_reversed(a, b, c, d, e){
    var real = d;
    var img = e;
    var max = iter - 1;
    for(var i=max;i>0;i--){
      var complex = f(a, b, c, real, img);
      real = complex[0];
      img = complex[1];
      if(sqrt(real*real + img*img) > 2){
        max = i+1;
        break;
      }
    }
    return max;
  }