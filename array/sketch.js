/*
	array example
	3.2.2020
*/

var Cloud_V2;
function preload() {
	Cloud_V2= loadImage('Cloud_V2.png')
	//fishImage = loadImage('fish.png');
	//cloudImage = loadImage('cloud.png');
	//treeImage = loadImage('tree.png');
}

/* position variables for images */
var Cloud_V2X = []; // empty array
var Cloud_V2Y = [];
var numClouds = 7;

function setup() {
	createCanvas(windowWidth, windowHeight);
	setting();

	// add cloud positions
	let x = -50;
	for (let i = 0; i < numClouds; i++) {
		Cloud_V2X.push( x );
		// update x, distributing number of clouds across canvas
		x += width/numClouds + random(-100, 100);
		Cloud_V2Y.push( random(height/3) );
	}
	
}

function draw() {
	background('#00B2FF');
	// draw clouds
	for (let i = 0; i < numClouds; i++) {
		image(Cloud_V2, Cloud_V2X[i], Cloud_V2Y[i]);

		// animate x
		Cloud_V2X[i] += 1;

		// check if cloud is beyond right side of canvas
		if (Cloud_V2X[i] > width) {
			// reset cloud back to left side
			Cloud_V2X[i] = -Cloud_V2.width;
		}
	}


	// for (let x = -50; x <= width; x += 200) {
	// 	let y = random(height/3);
	// 	let offset = random(-100, 100);
	// 	image(cloudImage, x + offset, y);

	// 	// image(cloudImage, random(width), random(height));
	// }
}

function mousePressed() {
	setting();
}

function setting() {
	// background colors
	background('#00B2FF');

	noStroke();
	fill('sandybrown');
	rect(0, height/2, width, height/2);

	fill('darkblue');
	rect(0, height * 2/3, width, height/3);

	// images

	// trees
	//for (let x = 100; x <= width; x += 400) {
		//image(treeImage, random(width), height/2 - 150 + x/20);
	//}

	// fish
	/*for (let x = -50; x <= width; x += 100) {
		image(fishImage, x, height - random(200));
		image(fishImage, x + random(50), height - random(250));
		image(fishImage, x, height - random(200));
		*/
	//}
}