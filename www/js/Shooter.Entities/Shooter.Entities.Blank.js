'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

Shooter.Entities.Blank = class extends AbstractEntity {

	constructor(width, height, depth, cone) {
		super();

		this.width = width;
		this.height = height;
		this.depth = depth;

		let geometry, mesh, container;

		container = new THREE.Geometry();

		geometry = new THREE.BoxGeometry(width, height, depth);
		mesh = new THREE.Mesh(geometry);

		mesh.updateMatrix();
		container.merge(mesh.geometry, mesh.matrix);

		if(true === cone) {

			geometry = new THREE.ConeGeometry(depth, 2);
			mesh = new THREE.Mesh(geometry);

			mesh.position.set((width / 2) - depth, (height / 2) + 1, 0);

			mesh.updateMatrix();
			container.merge(mesh.geometry, mesh.matrix);
		}

		this.instance = new THREE.Mesh(container);
	}

};

export default Shooter.Entities.Blank;