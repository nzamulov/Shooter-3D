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

		this.createLargeHouse(new THREE.Vector3(30, 10, -40));
		this.createLargeHouse(new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));

		this.createMediumHouse(new THREE.Vector3(85, 10, -35));
		this.createMediumHouse(new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
		this.createMediumHouse(new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
		this.createMediumHouse(new THREE.Vector3(70, 10, 55));
		this.createMediumHouse(new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));

		let box = Box.create();
		box.position.set(18, 1.5, 38.5);
		this.scene.add(box);

		box = Box.create();
		box.position.set(21, 1.5, 38.5);
		this.scene.add(box);


		/* GREEN POINT RESPAWN */

		box = Box.create();
		box.position.set(-30, 1.5, 70);
		box.rotation.set(0, Math.PI / 4, 0);
		this.scene.add(box);

		box = Box.create();
		box.position.set(-28.5, 1.5, 74);
		this.scene.add(box);

		box = Box.create();
		box.position.set(-28.5, 1.5, 77);
		this.scene.add(box);

		box = Box.create();
		box.position.set(-28.5, 1.5, 80);
		this.scene.add(box);

		box = Box.create();
		box.position.set(-28.5, 4.5, 80);
		this.scene.add(box);

		box = Box.create();
		box.position.set(-28.5, 2.1, 83.6);
		box.rotation.set(Math.PI / 4, 0, 0);
		this.scene.add(box);

		/* ------------------ */

		/* RED POINT RESPAWN */

		box = Box.create();
		box.position.set(230, 1.5, -110);
		this.scene.add(box);

		box = Box.create();
		box.position.set(227, 1.5, -110);
		this.scene.add(box);

		box = Box.create();
		box.position.set(227, 4.5, -110);
		this.scene.add(box);

		box = Box.create();
		box.position.set(227, 1.5, -113);
		this.scene.add(box);

		box = Box.create();
		box.position.set(233, 1.5, -110);
		this.scene.add(box);

		box = Box.create();
		box.position.set(237, 1.5, -110);
		box.rotation.set(0, Math.PI / 4, 0);
		this.scene.add(box);

		/* ----------------- */

		let floor = Floor.create();
		floor.position.set(-500, 0, -500);
		floor.rotation.set(Math.PI / 2, 0, 0);
		this.scene.add(floor);

		/* SKY SPHERE */

		let sky_texture = new THREE.Texture();

		sky_texture.image = Loader.getImage('skysphere');
		sky_texture.needsUpdate = true;

		let geometry = new THREE.SphereGeometry(2000, 32, 32);
		let material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true, side: THREE.BackSide });
		let sky = new THREE.Mesh(geometry, material);

		this.scene.add(sky);

		/* ---------- */

		/* WORLD BOUNDING BOX */

		box = new THREE.BoxGeometry(1000, 250, 1000);
		material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0, side: THREE.BackSide });
		let mesh = new THREE.Mesh(box, material);

		this.scene.add(mesh);

		/* ------------------ */

		console.log("> Shooter.Entities.World > constructor > ready");
	}

	createLargeHouse(position, rotation) {

		position = position || new THREE.Vector3(0, 0, 0);
		rotation = rotation || new THREE.Vector3(0, 0, 0);

		let building = this.largeHouseBuilder.build(position, rotation);
		this.scene.add(building);

		building = new THREE.BoxGeometry(54, 20, 40);

		let material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0 });
		let mesh = new THREE.Mesh(building, material);

		mesh.position.set(position.x, position.y, position.z);
		mesh.rotation.set(rotation.x, rotation.y, rotation.z);

		this.scene.add(mesh);
	}

	createMediumHouse(position, rotation) {

		position = position || new THREE.Vector3(0, 0, 0);
		rotation = rotation || new THREE.Vector3(0, 0, 0);

		let building = this.mediumHouseBuilder.build(position, rotation);
		this.scene.add(building);

		building = new THREE.BoxGeometry(30, 20, 30);

		let material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0 });
		let mesh = new THREE.Mesh(building, material);

		mesh.position.set(position.x, position.y, position.z);
		mesh.rotation.set(rotation.x, rotation.y, rotation.z);

		this.scene.add(mesh);
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