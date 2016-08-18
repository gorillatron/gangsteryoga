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
	
	var menu = $("#main-menu");
	var toggleButton = $(".hamburger");
	var nav = $("#main-nav");
	var cover = $("#cover");
	
	var menuCloseTime = 5 * 1000;
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
	    toggleButton.addClass('close');
	    menu.removeClass('closed');
	    state.closeTimer = setTimeout(function (_) {
	      return setMenu(false);
	    }, menuCloseTime);
	  } else {
	    menu.addClass('closed');
	    toggleButton.removeClass('close');
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGNlNGVjYzUwOGUzMjRlMzZjZTI/OTZhMyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxPQUFPLEVBQUUsWUFBRixDQUFQO0FBQ04sS0FBTSxlQUFlLEVBQUUsWUFBRixDQUFmO0FBQ04sS0FBTSxNQUFNLEVBQUUsV0FBRixDQUFOO0FBQ04sS0FBTSxRQUFRLEVBQUUsUUFBRixDQUFSOztBQUVOLEtBQUksZ0JBQWdCLElBQUksSUFBSjtBQUNwQixLQUFJLFFBQVEsRUFBQyxNQUFNLEtBQU4sRUFBYSxZQUFZLElBQVosRUFBdEI7O0FBR0osY0FBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGlCQUFTO0FBQ2hDLFdBQVEsQ0FBQyxNQUFNLElBQU4sQ0FBVCxDQURnQztFQUFULENBQXpCOztBQUtBLEtBQU0sVUFBVSxTQUFWLE9BQVUsT0FBUTtBQUN0QixPQUFJLFlBQVksSUFBWixDQURrQjs7QUFHdEIsU0FBTSxJQUFOLEdBQWEsSUFBYixDQUhzQjs7QUFLdEIsS0FBRSxRQUFGLEVBQVksR0FBWixDQUFnQixpQkFBaEIsRUFMc0I7O0FBT3RCLE9BQUcsTUFBTSxVQUFOLEVBQWtCO0FBQ25CLGtCQUFhLE1BQU0sVUFBTixDQUFiLENBRG1CO0FBRW5CLFdBQU0sVUFBTixHQUFtQixJQUFuQixDQUZtQjtJQUFyQjs7QUFLQSxPQUFHLE1BQU0sSUFBTixFQUFZO0FBQ2Isa0JBQWEsUUFBYixDQUFzQixPQUF0QixFQURhO0FBRWIsVUFBSyxXQUFMLENBQWlCLFFBQWpCLEVBRmE7QUFHYixXQUFNLFVBQU4sR0FBbUIsV0FBVztjQUFLLFFBQVEsS0FBUjtNQUFMLEVBQXFCLGFBQWhDLENBQW5CLENBSGE7SUFBZixNQUtLO0FBQ0gsVUFBSyxRQUFMLENBQWMsUUFBZCxFQURHO0FBRUgsa0JBQWEsV0FBYixDQUF5QixPQUF6QixFQUZHO0lBTEw7RUFaYyxDIiwiZmlsZSI6Im1lbnUuMC4wLjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkY2U0ZWNjNTA4ZTMyNGUzNmNlMlxuICoqLyIsIlxyXG5cclxuY29uc3QgbWVudSA9ICQoXCIjbWFpbi1tZW51XCIpXHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9ICQoXCIuaGFtYnVyZ2VyXCIpXHJcbmNvbnN0IG5hdiA9ICQoXCIjbWFpbi1uYXZcIilcclxuY29uc3QgY292ZXIgPSAkKFwiI2NvdmVyXCIpXHJcblxyXG5sZXQgbWVudUNsb3NlVGltZSA9IDUgKiAxMDAwXHJcbmxldCBzdGF0ZSA9IHtvcGVuOiBmYWxzZSwgY2xvc2VUaW1lcjogbnVsbH1cclxuXHJcblxyXG50b2dnbGVCdXR0b24ub24oXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgc2V0TWVudSghc3RhdGUub3BlbilcclxufSlcclxuXHJcblxyXG5jb25zdCBzZXRNZW51ID0gb3BlbiA9PiB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IG51bGxcclxuXHJcbiAgc3RhdGUub3BlbiA9IG9wZW5cclxuXHJcbiAgJChkb2N1bWVudCkub2ZmKCdjbGljay5tZW51Y2xvc2UnKVxyXG5cclxuICBpZihzdGF0ZS5jbG9zZVRpbWVyKSB7XHJcbiAgICBjbGVhclRpbWVvdXQoc3RhdGUuY2xvc2VUaW1lcilcclxuICAgIHN0YXRlLmNsb3NlVGltZXIgPSBudWxsXHJcbiAgfVxyXG5cclxuICBpZihzdGF0ZS5vcGVuKSB7XHJcbiAgICB0b2dnbGVCdXR0b24uYWRkQ2xhc3MoJ2Nsb3NlJylcclxuICAgIG1lbnUucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICBzdGF0ZS5jbG9zZVRpbWVyID0gc2V0VGltZW91dChfID0+IHNldE1lbnUoZmFsc2UpLCBtZW51Q2xvc2VUaW1lKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIG1lbnUuYWRkQ2xhc3MoJ2Nsb3NlZCcpXHJcbiAgICB0b2dnbGVCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlJylcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==