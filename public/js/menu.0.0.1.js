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
	var nav = $("nav");
	var cover = $("#cover");
	
	var open = false;
	
	toggleButton.on("click", function (event) {
	  open = !open;
	  console.log(nav.width());
	  if (open) {
	    cover.css('transform', 'translatex(-' + nav.outerWidth() + 'px)');
	  } else {
	    cover.css('transform', 'translatex(0px)');
	  }
	  cover.toggleClass("show-menu");
	  toggleButton.toggleClass("cross");
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAxM2MyNmQ3YWU4OTczYzdiOGYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBLEtBQU0sVUFBVSxFQUFFLGVBQUYsQ0FBVjtBQUNOLEtBQU0sZUFBZSxFQUFFLG1CQUFGLENBQWY7QUFDTixLQUFNLE1BQU0sRUFBRSxLQUFGLENBQU47QUFDTixLQUFNLFFBQVEsRUFBRSxRQUFGLENBQVI7O0FBRU4sS0FBSSxPQUFPLEtBQVA7O0FBRUosY0FBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGlCQUFTO0FBQ2hDLFVBQU8sQ0FBQyxJQUFELENBRHlCO0FBRWhDLFdBQVEsR0FBUixDQUFZLElBQUksS0FBSixFQUFaLEVBRmdDO0FBR2hDLE9BQUcsSUFBSCxFQUFTO0FBQ1AsV0FBTSxHQUFOLENBQVUsV0FBVixFQUF1QixpQkFBaUIsSUFBSSxVQUFKLEVBQWpCLEdBQW9DLEtBQXBDLENBQXZCLENBRE87SUFBVCxNQUdLO0FBQ0gsV0FBTSxHQUFOLENBQVUsV0FBVixFQUF1QixpQkFBdkIsRUFERztJQUhMO0FBTUEsU0FBTSxXQUFOLENBQWtCLFdBQWxCLEVBVGdDO0FBVWhDLGdCQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFWZ0M7RUFBVCxDQUF6QixDIiwiZmlsZSI6Im1lbnUuMC4wLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMwMTNjMjZkN2FlODk3M2M3YjhmXG4gKiovIiwiXHJcbmNvbnN0IHNpZGViYXIgPSAkKFwiI21haW4tc2lkZWJhclwiKVxyXG5jb25zdCB0b2dnbGVCdXR0b24gPSAkKFwiI2NvdmVyIC5oYW1idXJnZXJcIilcclxuY29uc3QgbmF2ID0gJChcIm5hdlwiKVxyXG5jb25zdCBjb3ZlciA9ICQoXCIjY292ZXJcIilcclxuXHJcbmxldCBvcGVuID0gZmFsc2VcclxuXHJcbnRvZ2dsZUJ1dHRvbi5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBvcGVuID0gIW9wZW5cclxuICBjb25zb2xlLmxvZyhuYXYud2lkdGgoKSlcclxuICBpZihvcGVuKSB7XHJcbiAgICBjb3Zlci5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGV4KC0nICsgbmF2Lm91dGVyV2lkdGgoKSArICdweCknKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNvdmVyLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZXgoMHB4KScpXHJcbiAgfVxyXG4gIGNvdmVyLnRvZ2dsZUNsYXNzKFwic2hvdy1tZW51XCIpXHJcbiAgdG9nZ2xlQnV0dG9uLnRvZ2dsZUNsYXNzKFwiY3Jvc3NcIilcclxufSlcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==