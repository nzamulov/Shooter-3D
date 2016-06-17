'use strict';

Shooter.namespace("Shooter.Graphics");

import CONSOLE from '../Shooter.Utils/Shooter.Utils.Console.js';

let images = { };

Shooter.Graphics.Loader = class {

	static getImage(name) {
		return images[name];
	}

	static loadImages(callback) {

		let loader = new THREE.ImageLoader();

		let loadImage = (path) => {

			return new Promise((resolve, reject) => {

				loader.load(path, (image) => {

					CONSOLE.out(path + " was loaded.", 2);

					images[path.substr(4, path.length - 8)] = image;

					resolve();
				});

			});

		}

		loadImage('img/blank.jpg')
		.then(() => { return loadImage('img/box1.jpg'); })
		.then(() => { return loadImage('img/box2.jpg'); })
		.then(() => { return loadImage('img/door.jpg'); })
		.then(() => { return loadImage('img/floor.jpg'); })
		.then(() => { return loadImage('img/skysphere.jpg'); })
		.then(() => { return loadImage('img/textile.jpg'); })
		.then(() => { return loadImage('img/block.jpg'); })
		.then(() => { return loadImage('img/tree.jpg'); })
		.then(() => { return loadImage('img/window.jpg'); })
		.then(() => { callback(); });
	}
};

export default Shooter.Graphics.Loader;