'use strict';

Shooter.namespace("Shooter.Entities");

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Door = class {

	static create(width, height) {

		let geometry, material, mesh;

		let door_texture = new THREE.Texture();

		door_texture.image = Loader.getImage('door');
		door_texture.needsUpdate = true;

		geometry = new THREE.PlaneGeometry(width, height);
		material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
		mesh = new THREE.Mesh(geometry, material);

		return mesh;
	}
};

export default Shooter.Entities.Door;