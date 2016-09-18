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
	
	menu.on('click', function (event) {
	  if (menu.hasClass('closed')) {
	    event.preventDefault();
	    return false;
	  }
	});
	
	var setMenu = function setMenu(open) {
	  var transform = null;
	
	  state.open = open;
	
	  $(document).off('click.menuclose');
	
	  var menuHeight = menu.innerHeight();
	
	  if (state.closeTimer) {
	    clearTimeout(state.closeTimer);
	    state.closeTimer = null;
	  }
	
	  if (state.open) {
	    menu.css({ top: "-" + menuHeight / 2 / 2 + "px" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGIxYjJlMjE0ZjVlZjg0Yzk3ZGE/NjI4ZCIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxPQUFPLEVBQUUsWUFBRixDQUFiO0FBQ0EsS0FBTSxlQUFlLEVBQUUsWUFBRixDQUFyQjtBQUNBLEtBQU0sTUFBTSxFQUFFLFdBQUYsQ0FBWjtBQUNBLEtBQU0sUUFBUSxFQUFFLFFBQUYsQ0FBZDs7QUFFQSxLQUFJLGdCQUFnQixJQUFJLElBQXhCO0FBQ0EsS0FBSSxRQUFRLEVBQUMsTUFBTSxLQUFQLEVBQWMsWUFBWSxJQUExQixFQUFaOztBQUdBLGNBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixpQkFBUztBQUNoQyxXQUFRLENBQUMsTUFBTSxJQUFmO0FBQ0QsRUFGRDs7QUFJQSxNQUFLLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQUMsS0FBRCxFQUFXO0FBQzFCLE9BQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUFILEVBQTRCO0FBQzFCLFdBQU0sY0FBTjtBQUNBLFlBQU8sS0FBUDtBQUNEO0FBQ0YsRUFMRDs7QUFPQSxLQUFNLFVBQVUsU0FBVixPQUFVLE9BQVE7QUFDdEIsT0FBSSxZQUFZLElBQWhCOztBQUVBLFNBQU0sSUFBTixHQUFhLElBQWI7O0FBRUEsS0FBRSxRQUFGLEVBQVksR0FBWixDQUFnQixpQkFBaEI7O0FBRUEsT0FBTSxhQUFhLEtBQUssV0FBTCxFQUFuQjs7QUFFQSxPQUFHLE1BQU0sVUFBVCxFQUFxQjtBQUNuQixrQkFBYSxNQUFNLFVBQW5CO0FBQ0EsV0FBTSxVQUFOLEdBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsT0FBRyxNQUFNLElBQVQsRUFBZTtBQUNiLFVBQUssR0FBTCxDQUFTLEVBQUUsV0FBVSxhQUFhLENBQWQsR0FBbUIsQ0FBNUIsT0FBRixFQUFUO0FBQ0Esa0JBQWEsUUFBYixDQUFzQixPQUF0QjtBQUNBLFVBQUssV0FBTCxDQUFpQixRQUFqQjtBQUNBLFdBQU0sVUFBTixHQUFtQixXQUFXO0FBQUEsY0FBSyxRQUFRLEtBQVIsQ0FBTDtBQUFBLE1BQVgsRUFBZ0MsYUFBaEMsQ0FBbkI7QUFDRCxJQUxELE1BTUs7QUFDSCxVQUFLLFFBQUwsQ0FBYyxRQUFkO0FBQ0Esa0JBQWEsV0FBYixDQUF5QixPQUF6QjtBQUNEO0FBQ0YsRUF4QkQsQyIsImZpbGUiOiJtZW51LjAuMC4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOGIxYjJlMjE0ZjVlZjg0Yzk3ZGFcbiAqKi8iLCJcblxuY29uc3QgbWVudSA9ICQoXCIjbWFpbi1tZW51XCIpXG5jb25zdCB0b2dnbGVCdXR0b24gPSAkKFwiLmhhbWJ1cmdlclwiKVxuY29uc3QgbmF2ID0gJChcIiNtYWluLW5hdlwiKVxuY29uc3QgY292ZXIgPSAkKFwiI2NvdmVyXCIpXG5cbmxldCBtZW51Q2xvc2VUaW1lID0gNSAqIDEwMDBcbmxldCBzdGF0ZSA9IHtvcGVuOiBmYWxzZSwgY2xvc2VUaW1lcjogbnVsbH1cblxuXG50b2dnbGVCdXR0b24ub24oXCJjbGlja1wiLCBldmVudCA9PiB7XG4gIHNldE1lbnUoIXN0YXRlLm9wZW4pXG59KVxuXG5tZW51Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZihtZW51Lmhhc0NsYXNzKCdjbG9zZWQnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcblxuY29uc3Qgc2V0TWVudSA9IG9wZW4gPT4ge1xuICBsZXQgdHJhbnNmb3JtID0gbnVsbFxuXG4gIHN0YXRlLm9wZW4gPSBvcGVuXG5cbiAgJChkb2N1bWVudCkub2ZmKCdjbGljay5tZW51Y2xvc2UnKVxuXG4gIGNvbnN0IG1lbnVIZWlnaHQgPSBtZW51LmlubmVySGVpZ2h0KClcblxuICBpZihzdGF0ZS5jbG9zZVRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KHN0YXRlLmNsb3NlVGltZXIpXG4gICAgc3RhdGUuY2xvc2VUaW1lciA9IG51bGxcbiAgfVxuXG4gIGlmKHN0YXRlLm9wZW4pIHtcbiAgICBtZW51LmNzcyh7IHRvcDogYC0keyhtZW51SGVpZ2h0IC8gMikgLyAyfXB4YCB9KVxuICAgIHRvZ2dsZUJ1dHRvbi5hZGRDbGFzcygnY2xvc2UnKVxuICAgIG1lbnUucmVtb3ZlQ2xhc3MoJ2Nsb3NlZCcpXG4gICAgc3RhdGUuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoXyA9PiBzZXRNZW51KGZhbHNlKSwgbWVudUNsb3NlVGltZSlcbiAgfVxuICBlbHNlIHtcbiAgICBtZW51LmFkZENsYXNzKCdjbG9zZWQnKVxuICAgIHRvZ2dsZUJ1dHRvbi5yZW1vdmVDbGFzcygnY2xvc2UnKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL21lbnUvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9