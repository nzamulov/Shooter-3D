'use strict';

Shooter.namespace("Shooter.Entities");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import Player from './Shooter.Entities.Player.js';
import Floor from './Shooter.Entities.Floor.js';
import Wheel from './Shooter.Entities.Wheel.js';
import Cart from './Shooter.Entities.Cart.js';

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

		this.createHouse("Large", new THREE.Vector3(30, 10, -40));
		this.createHouse("Large", new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));

		this.createHouse("Medium", new THREE.Vector3(85, 10, -35));
		this.createHouse("Medium", new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
		this.createHouse("Medium", new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
		this.createHouse("Medium", new THREE.Vector3(70, 10, 55));
		this.createHouse("Medium", new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));

		let box = Box.create();
		box.position.set(18, 1.5, 38.5);
		this.scene.add(box);

		box = Box.create();
		box.position.set(21, 1.5, 38.5);
		this.scene.add(box);

		box = Box.create();
		box.position.set(61, 1.5, -40);
		box.rotation.set(0, Math.PI / 4, 0);
		this.scene.add(box);

		box = Box.create();
		box.position.set(65, 1.5, -40);
		this.scene.add(box);

		box = Box.create();
		box.position.set(65, 1.5, -43);
		this.scene.add(box);

		box = Box.create();
		box.position.set(65, 4.5, -40);
		this.scene.add(box);

		box = Box.create();
		box.position.set(68, 1.5, -40);
		this.scene.add(box);

		box = Box.create();
		box.position.set(68, 4.5, -40);
		this.scene.add(box);

		box = Box.create();
		box.position.set(68, 7.5, -40);
		this.scene.add(box);

		box = Box.create();
		box.position.set(68, 1.5, -37);
		this.scene.add(box);
		
		let wheel = Wheel.create();
		wheel.position.set(20, 2.5, 70.7);
		wheel.rotation.set(-Math.PI / 18, 0, 0);
		this.scene.add(wheel);

		let cart = Cart.create();
		cart.position.set(135, 2.5, -56);
		this.scene.add(cart);

		box = Box.create();
		box.position.set(145, 1.5, -52);
		this.scene.add(box);

		box = Box.create();
		box.position.set(145, 4.5, -52);
		this.scene.add(box);

		box = Box.create();
		box.position.set(118.5, 1.5, -42);
		this.scene.add(box);

		box = Box.create();
		box.position.set(101.5, 1.5, -22);
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

		/* FLOOR */

		let floor = Floor.create();
		floor.rotation.set(Math.PI / 2, 0, 0);
		this.scene.add(floor);

		/* ----------------- */

		/* SKY SPHERE */

		let sky_texture = new THREE.Texture();

		sky_texture.image = Loader.getImage('skysphere');
		sky_texture.needsUpdate = true;

		let geometry = new THREE.SphereGeometry(CONSTANTS.SKYSPHERE.RADIUS, CONSTANTS.SKYSPHERE.WIDTH_SEGMENTS, CONSTANTS.SKYSPHERE.HEIGHT_SEGMENTS);
		let material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true, side: THREE.BackSide });
		let sky = new THREE.Mesh(geometry, material);

		this.scene.add(sky);

		/* ---------- */

		/* WORLD BOUNDING BOX */

		box = new THREE.BoxGeometry(CONSTANTS.BOUNDING_BOX.WIDTH, CONSTANTS.BOUNDING_BOX.HEIGHT, CONSTANTS.BOUNDING_BOX.DEPTH);
		material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0, side: THREE.BackSide });
		let mesh = new THREE.Mesh(box, material);

		this.scene.add(mesh);

		/* ------------------ */

		console.log("> Shooter.Entities.World > constructor > ready");
	}

	createHouse(type, position, rotation) {

		let building;

		position = position || new THREE.Vector3(0, 0, 0);
		rotation = rotation || new THREE.Vector3(0, 0, 0);

		if("Large" === type) {

			building = this.largeHouseBuilder.build(position, rotation);
			this.scene.add(building);
			building = new THREE.BoxGeometry(CONSTANTS.LARGE_HOUSE.WIDTH, CONSTANTS.LARGE_HOUSE.HEIGHT, CONSTANTS.LARGE_HOUSE.DEPTH);

		} else {

			building = this.mediumHouseBuilder.build(position, rotation);
			this.scene.add(building);
			building = new THREE.BoxGeometry(CONSTANTS.MEDIUM_HOUSE.WIDTH, CONSTANTS.MEDIUM_HOUSE.HEIGHT, CONSTANTS.MEDIUM_HOUSE.DEPTH);

		}

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