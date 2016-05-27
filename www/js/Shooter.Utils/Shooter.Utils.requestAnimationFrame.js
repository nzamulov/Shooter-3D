Shooter.namespace("Shooter.Utils");

Shooter.Utils.requestAnimationFrame = (function(){
	return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
				window.setTimeout(callback, 1000 / 60);
			};
})();

export default Shooter.Utils.requestAnimationFrame;