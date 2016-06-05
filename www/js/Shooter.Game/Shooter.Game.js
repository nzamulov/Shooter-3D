'use strict';

import namespace from '../namespace.js';

import requestAnimationFrame from '../Shooter.Utils/Shooter.Utils.requestAnimationFrame.js';
import requestPointerLock from '../Shooter.Utils/Shooter.Utils.requestPointerLock.js';

import WindowController from '../Shooter.Controllers/Shooter.Controllers.WindowController.js';

import Renderer from '../Shooter.Graphics/Shooter.Graphics.Renderer.js';
import World from '../Shooter.Entities/Shooter.Entities.World.js';

Shooter.Game = class {

	constructor() {

		this.renderer = new Renderer();
		this.world = new World();

		this.windowController = WindowController.create(this.world.getCamera(), this.renderer);

		let self = this;

		(function animate() {
			requestAnimationFrame(animate);
			self.render();
		})();

		console.log("> Shooter Game > constructor > ready");
	}

	render() {
		this.world.update();
		this.renderer.render(this.world.getScene(), this.world.getCamera());
	}

};

window.onload = () => {

	/* LOCK THE POINTER */
	requestPointerLock();

	/* START GAME */
	const __instance = new Shooter.Game();
}