var x=0.0;
var dir=1;
var n=20;
var inc=0.0;
var dec=0.0;
function setup() {
    createCanvas(400,400);
    
    noStroke();
    fill(187,136,0);
   // frameRate(60);
}

function draw() {
    background(2);
		
	
	arc(x,200, 80, 80,radians(n)-inc+dec, radians(-n)+inc-dec,PIE);
       x+=dir;
		
	if(inc<=0.50)
       {
         inc+=0.03;
         dec=0.0;
       }
       else
       if(inc>0.50){
         dec+=0.03;
       }
       if(dec>=0.50){
        inc=0.0;
				dec=0;
			 }
	
    if(x>=360){
        dir=-dir;
				n=-150
    }
	if (x <= 40 ){
			n=30;
			dir=1;	
}
}