'use strict';

Shooter.namespace("Shooter.Controllers");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import AbstractController from './Shooter.Controllers.AbstractController/Shooter.Controllers.AbstractController.js';

Shooter.Controllers.KeyboardController = class extends AbstractController {

	constructor(player) {
		super();
		
		this.player = player;
	}

	attachEvents() {

		this.onKeyDown = (event) => {

			switch(event.keyCode) {
				case CONSTANTS.KEYS.W:
				case CONSTANTS.KEYS.ARROW_UP: {
					this.player.moveForward = true;
					break;
				}
				case CONSTANTS.KEYS.A:
				case CONSTANTS.KEYS.ARROW_LEFT: {
					this.player.moveLeft = true;
					break;
				}
				case CONSTANTS.KEYS.S:
				case CONSTANTS.KEYS.ARROW_DOWN: {
					this.player.moveBackward = true;
					break;
				}
				case CONSTANTS.KEYS.D:
				case CONSTANTS.KEYS.ARROW_RIGHT: {
					this.player.moveRight = true;
					break;
				}
				case CONSTANTS.KEYS.WHITESPACE: {
					if(!this.player.falling) {
						this.player.jumping = true;
					}
					break;
				}
			}
		};

		this.onKeyUp = (event) => {

			switch(event.keyCode) {
				case CONSTANTS.KEYS.W:
				case CONSTANTS.KEYS.ARROW_UP: {
					this.player.moveForward = false;
					break;
				}
				case CONSTANTS.KEYS.A:
				case CONSTANTS.KEYS.ARROW_LEFT: {
					this.player.moveLeft = false;
					break;
				}
				case CONSTANTS.KEYS.S:
				case CONSTANTS.KEYS.ARROW_DOWN: {
					this.player.moveBackward = false;
					break;
				}
				case CONSTANTS.KEYS.D:
				case CONSTANTS.KEYS.ARROW_RIGHT: {
					this.player.moveRight = false;
					break;
				}
			}
		};

		let self = this;

		document.addEventListener('keydown', (event) => { self.onKeyDown(event); }, false);
		document.addEventListener('keyup', (event) => { self.onKeyUp(event); }, false);
	}

	static create(player) {

		let controller = new Shooter.Controllers.KeyboardController(player);

		return controller;
	}
};

export default Shooter.Controllers.KeyboardController;