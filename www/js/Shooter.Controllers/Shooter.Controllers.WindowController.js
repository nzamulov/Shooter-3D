'use strict';

Shooter.namespace("Shooter.Controllers");

import AbstractController from './Shooter.Controllers.AbstractController/Shooter.Controllers.AbstractController.js';

Shooter.Controllers.WindowController = class extends AbstractController {

	constructor(camera, renderer) {
		super();
		
		this.camera = camera;
		this.renderer = renderer.renderer;
	}

	attachEvents() {

		this.onWindowResize = () => {

			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		};

		let self = this;

		window.addEventListener('resize', (event) => { this.onWindowResize(event); }, false );

		document.addEventListener('fullscreenchange', (event) => { this.onWindowResize(event); }, false);
		document.addEventListener('mozfullscreenchange', (event) => { this.onWindowResize(event); }, false);
		document.addEventListener('webkitfullscreenchange', (event) => { this.onWindowResize(event); }, false);
		document.addEventListener('MSFullscreenChange', (event) => { this.onWindowResize(event); }, false);
	}

	static create(camera, renderer) {

		let controller = new Shooter.Controllers.WindowController(camera, renderer);

		return controller;
	}
};

export default Shooter.Controllers.WindowController;