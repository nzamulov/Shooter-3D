'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

Shooter.Entities.Bullet = class {

	constructor(position, rotation, direction) {

		this.geometry = new THREE.CylinderGeometry(CONSTANTS.BULLET.RADIUS, CONSTANTS.BULLET.RADIUS, CONSTANTS.BULLET.HEIGHT, CONSTANTS.BULLET.RADIUS_SEGMENTS);

		this.material = new THREE.MeshBasicMaterial({ color: 'green' });
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.mesh.rotation.set(Math.PI / 2, 0, 0);

		this.instance = new THREE.Object3D();		

		this.instance.add(this.mesh);

		this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
		this.instance.position.set(position.x, position.y, position.z)

		this.direction = direction;

		this.direction.multiplyScalar(CONSTANTS.BULLET.SPEED);
	}

	update() {
		this.instance.position.add(this.direction);
	}

	getInstance() {
		return this.instance;
	}
};

export default Shooter.Entities.Bullet;