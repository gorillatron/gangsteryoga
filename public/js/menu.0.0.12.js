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
	
	var state = { open: false, closeTimer: null };
	
	toggleButton.on("click", function (event) {
	  setMenu(!state.open);
	});
	
	var setMenu = function setMenu(open) {
	  var transform = null;
	
	  state.open = open;
	
	  $(document).off('click.menuclose');
	
	  if (state.closeTimer) {
	    clearTimeout(state.closeTimer);
	    state.closeTimer = null;
	  }
	
	  if (state.open) {
	    transform = 'translatex(-' + nav.outerWidth() + 'px)';
	    setTimeout(function (_) {
	      return $(document).one('click.menuclose', function (_) {
	        return setMenu(false);
	      });
	    });
	    state.closeTimer = setTimeout(function (_) {
	      return setMenu(false);
	    }, 5000);
	  } else {
	    transform = 'translatex(0px)';
	  }
	
	  cover.css({
	    '-ms-transform': transform,
	    '-moz-transform': transform,
	    '-webkit-transform': transform,
	    'transform': transform
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTZhYWU0YmFkMWMxZmU2YmNmODU/OTNmNCIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxVQUFVLEVBQUUsZUFBRixDQUFWO0FBQ04sS0FBTSxlQUFlLEVBQUUsbUJBQUYsQ0FBZjtBQUNOLEtBQU0sTUFBTSxFQUFFLFdBQUYsQ0FBTjtBQUNOLEtBQU0sUUFBUSxFQUFFLFFBQUYsQ0FBUjs7QUFFTixLQUFJLFFBQVEsRUFBQyxNQUFNLEtBQU4sRUFBYSxZQUFZLElBQVosRUFBdEI7O0FBR0osY0FBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGlCQUFTO0FBQ2hDLFdBQVEsQ0FBQyxNQUFNLElBQU4sQ0FBVCxDQURnQztFQUFULENBQXpCOztBQUtBLEtBQU0sVUFBVSxTQUFWLE9BQVUsT0FBUTtBQUN0QixPQUFJLFlBQVksSUFBWixDQURrQjs7QUFHdEIsU0FBTSxJQUFOLEdBQWEsSUFBYixDQUhzQjs7QUFLdEIsS0FBRSxRQUFGLEVBQVksR0FBWixDQUFnQixpQkFBaEIsRUFMc0I7O0FBT3RCLE9BQUcsTUFBTSxVQUFOLEVBQWtCO0FBQ25CLGtCQUFhLE1BQU0sVUFBTixDQUFiLENBRG1CO0FBRW5CLFdBQU0sVUFBTixHQUFtQixJQUFuQixDQUZtQjtJQUFyQjs7QUFLQSxPQUFHLE1BQU0sSUFBTixFQUFZO0FBQ2IsaUJBQVksaUJBQWlCLElBQUksVUFBSixFQUFqQixHQUFvQyxLQUFwQyxDQURDO0FBRWIsZ0JBQVc7Y0FBSyxFQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLGlCQUFoQixFQUFtQztnQkFBSyxRQUFRLEtBQVI7UUFBTDtNQUF4QyxDQUFYLENBRmE7QUFHYixXQUFNLFVBQU4sR0FBbUIsV0FBVztjQUFLLFFBQVEsS0FBUjtNQUFMLEVBQXFCLElBQWhDLENBQW5CLENBSGE7SUFBZixNQUtLO0FBQ0gsaUJBQVksaUJBQVosQ0FERztJQUxMOztBQVNBLFNBQU0sR0FBTixDQUFVO0FBQ1Isc0JBQWlCLFNBQWpCO0FBQ0EsdUJBQWtCLFNBQWxCO0FBQ0EsMEJBQXFCLFNBQXJCO0FBQ0Esa0JBQWEsU0FBYjtJQUpGLEVBckJzQjtFQUFSLEMiLCJmaWxlIjoibWVudS4wLjAuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDU2YWFlNGJhZDFjMWZlNmJjZjg1XG4gKiovIiwiXHJcblxyXG5jb25zdCBzaWRlYmFyID0gJChcIiNtYWluLXNpZGViYXJcIilcclxuY29uc3QgdG9nZ2xlQnV0dG9uID0gJChcIiNjb3ZlciAuaGFtYnVyZ2VyXCIpXHJcbmNvbnN0IG5hdiA9ICQoXCIjbWFpbi1uYXZcIilcclxuY29uc3QgY292ZXIgPSAkKFwiI2NvdmVyXCIpXHJcblxyXG5sZXQgc3RhdGUgPSB7b3BlbjogZmFsc2UsIGNsb3NlVGltZXI6IG51bGx9XHJcblxyXG5cclxudG9nZ2xlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gIHNldE1lbnUoIXN0YXRlLm9wZW4pXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgc2V0TWVudSA9IG9wZW4gPT4ge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSBudWxsXHJcblxyXG4gIHN0YXRlLm9wZW4gPSBvcGVuXHJcblxyXG4gICQoZG9jdW1lbnQpLm9mZignY2xpY2subWVudWNsb3NlJylcclxuXHJcbiAgaWYoc3RhdGUuY2xvc2VUaW1lcikge1xyXG4gICAgY2xlYXJUaW1lb3V0KHN0YXRlLmNsb3NlVGltZXIpXHJcbiAgICBzdGF0ZS5jbG9zZVRpbWVyID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaWYoc3RhdGUub3Blbikge1xyXG4gICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZXgoLScgKyBuYXYub3V0ZXJXaWR0aCgpICsgJ3B4KSdcclxuICAgIHNldFRpbWVvdXQoXyA9PiAkKGRvY3VtZW50KS5vbmUoJ2NsaWNrLm1lbnVjbG9zZScsIF8gPT4gc2V0TWVudShmYWxzZSkpKVxyXG4gICAgc3RhdGUuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoXyA9PiBzZXRNZW51KGZhbHNlKSwgNTAwMClcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRleCgwcHgpJ1xyXG4gIH1cclxuICBcclxuICBjb3Zlci5jc3Moe1xyXG4gICAgJy1tcy10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAndHJhbnNmb3JtJzogdHJhbnNmb3JtXHJcbiAgfSlcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL21lbnUvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9