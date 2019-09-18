function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(100);
angleMode(DEGREES);
frameRate(50);
}

function draw() {

  stroke(
    lerpColor(
      color("aquamarine"),
      color("tomato"),
    frameCount/120)
  );

  let k=width/5;
  translate(width/2,height/2);
  line(k,0,k*cos(frameCount*3),k*sin(frameCount*3));
  if(frameCount == 120)
  noLoop();
}
