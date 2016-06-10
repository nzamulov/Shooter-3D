'use strict';

Shooter.namespace("Shooter.Entities.Builders");

Shooter.Entities.Builders.AbstractBuilder = class {

	constructor() {
		console.log("> Shooter.Entities.Builders.AbstractBuilder > constructor > ready");
	}

	/* INDEPENDENT CONSTRUCTING PARTS */
	buildFacade() { }
	buildBlanks() { }
	buildWindows() { }
	buildDoors() { }
	buildStuff() { }

	/* CONSTRUCT OBJECT */
	build(position, rotation) {

		position = position || new THREE.Vector3(0, 0, 0);
		rotation = rotation || new THREE.Vector3(0, 0, 0);

		this.instance = new THREE.Object3D();

		this.buildFacade();
		this.buildBlanks();
		this.buildWindows();
		this.buildDoors();
		this.buildStuff();

		this.setPosition(position);
		this.setRotation(rotation);

		return this.instance;
	}

	/* OBJECT LOCATION */
	setPosition(position) { }
	setRotation(rotation) { }

};

export default Shooter.Entities.Builders.AbstractBuilder;