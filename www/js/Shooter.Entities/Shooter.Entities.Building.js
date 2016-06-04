'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Building = class extends AbstractEntity {

	constructor(height) {
		super();

		/*let tower_texture = new THREE.Texture();

		Loader.instance.getImage('img/tower.jpg', (image) => {
			tower_texture.image = image;
			tower_texture.needsUpdate = true;
			tower_texture.wrapS = THREE.RepeatWrapping;
			tower_texture.wrapT = THREE.RepeatWrapping;
			tower_texture.repeat.set(1, 4);
		});*/

		let points = [];

		for(let i = 0; i < 10; i++) {
			points.push(new THREE.Vector2( Math.sin( i * 0.2 ) * 5 + 2, height * (i - 9)));
		}

		this.geometry = new THREE.LatheGeometry(points, 30);
		this.material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		this.material.side = THREE.DoubleSide;
		this.instance = new THREE.Mesh(this.geometry, this.material);
	}
};

export default Shooter.Entities.Building;