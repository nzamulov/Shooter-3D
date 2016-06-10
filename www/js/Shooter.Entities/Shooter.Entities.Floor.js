'use strict';

Shooter.namespace("Shooter.Entities");

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Floor = class {

	static create() {

		let floor_texture = new THREE.Texture();

		Loader.instance.getImage('img/floor.jpg', (image) => {
			floor_texture.image = image;
			floor_texture.needsUpdate = true;
			floor_texture.wrapS = THREE.RepeatWrapping;
			floor_texture.wrapT = THREE.RepeatWrapping;
			floor_texture.repeat.set(100, 100);
		});

		let geometry = new THREE.PlaneGeometry(3000, 3000, 40, 40);
		let material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true });
		material.side = THREE.DoubleSide;
		let instance = new THREE.Mesh(geometry, material);

		return instance;
	}
};

export default Shooter.Entities.Floor;