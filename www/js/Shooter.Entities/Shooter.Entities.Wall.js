'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Wall = class extends AbstractEntity {

	constructor() {
		super();

		let wall_texture = new THREE.Texture();

		Loader.instance.getImage('img/tower.jpg', (image) => {
			wall_texture.image = image;
			wall_texture.needsUpdate = true;
			wall_texture.wrapS = THREE.RepeatWrapping;
			wall_texture.wrapT = THREE.RepeatWrapping;
			wall_texture.repeat.set(4, 4);
		});

		this.geometry = new THREE.BoxGeometry(30, 16, 1);
		this.material = new THREE.MeshBasicMaterial({ map: wall_texture, overdraw: true });
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Wall;