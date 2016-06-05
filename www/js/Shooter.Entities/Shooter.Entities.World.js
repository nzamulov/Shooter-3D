'use strict';

Shooter.namespace("Shooter.Entities");

import Player from './Shooter.Entities.Player.js';
import Blank from './Shooter.Entities.Blank.js';
import Floor from './Shooter.Entities.Floor.js';
import LargeBuilding from './Shooter.Entities.LargeBuilding.js';

Shooter.Entities.World = class {

	constructor() {

		this.scene = new THREE.Scene();

		//this.scene.fog = new THREE.Fog(0xFFAC40, 0, 1500);

		this.player = new Player(this.scene);
		this.scene.add(this.player.getControls());

		let size = 2000, step = 2;

		let geometry = new THREE.Geometry();
		let material = new THREE.LineBasicMaterial({ color: 'green' });

		for(let i = -size; i <= size; i += step) {
			geometry.vertices.push(new THREE.Vector3( - size, 0.02, i ));
			geometry.vertices.push(new THREE.Vector3( size, 0.02, i ));

			geometry.vertices.push(new THREE.Vector3( i, 0.02, - size ));
			geometry.vertices.push(new THREE.Vector3( i, 0.02, size ));
		}

		let line = new THREE.Line(geometry, material, THREE.LinePieces);
		this.scene.add(line);

		let building = new LargeBuilding();
		building.setPosition(30, 10, -40);
		this.scene.add(building.getInstance());

		/*geometry = new THREE.BoxGeometry(4, 4, 6);
		material = new THREE.MeshBasicMaterial({ color: 'green' });
		material.side = THREE.DoubleSide;
		building = new THREE.Mesh(geometry, material);

		building.position.set(-2, 2, -22);

		this.scene.add(building);*/

		/*let floor = new Floor();
		floor.setPosition(-1000, 0.02, -1000);
		floor.setRotation(-Math.PI / 2, 0, 0);
		this.scene.add(floor.getInstance());*/


		/* DESERT */

		/*let desert_texture, loader;

		desert_texture = new THREE.Texture();
		loader = new THREE.ImageLoader();

		loader.load('img/desert.jpg', (image) => {
			desert_texture.image = image;
			desert_texture.needsUpdate = true;
		});

		geometry = new THREE.ParametricGeometry((u, v) => {

			u = 1000 * u;
			v = 1000 * v;
			let y = 60 * Math.abs(Math.sin(Math.pow(u * v, 1 / 5)));

			return new THREE.Vector3(u, y, v);
		}, 20, 20);

		material = new THREE.MeshBasicMaterial({ map: desert_texture, overdraw: true });
		material.side = THREE.DoubleSide;
		let curve = new THREE.Mesh(geometry, material);

		curve.position.x = -10;
		curve.position.z = -300;
		curve.position.y = -10;

		curve.rotation.y = Math.PI / 2;

		this.scene.add(curve);

		curve = new THREE.Mesh(geometry, material);

		curve.position.x = 10;
		curve.position.z = -300;
		curve.position.y = -10;

		curve.rotation.y = Math.PI;

		this.scene.add(curve);*/

		/* ------ */

		/* SKY */

		/*geometry = new THREE.SphereGeometry(3000);

		let canvas = document.createElement('canvas');
		let context = canvas.getContext('2d');

		context.canvas.width = 3000;
		context.canvas.height = 3000;

		let gradient = context.createRadialGradient(1500, 1500, 30, 1500, 1500, 700);

		gradient.addColorStop(0, 'white');
		gradient.addColorStop(0.1, '#AAA8FF');
		gradient.addColorStop(1, '#504DFF');

		context.arc(1500, 1500, 3000, 0, 2 * Math.PI);

		context.fillStyle = gradient;
		context.fill();

		let shadowTexture = new THREE.Texture(canvas);
		shadowTexture.needsUpdate = true;

		material = new THREE.MeshBasicMaterial({
			map: shadowTexture,
			side: THREE.BackSide
		});

		let sky = new THREE.Mesh(geometry, material);

		sky.rotation.y = -Math.PI / 2;
		sky.rotation.z = Math.PI / 9;

		this.scene.add(sky);*/

		/* ------ */

		console.log("> Shooter.Entities.World > constructor > ready");
	}

	update() {
		this.player.update(this.scene);
	}

	getScene() {
		return this.scene;
	}

	getCamera() {
		return this.player.getCamera();
	}
};

export default Shooter.Entities.World;