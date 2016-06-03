'use strict';

Shooter.namespace("Shooter.Utils");

Shooter.Utils.mathExtends = (() => {

	Math.rotatePoint = (x, y, phi) => {

		let xPrime = x * Math.cos(phi) - y * Math.sin(phi);
		let yPrime = x * Math.sin(phi) + y * Math.cos(phi);

		return [ xPrime, yPrime ];

	}

})();

export default Shooter.Utils.mathExtends;