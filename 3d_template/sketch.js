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

	// floor 
	push();
	translate(0, 300);
	rotateX(PI * 0.5); 
	plane(1000, 1000);
	pop();

	rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

	sphere(100);


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

  	push();
	translate(20,40,84);
	rotateX(670);
  	rotateZ(-700);
  	cone(40, 70);
  	pop();
	// start composition here
}