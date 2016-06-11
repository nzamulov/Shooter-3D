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
	
			/* LOCK THE POINTER */
			(0, _ShooterUtilsRequestPointerLock2.default)();
	
			/* START GAME */
			var __instance = new Shooter.Game();
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
	
	var _ShooterEntitiesPlayer = __webpack_require__(8);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesFloor = __webpack_require__(12);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder = __webpack_require__(14);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersLargeHouseBuilder);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder = __webpack_require__(19);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersMediumHouseBuilder);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	var _ShooterEntitiesBox = __webpack_require__(20);
	
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
	
					var building = this.largeHouseBuilder.build(new THREE.Vector3(30, 10, -40));
					this.scene.add(building);
	
					building = this.largeHouseBuilder.build(new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(85, 10, -35));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(70, 10, 55));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));
					this.scene.add(building);
	
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
					box.position.set(-28.5, 2, 83.5);
					box.rotation.set(Math.PI / 2, 0, 0);
					this.scene.add(box);
	
					/* ------------------ */
	
					var floor = _ShooterEntitiesFloor2.default.create();
					floor.position.set(-1000, 0, -1000);
					floor.rotation.set(Math.PI / 2, 0, 0);
					this.scene.add(floor);
	
					/* SKY SPHERE */
	
					var sky_texture = new THREE.Texture();
	
					_ShooterGraphicsLoader2.default.instance.getImage('img/skysphere.jpg', function (image) {
							sky_texture.image = image;
							sky_texture.needsUpdate = true;
					});
	
					var geometry = new THREE.SphereGeometry(2000, 32, 32);
					var material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true });
					material.side = THREE.DoubleSide;
					var sky = new THREE.Mesh(geometry, material);
	
					this.scene.add(sky);
					/* ---------- */
	
					/* DESERT */
	
					/*let desert_texture, loader;
	    		desert_texture = new THREE.Texture();
	    loader = new THREE.ImageLoader();
	    		loader.load('img/desert.jpg', (image) => {
	    	desert_texture.image = image;
	    	desert_texture.needsUpdate = true;
	    });
	    		geometry = new THREE.ParametricGeometry((u, v) => {
	    			u = 1000 * u;
	    	v = 1000 * v;
	    	let y = 60 * Math.abs(Math.sin(Math.pow(u * v, 1 / 5)));
	    			return new THREE.Vector3(u, y, v);
	    }, 20, 20);
	    		material = new THREE.MeshBasicMaterial({ map: desert_texture, overdraw: true });
	    material.side = THREE.DoubleSide;
	    let curve = new THREE.Mesh(geometry, material);
	    		curve.position.x = -10;
	    curve.position.z = -300;
	    curve.position.y = -10;
	    		curve.rotation.y = Math.PI / 2;
	    		this.scene.add(curve);
	    		curve = new THREE.Mesh(geometry, material);
	    		curve.position.x = 10;
	    curve.position.z = -300;
	    curve.position.y = -10;
	    		curve.rotation.y = Math.PI;
	    		this.scene.add(curve);*/
	
					/* ------ */
	
					/* SKY */
	
					/*geometry = new THREE.SphereGeometry(3000);
	    		let canvas = document.createElement('canvas');
	    let context = canvas.getContext('2d');
	    		context.canvas.width = 3000;
	    context.canvas.height = 3000;
	    		let gradient = context.createRadialGradient(1500, 1500, 30, 1500, 1500, 700);
	    		gradient.addColorStop(0, 'white');
	    gradient.addColorStop(0.1, '#AAA8FF');
	    gradient.addColorStop(1, '#504DFF');
	    		context.arc(1500, 1500, 3000, 0, 2 * Math.PI);
	    		context.fillStyle = gradient;
	    context.fill();
	    		let shadowTexture = new THREE.Texture(canvas);
	    shadowTexture.needsUpdate = true;
	    		material = new THREE.MeshBasicMaterial({
	    	map: shadowTexture,
	    	side: THREE.BackSide
	    });
	    		let sky = new THREE.Mesh(geometry, material);
	    		sky.rotation.y = -Math.PI / 2;
	    sky.rotation.z = Math.PI / 9;
	    		this.scene.add(sky);*/
	
					/* ------ */
	
					console.log("> Shooter.Entities.World > constructor > ready");
			}
	
			_createClass(_class, [{
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(9);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersKeyboardController = __webpack_require__(10);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(11);
	
	var _ShooterControllersMouseController2 = _interopRequireDefault(_ShooterControllersMouseController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Player = function () {
		function _class(scene) {
			_classCallCheck(this, _class);
	
			this.moveForward = false;
			this.moveLeft = false;
			this.moveBackward = false;
			this.moveRight = false;
	
			this.jumping = false;
			this.falling = false;
			this.jumpingSaturation = Math.PI / 2;
	
			this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
			this.camera.position.set(0, 3, 0);
			this.camera.lookAt(0, 0, -1);
	
			this.keyboardController = _ShooterControllersKeyboardController2.default.create(this);
			this.mouseController = _ShooterControllersMouseController2.default.create(this);
	
			console.log("> Shooter.Entities.Player > constructor > ready");
		}
	
		_createClass(_class, [{
			key: 'update',
			value: function update(scene) {
	
				var worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				var strafe = new THREE.Vector3();
				strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				var forward = new THREE.Vector3();
				forward.crossVectors(strafe, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				if (!this.jumping && !this.falling) {
	
					this.movingVector = new THREE.Vector3(0, 0, 0);
	
					if (this.moveForward) {
						this.movingVector.sub(forward);
					}
	
					if (this.moveLeft) {
						this.movingVector.sub(strafe);
					}
	
					if (this.moveBackward) {
						this.movingVector.add(forward);
					}
	
					if (this.moveRight) {
						this.movingVector.add(strafe);
					}
				}
	
				this.camera.position.x += this.movingVector.x;
				this.camera.position.z += this.movingVector.z;
	
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
	
						var addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
						this.camera.position.y += addHeight;
						this.jumpingSaturation -= Math.PI / _ShooterConstants2.default.GRAVITY;
					}
				}
	
				if (this.falling) {
	
					var _originPoint = this.camera.position.clone();
					var _ray = new THREE.Raycaster(_originPoint, new THREE.Vector3(0, -1, 0));
					var _collisionResults = _ray.intersectObjects(scene.children);
	
					if (_collisionResults.length > 0 && _collisionResults[0].distance < 3) {
	
						this.falling = false;
						this.jumpingSaturation = Math.PI / 2;
	
						this.camera.position.y = Math.max(this.camera.position.y, 3);
					} else {
	
						var _addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
						this.camera.position.y -= _addHeight;
						this.jumpingSaturation += Math.PI / _ShooterConstants2.default.GRAVITY;
	
						this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);
					}
				}
			}
		}, {
			key: 'gravitation',
			value: function gravitation(scene) {
	
				if (!this.jumping) {
	
					var ray = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0));
					var collisionResults = ray.intersectObjects(scene.children);
	
					if (!collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance > 2) {
						this.falling = true;
					}
				}
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
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Shooter.Constants = {
	
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
	
		/* PHYSIC */
		JUMP_STRENGTH: 0.5,
		GRAVITY: 50,
		MOVEMENT_SPEED: 0.25
	
	};
	
	exports.default = Shooter.Constants;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(9);
	
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
	
	var _ShooterConstants = __webpack_require__(9);
	
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
	
							var self = this;
	
							document.addEventListener('mousemove', function (event) {
									self.onMouseMove(event);
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
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/floor.jpg', function (image) {
									floor_texture.image = image;
									floor_texture.needsUpdate = true;
									floor_texture.wrapS = THREE.RepeatWrapping;
									floor_texture.wrapT = THREE.RepeatWrapping;
									floor_texture.repeat.set(100, 100);
							});
	
							var geometry = new THREE.PlaneGeometry(3000, 3000, 40, 40);
							var material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true });
							material.side = THREE.DoubleSide;
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Floor;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	var _instance = Symbol();
	
	Shooter.Graphics.Loader = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.loader = new THREE.ImageLoader();
		}
	
		_createClass(_class, [{
			key: "getImage",
			value: function getImage(path, callback) {
				this.loader.load(path, function (image) {
					callback(image);
				});
			}
		}], [{
			key: "instance",
			get: function get() {
				if (!this[_instance]) {
					this[_instance] = new Shooter.Graphics.Loader();
				}
				return this[_instance];
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Loader;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(15);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(16);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(17);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(18);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
									block_texture.image = image;
									block_texture.needsUpdate = true;
									block_texture.wrapS = THREE.RepeatWrapping;
									block_texture.wrapT = THREE.RepeatWrapping;
									block_texture.repeat.set(10, 5);
							});
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/blank.jpg', function (image) {
									blank_texture.image = image;
									blank_texture.needsUpdate = true;
									blank_texture.wrapS = THREE.RepeatWrapping;
									blank_texture.wrapT = THREE.RepeatWrapping;
									blank_texture.repeat.set(5, 5);
							});
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							var door_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/door.jpg', function (image) {
									door_texture.image = image;
									door_texture.needsUpdate = true;
							});
	
							geometry = new THREE.PlaneGeometry(5.7, 8);
							material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(27.2, 3, 0.01);
	
							this.instance.add(mesh);
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/textile.jpg', function (image) {
									textile_texture.image = image;
									textile_texture.needsUpdate = true;
							});
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tree.jpg', function (image) {
									tree_texture.image = image;
									tree_texture.needsUpdate = true;
							});
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/box1.jpg', function (image) {
									box_texture.image = image;
									box_texture.needsUpdate = true;
							});
	
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/window.jpg', function (image) {
									window_texture.image = image;
									window_texture.needsUpdate = true;
							});
	
							var geometry = new THREE.PlaneGeometry(4, 4);
							var material = new THREE.MeshBasicMaterial({ map: window_texture, overdraw: true });
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Window;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(15);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(16);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(17);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(18);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
									block_texture.image = image;
									block_texture.needsUpdate = true;
									block_texture.wrapS = THREE.RepeatWrapping;
									block_texture.wrapT = THREE.RepeatWrapping;
									block_texture.repeat.set(5, 5);
							});
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/blank.jpg', function (image) {
									blank_texture.image = image;
									blank_texture.needsUpdate = true;
									blank_texture.wrapS = THREE.RepeatWrapping;
									blank_texture.wrapT = THREE.RepeatWrapping;
									blank_texture.repeat.set(5, 5);
							});
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							var door_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/door.jpg', function (image) {
									door_texture.image = image;
									door_texture.needsUpdate = true;
							});
	
							geometry = new THREE.PlaneGeometry(4, 8);
							material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(8, 3, 0.01);
	
							this.instance.add(mesh);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
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
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/box2.jpg', function (image) {
									box_texture.image = image;
									box_texture.needsUpdate = true;
							});
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNhMDk0ZTc0NmI0ZjYzMDliNmQiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNB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LE1BQU0sV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFYOztBQUVBLFdBQUksY0FBYyxJQUFJLE1BQU0sT0FBVixFQUFsQjs7QUFFQSx1Q0FBTyxRQUFQLENBQWdCLFFBQWhCLENBQXlCLGNBQXpCLEVBQXlDLFVBQUMsS0FBRCxFQUFXO0FBQ25ELHFCQUFZLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxxQkFBWSxXQUFaLEdBQTBCLElBQTFCO0FBQ0EsUUFIRDs7QUFLQSxrQkFBVyxJQUFJLE1BQU0saUJBQVYsQ0FBNEIsRUFBRSxLQUFLLFdBQVAsRUFBb0IsVUFBVSxJQUE5QixFQUE1QixDQUFYO0FBQ0EsY0FBTyxJQUFJLE1BQU0sSUFBVixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FBUDs7QUFFQSxjQUFPLElBQVA7QUFDQTtBQW5CRjs7QUFBQTtBQUFBOzttQkFzQmUsUUFBUSxRQUFSLENBQWlCLEciLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDAzYTA5NGU3NDZiNGY2MzA5YjZkXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdHRoaXMuRlBTID0gbmV3IFN0YXRzKCk7XHJcblx0XHR0aGlzLkZQUy5zZXRNb2RlKDApO1xyXG5cclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5GUFMuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdChmdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5iZWdpbigpO1xyXG5cclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmVuZCgpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA+IFBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzJztcclxuaW1wb3J0IEZsb29yIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyc7XHJcblxyXG5pbXBvcnQgTGFyZ2VIb3VzZUJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgTWVkaXVtSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJveCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQm94LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV29ybGQgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zY2VuZSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYXllci5nZXRDb250cm9scygpKTtcclxuXHJcblx0XHR0aGlzLmxhcmdlSG91c2VCdWlsZGVyID0gbmV3IExhcmdlSG91c2VCdWlsZGVyKCk7XHJcblx0XHR0aGlzLm1lZGl1bUhvdXNlQnVpbGRlciA9IG5ldyBNZWRpdW1Ib3VzZUJ1aWxkZXIoKTtcclxuXHJcblx0XHRsZXQgYnVpbGRpbmcgPSB0aGlzLmxhcmdlSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxMCwgLTQwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLmxhcmdlSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDE4MCwgMTAsIC0xMDApLCBuZXcgVEhSRUUuVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCkpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cclxuXHRcdGJ1aWxkaW5nID0gdGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoODUsIDEwLCAtMzUpKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDEzNSwgMTAsIC0zNSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLU1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMyg3MCwgMTAsIDU1KSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMygxMTAsIDEwLCA1NSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEksIDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRsZXQgYm94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgxOCwgMS41LCAzOC41KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgyMSwgMS41LCAzOC41KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cclxuXHRcdC8qIEdSRUVOIFBPSU5UIFJFU1BBV04gKi9cclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0zMCwgMS41LCA3MCk7XHJcblx0XHRib3gucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyA0LCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA3NCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgNzcpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDgwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgNC41LCA4MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDIsIDgzLjUpO1xyXG5cdFx0Ym94LnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcblxyXG5cdFx0bGV0IGZsb29yID0gRmxvb3IuY3JlYXRlKCk7XHJcblx0XHRmbG9vci5wb3NpdGlvbi5zZXQoLTEwMDAsIDAsIC0xMDAwKTtcclxuXHRcdGZsb29yLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChmbG9vcik7XHJcblxyXG5cdFx0LyogU0tZIFNQSEVSRSAqL1xyXG5cclxuXHRcdGxldCBza3lfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvc2t5c3BoZXJlLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRza3lfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRza3lfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMjAwMCwgMzIsIDMyKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc2t5X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgc2t5ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChza3kpO1xyXG5cdFx0LyogLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcblx0XHQvKiBERVNFUlQgKi9cclxuXHJcblx0XHQvKmxldCBkZXNlcnRfdGV4dHVyZSwgbG9hZGVyO1xyXG5cclxuXHRcdGRlc2VydF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHRcdGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xyXG5cclxuXHRcdGxvYWRlci5sb2FkKCdpbWcvZGVzZXJ0LmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRkZXNlcnRfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRkZXNlcnRfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoKHUsIHYpID0+IHtcclxuXHJcblx0XHRcdHUgPSAxMDAwICogdTtcclxuXHRcdFx0diA9IDEwMDAgKiB2O1xyXG5cdFx0XHRsZXQgeSA9IDYwICogTWF0aC5hYnMoTWF0aC5zaW4oTWF0aC5wb3codSAqIHYsIDEgLyA1KSkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUsIHksIHYpO1xyXG5cdFx0fSwgMjAsIDIwKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZGVzZXJ0X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgY3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAtMTA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi56ID0gLTMwMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnkgPSAtMTA7XHJcblxyXG5cdFx0Y3VydmUucm90YXRpb24ueSA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1cnZlKTtcclxuXHJcblx0XHRjdXJ2ZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0Y3VydmUucG9zaXRpb24ueCA9IDEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1cnZlKTsqL1xyXG5cclxuXHRcdC8qIC0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFNLWSAqL1xyXG5cclxuXHRcdC8qZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMzAwMCk7XHJcblxyXG5cdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0XHRjb250ZXh0LmNhbnZhcy53aWR0aCA9IDMwMDA7XHJcblx0XHRjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSAzMDAwO1xyXG5cclxuXHRcdGxldCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMTUwMCwgMTUwMCwgMzAsIDE1MDAsIDE1MDAsIDcwMCk7XHJcblxyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICd3aGl0ZScpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMSwgJyNBQUE4RkYnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnIzUwNERGRicpO1xyXG5cclxuXHRcdGNvbnRleHQuYXJjKDE1MDAsIDE1MDAsIDMwMDAsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHJcblx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0Y29udGV4dC5maWxsKCk7XHJcblxyXG5cdFx0bGV0IHNoYWRvd1RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShjYW52YXMpO1xyXG5cdFx0c2hhZG93VGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG5cdFx0XHRtYXA6IHNoYWRvd1RleHR1cmUsXHJcblx0XHRcdHNpZGU6IFRIUkVFLkJhY2tTaWRlXHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgc2t5ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRza3kucm90YXRpb24ueSA9IC1NYXRoLlBJIC8gMjtcclxuXHRcdHNreS5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoc2t5KTsqL1xyXG5cclxuXHRcdC8qIC0tLS0tLSAqL1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLldvcmxkID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSh0aGlzLnNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGdldFNjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmU7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FtZXJhKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Xb3JsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cclxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDMsIDApO1xyXG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KDAsIDAsIC0xKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHRcdFxyXG5cdFx0bGV0IHN0cmFmZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRzdHJhZmUuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHRsZXQgZm9yd2FyZCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRmb3J3YXJkLmNyb3NzVmVjdG9ycyhzdHJhZmUsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcgJiYgIXRoaXMuZmFsbGluZykge1xyXG5cclxuXHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUZvcndhcmQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5zdWIoZm9yd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5zdWIoc3RyYWZlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlQmFja3dhcmQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQoZm9yd2FyZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZVJpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKHN0cmFmZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSB0aGlzLm1vdmluZ1ZlY3Rvci54O1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSB0aGlzLm1vdmluZ1ZlY3Rvci56O1xyXG5cclxuXHRcdHRoaXMuZ3Jhdml0YXRpb24oc2NlbmUpO1xyXG5cclxuXHRcdGlmKHRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcblx0XHRcdG9yaWdpblBvaW50LnkgKz0gMTsgLy8gcHJldmVudCBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kIGFuZCBncmlkLlxyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIDw9IDAgfHwgXHJcblx0XHRcdFx0KGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMS4yNSkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gMDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAzKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIDMpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udHJvbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb3VzZUNvbnRyb2xsZXIuZ2V0T2JqZWN0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdC8qIENPTlRST0xTICovXHJcblx0S0VZUzoge1xyXG5cclxuXHRcdFc6IDg3LFxyXG5cdFx0QTogNjUsXHJcblx0XHRTOiA4MyxcclxuXHRcdEQ6IDY4LFxyXG5cclxuXHRcdEFSUk9XX1VQOiAzOCxcclxuXHRcdEFSUk9XX0xFRlQ6IDM3LFxyXG5cdFx0QVJST1dfRE9XTjogNDAsXHJcblx0XHRBUlJPV19SSUdIVDogMzksXHJcblxyXG5cdFx0V0hJVEVTUEFDRTogMzJcclxuXHR9LFxyXG5cclxuXHRDVVJTT1JfU1BFRUQ6IDAuMDAyLFxyXG5cclxuXHQvKiBQSFlTSUMgKi9cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNTAsXHJcblx0TU9WRU1FTlRfU1BFRUQ6IDAuMjVcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbktleURvd24gPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkE6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLldISVRFU1BBQ0U6IHtcclxuXHRcdFx0XHRcdGlmKCF0aGlzLnBsYXllci5mYWxsaW5nKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyLmp1bXBpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMub25LZXlVcCA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkE6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4geyBzZWxmLm9uS2V5RG93bihldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlVcChldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuXHRcdHRoaXMucGxheWVyLmNhbWVyYS5yb3RhdGlvbi5zZXQoMCwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5waXRjaE9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cdFx0dGhpcy5waXRjaE9iamVjdC5hZGQoKTtcclxuXHJcblx0XHR0aGlzLnlhd09iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cdFx0dGhpcy55YXdPYmplY3QuYWRkKHRoaXMucGl0Y2hPYmplY3QpO1xyXG5cclxuXHRcdHRoaXMuUElfMiA9IC0wLjEgKyBNYXRoLlBJIC8gMjsgLy8gLTAuMSBpcyB0aGUgRXBzaWxvbiBmb3IgZ2ltYmFsIGxvY2sgcHJldmVudC5cclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcclxuXHRcdFx0bGV0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XHJcblxyXG5cdFx0XHR0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55IC09IG1vdmVtZW50WCAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCAtPSBtb3ZlbWVudFkgKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ID0gTWF0aC5tYXgoIC10aGlzLlBJXzIsIE1hdGgubWluKCB0aGlzLlBJXzIsIHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCApICk7XHJcblxyXG5cdFx0XHRsZXQgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgLTEpO1xyXG5cdFx0XHRsZXQgcm90YXRpb24gPSBuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCwgXCJZWFpcIik7XHJcblx0XHRcdGxldCBsb29rQXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHRcdFx0cm90YXRpb24uc2V0KHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCwgdGhpcy55YXdPYmplY3Qucm90YXRpb24ueSwgMCk7XHJcblxyXG5cdFx0XHRsb29rQXQuY29weShkaXJlY3Rpb24pLmFwcGx5RXVsZXIocm90YXRpb24pO1xyXG5cclxuXHRcdFx0bG9va0F0LnggKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLng7XHJcblx0XHRcdGxvb2tBdC55ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi55O1xyXG5cdFx0XHRsb29rQXQueiArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24uejtcclxuXHJcblx0XHRcdHRoaXMucGxheWVyLmNhbWVyYS5sb29rQXQobG9va0F0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4geyBzZWxmLm9uTW91c2VNb3ZlKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0T2JqZWN0KCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnlhd09iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRmxvb3IgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoKSB7XHJcblxyXG5cdFx0bGV0IGZsb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2Zsb29yLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGZsb29yX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5yZXBlYXQuc2V0KDEwMCwgMTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDMwMDAsIDMwMDAsIDQwLCA0MCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGZsb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkZsb29yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxubGV0IF9pbnN0YW5jZSA9IFN5bWJvbCgpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5sb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldEltYWdlKHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLmxvYWRlci5sb2FkKHBhdGgsIChpbWFnZSkgPT4geyBjYWxsYmFjayhpbWFnZSk7IH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuXHRcdGlmKCF0aGlzW19pbnN0YW5jZV0pIHtcclxuXHRcdFx0dGhpc1tfaW5zdGFuY2VdID0gbmV3IFNob290ZXIuR3JhcGhpY3MuTG9hZGVyKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpc1tfaW5zdGFuY2VdO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRidWlsZEZhY2FkZSgpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsb2NrLCBidWlsZGluZ0Jsb2NrcztcclxuXHRcdFxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSg1NCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCgyNywgNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCg5LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bGV0IGJsb2NrX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3Rvd2VyLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS5yZXBlYXQuc2V0KDEwLCA1KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxvY2tzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxvY2tfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgZ2FtZVdpbmRvdztcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoOS4zLCAxMi41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUuMywgMTIuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LjMsIDMuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogUklHSFQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgMTUsIC0xMik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDE1LCAtMzYpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogQkFDS1dBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg5LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTQwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgMTUsIC0yOCk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCAxNSwgLTEyKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHR9XHJcblxyXG5cdGJ1aWxkQmxhbmtzKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxhbmssIGJ1aWxkaW5nQmxhbmtzO1xyXG5cclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHRcdFx0XHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKChpICUgMyA/IDAuNSA6IDEpLCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIHRydWUpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoKGkgJSAzID8gMC4yNSA6IDAuNSkgKyA2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgKGkgJSAzID8gMC4xNzUgOiAwLjI1KSk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTgsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoOSArIDM2ICogaiwgMjAsIC00MCAqIGkpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCA3LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5LCAxNSwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzksIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMTIsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0MiwgNiwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCA2OyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAyMCwgMC4yNSwgaiAhPT0gMCk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE4ICogaSwgMTAsIC04ICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCAoaSAlIDMpICE9PSAwKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAtNDApO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsICgwID09PSBpID8gNTQgOiA0MCksIDAuMjUsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0aWYoMCA9PT0gaSkge1xyXG5cdFx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDI3LCAxMCwgLTQwICogaik7XHJcblx0XHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNTQgKiBqLCAxMCwgLTIwKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA0MCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAyMCwgLTIwKTtcclxuXHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2JsYW5rLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRibGFua190ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5yZXBlYXQuc2V0KDUsIDUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbGFua3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibGFua190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0JsYW5rcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGREb29ycygpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGxldCBkb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2Rvb3IuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGRvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRkb29yX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg1LjcsIDgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgyNy4yLCAzLCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkU3R1ZmYoKSB7XHJcblxyXG5cdFx0bGV0IHN0dWZmLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIHRyZWVzO1xyXG5cclxuXHRcdHN0dWZmID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gNCAqIHUgLSAyO1xyXG5cdFx0XHR2ID0gOCAqIHYgLSA0O1xyXG5cdFx0XHRsZXQgeSA9IDIgKiBNYXRoLnNxcnQoMC4wMyAqIHUgKiB1ICsgMC4wMyAqIHYgKiB2KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdGxldCB0ZXh0aWxlX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3RleHRpbGUuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdHRleHRpbGVfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHR0ZXh0aWxlX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHRpbGVfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEsIDEsIC0xKTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gNik7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoLTEsIDEsIC0xKTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KDAsIDAsIE1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cclxuXHJcblx0XHR0cmVlcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGxldCB0cmVlX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3RyZWUuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdHRyZWVfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHR0cmVlX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjA1LCAwLjA1LCA1KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0cmVlX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMCwgMC43NSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIDApO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgLU1hdGguUEkgLyA1KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0xLjUsIC0wLjUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCBNYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2godHJlZXMsIG1hdGVyaWFsKTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0c3R1ZmYucG9zaXRpb24uc2V0KDksIDIsIDMpO1xyXG5cdFx0c3R1ZmYucm90YXRpb24uc2V0KE1hdGguUEkgLyA5LCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChzdHVmZik7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0bGV0IGJveF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9ib3gxLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRib3hfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRib3hfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYm94X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoNy45LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxMC41LCAwLjc1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLjUsIDEuNSwgMik7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDIuMjUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLSAyNywgcG9zaXRpb24ueSAtIDEwLCBwb3NpdGlvbi56ICsgMjApO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgyNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0yMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0yNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigyMCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdC8qIElOREVQRU5ERU5UIENPTlNUUlVDVElORyBQQVJUUyAqL1xyXG5cdGJ1aWxkRmFjYWRlKCkgeyB9XHJcblx0YnVpbGRCbGFua3MoKSB7IH1cclxuXHRidWlsZFdpbmRvd3MoKSB7IH1cclxuXHRidWlsZERvb3JzKCkgeyB9XHJcblx0YnVpbGRTdHVmZigpIHsgfVxyXG5cclxuXHQvKiBDT05TVFJVQ1QgT0JKRUNUICovXHJcblx0YnVpbGQocG9zaXRpb24sIHJvdGF0aW9uKSB7XHJcblxyXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHRcdHJvdGF0aW9uID0gcm90YXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGYWNhZGUoKTtcclxuXHRcdHRoaXMuYnVpbGRCbGFua3MoKTtcclxuXHRcdHRoaXMuYnVpbGRXaW5kb3dzKCk7XHJcblx0XHR0aGlzLmJ1aWxkRG9vcnMoKTtcclxuXHRcdHRoaXMuYnVpbGRTdHVmZigpO1xyXG5cclxuXHRcdHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG5cdFx0dGhpcy5zZXRSb3RhdGlvbihyb3RhdGlvbik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvKiBPQkpFQ1QgTE9DQVRJT04gKi9cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikgeyB9XHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHsgfVxyXG5cclxuXHJcblx0LyogVEVYVFVSRSBOT1JNQUxJWkFUSU9OICovXHJcblx0YXNzaWduVVZzKGdlb21ldHJ5KSB7XHJcblxyXG5cdCAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKTtcclxuXHJcblx0ICAgIGxldCBtYXggPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5tYXg7XHJcblx0ICAgIGxldCBtaW4gPSBnZW9tZXRyeS5ib3VuZGluZ0JveC5taW47XHJcblxyXG5cdCAgICBsZXQgb2Zmc2V0ICA9IG5ldyBUSFJFRS5WZWN0b3IzKDAgLSBtaW4ueCwgMCAtIG1pbi55LCAwIC0gbWluLnopO1xyXG5cdCAgICBsZXQgcmFuZ2UgICA9IG5ldyBUSFJFRS5WZWN0b3IzKG1heC54IC0gbWluLngsIG1heC55IC0gbWluLnksIG1heC56IC0gbWluLnopO1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXSA9IFtdO1xyXG5cclxuXHQgICAgbGV0IGZhY2VzID0gZ2VvbWV0cnkuZmFjZXM7XHJcblxyXG5cdCAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmZhY2VzLmxlbmd0aCA7IGkrKykge1xyXG5cclxuXHQgICAgICBsZXQgdjEgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5hXTtcclxuXHQgICAgICBsZXQgdjIgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5iXTtcclxuXHQgICAgICBsZXQgdjMgPSBnZW9tZXRyeS52ZXJ0aWNlc1tmYWNlc1tpXS5jXTtcclxuXHJcblx0ICAgICAgaWYodjEueCA9PT0gdjIueCAmJiB2Mi54ID09PSB2My54KSB7XHJcblx0XHQgICAgICBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdLnB1c2goW1xyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2MS56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYxLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2Mi56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYyLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApLFxyXG5cdFx0ICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMiggKCB2My56ICsgb2Zmc2V0LnogKSAvIHJhbmdlLnogLCAoIHYzLnkgKyBvZmZzZXQueSApIC8gcmFuZ2UueSApXHJcblx0XHQgICAgICBdKTtcclxuXHQgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2MS55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2Mi55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueCArIG9mZnNldC54ICkgLyByYW5nZS54ICwgKCB2My55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBnZW9tZXRyeS51dnNOZWVkVXBkYXRlID0gdHJ1ZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxvY2sgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CbGFuayA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgY29uZSkge1xyXG5cclxuXHRcdGxldCBpbnN0YW5jZSwgZ2VvbWV0cnksIG1lc2gsIGNvbnRhaW5lcjtcclxuXHJcblx0XHRjb250YWluZXIgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdGlmKHRydWUgPT09IGNvbmUpIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeShkZXB0aCwgMik7XHJcblx0XHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblxyXG5cdFx0XHRtZXNoLnBvc2l0aW9uLnNldCgod2lkdGggLyAyKSAtIGRlcHRoLCAoaGVpZ2h0IC8gMikgKyAxLCAwKTtcclxuXHJcblx0XHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGNvbnRhaW5lci5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChjb250YWluZXIpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsYW5rO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2luZG93ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCB3aW5kb3dfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvd2luZG93LmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHR3aW5kb3dfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHR3aW5kb3dfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg0LCA0KTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogd2luZG93X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaW5kb3c7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRidWlsZEZhY2FkZSgpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsb2NrLCBidWlsZGluZ0Jsb2NrcztcclxuXHRcdFxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgzMCwgMjAsIDMwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCgxNSwgMTAsIC0xNSk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBibG9ja190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy90b3dlci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxvY2tzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxvY2tfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgZ2FtZVdpbmRvdztcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAwLjAxKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgyNSwgNSwgMC4wMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJJR0hUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMzAuMDEsIDE1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogQkFDS1dBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgxNSwgMTUsIC0zMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1LCA1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogTEVGVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCA1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1x0XHRcclxuXHR9XHJcblxyXG5cdGJ1aWxkQmxhbmtzKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxhbmssIGJ1aWxkaW5nQmxhbmtzO1xyXG5cclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgoaSAlIDMgPyAwLjUgOiAxKSwgMjAsIChpICUgMyA/IDAuMjUgOiAwLjUpLCB0cnVlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoKGkgJSAzID8gMC4yNSA6IDAuNSkgKiAoaSA9PT0gMyA/IC0xIDogMSkgKyAxMCAqIGksIDEwLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAzMCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzMCAqIGosIDEwICsgMTAgKiBpLCAtMTUpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMjAsIDAuMjUsIChpICUgMyAhPT0gMCkpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzMCAqIGosIDEwLCAtMTAgKiBpKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAzMCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxNSwgMTAgKyAxMCAqIGksIC0zMCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYmxhbmtfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvYmxhbmsuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0bGV0IGRvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvZG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZG9vcl90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGRvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQsIDgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg4LCAzLCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkU3R1ZmYoKSB7XHJcblxyXG5cdFx0bGV0IHN0dWZmLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIHRyZWVzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54IC0gMTUsIHBvc2l0aW9uLnkgLSAxMCwgcG9zaXRpb24ueiArIDE1KTtcclxuXHR9XHJcblxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoMTUpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKDEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigtMTUpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgtMTUpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKC0xMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooMTUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQm94ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgbG9hZGVyLCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMywgMyk7XHJcblxyXG5cdFx0bGV0IGJveF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9ib3gyLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRib3hfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRib3hfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYm94X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIG1lc2g7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Cb3g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQm94LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==