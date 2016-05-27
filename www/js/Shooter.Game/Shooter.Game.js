'use strict';

import namespace from '../namespace.js';
import Render from '../Shooter.Graphics/Shooter.Graphics.Render/Shooter.Graphics.Render.js';

Shooter.Game = class {

	constructor() {

		this.render = new Render();
		this.world = null;

		console.log("> Shooter Game > constructor > ready");
	}

	animate() {
		requestAnimationFrame(animate);
		this.render();
	}

	render() {
		this.world.render();
	}

};

window.onload = () => {
	const __instance = new Shooter.Game();
}