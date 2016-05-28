'use strict';

Shooter.namespace("Shooter.Entities");

import Player from '../Shooter.Entities.Player/Shooter.Entities.Player.js';

Shooter.Entities.World = class {

	constructor() {

		this.scene = new THREE.Scene();

		this.player = new Player();

		/*let size = 30, step = 3;

		let geometry = new THREE.Geometry();
		let material = new THREE.LineBasicMaterial({ color: 'green' });

		for(let i = -size; i <= size; i += step) {
			geometry.vertices.push(new THREE.Vector3( - size, 0, i ));
			geometry.vertices.push(new THREE.Vector3( size, 0, i ));

			geometry.vertices.push(new THREE.Vector3( i, 0, - size ));
			geometry.vertices.push(new THREE.Vector3( i, 0, size ));
		}

		let line = new THREE.Line(geometry, material, THREE.LinePieces);
		this.scene.add(line);*/

		let geometry = new THREE.PlaneGeometry(40, 40, 32);
		let material = new THREE.MeshBasicMaterial( { color: 'blue' } );
		let plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2.0;
		this.scene.add(plane);

		geometry = new THREE.BoxGeometry(2, 2, 2);
		material = new THREE.MeshBasicMaterial( { color: 'red' } );
		let cube = new THREE.Mesh( geometry, material );

		cube.position.x = 1;
		cube.position.y = 1;
		cube.position.z = 1;
		
		this.scene.add(cube);

		console.log("> Shooter.Entities.World > constructor > ready");
	}

	update() {
		this.player.update();
	}

	getScene() {
		return this.scene;
	}

	getCamera() {
		return this.player.getCamera();
	}
};

export default Shooter.Entities.World;