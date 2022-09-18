var mx, my;

var cx = 0;
var cy = 0;
var cd = 20;

var sx = 0;
var sy = 0;
var sd = 20;

var tx = 0;
var ty = 0;
var td = 40;

var score = 0;

function setup() {
  createCanvas(750, 500);

  mx = width / 2;
  my = height / 2;

  rectMode(CENTER);
}

function draw() {
  background(220);

  translate(mx, my);

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    cy -= 3;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    cy += 3;
  }
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    cx -= 3;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    cx += 3;
  }

  if (keyIsDown(187)) {
    cd += 2;
  } else if (keyIsDown(189)  && cd > 2) {
    cd -= 2;
  }

  fill(220);
  stroke(0);
  strokeWeight(2);
  circle(tx, ty, td);

  fill(0, 102, 153);
  noStroke();
  circle(cx, cy, cd);

  textSize(25);
  fill(0, 102, 153);
  text("x: " + cx, -320, 200);
  text("y: " + cy, -220, 200);
  text("Score: " + score, -120, 200);

  fill('rgba(0, 102, 153, 0.5)');
  noStroke();
  circle(sx, sy, sd);
}

function keyPressed() {
  if (keyCode === 32) {
    sx = cx;
    sy = cy;
    sd = cd;

    if (sx > (tx - 20) && sx < (tx + 20)) {
      if (sy > (ty - 20) && sy < (ty + 20)) {
        tx = random(-325, 325);
        ty = random(-200, 200);

        score += 1;
      }
    }
  }
}