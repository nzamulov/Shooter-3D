'use strict';

Shooter.namespace("Shooter.Entities.Builders");

import AbstractBuilder from './Shooter.Entities.Builders.AbstractBuilder/Shooter.Entities.Builders.AbstractBuilder.js';

import Block from '../Shooter.Entities.Block.js';
import Blank from '../Shooter.Entities.Blank.js';
import Window from '../Shooter.Entities.Window.js';
import Door from '../Shooter.Entities.Door.js';

import Loader from '../../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Entities.Builders.MediumHouseBuilder = class extends AbstractBuilder {

	constructor() {
		super();

		console.log("> Shooter.Entities.Builders.MediumHouseBuilder > constructor > ready");
	}

	buildFacade() {

		let mesh, material, block, buildingBlocks;
		
		buildingBlocks = new THREE.Geometry();

		block = Block.create(30, 20, 30);
		block.position.set(15, 10, -15);
		block.updateMatrix();
		buildingBlocks.merge(block.geometry, block.matrix);

		let block_texture = new THREE.Texture();

		block_texture.image = Loader.getImage('block');
		block_texture.needsUpdate = true;
		block_texture.wrapS = THREE.RepeatWrapping;
		block_texture.wrapT = THREE.RepeatWrapping;
		block_texture.repeat.set(5, 5);

		this.assignUVs(buildingBlocks);

		material = new THREE.MeshBasicMaterial({ map: block_texture, overdraw: true });
		mesh = new THREE.Mesh(buildingBlocks, material);

		this.instance.add(mesh);
	}

	buildWindows() {

		let gameWindow;

		/* FORWARD WINDOWS */

		gameWindow = Window.create();
		gameWindow.position.set(15, 15, 0.01);
		this.instance.add(gameWindow);

		gameWindow = Window.create();
		gameWindow.position.set(25, 5, 0.01);
		this.instance.add(gameWindow);

		/* -------------- */

		/* RIGHT WINDOWS */

		gameWindow = Window.create();
		gameWindow.position.set(30.01, 15, -15);
		gameWindow.rotation.set(0, Math.PI / 2, 0);
		this.instance.add(gameWindow);

		/* ------------ */

		/* BACKWARD WINDOWS */

		gameWindow = Window.create();
		gameWindow.position.set(15, 15, -30.01);
		gameWindow.rotation.set(0, Math.PI, 0);
		this.instance.add(gameWindow);

		gameWindow = Window.create();
		gameWindow.position.set(5, 5, -30.01);
		gameWindow.rotation.set(0, Math.PI, 0);
		this.instance.add(gameWindow);

		/* ------------- */

		/* LEFT WINDOWS */

		gameWindow = Window.create();
		gameWindow.position.set(-0.01, 5, -15);
		gameWindow.rotation.set(0, -Math.PI / 2, 0);
		this.instance.add(gameWindow);

		/* ------------ */		
	}

	buildBlanks() {

		let mesh, material, blank, buildingBlanks;

		buildingBlanks = new THREE.Geometry();

		for(let j = 0; j < 2; ++j) {

			for(let i = 0; i < 4; ++i) {

				blank = Blank.create((i % 3 ? 0.5 : 1), 20, (i % 3 ? 0.25 : 0.5), true);
				blank.position.set((i % 3 ? 0.25 : 0.5) * (i === 3 ? -1 : 1) + 10 * i, 10, -30 * j);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}

			for(let i = 0; i < 2; ++i) {

				blank = Blank.create(0.5, 30, 0.25, false);
				blank.position.set(30 * j, 10 + 10 * i, -15);
				blank.rotation.set(-Math.PI / 2, 0, 0);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}

		}

		for(let j = 0; j < 2; ++j) {

			for(let i = 0; i < 4; ++i) {

				blank = Blank.create(0.5, 20, 0.25, (i % 3 !== 0));
				blank.position.set(30 * j, 10, -10 * i);
				blank.rotation.set(0, -Math.PI / 2, 0);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}

			for(let i = 0; i < 2; ++i) {

				blank = Blank.create(0.5, 30, 0.25, false);
				blank.position.set(15, 10 + 10 * i, -30 * j);
				blank.rotation.set(0, 0, -Math.PI / 2);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}

		}

		let blank_texture = new THREE.Texture();

		blank_texture.image = Loader.getImage('blank');
		blank_texture.needsUpdate = true;
		blank_texture.wrapS = THREE.RepeatWrapping;
		blank_texture.wrapT = THREE.RepeatWrapping;
		blank_texture.repeat.set(5, 5);

		this.assignUVs(buildingBlanks);

		material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
		mesh = new THREE.Mesh(buildingBlanks, material);

		this.instance.add(mesh);
	}

	buildDoors() {

		let door = Door.create(4, 8);

		door.position.set(8, 3, 0.01);

		this.instance.add(door);
	}

	buildStuff() {

		let stuff, geometry, material, mesh, trees;

	}

	setPosition(position) {
		this.instance.position.set(position.x - 15, position.y - 10, position.z + 15);
	}

	setRotation(rotation) {
		this.instance.translateX(15);
		this.instance.translateY(10);
		this.instance.translateZ(-15);

		this.instance.rotation.set(rotation.x, rotation.y, rotation.z);

		this.instance.translateX(-15);
		this.instance.translateY(-10);
		this.instance.translateZ(15);
	}
};

export default Shooter.Entities.Builders.MediumHouseBuilder;