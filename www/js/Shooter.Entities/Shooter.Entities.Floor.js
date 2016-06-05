'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Floor = class extends AbstractEntity {

	constructor() {
		super();

		let floor_texture = new THREE.Texture();

		Loader.instance.getImage('img/floor.jpg', (image) => {
			floor_texture.image = image;
			floor_texture.needsUpdate = true;
			floor_texture.wrapS = THREE.RepeatWrapping;
			floor_texture.wrapT = THREE.RepeatWrapping;
			floor_texture.repeat.set(100, 100);
		});

		this.geometry = new THREE.PlaneGeometry(3000, 3000, 40, 40);
		this.material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true });
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Floor;