'use strict';

Shooter.namespace("Shooter.Controllers");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

import AbstractController from './Shooter.Controllers.AbstractController.js';

Shooter.Controllers.KeyboardController = class extends AbstractController {

	constructor(player) {
		super();
		
		this.player = player;
	}

	attachEvents() {

		this.onKeyDown = (event) => {

			switch(event.keyCode) {
				case CONSTANTS.KEYBOARD_W:
				case CONSTANTS.KEYBOARD_ARROW_UP: {
					this.player.moveForward = true;
					break;
				}
				case CONSTANTS.KEYBOARD_A:
				case CONSTANTS.KEYBOARD_ARROW_LEFT: {
					this.player.moveLeft = true;
					break;
				}
				case CONSTANTS.KEYBOARD_S:
				case CONSTANTS.KEYBOARD_ARROW_DOWN: {
					this.player.moveBackward = true;
					break;
				}
				case CONSTANTS.KEYBOARD_D:
				case CONSTANTS.KEYBOARD_ARROW_RIGHT: {
					this.player.moveRight = true;
					break;
				}
				case CONSTANTS.KEYBOARD_WHITESPACE: {
					if(!this.player.falling) {
						this.player.jumping = true;
					}
					break;
				}
			}
		};

		this.onKeyUp = (event) => {

			switch(event.keyCode) {
				case CONSTANTS.KEYBOARD_W:
				case CONSTANTS.KEYBOARD_ARROW_UP: {
					this.player.moveForward = false;
					break;
				}
				case CONSTANTS.KEYBOARD_A:
				case CONSTANTS.KEYBOARD_ARROW_LEFT: {
					this.player.moveLeft = false;
					break;
				}
				case CONSTANTS.KEYBOARD_S:
				case CONSTANTS.KEYBOARD_ARROW_DOWN: {
					this.player.moveBackward = false;
					break;
				}
				case CONSTANTS.KEYBOARD_D:
				case CONSTANTS.KEYBOARD_ARROW_RIGHT: {
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
	}
};

export default Shooter.Controllers.KeyboardController;