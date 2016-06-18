'use strict';

Shooter.namespace("Shooter.Utils");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';
import CONSOLE from './Shooter.Utils.Console.js';

Shooter.Utils.requestPointerLock = () => {

	let havePointerLock = 'pointerLockElement' in document || 
						  'mozPointerLockElement' in document || 
						  'webkitPointerLockElement' in document;

	if(havePointerLock) {

		CONSOLE.out("Pointer Lock API was founded.", CONSTANTS.MESSAGE.INFO);

		let body = document.body;

		let lockPointer = (event) => {

			body.requestPointerLock = body.requestPointerLock || 
									  body.mozRequestPointerLock || 
									  body.webkitRequestPointerLock;

			body.requestPointerLock();

		};

		body.addEventListener('click', lockPointer, false);

	} else {
		CONSOLE.out("Your browser doesn't support Pointer Lock API.", CONSTANTS.MESSAGE.ERROR);
	}
};

export default Shooter.Utils.requestPointerLock;