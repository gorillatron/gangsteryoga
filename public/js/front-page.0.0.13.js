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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _video = __webpack_require__(1);
	
	var _video2 = _interopRequireDefault(_video);
	
	var _gallery = __webpack_require__(8);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _mapstyles = __webpack_require__(9);
	
	var _mapstyles2 = _interopRequireDefault(_mapstyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	
	    setTimeout(function (_) {
	        $("#front-page").css('opacity', 1);
	    }, 66);
	
	    (0, _gallery2.default)($('#gallery'));
	
	    (0, _video2.default)($('#main-header'));
	    (0, _video2.default)($('#mobile-video'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (videoel) {
	
	  var playButton = videoel.find('.play-button');
	  var movieMode = videoel.find('.movie-mode');
	  var video = videoel;
	  var videoFrame = videoel.find('iframe');
	  var player = new _player2.default(videoFrame);
	
	  playButton.click(function () {
	    setTimeout(function () {
	      return player.play();
	    }, 33);
	  });
	
	  var onPlay = function onPlay() {
	    (0, _raf2.default)(function () {
	      return playButton.addClass('hide');
	    });
	    (0, _raf2.default)(function () {
	      return movieMode.addClass('active');
	    });
	    (0, _raf2.default)(function () {
	      return video.addClass('playing');
	    });
	    (0, _raf2.default)(function () {
	      return videoFrame.removeClass('hidden');
	    });
	    $('body').one('click', function () {
	      return player.pause();
	    });
	  };
	
	  var onStop = function onStop() {
	    (0, _raf2.default)(function () {
	      return video.removeClass('playing');
	    });
	    (0, _raf2.default)(function () {
	      return movieMode.removeClass('active');
	    });
	  };
	
	  player.on('play', onPlay);
	  player.on('pause', onStop);
	  player.on('stop', onStop);
	};
	
	var _player = __webpack_require__(2);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _raf = __webpack_require__(6);
	
	var _raf2 = _interopRequireDefault(_raf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v1.0.6 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=T.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),T.set(e.element,r)}function n(e,t){var n=T.get(e.element)||{};return n[t]||[]}function r(e,t,n){var r=T.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],T.set(e.element,r),!0;var o=r[t].indexOf(n);return o!==-1&&r[t].splice(o,1),T.set(e.element,r),r[t]&&0===r[t].length}function o(e,t){var n=T.get(e);T.set(t,n),T.delete(e)}function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function a(e){return e instanceof window.HTMLElement}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function s(e){return/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(u(r))return"https://vimeo.com/"+r;if(s(r))return r.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+r+"” is not a vimeo.com url.")}function f(e){for(var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=_,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var i;if(r){if(o>=n.length)break;i=n[o++]}else{if(o=n.next(),o.done)break;i=o.value}var a=i,u=e.getAttribute("data-vimeo-"+a);(u||""===u)&&(t[a]=""===u?1:u)}return t}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new Promise(function(n,r){if(!s(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var o="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var i in t)t.hasOwnProperty(i)&&(o+="&"+i+"="+encodeURIComponent(t[i]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404===a.status)return void r(new Error("“"+e+"” was not found."));if(403===a.status)return void r(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(a.responseText);n(t)}catch(e){r(e)}},a.onerror=function(){var e=a.status?" ("+a.status+")":"";r(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},a.send()})}function h(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function d(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0],t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)},r=function(){if(i){if(a>=o.length)return"break";u=o[a++]}else{if(a=o.next(),a.done)return"break";u=a.value}var e=u;try{if(null!==e.getAttribute("data-vimeo-defer"))return"continue";var t=f(e),r=c(t);l(r,t).then(function(t){return h(t,e)}).catch(n)}catch(e){n(e)}};e:for(var o=t,i=Array.isArray(o),a=0,o=i?o:o[Symbol.iterator]();;){var u,s=r();switch(s){case"break":break e;case"continue":continue}}}function p(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function v(e,t,n){if(e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function y(e,t){t=p(t);var o=[],i=void 0;if(t.event){if("error"===t.event)for(var a=n(e,t.data.method),u=a,s=Array.isArray(u),c=0,u=s?u:u[Symbol.iterator]();;){var f;if(s){if(c>=u.length)break;f=u[c++]}else{if(c=u.next(),c.done)break;f=c.value}var l=f,h=new Error(t.data.message);h.name=t.data.name,l.reject(h),r(e,t.data.method,l)}o=n(e,"event:"+t.event),i=t.data}else t.method&&(o=n(e,t.method),i=t.value,r(e,t.method));for(var d=o,v=Array.isArray(d),y=0,d=v?d:d[Symbol.iterator]();;){var m;if(v){if(y>=d.length)break;m=d[y++]}else{if(y=d.next(),y.done)break;m=y.value}var g=m;try{if("function"==typeof g){g.call(e,i);continue}g.resolve(i)}catch(e){}}}var m="undefined"!=typeof Array.prototype.indexOf,g="undefined"!=typeof window.postMessage;if(!m||!g)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=(e(function(e,t){!function(e){function t(e,t){function r(e){return this&&this.constructor===r?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new r(e)}return t||w(e,"size",{get:y}),e.constructor=r,r.prototype=e,r}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function r(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function o(e){return this.has(e)?this._values[g]:void 0}function i(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!b(e[g],t););else g=e.indexOf(t);return-1<g}function a(e){return i.call(this,this._values,e)}function u(e){return i.call(this,this._keys,e)}function s(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function f(){(this._keys||0).length=this._values.length=0}function l(){return v(this._itp,this._keys)}function h(){return v(this._itp,this._values)}function d(){return v(this._itp,this._keys,this._values)}function p(){return v(this._itp,this._values,this._values)}function v(e,t,n){var r=[0],o=!1;return e.push(r),{next:function(){var i,a=r[0];return!o&&a<t.length?(i=n?[t[a],n[a]]:t[a],r[0]++):(o=!0,e.splice(e.indexOf(r),1)),{done:o,value:i}}}}function y(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}var g,w=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:r,clear:f,get:o,has:u,set:s},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:r,has:u,get:o,set:s,keys:l,values:h,entries:d,forEach:m,clear:f})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:r,clear:f,keys:h,values:h,entries:p,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:r,add:c,clear:f,has:a},!0))}("undefined"!=typeof t&&"undefined"!=typeof w?w:window)}),e(function(e){!function(t,n,r){n[t]=n[t]||r(),"undefined"!=typeof e&&e.exports?e.exports=n[t]:"function"=="function"&&__webpack_require__(5)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n[t]}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("Promise","undefined"!=typeof w?w:w,function(){function e(e,t){h.add(e,t),l||(l=p(h.drain))}function t(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function n(){for(var e=0;e<this.chain.length;e++)r(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function r(e,n,r){var o,i;try{n===!1?r.reject(e.msg):(o=n===!0?e.msg:n.call(void 0,e.msg),o===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=t(o))?i.call(o,r.resolve,r.reject):r.resolve(o))}catch(e){r.reject(e)}}function o(r){var a,s=this;if(!s.triggered){s.triggered=!0,s.def&&(s=s.def);try{(a=t(r))?e(function(){var e=new u(s);try{a.call(r,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(t){i.call(e,t)}}):(s.msg=r,s.state=1,s.chain.length>0&&e(n,s))}catch(e){i.call(new u(s),e)}}}function i(t){var r=this;r.triggered||(r.triggered=!0,r.def&&(r=r.def),r.msg=t,r.state=2,r.chain.length>0&&e(n,r))}function a(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function u(e){this.def=e,this.triggered=!1}function s(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function c(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new s(this);this.then=function(t,o){var i={success:"function"!=typeof t||t,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");i.resolve=e,i.reject=t}),r.chain.push(i),0!==r.state&&e(n,r),i.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){o.call(r,e)},function(e){i.call(r,e)})}catch(e){i.call(r,e)}}var f,l,h,d=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:r!==!1})}}catch(e){f=function(e,t,n){return e[t]=n,e}}h=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,r;return{add:function(o,i){r=new e(o,i),n?n.next=r:t=r,n=r,r=void 0},drain:function(){var e=t;for(t=n=l=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=f({},"constructor",c,!1);return c.prototype=v,f(v,"__NPO__",0,!1),f(c,"resolve",function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),f(c,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),f(c,"all",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;a(t,e,function(e,t){i[e]=t,++u===o&&n(i)},r)})}),f(c,"race",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");a(t,e,function(e,t){n(t)},r)})}),c})})),E=b&&"object"==typeof b&&"default"in b?b.default:b,T=new WeakMap,_=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=new WeakMap,j=new WeakMap,Player=function(){function Player(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(k(this,Player),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!a(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!s(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(x.has(e))return x.get(e);this.element=e,this.origin="*";var i=new E(function(r,i){var a=function(e){if(s(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=p(e.data),o="event"in n&&"ready"===n.event,i="method"in n&&"ping"===n.method;return o||i?(t.element.setAttribute("data-ready","true"),void r()):void y(t,n)}};if(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a),"IFRAME"!==t.element.nodeName){var u=f(e,n),d=c(u);l(d,u).then(function(n){var r=h(n,e);return t.element=r,o(e,r),n}).catch(function(e){return i(e)})}});return j.set(this,i),x.set(this.element,this),"IFRAME"===this.element.nodeName&&v(this,"ping"),this}return Player.prototype.then=function(e){var t=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];return this.ready().then(e,t)},Player.prototype.callMethod=function(e){var n=this,r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new E(function(o,i){return n.ready().then(function(){t(n,e,{resolve:o,reject:i}),v(n,e,r)})})},Player.prototype.get=function(e){var n=this;return new E(function(r,o){return e=i(e,"get"),n.ready().then(function(){t(n,e,{resolve:r,reject:o}),v(n,e)})})},Player.prototype.set=function(e,n){var r=this;return E.resolve(n).then(function(n){if(e=i(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new E(function(o,i){t(r,e,{resolve:o,reject:i}),v(r,e,n)})})})},Player.prototype.on=function(e,r){if(!e)throw new TypeError("You must pass an event name.");if(!r)throw new TypeError("You must pass a callback function.");if("function"!=typeof r)throw new TypeError("The callback must be a function.");var o=n(this,"event:"+e);0===o.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,r)},Player.prototype.off=function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=r(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})},Player.prototype.loadVideo=function(e){return this.callMethod("loadVideo",e)},Player.prototype.ready=function(){var e=j.get(this);return E.resolve(e)},Player.prototype.enableTextTrack=function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})},Player.prototype.disableTextTrack=function(){return this.callMethod("disableTextTrack")},Player.prototype.pause=function(){return this.callMethod("pause")},Player.prototype.play=function(){return this.callMethod("play")},Player.prototype.unload=function(){return this.callMethod("unload")},Player.prototype.getAutopause=function(){return this.get("autopause")},Player.prototype.setAutopause=function(e){return this.set("autopause",e)},Player.prototype.getColor=function(){return this.get("color")},Player.prototype.setColor=function(e){return this.set("color",e)},Player.prototype.getCurrentTime=function(){return this.get("currentTime")},Player.prototype.setCurrentTime=function(e){return this.set("currentTime",e)},Player.prototype.getDuration=function(){return this.get("duration")},Player.prototype.getEnded=function(){return this.get("ended")},Player.prototype.getLoop=function(){return this.get("loop")},Player.prototype.setLoop=function(e){return this.set("loop",e)},Player.prototype.getPaused=function(){return this.get("paused")},Player.prototype.getTextTracks=function(){return this.get("textTracks")},Player.prototype.getVideoEmbedCode=function(){return this.get("videoEmbedCode")},Player.prototype.getVideoId=function(){return this.get("videoId")},Player.prototype.getVideoTitle=function(){return this.get("videoTitle")},Player.prototype.getVideoWidth=function(){return this.get("videoWidth")},Player.prototype.getVideoHeight=function(){return this.get("videoHeight")},Player.prototype.getVideoUrl=function(){return this.get("videoUrl")},Player.prototype.getVolume=function(){return this.get("volume")},Player.prototype.setVolume=function(e){return this.set("volume",e)},Player}();return d(),Player});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(4).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(7)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (galleryEl) {};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "on" }, { "lightness": 33 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2e5d4" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#c5dac6" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": 20 }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#c5c6c6" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#e4d7c6" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#fbfaf7" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#acbcc9" }] }];
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFiZWE5OWE2MDY2ZTY1Mzc0YTUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvbGliL3ZpZGVvLmpzIiwid2VicGFjazovLy8uL34vQHZpbWVvL3BsYXllci9kaXN0L3BsYXllci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9saWIvZ2FsbGVyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9mcm9udC1wYWdlL21hcHN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsR0FBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFNOztBQUVyQixnQkFBVyxhQUFLO0FBQ2IsV0FBRSxhQUFGLEVBQWlCLEdBQWpCLENBQXFCLFNBQXJCLEVBQWdDLENBQWhDLEVBRGE7TUFBTCxFQUVQLEVBRkosRUFGcUI7O0FBTXBCLDRC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OGdCLEVBQUMsZUFBYyxlQUFkLEVBQThCLGVBQWMsVUFBZCxFQUF5QixXQUFVLENBQUMsRUFBQyxTQUFRLFNBQVIsRUFBRixDQUFWLEVBQXRrQixFQUF1bUIsRUFBQyxlQUFjLFlBQWQsRUFBMkIsZUFBYyxVQUFkLEVBQXlCLFdBQVUsQ0FBQyxFQUFDLFNBQVEsU0FBUixFQUFGLENBQVYsRUFBNXBCLEVBQTZyQixFQUFDLGVBQWMsT0FBZCxFQUFzQixlQUFjLEtBQWQsRUFBb0IsV0FBVSxDQUFDLEVBQUMsY0FBYSxJQUFiLEVBQUYsRUFBcUIsRUFBQyxTQUFRLFNBQVIsRUFBdEIsQ0FBVixFQUF4dUIsQ0FBUCxDQUR3QjtFQUFYLEMiLCJmaWxlIjoiZnJvbnQtcGFnZS4wLjAuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZhYmVhOTlhNjA2NmU2NTM3NGE1XG4gKiovIiwiXHJcbmltcG9ydCB2aWRlbyBmcm9tICcuLi8uLi9saWIvdmlkZW8nXHJcbmltcG9ydCBnYWxsZXJ5IGZyb20gJy4uLy4uL2xpYi9nYWxsZXJ5J1xyXG5pbXBvcnQgbWFwc3R5bGVzIGZyb20gJy4vbWFwc3R5bGVzJ1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcbiAgIHNldFRpbWVvdXQoXyA9PiB7XHJcbiAgICAgICQoXCIjZnJvbnQtcGFnZVwiKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgfSwgNjYpXHJcblxyXG4gICAgZ2FsbGVyeSgkKCcjZ2FsbGVyeScpKVxyXG5cclxuICAgIHZpZGVvKCQoJyNtYWluLWhlYWRlcicpKVxyXG4gICAgdmlkZW8oJCgnI21vYmlsZS12aWRlbycpKVxyXG5cclxufSlcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvZW50cmllcy9mcm9udC1wYWdlL2luZGV4LmpzXG4gKiovIiwiXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnQHZpbWVvL3BsYXllcidcclxuaW1wb3J0IHJhZiBmcm9tICdyYWYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2aWRlb2VsKSB7XHJcblxyXG4gIGNvbnN0IHBsYXlCdXR0b24gPSB2aWRlb2VsLmZpbmQoJy5wbGF5LWJ1dHRvbicpXHJcbiAgY29uc3QgbW92aWVNb2RlID0gdmlkZW9lbC5maW5kKCcubW92aWUtbW9kZScpXHJcbiAgY29uc3QgdmlkZW8gPSB2aWRlb2VsXHJcbiAgY29uc3QgdmlkZW9GcmFtZSA9IHZpZGVvZWwuZmluZCgnaWZyYW1lJylcclxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHZpZGVvRnJhbWUpXHJcblxyXG4gIHBsYXlCdXR0b24uY2xpY2soKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBwbGF5ZXIucGxheSgpLCAzMylcclxuICB9KVxyXG5cclxuICBjb25zdCBvblBsYXkgPSAoKSA9PiB7XHJcbiAgICByYWYoKCkgPT4gcGxheUJ1dHRvbi5hZGRDbGFzcygnaGlkZScpKVxyXG4gICAgcmFmKCgpID0+IG1vdmllTW9kZS5hZGRDbGFzcygnYWN0aXZlJykpXHJcbiAgICByYWYoKCkgPT4gdmlkZW8uYWRkQ2xhc3MoJ3BsYXlpbmcnKSlcclxuICAgIHJhZigoKSA9PiB2aWRlb0ZyYW1lLnJlbW92ZUNsYXNzKCdoaWRkZW4nKSlcclxuICAgICQoJ2JvZHknKS5vbmUoJ2NsaWNrJywgKCkgPT4gcGxheWVyLnBhdXNlKCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN0b3AgPSAoKSA9PiB7XHJcbiAgICByYWYoKCkgPT4gdmlkZW8ucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKSlcclxuICAgIHJhZigoKSA9PiBtb3ZpZU1vZGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpKVxyXG4gIH1cclxuXHJcbiAgcGxheWVyLm9uKCdwbGF5Jywgb25QbGF5KVxyXG4gIHBsYXllci5vbigncGF1c2UnLCBvblN0b3ApXHJcbiAgcGxheWVyLm9uKCdzdG9wJywgb25TdG9wKVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2xpYi92aWRlby5qc1xuICoqLyIsIi8qISBAdmltZW8vcGxheWVyIHYxLjAuNiB8IChjKSAyMDE2IFZpbWVvIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vdmltZW8vcGxheWVyLmpzICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZS5WaW1lbz1lLlZpbWVvfHx7fSxlLlZpbWVvLlBsYXllcj10KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe3JldHVybiB0PXtleHBvcnRzOnt9fSxlKHQsdC5leHBvcnRzKSx0LmV4cG9ydHN9ZnVuY3Rpb24gdChlLHQsbil7dmFyIHI9VC5nZXQoZS5lbGVtZW50KXx8e307dCBpbiByfHwoclt0XT1bXSksclt0XS5wdXNoKG4pLFQuc2V0KGUuZWxlbWVudCxyKX1mdW5jdGlvbiBuKGUsdCl7dmFyIG49VC5nZXQoZS5lbGVtZW50KXx8e307cmV0dXJuIG5bdF18fFtdfWZ1bmN0aW9uIHIoZSx0LG4pe3ZhciByPVQuZ2V0KGUuZWxlbWVudCl8fHt9O2lmKCFyW3RdKXJldHVybiEwO2lmKCFuKXJldHVybiByW3RdPVtdLFQuc2V0KGUuZWxlbWVudCxyKSwhMDt2YXIgbz1yW3RdLmluZGV4T2Yobik7cmV0dXJuIG8hPT0tMSYmclt0XS5zcGxpY2UobywxKSxULnNldChlLmVsZW1lbnQsciksclt0XSYmMD09PXJbdF0ubGVuZ3RofWZ1bmN0aW9uIG8oZSx0KXt2YXIgbj1ULmdldChlKTtULnNldCh0LG4pLFQuZGVsZXRlKGUpfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gMD09PWUuaW5kZXhPZih0LnRvTG93ZXJDYXNlKCkpP2U6XCJcIit0LnRvTG93ZXJDYXNlKCkrZS5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2Uuc3Vic3RyKDEpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnR9ZnVuY3Rpb24gdShlKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChlKSkmJmlzRmluaXRlKGUpJiZNYXRoLmZsb29yKGUpPT1lfWZ1bmN0aW9uIHMoZSl7cmV0dXJuL14oaHR0cHM/Oik/XFwvXFwvKHBsYXllci4pP3ZpbWVvLmNvbSg/PSR8XFwvKS8udGVzdChlKX1mdW5jdGlvbiBjKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSx0PWUuaWQsbj1lLnVybCxyPXR8fG47aWYoIXIpdGhyb3cgbmV3IEVycm9yKFwiQW4gaWQgb3IgdXJsIG11c3QgYmUgcGFzc2VkLCBlaXRoZXIgaW4gYW4gb3B0aW9ucyBvYmplY3Qgb3IgYXMgYSBkYXRhLXZpbWVvLWlkIG9yIGRhdGEtdmltZW8tdXJsIGF0dHJpYnV0ZS5cIik7aWYodShyKSlyZXR1cm5cImh0dHBzOi8vdmltZW8uY29tL1wiK3I7aWYocyhyKSlyZXR1cm4gci5yZXBsYWNlKFwiaHR0cDpcIixcImh0dHBzOlwiKTtpZih0KXRocm93IG5ldyBUeXBlRXJyb3IoXCLigJxcIit0K1wi4oCdIGlzIG5vdCBhIHZhbGlkIHZpZGVvIGlkLlwiKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwi4oCcXCIrcitcIuKAnSBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKX1mdW5jdGlvbiBmKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdLG49XyxyPUFycmF5LmlzQXJyYXkobiksbz0wLG49cj9uOm5bU3ltYm9sLml0ZXJhdG9yXSgpOzspe3ZhciBpO2lmKHIpe2lmKG8+PW4ubGVuZ3RoKWJyZWFrO2k9bltvKytdfWVsc2V7aWYobz1uLm5leHQoKSxvLmRvbmUpYnJlYWs7aT1vLnZhbHVlfXZhciBhPWksdT1lLmdldEF0dHJpYnV0ZShcImRhdGEtdmltZW8tXCIrYSk7KHV8fFwiXCI9PT11KSYmKHRbYV09XCJcIj09PXU/MTp1KX1yZXR1cm4gdH1mdW5jdGlvbiBsKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV07cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4scil7aWYoIXMoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIuKAnFwiK2UrXCLigJ0gaXMgbm90IGEgdmltZW8uY29tIHVybC5cIik7dmFyIG89XCJodHRwczovL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChlKTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYobys9XCImXCIraStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodFtpXSkpO3ZhciBhPVwiWERvbWFpblJlcXVlc3RcImluIHdpbmRvdz9uZXcgWERvbWFpblJlcXVlc3Q6bmV3IFhNTEh0dHBSZXF1ZXN0O2Eub3BlbihcIkdFVFwiLG8sITApLGEub25sb2FkPWZ1bmN0aW9uKCl7aWYoNDA0PT09YS5zdGF0dXMpcmV0dXJuIHZvaWQgcihuZXcgRXJyb3IoXCLigJxcIitlK1wi4oCdIHdhcyBub3QgZm91bmQuXCIpKTtpZig0MDM9PT1hLnN0YXR1cylyZXR1cm4gdm9pZCByKG5ldyBFcnJvcihcIuKAnFwiK2UrXCLigJ0gaXMgbm90IGVtYmVkZGFibGUuXCIpKTt0cnl7dmFyIHQ9SlNPTi5wYXJzZShhLnJlc3BvbnNlVGV4dCk7bih0KX1jYXRjaChlKXtyKGUpfX0sYS5vbmVycm9yPWZ1bmN0aW9uKCl7dmFyIGU9YS5zdGF0dXM/XCIgKFwiK2Euc3RhdHVzK1wiKVwiOlwiXCI7cihuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGVtYmVkIGNvZGUgZnJvbSBWaW1lb1wiK2UrXCIuXCIpKX0sYS5zZW5kKCl9KX1mdW5jdGlvbiBoKGUsdCl7dmFyIG49ZS5odG1sO2lmKCF0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJBbiBlbGVtZW50IG11c3QgYmUgcHJvdmlkZWRcIik7aWYobnVsbCE9PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1pbml0aWFsaXplZFwiKSlyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHIuaW5uZXJIVE1MPW4sdC5hcHBlbmRDaGlsZChyLmZpcnN0Q2hpbGQpLHQuc2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1pbml0aWFsaXplZFwiLFwidHJ1ZVwiKSx0LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIil9ZnVuY3Rpb24gZCgpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT9kb2N1bWVudDphcmd1bWVudHNbMF0sdD1bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZpbWVvLWlkXSwgW2RhdGEtdmltZW8tdXJsXVwiKSksbj1mdW5jdGlvbihlKXtcImNvbnNvbGVcImluIHdpbmRvdyYmY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhbiBlbWJlZDogXCIrZSl9LHI9ZnVuY3Rpb24oKXtpZihpKXtpZihhPj1vLmxlbmd0aClyZXR1cm5cImJyZWFrXCI7dT1vW2ErK119ZWxzZXtpZihhPW8ubmV4dCgpLGEuZG9uZSlyZXR1cm5cImJyZWFrXCI7dT1hLnZhbHVlfXZhciBlPXU7dHJ5e2lmKG51bGwhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtdmltZW8tZGVmZXJcIikpcmV0dXJuXCJjb250aW51ZVwiO3ZhciB0PWYoZSkscj1jKHQpO2wocix0KS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBoKHQsZSl9KS5jYXRjaChuKX1jYXRjaChlKXtuKGUpfX07ZTpmb3IodmFyIG89dCxpPUFycmF5LmlzQXJyYXkobyksYT0wLG89aT9vOm9bU3ltYm9sLml0ZXJhdG9yXSgpOzspe3ZhciB1LHM9cigpO3N3aXRjaChzKXtjYXNlXCJicmVha1wiOmJyZWFrIGU7Y2FzZVwiY29udGludWVcIjpjb250aW51ZX19fWZ1bmN0aW9uIHAoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpLGV9ZnVuY3Rpb24gdihlLHQsbil7aWYoZS5lbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Upe3ZhciByPXttZXRob2Q6dH07dm9pZCAwIT09biYmKHIudmFsdWU9bik7dmFyIG89cGFyc2VGbG9hdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4qbXNpZSAoXFxkKykuKiQvLFwiJDFcIikpO28+PTgmJm88MTAmJihyPUpTT04uc3RyaW5naWZ5KHIpKSxlLmVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShyLGUub3JpZ2luKX19ZnVuY3Rpb24geShlLHQpe3Q9cCh0KTt2YXIgbz1bXSxpPXZvaWQgMDtpZih0LmV2ZW50KXtpZihcImVycm9yXCI9PT10LmV2ZW50KWZvcih2YXIgYT1uKGUsdC5kYXRhLm1ldGhvZCksdT1hLHM9QXJyYXkuaXNBcnJheSh1KSxjPTAsdT1zP3U6dVtTeW1ib2wuaXRlcmF0b3JdKCk7Oyl7dmFyIGY7aWYocyl7aWYoYz49dS5sZW5ndGgpYnJlYWs7Zj11W2MrK119ZWxzZXtpZihjPXUubmV4dCgpLGMuZG9uZSlicmVhaztmPWMudmFsdWV9dmFyIGw9ZixoPW5ldyBFcnJvcih0LmRhdGEubWVzc2FnZSk7aC5uYW1lPXQuZGF0YS5uYW1lLGwucmVqZWN0KGgpLHIoZSx0LmRhdGEubWV0aG9kLGwpfW89bihlLFwiZXZlbnQ6XCIrdC5ldmVudCksaT10LmRhdGF9ZWxzZSB0Lm1ldGhvZCYmKG89bihlLHQubWV0aG9kKSxpPXQudmFsdWUscihlLHQubWV0aG9kKSk7Zm9yKHZhciBkPW8sdj1BcnJheS5pc0FycmF5KGQpLHk9MCxkPXY/ZDpkW1N5bWJvbC5pdGVyYXRvcl0oKTs7KXt2YXIgbTtpZih2KXtpZih5Pj1kLmxlbmd0aClicmVhazttPWRbeSsrXX1lbHNle2lmKHk9ZC5uZXh0KCkseS5kb25lKWJyZWFrO209eS52YWx1ZX12YXIgZz1tO3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBnKXtnLmNhbGwoZSxpKTtjb250aW51ZX1nLnJlc29sdmUoaSl9Y2F0Y2goZSl7fX19dmFyIG09XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLGc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5wb3N0TWVzc2FnZTtpZighbXx8IWcpdGhyb3cgbmV3IEVycm9yKFwiU29ycnksIHRoZSBWaW1lbyBQbGF5ZXIgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLlwiKTt2YXIgdz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9LGI9KGUoZnVuY3Rpb24oZSx0KXshZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLHQpe2Z1bmN0aW9uIHIoZSl7cmV0dXJuIHRoaXMmJnRoaXMuY29uc3RydWN0b3I9PT1yPyh0aGlzLl9rZXlzPVtdLHRoaXMuX3ZhbHVlcz1bXSx0aGlzLl9pdHA9W10sdGhpcy5vYmplY3RPbmx5PXQsdm9pZChlJiZuLmNhbGwodGhpcyxlKSkpOm5ldyByKGUpfXJldHVybiB0fHx3KGUsXCJzaXplXCIse2dldDp5fSksZS5jb25zdHJ1Y3Rvcj1yLHIucHJvdG90eXBlPWUscn1mdW5jdGlvbiBuKGUpe3RoaXMuYWRkP2UuZm9yRWFjaCh0aGlzLmFkZCx0aGlzKTplLmZvckVhY2goZnVuY3Rpb24oZSl7dGhpcy5zZXQoZVswXSxlWzFdKX0sdGhpcyl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gdGhpcy5oYXMoZSkmJih0aGlzLl9rZXlzLnNwbGljZShnLDEpLHRoaXMuX3ZhbHVlcy5zcGxpY2UoZywxKSx0aGlzLl9pdHAuZm9yRWFjaChmdW5jdGlvbihlKXtnPGVbMF0mJmVbMF0tLX0pKSwtMTxnfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIHRoaXMuaGFzKGUpP3RoaXMuX3ZhbHVlc1tnXTp2b2lkIDB9ZnVuY3Rpb24gaShlLHQpe2lmKHRoaXMub2JqZWN0T25seSYmdCE9PU9iamVjdCh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB2YWx1ZSB1c2VkIGFzIHdlYWsgY29sbGVjdGlvbiBrZXlcIik7aWYodCE9dHx8MD09PXQpZm9yKGc9ZS5sZW5ndGg7Zy0tJiYhYihlW2ddLHQpOyk7ZWxzZSBnPWUuaW5kZXhPZih0KTtyZXR1cm4tMTxnfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGkuY2FsbCh0aGlzLHRoaXMuX3ZhbHVlcyxlKX1mdW5jdGlvbiB1KGUpe3JldHVybiBpLmNhbGwodGhpcyx0aGlzLl9rZXlzLGUpfWZ1bmN0aW9uIHMoZSx0KXtyZXR1cm4gdGhpcy5oYXMoZSk/dGhpcy5fdmFsdWVzW2ddPXQ6dGhpcy5fdmFsdWVzW3RoaXMuX2tleXMucHVzaChlKS0xXT10LHRoaXN9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gdGhpcy5oYXMoZSl8fHRoaXMuX3ZhbHVlcy5wdXNoKGUpLHRoaXN9ZnVuY3Rpb24gZigpeyh0aGlzLl9rZXlzfHwwKS5sZW5ndGg9dGhpcy5fdmFsdWVzLmxlbmd0aD0wfWZ1bmN0aW9uIGwoKXtyZXR1cm4gdih0aGlzLl9pdHAsdGhpcy5fa2V5cyl9ZnVuY3Rpb24gaCgpe3JldHVybiB2KHRoaXMuX2l0cCx0aGlzLl92YWx1ZXMpfWZ1bmN0aW9uIGQoKXtyZXR1cm4gdih0aGlzLl9pdHAsdGhpcy5fa2V5cyx0aGlzLl92YWx1ZXMpfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdih0aGlzLl9pdHAsdGhpcy5fdmFsdWVzLHRoaXMuX3ZhbHVlcyl9ZnVuY3Rpb24gdihlLHQsbil7dmFyIHI9WzBdLG89ITE7cmV0dXJuIGUucHVzaChyKSx7bmV4dDpmdW5jdGlvbigpe3ZhciBpLGE9clswXTtyZXR1cm4hbyYmYTx0Lmxlbmd0aD8oaT1uP1t0W2FdLG5bYV1dOnRbYV0sclswXSsrKToobz0hMCxlLnNwbGljZShlLmluZGV4T2YociksMSkpLHtkb25lOm8sdmFsdWU6aX19fX1mdW5jdGlvbiB5KCl7cmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGh9ZnVuY3Rpb24gbShlLHQpe2Zvcih2YXIgbj10aGlzLmVudHJpZXMoKTs7KXt2YXIgcj1uLm5leHQoKTtpZihyLmRvbmUpYnJlYWs7ZS5jYWxsKHQsci52YWx1ZVsxXSxyLnZhbHVlWzBdLHRoaXMpfX12YXIgZyx3PU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxiPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10fHxlIT09ZSYmdCE9PXR9O1widW5kZWZpbmVkXCI9PXR5cGVvZiBXZWFrTWFwJiYoZS5XZWFrTWFwPXQoe2RlbGV0ZTpyLGNsZWFyOmYsZ2V0Om8saGFzOnUsc2V0OnN9LCEwKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCYmXCJmdW5jdGlvblwiPT10eXBlb2YobmV3IE1hcCkudmFsdWVzJiYobmV3IE1hcCkudmFsdWVzKCkubmV4dHx8KGUuTWFwPXQoe2RlbGV0ZTpyLGhhczp1LGdldDpvLHNldDpzLGtleXM6bCx2YWx1ZXM6aCxlbnRyaWVzOmQsZm9yRWFjaDptLGNsZWFyOmZ9KSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCYmXCJmdW5jdGlvblwiPT10eXBlb2YobmV3IFNldCkudmFsdWVzJiYobmV3IFNldCkudmFsdWVzKCkubmV4dHx8KGUuU2V0PXQoe2hhczphLGFkZDpjLGRlbGV0ZTpyLGNsZWFyOmYsa2V5czpoLHZhbHVlczpoLGVudHJpZXM6cCxmb3JFYWNoOm19KSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIFdlYWtTZXQmJihlLldlYWtTZXQ9dCh7ZGVsZXRlOnIsYWRkOmMsY2xlYXI6ZixoYXM6YX0sITApKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3P3c6d2luZG93KX0pLGUoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHQsbixyKXtuW3RdPW5bdF18fHIoKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmZS5leHBvcnRzP2UuZXhwb3J0cz1uW3RdOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIG5bdF19KX0oXCJQcm9taXNlXCIsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHc/dzp3LGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2guYWRkKGUsdCksbHx8KGw9cChoLmRyYWluKSl9ZnVuY3Rpb24gdChlKXt2YXIgdCxuPXR5cGVvZiBlO3JldHVybiBudWxsPT1lfHxcIm9iamVjdFwiIT1uJiZcImZ1bmN0aW9uXCIhPW58fCh0PWUudGhlbiksXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdH1mdW5jdGlvbiBuKCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNoYWluLmxlbmd0aDtlKyspcih0aGlzLDE9PT10aGlzLnN0YXRlP3RoaXMuY2hhaW5bZV0uc3VjY2Vzczp0aGlzLmNoYWluW2VdLmZhaWx1cmUsdGhpcy5jaGFpbltlXSk7dGhpcy5jaGFpbi5sZW5ndGg9MH1mdW5jdGlvbiByKGUsbixyKXt2YXIgbyxpO3RyeXtuPT09ITE/ci5yZWplY3QoZS5tc2cpOihvPW49PT0hMD9lLm1zZzpuLmNhbGwodm9pZCAwLGUubXNnKSxvPT09ci5wcm9taXNlP3IucmVqZWN0KFR5cGVFcnJvcihcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpOihpPXQobykpP2kuY2FsbChvLHIucmVzb2x2ZSxyLnJlamVjdCk6ci5yZXNvbHZlKG8pKX1jYXRjaChlKXtyLnJlamVjdChlKX19ZnVuY3Rpb24gbyhyKXt2YXIgYSxzPXRoaXM7aWYoIXMudHJpZ2dlcmVkKXtzLnRyaWdnZXJlZD0hMCxzLmRlZiYmKHM9cy5kZWYpO3RyeXsoYT10KHIpKT9lKGZ1bmN0aW9uKCl7dmFyIGU9bmV3IHUocyk7dHJ5e2EuY2FsbChyLGZ1bmN0aW9uKCl7by5hcHBseShlLGFyZ3VtZW50cyl9LGZ1bmN0aW9uKCl7aS5hcHBseShlLGFyZ3VtZW50cyl9KX1jYXRjaCh0KXtpLmNhbGwoZSx0KX19KToocy5tc2c9cixzLnN0YXRlPTEscy5jaGFpbi5sZW5ndGg+MCYmZShuLHMpKX1jYXRjaChlKXtpLmNhbGwobmV3IHUocyksZSl9fX1mdW5jdGlvbiBpKHQpe3ZhciByPXRoaXM7ci50cmlnZ2VyZWR8fChyLnRyaWdnZXJlZD0hMCxyLmRlZiYmKHI9ci5kZWYpLHIubXNnPXQsci5zdGF0ZT0yLHIuY2hhaW4ubGVuZ3RoPjAmJmUobixyKSl9ZnVuY3Rpb24gYShlLHQsbixyKXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKykhZnVuY3Rpb24obyl7ZS5yZXNvbHZlKHRbb10pLnRoZW4oZnVuY3Rpb24oZSl7bihvLGUpfSxyKX0obyl9ZnVuY3Rpb24gdShlKXt0aGlzLmRlZj1lLHRoaXMudHJpZ2dlcmVkPSExfWZ1bmN0aW9uIHMoZSl7dGhpcy5wcm9taXNlPWUsdGhpcy5zdGF0ZT0wLHRoaXMudHJpZ2dlcmVkPSExLHRoaXMuY2hhaW49W10sdGhpcy5tc2c9dm9pZCAwfWZ1bmN0aW9uIGModCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtpZigwIT09dGhpcy5fX05QT19fKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIHByb21pc2VcIik7dGhpcy5fX05QT19fPTE7dmFyIHI9bmV3IHModGhpcyk7dGhpcy50aGVuPWZ1bmN0aW9uKHQsbyl7dmFyIGk9e3N1Y2Nlc3M6XCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dCxmYWlsdXJlOlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJm99O3JldHVybiBpLnByb21pc2U9bmV3IHRoaXMuY29uc3RydWN0b3IoZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO2kucmVzb2x2ZT1lLGkucmVqZWN0PXR9KSxyLmNoYWluLnB1c2goaSksMCE9PXIuc3RhdGUmJmUobixyKSxpLnByb21pc2V9LHRoaXMuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsZSl9O3RyeXt0LmNhbGwodm9pZCAwLGZ1bmN0aW9uKGUpe28uY2FsbChyLGUpfSxmdW5jdGlvbihlKXtpLmNhbGwocixlKX0pfWNhdGNoKGUpe2kuY2FsbChyLGUpfX12YXIgZixsLGgsZD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLHA9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNldEltbWVkaWF0ZT9mdW5jdGlvbihlKXtyZXR1cm4gc2V0SW1tZWRpYXRlKGUpfTpzZXRUaW1lb3V0O3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJ4XCIse30pLGY9ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOnIhPT0hMX0pfX1jYXRjaChlKXtmPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZVt0XT1uLGV9fWg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dGhpcy5mbj1lLHRoaXMuc2VsZj10LHRoaXMubmV4dD12b2lkIDB9dmFyIHQsbixyO3JldHVybnthZGQ6ZnVuY3Rpb24obyxpKXtyPW5ldyBlKG8saSksbj9uLm5leHQ9cjp0PXIsbj1yLHI9dm9pZCAwfSxkcmFpbjpmdW5jdGlvbigpe3ZhciBlPXQ7Zm9yKHQ9bj1sPXZvaWQgMDtlOyllLmZuLmNhbGwoZS5zZWxmKSxlPWUubmV4dH19fSgpO3ZhciB2PWYoe30sXCJjb25zdHJ1Y3RvclwiLGMsITEpO3JldHVybiBjLnByb3RvdHlwZT12LGYodixcIl9fTlBPX19cIiwwLCExKSxmKGMsXCJyZXNvbHZlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJjE9PT1lLl9fTlBPX18/ZTpuZXcgdChmdW5jdGlvbih0LG4pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7dChlKX0pfSksZihjLFwicmVqZWN0XCIsZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyB0aGlzKGZ1bmN0aW9uKHQsbil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtuKGUpfSl9KSxmKGMsXCJhbGxcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVyblwiW29iamVjdCBBcnJheV1cIiE9ZC5jYWxsKGUpP3QucmVqZWN0KFR5cGVFcnJvcihcIk5vdCBhbiBhcnJheVwiKSk6MD09PWUubGVuZ3RoP3QucmVzb2x2ZShbXSk6bmV3IHQoZnVuY3Rpb24obixyKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBufHxcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO3ZhciBvPWUubGVuZ3RoLGk9QXJyYXkobyksdT0wO2EodCxlLGZ1bmN0aW9uKGUsdCl7aVtlXT10LCsrdT09PW8mJm4oaSl9LHIpfSl9KSxmKGMsXCJyYWNlXCIsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm5cIltvYmplY3QgQXJyYXldXCIhPWQuY2FsbChlKT90LnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpOm5ldyB0KGZ1bmN0aW9uKG4scil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTthKHQsZSxmdW5jdGlvbihlLHQpe24odCl9LHIpfSl9KSxjfSl9KSksRT1iJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmXCJkZWZhdWx0XCJpbiBiP2IuZGVmYXVsdDpiLFQ9bmV3IFdlYWtNYXAsXz1bXCJpZFwiLFwidXJsXCIsXCJ3aWR0aFwiLFwibWF4d2lkdGhcIixcImhlaWdodFwiLFwibWF4aGVpZ2h0XCIsXCJwb3J0cmFpdFwiLFwidGl0bGVcIixcImJ5bGluZVwiLFwiY29sb3JcIixcImF1dG9wbGF5XCIsXCJhdXRvcGF1c2VcIixcImxvb3BcIixcInJlc3BvbnNpdmVcIl0saz1mdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9LHg9bmV3IFdlYWtNYXAsaj1uZXcgV2Vha01hcCxQbGF5ZXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBQbGF5ZXIoZSl7dmFyIHQ9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV07aWYoayh0aGlzLFBsYXllciksd2luZG93LmpRdWVyeSYmZSBpbnN0YW5jZW9mIGpRdWVyeSYmKGUubGVuZ3RoPjEmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihcIkEgalF1ZXJ5IG9iamVjdCB3aXRoIG11bHRpcGxlIGVsZW1lbnRzIHdhcyBwYXNzZWQsIHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50LlwiKSxlPWVbMF0pLFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSksIWEoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgZWl0aGVyIGEgdmFsaWQgZWxlbWVudCBvciBhIHZhbGlkIGlkLlwiKTtpZihcIklGUkFNRVwiIT09ZS5ub2RlTmFtZSl7dmFyIHI9ZS5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO3ImJihlPXIpfWlmKFwiSUZSQU1FXCI9PT1lLm5vZGVOYW1lJiYhcyhlLmdldEF0dHJpYnV0ZShcInNyY1wiKXx8XCJcIikpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBsYXllciBlbGVtZW50IHBhc3NlZCBpc27igJl0IGEgVmltZW8gZW1iZWQuXCIpO2lmKHguaGFzKGUpKXJldHVybiB4LmdldChlKTt0aGlzLmVsZW1lbnQ9ZSx0aGlzLm9yaWdpbj1cIipcIjt2YXIgaT1uZXcgRShmdW5jdGlvbihyLGkpe3ZhciBhPWZ1bmN0aW9uKGUpe2lmKHMoZS5vcmlnaW4pJiZ0LmVsZW1lbnQuY29udGVudFdpbmRvdz09PWUuc291cmNlKXtcIipcIj09PXQub3JpZ2luJiYodC5vcmlnaW49ZS5vcmlnaW4pO3ZhciBuPXAoZS5kYXRhKSxvPVwiZXZlbnRcImluIG4mJlwicmVhZHlcIj09PW4uZXZlbnQsaT1cIm1ldGhvZFwiaW4gbiYmXCJwaW5nXCI9PT1uLm1ldGhvZDtyZXR1cm4gb3x8aT8odC5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcmVhZHlcIixcInRydWVcIiksdm9pZCByKCkpOnZvaWQgeSh0LG4pfX07aWYod2luZG93LmFkZEV2ZW50TGlzdGVuZXI/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYSwhMSk6d2luZG93LmF0dGFjaEV2ZW50JiZ3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixhKSxcIklGUkFNRVwiIT09dC5lbGVtZW50Lm5vZGVOYW1lKXt2YXIgdT1mKGUsbiksZD1jKHUpO2woZCx1KS50aGVuKGZ1bmN0aW9uKG4pe3ZhciByPWgobixlKTtyZXR1cm4gdC5lbGVtZW50PXIsbyhlLHIpLG59KS5jYXRjaChmdW5jdGlvbihlKXtyZXR1cm4gaShlKX0pfX0pO3JldHVybiBqLnNldCh0aGlzLGkpLHguc2V0KHRoaXMuZWxlbWVudCx0aGlzKSxcIklGUkFNRVwiPT09dGhpcy5lbGVtZW50Lm5vZGVOYW1lJiZ2KHRoaXMsXCJwaW5nXCIpLHRoaXN9cmV0dXJuIFBsYXllci5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/ZnVuY3Rpb24oKXt9OmFyZ3VtZW50c1sxXTtyZXR1cm4gdGhpcy5yZWFkeSgpLnRoZW4oZSx0KX0sUGxheWVyLnByb3RvdHlwZS5jYWxsTWV0aG9kPWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdO3JldHVybiBuZXcgRShmdW5jdGlvbihvLGkpe3JldHVybiBuLnJlYWR5KCkudGhlbihmdW5jdGlvbigpe3QobixlLHtyZXNvbHZlOm8scmVqZWN0Oml9KSx2KG4sZSxyKX0pfSl9LFBsYXllci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBFKGZ1bmN0aW9uKHIsbyl7cmV0dXJuIGU9aShlLFwiZ2V0XCIpLG4ucmVhZHkoKS50aGVuKGZ1bmN0aW9uKCl7dChuLGUse3Jlc29sdmU6cixyZWplY3Q6b30pLHYobixlKX0pfSl9LFBsYXllci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsbil7dmFyIHI9dGhpcztyZXR1cm4gRS5yZXNvbHZlKG4pLnRoZW4oZnVuY3Rpb24obil7aWYoZT1pKGUsXCJzZXRcIiksdm9pZCAwPT09bnx8bnVsbD09PW4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZXJlIG11c3QgYmUgYSB2YWx1ZSB0byBzZXQuXCIpO3JldHVybiByLnJlYWR5KCkudGhlbihmdW5jdGlvbigpe3JldHVybiBuZXcgRShmdW5jdGlvbihvLGkpe3QocixlLHtyZXNvbHZlOm8scmVqZWN0Oml9KSx2KHIsZSxuKX0pfSl9KX0sUGxheWVyLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHIpe2lmKCFlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGV2ZW50IG5hbWUuXCIpO2lmKCFyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3ZhciBvPW4odGhpcyxcImV2ZW50OlwiK2UpOzA9PT1vLmxlbmd0aCYmdGhpcy5jYWxsTWV0aG9kKFwiYWRkRXZlbnRMaXN0ZW5lclwiLGUpLmNhdGNoKGZ1bmN0aW9uKCl7fSksdCh0aGlzLFwiZXZlbnQ6XCIrZSxyKX0sUGxheWVyLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBldmVudCBuYW1lLlwiKTtpZih0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTt2YXIgbj1yKHRoaXMsXCJldmVudDpcIitlLHQpO24mJnRoaXMuY2FsbE1ldGhvZChcInJlbW92ZUV2ZW50TGlzdGVuZXJcIixlKS5jYXRjaChmdW5jdGlvbihlKXt9KX0sUGxheWVyLnByb3RvdHlwZS5sb2FkVmlkZW89ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcImxvYWRWaWRlb1wiLGUpfSxQbGF5ZXIucHJvdG90eXBlLnJlYWR5PWZ1bmN0aW9uKCl7dmFyIGU9ai5nZXQodGhpcyk7cmV0dXJuIEUucmVzb2x2ZShlKX0sUGxheWVyLnByb3RvdHlwZS5lbmFibGVUZXh0VHJhY2s9ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIGxhbmd1YWdlLlwiKTtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwiZW5hYmxlVGV4dFRyYWNrXCIse2xhbmd1YWdlOmUsa2luZDp0fSl9LFBsYXllci5wcm90b3R5cGUuZGlzYWJsZVRleHRUcmFjaz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJkaXNhYmxlVGV4dFRyYWNrXCIpfSxQbGF5ZXIucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcInBhdXNlXCIpfSxQbGF5ZXIucHJvdG90eXBlLnBsYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwicGxheVwiKX0sUGxheWVyLnByb3RvdHlwZS51bmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwidW5sb2FkXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldEF1dG9wYXVzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImF1dG9wYXVzZVwiKX0sUGxheWVyLnByb3RvdHlwZS5zZXRBdXRvcGF1c2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2V0KFwiYXV0b3BhdXNlXCIsZSl9LFBsYXllci5wcm90b3R5cGUuZ2V0Q29sb3I9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJjb2xvclwiKX0sUGxheWVyLnByb3RvdHlwZS5zZXRDb2xvcj1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZXQoXCJjb2xvclwiLGUpfSxQbGF5ZXIucHJvdG90eXBlLmdldEN1cnJlbnRUaW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwiY3VycmVudFRpbWVcIil9LFBsYXllci5wcm90b3R5cGUuc2V0Q3VycmVudFRpbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2V0KFwiY3VycmVudFRpbWVcIixlKX0sUGxheWVyLnByb3RvdHlwZS5nZXREdXJhdGlvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImR1cmF0aW9uXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldEVuZGVkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwiZW5kZWRcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0TG9vcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImxvb3BcIil9LFBsYXllci5wcm90b3R5cGUuc2V0TG9vcD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZXQoXCJsb29wXCIsZSl9LFBsYXllci5wcm90b3R5cGUuZ2V0UGF1c2VkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwicGF1c2VkXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFRleHRUcmFja3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ0ZXh0VHJhY2tzXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvRW1iZWRDb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9FbWJlZENvZGVcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9JZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvSWRcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9UaXRsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvVGl0bGVcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9XaWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvV2lkdGhcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9IZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb0hlaWdodFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb1VybD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvVXJsXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZvbHVtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZvbHVtZVwiKX0sUGxheWVyLnByb3RvdHlwZS5zZXRWb2x1bWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2V0KFwidm9sdW1lXCIsZSl9LFBsYXllcn0oKTtyZXR1cm4gZCgpLFBsYXllcn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L0B2aW1lby9wbGF5ZXIvZGlzdC9wbGF5ZXIubWluLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCJ2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzL2Jyb3dzZXIuanMnKS5uZXh0VGljaztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpbW1lZGlhdGVJZHMgPSB7fTtcbnZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkgeyB0aW1lb3V0LmNsb3NlKCk7IH07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG4gIHZhciBpZCA9IG5leHRJbW1lZGlhdGVJZCsrO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaW1tZWRpYXRlSWRzW2lkXSA9IHRydWU7XG5cbiAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcbiAgICBpZiAoaW1tZWRpYXRlSWRzW2lkXSkge1xuICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3VcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuICAgICAgZXhwb3J0cy5jbGVhckltbWVkaWF0ZShpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWQ7XG59O1xuXG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG4gIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihnYWxsZXJ5RWwpIHtcclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9saWIvZ2FsbGVyeS9pbmRleC5qc1xuICoqLyIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifSx7XCJsaWdodG5lc3NcIjozM31dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZjJlNWQ0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaS5wYXJrXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNjNWRhYzZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pLnBhcmtcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHNcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wibGlnaHRuZXNzXCI6MjB9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wibGlnaHRuZXNzXCI6MjB9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjYzVjNmM2XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2U0ZDdjNlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmxvY2FsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmYmZhZjdcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wiY29sb3JcIjpcIiNhY2JjYzlcIn1dfV1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9tYXBzdHlsZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9