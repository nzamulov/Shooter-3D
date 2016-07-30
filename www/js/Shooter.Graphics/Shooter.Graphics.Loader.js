'use strict';

Shooter.namespace("Shooter.Graphics");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';
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

					CONSOLE.out(path + " was loaded.", CONSTANTS.MESSAGE.NOTICE);

					images[path.substr(4, path.length - 8)] = image;

					resolve();
				});

			});

		}

		loadImage(CONSTANTS.IMAGES.BLANK)
		.then(() => { return loadImage(CONSTANTS.IMAGES.BOX1); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.BOX2); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.DOOR); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.FLOOR); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.SKYSPHERE); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.TEXTILE); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.BLOCK); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.WOOD); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.WINDOW); })
		.then(() => { return loadImage(CONSTANTS.IMAGES.WHEEL); })
		.then(() => { callback(); });
	}
};

export default Shooter.Graphics.Loader;