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
			this.FPS.domElement.style.right = '0px';
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
	
		circle.addEventListener('click', function () {
	
			/* LOCK THE POINTER */
			(0, _ShooterUtilsRequestPointerLock2.default)();
	
			title.style.display = 'none';
			start.style.display = 'none';
	
			_ShooterUtilsConsole2.default.show();
	
			_ShooterGraphicsLoader2.default.loadImages(function () {
	
				_ShooterUtilsConsole2.default.hide();
	
				var gamePanel = document.querySelector('.game-panel');
				var body = document.getElementsByTagName("body")[0];
	
				gamePanel.style.display = 'block';
				body.style.opacity = 0.0;
	
				var intervalId = setInterval(function () {
					var value = parseFloat(body.style.opacity);
					var current = Math.min(value + 0.05, 1.0);
					if (Math.abs(current) > 1.0) {
						body.style.opacity = 1.0;
						clearInterval(intervalId);
					} else {
						body.style.opacity = current;
					}
				}, 50);
	
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
			WINDOW: 'img/window.jpg',
			WHEEL: 'img/wheel.jpg'
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
		}, {
			key: 'show',
			value: function show() {
	
				var console = document.querySelector('.console');
	
				console.style.display = 'block';
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
	
	var _ShooterEntitiesWheel = __webpack_require__(16);
	
	var _ShooterEntitiesWheel2 = _interopRequireDefault(_ShooterEntitiesWheel);
	
	var _ShooterEntitiesCart = __webpack_require__(17);
	
	var _ShooterEntitiesCart2 = _interopRequireDefault(_ShooterEntitiesCart);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder = __webpack_require__(18);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersLargeHouseBuilder);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder = __webpack_require__(24);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersMediumHouseBuilder);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	var _ShooterEntitiesBox = __webpack_require__(25);
	
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
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(61, 1.5, -40);
					box.rotation.set(0, Math.PI / 4, 0);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(65, 1.5, -40);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(65, 1.5, -43);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(65, 4.5, -40);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(68, 1.5, -40);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(68, 4.5, -40);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(68, 7.5, -40);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(68, 1.5, -37);
					this.scene.add(box);
	
					var wheel = _ShooterEntitiesWheel2.default.create();
					wheel.position.set(20, 2.5, 70.7);
					wheel.rotation.set(-Math.PI / 18, 0, 0);
					this.scene.add(wheel);
	
					var cart = _ShooterEntitiesCart2.default.create();
					cart.position.set(135, 2.5, -56);
					this.scene.add(cart);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(145, 1.5, -52);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(145, 4.5, -52);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(118.5, 1.5, -42);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(101.5, 1.5, -22);
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
	
					/* FLOOR */
	
					var floor = _ShooterEntitiesFloor2.default.create();
					floor.rotation.set(Math.PI / 2, 0, 0);
					this.scene.add(floor);
	
					/* ----------------- */
	
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
					return loadImage(_ShooterConstants2.default.IMAGES.WHEEL);
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
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Wheel = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var wheel = new THREE.Geometry();
	
							var geometry = new THREE.RingGeometry(2.2, 2.5, 32);
							var ring = new THREE.Mesh(geometry);
							ring.position.set(0, 0, 0);
							ring.updateMatrix();
							wheel.merge(ring.geometry, ring.matrix);
	
							geometry = new THREE.RingGeometry(2.2, 2.5, 32);
							ring = new THREE.Mesh(geometry);
							ring.position.set(0, 0, -0.3);
							ring.updateMatrix();
							wheel.merge(ring.geometry, ring.matrix);
	
							geometry = new THREE.CylinderGeometry(2.5, 2.5, 0.3, 64, 1, true);
							var rim = new THREE.Mesh(geometry);
							rim.position.set(0, 0, -0.15);
							rim.rotation.set(Math.PI / 2, 0, 0);
							rim.updateMatrix();
							wheel.merge(rim.geometry, rim.matrix);
	
							geometry = new THREE.CylinderGeometry(2.2, 2.2, 0.3, 64, 1, true);
							rim = new THREE.Mesh(geometry);
							rim.position.set(0, 0, -0.15);
							rim.rotation.set(Math.PI / 2, 0, 0);
							rim.updateMatrix();
							wheel.merge(rim.geometry, rim.matrix);
	
							geometry = new THREE.RingGeometry(0.3, 0.5, 32);
							ring = new THREE.Mesh(geometry);
							ring.position.set(0, 0, 0);
							ring.updateMatrix();
							wheel.merge(ring.geometry, ring.matrix);
	
							geometry = new THREE.RingGeometry(0.3, 0.5, 32);
							ring = new THREE.Mesh(geometry);
							ring.position.set(0, 0, -0.3);
							ring.updateMatrix();
							wheel.merge(ring.geometry, ring.matrix);
	
							geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3, 64, 1, true);
							rim = new THREE.Mesh(geometry);
							rim.position.set(0, 0, -0.15);
							rim.rotation.set(Math.PI / 2, 0, 0);
							rim.updateMatrix();
							wheel.merge(rim.geometry, rim.matrix);
	
							geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 64, 1, true);
							rim = new THREE.Mesh(geometry);
							rim.position.set(0, 0, -0.15);
							rim.rotation.set(Math.PI / 2, 0, 0);
							rim.updateMatrix();
							wheel.merge(rim.geometry, rim.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							var box = new THREE.Mesh(geometry);
							box.position.set(0, 1.35, -0.15);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							box = new THREE.Mesh(geometry);
							box.position.set(0, -1.35, -0.15);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							box = new THREE.Mesh(geometry);
							box.position.set(-1.15, -0.7, -0.15);
							box.rotation.set(0, 0, -Math.PI / 3);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							box = new THREE.Mesh(geometry);
							box.position.set(-1.15, 0.7, -0.15);
							box.rotation.set(0, 0, Math.PI / 3);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							box = new THREE.Mesh(geometry);
							box.position.set(1.15, 0.7, -0.15);
							box.rotation.set(0, 0, -Math.PI / 3);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							geometry = new THREE.BoxGeometry(0.2, 2, 0.2);
							box = new THREE.Mesh(geometry);
							box.position.set(1.15, -0.7, -0.15);
							box.rotation.set(0, 0, Math.PI / 3);
							box.updateMatrix();
							wheel.merge(box.geometry, box.matrix);
	
							var wheel_texture = new THREE.Texture();
	
							wheel_texture.image = _ShooterGraphicsLoader2.default.getImage('wheel');
							wheel_texture.needsUpdate = true;
	
							var material = new THREE.MeshBasicMaterial({ map: wheel_texture, overdraw: true, side: THREE.DoubleSide });
							var mesh = new THREE.Mesh(wheel, material);
	
							return mesh;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Wheel;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntities = __webpack_require__(16);
	
	var _ShooterEntities2 = _interopRequireDefault(_ShooterEntities);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Wheel = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var cart = new THREE.Geometry();
	
							var leftWheel = _ShooterEntities2.default.create();
							leftWheel.position.set(0, 0, 5);
							leftWheel.updateMatrix();
							cart.merge(leftWheel.geometry, leftWheel.matrix);
	
							var rightWheel = _ShooterEntities2.default.create();
							rightWheel.position.set(0, 0, 0);
							rightWheel.updateMatrix();
							cart.merge(rightWheel.geometry, rightWheel.matrix);
	
							var geometry = new THREE.CylinderGeometry(0.35, 0.35, 6);
							var blank = new THREE.Mesh(geometry);
							blank.position.set(0, 0, 2.35);
							blank.rotation.set(Math.PI / 2, 0, 0);
							blank.updateMatrix();
							cart.merge(blank.geometry, blank.matrix);
	
							geometry = new THREE.BoxGeometry(10, 4.7, 0.4);
							var plane = new THREE.Mesh(geometry);
							plane.position.set(0, 0.55, 2.35);
							plane.rotation.set(Math.PI / 2, Math.PI / 12, 0);
							plane.updateMatrix();
							cart.merge(plane.geometry, plane.matrix);
	
							geometry = new THREE.CylinderGeometry(0.1, 0.1, 5);
							blank = new THREE.Mesh(geometry);
							blank.position.set(-6, -1.1, 1.15);
							blank.rotation.set(0, 0, -5 * Math.PI / 12);
							blank.updateMatrix();
							cart.merge(blank.geometry, blank.matrix);
	
							geometry = new THREE.CylinderGeometry(0.1, 0.1, 5);
							blank = new THREE.Mesh(geometry);
							blank.position.set(-6, -1.1, 3.85);
							blank.rotation.set(0, 0, -5 * Math.PI / 12);
							blank.updateMatrix();
							cart.merge(blank.geometry, blank.matrix);
	
							var cart_texture = new THREE.Texture();
	
							cart_texture.image = _ShooterGraphicsLoader2.default.getImage('wheel');
							cart_texture.needsUpdate = true;
	
							var material = new THREE.MeshBasicMaterial({ map: cart_texture, overdraw: true, side: THREE.DoubleSide });
							var mesh = new THREE.Mesh(cart, material);
	
							return mesh;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Wheel;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(19);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(20);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(21);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(22);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(23);
	
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(19);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(20);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(21);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(22);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(23);
	
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
/* 25 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWUzOWYzNzc5NTJkZDExMDJjMWMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Eb29yLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8v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Q0FBYyxRQUFkLENBQXVCLEdBQXZCLENBQTJCLFNBQVMsQ0FBcEMsRUFBdUMsU0FBUyxDQUFoRCxFQUFtRCxTQUFTLENBQTVEOztBQUVBLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsQ0FBQyxFQUExQjtBQUNBLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsQ0FBQyxFQUExQjtBQUNBLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsRUFBekI7QUFDQTtBQXRMRjs7QUFBQTtBQUFBOzttQkF5TGUsUUFBUSxRQUFSLENBQWlCLFFBQWpCLENBQTBCLGtCOzs7Ozs7QUN0TXpDOzs7Ozs7OztBQUlBOzs7Ozs7OztBQUZBLFNBQVEsU0FBUixDQUFrQixrQkFBbEI7O0FBSUEsU0FBUSxRQUFSLENBQWlCLEdBQWpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFFaUI7O0FBRWYsV0FBSSxlQUFKO1dBQVksaUJBQVo7V0FBc0IsaUJBQXRCO1dBQWdDLGFBQWhDOztBQUVBLGtCQUFXLElBQUksTUFBTSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVg7O0FBRUEsV0FBSSxjQUFjLElBQUksTUFBTSxPQUFWLEVBQWxCOztBQUVBLG1CQUFZLEtBQVosR0FBb0IsZ0NBQU8sUUFBUCxDQUFnQixNQUFoQixDQUFwQjtBQUNBLG1CQUFZLFdBQVosR0FBMEIsSUFBMUI7O0FBRUEsa0JBQVcsSUFBSSxNQUFNLGlCQUFWLENBQTRCLEVBQUUsS0FBSyxXQUFQLEVBQW9CLFVBQVUsSUFBOUIsRUFBNUIsQ0FBWDtBQUNBLGNBQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFFBQXpCLENBQVA7O0FBRUEsY0FBTyxJQUFQO0FBQ0E7QUFqQkY7O0FBQUE7QUFBQTs7bUJBb0JlLFFBQVEsUUFBUixDQUFpQixHIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxZTM5ZjM3Nzk1MmRkMTEwMmMxY1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBuYW1lc3BhY2UgZnJvbSAnLi4vbmFtZXNwYWNlLmpzJztcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgQ09OU09MRSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMuQ29uc29sZS5qcyc7XHJcblxyXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5pbXBvcnQgcmVxdWVzdFBvaW50ZXJMb2NrIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanMnO1xyXG5cclxuaW1wb3J0IFdpbmRvd0NvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdHRoaXMuRlBTID0gbmV3IFN0YXRzKCk7XHJcblx0XHR0aGlzLkZQUy5zZXRNb2RlKDApO1xyXG5cclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5yaWdodCA9ICcwcHgnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuRlBTLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuXHRcdFx0c2VsZi5GUFMuYmVnaW4oKTtcclxuXHJcblx0XHRcdHNlbGYucmVuZGVyKCk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5lbmQoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRDT05TT0xFLm91dChcIkJyb3dzZXIgXCIgKyBuYXZpZ2F0b3IuYXBwTmFtZSArIFwiIHdhcyBkZXRlY3RlZC5cIiwgQ09OU1RBTlRTLk1FU1NBR0UuSU5GTyk7XHJcblxyXG5cdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltJyk7XHJcblx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0Y2FudmFzLndpZHRoID0gMjA7XHJcblx0Y2FudmFzLmhlaWdodCA9IDIwO1xyXG5cclxuXHRjb250ZXh0LmxpbmVXaWR0aCA9IFwiMlwiO1xyXG5cclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDEwLCAwKTtcclxuXHRjb250ZXh0LmxpbmVUbygxMCwgOCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDAsIDEwKTtcclxuXHRjb250ZXh0LmxpbmVUbyg4LCAxMCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDIwLCAxMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTIsIDEwKTtcclxuXHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblx0Y29udGV4dC5tb3ZlVG8oMTAsIDIwKTtcclxuXHRjb250ZXh0LmxpbmVUbygxMCwgMTIpO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG5cdGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cdGxldCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5cdGxldCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlJyk7XHJcblxyXG5cdGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0XHRyZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0c3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRDT05TT0xFLnNob3coKTtcclxuXHJcblx0XHRMb2FkZXIubG9hZEltYWdlcygoKSA9PiB7XHJcblx0XHRcdFxyXG5cdFx0XHRDT05TT0xFLmhpZGUoKTtcclxuXHJcblx0XHRcdGxldCBnYW1lUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wYW5lbCcpO1xyXG5cdFx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuXHJcblx0XHRcdGdhbWVQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0Ym9keS5zdHlsZS5vcGFjaXR5ID0gMC4wO1xyXG5cclxuXHRcdFx0bGV0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KGJvZHkuc3R5bGUub3BhY2l0eSk7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZSArIDAuMDUsIDEuMCk7XHJcblx0XHRcdFx0aWYoTWF0aC5hYnMoY3VycmVudCkgPiAxLjApIHtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3BhY2l0eSA9IDEuMDtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3BhY2l0eSA9IGN1cnJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCA1MCk7XHJcblxyXG5cdFx0XHQvKiBTVEFSVCBHQU1FICovXHJcblx0XHRcdGNvbnN0IF9faW5zdGFuY2UgPSBuZXcgU2hvb3Rlci5HYW1lKCk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR2FtZS9TaG9vdGVyLkdhbWUuanNcbiAqKi8iLCJ3aW5kb3cuU2hvb3RlciA9IChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgU2hvb3RlcikgPyB7fSA6IFNob290ZXI7XHJcblxyXG53aW5kb3cuU2hvb3Rlci5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XHJcbiAgICBsZXQgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSBTaG9vdGVyO1xyXG5cclxuICAgIGlmIChcIlNob290ZXJcIiA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgc2luZ2xlUGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgcGFyZW50W3NpbmdsZVBhcnRdKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtzaW5nbGVQYXJ0XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbc2luZ2xlUGFydF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25hbWVzcGFjZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIuQ29uc3RhbnRzID0ge1xyXG5cclxuXHRDQU1FUkE6IHtcclxuXHRcdEZSVVNUVU06IDQ1LFxyXG5cdFx0QVNQRUNUX1JBVElPOiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuXHRcdE5FQVI6IDEsXHJcblx0XHRGQVI6IDEwMDAwXHJcblx0fSxcclxuXHJcblx0TUVTU0FHRToge1xyXG5cdFx0SU5GTzogMSxcclxuXHRcdE5PVElDRTogMixcclxuXHRcdEVSUk9SOiAzXHJcblx0fSxcclxuXHJcblx0SU1BR0VTOiB7XHJcblx0XHRCTEFOSzogJ2ltZy9ibGFuay5qcGcnLFxyXG5cdFx0Qk9YMTogJ2ltZy9ib3gxLmpwZycsXHJcblx0XHRCT1gyOiAnaW1nL2JveDIuanBnJyxcclxuXHRcdERPT1I6ICdpbWcvZG9vci5qcGcnLFxyXG5cdFx0RkxPT1I6ICdpbWcvZmxvb3IuanBnJyxcclxuXHRcdFNLWVNQSEVSRTogJ2ltZy9za3lzcGhlcmUuanBnJyxcclxuXHRcdFRFWFRJTEU6ICdpbWcvdGV4dGlsZS5qcGcnLFxyXG5cdFx0QkxPQ0s6ICdpbWcvYmxvY2suanBnJyxcclxuXHRcdFdPT0Q6ICdpbWcvd29vZC5qcGcnLFxyXG5cdFx0V0lORE9XOiAnaW1nL3dpbmRvdy5qcGcnLFxyXG5cdFx0V0hFRUw6ICdpbWcvd2hlZWwuanBnJ1xyXG5cdH0sXHJcblxyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcdFxyXG5cclxuXHRQTEFZRVI6IHtcclxuXHRcdEhFSUdIVDogMyxcclxuXHRcdEpVTVBfU1RSRU5HVEg6IDAuNSxcclxuXHRcdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblx0fSxcclxuXHJcblx0R1JBVklUWTogNTAsXHRcclxuXHJcblx0RkxPT1I6IHtcclxuXHRcdFdJRFRIOiAzMDAwLFxyXG5cdFx0SEVJR0hUOiAzMDAwLFxyXG5cdFx0V0lEVEhfU0VHTUVOVFM6IDQwLFxyXG5cdFx0SEVJR0hUX1NFR01FTlRTOiA0MFxyXG5cdH0sXHJcblxyXG5cdEJVTExFVDoge1xyXG5cdFx0UkFESVVTOiAwLjA1LFxyXG5cdFx0SEVJR0hUOiAyLFxyXG5cdFx0UkFESVVTX1NFR01FTlRTOiAzMixcclxuXHRcdFNQRUVEOiA0XHJcblx0fSxcclxuXHJcblx0V0lORE9XOiB7XHJcblx0XHRXSURUSDogNCxcclxuXHRcdEhFSUdIVDogNFxyXG5cdH0sXHJcblxyXG5cdExBUkdFX0hPVVNFOiB7XHJcblx0XHRXSURUSDogNTQsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDQwXHJcblx0fSxcclxuXHJcblx0TUVESVVNX0hPVVNFOiB7XHJcblx0XHRXSURUSDogMzAsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDMwXHJcblx0fSxcclxuXHJcblx0U0tZU1BIRVJFOiB7XHJcblx0XHRSQURJVVM6IDQwMDAsXHJcblx0XHRXSURUSF9TRUdNRU5UUzogMzIsXHJcblx0XHRIRUlHSFRfU0VHTUVOVFM6IDMyXHJcblx0fSxcclxuXHJcblx0Qk9VTkRJTkdfQk9YOiB7XHJcblx0XHRXSURUSDogMTAwMCxcclxuXHRcdEhFSUdIVDogMjUwLFxyXG5cdFx0REVQVEg6IDEwMDBcclxuXHR9LFxyXG5cclxuXHRHUkVFTl9QT0lOVDoge1xyXG5cdFx0WDogLTQwLFxyXG5cdFx0WjogODBcclxuXHR9LFxyXG5cclxuXHRSRURfUE9JTlQ6IHtcclxuXHRcdFg6IDIzNCxcclxuXHRcdFo6IC0xMjBcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5TaG9vdGVyLlV0aWxzLkNvbnNvbGUgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBvdXQoc3RyaW5nLCB0eXBlKSB7XHJcblxyXG5cdFx0dHlwZSA9IHR5cGUgfHwgQ09OU1RBTlRTLk1FU1NBR0UuSU5GTztcclxuXHJcblx0XHRsZXQgY29uc29sZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zb2xlJyk7XHJcblx0XHRsZXQgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHJcblx0XHRub3RlLmlubmVySFRNTCA9IFwiPj4gXCIgKyBzdHJpbmc7XHJcblxyXG5cdFx0aWYoQ09OU1RBTlRTLk1FU1NBR0UuSU5GTyA9PT0gdHlwZSkge1xyXG5cdFx0XHRub3RlLnN0eWxlLmNvbG9yID0gXCJoc2woNDUsIDEwMCUsIDUwJSlcIjtcclxuXHRcdH0gZWxzZSBpZihDT05TVEFOVFMuTUVTU0FHRS5OT1RJQ0UgPT09IHR5cGUpIHtcclxuXHRcdFx0bm90ZS5zdHlsZS5jb2xvciA9IFwiaHNsKDEyMCwgMTAwJSwgNTAlKVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm90ZS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDEwMCUsIDUwJSlcIjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zb2xlLmFwcGVuZENoaWxkKG5vdGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGhpZGUoKSB7XHJcblxyXG5cdFx0bGV0IGNvbnNvbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc29sZScpO1xyXG5cclxuXHRcdGNvbnNvbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzaG93KCkge1xyXG5cclxuXHRcdGxldCBjb25zb2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnNvbGUnKTtcclxuXHJcblx0XHRjb25zb2xlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMuQ29uc29sZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5Db25zb2xlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xyXG5cdHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG4gICAgICAgIFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuXHRcdFx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuXHRcdFx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5pbXBvcnQgQ09OU09MRSBmcm9tICcuL1Nob290ZXIuVXRpbHMuQ29uc29sZS5qcyc7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA9ICgpID0+IHtcclxuXHJcblx0bGV0IGhhdmVQb2ludGVyTG9jayA9ICdwb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICdtb3pQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICd3ZWJraXRQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50O1xyXG5cclxuXHRpZihoYXZlUG9pbnRlckxvY2spIHtcclxuXHJcblx0XHRDT05TT0xFLm91dChcIlBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIsIENPTlNUQU5UUy5NRVNTQUdFLklORk8pO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRDT05TT0xFLm91dChcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIiwgQ09OU1RBTlRTLk1FU1NBR0UuRVJST1IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMnO1xyXG5pbXBvcnQgRmxvb3IgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzJztcclxuaW1wb3J0IFdoZWVsIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5XaGVlbC5qcyc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5DYXJ0LmpzJztcclxuXHJcbmltcG9ydCBMYXJnZUhvdXNlQnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyc7XHJcbmltcG9ydCBNZWRpdW1Ib3VzZUJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5pbXBvcnQgQm94IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5Cb3guanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIgPSBuZXcgTGFyZ2VIb3VzZUJ1aWxkZXIoKTtcclxuXHRcdHRoaXMubWVkaXVtSG91c2VCdWlsZGVyID0gbmV3IE1lZGl1bUhvdXNlQnVpbGRlcigpO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJMYXJnZVwiLCBuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIC00MCkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIkxhcmdlXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDE4MCwgMTAsIC0xMDApLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCkpO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoODUsIDEwLCAtMzUpKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoMTM1LCAxMCwgLTM1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIDApKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoMzAsIDEwLCA1NSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC1NYXRoLlBJIC8gMiwgMCkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMyg3MCwgMTAsIDU1KSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDExMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgTWF0aC5QSSwgMCkpO1xyXG5cclxuXHRcdGxldCBib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDE4LCAxLjUsIDM4LjUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIxLCAxLjUsIDM4LjUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDYxLCAxLjUsIC00MCk7XHJcblx0XHRib3gucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyA0LCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCg2NSwgMS41LCAtNDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDY1LCAxLjUsIC00Myk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoNjUsIDQuNSwgLTQwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCg2OCwgMS41LCAtNDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDY4LCA0LjUsIC00MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoNjgsIDcuNSwgLTQwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCg2OCwgMS41LCAtMzcpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHRcdFxyXG5cdFx0bGV0IHdoZWVsID0gV2hlZWwuY3JlYXRlKCk7XHJcblx0XHR3aGVlbC5wb3NpdGlvbi5zZXQoMjAsIDIuNSwgNzAuNyk7XHJcblx0XHR3aGVlbC5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAxOCwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh3aGVlbCk7XHJcblxyXG5cdFx0bGV0IGNhcnQgPSBDYXJ0LmNyZWF0ZSgpO1xyXG5cdFx0Y2FydC5wb3NpdGlvbi5zZXQoMTM1LCAyLjUsIC01Nik7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChjYXJ0KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDE0NSwgMS41LCAtNTIpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDE0NSwgNC41LCAtNTIpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDExOC41LCAxLjUsIC00Mik7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMTAxLjUsIDEuNSwgLTIyKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0LyogR1JFRU4gUE9JTlQgUkVTUEFXTiAqL1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTMwLCAxLjUsIDcwKTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDQsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDc0KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA3Nyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgODApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCA0LjUsIDgwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMi4xLCA4My42KTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDQsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSRUQgUE9JTlQgUkVTUEFXTiAqL1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjMwLCAxLjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIyNywgMS41LCAtMTEwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMjcsIDQuNSwgLTExMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjI3LCAxLjUsIC0xMTMpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIzMywgMS41LCAtMTEwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMzcsIDEuNSwgLTExMCk7XHJcblx0XHRib3gucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyA0LCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBGTE9PUiAqL1xyXG5cclxuXHRcdGxldCBmbG9vciA9IEZsb29yLmNyZWF0ZSgpO1xyXG5cdFx0Zmxvb3Iucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGZsb29yKTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFNLWSBTUEhFUkUgKi9cclxuXHJcblx0XHRsZXQgc2t5X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHNreV90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdza3lzcGhlcmUnKTtcclxuXHRcdHNreV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoQ09OU1RBTlRTLlNLWVNQSEVSRS5SQURJVVMsIENPTlNUQU5UUy5TS1lTUEhFUkUuV0lEVEhfU0VHTUVOVFMsIENPTlNUQU5UUy5TS1lTUEhFUkUuSEVJR0hUX1NFR01FTlRTKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc2t5X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlLCBzaWRlOiBUSFJFRS5CYWNrU2lkZSB9KTtcclxuXHRcdGxldCBza3kgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFdPUkxEIEJPVU5ESU5HIEJPWCAqL1xyXG5cclxuXHRcdGJveCA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShDT05TVEFOVFMuQk9VTkRJTkdfQk9YLldJRFRILCBDT05TVEFOVFMuQk9VTkRJTkdfQk9YLkhFSUdIVCwgQ09OU1RBTlRTLkJPVU5ESU5HX0JPWC5ERVBUSCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoeyB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC4wLCBzaWRlOiBUSFJFRS5CYWNrU2lkZSB9KTtcclxuXHRcdGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goYm94LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuV29ybGQgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSG91c2UodHlwZSwgcG9zaXRpb24sIHJvdGF0aW9uKSB7XHJcblxyXG5cdFx0bGV0IGJ1aWxkaW5nO1xyXG5cclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblx0XHRyb3RhdGlvbiA9IHJvdGF0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdGlmKFwiTGFyZ2VcIiA9PT0gdHlwZSkge1xyXG5cclxuXHRcdFx0YnVpbGRpbmcgPSB0aGlzLmxhcmdlSG91c2VCdWlsZGVyLmJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHRcdFx0YnVpbGRpbmcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ09OU1RBTlRTLkxBUkdFX0hPVVNFLldJRFRILCBDT05TVEFOVFMuTEFSR0VfSE9VU0UuSEVJR0hULCBDT05TVEFOVFMuTEFSR0VfSE9VU0UuREVQVEgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHRcdFx0YnVpbGRpbmcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ09OU1RBTlRTLk1FRElVTV9IT1VTRS5XSURUSCwgQ09OU1RBTlRTLk1FRElVTV9IT1VTRS5IRUlHSFQsIENPTlNUQU5UUy5NRURJVU1fSE9VU0UuREVQVEgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHsgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuMCB9KTtcclxuXHRcdGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmcsIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgTW91c2VDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IEJ1bGxldCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cclxuXHRcdHRoaXMuYnVsbGV0cyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShDT05TVEFOVFMuQ0FNRVJBLkZSVVNUVU0sIENPTlNUQU5UUy5DQU1FUkEuQVNQRUNUX1JBVElPLCBDT05TVEFOVFMuQ0FNRVJBLk5FQVIsIENPTlNUQU5UUy5DQU1FUkEuRkFSKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChDT05TVEFOVFMuUkVEX1BPSU5ULlgsIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hULCBDT05TVEFOVFMuUkVEX1BPSU5ULlopO1xyXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KDAsIDAsIC0xKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5idWxsZXRzW2ldLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCByaWdodCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRyaWdodC5jcm9zc1ZlY3RvcnMod29ybGREaXJlY3Rpb24sIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuUExBWUVSLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHRsZXQgYmFja3dhcmQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0YmFja3dhcmQuY3Jvc3NWZWN0b3JzKHJpZ2h0LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGZvcndhcmQgPSBiYWNrd2FyZC5jbG9uZSgpLm5lZ2F0ZSgpO1xyXG5cdFx0bGV0IGxlZnQgPSByaWdodC5jbG9uZSgpLm5lZ2F0ZSgpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcgJiYgIXRoaXMuZmFsbGluZykge1xyXG5cclxuXHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUZvcndhcmQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQoZm9yd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQobGVmdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGJhY2t3YXJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQocmlnaHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92aW5nQ29sbGlzaW9uKHNjZW5lLCB0aGlzLm1vdmluZ1ZlY3Rvci5jbG9uZSgpKSkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHRoaXMubW92aW5nVmVjdG9yLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gdGhpcy5tb3ZpbmdWZWN0b3IuejtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLlBMQVlFUi5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSArPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5mYWxsaW5nKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZihjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuUExBWUVSLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uICs9IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGgubWluKHRoaXMuanVtcGluZ1NhdHVyYXRpb24sIE1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1vdmluZ0NvbGxpc2lvbihzY2VuZSwgZGlyZWN0aW9uKSB7XHJcblxyXG5cdFx0ZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG5cclxuXHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIGRpcmVjdGlvbik7XHJcblx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRsZXQgZmxhZzEgPSAhY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlID4gMik7XHJcblxyXG5cdFx0bGV0IG5vcm0gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0bm9ybS5jcm9zc1ZlY3RvcnMoZGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCk7XHJcblxyXG5cdFx0bGV0IHJpZ2h0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHJpZ2h0LmFkZChub3JtKS5hZGQodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSk7XHJcblxyXG5cdFx0bm9ybS5uZWdhdGUoKTtcclxuXHJcblx0XHRsZXQgbGVmdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRsZWZ0LmFkZChub3JtKS5hZGQodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSk7XHJcblxyXG5cdFx0cmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihyaWdodCwgZGlyZWN0aW9uKTtcclxuXHRcdGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWcyID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIobGVmdCwgZGlyZWN0aW9uKTtcclxuXHRcdGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWczID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdHJldHVybiBmbGFnMSAmJiBmbGFnMiAmJiBmbGFnMztcclxuXHR9XHJcblxyXG5cdGdyYXZpdGF0aW9uKHNjZW5lKSB7XHJcblxyXG5cdFx0aWYoIXRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZighY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiAoY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSAtIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKSA+IDAuMDEpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlQnVsbGVyKCkge1xyXG5cclxuXHRcdGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuY2FtZXJhLnJvdGF0aW9uLmNsb25lKCksIHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5idWxsZXRzLnB1c2goYnVsbGV0KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1bGxldC5nZXRJbnN0YW5jZSgpKTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcblxyXG5cdGdldENvbnRyb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW91c2VDb250cm9sbGVyLmdldE9iamVjdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuUGxheWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub25DbGljayA9IChldmVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLnBsYXllci5jcmVhdGVCdWxsZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7IHNlbGYub25Nb3VzZU1vdmUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBzZWxmLm9uQ2xpY2soZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRnZXRPYmplY3QoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMueWF3T2JqZWN0O1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVsbGV0ID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcm90YXRpb24sIGRpcmVjdGlvbikge1xyXG5cclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShDT05TVEFOVFMuQlVMTEVULlJBRElVUywgQ09OU1RBTlRTLkJVTExFVC5SQURJVVMsIENPTlNUQU5UUy5CVUxMRVQuSEVJR0hULCBDT05TVEFOVFMuQlVMTEVULlJBRElVU19TRUdNRU5UUyk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnZ3JlZW4nIH0pO1xyXG5cdFx0dGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1x0XHRcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZCh0aGlzLm1lc2gpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueilcclxuXHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcblx0XHR0aGlzLmRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuQlVMTEVULlNQRUVEKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uYWRkKHRoaXMuZGlyZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGdldEluc3RhbmNlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWxsZXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5GbG9vciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHJcblx0XHRsZXQgZmxvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRcclxuXHRcdGZsb29yX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Zsb29yJyk7XHJcblx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGZsb29yX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGZsb29yX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQ09OU1RBTlRTLkZMT09SLldJRFRILCBDT05TVEFOVFMuRkxPT1IuSEVJR0hULCBDT05TVEFOVFMuRkxPT1IuV0lEVEhfU0VHTUVOVFMsIENPTlNUQU5UUy5GTE9PUi5IRUlHSFRfU0VHTUVOVFMpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBmbG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSwgc2lkZTogVEhSRUUuQmFja1NpZGUgfSk7XHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkZsb29yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBDT05TT0xFIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5Db25zb2xlLmpzJztcclxuXHJcbmxldCBpbWFnZXMgPSB7IH07XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLkxvYWRlciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGdldEltYWdlKG5hbWUpIHtcclxuXHRcdHJldHVybiBpbWFnZXNbbmFtZV07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEltYWdlcyhjYWxsYmFjaykge1xyXG5cclxuXHRcdGxldCBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsZXQgbG9hZEltYWdlID0gKHBhdGgpID0+IHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cdFx0XHRcdGxvYWRlci5sb2FkKHBhdGgsIChpbWFnZSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdENPTlNPTEUub3V0KHBhdGggKyBcIiB3YXMgbG9hZGVkLlwiLCBDT05TVEFOVFMuTUVTU0FHRS5OT1RJQ0UpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlc1twYXRoLnN1YnN0cig0LCBwYXRoLmxlbmd0aCAtIDgpXSA9IGltYWdlO1xyXG5cclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5CTEFOSylcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkJPWDEpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuQk9YMik7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5ET09SKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkZMT09SKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLlNLWVNQSEVSRSk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5URVhUSUxFKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkJMT0NLKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLldPT0QpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuV0lORE9XKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLldIRUVMKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgY2FsbGJhY2soKTsgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2hlZWwgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IHdoZWVsID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlJpbmdHZW9tZXRyeSgyLjIsIDIuNSwgMzIpO1xyXG5cdFx0bGV0IHJpbmcgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblx0XHRyaW5nLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuXHRcdHJpbmcudXBkYXRlTWF0cml4KCk7XHJcblx0XHR3aGVlbC5tZXJnZShyaW5nLmdlb21ldHJ5LCByaW5nLm1hdHJpeCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUmluZ0dlb21ldHJ5KDIuMiwgMi41LCAzMik7XHJcblx0XHRyaW5nID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0cmluZy5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuMyk7XHJcblx0XHRyaW5nLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UocmluZy5nZW9tZXRyeSwgcmluZy5tYXRyaXgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMi41LCAyLjUsIDAuMywgNjQsIDEsIHRydWUpO1xyXG5cdFx0bGV0IHJpbSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdHJpbS5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuMTUpO1xyXG5cdFx0cmltLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRyaW0udXBkYXRlTWF0cml4KCk7XHJcblx0XHR3aGVlbC5tZXJnZShyaW0uZ2VvbWV0cnksIHJpbS5tYXRyaXgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMi4yLCAyLjIsIDAuMywgNjQsIDEsIHRydWUpO1xyXG5cdFx0cmltID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0cmltLnBvc2l0aW9uLnNldCgwLCAwLCAtMC4xNSk7XHJcblx0XHRyaW0ucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHJpbS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHdoZWVsLm1lcmdlKHJpbS5nZW9tZXRyeSwgcmltLm1hdHJpeCk7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUmluZ0dlb21ldHJ5KDAuMywgMC41LCAzMik7XHJcblx0XHRyaW5nID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0cmluZy5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcblx0XHRyaW5nLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UocmluZy5nZW9tZXRyeSwgcmluZy5tYXRyaXgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlJpbmdHZW9tZXRyeSgwLjMsIDAuNSwgMzIpO1xyXG5cdFx0cmluZyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdHJpbmcucG9zaXRpb24uc2V0KDAsIDAsIC0wLjMpO1xyXG5cdFx0cmluZy51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHdoZWVsLm1lcmdlKHJpbmcuZ2VvbWV0cnksIHJpbmcubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjMsIDY0LCAxLCB0cnVlKTtcclxuXHRcdHJpbSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdHJpbS5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuMTUpO1xyXG5cdFx0cmltLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRyaW0udXBkYXRlTWF0cml4KCk7XHJcblx0XHR3aGVlbC5tZXJnZShyaW0uZ2VvbWV0cnksIHJpbS5tYXRyaXgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC41LCAwLjUsIDAuMywgNjQsIDEsIHRydWUpO1xyXG5cdFx0cmltID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0cmltLnBvc2l0aW9uLnNldCgwLCAwLCAtMC4xNSk7XHJcblx0XHRyaW0ucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHJpbS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHdoZWVsLm1lcmdlKHJpbS5nZW9tZXRyeSwgcmltLm1hdHJpeCk7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC4yLCAyLCAwLjIpO1xyXG5cdFx0bGV0IGJveCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMCwgMS4zNSwgLTAuMTUpO1xyXG5cdFx0Ym94LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UoYm94Lmdlb21ldHJ5LCBib3gubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjIsIDIsIDAuMik7XHJcblx0XHRib3ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDAsIC0xLjM1LCAtMC4xNSk7XHJcblx0XHRib3gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR3aGVlbC5tZXJnZShib3guZ2VvbWV0cnksIGJveC5tYXRyaXgpO1xyXG5cdFx0XHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjIsIDIsIDAuMik7XHRcdFxyXG5cdFx0Ym94ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMS4xNSwgLTAuNywgLTAuMTUpO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDMpO1xyXG5cdFx0Ym94LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UoYm94Lmdlb21ldHJ5LCBib3gubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjIsIDIsIDAuMik7XHJcblx0XHRib3ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0xLjE1LCAwLjcsIC0wLjE1KTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDMpO1xyXG5cdFx0Ym94LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UoYm94Lmdlb21ldHJ5LCBib3gubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjIsIDIsIDAuMik7XHJcblx0XHRib3ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDEuMTUsIDAuNywgLTAuMTUpO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDMpO1xyXG5cdFx0Ym94LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UoYm94Lmdlb21ldHJ5LCBib3gubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjIsIDIsIDAuMik7XHJcblx0XHRib3ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDEuMTUsIC0wLjcsIC0wLjE1KTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDMpO1xyXG5cdFx0Ym94LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0d2hlZWwubWVyZ2UoYm94Lmdlb21ldHJ5LCBib3gubWF0cml4KTtcclxuXHJcblxyXG5cclxuXHJcblx0XHRsZXQgd2hlZWxfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0d2hlZWxfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnd2hlZWwnKTtcclxuXHRcdHdoZWVsX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogd2hlZWxfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XHJcblx0XHRsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHdoZWVsLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaGVlbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaGVlbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBXaGVlbCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuV2hlZWwnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2hlZWwgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IGNhcnQgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRsZXQgbGVmdFdoZWVsID0gV2hlZWwuY3JlYXRlKCk7XHJcblx0XHRsZWZ0V2hlZWwucG9zaXRpb24uc2V0KDAsIDAsIDUpO1xyXG5cdFx0bGVmdFdoZWVsLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y2FydC5tZXJnZShsZWZ0V2hlZWwuZ2VvbWV0cnksIGxlZnRXaGVlbC5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCByaWdodFdoZWVsID0gV2hlZWwuY3JlYXRlKCk7XHJcblx0XHRyaWdodFdoZWVsLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuXHRcdHJpZ2h0V2hlZWwudXBkYXRlTWF0cml4KCk7XHJcblx0XHRjYXJ0Lm1lcmdlKHJpZ2h0V2hlZWwuZ2VvbWV0cnksIHJpZ2h0V2hlZWwubWF0cml4KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjM1LCAwLjM1LCA2KTtcclxuXHRcdGxldCBibGFuayA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgwLCAwLCAyLjM1KTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGNhcnQubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDQuNywgMC40KTtcclxuXHRcdGxldCBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdHBsYW5lLnBvc2l0aW9uLnNldCgwLCAwLjU1LCAyLjM1KTtcclxuXHRcdHBsYW5lLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDEyLCAwKTtcclxuXHRcdHBsYW5lLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y2FydC5tZXJnZShwbGFuZS5nZW9tZXRyeSwgcGxhbmUubWF0cml4KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMSwgMC4xLCA1KTtcclxuXHRcdGJsYW5rID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KC02LCAtMS4xLCAxLjE1KTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtNSAqIE1hdGguUEkgLyAxMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGNhcnQubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjEsIDAuMSwgNSk7XHJcblx0XHRibGFuayA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgtNiwgLTEuMSwgMy44NSk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLTUgKiBNYXRoLlBJIC8gMTIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRjYXJ0Lm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBjYXJ0X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGNhcnRfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnd2hlZWwnKTtcclxuXHRcdGNhcnRfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBjYXJ0X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlLCBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlIH0pO1xyXG5cdFx0bGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChjYXJ0LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaGVlbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5DYXJ0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuaW1wb3J0IERvb3IgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5Eb29yLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoNTQsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMjcsIDUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDE4LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoOSwgMTUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBibG9ja190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRibG9ja190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdibG9jaycpO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLnJlcGVhdC5zZXQoMTAsIDUpO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxvY2tzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxvY2tfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgZ2FtZVdpbmRvdztcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoOS4zLCAxMi41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUuMywgMTIuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LjMsIDMuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogUklHSFQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgMTUsIC0xMik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDE1LCAtMzYpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogQkFDS1dBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg5LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgMTUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCAxNSwgLTEyKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHR9XHJcblxyXG5cdGJ1aWxkQmxhbmtzKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxhbmssIGJ1aWxkaW5nQmxhbmtzO1xyXG5cclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHRcdFx0XHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKChpICUgMyA/IDAuNSA6IDEpLCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIHRydWUpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoKGkgJSAzID8gMC4yNSA6IDAuNSkgKyA2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgKGkgJSAzID8gMC4xNzUgOiAwLjI1KSk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTgsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoOSArIDM2ICogaiwgMjAsIC00MCAqIGkpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCA3LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5LCAxNSwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzksIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTIsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0MiwgNiwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCA2OyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAyMCwgMC4yNSwgaiAhPT0gMCk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE4ICogaSwgMTAsIC04ICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCAoaSAlIDMpICE9PSAwKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAtNDApO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsICgwID09PSBpID8gNTQgOiA0MCksIDAuMjUsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0aWYoMCA9PT0gaSkge1xyXG5cdFx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCAxMCwgLTQwICogaik7XHJcblx0XHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNTQgKiBqLCAxMCwgLTIwKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA0MCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAyMCwgLTIwKTtcclxuXHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JsYW5rJyk7XHJcblx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBkb29yID0gRG9vci5jcmVhdGUoNS43LCA4KTtcclxuXHJcblx0XHRkb29yLnBvc2l0aW9uLnNldCgyNy4yLCAzLCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChkb29yKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkU3R1ZmYoKSB7XHJcblxyXG5cdFx0bGV0IHN0dWZmLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIHRyZWVzO1xyXG5cclxuXHRcdHN0dWZmID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gNCAqIHUgLSAyO1xyXG5cdFx0XHR2ID0gOCAqIHYgLSA0O1xyXG5cdFx0XHRsZXQgeSA9IDIgKiBNYXRoLnNxcnQoMC4wMyAqIHUgKiB1ICsgMC4wMyAqIHYgKiB2KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdGxldCB0ZXh0aWxlX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHRleHRpbGVfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgndGV4dGlsZScpO1xyXG5cdFx0dGV4dGlsZV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dGlsZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblxyXG5cclxuXHRcdHRyZWVzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0bGV0IHRyZWVfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0dHJlZV90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCd3b29kJyk7XHJcblx0XHR0cmVlX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4wNSwgMC4wNSwgNSk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdHJlZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDAsIDAuNzUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAwKTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIC1NYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRyZWVzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdHN0dWZmLnBvc2l0aW9uLnNldCg5LCAyLCAzKTtcclxuXHRcdHN0dWZmLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gOSwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoc3R1ZmYpO1xyXG5cclxuXHJcblxyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0Ym94X3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JveDEnKTtcclxuXHRcdGJveF90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYm94X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoNy45LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxMC41LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDIuMjUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLSAyNywgcG9zaXRpb24ueSAtIDEwLCBwb3NpdGlvbi56ICsgMjApO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgyNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0yMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0yNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigyMCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdC8qIElOREVQRU5ERU5UIENPTlNUUlVDVElORyBQQVJUUyAqL1xyXG5cdGJ1aWxkRmFjYWRlKCkgeyB9XHJcblx0YnVpbGRCbGFua3MoKSB7IH1cclxuXHRidWlsZFdpbmRvd3MoKSB7IH1cclxuXHRidWlsZERvb3JzKCkgeyB9XHJcblx0YnVpbGRTdHVmZigpIHsgfVxyXG5cclxuXHQvKiBDT05TVFJVQ1QgT0JKRUNUICovXHJcblx0YnVpbGQocG9zaXRpb24sIHJvdGF0aW9uKSB7XHJcblxyXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHRcdHJvdGF0aW9uID0gcm90YXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGYWNhZGUoKTtcclxuXHRcdHRoaXMuYnVpbGRCbGFua3MoKTtcclxuXHRcdHRoaXMuYnVpbGRXaW5kb3dzKCk7XHJcblx0XHR0aGlzLmJ1aWxkRG9vcnMoKTtcclxuXHRcdHRoaXMuYnVpbGRTdHVmZigpO1xyXG5cclxuXHRcdHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG5cdFx0dGhpcy5zZXRSb3RhdGlvbihyb3RhdGlvbik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvKiBPQkpFQ1QgTE9DQVRJT04gKi9cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikgeyB9XHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHsgfVxyXG5cclxuXHJcblx0LyogVEVYVFVSRSBOT1JNQUxJWkFUSU9OICovXHJcblx0YXNzaWduVVZzKGdlb21ldHJ5KSB7XHJcblxyXG5cdCAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKTtcclxuXHJcblx0ICAgIGxldCBtYXggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXg7XHJcblx0ICAgIGxldCBtaW4gPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW47XHJcblxyXG5cdCAgICBsZXQgb2Zmc2V0ICA9IG5ldyBUSFJFRS5WZWN0b3IzKDAgLSBtaW4ueCwgMCAtIG1pbi55LCAwIC0gbWluLnopO1xyXG5cdCAgICBsZXQgcmFuZ2UgICA9IG5ldyBUSFJFRS5WZWN0b3IzKG1heC54IC0gbWluLngsIG1heC55IC0gbWluLnksIG1heC56IC0gbWluLnopO1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXSA9IFtdO1xyXG5cclxuXHQgICAgbGV0IGZhY2VzID0gZ2VvbWV0cnkuZmFjZXM7XHJcblxyXG5cdCAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmZhY2VzLmxlbmd0aCA7IGkrKykge1xyXG5cclxuXHQgICAgICBsZXQgdjEgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5hXTtcclxuXHQgICAgICBsZXQgdjIgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5iXTtcclxuXHQgICAgICBsZXQgdjMgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5jXTtcclxuXHJcblx0ICAgICAgaWYodjEueCA9PT0gdjIueCAmJiB2Mi54ID09PSB2My54KSB7XHJcblx0XHQgICAgICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdLnB1c2goW1xyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2MS56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYxLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2Mi56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYyLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2My56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYzLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApXHJcblx0XHQgICAgICBdKTtcclxuXHQgICAgICB9IGVsc2UgaWYodjEueSA9PT0gdjIueSAmJiB2Mi55ID09PSB2My55KSB7XHJcblx0XHRcdCAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2MS56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2Mi56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2My56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjEueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjIueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjMueSArIG9mZnNldC55ICkgLyByYW5nZS55IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZ2VvbWV0cnkudXZzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsb2NrID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGhlaWdodCwgd2lkdGgsIGRlcHRoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGhlaWdodCwgd2lkdGgsIGRlcHRoKTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIGNvbmUpIHtcclxuXHJcblx0XHRsZXQgaW5zdGFuY2UsIGdlb21ldHJ5LCBtZXNoLCBjb250YWluZXI7XHJcblxyXG5cdFx0Y29udGFpbmVyID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRpZih0cnVlID09PSBjb25lKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoZGVwdGgsIDIpO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoKHdpZHRoIC8gMikgLSBkZXB0aCwgKGhlaWdodCAvIDIpICsgMSwgMCk7XHJcblxyXG5cdFx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goY29udGFpbmVyKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbGFuaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2luZG93ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCB3aW5kb3dfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0d2luZG93X3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ3dpbmRvdycpO1xyXG5cdFx0d2luZG93X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KENPTlNUQU5UUy5XSU5ET1cuV0lEVEgsIENPTlNUQU5UUy5XSU5ET1cuSEVJR0hUKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogd2luZG93X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaW5kb3c7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRG9vciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaDtcclxuXHJcblx0XHRsZXQgZG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRkb29yX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Rvb3InKTtcclxuXHRcdGRvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Eb29yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMnO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRmFjYWRlKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxvY2ssIGJ1aWxkaW5nQmxvY2tzO1xyXG5cdFx0XHJcblx0XHRidWlsZGluZ0Jsb2NrcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDMwLCAyMCwgMzApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDE1LCAxMCwgLTE1KTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bGV0IGJsb2NrX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsb2NrX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Jsb2NrJyk7XHJcblx0XHRibG9ja190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0Jsb2Nrcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsb2NrX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IGdhbWVXaW5kb3c7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgMC4wMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMjUsIDUsIDAuMDEpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDMwLjAxLCAxNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNSwgNSwgLTMwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cdFx0XHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIDIwLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICogKGkgPT09IDMgPyAtMSA6IDEpICsgMTAgKiBpLCAxMCwgLTMwICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCArIDEwICogaSwgLTE1KTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCAoaSAlIDMgIT09IDApKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCwgLTEwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTUsIDEwICsgMTAgKiBpLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JsYW5rJyk7XHJcblx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBkb29yID0gRG9vci5jcmVhdGUoNCwgOCk7XHJcblxyXG5cdFx0ZG9vci5wb3NpdGlvbi5zZXQoOCwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZG9vcik7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDE1LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAxNSk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTE1KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDE1KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJveCA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHRcdFxyXG5cdFx0bGV0IGxvYWRlciwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDMsIDMpO1xyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRcclxuXHRcdGJveF90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdib3gyJyk7XHJcblx0XHRib3hfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJveF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBtZXNoO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQm94O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJveC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=