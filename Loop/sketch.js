/*
	Loop sketch
	2.26.2020
*/

var rex;
var forest;

function preload(){
	rex = loadImage('rex.png');
	forest= loadImage('Tree.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	setting();

	}

function setting(){

	background("#C264FF");
	

	for (var x = 50; x < width; x += 100) {
		image(forest, x, random(400));
		
		//ellipse(x, height/2 + random(100), random(40, 200));
	}
	image(rex, width/2, height/2);
}

function mousePressed(){
	setting();
}