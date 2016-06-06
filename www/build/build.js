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
	
	var _ShooterEntitiesBlank = __webpack_require__(13);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesFloor = __webpack_require__(14);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
	var _ShooterEntitiesLargeBuilding = __webpack_require__(16);
	
	var _ShooterEntitiesLargeBuilding2 = _interopRequireDefault(_ShooterEntitiesLargeBuilding);
	
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
	
					var size = 2000,
					    step = 2;
	
					var geometry = new THREE.Geometry();
					var material = new THREE.LineBasicMaterial({ color: 'green' });
	
					for (var i = -size; i <= size; i += step) {
							geometry.vertices.push(new THREE.Vector3(-size, 0.02, i));
							geometry.vertices.push(new THREE.Vector3(size, 0.02, i));
	
							geometry.vertices.push(new THREE.Vector3(i, 0.02, -size));
							geometry.vertices.push(new THREE.Vector3(i, 0.02, size));
					}
	
					var line = new THREE.Line(geometry, material, THREE.LinePieces);
					this.scene.add(line);
	
					var building = new _ShooterEntitiesLargeBuilding2.default();
					building.setPosition(30, 10, -40);
					this.scene.add(building.getInstance());
	
					/*let floor = new Floor();
	    floor.setPosition(-1000, 0.02, -1000);
	    floor.setRotation(-Math.PI / 2, 0, 0);
	    this.scene.add(floor.getInstance());*/
	
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
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterControllersKeyboardController = __webpack_require__(11);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(12);
	
	var _ShooterControllersMouseController2 = _interopRequireDefault(_ShooterControllersMouseController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Player = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class(scene) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.moveForward = false;
			_this.moveLeft = false;
			_this.moveBackward = false;
			_this.moveRight = false;
	
			_this.jumping = false;
			_this.falling = false;
			_this.jumpingSaturation = Math.PI / 2;
	
			_this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
			_this.camera.position.set(0, 3, 0);
			_this.camera.lookAt(0, 0, -1);
	
			_this.keyboardController = _ShooterControllersKeyboardController2.default.create(_this);
			_this.mouseController = _ShooterControllersMouseController2.default.create(_this);
	
			console.log("> Shooter.Entities.Player > constructor > ready");
			return _this;
		}
	
		_createClass(_class, [{
			key: 'update',
			value: function update(scene) {
	
				var worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				var strafe = new THREE.Vector3();
				strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				this.gravitation(scene);
	
				if (this.moveForward) {
					this.camera.position.x += worldDirection.x;
					this.camera.position.z += worldDirection.z;
				}
	
				if (this.moveLeft) {
					this.camera.position.x -= strafe.x;
					this.camera.position.z -= strafe.z;
				}
	
				if (this.moveBackward) {
					this.camera.position.x -= worldDirection.x;
					this.camera.position.z -= worldDirection.z;
				}
	
				if (this.moveRight) {
					this.camera.position.x += strafe.x;
					this.camera.position.z += strafe.z;
				}
	
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
	}(_ShooterEntitiesAbstractEntity2.default);
	
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.AbstractEntity = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			console.log("> Shooter.Entities.AbstractEntity > constructor > ready");
		}
	
		_createClass(_class, [{
			key: "setPosition",
			value: function setPosition(x, y, z) {
				this.instance.position.x = x;
				this.instance.position.y = y;
				this.instance.position.z = z;
			}
		}, {
			key: "setRotation",
			value: function setRotation(angleX, angleY, angleZ) {
				this.instance.rotation.x = angleX;
				this.instance.rotation.y = angleY;
				this.instance.rotation.z = angleZ;
			}
		}, {
			key: "getInstance",
			value: function getInstance() {
				return this.instance;
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.AbstractEntity;

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Blank = function (_AbstractEntity) {
			_inherits(_class, _AbstractEntity);
	
			function _class(width, height, depth, cone) {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					_this.width = width;
					_this.height = height;
					_this.depth = depth;
	
					var geometry = void 0,
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
	
					_this.instance = new THREE.Mesh(container);
					return _this;
			}
	
			return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Blank;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Floor = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			var floor_texture = new THREE.Texture();
	
			_ShooterGraphicsLoader2.default.instance.getImage('img/floor.jpg', function (image) {
				floor_texture.image = image;
				floor_texture.needsUpdate = true;
				floor_texture.wrapS = THREE.RepeatWrapping;
				floor_texture.wrapT = THREE.RepeatWrapping;
				floor_texture.repeat.set(100, 100);
			});
	
			_this.geometry = new THREE.PlaneGeometry(3000, 3000, 40, 40);
			_this.material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Floor;

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterEntitiesBlock = __webpack_require__(17);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(13);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(18);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.LargeBuilding = function (_AbstractEntity) {
			_inherits(_class, _AbstractEntity);
	
			function _class() {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					var geometry = void 0,
					    material = void 0,
					    mesh = void 0,
					    block = void 0,
					    blank = void 0,
					    gameWindow = void 0,
					    buildingBlocks = void 0,
					    buildingBlanks = void 0,
					    buildingWindows = void 0;
	
					buildingBlocks = new THREE.Geometry();
					buildingBlanks = new THREE.Geometry();
					buildingWindows = new THREE.Geometry();
	
					_this.instance = new THREE.Object3D();
	
					/* BLOCKS */
					block = new _ShooterEntitiesBlock2.default(54, 10, 40);
					block.setPosition(27, 5, -20);
	
					block.getInstance().updateMatrix();
					buildingBlocks.merge(block.getInstance().geometry, block.getInstance().matrix);
	
					block = new _ShooterEntitiesBlock2.default(18, 10, 40);
					block.setPosition(45, 15, -20);
	
					block.getInstance().updateMatrix();
					buildingBlocks.merge(block.getInstance().geometry, block.getInstance().matrix);
	
					block = new _ShooterEntitiesBlock2.default(18, 10, 40);
					block.setPosition(9, 15, -20);
	
					block.getInstance().updateMatrix();
					buildingBlocks.merge(block.getInstance().geometry, block.getInstance().matrix);
					/* ------ */
	
					material = new THREE.MeshBasicMaterial({ color: 'gray' });
					mesh = new THREE.Mesh(buildingBlocks, material);
	
					_this.instance.add(mesh);
	
					/* WINDOWS */
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(9, 12.5, 0.1);
	
					gameWindow.getInstance().updateMatrix();
					buildingWindows.merge(gameWindow.getInstance().geometry, gameWindow.getInstance().matrix);
	
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(45, 3.5, 0.1);
	
					gameWindow.getInstance().updateMatrix();
					buildingWindows.merge(gameWindow.getInstance().geometry, gameWindow.getInstance().matrix);
	
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(45, 12.5, 0.1);
	
					gameWindow.getInstance().updateMatrix();
					buildingWindows.merge(gameWindow.getInstance().geometry, gameWindow.getInstance().matrix);
					/* -------- */
	
					material = new THREE.MeshBasicMaterial({ color: 'yellow' });
					mesh = new THREE.Mesh(buildingWindows, material);
	
					_this.instance.add(mesh);
	
					/* BLANKS */
					for (var i = 0; i < 10; ++i) {
							blank = new _ShooterEntitiesBlank2.default(i % 3 ? 0.5 : 1, i < 4 || i > 5 ? 20 : 10, i % 3 ? 0.25 : 0.5, true);
							blank.setPosition((i % 3 ? 0.25 : 0.5) + 6 * i, i < 4 || i > 5 ? 10 : 5, i % 3 ? 0.175 : 0.25);
	
							blank.getInstance().updateMatrix();
							buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
					}
	
					for (var _i = 0; _i < 2; ++_i) {
							for (var j = 0; j < 2; ++j) {
	
									blank = new _ShooterEntitiesBlank2.default(0.5, 18, 0.25, false);
									blank.setPosition(9 + 36 * j, 20, -40 * _i);
									blank.setRotation(0, 0, -Math.PI / 2);
	
									blank.getInstance().updateMatrix();
									buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
							}
					}
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(27, 7, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
	
					blank.getInstance().updateMatrix();
					buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(9, 15, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
	
					blank.getInstance().updateMatrix();
					buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(39, 7, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
	
					blank.getInstance().updateMatrix();
					buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 12, 0.25, false);
					blank.setPosition(42, 6, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
	
					blank.getInstance().updateMatrix();
					buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(45, 15, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
	
					blank.getInstance().updateMatrix();
					buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
	
					for (var _i2 = 0; _i2 < 4; ++_i2) {
							for (var _j = 0; _j < 6; ++_j) {
	
									blank = new _ShooterEntitiesBlank2.default(0.5, 20, 0.25, true);
									blank.setPosition(18 * _i2, 10, -8 * _j);
	
									blank.getInstance().updateMatrix();
									buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
							}
					}
	
					for (var _i3 = 0; _i3 < 10; ++_i3) {
	
							blank = new _ShooterEntitiesBlank2.default(0.5, _i3 < 4 || _i3 > 5 ? 20 : 10, _i3 % 3 ? 0.25 : 0.5, _i3 % 3 !== 0);
							blank.setPosition(6 * _i3, _i3 < 4 || _i3 > 5 ? 10 : 5, -40);
	
							blank.getInstance().updateMatrix();
							buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
					}
	
					for (var _i4 = 0; _i4 < 2; ++_i4) {
							for (var _j2 = 0; _j2 < 2; ++_j2) {
	
									blank = new _ShooterEntitiesBlank2.default(0.5, 0 === _i4 ? 54 : 40, 0.25, false);
	
									if (0 === _i4) {
											blank.setPosition(27, 10, -40 * _j2);
											blank.setRotation(0, 0, -Math.PI / 2);
									} else {
											blank.setPosition(54 * _j2, 10, -20);
											blank.setRotation(-Math.PI / 2, 0, 0);
									}
	
									blank.getInstance().updateMatrix();
									buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
							}
					}
	
					for (var _i5 = 0; _i5 < 4; ++_i5) {
	
							blank = new _ShooterEntitiesBlank2.default(0.5, 40, 0.25, false);
							blank.setPosition(18 * _i5, 20, -20);
							blank.setRotation(-Math.PI / 2, 0, 0);
	
							blank.getInstance().updateMatrix();
							buildingBlanks.merge(blank.getInstance().geometry, blank.getInstance().matrix);
					}
					/* ------- */
	
					material = new THREE.MeshBasicMaterial({ color: 'white' });
					mesh = new THREE.Mesh(buildingBlanks, material);
	
					_this.instance.add(mesh);
	
					/* GREEN BOX AT SIDE */
	
					geometry = new THREE.BoxGeometry(4, 4, 6);
					material = new THREE.MeshBasicMaterial({ color: 'green' });
					material.side = THREE.DoubleSide;
					mesh = new THREE.Mesh(geometry, material);
	
					mesh.position.set(-2, 2, -12);
	
					_this.instance.add(mesh);
	
					/* ----------------- */
	
					var stuff = new THREE.Object3D();
	
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
	
					var trees = new THREE.Geometry();
	
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
	
					_this.instance.add(stuff);
	
					return _this;
			}
	
			_createClass(_class, [{
					key: 'setPosition',
					value: function setPosition(x, y, z) {
							this.instance.position.set(x - 27, y - 10, z + 20);
					}
			}, {
					key: 'setRotation',
					value: function setRotation(angleX, angleY, angleZ) {
	
							this.instance.translateX(27);
							this.instance.translateY(10);
							this.instance.translateZ(-20);
	
							this.instance.rotation.set(angleX, angleY, angleZ);
	
							this.instance.translateX(-27);
							this.instance.translateY(-10);
							this.instance.translateZ(20);
					}
			}]);
	
			return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.LargeBuilding;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Block = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class(height, width, depth) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.geometry = new THREE.BoxGeometry(height, width, depth);
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Block;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(10);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Window = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.geometry = new THREE.PlaneGeometry(2, 3);
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Window;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmNzVmYWMwMDJkMzQ3ODFjMDUiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkxhcmdlQnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMscUJBQWM7QUFBQTs7QUFFYixVQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsVUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsVUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLFVBQUssR0FBTCxHQUFXLElBQUksS0FBSixFQUFYO0FBQ0EsVUFBSyxHQUFMLENBQVMsT0FBVCxD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QUFpQixLOzs7Ozs7QUNoQmhDOzs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBRkEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFJQSxTQUFRLFFBQVIsQ0FBaUIsTUFBakI7QUFBQTs7QUFFQyxvQkFBYztBQUFBOztBQUFBOztBQUdiLFNBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sYUFBVixDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFoQjtBQUNBLFNBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sSUFBVixDQUFlLE1BQUssUUFBcEIsRUFBOEIsTUFBSyxRQUFuQyxDQUFoQjtBQUphO0FBS2I7O0FBUEY7QUFBQTs7bUJBVWUsUUFBUSxRQUFSLENBQWlCLE0iLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNkZjc1ZmFjMDAyZDM0NzgxYzA1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdHRoaXMuRlBTID0gbmV3IFN0YXRzKCk7XHJcblx0XHR0aGlzLkZQUy5zZXRNb2RlKDApO1xyXG5cclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5GUFMuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdChmdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG5cdFx0XHRzZWxmLkZQUy5iZWdpbigpO1xyXG5cclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmVuZCgpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA+IFBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBGbG9vciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMnO1xyXG5pbXBvcnQgTGFyZ2VCdWlsZGluZyBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuTGFyZ2VCdWlsZGluZy5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0Ly90aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHhGRkFDNDAsIDAsIDE1MDApO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdGxldCBzaXplID0gMjAwMCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpO1xyXG5cclxuXHRcdGxldCBidWlsZGluZyA9IG5ldyBMYXJnZUJ1aWxkaW5nKCk7XHJcblx0XHRidWlsZGluZy5zZXRQb3NpdGlvbigzMCwgMTAsIC00MCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZy5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHQvKmxldCBmbG9vciA9IG5ldyBGbG9vcigpO1xyXG5cdFx0Zmxvb3Iuc2V0UG9zaXRpb24oLTEwMDAsIDAuMDIsIC0xMDAwKTtcclxuXHRcdGZsb29yLnNldFJvdGF0aW9uKC1NYXRoLlBJIC8gMiwgMCwgMCk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChmbG9vci5nZXRJbnN0YW5jZSgpKTsqL1xyXG5cclxuXHJcblx0XHQvKiBERVNFUlQgKi9cclxuXHJcblx0XHQvKmxldCBkZXNlcnRfdGV4dHVyZSwgbG9hZGVyO1xyXG5cclxuXHRcdGRlc2VydF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHRcdGxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xyXG5cclxuXHRcdGxvYWRlci5sb2FkKCdpbWcvZGVzZXJ0LmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRkZXNlcnRfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRkZXNlcnRfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkoKHUsIHYpID0+IHtcclxuXHJcblx0XHRcdHUgPSAxMDAwICogdTtcclxuXHRcdFx0diA9IDEwMDAgKiB2O1xyXG5cdFx0XHRsZXQgeSA9IDYwICogTWF0aC5hYnMoTWF0aC5zaW4oTWF0aC5wb3codSAqIHYsIDEgLyA1KSkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKHUsIHksIHYpO1xyXG5cdFx0fSwgMjAsIDIwKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZGVzZXJ0X3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgY3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAtMTA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi56ID0gLTMwMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnkgPSAtMTA7XHJcblxyXG5cdFx0Y3VydmUucm90YXRpb24ueSA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1cnZlKTtcclxuXHJcblx0XHRjdXJ2ZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0Y3VydmUucG9zaXRpb24ueCA9IDEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1cnZlKTsqL1xyXG5cclxuXHRcdC8qIC0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFNLWSAqL1xyXG5cclxuXHRcdC8qZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMzAwMCk7XHJcblxyXG5cdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0bGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0XHRjb250ZXh0LmNhbnZhcy53aWR0aCA9IDMwMDA7XHJcblx0XHRjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSAzMDAwO1xyXG5cclxuXHRcdGxldCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMTUwMCwgMTUwMCwgMzAsIDE1MDAsIDE1MDAsIDcwMCk7XHJcblxyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICd3aGl0ZScpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMSwgJyNBQUE4RkYnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnIzUwNERGRicpO1xyXG5cclxuXHRcdGNvbnRleHQuYXJjKDE1MDAsIDE1MDAsIDMwMDAsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHJcblx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG5cdFx0Y29udGV4dC5maWxsKCk7XHJcblxyXG5cdFx0bGV0IHNoYWRvd1RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShjYW52YXMpO1xyXG5cdFx0c2hhZG93VGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG5cdFx0XHRtYXA6IHNoYWRvd1RleHR1cmUsXHJcblx0XHRcdHNpZGU6IFRIUkVFLkJhY2tTaWRlXHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgc2t5ID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRza3kucm90YXRpb24ueSA9IC1NYXRoLlBJIC8gMjtcclxuXHRcdHNreS5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoc2t5KTsqL1xyXG5cclxuXHRcdC8qIC0tLS0tLSAqL1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLldvcmxkID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSh0aGlzLnNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGdldFNjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmU7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FtZXJhKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Xb3JsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBNb3VzZUNvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAzLCAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdCgwLCAwLCAtMSk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCBzdHJhZmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RyYWZlLmNyb3NzVmVjdG9ycyh3b3JsZERpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0dGhpcy5ncmF2aXRhdGlvbihzY2VuZSk7XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlRm9yd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggLT0gc3RyYWZlLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gc3RyYWZlLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlQmFja3dhcmQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSB3b3JsZERpcmVjdGlvbi54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC09IHdvcmxkRGlyZWN0aW9uLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ICs9IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIC09IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmZhbGxpbmcpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMykge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCAzKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgLT0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gKz0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5taW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbiwgTWF0aC5QSSAvIDIpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z3Jhdml0YXRpb24oc2NlbmUpIHtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKCFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcblxyXG5cdGdldENvbnRyb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW91c2VDb250cm9sbGVyLmdldE9iamVjdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuUGxheWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIuQ29uc3RhbnRzID0ge1xyXG5cclxuXHQvKiBDT05UUk9MUyAqL1xyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcclxuXHJcblx0LyogUEhZU0lDICovXHJcblx0SlVNUF9TVFJFTkdUSDogMC41LFxyXG5cdEdSQVZJVFk6IDUwLFxyXG5cdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi54ID0geDtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24ueSA9IHk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnogPSB6O1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24oYW5nbGVYLCBhbmdsZVksIGFuZ2xlWikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi54ID0gYW5nbGVYO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi55ID0gYW5nbGVZO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi56ID0gYW5nbGVaO1xyXG5cdH1cclxuXHJcblx0Z2V0SW5zdGFuY2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbktleURvd24gPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkE6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLldISVRFU1BBQ0U6IHtcclxuXHRcdFx0XHRcdGlmKCF0aGlzLnBsYXllci5mYWxsaW5nKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyLmp1bXBpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMub25LZXlVcCA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkE6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4geyBzZWxmLm9uS2V5RG93bihldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlVcChldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuXHRcdHRoaXMucGxheWVyLmNhbWVyYS5yb3RhdGlvbi5zZXQoMCwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5waXRjaE9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cdFx0dGhpcy5waXRjaE9iamVjdC5hZGQoKTtcclxuXHJcblx0XHR0aGlzLnlhd09iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cdFx0dGhpcy55YXdPYmplY3QuYWRkKHRoaXMucGl0Y2hPYmplY3QpO1xyXG5cclxuXHRcdHRoaXMuUElfMiA9IC0wLjEgKyBNYXRoLlBJIC8gMjsgLy8gLTAuMSBpcyB0aGUgRXBzaWxvbiBmb3IgZ2ltYmFsIGxvY2sgcHJldmVudC5cclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcclxuXHRcdFx0bGV0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XHJcblxyXG5cdFx0XHR0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55IC09IG1vdmVtZW50WCAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCAtPSBtb3ZlbWVudFkgKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ID0gTWF0aC5tYXgoIC10aGlzLlBJXzIsIE1hdGgubWluKCB0aGlzLlBJXzIsIHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCApICk7XHJcblxyXG5cdFx0XHRsZXQgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgLTEpO1xyXG5cdFx0XHRsZXQgcm90YXRpb24gPSBuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCwgXCJZWFpcIik7XHJcblx0XHRcdGxldCBsb29rQXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHRcdFx0cm90YXRpb24uc2V0KHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCwgdGhpcy55YXdPYmplY3Qucm90YXRpb24ueSwgMCk7XHJcblxyXG5cdFx0XHRsb29rQXQuY29weShkaXJlY3Rpb24pLmFwcGx5RXVsZXIocm90YXRpb24pO1xyXG5cclxuXHRcdFx0bG9va0F0LnggKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLng7XHJcblx0XHRcdGxvb2tBdC55ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi55O1xyXG5cdFx0XHRsb29rQXQueiArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24uejtcclxuXHJcblx0XHRcdHRoaXMucGxheWVyLmNhbWVyYS5sb29rQXQobG9va0F0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4geyBzZWxmLm9uTW91c2VNb3ZlKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0T2JqZWN0KCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnlhd09iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZGVwdGgsIGNvbmUpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLmRlcHRoID0gZGVwdGg7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtZXNoLCBjb250YWluZXI7XHJcblxyXG5cdFx0Y29udGFpbmVyID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRpZih0cnVlID09PSBjb25lKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoZGVwdGgsIDIpO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoKHdpZHRoIC8gMikgLSBkZXB0aCwgKGhlaWdodCAvIDIpICsgMSwgMCk7XHJcblxyXG5cdFx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaChjb250YWluZXIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsYW5rO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRmxvb3IgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGxldCBmbG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9mbG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMzAwMCwgMzAwMCwgNDAsIDQwKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGZsb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuRmxvb3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5sZXQgX2luc3RhbmNlID0gU3ltYm9sKCk7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLkxvYWRlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmxvYWRlciA9IG5ldyBUSFJFRS5JbWFnZUxvYWRlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0SW1hZ2UocGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHRoaXMubG9hZGVyLmxvYWQocGF0aCwgKGltYWdlKSA9PiB7IGNhbGxiYWNrKGltYWdlKTsgfSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG5cdFx0aWYoIXRoaXNbX2luc3RhbmNlXSkge1xyXG5cdFx0XHR0aGlzW19pbnN0YW5jZV0gPSBuZXcgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzW19pbnN0YW5jZV07XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuTG9hZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyc7XHJcblxyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkxhcmdlQnVpbGRpbmcgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2gsIGJsb2NrLCBibGFuaywgZ2FtZVdpbmRvdywgYnVpbGRpbmdCbG9ja3MsIGJ1aWxkaW5nQmxhbmtzLCBidWlsZGluZ1dpbmRvd3M7XHJcblxyXG5cdFx0YnVpbGRpbmdCbG9ja3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0LyogQkxPQ0tTICovXHJcblx0XHRibG9jayA9IG5ldyBCbG9jayg1NCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnNldFBvc2l0aW9uKDI3LCA1LCAtMjApO1xyXG5cclxuXHRcdGJsb2NrLmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibG9jay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBuZXcgQmxvY2soMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5zZXRQb3NpdGlvbig0NSwgMTUsIC0yMCk7XHJcblxyXG5cdFx0YmxvY2suZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdldEluc3RhbmNlKCkuZ2VvbWV0cnksIGJsb2NrLmdldEluc3RhbmNlKCkubWF0cml4KTtcclxuXHJcblx0XHRibG9jayA9IG5ldyBCbG9jaygxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnNldFBvc2l0aW9uKDksIDE1LCAtMjApO1xyXG5cclxuXHRcdGJsb2NrLmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibG9jay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnZ3JheScgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbG9ja3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblxyXG5cdFx0LyogV0lORE9XUyAqL1xyXG5cdFx0Z2FtZVdpbmRvdyA9IG5ldyBXaW5kb3coKTtcclxuXHRcdGdhbWVXaW5kb3cuc2V0UG9zaXRpb24oOSwgMTIuNSwgMC4xKTtcclxuXHJcblx0XHRnYW1lV2luZG93LmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ1dpbmRvd3MubWVyZ2UoZ2FtZVdpbmRvdy5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBnYW1lV2luZG93LmdldEluc3RhbmNlKCkubWF0cml4KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gbmV3IFdpbmRvdygpO1xyXG5cdFx0Z2FtZVdpbmRvdy5zZXRQb3NpdGlvbig0NSwgMy41LCAwLjEpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nV2luZG93cy5tZXJnZShnYW1lV2luZG93LmdldEluc3RhbmNlKCkuZ2VvbWV0cnksIGdhbWVXaW5kb3cuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBuZXcgV2luZG93KCk7XHJcblx0XHRnYW1lV2luZG93LnNldFBvc2l0aW9uKDQ1LCAxMi41LCAwLjEpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nV2luZG93cy5tZXJnZShnYW1lV2luZG93LmdldEluc3RhbmNlKCkuZ2VvbWV0cnksIGdhbWVXaW5kb3cuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cdFx0LyogLS0tLS0tLS0gKi9cclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAneWVsbG93JyB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ1dpbmRvd3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHJcblxyXG5cdFx0LyogQkxBTktTICovXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xyXG5cdFx0XHRibGFuayA9IG5ldyBCbGFuaygoaSAlIDMgPyAwLjUgOiAxKSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCB0cnVlKTtcclxuXHRcdFx0Ymxhbmsuc2V0UG9zaXRpb24oKGkgJSAzID8gMC4yNSA6IDAuNSkgKyA2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgKGkgJSAzID8gMC4xNzUgOiAwLjI1KSk7XHJcblxyXG5cdFx0XHRibGFuay5nZXRJbnN0YW5jZSgpLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibGFuay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgMTgsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5zZXRQb3NpdGlvbig5ICsgMzYgKiBqLCAyMCwgLTQwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRibGFuay5nZXRJbnN0YW5jZSgpLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdldEluc3RhbmNlKCkuZ2VvbWV0cnksIGJsYW5rLmdldEluc3RhbmNlKCkubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRibGFuayA9IG5ldyBCbGFuaygwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnNldFBvc2l0aW9uKDI3LCA3LCAwKTtcclxuXHRcdGJsYW5rLnNldFJvdGF0aW9uKDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcclxuXHRcdGJsYW5rLmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibGFuay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0YmxhbmsgPSBuZXcgQmxhbmsoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5zZXRQb3NpdGlvbig5LCAxNSwgMCk7XHJcblx0XHRibGFuay5zZXRSb3RhdGlvbigwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHJcblx0XHRibGFuay5nZXRJbnN0YW5jZSgpLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2V0SW5zdGFuY2UoKS5nZW9tZXRyeSwgYmxhbmsuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdFxyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0Ymxhbmsuc2V0UG9zaXRpb24oMzksIDcsIDApO1xyXG5cdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRibGFuay5nZXRJbnN0YW5jZSgpLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2V0SW5zdGFuY2UoKS5nZW9tZXRyeSwgYmxhbmsuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgMTIsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnNldFBvc2l0aW9uKDQyLCA2LCAwKTtcclxuXHRcdGJsYW5rLnNldFJvdGF0aW9uKDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0YmxhbmsuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdldEluc3RhbmNlKCkuZ2VvbWV0cnksIGJsYW5rLmdldEluc3RhbmNlKCkubWF0cml4KTtcclxuXHJcblx0XHRcclxuXHJcblx0XHRibGFuayA9IG5ldyBCbGFuaygwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnNldFBvc2l0aW9uKDQ1LCAxNSwgMCk7XHJcblx0XHRibGFuay5zZXRSb3RhdGlvbigwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cclxuXHRcdGJsYW5rLmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibGFuay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgNjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgMjAsIDAuMjUsIHRydWUpO1xyXG5cdFx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDE4ICogaSwgMTAsIC04ICogaik7XHJcblxyXG5cdFx0XHRcdGJsYW5rLmdldEluc3RhbmNlKCkudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2V0SW5zdGFuY2UoKS5nZW9tZXRyeSwgYmxhbmsuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IG5ldyBCbGFuaygwLjUsIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgKGkgJSAzKSAhPT0gMCk7XHJcblx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAtNDApO1xyXG5cclxuXHRcdFx0YmxhbmsuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2V0SW5zdGFuY2UoKS5nZW9tZXRyeSwgYmxhbmsuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBuZXcgQmxhbmsoMC41LCAoMCA9PT0gaSA/IDU0IDogNDApLCAwLjI1LCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdGlmKDAgPT09IGkpIHtcclxuXHRcdFx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDI3LCAxMCwgLTQwICogaik7XHJcblx0XHRcdFx0XHRibGFuay5zZXRSb3RhdGlvbigwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDU0ICogaiwgMTAsIC0yMCk7XHJcblx0XHRcdFx0XHRibGFuay5zZXRSb3RhdGlvbigtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YmxhbmsuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZXRJbnN0YW5jZSgpLmdlb21ldHJ5LCBibGFuay5nZXRJbnN0YW5jZSgpLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0YmxhbmsgPSBuZXcgQmxhbmsoMC41LCA0MCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRibGFuay5zZXRQb3NpdGlvbigxOCAqIGksIDIwLCAtMjApO1xyXG5cdFx0XHRibGFuay5zZXRSb3RhdGlvbigtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRcclxuXHRcdFx0YmxhbmsuZ2V0SW5zdGFuY2UoKS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2V0SW5zdGFuY2UoKS5nZW9tZXRyeSwgYmxhbmsuZ2V0SW5zdGFuY2UoKS5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHRcdC8qIC0tLS0tLS0gKi9cclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnd2hpdGUnIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxhbmtzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0LyogR1JFRU4gQk9YIEFUIFNJREUgKi9cclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA2KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0yLCAyLCAtMTIpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdFx0bGV0IHN0dWZmID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gNCAqIHUgLSAyO1xyXG5cdFx0XHR2ID0gOCAqIHYgLSA0O1xyXG5cdFx0XHRsZXQgeSA9IDIgKiBNYXRoLnNxcnQoMC4wMyAqIHUgKiB1ICsgMC4wMyAqIHYgKiB2KTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdza3libHVlJyB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyA2KTtcclxuXHJcblx0XHRzdHVmZi5hZGQobWVzaCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoMCwgMCwgTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblxyXG5cclxuXHRcdGxldCB0cmVlcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4wNSwgMC4wNSwgNSk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAncGluaycgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDAsIDAuNzUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAwKTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIC1NYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRyZWVzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdHN0dWZmLnBvc2l0aW9uLnNldCg5LCAyLCAzKTtcclxuXHRcdHN0dWZmLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gOSwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoc3R1ZmYpO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHgsIHksIHopIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24uc2V0KHggLSAyNywgeSAtIDEwLCB6ICsgMjApO1xyXG5cdH1cclxuXHJcblx0c2V0Um90YXRpb24oYW5nbGVYLCBhbmdsZVksIGFuZ2xlWikge1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgyNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKC0yMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5yb3RhdGlvbi5zZXQoYW5nbGVYLCBhbmdsZVksIGFuZ2xlWik7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKC0yNyk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVkoLTEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigyMCk7XHJcblxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuTGFyZ2VCdWlsZGluZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5MYXJnZUJ1aWxkaW5nLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxvY2sgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgZGVwdGgpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShoZWlnaHQsIHdpZHRoLCBkZXB0aCk7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldpbmRvdyA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIsIDMpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2luZG93O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=