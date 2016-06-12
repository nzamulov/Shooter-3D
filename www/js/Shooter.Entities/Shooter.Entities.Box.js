'use strict';

Shooter.namespace("Shooter.Entities");

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Box = class {

	static create() {
		
		let loader, geometry, material, mesh;

		geometry = new THREE.BoxGeometry(3, 3, 3);

		let box_texture = new THREE.Texture();
		
		box_texture.image = Loader.getImage('box2');
		box_texture.needsUpdate = true;

		material = new THREE.MeshBasicMaterial({ map: box_texture, overdraw: true });
		mesh = new THREE.Mesh(geometry, material);

		return mesh;
	}
};

export default Shooter.Entities.Box;