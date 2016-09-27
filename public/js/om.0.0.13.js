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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	
	   setTimeout(function (_) {
	      $("#front-page").css('opacity', 1);
	   }, 66);
	
	   (0, _video2.default)($('.video'));
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

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v1.0.4 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var r=T.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),T.set(e.element,r)}function n(e,t){var n=T.get(e.element)||{};return n[t]||[]}function r(e,t,n){var r=T.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],T.set(e.element,r),!0;var o=r[t].indexOf(n);return o!==-1&&r[t].splice(o,1),T.set(e.element,r),r[t]&&0===r[t].length}function o(e,t){var n=T.get(e);T.set(t,n),T.delete(e)}function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function a(e){return e instanceof window.HTMLElement}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function s(e){return/^(https?:)?\/\/(player.)?vimeo.com/.test(e)}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(u(r))return"https://vimeo.com/"+r;if(s(r))return r.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+r+"” is not a vimeo.com url.")}function f(e){for(var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=_,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var i;if(r){if(o>=n.length)break;i=n[o++]}else{if(o=n.next(),o.done)break;i=o.value}var a=i,u=e.getAttribute("data-vimeo-"+a);(u||""===u)&&(t[a]=""===u?1:u)}return t}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new Promise(function(n,r){if(!s(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var o="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var i in t)t.hasOwnProperty(i)&&(o+="&"+i+"="+encodeURIComponent(t[i]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404===a.status)return void r(new Error("“"+e+"” was not found."));if(403===a.status)return void r(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(a.responseText);n(t)}catch(e){r(e)}},a.onerror=function(){var e=a.status?" ("+a.status+")":"";r(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},a.send()})}function h(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");r.innerHTML=n;var o=r.firstChild;return t.appendChild(o),t.setAttribute("data-vimeo-initialized","true"),o}function d(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0],t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)},r=function(){if(i){if(a>=o.length)return"break";u=o[a++]}else{if(a=o.next(),a.done)return"break";u=a.value}var e=u;try{if(null!==e.getAttribute("data-vimeo-defer"))return"continue";var t=f(e),r=c(t);l(r,t).then(function(t){return h(t,e)}).catch(n)}catch(e){n(e)}};e:for(var o=t,i=Array.isArray(o),a=0,o=i?o:o[Symbol.iterator]();;){var u,s=r();switch(s){case"break":break e;case"continue":continue}}}function p(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function v(e,t,n){if(e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function y(e,t){t=p(t);var o=[],i=void 0;if(t.event){if("error"===t.event)for(var a=n(e,t.data.method),u=a,s=Array.isArray(u),c=0,u=s?u:u[Symbol.iterator]();;){var f;if(s){if(c>=u.length)break;f=u[c++]}else{if(c=u.next(),c.done)break;f=c.value}var l=f,h=new Error(t.data.message);h.name=t.data.name,l.reject(h),r(e,t.data.method,l)}o=n(e,"event:"+t.event),i=t.data}else t.method&&(o=n(e,t.method),i=t.value,r(e,t.method));for(var d=o,v=Array.isArray(d),y=0,d=v?d:d[Symbol.iterator]();;){var m;if(v){if(y>=d.length)break;m=d[y++]}else{if(y=d.next(),y.done)break;m=y.value}var g=m;try{if("function"==typeof g){g.call(e,i);continue}g.resolve(i)}catch(e){}}}var m="undefined"!=typeof Array.prototype.indexOf,g="undefined"!=typeof window.postMessage;if(!m||!g)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=(e(function(e,t){!function(e){function t(e,t){function r(e){return this&&this.constructor===r?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new r(e)}return t||w(e,"size",{get:y}),e.constructor=r,r.prototype=e,r}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function r(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function o(e){return this.has(e)?this._values[g]:void 0}function i(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!b(e[g],t););else g=e.indexOf(t);return-1<g}function a(e){return i.call(this,this._values,e)}function u(e){return i.call(this,this._keys,e)}function s(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function f(){(this._keys||0).length=this._values.length=0}function l(){return v(this._itp,this._keys)}function h(){return v(this._itp,this._values)}function d(){return v(this._itp,this._keys,this._values)}function p(){return v(this._itp,this._values,this._values)}function v(e,t,n){var r=[0],o=!1;return e.push(r),{next:function(){var i,a=r[0];return!o&&a<t.length?(i=n?[t[a],n[a]]:t[a],r[0]++):(o=!0,e.splice(e.indexOf(r),1)),{done:o,value:i}}}}function y(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}var g,w=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:r,clear:f,get:o,has:u,set:s},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:r,has:u,get:o,set:s,keys:l,values:h,entries:d,forEach:m,clear:f})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:r,clear:f,keys:h,values:h,entries:p,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:r,add:c,clear:f,has:a},!0))}("undefined"!=typeof t&&"undefined"!=typeof w?w:window)}),e(function(e){!function(t,n,r){n[t]=n[t]||r(),"undefined"!=typeof e&&e.exports?e.exports=n[t]:"function"=="function"&&__webpack_require__(5)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n[t]}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("Promise","undefined"!=typeof w?w:w,function(){function e(e,t){h.add(e,t),l||(l=p(h.drain))}function t(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function n(){for(var e=0;e<this.chain.length;e++)r(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function r(e,n,r){var o,i;try{n===!1?r.reject(e.msg):(o=n===!0?e.msg:n.call(void 0,e.msg),o===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=t(o))?i.call(o,r.resolve,r.reject):r.resolve(o))}catch(e){r.reject(e)}}function o(r){var a,s=this;if(!s.triggered){s.triggered=!0,s.def&&(s=s.def);try{(a=t(r))?e(function(){var e=new u(s);try{a.call(r,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(t){i.call(e,t)}}):(s.msg=r,s.state=1,s.chain.length>0&&e(n,s))}catch(e){i.call(new u(s),e)}}}function i(t){var r=this;r.triggered||(r.triggered=!0,r.def&&(r=r.def),r.msg=t,r.state=2,r.chain.length>0&&e(n,r))}function a(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function u(e){this.def=e,this.triggered=!1}function s(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function c(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new s(this);this.then=function(t,o){var i={success:"function"!=typeof t||t,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");i.resolve=e,i.reject=t}),r.chain.push(i),0!==r.state&&e(n,r),i.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){o.call(r,e)},function(e){i.call(r,e)})}catch(e){i.call(r,e)}}var f,l,h,d=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:r!==!1})}}catch(e){f=function(e,t,n){return e[t]=n,e}}h=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,r;return{add:function(o,i){r=new e(o,i),n?n.next=r:t=r,n=r,r=void 0},drain:function(){var e=t;for(t=n=l=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=f({},"constructor",c,!1);return c.prototype=v,f(v,"__NPO__",0,!1),f(c,"resolve",function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),f(c,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),f(c,"all",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;a(t,e,function(e,t){i[e]=t,++u===o&&n(i)},r)})}),f(c,"race",function(e){var t=this;return"[object Array]"!=d.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");a(t,e,function(e,t){n(t)},r)})}),c})})),E=b&&"object"==typeof b&&"default"in b?b.default:b,T=new WeakMap,_=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=new WeakMap,j=new WeakMap,Player=function(){function Player(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(k(this,Player),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"string"==typeof e&&(e=document.getElementById(e)),!a(e))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==e.nodeName){var r=e.querySelector("iframe");r&&(e=r)}if("IFRAME"===e.nodeName&&!s(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(x.has(e))return x.get(e);this.element=e,this.origin="*";var i=new E(function(r,i){var a=function(e){if(s(e.origin)&&t.element.contentWindow===e.source){"*"===t.origin&&(t.origin=e.origin);var n=p(e.data),o="event"in n&&"ready"===n.event,i="method"in n&&"ping"===n.method;return o||i?(t.element.setAttribute("data-ready","true"),void r()):void y(t,n)}};if(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a),"IFRAME"!==t.element.nodeName){var u=f(e,n),d=c(u);l(d,u).then(function(n){var r=h(n,e);return t.element=r,o(e,r),n}).catch(function(e){return i(e)})}});return j.set(this,i),x.set(this.element,this),"IFRAME"===this.element.nodeName&&v(this,"ping"),this}return Player.prototype.then=function(e){var t=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];return this.ready().then(e,t)},Player.prototype.callMethod=function(e){var n=this,r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new E(function(o,i){return n.ready().then(function(){t(n,e,{resolve:o,reject:i}),v(n,e,r)})})},Player.prototype.get=function(e){var n=this;return new E(function(r,o){return e=i(e,"get"),n.ready().then(function(){t(n,e,{resolve:r,reject:o}),v(n,e)})})},Player.prototype.set=function(e,n){var r=this;return E.resolve(n).then(function(n){if(e=i(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new E(function(o,i){t(r,e,{resolve:o,reject:i}),v(r,e,n)})})})},Player.prototype.on=function(e,r){if(!e)throw new TypeError("You must pass an event name.");if(!r)throw new TypeError("You must pass a callback function.");if("function"!=typeof r)throw new TypeError("The callback must be a function.");var o=n(this,"event:"+e);0===o.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,r)},Player.prototype.off=function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=r(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})},Player.prototype.loadVideo=function(e){return this.callMethod("loadVideo",e)},Player.prototype.ready=function(){var e=j.get(this);return E.resolve(e)},Player.prototype.enableTextTrack=function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})},Player.prototype.disableTextTrack=function(){return this.callMethod("disableTextTrack")},Player.prototype.pause=function(){return this.callMethod("pause")},Player.prototype.play=function(){return this.callMethod("play")},Player.prototype.unload=function(){return this.callMethod("unload")},Player.prototype.getAutopause=function(){return this.get("autopause")},Player.prototype.setAutopause=function(e){return this.set("autopause",e)},Player.prototype.getColor=function(){return this.get("color")},Player.prototype.setColor=function(e){return this.set("color",e)},Player.prototype.getCurrentTime=function(){return this.get("currentTime")},Player.prototype.setCurrentTime=function(e){return this.set("currentTime",e)},Player.prototype.getDuration=function(){return this.get("duration")},Player.prototype.getEnded=function(){return this.get("ended")},Player.prototype.getLoop=function(){return this.get("loop")},Player.prototype.setLoop=function(e){return this.set("loop",e)},Player.prototype.getPaused=function(){return this.get("paused")},Player.prototype.getTextTracks=function(){return this.get("textTracks")},Player.prototype.getVideoEmbedCode=function(){return this.get("videoEmbedCode")},Player.prototype.getVideoId=function(){return this.get("videoId")},Player.prototype.getVideoTitle=function(){return this.get("videoTitle")},Player.prototype.getVideoWidth=function(){return this.get("videoWidth")},Player.prototype.getVideoHeight=function(){return this.get("videoHeight")},Player.prototype.getVideoUrl=function(){return this.get("videoUrl")},Player.prototype.getVolume=function(){return this.get("volume")},Player.prototype.setVolume=function(e){return this.set("volume",e)},Player}();return d(),Player});
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
	    if (!draining || !currentQueue) {
	        return;
	    }
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTgzNDExOTJkYTViODMzNDYyZTk/MjUzNCoiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2xpYi92aWRlby5qcz9kYjc4Iiwid2VicGFjazovLy8uL34vQHZpbWVvL3BsYXllci9kaXN0L3BsYXllci5taW4uanM/ZGJhYyIsIndlYnBhY2s6Ly8vLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanM/YjA4OCIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz84MmU0Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcz81ZjcxIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzPzAxMTciLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcz9iOGEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7Ozs7OztBQUdBLEdBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBTTs7QUFFckIsZUFBVyxhQUFLO0FBQ2IsU0FBRSxhQUFGLEVBQWlCLEdBQWpCLENBQXFCLFNBQXJCLEVBQWdDLENBQWhDO0FBQ0QsS0FGRixFQUVJLEVBRko7O0FBSUMseUJBQU0sRUFBRSxRQUFGLENBQU47QUFDSCxFQVBELEU7Ozs7Ozs7Ozs7OzttQkNBZSxVQUFTLE9BQVQsRUFBa0I7O0FBRS9CLE9BQU0sYUFBYSxRQUFRLElBQVIsQ0FBYSxjQUFi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O0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiJvbS4wLjAuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk4MzQxMTkyZGE1YjgzMzQ2MmU5XG4gKiovIiwiXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi4vLi4vbGliL3ZpZGVvJ1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblxuICAgc2V0VGltZW91dChfID0+IHtcbiAgICAgICQoXCIjZnJvbnQtcGFnZVwiKS5jc3MoJ29wYWNpdHknLCAxKVxuICAgIH0sIDY2KVxuXG4gICAgdmlkZW8oJCgnLnZpZGVvJykpXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvZW50cmllcy9vbS9pbmRleC5qc1xuICoqLyIsIlxuaW1wb3J0IFBsYXllciBmcm9tICdAdmltZW8vcGxheWVyJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZpZGVvZWwpIHtcblxuICBjb25zdCBwbGF5QnV0dG9uID0gdmlkZW9lbC5maW5kKCcucGxheS1idXR0b24nKVxuICBjb25zdCBtb3ZpZU1vZGUgPSB2aWRlb2VsLmZpbmQoJy5tb3ZpZS1tb2RlJylcbiAgY29uc3QgdmlkZW8gPSB2aWRlb2VsXG4gIGNvbnN0IHZpZGVvRnJhbWUgPSB2aWRlb2VsLmZpbmQoJ2lmcmFtZScpXG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIodmlkZW9GcmFtZSlcblxuICBwbGF5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBsYXllci5wbGF5KCksIDMzKVxuICB9KVxuXG4gIGNvbnN0IG9uUGxheSA9ICgpID0+IHtcbiAgICByYWYoKCkgPT4gcGxheUJ1dHRvbi5hZGRDbGFzcygnaGlkZScpKVxuICAgIHJhZigoKSA9PiBtb3ZpZU1vZGUuYWRkQ2xhc3MoJ2FjdGl2ZScpKVxuICAgIHJhZigoKSA9PiB2aWRlby5hZGRDbGFzcygncGxheWluZycpKVxuICAgIHJhZigoKSA9PiB2aWRlb0ZyYW1lLnJlbW92ZUNsYXNzKCdoaWRkZW4nKSlcbiAgICAkKCdib2R5Jykub25lKCdjbGljaycsICgpID0+IHBsYXllci5wYXVzZSgpKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wID0gKCkgPT4ge1xuICAgIHJhZigoKSA9PiB2aWRlby5yZW1vdmVDbGFzcygncGxheWluZycpKVxuICAgIHJhZigoKSA9PiBtb3ZpZU1vZGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpKVxuICB9XG5cbiAgcGxheWVyLm9uKCdwbGF5Jywgb25QbGF5KVxuICBwbGF5ZXIub24oJ3BhdXNlJywgb25TdG9wKVxuICBwbGF5ZXIub24oJ3N0b3AnLCBvblN0b3ApXG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9saWIvdmlkZW8uanNcbiAqKi8iLCIvKiEgQHZpbWVvL3BsYXllciB2MS4wLjQgfCAoYykgMjAxNiBWaW1lbyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3ZpbWVvL3BsYXllci5qcyAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGUuVmltZW89ZS5WaW1lb3x8e30sZS5WaW1lby5QbGF5ZXI9dCgpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSx0KXtyZXR1cm4gdD17ZXhwb3J0czp7fX0sZSh0LHQuZXhwb3J0cyksdC5leHBvcnRzfWZ1bmN0aW9uIHQoZSx0LG4pe3ZhciByPVQuZ2V0KGUuZWxlbWVudCl8fHt9O3QgaW4gcnx8KHJbdF09W10pLHJbdF0ucHVzaChuKSxULnNldChlLmVsZW1lbnQscil9ZnVuY3Rpb24gbihlLHQpe3ZhciBuPVQuZ2V0KGUuZWxlbWVudCl8fHt9O3JldHVybiBuW3RdfHxbXX1mdW5jdGlvbiByKGUsdCxuKXt2YXIgcj1ULmdldChlLmVsZW1lbnQpfHx7fTtpZighclt0XSlyZXR1cm4hMDtpZighbilyZXR1cm4gclt0XT1bXSxULnNldChlLmVsZW1lbnQsciksITA7dmFyIG89clt0XS5pbmRleE9mKG4pO3JldHVybiBvIT09LTEmJnJbdF0uc3BsaWNlKG8sMSksVC5zZXQoZS5lbGVtZW50LHIpLHJbdF0mJjA9PT1yW3RdLmxlbmd0aH1mdW5jdGlvbiBvKGUsdCl7dmFyIG49VC5nZXQoZSk7VC5zZXQodCxuKSxULmRlbGV0ZShlKX1mdW5jdGlvbiBpKGUsdCl7cmV0dXJuIDA9PT1lLmluZGV4T2YodC50b0xvd2VyQ2FzZSgpKT9lOlwiXCIrdC50b0xvd2VyQ2FzZSgpK2Uuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStlLnN1YnN0cigxKX1mdW5jdGlvbiBhKGUpe3JldHVybiBlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50fWZ1bmN0aW9uIHUoZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKSYmTWF0aC5mbG9vcihlKT09ZX1mdW5jdGlvbiBzKGUpe3JldHVybi9eKGh0dHBzPzopP1xcL1xcLyhwbGF5ZXIuKT92aW1lby5jb20vLnRlc3QoZSl9ZnVuY3Rpb24gYygpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT97fTphcmd1bWVudHNbMF0sdD1lLmlkLG49ZS51cmwscj10fHxuO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIkFuIGlkIG9yIHVybCBtdXN0IGJlIHBhc3NlZCwgZWl0aGVyIGluIGFuIG9wdGlvbnMgb2JqZWN0IG9yIGFzIGEgZGF0YS12aW1lby1pZCBvciBkYXRhLXZpbWVvLXVybCBhdHRyaWJ1dGUuXCIpO2lmKHUocikpcmV0dXJuXCJodHRwczovL3ZpbWVvLmNvbS9cIityO2lmKHMocikpcmV0dXJuIHIucmVwbGFjZShcImh0dHA6XCIsXCJodHRwczpcIik7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKFwi4oCcXCIrdCtcIuKAnSBpcyBub3QgYSB2YWxpZCB2aWRlbyBpZC5cIik7dGhyb3cgbmV3IFR5cGVFcnJvcihcIuKAnFwiK3IrXCLigJ0gaXMgbm90IGEgdmltZW8uY29tIHVybC5cIil9ZnVuY3Rpb24gZihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3t9OmFyZ3VtZW50c1sxXSxuPV8scj1BcnJheS5pc0FycmF5KG4pLG89MCxuPXI/bjpuW1N5bWJvbC5pdGVyYXRvcl0oKTs7KXt2YXIgaTtpZihyKXtpZihvPj1uLmxlbmd0aClicmVhaztpPW5bbysrXX1lbHNle2lmKG89bi5uZXh0KCksby5kb25lKWJyZWFrO2k9by52YWx1ZX12YXIgYT1pLHU9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpbWVvLVwiK2EpOyh1fHxcIlwiPT09dSkmJih0W2FdPVwiXCI9PT11PzE6dSl9cmV0dXJuIHR9ZnVuY3Rpb24gbChlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe2lmKCFzKGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCLigJxcIitlK1wi4oCdIGlzIG5vdCBhIHZpbWVvLmNvbSB1cmwuXCIpO3ZhciBvPVwiaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoZSk7Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmKG8rPVwiJlwiK2krXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRbaV0pKTt2YXIgYT1cIlhEb21haW5SZXF1ZXN0XCJpbiB3aW5kb3c/bmV3IFhEb21haW5SZXF1ZXN0Om5ldyBYTUxIdHRwUmVxdWVzdDthLm9wZW4oXCJHRVRcIixvLCEwKSxhLm9ubG9hZD1mdW5jdGlvbigpe2lmKDQwND09PWEuc3RhdHVzKXJldHVybiB2b2lkIHIobmV3IEVycm9yKFwi4oCcXCIrZStcIuKAnSB3YXMgbm90IGZvdW5kLlwiKSk7aWYoNDAzPT09YS5zdGF0dXMpcmV0dXJuIHZvaWQgcihuZXcgRXJyb3IoXCLigJxcIitlK1wi4oCdIGlzIG5vdCBlbWJlZGRhYmxlLlwiKSk7dHJ5e3ZhciB0PUpTT04ucGFyc2UoYS5yZXNwb25zZVRleHQpO24odCl9Y2F0Y2goZSl7cihlKX19LGEub25lcnJvcj1mdW5jdGlvbigpe3ZhciBlPWEuc3RhdHVzP1wiIChcIithLnN0YXR1cytcIilcIjpcIlwiO3IobmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBlbWJlZCBjb2RlIGZyb20gVmltZW9cIitlK1wiLlwiKSl9LGEuc2VuZCgpfSl9ZnVuY3Rpb24gaChlLHQpe3ZhciBuPWUuaHRtbDtpZighdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQW4gZWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkXCIpO2lmKG51bGwhPT10LmdldEF0dHJpYnV0ZShcImRhdGEtdmltZW8taW5pdGlhbGl6ZWRcIikpcmV0dXJuIHQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3IuaW5uZXJIVE1MPW47dmFyIG89ci5maXJzdENoaWxkO3JldHVybiB0LmFwcGVuZENoaWxkKG8pLHQuc2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1pbml0aWFsaXplZFwiLFwidHJ1ZVwiKSxvfWZ1bmN0aW9uIGQoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/ZG9jdW1lbnQ6YXJndW1lbnRzWzBdLHQ9W10uc2xpY2UuY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS12aW1lby1pZF0sIFtkYXRhLXZpbWVvLXVybF1cIikpLG49ZnVuY3Rpb24oZSl7XCJjb25zb2xlXCJpbiB3aW5kb3cmJmNvbnNvbGUuZXJyb3ImJmNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYW4gZW1iZWQ6IFwiK2UpfSxyPWZ1bmN0aW9uKCl7aWYoaSl7aWYoYT49by5sZW5ndGgpcmV0dXJuXCJicmVha1wiO3U9b1thKytdfWVsc2V7aWYoYT1vLm5leHQoKSxhLmRvbmUpcmV0dXJuXCJicmVha1wiO3U9YS52YWx1ZX12YXIgZT11O3RyeXtpZihudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpbWVvLWRlZmVyXCIpKXJldHVyblwiY29udGludWVcIjt2YXIgdD1mKGUpLHI9Yyh0KTtsKHIsdCkudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gaCh0LGUpfSkuY2F0Y2gobil9Y2F0Y2goZSl7bihlKX19O2U6Zm9yKHZhciBvPXQsaT1BcnJheS5pc0FycmF5KG8pLGE9MCxvPWk/bzpvW1N5bWJvbC5pdGVyYXRvcl0oKTs7KXt2YXIgdSxzPXIoKTtzd2l0Y2gocyl7Y2FzZVwiYnJlYWtcIjpicmVhayBlO2Nhc2VcImNvbnRpbnVlXCI6Y29udGludWV9fX1mdW5jdGlvbiBwKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1KU09OLnBhcnNlKGUpKSxlfWZ1bmN0aW9uIHYoZSx0LG4pe2lmKGUuZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKXt2YXIgcj17bWV0aG9kOnR9O3ZvaWQgMCE9PW4mJihyLnZhbHVlPW4pO3ZhciBvPXBhcnNlRmxvYXQobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14uKm1zaWUgKFxcZCspLiokLyxcIiQxXCIpKTtvPj04JiZvPDEwJiYocj1KU09OLnN0cmluZ2lmeShyKSksZS5lbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UocixlLm9yaWdpbil9fWZ1bmN0aW9uIHkoZSx0KXt0PXAodCk7dmFyIG89W10saT12b2lkIDA7aWYodC5ldmVudCl7aWYoXCJlcnJvclwiPT09dC5ldmVudClmb3IodmFyIGE9bihlLHQuZGF0YS5tZXRob2QpLHU9YSxzPUFycmF5LmlzQXJyYXkodSksYz0wLHU9cz91OnVbU3ltYm9sLml0ZXJhdG9yXSgpOzspe3ZhciBmO2lmKHMpe2lmKGM+PXUubGVuZ3RoKWJyZWFrO2Y9dVtjKytdfWVsc2V7aWYoYz11Lm5leHQoKSxjLmRvbmUpYnJlYWs7Zj1jLnZhbHVlfXZhciBsPWYsaD1uZXcgRXJyb3IodC5kYXRhLm1lc3NhZ2UpO2gubmFtZT10LmRhdGEubmFtZSxsLnJlamVjdChoKSxyKGUsdC5kYXRhLm1ldGhvZCxsKX1vPW4oZSxcImV2ZW50OlwiK3QuZXZlbnQpLGk9dC5kYXRhfWVsc2UgdC5tZXRob2QmJihvPW4oZSx0Lm1ldGhvZCksaT10LnZhbHVlLHIoZSx0Lm1ldGhvZCkpO2Zvcih2YXIgZD1vLHY9QXJyYXkuaXNBcnJheShkKSx5PTAsZD12P2Q6ZFtTeW1ib2wuaXRlcmF0b3JdKCk7Oyl7dmFyIG07aWYodil7aWYoeT49ZC5sZW5ndGgpYnJlYWs7bT1kW3krK119ZWxzZXtpZih5PWQubmV4dCgpLHkuZG9uZSlicmVhazttPXkudmFsdWV9dmFyIGc9bTt0cnl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZyl7Zy5jYWxsKGUsaSk7Y29udGludWV9Zy5yZXNvbHZlKGkpfWNhdGNoKGUpe319fXZhciBtPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZixnPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cucG9zdE1lc3NhZ2U7aWYoIW18fCFnKXRocm93IG5ldyBFcnJvcihcIlNvcnJ5LCB0aGUgVmltZW8gUGxheWVyIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3Nlci5cIik7dmFyIHc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fSxiPShlKGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSx0KXtmdW5jdGlvbiByKGUpe3JldHVybiB0aGlzJiZ0aGlzLmNvbnN0cnVjdG9yPT09cj8odGhpcy5fa2V5cz1bXSx0aGlzLl92YWx1ZXM9W10sdGhpcy5faXRwPVtdLHRoaXMub2JqZWN0T25seT10LHZvaWQoZSYmbi5jYWxsKHRoaXMsZSkpKTpuZXcgcihlKX1yZXR1cm4gdHx8dyhlLFwic2l6ZVwiLHtnZXQ6eX0pLGUuY29uc3RydWN0b3I9cixyLnByb3RvdHlwZT1lLHJ9ZnVuY3Rpb24gbihlKXt0aGlzLmFkZD9lLmZvckVhY2godGhpcy5hZGQsdGhpcyk6ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RoaXMuc2V0KGVbMF0sZVsxXSl9LHRoaXMpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIHRoaXMuaGFzKGUpJiYodGhpcy5fa2V5cy5zcGxpY2UoZywxKSx0aGlzLl92YWx1ZXMuc3BsaWNlKGcsMSksdGhpcy5faXRwLmZvckVhY2goZnVuY3Rpb24oZSl7ZzxlWzBdJiZlWzBdLS19KSksLTE8Z31mdW5jdGlvbiBvKGUpe3JldHVybiB0aGlzLmhhcyhlKT90aGlzLl92YWx1ZXNbZ106dm9pZCAwfWZ1bmN0aW9uIGkoZSx0KXtpZih0aGlzLm9iamVjdE9ubHkmJnQhPT1PYmplY3QodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdmFsdWUgdXNlZCBhcyB3ZWFrIGNvbGxlY3Rpb24ga2V5XCIpO2lmKHQhPXR8fDA9PT10KWZvcihnPWUubGVuZ3RoO2ctLSYmIWIoZVtnXSx0KTspO2Vsc2UgZz1lLmluZGV4T2YodCk7cmV0dXJuLTE8Z31mdW5jdGlvbiBhKGUpe3JldHVybiBpLmNhbGwodGhpcyx0aGlzLl92YWx1ZXMsZSl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gaS5jYWxsKHRoaXMsdGhpcy5fa2V5cyxlKX1mdW5jdGlvbiBzKGUsdCl7cmV0dXJuIHRoaXMuaGFzKGUpP3RoaXMuX3ZhbHVlc1tnXT10OnRoaXMuX3ZhbHVlc1t0aGlzLl9rZXlzLnB1c2goZSktMV09dCx0aGlzfWZ1bmN0aW9uIGMoZSl7cmV0dXJuIHRoaXMuaGFzKGUpfHx0aGlzLl92YWx1ZXMucHVzaChlKSx0aGlzfWZ1bmN0aW9uIGYoKXsodGhpcy5fa2V5c3x8MCkubGVuZ3RoPXRoaXMuX3ZhbHVlcy5sZW5ndGg9MH1mdW5jdGlvbiBsKCl7cmV0dXJuIHYodGhpcy5faXRwLHRoaXMuX2tleXMpfWZ1bmN0aW9uIGgoKXtyZXR1cm4gdih0aGlzLl9pdHAsdGhpcy5fdmFsdWVzKX1mdW5jdGlvbiBkKCl7cmV0dXJuIHYodGhpcy5faXRwLHRoaXMuX2tleXMsdGhpcy5fdmFsdWVzKX1mdW5jdGlvbiBwKCl7cmV0dXJuIHYodGhpcy5faXRwLHRoaXMuX3ZhbHVlcyx0aGlzLl92YWx1ZXMpfWZ1bmN0aW9uIHYoZSx0LG4pe3ZhciByPVswXSxvPSExO3JldHVybiBlLnB1c2gocikse25leHQ6ZnVuY3Rpb24oKXt2YXIgaSxhPXJbMF07cmV0dXJuIW8mJmE8dC5sZW5ndGg/KGk9bj9bdFthXSxuW2FdXTp0W2FdLHJbMF0rKyk6KG89ITAsZS5zcGxpY2UoZS5pbmRleE9mKHIpLDEpKSx7ZG9uZTpvLHZhbHVlOml9fX19ZnVuY3Rpb24geSgpe3JldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RofWZ1bmN0aW9uIG0oZSx0KXtmb3IodmFyIG49dGhpcy5lbnRyaWVzKCk7Oyl7dmFyIHI9bi5uZXh0KCk7aWYoci5kb25lKWJyZWFrO2UuY2FsbCh0LHIudmFsdWVbMV0sci52YWx1ZVswXSx0aGlzKX19dmFyIGcsdz1PYmplY3QuZGVmaW5lUHJvcGVydHksYj1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dHx8ZSE9PWUmJnQhPT10fTtcInVuZGVmaW5lZFwiPT10eXBlb2YgV2Vha01hcCYmKGUuV2Vha01hcD10KHtkZWxldGU6cixjbGVhcjpmLGdldDpvLGhhczp1LHNldDpzfSwhMCkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG5ldyBNYXApLnZhbHVlcyYmKG5ldyBNYXApLnZhbHVlcygpLm5leHR8fChlLk1hcD10KHtkZWxldGU6cixoYXM6dSxnZXQ6byxzZXQ6cyxrZXlzOmwsdmFsdWVzOmgsZW50cmllczpkLGZvckVhY2g6bSxjbGVhcjpmfSkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG5ldyBTZXQpLnZhbHVlcyYmKG5ldyBTZXQpLnZhbHVlcygpLm5leHR8fChlLlNldD10KHtoYXM6YSxhZGQ6YyxkZWxldGU6cixjbGVhcjpmLGtleXM6aCx2YWx1ZXM6aCxlbnRyaWVzOnAsZm9yRWFjaDptfSkpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBXZWFrU2V0JiYoZS5XZWFrU2V0PXQoe2RlbGV0ZTpyLGFkZDpjLGNsZWFyOmYsaGFzOmF9LCEwKSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygdz93OndpbmRvdyl9KSxlKGZ1bmN0aW9uKGUpeyFmdW5jdGlvbih0LG4scil7blt0XT1uW3RdfHxyKCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9blt0XTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShmdW5jdGlvbigpe3JldHVybiBuW3RdfSl9KFwiUHJvbWlzZVwiLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3P3c6dyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtoLmFkZChlLHQpLGx8fChsPXAoaC5kcmFpbikpfWZ1bmN0aW9uIHQoZSl7dmFyIHQsbj10eXBlb2YgZTtyZXR1cm4gbnVsbD09ZXx8XCJvYmplY3RcIiE9biYmXCJmdW5jdGlvblwiIT1ufHwodD1lLnRoZW4pLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnR9ZnVuY3Rpb24gbigpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGFpbi5sZW5ndGg7ZSsrKXIodGhpcywxPT09dGhpcy5zdGF0ZT90aGlzLmNoYWluW2VdLnN1Y2Nlc3M6dGhpcy5jaGFpbltlXS5mYWlsdXJlLHRoaXMuY2hhaW5bZV0pO3RoaXMuY2hhaW4ubGVuZ3RoPTB9ZnVuY3Rpb24gcihlLG4scil7dmFyIG8saTt0cnl7bj09PSExP3IucmVqZWN0KGUubXNnKToobz1uPT09ITA/ZS5tc2c6bi5jYWxsKHZvaWQgMCxlLm1zZyksbz09PXIucHJvbWlzZT9yLnJlamVjdChUeXBlRXJyb3IoXCJQcm9taXNlLWNoYWluIGN5Y2xlXCIpKTooaT10KG8pKT9pLmNhbGwobyxyLnJlc29sdmUsci5yZWplY3QpOnIucmVzb2x2ZShvKSl9Y2F0Y2goZSl7ci5yZWplY3QoZSl9fWZ1bmN0aW9uIG8ocil7dmFyIGEscz10aGlzO2lmKCFzLnRyaWdnZXJlZCl7cy50cmlnZ2VyZWQ9ITAscy5kZWYmJihzPXMuZGVmKTt0cnl7KGE9dChyKSk/ZShmdW5jdGlvbigpe3ZhciBlPW5ldyB1KHMpO3RyeXthLmNhbGwocixmdW5jdGlvbigpe28uYXBwbHkoZSxhcmd1bWVudHMpfSxmdW5jdGlvbigpe2kuYXBwbHkoZSxhcmd1bWVudHMpfSl9Y2F0Y2godCl7aS5jYWxsKGUsdCl9fSk6KHMubXNnPXIscy5zdGF0ZT0xLHMuY2hhaW4ubGVuZ3RoPjAmJmUobixzKSl9Y2F0Y2goZSl7aS5jYWxsKG5ldyB1KHMpLGUpfX19ZnVuY3Rpb24gaSh0KXt2YXIgcj10aGlzO3IudHJpZ2dlcmVkfHwoci50cmlnZ2VyZWQ9ITAsci5kZWYmJihyPXIuZGVmKSxyLm1zZz10LHIuc3RhdGU9MixyLmNoYWluLmxlbmd0aD4wJiZlKG4scikpfWZ1bmN0aW9uIGEoZSx0LG4scil7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspIWZ1bmN0aW9uKG8pe2UucmVzb2x2ZSh0W29dKS50aGVuKGZ1bmN0aW9uKGUpe24obyxlKX0scil9KG8pfWZ1bmN0aW9uIHUoZSl7dGhpcy5kZWY9ZSx0aGlzLnRyaWdnZXJlZD0hMX1mdW5jdGlvbiBzKGUpe3RoaXMucHJvbWlzZT1lLHRoaXMuc3RhdGU9MCx0aGlzLnRyaWdnZXJlZD0hMSx0aGlzLmNoYWluPVtdLHRoaXMubXNnPXZvaWQgMH1mdW5jdGlvbiBjKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7aWYoMCE9PXRoaXMuX19OUE9fXyl0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBwcm9taXNlXCIpO3RoaXMuX19OUE9fXz0xO3ZhciByPW5ldyBzKHRoaXMpO3RoaXMudGhlbj1mdW5jdGlvbih0LG8pe3ZhciBpPXtzdWNjZXNzOlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fHQsZmFpbHVyZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZvfTtyZXR1cm4gaS5wcm9taXNlPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtpLnJlc29sdmU9ZSxpLnJlamVjdD10fSksci5jaGFpbi5wdXNoKGkpLDAhPT1yLnN0YXRlJiZlKG4sciksaS5wcm9taXNlfSx0aGlzLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLGUpfTt0cnl7dC5jYWxsKHZvaWQgMCxmdW5jdGlvbihlKXtvLmNhbGwocixlKX0sZnVuY3Rpb24oZSl7aS5jYWxsKHIsZSl9KX1jYXRjaChlKXtpLmNhbGwocixlKX19dmFyIGYsbCxoLGQ9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxwPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZXRJbW1lZGlhdGU/ZnVuY3Rpb24oZSl7cmV0dXJuIHNldEltbWVkaWF0ZShlKX06c2V0VGltZW91dDt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwieFwiLHt9KSxmPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTpyIT09ITF9KX19Y2F0Y2goZSl7Zj1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGVbdF09bixlfX1oPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMuZm49ZSx0aGlzLnNlbGY9dCx0aGlzLm5leHQ9dm9pZCAwfXZhciB0LG4scjtyZXR1cm57YWRkOmZ1bmN0aW9uKG8saSl7cj1uZXcgZShvLGkpLG4/bi5uZXh0PXI6dD1yLG49cixyPXZvaWQgMH0sZHJhaW46ZnVuY3Rpb24oKXt2YXIgZT10O2Zvcih0PW49bD12b2lkIDA7ZTspZS5mbi5jYWxsKGUuc2VsZiksZT1lLm5leHR9fX0oKTt2YXIgdj1mKHt9LFwiY29uc3RydWN0b3JcIixjLCExKTtyZXR1cm4gYy5wcm90b3R5cGU9dixmKHYsXCJfX05QT19fXCIsMCwhMSksZihjLFwicmVzb2x2ZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYxPT09ZS5fX05QT19fP2U6bmV3IHQoZnVuY3Rpb24odCxuKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO3QoZSl9KX0pLGYoYyxcInJlamVjdFwiLGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdGhpcyhmdW5jdGlvbih0LG4pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7bihlKX0pfSksZihjLFwiYWxsXCIsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm5cIltvYmplY3QgQXJyYXldXCIhPWQuY2FsbChlKT90LnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpOjA9PT1lLmxlbmd0aD90LnJlc29sdmUoW10pOm5ldyB0KGZ1bmN0aW9uKG4scil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTt2YXIgbz1lLmxlbmd0aCxpPUFycmF5KG8pLHU9MDthKHQsZSxmdW5jdGlvbihlLHQpe2lbZV09dCwrK3U9PT1vJiZuKGkpfSxyKX0pfSksZihjLFwicmFjZVwiLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiIT1kLmNhbGwoZSk/dC5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTpuZXcgdChmdW5jdGlvbihuLHIpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG58fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7YSh0LGUsZnVuY3Rpb24oZSx0KXtuKHQpfSxyKX0pfSksY30pfSkpLEU9YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZGVmYXVsdFwiaW4gYj9iLmRlZmF1bHQ6YixUPW5ldyBXZWFrTWFwLF89W1wiaWRcIixcInVybFwiLFwid2lkdGhcIixcIm1heHdpZHRoXCIsXCJoZWlnaHRcIixcIm1heGhlaWdodFwiLFwicG9ydHJhaXRcIixcInRpdGxlXCIsXCJieWxpbmVcIixcImNvbG9yXCIsXCJhdXRvcGxheVwiLFwiYXV0b3BhdXNlXCIsXCJsb29wXCIsXCJyZXNwb25zaXZlXCJdLGs9ZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSx4PW5ldyBXZWFrTWFwLGo9bmV3IFdlYWtNYXAsUGxheWVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gUGxheWVyKGUpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdO2lmKGsodGhpcyxQbGF5ZXIpLHdpbmRvdy5qUXVlcnkmJmUgaW5zdGFuY2VvZiBqUXVlcnkmJihlLmxlbmd0aD4xJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oXCJBIGpRdWVyeSBvYmplY3Qgd2l0aCBtdWx0aXBsZSBlbGVtZW50cyB3YXMgcGFzc2VkLCB1c2luZyB0aGUgZmlyc3QgZWxlbWVudC5cIiksZT1lWzBdKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkpLCFhKGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGVpdGhlciBhIHZhbGlkIGVsZW1lbnQgb3IgYSB2YWxpZCBpZC5cIik7aWYoXCJJRlJBTUVcIiE9PWUubm9kZU5hbWUpe3ZhciByPWUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtyJiYoZT1yKX1pZihcIklGUkFNRVwiPT09ZS5ub2RlTmFtZSYmIXMoZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIil8fFwiXCIpKXRocm93IG5ldyBFcnJvcihcIlRoZSBwbGF5ZXIgZWxlbWVudCBwYXNzZWQgaXNu4oCZdCBhIFZpbWVvIGVtYmVkLlwiKTtpZih4LmhhcyhlKSlyZXR1cm4geC5nZXQoZSk7dGhpcy5lbGVtZW50PWUsdGhpcy5vcmlnaW49XCIqXCI7dmFyIGk9bmV3IEUoZnVuY3Rpb24ocixpKXt2YXIgYT1mdW5jdGlvbihlKXtpZihzKGUub3JpZ2luKSYmdC5lbGVtZW50LmNvbnRlbnRXaW5kb3c9PT1lLnNvdXJjZSl7XCIqXCI9PT10Lm9yaWdpbiYmKHQub3JpZ2luPWUub3JpZ2luKTt2YXIgbj1wKGUuZGF0YSksbz1cImV2ZW50XCJpbiBuJiZcInJlYWR5XCI9PT1uLmV2ZW50LGk9XCJtZXRob2RcImluIG4mJlwicGluZ1wiPT09bi5tZXRob2Q7cmV0dXJuIG98fGk/KHQuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlYWR5XCIsXCJ0cnVlXCIpLHZvaWQgcigpKTp2b2lkIHkodCxuKX19O2lmKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGEsITEpOndpbmRvdy5hdHRhY2hFdmVudCYmd2luZG93LmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsYSksXCJJRlJBTUVcIiE9PXQuZWxlbWVudC5ub2RlTmFtZSl7dmFyIHU9ZihlLG4pLGQ9Yyh1KTtsKGQsdSkudGhlbihmdW5jdGlvbihuKXt2YXIgcj1oKG4sZSk7cmV0dXJuIHQuZWxlbWVudD1yLG8oZSxyKSxufSkuY2F0Y2goZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSl9KX19KTtyZXR1cm4gai5zZXQodGhpcyxpKSx4LnNldCh0aGlzLmVsZW1lbnQsdGhpcyksXCJJRlJBTUVcIj09PXRoaXMuZWxlbWVudC5ub2RlTmFtZSYmdih0aGlzLFwicGluZ1wiKSx0aGlzfXJldHVybiBQbGF5ZXIucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP2Z1bmN0aW9uKCl7fTphcmd1bWVudHNbMV07cmV0dXJuIHRoaXMucmVhZHkoKS50aGVuKGUsdCl9LFBsYXllci5wcm90b3R5cGUuY2FsbE1ldGhvZD1mdW5jdGlvbihlKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3t9OmFyZ3VtZW50c1sxXTtyZXR1cm4gbmV3IEUoZnVuY3Rpb24obyxpKXtyZXR1cm4gbi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24oKXt0KG4sZSx7cmVzb2x2ZTpvLHJlamVjdDppfSksdihuLGUscil9KX0pfSxQbGF5ZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXt2YXIgbj10aGlzO3JldHVybiBuZXcgRShmdW5jdGlvbihyLG8pe3JldHVybiBlPWkoZSxcImdldFwiKSxuLnJlYWR5KCkudGhlbihmdW5jdGlvbigpe3QobixlLHtyZXNvbHZlOnIscmVqZWN0Om99KSx2KG4sZSl9KX0pfSxQbGF5ZXIucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLG4pe3ZhciByPXRoaXM7cmV0dXJuIEUucmVzb2x2ZShuKS50aGVuKGZ1bmN0aW9uKG4pe2lmKGU9aShlLFwic2V0XCIpLHZvaWQgMD09PW58fG51bGw9PT1uKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVyZSBtdXN0IGJlIGEgdmFsdWUgdG8gc2V0LlwiKTtyZXR1cm4gci5yZWFkeSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEUoZnVuY3Rpb24obyxpKXt0KHIsZSx7cmVzb2x2ZTpvLHJlamVjdDppfSksdihyLGUsbil9KX0pfSl9LFBsYXllci5wcm90b3R5cGUub249ZnVuY3Rpb24oZSxyKXtpZighZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBldmVudCBuYW1lLlwiKTtpZighcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlwiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTt2YXIgbz1uKHRoaXMsXCJldmVudDpcIitlKTswPT09by5sZW5ndGgmJnRoaXMuY2FsbE1ldGhvZChcImFkZEV2ZW50TGlzdGVuZXJcIixlKS5jYXRjaChmdW5jdGlvbigpe30pLHQodGhpcyxcImV2ZW50OlwiK2Uscil9LFBsYXllci5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gZXZlbnQgbmFtZS5cIik7aWYodCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7dmFyIG49cih0aGlzLFwiZXZlbnQ6XCIrZSx0KTtuJiZ0aGlzLmNhbGxNZXRob2QoXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsZSkuY2F0Y2goZnVuY3Rpb24oZSl7fSl9LFBsYXllci5wcm90b3R5cGUubG9hZFZpZGVvPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJsb2FkVmlkZW9cIixlKX0sUGxheWVyLnByb3RvdHlwZS5yZWFkeT1mdW5jdGlvbigpe3ZhciBlPWouZ2V0KHRoaXMpO3JldHVybiBFLnJlc29sdmUoZSl9LFBsYXllci5wcm90b3R5cGUuZW5hYmxlVGV4dFRyYWNrPWZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBsYW5ndWFnZS5cIik7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcImVuYWJsZVRleHRUcmFja1wiLHtsYW5ndWFnZTplLGtpbmQ6dH0pfSxQbGF5ZXIucHJvdG90eXBlLmRpc2FibGVUZXh0VHJhY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwiZGlzYWJsZVRleHRUcmFja1wiKX0sUGxheWVyLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJwYXVzZVwiKX0sUGxheWVyLnByb3RvdHlwZS5wbGF5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcInBsYXlcIil9LFBsYXllci5wcm90b3R5cGUudW5sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcInVubG9hZFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRBdXRvcGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJhdXRvcGF1c2VcIil9LFBsYXllci5wcm90b3R5cGUuc2V0QXV0b3BhdXNlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChcImF1dG9wYXVzZVwiLGUpfSxQbGF5ZXIucHJvdG90eXBlLmdldENvbG9yPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwiY29sb3JcIil9LFBsYXllci5wcm90b3R5cGUuc2V0Q29sb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2V0KFwiY29sb3JcIixlKX0sUGxheWVyLnByb3RvdHlwZS5nZXRDdXJyZW50VGltZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImN1cnJlbnRUaW1lXCIpfSxQbGF5ZXIucHJvdG90eXBlLnNldEN1cnJlbnRUaW1lPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChcImN1cnJlbnRUaW1lXCIsZSl9LFBsYXllci5wcm90b3R5cGUuZ2V0RHVyYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJkdXJhdGlvblwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRFbmRlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImVuZGVkXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldExvb3A9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJsb29wXCIpfSxQbGF5ZXIucHJvdG90eXBlLnNldExvb3A9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2V0KFwibG9vcFwiLGUpfSxQbGF5ZXIucHJvdG90eXBlLmdldFBhdXNlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInBhdXNlZFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRUZXh0VHJhY2tzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidGV4dFRyYWNrc1wiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb0VtYmVkQ29kZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvRW1iZWRDb2RlXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb0lkXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvVGl0bGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb1RpdGxlXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvV2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb1dpZHRoXCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvSGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9IZWlnaHRcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9Vcmw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb1VybFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWb2x1bWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2b2x1bWVcIil9LFBsYXllci5wcm90b3R5cGUuc2V0Vm9sdW1lPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChcInZvbHVtZVwiLGUpfSxQbGF5ZXJ9KCk7cmV0dXJuIGQoKSxQbGF5ZXJ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9AdmltZW8vcGxheWVyL2Rpc3QvcGxheWVyLm1pbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwidmFyIG5leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy9icm93c2VyLmpzJykubmV4dFRpY2s7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaW1tZWRpYXRlSWRzID0ge307XG52YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHsgdGltZW91dC5jbG9zZSgpOyB9O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBmdW5jdGlvbihmbikge1xuICB2YXIgaWQgPSBuZXh0SW1tZWRpYXRlSWQrKztcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGltbWVkaWF0ZUlkc1tpZF0gPSB0cnVlO1xuXG4gIG5leHRUaWNrKGZ1bmN0aW9uIG9uTmV4dFRpY2soKSB7XG4gICAgaWYgKGltbWVkaWF0ZUlkc1tpZF0pIHtcbiAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2VcbiAgICAgIC8vIEBzZWUgaHR0cDovL2pzcGVyZi5jb20vY2FsbC1hcHBseS1zZWd1XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgICAvLyBQcmV2ZW50IGlkcyBmcm9tIGxlYWtpbmdcbiAgICAgIGV4cG9ydHMuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuICBkZWxldGUgaW1tZWRpYXRlSWRzW2lkXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFmL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=