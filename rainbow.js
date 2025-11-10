start();
  
  function start() {

    setInterval(rainbow, 1000);
  }

function rainbow() {
 var kao = document.getElementById("kao");
    
    kao.style.color = randomColor();
}

function randomColor(min, max) {
        min = 0;
        max = 256;
        const cmin = Math.ceil(min);
        const cmax = Math.floor(max);
        var r = Math.floor(Math.random()*(cmax-cmin)+cmin);
        var g = Math.floor(Math.random()*(cmax-cmin)+cmin);
        var b = Math.floor(Math.random()*(cmax-cmin)+cmin);
    
    var color =  'rgb' + '(' + r + ',' + g + ',' + b + ')'
  
return color;
}
 