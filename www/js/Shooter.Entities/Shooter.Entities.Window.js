'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Window = class {

	static create() {

		let window_texture = new THREE.Texture();

		window_texture.image = Loader.getImage('window');
		window_texture.needsUpdate = true;

		let geometry = new THREE.PlaneGeometry(CONSTANTS.WINDOW.WIDTH, CONSTANTS.WINDOW.HEIGHT);
		let material = new THREE.MeshBasicMaterial({ map: window_texture, overdraw: true });
		let instance = new THREE.Mesh(geometry, material);

		return instance;
	}
};

export default Shooter.Entities.Window;