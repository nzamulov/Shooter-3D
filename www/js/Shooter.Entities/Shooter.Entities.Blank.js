'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Blank = class extends AbstractEntity {

	constructor() {
		super();

		let blank_texture = new THREE.Texture();

		Loader.instance.getImage('img/blank.jpg', (image) => {
			blank_texture.image = image;
			blank_texture.needsUpdate = true;
			blank_texture.wrapS = THREE.RepeatWrapping;
			blank_texture.wrapT = THREE.RepeatWrapping;
		});

		this.geometry = new THREE.CylinderGeometry(0.2, 0.2, 36, 64);
		this.material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Blank;