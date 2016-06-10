'use strict';

Shooter.namespace("Shooter.Entities");

Shooter.Entities.Window = class {

	static create() {

		let geometry = new THREE.PlaneGeometry(2, 3);
		let instance = new THREE.Mesh(geometry);

		return instance;
	}
};

export default Shooter.Entities.Window;