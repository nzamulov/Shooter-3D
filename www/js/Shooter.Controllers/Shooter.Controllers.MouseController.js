'use strict';

Shooter.namespace("Shooter.Controllers");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import AbstractController from './Shooter.Controllers.AbstractController/Shooter.Controllers.AbstractController.js';

Shooter.Controllers.MouseController = class extends AbstractController {

	constructor(player) {
		super();

		this.player = player;

		this.player.camera.rotation.set(0, 0, 0);

		this.pitchObject = new THREE.Object3D();
		this.pitchObject.add();

		this.yawObject = new THREE.Object3D();
		this.yawObject.add(this.pitchObject);

		this.PI_2 = -0.1 + Math.PI / 2; // -0.1 is the Epsilon for gimbal lock prevent.
	}

	attachEvents() {

		this.onMouseMove = (event) => {

			let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			this.yawObject.rotation.y -= movementX * CONSTANTS.CURSOR_SPEED;
			this.pitchObject.rotation.x -= movementY * CONSTANTS.CURSOR_SPEED;

			this.pitchObject.rotation.x = Math.max( -this.PI_2, Math.min( this.PI_2, this.pitchObject.rotation.x ) );

			let direction = new THREE.Vector3(0, 0, -1);
			let rotation = new THREE.Euler(0, 0, 0, "YXZ");
			let lookAt = new THREE.Vector3();

			rotation.set(this.pitchObject.rotation.x, this.yawObject.rotation.y, 0);

			lookAt.copy(direction).applyEuler(rotation);

			lookAt.x += this.player.camera.position.x;
			lookAt.y += this.player.camera.position.y;
			lookAt.z += this.player.camera.position.z;

			this.player.camera.lookAt(lookAt);

		}

		this.onClick = (event) => {
			this.player.createBuller();
		}

		let self = this;

		document.addEventListener('mousemove', (event) => { self.onMouseMove(event); }, false);
		document.addEventListener('click', (event) => { self.onClick(event); }, false);
	}

	getObject() {

		return this.yawObject;

	}

	static create(player) {

		let controller = new Shooter.Controllers.MouseController(player);

		return controller;
	}
};

export default Shooter.Controllers.MouseController;