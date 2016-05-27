'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from '../Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

Shooter.Entities.Player = class extends AbstractEntity {

	constructor() {
		super();

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.set(0, 1, 10);

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

	getCamera() {
		return this.camera;
	}

};

export default Shooter.Entities.Player;