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
	
					if (this.jumpingSaturation <= 0) {
	
						this.jumping = false;
						this.falling = true;
						this.jumpingSaturation = 0;
					} else {
	
						var originPoint = this.camera.position.clone();
	
						originPoint.y += 1; // prevent intersection with the ground and grid.
	
						var ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, 1, 0));
						var collisionResults = ray.intersectObjects(scene.children);
	
						if (collisionResults.length > 0 && collisionResults[0].distance < 1.25 && this.jumping) {
	
							this.jumping = false;
							this.falling = true;
							this.jumpingSaturation = 0;
						} else {
	
							var addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
							this.camera.position.y += addHeight;
							this.jumpingSaturation -= Math.PI / _ShooterConstants2.default.GRAVITY;
						}
					}
				}
	
				if (this.falling) {
	
					var _originPoint = this.camera.position.clone();
					var _ray = new THREE.Raycaster(_originPoint, new THREE.Vector3(0, -1, 0));
					var _collisionResults = _ray.intersectObjects(scene.children);
	
					if (_collisionResults.length > 0 && _collisionResults[0].distance < 1.25 && this.falling) {
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJhY2YwMjg5Y2E3YWJkZDM3NGMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQTs7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MkJBQVUsVUFBZjtBQUNBLFVBQUssMkJBQVUsaUJBQWY7QUFBa0M7QUFDakMsWUFBSyxNQUFMLENBQVksV0FBWixHQUEwQixLQUExQjtBQUNBO0FBQ0E7QUFDRCxVQUFLLDJCQUFVLFVBQWY7QUFDQSxVQUFLLDJCQUFVLG1CQUFmO0FBQW9DO0FBQ25DLFlBQUssTUFBTCxDQUFZLFFBQVosR0FBdUIsS0FBdkI7QUFDQTtBQUNBO0FBQ0QsVUFBSywyQkFBVSxVQUFmO0FBQ0EsVUFBSywyQkFBVSxtQkFBZjtBQUFvQztBQUNuQyxZQUFLLE1BQUwsQ0FBWSxZQUFaLEdBQTJCLEtBQTNCO0FBQ0E7QUFDQTtBQUNELFVBQUssMkJBQVUsVUFBZjtBQUNBLFVBQUssMkJBQVUsb0JBQWY7QUFBcUM7QUFDcEMsWUFBSyxNQUFMLENBQVksU0FBWixHQUF3QixLQUF4QjtBQUNBO0FBQ0E7QUFwQkY7QUFzQkE7QUFwRUY7QUFBQTtBQUFBLDBCQXNFZSxNQXRFZixFQXNFdUI7QUFDckIsUUFBSSxhQUFhLElBQUksUUFBUSxXQUFSLENBQW9CLGtCQUF4QixDQUEyQyxNQUEzQyxDQUFqQjtBQUNBO0FBeEVGOztBQUFBO0FBQUE7O21CQTJFZSxRQUFRLFdBQVIsQ0FBb0Isa0I7Ozs7OztBQ2pGbkM7Ozs7O0FBRUEsU0FBUSxTQUFSLEdBQW9COztBQUVuQixjQUFZLEVBRk87QUFHbkIsY0FBWSxFQUhPO0FBSW5CLGNBQVksRUFKTztBQUtuQixjQUFZLEVBTE87O0FBT25CLHFCQUFtQixFQVBBO0FBUW5CLHVCQUFxQixFQVJGO0FBU25CLHVCQUFxQixFQVRGO0FBVW5CLHdCQUFzQixFQVZIOztBQVluQix1QkFBcUIsRUFaRjs7QUFjbkIsaUJBQWUsR0FkSTtBQWVuQixXQUFTOztBQWZVLEVBQXBCOzttQkFtQmUsUUFBUSxTIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2MmFjZjAyODljYTdhYmRkMzc0Y1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBuYW1lc3BhY2UgZnJvbSAnLi4vbmFtZXNwYWNlLmpzJztcclxuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJztcclxuXHJcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyc7XHJcblxyXG5TaG9vdGVyLkdhbWUgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCJTaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbigpe1xyXG5cdHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuXHRcdFx0ZnVuY3Rpb24oIGNhbGxiYWNrICl7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcblx0XHRcdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuR3JhcGhpY3NcIik7XHJcblxyXG5TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldvcmxkID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcblxyXG5cdFx0bGV0IHNpemUgPSA0MCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNDAsIDQwLCAzMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ2JsdWUnIH0gKTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IHBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdHBsYW5lLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDIuMDtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHBsYW5lKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAncmVkJyB9ICk7XHJcblx0XHRsZXQgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRjdWJlLnBvc2l0aW9uLnggPSAxO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi55ID0gMS4wMztcclxuXHRcdGN1YmUucG9zaXRpb24ueiA9IDE7XHJcblx0XHRcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDIsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdvcmFuZ2UnIH0gKTtcclxuXHRcdGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMztcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDY7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAzO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLldvcmxkID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSh0aGlzLnNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGdldFNjZW5lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NlbmU7XHJcblx0fVxyXG5cclxuXHRnZXRDYW1lcmEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q2FtZXJhKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5Xb3JsZDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS5qcyc7XHJcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDEwKTtcclxuXHJcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm11bHRpcGx5U2NhbGFyKDAuNSk7XHJcblx0XHRcclxuXHRcdGxldCBzdHJhZmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RyYWZlLmNyb3NzVmVjdG9ycyh3b3JsZERpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm11bHRpcGx5U2NhbGFyKDAuNSk7XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlRm9yd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggLT0gc3RyYWZlLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gc3RyYWZlLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlQmFja3dhcmQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSB3b3JsZERpcmVjdGlvbi54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC09IHdvcmxkRGlyZWN0aW9uLno7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5tb3ZlUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGlmKHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPD0gMCkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSAwO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0b3JpZ2luUG9pbnQueSArPSAxOyAvLyBwcmV2ZW50IGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmQgYW5kIGdyaWQuXHJcblxyXG5cdFx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRcdGlmKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMS4yNSAmJiB0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gMDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiAtPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAxLjI1ICYmIHRoaXMuZmFsbGluZykge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uICs9IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGgubWluKHRoaXMuanVtcGluZ1NhdHVyYXRpb24sIE1hdGguUEkgLyAyKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlBsYXllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5ID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbih4LCB5LCB6KSB7XHJcblxyXG5cdFx0dGhpcy5wb3NpdGlvbi54ID0geDtcclxuXHRcdHRoaXMucG9zaXRpb24ueSA9IHk7XHJcblx0XHR0aGlzLnBvc2l0aW9uLnogPSB6O1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHNlbGYub25LZXlVcChldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdG9uS2V5RG93bihldmVudCkge1xyXG5cclxuXHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX1c6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX1VQOiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0E6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfUzpcclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfRDpcclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX1dISVRFU1BBQ0U6IHtcclxuXHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbktleVVwKGV2ZW50KSB7XHJcblxyXG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfVzpcclxuXHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZQk9BUkRfQVJST1dfVVA6IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0E6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlTGVmdCA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX1M6XHJcblx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWUJPQVJEX0FSUk9XX0RPV046IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9EOlxyXG5cdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlCT0FSRF9BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIocGxheWVyKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLkNvbnN0YW50cyA9IHtcclxuXHJcblx0S0VZQk9BUkRfVzogODcsXHJcblx0S0VZQk9BUkRfQTogNjUsXHJcblx0S0VZQk9BUkRfUzogODMsXHJcblx0S0VZQk9BUkRfRDogNjgsXHJcblxyXG5cdEtFWUJPQVJEX0FSUk9XX1VQOiAzOCxcclxuXHRLRVlCT0FSRF9BUlJPV19MRUZUOiAzNyxcclxuXHRLRVlCT0FSRF9BUlJPV19ET1dOOiA0MCxcclxuXHRLRVlCT0FSRF9BUlJPV19SSUdIVDogMzksXHJcblxyXG5cdEtFWUJPQVJEX1dISVRFU1BBQ0U6IDMyLFxyXG5cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNDBcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==