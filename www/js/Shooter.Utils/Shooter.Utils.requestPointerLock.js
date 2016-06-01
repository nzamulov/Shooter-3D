'use strict';

Shooter.namespace("Shooter.Utils");

Shooter.Utils.requestPointerLock = () => {

	let havePointerLock = 'pointerLockElement' in document || 
						  'mozPointerLockElement' in document || 
						  'webkitPointerLockElement' in document;

	if(havePointerLock) {

		console.log("Shooter.Utils.requestPointerLock > Pointer Lock API was founded.");

		let body = document.body;

		let lockPointer = (event) => {

			body.requestPointerLock = body.requestPointerLock || 
									  body.mozRequestPointerLock || 
									  body.webkitRequestPointerLock;

			body.requestPointerLock();

		};

		body.addEventListener('click', lockPointer, false);

	} else {
		console.log("Your browser doesn't support Pointer Lock API.");
	}

};

export default Shooter.Utils.requestPointerLock;