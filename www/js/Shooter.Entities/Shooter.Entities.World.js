'use strict';

Shooter.namespace("Shooter.Entities");

import Player from './Shooter.Entities.Player.js';
import Floor from './Shooter.Entities.Floor.js';

import LargeHouseBuilder from './Shooter.Entities.Builders/Shooter.Entities.Builders.LargeHouseBuilder.js';
import MediumHouseBuilder from './Shooter.Entities.Builders/Shooter.Entities.Builders.MediumHouseBuilder.js';

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

import Box from './Shooter.Entities.Box.js';

Shooter.Entities.World = class {

	constructor() {

		this.scene = new THREE.Scene();

		this.player = new Player(this.scene);
		this.scene.add(this.player.getControls());

		this.largeHouseBuilder = new LargeHouseBuilder();
		this.mediumHouseBuilder = new MediumHouseBuilder();

		let building = this.largeHouseBuilder.build(new THREE.Vector3(30, 10, -40));
		this.scene.add(building);

		building = this.largeHouseBuilder.build(new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));
		this.scene.add(building);

		building = this.mediumHouseBuilder.build(new THREE.Vector3(85, 10, -35));
		this.scene.add(building);

		building = this.mediumHouseBuilder.build(new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
		this.scene.add(building);

		building = this.mediumHouseBuilder.build(new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
		this.scene.add(building);

		building = this.mediumHouseBuilder.build(new THREE.Vector3(70, 10, 55));
		this.scene.add(building);

		building = this.mediumHouseBuilder.build(new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));
		this.scene.add(building);

		building = Box.create();
		building.position.set(18, 1.5, 38.5);
		this.scene.add(building);

		building = Box.create();
		building.position.set(21, 1.5, 38.5);
		this.scene.add(building);


		let floor = Floor.create();
		floor.position.set(-1000, 0, -1000);
		floor.rotation.set(Math.PI / 2, 0, 0);
		this.scene.add(floor);

		/* SKY SPHERE */

		let sky_texture = new THREE.Texture();

		Loader.instance.getImage('img/skysphere.jpg', (image) => {
			sky_texture.image = image;
			sky_texture.needsUpdate = true;
		});

		let geometry = new THREE.SphereGeometry(2000, 32, 32);
		let material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true });
		material.side = THREE.DoubleSide;
		let sky = new THREE.Mesh(geometry, material);

		this.scene.add(sky);
		/* ---------- */


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