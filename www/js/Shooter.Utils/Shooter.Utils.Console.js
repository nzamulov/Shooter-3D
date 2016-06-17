'use strict';

Shooter.namespace("Shooter.Utils");

Shooter.Utils.Console = class {

	static out(string, type) {

		type = type || 1;

		let console = document.getElementById('console');
		let note = document.createElement('div');
		
		note.innerHTML = ">> " + string;

		if(1 === type) {
			note.style.color = "hsl(45, 100%, 50%)";
		} else if(2 === type) {
			note.style.color = "hsl(120, 100%, 50%)";
		} else {
			note.style.color = "hsl(0, 100%, 50%)";
		}

		console.appendChild(note);
	}

	static hide() {

		let console = document.getElementById('console');

		console.style.display = 'none';
	}
};

export default Shooter.Utils.Console;