'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from '../Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import KeyboardController from '../../Shooter.Controllers/Shooter.Controllers.KeyboardController.js';

Shooter.Entities.Player = class extends AbstractEntity {

	constructor() {
		super();

		this.moveForward = false;
		this.moveLeft = false;
		this.moveBackward = false;
		this.moveRight = false;

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.set(0, 1, 10);

		KeyboardController.create(this);

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

	update() {

		let worldDirection = this.camera.getWorldDirection().multiplyScalar(0.5);
		
		let strafe = new THREE.Vector3();
		strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).multiplyScalar(0.5);

		if(this.moveForward) {
			this.camera.position.x += worldDirection.x;
			this.camera.position.y += worldDirection.y;
			this.camera.position.z += worldDirection.z;
		}

		if(this.moveLeft) {
			this.camera.position.x -= strafe.x;
			this.camera.position.y -= strafe.y;
			this.camera.position.z -= strafe.z;
		}

		if(this.moveBackward) {
			this.camera.position.x -= worldDirection.x;
			this.camera.position.y -= worldDirection.y;
			this.camera.position.z -= worldDirection.z;
		}

		if(this.moveRight) {
			this.camera.position.x += strafe.x;
			this.camera.position.y += strafe.y;
			this.camera.position.z += strafe.z;
		}
	}

	getCamera() {
		return this.camera;
	}
};

export default Shooter.Entities.Player;