'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

Shooter.Entities.Tower = class extends AbstractEntity {

	constructor() {
		super();

		this.geometry = new THREE.BoxGeometry(3, 20, 3);
		this.material = new THREE.MeshBasicMaterial({ color: 'blue' });
		this.instance = new THREE.Mesh(this.geometry, this.material);

	}

};

export default Shooter.Entities.Tower;