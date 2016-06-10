'use strict';

Shooter.namespace("Shooter.Entities.Builders");

import AbstractBuilder from './Shooter.Entities.Builders.AbstractBuilder/Shooter.Entities.Builders.AbstractBuilder.js';

import Block from '../Shooter.Entities.Block.js';
import Blank from '../Shooter.Entities.Blank.js';
import Window from '../Shooter.Entities.Window.js';

Shooter.Entities.Builders.LargeHouseBuilder = class extends AbstractBuilder {

	constructor() {
		super();

		console.log("> Shooter.Entities.Builders.LargeHouseBuilder > constructor > ready");
	}

	buildFacade() {

		let mesh, material, block, buildingBlocks;
		
		buildingBlocks = new THREE.Geometry();

		block = Block.create(54, 10, 40);
		block.position.set(27, 5, -20);
		block.updateMatrix();
		buildingBlocks.merge(block.geometry, block.matrix);

		block = Block.create(18, 10, 40);
		block.position.set(45, 15, -20);
		block.updateMatrix();
		buildingBlocks.merge(block.geometry, block.matrix);

		block = Block.create(18, 10, 40);
		block.position.set(9, 15, -20);
		block.updateMatrix();
		buildingBlocks.merge(block.geometry, block.matrix);

		material = new THREE.MeshBasicMaterial({ color: 'gray' });
		mesh = new THREE.Mesh(buildingBlocks, material);

		this.instance.add(mesh);
	}

	buildWindows() {

		let mesh, material, gameWindow, buildingWindows;

		buildingWindows = new THREE.Geometry();

		gameWindow = Window.create();
		gameWindow.position.set(9, 12.5, 0.1);
		gameWindow.updateMatrix();
		buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);

		gameWindow = Window.create();
		gameWindow.position.set(45, 3.5, 0.1);
		gameWindow.updateMatrix();
		buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);

		gameWindow = Window.create();
		gameWindow.position.set(45, 12.5, 0.1);
		gameWindow.updateMatrix();
		buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);

		material = new THREE.MeshBasicMaterial({ color: 'yellow' });
		mesh = new THREE.Mesh(buildingWindows, material);

		this.instance.add(mesh);
	}

	buildBlanks() {

		let mesh, material, blank, buildingBlanks;

		buildingBlanks = new THREE.Geometry();

		for(let i = 0; i < 10; ++i) {
			
			blank = Blank.create((i % 3 ? 0.5 : 1), (i < 4 || i > 5 ? 20 : 10), (i % 3 ? 0.25 : 0.5), true);
			blank.position.set((i % 3 ? 0.25 : 0.5) + 6 * i, (i < 4 || i > 5 ? 10 : 5), (i % 3 ? 0.175 : 0.25));
			blank.updateMatrix();
			buildingBlanks.merge(blank.geometry, blank.matrix);

		}

		for(let i = 0; i < 2; ++i) {
			for(let j = 0; j < 2; ++j) {

				blank = Blank.create(0.5, 18, 0.25, false);
				blank.position.set(9 + 36 * j, 20, -40 * i);
				blank.rotation.set(0, 0, -Math.PI / 2);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}
		}

		blank = Blank.create(0.5, 6, 0.25, false);
		blank.position.set(27, 7, 0);
		blank.rotation.set(0, 0, -Math.PI / 2);
		blank.updateMatrix();
		buildingBlanks.merge(blank.geometry, blank.matrix);

		blank = Blank.create(0.5, 6, 0.25, false);
		blank.position.set(9, 15, 0);
		blank.rotation.set(0, 0, -Math.PI / 2);
		blank.updateMatrix();
		buildingBlanks.merge(blank.geometry, blank.matrix);

		blank = Blank.create(0.5, 6, 0.25, false);
		blank.position.set(39, 7, 0);
		blank.rotation.set(0, 0, -Math.PI / 2);
		blank.updateMatrix();
		buildingBlanks.merge(blank.geometry, blank.matrix);

		blank = Blank.create(0.5, 12, 0.25, false);
		blank.position.set(42, 6, 0);
		blank.rotation.set(0, 0, -Math.PI / 2);
		blank.updateMatrix();
		buildingBlanks.merge(blank.geometry, blank.matrix);

		blank = Blank.create(0.5, 6, 0.25, false);
		blank.position.set(45, 15, 0);
		blank.rotation.set(0, 0, -Math.PI / 2);
		blank.updateMatrix();
		buildingBlanks.merge(blank.geometry, blank.matrix);

		for(let i = 0; i < 4; ++i) {
			for(let j = 0; j < 6; ++j) {

				blank = Blank.create(0.5, 20, 0.25, j !== 0);
				blank.position.set(18 * i, 10, -8 * j);
				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}
		}

		for(let i = 0; i < 10; ++i) {

			blank = Blank.create(0.5, (i < 4 || i > 5 ? 20 : 10), (i % 3 ? 0.25 : 0.5), (i % 3) !== 0);
			blank.position.set(6 * i, (i < 4 || i > 5 ? 10 : 5), -40);
			blank.updateMatrix();
			buildingBlanks.merge(blank.geometry, blank.matrix);

		}

		for(let i = 0; i < 2; ++i) {
			for(let j = 0; j < 2; ++j) {

				blank = Blank.create(0.5, (0 === i ? 54 : 40), 0.25, false);

				if(0 === i) {
					blank.position.set(27, 10, -40 * j);
					blank.rotation.set(0, 0, -Math.PI / 2);
				}
				else {
					blank.position.set(54 * j, 10, -20);
					blank.rotation.set(-Math.PI / 2, 0, 0);
				}

				blank.updateMatrix();
				buildingBlanks.merge(blank.geometry, blank.matrix);

			}
		}

		for(let i = 0; i < 4; ++i) {

			blank = Blank.create(0.5, 40, 0.25, false);
			blank.position.set(18 * i, 20, -20);
			blank.rotation.set(-Math.PI / 2, 0, 0);
			blank.updateMatrix();
			buildingBlanks.merge(blank.geometry, blank.matrix);

		}

		material = new THREE.MeshBasicMaterial({ color: 'white' });
		mesh = new THREE.Mesh(buildingBlanks, material);

		this.instance.add(mesh);
	}

	buildDoors() { }

	buildStuff() {

		let stuff, geometry, material, mesh, trees;

		stuff = new THREE.Object3D();

		geometry = new THREE.ParametricGeometry((u, v) => {

			u = 4 * u - 2;
			v = 8 * v - 4;
			let y = 2 * Math.sqrt(0.03 * u * u + 0.03 * v * v);

			return new THREE.Vector3(u, y, v);

		}, 20, 20);

		material = new THREE.MeshBasicMaterial({ color: 'skyblue' });
		material.side = THREE.DoubleSide;
		mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(1, 1, -1);
		mesh.rotation.set(0, 0, -Math.PI / 6);

		stuff.add(mesh);

		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(-1, 1, -1);
		mesh.rotation.set(0, 0, Math.PI / 6);

		stuff.add(mesh);



		trees = new THREE.Geometry();

		geometry = new THREE.CylinderGeometry(0.05, 0.05, 5);
		material = new THREE.MeshBasicMaterial({ color: 'pink' });
		material.side = THREE.DoubleSide;
		mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(0, 0.75, 2.75);
		mesh.rotation.set(Math.PI / 36, 0, 0);

		mesh.updateMatrix();
		trees.merge(mesh.geometry, mesh.matrix);

		mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(1.5, -0.5, 2.75);
		mesh.rotation.set(Math.PI / 36, 0, -Math.PI / 5);

		mesh.updateMatrix();
		trees.merge(mesh.geometry, mesh.matrix);

		mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(-1.5, -0.5, 2.75);
		mesh.rotation.set(Math.PI / 36, 0, Math.PI / 5);

		mesh.updateMatrix();
		trees.merge(mesh.geometry, mesh.matrix);

		mesh = new THREE.Mesh(trees, material);

		stuff.add(mesh);

		stuff.position.set(9, 2, 3);
		stuff.rotation.set(Math.PI / 9, 0, 0);

		this.instance.add(stuff);
	}

	setPosition(position) {
		this.instance.position.set(position.x - 27, position.y - 10, position.z + 20);
	}

	setRotation(rotation) {
		this.instance.translateX(27);
		this.instance.translateY(10);
		this.instance.translateZ(-20);

		this.instance.rotation.set(rotation.x, rotation.y, rotation.z);

		this.instance.translateX(-27);
		this.instance.translateY(-10);
		this.instance.translateZ(20);
	}
};

export default Shooter.Entities.Builders.LargeHouseBuilder;