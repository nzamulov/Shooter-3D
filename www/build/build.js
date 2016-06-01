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
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
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
	
					_this2.renderer.setSize(window.innerWidth, window.innerHeight, false);
				};
	
				var self = this;
	
				window.addEventListener('resize', function (event) {
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					this.player = new _ShooterEntitiesPlayer2.default(this.scene);
					this.scene.add(this.player.getControls());
	
					var size = 40,
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
	
					geometry = new THREE.PlaneGeometry(40, 40, 32);
					material = new THREE.MeshBasicMaterial({ color: 'blue' });
					material.side = THREE.DoubleSide;
					var plane = new THREE.Mesh(geometry, material);
					plane.rotation.x = -Math.PI / 2.0;
					this.scene.add(plane);
	
					geometry = new THREE.BoxGeometry(2, 2, 2);
					material = new THREE.MeshBasicMaterial({ color: 'red' });
					var cube = new THREE.Mesh(geometry, material);
	
					cube.position.x = 1;
					cube.position.y = 1.03;
					cube.position.z = 1;
	
					this.scene.add(cube);
	
					geometry = new THREE.BoxGeometry(2, 2, 2);
					material = new THREE.MeshBasicMaterial({ color: 'skyblue' });
					cube = new THREE.Mesh(geometry, material);
	
					cube.position.x = 1;
					cube.position.y = 1.03;
					cube.position.z = -1;
	
					this.scene.add(cube);
	
					geometry = new THREE.BoxGeometry(2, 2, 2);
					material = new THREE.MeshBasicMaterial({ color: 'orange' });
					cube = new THREE.Mesh(geometry, material);
	
					cube.position.x = 3;
					cube.position.y = 6;
					cube.position.z = 3;
	
					this.scene.add(cube);
	
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
			_this.camera.position.set(0, 2, 10);
	
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
	
					if (_collisionResults.length > 0 && _collisionResults[0].distance < 2) {
	
						this.falling = false;
						this.jumpingSaturation = Math.PI / 2;
	
						this.camera.position.y = Math.max(this.camera.position.y, 2);
					} else {
	
						var _addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
						this.camera.position.y -= _addHeight;
						this.jumpingSaturation += Math.PI / _ShooterConstants2.default.GRAVITY;
	
						this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);
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
		GRAVITY: 40,
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
	
				this.position.x = x;
				this.position.y = y;
				this.position.z = z;
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
	
					_this.PI_2 = Math.PI / 2;
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmZhN2M1OWY2NmFjNDVkMWQzMGIiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMsb0JBQWM7QUFBQTs7QUFFYixRQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsUUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsUUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLE9BQUksT0FBTyxJQUFYOztBQUVBLElBQUMsU0FBUyxPQUFULEdBQW1CO0FBQ25CLHFEQUFzQixPQUF0QjtBQUNBLFNBQUssTUFBTDtBQUNBLElBSEQ7O0FBS0EsV0FBUSxHQUFSLENBQVksc0NBQVo7QUFDQTs7QUFqQkY7QUFBQTtBQUFBLDRCQW1CVTtBQUNSLFNBQUssS0FBTCxDQUFXLE1BQVg7QUFDQSxTQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBckIsRUFBNEMsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUE1QztBQUNBO0FBdEJGOztBQUFBO0FBQUE7O0FBMEJBLFFBQU8sTUFBUCxHQUFnQixZQUFNOzs7QUFHckI7OztBQUdBLE1BQU0sYUFBYSxJQUFJLFFBQVEsSUFBWixFQUFuQjtBQUNBLEVBUEQsQzs7Ozs7Ozs7QUN0Q0EsUUFB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QW9CLGVBQXhCLENBQXdDLE1BQXhDLENBQWpCOztBQUVBLGNBQU8sVUFBUDtBQUNBO0FBOURGOztBQUFBO0FBQUE7O21CQWlFZSxRQUFRLFdBQVIsQ0FBb0IsZSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYmZhN2M1OWY2NmFjNDVkMWQzMGJcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4uL25hbWVzcGFjZS5qcyc7XHJcblxyXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5pbXBvcnQgcmVxdWVzdFBvaW50ZXJMb2NrIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanMnO1xyXG5cclxuaW1wb3J0IFdpbmRvd0NvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cdFx0XHRzZWxmLnJlbmRlcigpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHRmdW5jdGlvbiggY2FsbGJhY2sgKXtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuXHRcdFx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgaGF2ZVBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG5cdGlmKGhhdmVQb2ludGVyTG9jaykge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPiBQb2ludGVyIExvY2sgQVBJIHdhcyBmb3VuZGVkLlwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0bGV0IGxvY2tQb2ludGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jayA9IGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkud2Via2l0UmVxdWVzdFBvaW50ZXJMb2NrO1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrUG9pbnRlciwgZmFsc2UpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFBvaW50ZXIgTG9jayBBUEkuXCIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlci5yZW5kZXJlcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCBmYWxzZSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyKGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHsgfVxyXG5cdGRldGFjaEV2ZW50cygpIHsgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdGxldCBzaXplID0gNDAsIHN0ZXAgPSAyO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gLXNpemU7IGkgPD0gc2l6ZTsgaSArPSBzdGVwKSB7XHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIC0gc2l6ZSwgMC4wMiwgaSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggc2l6ZSwgMC4wMiwgaSApKTtcclxuXHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIGksIDAuMDIsIC0gc2l6ZSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgc2l6ZSApKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCwgVEhSRUUuTGluZVBpZWNlcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChsaW5lKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQwLCA0MCwgMzIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdibHVlJyB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRwbGFuZS5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyLjA7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChwbGFuZSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ3JlZCcgfSApO1xyXG5cdFx0bGV0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMTtcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDEuMDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAxO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnc2t5Ymx1ZScgfSApO1xyXG5cdFx0Y3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRjdWJlLnBvc2l0aW9uLnggPSAxO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi55ID0gMS4wMztcclxuXHRcdGN1YmUucG9zaXRpb24ueiA9IC0xO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDIsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdvcmFuZ2UnIH0gKTtcclxuXHRcdGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMztcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDY7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAzO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLldvcmxkID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSh0aGlzLnNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGdldFNjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmU7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FtZXJhKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Xb3JsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi8uLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBNb3VzZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAyLCAxMCk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCBzdHJhZmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RyYWZlLmNyb3NzVmVjdG9ycyh3b3JsZERpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlRm9yd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggLT0gc3RyYWZlLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gc3RyYWZlLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlQmFja3dhcmQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSB3b3JsZERpcmVjdGlvbi54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC09IHdvcmxkRGlyZWN0aW9uLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ICs9IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIC09IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmZhbGxpbmcpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMikge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCAyKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgLT0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gKz0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5taW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbiwgTWF0aC5QSSAvIDIpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udHJvbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb3VzZUNvbnRyb2xsZXIuZ2V0T2JqZWN0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdC8qIENPTlRST0xTICovXHJcblx0S0VZUzoge1xyXG5cclxuXHRcdFc6IDg3LFxyXG5cdFx0QTogNjUsXHJcblx0XHRTOiA4MyxcclxuXHRcdEQ6IDY4LFxyXG5cclxuXHRcdEFSUk9XX1VQOiAzOCxcclxuXHRcdEFSUk9XX0xFRlQ6IDM3LFxyXG5cdFx0QVJST1dfRE9XTjogNDAsXHJcblx0XHRBUlJPV19SSUdIVDogMzksXHJcblxyXG5cdFx0V0hJVEVTUEFDRTogMzJcclxuXHR9LFxyXG5cclxuXHRDVVJTT1JfU1BFRUQ6IDAuMDAyLFxyXG5cclxuXHQvKiBQSFlTSUMgKi9cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNDAsXHJcblx0TU9WRU1FTlRfU1BFRUQ6IDAuMjVcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24ueCA9IHg7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG5cdFx0dGhpcy5wb3NpdGlvbi56ID0gejtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSBNYXRoLlBJIC8gMjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcclxuXHRcdFx0bGV0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XHJcblxyXG5cdFx0XHR0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55IC09IG1vdmVtZW50WCAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCAtPSBtb3ZlbWVudFkgKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ID0gTWF0aC5tYXgoIC10aGlzLlBJXzIsIE1hdGgubWluKCB0aGlzLlBJXzIsIHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCApICk7XHJcblxyXG5cdFx0XHRsZXQgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgLTEpO1xyXG5cdFx0XHRsZXQgcm90YXRpb24gPSBuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCwgXCJZWFpcIik7XHJcblx0XHRcdGxldCBsb29rQXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHRcdFx0cm90YXRpb24uc2V0KHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCwgdGhpcy55YXdPYmplY3Qucm90YXRpb24ueSwgMCk7XHJcblxyXG5cdFx0XHRsb29rQXQuY29weShkaXJlY3Rpb24pLmFwcGx5RXVsZXIocm90YXRpb24pO1xyXG5cclxuXHRcdFx0bG9va0F0LnggKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLng7XHJcblx0XHRcdGxvb2tBdC55ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi55O1xyXG5cdFx0XHRsb29rQXQueiArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24uejtcclxuXHJcblx0XHRcdHRoaXMucGxheWVyLmNhbWVyYS5sb29rQXQobG9va0F0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4geyBzZWxmLm9uTW91c2VNb3ZlKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Z2V0T2JqZWN0KCkge1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnlhd09iamVjdDtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==