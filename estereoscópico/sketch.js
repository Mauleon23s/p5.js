var ima;
var ima2;
var x=0;


function preload(){
	ima=loadImage("img1.jpg");
 	ima2=loadImage("img2.jpg");
}

function setup() { 
  frameRate(10);
  createCanvas(400, 400);
  	

}
function draw() {   
  background(255);
  
  	if(x==0){
		image(ima, 0,0);
		loadPixels();
  	x+=1;
    }
  	else{
  	image(ima2,0,0);
		loadPixels();
    x=0;
    }
}