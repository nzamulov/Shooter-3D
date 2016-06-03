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
	
	var _ShooterUtilsMathExtends = __webpack_require__(4);
	
	var _ShooterUtilsMathExtends2 = _interopRequireDefault(_ShooterUtilsMathExtends);
	
	var _ShooterControllersWindowController = __webpack_require__(5);
	
	var _ShooterControllersWindowController2 = _interopRequireDefault(_ShooterControllersWindowController);
	
	var _ShooterGraphicsRenderer = __webpack_require__(7);
	
	var _ShooterGraphicsRenderer2 = _interopRequireDefault(_ShooterGraphicsRenderer);
	
	var _ShooterEntitiesWorld = __webpack_require__(8);
	
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.mathExtends = function () {
	
			Math.rotatePoint = function (x, y, phi) {
	
					var xPrime = x * Math.cos(phi) - y * Math.sin(phi);
					var yPrime = x * Math.sin(phi) + y * Math.cos(phi);
	
					return [xPrime, yPrime];
			};
	}();
	
	exports.default = Shooter.Utils.mathExtends;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterControllersAbstractController = __webpack_require__(6);
	
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesPlayer = __webpack_require__(9);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesWall = __webpack_require__(14);
	
	var _ShooterEntitiesWall2 = _interopRequireDefault(_ShooterEntitiesWall);
	
	var _ShooterEntitiesTower = __webpack_require__(16);
	
	var _ShooterEntitiesTower2 = _interopRequireDefault(_ShooterEntitiesTower);
	
	var _ShooterEntitiesBlank = __webpack_require__(17);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesFloor = __webpack_require__(18);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
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
	
					/*let floor = new Floor();
	    floor.setPosition(-1000, 0.02, -1000);
	    floor.setRotation(-Math.PI / 2, 0, 0);
	    this.scene.add(floor.getInstance());*/
	
					/*geometry = new THREE.BoxGeometry(2, 2, 2);
	    material = new THREE.MeshBasicMaterial( { color: 'red' } );
	    let cube = new THREE.Mesh( geometry, material );
	    		cube.position.x = 1;
	    cube.position.y = 1.03;
	    cube.position.z = 1;
	    
	    this.scene.add(cube);
	    		geometry = new THREE.BoxGeometry(2, 2, 2);
	    material = new THREE.MeshBasicMaterial( { color: 'skyblue' } );
	    cube = new THREE.Mesh( geometry, material );
	    		cube.position.x = 1;
	    cube.position.y = 1.03;
	    cube.position.z = -1;
	    		this.scene.add(cube);
	    		geometry = new THREE.BoxGeometry(2, 2, 2);
	    material = new THREE.MeshBasicMaterial( { color: 'orange' } );
	    cube = new THREE.Mesh( geometry, material );
	    		cube.position.x = 3;
	    cube.position.y = 6;
	    cube.position.z = 3;
	    		this.scene.add(cube);*/
	
					/* GATE AND FENCE */
	
					var tower = new _ShooterEntitiesTower2.default();
					tower.setPosition(10, 10, -10);
					this.scene.add(tower.getInstance());
	
					var blank = new _ShooterEntitiesBlank2.default();
					blank.setPosition(-5, 18, -10);
					blank.setRotation(-Math.PI / 2, 0, -Math.PI / 2);
					this.scene.add(blank.getInstance());
	
					var startX = 10;
					var startZ = -10;
	
					var lastX = 25;
					var lastZ = -10;
	
					for (var _i2 = 1; _i2 < 18; ++_i2) {
	
							var phi = -Math.PI / 9;
	
							var _Math$rotatePoint = Math.rotatePoint(lastX - startX, lastZ - startZ, phi);
	
							var _Math$rotatePoint2 = _slicedToArray(_Math$rotatePoint, 2);
	
							var newX = _Math$rotatePoint2[0];
							var newZ = _Math$rotatePoint2[1];
	
	
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
	
					/* -------- */
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(10);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(11);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterControllersKeyboardController = __webpack_require__(12);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(13);
	
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(10);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(6);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(10);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(6);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(11);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
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
	
			var wall_texture = new THREE.Texture();
	
			_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
				wall_texture.image = image;
				wall_texture.needsUpdate = true;
				wall_texture.wrapS = THREE.RepeatWrapping;
				wall_texture.wrapT = THREE.RepeatWrapping;
				wall_texture.repeat.set(4, 4);
			});
	
			_this.geometry = new THREE.BoxGeometry(30, 16, 1);
			_this.material = new THREE.MeshBasicMaterial({ map: wall_texture, overdraw: true });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Wall;

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
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(11);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
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
	
			var tower_texture = new THREE.Texture();
	
			_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
				tower_texture.image = image;
				tower_texture.needsUpdate = true;
				tower_texture.wrapS = THREE.RepeatWrapping;
				tower_texture.wrapT = THREE.RepeatWrapping;
				tower_texture.repeat.set(1, 4);
			});
	
			_this.geometry = new THREE.BoxGeometry(3, 20, 3);
			_this.material = new THREE.MeshBasicMaterial({ map: tower_texture, overdraw: true });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Tower;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(11);
	
	var _ShooterEntitiesAbstractEntity2 = _interopRequireDefault(_ShooterEntitiesAbstractEntity);
	
	var _ShooterGraphicsLoader = __webpack_require__(15);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Blank = function (_AbstractEntity) {
		_inherits(_class, _AbstractEntity);
	
		function _class() {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			var blank_texture = new THREE.Texture();
	
			_ShooterGraphicsLoader2.default.instance.getImage('img/blank.jpg', function (image) {
				blank_texture.image = image;
				blank_texture.needsUpdate = true;
				blank_texture.wrapS = THREE.RepeatWrapping;
				blank_texture.wrapT = THREE.RepeatWrapping;
			});
	
			_this.geometry = new THREE.CylinderGeometry(0.2, 0.2, 36, 64);
			_this.material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
			_this.instance = new THREE.Mesh(_this.geometry, _this.material);
			return _this;
		}
	
		return _class;
	}(_ShooterEntitiesAbstractEntity2.default);
	
	exports.default = Shooter.Entities.Blank;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ShooterEntitiesAbstractEntity = __webpack_require__(11);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzZjMjM5MzBlNTQ3OGI3NDU5ZjgiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5tYXRoRXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Ub3dlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBUSxJQUFSO0FBRUMsb0JBQWM7QUFBQTs7QUFFYixRQUFLLFFBQUwsR0FBZ0IsdUNBQWhCO0FBQ0EsUUFBSyxLQUFMLEdBQWEsb0NBQWI7O0FBRUEsUUFBSyxnQkFBTCxHQUF3Qiw2Q0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUF4QixFQUFnRCxLQUFLLFFBQXJELENBQXhCOztBQUVBLE9BQUksT0FB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QUFNLElBQVYsQ0FBZSxNQUFLLFFBQXBCLEVBQThCLE1BQUssUUFBbkMsQ0FBaEI7QUFmYTtBQWdCYjs7QUFsQkY7QUFBQTs7bUJBcUJlLFFBQVEsUUFBUixDQUFpQixLIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzNmMyMzkzMGU1NDc4Yjc0NTlmOFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBuYW1lc3BhY2UgZnJvbSAnLi4vbmFtZXNwYWNlLmpzJztcclxuXHJcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyc7XHJcbmltcG9ydCByZXF1ZXN0UG9pbnRlckxvY2sgZnJvbSAnLi4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jay5qcyc7XHJcbmltcG9ydCBtYXRoRXh0ZW5kcyBmcm9tICcuLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMubWF0aEV4dGVuZHMuanMnO1xyXG5cclxuaW1wb3J0IFdpbmRvd0NvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyc7XHJcblxyXG5TaG9vdGVyLkdhbWUgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcblx0XHR0aGlzLndpbmRvd0NvbnRyb2xsZXIgPSBXaW5kb3dDb250cm9sbGVyLmNyZWF0ZSh0aGlzLndvcmxkLmdldENhbWVyYSgpLCB0aGlzLnJlbmRlcmVyKTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHRcdFx0c2VsZi5yZW5kZXIoKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIgR2FtZSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy53b3JsZC5nZXRTY2VuZSgpLCB0aGlzLndvcmxkLmdldENhbWVyYSgpKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcblx0LyogTE9DSyBUSEUgUE9JTlRFUiAqL1xyXG5cdHJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG5cclxuXHQvKiBTVEFSVCBHQU1FICovXHJcblx0Y29uc3QgX19pbnN0YW5jZSA9IG5ldyBTaG9vdGVyLkdhbWUoKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qc1xuICoqLyIsIndpbmRvdy5TaG9vdGVyID0gKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBTaG9vdGVyKSA/IHt9IDogU2hvb3RlcjtcclxuXHJcbndpbmRvdy5TaG9vdGVyLm5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcclxuICAgIGxldCBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgnLicpLFxyXG4gICAgICAgIHBhcmVudCA9IFNob290ZXI7XHJcblxyXG4gICAgaWYgKFwiU2hvb3RlclwiID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBzaW5nbGVQYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBwYXJlbnRbc2luZ2xlUGFydF0pIHtcclxuICAgICAgICAgICAgcGFyZW50W3NpbmdsZVBhcnRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudFtzaW5nbGVQYXJ0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbmFtZXNwYWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLlV0aWxzXCIpO1xyXG5cclxuU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xyXG5cdHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXHQgICB8fFxyXG4gICAgICAgIFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuXHRcdFx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuXHRcdFx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID0gKCkgPT4ge1xyXG5cclxuXHRsZXQgaGF2ZVBvaW50ZXJMb2NrID0gJ3BvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ21velBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQgfHwgXHJcblx0XHRcdFx0XHRcdCAgJ3dlYmtpdFBvaW50ZXJMb2NrRWxlbWVudCcgaW4gZG9jdW1lbnQ7XHJcblxyXG5cdGlmKGhhdmVQb2ludGVyTG9jaykge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2sgPiBQb2ludGVyIExvY2sgQVBJIHdhcyBmb3VuZGVkLlwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0bGV0IGxvY2tQb2ludGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRib2R5LnJlcXVlc3RQb2ludGVyTG9jayA9IGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJvZHkud2Via2l0UmVxdWVzdFBvaW50ZXJMb2NrO1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2NrUG9pbnRlciwgZmFsc2UpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFBvaW50ZXIgTG9jayBBUEkuXCIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLm1hdGhFeHRlbmRzID0gKCgpID0+IHtcclxuXHJcblx0TWF0aC5yb3RhdGVQb2ludCA9ICh4LCB5LCBwaGkpID0+IHtcclxuXHJcblx0XHRsZXQgeFByaW1lID0geCAqIE1hdGguY29zKHBoaSkgLSB5ICogTWF0aC5zaW4ocGhpKTtcclxuXHRcdGxldCB5UHJpbWUgPSB4ICogTWF0aC5zaW4ocGhpKSArIHkgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuXHRcdHJldHVybiBbIHhQcmltZSwgeVByaW1lIF07XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLm1hdGhFeHRlbmRzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLm1hdGhFeHRlbmRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXIucmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSApO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyKGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHsgfVxyXG5cdGRldGFjaEV2ZW50cygpIHsgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qcyc7XHJcbmltcG9ydCBXYWxsIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5XYWxsLmpzJztcclxuaW1wb3J0IFRvd2VyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5Ub3dlci5qcyc7XHJcbmltcG9ydCBCbGFuayBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgRmxvb3IgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuV29ybGQgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHhGRkFDNDAsIDAsIDE1MDApO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdGxldCBzaXplID0gMjAwMCwgc3RlcCA9IDI7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogJ2dyZWVuJyB9KTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAtc2l6ZTsgaSA8PSBzaXplOyBpICs9IHN0ZXApIHtcclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggLSBzaXplLCAwLjAyLCBpICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBzaXplLCAwLjAyLCBpICkpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggaSwgMC4wMiwgLSBzaXplICkpO1xyXG5cdFx0XHRnZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCBpLCAwLjAyLCBzaXplICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsaW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsLCBUSFJFRS5MaW5lUGllY2VzKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGxpbmUpO1xyXG5cclxuXHRcdC8qZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg0MCwgNDAsIDMyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnYmx1ZScgfSApO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsZXQgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cdFx0cGxhbmUucm90YXRpb24ueCA9IC1NYXRoLlBJIC8gMi4wO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQocGxhbmUpOyovXHJcblxyXG5cdFx0LypsZXQgZmxvb3IgPSBuZXcgRmxvb3IoKTtcclxuXHRcdGZsb29yLnNldFBvc2l0aW9uKC0xMDAwLCAwLjAyLCAtMTAwMCk7XHJcblx0XHRmbG9vci5zZXRSb3RhdGlvbigtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoZmxvb3IuZ2V0SW5zdGFuY2UoKSk7Ki9cclxuXHJcblx0XHQvKmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDIsIDIsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6ICdyZWQnIH0gKTtcclxuXHRcdGxldCBjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGN1YmUucG9zaXRpb24ueCA9IDE7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnkgPSAxLjAzO1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi56ID0gMTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3ViZSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogJ3NreWJsdWUnIH0gKTtcclxuXHRcdGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0Y3ViZS5wb3NpdGlvbi54ID0gMTtcclxuXHRcdGN1YmUucG9zaXRpb24ueSA9IDEuMDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnogPSAtMTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTtcclxuXHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyLCAyLCAyKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAnb3JhbmdlJyB9ICk7XHJcblx0XHRjdWJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGN1YmUucG9zaXRpb24ueCA9IDM7XHJcblx0XHRjdWJlLnBvc2l0aW9uLnkgPSA2O1xyXG5cdFx0Y3ViZS5wb3NpdGlvbi56ID0gMztcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdWJlKTsqL1xyXG5cclxuXHJcblx0XHQvKiBHQVRFIEFORCBGRU5DRSAqL1xyXG5cclxuXHRcdGxldCB0b3dlciA9IG5ldyBUb3dlcigpO1xyXG5cdFx0dG93ZXIuc2V0UG9zaXRpb24oMTAsIDEwLCAtMTApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQodG93ZXIuZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG5cdFx0bGV0IGJsYW5rID0gbmV3IEJsYW5rKCk7XHJcblx0XHRibGFuay5zZXRQb3NpdGlvbigtNSwgMTgsIC0xMCk7XHJcblx0XHRibGFuay5zZXRSb3RhdGlvbigtTWF0aC5QSSAvIDIsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChibGFuay5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHRsZXQgc3RhcnRYID0gMTA7XHJcblx0XHRsZXQgc3RhcnRaID0gLTEwO1xyXG5cclxuXHRcdGxldCBsYXN0WCA9IDI1O1xyXG5cdFx0bGV0IGxhc3RaID0gLTEwO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDE7IGkgPCAxODsgKytpKSB7XHJcblxyXG5cdFx0XHRsZXQgcGhpID0gLU1hdGguUEkgLyA5O1xyXG5cclxuXHRcdFx0bGV0IFtuZXdYLCBuZXdaXSA9IE1hdGgucm90YXRlUG9pbnQobGFzdFggLSBzdGFydFgsIGxhc3RaIC0gc3RhcnRaLCBwaGkpO1xyXG5cclxuXHRcdFx0bGV0IHdhbGwgPSBuZXcgV2FsbCgpO1xyXG5cdFx0XHR3YWxsLnNldFBvc2l0aW9uKHN0YXJ0WCArIG5ld1gsIDgsIHN0YXJ0WiArIG5ld1opO1xyXG5cdFx0XHR3YWxsLnNldFJvdGF0aW9uKDAsIChNYXRoLlBJIC8gOSkgKiBpLCAwKTtcclxuXHRcdFx0dGhpcy5zY2VuZS5hZGQod2FsbC5nZXRJbnN0YW5jZSgpKTtcclxuXHJcblx0XHRcdGxhc3RYID0gc3RhcnRYICsgMyAqIG5ld1g7XHJcblx0XHRcdGxhc3RaID0gc3RhcnRaICsgMyAqIG5ld1o7XHJcblxyXG5cdFx0XHRzdGFydFggPSBzdGFydFggKyAyICogbmV3WDtcclxuXHRcdFx0c3RhcnRaID0gc3RhcnRaICsgMiAqIG5ld1o7XHJcblxyXG5cdFx0XHRsZXQgdG93ZXIgPSBuZXcgVG93ZXIoKTtcclxuXHRcdFx0dG93ZXIuc2V0UG9zaXRpb24oc3RhcnRYLCAxMCwgc3RhcnRaKTtcclxuXHRcdFx0dG93ZXIuc2V0Um90YXRpb24oMCwgKE1hdGguUEkgLyA5KSAqIChpICsgMSksIDApO1xyXG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0b3dlci5nZXRJbnN0YW5jZSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiAtLS0tLS0tLSAqL1xyXG5cclxuXHRcdHZhciBwb2ludHMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCAxMDsgaSArKyApIHtcclxuXHRcdFx0cG9pbnRzLnB1c2goIG5ldyBUSFJFRS5WZWN0b3IyKCBNYXRoLnNpbiggaSAqIDAuMiApICogNSArIDUsIGkgLSA5KSk7XHJcblx0XHR9XHJcblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHBvaW50cywgMzApO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmZmZjAwIH0gKTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0dmFyIGxhdGhlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGxhdGhlLnBvc2l0aW9uLnogPSAtMTUwO1xyXG5cclxuXHRcdGxhdGhlLnJvdGF0aW9uLnogPSAtTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggbGF0aGUgKTtcclxuXHJcblxyXG5cclxuXHRcdHBvaW50cyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IDEwOyBpICsrICkge1xyXG5cdFx0XHRwb2ludHMucHVzaCggbmV3IFRIUkVFLlZlY3RvcjIoIE1hdGguc2luKCBpICogMC4yICkgKiA1ICsgMiwgMiAqIGkgLSAxOCkpO1xyXG5cdFx0fVxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMsIDMwKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmYwMCB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxhdGhlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGxhdGhlLnBvc2l0aW9uLnogPSAtMTY4O1xyXG5cdFx0bGF0aGUucG9zaXRpb24ueCA9IDE1O1xyXG5cclxuXHRcdGxhdGhlLnJvdGF0aW9uLnogPSAtTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggbGF0aGUgKTtcclxuXHJcblxyXG5cclxuXHRcdHBvaW50cyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IDEwOyBpICsrICkge1xyXG5cdFx0XHRwb2ludHMucHVzaCggbmV3IFRIUkVFLlZlY3RvcjIoIE1hdGguc2luKCBpICogMC4yICkgKiA1ICsgMiwgMS41ICogaSAtIDEzLjUpKTtcclxuXHRcdH1cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocG9pbnRzLCAzMCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsYXRoZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRsYXRoZS5wb3NpdGlvbi56ID0gLTE2MDtcclxuXHRcdGxhdGhlLnBvc2l0aW9uLnggPSA3O1xyXG5cclxuXHRcdGxhdGhlLnJvdGF0aW9uLnogPSAtTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggbGF0aGUgKTtcclxuXHJcblxyXG5cdFx0cG9pbnRzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMTA7IGkgKysgKSB7XHJcblx0XHRcdHBvaW50cy5wdXNoKCBuZXcgVEhSRUUuVmVjdG9yMiggTWF0aC5zaW4oIGkgKiAwLjIgKSAqIDUgKyAyLCBpIC0gOSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMsIDMwKTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmYwMCB9ICk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxhdGhlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdGxhdGhlLnBvc2l0aW9uLnogPSAtMTQ4O1xyXG5cdFx0bGF0aGUucG9zaXRpb24ueCA9IDE2O1xyXG5cclxuXHRcdGxhdGhlLnJvdGF0aW9uLnogPSAtTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggbGF0aGUgKTtcclxuXHJcblxyXG5cclxuXHRcdHBvaW50cyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IDEwOyBpICsrICkge1xyXG5cdFx0XHRwb2ludHMucHVzaCggbmV3IFRIUkVFLlZlY3RvcjIoIE1hdGguc2luKCBpICogMC4yICkgKiA1ICsgMiwgaSAtIDkpKTtcclxuXHRcdH1cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocG9pbnRzLCAzMCk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRsYXRoZSA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRsYXRoZS5wb3NpdGlvbi56ID0gLTE1OTtcclxuXHRcdGxhdGhlLnBvc2l0aW9uLnggPSAyNDtcclxuXHJcblx0XHRsYXRoZS5yb3RhdGlvbi56ID0gLU1hdGguUEk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoIGxhdGhlICk7XHJcblxyXG5cclxuXHRcdC8qIERFU0VSVCAqL1xyXG5cclxuXHRcdC8qbGV0IGRlc2VydF90ZXh0dXJlLCBsb2FkZXI7XHJcblxyXG5cdFx0ZGVzZXJ0X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cdFx0bG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblxyXG5cdFx0bG9hZGVyLmxvYWQoJ2ltZy9kZXNlcnQuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGRlc2VydF90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGRlc2VydF90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBhcmFtZXRyaWNHZW9tZXRyeSgodSwgdikgPT4ge1xyXG5cclxuXHRcdFx0dSA9IDEwMDAgKiB1O1xyXG5cdFx0XHR2ID0gMTAwMCAqIHY7XHJcblx0XHRcdGxldCB5ID0gNjAgKiBNYXRoLmFicyhNYXRoLnNpbihNYXRoLnBvdyh1ICogdiwgMSAvIDUpKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjModSwgeSwgdik7XHJcblx0XHR9LCAyMCwgMjApO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkZXNlcnRfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuXHRcdGxldCBjdXJ2ZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0Y3VydmUucG9zaXRpb24ueCA9IC0xMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3VydmUpO1xyXG5cclxuXHRcdGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gMTA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi56ID0gLTMwMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnkgPSAtMTA7XHJcblxyXG5cdFx0Y3VydmUucm90YXRpb24ueSA9IE1hdGguUEk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoY3VydmUpOyovXHJcblxyXG5cdFx0LyogLS0tLS0tICovXHJcblxyXG5cdFx0LyogU0tZICovXHJcblxyXG5cdFx0LypnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgzMDAwKTtcclxuXHJcblx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHRsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHRcdGNvbnRleHQuY2FudmFzLndpZHRoID0gMzAwMDtcclxuXHRcdGNvbnRleHQuY2FudmFzLmhlaWdodCA9IDMwMDA7XHJcblxyXG5cdFx0bGV0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgxNTAwLCAxNTAwLCAzMCwgMTUwMCwgMTUwMCwgNzAwKTtcclxuXHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3doaXRlJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMC4xLCAnI0FBQThGRicpO1xyXG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjNTA0REZGJyk7XHJcblxyXG5cdFx0Y29udGV4dC5hcmMoMTUwMCwgMTUwMCwgMzAwMCwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuXHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcblx0XHRjb250ZXh0LmZpbGwoKTtcclxuXHJcblx0XHRsZXQgc2hhZG93VGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGNhbnZhcyk7XHJcblx0XHRzaGFkb3dUZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcblx0XHRcdG1hcDogc2hhZG93VGV4dHVyZSxcclxuXHRcdFx0c2lkZTogVEhSRUUuQmFja1NpZGVcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBza3kgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHNreS5yb3RhdGlvbi55ID0gLU1hdGguUEkgLyAyO1xyXG5cdFx0c2t5LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gOTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChza3kpOyovXHJcblxyXG5cdFx0LyogLS0tLS0tICovXHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuV29ybGQgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKHRoaXMuc2NlbmUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NlbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2VuZTtcclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYXllci5nZXRDYW1lcmEoKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLldvcmxkO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldvcmxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5cclxuaW1wb3J0IEtleWJvYXJkQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IE1vdXNlQ29udHJvbGxlciBmcm9tICcuLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuUGxheWVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdHRoaXMubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHR0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IE1hdGguUEkgLyAyO1xyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDAsIDMsIDEwKTtcclxuXHJcblx0XHR0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IEtleWJvYXJkQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblx0XHR0aGlzLm1vdXNlQ29udHJvbGxlciA9IE1vdXNlQ29udHJvbGxlci5jcmVhdGUodGhpcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuUGxheWVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShzY2VuZSkge1xyXG5cclxuXHRcdGxldCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHRcdFxyXG5cdFx0bGV0IHN0cmFmZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHRzdHJhZmUuY3Jvc3NWZWN0b3JzKHdvcmxkRGlyZWN0aW9uLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gd29ybGREaXJlY3Rpb24ueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSB3b3JsZERpcmVjdGlvbi56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMubW92ZUxlZnQpIHtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueCAtPSBzdHJhZmUueDtcclxuXHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiAtPSBzdHJhZmUuejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVCYWNrd2FyZCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHdvcmxkRGlyZWN0aW9uLng7XHJcblx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogLT0gd29ybGREaXJlY3Rpb24uejtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLm1vdmVSaWdodCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICs9IHN0cmFmZS54O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IHN0cmFmZS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuanVtcGluZykge1xyXG5cclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcblx0XHRcdG9yaWdpblBvaW50LnkgKz0gMTsgLy8gcHJldmVudCBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kIGFuZCBncmlkLlxyXG5cclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuXHRcdFx0bGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhzY2VuZS5jaGlsZHJlbik7XHJcblxyXG5cdFx0XHRpZih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIDw9IDAgfHwgXHJcblx0XHRcdFx0KGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMS4yNSkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gMDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgKz0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gLT0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZmFsbGluZykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG9yaWdpblBvaW50ID0gdGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKTtcclxuXHRcdFx0bGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIob3JpZ2luUG9pbnQsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCAzKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IE1hdGgubWF4KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnksIDMpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bGV0IGFkZEhlaWdodCA9IENPTlNUQU5UUy5KVU1QX1NUUkVOR1RIICogTWF0aC5zaW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueSAtPSBhZGRIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiArPSBNYXRoLlBJIC8gQ09OU1RBTlRTLkdSQVZJVFk7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLm1pbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uLCBNYXRoLlBJIC8gMik7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRncmF2aXRhdGlvbihzY2VuZSkge1xyXG5cclxuXHRcdGlmKCF0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYoIWNvbGxpc2lvblJlc3VsdHMubGVuZ3RoIHx8IChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA+IDIpKSB7XHJcblx0XHRcdFx0dGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udHJvbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb3VzZUNvbnRyb2xsZXIuZ2V0T2JqZWN0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5Db25zdGFudHMgPSB7XHJcblxyXG5cdC8qIENPTlRST0xTICovXHJcblx0S0VZUzoge1xyXG5cclxuXHRcdFc6IDg3LFxyXG5cdFx0QTogNjUsXHJcblx0XHRTOiA4MyxcclxuXHRcdEQ6IDY4LFxyXG5cclxuXHRcdEFSUk9XX1VQOiAzOCxcclxuXHRcdEFSUk9XX0xFRlQ6IDM3LFxyXG5cdFx0QVJST1dfRE9XTjogNDAsXHJcblx0XHRBUlJPV19SSUdIVDogMzksXHJcblxyXG5cdFx0V0hJVEVTUEFDRTogMzJcclxuXHR9LFxyXG5cclxuXHRDVVJTT1JfU1BFRUQ6IDAuMDAyLFxyXG5cclxuXHQvKiBQSFlTSUMgKi9cclxuXHRKVU1QX1NUUkVOR1RIOiAwLjUsXHJcblx0R1JBVklUWTogNTAsXHJcblx0TU9WRU1FTlRfU1BFRUQ6IDAuMjVcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnN0YW50cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eSA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbih4LCB5LCB6KSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnggPSB4O1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi55ID0geTtcclxuXHRcdHRoaXMuaW5zdGFuY2UucG9zaXRpb24ueiA9IHo7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihhbmdsZVgsIGFuZ2xlWSwgYW5nbGVaKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnggPSBhbmdsZVg7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnkgPSBhbmdsZVk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnogPSBhbmdsZVo7XHJcblx0fVxyXG5cclxuXHRnZXRJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuQ29udHJvbGxlcnNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBBYnN0cmFjdENvbnRyb2xsZXIgZnJvbSAnLi9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci9TaG9vdGVyLkNvbnRyb2xsZXJzLkFic3RyYWN0Q29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IocGxheWVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlc6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19VUDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUZvcndhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuRDpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1JJR0hUOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuV0hJVEVTUEFDRToge1xyXG5cdFx0XHRcdFx0aWYoIXRoaXMucGxheWVyLmZhbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIuanVtcGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5vbktleVVwID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQTpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0xFRlQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5TOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfRE9XTjoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUJhY2t3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7IHNlbGYub25LZXlEb3duKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleVVwKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnBpdGNoT2JqZWN0LmFkZCgpO1xyXG5cclxuXHRcdHRoaXMueWF3T2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblx0XHR0aGlzLnlhd09iamVjdC5hZGQodGhpcy5waXRjaE9iamVjdCk7XHJcblxyXG5cdFx0dGhpcy5QSV8yID0gLTAuMSArIE1hdGguUEkgLyAyOyAvLyAtMC4xIGlzIHRoZSBFcHNpbG9uIGZvciBnaW1iYWwgbG9jayBwcmV2ZW50LlxyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdGxldCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xyXG5cdFx0XHRsZXQgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcclxuXHJcblx0XHRcdHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnkgLT0gbW92ZW1lbnRYICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHRcdFx0dGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54IC09IG1vdmVtZW50WSAqIENPTlNUQU5UUy5DVVJTT1JfU1BFRUQ7XHJcblxyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggPSBNYXRoLm1heCggLXRoaXMuUElfMiwgTWF0aC5taW4oIHRoaXMuUElfMiwgdGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54ICkgKTtcclxuXHJcblx0XHRcdGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSk7XHJcblx0XHRcdGxldCByb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIllYWlwiKTtcclxuXHRcdFx0bGV0IGxvb2tBdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRyb3RhdGlvbi5zZXQodGhpcy5waXRjaE9iamVjdC5yb3RhdGlvbi54LCB0aGlzLnlhd09iamVjdC5yb3RhdGlvbi55LCAwKTtcclxuXHJcblx0XHRcdGxvb2tBdC5jb3B5KGRpcmVjdGlvbikuYXBwbHlFdWxlcihyb3RhdGlvbik7XHJcblxyXG5cdFx0XHRsb29rQXQueCArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueDtcclxuXHRcdFx0bG9va0F0LnkgKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLnk7XHJcblx0XHRcdGxvb2tBdC56ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi56O1xyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2FtZXJhLmxvb2tBdChsb29rQXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7IHNlbGYub25Nb3VzZU1vdmUoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRnZXRPYmplY3QoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMueWF3T2JqZWN0O1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIocGxheWVyKTtcclxuXHJcblx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5XYWxsID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudGl0eSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRsZXQgd2FsbF90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy90b3dlci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0d2FsbF90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdHdhbGxfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdHdhbGxfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHR3YWxsX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0d2FsbF90ZXh0dXJlLnJlcGVhdC5zZXQoNCwgNCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMwLCAxNiwgMSk7XHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB3YWxsX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2FsbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5XYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxubGV0IF9pbnN0YW5jZSA9IFN5bWJvbCgpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5sb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldEltYWdlKHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLmxvYWRlci5sb2FkKHBhdGgsIChpbWFnZSkgPT4geyBjYWxsYmFjayhpbWFnZSk7IH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuXHRcdGlmKCF0aGlzW19pbnN0YW5jZV0pIHtcclxuXHRcdFx0dGhpc1tfaW5zdGFuY2VdID0gbmV3IFNob290ZXIuR3JhcGhpY3MuTG9hZGVyKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpc1tfaW5zdGFuY2VdO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RFbnRpdHkgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5L1Nob290ZXIuRW50aXRpZXMuQWJzdHJhY3RFbnRpdHkuanMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Ub3dlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnRpdHkge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0bGV0IHRvd2VyX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3Rvd2VyLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHR0b3dlcl90ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdHRvd2VyX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHR0b3dlcl90ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdHRvd2VyX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0dG93ZXJfdGV4dHVyZS5yZXBlYXQuc2V0KDEsIDQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAyMCwgMyk7XHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0b3dlcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLlRvd2VyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlRvd2VyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGxldCBibGFua190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9ibGFuay5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4yLCAwLjIsIDM2LCA2NCk7XHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibGFua190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJsYW5rO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0RW50aXR5IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5BYnN0cmFjdEVudGl0eS9TaG9vdGVyLkVudGl0aWVzLkFic3RyYWN0RW50aXR5LmpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzJztcclxuXHJcblNob290ZXIuRW50aXRpZXMuRmxvb3IgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0RW50aXR5IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGxldCBmbG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9mbG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMzAwMCwgMzAwMCwgNDAsIDQwKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGZsb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuRmxvb3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9