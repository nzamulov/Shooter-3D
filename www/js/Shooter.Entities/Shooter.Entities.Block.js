'use strict';

Shooter.namespace("Shooter.Entities");

Shooter.Entities.Block = class {

	static create(height, width, depth) {

		let geometry = new THREE.BoxGeometry(height, width, depth);
		let instance = new THREE.Mesh(geometry);

		return instance;
	}
};

export default Shooter.Entities.Block;