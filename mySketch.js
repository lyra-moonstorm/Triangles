function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
strokeWeight(1)
stroke (100)
	fill(255, 155, 155);
	triangle(550,0,430,200,670,200);
	fill(255, 208, 155)
	triangle(430,200,550,200,550,400);
	fill(2255, 155, 178);
	triangle(670,200,550,200,550,400);
	fill(255, 245, 155);
	triangle(430,200,550,400,320,400);
	fill(255, 102, 175);
	triangle(670,200,550,400,780,400);
	fill(155, 255, 156);
	triangle(320,400,200,600,430,600);
	fill(221, 255, 155);
	triangle(375,500,550,400,320,400);
	fill(155, 255, 215);
	triangle(375,500,550,400,430,600);
	fill(155, 255, 250);
	triangle(550,400,430,600,670,600);
	
	fill(155, 221, 255);
	triangle(550,400,670,600,725,500);
	
	fill (235, 155, 255);
	triangle(550,400,725,500,780,400);
	
	fill(155, 166, 255);
	triangle(780,400,670,600,900,600);
}