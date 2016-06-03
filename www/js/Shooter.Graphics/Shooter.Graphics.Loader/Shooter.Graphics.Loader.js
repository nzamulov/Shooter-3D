'use strict';

Shooter.namespace("Shooter.Graphics");

let _instance = Symbol();

Shooter.Graphics.Loader = class {

	constructor() {
		this.loader = new THREE.ImageLoader();
	}

	getImage(path, callback) {
		this.loader.load(path, (image) => { callback(image); });
	}

	static get instance() {
		if(!this[_instance]) {
			this[_instance] = new Shooter.Graphics.Loader();
		}
		return this[_instance];
	}

};

export default Shooter.Graphics.Loader;