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
	
	var _ShooterGraphicsRender = __webpack_require__(2);
	
	var _ShooterGraphicsRender2 = _interopRequireDefault(_ShooterGraphicsRender);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.Game = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.render = new _ShooterGraphicsRender2.default();
			this.world = null;
	
			console.log("> Shooter Game > constructor > ready");
		}
	
		_createClass(_class, [{
			key: 'animate',
			value: function (_animate) {
				function animate() {
					return _animate.apply(this, arguments);
				}
	
				animate.toString = function () {
					return _animate.toString();
				};
	
				return animate;
			}(function () {
				requestAnimationFrame(animate);
				this.render();
			})
		}, {
			key: 'render',
			value: function render() {
				this.world.render();
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	Shooter.Graphics.Render = function () {
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
	
	exports.default = Shooter.Graphics.Render;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzY4ZDU5NDFmYWZiNDdlMGY4NmQiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlci9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFRLElBQVI7QUFFQyxvQkFBYztBQUFBOztBQUViLFFBQUssTUFBTCxHQUFjLHFDQUFkO0FBQ0EsUUFBSyxLQUFMLEdBQWEsSUFBYjs7QUFFQSxXQUFRLEdBQVIsQ0FBWSxzQ0FBWjtBQUNBOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFVVztBQUNULDBCQUFzQixPQUF0QjtBQUNBLFNBQUssTUFBTDtBQUNBLElBYkY7QUFBQTtBQUFBO0FBQUEsNEJBZVU7QUFDUixTQUFLLEtBQUwsQ0FBVyxNQUFYO0FBQ0E7QUFqQkY7O0FBQUE7QUFBQTs7QUFxQkEsUUFBTyxNQUFQLEdBQWdCLFlBQU07QUFDckIsTUFBTSxhQUFhLElBQUksUUFBUSxJQUFaLEVBQW5CO0FBQ0EsRUFGRCxDOzs7Ozs7OztBQ3hCQSxRQUFPLE9BQVAsR0FBa0IsZ0JBQWdCLE9BQU8sT0FBeEIsR0FBbUMsRUFBbkMsR0FBd0MsT0FBekQ7O0FBRUEsUUFBTyxPQUFQLENBQWUsU0FBZixHQUEyQixVQUFVLFNBQVYsRUFBcUI7QUFDNUMsU0FBSSxRQUFRLFVBQVUsS0FBVixDQUFnQixHQUFoQixDQUFaO1NBQ0ksU0FBUyxPQURiOztBQUdBLFNBQUksY0FBYyxNQUFNLENBQU4sQ0FBbEIsRUFBNEI7QUFDeEIsaUJBQVEsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFSO0FBQ0g7O0FBTjJDO0FBQUE7QUFBQTs7QUFBQTtBQVE1Qyw4QkFBc0IsS0FBdEIsOEhBQTZCO0FBQUEsaUJBQXJCLFVBQXFCOztBQUN6QixpQkFBSSxnQkFBZ0IsT0FBTyxPQUFPLFVBQVAsQ0FBM0IsRUFBK0M7QUFDM0Msd0JBQU8sVUFBUCxJQUFxQixFQUFyQjtBQUNIO0FBQ0Qsc0JBQVMsT0FBTyxVQUFQLENBQVQ7QUFDSDtBQWIyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWU1QyxZQUFPLE1BQVA7QUFDSCxFQWhCRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsU0FBUSxTQUFSLENBQWtCLGtCQUFsQjs7QUFFQSxTQUFRLFFBQVIsQ0FBaUIsTUFBakI7QUFFQyxvQkFBYztBQUFBOztBQUViLFFBQUssUUFBTCxHQUFnQixJQUFJLE1BQU0sYUFBVixFQUFoQjtBQUNBLFFBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBTyxVQUE3QixFQUF5QyxPQUFPLFdBQWhEO0FBQ0EsWUFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixLQUFLLFFBQUwsQ0FBYyxVQUF4Qzs7QUFFQSxXQUFRLEdBQVIsQ0FBWSxpREFBWjtBQUNBOztBQVRGO0FBQUE7QUFBQSwwQkFXUSxLQVhSLEVBV2UsTUFYZixFQVd1QjtBQUNyQixTQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXNCLEtBQXRCLEVBQTZCLE1BQTdCO0FBQ0E7QUFiRjs7QUFBQTtBQUFBOzttQkFpQmUsUUFBUSxRQUFSLENBQWlCLE0iLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDc2OGQ1OTQxZmFmYjQ3ZTBmODZkXG4gKiovIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuLi9uYW1lc3BhY2UuanMnO1xyXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIuanMnO1xyXG5cclxuU2hvb3Rlci5HYW1lID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlciA9IG5ldyBSZW5kZXIoKTtcclxuXHRcdHRoaXMud29ybGQgPSBudWxsO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyIEdhbWUgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YW5pbWF0ZSgpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLndvcmxkLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9faW5zdGFuY2UgPSBuZXcgU2hvb3Rlci5HYW1lKCk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR2FtZS9TaG9vdGVyLkdhbWUuanNcbiAqKi8iLCJ3aW5kb3cuU2hvb3RlciA9IChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgU2hvb3RlcikgPyB7fSA6IFNob290ZXI7XHJcblxyXG53aW5kb3cuU2hvb3Rlci5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XHJcbiAgICBsZXQgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSBTaG9vdGVyO1xyXG5cclxuICAgIGlmIChcIlNob290ZXJcIiA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgc2luZ2xlUGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgcGFyZW50W3NpbmdsZVBhcnRdKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtzaW5nbGVQYXJ0XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbc2luZ2xlUGFydF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25hbWVzcGFjZS5qc1xuICoqLyIsIlNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuUmVuZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5HcmFwaGljcy5SZW5kZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5SZW5kZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==