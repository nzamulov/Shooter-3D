'use strict';

Shooter.namespace("Shooter.Entities");

import AbstractEntity from './Shooter.Entities.AbstractEntity/Shooter.Entities.AbstractEntity.js';

import Block from './Shooter.Entities.Block.js';
import Blank from './Shooter.Entities.Blank.js';
import Window from './Shooter.Entities.Window.js';

Shooter.Entities.LargeBuilding = class extends AbstractEntity {

	constructor() {
		super();

		let geometry, material, mesh, block, blank, gameWindow;

		this.instance = new THREE.Object3D();

		block = new Block(54, 10, 40);
		block.setPosition(27, 5, -20);
		this.instance.add(block.getInstance());

		block = new Block(18, 10, 40);
		block.setPosition(45, 15, -20);
		this.instance.add(block.getInstance());

		block = new Block(18, 10, 40);
		block.setPosition(9, 15, -20);
		this.instance.add(block.getInstance());

		for(let i = 0; i < 10; ++i) {
			blank = new Blank((i % 3 ? 0.5 : 1), (i < 4 || i > 5 ? 20 : 10), (i % 3 ? 0.25 : 0.5), true);
			blank.setPosition((i % 3 ? 0.25 : 0.5) + 6 * i, (i < 4 || i > 5 ? 10 : 5), (i % 3 ? 0.175 : 0.25));
			this.instance.add(blank.getInstance());
		}

		blank = new Blank(0.5, 18, 0.25, false);
		blank.setPosition(9, 20, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		blank = new Blank(0.5, 18, 0.25, false);
		blank.setPosition(45, 20, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		blank = new Blank(0.5, 6, 0.25, false);
		blank.setPosition(27, 7, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		gameWindow = new Window();
		gameWindow.setPosition(9, 12.5, 0.1);
		this.instance.add(gameWindow.getInstance());

		blank = new Blank(0.5, 6, 0.25, false);
		blank.setPosition(9, 15, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		gameWindow = new Window();
		gameWindow.setPosition(45, 3.5, 0.1);
		this.instance.add(gameWindow.getInstance());

		blank = new Blank(0.5, 6, 0.25, false);
		blank.setPosition(39, 7, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		blank = new Blank(0.5, 12, 0.25, false);
		blank.setPosition(42, 6, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		gameWindow = new Window();
		gameWindow.setPosition(45, 12.5, 0.1);
		this.instance.add(gameWindow.getInstance());

		blank = new Blank(0.5, 6, 0.25, false);
		blank.setPosition(45, 15, 0);
		blank.setRotation(0, 0, -Math.PI / 2);
		this.instance.add(blank.getInstance());

		for(let i = 0; i < 4; ++i) {
			for(let j = 0; j < 6; ++j) {

				blank = new Blank(0.5, 20, 0.25, true);
				blank.setPosition(18 * i, 10, -8 * j);
				this.instance.add(blank.getInstance());

			}
		}

		for(let i = 0; i < 10; ++i) {

			blank = new Blank(0.5, (i < 4 || i > 5 ? 20 : 10), (i % 3 ? 0.25 : 0.5), (i % 3) !== 0);
			blank.setPosition(6 * i, (i < 4 || i > 5 ? 10 : 5), -40);
			this.instance.add(blank.getInstance());

		}

		for(let i = 0; i < 2; ++i) {
			for(let j = 0; j < 2; ++j) {

				blank = new Blank(0.5, (0 === i ? 54 : 40), 0.25, false);

				if(0 === i) {
					blank.setPosition(27, 10, -40 * j);
					blank.setRotation(0, 0, -Math.PI / 2);
				}
				else {
					blank.setPosition(54 * j, 10, -20);
					blank.setRotation(-Math.PI / 2, 0, 0);
				}

				this.instance.add(blank.getInstance());

			}
		}


	}

	setPosition(x, y, z) {
		this.instance.position.set(x - 27, y - 10, z + 20);
	}

	setRotation(angleX, angleY, angleZ) {

		this.instance.translateX(27);
		this.instance.translateY(10);
		this.instance.translateZ(-20);

		this.instance.rotation.set(angleX, angleY, angleZ);

		this.instance.translateX(-27);
		this.instance.translateY(-10);
		this.instance.translateZ(20);

	}
};

export default Shooter.Entities.LargeBuilding;