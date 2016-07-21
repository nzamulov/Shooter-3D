/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _namespace = __webpack_require__(1);
	
	var _namespace2 = _interopRequireDefault(_namespace);
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterUtilsConsole = __webpack_require__(3);
	
	var _ShooterUtilsConsole2 = _interopRequireDefault(_ShooterUtilsConsole);
	
	var _ShooterUtilsRequestAnimationFrame = __webpack_require__(4);
	
	var _ShooterUtilsRequestAnimationFrame2 = _interopRequireDefault(_ShooterUtilsRequestAnimationFrame);
	
	var _ShooterUtilsRequestPointerLock = __webpack_require__(5);
	
	var _ShooterUtilsRequestPointerLock2 = _interopRequireDefault(_ShooterUtilsRequestPointerLock);
	
	var _ShooterControllersWindowController = __webpack_require__(6);
	
	var _ShooterControllersWindowController2 = _interopRequireDefault(_ShooterControllersWindowController);
	
	var _ShooterGraphicsRenderer = __webpack_require__(8);
	
	var _ShooterGraphicsRenderer2 = _interopRequireDefault(_ShooterGraphicsRenderer);
	
	var _ShooterEntitiesWorld = __webpack_require__(9);
	
	var _ShooterEntitiesWorld2 = _interopRequireDefault(_ShooterEntitiesWorld);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.Game = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.renderer = new _ShooterGraphicsRenderer2.default();
			this.world = new _ShooterEntitiesWorld2.default();
	
			this.windowController = _ShooterControllersWindowController2.default.create(this.world.getCamera(), this.renderer);
	
			this.FPS = new Stats();
			this.FPS.setMode(0);
	
			this.FPS.domElement.style.position = 'absolute';
			this.FPS.domElement.style.left = '0px';
			this.FPS.domElement.style.top = '0px';
	
			document.body.appendChild(this.FPS.domElement);
	
			var self = this;
	
			(function animate() {
				(0, _ShooterUtilsRequestAnimationFrame2.default)(animate);
	
				self.FPS.begin();
	
				self.render();
	
				self.FPS.end();
			})();
	
			console.log("> Shooter Game > constructor > ready");
		}
	
		_createClass(_class, [{
			key: 'render',
			value: function render() {
				this.world.update();
				this.renderer.render(this.world.getScene(), this.world.getCamera());
			}
		}]);
	
		return _class;
	}();
	
	window.onload = function () {
	
		_ShooterUtilsConsole2.default.out("Browser " + navigator.appName + " was detected.", _ShooterConstants2.default.MESSAGE.INFO);
	
		var canvas = document.querySelector('.aim');
		var context = canvas.getContext('2d');
	
		canvas.width = 20;
		canvas.height = 20;
	
		context.lineWidth = "2";
	
		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(10, 8);
		context.stroke();
		context.beginPath();
		context.moveTo(0, 10);
		context.lineTo(8, 10);
		context.stroke();
		context.beginPath();
		context.moveTo(20, 10);
		context.lineTo(12, 10);
		context.stroke();
		context.beginPath();
		context.moveTo(10, 20);
		context.lineTo(10, 12);
		context.stroke();
	
		var title = document.querySelector('.title');
		var start = document.querySelector('.start');
		var circle = document.querySelector('.circle');
	
		var console = document.querySelector('.console');
	
		circle.addEventListener('click', function () {
	
			/* LOCK THE POINTER */
			(0, _ShooterUtilsRequestPointerLock2.default)();
	
			title.style.display = 'none';
			start.style.display = 'none';
			console.style.display = 'block';
	
			_ShooterGraphicsLoader2.default.loadImages(function () {
	
				_ShooterUtilsConsole2.default.hide();
	
				var gamePanel = document.querySelector('.game-panel');
	
				gamePanel.style.display = 'block';
	
				/* START GAME */
				var __instance = new Shooter.Game();
			});
		});
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	window.Shooter = "undefined" === typeof Shooter ? {} : Shooter;
	
	window.Shooter.namespace = function (namespace) {
	    var parts = namespace.split('.'),
	        parent = Shooter;
	
	    if ("Shooter" === parts[0]) {
	        parts = parts.slice(1);
	    }
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var singlePart = _step.value;
	
	            if ("undefined" === typeof parent[singlePart]) {
	                parent[singlePart] = {};
	            }
	            parent = parent[singlePart];
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return parent;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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
			WINDOW: 'img/window.jpg'
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
	
	exports.default = Shooter.Constants;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.Console = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: 'out',
			value: function out(string, type) {
	
				type = type || _ShooterConstants2.default.MESSAGE.INFO;
	
				var console = document.querySelector('.console');
				var note = document.createElement('div');
	
				note.innerHTML = ">> " + string;
	
				if (_ShooterConstants2.default.MESSAGE.INFO === type) {
					note.style.color = "hsl(45, 100%, 50%)";
				} else if (_ShooterConstants2.default.MESSAGE.NOTICE === type) {
					note.style.color = "hsl(120, 100%, 50%)";
				} else {
					note.style.color = "hsl(0, 100%, 50%)";
				}
	
				console.appendChild(note);
			}
		}, {
			key: 'hide',
			value: function hide() {
	
				var console = document.querySelector('.console');
	
				console.style.display = 'none';
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Utils.Console;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	}();
	
	exports.default = Shooter.Utils.requestAnimationFrame;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterUtilsConsole = __webpack_require__(3);
	
	var _ShooterUtilsConsole2 = _interopRequireDefault(_ShooterUtilsConsole);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestPointerLock = function () {
	
			var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
	
			if (havePointerLock) {
					(function () {
	
							_ShooterUtilsConsole2.default.out("Pointer Lock API was founded.", _ShooterConstants2.default.MESSAGE.INFO);
	
							var body = document.body;
	
							var lockPointer = function lockPointer(event) {
	
									body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;
	
									body.requestPointerLock();
							};
	
							body.addEventListener('click', lockPointer, false);
					})();
			} else {
					_ShooterUtilsConsole2.default.out("Your browser doesn't support Pointer Lock API.", _ShooterConstants2.default.MESSAGE.ERROR);
			}
	};
	
	exports.default = Shooter.Utils.requestPointerLock;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterControllersAbstractController = __webpack_require__(7);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.WindowController = function (_AbstractController) {
		_inherits(_class, _AbstractController);
	
		function _class(camera, renderer) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.camera = camera;
			_this.renderer = renderer.renderer;
			return _this;
		}
	
		_createClass(_class, [{
			key: 'attachEvents',
			value: function attachEvents() {
				var _this2 = this;
	
				this.onWindowResize = function () {
	
					_this2.camera.aspect = window.innerWidth / window.innerHeight;
					_this2.camera.updateProjectionMatrix();
	
					_this2.renderer.setSize(window.innerWidth, window.innerHeight);
				};
	
				var self = this;
	
				window.addEventListener('resize', function (event) {
					_this2.onWindowResize(event);
				}, false);
	
				document.addEventListener('fullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('mozfullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('webkitfullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('MSFullscreenChange', function (event) {
					_this2.onWindowResize(event);
				}, false);
			}
		}], [{
			key: 'create',
			value: function create(camera, renderer) {
	
				var controller = new Shooter.Controllers.WindowController(camera, renderer);
	
				return controller;
			}
		}]);
	
		return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.WindowController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.AbstractController = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.attachEvents();
	
			console.log("> Shooter.Controllers.AbstractController > constructor > ready");
		}
	
		_createClass(_class, [{
			key: "attachEvents",
			value: function attachEvents() {}
		}, {
			key: "detachEvents",
			value: function detachEvents() {}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Controllers.AbstractController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	Shooter.Graphics.Renderer = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(this.renderer.domElement);
	
			console.log("> Shooter.Graphics.Render > constructor > ready");
		}
	
		_createClass(_class, [{
			key: "render",
			value: function render(scene, camera) {
				this.renderer.render(scene, camera);
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Renderer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterEntitiesPlayer = __webpack_require__(10);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesFloor = __webpack_require__(14);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder = __webpack_require__(16);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersLargeHouseBuilder);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder = __webpack_require__(22);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersMediumHouseBuilder);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	var _ShooterEntitiesBox = __webpack_require__(23);
	
	var _ShooterEntitiesBox2 = _interopRequireDefault(_ShooterEntitiesBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					this.player = new _ShooterEntitiesPlayer2.default(this.scene);
					this.scene.add(this.player.getControls());
	
					this.largeHouseBuilder = new _ShooterEntitiesBuildersLargeHouseBuilder2.default();
					this.mediumHouseBuilder = new _ShooterEntitiesBuildersMediumHouseBuilder2.default();
	
					this.createHouse("Large", new THREE.Vector3(30, 10, -40));
					this.createHouse("Large", new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));
	
					this.createHouse("Medium", new THREE.Vector3(85, 10, -35));
					this.createHouse("Medium", new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
					this.createHouse("Medium", new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
					this.createHouse("Medium", new THREE.Vector3(70, 10, 55));
					this.createHouse("Medium", new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));
	
					var box = _ShooterEntitiesBox2.default.create();
					box.position.set(18, 1.5, 38.5);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(21, 1.5, 38.5);
					this.scene.add(box);
	
					/* GREEN POINT RESPAWN */
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-30, 1.5, 70);
					box.rotation.set(0, Math.PI / 4, 0);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 74);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 77);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 80);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 4.5, 80);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 2.1, 83.6);
					box.rotation.set(Math.PI / 4, 0, 0);
					this.scene.add(box);
	
					/* ------------------ */
	
					/* RED POINT RESPAWN */
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(230, 1.5, -110);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(227, 1.5, -110);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(227, 4.5, -110);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(227, 1.5, -113);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(233, 1.5, -110);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(237, 1.5, -110);
					box.rotation.set(0, Math.PI / 4, 0);
					this.scene.add(box);
	
					/* ----------------- */
	
					var floor = _ShooterEntitiesFloor2.default.create();
					floor.rotation.set(Math.PI / 2, 0, 0);
					this.scene.add(floor);
	
					/* SKY SPHERE */
	
					var sky_texture = new THREE.Texture();
	
					sky_texture.image = _ShooterGraphicsLoader2.default.getImage('skysphere');
					sky_texture.needsUpdate = true;
	
					var geometry = new THREE.SphereGeometry(_ShooterConstants2.default.SKYSPHERE.RADIUS, _ShooterConstants2.default.SKYSPHERE.WIDTH_SEGMENTS, _ShooterConstants2.default.SKYSPHERE.HEIGHT_SEGMENTS);
					var material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true, side: THREE.BackSide });
					var sky = new THREE.Mesh(geometry, material);
	
					this.scene.add(sky);
	
					/* ---------- */
	
					/* WORLD BOUNDING BOX */
	
					box = new THREE.BoxGeometry(_ShooterConstants2.default.BOUNDING_BOX.WIDTH, _ShooterConstants2.default.BOUNDING_BOX.HEIGHT, _ShooterConstants2.default.BOUNDING_BOX.DEPTH);
					material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0, side: THREE.BackSide });
					var mesh = new THREE.Mesh(box, material);
	
					this.scene.add(mesh);
	
					/* ------------------ */
	
					console.log("> Shooter.Entities.World > constructor > ready");
			}
	
			_createClass(_class, [{
					key: 'createHouse',
					value: function createHouse(type, position, rotation) {
	
							var building = void 0;
	
							position = position || new THREE.Vector3(0, 0, 0);
							rotation = rotation || new THREE.Vector3(0, 0, 0);
	
							if ("Large" === type) {
	
									building = this.largeHouseBuilder.build(position, rotation);
									this.scene.add(building);
									building = new THREE.BoxGeometry(_ShooterConstants2.default.LARGE_HOUSE.WIDTH, _ShooterConstants2.default.LARGE_HOUSE.HEIGHT, _ShooterConstants2.default.LARGE_HOUSE.DEPTH);
							} else {
	
									building = this.mediumHouseBuilder.build(position, rotation);
									this.scene.add(building);
									building = new THREE.BoxGeometry(_ShooterConstants2.default.MEDIUM_HOUSE.WIDTH, _ShooterConstants2.default.MEDIUM_HOUSE.HEIGHT, _ShooterConstants2.default.MEDIUM_HOUSE.DEPTH);
							}
	
							var material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.0 });
							var mesh = new THREE.Mesh(building, material);
	
							mesh.position.set(position.x, position.y, position.z);
							mesh.rotation.set(rotation.x, rotation.y, rotation.z);
	
							this.scene.add(mesh);
					}
			}, {
					key: 'update',
					value: function update() {
							this.player.update(this.scene);
					}
			}, {
					key: 'getScene',
					value: function getScene() {
							return this.scene;
					}
			}, {
					key: 'getCamera',
					value: function getCamera() {
							return this.player.getCamera();
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.World;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersKeyboardController = __webpack_require__(11);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(12);
	
	var _ShooterControllersMouseController2 = _interopRequireDefault(_ShooterControllersMouseController);
	
	var _ShooterEntitiesBullet = __webpack_require__(13);
	
	var _ShooterEntitiesBullet2 = _interopRequireDefault(_ShooterEntitiesBullet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Player = function () {
			function _class(scene) {
					_classCallCheck(this, _class);
	
					this.bullets = [];
	
					this.scene = scene;
	
					this.moveForward = false;
					this.moveLeft = false;
					this.moveBackward = false;
					this.moveRight = false;
	
					this.jumping = false;
					this.falling = false;
					this.jumpingSaturation = Math.PI / 2;
	
					this.camera = new THREE.PerspectiveCamera(_ShooterConstants2.default.CAMERA.FRUSTUM, _ShooterConstants2.default.CAMERA.ASPECT_RATIO, _ShooterConstants2.default.CAMERA.NEAR, _ShooterConstants2.default.CAMERA.FAR);
					this.camera.position.set(_ShooterConstants2.default.RED_POINT.X, _ShooterConstants2.default.PLAYER.HEIGHT, _ShooterConstants2.default.RED_POINT.Z);
					this.camera.lookAt(0, 0, -1);
	
					this.keyboardController = _ShooterControllersKeyboardController2.default.create(this);
					this.mouseController = _ShooterControllersMouseController2.default.create(this);
	
					console.log("> Shooter.Entities.Player > constructor > ready");
			}
	
			_createClass(_class, [{
					key: 'update',
					value: function update(scene) {
	
							for (var i = 0; i < this.bullets.length; ++i) {
									this.bullets[i].update();
							}
	
							var worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(_ShooterConstants2.default.PLAYER.MOVEMENT_SPEED);
	
							var right = new THREE.Vector3();
							right.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.PLAYER.MOVEMENT_SPEED);
	
							var backward = new THREE.Vector3();
							backward.crossVectors(right, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.PLAYER.MOVEMENT_SPEED);
	
							var forward = backward.clone().negate();
							var left = right.clone().negate();
	
							if (!this.jumping && !this.falling) {
	
									this.movingVector = new THREE.Vector3(0, 0, 0);
	
									if (this.moveForward) {
											this.movingVector.add(forward);
									}
	
									if (this.moveLeft) {
											this.movingVector.add(left);
									}
	
									if (this.moveBackward) {
											this.movingVector.add(backward);
									}
	
									if (this.moveRight) {
											this.movingVector.add(right);
									}
							}
	
							if (this.movingCollision(scene, this.movingVector.clone())) {
									this.camera.position.x += this.movingVector.x;
									this.camera.position.z += this.movingVector.z;
							}
	
							this.gravitation(scene);
	
							if (this.jumping) {
	
									var originPoint = this.camera.position.clone();
	
									originPoint.y += 1; // prevent intersection with the ground and grid.
	
									var ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, 1, 0));
									var collisionResults = ray.intersectObjects(scene.children);
	
									if (this.jumpingSaturation <= 0 || collisionResults.length > 0 && collisionResults[0].distance < 1.25) {
	
											this.jumping = false;
											this.falling = true;
											this.jumpingSaturation = 0;
									} else {
	
											var addHeight = _ShooterConstants2.default.PLAYER.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
											this.camera.position.y += addHeight;
											this.jumpingSaturation -= Math.PI / _ShooterConstants2.default.GRAVITY;
									}
							}
	
							if (this.falling) {
	
									var _originPoint = this.camera.position.clone();
									var _ray = new THREE.Raycaster(_originPoint, new THREE.Vector3(0, -1, 0));
									var _collisionResults = _ray.intersectObjects(scene.children);
	
									if (_collisionResults.length > 0 && _collisionResults[0].distance < _ShooterConstants2.default.PLAYER.HEIGHT) {
	
											this.falling = false;
											this.jumpingSaturation = Math.PI / 2;
	
											this.camera.position.y = Math.max(this.camera.position.y, _ShooterConstants2.default.PLAYER.HEIGHT);
									} else {
	
											var _addHeight = _ShooterConstants2.default.PLAYER.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
											this.camera.position.y -= _addHeight;
											this.jumpingSaturation += Math.PI / _ShooterConstants2.default.GRAVITY;
	
											this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);
									}
							}
					}
			}, {
					key: 'movingCollision',
					value: function movingCollision(scene, direction) {
	
							direction.normalize();
	
							var ray = new THREE.Raycaster(this.camera.position.clone(), direction);
							var collisionResults = ray.intersectObjects(scene.children);
	
							var flag1 = !collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance > 2;
	
							var norm = new THREE.Vector3();
							norm.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();
	
							var right = new THREE.Vector3();
							right.add(norm).add(this.camera.position.clone());
	
							norm.negate();
	
							var left = new THREE.Vector3();
							left.add(norm).add(this.camera.position.clone());
	
							ray = new THREE.Raycaster(right, direction);
							collisionResults = ray.intersectObjects(scene.children);
	
							var flag2 = !collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance > 2;
	
							ray = new THREE.Raycaster(left, direction);
							collisionResults = ray.intersectObjects(scene.children);
	
							var flag3 = !collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance > 2;
	
							return flag1 && flag2 && flag3;
					}
			}, {
					key: 'gravitation',
					value: function gravitation(scene) {
	
							if (!this.jumping) {
	
									var ray = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0));
									var collisionResults = ray.intersectObjects(scene.children);
	
									if (!collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance - _ShooterConstants2.default.PLAYER.HEIGHT > 0.01) {
											this.falling = true;
									}
							}
					}
			}, {
					key: 'createBuller',
					value: function createBuller() {
	
							var bullet = new _ShooterEntitiesBullet2.default(this.camera.position.clone(), this.camera.rotation.clone(), this.camera.getWorldDirection());
							this.bullets.push(bullet);
							this.scene.add(bullet.getInstance());
					}
			}, {
					key: 'getCamera',
					value: function getCamera() {
							return this.camera;
					}
			}, {
					key: 'getControls',
					value: function getControls() {
							return this.mouseController.getObject();
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Player;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(7);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.KeyboardController = function (_AbstractController) {
		_inherits(_class, _AbstractController);
	
		function _class(player) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.player = player;
			return _this;
		}
	
		_createClass(_class, [{
			key: 'attachEvents',
			value: function attachEvents() {
				var _this2 = this;
	
				this.onKeyDown = function (event) {
	
					switch (event.keyCode) {
						case _ShooterConstants2.default.KEYS.W:
						case _ShooterConstants2.default.KEYS.ARROW_UP:
							{
								_this2.player.moveForward = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.A:
						case _ShooterConstants2.default.KEYS.ARROW_LEFT:
							{
								_this2.player.moveLeft = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.S:
						case _ShooterConstants2.default.KEYS.ARROW_DOWN:
							{
								_this2.player.moveBackward = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.D:
						case _ShooterConstants2.default.KEYS.ARROW_RIGHT:
							{
								_this2.player.moveRight = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.WHITESPACE:
							{
								if (!_this2.player.falling) {
									_this2.player.jumping = true;
								}
								break;
							}
					}
				};
	
				this.onKeyUp = function (event) {
	
					switch (event.keyCode) {
						case _ShooterConstants2.default.KEYS.W:
						case _ShooterConstants2.default.KEYS.ARROW_UP:
							{
								_this2.player.moveForward = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.A:
						case _ShooterConstants2.default.KEYS.ARROW_LEFT:
							{
								_this2.player.moveLeft = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.S:
						case _ShooterConstants2.default.KEYS.ARROW_DOWN:
							{
								_this2.player.moveBackward = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.D:
						case _ShooterConstants2.default.KEYS.ARROW_RIGHT:
							{
								_this2.player.moveRight = false;
								break;
							}
					}
				};
	
				var self = this;
	
				document.addEventListener('keydown', function (event) {
					self.onKeyDown(event);
				}, false);
				document.addEventListener('keyup', function (event) {
					self.onKeyUp(event);
				}, false);
			}
		}], [{
			key: 'create',
			value: function create(player) {
	
				var controller = new Shooter.Controllers.KeyboardController(player);
	
				return controller;
			}
		}]);
	
		return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.KeyboardController;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(7);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.MouseController = function (_AbstractController) {
			_inherits(_class, _AbstractController);
	
			function _class(player) {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					_this.player = player;
	
					_this.player.camera.rotation.set(0, 0, 0);
	
					_this.pitchObject = new THREE.Object3D();
					_this.pitchObject.add();
	
					_this.yawObject = new THREE.Object3D();
					_this.yawObject.add(_this.pitchObject);
	
					_this.PI_2 = -0.1 + Math.PI / 2; // -0.1 is the Epsilon for gimbal lock prevent.
					return _this;
			}
	
			_createClass(_class, [{
					key: 'attachEvents',
					value: function attachEvents() {
							var _this2 = this;
	
							this.onMouseMove = function (event) {
	
									var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
									var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	
									_this2.yawObject.rotation.y -= movementX * _ShooterConstants2.default.CURSOR_SPEED;
									_this2.pitchObject.rotation.x -= movementY * _ShooterConstants2.default.CURSOR_SPEED;
	
									_this2.pitchObject.rotation.x = Math.max(-_this2.PI_2, Math.min(_this2.PI_2, _this2.pitchObject.rotation.x));
	
									var direction = new THREE.Vector3(0, 0, -1);
									var rotation = new THREE.Euler(0, 0, 0, "YXZ");
									var lookAt = new THREE.Vector3();
	
									rotation.set(_this2.pitchObject.rotation.x, _this2.yawObject.rotation.y, 0);
	
									lookAt.copy(direction).applyEuler(rotation);
	
									lookAt.x += _this2.player.camera.position.x;
									lookAt.y += _this2.player.camera.position.y;
									lookAt.z += _this2.player.camera.position.z;
	
									_this2.player.camera.lookAt(lookAt);
							};
	
							this.onClick = function (event) {
									_this2.player.createBuller();
							};
	
							var self = this;
	
							document.addEventListener('mousemove', function (event) {
									self.onMouseMove(event);
							}, false);
							document.addEventListener('click', function (event) {
									self.onClick(event);
							}, false);
					}
			}, {
					key: 'getObject',
					value: function getObject() {
	
							return this.yawObject;
					}
			}], [{
					key: 'create',
					value: function create(player) {
	
							var controller = new Shooter.Controllers.MouseController(player);
	
							return controller;
					}
			}]);
	
			return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.MouseController;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Bullet = function () {
			function _class(position, rotation, direction) {
					_classCallCheck(this, _class);
	
					this.geometry = new THREE.CylinderGeometry(_ShooterConstants2.default.BULLET.RADIUS, _ShooterConstants2.default.BULLET.RADIUS, _ShooterConstants2.default.BULLET.HEIGHT, _ShooterConstants2.default.BULLET.RADIUS_SEGMENTS);
	
					this.material = new THREE.MeshBasicMaterial({ color: 'green' });
					this.mesh = new THREE.Mesh(this.geometry, this.material);
	
					this.mesh.rotation.set(Math.PI / 2, 0, 0);
	
					this.instance = new THREE.Object3D();
	
					this.instance.add(this.mesh);
	
					this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
					this.instance.position.set(position.x, position.y, position.z);
	
					this.direction = direction;
	
					this.direction.multiplyScalar(_ShooterConstants2.default.BULLET.SPEED);
			}
	
			_createClass(_class, [{
					key: 'update',
					value: function update() {
							this.instance.position.add(this.direction);
					}
			}, {
					key: 'getInstance',
					value: function getInstance() {
							return this.instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Bullet;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Floor = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var floor_texture = new THREE.Texture();
	
							floor_texture.image = _ShooterGraphicsLoader2.default.getImage('floor');
							floor_texture.needsUpdate = true;
							floor_texture.wrapS = THREE.RepeatWrapping;
							floor_texture.wrapT = THREE.RepeatWrapping;
							floor_texture.repeat.set(100, 100);
	
							var geometry = new THREE.PlaneGeometry(_ShooterConstants2.default.FLOOR.WIDTH, _ShooterConstants2.default.FLOOR.HEIGHT, _ShooterConstants2.default.FLOOR.WIDTH_SEGMENTS, _ShooterConstants2.default.FLOOR.HEIGHT_SEGMENTS);
							var material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true, side: THREE.BackSide });
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Floor;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterUtilsConsole = __webpack_require__(3);
	
	var _ShooterUtilsConsole2 = _interopRequireDefault(_ShooterUtilsConsole);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	var images = {};
	
	Shooter.Graphics.Loader = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: 'getImage',
			value: function getImage(name) {
				return images[name];
			}
		}, {
			key: 'loadImages',
			value: function loadImages(callback) {
	
				var loader = new THREE.ImageLoader();
	
				var loadImage = function loadImage(path) {
	
					return new Promise(function (resolve, reject) {
	
						loader.load(path, function (image) {
	
							_ShooterUtilsConsole2.default.out(path + " was loaded.", _ShooterConstants2.default.MESSAGE.NOTICE);
	
							images[path.substr(4, path.length - 8)] = image;
	
							resolve();
						});
					});
				};
	
				loadImage(_ShooterConstants2.default.IMAGES.BLANK).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.BOX1);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.BOX2);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.DOOR);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.FLOOR);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.SKYSPHERE);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.TEXTILE);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.BLOCK);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.WOOD);
				}).then(function () {
					return loadImage(_ShooterConstants2.default.IMAGES.WINDOW);
				}).then(function () {
					callback();
				});
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Loader;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(17);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(18);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(19);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(20);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(21);
	
	var _ShooterEntitiesDoor2 = _interopRequireDefault(_ShooterEntitiesDoor);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.LargeHouseBuilder = function (_AbstractBuilder) {
			_inherits(_class, _AbstractBuilder);
	
			function _class() {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					console.log("> Shooter.Entities.Builders.LargeHouseBuilder > constructor > ready");
					return _this;
			}
	
			_createClass(_class, [{
					key: 'buildFacade',
					value: function buildFacade() {
	
							var mesh = void 0,
							    material = void 0,
							    block = void 0,
							    buildingBlocks = void 0;
	
							buildingBlocks = new THREE.Geometry();
	
							block = _ShooterEntitiesBlock2.default.create(54, 10, 40);
							block.position.set(27, 5, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							block = _ShooterEntitiesBlock2.default.create(18, 10, 40);
							block.position.set(45, 15, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							block = _ShooterEntitiesBlock2.default.create(18, 10, 40);
							block.position.set(9, 15, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							var block_texture = new THREE.Texture();
	
							block_texture.image = _ShooterGraphicsLoader2.default.getImage('block');
							block_texture.needsUpdate = true;
							block_texture.wrapS = THREE.RepeatWrapping;
							block_texture.wrapT = THREE.RepeatWrapping;
							block_texture.repeat.set(10, 5);
	
							this.assignUVs(buildingBlocks);
	
							material = new THREE.MeshBasicMaterial({ map: block_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlocks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildWindows',
					value: function buildWindows() {
	
							var gameWindow = void 0;
	
							/* FORWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(9.3, 12.5, 0.01);
	
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45.3, 12.5, 0.01);
	
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45.3, 3.5, 0.01);
	
							this.instance.add(gameWindow);
	
							/* --------------- */
	
							/* RIGHT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 15, -12);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 5, -28);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 15, -36);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
	
							/* BACKWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(9, 15, -40.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45, 15, -40.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							/* ---------------- */
	
							/* LEFT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 15, -28);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 15, -12);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
					}
			}, {
					key: 'buildBlanks',
					value: function buildBlanks() {
	
							var mesh = void 0,
							    material = void 0,
							    blank = void 0,
							    buildingBlanks = void 0;
	
							buildingBlanks = new THREE.Geometry();
	
							for (var i = 0; i < 10; ++i) {
	
									blank = _ShooterEntitiesBlank2.default.create(i % 3 ? 0.5 : 1, i < 4 || i > 5 ? 20 : 10, i % 3 ? 0.25 : 0.5, true);
									blank.position.set((i % 3 ? 0.25 : 0.5) + 6 * i, i < 4 || i > 5 ? 10 : 5, i % 3 ? 0.175 : 0.25);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							for (var _i = 0; _i < 2; ++_i) {
									for (var j = 0; j < 2; ++j) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 18, 0.25, false);
											blank.position.set(9 + 36 * j, 20, -40 * _i);
											blank.rotation.set(0, 0, -Math.PI / 2);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(27, 7, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(9, 15, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(39, 7, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 12, 0.25, false);
							blank.position.set(42, 6, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(45, 15, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							for (var _i2 = 0; _i2 < 4; ++_i2) {
									for (var _j = 0; _j < 6; ++_j) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 20, 0.25, _j !== 0);
											blank.position.set(18 * _i2, 10, -8 * _j);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _i3 = 0; _i3 < 10; ++_i3) {
	
									blank = _ShooterEntitiesBlank2.default.create(0.5, _i3 < 4 || _i3 > 5 ? 20 : 10, _i3 % 3 ? 0.25 : 0.5, _i3 % 3 !== 0);
									blank.position.set(6 * _i3, _i3 < 4 || _i3 > 5 ? 10 : 5, -40);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							for (var _i4 = 0; _i4 < 2; ++_i4) {
									for (var _j2 = 0; _j2 < 2; ++_j2) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 0 === _i4 ? 54 : 40, 0.25, false);
	
											if (0 === _i4) {
													blank.position.set(27, 10, -40 * _j2);
													blank.rotation.set(0, 0, -Math.PI / 2);
											} else {
													blank.position.set(54 * _j2, 10, -20);
													blank.rotation.set(-Math.PI / 2, 0, 0);
											}
	
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _i5 = 0; _i5 < 4; ++_i5) {
	
									blank = _ShooterEntitiesBlank2.default.create(0.5, 40, 0.25, false);
									blank.position.set(18 * _i5, 20, -20);
									blank.rotation.set(-Math.PI / 2, 0, 0);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							var blank_texture = new THREE.Texture();
	
							blank_texture.image = _ShooterGraphicsLoader2.default.getImage('blank');
							blank_texture.needsUpdate = true;
							blank_texture.wrapS = THREE.RepeatWrapping;
							blank_texture.wrapT = THREE.RepeatWrapping;
							blank_texture.repeat.set(5, 5);
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var door = _ShooterEntitiesDoor2.default.create(5.7, 8);
	
							door.position.set(27.2, 3, 0.01);
	
							this.instance.add(door);
					}
			}, {
					key: 'buildStuff',
					value: function buildStuff() {
	
							var stuff = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0,
							    trees = void 0;
	
							stuff = new THREE.Object3D();
	
							geometry = new THREE.ParametricGeometry(function (u, v) {
	
									u = 4 * u - 2;
									v = 8 * v - 4;
									var y = 2 * Math.sqrt(0.03 * u * u + 0.03 * v * v);
	
									return new THREE.Vector3(u, y, v);
							}, 20, 20);
	
							var textile_texture = new THREE.Texture();
	
							textile_texture.image = _ShooterGraphicsLoader2.default.getImage('textile');
							textile_texture.needsUpdate = true;
	
							material = new THREE.MeshBasicMaterial({ map: textile_texture, overdraw: true });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(1, 1, -1);
							mesh.rotation.set(0, 0, -Math.PI / 6);
	
							stuff.add(mesh);
	
							mesh = new THREE.Mesh(geometry, material);
							mesh.position.set(-1, 1, -1);
							mesh.rotation.set(0, 0, Math.PI / 6);
	
							stuff.add(mesh);
	
							trees = new THREE.Geometry();
	
							var tree_texture = new THREE.Texture();
	
							tree_texture.image = _ShooterGraphicsLoader2.default.getImage('wood');
							tree_texture.needsUpdate = true;
	
							geometry = new THREE.CylinderGeometry(0.05, 0.05, 5);
							material = new THREE.MeshBasicMaterial({ map: tree_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(0, 0.75, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, 0);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(1.5, -0.5, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, -Math.PI / 5);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(-1.5, -0.5, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, Math.PI / 5);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(trees, material);
	
							stuff.add(mesh);
	
							stuff.position.set(9, 2, 3);
							stuff.rotation.set(Math.PI / 9, 0, 0);
	
							this.instance.add(stuff);
	
							var box_texture = new THREE.Texture();
	
							box_texture.image = _ShooterGraphicsLoader2.default.getImage('box1');
							box_texture.needsUpdate = true;
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							material = new THREE.MeshBasicMaterial({ map: box_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(7.9, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(10.5, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(7.9, 2.25, 1);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'setPosition',
					value: function setPosition(position) {
							this.instance.position.set(position.x - 27, position.y - 10, position.z + 20);
					}
			}, {
					key: 'setRotation',
					value: function setRotation(rotation) {
							this.instance.translateX(27);
							this.instance.translateY(10);
							this.instance.translateZ(-20);
	
							this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
	
							this.instance.translateX(-27);
							this.instance.translateY(-10);
							this.instance.translateZ(20);
					}
			}]);
	
			return _class;
	}(_ShooterEntitiesBuildersAbstractBuilder2.default);
	
	exports.default = Shooter.Entities.Builders.LargeHouseBuilder;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.AbstractBuilder = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			console.log("> Shooter.Entities.Builders.AbstractBuilder > constructor > ready");
		}
	
		/* INDEPENDENT CONSTRUCTING PARTS */
	
	
		_createClass(_class, [{
			key: "buildFacade",
			value: function buildFacade() {}
		}, {
			key: "buildBlanks",
			value: function buildBlanks() {}
		}, {
			key: "buildWindows",
			value: function buildWindows() {}
		}, {
			key: "buildDoors",
			value: function buildDoors() {}
		}, {
			key: "buildStuff",
			value: function buildStuff() {}
	
			/* CONSTRUCT OBJECT */
	
		}, {
			key: "build",
			value: function build(position, rotation) {
	
				position = position || new THREE.Vector3(0, 0, 0);
				rotation = rotation || new THREE.Vector3(0, 0, 0);
	
				this.instance = new THREE.Object3D();
	
				this.buildFacade();
				this.buildBlanks();
				this.buildWindows();
				this.buildDoors();
				this.buildStuff();
	
				this.setPosition(position);
				this.setRotation(rotation);
	
				return this.instance;
			}
	
			/* OBJECT LOCATION */
	
		}, {
			key: "setPosition",
			value: function setPosition(position) {}
		}, {
			key: "setRotation",
			value: function setRotation(rotation) {}
	
			/* TEXTURE NORMALIZATION */
	
		}, {
			key: "assignUVs",
			value: function assignUVs(geometry) {
	
				geometry.computeBoundingBox();
	
				var max = geometry.boundingBox.max;
				var min = geometry.boundingBox.min;
	
				var offset = new THREE.Vector3(0 - min.x, 0 - min.y, 0 - min.z);
				var range = new THREE.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);
	
				geometry.faceVertexUvs[0] = [];
	
				var faces = geometry.faces;
	
				for (var i = 0; i < geometry.faces.length; i++) {
	
					var v1 = geometry.vertices[faces[i].a];
					var v2 = geometry.vertices[faces[i].b];
					var v3 = geometry.vertices[faces[i].c];
	
					if (v1.x === v2.x && v2.x === v3.x) {
						geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.z + offset.z) / range.z, (v1.y + offset.y) / range.y), new THREE.Vector2((v2.z + offset.z) / range.z, (v2.y + offset.y) / range.y), new THREE.Vector2((v3.z + offset.z) / range.z, (v3.y + offset.y) / range.y)]);
					} else if (v1.y === v2.y && v2.y === v3.y) {
						geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.x + offset.x) / range.x, (v1.z + offset.z) / range.z), new THREE.Vector2((v2.x + offset.x) / range.x, (v2.z + offset.z) / range.z), new THREE.Vector2((v3.x + offset.x) / range.x, (v3.z + offset.z) / range.z)]);
					} else {
						geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y), new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y), new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)]);
					}
				}
	
				geometry.uvsNeedUpdate = true;
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.Builders.AbstractBuilder;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Block = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: "create",
			value: function create(height, width, depth) {
	
				var geometry = new THREE.BoxGeometry(height, width, depth);
				var instance = new THREE.Mesh(geometry);
	
				return instance;
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.Block;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Blank = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: "create",
					value: function create(width, height, depth, cone) {
	
							var instance = void 0,
							    geometry = void 0,
							    mesh = void 0,
							    container = void 0;
	
							container = new THREE.Geometry();
	
							geometry = new THREE.BoxGeometry(width, height, depth);
							mesh = new THREE.Mesh(geometry);
	
							mesh.updateMatrix();
							container.merge(mesh.geometry, mesh.matrix);
	
							if (true === cone) {
	
									geometry = new THREE.ConeGeometry(depth, 2);
									mesh = new THREE.Mesh(geometry);
	
									mesh.position.set(width / 2 - depth, height / 2 + 1, 0);
	
									mesh.updateMatrix();
									container.merge(mesh.geometry, mesh.matrix);
							}
	
							instance = new THREE.Mesh(container);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Blank;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(2);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Window = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var window_texture = new THREE.Texture();
	
							window_texture.image = _ShooterGraphicsLoader2.default.getImage('window');
							window_texture.needsUpdate = true;
	
							var geometry = new THREE.PlaneGeometry(_ShooterConstants2.default.WINDOW.WIDTH, _ShooterConstants2.default.WINDOW.HEIGHT);
							var material = new THREE.MeshBasicMaterial({ map: window_texture, overdraw: true });
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Window;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Door = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create(width, height) {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							var door_texture = new THREE.Texture();
	
							door_texture.image = _ShooterGraphicsLoader2.default.getImage('door');
							door_texture.needsUpdate = true;
	
							geometry = new THREE.PlaneGeometry(width, height);
							material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							return mesh;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Door;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(17);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(18);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(19);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(20);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(21);
	
	var _ShooterEntitiesDoor2 = _interopRequireDefault(_ShooterEntitiesDoor);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.MediumHouseBuilder = function (_AbstractBuilder) {
			_inherits(_class, _AbstractBuilder);
	
			function _class() {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					console.log("> Shooter.Entities.Builders.MediumHouseBuilder > constructor > ready");
					return _this;
			}
	
			_createClass(_class, [{
					key: 'buildFacade',
					value: function buildFacade() {
	
							var mesh = void 0,
							    material = void 0,
							    block = void 0,
							    buildingBlocks = void 0;
	
							buildingBlocks = new THREE.Geometry();
	
							block = _ShooterEntitiesBlock2.default.create(30, 20, 30);
							block.position.set(15, 10, -15);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							var block_texture = new THREE.Texture();
	
							block_texture.image = _ShooterGraphicsLoader2.default.getImage('block');
							block_texture.needsUpdate = true;
							block_texture.wrapS = THREE.RepeatWrapping;
							block_texture.wrapT = THREE.RepeatWrapping;
							block_texture.repeat.set(5, 5);
	
							this.assignUVs(buildingBlocks);
	
							material = new THREE.MeshBasicMaterial({ map: block_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlocks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildWindows',
					value: function buildWindows() {
	
							var gameWindow = void 0;
	
							/* FORWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, 0.01);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(25, 5, 0.01);
							this.instance.add(gameWindow);
	
							/* -------------- */
	
							/* RIGHT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(30.01, 15, -15);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
	
							/* BACKWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, -30.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(5, 5, -30.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							/* ------------- */
	
							/* LEFT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 5, -15);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
					}
			}, {
					key: 'buildBlanks',
					value: function buildBlanks() {
	
							var mesh = void 0,
							    material = void 0,
							    blank = void 0,
							    buildingBlanks = void 0;
	
							buildingBlanks = new THREE.Geometry();
	
							for (var j = 0; j < 2; ++j) {
	
									for (var i = 0; i < 4; ++i) {
	
											blank = _ShooterEntitiesBlank2.default.create(i % 3 ? 0.5 : 1, 20, i % 3 ? 0.25 : 0.5, true);
											blank.position.set((i % 3 ? 0.25 : 0.5) * (i === 3 ? -1 : 1) + 10 * i, 10, -30 * j);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
	
									for (var _i = 0; _i < 2; ++_i) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 30, 0.25, false);
											blank.position.set(30 * j, 10 + 10 * _i, -15);
											blank.rotation.set(-Math.PI / 2, 0, 0);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _j = 0; _j < 2; ++_j) {
	
									for (var _i2 = 0; _i2 < 4; ++_i2) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 20, 0.25, _i2 % 3 !== 0);
											blank.position.set(30 * _j, 10, -10 * _i2);
											blank.rotation.set(0, -Math.PI / 2, 0);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
	
									for (var _i3 = 0; _i3 < 2; ++_i3) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 30, 0.25, false);
											blank.position.set(15, 10 + 10 * _i3, -30 * _j);
											blank.rotation.set(0, 0, -Math.PI / 2);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							var blank_texture = new THREE.Texture();
	
							blank_texture.image = _ShooterGraphicsLoader2.default.getImage('blank');
							blank_texture.needsUpdate = true;
							blank_texture.wrapS = THREE.RepeatWrapping;
							blank_texture.wrapT = THREE.RepeatWrapping;
							blank_texture.repeat.set(5, 5);
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var door = _ShooterEntitiesDoor2.default.create(4, 8);
	
							door.position.set(8, 3, 0.01);
	
							this.instance.add(door);
					}
			}, {
					key: 'buildStuff',
					value: function buildStuff() {
	
							var stuff = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0,
							    trees = void 0;
					}
			}, {
					key: 'setPosition',
					value: function setPosition(position) {
							this.instance.position.set(position.x - 15, position.y - 10, position.z + 15);
					}
			}, {
					key: 'setRotation',
					value: function setRotation(rotation) {
							this.instance.translateX(15);
							this.instance.translateY(10);
							this.instance.translateZ(-15);
	
							this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
	
							this.instance.translateX(-15);
							this.instance.translateY(-10);
							this.instance.translateZ(15);
					}
			}]);
	
			return _class;
	}(_ShooterEntitiesBuildersAbstractBuilder2.default);
	
	exports.default = Shooter.Entities.Builders.MediumHouseBuilder;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Box = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var loader = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							geometry = new THREE.BoxGeometry(3, 3, 3);
	
							var box_texture = new THREE.Texture();
	
							box_texture.image = _ShooterGraphicsLoader2.default.getImage('box2');
							box_texture.needsUpdate = true;
	
							material = new THREE.MeshBasicMaterial({ map: box_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							return mesh;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Box;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2FhYzYxYjA2ZTY0MGYzZGQ5YmUiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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WjtXQUFzQixpQkFBdEI7V0FBZ0MsYUFBaEM7O0FBRUEsa0JBQVcsSUFBSSxNQUFNLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBWDs7QUFFQSxXQUFJLGNBQWMsSUFBSSxNQUFNLE9BQVYsRUFBbEI7O0FBRUEsbUJBQVksS0FBWixHQUFvQixnQ0FBTyxRQUFQLENBQWdCLE1BQWhCLENBQXBCO0FBQ0EsbUJBQVksV0FBWixHQUEwQixJQUExQjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLFdBQVAsRUFBb0IsVUFBVSxJQUE5QixFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxjQUFPLElBQVA7QUFDQTtBQWpCRjs7QUFBQTtBQUFBOzttQkFvQmUsUUFBUSxRQUFSLENBQWlCLEciLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNhYWM2MWIwNmU2NDBmM2RkOWJlXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBDT05TT0xFIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5Db25zb2xlLmpzJztcclxuXHJcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyc7XHJcbmltcG9ydCByZXF1ZXN0UG9pbnRlckxvY2sgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qcyc7XHJcblxyXG5pbXBvcnQgV2luZG93Q29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qcyc7XHJcblxyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5HYW1lID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcblxyXG5cdFx0dGhpcy53aW5kb3dDb250cm9sbGVyID0gV2luZG93Q29udHJvbGxlci5jcmVhdGUodGhpcy53b3JsZC5nZXRDYW1lcmEoKSwgdGhpcy5yZW5kZXJlcik7XHJcblxyXG5cdFx0dGhpcy5GUFMgPSBuZXcgU3RhdHMoKTtcclxuXHRcdHRoaXMuRlBTLnNldE1vZGUoMCk7XHJcblxyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLkZQUy5kb21FbGVtZW50KTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmJlZ2luKCk7XHJcblxyXG5cdFx0XHRzZWxmLnJlbmRlcigpO1xyXG5cclxuXHRcdFx0c2VsZi5GUFMuZW5kKCk7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyIEdhbWUgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dGhpcy53b3JsZC51cGRhdGUoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMud29ybGQuZ2V0U2NlbmUoKSwgdGhpcy53b3JsZC5nZXRDYW1lcmEoKSk7XHJcblx0fVxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0Q09OU09MRS5vdXQoXCJCcm93c2VyIFwiICsgbmF2aWdhdG9yLmFwcE5hbWUgKyBcIiB3YXMgZGV0ZWN0ZWQuXCIsIENPTlNUQU5UUy5NRVNTQUdFLklORk8pO1xyXG5cclxuXHRsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbScpO1xyXG5cdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdGNhbnZhcy53aWR0aCA9IDIwO1xyXG5cdGNhbnZhcy5oZWlnaHQgPSAyMDtcclxuXHJcblx0Y29udGV4dC5saW5lV2lkdGggPSBcIjJcIjtcclxuXHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygxMCwgMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTAsIDgpO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygwLCAxMCk7XHJcblx0Y29udGV4dC5saW5lVG8oOCwgMTApO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygyMCwgMTApO1xyXG5cdGNvbnRleHQubGluZVRvKDEyLCAxMCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDEwLCAyMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTAsIDEyKTtcclxuXHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuXHRsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuXHRsZXQgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuXHRsZXQgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZScpO1xyXG5cclxuXHRsZXQgY29uc29sZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zb2xlJyk7XHJcblxyXG5cdGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0XHRyZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0c3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdGNvbnNvbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdFx0TG9hZGVyLmxvYWRJbWFnZXMoKCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0Q09OU09MRS5oaWRlKCk7XHJcblxyXG5cdFx0XHRsZXQgZ2FtZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFuZWwnKTtcclxuXHJcblx0XHRcdGdhbWVQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcblx0XHRcdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRcdFx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxuXHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qc1xuICoqLyIsIndpbmRvdy5TaG9vdGVyID0gKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBTaG9vdGVyKSA/IHt9IDogU2hvb3RlcjtcclxuXHJcbndpbmRvdy5TaG9vdGVyLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGxldCBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IFNob290ZXI7XHJcblxyXG4gICAgaWYgKFwiU2hvb3RlclwiID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBzaW5nbGVQYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBwYXJlbnRbc2luZ2xlUGFydF0pIHtcclxuICAgICAgICAgICAgcGFyZW50W3NpbmdsZVBhcnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtzaW5nbGVQYXJ0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbmFtZXNwYWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdENBTUVSQToge1xyXG5cdFx0RlJVU1RVTTogNDUsXHJcblx0XHRBU1BFQ1RfUkFUSU86IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG5cdFx0TkVBUjogMSxcclxuXHRcdEZBUjogMTAwMDBcclxuXHR9LFxyXG5cclxuXHRNRVNTQUdFOiB7XHJcblx0XHRJTkZPOiAxLFxyXG5cdFx0Tk9USUNFOiAyLFxyXG5cdFx0RVJST1I6IDNcclxuXHR9LFxyXG5cclxuXHRJTUFHRVM6IHtcclxuXHRcdEJMQU5LOiAnaW1nL2JsYW5rLmpwZycsXHJcblx0XHRCT1gxOiAnaW1nL2JveDEuanBnJyxcclxuXHRcdEJPWDI6ICdpbWcvYm94Mi5qcGcnLFxyXG5cdFx0RE9PUjogJ2ltZy9kb29yLmpwZycsXHJcblx0XHRGTE9PUjogJ2ltZy9mbG9vci5qcGcnLFxyXG5cdFx0U0tZU1BIRVJFOiAnaW1nL3NreXNwaGVyZS5qcGcnLFxyXG5cdFx0VEVYVElMRTogJ2ltZy90ZXh0aWxlLmpwZycsXHJcblx0XHRCTE9DSzogJ2ltZy9ibG9jay5qcGcnLFxyXG5cdFx0V09PRDogJ2ltZy93b29kLmpwZycsXHJcblx0XHRXSU5ET1c6ICdpbWcvd2luZG93LmpwZydcclxuXHR9LFxyXG5cclxuXHRLRVlTOiB7XHJcblxyXG5cdFx0VzogODcsXHJcblx0XHRBOiA2NSxcclxuXHRcdFM6IDgzLFxyXG5cdFx0RDogNjgsXHJcblxyXG5cdFx0QVJST1dfVVA6IDM4LFxyXG5cdFx0QVJST1dfTEVGVDogMzcsXHJcblx0XHRBUlJPV19ET1dOOiA0MCxcclxuXHRcdEFSUk9XX1JJR0hUOiAzOSxcclxuXHJcblx0XHRXSElURVNQQUNFOiAzMlxyXG5cdH0sXHJcblxyXG5cdENVUlNPUl9TUEVFRDogMC4wMDIsXHRcclxuXHJcblx0UExBWUVSOiB7XHJcblx0XHRIRUlHSFQ6IDMsXHJcblx0XHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0XHRNT1ZFTUVOVF9TUEVFRDogMC4yNVxyXG5cdH0sXHJcblxyXG5cdEdSQVZJVFk6IDUwLFx0XHJcblxyXG5cdEZMT09SOiB7XHJcblx0XHRXSURUSDogMzAwMCxcclxuXHRcdEhFSUdIVDogMzAwMCxcclxuXHRcdFdJRFRIX1NFR01FTlRTOiA0MCxcclxuXHRcdEhFSUdIVF9TRUdNRU5UUzogNDBcclxuXHR9LFxyXG5cclxuXHRCVUxMRVQ6IHtcclxuXHRcdFJBRElVUzogMC4wNSxcclxuXHRcdEhFSUdIVDogMixcclxuXHRcdFJBRElVU19TRUdNRU5UUzogMzIsXHJcblx0XHRTUEVFRDogNFxyXG5cdH0sXHJcblxyXG5cdFdJTkRPVzoge1xyXG5cdFx0V0lEVEg6IDQsXHJcblx0XHRIRUlHSFQ6IDRcclxuXHR9LFxyXG5cclxuXHRMQVJHRV9IT1VTRToge1xyXG5cdFx0V0lEVEg6IDU0LFxyXG5cdFx0SEVJR0hUOiAyMCxcclxuXHRcdERFUFRIOiA0MFxyXG5cdH0sXHJcblxyXG5cdE1FRElVTV9IT1VTRToge1xyXG5cdFx0V0lEVEg6IDMwLFxyXG5cdFx0SEVJR0hUOiAyMCxcclxuXHRcdERFUFRIOiAzMFxyXG5cdH0sXHJcblxyXG5cdFNLWVNQSEVSRToge1xyXG5cdFx0UkFESVVTOiA0MDAwLFxyXG5cdFx0V0lEVEhfU0VHTUVOVFM6IDMyLFxyXG5cdFx0SEVJR0hUX1NFR01FTlRTOiAzMlxyXG5cdH0sXHJcblxyXG5cdEJPVU5ESU5HX0JPWDoge1xyXG5cdFx0V0lEVEg6IDEwMDAsXHJcblx0XHRIRUlHSFQ6IDI1MCxcclxuXHRcdERFUFRIOiAxMDAwXHJcblx0fSxcclxuXHJcblx0R1JFRU5fUE9JTlQ6IHtcclxuXHRcdFg6IC00MCxcclxuXHRcdFo6IDgwXHJcblx0fSxcclxuXHJcblx0UkVEX1BPSU5UOiB7XHJcblx0XHRYOiAyMzQsXHJcblx0XHRaOiAtMTIwXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuU2hvb3Rlci5VdGlscy5Db25zb2xlID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgb3V0KHN0cmluZywgdHlwZSkge1xyXG5cclxuXHRcdHR5cGUgPSB0eXBlIHx8IENPTlNUQU5UUy5NRVNTQUdFLklORk87XHJcblxyXG5cdFx0bGV0IGNvbnNvbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc29sZScpO1xyXG5cdFx0bGV0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFxyXG5cdFx0bm90ZS5pbm5lckhUTUwgPSBcIj4+IFwiICsgc3RyaW5nO1xyXG5cclxuXHRcdGlmKENPTlNUQU5UUy5NRVNTQUdFLklORk8gPT09IHR5cGUpIHtcclxuXHRcdFx0bm90ZS5zdHlsZS5jb2xvciA9IFwiaHNsKDQ1LCAxMDAlLCA1MCUpXCI7XHJcblx0XHR9IGVsc2UgaWYoQ09OU1RBTlRTLk1FU1NBR0UuTk9USUNFID09PSB0eXBlKSB7XHJcblx0XHRcdG5vdGUuc3R5bGUuY29sb3IgPSBcImhzbCgxMjAsIDEwMCUsIDUwJSlcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vdGUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAxMDAlLCA1MCUpXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc29sZS5hcHBlbmRDaGlsZChub3RlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBoaWRlKCkge1xyXG5cclxuXHRcdGxldCBjb25zb2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnNvbGUnKTtcclxuXHJcblx0XHRjb25zb2xlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5Db25zb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBDT05TT0xFIGZyb20gJy4vU2hvb3Rlci5VdGlscy5Db25zb2xlLmpzJztcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgaGF2ZVBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG5cdGlmKGhhdmVQb2ludGVyTG9jaykge1xyXG5cclxuXHRcdENPTlNPTEUub3V0KFwiUG9pbnRlciBMb2NrIEFQSSB3YXMgZm91bmRlZC5cIiwgQ09OU1RBTlRTLk1FU1NBR0UuSU5GTyk7XHJcblxyXG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHRcdGxldCBsb2NrUG9pbnRlciA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2sgPSBib2R5LnJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5Lm1velJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5LndlYmtpdFJlcXVlc3RQb2ludGVyTG9jaztcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9ja1BvaW50ZXIsIGZhbHNlKTtcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdENPTlNPTEUub3V0KFwiWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBQb2ludGVyIExvY2sgQVBJLlwiLCBDT05TVEFOVFMuTUVTU0FHRS5FUlJPUik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXIucmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSApO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyKGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHsgfVxyXG5cdGRldGFjaEV2ZW50cygpIHsgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcbmltcG9ydCBGbG9vciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMnO1xyXG5cclxuaW1wb3J0IExhcmdlSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzJztcclxuaW1wb3J0IE1lZGl1bUhvdXNlQnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJveC5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuc2NlbmUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGF5ZXIuZ2V0Q29udHJvbHMoKSk7XHJcblxyXG5cdFx0dGhpcy5sYXJnZUhvdXNlQnVpbGRlciA9IG5ldyBMYXJnZUhvdXNlQnVpbGRlcigpO1xyXG5cdFx0dGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIgPSBuZXcgTWVkaXVtSG91c2VCdWlsZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIkxhcmdlXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxMCwgLTQwKSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTGFyZ2VcIiwgbmV3IFRIUkVFLlZlY3RvcjMoMTgwLCAxMCwgLTEwMCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMyg4NSwgMTAsIC0zNSkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMygxMzUsIDEwLCAtMzUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLU1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDcwLCAxMCwgNTUpKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoMTEwLCAxMCwgNTUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJLCAwKSk7XHJcblxyXG5cdFx0bGV0IGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMTgsIDEuNSwgMzguNSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjEsIDEuNSwgMzguNSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHJcblx0XHQvKiBHUkVFTiBQT0lOVCBSRVNQQVdOICovXHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMzAsIDEuNSwgNzApO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gNCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgNzQpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDc3KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA4MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDQuNSwgODApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAyLjEsIDgzLjYpO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldChNYXRoLlBJIC8gNCwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJFRCBQT0lOVCBSRVNQQVdOICovXHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMzAsIDEuNSwgLTExMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjI3LCAxLjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIyNywgNC41LCAtMTEwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMjcsIDEuNSwgLTExMyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjMzLCAxLjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIzNywgMS41LCAtMTEwKTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDQsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdGxldCBmbG9vciA9IEZsb29yLmNyZWF0ZSgpO1xyXG5cdFx0Zmxvb3Iucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGZsb29yKTtcclxuXHJcblx0XHQvKiBTS1kgU1BIRVJFICovXHJcblxyXG5cdFx0bGV0IHNreV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRza3lfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnc2t5c3BoZXJlJyk7XHJcblx0XHRza3lfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KENPTlNUQU5UUy5TS1lTUEhFUkUuUkFESVVTLCBDT05TVEFOVFMuU0tZU1BIRVJFLldJRFRIX1NFR01FTlRTLCBDT05TVEFOVFMuU0tZU1BIRVJFLkhFSUdIVF9TRUdNRU5UUyk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNreV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSwgc2lkZTogVEhSRUUuQmFja1NpZGUgfSk7XHJcblx0XHRsZXQgc2t5ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChza3kpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBXT1JMRCBCT1VORElORyBCT1ggKi9cclxuXHJcblx0XHRib3ggPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ09OU1RBTlRTLkJPVU5ESU5HX0JPWC5XSURUSCwgQ09OU1RBTlRTLkJPVU5ESU5HX0JPWC5IRUlHSFQsIENPTlNUQU5UUy5CT1VORElOR19CT1guREVQVEgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHsgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuMCwgc2lkZTogVEhSRUUuQmFja1NpZGUgfSk7XHJcblx0XHRsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJveCwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLldvcmxkID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUhvdXNlKHR5cGUsIHBvc2l0aW9uLCByb3RhdGlvbikge1xyXG5cclxuXHRcdGxldCBidWlsZGluZztcclxuXHJcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cdFx0cm90YXRpb24gPSByb3RhdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHRpZihcIkxhcmdlXCIgPT09IHR5cGUpIHtcclxuXHJcblx0XHRcdGJ1aWxkaW5nID0gdGhpcy5sYXJnZUhvdXNlQnVpbGRlci5idWlsZChwb3NpdGlvbiwgcm90YXRpb24pO1xyXG5cdFx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblx0XHRcdGJ1aWxkaW5nID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KENPTlNUQU5UUy5MQVJHRV9IT1VTRS5XSURUSCwgQ09OU1RBTlRTLkxBUkdFX0hPVVNFLkhFSUdIVCwgQ09OU1RBTlRTLkxBUkdFX0hPVVNFLkRFUFRIKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChwb3NpdGlvbiwgcm90YXRpb24pO1xyXG5cdFx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblx0XHRcdGJ1aWxkaW5nID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KENPTlNUQU5UUy5NRURJVU1fSE9VU0UuV0lEVEgsIENPTlNUQU5UUy5NRURJVU1fSE9VU0UuSEVJR0hULCBDT05TVEFOVFMuTUVESVVNX0hPVVNFLkRFUFRIKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7IHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjAgfSk7XHJcblx0XHRsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSh0aGlzLnNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGdldFNjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmU7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FtZXJhKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Xb3JsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBCdWxsZXQgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1bGxldC5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUpIHtcclxuXHJcblx0XHR0aGlzLmJ1bGxldHMgPSBbXTtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoQ09OU1RBTlRTLkNBTUVSQS5GUlVTVFVNLCBDT05TVEFOVFMuQ0FNRVJBLkFTUEVDVF9SQVRJTywgQ09OU1RBTlRTLkNBTUVSQS5ORUFSLCBDT05TVEFOVFMuQ0FNRVJBLkZBUik7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoQ09OU1RBTlRTLlJFRF9QT0lOVC5YLCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCwgQ09OU1RBTlRTLlJFRF9QT0lOVC5aKTtcclxuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdCgwLCAwLCAtMSk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMuYnVsbGV0c1tpXS51cGRhdGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5QTEFZRVIuTU9WRU1FTlRfU1BFRUQpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmlnaHQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0cmlnaHQuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGJhY2t3YXJkID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdGJhY2t3YXJkLmNyb3NzVmVjdG9ycyhyaWdodCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5QTEFZRVIuTU9WRU1FTlRfU1BFRUQpO1xyXG5cclxuXHRcdGxldCBmb3J3YXJkID0gYmFja3dhcmQuY2xvbmUoKS5uZWdhdGUoKTtcclxuXHRcdGxldCBsZWZ0ID0gcmlnaHQuY2xvbmUoKS5uZWdhdGUoKTtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nICYmICF0aGlzLmZhbGxpbmcpIHtcclxuXHJcblx0XHRcdHRoaXMubW92aW5nVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGxlZnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLmFkZChiYWNrd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZVJpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKHJpZ2h0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmluZ0NvbGxpc2lvbihzY2VuZSwgdGhpcy5tb3ZpbmdWZWN0b3IuY2xvbmUoKSkpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSB0aGlzLm1vdmluZ1ZlY3Rvci54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHRoaXMubW92aW5nVmVjdG9yLno7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ncmF2aXRhdGlvbihzY2VuZSk7XHJcblxyXG5cdFx0aWYodGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCB8fCBcclxuXHRcdFx0XHQoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1KSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5QTEFZRVIuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLlBMQVlFUi5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtb3ZpbmdDb2xsaXNpb24oc2NlbmUsIGRpcmVjdGlvbikge1xyXG5cclxuXHRcdGRpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuXHJcblx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCBkaXJlY3Rpb24pO1xyXG5cdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWcxID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdGxldCBub3JtID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdG5vcm0uY3Jvc3NWZWN0b3JzKGRpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuXHRcdGxldCByaWdodCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRyaWdodC5hZGQobm9ybSkuYWRkKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCkpO1xyXG5cclxuXHRcdG5vcm0ubmVnYXRlKCk7XHJcblxyXG5cdFx0bGV0IGxlZnQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0bGVmdC5hZGQobm9ybSkuYWRkKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCkpO1xyXG5cclxuXHRcdHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIocmlnaHQsIGRpcmVjdGlvbik7XHJcblx0XHRjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdGxldCBmbGFnMiA9ICFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKTtcclxuXHJcblx0XHRyYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKGxlZnQsIGRpcmVjdGlvbik7XHJcblx0XHRjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdGxldCBmbGFnMyA9ICFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKTtcclxuXHJcblx0XHRyZXR1cm4gZmxhZzEgJiYgZmxhZzIgJiYgZmxhZzM7XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgKGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgLSBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCkgPiAwLjAxKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUJ1bGxlcigpIHtcclxuXHJcblx0XHRsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLmNhbWVyYS5yb3RhdGlvbi5jbG9uZSgpLCB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpKTtcclxuXHRcdHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWxsZXQuZ2V0SW5zdGFuY2UoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYW1lcmE7XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9scygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vdXNlQ29udHJvbGxlci5nZXRPYmplY3QoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlBsYXllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuV0hJVEVTUEFDRToge1xyXG5cdFx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5vbktleVVwID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleVVwKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0LmFkZCgpO1xyXG5cclxuXHRcdHRoaXMueWF3T2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnlhd09iamVjdC5hZGQodGhpcy5waXRjaE9iamVjdCk7XHJcblxyXG5cdFx0dGhpcy5QSV8yID0gLTAuMSArIE1hdGguUEkgLyAyOyAvLyAtMC4xIGlzIHRoZSBFcHNpbG9uIGZvciBnaW1iYWwgbG9jayBwcmV2ZW50LlxyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGxldCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0XHRsZXQgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcclxuXHJcblx0XHRcdHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnkgLT0gbW92ZW1lbnRYICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54IC09IG1vdmVtZW50WSAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblxyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggPSBNYXRoLm1heCggLXRoaXMuUElfMiwgTWF0aC5taW4oIHRoaXMuUElfMiwgdGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ICkgKTtcclxuXHJcblx0XHRcdGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSk7XHJcblx0XHRcdGxldCByb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIllYWlwiKTtcclxuXHRcdFx0bGV0IGxvb2tBdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRyb3RhdGlvbi5zZXQodGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54LCB0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55LCAwKTtcclxuXHJcblx0XHRcdGxvb2tBdC5jb3B5KGRpcmVjdGlvbikuYXBwbHlFdWxlcihyb3RhdGlvbik7XHJcblxyXG5cdFx0XHRsb29rQXQueCArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueDtcclxuXHRcdFx0bG9va0F0LnkgKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLnk7XHJcblx0XHRcdGxvb2tBdC56ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi56O1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5ZXIuY3JlYXRlQnVsbGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4geyBzZWxmLm9uTW91c2VNb3ZlKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgc2VsZi5vbkNsaWNrKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0T2JqZWN0KCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnlhd09iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1bGxldCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IocG9zaXRpb24sIHJvdGF0aW9uLCBkaXJlY3Rpb24pIHtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoQ09OU1RBTlRTLkJVTExFVC5SQURJVVMsIENPTlNUQU5UUy5CVUxMRVQuUkFESVVTLCBDT05TVEFOVFMuQlVMTEVULkhFSUdIVCwgQ09OU1RBTlRTLkJVTExFVC5SQURJVVNfU0VHTUVOVFMpO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHRcdHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcdFx0XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQodGhpcy5tZXNoKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopXHJcblxyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblxyXG5cdFx0dGhpcy5kaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLkJVTExFVC5TUEVFRCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcblx0fVxyXG5cclxuXHRnZXRJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVsbGV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1bGxldC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRmxvb3IgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IGZsb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cdFx0XHJcblx0XHRmbG9vcl90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdmbG9vcicpO1xyXG5cdFx0Zmxvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRmbG9vcl90ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRmbG9vcl90ZXh0dXJlLnJlcGVhdC5zZXQoMTAwLCAxMDApO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KENPTlNUQU5UUy5GTE9PUi5XSURUSCwgQ09OU1RBTlRTLkZMT09SLkhFSUdIVCwgQ09OU1RBTlRTLkZMT09SLldJRFRIX1NFR01FTlRTLCBDT05TVEFOVFMuRkxPT1IuSEVJR0hUX1NFR01FTlRTKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZmxvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUsIHNpZGU6IFRIUkVFLkJhY2tTaWRlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5GbG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgQ09OU09MRSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMuQ29uc29sZS5qcyc7XHJcblxyXG5sZXQgaW1hZ2VzID0geyB9O1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBnZXRJbWFnZShuYW1lKSB7XHJcblx0XHRyZXR1cm4gaW1hZ2VzW25hbWVdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRJbWFnZXMoY2FsbGJhY2spIHtcclxuXHJcblx0XHRsZXQgbG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblxyXG5cdFx0bGV0IGxvYWRJbWFnZSA9IChwYXRoKSA9PiB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuXHRcdFx0XHRsb2FkZXIubG9hZChwYXRoLCAoaW1hZ2UpID0+IHtcclxuXHJcblx0XHRcdFx0XHRDT05TT0xFLm91dChwYXRoICsgXCIgd2FzIGxvYWRlZC5cIiwgQ09OU1RBTlRTLk1FU1NBR0UuTk9USUNFKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZXNbcGF0aC5zdWJzdHIoNCwgcGF0aC5sZW5ndGggLSA4KV0gPSBpbWFnZTtcclxuXHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuQkxBTkspXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5CT1gxKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkJPWDIpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuRE9PUik7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5GTE9PUik7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5TS1lTUEhFUkUpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuVEVYVElMRSk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5CTE9DSyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5XT09EKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLldJTkRPVyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IGNhbGxiYWNrKCk7IH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuTG9hZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qcyc7XHJcbmltcG9ydCBCbGFuayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qcyc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuRG9vci5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRmFjYWRlKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxvY2ssIGJ1aWxkaW5nQmxvY2tzO1xyXG5cdFx0XHJcblx0XHRidWlsZGluZ0Jsb2NrcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDU0LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDI3LCA1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCg0NSwgMTUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDE4LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDksIDE1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRsZXQgYmxvY2tfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0YmxvY2tfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYmxvY2snKTtcclxuXHRcdGJsb2NrX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS5yZXBlYXQuc2V0KDEwLCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0Jsb2Nrcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsb2NrX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IGdhbWVXaW5kb3c7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDkuMywgMTIuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LjMsIDEyLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NS4zLCAzLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJJR0hUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDE1LCAtMTIpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCA1LCAtMjgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCAxNSwgLTM2KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoOSwgMTUsIC00MC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NSwgMTUsIC00MC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBMRUZUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoLTAuMDEsIDE1LCAtMjgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgMTUsIC0xMik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgoaSAlIDMgPyAwLjUgOiAxKSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCB0cnVlKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICsgNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIChpICUgMyA/IDAuMTc1IDogMC4yNSkpO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDE4LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDkgKyAzNiAqIGosIDIwLCAtNDAgKiBpKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgyNywgNywgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoOSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDM5LCA3LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDEyLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoNDIsIDYsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDQ1LCAxNSwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgNjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMjAsIDAuMjUsIGogIT09IDApO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxOCAqIGksIDEwLCAtOCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgKGkgJSAzKSAhPT0gMCk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgLTQwKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAoMCA9PT0gaSA/IDU0IDogNDApLCAwLjI1LCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdGlmKDAgPT09IGkpIHtcclxuXHRcdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgyNywgMTAsIC00MCAqIGopO1xyXG5cdFx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDU0ICogaiwgMTAsIC0yMCk7XHJcblx0XHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNDAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE4ICogaSwgMjAsIC0yMCk7XHJcblx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBibGFua190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRibGFua190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdibGFuaycpO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRibGFua190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibGFua190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibGFua190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbGFua3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibGFua190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0JsYW5rcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGREb29ycygpIHtcclxuXHJcblx0XHRsZXQgZG9vciA9IERvb3IuY3JlYXRlKDUuNywgOCk7XHJcblxyXG5cdFx0ZG9vci5wb3NpdGlvbi5zZXQoMjcuMiwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZG9vcik7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0XHRzdHVmZiA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBhcmFtZXRyaWNHZW9tZXRyeSgodSwgdikgPT4ge1xyXG5cclxuXHRcdFx0dSA9IDQgKiB1IC0gMjtcclxuXHRcdFx0diA9IDggKiB2IC0gNDtcclxuXHRcdFx0bGV0IHkgPSAyICogTWF0aC5zcXJ0KDAuMDMgKiB1ICogdSArIDAuMDMgKiB2ICogdik7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjModSwgeSwgdik7XHJcblxyXG5cdFx0fSwgMjAsIDIwKTtcclxuXHJcblx0XHRsZXQgdGV4dGlsZV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHR0ZXh0aWxlX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ3RleHRpbGUnKTtcclxuXHRcdHRleHRpbGVfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHRpbGVfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEsIDEsIC0xKTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gNik7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoLTEsIDEsIC0xKTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KDAsIDAsIE1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cclxuXHJcblx0XHR0cmVlcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGxldCB0cmVlX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHRyZWVfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnd29vZCcpO1xyXG5cdFx0dHJlZV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMDUsIDAuMDUsIDUpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRyZWVfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgwLCAwLjc1LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgMCk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLjUsIC0wLjUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAtTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoLTEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIE1hdGguUEkgLyA1KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0cmVlcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRzdHVmZi5wb3NpdGlvbi5zZXQoOSwgMiwgMyk7XHJcblx0XHRzdHVmZi5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDksIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKHN0dWZmKTtcclxuXHJcblxyXG5cclxuXHJcblx0XHRsZXQgYm94X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJveF90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdib3gxJyk7XHJcblx0XHRib3hfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJveF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDcuOSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMTAuNSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoNy45LCAyLjI1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54IC0gMjcsIHBvc2l0aW9uLnkgLSAxMCwgcG9zaXRpb24ueiArIDIwKTtcclxuXHR9XHJcblxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoMjcpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKDEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigtMjApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgtMjcpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKC0xMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooMjApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHQvKiBJTkRFUEVOREVOVCBDT05TVFJVQ1RJTkcgUEFSVFMgKi9cclxuXHRidWlsZEZhY2FkZSgpIHsgfVxyXG5cdGJ1aWxkQmxhbmtzKCkgeyB9XHJcblx0YnVpbGRXaW5kb3dzKCkgeyB9XHJcblx0YnVpbGREb29ycygpIHsgfVxyXG5cdGJ1aWxkU3R1ZmYoKSB7IH1cclxuXHJcblx0LyogQ09OU1RSVUNUIE9CSkVDVCAqL1xyXG5cdGJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbikge1xyXG5cclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblx0XHRyb3RhdGlvbiA9IHJvdGF0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkRmFjYWRlKCk7XHJcblx0XHR0aGlzLmJ1aWxkQmxhbmtzKCk7XHJcblx0XHR0aGlzLmJ1aWxkV2luZG93cygpO1xyXG5cdFx0dGhpcy5idWlsZERvb3JzKCk7XHJcblx0XHR0aGlzLmJ1aWxkU3R1ZmYoKTtcclxuXHJcblx0XHR0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHRcdHRoaXMuc2V0Um90YXRpb24ocm90YXRpb24pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyogT0JKRUNUIExPQ0FUSU9OICovXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHsgfVxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7IH1cclxuXHJcblxyXG5cdC8qIFRFWFRVUkUgTk9STUFMSVpBVElPTiAqL1xyXG5cdGFzc2lnblVWcyhnZW9tZXRyeSkge1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCk7XHJcblxyXG5cdCAgICBsZXQgbWF4ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4O1xyXG5cdCAgICBsZXQgbWluID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWluO1xyXG5cclxuXHQgICAgbGV0IG9mZnNldCAgPSBuZXcgVEhSRUUuVmVjdG9yMygwIC0gbWluLngsIDAgLSBtaW4ueSwgMCAtIG1pbi56KTtcclxuXHQgICAgbGV0IHJhbmdlICAgPSBuZXcgVEhSRUUuVmVjdG9yMyhtYXgueCAtIG1pbi54LCBtYXgueSAtIG1pbi55LCBtYXgueiAtIG1pbi56KTtcclxuXHJcblx0ICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0gPSBbXTtcclxuXHJcblx0ICAgIGxldCBmYWNlcyA9IGdlb21ldHJ5LmZhY2VzO1xyXG5cclxuXHQgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5mYWNlcy5sZW5ndGggOyBpKyspIHtcclxuXHJcblx0ICAgICAgbGV0IHYxID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYV07XHJcblx0ICAgICAgbGV0IHYyID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYl07XHJcblx0ICAgICAgbGV0IHYzID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uY107XHJcblxyXG5cdCAgICAgIGlmKHYxLnggPT09IHYyLnggJiYgdjIueCA9PT0gdjMueCkge1xyXG5cdFx0ICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2MS55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2Mi55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2My55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfSBlbHNlIGlmKHYxLnkgPT09IHYyLnkgJiYgdjIueSA9PT0gdjMueSkge1xyXG5cdFx0XHQgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjEueiArIG9mZnNldC56ICkgLyByYW5nZS56ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjIueiArIG9mZnNldC56ICkgLyByYW5nZS56ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjMueiArIG9mZnNldC56ICkgLyByYW5nZS56IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdLnB1c2goW1xyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2MS54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYxLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2Mi54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYyLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2My54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYzLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApXHJcblx0XHQgICAgICBdKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGdlb21ldHJ5LnV2c05lZWRVcGRhdGUgPSB0cnVlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CbG9jayA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZShoZWlnaHQsIHdpZHRoLCBkZXB0aCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShoZWlnaHQsIHdpZHRoLCBkZXB0aCk7XHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQmxvY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsYW5rID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBjb25lKSB7XHJcblxyXG5cdFx0bGV0IGluc3RhbmNlLCBnZW9tZXRyeSwgbWVzaCwgY29udGFpbmVyO1xyXG5cclxuXHRcdGNvbnRhaW5lciA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHdpZHRoLCBoZWlnaHQsIGRlcHRoKTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGNvbnRhaW5lci5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0aWYodHJ1ZSA9PT0gY29uZSkge1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KGRlcHRoLCAyKTtcclxuXHRcdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRcdG1lc2gucG9zaXRpb24uc2V0KCh3aWR0aCAvIDIpIC0gZGVwdGgsIChoZWlnaHQgLyAyKSArIDEsIDApO1xyXG5cclxuXHRcdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHRcdH1cclxuXHJcblx0XHRpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGNvbnRhaW5lcik7XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQmxhbms7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldpbmRvdyA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHJcblx0XHRsZXQgd2luZG93X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHdpbmRvd190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCd3aW5kb3cnKTtcclxuXHRcdHdpbmRvd190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShDT05TVEFOVFMuV0lORE9XLldJRFRILCBDT05TVEFOVFMuV0lORE9XLkhFSUdIVCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHdpbmRvd190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2luZG93O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkRvb3IgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUod2lkdGgsIGhlaWdodCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0bGV0IGRvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0ZG9vcl90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdkb29yJyk7XHJcblx0XHRkb29yX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkod2lkdGgsIGhlaWdodCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBtZXNoO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuRG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Eb29yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuaW1wb3J0IERvb3IgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5Eb29yLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRidWlsZEZhY2FkZSgpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsb2NrLCBidWlsZGluZ0Jsb2NrcztcclxuXHRcdFxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgzMCwgMjAsIDMwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCgxNSwgMTAsIC0xNSk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBibG9ja190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRibG9ja190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdibG9jaycpO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbG9ja3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibG9ja190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0Jsb2NrcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRXaW5kb3dzKCkge1xyXG5cclxuXHRcdGxldCBnYW1lV2luZG93O1xyXG5cclxuXHRcdC8qIEZPUldBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgxNSwgMTUsIDAuMDEpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDI1LCA1LCAwLjAxKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogUklHSFQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgzMC4wMSwgMTUsIC0xNSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBCQUNLV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgLTMwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDUsIDUsIC0zMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBMRUZUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoLTAuMDEsIDUsIC0xNSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHRcdFxyXG5cdH1cclxuXHJcblx0YnVpbGRCbGFua3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibGFuaywgYnVpbGRpbmdCbGFua3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbGFua3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKChpICUgMyA/IDAuNSA6IDEpLCAyMCwgKGkgJSAzID8gMC4yNSA6IDAuNSksIHRydWUpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgoaSAlIDMgPyAwLjI1IDogMC41KSAqIChpID09PSAzID8gLTEgOiAxKSArIDEwICogaSwgMTAsIC0zMCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDMwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDMwICogaiwgMTAgKyAxMCAqIGksIC0xNSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAyMCwgMC4yNSwgKGkgJSAzICE9PSAwKSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDMwICogaiwgMTAsIC0xMCAqIGkpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDMwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE1LCAxMCArIDEwICogaSwgLTMwICogaik7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBibGFua190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRibGFua190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdibGFuaycpO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRibGFua190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibGFua190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibGFua190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbGFua3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibGFua190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0JsYW5rcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGREb29ycygpIHtcclxuXHJcblx0XHRsZXQgZG9vciA9IERvb3IuY3JlYXRlKDQsIDgpO1xyXG5cclxuXHRcdGRvb3IucG9zaXRpb24uc2V0KDgsIDMsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGRvb3IpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRTdHVmZigpIHtcclxuXHJcblx0XHRsZXQgc3R1ZmYsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgdHJlZXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLSAxNSwgcG9zaXRpb24ueSAtIDEwLCBwb3NpdGlvbi56ICsgMTUpO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgxNSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0xNSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0xNSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigxNSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Cb3ggPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblx0XHRcclxuXHRcdGxldCBsb2FkZXIsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaDtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAzLCAzKTtcclxuXHJcblx0XHRsZXQgYm94X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cdFx0XHJcblx0XHRib3hfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYm94MicpO1xyXG5cdFx0Ym94X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBib3hfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gbWVzaDtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJveDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Cb3guanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9