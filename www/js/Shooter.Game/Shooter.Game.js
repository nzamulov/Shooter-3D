'use strict';

import namespace from '../namespace.js';

import requestAnimationFrame from '../Shooter.Utils/Shooter.Utils.requestAnimationFrame.js';
import requestPointerLock from '../Shooter.Utils/Shooter.Utils.requestPointerLock.js';

import WindowController from '../Shooter.Controllers/Shooter.Controllers.WindowController.js';

import Renderer from '../Shooter.Graphics/Shooter.Graphics.Renderer.js';
import World from '../Shooter.Entities/Shooter.Entities.World.js';

import Loader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';

Shooter.Game = class {

	constructor() {

		this.renderer = new Renderer();
		this.world = new World();

		this.windowController = WindowController.create(this.world.getCamera(), this.renderer);

		this.FPS = new Stats();
		this.FPS.setMode(0);

		this.FPS.domElement.style.position = 'absolute';
		this.FPS.domElement.style.left = '0px';
		this.FPS.domElement.style.top = '0px';

		document.body.appendChild(this.FPS.domElement);

		let self = this;

		(function animate() {
			requestAnimationFrame(animate);

			self.FPS.begin();

			self.render();

			self.FPS.end();
		})();

		console.log("> Shooter Game > constructor > ready");
	}

	render() {
		this.world.update();
		this.renderer.render(this.world.getScene(), this.world.getCamera());
	}

};

window.onload = () => {

	let canvas = document.getElementById('aim');
	let context = canvas.getContext('2d');

	canvas.width = 20;
	canvas.height = 20;

	context.lineWidth = "2";

	context.beginPath();
	context.moveTo(10, 0);
	context.lineTo(10, 8);
	context.stroke();
	context.beginPath();
	context.moveTo(0, 10);
	context.lineTo(8, 10);
	context.stroke();
	context.beginPath();
	context.moveTo(20, 10);
	context.lineTo(12, 10);
	context.stroke();
	context.beginPath();
	context.moveTo(10, 20);
	context.lineTo(10, 12);
	context.stroke();




	/* LOCK THE POINTER */
	requestPointerLock();

	let console = document.getElementById('console');
	/*let pointLocker = document.getElementById('pointLocker');
	let circle = document.getElementById('circle');

	circle.addEventListener('click', () => {

		pointLocker.style.display = 'none';

	});*/

	Loader.loadImages(console, () => {
		
		console.style.display = 'none';
		//pointLocker.style.display = 'block';

		/* START GAME */
		const __instance = new Shooter.Game();

	});
}