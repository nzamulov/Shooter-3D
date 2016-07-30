'use strict';

Shooter.namespace("Shooter.Entities");

import Wheel from './Shooter.Entities.Wheel';

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Wheel = class {

	static create() {

		let cart = new THREE.Geometry();

		let leftWheel = Wheel.create();
		leftWheel.position.set(0, 0, 5);
		leftWheel.updateMatrix();
		cart.merge(leftWheel.geometry, leftWheel.matrix);

		let rightWheel = Wheel.create();
		rightWheel.position.set(0, 0, 0);
		rightWheel.updateMatrix();
		cart.merge(rightWheel.geometry, rightWheel.matrix);

		let geometry = new THREE.CylinderGeometry(0.35, 0.35, 6);
		let blank = new THREE.Mesh(geometry);
		blank.position.set(0, 0, 2.35);
		blank.rotation.set(Math.PI / 2, 0, 0);
		blank.updateMatrix();
		cart.merge(blank.geometry, blank.matrix);

		geometry = new THREE.BoxGeometry(10, 4.7, 0.4);
		let plane = new THREE.Mesh(geometry);
		plane.position.set(0, 0.55, 2.35);
		plane.rotation.set(Math.PI / 2, Math.PI / 12, 0);
		plane.updateMatrix();
		cart.merge(plane.geometry, plane.matrix);

		geometry = new THREE.CylinderGeometry(0.1, 0.1, 5);
		blank = new THREE.Mesh(geometry);
		blank.position.set(-6, -1.1, 1.15);
		blank.rotation.set(0, 0, -5 * Math.PI / 12);
		blank.updateMatrix();
		cart.merge(blank.geometry, blank.matrix);

		geometry = new THREE.CylinderGeometry(0.1, 0.1, 5);
		blank = new THREE.Mesh(geometry);
		blank.position.set(-6, -1.1, 3.85);
		blank.rotation.set(0, 0, -5 * Math.PI / 12);
		blank.updateMatrix();
		cart.merge(blank.geometry, blank.matrix);

		let cart_texture = new THREE.Texture();

		cart_texture.image = Loader.getImage('wheel');
		cart_texture.needsUpdate = true;

		let material = new THREE.MeshBasicMaterial({ map: cart_texture, overdraw: true, side: THREE.DoubleSide });
		let mesh = new THREE.Mesh(cart, material);

		return mesh;
	}
};

export default Shooter.Entities.Wheel;