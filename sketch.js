/**************************************************
mappingExampleTwo

by: JoshuaWilderOakley

overview:

a simple example of the mapping function in p5.js in black and white

----------------------------------------------------

notes:

constrain both x and y so that the ellipse remains inside the box 
and is mapped to the larger blue ball.



***************************************************/


// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);   
 }

// Draw code goes here
function draw() {
  background(100, 100, 255);

  mappingBall();
  constrainedBallOne(); 
  constrainedBallTwo(); 
}

function mappingBall() {
  fill(0, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

function constrainedBallOne() {

  let xlo = 410;
  let xhi = 690;
  let ylo = 410;
  let yhi = 640;

  let mx = map(mouseX, 0, width, xlo, xhi, true);
  let my = map(mouseY, 0, height, ylo, yhi, true);

  //rectangle holding red ball
  fill(255);
  rect(400, 400, 300, 250);

  //red ball
  fill(255, 0, 0);
  noStroke();
  ellipse(mx, my, 20, 20);
}

function constrainedBallTwo() {

  let xlo = 905;
  let xhi = 970;
  let ylo = 205;
  let yhi = 695;

  let mx = map(mouseX, 0, width, xlo, xhi, true);
  let my = map(mouseY, 0, height, ylo, yhi, true);

  //rectangle holding red ball
  fill(255);
  rect(900, 200, 75, 700);

  //red ball
  fill(255, 0, 0);
  noStroke();
  ellipse(mx, my, 10, 10);
}


