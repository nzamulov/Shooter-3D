'use strict';

Shooter.Constants = {

	/* CAMERA */

	CAMERA: {
		FRUSTUM: 45,
		ASPECT_RATIO: window.innerWidth / window.innerHeight,
		NEAR: 1,
		FAR: 10000
	},

	/* ------ */

	/* CONTROLS */

	KEYS: {

		W: 87,
		A: 65,
		S: 83,
		D: 68,

		ARROW_UP: 38,
		ARROW_LEFT: 37,
		ARROW_DOWN: 40,
		ARROW_RIGHT: 39,

		WHITESPACE: 32
	},

	CURSOR_SPEED: 0.002,

	/* -------- */

	/* PLAYER */

	PLAYER: {
		HEIGHT: 3,
		JUMP_STRENGTH: 0.5,
		MOVEMENT_SPEED: 0.25
	},

	/* ------ */

	/* PHYSIC */

	GRAVITY: 50,

	/* ------ */

	FLOOR: {
		WIDTH: 3000,
		HEIGHT: 3000,
		WIDTH_SEGMENTS: 40,
		HEIGHT_SEGMENTS: 40
	},

	BULLET: {
		RADIUS: 0.05,
		HEIGHT: 2,
		RADIUS_SEGMENTS: 32,
		SPEED: 4
	},

	/* RESPAWN */

	GREEN_POINT: {
		X: -40,
		Z: 80
	},

	RED_POINT: {
		X: 234,
		Z: -120
	}

	/* ------- */
};

export default Shooter.Constants;