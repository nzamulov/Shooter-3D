'use strict';

Shooter.namespace("Shooter.Entities");

Shooter.Entities.AbstractEntity = class {

	constructor() { 
		console.log("> Shooter.Entities.AbstractEntity > constructor > ready");
	}

	setPosition(x, y, z) {

		this.position.x = x;
		this.position.y = y;
		this.position.z = z;

	}

};

export default Shooter.Entities.AbstractEntity;