'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Floor = class {

	static create() {

		let floor_texture = new THREE.Texture();
		
		floor_texture.image = Loader.getImage('floor');
		floor_texture.needsUpdate = true;
		floor_texture.wrapS = THREE.RepeatWrapping;
		floor_texture.wrapT = THREE.RepeatWrapping;
		floor_texture.repeat.set(100, 100);

		let geometry = new THREE.PlaneGeometry(CONSTANTS.FLOOR.WIDTH, CONSTANTS.FLOOR.HEIGHT, CONSTANTS.FLOOR.WIDTH_SEGMENTS, CONSTANTS.FLOOR.HEIGHT_SEGMENTS);
		let material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true, side: THREE.BackSide });
		let instance = new THREE.Mesh(geometry, material);

		return instance;
	}
};

export default Shooter.Entities.Floor;