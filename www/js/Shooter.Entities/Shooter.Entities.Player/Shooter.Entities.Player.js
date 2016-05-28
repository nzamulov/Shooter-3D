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
		
		this.jumping = false;
		this.falling = false;
		this.jumpingSaturation = Math.PI / 2;

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.set(0, 1, 10);

		KeyboardController.create(this);

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

	update(scene) {

		let worldDirection = this.camera.getWorldDirection().multiplyScalar(0.5);
		
		let strafe = new THREE.Vector3();
		strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).multiplyScalar(0.5);

		if(this.moveForward) {
			this.camera.position.x += worldDirection.x;
			this.camera.position.z += worldDirection.z;
		}

		if(this.moveLeft) {
			this.camera.position.x -= strafe.x;
			this.camera.position.z -= strafe.z;
		}

		if(this.moveBackward) {
			this.camera.position.x -= worldDirection.x;
			this.camera.position.z -= worldDirection.z;
		}

		if(this.moveRight) {
			this.camera.position.x += strafe.x;
			this.camera.position.z += strafe.z;
		}

		if(this.jumping) {

			let addHeight = 0.5 * Math.sin(this.jumpingSaturation);

			if(this.jumpingSaturation <= 0) {

				this.jumping = false;
				this.falling = true;
				this.jumpingSaturation = 0;

			} else {

				this.camera.position.y += addHeight;
				this.jumpingSaturation -= Math.PI / 40;

			}
		}

		if(this.falling) {
			
			let originPoint = this.camera.position.clone();
			let ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, -1, 0));
			let collisionResults = ray.intersectObjects(scene.children);

			if(collisionResults.length > 0 && collisionResults[0].distance < 1.25 && this.falling) {

				this.falling = false;
				this.jumpingSaturation = Math.PI / 2;

			} else {

				let addHeight = 0.5 * Math.sin(this.jumpingSaturation);
				this.camera.position.y -= addHeight;
				this.jumpingSaturation += Math.PI / 40;

				this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);

			}
		}
	}

	getCamera() {
		return this.camera;
	}
};

export default Shooter.Entities.Player;