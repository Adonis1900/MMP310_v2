/*
	User interface
	3.2.2020
*/

var Cloud_V2;
var slime;
var groundImage;

var skyHue = 195;
var hueSlider;


function preload() {
	Cloud_V2= loadImage('Cloud_V2.png')
	groundImage= loadImage('ground.png')
	slime= loadImage('Slime.gif')
	//fishImage = loadImage('fish.png');
	//cloudImage = loadImage('cloud.png');
	//treeImage = loadImage('tree.png');
}

/* position variables for images */
var clouds = []; // empty array
var numClouds = 7;

var ground = [];

var numSlime =4
var slimes =[];


function setup() {
	createCanvas(windowWidth, windowHeight);
	setting();

	// add cloud positions
	let x = -50;
	for (let i = 0; i < numClouds; i++) {
		let cloud = new Cloud(x,random(height/3), Cloud_V2);
		clouds.push(cloud);
		// update x, distributing number of clouds across canvas
		x += width/numClouds + random(-100, 100);


	}
	
	//adding ground positions
	for (let x = 0; x < width; x += groundImage.width){
		let g = new Thing(x,height-groundImage.height,groundImage)
		ground.push(g);
	}

	//adding slime positions
	for (let i=0; i < numSlime; i ++){
		let s = new Slime (width+random(width),height-groundImage.height-slime.height+40,slime)
		slimes.push(s);

	var hueLabel = createElement("label","Change the sky");
	hueLabel.position(10,10);

	//User interface
	hueSlider = createSlider(10, skyHue, skyHue);
	hueSlider.position(10,30);
	hueSlider.input(updateHue);



	}


function updateHue{
	skyHue = hueSlider.value();
}

function draw() {
	//'#00B2FF' 268, 100%, 43%
	colorMode(HSB, 360, 100, 100);
	background(skyHue, 100, 50);


	//drawing ground level
	for (let i= 0; i < ground.length; i++){
		ground[i].draw();
	}

	//slime
	for (let i=0; i < numSlime; i ++){
		slimes[i].draw();
		slimes[i].update();
}
	// draw clouds
	for (let i = 0; i < numClouds; i++) {
		clouds[i].draw();
		clouds[i].update();
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