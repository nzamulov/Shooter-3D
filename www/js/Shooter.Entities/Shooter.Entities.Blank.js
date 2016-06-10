'use strict';

Shooter.namespace("Shooter.Entities");

Shooter.Entities.Blank = class {

	static create(width, height, depth, cone) {

		let instance, geometry, mesh, container;

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

		instance = new THREE.Mesh(container);

		return instance;
	}
};

export default Shooter.Entities.Blank;