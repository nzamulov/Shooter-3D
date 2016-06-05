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
	
			var self = this;
	
			(function animate() {
				(0, _ShooterUtilsRequestAnimationFrame2.default)(animate);
				self.render();
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
	
					this.scene.fog = new THREE.Fog(0xFFAC40, 0, 1500);
	
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
	
					/*geometry = new THREE.BoxGeometry(4, 4, 6);
	    material = new THREE.MeshBasicMaterial({ color: 'green' });
	    material.side = THREE.DoubleSide;
	    building = new THREE.Mesh(geometry, material);
	    		building.position.set(-2, 2, -22);
	    		this.scene.add(building);*/
	
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
					    material = void 0,
					    mesh = void 0;
	
					_this.instance = new THREE.Object3D();
	
					geometry = new THREE.BoxGeometry(width, height, depth);
					material = new THREE.MeshBasicMaterial({ color: 'white' });
					material.side = THREE.DoubleSide;
					mesh = new THREE.Mesh(geometry, material);
	
					_this.instance.add(mesh);
	
					if (true === cone) {
	
							geometry = new THREE.ConeGeometry(depth, 2);
							material = new THREE.MeshBasicMaterial({ color: 'white' });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(width / 2 - depth, height / 2 + 1, 0);
	
							_this.instance.add(mesh);
					}
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
					    gameWindow = void 0;
	
					_this.instance = new THREE.Object3D();
	
					block = new _ShooterEntitiesBlock2.default(54, 10, 40);
					block.setPosition(27, 5, -20);
					_this.instance.add(block.getInstance());
	
					block = new _ShooterEntitiesBlock2.default(18, 10, 40);
					block.setPosition(45, 15, -20);
					_this.instance.add(block.getInstance());
	
					block = new _ShooterEntitiesBlock2.default(18, 10, 40);
					block.setPosition(9, 15, -20);
					_this.instance.add(block.getInstance());
	
					for (var i = 0; i < 10; ++i) {
							blank = new _ShooterEntitiesBlank2.default(i % 3 ? 0.5 : 1, i < 4 || i > 5 ? 20 : 10, i % 3 ? 0.25 : 0.5, true);
							blank.setPosition((i % 3 ? 0.25 : 0.5) + 6 * i, i < 4 || i > 5 ? 10 : 5, i % 3 ? 0.175 : 0.25);
							_this.instance.add(blank.getInstance());
					}
	
					for (var _i = 0; _i < 2; ++_i) {
							for (var j = 0; j < 2; ++j) {
	
									blank = new _ShooterEntitiesBlank2.default(0.5, 18, 0.25, false);
									blank.setPosition(9 + 36 * j, 20, -40 * _i);
									blank.setRotation(0, 0, -Math.PI / 2);
									_this.instance.add(blank.getInstance());
							}
					}
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(27, 7, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
					_this.instance.add(blank.getInstance());
	
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(9, 12.5, 0.1);
					_this.instance.add(gameWindow.getInstance());
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(9, 15, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
					_this.instance.add(blank.getInstance());
	
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(45, 3.5, 0.1);
					_this.instance.add(gameWindow.getInstance());
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(39, 7, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
					_this.instance.add(blank.getInstance());
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 12, 0.25, false);
					blank.setPosition(42, 6, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
					_this.instance.add(blank.getInstance());
	
					gameWindow = new _ShooterEntitiesWindow2.default();
					gameWindow.setPosition(45, 12.5, 0.1);
					_this.instance.add(gameWindow.getInstance());
	
					blank = new _ShooterEntitiesBlank2.default(0.5, 6, 0.25, false);
					blank.setPosition(45, 15, 0);
					blank.setRotation(0, 0, -Math.PI / 2);
					_this.instance.add(blank.getInstance());
	
					for (var _i2 = 0; _i2 < 4; ++_i2) {
							for (var _j = 0; _j < 6; ++_j) {
	
									blank = new _ShooterEntitiesBlank2.default(0.5, 20, 0.25, true);
									blank.setPosition(18 * _i2, 10, -8 * _j);
									_this.instance.add(blank.getInstance());
							}
					}
	
					for (var _i3 = 0; _i3 < 10; ++_i3) {
	
							blank = new _ShooterEntitiesBlank2.default(0.5, _i3 < 4 || _i3 > 5 ? 20 : 10, _i3 % 3 ? 0.25 : 0.5, _i3 % 3 !== 0);
							blank.setPosition(6 * _i3, _i3 < 4 || _i3 > 5 ? 10 : 5, -40);
							_this.instance.add(blank.getInstance());
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
	
									_this.instance.add(blank.getInstance());
							}
					}
	
					for (var _i5 = 0; _i5 < 4; ++_i5) {
	
							blank = new _ShooterEntitiesBlank2.default(0.5, 40, 0.25, false);
							blank.setPosition(18 * _i5, 20, -20);
							blank.setRotation(-Math.PI / 2, 0, 0);
							_this.instance.add(blank.getInstance());
					}
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
			_this.material = new THREE.MeshBasicMaterial({ color: 'red' });
			_this.material.side = THREE.DoubleSide;
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
			_this.material = new THREE.MeshBasicMaterial({ color: 'yellow' });
			_this.material.side = THREE.DoubleSide;
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Window;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQyM2I3NTJkZjUzMzk2YmJkODciLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkxhcmdlQnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMsb0JBQWM7QUFBQTs7QUFFYixRQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsUUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsUUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLE9BQUksT0FBTyxJQUFYOztBQUVBLElBQUMsU0FBUyxPQUFULEdBQW1CO0FBQ25CLHFEQUFzQixP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YnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVkMjNiNzUyZGY1MzM5NmJiZDg3XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cdFx0XHRzZWxmLnJlbmRlcigpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA+IFBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyc7XHJcbmltcG9ydCBGbG9vciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMnO1xyXG5pbXBvcnQgTGFyZ2VCdWlsZGluZyBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuTGFyZ2VCdWlsZGluZy5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4RkZBQzQwLCAwLCAxNTAwKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5zY2VuZSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYXllci5nZXRDb250cm9scygpKTtcclxuXHJcblx0XHRsZXQgc2l6ZSA9IDIwMDAsIHN0ZXAgPSAyO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gLXNpemU7IGkgPD0gc2l6ZTsgaSArPSBzdGVwKSB7XHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIC0gc2l6ZSwgMC4wMiwgaSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggc2l6ZSwgMC4wMiwgaSApKTtcclxuXHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIGksIDAuMDIsIC0gc2l6ZSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgc2l6ZSApKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCwgVEhSRUUuTGluZVBpZWNlcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChsaW5lKTtcclxuXHJcblx0XHRsZXQgYnVpbGRpbmcgPSBuZXcgTGFyZ2VCdWlsZGluZygpO1xyXG5cdFx0YnVpbGRpbmcuc2V0UG9zaXRpb24oMzAsIDEwLCAtNDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcuZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0LypnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA2KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGJ1aWxkaW5nID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRidWlsZGluZy5wb3NpdGlvbi5zZXQoLTIsIDIsIC0yMik7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpOyovXHJcblxyXG5cdFx0LypsZXQgZmxvb3IgPSBuZXcgRmxvb3IoKTtcclxuXHRcdGZsb29yLnNldFBvc2l0aW9uKC0xMDAwLCAwLjAyLCAtMTAwMCk7XHJcblx0XHRmbG9vci5zZXRSb3RhdGlvbigtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoZmxvb3IuZ2V0SW5zdGFuY2UoKSk7Ki9cclxuXHJcblxyXG5cdFx0LyogREVTRVJUICovXHJcblxyXG5cdFx0LypsZXQgZGVzZXJ0X3RleHR1cmUsIGxvYWRlcjtcclxuXHJcblx0XHRkZXNlcnRfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsb2FkZXIubG9hZCgnaW1nL2Rlc2VydC5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gMTAwMCAqIHU7XHJcblx0XHRcdHYgPSAxMDAwICogdjtcclxuXHRcdFx0bGV0IHkgPSA2MCAqIE1hdGguYWJzKE1hdGguc2luKE1hdGgucG93KHUgKiB2LCAxIC8gNSkpKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRlc2VydF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gLTEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7XHJcblxyXG5cdFx0Y3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAxMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHQvKiBTS1kgKi9cclxuXHJcblx0XHQvKmdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDMwMDApO1xyXG5cclxuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdFx0Y29udGV4dC5jYW52YXMud2lkdGggPSAzMDAwO1xyXG5cdFx0Y29udGV4dC5jYW52YXMuaGVpZ2h0ID0gMzAwMDtcclxuXHJcblx0XHRsZXQgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDE1MDAsIDE1MDAsIDMwLCAxNTAwLCAxNTAwLCA3MDApO1xyXG5cclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnd2hpdGUnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjEsICcjQUFBOEZGJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyM1MDRERkYnKTtcclxuXHJcblx0XHRjb250ZXh0LmFyYygxNTAwLCAxNTAwLCAzMDAwLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cclxuXHRcdGxldCBzaGFkb3dUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcclxuXHRcdHNoYWRvd1RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0bWFwOiBzaGFkb3dUZXh0dXJlLFxyXG5cdFx0XHRzaWRlOiBUSFJFRS5CYWNrU2lkZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c2t5LnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDI7XHJcblx0XHRza3kucm90YXRpb24ueiA9IE1hdGguUEkgLyA5O1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUodGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjZW5lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLmdldENhbWVyYSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV29ybGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyc7XHJcblxyXG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgTW91c2VDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMywgMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5sb29rQXQoMCwgMCwgLTEpO1xyXG5cclxuXHRcdHRoaXMua2V5Ym9hcmRDb250cm9sbGVyID0gS2V5Ym9hcmRDb250cm9sbGVyLmNyZWF0ZSh0aGlzKTtcclxuXHRcdHRoaXMubW91c2VDb250cm9sbGVyID0gTW91c2VDb250cm9sbGVyLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHNjZW5lKSB7XHJcblxyXG5cdFx0bGV0IHdvcmxkRGlyZWN0aW9uID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3RyYWZlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHN0cmFmZS5jcm9zc1ZlY3RvcnMod29ybGREaXJlY3Rpb24sIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihDT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQpO1xyXG5cclxuXHRcdHRoaXMuZ3Jhdml0YXRpb24oc2NlbmUpO1xyXG5cclxuXHRcdGlmKHRoaXMubW92ZUZvcndhcmQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSB3b3JsZERpcmVjdGlvbi54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHdvcmxkRGlyZWN0aW9uLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlTGVmdCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHN0cmFmZS54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC09IHN0cmFmZS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggLT0gd29ybGREaXJlY3Rpb24ueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiAtPSB3b3JsZERpcmVjdGlvbi56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZVJpZ2h0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gc3RyYWZlLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gc3RyYWZlLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCB8fCBcclxuXHRcdFx0XHQoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1KSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSArPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5mYWxsaW5nKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZihjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDMpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gTWF0aC5tYXgodGhpcy5jYW1lcmEucG9zaXRpb24ueSwgMyk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uICs9IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGgubWluKHRoaXMuanVtcGluZ1NhdHVyYXRpb24sIE1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdyYXZpdGF0aW9uKHNjZW5lKSB7XHJcblxyXG5cdFx0aWYoIXRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIodGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZighY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggfHwgKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlID4gMikpIHtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYW1lcmE7XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9scygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vdXNlQ29udHJvbGxlci5nZXRPYmplY3QoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlBsYXllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLkNvbnN0YW50cyA9IHtcclxuXHJcblx0LyogQ09OVFJPTFMgKi9cclxuXHRLRVlTOiB7XHJcblxyXG5cdFx0VzogODcsXHJcblx0XHRBOiA2NSxcclxuXHRcdFM6IDgzLFxyXG5cdFx0RDogNjgsXHJcblxyXG5cdFx0QVJST1dfVVA6IDM4LFxyXG5cdFx0QVJST1dfTEVGVDogMzcsXHJcblx0XHRBUlJPV19ET1dOOiA0MCxcclxuXHRcdEFSUk9XX1JJR0hUOiAzOSxcclxuXHJcblx0XHRXSElURVNQQUNFOiAzMlxyXG5cdH0sXHJcblxyXG5cdENVUlNPUl9TUEVFRDogMC4wMDIsXHJcblxyXG5cdC8qIFBIWVNJQyAqL1xyXG5cdEpVTVBfU1RSRU5HVEg6IDAuNSxcclxuXHRHUkFWSVRZOiA1MCxcclxuXHRNT1ZFTUVOVF9TUEVFRDogMC4yNVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29uc3RhbnRzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5ID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5ID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHgsIHksIHopIHtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24ueCA9IHg7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnkgPSB5O1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi56ID0gejtcclxuXHR9XHJcblxyXG5cdHNldFJvdGF0aW9uKGFuZ2xlWCwgYW5nbGVZLCBhbmdsZVopIHtcclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24ueCA9IGFuZ2xlWDtcclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24ueSA9IGFuZ2xlWTtcclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24ueiA9IGFuZ2xlWjtcclxuXHR9XHJcblxyXG5cdGdldEluc3RhbmNlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHsgc2VsZi5vbk1vdXNlTW92ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGdldE9iamVjdCgpIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy55YXdPYmplY3Q7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsYW5rID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBjb25lKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHdpZHRoLCBoZWlnaHQsIGRlcHRoKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICd3aGl0ZScgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cclxuXHRcdGlmKHRydWUgPT09IGNvbmUpIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeShkZXB0aCwgMik7XHJcblx0XHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICd3aGl0ZScgfSk7XHJcblx0XHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRcdG1lc2gucG9zaXRpb24uc2V0KCh3aWR0aCAvIDIpIC0gZGVwdGgsIChoZWlnaHQgLyAyKSArIDEsIDApO1xyXG5cclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQmxhbms7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5GbG9vciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0bGV0IGZsb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2Zsb29yLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGZsb29yX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5yZXBlYXQuc2V0KDEwMCwgMTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgzMDAwLCAzMDAwLCA0MCwgNDApO1xyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogZmxvb3JfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5GbG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcbmxldCBfaW5zdGFuY2UgPSBTeW1ib2woKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuTG9hZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5sb2FkZXIubG9hZChwYXRoLCAoaW1hZ2UpID0+IHsgY2FsbGJhY2soaW1hZ2UpOyB9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcblx0XHRpZighdGhpc1tfaW5zdGFuY2VdKSB7XHJcblx0XHRcdHRoaXNbX2luc3RhbmNlXSA9IG5ldyBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXNbX2luc3RhbmNlXTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanMnO1xyXG5pbXBvcnQgQmxhbmsgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuTGFyZ2VCdWlsZGluZyA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaCwgYmxvY2ssIGJsYW5rLCBnYW1lV2luZG93O1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHRibG9jayA9IG5ldyBCbG9jayg1NCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnNldFBvc2l0aW9uKDI3LCA1LCAtMjApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoYmxvY2suZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0YmxvY2sgPSBuZXcgQmxvY2soMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5zZXRQb3NpdGlvbig0NSwgMTUsIC0yMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChibG9jay5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHRibG9jayA9IG5ldyBCbG9jaygxOCwgMTAsIDQwKTtcclxuXHRcdGJsb2NrLnNldFBvc2l0aW9uKDksIDE1LCAtMjApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoYmxvY2suZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuXHRcdFx0YmxhbmsgPSBuZXcgQmxhbmsoKGkgJSAzID8gMC41IDogMSksIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKChpICUgMyA/IDAuMjUgOiAwLjUpICsgNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIChpICUgMyA/IDAuMTc1IDogMC4yNSkpO1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZChibGFuay5nZXRJbnN0YW5jZSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBuZXcgQmxhbmsoMC41LCAxOCwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDkgKyAzNiAqIGosIDIwLCAtNDAgKiBpKTtcclxuXHRcdFx0XHRibGFuay5zZXRSb3RhdGlvbigwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0Ymxhbmsuc2V0UG9zaXRpb24oMjcsIDcsIDApO1xyXG5cdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBuZXcgV2luZG93KCk7XHJcblx0XHRnYW1lV2luZG93LnNldFBvc2l0aW9uKDksIDEyLjUsIDAuMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93LmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0Ymxhbmsuc2V0UG9zaXRpb24oOSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBuZXcgV2luZG93KCk7XHJcblx0XHRnYW1lV2luZG93LnNldFBvc2l0aW9uKDQ1LCAzLjUsIDAuMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93LmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0Ymxhbmsuc2V0UG9zaXRpb24oMzksIDcsIDApO1xyXG5cdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgMTIsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnNldFBvc2l0aW9uKDQyLCA2LCAwKTtcclxuXHRcdGJsYW5rLnNldFJvdGF0aW9uKDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChibGFuay5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gbmV3IFdpbmRvdygpO1xyXG5cdFx0Z2FtZVdpbmRvdy5zZXRQb3NpdGlvbig0NSwgMTIuNSwgMC4xKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cuZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0YmxhbmsgPSBuZXcgQmxhbmsoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5zZXRQb3NpdGlvbig0NSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDY7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IG5ldyBCbGFuaygwLjUsIDIwLCAwLjI1LCB0cnVlKTtcclxuXHRcdFx0XHRibGFuay5zZXRQb3NpdGlvbigxOCAqIGksIDEwLCAtOCAqIGopO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IG5ldyBCbGFuaygwLjUsIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgKGkgJSAzKSAhPT0gMCk7XHJcblx0XHRcdGJsYW5rLnNldFBvc2l0aW9uKDYgKiBpLCAoaSA8IDQgfHwgaSA+IDUgPyAxMCA6IDUpLCAtNDApO1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZChibGFuay5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgMjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgKDAgPT09IGkgPyA1NCA6IDQwKSwgMC4yNSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRpZigwID09PSBpKSB7XHJcblx0XHRcdFx0XHRibGFuay5zZXRQb3NpdGlvbigyNywgMTAsIC00MCAqIGopO1xyXG5cdFx0XHRcdFx0Ymxhbmsuc2V0Um90YXRpb24oMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRibGFuay5zZXRQb3NpdGlvbig1NCAqIGosIDEwLCAtMjApO1xyXG5cdFx0XHRcdFx0Ymxhbmsuc2V0Um90YXRpb24oLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuYWRkKGJsYW5rLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gbmV3IEJsYW5rKDAuNSwgNDAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0Ymxhbmsuc2V0UG9zaXRpb24oMTggKiBpLCAyMCwgLTIwKTtcclxuXHRcdFx0Ymxhbmsuc2V0Um90YXRpb24oLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5hZGQoYmxhbmsuZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQoeCAtIDI3LCB5IC0gMTAsIHogKyAyMCk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihhbmdsZVgsIGFuZ2xlWSwgYW5nbGVaKSB7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTIwKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChhbmdsZVgsIGFuZ2xlWSwgYW5nbGVaKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTI3KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDIwKTtcclxuXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5MYXJnZUJ1aWxkaW5nO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkxhcmdlQnVpbGRpbmcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CbG9jayA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBkZXB0aCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGhlaWdodCwgd2lkdGgsIGRlcHRoKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3JlZCcgfSk7XHJcblx0XHR0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQmxvY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5XaW5kb3cgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgyLCAzKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ3llbGxvdycgfSk7XHJcblx0XHR0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2luZG93O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=