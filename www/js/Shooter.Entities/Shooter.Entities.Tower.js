'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Tower = class extends AbstractEntity {

	constructor() {
		super();

		let tower_texture = new THREE.Texture();

		Loader.instance.getImage('img/tower.jpg', (image) => {
			tower_texture.image = image;
			tower_texture.needsUpdate = true;
			tower_texture.wrapS = THREE.RepeatWrapping;
			tower_texture.wrapT = THREE.RepeatWrapping;
			tower_texture.repeat.set(1, 4);
		});

		this.geometry = new THREE.BoxGeometry(3, 20, 3);
		this.material = new THREE.MeshBasicMaterial({ map: tower_texture, overdraw: true });
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Tower;