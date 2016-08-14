'use strict';

Shooter.Constants = {

	CAMERA: {
		FRUSTUM: 45,
		ASPECT_RATIO: window.innerWidth / window.innerHeight,
		NEAR: 1,
		FAR: 10000
	},

	MESSAGE: {
		INFO: 1,
		NOTICE: 2,
		ERROR: 3
	},

	IMAGES: {
		BLANK: 'img/blank.jpg',
		BOX1: 'img/box1.jpg',
		BOX2: 'img/box2.jpg',
		DOOR: 'img/door.jpg',
		FLOOR: 'img/floor.jpg',
		SKYSPHERE: 'img/skysphere.jpg',
		TEXTILE: 'img/textile.jpg',
		BLOCK: 'img/block.jpg',
		WOOD: 'img/wood.jpg',
		WINDOW: 'img/window.jpg',
		WHEEL: 'img/wheel.jpg'
	},

	SOUNDS: {
		FALLING: 'sounds/falling.mp3',
		JUMPING: 'sounds/jumping.mp3',
		MOVING: 'sounds/moving.mp3',
		WIND: 'sounds/wind.mp3',
		PAIN: 'sounds/pain.mp3'
	},

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

	PLAYER: {
		HEIGHT: 3,
		JUMP_STRENGTH: 0.5,
		MOVEMENT_SPEED: 0.25
	},

	GRAVITY: 50,	

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

	WINDOW: {
		WIDTH: 4,
		HEIGHT: 4
	},

	LARGE_HOUSE: {
		WIDTH: 54,
		HEIGHT: 20,
		DEPTH: 40
	},

	MEDIUM_HOUSE: {
		WIDTH: 30,
		HEIGHT: 20,
		DEPTH: 30
	},

	SKYSPHERE: {
		RADIUS: 4000,
		WIDTH_SEGMENTS: 32,
		HEIGHT_SEGMENTS: 32
	},

	BOUNDING_BOX: {
		WIDTH: 1000,
		HEIGHT: 250,
		DEPTH: 1000
	},

	GREEN_POINT: {
		X: -40,
		Z: 80
	},

	RED_POINT: {
		X: 234,
		Z: -120
	}
};

export default Shooter.Constants;