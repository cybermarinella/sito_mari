
	var segLength = 80,
	x, y;
	var gray = 170;
	var bk_color = 255;
	var nbr_circles = 4;
	var spicchioXRandom;
	var spicchioYRandom;

	function setup() {
		frameRate(120);
		var myCanvas = createCanvas(windowWidth-30, windowHeight/1,618);
	  	myCanvas.parent('myContainer');
		angleMode(RADIANS);
		strokeWeight(0.2);
		stroke(gray, gray, gray, 100);
		smooth();
		//background(bk_color);	
		background(255,0,0);
		spicchioXRandom = random(-60, 60);
		spicchioYRandom = random(-60, 60);
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
				dragSegment(x, mouseX, mouseY);
	    	}
	  	}
	  	logo_gen();
		logo_m();
		textAlign(CENTER);
		text("Marinella Mastrosimone", 25, 100);
		text("Graphic Designer", 25, 120);
	}
	function logo_gen(){
		translate(width/2, height/2);
		push();
		var a = atan2(mouseY, mouseX)*150000;
		rotate(a);
		logo_pi();
		pop();
	}
	function logo_pi(){
		noStroke();
		fill(bk_color);
		ellipse(0, 0, 300, 300);
		var red = color(255, 0, 0, 200);
		var green = color(8, 171, 82, 200);
		var yellow = color(250, 237, 33, 200);
		var blue = color(0, 157, 225, 200);	
		var colors = Array (gray ,red, green, yellow, blue);	
		var deg = 360/nbr_circles;
		var rad = radians(deg);
		var singleRad = 0;
		for (var i = 1; i <= nbr_circles; ++i) {
			push();
			rotate(singleRad);
			fill(colors[i]);
			spicchio();
			var singleRad = singleRad+rad;
			pop();
		}
	}
	function spicchio(){
		translate(spicchioXRandom, spicchioYRandom );
		noStroke();
		beginShape();
		vertex(0, 0);
		endShape();
		ellipse(0+mouseX/14, 0+mouseY/8, 30, 30);
		ellipse(30-mouseX/14, 75-mouseY/8, 30, 30);
		//ellipse(0, 0, 30, 30);
		//ellipse(30, 75, 30, 30);
	}
	function logo_m(){
		translate(-25, -30);
		stroke(255)
		strokeWeight(0.3);
		//noStroke();
		fill(0, 0, 0, 200)
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
		spicchioXRandom = random(-40, 40);
		spicchioYRandom = random(-40, 40);
		pop()
	}


