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
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(100, 10, -40));
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
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(9, 12.5, 0.1);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45, 3.5, 0.1);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45, 12.5, 0.1);
							gameWindow.updateMatrix();
							buildingWindows.merge(gameWindow.geometry, gameWindow.matrix);
	
							material = new THREE.MeshBasicMaterial({ color: 'yellow' });
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
	
							geometry = new THREE.PlaneGeometry(5.7, 8);
							material = new THREE.MeshBasicMaterial({ color: 'red' });
							material.side = THREE.DoubleSide;
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
	
							material = new THREE.MeshBasicMaterial({ color: 'skyblue' });
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
	
							geometry = new THREE.CylinderGeometry(0.05, 0.05, 5);
							material = new THREE.MeshBasicMaterial({ color: 'pink' });
							material.side = THREE.DoubleSide;
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Window = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: "create",
			value: function create() {
	
				var geometry = new THREE.PlaneGeometry(2, 3);
				var instance = new THREE.Mesh(geometry);
	
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
	
	exports.default = Shooter.Entities.Builders.MediumHouseBuilder;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQwMTQ0NTU1N2ZlMzEzMzI4M2EiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFRLElBQVI7QUFFQyxxQkFBYztBQUFBOztBQUViLFVBQUssUUFBTCxH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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0NDAxNDQ1NTU3ZmUzMTMzMjgzYVxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBuYW1lc3BhY2UgZnJvbSAnLi4vbmFtZXNwYWNlLmpzJztcclxuXHJcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyc7XHJcbmltcG9ydCByZXF1ZXN0UG9pbnRlckxvY2sgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qcyc7XHJcblxyXG5pbXBvcnQgV2luZG93Q29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qcyc7XHJcblxyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyc7XHJcblxyXG5TaG9vdGVyLkdhbWUgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcblx0XHR0aGlzLndpbmRvd0NvbnRyb2xsZXIgPSBXaW5kb3dDb250cm9sbGVyLmNyZWF0ZSh0aGlzLndvcmxkLmdldENhbWVyYSgpLCB0aGlzLnJlbmRlcmVyKTtcclxuXHJcblx0XHR0aGlzLkZQUyA9IG5ldyBTdGF0cygpO1xyXG5cdFx0dGhpcy5GUFMuc2V0TW9kZSgwKTtcclxuXHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuRlBTLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuXHRcdFx0c2VsZi5GUFMuYmVnaW4oKTtcclxuXHJcblx0XHRcdHNlbGYucmVuZGVyKCk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5lbmQoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0LyogTE9DSyBUSEUgUE9JTlRFUiAqL1xyXG5cdHJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHQvKiBTVEFSVCBHQU1FICovXHJcblx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qc1xuICoqLyIsIndpbmRvdy5TaG9vdGVyID0gKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBTaG9vdGVyKSA/IHt9IDogU2hvb3RlcjtcclxuXHJcbndpbmRvdy5TaG9vdGVyLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGxldCBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IFNob290ZXI7XHJcblxyXG4gICAgaWYgKFwiU2hvb3RlclwiID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBzaW5nbGVQYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBwYXJlbnRbc2luZ2xlUGFydF0pIHtcclxuICAgICAgICAgICAgcGFyZW50W3NpbmdsZVBhcnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtzaW5nbGVQYXJ0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbmFtZXNwYWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xyXG5cdHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG4gICAgICAgIFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuXHRcdFx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuXHRcdFx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgaGF2ZVBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG5cdGlmKGhhdmVQb2ludGVyTG9jaykge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPiBQb2ludGVyIExvY2sgQVBJIHdhcyBmb3VuZGVkLlwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0bGV0IGxvY2tQb2ludGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jayA9IGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkud2Via2l0UmVxdWVzdFBvaW50ZXJMb2NrO1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrUG9pbnRlciwgZmFsc2UpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFBvaW50ZXIgTG9jayBBUEkuXCIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlci5yZW5kZXJlcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlICk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIoY2FtZXJhLCByZW5kZXJlcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkgeyB9XHJcblx0ZGV0YWNoRXZlbnRzKCkgeyB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcbmltcG9ydCBGbG9vciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMnO1xyXG5cclxuaW1wb3J0IExhcmdlSG91c2VCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyLmpzJztcclxuaW1wb3J0IE1lZGl1bUhvdXNlQnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV29ybGQgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHQvL3RoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweEZGQUM0MCwgMCwgMTUwMCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuc2NlbmUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGF5ZXIuZ2V0Q29udHJvbHMoKSk7XHJcblxyXG5cdFx0LypsZXQgc2l6ZSA9IDIwMDAsIHN0ZXAgPSAyO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gLXNpemU7IGkgPD0gc2l6ZTsgaSArPSBzdGVwKSB7XHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIC0gc2l6ZSwgMC4wMiwgaSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggc2l6ZSwgMC4wMiwgaSApKTtcclxuXHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIGksIDAuMDIsIC0gc2l6ZSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgc2l6ZSApKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCwgVEhSRUUuTGluZVBpZWNlcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChsaW5lKTsqL1xyXG5cclxuXHRcdHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIgPSBuZXcgTGFyZ2VIb3VzZUJ1aWxkZXIoKTtcclxuXHRcdHRoaXMubWVkaXVtSG91c2VCdWlsZGVyID0gbmV3IE1lZGl1bUhvdXNlQnVpbGRlcigpO1xyXG5cclxuXHRcdGxldCBidWlsZGluZyA9IHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoMzAsIDEwLCAtNDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDEwMCwgMTAsIC00MCkpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cclxuXHRcdGxldCBmbG9vciA9IEZsb29yLmNyZWF0ZSgpO1xyXG5cdFx0Zmxvb3IucG9zaXRpb24uc2V0KC0xMDAwLCAwLCAtMTAwMCk7XHJcblx0XHRmbG9vci5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoZmxvb3IpO1xyXG5cclxuXHRcdC8qIFNLWSBTUEhFUkUgKi9cclxuXHJcblx0XHRsZXQgc2t5X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3NreXNwaGVyZS5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0c2t5X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0c2t5X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDIwMDAsIDMyLCAzMik7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNreV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoc2t5KTtcclxuXHRcdC8qIC0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cdFx0LyogREVTRVJUICovXHJcblxyXG5cdFx0LypsZXQgZGVzZXJ0X3RleHR1cmUsIGxvYWRlcjtcclxuXHJcblx0XHRkZXNlcnRfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsb2FkZXIubG9hZCgnaW1nL2Rlc2VydC5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gMTAwMCAqIHU7XHJcblx0XHRcdHYgPSAxMDAwICogdjtcclxuXHRcdFx0bGV0IHkgPSA2MCAqIE1hdGguYWJzKE1hdGguc2luKE1hdGgucG93KHUgKiB2LCAxIC8gNSkpKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRlc2VydF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gLTEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7XHJcblxyXG5cdFx0Y3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAxMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHQvKiBTS1kgKi9cclxuXHJcblx0XHQvKmdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDMwMDApO1xyXG5cclxuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdFx0Y29udGV4dC5jYW52YXMud2lkdGggPSAzMDAwO1xyXG5cdFx0Y29udGV4dC5jYW52YXMuaGVpZ2h0ID0gMzAwMDtcclxuXHJcblx0XHRsZXQgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDE1MDAsIDE1MDAsIDMwLCAxNTAwLCAxNTAwLCA3MDApO1xyXG5cclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnd2hpdGUnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjEsICcjQUFBOEZGJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyM1MDRERkYnKTtcclxuXHJcblx0XHRjb250ZXh0LmFyYygxNTAwLCAxNTAwLCAzMDAwLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cclxuXHRcdGxldCBzaGFkb3dUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcclxuXHRcdHNoYWRvd1RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0bWFwOiBzaGFkb3dUZXh0dXJlLFxyXG5cdFx0XHRzaWRlOiBUSFJFRS5CYWNrU2lkZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c2t5LnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDI7XHJcblx0XHRza3kucm90YXRpb24ueiA9IE1hdGguUEkgLyA5O1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUodGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjZW5lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLmdldENhbWVyYSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV29ybGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBNb3VzZUNvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUpIHtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAzLCAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdCgwLCAwLCAtMSk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCBzdHJhZmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RyYWZlLmNyb3NzVmVjdG9ycyh3b3JsZERpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGZvcndhcmQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0Zm9yd2FyZC5jcm9zc1ZlY3RvcnMoc3RyYWZlLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nICYmICF0aGlzLmZhbGxpbmcpIHtcclxuXHJcblx0XHRcdHRoaXMubW92aW5nVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3Iuc3ViKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3Iuc3ViKHN0cmFmZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVSaWdodCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLmFkZChzdHJhZmUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gdGhpcy5tb3ZpbmdWZWN0b3IueDtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gdGhpcy5tb3ZpbmdWZWN0b3IuejtcclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ICs9IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIC09IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmZhbGxpbmcpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMykge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCAzKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgLT0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gKz0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5taW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbiwgTWF0aC5QSSAvIDIpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z3Jhdml0YXRpb24oc2NlbmUpIHtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKCFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcblxyXG5cdGdldENvbnRyb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW91c2VDb250cm9sbGVyLmdldE9iamVjdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuUGxheWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIuQ29uc3RhbnRzID0ge1xyXG5cclxuXHQvKiBDT05UUk9MUyAqL1xyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcclxuXHJcblx0LyogUEhZU0lDICovXHJcblx0SlVNUF9TVFJFTkdUSDogMC41LFxyXG5cdEdSQVZJVFk6IDUwLFxyXG5cdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHsgc2VsZi5vbk1vdXNlTW92ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGdldE9iamVjdCgpIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy55YXdPYmplY3Q7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkZsb29yID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCBmbG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9mbG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgzMDAwLCAzMDAwLCA0MCwgNDApO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBmbG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5GbG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcbmxldCBfaW5zdGFuY2UgPSBTeW1ib2woKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuTG9hZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5sb2FkZXIubG9hZChwYXRoLCAoaW1hZ2UpID0+IHsgY2FsbGJhY2soaW1hZ2UpOyB9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcblx0XHRpZighdGhpc1tfaW5zdGFuY2VdKSB7XHJcblx0XHRcdHRoaXNbX2luc3RhbmNlXSA9IG5ldyBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXNbX2luc3RhbmNlXTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRidWlsZEZhY2FkZSgpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsb2NrLCBidWlsZGluZ0Jsb2NrcztcclxuXHRcdFxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSg1NCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCgyNywgNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoNDUsIDE1LCAtMjApO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IEJsb2NrLmNyZWF0ZSgxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnBvc2l0aW9uLnNldCg5LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyYXknIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBnYW1lV2luZG93LCBidWlsZGluZ1dpbmRvd3M7XHJcblxyXG5cdFx0YnVpbGRpbmdXaW5kb3dzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDksIDEyLjUsIDAuMSk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNDUsIDMuNSwgMC4xKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NSwgMTIuNSwgMC4xKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICd5ZWxsb3cnIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nV2luZG93cywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRCbGFua3MoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibGFuaywgYnVpbGRpbmdCbGFua3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbGFua3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cdFx0XHRcclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgoaSAlIDMgPyAwLjI1IDogMC41KSArIDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAoaSAlIDMgPyAwLjE3NSA6IDAuMjUpKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxOCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg5ICsgMzYgKiBqLCAyMCwgLTQwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDcsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDksIDE1LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgzOSwgNywgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAxMiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDQyLCA2LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCg0NSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDY7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCBqICE9PSAwKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTggKiBpLCAxMCwgLTggKiBqKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAoaSA8IDQgfHwgaSA+IDUgPyAyMCA6IDEwKSwgKGkgJSAzID8gMC4yNSA6IDAuNSksIChpICUgMykgIT09IDApO1xyXG5cdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIC00MCk7XHJcblx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgKDAgPT09IGkgPyA1NCA6IDQwKSwgMC4yNSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRpZigwID09PSBpKSB7XHJcblx0XHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMjcsIDEwLCAtNDAgKiBqKTtcclxuXHRcdFx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg1NCAqIGosIDEwLCAtMjApO1xyXG5cdFx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDQwLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxOCAqIGksIDIwLCAtMjApO1xyXG5cdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnd2hpdGUnIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZERvb3JzKCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg1LjcsIDgpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3JlZCcgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDI3LjIsIDMsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRTdHVmZigpIHtcclxuXHJcblx0XHRsZXQgc3R1ZmYsIGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgdHJlZXM7XHJcblxyXG5cdFx0c3R1ZmYgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoKHUsIHYpID0+IHtcclxuXHJcblx0XHRcdHUgPSA0ICogdSAtIDI7XHJcblx0XHRcdHYgPSA4ICogdiAtIDQ7XHJcblx0XHRcdGxldCB5ID0gMiAqIE1hdGguc3FydCgwLjAzICogdSAqIHUgKyAwLjAzICogdiAqIHYpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUsIHksIHYpO1xyXG5cclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3NreWJsdWUnIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0xLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCBNYXRoLlBJIC8gNik7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHJcblxyXG5cdFx0dHJlZXMgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMDUsIDAuMDUsIDUpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3BpbmsnIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgwLCAwLjc1LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgMCk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLjUsIC0wLjUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAtTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoLTEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIE1hdGguUEkgLyA1KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0cmVlcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRzdHVmZi5wb3NpdGlvbi5zZXQoOSwgMiwgMyk7XHJcblx0XHRzdHVmZi5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDksIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKHN0dWZmKTtcclxuXHJcblxyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdyZWQnIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCg3LjksIDAuNzUsIDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIuNSwgMS41LCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdibHVlJyB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMTAuNSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3llbGxvdycgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDcuOSwgMi4yNSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDI3LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAyMCk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTIwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDIwKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0LyogSU5ERVBFTkRFTlQgQ09OU1RSVUNUSU5HIFBBUlRTICovXHJcblx0YnVpbGRGYWNhZGUoKSB7IH1cclxuXHRidWlsZEJsYW5rcygpIHsgfVxyXG5cdGJ1aWxkV2luZG93cygpIHsgfVxyXG5cdGJ1aWxkRG9vcnMoKSB7IH1cclxuXHRidWlsZFN0dWZmKCkgeyB9XHJcblxyXG5cdC8qIENPTlNUUlVDVCBPQkpFQ1QgKi9cclxuXHRidWlsZChwb3NpdGlvbiwgcm90YXRpb24pIHtcclxuXHJcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cdFx0cm90YXRpb24gPSByb3RhdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0dGhpcy5idWlsZEZhY2FkZSgpO1xyXG5cdFx0dGhpcy5idWlsZEJsYW5rcygpO1xyXG5cdFx0dGhpcy5idWlsZFdpbmRvd3MoKTtcclxuXHRcdHRoaXMuYnVpbGREb29ycygpO1xyXG5cdFx0dGhpcy5idWlsZFN0dWZmKCk7XHJcblxyXG5cdFx0dGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcblx0XHR0aGlzLnNldFJvdGF0aW9uKHJvdGF0aW9uKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8qIE9CSkVDVCBMT0NBVElPTiAqL1xyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7IH1cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikgeyB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsb2NrID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGhlaWdodCwgd2lkdGgsIGRlcHRoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGhlaWdodCwgd2lkdGgsIGRlcHRoKTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIGNvbmUpIHtcclxuXHJcblx0XHRsZXQgaW5zdGFuY2UsIGdlb21ldHJ5LCBtZXNoLCBjb250YWluZXI7XHJcblxyXG5cdFx0Y29udGFpbmVyID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRpZih0cnVlID09PSBjb25lKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoZGVwdGgsIDIpO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoKHdpZHRoIC8gMikgLSBkZXB0aCwgKGhlaWdodCAvIDIpICsgMSwgMCk7XHJcblxyXG5cdFx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goY29udGFpbmVyKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbGFuaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuV2luZG93ID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIsIDMpO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldpbmRvdztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXMuQnVpbGRlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RCdWlsZGVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMnO1xyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMzAsIDIwLCAzMCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMTUsIDEwLCAtMTUpO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnZ3JheScgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkV2luZG93cygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGdhbWVXaW5kb3csIGJ1aWxkaW5nV2luZG93cztcclxuXHJcblx0XHRidWlsZGluZ1dpbmRvd3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHQvKiBGT1JXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgyNSwgNSwgMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJJR0hUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMzAuMDEsIDE1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nV2luZG93cy5tZXJnZShnYW1lV2luZG93Lmdlb21ldHJ5LCBnYW1lV2luZG93Lm1hdHJpeCk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDUsIDUsIC0zMC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdXaW5kb3dzLm1lcmdlKGdhbWVXaW5kb3cuZ2VvbWV0cnksIGdhbWVXaW5kb3cubWF0cml4KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0LyogTEVGVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KC0wLjAxLCA1LCAtMTUpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdGdhbWVXaW5kb3cudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZW9tZXRyeSwgZ2FtZVdpbmRvdy5tYXRyaXgpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICd5ZWxsb3cnIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdXaW5kb3dzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIDIwLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICogKGkgPT09IDMgPyAtMSA6IDEpICsgMTAgKiBpLCAxMCwgLTMwICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCArIDEwICogaSwgLTE1KTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCAoaSAlIDMgIT09IDApKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCwgLTEwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTUsIDEwICsgMTAgKiBpLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3doaXRlJyB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0JsYW5rcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGREb29ycygpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNCwgOCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAncmVkJyB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoOCwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDI3LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAyMCk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTIwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDIwKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=