'use strict';

Shooter.namespace("Shooter.Utils");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';

Shooter.Utils.Console = class {

	static out(string, type) {

		type = type || CONSTANTS.MESSAGE.INFO;

		let console = document.querySelector('.console');
		let note = document.createElement('div');
		
		note.innerHTML = ">> " + string;

		if(CONSTANTS.MESSAGE.INFO === type) {
			note.style.color = "hsl(45, 100%, 50%)";
		} else if(CONSTANTS.MESSAGE.NOTICE === type) {
			note.style.color = "hsl(120, 100%, 50%)";
		} else {
			note.style.color = "hsl(0, 100%, 50%)";
		}

		console.appendChild(note);
	}

	static hide() {

		let console = document.querySelector('.console');

		console.style.display = 'none';
	}

	static show() {

		let console = document.querySelector('.console');

		console.style.display = 'block';
	}
};

export default Shooter.Utils.Console;