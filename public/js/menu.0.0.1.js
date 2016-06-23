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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGJiMzRlOGI3MGI0MmJjZjE3Yjk/MDgwNyoiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2VudHJpZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBLEtBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVjtBQUNOLEtBQU0sZUFBZSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjs7QUFFTixLQUFJLE9BQU8sS0FBUDs7QUFFSixjQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLGlCQUFTO0FBQzlDLFVBQU8sQ0FBQyxJQUFELENBRHVDO0FBRTlDLE9BQUcsSUFBSCxFQUFTO0FBQ1AsYUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLE1BQXRCLEVBRE87QUFFUCxrQkFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLE9BQTNCLEVBRk87SUFBVCxNQUlLO0FBQ0gsYUFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLE1BQXpCLEVBREc7QUFFSCxrQkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE9BQTlCLEVBRkc7SUFKTDtFQUZxQyxDQUF2QyxDIiwiZmlsZSI6Im1lbnUuMC4wLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhiYjM0ZThiNzBiNDJiY2YxN2I5XG4gKiovIiwiXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tc2lkZWJhclwiKVxyXG5jb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtdG9nZ2xlXCIpXHJcblxyXG5sZXQgb3BlbiA9IGZhbHNlXHJcblxyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBvcGVuID0gIW9wZW5cclxuICBpZihvcGVuKSB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXHJcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyb3NzXCIpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKVxyXG4gICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjcm9zc1wiKVxyXG4gIH1cclxufSlcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvZW50cmllcy9tZW51LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==