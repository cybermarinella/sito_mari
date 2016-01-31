var segLength = 90,
x, y;
var gray = 170;
var bk_color = 255;
var nbr_circles = 4;
var spicchioXRandom;
var spicchioYRandom;

//var spicchioXRandom = 100;

// controls http://p5js.org/examples/examples/Dom_Slider.php

function setup() {
	//pixelDensity(1);
	frameRate(120)
  createCanvas(windowWidth, windowHeight);
	angleMode(RADIANS);
  strokeWeight(0.2);
  stroke(gray, gray, gray, 100);
	smooth()
	background(bk_color);	

	spicchioXRandom = randomGaussian(-80, 10);
	spicchioYRandom = randomGaussian(-80, -80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
 	var separator = width/18;
	background(bk_color);	
  for(var x = separator; x <= width-separator; x+=separator){
    for(var y = separator; y <= height-separator; y+=separator){
      stroke(gray, 255);
      fill(gray);
      ellipse(x, y, 3, 3);
      dragSegment(x, mouseX, mouseY);
			
			function dragSegment(i, xin, yin) {
				dx = mouseX - x;
				dy = mouseY - y;
				angle2 = atan2(dy, dx);
				segment(x, y, angle2);
			}
			function segment(x, y, a) {
				push();
				translate(x, y);
				rotate(a);
				line(0, 0, segLength/2, 0);
				pop();
			}
    }
  }
  logo_gen();
	logo_m();
	textAlign(CENTER);
	text(spicchioXRandom, 25, 100);
	text(spicchioYRandom, 25, 120);
}

function logo_gen(){
	translate(width/2, height/2);
	push()
  var a = atan2(mouseY, mouseX)*150000;
  rotate(a);
	logo_pi()
	pop()
}
function logo_pi(){
	noStroke();
	fill(bk_color)
	ellipse(0, 0, 300, 300)
	
	var red = color(255, 0, 0, 200);
	var green = color(8, 171, 82, 200);
	var yellow = color(250, 237, 33, 200);
	var blue = color(0, 157, 225, 200);
	
	var colors = Array (gray ,red, green, yellow, blue);
	
	var deg = 360/nbr_circles;
	var rad = radians(deg);
	var singleRad = 0
	//rotate(frameCount/5);
  for (var i = 1; i <= nbr_circles; ++i) {
		push()
		//translate(spicchioXRandom, spicchioYRandom)
		rotate(singleRad)
		fill(colors[i])
		spicchio();
		var singleRad = singleRad+rad;
		pop()
  }
	
}
function spicchio(){
	translate(spicchioXRandom, spicchioYRandom );
	//translate(mouseX/6-150, mouseY/5-150);
  noStroke()
 	beginShape();
  vertex(0, 0);
  //bezierVertex(110, 0, 110, 150, 0, 150);
  //bezierVertex(75, 125, 75, 25, 0, 0);
  endShape();
	ellipse(0+mouseX/8, 0+mouseY/8, 30, 30)
	ellipse(30-mouseX/8, 75-mouseY/8, 30, 30)
}
function logo_m(){
		translate(-25, -25);
    strokeWeight(2);
    noStroke();
		beginShape(TRIANGLES);
		vertex(0, 0);
		vertex(14, 50);
		vertex(0, 50);
		vertex(0, 0);
		vertex(24, 28);
		vertex(24, 50);
	
		vertex(0, 0);
		vertex(14, 35);
		vertex(24, 50);
	
		vertex(14, 35);
		vertex(14, 50);
		vertex(0, 0);
	
		vertex(50, 0);
		vertex(34, 50);
		vertex(50, 50);
	
		vertex(50, 0);
		vertex(24, 28);
		vertex(24, 50);
	
		vertex(50, 0);
		vertex(34, 35);
		vertex(24, 50);
	
		vertex(34, 35);
		vertex(34, 50);
		vertex(50, 0);
	
		endShape();
}
function mousePressed() {
	push()
	background(bk_color)
	spicchioXRandom = randomGaussian(-80, 10);
	spicchioYRandom = randomGaussian(-80, -80);
	pop()
}