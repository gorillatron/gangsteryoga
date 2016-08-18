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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmQwMWY4YjE3NGZjMzBkZjUyZjg/MzVjYiIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxPQUFPLEVBQUUsWUFBRixDQUFQO0FBQ04sS0FBTSxlQUFlLEVBQUUsWUFBRixDQUFmO0FBQ04sS0FBTSxNQUFNLEVBQUUsV0FBRixDQUFOO0FBQ04sS0FBTSxRQUFRLEVBQUUsUUFBRixDQUFSOztBQUVOLEtBQUksZ0JBQWdCLElBQUksSUFBSjtBQUNwQixLQUFJLFFBQVEsRUFBQyxNQUFNLEtBQU4sRUFBYSxZQUFZLElBQVosRUFBdEI7O0FBR0osY0FBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGlCQUFTO0FBQ2hDLFdBQVEsQ0FBQyxNQUFNLElBQU4sQ0FBVCxDQURnQztFQUFULENBQXpCOztBQUtBLEtBQU0sVUFBVSxTQUFWLE9BQVUsT0FBUTtBQUN0QixPQUFJLFlBQVksSUFBWixDQURrQjs7QUFHdEIsU0FBTSxJQUFOLEdBQWEsSUFBYixDQUhzQjs7QUFLdEIsS0FBRSxRQUFGLEVBQVksR0FBWixDQUFnQixpQkFBaEIsRUFMc0I7O0FBT3RCLE9BQU0sYUFBYSxLQUFLLFdBQUwsRUFBYixDQVBnQjs7QUFTdEIsT0FBRyxNQUFNLFVBQU4sRUFBa0I7QUFDbkIsa0JBQWEsTUFBTSxVQUFOLENBQWIsQ0FEbUI7QUFFbkIsV0FBTSxVQUFOLEdBQW1CLElBQW5CLENBRm1CO0lBQXJCOztBQUtBLE9BQUcsTUFBTSxJQUFOLEVBQVk7QUFDYixVQUFLLEdBQUwsQ0FBUyxFQUFFLFdBQVMsVUFBQyxHQUFhLENBQWIsR0FBa0IsQ0FBbkIsT0FBVCxFQUFYLEVBRGE7QUFFYixrQkFBYSxRQUFiLENBQXNCLE9BQXRCLEVBRmE7QUFHYixVQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFIYTtBQUliLFdBQU0sVUFBTixHQUFtQixXQUFXO2NBQUssUUFBUSxLQUFSO01BQUwsRUFBcUIsYUFBaEMsQ0FBbkIsQ0FKYTtJQUFmLE1BTUs7QUFDSCxVQUFLLFFBQUwsQ0FBYyxRQUFkLEVBREc7QUFFSCxrQkFBYSxXQUFiLENBQXlCLE9BQXpCLEVBRkc7SUFOTDtFQWRjLEMiLCJmaWxlIjoibWVudS4wLjAuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJkMDFmOGIxNzRmYzMwZGY1MmY4XG4gKiovIiwiXHJcblxyXG5jb25zdCBtZW51ID0gJChcIiNtYWluLW1lbnVcIilcclxuY29uc3QgdG9nZ2xlQnV0dG9uID0gJChcIi5oYW1idXJnZXJcIilcclxuY29uc3QgbmF2ID0gJChcIiNtYWluLW5hdlwiKVxyXG5jb25zdCBjb3ZlciA9ICQoXCIjY292ZXJcIilcclxuXHJcbmxldCBtZW51Q2xvc2VUaW1lID0gNSAqIDEwMDBcclxubGV0IHN0YXRlID0ge29wZW46IGZhbHNlLCBjbG9zZVRpbWVyOiBudWxsfVxyXG5cclxuXHJcbnRvZ2dsZUJ1dHRvbi5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBzZXRNZW51KCFzdGF0ZS5vcGVuKVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHNldE1lbnUgPSBvcGVuID0+IHtcclxuICBsZXQgdHJhbnNmb3JtID0gbnVsbFxyXG5cclxuICBzdGF0ZS5vcGVuID0gb3BlblxyXG5cclxuICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLm1lbnVjbG9zZScpXHJcblxyXG4gIGNvbnN0IG1lbnVIZWlnaHQgPSBtZW51LmlubmVySGVpZ2h0KClcclxuXHJcbiAgaWYoc3RhdGUuY2xvc2VUaW1lcikge1xyXG4gICAgY2xlYXJUaW1lb3V0KHN0YXRlLmNsb3NlVGltZXIpXHJcbiAgICBzdGF0ZS5jbG9zZVRpbWVyID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaWYoc3RhdGUub3Blbikge1xyXG4gICAgbWVudS5jc3MoeyB0b3A6IGAtJHsobWVudUhlaWdodCAvIDIpIC8gMn1weGAgfSlcclxuICAgIHRvZ2dsZUJ1dHRvbi5hZGRDbGFzcygnY2xvc2UnKVxyXG4gICAgbWVudS5yZW1vdmVDbGFzcygnY2xvc2VkJylcclxuICAgIHN0YXRlLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KF8gPT4gc2V0TWVudShmYWxzZSksIG1lbnVDbG9zZVRpbWUpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbWVudS5hZGRDbGFzcygnY2xvc2VkJylcclxuICAgIHRvZ2dsZUJ1dHRvbi5yZW1vdmVDbGFzcygnY2xvc2UnKVxyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL21lbnUvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9