var x1 ;
var y1 ;
var x2;
var y2;
var a = 0;
var speed1x = 0;
var speed1y = 0;
var wid = window.innerWidth;
var hei = window.innerHeight;
var m = 10;
var speedm = 0.01

function setup() {
  createCanvas(wid, hei);
  angleMode(DEGREES);
  background(255);
  x1 = wid/16;	
  y1 = hei/8;

}

function draw() {
  
  translate(0, 0, 0, 0); 
  // noStroke();
  stroke(0);
  fill(255);

  if (x1 < wid/2 && y1 < hei/2) {
    speed1x += speedm;
    speed1y += 0.01;
    
  } else if (x1 > wid/2 && y1 < hei/2) {
    speed1x -= speedm;
    speed1y += speedm;

  } else if (x1 > wid/2 && y1 > hei/2) {
    speed1x -= speedm;
    speed1y -= speedm;

  } else if (x1 < wid/2 && y1 > hei/2) {
    speed1x += speedm;
    speed1y -= speedm;

}
  
    
  x1 += speed1x;
  y1 += speed1y;
  
  if (x1>width-10 || x1 < 10){
  	speed1x = - speed1x;
  }
  if (y1>height-10 || y1 < 10){
  	speed1y = - speed1y;
  }
  
  

  
  ellipse(x1, y1, 20);


  translate(x1, y1, 0, 0);
    // m+=speedm;

  x2 = 10 * sin(a * m);
  y2 = 10 * cos(a * m);
  //noStroke();
  stroke(0);
  fill(255);
  ellipse(x2, y2, 10)

  a++;
  wid -= 0.01;
  hei -= 0.01;
  // if (frameCount % 200 == 0){
  // 	speedm = -speedm;
  // }
  //   if (m > 10) {
  //     speedm = -0.01;
  // } if (m < 5) {
  // 	speedm = 0.01;
  // }
    
  


}