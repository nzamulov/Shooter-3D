'use strict';

import namespace from '../namespace.js';
import Renderer from '../Shooter.Graphics/Shooter.Graphics.Render/Shooter.Graphics.Renderer.js';
import World from '../Shooter.Entities/Shooter.Entities.World/Shooter.Entities.World.js';

Shooter.Game = class {

	constructor() {

		this.renderer = new Renderer();
		this.world = new World();

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
	const __instance = new Shooter.Game();
}