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
	
	var _ShooterGraphicsRenderer = __webpack_require__(3);
	
	var _ShooterGraphicsRenderer2 = _interopRequireDefault(_ShooterGraphicsRenderer);
	
	var _ShooterEntitiesWorld = __webpack_require__(4);
	
	var _ShooterEntitiesWorld2 = _interopRequireDefault(_ShooterEntitiesWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.Game = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.renderer = new _ShooterGraphicsRenderer2.default();
			this.world = new _ShooterEntitiesWorld2.default();
	
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

	"use strict";
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesPlayer = __webpack_require__(5);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					this.player = new _ShooterEntitiesPlayer2.default();
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(6);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterControllersKeyboardController = __webpack_require__(7);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterConstants = __webpack_require__(8);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Player = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
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
			_this.camera.position.set(0, 1, 10);
	
			_ShooterControllersKeyboardController2.default.create(_this);
	
			console.log("> Shooter.Entities.Player > constructor > ready");
			return _this;
		}
	
		_createClass(_class, [{
			key: 'update',
			value: function update(scene) {
	
				var worldDirection = this.camera.getWorldDirection().multiplyScalar(0.5);
	
				var strafe = new THREE.Vector3();
				strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).multiplyScalar(0.5);
	
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
	
					if (_collisionResults.length > 0 && _collisionResults[0].distance < 1.25) {
	
						this.falling = false;
						this.jumpingSaturation = Math.PI / 2;
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
		}]);
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Player;

/***/ },
/* 6 */
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
/* 7 */
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
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.KeyboardController = function () {
		function _class(player) {
			_classCallCheck(this, _class);
	
			this.player = player;
	
			var self = this;
	
			document.addEventListener('keydown', function (event) {
				self.onKeyDown(event);
			}, false);
			document.addEventListener('keyup', function (event) {
				self.onKeyUp(event);
			}, false);
		}
	
		_createClass(_class, [{
			key: 'onKeyDown',
			value: function onKeyDown(event) {
	
				switch (event.keyCode) {
					case _ShooterConstants2.default.KEYBOARD_W:
					case _ShooterConstants2.default.KEYBOARD_ARROW_UP:
						{
							this.player.moveForward = true;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_A:
					case _ShooterConstants2.default.KEYBOARD_ARROW_LEFT:
						{
							this.player.moveLeft = true;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_S:
					case _ShooterConstants2.default.KEYBOARD_ARROW_DOWN:
						{
							this.player.moveBackward = true;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_D:
					case _ShooterConstants2.default.KEYBOARD_ARROW_RIGHT:
						{
							this.player.moveRight = true;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_WHITESPACE:
						{
							if (!this.player.falling) {
								this.player.jumping = true;
							}
							break;
						}
				}
			}
		}, {
			key: 'onKeyUp',
			value: function onKeyUp(event) {
	
				switch (event.keyCode) {
					case _ShooterConstants2.default.KEYBOARD_W:
					case _ShooterConstants2.default.KEYBOARD_ARROW_UP:
						{
							this.player.moveForward = false;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_A:
					case _ShooterConstants2.default.KEYBOARD_ARROW_LEFT:
						{
							this.player.moveLeft = false;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_S:
					case _ShooterConstants2.default.KEYBOARD_ARROW_DOWN:
						{
							this.player.moveBackward = false;
							break;
						}
					case _ShooterConstants2.default.KEYBOARD_D:
					case _ShooterConstants2.default.KEYBOARD_ARROW_RIGHT:
						{
							this.player.moveRight = false;
							break;
						}
				}
			}
		}], [{
			key: 'create',
			value: function create(player) {
				var controller = new Shooter.Controllers.KeyboardController(player);
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Controllers.KeyboardController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Shooter.Constants = {
	
		KEYBOARD_W: 87,
		KEYBOARD_A: 65,
		KEYBOARD_S: 83,
		KEYBOARD_D: 68,
	
		KEYBOARD_ARROW_UP: 38,
		KEYBOARD_ARROW_LEFT: 37,
		KEYBOARD_ARROW_DOWN: 40,
		KEYBOARD_ARROW_RIGHT: 39,
	
		KEYBOARD_WHITESPACE: 32,
	
		JUMP_STRENGTH: 0.5,
		GRAVITY: 40
	
	};
	
	exports.default = Shooter.Constants;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzJkMWQ0MTk5YWZhYzE1OTIwZTgiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7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LE1BQUwsQ0FBWSxRQUFaLEdBQXVCLEtBQXZCO0FBQ0E7QUFDQTtBQUNELFVBQUssMkJBQVUsVUFBZjtBQUNBLFVBQUssMkJBQVUsbUJBQWY7QUFBb0M7QUFDbkMsWUFBSyxNQUFMLENBQVksWUFBWixHQUEyQixLQUEzQjtBQUNBO0FBQ0E7QUFDRCxVQUFLLDJCQUFVLFVBQWY7QUFDQSxVQUFLLDJCQUFVLG9CQUFmO0FBQXFDO0FBQ3BDLFlBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsS0FBeEI7QUFDQTtBQUNBO0FBcEJGO0FBc0JBO0FBcEVGO0FBQUE7QUFBQSwwQkFzRWUsTUF0RWYsRUFzRXVCO0FBQ3JCLFFBQUksYUFBYSxJQUFJLFFBQVEsV0FBUixDQUFvQixrQkFBeEIsQ0FBMkMsTUFBM0MsQ0FBakI7QUFDQTtBQXhFRjs7QUFBQTtBQUFBOzttQkEyRWUsUUFBUSxXQUFSLENBQW9CLGtCOzs7Ozs7QUNqRm5DOzs7OztBQUVBLFNBQVEsU0FBUixHQUFvQjs7QUFFbkIsY0FBWSxFQUZPO0FBR25CLGNBQVksRUFITztBQUluQixjQUFZLEVBSk87QUFLbkIsY0FBWSxFQUxPOztBQU9uQixxQkFBbUIsRUFQQTtBQVFuQix1QkFBcUIsRUFSRjtBQVNuQix1QkFBcUIsRUFURjtBQVVuQix3QkFBc0IsRUFWSDs7QUFZbkIsdUJBQXFCLEVBWkY7O0FBY25CLGlCQUFlLEdBZEk7QUFlbkIsV0FBUzs7QUFmVSxFQUFwQjs7bUJBbUJlLFFBQVEsUyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzJkMWQ0MTk5YWZhYzE1OTIwZThcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4uL25hbWVzcGFjZS5qcyc7XHJcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyc7XHJcblxyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMnO1xyXG5cclxuU2hvb3Rlci5HYW1lID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdChmdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblx0XHRcdHNlbGYucmVuZGVyKCk7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyIEdhbWUgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dGhpcy53b3JsZC51cGRhdGUoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMud29ybGQuZ2V0U2NlbmUoKSwgdGhpcy53b3JsZC5nZXRDYW1lcmEoKSk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qc1xuICoqLyIsIndpbmRvdy5TaG9vdGVyID0gKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBTaG9vdGVyKSA/IHt9IDogU2hvb3RlcjtcclxuXHJcbndpbmRvdy5TaG9vdGVyLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGxldCBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IFNob290ZXI7XHJcblxyXG4gICAgaWYgKFwiU2hvb3RlclwiID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBzaW5nbGVQYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBwYXJlbnRbc2luZ2xlUGFydF0pIHtcclxuICAgICAgICAgICAgcGFyZW50W3NpbmdsZVBhcnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtzaW5nbGVQYXJ0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbmFtZXNwYWNlLmpzXG4gKiovIiwiU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24oKXtcclxuXHRyZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcblx0XHRcdGZ1bmN0aW9uKCBjYWxsYmFjayApe1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5cclxuXHRcdGxldCBzaXplID0gNDAsIHN0ZXAgPSAyO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdncmVlbicgfSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gLXNpemU7IGkgPD0gc2l6ZTsgaSArPSBzdGVwKSB7XHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIC0gc2l6ZSwgMC4wMiwgaSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggc2l6ZSwgMC4wMiwgaSApKTtcclxuXHJcblx0XHRcdGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIGksIDAuMDIsIC0gc2l6ZSApKTtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgc2l6ZSApKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCwgVEhSRUUuTGluZVBpZWNlcyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChsaW5lKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQwLCA0MCwgMzIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdibHVlJyB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblx0XHRwbGFuZS5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyLjA7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChwbGFuZSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ3JlZCcgfSApO1xyXG5cdFx0bGV0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMTtcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDEuMDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAxO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnb3JhbmdlJyB9ICk7XHJcblx0XHRjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGN1YmUucG9zaXRpb24ueCA9IDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnkgPSA2O1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi56ID0gMztcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUodGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjZW5lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLmdldENhbWVyYSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV29ybGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEVudGl0eSBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gJy4uLy4uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uLy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCAxMCk7XHJcblxyXG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmNyZWF0ZSh0aGlzKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHNjZW5lKSB7XHJcblxyXG5cdFx0bGV0IHdvcmxkRGlyZWN0aW9uID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oKS5tdWx0aXBseVNjYWxhcigwLjUpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3RyYWZlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHN0cmFmZS5jcm9zc1ZlY3RvcnMod29ybGREaXJlY3Rpb24sIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKS5tdWx0aXBseVNjYWxhcigwLjUpO1xyXG5cclxuXHRcdGlmKHRoaXMubW92ZUZvcndhcmQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSB3b3JsZERpcmVjdGlvbi54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHdvcmxkRGlyZWN0aW9uLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlTGVmdCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHN0cmFmZS54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC09IHN0cmFmZS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggLT0gd29ybGREaXJlY3Rpb24ueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiAtPSB3b3JsZERpcmVjdGlvbi56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZVJpZ2h0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gc3RyYWZlLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gc3RyYWZlLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuXHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCB8fCBcclxuXHRcdFx0XHQoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1KSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSArPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5mYWxsaW5nKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb3JpZ2luUG9pbnQgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZihjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYW1lcmE7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24ueCA9IHg7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG5cdFx0dGhpcy5wb3NpdGlvbi56ID0gejtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkgeyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRvbktleURvd24oZXZlbnQpIHtcclxuXHJcblx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9XOlxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BUlJPV19VUDoge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BOlxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX1M6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX0RPV046IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0Q6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLmp1bXBpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25LZXlVcChldmVudCkge1xyXG5cclxuXHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX1c6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX1VQOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BOlxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BUlJPV19MRUZUOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9TOlxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfRDpcclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdEtFWUJPQVJEX1c6IDg3LFxyXG5cdEtFWUJPQVJEX0E6IDY1LFxyXG5cdEtFWUJPQVJEX1M6IDgzLFxyXG5cdEtFWUJPQVJEX0Q6IDY4LFxyXG5cclxuXHRLRVlCT0FSRF9BUlJPV19VUDogMzgsXHJcblx0S0VZQk9BUkRfQVJST1dfTEVGVDogMzcsXHJcblx0S0VZQk9BUkRfQVJST1dfRE9XTjogNDAsXHJcblx0S0VZQk9BUkRfQVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRLRVlCT0FSRF9XSElURVNQQUNFOiAzMixcclxuXHJcblx0SlVNUF9TVFJFTkdUSDogMC41LFxyXG5cdEdSQVZJVFk6IDQwXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=