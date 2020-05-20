class Particle {
	constructor(position) {
		this.position = position.copy();
		this.lifespan = 255;
		this.speed = createVector(random(-2, 2), -4, random(-2, 2));
		this.acceleration = createVector(0, 0.04, 0);
		this.rotation = createVector(random(PI), random(PI), random(PI));
		this.rotationSpeed = createVector(random(0.01), random(0.01), random(0.01));

		this.color = createVector(random(20), random(20), random(50, 100));
		this.colorSpeed = createVector(2, 1, 1);
	}

	update() {
		this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 2;
	}

	display() {
		push();

		// move context to particle position
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(this.rotation.x);
		rotateY(this.rotation.y);
		rotateZ(this.rotation.z);

		// ambientMaterial(this.color.x, this.color.y, this.color.z);
		// specularMaterial(this.color.x, this.color.y, this.color.z, 200);
		shininess(100);
		emissiveMaterial(this.color.x, this.color.y, this.color.z, 240);

		// start composition

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
		

		for (let x = -5; x < 5; x += 1.5) {
			push();
			translate(x, 0, 0);
			box(1, 2);	
			pop();
		}
		pop();


		// end composition
		pop();
	}

	isDead() {
		return this.lifespan < 0;
	}
}