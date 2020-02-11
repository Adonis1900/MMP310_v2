/*
	setting sketch
	2.3.2020
*/

var cathy;
var rex;
var forest;
var bush; 
var cloud;

function preload(){
	cathy = loadImage('cathy.png');
	rex = loadImage('rex.png');
	forest= loadImage('Tree.png')
	bush= loadImage('Bush.png')
	cloud= loadImage('Cloud.png')
}

//location variables
var cathyX= 100;
var cathyY= 200;

var rexX= 800;
var rexY= 200;

var treeX=50;

var story = "Two friends, A cat named cathy :3 and a dog named rex."

//forest,bush,sky
var currentSetting = "forest";

function setup(){
	createCanvas(windowWidth, windowHeight);
	cathyY = height * 2/3
	rexY = height * 2/3

	}

function draw(){

	//conditional statement
	if(currentSetting =="forest"){
		background('#00B1F3');
		image(forest, 200,400);
		image(forest, 400,400);
		image(forest, 600,400);
		image(forest, 800,400);
		image(forest, 1000,400);
	} else if (currentSetting == "bush"){
		background("#C264FF");
		image(bush, 200,400);
		image(bush, 700, 400);
		image(bush, 1000, 400);
	} else if (currentSetting == "sky"){
		background('#00C9E5');
		image(cloud, 100, 200);


	}



//draw characters
	image(cathy, cathyX,cathyY);
	image(rex, rexX, rexY);

	//narration
	textSize(30);
	textAlign(CENTER,CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

/*
	event listener
	user interaction with browser
	mousePressed
	p5 running in background to call this function when user clicks
*/

function keyPressed() {
	
	// test the keycode 
	if (keyCode == 39) {
		// change scene 
		// scene order: beach, ocean, island
		if (currentSetting == "forest") {

			// change setting
			currentSetting = "bush";

			// update story
			story = "cathy and rex run through forest";

			// update characters position
			cathyX = 200;
			rexX = 500;

		} else if (currentSetting == "bush") {
			currentSetting = "sky";
			story = "cathy and rex armor enchant into the sky";

			jennyX = 600;

		} else if (currentSetting == "sky") {
			currentSetting = "forest";
			story = "Two friends, A cat named cathy :3 and a dog named rex.";

			cathyX = 100;
			rexX = 300;
		}
	}
}