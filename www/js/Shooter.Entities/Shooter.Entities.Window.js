'use strict';

Shooter.namespace("Shooter.Entities");

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Window = class {

	static create() {

		let window_texture = new THREE.Texture();

		window_texture.image = Loader.getImage('window');
		window_texture.needsUpdate = true;

		let geometry = new THREE.PlaneGeometry(4, 4);
		let material = new THREE.MeshBasicMaterial({ map: window_texture, overdraw: true });
		let instance = new THREE.Mesh(geometry, material);

		return instance;
	}
};

export default Shooter.Entities.Window;