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
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./index.js */1);


/***/ },
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	/*import CDropDown from './src/dropdown/index.js';
	exports.CDropDown = CDropDown;*/
	
	//'use strict';
	//module.exports.CDropDown = require('./src/dropdown/index.js');
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _index2Js = __webpack_require__(/*! ./index2.js */ 2);
	
	var _index2Js2 = _interopRequireDefault(_index2Js);
	
	var Test = function Test() {
		console.log('Hello, this is npm module. add result: ' + (0, _index2Js2['default'])(1, 2));
	};
	module.exports = Test;
	
	Test();

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./index2.js ***!
  \*******************/
/***/ function(module, exports) {

	"use strict";
	
	var Add = function Add(a, b) {
		return a + b;
	};
	module.exports = Add;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map