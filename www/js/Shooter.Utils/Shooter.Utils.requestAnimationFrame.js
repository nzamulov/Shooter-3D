'use strict';

Shooter.namespace("Shooter.Utils");

Shooter.Utils.requestAnimationFrame = (() => {
	return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
				window.setTimeout(callback, 1000 / 60);
			};
})();

export default Shooter.Utils.requestAnimationFrame;