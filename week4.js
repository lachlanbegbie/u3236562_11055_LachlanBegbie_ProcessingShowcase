let midx = 250;
let midy = 250;

let gridSpace = 62.5
let circleSize = 60

function setup() {
    createCanvas(500, 500);
    noLoop();
  }

function draw() {
  background(220);
  
  fill(220);
  stroke(0, 102, 153);
  strokeWeight(10);

  line(3 * gridSpace, 2 * gridSpace, 5.5 * gridSpace, 4 * gridSpace);
  line(3 * gridSpace, 2 * gridSpace, 5 * gridSpace, 6 * gridSpace);
  line(3 * gridSpace, 2 * gridSpace, 2 * gridSpace, 5 * gridSpace);

  line(5.5 * gridSpace, 4 * gridSpace, 2 * gridSpace, 5 * gridSpace);
  line(2 * gridSpace, 5 * gridSpace, 5 * gridSpace, 6 * gridSpace);
  line(5.5 * gridSpace, 4 * gridSpace, 5 * gridSpace, 6 * gridSpace);

  circle(3 * gridSpace, 2 * gridSpace, circleSize);
  circle(5.5 * gridSpace, 4 * gridSpace, circleSize);
  circle(2 * gridSpace, 5 * gridSpace, circleSize);
  circle(5 * gridSpace, 6 * gridSpace, circleSize);
}