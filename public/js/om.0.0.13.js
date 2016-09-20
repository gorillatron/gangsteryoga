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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFiZWE5OWE2MDY2ZTY1Mzc0YTU/MmYxNioiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2xpYi92aWRlby5qcz9kYjc4Iiwid2VicGFjazovLy8uL34vQHZpbWVvL3BsYXllci9kaXN0L3BsYXllci5taW4uanM/ZGJhYyIsIndlYnBhY2s6Ly8vLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanM/YjA4OCIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcz84MmU0Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcz81ZjcxIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzPzAxMTciLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcz9iOGEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7Ozs7OztBQUdBLEdBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBTTs7QUFFckIsZUFBVyxhQUFLO0FBQ2IsU0FBRSxhQUFGLEVBQWlCLEdBQWpCLENBQXFCLFNBQXJCLEVBQWdDLENBQWhDLEVBRGE7S0FBTCxFQUVQLEVBRkosRUFGcUI7O0FBTXBCLHlCQUFNLEVBQUUsUUFBRixDQUFOLEVBTm9CO0VBQU4sQ0FBbEIsQzs7Ozs7Ozs7Ozs7O21CQ0FlLFVBQVMsT0FBVCxFQUFrQjs7QUFFL0IsT0FBTSxhQUFhLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBYixDQUZ5QjtBQUcvQixPQUFNLFlBQVksUUFBUSxJQUFSLENBQWEsYUFBYixDQUFaLENBSHlCO0FBSS9CLE9BQU0sUUFBUSxPQUFSLENBSnlCO0FBSy9CLE9BQU0sYUFBYSxRQUFRLElBQVIsQ0FBYSxRQUFiLENBQWIsQ0FMeUI7QUFNL0IsT0FBTSxTQUFTLHFCQUFXLFVBQVgsQ0FBVCxDQU55Qjs7QUFRL0IsY0FBVyxLQUFYLENBQWlCLFlBQU07QUFDckIsZ0JBQVc7Y0FBTSxPQUFPLElBQVA7TUFBTixFQUFxQixFQUFoQyxFQURxQjtJQUFOLENBQWpCLENBUitCOztBQVkvQixPQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsd0JBQUk7Y0FBTSxXQUFXLFFBQVgsQ0FBb0IsTUFBcEI7TUFBTixDQUFKLENBRG1CO0FBRW5CLHdCQUFJO2NBQU0sVUFBVSxRQUFWLENBQW1CLFFBQW5CO01BQU4sQ0FBSixDQUZtQjtBQUduQix3QkFBSTtjQUFNLE1BQU0sUUFBTixDQUFlLFNBQWY7TUFBTixDQUFKLENBSG1CO0FBSW5CLHdCQUFJO2NBQU0sV0FBVyxXQUFYLENBQXVCLFFBQXZCO01BQU4sQ0FBSixDQUptQjtBQUtuQixPQUFFLE1BQUYsRUFBVSxHQUFWLENBQWMsT0FBZCxFQUF1QjtjQUFNLE9BQU8sS0FBUDtNQUFOLENBQXZCLENBTG1CO0lBQU4sQ0FaZ0I7O0FBb0IvQixPQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsd0JBQUk7Y0FBTSxNQUFNLFdBQU4sQ0FBa0IsU0FBbEI7TUFBTixDQUFKLENBRG1CO0FBRW5CLHdCQUFJO2NBQU0sVUFBVSxXQUFWLENBQXNCLFFBQXRCO01BQU4sQ0FBSixDQUZtQjtJQUFOLENBcEJnQjs7QUF5Qi9CLFVBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUF6QitCO0FBMEIvQixVQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLE1BQW5CLEVBMUIrQjtBQTJCL0IsVUFBTyxFQUFQLENBQVUsTUFBVixFQUFrQixNQUFsQixFQTNCK0I7RUFBbEI7O0FBSGY7Ozs7QUFDQTs7Ozs7Ozs7OzttQ0NGQTtBQUNBLGdCQUFlLDZGQUE0SSxxQkFBcUIsaUJBQWlCLGFBQWEsZ0JBQWdCLFVBQVUsV0FBVywwQkFBMEIsa0JBQWtCLDJCQUEyQixrREFBa0QsZ0JBQWdCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsMkNBQTJDLHNCQUFzQix5RUFBeUUsZ0JBQWdCLGVBQWUsdUJBQXVCLGdCQUFnQixtR0FBbUcsY0FBYyx1Q0FBdUMsY0FBYywyREFBMkQsY0FBYywyREFBMkQsYUFBYSxtREFBbUQsb0NBQW9DLHFJQUFxSSxxQ0FBcUMsMkNBQTJDLDZEQUE2RCx1REFBdUQsY0FBYyx1REFBdUQscUVBQXFFLEVBQUUsTUFBTSxNQUFNLHFCQUFxQixTQUFTLEtBQUssMkJBQTJCLFVBQVUsMENBQTBDLCtCQUErQixTQUFTLGNBQWMsbURBQW1ELGNBQWMsaUNBQWlDLGdFQUFnRSxxRUFBcUUsNEVBQTRFLHNFQUFzRSx1Q0FBdUMscUVBQXFFLHlFQUF5RSxJQUFJLGlDQUFpQyxLQUFLLFNBQVMsTUFBTSxzQkFBc0Isb0NBQW9DLDRFQUE0RSxVQUFVLEVBQUUsZ0JBQWdCLGFBQWEseURBQXlELG9GQUFvRixvQ0FBb0MsMkhBQTJILGFBQWEsOEpBQThKLDZGQUE2RixjQUFjLE1BQU0sNkJBQTZCLFNBQVMsS0FBSyxtQ0FBbUMsVUFBVSxRQUFRLElBQUksOERBQThELGtCQUFrQix3QkFBd0IsY0FBYyxXQUFXLFNBQVMsT0FBTyxpRUFBaUUsRUFBRSxZQUFZLFVBQVUsb0JBQW9CLDBCQUEwQixjQUFjLDhDQUE4QyxrQkFBa0Isd0NBQXdDLE9BQU8sVUFBVSx3QkFBd0IscUZBQXFGLG1GQUFtRixnQkFBZ0IsT0FBTyxrQkFBa0IsWUFBWSx5R0FBeUcsRUFBRSxNQUFNLE1BQU0scUJBQXFCLFNBQVMsS0FBSywyQkFBMkIsVUFBVSxvQ0FBb0Msb0RBQW9ELGlDQUFpQyx5REFBeUQsK0RBQStELEVBQUUsTUFBTSxNQUFNLHFCQUFxQixTQUFTLEtBQUssMkJBQTJCLFVBQVUsUUFBUSxJQUFJLHlCQUF5QixZQUFZLFNBQVMsYUFBYSxZQUFZLDJGQUEyRiwyRkFBMkYsMEdBQTBHLG9CQUFvQixhQUFhLGdCQUFnQixjQUFjLGtJQUFrSSxzQkFBc0IsTUFBTSxrQ0FBa0MsY0FBYyx3REFBd0Qsb0JBQW9CLE9BQU8sY0FBYyxtR0FBbUcsZUFBZSxRQUFRLGNBQWMsMENBQTBDLGdCQUFnQixtR0FBbUcsOEJBQThCLGdCQUFnQixFQUFFLG9CQUFvQixXQUFXLGNBQWMsbUNBQW1DLGNBQWMsaUNBQWlDLGdCQUFnQiwrRUFBK0UsY0FBYyw4Q0FBOEMsYUFBYSw2Q0FBNkMsYUFBYSwrQkFBK0IsYUFBYSxpQ0FBaUMsYUFBYSw0Q0FBNEMsYUFBYSw4Q0FBOEMsa0JBQWtCLGVBQWUsa0JBQWtCLGdCQUFnQixhQUFhLG9GQUFvRixrQkFBa0IsYUFBYSwyQkFBMkIsZ0JBQWdCLDBCQUEwQixFQUFFLGVBQWUsZ0JBQWdCLHNDQUFzQyw4Q0FBOEMsNEJBQTRCLDJDQUEyQyxtQ0FBbUMsc0dBQXNHLHVFQUF1RSxtR0FBbUcsaUVBQWlFLDhDQUE4Qyw2QkFBNkIsTUFBTSx3REFBd0QsZ0JBQWdCLGlCQUFpQiw0SkFBd0gsWUFBWSx1SkFBRSxnREFBZ0QsZ0JBQWdCLDZCQUE2QixjQUFjLGlCQUFpQiwrRUFBK0UsYUFBYSxZQUFZLG9CQUFvQixxRkFBcUYsb0JBQW9CLGtCQUFrQixRQUFRLElBQUkseUtBQXlLLFNBQVMsYUFBYSxjQUFjLGFBQWEsaUJBQWlCLGdDQUFnQyxJQUFJLHNCQUFzQixlQUFlLElBQUksb0JBQW9CLHFCQUFxQixZQUFZLHFCQUFxQixFQUFFLFNBQVMsYUFBYSwrQ0FBK0MsU0FBUyxxQkFBcUIsY0FBYyxXQUFXLDBGQUEwRixvQkFBb0IsWUFBWSxXQUFXLGlCQUFpQixpQ0FBaUMsT0FBTyxJQUFJLElBQUksY0FBYyw2QkFBNkIsY0FBYyw0RUFBNEUsY0FBYywwREFBMEQscURBQXFELGVBQWUsa0JBQWtCLHdCQUF3QixPQUFPLGlFQUFpRSxvREFBb0QsZ0ZBQWdGLHVCQUF1QixnREFBZ0Qsd0JBQXdCLDRCQUE0QixJQUFJLDBCQUEwQixZQUFZLGFBQWEsWUFBWSxFQUFFLFNBQVMsYUFBYSxxRkFBcUYsdUJBQXVCLFlBQVksSUFBSSx3QkFBd0IsT0FBTyxzQkFBc0Isa0NBQWtDLHdDQUF3QyxHQUFHLFNBQVMsa0JBQWtCLGlCQUFpQixhQUFhLGdCQUFnQix1Q0FBdUMsVUFBVSxPQUFPLGtCQUFrQix5Q0FBeUMsa0JBQWtCLFFBQVEsaUJBQWlCLEVBQUUsOEJBQThCLEdBQUcsVUFBVSxxQkFBcUIsbUVBQW1FLFdBQVcsa0VBQWtFLGdGQUFnRixLQUFLLEVBQUUsMkJBQTJCLDhCQUE4QixnRkFBZ0YsS0FBSyxFQUFFLHdCQUF3QixXQUFXLHFIQUFxSCxnRkFBZ0YsOEJBQThCLG9CQUFvQixxQkFBcUIsSUFBSSxFQUFFLHlCQUF5QixXQUFXLDBGQUEwRixnRkFBZ0Ysb0JBQW9CLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRSwwTkFBME4sOEVBQThFLCtDQUErQyxtQkFBbUIsMERBQTBELGNBQWMseVVBQXlVLDBCQUEwQixnQ0FBZ0MsU0FBUywwSEFBMEgsNEJBQTRCLCtCQUErQiwwQkFBMEIsa0JBQWtCLG9EQUFvRCxvQ0FBb0MsbUZBQW1GLGlGQUFpRix3SkFBd0osb0JBQW9CLHdCQUF3QixhQUFhLDRCQUE0QixvQkFBb0IsWUFBWSxHQUFHLEVBQUUsb0dBQW9HLHlDQUF5Qyw2REFBNkQsY0FBYyw4QkFBOEIseUNBQXlDLDBEQUEwRCxjQUFjLDJCQUEyQixpQ0FBaUMsT0FBTyxtQkFBbUIsV0FBVyxFQUFFLEVBQUUsa0NBQWtDLFdBQVcsMkJBQTJCLDhDQUE4QyxPQUFPLG1CQUFtQixTQUFTLEVBQUUsRUFBRSxvQ0FBb0MsV0FBVyxxQ0FBcUMsMEZBQTBGLGlDQUFpQywyQkFBMkIsT0FBTyxtQkFBbUIsV0FBVyxFQUFFLEVBQUUsRUFBRSxtQ0FBbUMsMERBQTBELGdFQUFnRSxnRkFBZ0YseUJBQXlCLHNFQUFzRSx1QkFBdUIsb0NBQW9DLDBEQUEwRCxtRkFBbUYsMkJBQTJCLCtEQUErRCxFQUFFLHdDQUF3QyxzQ0FBc0MsbUNBQW1DLGtCQUFrQixvQkFBb0IsZ0RBQWdELHVEQUF1RCwwQ0FBMEMsa0JBQWtCLEVBQUUsOENBQThDLDJDQUEyQyxtQ0FBbUMsZ0NBQWdDLGtDQUFrQywrQkFBK0Isb0NBQW9DLGlDQUFpQywwQ0FBMEMsNkJBQTZCLDJDQUEyQywrQkFBK0Isc0NBQXNDLHlCQUF5Qix1Q0FBdUMsMkJBQTJCLDRDQUE0QywrQkFBK0IsNkNBQTZDLGlDQUFpQyx5Q0FBeUMsNEJBQTRCLHNDQUFzQyx5QkFBeUIscUNBQXFDLHdCQUF3QixzQ0FBc0MsMEJBQTBCLHVDQUF1QywwQkFBMEIsMkNBQTJDLDhCQUE4QiwrQ0FBK0Msa0NBQWtDLHdDQUF3QywyQkFBMkIsMkNBQTJDLDhCQUE4QiwyQ0FBMkMsOEJBQThCLDRDQUE0QywrQkFBK0IseUNBQXlDLDRCQUE0Qix1Q0FBdUMsMEJBQTBCLHdDQUF3Qyw0QkFBNEIsUUFBUSxHQUFHLGtCQUFrQixFOzs7Ozs7O0FDRHh0ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLGlCQUFpQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUMxRnRDOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixzQ0FBcUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUMiLCJmaWxlIjoib20uMC4wLjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWJlYTk5YTYwNjZlNjUzNzRhNVxuICoqLyIsIlxyXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi4vLi4vbGliL3ZpZGVvJ1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcbiAgIHNldFRpbWVvdXQoXyA9PiB7XHJcbiAgICAgICQoXCIjZnJvbnQtcGFnZVwiKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgfSwgNjYpXHJcblxyXG4gICAgdmlkZW8oJCgnLnZpZGVvJykpXHJcbn0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2VudHJpZXMvb20vaW5kZXguanNcbiAqKi8iLCJcclxuaW1wb3J0IFBsYXllciBmcm9tICdAdmltZW8vcGxheWVyJ1xyXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZpZGVvZWwpIHtcclxuXHJcbiAgY29uc3QgcGxheUJ1dHRvbiA9IHZpZGVvZWwuZmluZCgnLnBsYXktYnV0dG9uJylcclxuICBjb25zdCBtb3ZpZU1vZGUgPSB2aWRlb2VsLmZpbmQoJy5tb3ZpZS1tb2RlJylcclxuICBjb25zdCB2aWRlbyA9IHZpZGVvZWxcclxuICBjb25zdCB2aWRlb0ZyYW1lID0gdmlkZW9lbC5maW5kKCdpZnJhbWUnKVxyXG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIodmlkZW9GcmFtZSlcclxuXHJcbiAgcGxheUJ1dHRvbi5jbGljaygoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBsYXllci5wbGF5KCksIDMzKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uUGxheSA9ICgpID0+IHtcclxuICAgIHJhZigoKSA9PiBwbGF5QnV0dG9uLmFkZENsYXNzKCdoaWRlJykpXHJcbiAgICByYWYoKCkgPT4gbW92aWVNb2RlLmFkZENsYXNzKCdhY3RpdmUnKSlcclxuICAgIHJhZigoKSA9PiB2aWRlby5hZGRDbGFzcygncGxheWluZycpKVxyXG4gICAgcmFmKCgpID0+IHZpZGVvRnJhbWUucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpKVxyXG4gICAgJCgnYm9keScpLm9uZSgnY2xpY2snLCAoKSA9PiBwbGF5ZXIucGF1c2UoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3RvcCA9ICgpID0+IHtcclxuICAgIHJhZigoKSA9PiB2aWRlby5yZW1vdmVDbGFzcygncGxheWluZycpKVxyXG4gICAgcmFmKCgpID0+IG1vdmllTW9kZS5yZW1vdmVDbGFzcygnYWN0aXZlJykpXHJcbiAgfVxyXG5cclxuICBwbGF5ZXIub24oJ3BsYXknLCBvblBsYXkpXHJcbiAgcGxheWVyLm9uKCdwYXVzZScsIG9uU3RvcClcclxuICBwbGF5ZXIub24oJ3N0b3AnLCBvblN0b3ApXHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvbGliL3ZpZGVvLmpzXG4gKiovIiwiLyohIEB2aW1lby9wbGF5ZXIgdjEuMC42IHwgKGMpIDIwMTYgVmltZW8gfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS92aW1lby9wbGF5ZXIuanMgKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlLlZpbWVvPWUuVmltZW98fHt9LGUuVmltZW8uUGxheWVyPXQoKSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7cmV0dXJuIHQ9e2V4cG9ydHM6e319LGUodCx0LmV4cG9ydHMpLHQuZXhwb3J0c31mdW5jdGlvbiB0KGUsdCxuKXt2YXIgcj1ULmdldChlLmVsZW1lbnQpfHx7fTt0IGluIHJ8fChyW3RdPVtdKSxyW3RdLnB1c2gobiksVC5zZXQoZS5lbGVtZW50LHIpfWZ1bmN0aW9uIG4oZSx0KXt2YXIgbj1ULmdldChlLmVsZW1lbnQpfHx7fTtyZXR1cm4gblt0XXx8W119ZnVuY3Rpb24gcihlLHQsbil7dmFyIHI9VC5nZXQoZS5lbGVtZW50KXx8e307aWYoIXJbdF0pcmV0dXJuITA7aWYoIW4pcmV0dXJuIHJbdF09W10sVC5zZXQoZS5lbGVtZW50LHIpLCEwO3ZhciBvPXJbdF0uaW5kZXhPZihuKTtyZXR1cm4gbyE9PS0xJiZyW3RdLnNwbGljZShvLDEpLFQuc2V0KGUuZWxlbWVudCxyKSxyW3RdJiYwPT09clt0XS5sZW5ndGh9ZnVuY3Rpb24gbyhlLHQpe3ZhciBuPVQuZ2V0KGUpO1Quc2V0KHQsbiksVC5kZWxldGUoZSl9ZnVuY3Rpb24gaShlLHQpe3JldHVybiAwPT09ZS5pbmRleE9mKHQudG9Mb3dlckNhc2UoKSk/ZTpcIlwiK3QudG9Mb3dlckNhc2UoKStlLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSl9ZnVuY3Rpb24gYShlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudH1mdW5jdGlvbiB1KGUpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGUpKSYmaXNGaW5pdGUoZSkmJk1hdGguZmxvb3IoZSk9PWV9ZnVuY3Rpb24gcyhlKXtyZXR1cm4vXihodHRwcz86KT9cXC9cXC8ocGxheWVyLik/dmltZW8uY29tKD89JHxcXC8pLy50ZXN0KGUpfWZ1bmN0aW9uIGMoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLHQ9ZS5pZCxuPWUudXJsLHI9dHx8bjtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJBbiBpZCBvciB1cmwgbXVzdCBiZSBwYXNzZWQsIGVpdGhlciBpbiBhbiBvcHRpb25zIG9iamVjdCBvciBhcyBhIGRhdGEtdmltZW8taWQgb3IgZGF0YS12aW1lby11cmwgYXR0cmlidXRlLlwiKTtpZih1KHIpKXJldHVyblwiaHR0cHM6Ly92aW1lby5jb20vXCIrcjtpZihzKHIpKXJldHVybiByLnJlcGxhY2UoXCJodHRwOlwiLFwiaHR0cHM6XCIpO2lmKHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIuKAnFwiK3QrXCLigJ0gaXMgbm90IGEgdmFsaWQgdmlkZW8gaWQuXCIpO3Rocm93IG5ldyBUeXBlRXJyb3IoXCLigJxcIityK1wi4oCdIGlzIG5vdCBhIHZpbWVvLmNvbSB1cmwuXCIpfWZ1bmN0aW9uIGYoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV0sbj1fLHI9QXJyYXkuaXNBcnJheShuKSxvPTAsbj1yP246bltTeW1ib2wuaXRlcmF0b3JdKCk7Oyl7dmFyIGk7aWYocil7aWYobz49bi5sZW5ndGgpYnJlYWs7aT1uW28rK119ZWxzZXtpZihvPW4ubmV4dCgpLG8uZG9uZSlicmVhaztpPW8udmFsdWV9dmFyIGE9aSx1PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1cIithKTsodXx8XCJcIj09PXUpJiYodFthXT1cIlwiPT09dT8xOnUpfXJldHVybiB0fWZ1bmN0aW9uIGwoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3t9OmFyZ3VtZW50c1sxXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXtpZighcyhlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwi4oCcXCIrZStcIuKAnSBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKTt2YXIgbz1cImh0dHBzOi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGUpO2Zvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJihvKz1cIiZcIitpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0W2ldKSk7dmFyIGE9XCJYRG9tYWluUmVxdWVzdFwiaW4gd2luZG93P25ldyBYRG9tYWluUmVxdWVzdDpuZXcgWE1MSHR0cFJlcXVlc3Q7YS5vcGVuKFwiR0VUXCIsbywhMCksYS5vbmxvYWQ9ZnVuY3Rpb24oKXtpZig0MDQ9PT1hLnN0YXR1cylyZXR1cm4gdm9pZCByKG5ldyBFcnJvcihcIuKAnFwiK2UrXCLigJ0gd2FzIG5vdCBmb3VuZC5cIikpO2lmKDQwMz09PWEuc3RhdHVzKXJldHVybiB2b2lkIHIobmV3IEVycm9yKFwi4oCcXCIrZStcIuKAnSBpcyBub3QgZW1iZWRkYWJsZS5cIikpO3RyeXt2YXIgdD1KU09OLnBhcnNlKGEucmVzcG9uc2VUZXh0KTtuKHQpfWNhdGNoKGUpe3IoZSl9fSxhLm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgZT1hLnN0YXR1cz9cIiAoXCIrYS5zdGF0dXMrXCIpXCI6XCJcIjtyKG5ldyBFcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZW1iZWQgY29kZSBmcm9tIFZpbWVvXCIrZStcIi5cIikpfSxhLnNlbmQoKX0pfWZ1bmN0aW9uIGgoZSx0KXt2YXIgbj1lLmh0bWw7aWYoIXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFuIGVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZFwiKTtpZihudWxsIT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpbWVvLWluaXRpYWxpemVkXCIpKXJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIik7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gci5pbm5lckhUTUw9bix0LmFwcGVuZENoaWxkKHIuZmlyc3RDaGlsZCksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpbWVvLWluaXRpYWxpemVkXCIsXCJ0cnVlXCIpLHQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKX1mdW5jdGlvbiBkKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP2RvY3VtZW50OmFyZ3VtZW50c1swXSx0PVtdLnNsaWNlLmNhbGwoZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmltZW8taWRdLCBbZGF0YS12aW1lby11cmxdXCIpKSxuPWZ1bmN0aW9uKGUpe1wiY29uc29sZVwiaW4gd2luZG93JiZjb25zb2xlLmVycm9yJiZjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIGFuIGVtYmVkOiBcIitlKX0scj1mdW5jdGlvbigpe2lmKGkpe2lmKGE+PW8ubGVuZ3RoKXJldHVyblwiYnJlYWtcIjt1PW9bYSsrXX1lbHNle2lmKGE9by5uZXh0KCksYS5kb25lKXJldHVyblwiYnJlYWtcIjt1PWEudmFsdWV9dmFyIGU9dTt0cnl7aWYobnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1kZWZlclwiKSlyZXR1cm5cImNvbnRpbnVlXCI7dmFyIHQ9ZihlKSxyPWModCk7bChyLHQpLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIGgodCxlKX0pLmNhdGNoKG4pfWNhdGNoKGUpe24oZSl9fTtlOmZvcih2YXIgbz10LGk9QXJyYXkuaXNBcnJheShvKSxhPTAsbz1pP286b1tTeW1ib2wuaXRlcmF0b3JdKCk7Oyl7dmFyIHUscz1yKCk7c3dpdGNoKHMpe2Nhc2VcImJyZWFrXCI6YnJlYWsgZTtjYXNlXCJjb250aW51ZVwiOmNvbnRpbnVlfX19ZnVuY3Rpb24gcChlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksZX1mdW5jdGlvbiB2KGUsdCxuKXtpZihlLmVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSl7dmFyIHI9e21ldGhvZDp0fTt2b2lkIDAhPT1uJiYoci52YWx1ZT1uKTt2YXIgbz1wYXJzZUZsb2F0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eLiptc2llIChcXGQrKS4qJC8sXCIkMVwiKSk7bz49OCYmbzwxMCYmKHI9SlNPTi5zdHJpbmdpZnkocikpLGUuZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHIsZS5vcmlnaW4pfX1mdW5jdGlvbiB5KGUsdCl7dD1wKHQpO3ZhciBvPVtdLGk9dm9pZCAwO2lmKHQuZXZlbnQpe2lmKFwiZXJyb3JcIj09PXQuZXZlbnQpZm9yKHZhciBhPW4oZSx0LmRhdGEubWV0aG9kKSx1PWEscz1BcnJheS5pc0FycmF5KHUpLGM9MCx1PXM/dTp1W1N5bWJvbC5pdGVyYXRvcl0oKTs7KXt2YXIgZjtpZihzKXtpZihjPj11Lmxlbmd0aClicmVhaztmPXVbYysrXX1lbHNle2lmKGM9dS5uZXh0KCksYy5kb25lKWJyZWFrO2Y9Yy52YWx1ZX12YXIgbD1mLGg9bmV3IEVycm9yKHQuZGF0YS5tZXNzYWdlKTtoLm5hbWU9dC5kYXRhLm5hbWUsbC5yZWplY3QoaCkscihlLHQuZGF0YS5tZXRob2QsbCl9bz1uKGUsXCJldmVudDpcIit0LmV2ZW50KSxpPXQuZGF0YX1lbHNlIHQubWV0aG9kJiYobz1uKGUsdC5tZXRob2QpLGk9dC52YWx1ZSxyKGUsdC5tZXRob2QpKTtmb3IodmFyIGQ9byx2PUFycmF5LmlzQXJyYXkoZCkseT0wLGQ9dj9kOmRbU3ltYm9sLml0ZXJhdG9yXSgpOzspe3ZhciBtO2lmKHYpe2lmKHk+PWQubGVuZ3RoKWJyZWFrO209ZFt5KytdfWVsc2V7aWYoeT1kLm5leHQoKSx5LmRvbmUpYnJlYWs7bT15LnZhbHVlfXZhciBnPW07dHJ5e2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGcpe2cuY2FsbChlLGkpO2NvbnRpbnVlfWcucmVzb2x2ZShpKX1jYXRjaChlKXt9fX12YXIgbT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YsZz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LnBvc3RNZXNzYWdlO2lmKCFtfHwhZyl0aHJvdyBuZXcgRXJyb3IoXCJTb3JyeSwgdGhlIFZpbWVvIFBsYXllciBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIuXCIpO3ZhciB3PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e30sYj0oZShmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsdCl7ZnVuY3Rpb24gcihlKXtyZXR1cm4gdGhpcyYmdGhpcy5jb25zdHJ1Y3Rvcj09PXI/KHRoaXMuX2tleXM9W10sdGhpcy5fdmFsdWVzPVtdLHRoaXMuX2l0cD1bXSx0aGlzLm9iamVjdE9ubHk9dCx2b2lkKGUmJm4uY2FsbCh0aGlzLGUpKSk6bmV3IHIoZSl9cmV0dXJuIHR8fHcoZSxcInNpemVcIix7Z2V0Onl9KSxlLmNvbnN0cnVjdG9yPXIsci5wcm90b3R5cGU9ZSxyfWZ1bmN0aW9uIG4oZSl7dGhpcy5hZGQ/ZS5mb3JFYWNoKHRoaXMuYWRkLHRoaXMpOmUuZm9yRWFjaChmdW5jdGlvbihlKXt0aGlzLnNldChlWzBdLGVbMV0pfSx0aGlzKX1mdW5jdGlvbiByKGUpe3JldHVybiB0aGlzLmhhcyhlKSYmKHRoaXMuX2tleXMuc3BsaWNlKGcsMSksdGhpcy5fdmFsdWVzLnNwbGljZShnLDEpLHRoaXMuX2l0cC5mb3JFYWNoKGZ1bmN0aW9uKGUpe2c8ZVswXSYmZVswXS0tfSkpLC0xPGd9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gdGhpcy5oYXMoZSk/dGhpcy5fdmFsdWVzW2ddOnZvaWQgMH1mdW5jdGlvbiBpKGUsdCl7aWYodGhpcy5vYmplY3RPbmx5JiZ0IT09T2JqZWN0KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHZhbHVlIHVzZWQgYXMgd2VhayBjb2xsZWN0aW9uIGtleVwiKTtpZih0IT10fHwwPT09dClmb3IoZz1lLmxlbmd0aDtnLS0mJiFiKGVbZ10sdCk7KTtlbHNlIGc9ZS5pbmRleE9mKHQpO3JldHVybi0xPGd9ZnVuY3Rpb24gYShlKXtyZXR1cm4gaS5jYWxsKHRoaXMsdGhpcy5fdmFsdWVzLGUpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIGkuY2FsbCh0aGlzLHRoaXMuX2tleXMsZSl9ZnVuY3Rpb24gcyhlLHQpe3JldHVybiB0aGlzLmhhcyhlKT90aGlzLl92YWx1ZXNbZ109dDp0aGlzLl92YWx1ZXNbdGhpcy5fa2V5cy5wdXNoKGUpLTFdPXQsdGhpc31mdW5jdGlvbiBjKGUpe3JldHVybiB0aGlzLmhhcyhlKXx8dGhpcy5fdmFsdWVzLnB1c2goZSksdGhpc31mdW5jdGlvbiBmKCl7KHRoaXMuX2tleXN8fDApLmxlbmd0aD10aGlzLl92YWx1ZXMubGVuZ3RoPTB9ZnVuY3Rpb24gbCgpe3JldHVybiB2KHRoaXMuX2l0cCx0aGlzLl9rZXlzKX1mdW5jdGlvbiBoKCl7cmV0dXJuIHYodGhpcy5faXRwLHRoaXMuX3ZhbHVlcyl9ZnVuY3Rpb24gZCgpe3JldHVybiB2KHRoaXMuX2l0cCx0aGlzLl9rZXlzLHRoaXMuX3ZhbHVlcyl9ZnVuY3Rpb24gcCgpe3JldHVybiB2KHRoaXMuX2l0cCx0aGlzLl92YWx1ZXMsdGhpcy5fdmFsdWVzKX1mdW5jdGlvbiB2KGUsdCxuKXt2YXIgcj1bMF0sbz0hMTtyZXR1cm4gZS5wdXNoKHIpLHtuZXh0OmZ1bmN0aW9uKCl7dmFyIGksYT1yWzBdO3JldHVybiFvJiZhPHQubGVuZ3RoPyhpPW4/W3RbYV0sblthXV06dFthXSxyWzBdKyspOihvPSEwLGUuc3BsaWNlKGUuaW5kZXhPZihyKSwxKSkse2RvbmU6byx2YWx1ZTppfX19fWZ1bmN0aW9uIHkoKXtyZXR1cm4gdGhpcy5fdmFsdWVzLmxlbmd0aH1mdW5jdGlvbiBtKGUsdCl7Zm9yKHZhciBuPXRoaXMuZW50cmllcygpOzspe3ZhciByPW4ubmV4dCgpO2lmKHIuZG9uZSlicmVhaztlLmNhbGwodCxyLnZhbHVlWzFdLHIudmFsdWVbMF0sdGhpcyl9fXZhciBnLHc9T2JqZWN0LmRlZmluZVByb3BlcnR5LGI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXR8fGUhPT1lJiZ0IT09dH07XCJ1bmRlZmluZWRcIj09dHlwZW9mIFdlYWtNYXAmJihlLldlYWtNYXA9dCh7ZGVsZXRlOnIsY2xlYXI6ZixnZXQ6byxoYXM6dSxzZXQ6c30sITApKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuZXcgTWFwKS52YWx1ZXMmJihuZXcgTWFwKS52YWx1ZXMoKS5uZXh0fHwoZS5NYXA9dCh7ZGVsZXRlOnIsaGFzOnUsZ2V0Om8sc2V0OnMsa2V5czpsLHZhbHVlczpoLGVudHJpZXM6ZCxmb3JFYWNoOm0sY2xlYXI6Zn0pKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuZXcgU2V0KS52YWx1ZXMmJihuZXcgU2V0KS52YWx1ZXMoKS5uZXh0fHwoZS5TZXQ9dCh7aGFzOmEsYWRkOmMsZGVsZXRlOnIsY2xlYXI6ZixrZXlzOmgsdmFsdWVzOmgsZW50cmllczpwLGZvckVhY2g6bX0pKSxcInVuZGVmaW5lZFwiPT10eXBlb2YgV2Vha1NldCYmKGUuV2Vha1NldD10KHtkZWxldGU6cixhZGQ6YyxjbGVhcjpmLGhhczphfSwhMCkpfShcInVuZGVmaW5lZFwiIT10eXBlb2YgdCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHc/dzp3aW5kb3cpfSksZShmdW5jdGlvbihlKXshZnVuY3Rpb24odCxuLHIpe25bdF09blt0XXx8cigpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPW5bdF06XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gblt0XX0pfShcIlByb21pc2VcIixcInVuZGVmaW5lZFwiIT10eXBlb2Ygdz93OncsZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7aC5hZGQoZSx0KSxsfHwobD1wKGguZHJhaW4pKX1mdW5jdGlvbiB0KGUpe3ZhciB0LG49dHlwZW9mIGU7cmV0dXJuIG51bGw9PWV8fFwib2JqZWN0XCIhPW4mJlwiZnVuY3Rpb25cIiE9bnx8KHQ9ZS50aGVuKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0fWZ1bmN0aW9uIG4oKXtmb3IodmFyIGU9MDtlPHRoaXMuY2hhaW4ubGVuZ3RoO2UrKylyKHRoaXMsMT09PXRoaXMuc3RhdGU/dGhpcy5jaGFpbltlXS5zdWNjZXNzOnRoaXMuY2hhaW5bZV0uZmFpbHVyZSx0aGlzLmNoYWluW2VdKTt0aGlzLmNoYWluLmxlbmd0aD0wfWZ1bmN0aW9uIHIoZSxuLHIpe3ZhciBvLGk7dHJ5e249PT0hMT9yLnJlamVjdChlLm1zZyk6KG89bj09PSEwP2UubXNnOm4uY2FsbCh2b2lkIDAsZS5tc2cpLG89PT1yLnByb21pc2U/ci5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk6KGk9dChvKSk/aS5jYWxsKG8sci5yZXNvbHZlLHIucmVqZWN0KTpyLnJlc29sdmUobykpfWNhdGNoKGUpe3IucmVqZWN0KGUpfX1mdW5jdGlvbiBvKHIpe3ZhciBhLHM9dGhpcztpZighcy50cmlnZ2VyZWQpe3MudHJpZ2dlcmVkPSEwLHMuZGVmJiYocz1zLmRlZik7dHJ5eyhhPXQocikpP2UoZnVuY3Rpb24oKXt2YXIgZT1uZXcgdShzKTt0cnl7YS5jYWxsKHIsZnVuY3Rpb24oKXtvLmFwcGx5KGUsYXJndW1lbnRzKX0sZnVuY3Rpb24oKXtpLmFwcGx5KGUsYXJndW1lbnRzKX0pfWNhdGNoKHQpe2kuY2FsbChlLHQpfX0pOihzLm1zZz1yLHMuc3RhdGU9MSxzLmNoYWluLmxlbmd0aD4wJiZlKG4scykpfWNhdGNoKGUpe2kuY2FsbChuZXcgdShzKSxlKX19fWZ1bmN0aW9uIGkodCl7dmFyIHI9dGhpcztyLnRyaWdnZXJlZHx8KHIudHJpZ2dlcmVkPSEwLHIuZGVmJiYocj1yLmRlZiksci5tc2c9dCxyLnN0YXRlPTIsci5jaGFpbi5sZW5ndGg+MCYmZShuLHIpKX1mdW5jdGlvbiBhKGUsdCxuLHIpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKSFmdW5jdGlvbihvKXtlLnJlc29sdmUodFtvXSkudGhlbihmdW5jdGlvbihlKXtuKG8sZSl9LHIpfShvKX1mdW5jdGlvbiB1KGUpe3RoaXMuZGVmPWUsdGhpcy50cmlnZ2VyZWQ9ITF9ZnVuY3Rpb24gcyhlKXt0aGlzLnByb21pc2U9ZSx0aGlzLnN0YXRlPTAsdGhpcy50cmlnZ2VyZWQ9ITEsdGhpcy5jaGFpbj1bXSx0aGlzLm1zZz12b2lkIDB9ZnVuY3Rpb24gYyh0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO2lmKDAhPT10aGlzLl9fTlBPX18pdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgcHJvbWlzZVwiKTt0aGlzLl9fTlBPX189MTt2YXIgcj1uZXcgcyh0aGlzKTt0aGlzLnRoZW49ZnVuY3Rpb24odCxvKXt2YXIgaT17c3VjY2VzczpcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0LGZhaWx1cmU6XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmb307cmV0dXJuIGkucHJvbWlzZT1uZXcgdGhpcy5jb25zdHJ1Y3RvcihmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7aS5yZXNvbHZlPWUsaS5yZWplY3Q9dH0pLHIuY2hhaW4ucHVzaChpKSwwIT09ci5zdGF0ZSYmZShuLHIpLGkucHJvbWlzZX0sdGhpcy5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCxlKX07dHJ5e3QuY2FsbCh2b2lkIDAsZnVuY3Rpb24oZSl7by5jYWxsKHIsZSl9LGZ1bmN0aW9uKGUpe2kuY2FsbChyLGUpfSl9Y2F0Y2goZSl7aS5jYWxsKHIsZSl9fXZhciBmLGwsaCxkPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcscD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2V0SW1tZWRpYXRlP2Z1bmN0aW9uKGUpe3JldHVybiBzZXRJbW1lZGlhdGUoZSl9OnNldFRpbWVvdXQ7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInhcIix7fSksZj1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ciE9PSExfSl9fWNhdGNoKGUpe2Y9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBlW3RdPW4sZX19aD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLmZuPWUsdGhpcy5zZWxmPXQsdGhpcy5uZXh0PXZvaWQgMH12YXIgdCxuLHI7cmV0dXJue2FkZDpmdW5jdGlvbihvLGkpe3I9bmV3IGUobyxpKSxuP24ubmV4dD1yOnQ9cixuPXIscj12b2lkIDB9LGRyYWluOmZ1bmN0aW9uKCl7dmFyIGU9dDtmb3IodD1uPWw9dm9pZCAwO2U7KWUuZm4uY2FsbChlLnNlbGYpLGU9ZS5uZXh0fX19KCk7dmFyIHY9Zih7fSxcImNvbnN0cnVjdG9yXCIsYywhMSk7cmV0dXJuIGMucHJvdG90eXBlPXYsZih2LFwiX19OUE9fX1wiLDAsITEpLGYoYyxcInJlc29sdmVcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmMT09PWUuX19OUE9fXz9lOm5ldyB0KGZ1bmN0aW9uKHQsbil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTt0KGUpfSl9KSxmKGMsXCJyZWplY3RcIixmdW5jdGlvbihlKXtyZXR1cm4gbmV3IHRoaXMoZnVuY3Rpb24odCxuKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO24oZSl9KX0pLGYoYyxcImFsbFwiLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiIT1kLmNhbGwoZSk/dC5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTowPT09ZS5sZW5ndGg/dC5yZXNvbHZlKFtdKTpuZXcgdChmdW5jdGlvbihuLHIpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG58fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7dmFyIG89ZS5sZW5ndGgsaT1BcnJheShvKSx1PTA7YSh0LGUsZnVuY3Rpb24oZSx0KXtpW2VdPXQsKyt1PT09byYmbihpKX0scil9KX0pLGYoYyxcInJhY2VcIixmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVyblwiW29iamVjdCBBcnJheV1cIiE9ZC5jYWxsKGUpP3QucmVqZWN0KFR5cGVFcnJvcihcIk5vdCBhbiBhcnJheVwiKSk6bmV3IHQoZnVuY3Rpb24obixyKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBufHxcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO2EodCxlLGZ1bmN0aW9uKGUsdCl7bih0KX0scil9KX0pLGN9KX0pKSxFPWImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiZcImRlZmF1bHRcImluIGI/Yi5kZWZhdWx0OmIsVD1uZXcgV2Vha01hcCxfPVtcImlkXCIsXCJ1cmxcIixcIndpZHRoXCIsXCJtYXh3aWR0aFwiLFwiaGVpZ2h0XCIsXCJtYXhoZWlnaHRcIixcInBvcnRyYWl0XCIsXCJ0aXRsZVwiLFwiYnlsaW5lXCIsXCJjb2xvclwiLFwiYXV0b3BsYXlcIixcImF1dG9wYXVzZVwiLFwibG9vcFwiLFwicmVzcG9uc2l2ZVwiXSxrPWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0seD1uZXcgV2Vha01hcCxqPW5ldyBXZWFrTWFwLFBsYXllcj1mdW5jdGlvbigpe2Z1bmN0aW9uIFBsYXllcihlKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3t9OmFyZ3VtZW50c1sxXTtpZihrKHRoaXMsUGxheWVyKSx3aW5kb3cualF1ZXJ5JiZlIGluc3RhbmNlb2YgalF1ZXJ5JiYoZS5sZW5ndGg+MSYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKFwiQSBqUXVlcnkgb2JqZWN0IHdpdGggbXVsdGlwbGUgZWxlbWVudHMgd2FzIHBhc3NlZCwgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQuXCIpLGU9ZVswXSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpKSwhYShlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBlaXRoZXIgYSB2YWxpZCBlbGVtZW50IG9yIGEgdmFsaWQgaWQuXCIpO2lmKFwiSUZSQU1FXCIhPT1lLm5vZGVOYW1lKXt2YXIgcj1lLnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIik7ciYmKGU9cil9aWYoXCJJRlJBTUVcIj09PWUubm9kZU5hbWUmJiFzKGUuZ2V0QXR0cmlidXRlKFwic3JjXCIpfHxcIlwiKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGxheWVyIGVsZW1lbnQgcGFzc2VkIGlzbuKAmXQgYSBWaW1lbyBlbWJlZC5cIik7aWYoeC5oYXMoZSkpcmV0dXJuIHguZ2V0KGUpO3RoaXMuZWxlbWVudD1lLHRoaXMub3JpZ2luPVwiKlwiO3ZhciBpPW5ldyBFKGZ1bmN0aW9uKHIsaSl7dmFyIGE9ZnVuY3Rpb24oZSl7aWYocyhlLm9yaWdpbikmJnQuZWxlbWVudC5jb250ZW50V2luZG93PT09ZS5zb3VyY2Upe1wiKlwiPT09dC5vcmlnaW4mJih0Lm9yaWdpbj1lLm9yaWdpbik7dmFyIG49cChlLmRhdGEpLG89XCJldmVudFwiaW4gbiYmXCJyZWFkeVwiPT09bi5ldmVudCxpPVwibWV0aG9kXCJpbiBuJiZcInBpbmdcIj09PW4ubWV0aG9kO3JldHVybiBvfHxpPyh0LmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1yZWFkeVwiLFwidHJ1ZVwiKSx2b2lkIHIoKSk6dm9pZCB5KHQsbil9fTtpZih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhLCExKTp3aW5kb3cuYXR0YWNoRXZlbnQmJndpbmRvdy5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLGEpLFwiSUZSQU1FXCIhPT10LmVsZW1lbnQubm9kZU5hbWUpe3ZhciB1PWYoZSxuKSxkPWModSk7bChkLHUpLnRoZW4oZnVuY3Rpb24obil7dmFyIHI9aChuLGUpO3JldHVybiB0LmVsZW1lbnQ9cixvKGUsciksbn0pLmNhdGNoKGZ1bmN0aW9uKGUpe3JldHVybiBpKGUpfSl9fSk7cmV0dXJuIGouc2V0KHRoaXMsaSkseC5zZXQodGhpcy5lbGVtZW50LHRoaXMpLFwiSUZSQU1FXCI9PT10aGlzLmVsZW1lbnQubm9kZU5hbWUmJnYodGhpcyxcInBpbmdcIiksdGhpc31yZXR1cm4gUGxheWVyLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT9mdW5jdGlvbigpe306YXJndW1lbnRzWzFdO3JldHVybiB0aGlzLnJlYWR5KCkudGhlbihlLHQpfSxQbGF5ZXIucHJvdG90eXBlLmNhbGxNZXRob2Q9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV07cmV0dXJuIG5ldyBFKGZ1bmN0aW9uKG8saSl7cmV0dXJuIG4ucmVhZHkoKS50aGVuKGZ1bmN0aW9uKCl7dChuLGUse3Jlc29sdmU6byxyZWplY3Q6aX0pLHYobixlLHIpfSl9KX0sUGxheWVyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcztyZXR1cm4gbmV3IEUoZnVuY3Rpb24ocixvKXtyZXR1cm4gZT1pKGUsXCJnZXRcIiksbi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24oKXt0KG4sZSx7cmVzb2x2ZTpyLHJlamVjdDpvfSksdihuLGUpfSl9KX0sUGxheWVyLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj10aGlzO3JldHVybiBFLnJlc29sdmUobikudGhlbihmdW5jdGlvbihuKXtpZihlPWkoZSxcInNldFwiKSx2b2lkIDA9PT1ufHxudWxsPT09bil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlcmUgbXVzdCBiZSBhIHZhbHVlIHRvIHNldC5cIik7cmV0dXJuIHIucmVhZHkoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBFKGZ1bmN0aW9uKG8saSl7dChyLGUse3Jlc29sdmU6byxyZWplY3Q6aX0pLHYocixlLG4pfSl9KX0pfSxQbGF5ZXIucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUscil7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gZXZlbnQgbmFtZS5cIik7aWYoIXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBjYWxsYmFjayBmdW5jdGlvbi5cIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7dmFyIG89bih0aGlzLFwiZXZlbnQ6XCIrZSk7MD09PW8ubGVuZ3RoJiZ0aGlzLmNhbGxNZXRob2QoXCJhZGRFdmVudExpc3RlbmVyXCIsZSkuY2F0Y2goZnVuY3Rpb24oKXt9KSx0KHRoaXMsXCJldmVudDpcIitlLHIpfSxQbGF5ZXIucHJvdG90eXBlLm9mZj1mdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGV2ZW50IG5hbWUuXCIpO2lmKHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3ZhciBuPXIodGhpcyxcImV2ZW50OlwiK2UsdCk7biYmdGhpcy5jYWxsTWV0aG9kKFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLGUpLmNhdGNoKGZ1bmN0aW9uKGUpe30pfSxQbGF5ZXIucHJvdG90eXBlLmxvYWRWaWRlbz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwibG9hZFZpZGVvXCIsZSl9LFBsYXllci5wcm90b3R5cGUucmVhZHk9ZnVuY3Rpb24oKXt2YXIgZT1qLmdldCh0aGlzKTtyZXR1cm4gRS5yZXNvbHZlKGUpfSxQbGF5ZXIucHJvdG90eXBlLmVuYWJsZVRleHRUcmFjaz1mdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgbGFuZ3VhZ2UuXCIpO3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJlbmFibGVUZXh0VHJhY2tcIix7bGFuZ3VhZ2U6ZSxraW5kOnR9KX0sUGxheWVyLnByb3RvdHlwZS5kaXNhYmxlVGV4dFRyYWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FsbE1ldGhvZChcImRpc2FibGVUZXh0VHJhY2tcIil9LFBsYXllci5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jYWxsTWV0aG9kKFwicGF1c2VcIil9LFBsYXllci5wcm90b3R5cGUucGxheT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJwbGF5XCIpfSxQbGF5ZXIucHJvdG90eXBlLnVubG9hZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbGxNZXRob2QoXCJ1bmxvYWRcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0QXV0b3BhdXNlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwiYXV0b3BhdXNlXCIpfSxQbGF5ZXIucHJvdG90eXBlLnNldEF1dG9wYXVzZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZXQoXCJhdXRvcGF1c2VcIixlKX0sUGxheWVyLnByb3RvdHlwZS5nZXRDb2xvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcImNvbG9yXCIpfSxQbGF5ZXIucHJvdG90eXBlLnNldENvbG9yPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChcImNvbG9yXCIsZSl9LFBsYXllci5wcm90b3R5cGUuZ2V0Q3VycmVudFRpbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJjdXJyZW50VGltZVwiKX0sUGxheWVyLnByb3RvdHlwZS5zZXRDdXJyZW50VGltZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZXQoXCJjdXJyZW50VGltZVwiLGUpfSxQbGF5ZXIucHJvdG90eXBlLmdldER1cmF0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwiZHVyYXRpb25cIil9LFBsYXllci5wcm90b3R5cGUuZ2V0RW5kZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJlbmRlZFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRMb29wPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwibG9vcFwiKX0sUGxheWVyLnByb3RvdHlwZS5zZXRMb29wPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChcImxvb3BcIixlKX0sUGxheWVyLnByb3RvdHlwZS5nZXRQYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJwYXVzZWRcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VGV4dFRyYWNrcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInRleHRUcmFja3NcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0VmlkZW9FbWJlZENvZGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJ2aWRlb0VtYmVkQ29kZVwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb0lkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9JZFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb1RpdGxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9UaXRsZVwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb1dpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9XaWR0aFwiKX0sUGxheWVyLnByb3RvdHlwZS5nZXRWaWRlb0hlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInZpZGVvSGVpZ2h0XCIpfSxQbGF5ZXIucHJvdG90eXBlLmdldFZpZGVvVXJsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidmlkZW9VcmxcIil9LFBsYXllci5wcm90b3R5cGUuZ2V0Vm9sdW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwidm9sdW1lXCIpfSxQbGF5ZXIucHJvdG90eXBlLnNldFZvbHVtZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zZXQoXCJ2b2x1bWVcIixlKX0sUGxheWVyfSgpO3JldHVybiBkKCksUGxheWVyfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vQHZpbWVvL3BsYXllci9kaXN0L3BsYXllci5taW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9