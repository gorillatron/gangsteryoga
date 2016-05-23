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
/***/ function(module, exports) {

	"use strict";
	
	var sidebar = document.getElementById("main-sidebar");
	var toggleButton = document.getElementById("menu-toggle");
	
	var open = false;
	
	toggleButton.addEventListener("click", function (event) {
	  open = !open;
	  if (open) {
	    sidebar.classList.add("open");
	    toggleButton.classList.add("cross");
	  } else {
	    sidebar.classList.remove("open");
	    toggleButton.classList.remove("cross");
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE4MWUxMmNjZTJkNTIyMTE3MjE/YTgzMyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvZW50cmllcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFWO0FBQ04sS0FBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFmOztBQUVOLEtBQUksT0FBTyxLQUFQOztBQUVKLGNBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsaUJBQVM7QUFDOUMsVUFBTyxDQUFDLElBQUQsQ0FEdUM7QUFFOUMsT0FBRyxJQUFILEVBQVM7QUFDUCxhQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsTUFBdEIsRUFETztBQUVQLGtCQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsT0FBM0IsRUFGTztJQUFULE1BSUs7QUFDSCxhQUFRLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsTUFBekIsRUFERztBQUVILGtCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsT0FBOUIsRUFGRztJQUpMO0VBRnFDLENBQXZDLEMiLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWE4MWUxMmNjZTJkNTIyMTE3MjFcbiAqKi8iLCJcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tc2lkZWJhclwiKVxyXG5jb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtdG9nZ2xlXCIpXHJcblxyXG5sZXQgb3BlbiA9IGZhbHNlXHJcblxyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBvcGVuID0gIW9wZW5cclxuICBpZihvcGVuKSB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXHJcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyb3NzXCIpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKVxyXG4gICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjcm9zc1wiKVxyXG4gIH1cclxufSlcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvZW50cmllcy9tZW51LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==