let colors = ["blue", "red", "green", "yellow"];

function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {
  if (mouseIsPressed === true) {
  eye(mouseX, mouseY);
  }
}

function eye(x,y) {

  noStroke();
  fill(random(colors));
  rect(x,y,100,80);

  fill(random(colors));
  ellipse(x+50,y+40,50,40);
}