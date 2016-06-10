'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import KeyboardController from '../Shooter.Controllers/Shooter.Controllers.KeyboardController.js';
import MouseController from '../Shooter.Controllers/Shooter.Controllers.MouseController.js';

Shooter.Entities.Player = class {

	constructor(scene) {

		this.moveForward = false;
		this.moveLeft = false;
		this.moveBackward = false;
		this.moveRight = false;
		
		this.jumping = false;
		this.falling = false;
		this.jumpingSaturation = Math.PI / 2;

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.set(0, 3, 0);
		this.camera.lookAt(0, 0, -1);

		this.keyboardController = KeyboardController.create(this);
		this.mouseController = MouseController.create(this);

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

	update(scene) {

		let worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(CONSTANTS.MOVEMENT_SPEED);
		
		let strafe = new THREE.Vector3();
		strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(CONSTANTS.MOVEMENT_SPEED);

		let forward = new THREE.Vector3();
		forward.crossVectors(strafe, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(CONSTANTS.MOVEMENT_SPEED);

		if(!this.jumping && !this.falling) {

			this.movingVector = new THREE.Vector3(0, 0, 0);

			if(this.moveForward) {
				this.movingVector.sub(forward);
			}

			if(this.moveLeft) {
				this.movingVector.sub(strafe);
			}

			if(this.moveBackward) {
				this.movingVector.add(forward);
			}

			if(this.moveRight) {
				this.movingVector.add(strafe);
			}

		}

		this.camera.position.x += this.movingVector.x;
		this.camera.position.z += this.movingVector.z;

		this.gravitation(scene);

		if(this.jumping) {

			let originPoint = this.camera.position.clone();

			originPoint.y += 1; // prevent intersection with the ground and grid.

			let ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, 1, 0));
			let collisionResults = ray.intersectObjects(scene.children);

			if(this.jumpingSaturation <= 0 || 
				(collisionResults.length > 0 && collisionResults[0].distance < 1.25)) {

				this.jumping = false;
				this.falling = true;
				this.jumpingSaturation = 0;

			} else {

				let addHeight = CONSTANTS.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
				this.camera.position.y += addHeight;
				this.jumpingSaturation -= Math.PI / CONSTANTS.GRAVITY;

			}
		}

		if(this.falling) {
			
			let originPoint = this.camera.position.clone();
			let ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, -1, 0));
			let collisionResults = ray.intersectObjects(scene.children);

			if(collisionResults.length > 0 && collisionResults[0].distance < 3) {

				this.falling = false;
				this.jumpingSaturation = Math.PI / 2;

				this.camera.position.y = Math.max(this.camera.position.y, 3);

			} else {

				let addHeight = CONSTANTS.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
				this.camera.position.y -= addHeight;
				this.jumpingSaturation += Math.PI / CONSTANTS.GRAVITY;

				this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);

			}
		}
	}

	gravitation(scene) {

		if(!this.jumping) {

			let ray = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0));
			let collisionResults = ray.intersectObjects(scene.children);

			if(!collisionResults.length || (collisionResults.length > 0 && collisionResults[0].distance > 2)) {
				this.falling = true;
			}
		}
	}

	getCamera() {
		return this.camera;
	}

	getControls() {
		return this.mouseController.getObject();
	}
};

export default Shooter.Entities.Player;