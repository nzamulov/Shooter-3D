'use strict';

Shooter.namespace("Shooter.Entities");

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Wheel = class {

	static create() {

		let wheel = new THREE.Geometry();

		let geometry = new THREE.RingGeometry(2.2, 2.5, 32);
		let ring = new THREE.Mesh(geometry);
		ring.position.set(0, 0, 0);
		ring.updateMatrix();
		wheel.merge(ring.geometry, ring.matrix);

		geometry = new THREE.RingGeometry(2.2, 2.5, 32);
		ring = new THREE.Mesh(geometry);
		ring.position.set(0, 0, -0.3);
		ring.updateMatrix();
		wheel.merge(ring.geometry, ring.matrix);

		geometry = new THREE.CylinderGeometry(2.5, 2.5, 0.3, 64, 1, true);
		let rim = new THREE.Mesh(geometry);
		rim.position.set(0, 0, -0.15);
		rim.rotation.set(Math.PI / 2, 0, 0);
		rim.updateMatrix();
		wheel.merge(rim.geometry, rim.matrix);

		geometry = new THREE.CylinderGeometry(2.2, 2.2, 0.3, 64, 1, true);
		rim = new THREE.Mesh(geometry);
		rim.position.set(0, 0, -0.15);
		rim.rotation.set(Math.PI / 2, 0, 0);
		rim.updateMatrix();
		wheel.merge(rim.geometry, rim.matrix);




		geometry = new THREE.RingGeometry(0.3, 0.5, 32);
		ring = new THREE.Mesh(geometry);
		ring.position.set(0, 0, 0);
		ring.updateMatrix();
		wheel.merge(ring.geometry, ring.matrix);

		geometry = new THREE.RingGeometry(0.3, 0.5, 32);
		ring = new THREE.Mesh(geometry);
		ring.position.set(0, 0, -0.3);
		ring.updateMatrix();
		wheel.merge(ring.geometry, ring.matrix);

		geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3, 64, 1, true);
		rim = new THREE.Mesh(geometry);
		rim.position.set(0, 0, -0.15);
		rim.rotation.set(Math.PI / 2, 0, 0);
		rim.updateMatrix();
		wheel.merge(rim.geometry, rim.matrix);

		geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 64, 1, true);
		rim = new THREE.Mesh(geometry);
		rim.position.set(0, 0, -0.15);
		rim.rotation.set(Math.PI / 2, 0, 0);
		rim.updateMatrix();
		wheel.merge(rim.geometry, rim.matrix);




		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
		let box = new THREE.Mesh(geometry);
		box.position.set(0, 1.35, -0.15);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);

		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
		box = new THREE.Mesh(geometry);
		box.position.set(0, -1.35, -0.15);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);
		
		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);		
		box = new THREE.Mesh(geometry);
		box.position.set(-1.15, -0.7, -0.15);
		box.rotation.set(0, 0, -Math.PI / 3);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);

		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
		box = new THREE.Mesh(geometry);
		box.position.set(-1.15, 0.7, -0.15);
		box.rotation.set(0, 0, Math.PI / 3);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);

		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
		box = new THREE.Mesh(geometry);
		box.position.set(1.15, 0.7, -0.15);
		box.rotation.set(0, 0, -Math.PI / 3);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);

		geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
		box = new THREE.Mesh(geometry);
		box.position.set(1.15, -0.7, -0.15);
		box.rotation.set(0, 0, Math.PI / 3);
		box.updateMatrix();
		wheel.merge(box.geometry, box.matrix);




		let wheel_texture = new THREE.Texture();

		wheel_texture.image = Loader.getImage('wheel');
		wheel_texture.needsUpdate = true;

		let material = new THREE.MeshBasicMaterial({ map: wheel_texture, overdraw: true, side: THREE.DoubleSide });
		let mesh = new THREE.Mesh(wheel, material);

		return mesh;
	}
};

export default Shooter.Entities.Wheel;