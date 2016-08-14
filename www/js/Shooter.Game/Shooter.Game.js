'use strict';

import namespace from '../namespace.js';

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';
import CONSOLE from '../Shooter.Utils/Shooter.Utils.Console.js';

import requestAnimationFrame from '../Shooter.Utils/Shooter.Utils.requestAnimationFrame.js';
import requestPointerLock from '../Shooter.Utils/Shooter.Utils.requestPointerLock.js';

import WindowController from '../Shooter.Controllers/Shooter.Controllers.WindowController.js';

import Renderer from '../Shooter.Graphics/Shooter.Graphics.Renderer.js';
import World from '../Shooter.Entities/Shooter.Entities.World.js';

import GraphicsLoader from '../Shooter.Graphics/Shooter.Graphics.Loader.js';
import SoundsLoader from '../Shooter.Sounds/Shooter.Sounds.Loader.js';

Shooter.Game = class {

	constructor() {

		this.renderer = new Renderer();
		this.world = new World();

		this.windowController = WindowController.create(this.world.getCamera(), this.renderer);

		this.FPS = new Stats();
		this.FPS.setMode(0);

		this.FPS.domElement.style.position = 'absolute';
		this.FPS.domElement.style.right = '0px';
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

	CONSOLE.out("Browser " + navigator.appName + " was detected.", CONSTANTS.MESSAGE.INFO);

	let canvas = document.querySelector('.aim');
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

	let title = document.querySelector('.title');
	let start = document.querySelector('.start');
	let circle = document.querySelector('.circle');

	circle.addEventListener('click', () => {

		/* LOCK THE POINTER */
		requestPointerLock();

		title.style.display = 'none';
		start.style.display = 'none';

		CONSOLE.show();

		GraphicsLoader.loadImages(() => {
			
			SoundsLoader.loadSounds(() => {

				CONSOLE.hide();

				let gamePanel = document.querySelector('.game-panel');
				let body = document.getElementsByTagName("body")[0];

				gamePanel.style.display = 'block';
				body.style.opacity = 0.0;

				let intervalId = setInterval(function() {
					let value = parseFloat(body.style.opacity);
					let current = Math.min(value + 0.05, 1.0);
					if(Math.abs(current) > 1.0) {
						body.style.opacity = 1.0;
						clearInterval(intervalId);
					} else {
						body.style.opacity = current;
					}
				}, 50);

				/* START GAME */
				const __instance = new Shooter.Game();

			});
		});
	});
}