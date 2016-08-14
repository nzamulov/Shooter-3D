'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import KeyboardController from '../Shooter.Controllers/Shooter.Controllers.KeyboardController.js';
import MouseController from '../Shooter.Controllers/Shooter.Controllers.MouseController.js';

import Bullet from './Shooter.Entities.Bullet.js';

import SoundsLoader from '../Shooter.Sounds/Shooter.Sounds.Loader.js';

Shooter.Entities.Player = class {

	constructor(scene) {

		this.bullets = [];

		this.scene = scene;

		this.moveForward = false;
		this.moveLeft = false;
		this.moveBackward = false;
		this.moveRight = false;
		
		this.jumping = false;
		this.falling = false;
		this.jumpingSaturation = Math.PI / 2;

		this.startFallingPoint = null;

		this.camera = new THREE.PerspectiveCamera(CONSTANTS.CAMERA.FRUSTUM, CONSTANTS.CAMERA.ASPECT_RATIO, CONSTANTS.CAMERA.NEAR, CONSTANTS.CAMERA.FAR);
		this.camera.position.set(CONSTANTS.RED_POINT.X, CONSTANTS.PLAYER.HEIGHT, CONSTANTS.RED_POINT.Z);
		this.camera.lookAt(0, 0, -1);

		this.keyboardController = KeyboardController.create(this);
		this.mouseController = MouseController.create(this);

		console.log("> Shooter.Entities.Player > constructor > ready");
	}

	update(scene) {

		for(let i = 0; i < this.bullets.length; ++i) {
			this.bullets[i].update();
		}

		let sound = SoundsLoader.getSound('wind');

		if(!sound.isPlaying) {
			sound.play();
		}

		let worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(CONSTANTS.PLAYER.MOVEMENT_SPEED);
		
		let right = new THREE.Vector3();
		right.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(CONSTANTS.PLAYER.MOVEMENT_SPEED);

		let backward = new THREE.Vector3();
		backward.crossVectors(right, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(CONSTANTS.PLAYER.MOVEMENT_SPEED);

		let forward = backward.clone().negate();
		let left = right.clone().negate();

		if(!this.jumping && !this.falling) {

			this.movingVector = new THREE.Vector3(0, 0, 0);

			if(this.moveForward) {
				this.movingVector.add(forward);
			}

			if(this.moveLeft) {
				this.movingVector.add(left);
			}

			if(this.moveBackward) {
				this.movingVector.add(backward);
			}

			if(this.moveRight) {
				this.movingVector.add(right);
			}

		}

		sound = SoundsLoader.getSound('moving');

		if(this.movingCollision(scene, this.movingVector.clone())) {

			this.camera.position.x += this.movingVector.x;
			this.camera.position.z += this.movingVector.z;

			if((this.moveForward ||
			   this.moveRight    ||
			   this.moveBackward ||
			   this.moveLeft)    &&
			   !this.jumping     &&
			   !this.falling) {

				if(!sound.isPlaying) {
					sound.play();
				}
			} else {
				if(sound.isPlaying) {
					sound.stop();
				}
			}
		} else {
			if(sound.isPlaying) {
				sound.stop();
			}
		}

		this.gravitation(scene);

		if(this.jumping) {

			let originPoint = this.camera.position.clone();
			let ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, 1, 0));
			let collisionResults = ray.intersectObjects(scene.children);
			let sound = SoundsLoader.getSound('jumping');

			if(this.jumpingSaturation <= 0 || 
				(collisionResults.length > 0 && collisionResults[0].distance < 1.25)) {

				this.jumping = false;
				this.falling = true;
				this.jumpingSaturation = 0;

				sound.started = false;

			} else {

				let addHeight = CONSTANTS.PLAYER.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
				this.camera.position.y += addHeight;
				this.jumpingSaturation -= Math.PI / CONSTANTS.GRAVITY;
				
				if(!sound.started) {
					sound.play();
					sound.started = true;
				}
			}
		}

		if(this.falling) {

			let originPoint = this.camera.position.clone();
			let ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, -1, 0));
			let collisionResults = ray.intersectObjects(scene.children);

			if(null == this.startFallingPoint) {
				this.startFallingPoint = originPoint;
			}

			if(collisionResults.length > 0 && Math.abs(collisionResults[0].distance - CONSTANTS.PLAYER.HEIGHT) < 1e-6) {

				this.falling = false;
				this.jumpingSaturation = Math.PI / 2;

				this.camera.position.y = Math.max(this.camera.position.y, CONSTANTS.PLAYER.HEIGHT);

				let sound = SoundsLoader.getSound('pain');

				if(this.startFallingPoint.y - this.camera.position.y > 16) {

					this.receiveDamage();
					
					if(!sound.isPlaying) {
						sound.play();
					}
				}

				this.startFallingPoint = null;

				sound = SoundsLoader.getSound('falling');
				
				if(!sound.isPlaying) {
					sound.play();
				}

			} else {

				let addHeight = CONSTANTS.PLAYER.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
				
				this.camera.position.y -= addHeight;
				this.camera.position.y = Math.max(this.camera.position.y, CONSTANTS.PLAYER.HEIGHT);

				this.jumpingSaturation += Math.PI / CONSTANTS.GRAVITY;
				this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);

			}
		}
	}

	movingCollision(scene, direction) {

		direction.normalize();

		let ray = new THREE.Raycaster(this.camera.position.clone(), direction);
		let collisionResults = ray.intersectObjects(scene.children);

		let flag1 = !collisionResults.length || (collisionResults.length > 0 && collisionResults[0].distance > 2);

		let norm = new THREE.Vector3();
		norm.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();

		let right = new THREE.Vector3();
		right.add(norm).add(this.camera.position.clone());

		norm.negate();

		let left = new THREE.Vector3();
		left.add(norm).add(this.camera.position.clone());

		ray = new THREE.Raycaster(right, direction);
		collisionResults = ray.intersectObjects(scene.children);

		let flag2 = !collisionResults.length || (collisionResults.length > 0 && collisionResults[0].distance > 2);

		ray = new THREE.Raycaster(left, direction);
		collisionResults = ray.intersectObjects(scene.children);

		let flag3 = !collisionResults.length || (collisionResults.length > 0 && collisionResults[0].distance > 2);

		return flag1 && flag2 && flag3;
	}

	gravitation(scene) {

		if(!this.jumping) {

			let ray = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0));
			let collisionResults = ray.intersectObjects(scene.children);
			
			if(collisionResults.length > 0 && collisionResults[0].distance - CONSTANTS.PLAYER.HEIGHT > 1e-6) {
				this.falling = true;
			} else if(collisionResults.length > 0 && CONSTANTS.PLAYER.HEIGHT > collisionResults[0].distance) {
				this.camera.position.y += CONSTANTS.PLAYER.HEIGHT - collisionResults[0].distance;
			}
		}
	}

	createBuller() {

		let bullet = new Bullet(this.camera.position.clone(), this.camera.rotation.clone(), this.camera.getWorldDirection());

		this.bullets.push(bullet);
		this.scene.add(bullet.getInstance());
	}

	receiveDamage() {
		let health = document.querySelector(".health span");
		let canvas = document.querySelector(".damage");
		health.innerHTML = Math.max(parseInt(health.innerHTML) - 1, 0);
		let saturation = 0.85;
		let intervalId = setInterval(() => {
			saturation = Math.max(saturation - 0.05, 0.0);
			canvas.style.backgroundColor = 'rgba(255, 0, 0, ' + saturation + ')';
			if(0.0 == saturation) {
				clearInterval(intervalId);
			}
		}, 50);
	}

	getCamera() {
		return this.camera;
	}

	getControls() {
		return this.mouseController.getObject();
	}
};

export default Shooter.Entities.Player;