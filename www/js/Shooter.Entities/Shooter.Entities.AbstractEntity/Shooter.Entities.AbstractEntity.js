'use strict';

Shooter.namespace("Shooter.Entities");

Shooter.Entities.AbstractEntity = class {

	constructor() {
		console.log("> Shooter.Entities.AbstractEntity > constructor > ready");
	}

	setPosition(x, y, z) {
		this.instance.position.x = x;
		this.instance.position.y = y;
		this.instance.position.z = z;
	}

	setRotation(angleX, angleY, angleZ) {
		this.instance.rotation.x = angleX;
		this.instance.rotation.y = angleY;
		this.instance.rotation.z = angleZ;
	}

	getInstance() {
		return this.instance;
	}

};

export default Shooter.Entities.AbstractEntity;