'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

Shooter.Entities.Wall = class extends AbstractEntity {

	constructor() {
		super();

		this.geometry = new THREE.BoxGeometry(30, 16, 1);
		this.material = new THREE.MeshBasicMaterial({ color: 'blue' });
		this.instance = new THREE.Mesh(this.geometry, this.material);

	}

};

export default Shooter.Entities.Wall;