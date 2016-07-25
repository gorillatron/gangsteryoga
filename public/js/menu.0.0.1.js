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
	
	var sidebar = $("#main-sidebar");
	var toggleButton = $("#cover .hamburger");
	var nav = $("#main-nav");
	var cover = $("#cover");
	
	var open = false;
	
	toggleButton.on("click", function (event) {
	  open = !open;
	
	  var transform = null;
	
	  if (open) {
	    transform = 'translatex(-' + nav.outerWidth() + 'px)';
	  } else {
	    transform = 'translatex(0px)';
	  }
	
	  cover.css({
	    '-ms-transform': transform,
	    '-moz-transform': transform,
	    '-webkit-transform': transform,
	    'transform': transform
	  });
	
	  toggleButton.toggleClass("cross");
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzU3ZjBlYzBjMDc2NGMzMDAzOGY/MDBkNSIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0EsS0FBTSxVQUFVLEVBQUUsZUFBRixDQUFWO0FBQ04sS0FBTSxlQUFlLEVBQUUsbUJBQUYsQ0FBZjtBQUNOLEtBQU0sTUFBTSxFQUFFLFdBQUYsQ0FBTjtBQUNOLEtBQU0sUUFBUSxFQUFFLFFBQUYsQ0FBUjs7QUFFTixLQUFJLE9BQU8sS0FBUDs7QUFFSixjQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsaUJBQVM7QUFDaEMsVUFBTyxDQUFDLElBQUQsQ0FEeUI7O0FBR2hDLE9BQUksWUFBWSxJQUFaLENBSDRCOztBQUtoQyxPQUFHLElBQUgsRUFBUztBQUNQLGlCQUFZLGlCQUFpQixJQUFJLFVBQUosRUFBakIsR0FBb0MsS0FBcEMsQ0FETDtJQUFULE1BR0s7QUFDSCxpQkFBWSxpQkFBWixDQURHO0lBSEw7O0FBT0EsU0FBTSxHQUFOLENBQVU7QUFDUixzQkFBaUIsU0FBakI7QUFDQSx1QkFBa0IsU0FBbEI7QUFDQSwwQkFBcUIsU0FBckI7QUFDQSxrQkFBYSxTQUFiO0lBSkYsRUFaZ0M7O0FBbUJoQyxnQkFBYSxXQUFiLENBQXlCLE9BQXpCLEVBbkJnQztFQUFULENBQXpCLEMiLCJmaWxlIjoibWVudS4wLjAuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzU3ZjBlYzBjMDc2NGMzMDAzOGZcbiAqKi8iLCJcclxuY29uc3Qgc2lkZWJhciA9ICQoXCIjbWFpbi1zaWRlYmFyXCIpXHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9ICQoXCIjY292ZXIgLmhhbWJ1cmdlclwiKVxyXG5jb25zdCBuYXYgPSAkKFwiI21haW4tbmF2XCIpXHJcbmNvbnN0IGNvdmVyID0gJChcIiNjb3ZlclwiKVxyXG5cclxubGV0IG9wZW4gPSBmYWxzZVxyXG5cclxudG9nZ2xlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gIG9wZW4gPSAhb3BlblxyXG4gIFxyXG4gIGxldCB0cmFuc2Zvcm0gPSBudWxsXHJcblxyXG4gIGlmKG9wZW4pIHtcclxuICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGV4KC0nICsgbmF2Lm91dGVyV2lkdGgoKSArICdweCknXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZXgoMHB4KSdcclxuICB9XHJcbiAgXHJcbiAgY292ZXIuY3NzKHtcclxuICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJy1tb3otdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJ3RyYW5zZm9ybSc6IHRyYW5zZm9ybVxyXG4gIH0pXHJcblxyXG4gIHRvZ2dsZUJ1dHRvbi50b2dnbGVDbGFzcyhcImNyb3NzXCIpXHJcbn0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2VudHJpZXMvbWVudS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=