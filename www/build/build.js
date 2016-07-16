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
	
		$(".start").show();
		$(".start").css("margin-left", -($(window).width() / 2 + 1200));
	
		$(".title").animate({
			marginTop: "20px"
		}, 500, function () {
			$(".start").animate({
				marginLeft: "-600px"
			}, 700);
		});
	
		_ShooterUtilsConsole2.default.out("Browser " + navigator.appName + " was detected.", _ShooterConstants2.default.MESSAGE.INFO);
	
		var canvas = document.getElementById('aim');
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
	
		var console = document.getElementById('console');
	
		circle.addEventListener('click', function () {
	
			/* LOCK THE POINTER */
			(0, _ShooterUtilsRequestPointerLock2.default)();
	
			title.style.display = 'none';
			start.style.display = 'none';
			console.style.display = 'block';
	
			_ShooterGraphicsLoader2.default.loadImages(function () {
	
				_ShooterUtilsConsole2.default.hide();
	
				var gamePanel = document.getElementById('game-panel');
	
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
	
				var console = document.getElementById('console');
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
	
				var console = document.getElementById('console');
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM4MDViNTUzYjRhODZlYWI5ZjciLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMsb0JBQWM7QUFBQTs7QUFFYixRQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsUUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsUUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLFFBQUssR0FBTCxHQUFXLElBQUksS0FBSixFQUFYO0FBQ0EsUUFBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixDQUFqQjs7QUFFQSxRQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLEtBQXBCLENBQTBCLFFBQTFCLEdBQXFDLFVBQXJDO0FBQ0EsUUFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixLQUFwQixDQUEwQixJQUExQixHQUFpQyxLQUFqQztBQUNBLFFBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsS0FBcEIsQ0FBMEIsR0FBMUIsR0FBZ0MsS0FBaEM7O0FBRUEsWUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUFLLEdBQUwsQ0FBUyxVQUFuQzs7QUFFQSxPQUFJLE9BQU8sSUFBWDs7QUFFQSxJQUFDLFNBQVMsT0FBVCxHQUFtQjtBQUNuQixxREFBc0IsT0FBdEI7O0FBRUEsU0FBSyxHQUFMLENBQVMsS0FBVDs7QUFFQSxTQUFLLE1BQUw7O0FBRUEsU0FBSyxHQUFMLENBQVMsR0FBVDtBQUNBLElBUkQ7O0FBVUEsV0FBUSxHQUFSLENBQVksc0NBQVo7QUFDQTs7QUEvQkY7QUFBQTtBQUFBLDRCQWlDVTtBQUNSLFNBQUssS0FBTCxDQUFXLE1BQVg7QUFDQSxTQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBckIsRUFBNEMsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUE1QztBQUNBO0FBcENGOztBQUFBO0FBQUE7O0FBdUNBLFFBQU8sTUFBUCxHQUFnQixZQUFNOztBQUVyQixJQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsSUFBRSxRQUFGLEVBQVksR0FBWixDQUFnQixhQUFoQixFQUErQixFQUFHLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsQ0FBckIsR0FBMEIsSUFBNUIsQ0FBL0I7O0FBRUEsSUFBRSxRQUFGLEVBQVksT0FBWixDQUFvQjtBQUNuQixjQUFXO0FBRFEsR0FBcEIsRUFFRyxHQUZILEVBRVEsWUFBTTtBQUNiLEtBQUUsUUFBRixFQUFZLE9BQVosQ0FBb0I7QUFDbkIsZ0JBQVk7QUFETyxJQUFwQixFQUVHLEdBRkg7QUFHQSxHQU5EOztBQVFBLGdDQUFRLEdBQVIsQ0FBWSxhQUFhLFVBQVUsT0FBdkIsR0FBaUMsZ0JBQTdDLEVBQStELDJCQUFVLE9BQVYsQ0FBa0IsSUFBakY7O0FBRUEsTUFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFiO0FBQ0EsTUFBSSxVQUFVLE9BQU8sVUFBUCxDQUFrQixJQUFsQixDQUFkOztBQUVBLFNBQU8sS0FBUCxHQUFlLEVBQWY7QUFDQSxTQUFPLE1BQVAsR0FBZ0IsRUFBaEI7O0FBRUEsVUFBUSxTQUFSLEdBQW9CLEdBQXBCOztBQUVBLFVBQVEsU0FBUjtBQUNBLFVBQVEsTUFBUixDQUFlLEVBQWYsRUFBbUIsQ0FBbkI7QUFDQSxVQUFRLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLENBQW5CO0FBQ0EsVUFBUSxNQUFSO0FBQ0EsVUFBUSxTQUFSO0FBQ0EsVUFBUSxNQUFSLENBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUNBLFVBQVEsTUFBUixDQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFDQSxVQUFRLE1BQVI7QUFDQSxVQUFRLFNBQVI7QUFDQSxVQUFRLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLEVBQW5CO0FBQ0EsVUFBUSxNQUFSLENBQWUsRUFBZixFQUFtQixFQUFuQjtBQUNBLFVBQVEsTUFBUjtBQUNBLFVBQVEsU0FBUjtBQUNBLFVBQVEsTUFBUixDQUFlLEVBQWYsRUFBbUIsRUFBbkI7QUFDQSxVQUFRLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLEVBQW5CO0FBQ0EsVUFBUSxNQUFSOztBQUVBLE1BQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLE1BQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLE1BQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjs7QUFFQSxNQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWQ7O0FBRUEsU0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNOzs7QUFHdEM7O0FBRUEsU0FBTSxLQUFOLENBQVksT0FBWixHQUFzQixNQUF0QjtBQUNBLFNBQU0sS0FBTixDQUFZLE9BQVosR0FBc0IsTUFBdEI7QUFDQSxXQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCOztBQUVBLG1DQUFPLFVBQVAsQ0FBa0IsWUFBTTs7QUFFdkIsa0NBQVEsSUFBUjs7QUFFQSxRQUFJLFlBQVksU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQWhCOztBQUVBLGNBQVUsS0FBVixDQUFnQixPQUFoQixHQUEwQixPQUExQjs7O0FBR0EsUUFBTSxhQUFhLElBQUksUUFBUSxJQUFaLEVBQW5CO0FBRUEsSUFYRDtBQVlBLEdBckJEO0FBc0JBLEVBcEVELEM7Ozs7Ozs7O0FDeERBLFFBQU8sT0FBUCxHQUFrQixnQkFBZ0IsT0FBTyxPQUF4QixHQUFtQyxFQUFuQyxHQUF3QyxPQUF6RDs7QUFFQSxRQUFPLE9BQVAsQ0FBZSxTQUFmLEdBQTJCLFVBQVUsU0FBVixFQUFxQjtBQUM1QyxTQUFJLFFBQVEsVUFBVSxLQUFWLENBQWdCLEdBQWhCLENBQVo7U0FDSSxTQUFTLE9BRGI7O0FBR0EsU0FBSSxjQUFjLE1BQU0sQ0FBTixDQUFsQixFQUE0QjtBQUN4QixpQkFBUSxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQVI7QUFDSDs7QUFOMkM7QUFBQTtBQUFBOztBQUFBO0FBUTVDLDhCQUFzQixLQUF0Qiw4SEFBNkI7QUFBQSxpQkFBckIsVUFBcUI7O0FBQ3pCLGlCQUFJLGdCQUFnQixPQUFPLE9BQU8sVUFBUCxDQUEzQixFQUErQztBQUMzQyx3QkFBTyxVQUFQLElBQXFCLEVBQXJCO0FBQ0g7QUFDRCxzQkFBUyxPQUFPLFVBQVAsQ0FBVDtBQUNIO0FBYjJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZTVDLFlBQU8sTUFBUDtBQUNILEVBaEJELEM7Ozs7OztBQ0ZBOzs7OztBQUVBLFNBQVEsU0FBUixHQUFvQjs7QUFFbkIsVUFBUTtBQUNQLFlBQVMsRUFERjtBQUVQLGlCQUFjLE9BQU8sVUFBUCxHQUFvQixPQUFPLFdBRmxDO0FBR1AsU0FBTSxDQUhDO0FBSVAsUUFBSztBQUpFLEdBRlc7O0FBU25CLFdBQVM7QUFDUixTQUFNLENBREU7QUFFUixXQUFRLENBRkE7QUFHUixVQUFPO0FBSEMsR0FUVTs7QUFlbkIsVUFBUTtBQUNQLFVBQU8sZUFEQTtBQUVQLFNBQU0sY0FGQztBQUdQLFNBQU0sY0FIQztBQUlQLFNBQU0sY0FKQztBQUtQLFVBQU8sZUFMQTtBQU1QLGNBQVcsbUJBTko7QUFPUCxZQUFTLGlCQVBGO0FBUVAsVUFBTyxlQVJBO0FBU1AsU0FBTSxjQVRDO0FBVVAsV0FBUTtBQVZELEdBZlc7O0FBNEJuQixRQUFNOztBQUVMLE1BQUcsRUFGRTtBQUdMLE1BQUcsRUFIRTtBQUlMLE1BQUcsRUFKRTtBQUtMLE1BQUcsRUFMRTs7QUFPTCxhQUFVLEVBUEw7QUFRTCxlQUFZLEVBUlA7QUFTTCxlQUFZLEVBVFA7QUFVTCxnQkFBYSxFQVZSOztBQVlMLGVBQVk7QUFaUCxHQTVCYTs7QUEyQ25CLGdCQUFjLEtBM0NLOztBQTZDbkIsVUFBUTtBQUNQLFdBQVEsQ0FERDtBQUVQLGtCQUFlLEdBRlI7QUFHUCxtQkFBZ0I7QUFIVCxHQTdDVzs7QUFtRG5CLFdBQVMsRUFuRFU7O0FBcURuQixTQUFPO0FBQ04sVUFBTyxJQUREO0FBRU4sV0FBUSxJQUZGO0FBR04sbUJBQWdCLEVBSFY7QUFJTixvQkFBaUI7QUFKWCxHQXJEWTs7QUE0RG5CLFVBQVE7QUFDUCxXQUFRLElBREQ7QUFFUCxXQUFRLENBRkQ7QUFHUCxvQkFBaUIsRUFIVjtBQUlQLFVBQU87QUFKQSxHQTVEVzs7QUFtRW5CLFVBQVE7QUFDUCxVQUFPLENBREE7QUFFUCxXQUFRO0FBRkQsR0FuRVc7O0FBd0VuQixlQUFhO0FBQ1osVUFBTyxFQURLO0FBRVosV0FBUSxFQUZJO0FBR1osVUFBTztBQUhLLEdBeEVNOztBQThFbkIsZ0JBQWM7QUFDYixVQUFPLEVBRE07QUFFYixXQUFRLEVBRks7QUFHYixVQUFPO0FBSE0sR0E5RUs7O0FBb0ZuQixhQUFXO0FBQ1YsV0FBUSxJQURFO0FBRVYsbUJBQWdCLEVBRk47QUFHVixvQkFBaUI7QUFIUCxHQXBGUTs7QUEwRm5CLGdCQUFjO0FBQ2IsVUFBTyxJQURNO0FBRWIsV0FBUSxHQUZLO0FBR2IsVUFBTztBQUhNLEdBMUZLOztBQWdHbkIsZUFBYTtBQUNaLE1BQUcsQ0FBQyxFQURRO0FBRVosTUFBRztBQUZTLEdBaEdNOztBQXFHbkIsYUFBVztBQUNWLE1BQUcsR0FETztBQUVWLE1BQUcsQ0FBQztBQUZNO0FBckdRLEVBQXBCOzttQkEyR2UsUUFBUSxTOzs7Ozs7QUM3R3ZCOzs7Ozs7OztBQUlBOzs7Ozs7OztBQUZBLFNBQVEsU0FBUixDQUFrQixlQUFsQjs7QUFJQSxTQUFRLEtBQVIsQ0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFFWSxNQUZaLEVBRW9CLElBRnBCLEVBRTBCOztBQUV4QixXQUFPLFFBQVEsMkJBQVUsT0FBVixDQUFrQixJQUFqQzs7QUFFQSxRQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxRQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVg7O0FBRUEsU0FBSyxTQUFMLEdBQWlCLFFBQVEsTUFBekI7O0FBRUEsUUFBRywyQkFBVSxPQUFWLENBQWtCLElBQWxCLEtBQTJCLElBQTlCLEVBQW9DO0FBQ25DLFVBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsb0JBQW5CO0FBQ0EsS0FGRCxNQUVPLElBQUcsMkJBQVUsT0FBVixDQUFrQixNQUFsQixLQUE2QixJQUFoQyxFQUFzQztBQUM1QyxVQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLHFCQUFuQjtBQUNBLEtBRk0sTUFFQTtBQUNOLFVBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsbUJBQW5CO0FBQ0E7O0FBRUQsWUFBUSxXQUFSLENBQW9CLElBQXBCO0FBQ0E7QUFwQkY7QUFBQTtBQUFBLDBCQXNCZTs7QUFFYixRQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWQ7O0FBRUEsWUFBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixNQUF4QjtBQUNBO0FBM0JGOztBQUFBO0FBQUE7O21CQThCZSxRQUFRLEtBQVIsQ0FBYyxPOzs7Ozs7QUNwQzdCOzs7OztBQUVBLFNBQVEsU0FBUixDQUFrQixlQUFsQjs7QUFFQSxTQUFRLEtBQVIsQ0FBYyxxQkFBZCxHQUF1QyxZQUFNO0FBQzVDLFNBQVEsT0FBTyxxQkFBUCxJQUNOLE9BQU8sMkJBREQsSUFFTixPQUFPLHdCQUZELElBR04sT0FBTyxzQkFIRCxJQUlBLE9BQU8sdUJBSlAsSUFLTixVQUFTLFFBQVQsRUFBbUI7QUFDbEIsVUFBTyxVQUFQLENBQWtCLFFBQWxCLEVBQTRCLE9BQU8sRUFBbkM7QUFDQSxHQVBIO0FBUUEsRUFUcUMsRUFBdEM7O21CQVdlLFFBQVEsS0FBUixDQUFjLHFCOzs7Ozs7QUNmN0I7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7OztBQUhBLFNBQVEsU0FBUixDQUFrQixlQUFsQjs7QUFLQSxTQUFRLEtBQVIsQ0FBYyxrQkFBZCxHQUFtQyxZQUFNOztBQUV4QyxPQUFJLGtCQUFrQix3QkFBd0IsUUFBeEIsSUFDZiwyQkFBMkIsUUFEWixJQUVmLDhCQUE4QixRQUZyQzs7QUFJQSxPQUFHLGVBQUgsRUFBb0I7QUFBQTs7QUFFbkIscUNBQVEsR0FBUixDQUFZLCtCQUFaLEVBQTZDLDJCQUFVLE9BQVYsQ0FBa0IsSUFBL0Q7O0FBRUEsV0FBSSxPQUFPLFNBQVMsSUFBcEI7O0FBRUEsV0FBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQsRUFBVzs7QUFFNUIsY0FBSyxrQkFBTCxHQUEwQixLQUFLLGtCQUFMLElBQ2xCLEtBQUsscUJBRGEsSUFFbEIsS0FBSyx3QkFGYjs7QUFJQSxjQUFLLGtCQUFMO0FBRUEsUUFSRDs7QUFVQSxZQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFdBQS9CLEVBQTRDLEtBQTVDO0FBaEJtQjtBQWtCbkIsSUFsQkQsTUFrQk87QUFDTixtQ0FBUSxHQUFSLENBQVksZ0RBQVosRUFBOEQsMkJBQVUsT0FBVixDQUFrQixLQUFoRjtBQUNBO0FBQ0QsRUEzQkQ7O21CQTZCZSxRQUFRLEtBQVIsQ0FBYyxrQjs7Ozs7O0FDcEM3Qjs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBRkEsU0FBUSxTQUFSLENBQWtCLHFCQUFsQjs7QUFJQSxTQUFRLFdBQVIsQ0FBb0IsZ0JBQXBCO0FBQUE7O0FBRUMsa0JBQVksTUFBWixFQUFvQixRQUFwQixFQUE4QjtBQUFBOztBQUFBOztBQUc3QixTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFNBQVMsUUFBekI7QUFKNkI7QUFLN0I7O0FBUEY7QUFBQTtBQUFBLGtDQVNnQjtBQUFBOztBQUVkLFNBQUssY0FBTCxHQUFzQixZQUFNOztBQUUzQixZQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLE9BQU8sVUFBUCxHQUFvQixPQUFPLFdBQWhEO0FBQ0EsWUFBSyxNQUFMLENBQVksc0JBQVo7O0FBRUEsWUFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixPQUFPLFVBQTdCLEVBQXlDLE9BQU8sV0FBaEQ7QUFDQSxLQU5EOztBQVFBLFFBQUksT0FBTyxJQUFYOztBQUVBLFdBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQyxLQUFELEVBQVc7QUFBRSxZQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFBNkIsS0FBNUUsRUFBOEUsS0FBOUU7O0FBRUEsYUFBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQyxLQUFELEVBQVc7QUFBRSxZQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFBNkIsS0FBeEYsRUFBMEYsS0FBMUY7QUFDQSxhQUFTLGdCQUFULENBQTBCLHFCQUExQixFQUFpRCxVQUFDLEtBQUQsRUFBVztBQUFFLFlBQUssY0FBTCxDQUFvQixLQUFwQjtBQUE2QixLQUEzRixFQUE2RixLQUE3RjtBQUNBLGFBQVMsZ0JBQVQsQ0FBMEIsd0JBQTFCLEVBQW9ELFVBQUMsS0FBRCxFQUFXO0FBQUUsWUFBSyxjQUFMLENBQW9CLEtBQXBCO0FBQTZCLEtBQTlGLEVBQWdHLEtBQWhHO0FBQ0EsYUFBUyxnQkFBVCxDQUEwQixvQkFBMUIsRUFBZ0QsVUFBQyxLQUFELEVBQVc7QUFBRSxZQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFBNkIsS0FBMUYsRUFBNEYsS0FBNUY7QUFDQTtBQTNCRjtBQUFBO0FBQUEsMEJBNkJlLE1BN0JmLEVBNkJ1QixRQTdCdkIsRUE2QmlDOztBQUUvQixRQUFJLGFBQWEsSUFBSSxRQUFRLFdBQVIsQ0FBb0IsZ0JBQXhCLENBQXlDLE1BQXpDLEVBQWlELFFBQWpELENBQWpCOztBQUVBLFdBQU8sVUFBUDtBQUNBO0FBbENGOztBQUFBO0FBQUE7O21CQXFDZSxRQUFRLFdBQVIsQ0FBb0IsZ0I7Ozs7OztBQzNDbkM7Ozs7Ozs7Ozs7QUFFQSxTQUFRLFNBQVIsQ0FBa0IscUJBQWxCOztBQUVBLFNBQVEsV0FBUixDQUFvQixrQkFBcEI7QUFFQyxvQkFBYztBQUFBOztBQUViLFFBQUssWUFBTDs7QUFFQSxXQUFRLEdBQVIsQ0FBWSxnRUFBWjtBQUNBOztBQVBGO0FBQUE7QUFBQSxrQ0FTZ0IsQ0FBRztBQVRuQjtBQUFBO0FBQUEsa0NBVWdCLENBQUc7QUFWbkI7O0FBQUE7QUFBQTs7bUJBYWUsUUFBUSxXQUFSLENBQW9CLGtCOzs7Ozs7QUNqQm5DOzs7Ozs7Ozs7O0FBRUEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFFQSxTQUFRLFFBQVIsQ0FBaUIsUUFBakI7QUFFQyxvQkFBYztBQUFBOztBQUViLFFBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sYUFBVixFQUFoQjtBQUNBLFFBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBTyxVQUE3QixFQUF5QyxPQUFPLFdBQWhEO0FBQ0EsWUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUFLLFFBQUwsQ0FBYyxVQUF4Qzs7QUFFQSxXQUFRLEdBQVIsQ0FBWSxpREFBWjtBQUNBOztBQVRGO0FBQUE7QUFBQSwwQkFXUSxLQVhSLEVBV2UsTUFYZixFQVd1QjtBQUNyQixTQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXNCLEtBQXRCLEVBQTZCLE1BQTdCO0FBQ0E7QUFiRjs7QUFBQTtBQUFBOzttQkFpQmUsUUFBUSxRQUFSLENBQWlCLFE7Ozs7OztBQ3JCaEM7Ozs7Ozs7O0FBSUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7Ozs7O0FBWkEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFjQSxTQUFRLFFBQVIsQ0FBaUIsS0FBakI7QUFFQyxxQkFBYztBQUFBOztBQUViLFVBQUssS0FBTCxHQUFhLElBQUksTUFBTSxLQUFWLEVBQWI7O0FBRUEsVUFBSyxNQUFMLEdBQWMsb0NBQVcsS0FBSyxLQUFoQixDQUFkO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEtBQUssTUFBTCxDQUFZLFdBQVosRUFBZjs7QUFFQSxVQUFLLGlCQUFMLEdBQXlCLHdEQUF6QjtBQUNBLFVBQUssa0JBQUwsR0FBMEIseURBQTFCOztBQUVBLFVBQUssV0FBTCxDQUFpQixPQUFqQixFQUEwQixJQUFJLE1BQU0sT0FBVixDQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixDQUFDLEVBQTNCLENBQTFCO0FBQ0EsVUFBSyxXQUFMLENBQWlCLE9BQWpCLEVBQTBCLElBQUksTUFBTSxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLENBQUMsR0FBNUIsQ0FBMUIsRUFBNEQsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsS0FBSyxFQUFMLEdBQVUsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBNUQ7O0FBRUEsVUFBSyxXQUFMLENBQWlCLFFBQWpCLEVBQTJCLElBQUksTUFBTSxPQUFWLENBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQUMsRUFBM0IsQ0FBM0I7QUFDQSxVQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkIsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBQyxFQUE1QixDQUEzQixFQUE0RCxJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixLQUFLLEVBQUwsR0FBVSxDQUEvQixFQUFrQyxDQUFsQyxDQUE1RDtBQUNBLFVBQUssV0FBTCxDQUFpQixRQUFqQixFQUEyQixJQUFJLE1BQU0sT0FBVixDQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQixDQUEzQixFQUEwRCxJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFDLEtBQUssRUFBTixHQUFXLENBQWhDLEVBQW1DLENBQW5DLENBQTFEO0FBQ0EsVUFBSyxXQUFMLENBQWlCLFFBQWpCLEVBQTJCLElBQUksTUFBTSxPQUFWLENBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLENBQTNCO0FBQ0EsVUFBSyxXQUFMLENBQWlCLFFBQWpCLEVBQTJCLElBQUksTUFBTSxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLENBQTNCLEVBQTJELElBQUksTUFBTSxPQUFWLENBQWtCLENBQWxCLEVBQXFCLEtBQUssRUFBMUIsRUFBOEIsQ0FBOUIsQ0FBM0Q7O0FBRUEsU0FBSSxNQUFNLDZCQUFJLE1BQUosRUFBVjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsRUFBakIsRUFBcUIsR0FBckIsRUFBMEIsSUFBMUI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7QUFFQSxXQUFNLDZCQUFJLE1BQUosRUFBTjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsRUFBakIsRUFBcUIsR0FBckIsRUFBMEIsSUFBMUI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7OztBQUtBLFdBQU0sNkJBQUksTUFBSixFQUFOO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixDQUFDLEVBQWxCLEVBQXNCLEdBQXRCLEVBQTJCLEVBQTNCO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixDQUFqQixFQUFvQixLQUFLLEVBQUwsR0FBVSxDQUE5QixFQUFpQyxDQUFqQztBQUNBLFVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxHQUFmOztBQUVBLFdBQU0sNkJBQUksTUFBSixFQUFOO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixDQUFDLElBQWxCLEVBQXdCLEdBQXhCLEVBQTZCLEVBQTdCO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEdBQWY7O0FBRUEsV0FBTSw2QkFBSSxNQUFKLEVBQU47QUFDQSxTQUFJLFFBQUosQ0FBYSxHQUFiLENBQWlCLENBQUMsSUFBbEIsRUFBd0IsR0FBeEIsRUFBNkIsRUFBN0I7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7QUFFQSxXQUFNLDZCQUFJLE1BQUosRUFBTjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsQ0FBQyxJQUFsQixFQUF3QixHQUF4QixFQUE2QixFQUE3QjtBQUNBLFVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxHQUFmOztBQUVBLFdBQU0sNkJBQUksTUFBSixFQUFOO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixDQUFDLElBQWxCLEVBQXdCLEdBQXhCLEVBQTZCLEVBQTdCO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEdBQWY7O0FBRUEsV0FBTSw2QkFBSSxNQUFKLEVBQU47QUFDQSxTQUFJLFFBQUosQ0FBYSxHQUFiLENBQWlCLENBQUMsSUFBbEIsRUFBd0IsR0FBeEIsRUFBNkIsSUFBN0I7QUFDQSxTQUFJLFFBQUosQ0FBYSxHQUFiLENBQWlCLEtBQUssRUFBTCxHQUFVLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEdBQWY7Ozs7OztBQU1BLFdBQU0sNkJBQUksTUFBSixFQUFOO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixDQUFDLEdBQTVCO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEdBQWY7O0FBRUEsV0FBTSw2QkFBSSxNQUFKLEVBQU47QUFDQSxTQUFJLFFBQUosQ0FBYSxHQUFiLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLENBQUMsR0FBNUI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7QUFFQSxXQUFNLDZCQUFJLE1BQUosRUFBTjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsQ0FBQyxHQUE1QjtBQUNBLFVBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxHQUFmOztBQUVBLFdBQU0sNkJBQUksTUFBSixFQUFOO0FBQ0EsU0FBSSxRQUFKLENBQWEsR0FBYixDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixDQUFDLEdBQTVCO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEdBQWY7O0FBRUEsV0FBTSw2QkFBSSxNQUFKLEVBQU47QUFDQSxTQUFJLFFBQUosQ0FBYSxHQUFiLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLENBQUMsR0FBNUI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7QUFFQSxXQUFNLDZCQUFJLE1BQUosRUFBTjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsQ0FBQyxHQUE1QjtBQUNBLFNBQUksUUFBSixDQUFhLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0IsS0FBSyxFQUFMLEdBQVUsQ0FBOUIsRUFBaUMsQ0FBakM7QUFDQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7OztBQUlBLFNBQUksUUFBUSwrQkFBTSxNQUFOLEVBQVo7QUFDQSxXQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEtBQUssRUFBTCxHQUFVLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DO0FBQ0EsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEtBQWY7Ozs7QUFJQSxTQUFJLGNBQWMsSUFBSSxNQUFNLE9BQVYsRUFBbEI7O0FBRUEsaUJBQVksS0FBWixHQUFvQixnQ0FBTyxRQUFQLENBQWdCLFdBQWhCLENBQXBCO0FBQ0EsaUJBQVksV0FBWixHQUEwQixJQUExQjs7QUFFQSxTQUFJLFdBQVcsSUFBSSxNQUFNLGNBQVYsQ0FBeUIsMkJBQVUsU0FBVixDQUFvQixNQUE3QyxFQUFxRCwyQkFBVSxTQUFWLENBQW9CLGNBQXpFLEVBQXlGLDJCQUFVLFNBQVYsQ0FBb0IsZUFBN0csQ0FBZjtBQUNBLFNBQUksV0FBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLFdBQVAsRUFBb0IsVUFBVSxJQUE5QixFQUFvQyxNQUFNLE1BQU0sUUFBaEQsRUFBNUIsQ0FBZjtBQUNBLFNBQUksTUFBTSxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBVjs7QUFFQSxVQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsR0FBZjs7Ozs7O0FBTUEsV0FBTSxJQUFJLE1BQU0sV0FBVixDQUFzQiwyQkFBVSxZQUFWLENBQXVCLEtBQTdDLEVBQW9ELDJCQUFVLFlBQVYsQ0FBdUIsTUFBM0UsRUFBbUYsMkJBQVUsWUFBVixDQUF1QixLQUExRyxDQUFOO0FBQ0EsZ0JBQVcsSUFBSSxNQUFNLGtCQUFWLENBQTZCLEVBQUUsYUFBYSxJQUFmLEVBQXFCLFNBQVMsR0FBOUIsRUFBbUMsTUFBTSxNQUFNLFFBQS9DLEVBQTdCLENBQVg7QUFDQSxTQUFJLE9BQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxHQUFmLEVBQW9CLFFBQXBCLENBQVg7O0FBRUEsVUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLElBQWY7Ozs7QUFJQSxhQUFRLEdBQVIsQ0FBWSxnREFBWjtBQUNBOztBQXZIRjtBQUFBO0FBQUEsaUNBeUhhLElBekhiLEVBeUhtQixRQXpIbkIsRUF5SDZCLFFBekg3QixFQXlIdUM7O0FBRXJDLFdBQUksaUJBQUo7O0FBRUEsa0JBQVcsWUFBWSxJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUF2QjtBQUNBLGtCQUFXLFlBQVksSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBdkI7O0FBRUEsV0FBRyxZQUFZLElBQWYsRUFBcUI7O0FBRXBCLG9CQUFXLEtBQUssaUJBQUwsQ0FBdUIsS0FBdkIsQ0FBNkIsUUFBN0IsRUFBdUMsUUFBdkMsQ0FBWDtBQUNBLGNBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxRQUFmO0FBQ0Esb0JBQVcsSUFBSSxNQUFNLFdBQVYsQ0FBc0IsMkJBQVUsV0FBVixDQUFzQixLQUE1QyxFQUFtRCwyQkFBVSxXQUFWLENBQXNCLE1BQXpFLEVBQWlGLDJCQUFVLFdBQVYsQ0FBc0IsS0FBdkcsQ0FBWDtBQUVBLFFBTkQsTUFNTzs7QUFFTixvQkFBVyxLQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLFFBQTlCLEVBQXdDLFFBQXhDLENBQVg7QUFDQSxjQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsUUFBZjtBQUNBLG9CQUFXLElBQUksTUFBTSxXQUFWLENBQXNCLDJCQUFVLFlBQVYsQ0FBdUIsS0FBN0MsRUFBb0QsMkJBQVUsWUFBVixDQUF1QixNQUEzRSxFQUFtRiwyQkFBVSxZQUFWLENBQXVCLEtBQTFHLENBQVg7QUFFQTs7QUFFRCxXQUFJLFdBQVcsSUFBSSxNQUFNLGtCQUFWLENBQTZCLEVBQUUsYUFBYSxJQUFmLEVBQXFCLFNBQVMsR0FBOUIsRUFBN0IsQ0FBZjtBQUNBLFdBQUksT0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBWDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQVMsQ0FBM0IsRUFBOEIsU0FBUyxDQUF2QyxFQUEwQyxTQUFTLENBQW5EO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFTLENBQTNCLEVBQThCLFNBQVMsQ0FBdkMsRUFBMEMsU0FBUyxDQUFuRDs7QUFFQSxZQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsSUFBZjtBQUNBO0FBckpGO0FBQUE7QUFBQSw4QkF1SlU7QUFDUixZQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLEtBQUssS0FBeEI7QUFDQTtBQXpKRjtBQUFBO0FBQUEsZ0NBMkpZO0FBQ1YsY0FBTyxLQUFLLEtBQVo7QUFDQTtBQTdKRjtBQUFBO0FBQUEsaUNBK0phO0FBQ1gsY0FBTyxLQUFLLE1BQUwsQ0FBWSxTQUFaLEVBQVA7QUFDQTtBQWpLRjs7QUFBQTtBQUFBOzttQkFvS2UsUUFBUSxRQUFSLENBQWlCLEs7Ozs7OztBQ3BMaEM7Ozs7Ozs7O0FBSUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0FBUEEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFTQSxTQUFRLFFBQVIsQ0FBaUIsTUFBakI7QUFFQyxtQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBRWxCLFVBQUssT0FBTCxHQUFlLEVBQWY7O0FBRUEsVUFBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQSxVQUFLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxVQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxVQUFLLFNBQUwsR0FBaUIsS0FBakI7O0FBRUEsVUFBSyxPQUFMLEdBQWUsS0FBZjtBQUNBLFVBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxVQUFLLGlCQUFMLEdBQXlCLEtBQUssRUFBTCxHQUFVLENBQW5DOztBQUVBLFVBQUssTUFBTCxHQUFjLElBQUksTUFBTSxpQkFBVixDQUE0QiwyQkFBVSxNQUFWLENBQWlCLE9BQTdDLEVBQXNELDJCQUFVLE1BQVYsQ0FBaUIsWUFBdkUsRUFBcUYsMkJBQVUsTUFBVixDQUFpQixJQUF0RyxFQUE0RywyQkFBVSxNQUFWLENBQWlCLEdBQTdILENBQWQ7QUFDQSxVQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLEdBQXJCLENBQXlCLDJCQUFVLFNBQVYsQ0FBb0IsQ0FBN0MsRUFBZ0QsMkJBQVUsTUFBVixDQUFpQixNQUFqRSxFQUF5RSwyQkFBVSxTQUFWLENBQW9CLENBQTdGO0FBQ0EsVUFBSyxNQUFMLENBQVksTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUFDLENBQTFCOztBQUVBLFVBQUssa0JBQUwsR0FBMEIsK0NBQW1CLE1BQW5CLENBQTBCLElBQTFCLENBQTFCO0FBQ0EsVUFBSyxlQUFMLEdBQXVCLDRDQUFnQixNQUFoQixDQUF1QixJQUF2QixDQUF2Qjs7QUFFQSxhQUFRLEdBQVIsQ0FBWSxpREFBWjtBQUNBOztBQXpCRjtBQUFBO0FBQUEsNEJBMkJRLEtBM0JSLEVBMkJlOztBQUViLFlBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLEtBQUssT0FBTCxDQUFhLE1BQWhDLEVBQXdDLEVBQUUsQ0FBMUMsRUFBNkM7QUFDNUMsY0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixNQUFoQjtBQUNBOztBQUVELFdBQUksaUJBQWlCLEtBQUssTUFBTCxDQUFZLGlCQUFaLEdBQWdDLFNBQWhDLEdBQTRDLGNBQTVDLENBQTJELDJCQUFVLE1BQVYsQ0FBaUIsY0FBNUUsQ0FBckI7O0FBRUEsV0FBSSxRQUFRLElBQUksTUFBTSxPQUFWLEVBQVo7QUFDQSxhQUFNLFlBQU4sQ0FBbUIsY0FBbkIsRUFBbUMsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBbkMsRUFBK0QsU0FBL0QsR0FBMkUsY0FBM0UsQ0FBMEYsMkJBQVUsTUFBVixDQUFpQixjQUEzRzs7QUFFQSxXQUFJLFdBQVcsSUFBSSxNQUFNLE9BQVYsRUFBZjtBQUNBLGdCQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBN0IsRUFBeUQsU0FBekQsR0FBcUUsY0FBckUsQ0FBb0YsMkJBQVUsTUFBVixDQUFpQixjQUFyRzs7QUFFQSxXQUFJLFVBQVUsU0FBUyxLQUFULEdBQWlCLE1BQWpCLEVBQWQ7QUFDQSxXQUFJLE9BQU8sTUFBTSxLQUFOLEdBQWMsTUFBZCxFQUFYOztBQUVBLFdBQUcsQ0FBQyxLQUFLLE9BQU4sSUFBaUIsQ0FBQyxLQUFLLE9BQTFCLEVBQW1DOztBQUVsQyxjQUFLLFlBQUwsR0FBb0IsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBcEI7O0FBRUEsYUFBRyxLQUFLLFdBQVIsRUFBcUI7QUFDcEIsZ0JBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixPQUF0QjtBQUNBOztBQUVELGFBQUcsS0FBSyxRQUFSLEVBQWtCO0FBQ2pCLGdCQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsSUFBdEI7QUFDQTs7QUFFRCxhQUFHLEtBQUssWUFBUixFQUFzQjtBQUNyQixnQkFBSyxZQUFMLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0E7O0FBRUQsYUFBRyxLQUFLLFNBQVIsRUFBbUI7QUFDbEIsZ0JBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixLQUF0QjtBQUNBO0FBRUQ7O0FBRUQsV0FBRyxLQUFLLGVBQUwsQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxZQUFMLENBQWtCLEtBQWxCLEVBQTVCLENBQUgsRUFBMkQ7QUFDMUQsY0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixDQUFyQixJQUEwQixLQUFLLFlBQUwsQ0FBa0IsQ0FBNUM7QUFDQSxjQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLENBQXJCLElBQTBCLEtBQUssWUFBTCxDQUFrQixDQUE1QztBQUNBOztBQUVELFlBQUssV0FBTCxDQUFpQixLQUFqQjs7QUFFQSxXQUFHLEtBQUssT0FBUixFQUFpQjs7QUFFaEIsYUFBSSxjQUFjLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsS0FBckIsRUFBbEI7O0FBRUEscUJBQVksQ0FBWixJQUFpQixDQUFqQixDOztBQUVBLGFBQUksTUFBTSxJQUFJLE1BQU0sU0FBVixDQUFvQixXQUFwQixFQUFpQyxJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFqQyxDQUFWO0FBQ0EsYUFBSSxtQkFBbUIsSUFBSSxnQkFBSixDQUFxQixNQUFNLFFBQTNCLENBQXZCOztBQUVBLGFBQUcsS0FBSyxpQkFBTCxJQUEwQixDQUExQixJQUNELGlCQUFpQixNQUFqQixHQUEwQixDQUExQixJQUErQixpQkFBaUIsQ0FBakIsRUFBb0IsUUFBcEIsR0FBK0IsSUFEaEUsRUFDdUU7O0FBRXRFLGdCQUFLLE9BQUwsR0FBZSxLQUFmO0FBQ0EsZ0JBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxnQkFBSyxpQkFBTCxHQUF5QixDQUF6QjtBQUVBLFVBUEQsTUFPTzs7QUFFTixlQUFJLFlBQVksMkJBQVUsTUFBVixDQUFpQixhQUFqQixHQUFpQyxLQUFLLEdBQUwsQ0FBUyxLQUFLLGlCQUFkLENBQWpEO0FBQ0EsZ0JBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsQ0FBckIsSUFBMEIsU0FBMUI7QUFDQSxnQkFBSyxpQkFBTCxJQUEwQixLQUFLLEVBQUwsR0FBVSwyQkFBVSxPQUE5QztBQUVBO0FBQ0Q7O0FBRUQsV0FBRyxLQUFLLE9BQVIsRUFBaUI7O0FBRWhCLGFBQUksZUFBYyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLEtBQXJCLEVBQWxCO0FBQ0EsYUFBSSxPQUFNLElBQUksTUFBTSxTQUFWLENBQW9CLFlBQXBCLEVBQWlDLElBQUksTUFBTSxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQUMsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBakMsQ0FBVjtBQUNBLGFBQUksb0JBQW1CLEtBQUksZ0JBQUosQ0FBcUIsTUFBTSxRQUEzQixDQUF2Qjs7QUFFQSxhQUFHLGtCQUFpQixNQUFqQixHQUEwQixDQUExQixJQUErQixrQkFBaUIsQ0FBakIsRUFBb0IsUUFBcEIsR0FBK0IsMkJBQVUsTUFBVixDQUFpQixNQUFsRixFQUEwRjs7QUFFekYsZ0JBQUssT0FBTCxHQUFlLEtBQWY7QUFDQSxnQkFBSyxpQkFBTCxHQUF5QixLQUFLLEVBQUwsR0FBVSxDQUFuQzs7QUFFQSxnQkFBSyxNQUFMLENBQVksUUFBWixDQUFxQixDQUFyQixHQUF5QixLQUFLLEdBQUwsQ0FBUyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLENBQTlCLEVBQWlDLDJCQUFVLE1BQVYsQ0FBaUIsTUFBbEQsQ0FBekI7QUFFQSxVQVBELE1BT087O0FBRU4sZUFBSSxhQUFZLDJCQUFVLE1BQVYsQ0FBaUIsYUFBakIsR0FBaUMsS0FBSyxHQUFMLENBQVMsS0FBSyxpQkFBZCxDQUFqRDtBQUNBLGdCQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLENBQXJCLElBQTBCLFVBQTFCO0FBQ0EsZ0JBQUssaUJBQUwsSUFBMEIsS0FBSyxFQUFMLEdBQVUsMkJBQVUsT0FBOUM7O0FBRUEsZ0JBQUssaUJBQUwsR0FBeUIsS0FBSyxHQUFMLENBQVMsS0FBSyxpQkFBZCxFQUFpQyxLQUFLLEVBQUwsR0FBVSxDQUEzQyxDQUF6QjtBQUVBO0FBQ0Q7QUFDRDtBQXpIRjtBQUFBO0FBQUEscUNBMkhpQixLQTNIakIsRUEySHdCLFNBM0h4QixFQTJIbUM7O0FBRWpDLGlCQUFVLFNBQVY7O0FBRUEsV0FBSSxNQUFNLElBQUksTUFBTSxTQUFWLENBQW9CLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsS0FBckIsRUFBcEIsRUFBa0QsU0FBbEQsQ0FBVjtBQUNBLFdBQUksbUJBQW1CLElBQUksZ0JBQUosQ0FBcUIsTUFBTSxRQUEzQixDQUF2Qjs7QUFFQSxXQUFJLFFBQVEsQ0FBQyxpQkFBaUIsTUFBbEIsSUFBNkIsaUJBQWlCLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLGlCQUFpQixDQUFqQixFQUFvQixRQUFwQixHQUErQixDQUF2Rzs7QUFFQSxXQUFJLE9BQU8sSUFBSSxNQUFNLE9BQVYsRUFBWDtBQUNBLFlBQUssWUFBTCxDQUFrQixTQUFsQixFQUE2QixJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUE3QixFQUF5RCxTQUF6RDs7QUFFQSxXQUFJLFFBQVEsSUFBSSxNQUFNLE9BQVYsRUFBWjtBQUNBLGFBQU0sR0FBTixDQUFVLElBQVYsRUFBZ0IsR0FBaEIsQ0FBb0IsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixLQUFyQixFQUFwQjs7QUFFQSxZQUFLLE1BQUw7O0FBRUEsV0FBSSxPQUFPLElBQUksTUFBTSxPQUFWLEVBQVg7QUFDQSxZQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsR0FBZixDQUFtQixLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLEtBQXJCLEVBQW5COztBQUVBLGFBQU0sSUFBSSxNQUFNLFNBQVYsQ0FBb0IsS0FBcEIsRUFBMkIsU0FBM0IsQ0FBTjtBQUNBLDBCQUFtQixJQUFJLGdCQUFKLENBQXFCLE1BQU0sUUFBM0IsQ0FBbkI7O0FBRUEsV0FBSSxRQUFRLENBQUMsaUJBQWlCLE1BQWxCLElBQTZCLGlCQUFpQixNQUFqQixHQUEwQixDQUExQixJQUErQixpQkFBaUIsQ0FBakIsRUFBb0IsUUFBcEIsR0FBK0IsQ0FBdkc7O0FBRUEsYUFBTSxJQUFJLE1BQU0sU0FBVixDQUFvQixJQUFwQixFQUEwQixTQUExQixDQUFOO0FBQ0EsMEJBQW1CLElBQUksZ0JBQUosQ0FBcUIsTUFBTSxRQUEzQixDQUFuQjs7QUFFQSxXQUFJLFFBQVEsQ0FBQyxpQkFBaUIsTUFBbEIsSUFBNkIsaUJBQWlCLE1BQWpCLEdBQTBCLENBQTFCLElBQStCLGlCQUFpQixDQUFqQixFQUFvQixRQUFwQixHQUErQixDQUF2Rzs7QUFFQSxjQUFPLFNBQVMsS0FBVCxJQUFrQixLQUF6QjtBQUNBO0FBMUpGO0FBQUE7QUFBQSxpQ0E0SmEsS0E1SmIsRUE0Sm9COztBQUVsQixXQUFHLENBQUMsS0FBSyxPQUFULEVBQWtCOztBQUVqQixhQUFJLE1BQU0sSUFBSSxNQUFNLFNBQVYsQ0FBb0IsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixLQUFyQixFQUFwQixFQUFrRCxJQUFJLE1BQU0sT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQXpCLENBQWxELENBQVY7QUFDQSxhQUFJLG1CQUFtQixJQUFJLGdCQUFKLENBQXFCLE1BQU0sUUFBM0IsQ0FBdkI7O0FBRUEsYUFBRyxDQUFDLGlCQUFpQixNQUFsQixJQUE2QixpQkFBaUIsTUFBakIsR0FBMEIsQ0FBMUIsSUFBZ0MsaUJBQWlCLENBQWpCLEVBQW9CLFFBQXBCLEdBQStCLDJCQUFVLE1BQVYsQ0FBaUIsTUFBakQsR0FBMkQsSUFBMUgsRUFBaUk7QUFDaEksZ0JBQUssT0FBTCxHQUFlLElBQWY7QUFDQTtBQUNEO0FBQ0Q7QUF2S0Y7QUFBQTtBQUFBLG9DQXlLZ0I7O0FBRWQsV0FBSSxTQUFTLG9DQUFXLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsS0FBckIsRUFBWCxFQUF5QyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLEtBQXJCLEVBQXpDLEVBQXVFLEtBQUssTUFBTCxDQUFZLGlCQUFaLEVBQXZFLENBQWI7QUFDQSxZQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLE1BQWxCO0FBQ0EsWUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE9BQU8sV0FBUCxFQUFmO0FBQ0E7QUE5S0Y7QUFBQTtBQUFBLGlDQWdMYTtBQUNYLGNBQU8sS0FBSyxNQUFaO0FBQ0E7QUFsTEY7QUFBQTtBQUFBLG1DQW9MZTtBQUNiLGNBQU8sS0FBSyxlQUFMLENBQXFCLFNBQXJCLEVBQVA7QUFDQTtBQXRMRjs7QUFBQTtBQUFBOzttQkF5TGUsUUFBUSxRQUFSLENBQWlCLE07Ozs7OztBQ3BNaEM7Ozs7Ozs7O0FBSUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSkEsU0FBUSxTQUFSLENBQWtCLHFCQUFsQjs7QUFNQSxTQUFRLFdBQVIsQ0FBb0Isa0JBQXBCO0FBQUE7O0FBRUMsa0JBQVksTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUduQixTQUFLLE1BQUwsR0FBYyxNQUFkO0FBSG1CO0FBSW5COztBQU5GO0FBQUE7QUFBQSxrQ0FRZ0I7QUFBQTs7QUFFZCxTQUFLLFNBQUwsR0FBaUIsVUFBQyxLQUFELEVBQVc7O0FBRTNCLGFBQU8sTUFBTSxPQUFiO0FBQ0MsV0FBSywyQkFBVSxJQUFWLENBQWUsQ0FBcEI7QUFDQSxXQUFLLDJCQUFVLElBQVYsQ0FBZSxRQUFwQjtBQUE4QjtBQUM3QixlQUFLLE1BQUwsQ0FBWSxXQUFaLEdBQTBCLElBQTFCO0FBQ0E7QUFDQTtBQUNELFdBQUssMkJBQVUsSUFBVixDQUFlLENBQXBCO0FBQ0EsV0FBSywyQkFBVSxJQUFWLENBQWUsVUFBcEI7QUFBZ0M7QUFDL0IsZUFBSyxNQUFMLENBQVksUUFBWixHQUF1QixJQUF2QjtBQUNBO0FBQ0E7QUFDRCxXQUFLLDJCQUFVLElBQVYsQ0FBZSxDQUFwQjtBQUNBLFdBQUssMkJBQVUsSUFBVixDQUFlLFVBQXBCO0FBQWdDO0FBQy9CLGVBQUssTUFBTCxDQUFZLFlBQVosR0FBMkIsSUFBM0I7QUFDQTtBQUNBO0FBQ0QsV0FBSywyQkFBVSxJQUFWLENBQWUsQ0FBcEI7QUFDQSxXQUFLLDJCQUFVLElBQVYsQ0FBZSxXQUFwQjtBQUFpQztBQUNoQyxlQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLElBQXhCO0FBQ0E7QUFDQTtBQUNELFdBQUssMkJBQVUsSUFBVixDQUFlLFVBQXBCO0FBQWdDO0FBQy9CLFlBQUcsQ0FBQyxPQUFLLE1BQUwsQ0FBWSxPQUFoQixFQUF5QjtBQUN4QixnQkFBSyxNQUFMLENBQVksT0FBWixHQUFzQixJQUF0QjtBQUNBO0FBQ0Q7QUFDQTtBQTFCRjtBQTRCQSxLQTlCRDs7QUFnQ0EsU0FBSyxPQUFMLEdBQWUsVUFBQyxLQUFELEVBQVc7O0FBRXpCLGFBQU8sTUFBTSxPQUFiO0FBQ0MsV0FBSywyQkFBVSxJQUFWLENBQWUsQ0FBcEI7QUFDQSxXQUFLLDJCQUFVLElBQVYsQ0FBZSxRQUFwQjtBQUE4QjtBQUM3QixlQUFLLE1BQUwsQ0FBWSxXQUFaLEdBQTBCLEtBQTFCO0FBQ0E7QUFDQTtBQUNELFdBQUssMkJBQVUsSUFBVixDQUFlLENBQXBCO0FBQ0EsV0FBSywyQkFBVSxJQUFWLENBQWUsVUFBcEI7QUFBZ0M7QUFDL0IsZUFBSyxNQUFMLENBQVksUUFBWixHQUF1QixLQUF2QjtBQUNBO0FBQ0E7QUFDRCxXQUFLLDJCQUFVLElBQVYsQ0FBZSxDQUFwQjtBQUNBLFdBQUssMkJBQVUsSUFBVixDQUFlLFVBQXBCO0FBQWdDO0FBQy9CLGVBQUssTUFBTCxDQUFZLFlBQVosR0FBMkIsS0FBM0I7QUFDQTtBQUNBO0FBQ0QsV0FBSywyQkFBVSxJQUFWLENBQWUsQ0FBcEI7QUFDQSxXQUFLLDJCQUFVLElBQVYsQ0FBZSxXQUFwQjtBQUFpQztBQUNoQyxlQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLEtBQXhCO0FBQ0E7QUFDQTtBQXBCRjtBQXNCQSxLQXhCRDs7QUEwQkEsUUFBSSxPQUFPLElBQVg7O0FBRUEsYUFBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDLEtBQUQsRUFBVztBQUFFLFVBQUssU0FBTCxDQUFlLEtBQWY7QUFBd0IsS0FBMUUsRUFBNEUsS0FBNUU7QUFDQSxhQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUMsS0FBRCxFQUFXO0FBQUUsVUFBSyxPQUFMLENBQWEsS0FBYjtBQUFzQixLQUF0RSxFQUF3RSxLQUF4RTtBQUNBO0FBeEVGO0FBQUE7QUFBQSwwQkEwRWUsTUExRWYsRUEwRXVCOztBQUVyQixRQUFJLGFBQWEsSUFBSSxRQUFRLFdBQVIsQ0FBb0Isa0JBQXhCLENBQTJDLE1BQTNDLENBQWpCOztBQUVBLFdBQU8sVUFBUDtBQUNBO0FBL0VGOztBQUFBO0FBQUE7O21CQWtGZSxRQUFRLFdBQVIsQ0FBb0Isa0I7Ozs7OztBQzFGbkM7Ozs7Ozs7O0FBSUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSkEsU0FBUSxTQUFSLENBQWtCLHFCQUFsQjs7QUFNQSxTQUFRLFdBQVIsQ0FBb0IsZUFBcEI7QUFBQTs7QUFFQyxtQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBR25CLFdBQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEsV0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixRQUFuQixDQUE0QixHQUE1QixDQUFnQyxDQUFoQyxFQUFtQyxDQUFuQyxFQUFzQyxDQUF0Qzs7QUFFQSxXQUFLLFdBQUwsR0FBbUIsSUFBSSxNQUFNLFFBQVYsRUFBbkI7QUFDQSxXQUFLLFdBQUwsQ0FBaUIsR0FBakI7O0FBRUEsV0FBSyxTQUFMLEdBQWlCLElBQUksTUFBTSxRQUFWLEVBQWpCO0FBQ0EsV0FBSyxTQUFMLENBQWUsR0FBZixDQUFtQixNQUFLLFdBQXhCOztBQUVBLFdBQUssSUFBTCxHQUFZLENBQUMsR0FBRCxHQUFPLEtBQUssRUFBTCxHQUFVLENBQTdCLEM7QUFibUI7QUFjbkI7O0FBaEJGO0FBQUE7QUFBQSxvQ0FrQmdCO0FBQUE7O0FBRWQsWUFBSyxXQUFMLEdBQW1CLFVBQUMsS0FBRCxFQUFXOztBQUU3QixhQUFJLFlBQVksTUFBTSxTQUFOLElBQW1CLE1BQU0sWUFBekIsSUFBeUMsTUFBTSxlQUEvQyxJQUFrRSxDQUFsRjtBQUNBLGFBQUksWUFBWSxNQUFNLFNBQU4sSUFBbUIsTUFBTSxZQUF6QixJQUF5QyxNQUFNLGVBQS9DLElBQWtFLENBQWxGOztBQUVBLGdCQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLENBQXhCLElBQTZCLFlBQVksMkJBQVUsWUFBbkQ7QUFDQSxnQkFBSyxXQUFMLENBQWlCLFFBQWpCLENBQTBCLENBQTFCLElBQStCLFlBQVksMkJBQVUsWUFBckQ7O0FBRUEsZ0JBQUssV0FBTCxDQUFpQixRQUFqQixDQUEwQixDQUExQixHQUE4QixLQUFLLEdBQUwsQ0FBVSxDQUFDLE9BQUssSUFBaEIsRUFBc0IsS0FBSyxHQUFMLENBQVUsT0FBSyxJQUFmLEVBQXFCLE9BQUssV0FBTCxDQUFpQixRQUFqQixDQUEwQixDQUEvQyxDQUF0QixDQUE5Qjs7QUFFQSxhQUFJLFlBQVksSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxDQUF6QixDQUFoQjtBQUNBLGFBQUksV0FBVyxJQUFJLE1BQU0sS0FBVixDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUF6QixDQUFmO0FBQ0EsYUFBSSxTQUFTLElBQUksTUFBTSxPQUFWLEVBQWI7O0FBRUEsa0JBQVMsR0FBVCxDQUFhLE9BQUssV0FBTCxDQUFpQixRQUFqQixDQUEwQixDQUF2QyxFQUEwQyxPQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLENBQWxFLEVBQXFFLENBQXJFOztBQUVBLGdCQUFPLElBQVAsQ0FBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWtDLFFBQWxDOztBQUVBLGdCQUFPLENBQVAsSUFBWSxPQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLFFBQW5CLENBQTRCLENBQXhDO0FBQ0EsZ0JBQU8sQ0FBUCxJQUFZLE9BQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsUUFBbkIsQ0FBNEIsQ0FBeEM7QUFDQSxnQkFBTyxDQUFQLElBQVksT0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixRQUFuQixDQUE0QixDQUF4Qzs7QUFFQSxnQkFBSyxNQUFMLENBQVksTUFBWixDQUFtQixNQUFuQixDQUEwQixNQUExQjtBQUVBLFFBeEJEOztBQTBCQSxZQUFLLE9BQUwsR0FBZSxVQUFDLEtBQUQsRUFBVztBQUN6QixnQkFBSyxNQUFMLENBQVksWUFBWjtBQUNBLFFBRkQ7O0FBSUEsV0FBSSxPQUFPLElBQVg7O0FBRUEsZ0JBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQyxLQUFELEVBQVc7QUFBRSxjQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFBMEIsUUFBOUUsRUFBZ0YsS0FBaEY7QUFDQSxnQkFBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDLEtBQUQsRUFBVztBQUFFLGNBQUssT0FBTCxDQUFhLEtBQWI7QUFBc0IsUUFBdEUsRUFBd0UsS0FBeEU7QUFDQTtBQXRERjtBQUFBO0FBQUEsaUNBd0RhOztBQUVYLGNBQU8sS0FBSyxTQUFaO0FBRUE7QUE1REY7QUFBQTtBQUFBLDRCQThEZSxNQTlEZixFQThEdUI7O0FBRXJCLFdBQUksYUFBYSxJQUFJLFFBQVEsV0FBUixDQUFvQixlQUF4QixDQUF3QyxNQUF4QyxDQUFqQjs7QUFFQSxjQUFPLFVBQVA7QUFDQTtBQW5FRjs7QUFBQTtBQUFBOzttQkFzRWUsUUFBUSxXQUFSLENBQW9CLGU7Ozs7OztBQzlFbkM7Ozs7Ozs7O0FBSUE7Ozs7Ozs7O0FBRkEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFJQSxTQUFRLFFBQVIsQ0FBaUIsTUFBakI7QUFFQyxtQkFBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLFNBQWhDLEVBQTJDO0FBQUE7O0FBRTFDLFVBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sZ0JBQVYsQ0FBMkIsMkJBQVUsTUFBVixDQUFpQixNQUE1QyxFQUFvRCwyQkFBVSxNQUFWLENBQWlCLE1BQXJFLEVBQTZFLDJCQUFVLE1BQVYsQ0FBaUIsTUFBOUYsRUFBc0csMkJBQVUsTUFBVixDQUFpQixlQUF2SCxDQUFoQjs7QUFFQSxVQUFLLFFBQUwsR0FBZ0IsSUFBSSxNQUFNLGlCQUFWLENBQTRCLEVBQUUsT0FBTyxPQUFULEVBQTVCLENBQWhCO0FBQ0EsVUFBSyxJQUFMLEdBQVksSUFBSSxNQUFNLElBQVYsQ0FBZSxLQUFLLFFBQXBCLEVBQThCLEtBQUssUUFBbkMsQ0FBWjs7QUFFQSxVQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEdBQW5CLENBQXVCLEtBQUssRUFBTCxHQUFVLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDOztBQUVBLFVBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sUUFBVixFQUFoQjs7QUFFQSxVQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQUssSUFBdkI7O0FBRUEsVUFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixHQUF2QixDQUEyQixTQUFTLENBQXBDLEVBQXVDLFNBQVMsQ0FBaEQsRUFBbUQsU0FBUyxDQUE1RDtBQUNBLFVBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsR0FBdkIsQ0FBMkIsU0FBUyxDQUFwQyxFQUF1QyxTQUFTLENBQWhELEVBQW1ELFNBQVMsQ0FBNUQ7O0FBRUEsVUFBSyxTQUFMLEdBQWlCLFNBQWpCOztBQUVBLFVBQUssU0FBTCxDQUFlLGNBQWYsQ0FBOEIsMkJBQVUsTUFBVixDQUFpQixLQUEvQztBQUNBOztBQXJCRjtBQUFBO0FBQUEsOEJBdUJVO0FBQ1IsWUFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixHQUF2QixDQUEyQixLQUFLLFNBQWhDO0FBQ0E7QUF6QkY7QUFBQTtBQUFBLG1DQTJCZTtBQUNiLGNBQU8sS0FBSyxRQUFaO0FBQ0E7QUE3QkY7O0FBQUE7QUFBQTs7bUJBZ0NlLFFBQVEsUUFBUixDQUFpQixNOzs7Ozs7QUN0Q2hDOzs7Ozs7OztBQUlBOzs7O0FBRUE7Ozs7Ozs7O0FBSkEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFNQSxTQUFRLFFBQVIsQ0FBaUIsS0FBakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQUVpQjs7QUFFZixXQUFJLGdCQUFnQixJQUFJLE1BQU0sT0FBVixFQUFwQjs7QUFFQSxxQkFBYyxLQUFkLEdBQXNCLGdDQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBdEI7QUFDQSxxQkFBYyxXQUFkLEdBQTRCLElBQTVCO0FBQ0EscUJBQWMsS0FBZCxHQUFzQixNQUFNLGNBQTVCO0FBQ0EscUJBQWMsS0FBZCxHQUFzQixNQUFNLGNBQTVCO0FBQ0EscUJBQWMsTUFBZCxDQUFxQixHQUFyQixDQUF5QixHQUF6QixFQUE4QixHQUE5Qjs7QUFFQSxXQUFJLFdBQVcsSUFBSSxNQUFNLGFBQVYsQ0FBd0IsMkJBQVUsS0FBVixDQUFnQixLQUF4QyxFQUErQywyQkFBVSxLQUFWLENBQWdCLE1BQS9ELEVBQXVFLDJCQUFVLEtBQVYsQ0FBZ0IsY0FBdkYsRUFBdUcsMkJBQVUsS0FBVixDQUFnQixlQUF2SCxDQUFmO0FBQ0EsV0FBSSxXQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssYUFBUCxFQUFzQixVQUFVLElBQWhDLEVBQXNDLE1BQU0sTUFBTSxRQUFsRCxFQUE1QixDQUFmO0FBQ0EsV0FBSSxXQUFXLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFmOztBQUVBLGNBQU8sUUFBUDtBQUNBO0FBakJGOztBQUFBO0FBQUE7O21CQW9CZSxRQUFRLFFBQVIsQ0FBaUIsSzs7Ozs7O0FDNUJoQzs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7OztBQUhBLFNBQVEsU0FBUixDQUFrQixrQkFBbEI7O0FBS0EsS0FBSSxTQUFTLEVBQWI7O0FBRUEsU0FBUSxRQUFSLENBQWlCLE1BQWpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw0QkFFaUIsSUFGakIsRUFFdUI7QUFDckIsV0FBTyxPQUFPLElBQVAsQ0FBUDtBQUNBO0FBSkY7QUFBQTtBQUFBLDhCQU1tQixRQU5uQixFQU02Qjs7QUFFM0IsUUFBSSxTQUFTLElBQUksTUFBTSxXQUFWLEVBQWI7O0FBRUEsUUFBSSxZQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBVTs7QUFFekIsWUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOztBQUV2QyxhQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLFVBQUMsS0FBRCxFQUFXOztBQUU1QixxQ0FBUSxHQUFSLENBQVksT0FBTyxjQUFuQixFQUFtQywyQkFBVSxPQUFWLENBQWtCLE1BQXJEOztBQUVBLGNBQU8sS0FBSyxNQUFMLENBQVksQ0FBWixFQUFlLEtBQUssTUFBTCxHQUFjLENBQTdCLENBQVAsSUFBMEMsS0FBMUM7O0FBRUE7QUFDQSxPQVBEO0FBU0EsTUFYTSxDQUFQO0FBYUEsS0FmRDs7QUFpQkEsY0FBVSwyQkFBVSxNQUFWLENBQWlCLEtBQTNCLEVBQ0MsSUFERCxDQUNNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixJQUEzQixDQUFQO0FBQTBDLEtBRHhELEVBRUMsSUFGRCxDQUVNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixJQUEzQixDQUFQO0FBQTBDLEtBRnhELEVBR0MsSUFIRCxDQUdNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixJQUEzQixDQUFQO0FBQTBDLEtBSHhELEVBSUMsSUFKRCxDQUlNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixLQUEzQixDQUFQO0FBQTJDLEtBSnpELEVBS0MsSUFMRCxDQUtNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixTQUEzQixDQUFQO0FBQStDLEtBTDdELEVBTUMsSUFORCxDQU1NLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixPQUEzQixDQUFQO0FBQTZDLEtBTjNELEVBT0MsSUFQRCxDQU9NLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixLQUEzQixDQUFQO0FBQTJDLEtBUHpELEVBUUMsSUFSRCxDQVFNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixJQUEzQixDQUFQO0FBQTBDLEtBUnhELEVBU0MsSUFURCxDQVNNLFlBQU07QUFBRSxZQUFPLFVBQVUsMkJBQVUsTUFBVixDQUFpQixNQUEzQixDQUFQO0FBQTRDLEtBVDFELEVBVUMsSUFWRCxDQVVNLFlBQU07QUFBRTtBQUFhLEtBVjNCO0FBV0E7QUF0Q0Y7O0FBQUE7QUFBQTs7bUJBeUNlLFFBQVEsUUFBUixDQUFpQixNOzs7Ozs7QUNsRGhDOzs7Ozs7OztBQUlBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBVEEsU0FBUSxTQUFSLENBQWtCLDJCQUFsQjs7QUFXQSxTQUFRLFFBQVIsQ0FBaUIsUUFBakIsQ0FBMEIsaUJBQTFCO0FBQUE7O0FBRUMscUJBQWM7QUFBQTs7QUFBQTs7QUFHYixhQUFRLEdBQVIsQ0FBWSxxRUFBWjtBQUhhO0FBSWI7O0FBTkY7QUFBQTtBQUFBLG1DQVFlOztBQUViLFdBQUksYUFBSjtXQUFVLGlCQUFWO1dBQW9CLGNBQXBCO1dBQTJCLHVCQUEzQjs7QUFFQSx3QkFBaUIsSUFBSSxNQUFNLFFBQVYsRUFBakI7O0FBRUEsZUFBUSwrQkFBTSxNQUFOLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFSO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixFQUFuQixFQUF1QixDQUF2QixFQUEwQixDQUFDLEVBQTNCO0FBQ0EsYUFBTSxZQUFOO0FBQ0Esc0JBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7O0FBRUEsZUFBUSwrQkFBTSxNQUFOLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFSO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixDQUFDLEVBQTVCO0FBQ0EsYUFBTSxZQUFOO0FBQ0Esc0JBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7O0FBRUEsZUFBUSwrQkFBTSxNQUFOLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFSO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixDQUFDLEVBQTNCO0FBQ0EsYUFBTSxZQUFOO0FBQ0Esc0JBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7O0FBRUEsV0FBSSxnQkFBZ0IsSUFBSSxNQUFNLE9BQVYsRUFBcEI7O0FBRUEscUJBQWMsS0FBZCxHQUFzQixnQ0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXRCO0FBQ0EscUJBQWMsV0FBZCxHQUE0QixJQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLE1BQWQsQ0FBcUIsR0FBckIsQ0FBeUIsRUFBekIsRUFBNkIsQ0FBN0I7O0FBRUEsWUFBSyxTQUFMLENBQWUsY0FBZjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLGFBQVAsRUFBc0IsVUFBVSxJQUFoQyxFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLGNBQWYsRUFBK0IsUUFBL0IsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCO0FBQ0E7QUEzQ0Y7QUFBQTtBQUFBLG9DQTZDZ0I7O0FBRWQsV0FBSSxtQkFBSjs7OztBQUlBLG9CQUFhLGdDQUFPLE1BQVAsRUFBYjtBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsR0FBeEIsRUFBNkIsSUFBN0IsRUFBbUMsSUFBbkM7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7QUFFQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7O0FBRUEsb0JBQWEsZ0NBQU8sTUFBUCxFQUFiO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixJQUF4QixFQUE4QixHQUE5QixFQUFtQyxJQUFuQzs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCOzs7Ozs7QUFNQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEtBQXhCLEVBQStCLEVBQS9CLEVBQW1DLENBQUMsRUFBcEM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLEtBQUssRUFBTCxHQUFVLENBQXJDLEVBQXdDLENBQXhDO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7QUFFQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEtBQXhCLEVBQStCLENBQS9CLEVBQWtDLENBQUMsRUFBbkM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLEtBQUssRUFBTCxHQUFVLENBQXJDLEVBQXdDLENBQXhDO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7QUFFQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEtBQXhCLEVBQStCLEVBQS9CLEVBQW1DLENBQUMsRUFBcEM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLEtBQUssRUFBTCxHQUFVLENBQXJDLEVBQXdDLENBQXhDO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7Ozs7O0FBTUEsb0JBQWEsZ0NBQU8sTUFBUCxFQUFiO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixDQUF4QixFQUEyQixFQUEzQixFQUErQixDQUFDLEtBQWhDO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixDQUF4QixFQUEyQixLQUFLLEVBQWhDLEVBQW9DLENBQXBDO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7QUFFQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLENBQUMsS0FBakM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLEtBQUssRUFBaEMsRUFBb0MsQ0FBcEM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCOzs7Ozs7QUFNQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQUMsSUFBekIsRUFBK0IsRUFBL0IsRUFBbUMsQ0FBQyxFQUFwQztBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUF0QyxFQUF5QyxDQUF6QztBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7O0FBRUEsb0JBQWEsZ0NBQU8sTUFBUCxFQUFiO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixDQUFDLElBQXpCLEVBQStCLEVBQS9CLEVBQW1DLENBQUMsRUFBcEM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCOzs7QUFHQTtBQWxIRjtBQUFBO0FBQUEsbUNBb0hlOztBQUViLFdBQUksYUFBSjtXQUFVLGlCQUFWO1dBQW9CLGNBQXBCO1dBQTJCLHVCQUEzQjs7QUFFQSx3QkFBaUIsSUFBSSxNQUFNLFFBQVYsRUFBakI7O0FBRUEsWUFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksRUFBbkIsRUFBdUIsRUFBRSxDQUF6QixFQUE0Qjs7QUFFM0IsaUJBQVEsK0JBQU0sTUFBTixDQUFjLElBQUksQ0FBSixHQUFRLEdBQVIsR0FBYyxDQUE1QixFQUFpQyxJQUFJLENBQUosSUFBUyxJQUFJLENBQWIsR0FBaUIsRUFBakIsR0FBc0IsRUFBdkQsRUFBNkQsSUFBSSxDQUFKLEdBQVEsSUFBUixHQUFlLEdBQTVFLEVBQWtGLElBQWxGLENBQVI7QUFDQSxlQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQUMsSUFBSSxDQUFKLEdBQVEsSUFBUixHQUFlLEdBQWhCLElBQXVCLElBQUksQ0FBOUMsRUFBa0QsSUFBSSxDQUFKLElBQVMsSUFBSSxDQUFiLEdBQWlCLEVBQWpCLEdBQXNCLENBQXhFLEVBQTZFLElBQUksQ0FBSixHQUFRLEtBQVIsR0FBZ0IsSUFBN0Y7QUFDQSxlQUFNLFlBQU47QUFDQSx3QkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQztBQUVBOztBQUVELFlBQUksSUFBSSxLQUFJLENBQVosRUFBZSxLQUFJLENBQW5CLEVBQXNCLEVBQUUsRUFBeEIsRUFBMkI7QUFDMUIsY0FBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsRUFBc0IsRUFBRSxDQUF4QixFQUEyQjs7QUFFMUIsbUJBQVEsK0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsSUFBdEIsRUFBNEIsS0FBNUIsQ0FBUjtBQUNBLGlCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLElBQUksS0FBSyxDQUE1QixFQUErQixFQUEvQixFQUFtQyxDQUFDLEVBQUQsR0FBTSxFQUF6QztBQUNBLGlCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBcEM7QUFDQSxpQkFBTSxZQUFOO0FBQ0EsMEJBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7QUFFQTtBQUNEOztBQUVELGVBQVEsK0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsRUFBMkIsS0FBM0IsQ0FBUjtBQUNBLGFBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsRUFBbkIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDQSxhQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBcEM7QUFDQSxhQUFNLFlBQU47QUFDQSxzQkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQzs7QUFFQSxlQUFRLCtCQUFNLE1BQU4sQ0FBYSxHQUFiLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLEVBQTJCLEtBQTNCLENBQVI7QUFDQSxhQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUFDLEtBQUssRUFBTixHQUFXLENBQXBDO0FBQ0EsYUFBTSxZQUFOO0FBQ0Esc0JBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7O0FBRUEsZUFBUSwrQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixDQUFsQixFQUFxQixJQUFyQixFQUEyQixLQUEzQixDQUFSO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixFQUFuQixFQUF1QixDQUF2QixFQUEwQixDQUExQjtBQUNBLGFBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUFwQztBQUNBLGFBQU0sWUFBTjtBQUNBLHNCQUFlLEtBQWYsQ0FBcUIsTUFBTSxRQUEzQixFQUFxQyxNQUFNLE1BQTNDOztBQUVBLGVBQVEsK0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsSUFBdEIsRUFBNEIsS0FBNUIsQ0FBUjtBQUNBLGFBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsRUFBbkIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDQSxhQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBcEM7QUFDQSxhQUFNLFlBQU47QUFDQSxzQkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQzs7QUFFQSxlQUFRLCtCQUFNLE1BQU4sQ0FBYSxHQUFiLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLEVBQTJCLEtBQTNCLENBQVI7QUFDQSxhQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLENBQTNCO0FBQ0EsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUFDLEtBQUssRUFBTixHQUFXLENBQXBDO0FBQ0EsYUFBTSxZQUFOO0FBQ0Esc0JBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7O0FBRUEsWUFBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksQ0FBbkIsRUFBc0IsRUFBRSxHQUF4QixFQUEyQjtBQUMxQixjQUFJLElBQUksS0FBSSxDQUFaLEVBQWUsS0FBSSxDQUFuQixFQUFzQixFQUFFLEVBQXhCLEVBQTJCOztBQUUxQixtQkFBUSwrQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQixJQUF0QixFQUE0QixPQUFNLENBQWxDLENBQVI7QUFDQSxpQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEdBQXhCLEVBQTJCLEVBQTNCLEVBQStCLENBQUMsQ0FBRCxHQUFLLEVBQXBDO0FBQ0EsaUJBQU0sWUFBTjtBQUNBLDBCQUFlLEtBQWYsQ0FBcUIsTUFBTSxRQUEzQixFQUFxQyxNQUFNLE1BQTNDO0FBRUE7QUFDRDs7QUFFRCxZQUFJLElBQUksTUFBSSxDQUFaLEVBQWUsTUFBSSxFQUFuQixFQUF1QixFQUFFLEdBQXpCLEVBQTRCOztBQUUzQixpQkFBUSwrQkFBTSxNQUFOLENBQWEsR0FBYixFQUFtQixNQUFJLENBQUosSUFBUyxNQUFJLENBQWIsR0FBaUIsRUFBakIsR0FBc0IsRUFBekMsRUFBK0MsTUFBSSxDQUFKLEdBQVEsSUFBUixHQUFlLEdBQTlELEVBQXFFLE1BQUksQ0FBTCxLQUFZLENBQWhGLENBQVI7QUFDQSxlQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLElBQUksR0FBdkIsRUFBMkIsTUFBSSxDQUFKLElBQVMsTUFBSSxDQUFiLEdBQWlCLEVBQWpCLEdBQXNCLENBQWpELEVBQXFELENBQUMsRUFBdEQ7QUFDQSxlQUFNLFlBQU47QUFDQSx3QkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQztBQUVBOztBQUVELFlBQUksSUFBSSxNQUFJLENBQVosRUFBZSxNQUFJLENBQW5CLEVBQXNCLEVBQUUsR0FBeEIsRUFBMkI7QUFDMUIsY0FBSSxJQUFJLE1BQUksQ0FBWixFQUFlLE1BQUksQ0FBbkIsRUFBc0IsRUFBRSxHQUF4QixFQUEyQjs7QUFFMUIsbUJBQVEsK0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBbUIsTUFBTSxHQUFOLEdBQVUsRUFBVixHQUFlLEVBQWxDLEVBQXVDLElBQXZDLEVBQTZDLEtBQTdDLENBQVI7O0FBRUEsZUFBRyxNQUFNLEdBQVQsRUFBWTtBQUNYLG1CQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLENBQUMsRUFBRCxHQUFNLEdBQWpDO0FBQ0EsbUJBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUFwQztBQUNBLFlBSEQsTUFJSztBQUNKLG1CQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEtBQUssR0FBeEIsRUFBMkIsRUFBM0IsRUFBK0IsQ0FBQyxFQUFoQztBQUNBLG1CQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEM7QUFDQTs7QUFFRCxpQkFBTSxZQUFOO0FBQ0EsMEJBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7QUFFQTtBQUNEOztBQUVELFlBQUksSUFBSSxNQUFJLENBQVosRUFBZSxNQUFJLENBQW5CLEVBQXNCLEVBQUUsR0FBeEIsRUFBMkI7O0FBRTFCLGlCQUFRLCtCQUFNLE1BQU4sQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBQVI7QUFDQSxlQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEtBQUssR0FBeEIsRUFBMkIsRUFBM0IsRUFBK0IsQ0FBQyxFQUFoQztBQUNBLGVBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQztBQUNBLGVBQU0sWUFBTjtBQUNBLHdCQUFlLEtBQWYsQ0FBcUIsTUFBTSxRQUEzQixFQUFxQyxNQUFNLE1BQTNDO0FBRUE7O0FBRUQsV0FBSSxnQkFBZ0IsSUFBSSxNQUFNLE9BQVYsRUFBcEI7O0FBRUEscUJBQWMsS0FBZCxHQUFzQixnQ0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXRCO0FBQ0EscUJBQWMsV0FBZCxHQUE0QixJQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLE1BQWQsQ0FBcUIsR0FBckIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUI7O0FBRUEsWUFBSyxTQUFMLENBQWUsY0FBZjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLGFBQVAsRUFBc0IsVUFBVSxJQUFoQyxFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLGNBQWYsRUFBK0IsUUFBL0IsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCO0FBQ0E7QUE3T0Y7QUFBQTtBQUFBLGtDQStPYzs7QUFFWixXQUFJLE9BQU8sOEJBQUssTUFBTCxDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBWDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCLEVBQXdCLENBQXhCLEVBQTJCLElBQTNCOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsSUFBbEI7QUFDQTtBQXRQRjtBQUFBO0FBQUEsa0NBd1BjOztBQUVaLFdBQUksY0FBSjtXQUFXLGlCQUFYO1dBQXFCLGlCQUFyQjtXQUErQixhQUEvQjtXQUFxQyxjQUFyQzs7QUFFQSxlQUFRLElBQUksTUFBTSxRQUFWLEVBQVI7O0FBRUEsa0JBQVcsSUFBSSxNQUFNLGtCQUFWLENBQTZCLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTs7QUFFakQsYUFBSSxJQUFJLENBQUosR0FBUSxDQUFaO0FBQ0EsYUFBSSxJQUFJLENBQUosR0FBUSxDQUFaO0FBQ0EsYUFBSSxJQUFJLElBQUksS0FBSyxJQUFMLENBQVUsT0FBTyxDQUFQLEdBQVcsQ0FBWCxHQUFlLE9BQU8sQ0FBUCxHQUFXLENBQXBDLENBQVo7O0FBRUEsZ0JBQU8sSUFBSSxNQUFNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUVBLFFBUlUsRUFRUixFQVJRLEVBUUosRUFSSSxDQUFYOztBQVVBLFdBQUksa0JBQWtCLElBQUksTUFBTSxPQUFWLEVBQXRCOztBQUVBLHVCQUFnQixLQUFoQixHQUF3QixnQ0FBTyxRQUFQLENBQWdCLFNBQWhCLENBQXhCO0FBQ0EsdUJBQWdCLFdBQWhCLEdBQThCLElBQTlCOztBQUVBLGtCQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssZUFBUCxFQUF3QixVQUFVLElBQWxDLEVBQTVCLENBQVg7QUFDQSxnQkFBUyxJQUFULEdBQWdCLE1BQU0sVUFBdEI7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFQOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxDQUF6QjtBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUFuQzs7QUFFQSxhQUFNLEdBQU4sQ0FBVSxJQUFWOztBQUVBLGNBQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFFBQXpCLENBQVA7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLENBQUMsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQjtBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBSyxFQUFMLEdBQVUsQ0FBbEM7O0FBRUEsYUFBTSxHQUFOLENBQVUsSUFBVjs7QUFJQSxlQUFRLElBQUksTUFBTSxRQUFWLEVBQVI7O0FBRUEsV0FBSSxlQUFlLElBQUksTUFBTSxPQUFWLEVBQW5COztBQUVBLG9CQUFhLEtBQWIsR0FBcUIsZ0NBQU8sUUFBUCxDQUFnQixNQUFoQixDQUFyQjtBQUNBLG9CQUFhLFdBQWIsR0FBMkIsSUFBM0I7O0FBRUEsa0JBQVcsSUFBSSxNQUFNLGdCQUFWLENBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLENBQXZDLENBQVg7QUFDQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLFlBQVAsRUFBcUIsVUFBVSxJQUEvQixFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLENBQWxCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFLLEVBQUwsR0FBVSxFQUE1QixFQUFnQyxDQUFoQyxFQUFtQyxDQUFuQzs7QUFFQSxZQUFLLFlBQUw7QUFDQSxhQUFNLEtBQU4sQ0FBWSxLQUFLLFFBQWpCLEVBQTJCLEtBQUssTUFBaEM7O0FBRUEsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEdBQWxCLEVBQXVCLENBQUMsR0FBeEIsRUFBNkIsSUFBN0I7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQUssRUFBTCxHQUFVLEVBQTVCLEVBQWdDLENBQWhDLEVBQW1DLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBOUM7O0FBRUEsWUFBSyxZQUFMO0FBQ0EsYUFBTSxLQUFOLENBQVksS0FBSyxRQUFqQixFQUEyQixLQUFLLE1BQWhDOztBQUVBLGNBQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFFBQXpCLENBQVA7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixDQUFDLEdBQW5CLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsSUFBOUI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQUssRUFBTCxHQUFVLEVBQTVCLEVBQWdDLENBQWhDLEVBQW1DLEtBQUssRUFBTCxHQUFVLENBQTdDOztBQUVBLFlBQUssWUFBTDtBQUNBLGFBQU0sS0FBTixDQUFZLEtBQUssUUFBakIsRUFBMkIsS0FBSyxNQUFoQzs7QUFFQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsS0FBZixFQUFzQixRQUF0QixDQUFQOztBQUVBLGFBQU0sR0FBTixDQUFVLElBQVY7O0FBRUEsYUFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QjtBQUNBLGFBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsS0FBSyxFQUFMLEdBQVUsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkM7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQjs7QUFLQSxXQUFJLGNBQWMsSUFBSSxNQUFNLE9BQVYsRUFBbEI7O0FBRUEsbUJBQVksS0FBWixHQUFvQixnQ0FBTyxRQUFQLENBQWdCLE1BQWhCLENBQXBCO0FBQ0EsbUJBQVksV0FBWixHQUEwQixJQUExQjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0sV0FBVixDQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFYO0FBQ0Esa0JBQVcsSUFBSSxNQUFNLGlCQUFWLENBQTRCLEVBQUUsS0FBSyxXQUFQLEVBQW9CLFVBQVUsSUFBOUIsRUFBNUIsQ0FBWDtBQUNBLGNBQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFFBQXpCLENBQVA7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixHQUFsQixFQUF1QixJQUF2QixFQUE2QixDQUE3Qjs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCOztBQUVBLGtCQUFXLElBQUksTUFBTSxXQUFWLENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFQOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsQ0FBOUI7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixJQUFsQjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0sV0FBVixDQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEdBQWxCLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsSUFBbEI7QUFDQTtBQXJXRjtBQUFBO0FBQUEsaUNBdVdhLFFBdldiLEVBdVd1QjtBQUNyQixZQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEdBQXZCLENBQTJCLFNBQVMsQ0FBVCxHQUFhLEVBQXhDLEVBQTRDLFNBQVMsQ0FBVCxHQUFhLEVBQXpELEVBQTZELFNBQVMsQ0FBVCxHQUFhLEVBQTFFO0FBQ0E7QUF6V0Y7QUFBQTtBQUFBLGlDQTJXYSxRQTNXYixFQTJXdUI7QUFDckIsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixFQUF6QjtBQUNBLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsRUFBekI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7O0FBRUEsWUFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixHQUF2QixDQUEyQixTQUFTLENBQXBDLEVBQXVDLFNBQVMsQ0FBaEQsRUFBbUQsU0FBUyxDQUE1RDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEVBQXpCO0FBQ0E7QUFyWEY7O0FBQUE7QUFBQTs7bUJBd1hlLFFBQVEsUUFBUixDQUFpQixRQUFqQixDQUEwQixpQjs7Ozs7O0FDcll6Qzs7Ozs7Ozs7OztBQUVBLFNBQVEsU0FBUixDQUFrQiwyQkFBbEI7O0FBRUEsU0FBUSxRQUFSLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCO0FBRUMsb0JBQWM7QUFBQTs7QUFDYixXQUFRLEdBQVIsQ0FBWSxtRUFBWjtBQUNBOzs7OztBQUpGO0FBQUE7QUFBQSxpQ0FPZSxDQUFHO0FBUGxCO0FBQUE7QUFBQSxpQ0FRZSxDQUFHO0FBUmxCO0FBQUE7QUFBQSxrQ0FTZ0IsQ0FBRztBQVRuQjtBQUFBO0FBQUEsZ0NBVWMsQ0FBRztBQVZqQjtBQUFBO0FBQUEsZ0NBV2MsQ0FBRzs7OztBQVhqQjtBQUFBO0FBQUEseUJBY08sUUFkUCxFQWNpQixRQWRqQixFQWMyQjs7QUFFekIsZUFBVyxZQUFZLElBQUksTUFBTSxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQXZCO0FBQ0EsZUFBVyxZQUFZLElBQUksTUFBTSxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQXZCOztBQUVBLFNBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sUUFBVixFQUFoQjs7QUFFQSxTQUFLLFdBQUw7QUFDQSxTQUFLLFdBQUw7QUFDQSxTQUFLLFlBQUw7QUFDQSxTQUFLLFVBQUw7QUFDQSxTQUFLLFVBQUw7O0FBRUEsU0FBSyxXQUFMLENBQWlCLFFBQWpCO0FBQ0EsU0FBSyxXQUFMLENBQWlCLFFBQWpCOztBQUVBLFdBQU8sS0FBSyxRQUFaO0FBQ0E7Ozs7QUEvQkY7QUFBQTtBQUFBLCtCQWtDYSxRQWxDYixFQWtDdUIsQ0FBRztBQWxDMUI7QUFBQTtBQUFBLCtCQW1DYSxRQW5DYixFQW1DdUIsQ0FBRzs7OztBQW5DMUI7QUFBQTtBQUFBLDZCQXVDVyxRQXZDWCxFQXVDcUI7O0FBRWhCLGFBQVMsa0JBQVQ7O0FBRUEsUUFBSSxNQUFNLFNBQVMsV0FBVCxDQUFxQixHQUEvQjtBQUNBLFFBQUksTUFBTSxTQUFTLFdBQVQsQ0FBcUIsR0FBL0I7O0FBRUEsUUFBSSxTQUFVLElBQUksTUFBTSxPQUFWLENBQWtCLElBQUksSUFBSSxDQUExQixFQUE2QixJQUFJLElBQUksQ0FBckMsRUFBd0MsSUFBSSxJQUFJLENBQWhELENBQWQ7QUFDQSxRQUFJLFFBQVUsSUFBSSxNQUFNLE9BQVYsQ0FBa0IsSUFBSSxDQUFKLEdBQVEsSUFBSSxDQUE5QixFQUFpQyxJQUFJLENBQUosR0FBUSxJQUFJLENBQTdDLEVBQWdELElBQUksQ0FBSixHQUFRLElBQUksQ0FBNUQsQ0FBZDs7QUFFQSxhQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsSUFBNEIsRUFBNUI7O0FBRUEsUUFBSSxRQUFRLFNBQVMsS0FBckI7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsS0FBVCxDQUFlLE1BQW5DLEVBQTRDLEdBQTVDLEVBQWlEOztBQUUvQyxTQUFJLEtBQUssU0FBUyxRQUFULENBQWtCLE1BQU0sQ0FBTixFQUFTLENBQTNCLENBQVQ7QUFDQSxTQUFJLEtBQUssU0FBUyxRQUFULENBQWtCLE1BQU0sQ0FBTixFQUFTLENBQTNCLENBQVQ7QUFDQSxTQUFJLEtBQUssU0FBUyxRQUFULENBQWtCLE1BQU0sQ0FBTixFQUFTLENBQTNCLENBQVQ7O0FBRUEsU0FBRyxHQUFHLENBQUgsS0FBUyxHQUFHLENBQVosSUFBaUIsR0FBRyxDQUFILEtBQVMsR0FBRyxDQUFoQyxFQUFtQztBQUNsQyxlQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEIsSUFBMUIsQ0FBK0IsQ0FDN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FENkIsRUFFN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FGNkIsRUFHN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FINkIsQ0FBL0I7QUFLQSxNQU5ELE1BTU8sSUFBRyxHQUFHLENBQUgsS0FBUyxHQUFHLENBQVosSUFBaUIsR0FBRyxDQUFILEtBQVMsR0FBRyxDQUFoQyxFQUFtQztBQUM1QyxlQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEIsSUFBMUIsQ0FBK0IsQ0FDMUIsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FEMEIsRUFFMUIsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FGMEIsRUFHMUIsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FIMEIsQ0FBL0I7QUFLRyxNQU5NLE1BTUE7QUFDTixlQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEIsSUFBMUIsQ0FBK0IsQ0FDN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FENkIsRUFFN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FGNkIsRUFHN0IsSUFBSSxNQUFNLE9BQVYsQ0FBbUIsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0MsRUFBbUQsQ0FBRSxHQUFHLENBQUgsR0FBTyxPQUFPLENBQWhCLElBQXNCLE1BQU0sQ0FBL0UsQ0FINkIsQ0FBL0I7QUFLQTtBQUNGOztBQUVELGFBQVMsYUFBVCxHQUF5QixJQUF6QjtBQUNIO0FBakZGOztBQUFBO0FBQUE7O21CQW9GZSxRQUFRLFFBQVIsQ0FBaUIsUUFBakIsQ0FBMEIsZTs7Ozs7O0FDeEZ6Qzs7Ozs7Ozs7OztBQUVBLFNBQVEsU0FBUixDQUFrQixrQkFBbEI7O0FBRUEsU0FBUSxRQUFSLENBQWlCLEtBQWpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQkFFZSxNQUZmLEVBRXVCLEtBRnZCLEVBRThCLEtBRjlCLEVBRXFDOztBQUVuQyxRQUFJLFdBQVcsSUFBSSxNQUFNLFdBQVYsQ0FBc0IsTUFBdEIsRUFBOEIsS0FBOUIsRUFBcUMsS0FBckMsQ0FBZjtBQUNBLFFBQUksV0FBVyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsQ0FBZjs7QUFFQSxXQUFPLFFBQVA7QUFDQTtBQVJGOztBQUFBO0FBQUE7O21CQVdlLFFBQVEsUUFBUixDQUFpQixLOzs7Ozs7QUNmaEM7Ozs7Ozs7Ozs7QUFFQSxTQUFRLFNBQVIsQ0FBa0Isa0JBQWxCOztBQUVBLFNBQVEsUUFBUixDQUFpQixLQUFqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNEJBRWUsS0FGZixFQUVzQixNQUZ0QixFQUU4QixLQUY5QixFQUVxQyxJQUZyQyxFQUUyQzs7QUFFekMsV0FBSSxpQkFBSjtXQUFjLGlCQUFkO1dBQXdCLGFBQXhCO1dBQThCLGtCQUE5Qjs7QUFFQSxtQkFBWSxJQUFJLE1BQU0sUUFBVixFQUFaOztBQUVBLGtCQUFXLElBQUksTUFBTSxXQUFWLENBQXNCLEtBQXRCLEVBQTZCLE1BQTdCLEVBQXFDLEtBQXJDLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixDQUFQOztBQUVBLFlBQUssWUFBTDtBQUNBLGlCQUFVLEtBQVYsQ0FBZ0IsS0FBSyxRQUFyQixFQUErQixLQUFLLE1BQXBDOztBQUVBLFdBQUcsU0FBUyxJQUFaLEVBQWtCOztBQUVqQixvQkFBVyxJQUFJLE1BQU0sWUFBVixDQUF1QixLQUF2QixFQUE4QixDQUE5QixDQUFYO0FBQ0EsZ0JBQU8sSUFBSSxNQUFNLElBQVYsQ0FBZSxRQUFmLENBQVA7O0FBRUEsY0FBSyxRQUFMLENBQWMsR0FBZCxDQUFtQixRQUFRLENBQVQsR0FBYyxLQUFoQyxFQUF3QyxTQUFTLENBQVYsR0FBZSxDQUF0RCxFQUF5RCxDQUF6RDs7QUFFQSxjQUFLLFlBQUw7QUFDQSxtQkFBVSxLQUFWLENBQWdCLEtBQUssUUFBckIsRUFBK0IsS0FBSyxNQUFwQztBQUNBOztBQUVELGtCQUFXLElBQUksTUFBTSxJQUFWLENBQWUsU0FBZixDQUFYOztBQUVBLGNBQU8sUUFBUDtBQUNBO0FBNUJGOztBQUFBO0FBQUE7O21CQStCZSxRQUFRLFFBQVIsQ0FBaUIsSzs7Ozs7O0FDbkNoQzs7Ozs7Ozs7QUFJQTs7OztBQUVBOzs7Ozs7OztBQUpBLFNBQVEsU0FBUixDQUFrQixrQkFBbEI7O0FBTUEsU0FBUSxRQUFSLENBQWlCLE1BQWpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFFaUI7O0FBRWYsV0FBSSxpQkFBaUIsSUFBSSxNQUFNLE9BQVYsRUFBckI7O0FBRUEsc0JBQWUsS0FBZixHQUF1QixnQ0FBTyxRQUFQLENBQWdCLFFBQWhCLENBQXZCO0FBQ0Esc0JBQWUsV0FBZixHQUE2QixJQUE3Qjs7QUFFQSxXQUFJLFdBQVcsSUFBSSxNQUFNLGFBQVYsQ0FBd0IsMkJBQVUsTUFBVixDQUFpQixLQUF6QyxFQUFnRCwyQkFBVSxNQUFWLENBQWlCLE1BQWpFLENBQWY7QUFDQSxXQUFJLFdBQVcsSUFBSSxNQUFNLGlCQUFWLENBQTRCLEVBQUUsS0FBSyxjQUFQLEVBQXVCLFVBQVUsSUFBakMsRUFBNUIsQ0FBZjtBQUNBLFdBQUksV0FBVyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBZjs7QUFFQSxjQUFPLFFBQVA7QUFDQTtBQWRGOztBQUFBO0FBQUE7O21CQWlCZSxRQUFRLFFBQVIsQ0FBaUIsTTs7Ozs7O0FDekJoQzs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7QUFGQSxTQUFRLFNBQVIsQ0FBa0Isa0JBQWxCOztBQUlBLFNBQVEsUUFBUixDQUFpQixJQUFqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNEJBRWUsS0FGZixFQUVzQixNQUZ0QixFQUU4Qjs7QUFFNUIsV0FBSSxpQkFBSjtXQUFjLGlCQUFkO1dBQXdCLGFBQXhCOztBQUVBLFdBQUksZUFBZSxJQUFJLE1BQU0sT0FBVixFQUFuQjs7QUFFQSxvQkFBYSxLQUFiLEdBQXFCLGdDQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBckI7QUFDQSxvQkFBYSxXQUFiLEdBQTJCLElBQTNCOztBQUVBLGtCQUFXLElBQUksTUFBTSxhQUFWLENBQXdCLEtBQXhCLEVBQStCLE1BQS9CLENBQVg7QUFDQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLFlBQVAsRUFBcUIsVUFBVSxJQUEvQixFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxjQUFPLElBQVA7QUFDQTtBQWhCRjs7QUFBQTtBQUFBOzttQkFtQmUsUUFBUSxRQUFSLENBQWlCLEk7Ozs7OztBQ3pCaEM7Ozs7Ozs7O0FBSUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFUQSxTQUFRLFNBQVIsQ0FBa0IsMkJBQWxCOztBQVdBLFNBQVEsUUFBUixDQUFpQixRQUFqQixDQUEwQixrQkFBMUI7QUFBQTs7QUFFQyxxQkFBYztBQUFBOztBQUFBOztBQUdiLGFBQVEsR0FBUixDQUFZLHNFQUFaO0FBSGE7QUFJYjs7QUFORjtBQUFBO0FBQUEsbUNBUWU7O0FBRWIsV0FBSSxhQUFKO1dBQVUsaUJBQVY7V0FBb0IsY0FBcEI7V0FBMkIsdUJBQTNCOztBQUVBLHdCQUFpQixJQUFJLE1BQU0sUUFBVixFQUFqQjs7QUFFQSxlQUFRLCtCQUFNLE1BQU4sQ0FBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBQVI7QUFDQSxhQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLENBQUMsRUFBNUI7QUFDQSxhQUFNLFlBQU47QUFDQSxzQkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQzs7QUFFQSxXQUFJLGdCQUFnQixJQUFJLE1BQU0sT0FBVixFQUFwQjs7QUFFQSxxQkFBYyxLQUFkLEdBQXNCLGdDQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBdEI7QUFDQSxxQkFBYyxXQUFkLEdBQTRCLElBQTVCO0FBQ0EscUJBQWMsS0FBZCxHQUFzQixNQUFNLGNBQTVCO0FBQ0EscUJBQWMsS0FBZCxHQUFzQixNQUFNLGNBQTVCO0FBQ0EscUJBQWMsTUFBZCxDQUFxQixHQUFyQixDQUF5QixDQUF6QixFQUE0QixDQUE1Qjs7QUFFQSxZQUFLLFNBQUwsQ0FBZSxjQUFmOztBQUVBLGtCQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssYUFBUCxFQUFzQixVQUFVLElBQWhDLEVBQTVCLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsY0FBZixFQUErQixRQUEvQixDQUFQOztBQUVBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsSUFBbEI7QUFDQTtBQWpDRjtBQUFBO0FBQUEsb0NBbUNnQjs7QUFFZCxXQUFJLG1CQUFKOzs7O0FBSUEsb0JBQWEsZ0NBQU8sTUFBUCxFQUFiO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxJQUFoQztBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7O0FBRUEsb0JBQWEsZ0NBQU8sTUFBUCxFQUFiO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixFQUF4QixFQUE0QixDQUE1QixFQUErQixJQUEvQjtBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7Ozs7OztBQU1BLG9CQUFhLGdDQUFPLE1BQVAsRUFBYjtBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsS0FBeEIsRUFBK0IsRUFBL0IsRUFBbUMsQ0FBQyxFQUFwQztBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBSyxFQUFMLEdBQVUsQ0FBckMsRUFBd0MsQ0FBeEM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCOzs7Ozs7QUFNQSxvQkFBYSxnQ0FBTyxNQUFQLEVBQWI7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLENBQUMsS0FBakM7QUFDQSxrQkFBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLENBQXhCLEVBQTJCLEtBQUssRUFBaEMsRUFBb0MsQ0FBcEM7QUFDQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQWxCOztBQUVBLG9CQUFhLGdDQUFPLE1BQVAsRUFBYjtBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBQyxLQUEvQjtBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBSyxFQUFoQyxFQUFvQyxDQUFwQztBQUNBLFlBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBbEI7Ozs7OztBQU1BLG9CQUFhLGdDQUFPLE1BQVAsRUFBYjtBQUNBLGtCQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBQyxJQUF6QixFQUErQixDQUEvQixFQUFrQyxDQUFDLEVBQW5DO0FBQ0Esa0JBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixDQUF4QixFQUEyQixDQUFDLEtBQUssRUFBTixHQUFXLENBQXRDLEVBQXlDLENBQXpDO0FBQ0EsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQjs7O0FBR0E7QUFsRkY7QUFBQTtBQUFBLG1DQW9GZTs7QUFFYixXQUFJLGFBQUo7V0FBVSxpQkFBVjtXQUFvQixjQUFwQjtXQUEyQix1QkFBM0I7O0FBRUEsd0JBQWlCLElBQUksTUFBTSxRQUFWLEVBQWpCOztBQUVBLFlBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLEVBQUUsQ0FBeEIsRUFBMkI7O0FBRTFCLGNBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLEVBQUUsQ0FBeEIsRUFBMkI7O0FBRTFCLG1CQUFRLCtCQUFNLE1BQU4sQ0FBYyxJQUFJLENBQUosR0FBUSxHQUFSLEdBQWMsQ0FBNUIsRUFBZ0MsRUFBaEMsRUFBcUMsSUFBSSxDQUFKLEdBQVEsSUFBUixHQUFlLEdBQXBELEVBQTBELElBQTFELENBQVI7QUFDQSxpQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFDLElBQUksQ0FBSixHQUFRLElBQVIsR0FBZSxHQUFoQixLQUF3QixNQUFNLENBQU4sR0FBVSxDQUFDLENBQVgsR0FBZSxDQUF2QyxJQUE0QyxLQUFLLENBQXBFLEVBQXVFLEVBQXZFLEVBQTJFLENBQUMsRUFBRCxHQUFNLENBQWpGO0FBQ0EsaUJBQU0sWUFBTjtBQUNBLDBCQUFlLEtBQWYsQ0FBcUIsTUFBTSxRQUEzQixFQUFxQyxNQUFNLE1BQTNDO0FBRUE7O0FBRUQsY0FBSSxJQUFJLEtBQUksQ0FBWixFQUFlLEtBQUksQ0FBbkIsRUFBc0IsRUFBRSxFQUF4QixFQUEyQjs7QUFFMUIsbUJBQVEsK0JBQU0sTUFBTixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsSUFBdEIsRUFBNEIsS0FBNUIsQ0FBUjtBQUNBLGlCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLEtBQUssQ0FBeEIsRUFBMkIsS0FBSyxLQUFLLEVBQXJDLEVBQXdDLENBQUMsRUFBekM7QUFDQSxpQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixDQUFDLEtBQUssRUFBTixHQUFXLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDO0FBQ0EsaUJBQU0sWUFBTjtBQUNBLDBCQUFlLEtBQWYsQ0FBcUIsTUFBTSxRQUEzQixFQUFxQyxNQUFNLE1BQTNDO0FBRUE7QUFFRDs7QUFFRCxZQUFJLElBQUksS0FBSSxDQUFaLEVBQWUsS0FBSSxDQUFuQixFQUFzQixFQUFFLEVBQXhCLEVBQTJCOztBQUUxQixjQUFJLElBQUksTUFBSSxDQUFaLEVBQWUsTUFBSSxDQUFuQixFQUFzQixFQUFFLEdBQXhCLEVBQTJCOztBQUUxQixtQkFBUSwrQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQixJQUF0QixFQUE2QixNQUFJLENBQUosS0FBVSxDQUF2QyxDQUFSO0FBQ0EsaUJBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsS0FBSyxFQUF4QixFQUEyQixFQUEzQixFQUErQixDQUFDLEVBQUQsR0FBTSxHQUFyQztBQUNBLGlCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQUMsS0FBSyxFQUFOLEdBQVcsQ0FBakMsRUFBb0MsQ0FBcEM7QUFDQSxpQkFBTSxZQUFOO0FBQ0EsMEJBQWUsS0FBZixDQUFxQixNQUFNLFFBQTNCLEVBQXFDLE1BQU0sTUFBM0M7QUFFQTs7QUFFRCxjQUFJLElBQUksTUFBSSxDQUFaLEVBQWUsTUFBSSxDQUFuQixFQUFzQixFQUFFLEdBQXhCLEVBQTJCOztBQUUxQixtQkFBUSwrQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUFSO0FBQ0EsaUJBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsRUFBbkIsRUFBdUIsS0FBSyxLQUFLLEdBQWpDLEVBQW9DLENBQUMsRUFBRCxHQUFNLEVBQTFDO0FBQ0EsaUJBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxLQUFLLEVBQU4sR0FBVyxDQUFwQztBQUNBLGlCQUFNLFlBQU47QUFDQSwwQkFBZSxLQUFmLENBQXFCLE1BQU0sUUFBM0IsRUFBcUMsTUFBTSxNQUEzQztBQUVBO0FBRUQ7O0FBRUQsV0FBSSxnQkFBZ0IsSUFBSSxNQUFNLE9BQVYsRUFBcEI7O0FBRUEscUJBQWMsS0FBZCxHQUFzQixnQ0FBTyxRQUFQLENBQWdCLE9BQWhCLENBQXRCO0FBQ0EscUJBQWMsV0FBZCxHQUE0QixJQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLEtBQWQsR0FBc0IsTUFBTSxjQUE1QjtBQUNBLHFCQUFjLE1BQWQsQ0FBcUIsR0FBckIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUI7O0FBRUEsWUFBSyxTQUFMLENBQWUsY0FBZjs7QUFFQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLGFBQVAsRUFBc0IsVUFBVSxJQUFoQyxFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLGNBQWYsRUFBK0IsUUFBL0IsQ0FBUDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCO0FBQ0E7QUF2SkY7QUFBQTtBQUFBLGtDQXlKYzs7QUFFWixXQUFJLE9BQU8sOEJBQUssTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLENBQVg7O0FBRUEsWUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixJQUF4Qjs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLElBQWxCO0FBQ0E7QUFoS0Y7QUFBQTtBQUFBLGtDQWtLYzs7QUFFWixXQUFJLGNBQUo7V0FBVyxpQkFBWDtXQUFxQixpQkFBckI7V0FBK0IsYUFBL0I7V0FBcUMsY0FBckM7QUFFQTtBQXRLRjtBQUFBO0FBQUEsaUNBd0thLFFBeEtiLEVBd0t1QjtBQUNyQixZQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEdBQXZCLENBQTJCLFNBQVMsQ0FBVCxHQUFhLEVBQXhDLEVBQTRDLFNBQVMsQ0FBVCxHQUFhLEVBQXpELEVBQTZELFNBQVMsQ0FBVCxHQUFhLEVBQTFFO0FBQ0E7QUExS0Y7QUFBQTtBQUFBLGlDQTRLYSxRQTVLYixFQTRLdUI7QUFDckIsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixFQUF6QjtBQUNBLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsRUFBekI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7O0FBRUEsWUFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixHQUF2QixDQUEyQixTQUFTLENBQXBDLEVBQXVDLFNBQVMsQ0FBaEQsRUFBbUQsU0FBUyxDQUE1RDs7QUFFQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLENBQUMsRUFBMUI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEVBQXpCO0FBQ0E7QUF0TEY7O0FBQUE7QUFBQTs7bUJBeUxlLFFBQVEsUUFBUixDQUFpQixRQUFqQixDQUEwQixrQjs7Ozs7O0FDdE16Qzs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7QUFGQSxTQUFRLFNBQVIsQ0FBa0Isa0JBQWxCOztBQUlBLFNBQVEsUUFBUixDQUFpQixHQUFqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBRWlCOztBQUVmLFdBQUksZUFBSjtXQUFZLGlCQUFaO1dBQXNCLGlCQUF0QjtXQUFnQyxhQUFoQzs7QUFFQSxrQkFBVyxJQUFJLE1BQU0sV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFYOztBQUVBLFdBQUksY0FBYyxJQUFJLE1BQU0sT0FBVixFQUFsQjs7QUFFQSxtQkFBWSxLQUFaLEdBQW9CLGdDQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBcEI7QUFDQSxtQkFBWSxXQUFaLEdBQTBCLElBQTFCOztBQUVBLGtCQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssV0FBUCxFQUFvQixVQUFVLElBQTlCLEVBQTVCLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFQOztBQUVBLGNBQU8sSUFBUDtBQUNBO0FBakJGOztBQUFBO0FBQUE7O21CQW9CZSxRQUFRLFFBQVIsQ0FBaUIsRyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTM4MDViNTUzYjRhODZlYWI5ZjdcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4uL25hbWVzcGFjZS5qcyc7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IENPTlNPTEUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkdhbWUgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcblx0XHR0aGlzLndpbmRvd0NvbnRyb2xsZXIgPSBXaW5kb3dDb250cm9sbGVyLmNyZWF0ZSh0aGlzLndvcmxkLmdldENhbWVyYSgpLCB0aGlzLnJlbmRlcmVyKTtcclxuXHJcblx0XHR0aGlzLkZQUyA9IG5ldyBTdGF0cygpO1xyXG5cdFx0dGhpcy5GUFMuc2V0TW9kZSgwKTtcclxuXHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuRlBTLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuXHRcdFx0c2VsZi5GUFMuYmVnaW4oKTtcclxuXHJcblx0XHRcdHNlbGYucmVuZGVyKCk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5lbmQoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQkKFwiLnN0YXJ0XCIpLnNob3coKTtcclxuXHQkKFwiLnN0YXJ0XCIpLmNzcyhcIm1hcmdpbi1sZWZ0XCIsIC0oKCQod2luZG93KS53aWR0aCgpIC8gMikgKyAxMjAwKSk7XHJcblxyXG5cdCQoXCIudGl0bGVcIikuYW5pbWF0ZSh7XHJcblx0XHRtYXJnaW5Ub3A6IFwiMjBweFwiXHJcblx0fSwgNTAwLCAoKSA9PiB7XHJcblx0XHQkKFwiLnN0YXJ0XCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiBcIi02MDBweFwiXHJcblx0XHR9LCA3MDApO1xyXG5cdH0pO1xyXG5cclxuXHRDT05TT0xFLm91dChcIkJyb3dzZXIgXCIgKyBuYXZpZ2F0b3IuYXBwTmFtZSArIFwiIHdhcyBkZXRlY3RlZC5cIiwgQ09OU1RBTlRTLk1FU1NBR0UuSU5GTyk7XHJcblxyXG5cdGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWltJyk7XHJcblx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0Y2FudmFzLndpZHRoID0gMjA7XHJcblx0Y2FudmFzLmhlaWdodCA9IDIwO1xyXG5cclxuXHRjb250ZXh0LmxpbmVXaWR0aCA9IFwiMlwiO1xyXG5cclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDEwLCAwKTtcclxuXHRjb250ZXh0LmxpbmVUbygxMCwgOCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDAsIDEwKTtcclxuXHRjb250ZXh0LmxpbmVUbyg4LCAxMCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDIwLCAxMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTIsIDEwKTtcclxuXHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblx0Y29udGV4dC5tb3ZlVG8oMTAsIDIwKTtcclxuXHRjb250ZXh0LmxpbmVUbygxMCwgMTIpO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG5cdGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cdGxldCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG5cdGxldCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlJyk7XHJcblxyXG5cdGxldCBjb25zb2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKTtcclxuXHJcblx0Y2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdC8qIExPQ0sgVEhFIFBPSU5URVIgKi9cclxuXHRcdHJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdHRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRzdGFydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0Y29uc29sZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcblx0XHRMb2FkZXIubG9hZEltYWdlcygoKSA9PiB7XHJcblx0XHRcdFxyXG5cdFx0XHRDT05TT0xFLmhpZGUoKTtcclxuXHJcblx0XHRcdGxldCBnYW1lUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1wYW5lbCcpO1xyXG5cclxuXHRcdFx0Z2FtZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHRcdFx0LyogU1RBUlQgR0FNRSAqL1xyXG5cdFx0XHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLkNvbnN0YW50cyA9IHtcclxuXHJcblx0Q0FNRVJBOiB7XHJcblx0XHRGUlVTVFVNOiA0NSxcclxuXHRcdEFTUEVDVF9SQVRJTzogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblx0XHRORUFSOiAxLFxyXG5cdFx0RkFSOiAxMDAwMFxyXG5cdH0sXHJcblxyXG5cdE1FU1NBR0U6IHtcclxuXHRcdElORk86IDEsXHJcblx0XHROT1RJQ0U6IDIsXHJcblx0XHRFUlJPUjogM1xyXG5cdH0sXHJcblxyXG5cdElNQUdFUzoge1xyXG5cdFx0QkxBTks6ICdpbWcvYmxhbmsuanBnJyxcclxuXHRcdEJPWDE6ICdpbWcvYm94MS5qcGcnLFxyXG5cdFx0Qk9YMjogJ2ltZy9ib3gyLmpwZycsXHJcblx0XHRET09SOiAnaW1nL2Rvb3IuanBnJyxcclxuXHRcdEZMT09SOiAnaW1nL2Zsb29yLmpwZycsXHJcblx0XHRTS1lTUEhFUkU6ICdpbWcvc2t5c3BoZXJlLmpwZycsXHJcblx0XHRURVhUSUxFOiAnaW1nL3RleHRpbGUuanBnJyxcclxuXHRcdEJMT0NLOiAnaW1nL2Jsb2NrLmpwZycsXHJcblx0XHRXT09EOiAnaW1nL3dvb2QuanBnJyxcclxuXHRcdFdJTkRPVzogJ2ltZy93aW5kb3cuanBnJ1xyXG5cdH0sXHJcblxyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcdFxyXG5cclxuXHRQTEFZRVI6IHtcclxuXHRcdEhFSUdIVDogMyxcclxuXHRcdEpVTVBfU1RSRU5HVEg6IDAuNSxcclxuXHRcdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblx0fSxcclxuXHJcblx0R1JBVklUWTogNTAsXHRcclxuXHJcblx0RkxPT1I6IHtcclxuXHRcdFdJRFRIOiAzMDAwLFxyXG5cdFx0SEVJR0hUOiAzMDAwLFxyXG5cdFx0V0lEVEhfU0VHTUVOVFM6IDQwLFxyXG5cdFx0SEVJR0hUX1NFR01FTlRTOiA0MFxyXG5cdH0sXHJcblxyXG5cdEJVTExFVDoge1xyXG5cdFx0UkFESVVTOiAwLjA1LFxyXG5cdFx0SEVJR0hUOiAyLFxyXG5cdFx0UkFESVVTX1NFR01FTlRTOiAzMixcclxuXHRcdFNQRUVEOiA0XHJcblx0fSxcclxuXHJcblx0V0lORE9XOiB7XHJcblx0XHRXSURUSDogNCxcclxuXHRcdEhFSUdIVDogNFxyXG5cdH0sXHJcblxyXG5cdExBUkdFX0hPVVNFOiB7XHJcblx0XHRXSURUSDogNTQsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDQwXHJcblx0fSxcclxuXHJcblx0TUVESVVNX0hPVVNFOiB7XHJcblx0XHRXSURUSDogMzAsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDMwXHJcblx0fSxcclxuXHJcblx0U0tZU1BIRVJFOiB7XHJcblx0XHRSQURJVVM6IDQwMDAsXHJcblx0XHRXSURUSF9TRUdNRU5UUzogMzIsXHJcblx0XHRIRUlHSFRfU0VHTUVOVFM6IDMyXHJcblx0fSxcclxuXHJcblx0Qk9VTkRJTkdfQk9YOiB7XHJcblx0XHRXSURUSDogMTAwMCxcclxuXHRcdEhFSUdIVDogMjUwLFxyXG5cdFx0REVQVEg6IDEwMDBcclxuXHR9LFxyXG5cclxuXHRHUkVFTl9QT0lOVDoge1xyXG5cdFx0WDogLTQwLFxyXG5cdFx0WjogODBcclxuXHR9LFxyXG5cclxuXHRSRURfUE9JTlQ6IHtcclxuXHRcdFg6IDIzNCxcclxuXHRcdFo6IC0xMjBcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5TaG9vdGVyLlV0aWxzLkNvbnNvbGUgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBvdXQoc3RyaW5nLCB0eXBlKSB7XHJcblxyXG5cdFx0dHlwZSA9IHR5cGUgfHwgQ09OU1RBTlRTLk1FU1NBR0UuSU5GTztcclxuXHJcblx0XHRsZXQgY29uc29sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJyk7XHJcblx0XHRsZXQgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHJcblx0XHRub3RlLmlubmVySFRNTCA9IFwiPj4gXCIgKyBzdHJpbmc7XHJcblxyXG5cdFx0aWYoQ09OU1RBTlRTLk1FU1NBR0UuSU5GTyA9PT0gdHlwZSkge1xyXG5cdFx0XHRub3RlLnN0eWxlLmNvbG9yID0gXCJoc2woNDUsIDEwMCUsIDUwJSlcIjtcclxuXHRcdH0gZWxzZSBpZihDT05TVEFOVFMuTUVTU0FHRS5OT1RJQ0UgPT09IHR5cGUpIHtcclxuXHRcdFx0bm90ZS5zdHlsZS5jb2xvciA9IFwiaHNsKDEyMCwgMTAwJSwgNTAlKVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm90ZS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDEwMCUsIDUwJSlcIjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zb2xlLmFwcGVuZENoaWxkKG5vdGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGhpZGUoKSB7XHJcblxyXG5cdFx0bGV0IGNvbnNvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc29sZScpO1xyXG5cclxuXHRcdGNvbnNvbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLkNvbnNvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMuQ29uc29sZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcclxuXHRyZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuICAgICAgICBcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcblx0XHRcdGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcblx0XHRcdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuaW1wb3J0IENPTlNPTEUgZnJvbSAnLi9TaG9vdGVyLlV0aWxzLkNvbnNvbGUuanMnO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Q09OU09MRS5vdXQoXCJQb2ludGVyIExvY2sgQVBJIHdhcyBmb3VuZGVkLlwiLCBDT05TVEFOVFMuTUVTU0FHRS5JTkZPKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0bGV0IGxvY2tQb2ludGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jayA9IGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkud2Via2l0UmVxdWVzdFBvaW50ZXJMb2NrO1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrUG9pbnRlciwgZmFsc2UpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Q09OU09MRS5vdXQoXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFBvaW50ZXIgTG9jayBBUEkuXCIsIENPTlNUQU5UUy5NRVNTQUdFLkVSUk9SKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlci5yZW5kZXJlcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlICk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIoY2FtZXJhLCByZW5kZXJlcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkgeyB9XHJcblx0ZGV0YWNoRXZlbnRzKCkgeyB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzJztcclxuaW1wb3J0IEZsb29yIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyc7XHJcblxyXG5pbXBvcnQgTGFyZ2VIb3VzZUJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgTWVkaXVtSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJveCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQm94LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV29ybGQgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zY2VuZSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYXllci5nZXRDb250cm9scygpKTtcclxuXHJcblx0XHR0aGlzLmxhcmdlSG91c2VCdWlsZGVyID0gbmV3IExhcmdlSG91c2VCdWlsZGVyKCk7XHJcblx0XHR0aGlzLm1lZGl1bUhvdXNlQnVpbGRlciA9IG5ldyBNZWRpdW1Ib3VzZUJ1aWxkZXIoKTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTGFyZ2VcIiwgbmV3IFRIUkVFLlZlY3RvcjMoMzAsIDEwLCAtNDApKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJMYXJnZVwiLCBuZXcgVEhSRUUuVmVjdG9yMygxODAsIDEwLCAtMTAwKSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIDApKTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDg1LCAxMCwgLTM1KSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDEzNSwgMTAsIC0zNSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxMCwgNTUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtTWF0aC5QSSAvIDIsIDApKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoNzAsIDEwLCA1NSkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMygxMTAsIDEwLCA1NSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEksIDApKTtcclxuXHJcblx0XHRsZXQgYm94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgxOCwgMS41LCAzOC41KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMSwgMS41LCAzOC41KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cclxuXHRcdC8qIEdSRUVOIFBPSU5UIFJFU1BBV04gKi9cclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0zMCwgMS41LCA3MCk7XHJcblx0XHRib3gucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyA0LCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA3NCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgNzcpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDgwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgNC41LCA4MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDIuMSwgODMuNik7XHJcblx0XHRib3gucm90YXRpb24uc2V0KE1hdGguUEkgLyA0LCAwLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogUkVEIFBPSU5UIFJFU1BBV04gKi9cclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIzMCwgMS41LCAtMTEwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMjcsIDEuNSwgLTExMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjI3LCA0LjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIyNywgMS41LCAtMTEzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMzMsIDEuNSwgLTExMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjM3LCAxLjUsIC0xMTApO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gNCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0bGV0IGZsb29yID0gRmxvb3IuY3JlYXRlKCk7XHJcblx0XHRmbG9vci5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoZmxvb3IpO1xyXG5cclxuXHRcdC8qIFNLWSBTUEhFUkUgKi9cclxuXHJcblx0XHRsZXQgc2t5X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHNreV90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdza3lzcGhlcmUnKTtcclxuXHRcdHNreV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoQ09OU1RBTlRTLlNLWVNQSEVSRS5SQURJVVMsIENPTlNUQU5UUy5TS1lTUEhFUkUuV0lEVEhfU0VHTUVOVFMsIENPTlNUQU5UUy5TS1lTUEhFUkUuSEVJR0hUX1NFR01FTlRTKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc2t5X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlLCBzaWRlOiBUSFJFRS5CYWNrU2lkZSB9KTtcclxuXHRcdGxldCBza3kgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFdPUkxEIEJPVU5ESU5HIEJPWCAqL1xyXG5cclxuXHRcdGJveCA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShDT05TVEFOVFMuQk9VTkRJTkdfQk9YLldJRFRILCBDT05TVEFOVFMuQk9VTkRJTkdfQk9YLkhFSUdIVCwgQ09OU1RBTlRTLkJPVU5ESU5HX0JPWC5ERVBUSCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoeyB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC4wLCBzaWRlOiBUSFJFRS5CYWNrU2lkZSB9KTtcclxuXHRcdGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goYm94LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuV29ybGQgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSG91c2UodHlwZSwgcG9zaXRpb24sIHJvdGF0aW9uKSB7XHJcblxyXG5cdFx0bGV0IGJ1aWxkaW5nO1xyXG5cclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblx0XHRyb3RhdGlvbiA9IHJvdGF0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdGlmKFwiTGFyZ2VcIiA9PT0gdHlwZSkge1xyXG5cclxuXHRcdFx0YnVpbGRpbmcgPSB0aGlzLmxhcmdlSG91c2VCdWlsZGVyLmJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHRcdFx0YnVpbGRpbmcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ09OU1RBTlRTLkxBUkdFX0hPVVNFLldJRFRILCBDT05TVEFOVFMuTEFSR0VfSE9VU0UuSEVJR0hULCBDT05TVEFOVFMuTEFSR0VfSE9VU0UuREVQVEgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHRcdFx0YnVpbGRpbmcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ09OU1RBTlRTLk1FRElVTV9IT1VTRS5XSURUSCwgQ09OU1RBTlRTLk1FRElVTV9IT1VTRS5IRUlHSFQsIENPTlNUQU5UUy5NRURJVU1fSE9VU0UuREVQVEgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHsgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuMCB9KTtcclxuXHRcdGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmcsIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgTW91c2VDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IEJ1bGxldCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cclxuXHRcdHRoaXMuYnVsbGV0cyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShDT05TVEFOVFMuQ0FNRVJBLkZSVVNUVU0sIENPTlNUQU5UUy5DQU1FUkEuQVNQRUNUX1JBVElPLCBDT05TVEFOVFMuQ0FNRVJBLk5FQVIsIENPTlNUQU5UUy5DQU1FUkEuRkFSKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChDT05TVEFOVFMuUkVEX1BPSU5ULlgsIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hULCBDT05TVEFOVFMuUkVEX1BPSU5ULlopO1xyXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KDAsIDAsIC0xKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5idWxsZXRzW2ldLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCByaWdodCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRyaWdodC5jcm9zc1ZlY3RvcnMod29ybGREaXJlY3Rpb24sIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuUExBWUVSLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHRsZXQgYmFja3dhcmQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0YmFja3dhcmQuY3Jvc3NWZWN0b3JzKHJpZ2h0LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGZvcndhcmQgPSBiYWNrd2FyZC5jbG9uZSgpLm5lZ2F0ZSgpO1xyXG5cdFx0bGV0IGxlZnQgPSByaWdodC5jbG9uZSgpLm5lZ2F0ZSgpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcgJiYgIXRoaXMuZmFsbGluZykge1xyXG5cclxuXHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUZvcndhcmQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQoZm9yd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQobGVmdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGJhY2t3YXJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQocmlnaHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92aW5nQ29sbGlzaW9uKHNjZW5lLCB0aGlzLm1vdmluZ1ZlY3Rvci5jbG9uZSgpKSkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHRoaXMubW92aW5nVmVjdG9yLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gdGhpcy5tb3ZpbmdWZWN0b3IuejtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLlBMQVlFUi5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSArPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5mYWxsaW5nKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZihjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuUExBWUVSLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uICs9IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGgubWluKHRoaXMuanVtcGluZ1NhdHVyYXRpb24sIE1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1vdmluZ0NvbGxpc2lvbihzY2VuZSwgZGlyZWN0aW9uKSB7XHJcblxyXG5cdFx0ZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG5cclxuXHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIGRpcmVjdGlvbik7XHJcblx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRsZXQgZmxhZzEgPSAhY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlID4gMik7XHJcblxyXG5cdFx0bGV0IG5vcm0gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0bm9ybS5jcm9zc1ZlY3RvcnMoZGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCk7XHJcblxyXG5cdFx0bGV0IHJpZ2h0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHJpZ2h0LmFkZChub3JtKS5hZGQodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSk7XHJcblxyXG5cdFx0bm9ybS5uZWdhdGUoKTtcclxuXHJcblx0XHRsZXQgbGVmdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRsZWZ0LmFkZChub3JtKS5hZGQodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSk7XHJcblxyXG5cdFx0cmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihyaWdodCwgZGlyZWN0aW9uKTtcclxuXHRcdGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWcyID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIobGVmdCwgZGlyZWN0aW9uKTtcclxuXHRcdGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWczID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdHJldHVybiBmbGFnMSAmJiBmbGFnMiAmJiBmbGFnMztcclxuXHR9XHJcblxyXG5cdGdyYXZpdGF0aW9uKHNjZW5lKSB7XHJcblxyXG5cdFx0aWYoIXRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZighY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiAoY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSAtIENPTlNUQU5UUy5QTEFZRVIuSEVJR0hUKSA+IDAuMDEpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlQnVsbGVyKCkge1xyXG5cclxuXHRcdGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuY2FtZXJhLnJvdGF0aW9uLmNsb25lKCksIHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5idWxsZXRzLnB1c2goYnVsbGV0KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1bGxldC5nZXRJbnN0YW5jZSgpKTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcblxyXG5cdGdldENvbnRyb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW91c2VDb250cm9sbGVyLmdldE9iamVjdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuUGxheWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub25DbGljayA9IChldmVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLnBsYXllci5jcmVhdGVCdWxsZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7IHNlbGYub25Nb3VzZU1vdmUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBzZWxmLm9uQ2xpY2soZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRnZXRPYmplY3QoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMueWF3T2JqZWN0O1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVsbGV0ID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcm90YXRpb24sIGRpcmVjdGlvbikge1xyXG5cclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShDT05TVEFOVFMuQlVMTEVULlJBRElVUywgQ09OU1RBTlRTLkJVTExFVC5SQURJVVMsIENPTlNUQU5UUy5CVUxMRVQuSEVJR0hULCBDT05TVEFOVFMuQlVMTEVULlJBRElVU19TRUdNRU5UUyk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnZ3JlZW4nIH0pO1xyXG5cdFx0dGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1x0XHRcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZCh0aGlzLm1lc2gpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueilcclxuXHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcblx0XHR0aGlzLmRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuQlVMTEVULlNQRUVEKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uYWRkKHRoaXMuZGlyZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGdldEluc3RhbmNlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWxsZXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5GbG9vciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHJcblx0XHRsZXQgZmxvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRcclxuXHRcdGZsb29yX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Zsb29yJyk7XHJcblx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGZsb29yX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGZsb29yX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQ09OU1RBTlRTLkZMT09SLldJRFRILCBDT05TVEFOVFMuRkxPT1IuSEVJR0hULCBDT05TVEFOVFMuRkxPT1IuV0lEVEhfU0VHTUVOVFMsIENPTlNUQU5UUy5GTE9PUi5IRUlHSFRfU0VHTUVOVFMpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBmbG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSwgc2lkZTogVEhSRUUuQmFja1NpZGUgfSk7XHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkZsb29yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBDT05TT0xFIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5Db25zb2xlLmpzJztcclxuXHJcbmxldCBpbWFnZXMgPSB7IH07XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLkxvYWRlciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGdldEltYWdlKG5hbWUpIHtcclxuXHRcdHJldHVybiBpbWFnZXNbbmFtZV07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEltYWdlcyhjYWxsYmFjaykge1xyXG5cclxuXHRcdGxldCBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsZXQgbG9hZEltYWdlID0gKHBhdGgpID0+IHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cdFx0XHRcdGxvYWRlci5sb2FkKHBhdGgsIChpbWFnZSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdENPTlNPTEUub3V0KHBhdGggKyBcIiB3YXMgbG9hZGVkLlwiLCBDT05TVEFOVFMuTUVTU0FHRS5OT1RJQ0UpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlc1twYXRoLnN1YnN0cig0LCBwYXRoLmxlbmd0aCAtIDgpXSA9IGltYWdlO1xyXG5cclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5CTEFOSylcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkJPWDEpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuQk9YMik7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5ET09SKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkZMT09SKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLlNLWVNQSEVSRSk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoQ09OU1RBTlRTLklNQUdFUy5URVhUSUxFKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLkJMT0NLKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZShDT05TVEFOVFMuSU1BR0VTLldPT0QpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKENPTlNUQU5UUy5JTUFHRVMuV0lORE9XKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgY2FsbGJhY2soKTsgfSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuaW1wb3J0IERvb3IgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5Eb29yLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoNTQsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMjcsIDUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDE4LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoOSwgMTUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBibG9ja190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRibG9ja190ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdibG9jaycpO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRibG9ja190ZXh0dXJlLnJlcGVhdC5zZXQoMTAsIDUpO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxvY2tzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxvY2tfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgZ2FtZVdpbmRvdztcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoOS4zLCAxMi41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUuMywgMTIuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LjMsIDMuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogUklHSFQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgMTUsIC0xMik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDE1LCAtMzYpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogQkFDS1dBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg5LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgMTUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCAxNSwgLTEyKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHR9XHJcblxyXG5cdGJ1aWxkQmxhbmtzKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxhbmssIGJ1aWxkaW5nQmxhbmtzO1xyXG5cclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHRcdFx0XHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKChpICUgMyA/IDAuNSA6IDEpLCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIHRydWUpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoKGkgJSAzID8gMC4yNSA6IDAuNSkgKyA2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgKGkgJSAzID8gMC4xNzUgOiAwLjI1KSk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTgsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoOSArIDM2ICogaiwgMjAsIC00MCAqIGkpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCA3LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5LCAxNSwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzksIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTIsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0MiwgNiwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCA2OyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAyMCwgMC4yNSwgaiAhPT0gMCk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE4ICogaSwgMTAsIC04ICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCAoaSAlIDMpICE9PSAwKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAtNDApO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsICgwID09PSBpID8gNTQgOiA0MCksIDAuMjUsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0aWYoMCA9PT0gaSkge1xyXG5cdFx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCAxMCwgLTQwICogaik7XHJcblx0XHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNTQgKiBqLCAxMCwgLTIwKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA0MCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAyMCwgLTIwKTtcclxuXHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JsYW5rJyk7XHJcblx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBkb29yID0gRG9vci5jcmVhdGUoNS43LCA4KTtcclxuXHJcblx0XHRkb29yLnBvc2l0aW9uLnNldCgyNy4yLCAzLCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChkb29yKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkU3R1ZmYoKSB7XHJcblxyXG5cdFx0bGV0IHN0dWZmLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIHRyZWVzO1xyXG5cclxuXHRcdHN0dWZmID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gNCAqIHUgLSAyO1xyXG5cdFx0XHR2ID0gOCAqIHYgLSA0O1xyXG5cdFx0XHRsZXQgeSA9IDIgKiBNYXRoLnNxcnQoMC4wMyAqIHUgKiB1ICsgMC4wMyAqIHYgKiB2KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdGxldCB0ZXh0aWxlX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdHRleHRpbGVfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgndGV4dGlsZScpO1xyXG5cdFx0dGV4dGlsZV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dGlsZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblxyXG5cclxuXHRcdHRyZWVzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0bGV0IHRyZWVfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0dHJlZV90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCd3b29kJyk7XHJcblx0XHR0cmVlX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4wNSwgMC4wNSwgNSk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdHJlZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDAsIDAuNzUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAwKTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIC1NYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRyZWVzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdHN0dWZmLnBvc2l0aW9uLnNldCg5LCAyLCAzKTtcclxuXHRcdHN0dWZmLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gOSwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoc3R1ZmYpO1xyXG5cclxuXHJcblxyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0Ym94X3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JveDEnKTtcclxuXHRcdGJveF90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYm94X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoNy45LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxMC41LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDIuMjUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLSAyNywgcG9zaXRpb24ueSAtIDEwLCBwb3NpdGlvbi56ICsgMjApO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgyNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0yMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0yNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigyMCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdC8qIElOREVQRU5ERU5UIENPTlNUUlVDVElORyBQQVJUUyAqL1xyXG5cdGJ1aWxkRmFjYWRlKCkgeyB9XHJcblx0YnVpbGRCbGFua3MoKSB7IH1cclxuXHRidWlsZFdpbmRvd3MoKSB7IH1cclxuXHRidWlsZERvb3JzKCkgeyB9XHJcblx0YnVpbGRTdHVmZigpIHsgfVxyXG5cclxuXHQvKiBDT05TVFJVQ1QgT0JKRUNUICovXHJcblx0YnVpbGQocG9zaXRpb24sIHJvdGF0aW9uKSB7XHJcblxyXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHRcdHJvdGF0aW9uID0gcm90YXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGYWNhZGUoKTtcclxuXHRcdHRoaXMuYnVpbGRCbGFua3MoKTtcclxuXHRcdHRoaXMuYnVpbGRXaW5kb3dzKCk7XHJcblx0XHR0aGlzLmJ1aWxkRG9vcnMoKTtcclxuXHRcdHRoaXMuYnVpbGRTdHVmZigpO1xyXG5cclxuXHRcdHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG5cdFx0dGhpcy5zZXRSb3RhdGlvbihyb3RhdGlvbik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvKiBPQkpFQ1QgTE9DQVRJT04gKi9cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikgeyB9XHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHsgfVxyXG5cclxuXHJcblx0LyogVEVYVFVSRSBOT1JNQUxJWkFUSU9OICovXHJcblx0YXNzaWduVVZzKGdlb21ldHJ5KSB7XHJcblxyXG5cdCAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKTtcclxuXHJcblx0ICAgIGxldCBtYXggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXg7XHJcblx0ICAgIGxldCBtaW4gPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW47XHJcblxyXG5cdCAgICBsZXQgb2Zmc2V0ICA9IG5ldyBUSFJFRS5WZWN0b3IzKDAgLSBtaW4ueCwgMCAtIG1pbi55LCAwIC0gbWluLnopO1xyXG5cdCAgICBsZXQgcmFuZ2UgICA9IG5ldyBUSFJFRS5WZWN0b3IzKG1heC54IC0gbWluLngsIG1heC55IC0gbWluLnksIG1heC56IC0gbWluLnopO1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXSA9IFtdO1xyXG5cclxuXHQgICAgbGV0IGZhY2VzID0gZ2VvbWV0cnkuZmFjZXM7XHJcblxyXG5cdCAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmZhY2VzLmxlbmd0aCA7IGkrKykge1xyXG5cclxuXHQgICAgICBsZXQgdjEgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5hXTtcclxuXHQgICAgICBsZXQgdjIgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5iXTtcclxuXHQgICAgICBsZXQgdjMgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5jXTtcclxuXHJcblx0ICAgICAgaWYodjEueCA9PT0gdjIueCAmJiB2Mi54ID09PSB2My54KSB7XHJcblx0XHQgICAgICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdLnB1c2goW1xyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2MS56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYxLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2Mi56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYyLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2My56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYzLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApXHJcblx0XHQgICAgICBdKTtcclxuXHQgICAgICB9IGVsc2UgaWYodjEueSA9PT0gdjIueSAmJiB2Mi55ID09PSB2My55KSB7XHJcblx0XHRcdCAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2MS56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2Mi56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2My56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjEueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjIueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjMueSArIG9mZnNldC55ICkgLyByYW5nZS55IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZ2VvbWV0cnkudXZzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsb2NrID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGhlaWdodCwgd2lkdGgsIGRlcHRoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGhlaWdodCwgd2lkdGgsIGRlcHRoKTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIGNvbmUpIHtcclxuXHJcblx0XHRsZXQgaW5zdGFuY2UsIGdlb21ldHJ5LCBtZXNoLCBjb250YWluZXI7XHJcblxyXG5cdFx0Y29udGFpbmVyID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRpZih0cnVlID09PSBjb25lKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoZGVwdGgsIDIpO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoKHdpZHRoIC8gMikgLSBkZXB0aCwgKGhlaWdodCAvIDIpICsgMSwgMCk7XHJcblxyXG5cdFx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goY29udGFpbmVyKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbGFuaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2luZG93ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCB3aW5kb3dfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0d2luZG93X3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ3dpbmRvdycpO1xyXG5cdFx0d2luZG93X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KENPTlNUQU5UUy5XSU5ET1cuV0lEVEgsIENPTlNUQU5UUy5XSU5ET1cuSEVJR0hUKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogd2luZG93X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaW5kb3c7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRG9vciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaDtcclxuXHJcblx0XHRsZXQgZG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRkb29yX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Rvb3InKTtcclxuXHRcdGRvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Eb29yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMnO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRmFjYWRlKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxvY2ssIGJ1aWxkaW5nQmxvY2tzO1xyXG5cdFx0XHJcblx0XHRidWlsZGluZ0Jsb2NrcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDMwLCAyMCwgMzApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDE1LCAxMCwgLTE1KTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bGV0IGJsb2NrX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsb2NrX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Jsb2NrJyk7XHJcblx0XHRibG9ja190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0Jsb2Nrcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsb2NrX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IGdhbWVXaW5kb3c7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgMC4wMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMjUsIDUsIDAuMDEpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDMwLjAxLCAxNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNSwgNSwgLTMwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cdFx0XHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIDIwLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICogKGkgPT09IDMgPyAtMSA6IDEpICsgMTAgKiBpLCAxMCwgLTMwICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCArIDEwICogaSwgLTE1KTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCAoaSAlIDMgIT09IDApKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCwgLTEwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTUsIDEwICsgMTAgKiBpLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JsYW5rJyk7XHJcblx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsYW5rX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBkb29yID0gRG9vci5jcmVhdGUoNCwgOCk7XHJcblxyXG5cdFx0ZG9vci5wb3NpdGlvbi5zZXQoOCwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZG9vcik7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDE1LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAxNSk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTE1KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDE1KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJveCA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHRcdFxyXG5cdFx0bGV0IGxvYWRlciwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDMsIDMpO1xyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRcclxuXHRcdGJveF90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdib3gyJyk7XHJcblx0XHRib3hfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJveF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBtZXNoO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQm94O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJveC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=