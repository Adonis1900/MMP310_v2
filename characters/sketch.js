/*
	characters sketch
	1.27.2020
*/

//loading graphics
var cathy; //car declaration
var rex; 

/*

	runs before setup
	when preload is done,
	setup gets called
*/

function preload(){
	cathy = loadImage('cathy.png');
	rex = loadImage('rex.png');
}

//location variables
var cathyX= 100;
var cathyY= 200;

var rexX= 800;
var rexY= 200;

var story = "Two friends, A cat named cathy :3 and a dog named rex."

// runs once to set up browser
function setup(){
	createCanvas(windowWidth, windowHeight);
	}

//runs 60fps draws graphics
function draw(){
background('lightgrey');

//draw characters
	image(cathy, cathyX,cathyY);
	image(rex, rexX, rexY);

	//narration
	textSize(30);
	textAlign(CENTER,CENTER);
	text(story, width/4, 20, width/2);

}