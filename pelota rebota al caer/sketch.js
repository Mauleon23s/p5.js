var x=1;
var y=10;
var vel=.5;
var peso=.5;

function setup() { 
  createCanvas(400, 300);
} 

function draw() { 
  background(220,55);
  fill("black");
  
  x+=2;
  rect(5,25,150,10)
  if(x>=170)
  {
  y+=vel;
  vel+=peso;
  	if(y>height){
    
      y=height;
      vel*=-.8;
    }
  }
  stroke(0);
  fill(16,115,255);
  ellipse(x,y,32,32);
}
