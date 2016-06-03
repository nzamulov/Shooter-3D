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
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesPlayer = __webpack_require__(8);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesWall = __webpack_require__(13);
	
	var _ShooterEntitiesWall2 = _interopRequireDefault(_ShooterEntitiesWall);
	
	var _ShooterEntitiesTower = __webpack_require__(14);
	
	var _ShooterEntitiesTower2 = _interopRequireDefault(_ShooterEntitiesTower);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					this.player = new _ShooterEntitiesPlayer2.default(this.scene);
					this.scene.add(this.player.getControls());
	
					var size = 2000,
					    step = 2;
	
					var geometry = new THREE.Geometry();
					var material = new THREE.LineBasicMaterial({ color: 'green' });
	
					for (var _i = -size; _i <= size; _i += step) {
							geometry.vertices.push(new THREE.Vector3(-size, 0.02, _i));
							geometry.vertices.push(new THREE.Vector3(size, 0.02, _i));
	
							geometry.vertices.push(new THREE.Vector3(_i, 0.02, -size));
							geometry.vertices.push(new THREE.Vector3(_i, 0.02, size));
					}
	
					var line = new THREE.Line(geometry, material, THREE.LinePieces);
					this.scene.add(line);
	
					/*geometry = new THREE.PlaneGeometry(40, 40, 32);
	    material = new THREE.MeshBasicMaterial( { color: 'blue' } );
	    material.side = THREE.DoubleSide;
	    let plane = new THREE.Mesh(geometry, material);
	    plane.rotation.x = -Math.PI / 2.0;
	    this.scene.add(plane);*/
	
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
	
					var tower = new _ShooterEntitiesTower2.default();
	
					tower.setPosition(10, 10, -10);
	
					this.scene.add(tower.getInstance());
	
					geometry = new THREE.CylinderGeometry(0.2, 0.2, 36, 64);
					material = new THREE.MeshBasicMaterial({ color: 'red' });
					var blank = new THREE.Mesh(geometry, material);
	
					blank.position.x = -5;
					blank.position.y = 18;
					blank.position.z = -10;
	
					blank.rotation.x = -Math.PI / 2;
					blank.rotation.z = -Math.PI / 2;
	
					this.scene.add(blank);
	
					var startX = 10;
					var startZ = -10;
	
					var lastX = 25;
					var lastZ = -10;
	
					for (var _i2 = 1; _i2 < 18; ++_i2) {
	
							var phi = -Math.PI / 9;
	
							var _rotate = this.rotate(lastX - startX, lastZ - startZ, phi);
	
							var _rotate2 = _slicedToArray(_rotate, 2);
	
							var newX = _rotate2[0];
							var newZ = _rotate2[1];
	
	
							var wall = new _ShooterEntitiesWall2.default();
	
							wall.setPosition(startX + newX, 8, startZ + newZ);
							wall.setRotation(0, Math.PI / 9 * _i2, 0);
	
							this.scene.add(wall.getInstance());
	
							lastX = startX + 3 * newX;
							lastZ = startZ + 3 * newZ;
	
							startX = startX + 2 * newX;
							startZ = startZ + 2 * newZ;
	
							var _tower = new _ShooterEntitiesTower2.default();
	
							_tower.setPosition(startX, 10, startZ);
							_tower.setRotation(0, Math.PI / 9 * (_i2 + 1), 0);
	
							this.scene.add(_tower.getInstance());
					}
	
					var points = [];
	
					for (var i = 0; i < 10; i++) {
							points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 5, i - 9));
					}
					geometry = new THREE.LatheGeometry(points, 30);
					material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
					material.side = THREE.DoubleSide;
					var lathe = new THREE.Mesh(geometry, material);
	
					lathe.position.z = -150;
	
					lathe.rotation.z = -Math.PI;
	
					this.scene.add(lathe);
	
					points = [];
	
					for (var i = 0; i < 10; i++) {
							points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 2, 2 * i - 18));
					}
					geometry = new THREE.LatheGeometry(points, 30);
					material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
					material.side = THREE.DoubleSide;
					lathe = new THREE.Mesh(geometry, material);
	
					lathe.position.z = -168;
					lathe.position.x = 15;
	
					lathe.rotation.z = -Math.PI;
	
					this.scene.add(lathe);
	
					points = [];
	
					for (var i = 0; i < 10; i++) {
							points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 2, 1.5 * i - 13.5));
					}
					geometry = new THREE.LatheGeometry(points, 30);
					material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
					material.side = THREE.DoubleSide;
					lathe = new THREE.Mesh(geometry, material);
	
					lathe.position.z = -160;
					lathe.position.x = 7;
	
					lathe.rotation.z = -Math.PI;
	
					this.scene.add(lathe);
	
					points = [];
	
					for (var i = 0; i < 10; i++) {
							points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 2, i - 9));
					}
					geometry = new THREE.LatheGeometry(points, 30);
					material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
					material.side = THREE.DoubleSide;
					lathe = new THREE.Mesh(geometry, material);
	
					lathe.position.z = -148;
					lathe.position.x = 16;
	
					lathe.rotation.z = -Math.PI;
	
					this.scene.add(lathe);
	
					points = [];
	
					for (var i = 0; i < 10; i++) {
							points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 2, i - 9));
					}
					geometry = new THREE.LatheGeometry(points, 30);
					material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
					material.side = THREE.DoubleSide;
					lathe = new THREE.Mesh(geometry, material);
	
					lathe.position.z = -159;
					lathe.position.x = 24;
	
					lathe.rotation.z = -Math.PI;
	
					this.scene.add(lathe);
	
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
					key: 'rotate',
					value: function rotate(x, z, phi) {
	
							var xPrime = x * Math.cos(phi) - z * Math.sin(phi);
							var zPrime = x * Math.sin(phi) + z * Math.cos(phi);
	
							return [xPrime, zPrime];
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
			_this.camera.position.set(0, 3, 10);
	
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
	
	Shooter.Entities.Wall = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.geometry = new THREE.BoxGeometry(30, 16, 1);
			_this.material = new THREE.MeshBasicMaterial({ color: 'blue' });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
	
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Wall;

/***/ },
/* 14 */
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
	
	Shooter.Entities.Tower = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.geometry = new THREE.BoxGeometry(3, 20, 3);
			_this.material = new THREE.MeshBasicMaterial({ color: 'blue' });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
	
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Tower;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWM4ZjRhZTk5MGU0MzUyYmRiNjIiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XYWxsLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Ub3dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFRLElBQVI7QUFFQyxvQkFBYztBQUFBOztBQUViLFFBQUssUUFBTCxHQUFnQix1Q0FBaEI7QUFDQSxRQUFLLEtBQUwsR0FBYSxvQ0FBYjs7QUFFQSxRQUFLLGdCQUFMLEdBQXdCLDZDQUFpQixNQUFqQixDQUF3QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXhCLEVBQWdELEtBQUssUUFBckQsQ0FBeEI7O0FBRUEsT0FBSSxPQUFPLElBQVg7O0FBRUEsSUFBQyxTQUFTLE9BQVQsR0FBbUI7QUFDbkIscURBQXNCLE9BQXRCO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsSUFIRDs7QUFLQSxXQUFRLEdBQVIsQ0FBWSxzQ0FBWjtBQUNBOztBQWpCRjtBQUFBO0FBQUEsNEJBbUJVO0FBQ1IsU0FBSyxLQUFMLENBQVcsTUFBWDtBQUNBLFNBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFyQixFQUE0QyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQTVDO0FBQ0E7QUF0QkY7O0FBQUE7QUFBQTs7QUEwQkEsUUFBTyxNQUFQLEdBQWdCLFlBQU07OztBQUdy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QUFJLE1BQU0sSUFBVixDQUFlLE1BQUssUUFBcEIsRUFBOEIsTUFBSyxRQUFuQyxDQUFoQjs7QUFMYTtBQU9iOztBQVRGO0FBQUE7O21CQWFlLFFBQVEsUUFBUixDQUFpQixLIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5YzhmNGFlOTkwZTQzNTJiZGI2MlxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBuYW1lc3BhY2UgZnJvbSAnLi4vbmFtZXNwYWNlLmpzJztcclxuXHJcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyc7XHJcbmltcG9ydCByZXF1ZXN0UG9pbnRlckxvY2sgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qcyc7XHJcblxyXG5pbXBvcnQgV2luZG93Q29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qcyc7XHJcblxyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanMnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzJztcclxuXHJcblNob290ZXIuR2FtZSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpO1xyXG5cclxuXHRcdHRoaXMud2luZG93Q29udHJvbGxlciA9IFdpbmRvd0NvbnRyb2xsZXIuY3JlYXRlKHRoaXMud29ybGQuZ2V0Q2FtZXJhKCksIHRoaXMucmVuZGVyZXIpO1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHQoZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cdFx0XHRzZWxmLnJlbmRlcigpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3RlciBHYW1lID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHRoaXMud29ybGQudXBkYXRlKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLmdldFNjZW5lKCksIHRoaXMud29ybGQuZ2V0Q2FtZXJhKCkpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cclxuXHQvKiBMT0NLIFRIRSBQT0lOVEVSICovXHJcblx0cmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdC8qIFNUQVJUIEdBTUUgKi9cclxuXHRjb25zdCBfX2luc3RhbmNlID0gbmV3IFNob290ZXIuR2FtZSgpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdhbWUvU2hvb3Rlci5HYW1lLmpzXG4gKiovIiwid2luZG93LlNob290ZXIgPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIFNob290ZXIpID8ge30gOiBTaG9vdGVyO1xyXG5cclxud2luZG93LlNob290ZXIubmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IHBhcnRzID0gbmFtZXNwYWNlLnNwbGl0KCcuJyksXHJcbiAgICAgICAgcGFyZW50ID0gU2hvb3RlcjtcclxuXHJcbiAgICBpZiAoXCJTaG9vdGVyXCIgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IHNpbmdsZVBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHBhcmVudFtzaW5nbGVQYXJ0XSkge1xyXG4gICAgICAgICAgICBwYXJlbnRbc2luZ2xlUGFydF0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50W3NpbmdsZVBhcnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uYW1lc3BhY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XHJcblx0cmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG5cdFx0XHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcbiAgICAgICAgXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG5cdFx0XHRmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG5cdFx0XHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPSAoKSA9PiB7XHJcblxyXG5cdGxldCBoYXZlUG9pbnRlckxvY2sgPSAncG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnbW96UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudCB8fCBcclxuXHRcdFx0XHRcdFx0ICAnd2Via2l0UG9pbnRlckxvY2tFbGVtZW50JyBpbiBkb2N1bWVudDtcclxuXHJcblx0aWYoaGF2ZVBvaW50ZXJMb2NrKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA+IFBvaW50ZXIgTG9jayBBUEkgd2FzIGZvdW5kZWQuXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcblx0XHRsZXQgbG9ja1BvaW50ZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrID0gYm9keS5yZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYm9keS53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ym9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvY2tQb2ludGVyLCBmYWxzZSk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIllvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUG9pbnRlciBMb2NrIEFQSS5cIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbWVyYSwgcmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyLnJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHR0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdFx0dGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcihjYW1lcmEsIHJlbmRlcmVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7IH1cclxuXHRkZXRhY2hFdmVudHMoKSB7IH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMnO1xyXG5pbXBvcnQgV2FsbCBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuV2FsbC5qcyc7XHJcbmltcG9ydCBUb3dlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuVG93ZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdGxldCBzaXplID0gMjAwMCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpO1xyXG5cclxuXHRcdC8qZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg0MCwgNDAsIDMyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnYmx1ZScgfSApO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0cGxhbmUucm90YXRpb24ueCA9IC1NYXRoLlBJIC8gMi4wO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQocGxhbmUpOyovXHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ3JlZCcgfSApO1xyXG5cdFx0bGV0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMTtcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDEuMDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAxO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnc2t5Ymx1ZScgfSApO1xyXG5cdFx0Y3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRjdWJlLnBvc2l0aW9uLnggPSAxO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi55ID0gMS4wMztcclxuXHRcdGN1YmUucG9zaXRpb24ueiA9IC0xO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDIsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdvcmFuZ2UnIH0gKTtcclxuXHRcdGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMztcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDY7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAzO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuXHJcblx0XHRsZXQgdG93ZXIgPSBuZXcgVG93ZXIoKTtcclxuXHJcblx0XHR0b3dlci5zZXRQb3NpdGlvbigxMCwgMTAsIC0xMCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQodG93ZXIuZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjIsIDAuMiwgMzYsIDY0KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdyZWQnIH0pO1xyXG5cdFx0bGV0IGJsYW5rID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRibGFuay5wb3NpdGlvbi54ID0gLTU7XHJcblx0XHRibGFuay5wb3NpdGlvbi55ID0gMTg7XHJcblx0XHRibGFuay5wb3NpdGlvbi56ID0gLTEwO1xyXG5cclxuXHRcdGJsYW5rLnJvdGF0aW9uLnggPSAtIE1hdGguUEkgLyAyO1xyXG5cdFx0Ymxhbmsucm90YXRpb24ueiA9IC0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYmxhbmspO1xyXG5cclxuXHRcdGxldCBzdGFydFggPSAxMDtcclxuXHRcdGxldCBzdGFydFogPSAtMTA7XHJcblxyXG5cdFx0bGV0IGxhc3RYID0gMjU7XHJcblx0XHRsZXQgbGFzdFogPSAtMTA7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMTsgaSA8IDE4OyArK2kpIHtcclxuXHJcblx0XHRcdGxldCBwaGkgPSAtTWF0aC5QSSAvIDk7XHJcblxyXG5cdFx0XHRsZXQgW25ld1gsIG5ld1pdID0gdGhpcy5yb3RhdGUobGFzdFggLSBzdGFydFgsIGxhc3RaIC0gc3RhcnRaLCBwaGkpO1xyXG5cclxuXHRcdFx0bGV0IHdhbGwgPSBuZXcgV2FsbCgpO1xyXG5cclxuXHRcdFx0d2FsbC5zZXRQb3NpdGlvbihzdGFydFggKyBuZXdYLCA4LCBzdGFydFogKyBuZXdaKTtcclxuXHRcdFx0d2FsbC5zZXRSb3RhdGlvbigwLCAoTWF0aC5QSSAvIDkpICogaSwgMCk7XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh3YWxsLmdldEluc3RhbmNlKCkpO1xyXG5cclxuXHRcdFx0bGFzdFggPSBzdGFydFggKyAzICogbmV3WDtcclxuXHRcdFx0bGFzdFogPSBzdGFydFogKyAzICogbmV3WjtcclxuXHJcblx0XHRcdHN0YXJ0WCA9IHN0YXJ0WCArIDIgKiBuZXdYO1xyXG5cdFx0XHRzdGFydFogPSBzdGFydFogKyAyICogbmV3WjtcclxuXHJcblx0XHRcdGxldCB0b3dlciA9IG5ldyBUb3dlcigpO1xyXG5cclxuXHRcdFx0dG93ZXIuc2V0UG9zaXRpb24oc3RhcnRYLCAxMCwgc3RhcnRaKTtcclxuXHRcdFx0dG93ZXIuc2V0Um90YXRpb24oMCwgKE1hdGguUEkgLyA5KSAqIChpICsgMSksIDApO1xyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5hZGQodG93ZXIuZ2V0SW5zdGFuY2UoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBvaW50cyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IDEwOyBpICsrICkge1xyXG5cdFx0XHRwb2ludHMucHVzaCggbmV3IFRIUkVFLlZlY3RvcjIoIE1hdGguc2luKCBpICogMC4yICkgKiA1ICsgNSwgaSAtIDkpKTtcclxuXHRcdH1cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocG9pbnRzLCAzMCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHR2YXIgbGF0aGUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0bGF0aGUucG9zaXRpb24ueiA9IC0xNTA7XHJcblxyXG5cdFx0bGF0aGUucm90YXRpb24ueiA9IC1NYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKCBsYXRoZSApO1xyXG5cclxuXHJcblxyXG5cdFx0cG9pbnRzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMTA7IGkgKysgKSB7XHJcblx0XHRcdHBvaW50cy5wdXNoKCBuZXcgVEhSRUUuVmVjdG9yMiggTWF0aC5zaW4oIGkgKiAwLjIgKSAqIDUgKyAyLCAyICogaSAtIDE4KSk7XHJcblx0XHR9XHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHBvaW50cywgMzApO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmZmZjAwIH0gKTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGF0aGUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0bGF0aGUucG9zaXRpb24ueiA9IC0xNjg7XHJcblx0XHRsYXRoZS5wb3NpdGlvbi54ID0gMTU7XHJcblxyXG5cdFx0bGF0aGUucm90YXRpb24ueiA9IC1NYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKCBsYXRoZSApO1xyXG5cclxuXHJcblxyXG5cdFx0cG9pbnRzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMTA7IGkgKysgKSB7XHJcblx0XHRcdHBvaW50cy5wdXNoKCBuZXcgVEhSRUUuVmVjdG9yMiggTWF0aC5zaW4oIGkgKiAwLjIgKSAqIDUgKyAyLCAxLjUgKiBpIC0gMTMuNSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMsIDMwKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmYwMCB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxhdGhlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGxhdGhlLnBvc2l0aW9uLnogPSAtMTYwO1xyXG5cdFx0bGF0aGUucG9zaXRpb24ueCA9IDc7XHJcblxyXG5cdFx0bGF0aGUucm90YXRpb24ueiA9IC1NYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKCBsYXRoZSApO1xyXG5cclxuXHJcblx0XHRwb2ludHMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCAxMDsgaSArKyApIHtcclxuXHRcdFx0cG9pbnRzLnB1c2goIG5ldyBUSFJFRS5WZWN0b3IyKCBNYXRoLnNpbiggaSAqIDAuMiApICogNSArIDIsIGkgLSA5KSk7XHJcblx0XHR9XHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHBvaW50cywgMzApO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmZmZjAwIH0gKTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGF0aGUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0bGF0aGUucG9zaXRpb24ueiA9IC0xNDg7XHJcblx0XHRsYXRoZS5wb3NpdGlvbi54ID0gMTY7XHJcblxyXG5cdFx0bGF0aGUucm90YXRpb24ueiA9IC1NYXRoLlBJO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKCBsYXRoZSApO1xyXG5cclxuXHJcblxyXG5cdFx0cG9pbnRzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMTA7IGkgKysgKSB7XHJcblx0XHRcdHBvaW50cy5wdXNoKCBuZXcgVEhSRUUuVmVjdG9yMiggTWF0aC5zaW4oIGkgKiAwLjIgKSAqIDUgKyAyLCBpIC0gOSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMsIDMwKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmYwMCB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxhdGhlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGxhdGhlLnBvc2l0aW9uLnogPSAtMTU5O1xyXG5cdFx0bGF0aGUucG9zaXRpb24ueCA9IDI0O1xyXG5cclxuXHRcdGxhdGhlLnJvdGF0aW9uLnogPSAtTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggbGF0aGUgKTtcclxuXHJcblxyXG5cdFx0LyogREVTRVJUICovXHJcblxyXG5cdFx0LypsZXQgZGVzZXJ0X3RleHR1cmUsIGxvYWRlcjtcclxuXHJcblx0XHRkZXNlcnRfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsb2FkZXIubG9hZCgnaW1nL2Rlc2VydC5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gMTAwMCAqIHU7XHJcblx0XHRcdHYgPSAxMDAwICogdjtcclxuXHRcdFx0bGV0IHkgPSA2MCAqIE1hdGguYWJzKE1hdGguc2luKE1hdGgucG93KHUgKiB2LCAxIC8gNSkpKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRlc2VydF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gLTEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7XHJcblxyXG5cdFx0Y3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAxMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHQvKiBTS1kgKi9cclxuXHJcblx0XHQvKmdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDMwMDApO1xyXG5cclxuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdFx0Y29udGV4dC5jYW52YXMud2lkdGggPSAzMDAwO1xyXG5cdFx0Y29udGV4dC5jYW52YXMuaGVpZ2h0ID0gMzAwMDtcclxuXHJcblx0XHRsZXQgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDE1MDAsIDE1MDAsIDMwLCAxNTAwLCAxNTAwLCA3MDApO1xyXG5cclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnd2hpdGUnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjEsICcjQUFBOEZGJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyM1MDRERkYnKTtcclxuXHJcblx0XHRjb250ZXh0LmFyYygxNTAwLCAxNTAwLCAzMDAwLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cclxuXHRcdGxldCBzaGFkb3dUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcclxuXHRcdHNoYWRvd1RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0bWFwOiBzaGFkb3dUZXh0dXJlLFxyXG5cdFx0XHRzaWRlOiBUSFJFRS5CYWNrU2lkZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c2t5LnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDI7XHJcblx0XHRza3kucm90YXRpb24ueiA9IE1hdGguUEkgLyA5O1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyb3RhdGUoeCwgeiwgcGhpKSB7XHJcblxyXG5cdFx0bGV0IHhQcmltZSA9IHggKiBNYXRoLmNvcyhwaGkpIC0geiAqIE1hdGguc2luKHBoaSk7XHJcblx0XHRsZXQgelByaW1lID0geCAqIE1hdGguc2luKHBoaSkgKyB6ICogTWF0aC5jb3MocGhpKTtcclxuXHJcblx0XHRyZXR1cm4gWyB4UHJpbWUsIHpQcmltZSBdO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDMsIDEwKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHRcdFxyXG5cdFx0bGV0IHN0cmFmZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRzdHJhZmUuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gd29ybGREaXJlY3Rpb24ueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSB3b3JsZERpcmVjdGlvbi56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiAtPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVSaWdodCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHN0cmFmZS54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHN0cmFmZS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcblx0XHRcdG9yaWdpblBvaW50LnkgKz0gMTsgLy8gcHJldmVudCBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kIGFuZCBncmlkLlxyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIDw9IDAgfHwgXHJcblx0XHRcdFx0KGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMS4yNSkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gMDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAzKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIDMpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udHJvbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb3VzZUNvbnRyb2xsZXIuZ2V0T2JqZWN0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdC8qIENPTlRST0xTICovXHJcblx0S0VZUzoge1xyXG5cclxuXHRcdFc6IDg3LFxyXG5cdFx0QTogNjUsXHJcblx0XHRTOiA4MyxcclxuXHRcdEQ6IDY4LFxyXG5cclxuXHRcdEFSUk9XX1VQOiAzOCxcclxuXHRcdEFSUk9XX0xFRlQ6IDM3LFxyXG5cdFx0QVJST1dfRE9XTjogNDAsXHJcblx0XHRBUlJPV19SSUdIVDogMzksXHJcblxyXG5cdFx0V0hJVEVTUEFDRTogMzJcclxuXHR9LFxyXG5cclxuXHRDVVJTT1JfU1BFRUQ6IDAuMDAyLFxyXG5cclxuXHQvKiBQSFlTSUMgKi9cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNTAsXHJcblx0TU9WRU1FTlRfU1BFRUQ6IDAuMjVcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbih4LCB5LCB6KSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnggPSB4O1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi55ID0geTtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24ueiA9IHo7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihhbmdsZVgsIGFuZ2xlWSwgYW5nbGVaKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnggPSBhbmdsZVg7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnkgPSBhbmdsZVk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnogPSBhbmdsZVo7XHJcblx0fVxyXG5cclxuXHRnZXRJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuV0hJVEVTUEFDRToge1xyXG5cdFx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5vbktleVVwID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleVVwKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0LmFkZCgpO1xyXG5cclxuXHRcdHRoaXMueWF3T2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnlhd09iamVjdC5hZGQodGhpcy5waXRjaE9iamVjdCk7XHJcblxyXG5cdFx0dGhpcy5QSV8yID0gLTAuMSArIE1hdGguUEkgLyAyOyAvLyAtMC4xIGlzIHRoZSBFcHNpbG9uIGZvciBnaW1iYWwgbG9jayBwcmV2ZW50LlxyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGxldCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0XHRsZXQgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcclxuXHJcblx0XHRcdHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnkgLT0gbW92ZW1lbnRYICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54IC09IG1vdmVtZW50WSAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblxyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggPSBNYXRoLm1heCggLXRoaXMuUElfMiwgTWF0aC5taW4oIHRoaXMuUElfMiwgdGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ICkgKTtcclxuXHJcblx0XHRcdGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSk7XHJcblx0XHRcdGxldCByb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIllYWlwiKTtcclxuXHRcdFx0bGV0IGxvb2tBdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRyb3RhdGlvbi5zZXQodGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54LCB0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55LCAwKTtcclxuXHJcblx0XHRcdGxvb2tBdC5jb3B5KGRpcmVjdGlvbikuYXBwbHlFdWxlcihyb3RhdGlvbik7XHJcblxyXG5cdFx0XHRsb29rQXQueCArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueDtcclxuXHRcdFx0bG9va0F0LnkgKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLnk7XHJcblx0XHRcdGxvb2tBdC56ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi56O1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7IHNlbGYub25Nb3VzZU1vdmUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRnZXRPYmplY3QoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMueWF3T2JqZWN0O1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5XYWxsID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMwLCAxNiwgMSk7XHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6ICdibHVlJyB9KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2FsbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuVG93ZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMywgMjAsIDMpO1xyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAnYmx1ZScgfSk7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlRvd2VyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlRvd2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==