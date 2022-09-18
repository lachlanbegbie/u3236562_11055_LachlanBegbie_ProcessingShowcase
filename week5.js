var mx, my;

function setup() {
    createCanvas(500, 500);

    mx = width / 2;
    my = height / 2;

    rectMode(CENTER);
    angleMode(DEGREES);
  }

  function draw() {
    let rectX = 0;
    let rectY = 0;
    let rectW = (sin(frameCount) * 50) + 150;
    let rectH = (sin(frameCount) * 50) + 150;
    
    background(220);
    
    fill(220);
    stroke("rgb(0, 102, 153)");
    strokeWeight(50);

    translate(mx, my);
    rotate((frameCount) * 1.25);

    rect(rectX, rectY, rectW, rectH);
  }