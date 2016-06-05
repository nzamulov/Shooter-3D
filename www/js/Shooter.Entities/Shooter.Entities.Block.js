'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Block = class extends AbstractEntity {

	constructor(height, width, depth) {
		super();

		this.geometry = new THREE.BoxGeometry(height, width, depth);
		this.material = new THREE.MeshBasicMaterial({ color: 'red' });
		this.material.side = THREE.DoubleSide;
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Block;