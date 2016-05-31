'use strict';

Shooter.namespace("Shooter.Controllers");

Shooter.Controllers.AbstractController = class {

	constructor() {

		this.attachEvents();

		console.log("> Shooter.Controllers.AbstractController > constructor > ready");
	}

	attachEvents() { }
	detachEvents() { }
};

export default Shooter.Controllers.AbstractController;