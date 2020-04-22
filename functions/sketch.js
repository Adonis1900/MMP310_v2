/*
	Final story sketch
	2.10.2020
*/

var cathyImage;
var rexImage;
var forest;
var bush; 
var cloud;

function preload(){
	cathyImage = loadImage('cathy.png');
	rexImage = loadImage('rex.png');
	forest= loadImage('Tree.png')
	bush= loadImage('Bush.png')
	cloud= loadImage('Cloud.png')
}

//location variables


//forest,bush,sky
var currentSetting = "forest";

function setup(){
	createCanvas(windowWidth, windowHeight);
	

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
		cathy(100,height*2/3);
		rex(800,height*2/3);
		narration("Two friends, A cat named cathy :3 and a dog named rex.");
	} else if (currentSetting == "bush"){
		background("#C264FF");
		image(bush, 200,400);
		image(bush, 700, 400);
		image(bush, 1000, 400);
		cathy(200,height*2/3);
		rex(500,height*2/3);
		narration("Cathy and Rex run through the forest.");
	} else if (currentSetting == "sky"){
		background('#00C9E5');
		image(cloud, 100, 200);
		cathy(600,height*2/3);
		rex(800,height*2/3);
		narration("cathy and rex armor enchant into the sky");


		}

		instructions();

	}

/* character functions */
function cathy(x,y) {
	image(cathyImage, x,y);
}

function rex(x,y) {
	image(rexImage, x, y);

}



//draw characters
	
function narration(story){
	textSize(30);
	textAlign(CENTER,CENTER);
	text(story, width/4, 20, width/2);
}
	
	
function instructions(){
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


		} else if (currentSetting == "bush") {
			currentSetting = "sky";

		} else if (currentSetting == "sky") {
			currentSetting = "forest";
			
		}
	}
}