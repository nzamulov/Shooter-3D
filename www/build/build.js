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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					//this.scene.fog = new THREE.Fog(0xFFAC40, 0, 1500);
	
					this.player = new _ShooterEntitiesPlayer2.default(this.scene);
					this.scene.add(this.player.getControls());
	
					/*let size = 2000, step = 2;
	    		let geometry = new THREE.Geometry();
	    let material = new THREE.LineBasicMaterial({ color: 'green' });
	    		for(let i = -size; i <= size; i += step) {
	    	geometry.vertices.push(new THREE.Vector3( - size, 0.02, i ));
	    	geometry.vertices.push(new THREE.Vector3( size, 0.02, i ));
	    			geometry.vertices.push(new THREE.Vector3( i, 0.02, - size ));
	    	geometry.vertices.push(new THREE.Vector3( i, 0.02, size ));
	    }
	    		let line = new THREE.Line(geometry, material, THREE.LinePieces);
	    this.scene.add(line);*/
	
					this.largeHouseBuilder = new _ShooterEntitiesBuildersLargeHouseBuilder2.default();
					this.mediumHouseBuilder = new _ShooterEntitiesBuildersMediumHouseBuilder2.default();
	
					var building = this.largeHouseBuilder.build(new THREE.Vector3(30, 10, -40));
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
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							material = new THREE.MeshBasicMaterial({ color: 'red' });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(7.9, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							material = new THREE.MeshBasicMaterial({ color: 'blue' });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(10.5, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							material = new THREE.MeshBasicMaterial({ color: 'yellow' });
							material.side = THREE.DoubleSide;
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
			}, {
					key: 'assignUVs',
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
	
							material = new THREE.MeshBasicMaterial({ color: 'gray' });
							mesh = new THREE.Mesh(buildingBlocks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildWindows',
					value: function buildWindows() {
	
							var mesh = void 0,
							    material = void 0,
							    gameWindow = void 0,
							    buildingWindows = void 0;
	
							buildingWindows = new THREE.Geometry();
	
							/* FORWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, 0.01);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(25, 5, 0.01);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							/* -------------- */
	
							/* RIGHT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(30.01, 15, -15);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							/* ------------ */
	
							/* BACKWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, -30.01);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(5, 5, -30.01);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							/* ------------- */
	
							/* LEFT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 5, -15);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							/* ------------ */
	
							material = new THREE.MeshBasicMaterial({ color: 'yellow' });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(buildingWindows, material);
	
							this.instance.add(mesh);
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
	
							material = new THREE.MeshBasicMaterial({ color: 'white' });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							geometry = new THREE.PlaneGeometry(4, 8);
							material = new THREE.MeshBasicMaterial({ color: 'red' });
							material.side = THREE.DoubleSide;
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODVmODcxMGZkZjMxNTRjZDhkMjciLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFRLElBQVI7QUFFQyxxQkFBYztBQUFBOztBQUViLFVBQUssUUFBTCxH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RUE7QUFuS0Y7QUFBQTtBQUFBLGlDQXFLYSxRQXJLYixFQXFLdUI7QUFDckIsWUFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixHQUF2QixDQUEyQixTQUFTLENBQVQsR0FBYSxFQUF4QyxFQUE0QyxTQUFTLENBQVQsR0FBYSxFQUF6RCxFQUE2RCxTQUFTLENBQVQsR0FBYSxFQUExRTtBQUNBO0FBdktGO0FBQUE7QUFBQSxpQ0F5S2EsUUF6S2IsRUF5S3VCO0FBQ3JCLFlBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsRUFBekI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEVBQXpCO0FBQ0EsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixDQUFDLEVBQTFCOztBQUVBLFlBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsR0FBdkIsQ0FBMkIsU0FBUyxDQUFwQyxFQUF1QyxTQUFTLENBQWhELEVBQW1ELFNBQVMsQ0FBNUQ7O0FBRUEsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixDQUFDLEVBQTFCO0FBQ0EsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixDQUFDLEVBQTFCO0FBQ0EsWUFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixFQUF6QjtBQUNBO0FBbkxGOztBQUFBO0FBQUE7O21CQXNMZSxRQUFRLFFBQVIsQ0FBaUIsUUFBakIsQ0FBMEIsa0IiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg1Zjg3MTBmZGYzMTU0Y2Q4ZDI3XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdHRoaXMuRlBTID0gbmV3IFN0YXRzKCk7XHJcblx0XHR0aGlzLkZQUy5zZXRNb2RlKDApO1xyXG5cclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5GUFMuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdChmdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5iZWdpbigpO1xyXG5cclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmVuZCgpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA+IFBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzJztcclxuaW1wb3J0IEZsb29yIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qcyc7XHJcblxyXG5pbXBvcnQgTGFyZ2VIb3VzZUJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgTWVkaXVtSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdC8vdGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4RkZBQzQwLCAwLCAxNTAwKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zY2VuZSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYXllci5nZXRDb250cm9scygpKTtcclxuXHJcblx0XHQvKmxldCBzaXplID0gMjAwMCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpOyovXHJcblxyXG5cdFx0dGhpcy5sYXJnZUhvdXNlQnVpbGRlciA9IG5ldyBMYXJnZUhvdXNlQnVpbGRlcigpO1xyXG5cdFx0dGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIgPSBuZXcgTWVkaXVtSG91c2VCdWlsZGVyKCk7XHJcblxyXG5cdFx0bGV0IGJ1aWxkaW5nID0gdGhpcy5sYXJnZUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIC00MCkpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cclxuXHRcdGJ1aWxkaW5nID0gdGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoODUsIDEwLCAtMzUpKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDEzNSwgMTAsIC0zNSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMygzMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLU1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMyg3MCwgMTAsIDU1KSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMygxMTAsIDEwLCA1NSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEksIDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRsZXQgZmxvb3IgPSBGbG9vci5jcmVhdGUoKTtcclxuXHRcdGZsb29yLnBvc2l0aW9uLnNldCgtMTAwMCwgMCwgLTEwMDApO1xyXG5cdFx0Zmxvb3Iucm90YXRpb24uc2V0KE1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGZsb29yKTtcclxuXHJcblx0XHQvKiBTS1kgU1BIRVJFICovXHJcblxyXG5cdFx0bGV0IHNreV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9za3lzcGhlcmUuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdHNreV90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdHNreV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgyMDAwLCAzMiwgMzIpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBza3lfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBza3kgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7XHJcblx0XHQvKiAtLS0tLS0tLS0tICovXHJcblxyXG5cclxuXHRcdC8qIERFU0VSVCAqL1xyXG5cclxuXHRcdC8qbGV0IGRlc2VydF90ZXh0dXJlLCBsb2FkZXI7XHJcblxyXG5cdFx0ZGVzZXJ0X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cdFx0bG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblxyXG5cdFx0bG9hZGVyLmxvYWQoJ2ltZy9kZXNlcnQuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGRlc2VydF90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGRlc2VydF90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBhcmFtZXRyaWNHZW9tZXRyeSgodSwgdikgPT4ge1xyXG5cclxuXHRcdFx0dSA9IDEwMDAgKiB1O1xyXG5cdFx0XHR2ID0gMTAwMCAqIHY7XHJcblx0XHRcdGxldCB5ID0gNjAgKiBNYXRoLmFicyhNYXRoLnNpbihNYXRoLnBvdyh1ICogdiwgMSAvIDUpKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjModSwgeSwgdik7XHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkZXNlcnRfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBjdXJ2ZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0Y3VydmUucG9zaXRpb24ueCA9IC0xMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3VydmUpO1xyXG5cclxuXHRcdGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gMTA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi56ID0gLTMwMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnkgPSAtMTA7XHJcblxyXG5cdFx0Y3VydmUucm90YXRpb24ueSA9IE1hdGguUEk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3VydmUpOyovXHJcblxyXG5cdFx0LyogLS0tLS0tICovXHJcblxyXG5cdFx0LyogU0tZICovXHJcblxyXG5cdFx0LypnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgzMDAwKTtcclxuXHJcblx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHRsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHRcdGNvbnRleHQuY2FudmFzLndpZHRoID0gMzAwMDtcclxuXHRcdGNvbnRleHQuY2FudmFzLmhlaWdodCA9IDMwMDA7XHJcblxyXG5cdFx0bGV0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgxNTAwLCAxNTAwLCAzMCwgMTUwMCwgMTUwMCwgNzAwKTtcclxuXHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3doaXRlJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMC4xLCAnI0FBQThGRicpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjNTA0REZGJyk7XHJcblxyXG5cdFx0Y29udGV4dC5hcmMoMTUwMCwgMTUwMCwgMzAwMCwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuXHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRjb250ZXh0LmZpbGwoKTtcclxuXHJcblx0XHRsZXQgc2hhZG93VGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGNhbnZhcyk7XHJcblx0XHRzaGFkb3dUZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcblx0XHRcdG1hcDogc2hhZG93VGV4dHVyZSxcclxuXHRcdFx0c2lkZTogVEhSRUUuQmFja1NpZGVcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBza3kgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHNreS5yb3RhdGlvbi55ID0gLU1hdGguUEkgLyAyO1xyXG5cdFx0c2t5LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gOTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChza3kpOyovXHJcblxyXG5cdFx0LyogLS0tLS0tICovXHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuV29ybGQgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgTW91c2VDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcblxyXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMywgMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5sb29rQXQoMCwgMCwgLTEpO1xyXG5cclxuXHRcdHRoaXMua2V5Ym9hcmRDb250cm9sbGVyID0gS2V5Ym9hcmRDb250cm9sbGVyLmNyZWF0ZSh0aGlzKTtcclxuXHRcdHRoaXMubW91c2VDb250cm9sbGVyID0gTW91c2VDb250cm9sbGVyLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHNjZW5lKSB7XHJcblxyXG5cdFx0bGV0IHdvcmxkRGlyZWN0aW9uID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3RyYWZlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHN0cmFmZS5jcm9zc1ZlY3RvcnMod29ybGREaXJlY3Rpb24sIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQpO1xyXG5cclxuXHRcdGxldCBmb3J3YXJkID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdGZvcndhcmQuY3Jvc3NWZWN0b3JzKHN0cmFmZSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0aWYoIXRoaXMuanVtcGluZyAmJiAhdGhpcy5mYWxsaW5nKSB7XHJcblxyXG5cdFx0XHR0aGlzLm1vdmluZ1ZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlRm9yd2FyZCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLnN1Yihmb3J3YXJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlTGVmdCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLnN1YihzdHJhZmUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLmFkZChmb3J3YXJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmluZ1ZlY3Rvci5hZGQoc3RyYWZlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHRoaXMubW92aW5nVmVjdG9yLng7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHRoaXMubW92aW5nVmVjdG9yLno7XHJcblxyXG5cdFx0dGhpcy5ncmF2aXRhdGlvbihzY2VuZSk7XHJcblxyXG5cdFx0aWYodGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCB8fCBcclxuXHRcdFx0XHQoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1KSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSArPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5mYWxsaW5nKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZihjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDMpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gTWF0aC5tYXgodGhpcy5jYW1lcmEucG9zaXRpb24ueSwgMyk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uICs9IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGgubWluKHRoaXMuanVtcGluZ1NhdHVyYXRpb24sIE1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdyYXZpdGF0aW9uKHNjZW5lKSB7XHJcblxyXG5cdFx0aWYoIXRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZighY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlID4gMikpIHtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYW1lcmE7XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9scygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vdXNlQ29udHJvbGxlci5nZXRPYmplY3QoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlBsYXllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLkNvbnN0YW50cyA9IHtcclxuXHJcblx0LyogQ09OVFJPTFMgKi9cclxuXHRLRVlTOiB7XHJcblxyXG5cdFx0VzogODcsXHJcblx0XHRBOiA2NSxcclxuXHRcdFM6IDgzLFxyXG5cdFx0RDogNjgsXHJcblxyXG5cdFx0QVJST1dfVVA6IDM4LFxyXG5cdFx0QVJST1dfTEVGVDogMzcsXHJcblx0XHRBUlJPV19ET1dOOiA0MCxcclxuXHRcdEFSUk9XX1JJR0hUOiAzOSxcclxuXHJcblx0XHRXSElURVNQQUNFOiAzMlxyXG5cdH0sXHJcblxyXG5cdENVUlNPUl9TUEVFRDogMC4wMDIsXHJcblxyXG5cdC8qIFBIWVNJQyAqL1xyXG5cdEpVTVBfU1RSRU5HVEg6IDAuNSxcclxuXHRHUkFWSVRZOiA1MCxcclxuXHRNT1ZFTUVOVF9TUEVFRDogMC4yNVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29uc3RhbnRzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuV0hJVEVTUEFDRToge1xyXG5cdFx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5vbktleVVwID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleVVwKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0LmFkZCgpO1xyXG5cclxuXHRcdHRoaXMueWF3T2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnlhd09iamVjdC5hZGQodGhpcy5waXRjaE9iamVjdCk7XHJcblxyXG5cdFx0dGhpcy5QSV8yID0gLTAuMSArIE1hdGguUEkgLyAyOyAvLyAtMC4xIGlzIHRoZSBFcHNpbG9uIGZvciBnaW1iYWwgbG9jayBwcmV2ZW50LlxyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGxldCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0XHRsZXQgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcclxuXHJcblx0XHRcdHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnkgLT0gbW92ZW1lbnRYICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54IC09IG1vdmVtZW50WSAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblxyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggPSBNYXRoLm1heCggLXRoaXMuUElfMiwgTWF0aC5taW4oIHRoaXMuUElfMiwgdGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ICkgKTtcclxuXHJcblx0XHRcdGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSk7XHJcblx0XHRcdGxldCByb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIllYWlwiKTtcclxuXHRcdFx0bGV0IGxvb2tBdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRyb3RhdGlvbi5zZXQodGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54LCB0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55LCAwKTtcclxuXHJcblx0XHRcdGxvb2tBdC5jb3B5KGRpcmVjdGlvbikuYXBwbHlFdWxlcihyb3RhdGlvbik7XHJcblxyXG5cdFx0XHRsb29rQXQueCArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueDtcclxuXHRcdFx0bG9va0F0LnkgKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLnk7XHJcblx0XHRcdGxvb2tBdC56ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi56O1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7IHNlbGYub25Nb3VzZU1vdmUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRnZXRPYmplY3QoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMueWF3T2JqZWN0O1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5GbG9vciA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHJcblx0XHRsZXQgZmxvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvZmxvb3IuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGZsb29yX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdGZsb29yX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLnJlcGVhdC5zZXQoMTAwLCAxMDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMzAwMCwgMzAwMCwgNDAsIDQwKTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZmxvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuRmxvb3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5sZXQgX2luc3RhbmNlID0gU3ltYm9sKCk7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLkxvYWRlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0SW1hZ2UocGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHRoaXMubG9hZGVyLmxvYWQocGF0aCwgKGltYWdlKSA9PiB7IGNhbGxiYWNrKGltYWdlKTsgfSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG5cdFx0aWYoIXRoaXNbX2luc3RhbmNlXSkge1xyXG5cdFx0XHR0aGlzW19pbnN0YW5jZV0gPSBuZXcgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzW19pbnN0YW5jZV07XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuTG9hZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qcyc7XHJcbmltcG9ydCBCbGFuayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRmFjYWRlKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxvY2ssIGJ1aWxkaW5nQmxvY2tzO1xyXG5cdFx0XHJcblx0XHRidWlsZGluZ0Jsb2NrcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDU0LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDI3LCA1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCg0NSwgMTUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDE4LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDksIDE1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRsZXQgYmxvY2tfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvdG93ZXIuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLnJlcGVhdC5zZXQoMTAsIDUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbG9ja3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibG9ja190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0Jsb2NrcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRXaW5kb3dzKCkge1xyXG5cclxuXHRcdGxldCBnYW1lV2luZG93O1xyXG5cclxuXHRcdC8qIEZPUldBUkQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg5LjMsIDEyLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NS4zLCAxMi41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUuMywgMy41LCAwLjAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCAxNSwgLTEyKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgNSwgLTI4KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1NC4wMSwgMTUsIC0zNik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBCQUNLV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDksIDE1LCAtNDAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUsIDE1LCAtNDAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogTEVGVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCAxNSwgLTI4KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoLTAuMDEsIDE1LCAtMTIpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cdH1cclxuXHJcblx0YnVpbGRCbGFua3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibGFuaywgYnVpbGRpbmdCbGFua3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbGFua3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cdFx0XHRcclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgoaSAlIDMgPyAwLjI1IDogMC41KSArIDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAoaSAlIDMgPyAwLjE3NSA6IDAuMjUpKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxOCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5ICsgMzYgKiBqLCAyMCwgLTQwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDksIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzOSwgNywgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxMiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDQyLCA2LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0NSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDY7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCBqICE9PSAwKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAxMCwgLTggKiBqKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIChpICUgMykgIT09IDApO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIC00MCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKDAgPT09IGkgPyA1NCA6IDQwKSwgMC4yNSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRpZigwID09PSBpKSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDEwLCAtNDAgKiBqKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg1NCAqIGosIDEwLCAtMjApO1xyXG5cdFx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDQwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxOCAqIGksIDIwLCAtMjApO1xyXG5cdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYmxhbmtfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvYmxhbmsuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0JsYW5rcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsYW5rX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0bGV0IGRvb3JfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvZG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZG9vcl90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGRvb3JfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDUuNywgOCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDI3LjIsIDMsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRTdHVmZigpIHtcclxuXHJcblx0XHRsZXQgc3R1ZmYsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgdHJlZXM7XHJcblxyXG5cdFx0c3R1ZmYgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoKHUsIHYpID0+IHtcclxuXHJcblx0XHRcdHUgPSA0ICogdSAtIDI7XHJcblx0XHRcdHYgPSA4ICogdiAtIDQ7XHJcblx0XHRcdGxldCB5ID0gMiAqIE1hdGguc3FydCgwLjAzICogdSAqIHUgKyAwLjAzICogdiAqIHYpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUsIHksIHYpO1xyXG5cclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bGV0IHRleHRpbGVfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvdGV4dGlsZS5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0dGV4dGlsZV90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdHRleHRpbGVfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dGlsZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblxyXG5cclxuXHRcdHRyZWVzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0bGV0IHRyZWVfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvdHJlZS5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0dHJlZV90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdHRyZWVfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMDUsIDAuMDUsIDUpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRyZWVfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgwLCAwLjc1LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgMCk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLjUsIC0wLjUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAtTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoLTEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIE1hdGguUEkgLyA1KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0cmVlcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRzdHVmZi5wb3NpdGlvbi5zZXQoOSwgMiwgMyk7XHJcblx0XHRzdHVmZi5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDksIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKHN0dWZmKTtcclxuXHJcblxyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdyZWQnIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDAuNzUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdibHVlJyB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMTAuNSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3llbGxvdycgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDcuOSwgMi4yNSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDI3LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAyMCk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTIwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDIwKTtcclxuXHR9XHJcblxyXG5cdGFzc2lnblVWcyhnZW9tZXRyeSkge1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCk7XHJcblxyXG5cdCAgICBsZXQgbWF4ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4O1xyXG5cdCAgICBsZXQgbWluID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWluO1xyXG5cclxuXHQgICAgbGV0IG9mZnNldCAgPSBuZXcgVEhSRUUuVmVjdG9yMygwIC0gbWluLngsIDAgLSBtaW4ueSwgMCAtIG1pbi56KTtcclxuXHQgICAgbGV0IHJhbmdlICAgPSBuZXcgVEhSRUUuVmVjdG9yMyhtYXgueCAtIG1pbi54LCBtYXgueSAtIG1pbi55LCBtYXgueiAtIG1pbi56KTtcclxuXHJcblx0ICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0gPSBbXTtcclxuXHJcblx0ICAgIGxldCBmYWNlcyA9IGdlb21ldHJ5LmZhY2VzO1xyXG5cclxuXHQgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5mYWNlcy5sZW5ndGggOyBpKyspIHtcclxuXHJcblx0ICAgICAgbGV0IHYxID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYV07XHJcblx0ICAgICAgbGV0IHYyID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYl07XHJcblx0ICAgICAgbGV0IHYzID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uY107XHJcblxyXG5cdCAgICAgIGlmKHYxLnggPT09IHYyLnggJiYgdjIueCA9PT0gdjMueCkge1xyXG5cdFx0ICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2MS55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2Mi55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2My55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjEueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjIueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjMueSArIG9mZnNldC55ICkgLyByYW5nZS55IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZ2VvbWV0cnkudXZzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHQvKiBJTkRFUEVOREVOVCBDT05TVFJVQ1RJTkcgUEFSVFMgKi9cclxuXHRidWlsZEZhY2FkZSgpIHsgfVxyXG5cdGJ1aWxkQmxhbmtzKCkgeyB9XHJcblx0YnVpbGRXaW5kb3dzKCkgeyB9XHJcblx0YnVpbGREb29ycygpIHsgfVxyXG5cdGJ1aWxkU3R1ZmYoKSB7IH1cclxuXHJcblx0LyogQ09OU1RSVUNUIE9CSkVDVCAqL1xyXG5cdGJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbikge1xyXG5cclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblx0XHRyb3RhdGlvbiA9IHJvdGF0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkRmFjYWRlKCk7XHJcblx0XHR0aGlzLmJ1aWxkQmxhbmtzKCk7XHJcblx0XHR0aGlzLmJ1aWxkV2luZG93cygpO1xyXG5cdFx0dGhpcy5idWlsZERvb3JzKCk7XHJcblx0XHR0aGlzLmJ1aWxkU3R1ZmYoKTtcclxuXHJcblx0XHR0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHRcdHRoaXMuc2V0Um90YXRpb24ocm90YXRpb24pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyogT0JKRUNUIExPQ0FUSU9OICovXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHsgfVxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7IH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxvY2sgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CbGFuayA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgY29uZSkge1xyXG5cclxuXHRcdGxldCBpbnN0YW5jZSwgZ2VvbWV0cnksIG1lc2gsIGNvbnRhaW5lcjtcclxuXHJcblx0XHRjb250YWluZXIgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdGlmKHRydWUgPT09IGNvbmUpIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeShkZXB0aCwgMik7XHJcblx0XHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSk7XHJcblxyXG5cdFx0XHRtZXNoLnBvc2l0aW9uLnNldCgod2lkdGggLyAyKSAtIGRlcHRoLCAoaGVpZ2h0IC8gMikgKyAxLCAwKTtcclxuXHJcblx0XHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGNvbnRhaW5lci5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChjb250YWluZXIpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsYW5rO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2luZG93ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCB3aW5kb3dfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvd2luZG93LmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHR3aW5kb3dfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHR3aW5kb3dfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg0LCA0KTtcclxuXHRcdGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogd2luZG93X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5XaW5kb3c7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRmFjYWRlKCkge1xyXG5cclxuXHRcdGxldCBtZXNoLCBtYXRlcmlhbCwgYmxvY2ssIGJ1aWxkaW5nQmxvY2tzO1xyXG5cdFx0XHJcblx0XHRidWlsZGluZ0Jsb2NrcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDMwLCAyMCwgMzApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDE1LCAxMCwgLTE1KTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyYXknIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBnYW1lV2luZG93LCBidWlsZGluZ1dpbmRvd3M7XHJcblxyXG5cdFx0YnVpbGRpbmdXaW5kb3dzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMjUsIDUsIDAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nV2luZG93cy5tZXJnZShnYW1lV2luZG93Lmdlb21ldHJ5LCBnYW1lV2luZG93Lm1hdHJpeCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDMwLjAxLCAxNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBCQUNLV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgLTMwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg1LCA1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nV2luZG93cy5tZXJnZShnYW1lV2luZG93Lmdlb21ldHJ5LCBnYW1lV2luZG93Lm1hdHJpeCk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAneWVsbG93JyB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nV2luZG93cywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRCbGFua3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibGFuaywgYnVpbGRpbmdCbGFua3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbGFua3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKChpICUgMyA/IDAuNSA6IDEpLCAyMCwgKGkgJSAzID8gMC4yNSA6IDAuNSksIHRydWUpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgoaSAlIDMgPyAwLjI1IDogMC41KSAqIChpID09PSAzID8gLTEgOiAxKSArIDEwICogaSwgMTAsIC0zMCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDMwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDMwICogaiwgMTAgKyAxMCAqIGksIC0xNSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAyMCwgMC4yNSwgKGkgJSAzICE9PSAwKSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDMwICogaiwgMTAsIC0xMCAqIGkpO1xyXG5cdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDMwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE1LCAxMCArIDEwICogaSwgLTMwICogaik7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICd3aGl0ZScgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbGFua3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRG9vcnMoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaDtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQsIDgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3JlZCcgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDgsIDMsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRTdHVmZigpIHtcclxuXHJcblx0XHRsZXQgc3R1ZmYsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgdHJlZXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLSAxNSwgcG9zaXRpb24ueSAtIDEwLCBwb3NpdGlvbi56ICsgMTUpO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgxNSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0xNSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0xNSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigxNSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9