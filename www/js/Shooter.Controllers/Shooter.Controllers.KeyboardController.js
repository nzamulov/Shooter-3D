'use strict';

Shooter.namespace("Shooter.Controllers");

Shooter.Controllers.KeyboardController = class {

	constructor(player) {
		
		this.player = player;

		let self = this;

		document.addEventListener('keydown', function(event) { self.onKeyDown(event); }, false);
		document.addEventListener('keyup', function(event) { self.onKeyUp(event); }, false);
	}

	onKeyDown(event) {

		switch(event.keyCode) {
			case 38:
			case 87: {
				this.player.moveForward = true;
				break;
			}
			case 37:
			case 65: {
				this.player.moveLeft = true;
				break;
			}
			case 40:
			case 83: {
				this.player.moveBackward = true;
				break;
			}
			case 39:
			case 68: {
				this.player.moveRight = true;
				break;
			}
		}
	}

	onKeyUp(event) {

		switch(event.keyCode) {
			case 38:
			case 87: {
				this.player.moveForward = false;
				break;
			}
			case 37:
			case 65: {
				this.player.moveLeft = false;
				break;
			}
			case 40:
			case 83: {
				this.player.moveBackward = false;
				break;
			}
			case 39:
			case 68: {
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