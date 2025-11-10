loop();

function loop() {
    setInterval(cascade,5000);
}

function cascade() { 
  let pos;
    for (let index = 3000; index > -3000; index--) {
      var one = document.getElementById("bg");
      var two = document.getElementById("bg2");
        pos = index;
           one.style.x =  pos + 'px';
           two.style.x = pos + 'px';
    }
}
