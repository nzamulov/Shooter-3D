'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Window = class extends AbstractEntity {

	constructor() {
		super();

		this.geometry = new THREE.PlaneGeometry(2, 3);
		this.material = new THREE.MeshBasicMaterial({ color: 'yellow' });
		this.material.side = THREE.DoubleSide;
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Window;