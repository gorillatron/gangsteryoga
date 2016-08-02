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
	    transform = 'translatex(-' + nav.outerWidth() + 'px)';
	    setTimeout(function (_) {
	      return $(document).one('click.menuclose', function (_) {
	        return setMenu(false);
	      });
	    });
	    state.closeTimer = setTimeout(function (_) {
	      return setMenu(false);
	    }, menuCloseTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc3N2UyNDYwZjI2OWY0NzhkYTM/NWYzYiIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQ0EsS0FBTSxVQUFVLEVBQUUsZUFBRixDQUFWO0FBQ04sS0FBTSxlQUFlLEVBQUUsbUJBQUYsQ0FBZjtBQUNOLEtBQU0sTUFBTSxFQUFFLFdBQUYsQ0FBTjtBQUNOLEtBQU0sUUFBUSxFQUFFLFFBQUYsQ0FBUjs7QUFFTixLQUFJLGdCQUFnQixJQUFJLElBQUo7QUFDcEIsS0FBSSxRQUFRLEVBQUMsTUFBTSxLQUFOLEVBQWEsWUFBWSxJQUFaLEVBQXRCOztBQUdKLGNBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixpQkFBUztBQUNoQyxXQUFRLENBQUMsTUFBTSxJQUFOLENBQVQsQ0FEZ0M7RUFBVCxDQUF6Qjs7QUFLQSxLQUFNLFVBQVUsU0FBVixPQUFVLE9BQVE7QUFDdEIsT0FBSSxZQUFZLElBQVosQ0FEa0I7O0FBR3RCLFNBQU0sSUFBTixHQUFhLElBQWIsQ0FIc0I7O0FBS3RCLEtBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsaUJBQWhCLEVBTHNCOztBQU90QixPQUFHLE1BQU0sVUFBTixFQUFrQjtBQUNuQixrQkFBYSxNQUFNLFVBQU4sQ0FBYixDQURtQjtBQUVuQixXQUFNLFVBQU4sR0FBbUIsSUFBbkIsQ0FGbUI7SUFBckI7O0FBS0EsT0FBRyxNQUFNLElBQU4sRUFBWTtBQUNiLGlCQUFZLGlCQUFpQixJQUFJLFVBQUosRUFBakIsR0FBb0MsS0FBcEMsQ0FEQztBQUViLGdCQUFXO2NBQUssRUFBRSxRQUFGLEVBQVksR0FBWixDQUFnQixpQkFBaEIsRUFBbUM7Z0JBQUssUUFBUSxLQUFSO1FBQUw7TUFBeEMsQ0FBWCxDQUZhO0FBR2IsV0FBTSxVQUFOLEdBQW1CLFdBQVc7Y0FBSyxRQUFRLEtBQVI7TUFBTCxFQUFxQixhQUFoQyxDQUFuQixDQUhhO0lBQWYsTUFLSztBQUNILGlCQUFZLGlCQUFaLENBREc7SUFMTDs7QUFTQSxTQUFNLEdBQU4sQ0FBVTtBQUNSLHNCQUFpQixTQUFqQjtBQUNBLHVCQUFrQixTQUFsQjtBQUNBLDBCQUFxQixTQUFyQjtBQUNBLGtCQUFhLFNBQWI7SUFKRixFQXJCc0I7RUFBUixDIiwiZmlsZSI6Im1lbnUuMC4wLjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwNzc3ZTI0NjBmMjY5ZjQ3OGRhM1xuICoqLyIsIlxyXG5cclxuY29uc3Qgc2lkZWJhciA9ICQoXCIjbWFpbi1zaWRlYmFyXCIpXHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9ICQoXCIjY292ZXIgLmhhbWJ1cmdlclwiKVxyXG5jb25zdCBuYXYgPSAkKFwiI21haW4tbmF2XCIpXHJcbmNvbnN0IGNvdmVyID0gJChcIiNjb3ZlclwiKVxyXG5cclxubGV0IG1lbnVDbG9zZVRpbWUgPSA1ICogMTAwMFxyXG5sZXQgc3RhdGUgPSB7b3BlbjogZmFsc2UsIGNsb3NlVGltZXI6IG51bGx9XHJcblxyXG5cclxudG9nZ2xlQnV0dG9uLm9uKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gIHNldE1lbnUoIXN0YXRlLm9wZW4pXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgc2V0TWVudSA9IG9wZW4gPT4ge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSBudWxsXHJcblxyXG4gIHN0YXRlLm9wZW4gPSBvcGVuXHJcblxyXG4gICQoZG9jdW1lbnQpLm9mZignY2xpY2subWVudWNsb3NlJylcclxuXHJcbiAgaWYoc3RhdGUuY2xvc2VUaW1lcikge1xyXG4gICAgY2xlYXJUaW1lb3V0KHN0YXRlLmNsb3NlVGltZXIpXHJcbiAgICBzdGF0ZS5jbG9zZVRpbWVyID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaWYoc3RhdGUub3Blbikge1xyXG4gICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZXgoLScgKyBuYXYub3V0ZXJXaWR0aCgpICsgJ3B4KSdcclxuICAgIHNldFRpbWVvdXQoXyA9PiAkKGRvY3VtZW50KS5vbmUoJ2NsaWNrLm1lbnVjbG9zZScsIF8gPT4gc2V0TWVudShmYWxzZSkpKVxyXG4gICAgc3RhdGUuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoXyA9PiBzZXRNZW51KGZhbHNlKSwgbWVudUNsb3NlVGltZSlcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRleCgwcHgpJ1xyXG4gIH1cclxuICBcclxuICBjb3Zlci5jc3Moe1xyXG4gICAgJy1tcy10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXHJcbiAgICAndHJhbnNmb3JtJzogdHJhbnNmb3JtXHJcbiAgfSlcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL21lbnUvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9