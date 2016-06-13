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
	
	var _ShooterUtilsRequestAnimationFrame = __webpack_require__(2);
	
	var _ShooterUtilsRequestAnimationFrame2 = _interopRequireDefault(_ShooterUtilsRequestAnimationFrame);
	
	var _ShooterUtilsRequestPointerLock = __webpack_require__(3);
	
	var _ShooterUtilsRequestPointerLock2 = _interopRequireDefault(_ShooterUtilsRequestPointerLock);
	
	var _ShooterControllersWindowController = __webpack_require__(4);
	
	var _ShooterControllersWindowController2 = _interopRequireDefault(_ShooterControllersWindowController);
	
	var _ShooterGraphicsRenderer = __webpack_require__(6);
	
	var _ShooterGraphicsRenderer2 = _interopRequireDefault(_ShooterGraphicsRenderer);
	
	var _ShooterEntitiesWorld = __webpack_require__(7);
	
	var _ShooterEntitiesWorld2 = _interopRequireDefault(_ShooterEntitiesWorld);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
	
		/* LOCK THE POINTER */
		(0, _ShooterUtilsRequestPointerLock2.default)();
	
		var console = document.getElementById('console');
		/*let pointLocker = document.getElementById('pointLocker');
	 let circle = document.getElementById('circle');
	 
	 circle.addEventListener('click', () => {
	 
	 	pointLocker.style.display = 'none';
	 
	 });*/
	
		_ShooterGraphicsLoader2.default.loadImages(console, function () {
	
			console.style.display = 'none';
			//pointLocker.style.display = 'block';
	
			/* START GAME */
			var __instance = new Shooter.Game();
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
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	}();
	
	exports.default = Shooter.Utils.requestAnimationFrame;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestPointerLock = function () {
	
			var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
	
			if (havePointerLock) {
					(function () {
	
							console.log("Shooter.Utils.requestPointerLock > Pointer Lock API was founded.");
	
							var body = document.body;
	
							var lockPointer = function lockPointer(event) {
	
									body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;
	
									body.requestPointerLock();
							};
	
							body.addEventListener('click', lockPointer, false);
					})();
			} else {
					console.log("Your browser doesn't support Pointer Lock API.");
			}
	};
	
	exports.default = Shooter.Utils.requestPointerLock;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterEntitiesPlayer = __webpack_require__(9);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesFloor = __webpack_require__(13);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder = __webpack_require__(15);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersLargeHouseBuilder);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder = __webpack_require__(21);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersMediumHouseBuilder);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	var _ShooterEntitiesBox = __webpack_require__(22);
	
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
	
					box = new THREE.BoxGeometry(1000, 250, 1000);
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersKeyboardController = __webpack_require__(10);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(11);
	
	var _ShooterControllersMouseController2 = _interopRequireDefault(_ShooterControllersMouseController);
	
	var _ShooterEntitiesBullet = __webpack_require__(12);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
			value: function loadImages(console, callback) {
	
				var loader = new THREE.ImageLoader();
	
				var loadImage = function loadImage(path) {
	
					return new Promise(function (resolve, reject) {
	
						loader.load(path, function (image) {
	
							var note = document.createElement('div');
							note.innerHTML = ">> " + path + " was loaded.";
	
							console.appendChild(note);
	
							images[path.substr(4, path.length - 8)] = image;
	
							resolve();
						});
					});
				};
	
				loadImage('img/blank.jpg').then(function () {
					return loadImage('img/box1.jpg');
				}).then(function () {
					return loadImage('img/box2.jpg');
				}).then(function () {
					return loadImage('img/door.jpg');
				}).then(function () {
					return loadImage('img/floor.jpg');
				}).then(function () {
					return loadImage('img/skysphere.jpg');
				}).then(function () {
					return loadImage('img/textile.jpg');
				}).then(function () {
					return loadImage('img/block.jpg');
				}).then(function () {
					return loadImage('img/tree.jpg');
				}).then(function () {
					return loadImage('img/window.jpg');
				}).then(function () {
					callback();
				});
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Loader;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(16);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(17);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(18);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(19);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(20);
	
	var _ShooterEntitiesDoor2 = _interopRequireDefault(_ShooterEntitiesDoor);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
	
							tree_texture.image = _ShooterGraphicsLoader2.default.getImage('tree');
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(16);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(17);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(18);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(19);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterEntitiesDoor = __webpack_require__(20);
	
	var _ShooterEntitiesDoor2 = _interopRequireDefault(_ShooterEntitiesDoor);
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(14);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjUxODk1YjE5YjY0YmI0ODdiMmQiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVsbGV0LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUVmLFdBQUksZUFBSjtXQUFZLGlCQUFaO1dBQXNCLGlCQUF0QjtXQUFnQyxhQUFoQzs7QUFFQSxrQkFBVyxJQUFJLE1BQU0sV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFYOztBQUVBLFdBQUksY0FBYyxJQUFJLE1BQU0sT0FBVixFQUFsQjs7QUFFQSxtQkFBWSxLQUFaLEdBQW9CLGdDQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBcEI7QUFDQSxtQkFBWSxXQUFaLEdBQTBCLElBQTFCOztBQUVBLGtCQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssV0FBUCxFQUFvQixVQUFVLElBQTlCLEVBQTVCLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFQOztBQUVBLGNBQU8sSUFBUDtBQUNBO0FBakJGOztBQUFBO0FBQUE7O21CQW9CZSxRQUFRLFFBQVIsQ0FBaUIsRyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjUxODk1YjE5YjY0YmI0ODdiMmRcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4uL25hbWVzcGFjZS5qcyc7XHJcblxyXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5pbXBvcnQgcmVxdWVzdFBvaW50ZXJMb2NrIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanMnO1xyXG5cclxuaW1wb3J0IFdpbmRvd0NvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdHRoaXMuRlBTID0gbmV3IFN0YXRzKCk7XHJcblx0XHR0aGlzLkZQUy5zZXRNb2RlKDApO1xyXG5cclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5GUFMuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdChmdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5iZWdpbigpO1xyXG5cclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmVuZCgpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpbScpO1xyXG5cdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdGNhbnZhcy53aWR0aCA9IDIwO1xyXG5cdGNhbnZhcy5oZWlnaHQgPSAyMDtcclxuXHJcblx0Y29udGV4dC5saW5lV2lkdGggPSBcIjJcIjtcclxuXHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygxMCwgMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTAsIDgpO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygwLCAxMCk7XHJcblx0Y29udGV4dC5saW5lVG8oOCwgMTApO1xyXG5cdGNvbnRleHQuc3Ryb2tlKCk7XHJcblx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRjb250ZXh0Lm1vdmVUbygyMCwgMTApO1xyXG5cdGNvbnRleHQubGluZVRvKDEyLCAxMCk7XHJcblx0Y29udGV4dC5zdHJva2UoKTtcclxuXHRjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cdGNvbnRleHQubW92ZVRvKDEwLCAyMCk7XHJcblx0Y29udGV4dC5saW5lVG8oMTAsIDEyKTtcclxuXHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdGxldCBjb25zb2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKTtcclxuXHQvKmxldCBwb2ludExvY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludExvY2tlcicpO1xyXG5cdGxldCBjaXJjbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlJyk7XHJcblxyXG5cdGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRwb2ludExvY2tlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuXHR9KTsqL1xyXG5cclxuXHRMb2FkZXIubG9hZEltYWdlcyhjb25zb2xlLCAoKSA9PiB7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdC8vcG9pbnRMb2NrZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdFx0LyogU1RBUlQgR0FNRSAqL1xyXG5cdFx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxuXHJcblx0fSk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR2FtZS9TaG9vdGVyLkdhbWUuanNcbiAqKi8iLCJ3aW5kb3cuU2hvb3RlciA9IChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgU2hvb3RlcikgPyB7fSA6IFNob290ZXI7XHJcblxyXG53aW5kb3cuU2hvb3Rlci5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XHJcbiAgICBsZXQgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSBTaG9vdGVyO1xyXG5cclxuICAgIGlmIChcIlNob290ZXJcIiA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgc2luZ2xlUGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgcGFyZW50W3NpbmdsZVBhcnRdKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtzaW5nbGVQYXJ0XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbc2luZ2xlUGFydF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25hbWVzcGFjZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcclxuXHRyZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuICAgICAgICBcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcblx0XHRcdGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcblx0XHRcdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA9ICgpID0+IHtcclxuXHJcblx0bGV0IGhhdmVQb2ludGVyTG9jayA9ICdwb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICdtb3pQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICd3ZWJraXRQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50O1xyXG5cclxuXHRpZihoYXZlUG9pbnRlckxvY2spIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIlNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID4gUG9pbnRlciBMb2NrIEFQSSB3YXMgZm91bmRlZC5cIik7XHJcblxyXG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHRcdGxldCBsb2NrUG9pbnRlciA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2sgPSBib2R5LnJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5Lm1velJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5LndlYmtpdFJlcXVlc3RQb2ludGVyTG9jaztcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9ja1BvaW50ZXIsIGZhbHNlKTtcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBQb2ludGVyIExvY2sgQVBJLlwiKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXIucmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSApO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyKGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHsgfVxyXG5cdGRldGFjaEV2ZW50cygpIHsgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcbmltcG9ydCBGbG9vciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMnO1xyXG5cclxuaW1wb3J0IExhcmdlSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzJztcclxuaW1wb3J0IE1lZGl1bUhvdXNlQnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJveC5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuc2NlbmUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGF5ZXIuZ2V0Q29udHJvbHMoKSk7XHJcblxyXG5cdFx0dGhpcy5sYXJnZUhvdXNlQnVpbGRlciA9IG5ldyBMYXJnZUhvdXNlQnVpbGRlcigpO1xyXG5cdFx0dGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIgPSBuZXcgTWVkaXVtSG91c2VCdWlsZGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIkxhcmdlXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxMCwgLTQwKSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTGFyZ2VcIiwgbmV3IFRIUkVFLlZlY3RvcjMoMTgwLCAxMCwgLTEwMCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMyg4NSwgMTAsIC0zNSkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMygxMzUsIDEwLCAtMzUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCkpO1xyXG5cdFx0dGhpcy5jcmVhdGVIb3VzZShcIk1lZGl1bVwiLCBuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLU1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLmNyZWF0ZUhvdXNlKFwiTWVkaXVtXCIsIG5ldyBUSFJFRS5WZWN0b3IzKDcwLCAxMCwgNTUpKTtcclxuXHRcdHRoaXMuY3JlYXRlSG91c2UoXCJNZWRpdW1cIiwgbmV3IFRIUkVFLlZlY3RvcjMoMTEwLCAxMCwgNTUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJLCAwKSk7XHJcblxyXG5cdFx0bGV0IGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMTgsIDEuNSwgMzguNSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjEsIDEuNSwgMzguNSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHJcblx0XHQvKiBHUkVFTiBQT0lOVCBSRVNQQVdOICovXHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMzAsIDEuNSwgNzApO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gNCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgNzQpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDc3KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA4MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDQuNSwgODApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAyLjEsIDgzLjYpO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldChNYXRoLlBJIC8gNCwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJFRCBQT0lOVCBSRVNQQVdOICovXHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMzAsIDEuNSwgLTExMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjI3LCAxLjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIyNywgNC41LCAtMTEwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMjcsIDEuNSwgLTExMyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoMjMzLCAxLjUsIC0xMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIzNywgMS41LCAtMTEwKTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDQsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdGxldCBmbG9vciA9IEZsb29yLmNyZWF0ZSgpO1xyXG5cdFx0Zmxvb3Iucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGZsb29yKTtcclxuXHJcblx0XHQvKiBTS1kgU1BIRVJFICovXHJcblxyXG5cdFx0bGV0IHNreV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRza3lfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnc2t5c3BoZXJlJyk7XHJcblx0XHRza3lfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KENPTlNUQU5UUy5TS1lTUEhFUkUuUkFESVVTLCBDT05TVEFOVFMuU0tZU1BIRVJFLldJRFRIX1NFR01FTlRTLCBDT05TVEFOVFMuU0tZU1BIRVJFLkhFSUdIVF9TRUdNRU5UUyk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNreV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSwgc2lkZTogVEhSRUUuQmFja1NpZGUgfSk7XHJcblx0XHRsZXQgc2t5ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChza3kpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBXT1JMRCBCT1VORElORyBCT1ggKi9cclxuXHJcblx0XHRib3ggPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAwMCwgMjUwLCAxMDAwKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7IHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjAsIHNpZGU6IFRIUkVFLkJhY2tTaWRlIH0pO1xyXG5cdFx0bGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChib3gsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVIb3VzZSh0eXBlLCBwb3NpdGlvbiwgcm90YXRpb24pIHtcclxuXHJcblx0XHRsZXQgYnVpbGRpbmc7XHJcblxyXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHRcdHJvdGF0aW9uID0gcm90YXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0aWYoXCJMYXJnZVwiID09PSB0eXBlKSB7XHJcblxyXG5cdFx0XHRidWlsZGluZyA9IHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIuYnVpbGQocG9zaXRpb24sIHJvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cdFx0XHRidWlsZGluZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShDT05TVEFOVFMuTEFSR0VfSE9VU0UuV0lEVEgsIENPTlNUQU5UUy5MQVJHRV9IT1VTRS5IRUlHSFQsIENPTlNUQU5UUy5MQVJHRV9IT1VTRS5ERVBUSCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGJ1aWxkaW5nID0gdGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIuYnVpbGQocG9zaXRpb24sIHJvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cdFx0XHRidWlsZGluZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShDT05TVEFOVFMuTUVESVVNX0hPVVNFLldJRFRILCBDT05TVEFOVFMuTUVESVVNX0hPVVNFLkhFSUdIVCwgQ09OU1RBTlRTLk1FRElVTV9IT1VTRS5ERVBUSCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoeyB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC4wIH0pO1xyXG5cdFx0bGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUodGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjZW5lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLmdldENhbWVyYSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV29ybGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLkNvbnN0YW50cyA9IHtcclxuXHJcblx0Q0FNRVJBOiB7XHJcblx0XHRGUlVTVFVNOiA0NSxcclxuXHRcdEFTUEVDVF9SQVRJTzogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblx0XHRORUFSOiAxLFxyXG5cdFx0RkFSOiAxMDAwMFxyXG5cdH0sXHJcblxyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcdFxyXG5cclxuXHRQTEFZRVI6IHtcclxuXHRcdEhFSUdIVDogMyxcclxuXHRcdEpVTVBfU1RSRU5HVEg6IDAuNSxcclxuXHRcdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblx0fSxcclxuXHJcblx0R1JBVklUWTogNTAsXHRcclxuXHJcblx0RkxPT1I6IHtcclxuXHRcdFdJRFRIOiAzMDAwLFxyXG5cdFx0SEVJR0hUOiAzMDAwLFxyXG5cdFx0V0lEVEhfU0VHTUVOVFM6IDQwLFxyXG5cdFx0SEVJR0hUX1NFR01FTlRTOiA0MFxyXG5cdH0sXHJcblxyXG5cdEJVTExFVDoge1xyXG5cdFx0UkFESVVTOiAwLjA1LFxyXG5cdFx0SEVJR0hUOiAyLFxyXG5cdFx0UkFESVVTX1NFR01FTlRTOiAzMixcclxuXHRcdFNQRUVEOiA0XHJcblx0fSxcclxuXHJcblx0V0lORE9XOiB7XHJcblx0XHRXSURUSDogNCxcclxuXHRcdEhFSUdIVDogNFxyXG5cdH0sXHJcblxyXG5cdExBUkdFX0hPVVNFOiB7XHJcblx0XHRXSURUSDogNTQsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDQwXHJcblx0fSxcclxuXHJcblx0TUVESVVNX0hPVVNFOiB7XHJcblx0XHRXSURUSDogMzAsXHJcblx0XHRIRUlHSFQ6IDIwLFxyXG5cdFx0REVQVEg6IDMwXHJcblx0fSxcclxuXHJcblx0U0tZU1BIRVJFOiB7XHJcblx0XHRSQURJVVM6IDQwMDAsXHJcblx0XHRXSURUSF9TRUdNRU5UUzogMzIsXHJcblx0XHRIRUlHSFRfU0VHTUVOVFM6IDMyXHJcblx0fSxcclxuXHJcblx0R1JFRU5fUE9JTlQ6IHtcclxuXHRcdFg6IC00MCxcclxuXHRcdFo6IDgwXHJcblx0fSxcclxuXHJcblx0UkVEX1BPSU5UOiB7XHJcblx0XHRYOiAyMzQsXHJcblx0XHRaOiAtMTIwXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBCdWxsZXQgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1bGxldC5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUpIHtcclxuXHJcblx0XHR0aGlzLmJ1bGxldHMgPSBbXTtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoQ09OU1RBTlRTLkNBTUVSQS5GUlVTVFVNLCBDT05TVEFOVFMuQ0FNRVJBLkFTUEVDVF9SQVRJTywgQ09OU1RBTlRTLkNBTUVSQS5ORUFSLCBDT05TVEFOVFMuQ0FNRVJBLkZBUik7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoQ09OU1RBTlRTLlJFRF9QT0lOVC5YLCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCwgQ09OU1RBTlRTLlJFRF9QT0lOVC5aKTtcclxuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdCgwLCAwLCAtMSk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMuYnVsbGV0c1tpXS51cGRhdGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5QTEFZRVIuTU9WRU1FTlRfU1BFRUQpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmlnaHQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0cmlnaHQuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLlBMQVlFUi5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGJhY2t3YXJkID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdGJhY2t3YXJkLmNyb3NzVmVjdG9ycyhyaWdodCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5QTEFZRVIuTU9WRU1FTlRfU1BFRUQpO1xyXG5cclxuXHRcdGxldCBmb3J3YXJkID0gYmFja3dhcmQuY2xvbmUoKS5uZWdhdGUoKTtcclxuXHRcdGxldCBsZWZ0ID0gcmlnaHQuY2xvbmUoKS5uZWdhdGUoKTtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nICYmICF0aGlzLmZhbGxpbmcpIHtcclxuXHJcblx0XHRcdHRoaXMubW92aW5nVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGxlZnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLmFkZChiYWNrd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZVJpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKHJpZ2h0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmluZ0NvbGxpc2lvbihzY2VuZSwgdGhpcy5tb3ZpbmdWZWN0b3IuY2xvbmUoKSkpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSB0aGlzLm1vdmluZ1ZlY3Rvci54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHRoaXMubW92aW5nVmVjdG9yLno7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ncmF2aXRhdGlvbihzY2VuZSk7XHJcblxyXG5cdFx0aWYodGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCB8fCBcclxuXHRcdFx0XHQoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1KSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5QTEFZRVIuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLlBMQVlFUi5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtb3ZpbmdDb2xsaXNpb24oc2NlbmUsIGRpcmVjdGlvbikge1xyXG5cclxuXHRcdGRpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuXHJcblx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCBkaXJlY3Rpb24pO1xyXG5cdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0bGV0IGZsYWcxID0gIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpO1xyXG5cclxuXHRcdGxldCBub3JtID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdG5vcm0uY3Jvc3NWZWN0b3JzKGRpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuXHRcdGxldCByaWdodCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRyaWdodC5hZGQobm9ybSkuYWRkKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCkpO1xyXG5cclxuXHRcdG5vcm0ubmVnYXRlKCk7XHJcblxyXG5cdFx0bGV0IGxlZnQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0bGVmdC5hZGQobm9ybSkuYWRkKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCkpO1xyXG5cclxuXHRcdHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIocmlnaHQsIGRpcmVjdGlvbik7XHJcblx0XHRjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdGxldCBmbGFnMiA9ICFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKTtcclxuXHJcblx0XHRyYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKGxlZnQsIGRpcmVjdGlvbik7XHJcblx0XHRjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdGxldCBmbGFnMyA9ICFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKTtcclxuXHJcblx0XHRyZXR1cm4gZmxhZzEgJiYgZmxhZzIgJiYgZmxhZzM7XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgKGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgLSBDT05TVEFOVFMuUExBWUVSLkhFSUdIVCkgPiAwLjAxKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUJ1bGxlcigpIHtcclxuXHJcblx0XHRsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLmNhbWVyYS5yb3RhdGlvbi5jbG9uZSgpLCB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpKTtcclxuXHRcdHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWxsZXQuZ2V0SW5zdGFuY2UoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYW1lcmE7XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9scygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vdXNlQ29udHJvbGxlci5nZXRPYmplY3QoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlBsYXllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuV0hJVEVTUEFDRToge1xyXG5cdFx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5vbktleVVwID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleVVwKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0LmFkZCgpO1xyXG5cclxuXHRcdHRoaXMueWF3T2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnlhd09iamVjdC5hZGQodGhpcy5waXRjaE9iamVjdCk7XHJcblxyXG5cdFx0dGhpcy5QSV8yID0gLTAuMSArIE1hdGguUEkgLyAyOyAvLyAtMC4xIGlzIHRoZSBFcHNpbG9uIGZvciBnaW1iYWwgbG9jayBwcmV2ZW50LlxyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGxldCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0XHRsZXQgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcclxuXHJcblx0XHRcdHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnkgLT0gbW92ZW1lbnRYICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54IC09IG1vdmVtZW50WSAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblxyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggPSBNYXRoLm1heCggLXRoaXMuUElfMiwgTWF0aC5taW4oIHRoaXMuUElfMiwgdGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ICkgKTtcclxuXHJcblx0XHRcdGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSk7XHJcblx0XHRcdGxldCByb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIllYWlwiKTtcclxuXHRcdFx0bGV0IGxvb2tBdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRyb3RhdGlvbi5zZXQodGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54LCB0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55LCAwKTtcclxuXHJcblx0XHRcdGxvb2tBdC5jb3B5KGRpcmVjdGlvbikuYXBwbHlFdWxlcihyb3RhdGlvbik7XHJcblxyXG5cdFx0XHRsb29rQXQueCArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueDtcclxuXHRcdFx0bG9va0F0LnkgKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLnk7XHJcblx0XHRcdGxvb2tBdC56ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi56O1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0dGhpcy5wbGF5ZXIuY3JlYXRlQnVsbGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4geyBzZWxmLm9uTW91c2VNb3ZlKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgc2VsZi5vbkNsaWNrKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0T2JqZWN0KCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnlhd09iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1bGxldCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IocG9zaXRpb24sIHJvdGF0aW9uLCBkaXJlY3Rpb24pIHtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoQ09OU1RBTlRTLkJVTExFVC5SQURJVVMsIENPTlNUQU5UUy5CVUxMRVQuUkFESVVTLCBDT05TVEFOVFMuQlVMTEVULkhFSUdIVCwgQ09OU1RBTlRTLkJVTExFVC5SQURJVVNfU0VHTUVOVFMpO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHRcdHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcdFx0XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQodGhpcy5tZXNoKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopXHJcblxyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblxyXG5cdFx0dGhpcy5kaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLkJVTExFVC5TUEVFRCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLmFkZCh0aGlzLmRpcmVjdGlvbik7XHJcblx0fVxyXG5cclxuXHRnZXRJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVsbGV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1bGxldC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRmxvb3IgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IGZsb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cdFx0XHJcblx0XHRmbG9vcl90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCdmbG9vcicpO1xyXG5cdFx0Zmxvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRmbG9vcl90ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRmbG9vcl90ZXh0dXJlLnJlcGVhdC5zZXQoMTAwLCAxMDApO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KENPTlNUQU5UUy5GTE9PUi5XSURUSCwgQ09OU1RBTlRTLkZMT09SLkhFSUdIVCwgQ09OU1RBTlRTLkZMT09SLldJRFRIX1NFR01FTlRTLCBDT05TVEFOVFMuRkxPT1IuSEVJR0hUX1NFR01FTlRTKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZmxvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUsIHNpZGU6IFRIUkVFLkJhY2tTaWRlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5GbG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcbmxldCBpbWFnZXMgPSB7IH07XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLkxvYWRlciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGdldEltYWdlKG5hbWUpIHtcclxuXHRcdHJldHVybiBpbWFnZXNbbmFtZV07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEltYWdlcyhjb25zb2xlLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdGxldCBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsZXQgbG9hZEltYWdlID0gKHBhdGgpID0+IHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cdFx0XHRcdGxvYWRlci5sb2FkKHBhdGgsIChpbWFnZSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGxldCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0XHRub3RlLmlubmVySFRNTCA9IFwiPj4gXCIgKyBwYXRoICsgXCIgd2FzIGxvYWRlZC5cIjtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmFwcGVuZENoaWxkKG5vdGUpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlc1twYXRoLnN1YnN0cig0LCBwYXRoLmxlbmd0aCAtIDgpXSA9IGltYWdlO1xyXG5cclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsb2FkSW1hZ2UoJ2ltZy9ibGFuay5qcGcnKVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKCdpbWcvYm94MS5qcGcnKTsgfSlcclxuXHRcdC50aGVuKCgpID0+IHsgcmV0dXJuIGxvYWRJbWFnZSgnaW1nL2JveDIuanBnJyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoJ2ltZy9kb29yLmpwZycpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKCdpbWcvZmxvb3IuanBnJyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoJ2ltZy9za3lzcGhlcmUuanBnJyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoJ2ltZy90ZXh0aWxlLmpwZycpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKCdpbWcvYmxvY2suanBnJyk7IH0pXHJcblx0XHQudGhlbigoKSA9PiB7IHJldHVybiBsb2FkSW1hZ2UoJ2ltZy90cmVlLmpwZycpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyByZXR1cm4gbG9hZEltYWdlKCdpbWcvd2luZG93LmpwZycpOyB9KVxyXG5cdFx0LnRoZW4oKCkgPT4geyBjYWxsYmFjaygpOyB9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMnO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkRvb3IuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRidWlsZEZhY2FkZSgpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsb2NrLCBidWlsZGluZ0Jsb2NrcztcclxuXHRcdFxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSg1NCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCgyNywgNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCg5LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bGV0IGJsb2NrX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGJsb2NrX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2Jsb2NrJyk7XHJcblx0XHRibG9ja190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdGJsb2NrX3RleHR1cmUucmVwZWF0LnNldCgxMCwgNSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbG9ja3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibG9ja190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0Jsb2NrcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRXaW5kb3dzKCkge1xyXG5cclxuXHRcdGxldCBnYW1lV2luZG93O1xyXG5cclxuXHRcdC8qIEZPUldBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg5LjMsIDEyLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NS4zLCAxMi41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUuMywgMy41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCAxNSwgLTEyKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgNSwgLTI4KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgMTUsIC0zNik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBCQUNLV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDksIDE1LCAtNDAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUsIDE1LCAtNDAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogTEVGVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCAxNSwgLTI4KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoLTAuMDEsIDE1LCAtMTIpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cdH1cclxuXHJcblx0YnVpbGRCbGFua3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibGFuaywgYnVpbGRpbmdCbGFua3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbGFua3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cdFx0XHRcclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgoaSAlIDMgPyAwLjI1IDogMC41KSArIDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAoaSAlIDMgPyAwLjE3NSA6IDAuMjUpKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxOCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5ICsgMzYgKiBqLCAyMCwgLTQwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDksIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzOSwgNywgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxMiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDQyLCA2LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0NSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDY7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCBqICE9PSAwKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAxMCwgLTggKiBqKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIChpICUgMykgIT09IDApO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIC00MCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKDAgPT09IGkgPyA1NCA6IDQwKSwgMC4yNSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRpZigwID09PSBpKSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDEwLCAtNDAgKiBqKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg1NCAqIGosIDEwLCAtMjApO1xyXG5cdFx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDQwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxOCAqIGksIDIwLCAtMjApO1xyXG5cdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYmxhbmtfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0YmxhbmtfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYmxhbmsnKTtcclxuXHRcdGJsYW5rX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS5yZXBlYXQuc2V0KDUsIDUpO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxhbmtzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxhbmtfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbGFua3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRG9vcnMoKSB7XHJcblxyXG5cdFx0bGV0IGRvb3IgPSBEb29yLmNyZWF0ZSg1LjcsIDgpO1xyXG5cclxuXHRcdGRvb3IucG9zaXRpb24uc2V0KDI3LjIsIDMsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGRvb3IpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRTdHVmZigpIHtcclxuXHJcblx0XHRsZXQgc3R1ZmYsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgdHJlZXM7XHJcblxyXG5cdFx0c3R1ZmYgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoKHUsIHYpID0+IHtcclxuXHJcblx0XHRcdHUgPSA0ICogdSAtIDI7XHJcblx0XHRcdHYgPSA4ICogdiAtIDQ7XHJcblx0XHRcdGxldCB5ID0gMiAqIE1hdGguc3FydCgwLjAzICogdSAqIHUgKyAwLjAzICogdiAqIHYpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUsIHksIHYpO1xyXG5cclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bGV0IHRleHRpbGVfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0dGV4dGlsZV90ZXh0dXJlLmltYWdlID0gTG9hZGVyLmdldEltYWdlKCd0ZXh0aWxlJyk7XHJcblx0XHR0ZXh0aWxlX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0aWxlX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0xLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCBNYXRoLlBJIC8gNik7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHJcblxyXG5cdFx0dHJlZXMgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRsZXQgdHJlZV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHR0cmVlX3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ3RyZWUnKTtcclxuXHRcdHRyZWVfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjA1LCAwLjA1LCA1KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0cmVlX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMCwgMC43NSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIDApO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgLU1hdGguUEkgLyA1KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0xLjUsIC0wLjUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCBNYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2godHJlZXMsIG1hdGVyaWFsKTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0c3R1ZmYucG9zaXRpb24uc2V0KDksIDIsIDMpO1xyXG5cdFx0c3R1ZmYucm90YXRpb24uc2V0KE1hdGguUEkgLyA5LCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChzdHVmZik7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0bGV0IGJveF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRib3hfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYm94MScpO1xyXG5cdFx0Ym94X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBib3hfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDAuNzUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEwLjUsIDAuNzUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDcuOSwgMi4yNSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDI3LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAyMCk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTIwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDIwKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0LyogSU5ERVBFTkRFTlQgQ09OU1RSVUNUSU5HIFBBUlRTICovXHJcblx0YnVpbGRGYWNhZGUoKSB7IH1cclxuXHRidWlsZEJsYW5rcygpIHsgfVxyXG5cdGJ1aWxkV2luZG93cygpIHsgfVxyXG5cdGJ1aWxkRG9vcnMoKSB7IH1cclxuXHRidWlsZFN0dWZmKCkgeyB9XHJcblxyXG5cdC8qIENPTlNUUlVDVCBPQkpFQ1QgKi9cclxuXHRidWlsZChwb3NpdGlvbiwgcm90YXRpb24pIHtcclxuXHJcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cdFx0cm90YXRpb24gPSByb3RhdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0dGhpcy5idWlsZEZhY2FkZSgpO1xyXG5cdFx0dGhpcy5idWlsZEJsYW5rcygpO1xyXG5cdFx0dGhpcy5idWlsZFdpbmRvd3MoKTtcclxuXHRcdHRoaXMuYnVpbGREb29ycygpO1xyXG5cdFx0dGhpcy5idWlsZFN0dWZmKCk7XHJcblxyXG5cdFx0dGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcblx0XHR0aGlzLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8qIE9CSkVDVCBMT0NBVElPTiAqL1xyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7IH1cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikgeyB9XHJcblxyXG5cclxuXHQvKiBURVhUVVJFIE5PUk1BTElaQVRJT04gKi9cclxuXHRhc3NpZ25VVnMoZ2VvbWV0cnkpIHtcclxuXHJcblx0ICAgIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xyXG5cclxuXHQgICAgbGV0IG1heCA9IGdlb21ldHJ5LmJvdW5kaW5nQm94Lm1heDtcclxuXHQgICAgbGV0IG1pbiA9IGdlb21ldHJ5LmJvdW5kaW5nQm94Lm1pbjtcclxuXHJcblx0ICAgIGxldCBvZmZzZXQgID0gbmV3IFRIUkVFLlZlY3RvcjMoMCAtIG1pbi54LCAwIC0gbWluLnksIDAgLSBtaW4ueik7XHJcblx0ICAgIGxldCByYW5nZSAgID0gbmV3IFRIUkVFLlZlY3RvcjMobWF4LnggLSBtaW4ueCwgbWF4LnkgLSBtaW4ueSwgbWF4LnogLSBtaW4ueik7XHJcblxyXG5cdCAgICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdID0gW107XHJcblxyXG5cdCAgICBsZXQgZmFjZXMgPSBnZW9tZXRyeS5mYWNlcztcclxuXHJcblx0ICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cnkuZmFjZXMubGVuZ3RoIDsgaSsrKSB7XHJcblxyXG5cdCAgICAgIGxldCB2MSA9IGdlb21ldHJ5LnZlcnRpY2VzW2ZhY2VzW2ldLmFdO1xyXG5cdCAgICAgIGxldCB2MiA9IGdlb21ldHJ5LnZlcnRpY2VzW2ZhY2VzW2ldLmJdO1xyXG5cdCAgICAgIGxldCB2MyA9IGdlb21ldHJ5LnZlcnRpY2VzW2ZhY2VzW2ldLmNdO1xyXG5cclxuXHQgICAgICBpZih2MS54ID09PSB2Mi54ICYmIHYyLnggPT09IHYzLngpIHtcclxuXHRcdCAgICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiAsICggdjEueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiAsICggdjIueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiAsICggdjMueSArIG9mZnNldC55ICkgLyByYW5nZS55IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH0gZWxzZSBpZih2MS55ID09PSB2Mi55ICYmIHYyLnkgPT09IHYzLnkpIHtcclxuXHRcdFx0ICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdLnB1c2goW1xyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2MS54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYxLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2Mi54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYyLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2My54ICsgb2Zmc2V0LnggKSAvIHJhbmdlLnggLCAoIHYzLnogKyBvZmZzZXQueiApIC8gcmFuZ2UueiApXHJcblx0XHQgICAgICBdKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2MS55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2Mi55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2My55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBnZW9tZXRyeS51dnNOZWVkVXBkYXRlID0gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxvY2sgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CbGFuayA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgY29uZSkge1xyXG5cclxuXHRcdGxldCBpbnN0YW5jZSwgZ2VvbWV0cnksIG1lc2gsIGNvbnRhaW5lcjtcclxuXHJcblx0XHRjb250YWluZXIgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdGlmKHRydWUgPT09IGNvbmUpIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeShkZXB0aCwgMik7XHJcblx0XHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblxyXG5cdFx0XHRtZXNoLnBvc2l0aW9uLnNldCgod2lkdGggLyAyKSAtIGRlcHRoLCAoaGVpZ2h0IC8gMikgKyAxLCAwKTtcclxuXHJcblx0XHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGNvbnRhaW5lci5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChjb250YWluZXIpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsYW5rO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IHdpbmRvd190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHR3aW5kb3dfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnd2luZG93Jyk7XHJcblx0XHR3aW5kb3dfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoQ09OU1RBTlRTLldJTkRPVy5XSURUSCwgQ09OU1RBTlRTLldJTkRPVy5IRUlHSFQpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB3aW5kb3dfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldpbmRvdztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Eb29yID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGxldCBkb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdGRvb3JfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnZG9vcicpO1xyXG5cdFx0ZG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gbWVzaDtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkRvb3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qcyc7XHJcbmltcG9ydCBCbGFuayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qcyc7XHJcbmltcG9ydCBEb29yIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuRG9vci5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMzAsIDIwLCAzMCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMTUsIDEwLCAtMTUpO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRsZXQgYmxvY2tfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0YmxvY2tfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYmxvY2snKTtcclxuXHRcdGJsb2NrX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxvY2tfdGV4dHVyZS5yZXBlYXQuc2V0KDUsIDUpO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxvY2tzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxvY2tfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgZ2FtZVdpbmRvdztcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAwLjAxKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgyNSwgNSwgMC4wMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJJR0hUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMzAuMDEsIDE1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogQkFDS1dBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgxNSwgMTUsIC0zMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1LCA1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogTEVGVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCA1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1x0XHRcclxuXHR9XHJcblxyXG5cdGJ1aWxkQmxhbmtzKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxhbmssIGJ1aWxkaW5nQmxhbmtzO1xyXG5cclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgoaSAlIDMgPyAwLjUgOiAxKSwgMjAsIChpICUgMyA/IDAuMjUgOiAwLjUpLCB0cnVlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoKGkgJSAzID8gMC4yNSA6IDAuNSkgKiAoaSA9PT0gMyA/IC0xIDogMSkgKyAxMCAqIGksIDEwLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAzMCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzMCAqIGosIDEwICsgMTAgKiBpLCAtMTUpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMjAsIDAuMjUsIChpICUgMyAhPT0gMCkpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzMCAqIGosIDEwLCAtMTAgKiBpKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAzMCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxNSwgMTAgKyAxMCAqIGksIC0zMCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYmxhbmtfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0YmxhbmtfdGV4dHVyZS5pbWFnZSA9IExvYWRlci5nZXRJbWFnZSgnYmxhbmsnKTtcclxuXHRcdGJsYW5rX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0YmxhbmtfdGV4dHVyZS5yZXBlYXQuc2V0KDUsIDUpO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxhbmtzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxhbmtfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbGFua3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRG9vcnMoKSB7XHJcblxyXG5cdFx0bGV0IGRvb3IgPSBEb29yLmNyZWF0ZSg0LCA4KTtcclxuXHJcblx0XHRkb29yLnBvc2l0aW9uLnNldCg4LCAzLCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChkb29yKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkU3R1ZmYoKSB7XHJcblxyXG5cdFx0bGV0IHN0dWZmLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIHRyZWVzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54IC0gMTUsIHBvc2l0aW9uLnkgLSAxMCwgcG9zaXRpb24ueiArIDE1KTtcclxuXHR9XHJcblxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoMTUpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKDEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigtMTUpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgtMTUpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKC0xMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooMTUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQm94ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgbG9hZGVyLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMywgMyk7XHJcblxyXG5cdFx0bGV0IGJveF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHRcdFxyXG5cdFx0Ym94X3RleHR1cmUuaW1hZ2UgPSBMb2FkZXIuZ2V0SW1hZ2UoJ2JveDInKTtcclxuXHRcdGJveF90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYm94X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Cb3g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQm94LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==