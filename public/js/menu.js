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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmRmZWJhMDU4OGQzYmViYTY0NTQ/MmIyZCIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvZW50cmllcy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0EsS0FBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFWO0FBQ04sS0FBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ04sS0FBTSxhQUFhLEdBQUcsVUFBSCxDQUFjLFNBQWQsQ0FBd0IsWUFBeEIsRUFBc0MsT0FBdEMsQ0FBYjs7QUFFTixLQUFJLE9BQU8sS0FBUDs7QUFFSixZQUNHLFNBREgsQ0FDYSxpQkFBUztBQUNsQixVQUFPLENBQUMsSUFBRCxDQURXO0FBRWxCLE9BQUcsSUFBSCxFQUFTO0FBQ1AsYUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLE1BQXRCLEVBRE87QUFFUCxrQkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLE9BQTNCLEVBRk87SUFBVCxNQUlLO0FBQ0gsYUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLE1BQXpCLEVBREc7QUFFSCxrQkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE9BQTlCLEVBRkc7SUFKTDtFQUZTLENBRGIsQyIsImZpbGUiOiJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmZGZlYmEwNTg4ZDNiZWJhNjQ1NFxuICoqLyIsIlxyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXNpZGViYXJcIilcclxuY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LXRvZ2dsZVwiKVxyXG5jb25zdCBtZW51Q2xpY2skID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQodG9nZ2xlQnV0dG9uLCAnY2xpY2snKVxyXG5cclxubGV0IG9wZW4gPSBmYWxzZVxyXG5cclxubWVudUNsaWNrJFxyXG4gIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgb3BlbiA9ICFvcGVuXHJcbiAgICBpZihvcGVuKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcclxuICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjcm9zc1wiKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIilcclxuICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjcm9zc1wiKVxyXG4gICAgfVxyXG4gIH0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2VudHJpZXMvbWVudS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=