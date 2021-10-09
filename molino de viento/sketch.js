var x=1;
var y=-220;
function setup() { 
  createCanvas(400, 400);
	background(220);  
} 
function draw() { 
  translate(width/2,height/2);
  	noStroke();
 background(109, 233, 238);
  extras();
  rotate(radians(x));
   helises();
  x+=2;
  fill(200);
  ellipse(0, 0, 20, 20);
}
function helises()
{
  //background();
fill(255);
  rotate(radians(360));
  {
  beginShape();
  vertex(7,5);
	vertex(10,2);
	vertex(25,10);
	vertex(95,115);
  vertex(93,115);
  vertex(15,20);
  
	endShape(CLOSE);
  }
  rotate(radians(2/3*360));
  {
  beginShape();
  vertex(7,5);
	vertex(10,2);
	vertex(25,10);
	vertex(95,115);
  vertex(93,115);
  vertex(15,20);
	endShape(CLOSE);
  }
  
  rotate(radians(-1/3*360));
  {
  beginShape();
  vertex(7,5);
	vertex(10,2);
	vertex(25,10);
	vertex(95,115);
  vertex(93,115);
  vertex(15,20);
	endShape(CLOSE);
  }
}
  function extras() {
{
fill("green");
  beginShape();
  vertex(-200,180);
  vertex(200,160);
  vertex(200,200);
  vertex(-200,200);
  endShape(CLOSE);
    }
    fill(150);
    beginShape();
  vertex(-10,190);
  vertex(20,190);
  vertex(5,10);
    vertex(-5,10);
    endShape(); 
    fill("yellow");
    ellipse(y,-160,40,40);
    y+=.5;
    if(y>=220)
      y=-220;
  }
