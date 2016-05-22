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
	var menuClick$ = Rx.Observable.fromEvent(toggleButton, 'click');
	
	var open = false;
	
	menuClick$.subscribe(function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU0NDdhZjk0ODcxZDk1NDM0NjkiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2VudHJpZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBLEtBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVjtBQUNOLEtBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNOLEtBQU0sYUFBYSxHQUFHLFVBQUgsQ0FBYyxTQUFkLENBQXdCLFlBQXhCLEVBQXNDLE9BQXRDLENBQWI7O0FBRU4sS0FBSSxPQUFPLEtBQVA7O0FBRUosWUFDRyxTQURILENBQ2EsaUJBQVM7QUFDbEIsVUFBTyxDQUFDLElBQUQsQ0FEVztBQUVsQixPQUFHLElBQUgsRUFBUztBQUNQLGFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixNQUF0QixFQURPO0FBRVAsa0JBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixPQUEzQixFQUZPO0lBQVQsTUFJSztBQUNILGFBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixNQUF6QixFQURHO0FBRUgsa0JBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixPQUE5QixFQUZHO0lBSkw7RUFGUyxDQURiLEMiLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTU0NDdhZjk0ODcxZDk1NDM0NjlcbiAqKi8iLCJcclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1zaWRlYmFyXCIpXHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS10b2dnbGVcIilcclxuY29uc3QgbWVudUNsaWNrJCA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KHRvZ2dsZUJ1dHRvbiwgJ2NsaWNrJylcclxuXHJcbmxldCBvcGVuID0gZmFsc2VcclxuXHJcbm1lbnVDbGljayRcclxuICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgIG9wZW4gPSAhb3BlblxyXG4gICAgaWYob3Blbikge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXHJcbiAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NcIilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpXHJcbiAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Jvc3NcIilcclxuICAgIH1cclxuICB9KVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9lbnRyaWVzL21lbnUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9