'use strict';

Shooter.namespace("Shooter.Controllers");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

Shooter.Controllers.KeyboardController = class {

	constructor(player) {
		
		this.player = player;

		let self = this;

		document.addEventListener('keydown', function(event) { self.onKeyDown(event); }, false);
		document.addEventListener('keyup', function(event) { self.onKeyUp(event); }, false);
	}

	onKeyDown(event) {

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
				this.player.jumping = true;
				break;
			}
		}
	}

	onKeyUp(event) {

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
	}

	static create(player) {
		let controller = new Shooter.Controllers.KeyboardController(player);
	}
};

export default Shooter.Controllers.KeyboardController;