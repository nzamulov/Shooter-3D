'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';
import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader/Shooter.Graphics.Loader.js';

Shooter.Entities.Blank = class extends AbstractEntity {

	constructor(width, height, depth, cone) {
		super();

		this.width = width;
		this.height = height;
		this.depth = depth;

		let geometry, material, mesh;

		this.instance = new THREE.Object3D();

		geometry = new THREE.BoxGeometry(width, height, depth);
		material = new THREE.MeshBasicMaterial({ color: 'white' });
		material.side = THREE.DoubleSide;
		mesh = new THREE.Mesh(geometry, material);

		this.instance.add(mesh);

		if(true === cone) {

			geometry = new THREE.ConeGeometry(depth, 2);
			material = new THREE.MeshBasicMaterial({ color: 'white' });
			material.side = THREE.DoubleSide;
			mesh = new THREE.Mesh(geometry, material);

			mesh.position.set((width / 2) - depth, (height / 2) + 1, 0);

			this.instance.add(mesh);
		}
	}

};

export default Shooter.Entities.Blank;