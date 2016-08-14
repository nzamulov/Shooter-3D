'use strict';

Shooter.namespace("Shooter.Sounds");

import CONSTANTS from '../Shooter.Constants/Shooter.Constants.js';
import CONSOLE from '../Shooter.Utils/Shooter.Utils.Console.js';

let sounds = { };

Shooter.Sounds.Loader = class {

	static getSound(name) {
		return sounds[name];
	}

	static loadSounds(callback) {

		let loader = new THREE.AudioLoader();

		let loadSound = (path) => {

			return new Promise((resolve, reject) => {

				loader.load(path, (audioBuffer) => {

					CONSOLE.out(path + " was loaded.", CONSTANTS.MESSAGE.NOTICE);

					let key = path.substr(7, path.length - 11);

					sounds[key] = new THREE.Audio(new THREE.AudioListener());
					sounds[key].setBuffer(audioBuffer);
					sounds[key].started = false;

					resolve();
				});

			});

		}

		loadSound(CONSTANTS.SOUNDS.FALLING)
		.then(() => { return loadSound(CONSTANTS.SOUNDS.JUMPING); })
		.then(() => { return loadSound(CONSTANTS.SOUNDS.MOVING); })
		.then(() => { return loadSound(CONSTANTS.SOUNDS.WIND); })
		.then(() => { return loadSound(CONSTANTS.SOUNDS.PAIN); })
		.then(() => { callback(); });
	}
};

export default Shooter.Sounds.Loader;