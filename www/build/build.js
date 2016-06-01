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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGE0MzdjYjlmNTM2ZGFiNzdjMTgiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMsb0JBQWM7QUFBQTs7QUFFYixRQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsUUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsUUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLE9BQUksT0FBTyxJQUFYOztBQUVBLElBQUMsU0FBUyxPQUFULEdBQW1CO0FBQ25CLHFEQUFzQixPQUF0QjtBQUNBLFNBQUssTUFBTDtBQUNBLElBSEQ7O0FBS0EsV0FBUSxHQUFSLENBQVksc0NBQVo7QUFDQTs7QUFqQkY7QUFBQTtBQUFBLDRCQW1CVTtBQUNSLFNBQUssS0FBTCxDQUFXLE1BQVg7QUFDQSxTQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBckIsRUFBNEMsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUE1QztBQUNBO0FBdEJGOztBQUFBO0FBQUE7O0FBMEJBLFFBQU8sTUFBUCxHQUFnQixZQUFNOzs7QUFHckI7OztBQUdBLE1BQU0sYUFBYSxJQUFJLFFBQVEsSUFBWixFQUFuQjtBQUNBLEVBUEQsQzs7Ozs7Ozs7QUN0Q0EsUUFB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QUF3QyxNQUF4QyxDQUFqQjs7QUFFQSxjQUFPLFVBQVA7QUFDQTtBQTlERjs7QUFBQTtBQUFBOzttQkFpRWUsUUFBUSxXQUFSLENBQW9CLGUiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRhNDM3Y2I5ZjUzNmRhYjc3YzE4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5cclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuaW1wb3J0IHJlcXVlc3RQb2ludGVyTG9jayBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzJztcclxuXHJcbmltcG9ydCBXaW5kb3dDb250cm9sbGVyIGZyb20gJy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyc7XHJcblxyXG5TaG9vdGVyLkdhbWUgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcblx0XHR0aGlzLndpbmRvd0NvbnRyb2xsZXIgPSBXaW5kb3dDb250cm9sbGVyLmNyZWF0ZSh0aGlzLndvcmxkLmdldENhbWVyYSgpLCB0aGlzLnJlbmRlcmVyKTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0LyogTE9DSyBUSEUgUE9JTlRFUiAqL1xyXG5cdHJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHQvKiBTVEFSVCBHQU1FICovXHJcblx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qc1xuICoqLyIsIndpbmRvdy5TaG9vdGVyID0gKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBTaG9vdGVyKSA/IHt9IDogU2hvb3RlcjtcclxuXHJcbndpbmRvdy5TaG9vdGVyLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGxldCBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IFNob290ZXI7XHJcblxyXG4gICAgaWYgKFwiU2hvb3RlclwiID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBzaW5nbGVQYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBwYXJlbnRbc2luZ2xlUGFydF0pIHtcclxuICAgICAgICAgICAgcGFyZW50W3NpbmdsZVBhcnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtzaW5nbGVQYXJ0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbmFtZXNwYWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xyXG5cdHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG4gICAgICAgIFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuXHRcdFx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuXHRcdFx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgaGF2ZVBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG5cdGlmKGhhdmVQb2ludGVyTG9jaykge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPiBQb2ludGVyIExvY2sgQVBJIHdhcyBmb3VuZGVkLlwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0bGV0IGxvY2tQb2ludGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jayA9IGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkud2Via2l0UmVxdWVzdFBvaW50ZXJMb2NrO1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrUG9pbnRlciwgZmFsc2UpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFBvaW50ZXIgTG9jayBBUEkuXCIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlci5yZW5kZXJlcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0dGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlICk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIoY2FtZXJhLCByZW5kZXJlcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkgeyB9XHJcblx0ZGV0YWNoRXZlbnRzKCkgeyB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuc2NlbmUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGF5ZXIuZ2V0Q29udHJvbHMoKSk7XHJcblxyXG5cdFx0bGV0IHNpemUgPSA0MCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNDAsIDQwLCAzMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ2JsdWUnIH0gKTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IHBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdHBsYW5lLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDIuMDtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHBsYW5lKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAncmVkJyB9ICk7XHJcblx0XHRsZXQgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRjdWJlLnBvc2l0aW9uLnggPSAxO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi55ID0gMS4wMztcclxuXHRcdGN1YmUucG9zaXRpb24ueiA9IDE7XHJcblx0XHRcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDIsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdza3libHVlJyB9ICk7XHJcblx0XHRjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGN1YmUucG9zaXRpb24ueCA9IDE7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnkgPSAxLjAzO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi56ID0gLTE7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3ViZSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ29yYW5nZScgfSApO1xyXG5cdFx0Y3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRjdWJlLnBvc2l0aW9uLnggPSAzO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi55ID0gNjtcclxuXHRcdGN1YmUucG9zaXRpb24ueiA9IDM7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3ViZSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuV29ybGQgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uLy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi8uLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi8uLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDIsIDEwKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHRcdFxyXG5cdFx0bGV0IHN0cmFmZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRzdHJhZmUuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gd29ybGREaXJlY3Rpb24ueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSB3b3JsZERpcmVjdGlvbi56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiAtPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVSaWdodCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHN0cmFmZS54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHN0cmFmZS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcblx0XHRcdG9yaWdpblBvaW50LnkgKz0gMTsgLy8gcHJldmVudCBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kIGFuZCBncmlkLlxyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIDw9IDAgfHwgXHJcblx0XHRcdFx0KGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMS4yNSkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gMDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAyKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIDIpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udHJvbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb3VzZUNvbnRyb2xsZXIuZ2V0T2JqZWN0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdC8qIENPTlRST0xTICovXHJcblx0S0VZUzoge1xyXG5cclxuXHRcdFc6IDg3LFxyXG5cdFx0QTogNjUsXHJcblx0XHRTOiA4MyxcclxuXHRcdEQ6IDY4LFxyXG5cclxuXHRcdEFSUk9XX1VQOiAzOCxcclxuXHRcdEFSUk9XX0xFRlQ6IDM3LFxyXG5cdFx0QVJST1dfRE9XTjogNDAsXHJcblx0XHRBUlJPV19SSUdIVDogMzksXHJcblxyXG5cdFx0V0hJVEVTUEFDRTogMzJcclxuXHR9LFxyXG5cclxuXHRDVVJTT1JfU1BFRUQ6IDAuMDAyLFxyXG5cclxuXHQvKiBQSFlTSUMgKi9cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNDAsXHJcblx0TU9WRU1FTlRfU1BFRUQ6IDAuMjVcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24ueCA9IHg7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG5cdFx0dGhpcy5wb3NpdGlvbi56ID0gejtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHsgc2VsZi5vbk1vdXNlTW92ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGdldE9iamVjdCgpIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy55YXdPYmplY3Q7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=