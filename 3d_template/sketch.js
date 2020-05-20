/*
	3d graphics example
*/

var rotX, rotY, rotZ;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	createP("Scene controls").position(10, 0);

	rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotX.position(10, 20);

	rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotY.position(10, 40);

	rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotZ.position(10, 60);

}

function draw() {
	background(51);

	//noStroke();
	//lights();
	
	
	//applies evenly to all surfaces
	ambientLight(40,60,90)

	//direction -1 to 1
	directionalLight(255,255,255, 1, 0, 0)

	pointLight(255,255,255, mouseX - width/2, mouseY - height/2, 150);

	fill('tan')

	// floor 
	push();
	fill('blue')
	translate(0, 300);
	rotateX(PI * 0.5); 
	background('black')
	plane(1000, 1000);
	pop();

	rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

	ambientMaterial(223, 181, 124);

	sphere(100);


//Nose
  	push();
	//translate(20,40,84);
	//rotateX(670);
  	//rotateZ(-700);
  	rotateX(PI*0.45);
  	translate(0, 120, 0);
  	cone(40, 70);
  	pop();

  	ambientMaterial(158, 120, 68);
	//
	push();
	translate(-85,-85,-0);
	rotateX(1150);
  	rotateZ(750);
  	cone(40, 70);
  	pop();

  	push();
	translate(85,-85,0);
	rotateX(-1150);
  	rotateZ(-750);
  	cone(40, 70);
  	pop();

  	ambientMaterial(255, 255, 255);
  	noStroke();

  	//Left eye
  	push();
  	translate(50, -50, 90);
  	torus(20, 10);
  	pop();

  	//Right eye
  	push();
  	translate(-50, -50, 90);
  	torus(20, 10);
  	pop();

	// start composition here


}