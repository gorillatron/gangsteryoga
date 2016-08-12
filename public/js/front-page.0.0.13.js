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
	
	var _routing = __webpack_require__(1);
	
	var _routing2 = _interopRequireDefault(_routing);
	
	var _parallaxing = __webpack_require__(51);
	
	var _parallaxing2 = _interopRequireDefault(_parallaxing);
	
	var _scrolling = __webpack_require__(129);
	
	var _scrolling2 = _interopRequireDefault(_scrolling);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _routing2.default)();
	
	$(document).ready(function () {
	
	  $('.subpage').scroll(function (event) {
	    event.stopPropagation();
	    event.preventDefault();
	    return false;
	  });
	
	  (0, _scrolling2.default)();
	  (0, _parallaxing2.default)();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _page = __webpack_require__(2);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _raf = __webpack_require__(6);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _qraf = __webpack_require__(8);
	
	var _qraf2 = _interopRequireDefault(_qraf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	
	  (0, _page2.default)('/', closeOpenPage);
	  (0, _page2.default)('/:page', closeOpenPage, showPage);
	  (0, _page2.default)('/:page/*', showPage);
	  (0, _page2.default)('/instruktoerer/', closeOpenInstructor);
	  (0, _page2.default)('/instruktoerer/:instructor', closeOpenInstructor, showInstructor);
	
	  animatePageIn();
	
	  listenForEscapeButton(function (_) {
	    return history.back();
	  });
	
	  (0, _page2.default)();
	};
	
	var $openPage = null;
	var $openInstructorDetails = null;
	
	var showPage = function showPage(ctx, next) {
	  var page = ctx.params.page;
	
	  var $page = $('.subpage.' + page);
	
	  if ($page.length && !$page.is($openPage)) {
	    $openPage = $page;
	    (0, _raf2.default)(function (_) {
	      return animateSubpageIn($openPage, next);
	    });
	  } else if ($page.length) {
	    next();
	  } else {
	    console.warn("unhandled 404", page);
	  }
	};
	
	var closeOpenPage = function closeOpenPage(ctx, next) {
	  if ($openPage && !$openPage.hasClass(ctx.params.page)) {
	    animateSubpageOut($openPage, function (_) {
	      $openPage = null;
	      next();
	    });
	  } else {
	    next();
	  }
	};
	
	var animatePageIn = function animatePageIn() {
	  var cb = arguments.length <= 0 || arguments[0] === undefined ? function (f) {
	    return f;
	  } : arguments[0];
	
	  setTimeout(function (_) {
	    $("#front-page").css('opacity', 1);
	    cb();
	  }, 66);
	};
	
	var animateSubpageIn = function animateSubpageIn($page, cb) {
	  (0, _qraf2.default)([function (_) {
	    return $page.css({
	      display: 'block',
	      opacity: 0.00001
	    });
	  }, function (_) {
	    return $page.animate({
	      opacity: 1
	    }, 137, cb);
	  }]);
	};
	
	var animateSubpageOut = function animateSubpageOut($page) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? function (f) {
	    return f;
	  } : arguments[1];
	
	  (0, _raf2.default)(function (_) {
	    $page.animate({
	      opacity: 0
	    }, 137, function (_) {
	      $page.hide();
	      cb();
	    });
	  });
	};
	
	var showInstructor = function showInstructor(ctx) {
	  var $instructorList = $('.instructor-list');
	  var $instructorDetails = $('.instructor-detail[data-instructor-key=' + ctx.params.instructor + ']');
	
	  $openInstructorDetails = $instructorDetails;
	
	  (0, _qraf2.default)([function (_) {
	    return $instructorList.fadeOut(137);
	  }, function (_) {
	    return $openPage.scrollTop(0);
	  }, function (_) {
	    return $instructorDetails.removeClass('display-none').css('opacity', 0.0001).animate({ opacity: 1 }, 137);
	  }]);
	};
	
	var closeOpenInstructor = function closeOpenInstructor(ctx, next) {
	  var $instructorList = $('.instructor-list');
	  (0, _qraf2.default)([function (_) {
	    return $instructorList.fadeIn(137);
	  }, $openInstructorDetails ? function (_) {
	    return $openInstructorDetails.animate({ opacity: 0.0001 }, 137, function () {
	      $openInstructorDetails.addClass('display-none');
	      $openInstructorDetails = null;
	      next();
	    });
	  } : next]);
	};
	
	var listenForEscapeButton = function listenForEscapeButton(cb) {
	  $('body').keyup(function (event) {
	    event.keyCode == 27 && $openPage && cb();
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */
	
	  'use strict';
	
	  /**
	   * Module dependencies.
	   */
	
	  var pathtoRegexp = __webpack_require__(4);
	
	  /**
	   * Module exports.
	   */
	
	  module.exports = page;
	
	  /**
	   * Detect click event
	   */
	  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';
	
	  /**
	   * To work properly with the URL
	   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	   */
	
	  var location = ('undefined' !== typeof window) && (window.history.location || window.location);
	
	  /**
	   * Perform initial dispatch.
	   */
	
	  var dispatch = true;
	
	
	  /**
	   * Decode URL components (query string, pathname, hash).
	   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
	   */
	  var decodeURLComponents = true;
	
	  /**
	   * Base path.
	   */
	
	  var base = '';
	
	  /**
	   * Running flag.
	   */
	
	  var running;
	
	  /**
	   * HashBang option
	   */
	
	  var hashbang = false;
	
	  /**
	   * Previous context, for capturing
	   * page exit events.
	   */
	
	  var prevContext;
	
	  /**
	   * Register `path` with callback `fn()`,
	   * or route `path`, or redirection,
	   * or `page.start()`.
	   *
	   *   page(fn);
	   *   page('*', fn);
	   *   page('/user/:id', load, user);
	   *   page('/user/' + user.id, { some: 'thing' });
	   *   page('/user/' + user.id);
	   *   page('/from', '/to')
	   *   page();
	   *
	   * @param {string|!Function|!Object} path
	   * @param {Function=} fn
	   * @api public
	   */
	
	  function page(path, fn) {
	    // <callback>
	    if ('function' === typeof path) {
	      return page('*', path);
	    }
	
	    // route <path> to <callback ...>
	    if ('function' === typeof fn) {
	      var route = new Route(/** @type {string} */ (path));
	      for (var i = 1; i < arguments.length; ++i) {
	        page.callbacks.push(route.middleware(arguments[i]));
	      }
	      // show <path> with [state]
	    } else if ('string' === typeof path) {
	      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	      // start [options]
	    } else {
	      page.start(path);
	    }
	  }
	
	  /**
	   * Callback functions.
	   */
	
	  page.callbacks = [];
	  page.exits = [];
	
	  /**
	   * Current path being processed
	   * @type {string}
	   */
	  page.current = '';
	
	  /**
	   * Number of pages navigated to.
	   * @type {number}
	   *
	   *     page.len == 0;
	   *     page('/login');
	   *     page.len == 1;
	   */
	
	  page.len = 0;
	
	  /**
	   * Get or set basepath to `path`.
	   *
	   * @param {string} path
	   * @api public
	   */
	
	  page.base = function(path) {
	    if (0 === arguments.length) return base;
	    base = path;
	  };
	
	  /**
	   * Bind with the given `options`.
	   *
	   * Options:
	   *
	   *    - `click` bind to click events [true]
	   *    - `popstate` bind to popstate [true]
	   *    - `dispatch` perform initial dispatch [true]
	   *
	   * @param {Object} options
	   * @api public
	   */
	
	  page.start = function(options) {
	    options = options || {};
	    if (running) return;
	    running = true;
	    if (false === options.dispatch) dispatch = false;
	    if (false === options.decodeURLComponents) decodeURLComponents = false;
	    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
	    if (false !== options.click) {
	      document.addEventListener(clickEvent, onclick, false);
	    }
	    if (true === options.hashbang) hashbang = true;
	    if (!dispatch) return;
	    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
	    page.replace(url, null, true, dispatch);
	  };
	
	  /**
	   * Unbind click and popstate event handlers.
	   *
	   * @api public
	   */
	
	  page.stop = function() {
	    if (!running) return;
	    page.current = '';
	    page.len = 0;
	    running = false;
	    document.removeEventListener(clickEvent, onclick, false);
	    window.removeEventListener('popstate', onpopstate, false);
	  };
	
	  /**
	   * Show `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} dispatch
	   * @param {boolean=} push
	   * @return {!Context}
	   * @api public
	   */
	
	  page.show = function(path, state, dispatch, push) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    if (false !== dispatch) page.dispatch(ctx);
	    if (false !== ctx.handled && false !== push) ctx.pushState();
	    return ctx;
	  };
	
	  /**
	   * Goes back in the history
	   * Back should always let the current route push state and then go back.
	   *
	   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	   * @param {Object=} state
	   * @api public
	   */
	
	  page.back = function(path, state) {
	    if (page.len > 0) {
	      // this may need more testing to see if all browsers
	      // wait for the next tick to go back in history
	      history.back();
	      page.len--;
	    } else if (path) {
	      setTimeout(function() {
	        page.show(path, state);
	      });
	    }else{
	      setTimeout(function() {
	        page.show(base, state);
	      });
	    }
	  };
	
	
	  /**
	   * Register route to redirect from one path to other
	   * or just redirect to another route
	   *
	   * @param {string} from - if param 'to' is undefined redirects to 'from'
	   * @param {string=} to
	   * @api public
	   */
	  page.redirect = function(from, to) {
	    // Define route from a path to another
	    if ('string' === typeof from && 'string' === typeof to) {
	      page(from, function(e) {
	        setTimeout(function() {
	          page.replace(/** @type {!string} */ (to));
	        }, 0);
	      });
	    }
	
	    // Wait for the push state and replace it with another
	    if ('string' === typeof from && 'undefined' === typeof to) {
	      setTimeout(function() {
	        page.replace(from);
	      }, 0);
	    }
	  };
	
	  /**
	   * Replace `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} init
	   * @param {boolean=} dispatch
	   * @return {!Context}
	   * @api public
	   */
	
	
	  page.replace = function(path, state, init, dispatch) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    ctx.init = init;
	    ctx.save(); // save before dispatching, which may redirect
	    if (false !== dispatch) page.dispatch(ctx);
	    return ctx;
	  };
	
	  /**
	   * Dispatch the given `ctx`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  page.dispatch = function(ctx) {
	    var prev = prevContext,
	      i = 0,
	      j = 0;
	
	    prevContext = ctx;
	
	    function nextExit() {
	      var fn = page.exits[j++];
	      if (!fn) return nextEnter();
	      fn(prev, nextExit);
	    }
	
	    function nextEnter() {
	      var fn = page.callbacks[i++];
	
	      if (ctx.path !== page.current) {
	        ctx.handled = false;
	        return;
	      }
	      if (!fn) return unhandled(ctx);
	      fn(ctx, nextEnter);
	    }
	
	    if (prev) {
	      nextExit();
	    } else {
	      nextEnter();
	    }
	  };
	
	  /**
	   * Unhandled `ctx`. When it's not the initial
	   * popstate then redirect. If you wish to handle
	   * 404s on your own use `page('*', callback)`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  function unhandled(ctx) {
	    if (ctx.handled) return;
	    var current;
	
	    if (hashbang) {
	      current = base + location.hash.replace('#!', '');
	    } else {
	      current = location.pathname + location.search;
	    }
	
	    if (current === ctx.canonicalPath) return;
	    page.stop();
	    ctx.handled = false;
	    location.href = ctx.canonicalPath;
	  }
	
	  /**
	   * Register an exit route on `path` with
	   * callback `fn()`, which will be called
	   * on the previous context when a new
	   * page is visited.
	   */
	  page.exit = function(path, fn) {
	    if (typeof path === 'function') {
	      return page.exit('*', path);
	    }
	
	    var route = new Route(path);
	    for (var i = 1; i < arguments.length; ++i) {
	      page.exits.push(route.middleware(arguments[i]));
	    }
	  };
	
	  /**
	   * Remove URL encoding from the given `str`.
	   * Accommodates whitespace in both x-www-form-urlencoded
	   * and regular percent-encoded form.
	   *
	   * @param {string} val - URL component to decode
	   */
	  function decodeURLEncodedURIComponent(val) {
	    if (typeof val !== 'string') { return val; }
	    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	  }
	
	  /**
	   * Initialize a new "request" `Context`
	   * with the given `path` and optional initial `state`.
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} state
	   * @api public
	   */
	
	  function Context(path, state) {
	    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
	    var i = path.indexOf('?');
	
	    this.canonicalPath = path;
	    this.path = path.replace(base, '') || '/';
	    if (hashbang) this.path = this.path.replace('#!', '') || '/';
	
	    this.title = document.title;
	    this.state = state || {};
	    this.state.path = path;
	    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	    this.params = {};
	
	    // fragment
	    this.hash = '';
	    if (!hashbang) {
	      if (!~this.path.indexOf('#')) return;
	      var parts = this.path.split('#');
	      this.path = parts[0];
	      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
	      this.querystring = this.querystring.split('#')[0];
	    }
	  }
	
	  /**
	   * Expose `Context`.
	   */
	
	  page.Context = Context;
	
	  /**
	   * Push state.
	   *
	   * @api private
	   */
	
	  Context.prototype.pushState = function() {
	    page.len++;
	    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Save the context state.
	   *
	   * @api public
	   */
	
	  Context.prototype.save = function() {
	    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Initialize `Route` with the given HTTP `path`,
	   * and an array of `callbacks` and `options`.
	   *
	   * Options:
	   *
	   *   - `sensitive`    enable case-sensitive routes
	   *   - `strict`       enable strict matching for trailing slashes
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} options
	   * @api private
	   */
	
	  function Route(path, options) {
	    options = options || {};
	    this.path = (path === '*') ? '(.*)' : path;
	    this.method = 'GET';
	    this.regexp = pathtoRegexp(this.path,
	      this.keys = [],
	      options);
	  }
	
	  /**
	   * Expose `Route`.
	   */
	
	  page.Route = Route;
	
	  /**
	   * Return route middleware with
	   * the given callback `fn()`.
	   *
	   * @param {Function} fn
	   * @return {Function}
	   * @api public
	   */
	
	  Route.prototype.middleware = function(fn) {
	    var self = this;
	    return function(ctx, next) {
	      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
	      next();
	    };
	  };
	
	  /**
	   * Check if this route matches `path`, if so
	   * populate `params`.
	   *
	   * @param {string} path
	   * @param {Object} params
	   * @return {boolean}
	   * @api private
	   */
	
	  Route.prototype.match = function(path, params) {
	    var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));
	
	    if (!m) return false;
	
	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = decodeURLEncodedURIComponent(m[i]);
	      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
	        params[key.name] = val;
	      }
	    }
	
	    return true;
	  };
	
	
	  /**
	   * Handle "populate" events.
	   */
	
	  var onpopstate = (function () {
	    var loaded = false;
	    if ('undefined' === typeof window) {
	      return;
	    }
	    if (document.readyState === 'complete') {
	      loaded = true;
	    } else {
	      window.addEventListener('load', function() {
	        setTimeout(function() {
	          loaded = true;
	        }, 0);
	      });
	    }
	    return function onpopstate(e) {
	      if (!loaded) return;
	      if (e.state) {
	        var path = e.state.path;
	        page.replace(path, e.state);
	      } else {
	        page.show(location.pathname + location.hash, undefined, undefined, false);
	      }
	    };
	  })();
	  /**
	   * Handle "click" events.
	   */
	
	  function onclick(e) {
	
	    if (1 !== which(e)) return;
	
	    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	    if (e.defaultPrevented) return;
	
	
	
	    // ensure link
	    // use shadow dom when available
	    var el = e.path ? e.path[0] : e.target;
	    while (el && 'A' !== el.nodeName) el = el.parentNode;
	    if (!el || 'A' !== el.nodeName) return;
	
	
	
	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;
	
	    // ensure non-hash for the same path
	    var link = el.getAttribute('href');
	    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;
	
	
	
	    // Check for mailto: in the href
	    if (link && link.indexOf('mailto:') > -1) return;
	
	    // check target
	    if (el.target) return;
	
	    // x-origin
	    if (!sameOrigin(el.href)) return;
	
	
	
	    // rebuild path
	    var path = el.pathname + el.search + (el.hash || '');
	
	    // strip leading "/[drive letter]:" on NW.js on Windows
	    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
	      path = path.replace(/^\/[a-zA-Z]:\//, '/');
	    }
	
	    // same page
	    var orig = path;
	
	    if (path.indexOf(base) === 0) {
	      path = path.substr(base.length);
	    }
	
	    if (hashbang) path = path.replace('#!', '');
	
	    if (base && orig === path) return;
	
	    e.preventDefault();
	    page.show(orig);
	  }
	
	  /**
	   * Event button.
	   */
	
	  function which(e) {
	    e = e || window.event;
	    return null === e.which ? e.button : e.which;
	  }
	
	  /**
	   * Check if `href` is the same origin.
	   */
	
	  function sameOrigin(href) {
	    var origin = location.protocol + '//' + location.hostname;
	    if (location.port) origin += ':' + location.port;
	    return (href && (0 === href.indexOf(origin)));
	  }
	
	  page.sameOrigin = sameOrigin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(5)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var suffix = res[6]
	    var asterisk = res[7]
	
	    var repeat = suffix === '+' || suffix === '*'
	    var optional = suffix === '?' || suffix === '*'
	    var delimiter = prefix || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
	    }
	  }
	
	  return function (obj) {
	    var path = ''
	    var data = obj || {}
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = encodeURIComponent(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)
	
	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }
	
	  return attachKeys(re, keys)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = token.pattern
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }
	
	  return new RegExp('^' + route, flags(options))
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []
	
	  if (!isarray(keys)) {
	    options = keys
	    keys = []
	  } else if (!options) {
	    options = {}
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options)
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options)
	  }
	
	  return stringToRegexp(path, keys, options)
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray2 = __webpack_require__(9);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _raf = __webpack_require__(6);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var linked = function linked(arr) {
	  var head = arr[0];
	  var tail = arr.slice(1);
	  return [head, tail];
	};
	
	var run = function run(_ref) {
	  var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
	
	  var head = _ref2[0];
	  var tail = _ref2[1];
	
	  if (head) {
	    (0, _raf2.default)(head);
	    return run(linked(tail));
	  }
	};
	
	exports.default = function (fns) {
	  return run(linked(fns));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(10);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(45);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	__webpack_require__(40);
	module.exports = __webpack_require__(43);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var Iterators = __webpack_require__(16);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(14)
	  , step             = __webpack_require__(15)
	  , Iterators        = __webpack_require__(16)
	  , toIObject        = __webpack_require__(17);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(21)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(18)
	  , defined = __webpack_require__(20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(19);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(22)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(34)
	  , Iterators      = __webpack_require__(16)
	  , $iterCreate    = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(36)
	  , getProto       = __webpack_require__(30).getProto
	  , ITERATOR       = __webpack_require__(37)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(24)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(30)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(32) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(30)
	  , descriptor     = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(36)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(37)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(30).setDesc
	  , has = __webpack_require__(34)
	  , TAG = __webpack_require__(37)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(38)('wks')
	  , uid    = __webpack_require__(39)
	  , Symbol = __webpack_require__(24).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(24)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(41)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(21)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(44)
	  , ITERATOR  = __webpack_require__(37)('iterator')
	  , Iterators = __webpack_require__(16);
	module.exports = __webpack_require__(25).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(19)
	  , TAG = __webpack_require__(37)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	__webpack_require__(40);
	module.exports = __webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(48)
	  , get      = __webpack_require__(50);
	module.exports = __webpack_require__(25).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(49);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(44)
	  , ITERATOR  = __webpack_require__(37)('iterator')
	  , Iterators = __webpack_require__(16);
	module.exports = __webpack_require__(25).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _AnimationFrameScheduler = __webpack_require__(52);
	
	__webpack_require__(67);
	
	var _parallaxing = __webpack_require__(84);
	
	var _parallaxing2 = _interopRequireDefault(_parallaxing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	
	    // const parallax$ = parallaxing({
	    //   target: $(document),
	    //   maxOffsett: 5
	    // })
	    // .subscribeOn(AnimationFrameScheduler)
	    // .share()
	
	    // parallax$
	    //   .subscribe(frame => {
	    //     translate($('#cover .background-image'), frame)
	    // })
	
	    // parallax$
	    //   .map(({top, left}) => ({ top: top / 100 * 20, left: left / 100 * 15 }))
	    //   .subscribe(frame => {
	    //     translate($('.photo'), frame)
	    // })
	
	    // parallax$
	    //   .map(({top, left}) => ({ top: top / 100 * 40, left: left / 100 * 60 }))
	    //   .subscribe(frame => {
	    //     translate($('.link'), frame)
	    // })
	
	    // parallax$
	    //   .map(({top, left}) => ({ top: (top / 100 * 35) * -1, left: (left / 100 * 35 * -1) }))
	    //   .subscribe(frame => {
	    //     translate($('.text-block'), frame)
	    // })
	
	};
	
	var translate = function translate(target, frame) {
	    var transform = 'translate(' + frame.left + 'px, ' + frame.top + 'px)';
	    target.css({
	        '-ms-transform': transform,
	        '-moz-transform': transform,
	        '-webkit-transform': transform,
	        'transform': transform
	    });
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var QueueScheduler_1 = __webpack_require__(53);
	var AnimationFrameAction_1 = __webpack_require__(65);
	var AnimationFrameScheduler = (function (_super) {
	    __extends(AnimationFrameScheduler, _super);
	    function AnimationFrameScheduler() {
	        _super.apply(this, arguments);
	    }
	    AnimationFrameScheduler.prototype.scheduleNow = function (work, state) {
	        return new AnimationFrameAction_1.AnimationFrameAction(this, work).schedule(state);
	    };
	    return AnimationFrameScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AnimationFrameScheduler = AnimationFrameScheduler;
	//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(54);
	var FutureAction_1 = __webpack_require__(55);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(55);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(56);
	var Subscription_1 = __webpack_require__(58);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module), (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(59);
	var isObject_1 = __webpack_require__(60);
	var isFunction_1 = __webpack_require__(61);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var UnsubscriptionError_1 = __webpack_require__(64);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(63);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(55);
	var AnimationFrame_1 = __webpack_require__(66);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AnimationFrameAction = (function (_super) {
	    __extends(AnimationFrameAction, _super);
	    function AnimationFrameAction() {
	        _super.apply(this, arguments);
	    }
	    AnimationFrameAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = AnimationFrame_1.AnimationFrame.requestAnimationFrame(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AnimationFrameAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                AnimationFrame_1.AnimationFrame.cancelAnimationFrame(scheduledId);
	            }
	        }
	    };
	    return AnimationFrameAction;
	}(FutureAction_1.FutureAction));
	exports.AnimationFrameAction = AnimationFrameAction;
	//# sourceMappingURL=AnimationFrameAction.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(56);
	var RequestAnimationFrameDefinition = (function () {
	    function RequestAnimationFrameDefinition(root) {
	        if (root.requestAnimationFrame) {
	            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
	            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
	        }
	        else if (root.mozRequestAnimationFrame) {
	            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
	            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
	        }
	        else if (root.webkitRequestAnimationFrame) {
	            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
	            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
	        }
	        else if (root.msRequestAnimationFrame) {
	            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
	            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
	        }
	        else if (root.oRequestAnimationFrame) {
	            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
	            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
	        }
	        else {
	            this.cancelAnimationFrame = root.clearTimeout.bind(root);
	            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
	        }
	    }
	    return RequestAnimationFrameDefinition;
	}());
	exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
	exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
	//# sourceMappingURL=AnimationFrame.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var subscribeOn_1 = __webpack_require__(76);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(56);
	var toSubscriber_1 = __webpack_require__(69);
	var symbol_observable_1 = __webpack_require__(73);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[symbol_observable_1.default] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(70);
	var rxSubscriber_1 = __webpack_require__(72);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber();
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(61);
	var Subscription_1 = __webpack_require__(58);
	var Observer_1 = __webpack_require__(71);
	var rxSubscriber_1 = __webpack_require__(72);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(56);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(74);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ponyfill = __webpack_require__(75);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = undefined; /* global window */
	
	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}
	
	var result = (0, _ponyfill2.default)(root);
	exports.default = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(77);
	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 * @method subscribeOn
	 * @owner Observable
	 */
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	var asap_1 = __webpack_require__(78);
	var isNumeric_1 = __webpack_require__(83);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (arg) {
	        var source = arg.source, subscriber = arg.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        });
	    };
	    return SubscribeOnObservable;
	}(Observable_1.Observable));
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(79);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(80);
	var QueueScheduler_1 = __webpack_require__(53);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(81);
	var FutureAction_1 = __webpack_require__(55);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(56);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82).clearImmediate, __webpack_require__(82).setImmediate))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82).setImmediate, __webpack_require__(82).clearImmediate))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(59);
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _raf = __webpack_require__(6);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _Observable = __webpack_require__(68);
	
	__webpack_require__(85);
	
	__webpack_require__(88);
	
	__webpack_require__(93);
	
	__webpack_require__(95);
	
	__webpack_require__(97);
	
	__webpack_require__(99);
	
	__webpack_require__(112);
	
	__webpack_require__(114);
	
	__webpack_require__(122);
	
	var _currentwindowsize = __webpack_require__(126);
	
	var _currentwindowsize2 = _interopRequireDefault(_currentwindowsize);
	
	var _ensurepos = __webpack_require__(127);
	
	var _ensurepos2 = _interopRequireDefault(_ensurepos);
	
	var _css = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var windowsizes$ = _Observable.Observable.fromEvent(window, 'resize').throttleTime(33).map(function (ev) {
	  return (0, _currentwindowsize2.default)();
	}).startWith((0, _currentwindowsize2.default)()).share();
	
	exports.default = function (config) {
	  var target = config.target;
	  var maxOffsett = config.maxOffsett;
	
	
	  var mouseleaves$ = _Observable.Observable.fromEvent(target, 'mouseleave');
	  var mouseenters$ = _Observable.Observable.fromEvent(target, 'mouseenter');
	
	  var mousemoves$ = _Observable.Observable.fromEvent(target, 'mousemove');
	  var mousepos$ = mousemoves$.throttleTime(33).map(function (ev) {
	    return { x: ev.clientX, y: ev.clientY };
	  });
	
	  var parallax$ = mousepos$.withLatestFrom(windowsizes$, function (mpos, screen) {
	
	    var screenCenterY = screen.y / 2;
	    var screenCenterX = screen.x / 2;
	
	    var offsettY = screenCenterY - mpos.y;
	    var offsettX = screenCenterX - mpos.x;
	
	    var offsetYPrct = (0, _ensurepos2.default)(offsettY) / screenCenterY * 100;
	    var offsetXPrct = (0, _ensurepos2.default)(offsettX) / screenCenterX * 100;
	
	    var top = maxOffsett / 100 * offsetYPrct;
	    var left = maxOffsett / 100 * offsetXPrct;
	
	    if (mpos.y > screenCenterY) top = -1 * top;
	
	    if (mpos.x > screenCenterX) left = -1 * left;
	
	    return { top: top, left: left };
	  });
	
	  mouseleaves$.subscribe(function (ev) {
	    return target.addClass("animate-translate");
	  });
	
	  mouseenters$.delay(400).subscribe(function (ev) {
	    return target.removeClass("animate-translate");
	  });
	
	  return parallax$;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var fromEvent_1 = __webpack_require__(86);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(87);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var Subscription_1 = __webpack_require__(58);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    /**
	     * Creates an Observable that emits events of a specific type coming from the
	     * given event target.
	     *
	     * <span class="informal">Creates an Observable from DOM events, or Node
	     * EventEmitter events or others.</span>
	     *
	     * <img src="./img/fromEvent.png" width="100%">
	     *
	     * Creates an Observable by attaching an event listener to an "event target",
	     * which may be an object with `addEventListener` and `removeEventListener`,
	     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
	     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
	     * the output Observable is subscribed, and removed when the Subscription is
	     * unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * var clicks = Rx.Observable.fromEvent(document, 'click');
	     * clicks.subscribe(x => console.log(x));
	     *
	     * @see {@link from}
	     * @see {@link fromEventPattern}
	     *
	     * @param {EventTargetLike} target The DOMElement, event target, Node.js
	     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
	     * @param {string} eventName The event name of interest, being emitted by the
	     * `target`.
	     * @param {function(...args: any): T} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (target, eventName, selector) {
	        return new FromEventObservable(target, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            var source_1 = sourceObj;
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            var source_2 = sourceObj;
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return source_2.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            var source_3 = sourceObj;
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var interval_1 = __webpack_require__(89);
	Observable_1.Observable.interval = interval_1.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IntervalObservable_1 = __webpack_require__(90);
	exports.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(83);
	var Observable_1 = __webpack_require__(68);
	var async_1 = __webpack_require__(91);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = async_1.async;
	        }
	    }
	    /**
	     * Creates an Observable that emits sequential numbers every specified
	     * interval of time, on a specified Scheduler.
	     *
	     * <span class="informal">Emits incremental numbers periodically in time.
	     * </span>
	     *
	     * <img src="./img/interval.png" width="100%">
	     *
	     * `interval` returns an Observable that emits an infinite sequence of
	     * ascending integers, with a constant interval of time of your choosing
	     * between those emissions. The first emission is not sent immediately, but
	     * only after the first period has passed. By default, this operator uses the
	     * `async` Scheduler to provide a notion of time, but you may pass any
	     * Scheduler to it.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
	     * var numbers = Rx.Observable.interval(1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link delay}
	     *
	     * @param {number} [period=0] The interval size in milliseconds (by default)
	     * or the time unit determined by the scheduler's clock.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a sequential number each time
	     * interval.
	     * @static true
	     * @name interval
	     * @owner Observable
	     */
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	}(Observable_1.Observable));
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(92);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(55);
	var QueueScheduler_1 = __webpack_require__(53);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsyncScheduler.prototype.scheduleNow = function (work, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
	    };
	    return AsyncScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var map_1 = __webpack_require__(94);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var pairwise_1 = __webpack_require__(96);
	Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	/**
	 * Groups pairs of consecutive emissions together and emits them as an array of
	 * two values.
	 *
	 * <span class="informal">Puts the current value and previous value together as
	 * an array, and emits that.</span>
	 *
	 * <img src="./img/pairwise.png" width="100%">
	 *
	 * The Nth emission from the source Observable will cause the output Observable
	 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
	 * pair. For this reason, `pairwise` emits on the second and subsequent
	 * emissions from the source Observable, but not on the first emission, because
	 * there is no previous value in that case.
	 *
	 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var pairs = clicks.pairwise();
	 * var distance = pairs.map(pair => {
	 *   var x0 = pair[0].clientX;
	 *   var y0 = pair[0].clientY;
	 *   var x1 = pair[1].clientX;
	 *   var y1 = pair[1].clientY;
	 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
	 * });
	 * distance.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 *
	 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
	 * consecutive values from the source Observable.
	 * @method pairwise
	 * @owner Observable
	 */
	function pairwise() {
	    return this.lift(new PairwiseOperator());
	}
	exports.pairwise = pairwise;
	var PairwiseOperator = (function () {
	    function PairwiseOperator() {
	    }
	    PairwiseOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new PairwiseSubscriber(subscriber));
	    };
	    return PairwiseOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var PairwiseSubscriber = (function (_super) {
	    __extends(PairwiseSubscriber, _super);
	    function PairwiseSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasPrev = false;
	    }
	    PairwiseSubscriber.prototype._next = function (value) {
	        if (this.hasPrev) {
	            this.destination.next([this.prev, value]);
	        }
	        else {
	            this.hasPrev = true;
	        }
	        this.prev = value;
	    };
	    return PairwiseSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var throttleTime_1 = __webpack_require__(98);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	var async_1 = __webpack_require__(91);
	/**
	 * Emits a value from the source Observable, then ignores subsequent source
	 * values for `duration` milliseconds, then repeats this process.
	 *
	 * <span class="informal">Lets a value pass, then ignores source values for the
	 * next `duration` milliseconds.</span>
	 *
	 * <img src="./img/throttleTime.png" width="100%">
	 *
	 * `throttleTime` emits the source Observable values on the output Observable
	 * when its internal timer is disabled, and ignores source values when the timer
	 * is enabled. Initially, the timer is disabled. As soon as the first source
	 * value arrives, it is forwarded to the output Observable, and then the timer
	 * is enabled. After `duration` milliseconds (or the time unit determined
	 * internally by the optional `scheduler`) has passed, the timer is disabled,
	 * and this process repeats for the next source value. Optionally takes a
	 * {@link Scheduler} for managing timers.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.throttleTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttle}
	 *
	 * @param {number} duration Time to wait before emitting another value after
	 * emitting the last value, measured in milliseconds or the time unit determined
	 * internally by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the sampling.
	 * @return {Observable<T>} An Observable that performs the throttle operation to
	 * limit the rate of emissions from the source.
	 * @method throttleTime
	 * @owner Observable
	 */
	function throttleTime(duration, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new ThrottleTimeOperator(duration, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(duration, scheduler) {
	        this.duration = duration;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
	    };
	    return ThrottleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, duration, scheduler) {
	        _super.call(this, destination);
	        this.duration = duration;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(arg) {
	    var subscriber = arg.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var startWith_1 = __webpack_require__(100);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(101);
	var ScalarObservable_1 = __webpack_require__(102);
	var EmptyObservable_1 = __webpack_require__(103);
	var concat_1 = __webpack_require__(105);
	var isScheduler_1 = __webpack_require__(104);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	var ScalarObservable_1 = __webpack_require__(102);
	var EmptyObservable_1 = __webpack_require__(103);
	var isScheduler_1 = __webpack_require__(104);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	        if (scheduler) {
	            this._isScalar = false;
	        }
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(104);
	var ArrayObservable_1 = __webpack_require__(101);
	var mergeAll_1 = __webpack_require__(106);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(107);
	var subscribeToResult_1 = __webpack_require__(108);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(56);
	var isArray_1 = __webpack_require__(59);
	var isPromise_1 = __webpack_require__(109);
	var Observable_1 = __webpack_require__(68);
	var iterator_1 = __webpack_require__(110);
	var InnerSubscriber_1 = __webpack_require__(111);
	var symbol_observable_1 = __webpack_require__(73);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[symbol_observable_1.default] === 'function') {
	        var obs = result[symbol_observable_1.default]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(56);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var withLatestFrom_1 = __webpack_require__(113);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(107);
	var subscribeToResult_1 = __webpack_require__(108);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var share_1 = __webpack_require__(115);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(116);
	var Subject_1 = __webpack_require__(119);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MulticastObservable_1 = __webpack_require__(117);
	var ConnectableObservable_1 = __webpack_require__(118);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function|Subject} Factory function to create an intermediate subject through
	 * which the source sequence's elements will be multicast to the selector function
	 * or Subject to push source elements into.
	 * @param {Function} Optional selector function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory, selector) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return !selector ?
	        new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) :
	        new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	var ConnectableObservable_1 = __webpack_require__(118);
	var MulticastObservable = (function (_super) {
	    __extends(MulticastObservable, _super);
	    function MulticastObservable(source, subjectFactory, selector) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	        this.selector = selector;
	    }
	    MulticastObservable.prototype._subscribe = function (subscriber) {
	        var _a = this, selector = _a.selector, source = _a.source;
	        var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
	        var subscription = selector(connectable).subscribe(subscriber);
	        subscription.add(connectable.connect());
	        return subscription;
	    };
	    return MulticastObservable;
	}(Observable_1.Observable));
	exports.MulticastObservable = MulticastObservable;
	//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(119);
	var Observable_1 = __webpack_require__(68);
	var Subscriber_1 = __webpack_require__(70);
	var Subscription_1 = __webpack_require__(58);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	        this._refCount = 0;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this._subject;
	        if (!subject || subject.isStopped) {
	            this._subject = this.subjectFactory();
	        }
	        return this._subject;
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var connection = this._connection;
	        if (!connection) {
	            connection = this._connection = new Subscription_1.Subscription();
	            connection.add(this.source
	                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
	            if (connection.isUnsubscribed) {
	                this._connection = null;
	                connection = Subscription_1.Subscription.EMPTY;
	            }
	            else {
	                this._connection = connection;
	            }
	        }
	        return connection;
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return this.lift(new RefCountOperator(this));
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscriber = (function (_super) {
	    __extends(ConnectableSubscriber, _super);
	    function ConnectableSubscriber(destination, connectable) {
	        _super.call(this, destination);
	        this.connectable = connectable;
	    }
	    ConnectableSubscriber.prototype._error = function (err) {
	        this._unsubscribe();
	        _super.prototype._error.call(this, err);
	    };
	    ConnectableSubscriber.prototype._complete = function () {
	        this._unsubscribe();
	        _super.prototype._complete.call(this);
	    };
	    ConnectableSubscriber.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        if (connectable) {
	            this.connectable = null;
	            var connection = connectable._connection;
	            connectable._refCount = 0;
	            connectable._subject = null;
	            connectable._connection = null;
	            if (connection) {
	                connection.unsubscribe();
	            }
	        }
	    };
	    return ConnectableSubscriber;
	}(Subject_1.SubjectSubscriber));
	var RefCountOperator = (function () {
	    function RefCountOperator(connectable) {
	        this.connectable = connectable;
	    }
	    RefCountOperator.prototype.call = function (subscriber, source) {
	        var connectable = this.connectable;
	        connectable._refCount++;
	        var refCounter = new RefCountSubscriber(subscriber, connectable);
	        var subscription = source._subscribe(refCounter);
	        if (!refCounter.isUnsubscribed) {
	            refCounter.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountOperator;
	}());
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, connectable) {
	        _super.call(this, destination);
	        this.connectable = connectable;
	    }
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        if (!connectable) {
	            this.connection = null;
	            return;
	        }
	        this.connectable = null;
	        var refCount = connectable._refCount;
	        if (refCount <= 0) {
	            this.connection = null;
	            return;
	        }
	        connectable._refCount = refCount - 1;
	        if (refCount > 1) {
	            this.connection = null;
	            return;
	        }
	        ///
	        // Compare the local RefCountSubscriber's connection Subscription to the
	        // connection Subscription on the shared ConnectableObservable. In cases
	        // where the ConnectableObservable source synchronously emits values, and
	        // the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
	        // execution continues to here before the RefCountOperator has a chance to
	        // supply the RefCountSubscriber with the shared connection Subscription.
	        // For example:
	        // ```
	        // Observable.range(0, 10)
	        //   .publish()
	        //   .refCount()
	        //   .take(5)
	        //   .subscribe();
	        // ```
	        // In order to account for this case, RefCountSubscriber should only dispose
	        // the ConnectableObservable's shared connection Subscription if the
	        // connection Subscription exists, *and* either:
	        //   a. RefCountSubscriber doesn't have a reference to the shared connection
	        //      Subscription yet, or,
	        //   b. RefCountSubscriber's connection Subscription reference is identical
	        //      to the shared connection Subscription
	        ///
	        var connection = this.connection;
	        var sharedConnection = connectable._connection;
	        this.connection = null;
	        if (sharedConnection && (!connection || sharedConnection === connection)) {
	            sharedConnection.unsubscribe();
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(68);
	var Subscriber_1 = __webpack_require__(70);
	var Subscription_1 = __webpack_require__(58);
	var ObjectUnsubscribedError_1 = __webpack_require__(120);
	var SubjectSubscription_1 = __webpack_require__(121);
	var rxSubscriber_1 = __webpack_require__(72);
	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = (function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        _super.call(this, destination);
	        this.destination = destination;
	    }
	    return SubjectSubscriber;
	}(Subscriber_1.Subscriber));
	exports.SubjectSubscriber = SubjectSubscriber;
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.call(this);
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasError = false;
	        this.thrownError = null;
	    }
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.isUnsubscribed = true;
	        this.observers = null;
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.isUnsubscribed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable_1.Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * @class AnonymousSubject<T>
	 */
	var AnonymousSubject = (function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            return Subscription_1.Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject));
	exports.AnonymousSubject = AnonymousSubject;
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        var err = _super.call(this, 'object unsubscribed');
	        this.name = err.name = 'ObjectUnsubscribedError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(58);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        _super.call(this);
	        this.subject = subject;
	        this.subscriber = subscriber;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var delay_1 = __webpack_require__(123);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(91);
	var isDate_1 = __webpack_require__(124);
	var Subscriber_1 = __webpack_require__(70);
	var Notification_1 = __webpack_require__(125);
	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return DelayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = currentwindowsize;
	function currentwindowsize() {
	  return { y: window.innerHeight, x: window.innerWidth };
	}

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ensurepos;
	function ensurepos(n) {
	  return n >= 0 ? n : -1 * n;
	}

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.applyTransform = applyTransform;
	exports.translate = translate;
	function applyTransform(el, transform) {
	  el.style.mozTransform = transform;
	  el.style.msTransform = transform;
	  el.style.webkitTransform = transform;
	  return el;
	}
	
	function translate(el, x, y) {
	  return applyTransform(el, "translate(" + x + "px, " + y + "px)");
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _raf = __webpack_require__(6);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _Observable = __webpack_require__(68);
	
	__webpack_require__(85);
	
	__webpack_require__(88);
	
	__webpack_require__(93);
	
	__webpack_require__(114);
	
	__webpack_require__(99);
	
	__webpack_require__(130);
	
	__webpack_require__(132);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import 'rxjs/add/operator/pairwise'
	//import 'rxjs/add/operator/throttleTime'
	
	var scrollTop = function scrollTop(_) {
	  return $(document).scrollTop();
	};
	
	var scrollTops$ = _Observable.Observable.fromEvent(window, 'scroll').map(function (_) {
	  return { scrollTop: scrollTop() };
	}).share();
	
	var scrolls$ = scrollTops$.scan(function (acc, scroll) {
	  console.log(acc, scroll);
	  return {
	    scrollTop: scroll.scrollTop,
	    dir: acc.scrollTop < scroll.scrollTop ? "down" : "up"
	  };
	});
	
	exports.default = function (config) {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var scan_1 = __webpack_require__(131);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	/**
	 * Applies an accumulator function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T, index: number): R} accumulator
	 * The accumulator function called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.index = 0;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var index = this.index++;
	        var result;
	        try {
	            result = this.accumulator(this.seed, value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(68);
	var distinctUntilChanged_1 = __webpack_require__(133);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(70);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTMxZGQyYzE5YTk4ZTg0YTRjOTAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9mcm9udC1wYWdlL3JvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcGFnZS9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9saWIvcXJhZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2UvcGFyYWxsYXhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc2NoZWR1bGVyL1F1ZXVlU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvUXVldWVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9GdXR1cmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvcm9vdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL3RyeUNhdGNoLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL2Vycm9yT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9BbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL3N1YnNjcmliZU9uLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3N5bWJvbC9yeFN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3Ivc3Vic2NyaWJlT24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvU3Vic2NyaWJlT25PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvYXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc2NoZWR1bGVyL0FzYXBTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9Bc2FwQWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL0ltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9saWIvcGFyYWxsYXhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvRnJvbUV2ZW50T2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvSW50ZXJ2YWxPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvbWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvcGFpcndpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3BhaXJ3aXNlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci90aHJvdHRsZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9zdGFydFdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3N0YXJ0V2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvU2NhbGFyT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvbWVyZ2VBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvSW5uZXJTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3NoYXJlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9tdWx0aWNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvTXVsdGljYXN0T2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL1N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL1N1YmplY3RTdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNEYXRlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2xpYi9jdXJyZW50d2luZG93c2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvbGliL2Vuc3VyZXBvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvbGliL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9mcm9udC1wYWdlL3Njcm9sbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL3NjYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3NjYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUVBLEdBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBTTs7QUFFdEIsS0FBRSxVQUFGLEVBQWMsTUFBZCxDQUFxQixVQUFDLEtBQUQsRUFBVztBQUM5QixXQUFNLGVBQU4sR0FEOEI7QUFFOUIsV0FBTSxjQUFOLEdBRjhCO0FBRzlCLFlBQU8sS0FBUCxDQUg4QjtJQUFYLENBQXJCLENBRnNCOztBQVN0Qiw4QkFUc0I7QUFVdEIsZ0NBVnNCO0VBQU4sQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBR2UsWUFBTTs7QUFFbkIsdUJBQUssR0FBTCxFQUFVLGFBQVYsRUFGbUI7QUFHbkIsdUJBQUssUUFBTCxFQUFlLGFBQWYsRUFBOEIsUUFBOUIsRUFIbUI7QUFJbkIsdUJBQUssVUFBTCxFQUFpQixRQUFqQixFQUptQjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQixpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLHlDOzs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxnRDs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Qsa0Q7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCxpRCIsImZpbGUiOiJmcm9udC1wYWdlLjAuMC4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTMxZGQyYzE5YTk4ZTg0YTRjOTBcbiAqKi8iLCJcclxuaW1wb3J0IHJvdXRpbmcgZnJvbSAnLi9yb3V0aW5nJ1xyXG5pbXBvcnQgcGFyYWxsYXhpbmcgZnJvbSAnLi9wYXJhbGxheGluZydcclxuaW1wb3J0IHNjcm9sbGluZyBmcm9tICcuL3Njcm9sbGluZydcclxuXHJcbnJvdXRpbmcoKVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuICAkKCcuc3VicGFnZScpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KVxyXG5cclxuICBcclxuICBzY3JvbGxpbmcoKVxyXG4gIHBhcmFsbGF4aW5nKClcclxuXHJcbn0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9pbmRleC5qc1xuICoqLyIsIlxyXG5pbXBvcnQgcGFnZSBmcm9tICdwYWdlJ1xyXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcclxuaW1wb3J0IHFyYWYgZnJvbSAnLi4vLi4vbGliL3FyYWYnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICBwYWdlKCcvJywgY2xvc2VPcGVuUGFnZSlcclxuICBwYWdlKCcvOnBhZ2UnLCBjbG9zZU9wZW5QYWdlLCBzaG93UGFnZSlcclxuICBwYWdlKCcvOnBhZ2UvKicsIHNob3dQYWdlKVxyXG4gIHBhZ2UoJy9pbnN0cnVrdG9lcmVyLycsIGNsb3NlT3Blbkluc3RydWN0b3IpXHJcbiAgcGFnZSgnL2luc3RydWt0b2VyZXIvOmluc3RydWN0b3InLCBjbG9zZU9wZW5JbnN0cnVjdG9yLCBzaG93SW5zdHJ1Y3RvcilcclxuXHJcbiAgYW5pbWF0ZVBhZ2VJbigpXHJcblxyXG4gIGxpc3RlbkZvckVzY2FwZUJ1dHRvbihfID0+IGhpc3RvcnkuYmFjaygpKVxyXG5cclxuICBwYWdlKClcclxuICBcclxufVxyXG5cclxuXHJcbmxldCAkb3BlblBhZ2UgPSBudWxsXHJcbmxldCAkb3Blbkluc3RydWN0b3JEZXRhaWxzID0gbnVsbFxyXG5cclxuXHJcbmNvbnN0IHNob3dQYWdlID0gKGN0eCwgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHtwYWdlfSA9IGN0eC5wYXJhbXNcclxuICBjb25zdCAkcGFnZSA9ICQoYC5zdWJwYWdlLiR7cGFnZX1gKVxyXG5cclxuICBpZigkcGFnZS5sZW5ndGggJiYgISRwYWdlLmlzKCRvcGVuUGFnZSkpIHtcclxuICAgICRvcGVuUGFnZSA9ICRwYWdlXHJcbiAgICByYWYoXyA9PiBhbmltYXRlU3VicGFnZUluKCRvcGVuUGFnZSwgbmV4dCkpXHJcbiAgfVxyXG4gIGVsc2UgaWYoJHBhZ2UubGVuZ3RoKSB7XHJcbiAgICBuZXh0KClcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJ1bmhhbmRsZWQgNDA0XCIsIHBhZ2UpXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuY29uc3QgY2xvc2VPcGVuUGFnZSA9IChjdHgsIG5leHQpID0+IHtcclxuICBpZigkb3BlblBhZ2UgJiYgISRvcGVuUGFnZS5oYXNDbGFzcyhjdHgucGFyYW1zLnBhZ2UpKSB7XHJcbiAgICBhbmltYXRlU3VicGFnZU91dCgkb3BlblBhZ2UsIF8gPT4ge1xyXG4gICAgICAkb3BlblBhZ2UgPSBudWxsXHJcbiAgICAgIG5leHQoKVxyXG4gICAgfSlcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBuZXh0KClcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBhbmltYXRlUGFnZUluID0gKGNiID0gZiA9PiBmKSA9PiB7XHJcbiAgc2V0VGltZW91dChfID0+IHtcclxuICAgICQoXCIjZnJvbnQtcGFnZVwiKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgY2IoKVxyXG4gIH0sIDY2KVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVN1YnBhZ2VJbiA9ICgkcGFnZSwgY2IpID0+IHtcclxuICBxcmFmKFtcclxuICAgIF8gPT4gXHJcbiAgICAgICRwYWdlLmNzcyh7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBvcGFjaXR5OiAwLjAwMDAxXHJcbiAgICAgIH0pLFxyXG4gICAgXyA9PiBcclxuICAgICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9LCAxMzcsIGNiKVxyXG4gIF0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBhbmltYXRlU3VicGFnZU91dCA9ICgkcGFnZSwgY2IgPSBmID0+IGYpID0+IHtcclxuICByYWYoXyA9PiB7XHJcbiAgICAkcGFnZS5hbmltYXRlKHtcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwgMTM3LCBfID0+IHtcclxuICAgICAgJHBhZ2UuaGlkZSgpXHJcbiAgICAgIGNiKClcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3dJbnN0cnVjdG9yID0gKGN0eCkgPT4ge1xyXG4gIGNvbnN0ICRpbnN0cnVjdG9yTGlzdCA9ICQoJy5pbnN0cnVjdG9yLWxpc3QnKVxyXG4gIGNvbnN0ICRpbnN0cnVjdG9yRGV0YWlscyA9ICQoYC5pbnN0cnVjdG9yLWRldGFpbFtkYXRhLWluc3RydWN0b3Ita2V5PSR7Y3R4LnBhcmFtcy5pbnN0cnVjdG9yfV1gKVxyXG4gIFxyXG4gICRvcGVuSW5zdHJ1Y3RvckRldGFpbHMgPSAkaW5zdHJ1Y3RvckRldGFpbHNcclxuICBcclxuICBxcmFmKFtcclxuICAgIF8gPT4gJGluc3RydWN0b3JMaXN0LmZhZGVPdXQoMTM3KSxcclxuICAgIF8gPT4gJG9wZW5QYWdlLnNjcm9sbFRvcCgwKSxcclxuICAgIF8gPT4gJGluc3RydWN0b3JEZXRhaWxzXHJcbiAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKVxyXG4gICAgICAgICAgIC5jc3MoJ29wYWNpdHknLCAwLjAwMDEpXHJcbiAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDEzNylcclxuICBdKVxyXG59XHJcblxyXG5cclxuY29uc3QgY2xvc2VPcGVuSW5zdHJ1Y3RvciA9IChjdHgsIG5leHQpID0+IHtcclxuICBjb25zdCAkaW5zdHJ1Y3Rvckxpc3QgPSAkKCcuaW5zdHJ1Y3Rvci1saXN0JylcclxuICBxcmFmKFtcclxuICAgIF8gPT4gJGluc3RydWN0b3JMaXN0LmZhZGVJbigxMzcpLFxyXG4gICAgJG9wZW5JbnN0cnVjdG9yRGV0YWlscyA/XHJcbiAgICAgICBfID0+XHJcbiAgICAgICAgJG9wZW5JbnN0cnVjdG9yRGV0YWlsc1xyXG4gICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwLjAwMDEgfSwgMTM3LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICRvcGVuSW5zdHJ1Y3RvckRldGFpbHMuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpXHJcbiAgICAgICAgICAgICRvcGVuSW5zdHJ1Y3RvckRldGFpbHMgPSBudWxsXHJcbiAgICAgICAgICAgIG5leHQoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgOlxyXG4gICAgICBuZXh0XHJcbiAgXSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGxpc3RlbkZvckVzY2FwZUJ1dHRvbiA9IChjYikgPT4ge1xyXG4gICQoJ2JvZHknKS5rZXl1cChldmVudCA9PiB7XHJcbiAgICAoZXZlbnQua2V5Q29kZSA9PSAyNyAmJiAkb3BlblBhZ2UpICYmXHJcbiAgICAgIGNiKClcclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9yb3V0aW5nLmpzXG4gKiovIiwiICAvKiBnbG9iYWxzIHJlcXVpcmUsIG1vZHVsZSAqL1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICovXG5cbiAgdmFyIHBhdGh0b1JlZ2V4cCA9IHJlcXVpcmUoJ3BhdGgtdG8tcmVnZXhwJyk7XG5cbiAgLyoqXG4gICAqIE1vZHVsZSBleHBvcnRzLlxuICAgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2U7XG5cbiAgLyoqXG4gICAqIERldGVjdCBjbGljayBldmVudFxuICAgKi9cbiAgdmFyIGNsaWNrRXZlbnQgPSAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBkb2N1bWVudCkgJiYgZG9jdW1lbnQub250b3VjaHN0YXJ0ID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcblxuICAvKipcbiAgICogVG8gd29yayBwcm9wZXJseSB3aXRoIHRoZSBVUkxcbiAgICogaGlzdG9yeS5sb2NhdGlvbiBnZW5lcmF0ZWQgcG9seWZpbGwgaW4gaHR0cHM6Ly9naXRodWIuY29tL2Rldm90ZS9IVE1MNS1IaXN0b3J5LUFQSVxuICAgKi9cblxuICB2YXIgbG9jYXRpb24gPSAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB3aW5kb3cpICYmICh3aW5kb3cuaGlzdG9yeS5sb2NhdGlvbiB8fCB3aW5kb3cubG9jYXRpb24pO1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGluaXRpYWwgZGlzcGF0Y2guXG4gICAqL1xuXG4gIHZhciBkaXNwYXRjaCA9IHRydWU7XG5cblxuICAvKipcbiAgICogRGVjb2RlIFVSTCBjb21wb25lbnRzIChxdWVyeSBzdHJpbmcsIHBhdGhuYW1lLCBoYXNoKS5cbiAgICogQWNjb21tb2RhdGVzIGJvdGggcmVndWxhciBwZXJjZW50IGVuY29kaW5nIGFuZCB4LXd3dy1mb3JtLXVybGVuY29kZWQgZm9ybWF0LlxuICAgKi9cbiAgdmFyIGRlY29kZVVSTENvbXBvbmVudHMgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCYXNlIHBhdGguXG4gICAqL1xuXG4gIHZhciBiYXNlID0gJyc7XG5cbiAgLyoqXG4gICAqIFJ1bm5pbmcgZmxhZy5cbiAgICovXG5cbiAgdmFyIHJ1bm5pbmc7XG5cbiAgLyoqXG4gICAqIEhhc2hCYW5nIG9wdGlvblxuICAgKi9cblxuICB2YXIgaGFzaGJhbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogUHJldmlvdXMgY29udGV4dCwgZm9yIGNhcHR1cmluZ1xuICAgKiBwYWdlIGV4aXQgZXZlbnRzLlxuICAgKi9cblxuICB2YXIgcHJldkNvbnRleHQ7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGBwYXRoYCB3aXRoIGNhbGxiYWNrIGBmbigpYCxcbiAgICogb3Igcm91dGUgYHBhdGhgLCBvciByZWRpcmVjdGlvbixcbiAgICogb3IgYHBhZ2Uuc3RhcnQoKWAuXG4gICAqXG4gICAqICAgcGFnZShmbik7XG4gICAqICAgcGFnZSgnKicsIGZuKTtcbiAgICogICBwYWdlKCcvdXNlci86aWQnLCBsb2FkLCB1c2VyKTtcbiAgICogICBwYWdlKCcvdXNlci8nICsgdXNlci5pZCwgeyBzb21lOiAndGhpbmcnIH0pO1xuICAgKiAgIHBhZ2UoJy91c2VyLycgKyB1c2VyLmlkKTtcbiAgICogICBwYWdlKCcvZnJvbScsICcvdG8nKVxuICAgKiAgIHBhZ2UoKTtcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8IUZ1bmN0aW9ufCFPYmplY3R9IHBhdGhcbiAgICogQHBhcmFtIHtGdW5jdGlvbj19IGZuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHBhZ2UocGF0aCwgZm4pIHtcbiAgICAvLyA8Y2FsbGJhY2s+XG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBwYXRoKSB7XG4gICAgICByZXR1cm4gcGFnZSgnKicsIHBhdGgpO1xuICAgIH1cblxuICAgIC8vIHJvdXRlIDxwYXRoPiB0byA8Y2FsbGJhY2sgLi4uPlxuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm4pIHtcbiAgICAgIHZhciByb3V0ZSA9IG5ldyBSb3V0ZSgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHBhZ2UuY2FsbGJhY2tzLnB1c2gocm91dGUubWlkZGxld2FyZShhcmd1bWVudHNbaV0pKTtcbiAgICAgIH1cbiAgICAgIC8vIHNob3cgPHBhdGg+IHdpdGggW3N0YXRlXVxuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXRoKSB7XG4gICAgICBwYWdlWydzdHJpbmcnID09PSB0eXBlb2YgZm4gPyAncmVkaXJlY3QnIDogJ3Nob3cnXShwYXRoLCBmbik7XG4gICAgICAvLyBzdGFydCBbb3B0aW9uc11cbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZS5zdGFydChwYXRoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb25zLlxuICAgKi9cblxuICBwYWdlLmNhbGxiYWNrcyA9IFtdO1xuICBwYWdlLmV4aXRzID0gW107XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgcGF0aCBiZWluZyBwcm9jZXNzZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHBhZ2UuY3VycmVudCA9ICcnO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGFnZXMgbmF2aWdhdGVkIHRvLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKlxuICAgKiAgICAgcGFnZS5sZW4gPT0gMDtcbiAgICogICAgIHBhZ2UoJy9sb2dpbicpO1xuICAgKiAgICAgcGFnZS5sZW4gPT0gMTtcbiAgICovXG5cbiAgcGFnZS5sZW4gPSAwO1xuXG4gIC8qKlxuICAgKiBHZXQgb3Igc2V0IGJhc2VwYXRoIHRvIGBwYXRoYC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5iYXNlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIGlmICgwID09PSBhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gYmFzZTtcbiAgICBiYXNlID0gcGF0aDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqICAgIC0gYGNsaWNrYCBiaW5kIHRvIGNsaWNrIGV2ZW50cyBbdHJ1ZV1cbiAgICogICAgLSBgcG9wc3RhdGVgIGJpbmQgdG8gcG9wc3RhdGUgW3RydWVdXG4gICAqICAgIC0gYGRpc3BhdGNoYCBwZXJmb3JtIGluaXRpYWwgZGlzcGF0Y2ggW3RydWVdXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2Uuc3RhcnQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHJ1bm5pbmcpIHJldHVybjtcbiAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICBpZiAoZmFsc2UgPT09IG9wdGlvbnMuZGlzcGF0Y2gpIGRpc3BhdGNoID0gZmFsc2U7XG4gICAgaWYgKGZhbHNlID09PSBvcHRpb25zLmRlY29kZVVSTENvbXBvbmVudHMpIGRlY29kZVVSTENvbXBvbmVudHMgPSBmYWxzZTtcbiAgICBpZiAoZmFsc2UgIT09IG9wdGlvbnMucG9wc3RhdGUpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9ucG9wc3RhdGUsIGZhbHNlKTtcbiAgICBpZiAoZmFsc2UgIT09IG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgb25jbGljaywgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gb3B0aW9ucy5oYXNoYmFuZykgaGFzaGJhbmcgPSB0cnVlO1xuICAgIGlmICghZGlzcGF0Y2gpIHJldHVybjtcbiAgICB2YXIgdXJsID0gKGhhc2hiYW5nICYmIH5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyMhJykpID8gbG9jYXRpb24uaGFzaC5zdWJzdHIoMikgKyBsb2NhdGlvbi5zZWFyY2ggOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2g7XG4gICAgcGFnZS5yZXBsYWNlKHVybCwgbnVsbCwgdHJ1ZSwgZGlzcGF0Y2gpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmJpbmQgY2xpY2sgYW5kIHBvcHN0YXRlIGV2ZW50IGhhbmRsZXJzLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXJ1bm5pbmcpIHJldHVybjtcbiAgICBwYWdlLmN1cnJlbnQgPSAnJztcbiAgICBwYWdlLmxlbiA9IDA7XG4gICAgcnVubmluZyA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgb25jbGljaywgZmFsc2UpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9ucG9wc3RhdGUsIGZhbHNlKTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBgcGF0aGAgd2l0aCBvcHRpb25hbCBgc3RhdGVgIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBzdGF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBkaXNwYXRjaFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBwdXNoXG4gICAqIEByZXR1cm4geyFDb250ZXh0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLnNob3cgPSBmdW5jdGlvbihwYXRoLCBzdGF0ZSwgZGlzcGF0Y2gsIHB1c2gpIHtcbiAgICB2YXIgY3R4ID0gbmV3IENvbnRleHQocGF0aCwgc3RhdGUpO1xuICAgIHBhZ2UuY3VycmVudCA9IGN0eC5wYXRoO1xuICAgIGlmIChmYWxzZSAhPT0gZGlzcGF0Y2gpIHBhZ2UuZGlzcGF0Y2goY3R4KTtcbiAgICBpZiAoZmFsc2UgIT09IGN0eC5oYW5kbGVkICYmIGZhbHNlICE9PSBwdXNoKSBjdHgucHVzaFN0YXRlKCk7XG4gICAgcmV0dXJuIGN0eDtcbiAgfTtcblxuICAvKipcbiAgICogR29lcyBiYWNrIGluIHRoZSBoaXN0b3J5XG4gICAqIEJhY2sgc2hvdWxkIGFsd2F5cyBsZXQgdGhlIGN1cnJlbnQgcm91dGUgcHVzaCBzdGF0ZSBhbmQgdGhlbiBnbyBiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGZhbGxiYWNrIHBhdGggdG8gZ28gYmFjayBpZiBubyBtb3JlIGhpc3RvcnkgZXhpc3RzLCBpZiB1bmRlZmluZWQgZGVmYXVsdHMgdG8gcGFnZS5iYXNlXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gc3RhdGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5iYWNrID0gZnVuY3Rpb24ocGF0aCwgc3RhdGUpIHtcbiAgICBpZiAocGFnZS5sZW4gPiAwKSB7XG4gICAgICAvLyB0aGlzIG1heSBuZWVkIG1vcmUgdGVzdGluZyB0byBzZWUgaWYgYWxsIGJyb3dzZXJzXG4gICAgICAvLyB3YWl0IGZvciB0aGUgbmV4dCB0aWNrIHRvIGdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICBwYWdlLmxlbi0tO1xuICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5zaG93KHBhdGgsIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5zaG93KGJhc2UsIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciByb3V0ZSB0byByZWRpcmVjdCBmcm9tIG9uZSBwYXRoIHRvIG90aGVyXG4gICAqIG9yIGp1c3QgcmVkaXJlY3QgdG8gYW5vdGhlciByb3V0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbSAtIGlmIHBhcmFtICd0bycgaXMgdW5kZWZpbmVkIHJlZGlyZWN0cyB0byAnZnJvbSdcbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0b1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcGFnZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gICAgLy8gRGVmaW5lIHJvdXRlIGZyb20gYSBwYXRoIHRvIGFub3RoZXJcbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBmcm9tICYmICdzdHJpbmcnID09PSB0eXBlb2YgdG8pIHtcbiAgICAgIHBhZ2UoZnJvbSwgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBhZ2UucmVwbGFjZSgvKiogQHR5cGUgeyFzdHJpbmd9ICovICh0bykpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIHRoZSBwdXNoIHN0YXRlIGFuZCByZXBsYWNlIGl0IHdpdGggYW5vdGhlclxuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGZyb20gJiYgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0bykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5yZXBsYWNlKGZyb20pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGBwYXRoYCB3aXRoIG9wdGlvbmFsIGBzdGF0ZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdD19IHN0YXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGluaXRcbiAgICogQHBhcmFtIHtib29sZWFuPX0gZGlzcGF0Y2hcbiAgICogQHJldHVybiB7IUNvbnRleHR9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG5cbiAgcGFnZS5yZXBsYWNlID0gZnVuY3Rpb24ocGF0aCwgc3RhdGUsIGluaXQsIGRpc3BhdGNoKSB7XG4gICAgdmFyIGN0eCA9IG5ldyBDb250ZXh0KHBhdGgsIHN0YXRlKTtcbiAgICBwYWdlLmN1cnJlbnQgPSBjdHgucGF0aDtcbiAgICBjdHguaW5pdCA9IGluaXQ7XG4gICAgY3R4LnNhdmUoKTsgLy8gc2F2ZSBiZWZvcmUgZGlzcGF0Y2hpbmcsIHdoaWNoIG1heSByZWRpcmVjdFxuICAgIGlmIChmYWxzZSAhPT0gZGlzcGF0Y2gpIHBhZ2UuZGlzcGF0Y2goY3R4KTtcbiAgICByZXR1cm4gY3R4O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZ2l2ZW4gYGN0eGAuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29udGV4dH0gY3R4XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcGFnZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBwcmV2ID0gcHJldkNvbnRleHQsXG4gICAgICBpID0gMCxcbiAgICAgIGogPSAwO1xuXG4gICAgcHJldkNvbnRleHQgPSBjdHg7XG5cbiAgICBmdW5jdGlvbiBuZXh0RXhpdCgpIHtcbiAgICAgIHZhciBmbiA9IHBhZ2UuZXhpdHNbaisrXTtcbiAgICAgIGlmICghZm4pIHJldHVybiBuZXh0RW50ZXIoKTtcbiAgICAgIGZuKHByZXYsIG5leHRFeGl0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0RW50ZXIoKSB7XG4gICAgICB2YXIgZm4gPSBwYWdlLmNhbGxiYWNrc1tpKytdO1xuXG4gICAgICBpZiAoY3R4LnBhdGggIT09IHBhZ2UuY3VycmVudCkge1xuICAgICAgICBjdHguaGFuZGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWZuKSByZXR1cm4gdW5oYW5kbGVkKGN0eCk7XG4gICAgICBmbihjdHgsIG5leHRFbnRlcik7XG4gICAgfVxuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIG5leHRFeGl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRFbnRlcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5oYW5kbGVkIGBjdHhgLiBXaGVuIGl0J3Mgbm90IHRoZSBpbml0aWFsXG4gICAqIHBvcHN0YXRlIHRoZW4gcmVkaXJlY3QuIElmIHlvdSB3aXNoIHRvIGhhbmRsZVxuICAgKiA0MDRzIG9uIHlvdXIgb3duIHVzZSBgcGFnZSgnKicsIGNhbGxiYWNrKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29udGV4dH0gY3R4XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdW5oYW5kbGVkKGN0eCkge1xuICAgIGlmIChjdHguaGFuZGxlZCkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50O1xuXG4gICAgaWYgKGhhc2hiYW5nKSB7XG4gICAgICBjdXJyZW50ID0gYmFzZSArIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIyEnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCA9PT0gY3R4LmNhbm9uaWNhbFBhdGgpIHJldHVybjtcbiAgICBwYWdlLnN0b3AoKTtcbiAgICBjdHguaGFuZGxlZCA9IGZhbHNlO1xuICAgIGxvY2F0aW9uLmhyZWYgPSBjdHguY2Fub25pY2FsUGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBleGl0IHJvdXRlIG9uIGBwYXRoYCB3aXRoXG4gICAqIGNhbGxiYWNrIGBmbigpYCwgd2hpY2ggd2lsbCBiZSBjYWxsZWRcbiAgICogb24gdGhlIHByZXZpb3VzIGNvbnRleHQgd2hlbiBhIG5ld1xuICAgKiBwYWdlIGlzIHZpc2l0ZWQuXG4gICAqL1xuICBwYWdlLmV4aXQgPSBmdW5jdGlvbihwYXRoLCBmbikge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBhZ2UuZXhpdCgnKicsIHBhdGgpO1xuICAgIH1cblxuICAgIHZhciByb3V0ZSA9IG5ldyBSb3V0ZShwYXRoKTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgcGFnZS5leGl0cy5wdXNoKHJvdXRlLm1pZGRsZXdhcmUoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgVVJMIGVuY29kaW5nIGZyb20gdGhlIGdpdmVuIGBzdHJgLlxuICAgKiBBY2NvbW1vZGF0ZXMgd2hpdGVzcGFjZSBpbiBib3RoIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgKiBhbmQgcmVndWxhciBwZXJjZW50LWVuY29kZWQgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbCAtIFVSTCBjb21wb25lbnQgdG8gZGVjb2RlXG4gICAqL1xuICBmdW5jdGlvbiBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KHZhbCkge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykgeyByZXR1cm4gdmFsOyB9XG4gICAgcmV0dXJuIGRlY29kZVVSTENvbXBvbmVudHMgPyBkZWNvZGVVUklDb21wb25lbnQodmFsLnJlcGxhY2UoL1xcKy9nLCAnICcpKSA6IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IFwicmVxdWVzdFwiIGBDb250ZXh0YFxuICAgKiB3aXRoIHRoZSBnaXZlbiBgcGF0aGAgYW5kIG9wdGlvbmFsIGluaXRpYWwgYHN0YXRlYC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gc3RhdGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gQ29udGV4dChwYXRoLCBzdGF0ZSkge1xuICAgIGlmICgnLycgPT09IHBhdGhbMF0gJiYgMCAhPT0gcGF0aC5pbmRleE9mKGJhc2UpKSBwYXRoID0gYmFzZSArIChoYXNoYmFuZyA/ICcjIScgOiAnJykgKyBwYXRoO1xuICAgIHZhciBpID0gcGF0aC5pbmRleE9mKCc/Jyk7XG5cbiAgICB0aGlzLmNhbm9uaWNhbFBhdGggPSBwYXRoO1xuICAgIHRoaXMucGF0aCA9IHBhdGgucmVwbGFjZShiYXNlLCAnJykgfHwgJy8nO1xuICAgIGlmIChoYXNoYmFuZykgdGhpcy5wYXRoID0gdGhpcy5wYXRoLnJlcGxhY2UoJyMhJywgJycpIHx8ICcvJztcblxuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgfHwge307XG4gICAgdGhpcy5zdGF0ZS5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnF1ZXJ5c3RyaW5nID0gfmkgPyBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KHBhdGguc2xpY2UoaSArIDEpKSA6ICcnO1xuICAgIHRoaXMucGF0aG5hbWUgPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KH5pID8gcGF0aC5zbGljZSgwLCBpKSA6IHBhdGgpO1xuICAgIHRoaXMucGFyYW1zID0ge307XG5cbiAgICAvLyBmcmFnbWVudFxuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIGlmICghaGFzaGJhbmcpIHtcbiAgICAgIGlmICghfnRoaXMucGF0aC5pbmRleE9mKCcjJykpIHJldHVybjtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMucGF0aC5zcGxpdCgnIycpO1xuICAgICAgdGhpcy5wYXRoID0gcGFydHNbMF07XG4gICAgICB0aGlzLmhhc2ggPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KHBhcnRzWzFdKSB8fCAnJztcbiAgICAgIHRoaXMucXVlcnlzdHJpbmcgPSB0aGlzLnF1ZXJ5c3RyaW5nLnNwbGl0KCcjJylbMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBgQ29udGV4dGAuXG4gICAqL1xuXG4gIHBhZ2UuQ29udGV4dCA9IENvbnRleHQ7XG5cbiAgLyoqXG4gICAqIFB1c2ggc3RhdGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBDb250ZXh0LnByb3RvdHlwZS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBwYWdlLmxlbisrO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHRoaXMuc3RhdGUsIHRoaXMudGl0bGUsIGhhc2hiYW5nICYmIHRoaXMucGF0aCAhPT0gJy8nID8gJyMhJyArIHRoaXMucGF0aCA6IHRoaXMuY2Fub25pY2FsUGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGNvbnRleHQgc3RhdGUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIENvbnRleHQucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnRpdGxlLCBoYXNoYmFuZyAmJiB0aGlzLnBhdGggIT09ICcvJyA/ICcjIScgKyB0aGlzLnBhdGggOiB0aGlzLmNhbm9uaWNhbFBhdGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGBSb3V0ZWAgd2l0aCB0aGUgZ2l2ZW4gSFRUUCBgcGF0aGAsXG4gICAqIGFuZCBhbiBhcnJheSBvZiBgY2FsbGJhY2tzYCBhbmQgYG9wdGlvbnNgLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgIC0gYHNlbnNpdGl2ZWAgICAgZW5hYmxlIGNhc2Utc2Vuc2l0aXZlIHJvdXRlc1xuICAgKiAgIC0gYHN0cmljdGAgICAgICAgZW5hYmxlIHN0cmljdCBtYXRjaGluZyBmb3IgdHJhaWxpbmcgc2xhc2hlc1xuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBSb3V0ZShwYXRoLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5wYXRoID0gKHBhdGggPT09ICcqJykgPyAnKC4qKScgOiBwYXRoO1xuICAgIHRoaXMubWV0aG9kID0gJ0dFVCc7XG4gICAgdGhpcy5yZWdleHAgPSBwYXRodG9SZWdleHAodGhpcy5wYXRoLFxuICAgICAgdGhpcy5rZXlzID0gW10sXG4gICAgICBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvc2UgYFJvdXRlYC5cbiAgICovXG5cbiAgcGFnZS5Sb3V0ZSA9IFJvdXRlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gcm91dGUgbWlkZGxld2FyZSB3aXRoXG4gICAqIHRoZSBnaXZlbiBjYWxsYmFjayBgZm4oKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBSb3V0ZS5wcm90b3R5cGUubWlkZGxld2FyZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbihjdHgsIG5leHQpIHtcbiAgICAgIGlmIChzZWxmLm1hdGNoKGN0eC5wYXRoLCBjdHgucGFyYW1zKSkgcmV0dXJuIGZuKGN0eCwgbmV4dCk7XG4gICAgICBuZXh0KCk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyByb3V0ZSBtYXRjaGVzIGBwYXRoYCwgaWYgc29cbiAgICogcG9wdWxhdGUgYHBhcmFtc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIFJvdXRlLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKHBhdGgsIHBhcmFtcykge1xuICAgIHZhciBrZXlzID0gdGhpcy5rZXlzLFxuICAgICAgcXNJbmRleCA9IHBhdGguaW5kZXhPZignPycpLFxuICAgICAgcGF0aG5hbWUgPSB+cXNJbmRleCA/IHBhdGguc2xpY2UoMCwgcXNJbmRleCkgOiBwYXRoLFxuICAgICAgbSA9IHRoaXMucmVnZXhwLmV4ZWMoZGVjb2RlVVJJQ29tcG9uZW50KHBhdGhuYW1lKSk7XG5cbiAgICBpZiAoIW0pIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICB2YXIgdmFsID0gZGVjb2RlVVJMRW5jb2RlZFVSSUNvbXBvbmVudChtW2ldKTtcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCB8fCAhKGhhc093blByb3BlcnR5LmNhbGwocGFyYW1zLCBrZXkubmFtZSkpKSB7XG4gICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICAvKipcbiAgICogSGFuZGxlIFwicG9wdWxhdGVcIiBldmVudHMuXG4gICAqL1xuXG4gIHZhciBvbnBvcHN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygd2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBvbnBvcHN0YXRlKGUpIHtcbiAgICAgIGlmICghbG9hZGVkKSByZXR1cm47XG4gICAgICBpZiAoZS5zdGF0ZSkge1xuICAgICAgICB2YXIgcGF0aCA9IGUuc3RhdGUucGF0aDtcbiAgICAgICAgcGFnZS5yZXBsYWNlKHBhdGgsIGUuc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZS5zaG93KGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uaGFzaCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xuICAvKipcbiAgICogSGFuZGxlIFwiY2xpY2tcIiBldmVudHMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uY2xpY2soZSkge1xuXG4gICAgaWYgKDEgIT09IHdoaWNoKGUpKSByZXR1cm47XG5cbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSByZXR1cm47XG4gICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuXG5cblxuICAgIC8vIGVuc3VyZSBsaW5rXG4gICAgLy8gdXNlIHNoYWRvdyBkb20gd2hlbiBhdmFpbGFibGVcbiAgICB2YXIgZWwgPSBlLnBhdGggPyBlLnBhdGhbMF0gOiBlLnRhcmdldDtcbiAgICB3aGlsZSAoZWwgJiYgJ0EnICE9PSBlbC5ub2RlTmFtZSkgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgIGlmICghZWwgfHwgJ0EnICE9PSBlbC5ub2RlTmFtZSkgcmV0dXJuO1xuXG5cblxuICAgIC8vIElnbm9yZSBpZiB0YWcgaGFzXG4gICAgLy8gMS4gXCJkb3dubG9hZFwiIGF0dHJpYnV0ZVxuICAgIC8vIDIuIHJlbD1cImV4dGVybmFsXCIgYXR0cmlidXRlXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnZXh0ZXJuYWwnKSByZXR1cm47XG5cbiAgICAvLyBlbnN1cmUgbm9uLWhhc2ggZm9yIHRoZSBzYW1lIHBhdGhcbiAgICB2YXIgbGluayA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICghaGFzaGJhbmcgJiYgZWwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lICYmIChlbC5oYXNoIHx8ICcjJyA9PT0gbGluaykpIHJldHVybjtcblxuXG5cbiAgICAvLyBDaGVjayBmb3IgbWFpbHRvOiBpbiB0aGUgaHJlZlxuICAgIGlmIChsaW5rICYmIGxpbmsuaW5kZXhPZignbWFpbHRvOicpID4gLTEpIHJldHVybjtcblxuICAgIC8vIGNoZWNrIHRhcmdldFxuICAgIGlmIChlbC50YXJnZXQpIHJldHVybjtcblxuICAgIC8vIHgtb3JpZ2luXG4gICAgaWYgKCFzYW1lT3JpZ2luKGVsLmhyZWYpKSByZXR1cm47XG5cblxuXG4gICAgLy8gcmVidWlsZCBwYXRoXG4gICAgdmFyIHBhdGggPSBlbC5wYXRobmFtZSArIGVsLnNlYXJjaCArIChlbC5oYXNoIHx8ICcnKTtcblxuICAgIC8vIHN0cmlwIGxlYWRpbmcgXCIvW2RyaXZlIGxldHRlcl06XCIgb24gTlcuanMgb24gV2luZG93c1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGF0aC5tYXRjaCgvXlxcL1thLXpBLVpdOlxcLy8pKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvW2EtekEtWl06XFwvLywgJy8nKTtcbiAgICB9XG5cbiAgICAvLyBzYW1lIHBhZ2VcbiAgICB2YXIgb3JpZyA9IHBhdGg7XG5cbiAgICBpZiAocGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoYmFzZS5sZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChoYXNoYmFuZykgcGF0aCA9IHBhdGgucmVwbGFjZSgnIyEnLCAnJyk7XG5cbiAgICBpZiAoYmFzZSAmJiBvcmlnID09PSBwYXRoKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFnZS5zaG93KG9yaWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGJ1dHRvbi5cbiAgICovXG5cbiAgZnVuY3Rpb24gd2hpY2goZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICByZXR1cm4gbnVsbCA9PT0gZS53aGljaCA/IGUuYnV0dG9uIDogZS53aGljaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBgaHJlZmAgaXMgdGhlIHNhbWUgb3JpZ2luLlxuICAgKi9cblxuICBmdW5jdGlvbiBzYW1lT3JpZ2luKGhyZWYpIHtcbiAgICB2YXIgb3JpZ2luID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgaWYgKGxvY2F0aW9uLnBvcnQpIG9yaWdpbiArPSAnOicgKyBsb2NhdGlvbi5wb3J0O1xuICAgIHJldHVybiAoaHJlZiAmJiAoMCA9PT0gaHJlZi5pbmRleE9mKG9yaWdpbikpKTtcbiAgfVxuXG4gIHBhZ2Uuc2FtZU9yaWdpbiA9IHNhbWVPcmlnaW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYWdlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNhcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoVG9SZWdleHBcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W14oKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXigpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIHN1ZmZpeCA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgdmFyIHJlcGVhdCA9IHN1ZmZpeCA9PT0gJysnIHx8IHN1ZmZpeCA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gc3VmZml4ID09PSAnPycgfHwgc3VmZml4ID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcHJlZml4IHx8ICcvJ1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cCB8fCAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGRlbGltaXRlciArICddKz8nKVxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhdHRlcm46IGVzY2FwZUdyb3VwKHBhdHRlcm4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBzdHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyKSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0b2tlbnNbaV0ucGF0dGVybiArICckJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIFwiJyArIHZhbHVlICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL10pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAge1JlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHtSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IHBhcnNlKHBhdGgpXG4gIHZhciByZSA9IHRva2Vuc1RvUmVnRXhwKHRva2Vucywgb3B0aW9ucylcblxuICAvLyBBdHRhY2gga2V5cyBiYWNrIHRvIHRoZSByZWdleHAuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICBrZXlzLnB1c2godG9rZW5zW2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlLCBrZXlzKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICB0b2tlbnNcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuICB2YXIgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVxuICB2YXIgZW5kc1dpdGhTbGFzaCA9IHR5cGVvZiBsYXN0VG9rZW4gPT09ICdzdHJpbmcnICYmIC9cXC8kLy50ZXN0KGxhc3RUb2tlbilcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9IHRva2VuLnBhdHRlcm5cblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKidcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZVxuICAgIH1cbiAgfVxuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aFNsYXNoID8gcm91dGUuc2xpY2UoMCwgLTIpIDogcm91dGUpICsgJyg/OlxcXFwvKD89JCkpPydcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCdcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoU2xhc2ggPyAnJyA6ICcoPz1cXFxcL3wkKSdcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhTdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgICAgICAgICBba2V5c11cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgICAgW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBrZXlzID0ga2V5cyB8fCBbXVxuXG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSBrZXlzXG4gICAga2V5cyA9IFtdXG4gIH0gZWxzZSBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoaXNhcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucylcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhZ2Uvfi9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxyXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcclxuXHJcbmNvbnN0IGxpbmtlZCA9IChhcnIpID0+IHtcclxuICBjb25zdCBoZWFkID0gYXJyWzBdXHJcbiAgY29uc3QgdGFpbCA9IGFyci5zbGljZSgxKVxyXG4gIHJldHVybiBbaGVhZCwgdGFpbF1cclxufVxyXG5cclxuY29uc3QgcnVuID0gKFtoZWFkLCB0YWlsXSkgPT4ge1xyXG4gIGlmKGhlYWQpIHtcclxuICAgIHJhZihoZWFkKVxyXG4gICAgcmV0dXJuIHJ1bihsaW5rZWQodGFpbCkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm5zKSA9PiB7XHJcbiAgcmV0dXJuIHJ1bihsaW5rZWQoZm5zKSlcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2xpYi9xcmFmLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcclxuaW1wb3J0IHtBbmltYXRpb25GcmFtZVNjaGVkdWxlcn0gZnJvbSAncnhqcy9zY2hlZHVsZXIvQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXInXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3Vic2NyaWJlT24nXHJcbmltcG9ydCBwYXJhbGxheGluZyBmcm9tICcuLi8uLi9saWIvcGFyYWxsYXhpbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gXHJcblxyXG4gICAgLy8gY29uc3QgcGFyYWxsYXgkID0gcGFyYWxsYXhpbmcoeyBcclxuICAgIC8vICAgdGFyZ2V0OiAkKGRvY3VtZW50KSxcclxuICAgIC8vICAgbWF4T2Zmc2V0dDogNVxyXG4gICAgLy8gfSlcclxuICAgIC8vIC5zdWJzY3JpYmVPbihBbmltYXRpb25GcmFtZVNjaGVkdWxlcilcclxuICAgIC8vIC5zaGFyZSgpXHJcblxyXG4gICAgLy8gcGFyYWxsYXgkXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoZnJhbWUgPT4ge1xyXG4gICAgLy8gICAgIHRyYW5zbGF0ZSgkKCcjY292ZXIgLmJhY2tncm91bmQtaW1hZ2UnKSwgZnJhbWUpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIHBhcmFsbGF4JFxyXG4gICAgLy8gICAubWFwKCh7dG9wLCBsZWZ0fSkgPT4gKHsgdG9wOiB0b3AgLyAxMDAgKiAyMCwgbGVmdDogbGVmdCAvIDEwMCAqIDE1IH0pKVxyXG4gICAgLy8gICAuc3Vic2NyaWJlKGZyYW1lID0+IHtcclxuICAgIC8vICAgICB0cmFuc2xhdGUoJCgnLnBob3RvJyksIGZyYW1lKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBwYXJhbGxheCRcclxuICAgIC8vICAgLm1hcCgoe3RvcCwgbGVmdH0pID0+ICh7IHRvcDogdG9wIC8gMTAwICogNDAsIGxlZnQ6IGxlZnQgLyAxMDAgKiA2MCB9KSlcclxuICAgIC8vICAgLnN1YnNjcmliZShmcmFtZSA9PiB7XHJcbiAgICAvLyAgICAgdHJhbnNsYXRlKCQoJy5saW5rJyksIGZyYW1lKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBwYXJhbGxheCRcclxuICAgIC8vICAgLm1hcCgoe3RvcCwgbGVmdH0pID0+ICh7IHRvcDogKHRvcCAvIDEwMCAqIDM1KSAqIC0xLCBsZWZ0OiAobGVmdCAvIDEwMCAqIDM1ICogLTEpIH0pKVxyXG4gICAgLy8gICAuc3Vic2NyaWJlKGZyYW1lID0+IHtcclxuICAgIC8vICAgICB0cmFuc2xhdGUoJCgnLnRleHQtYmxvY2snKSwgZnJhbWUpXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRyYW5zbGF0ZSA9ICh0YXJnZXQsIGZyYW1lKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2ZyYW1lLmxlZnR9cHgsICR7ZnJhbWUudG9wfXB4KWBcclxuICB0YXJnZXQuY3NzKHtcclxuICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJy1tb3otdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxyXG4gICAgJ3RyYW5zZm9ybSc6IHRyYW5zZm9ybVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2UvcGFyYWxsYXhpbmcuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFF1ZXVlU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuL1F1ZXVlU2NoZWR1bGVyJyk7XG52YXIgQW5pbWF0aW9uRnJhbWVBY3Rpb25fMSA9IHJlcXVpcmUoJy4vQW5pbWF0aW9uRnJhbWVBY3Rpb24nKTtcbnZhciBBbmltYXRpb25GcmFtZVNjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlTm93ID0gZnVuY3Rpb24gKHdvcmssIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uRnJhbWVBY3Rpb25fMS5BbmltYXRpb25GcmFtZUFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG59KFF1ZXVlU2NoZWR1bGVyXzEuUXVldWVTY2hlZHVsZXIpKTtcbmV4cG9ydHMuQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgPSBBbmltYXRpb25GcmFtZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIFF1ZXVlQWN0aW9uXzEgPSByZXF1aXJlKCcuL1F1ZXVlQWN0aW9uJyk7XG52YXIgRnV0dXJlQWN0aW9uXzEgPSByZXF1aXJlKCcuL0Z1dHVyZUFjdGlvbicpO1xudmFyIFF1ZXVlU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWV1ZVNjaGVkdWxlcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW107IC8vIFhYWDogdXNlIGBhbnlgIHRvIHJlbW92ZSB0eXBlIHBhcmFtIGBUYCBmcm9tIGBWaXJ0dWFsVGltZVNjaGVkdWxlcmAuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVkSWQgPSBudWxsO1xuICAgIH1cbiAgICBRdWV1ZVNjaGVkdWxlci5wcm90b3R5cGUubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICB9O1xuICAgIFF1ZXVlU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlIHx8IHRoaXMuc2NoZWR1bGVkSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICAvLyBYWFg6IHVzZSBgYW55YCB0byByZW1vdmUgdHlwZSBwYXJhbSBgVGAgZnJvbSBgVmlydHVhbFRpbWVTY2hlZHVsZXJgLlxuICAgICAgICBmb3IgKHZhciBhY3Rpb24gPSBudWxsOyBhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCk7KSB7XG4gICAgICAgICAgICBhY3Rpb24uZXhlY3V0ZSgpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhyb3cgYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWV1ZVNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gKGRlbGF5IDw9IDApID9cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVOb3cod29yaywgc3RhdGUpIDpcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVMYXRlcih3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgIH07XG4gICAgUXVldWVTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlTm93ID0gZnVuY3Rpb24gKHdvcmssIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUXVldWVBY3Rpb25fMS5RdWV1ZUFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSk7XG4gICAgfTtcbiAgICBRdWV1ZVNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVMYXRlciA9IGZ1bmN0aW9uICh3b3JrLCBkZWxheSwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdXR1cmVBY3Rpb25fMS5GdXR1cmVBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZVNjaGVkdWxlcjtcbn0oKSk7XG5leHBvcnRzLlF1ZXVlU2NoZWR1bGVyID0gUXVldWVTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZVNjaGVkdWxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9RdWV1ZVNjaGVkdWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIEZ1dHVyZUFjdGlvbl8xID0gcmVxdWlyZSgnLi9GdXR1cmVBY3Rpb24nKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgUXVldWVBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhRdWV1ZUFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZUFjdGlvbigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5fc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fc2NoZWR1bGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIHNjaGVkdWxlci5mbHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZUFjdGlvbjtcbn0oRnV0dXJlQWN0aW9uXzEuRnV0dXJlQWN0aW9uKSk7XG5leHBvcnRzLlF1ZXVlQWN0aW9uID0gUXVldWVBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZUFjdGlvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9RdWV1ZUFjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvcm9vdCcpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaXB0aW9uJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIEZ1dHVyZUFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZ1dHVyZUFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGdXR1cmVBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIEZ1dHVyZUFjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JrKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZ1dHVyZUFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBGdXR1cmVBY3Rpb24ucHJvdG90eXBlLl9zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIC8vIEFsd2F5cyByZXBsYWNlIHRoZSBjdXJyZW50IHN0YXRlIHdpdGggdGhlIG5ldyBzdGF0ZS5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAvLyBTZXQgdGhlIHBlbmRpbmcgZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBhY3Rpb24gaGFzIGJlZW4gc2NoZWR1bGVkLCBvclxuICAgICAgICAvLyBoYXMgcmVjdXJzaXZlbHkgcmVzY2hlZHVsZWQgaXRzZWxmLlxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYW4gaW50ZXJ2YWxJRCBhbmQgdGhlIHNwZWNpZmllZCBkZWxheSBtYXRjaGVzIHRoZVxuICAgICAgICAvLyBkZWxheSB3ZSB1c2VkIHRvIGNyZWF0ZSB0aGUgaW50ZXJ2YWxJRCwgZG9uJ3QgY2FsbCBgc2V0SW50ZXJ2YWxgIGFnYWluLlxuICAgICAgICBpZiAoaWQgIT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICAvLyBJZiB0aGlzIGFjdGlvbiBoYXMgYW4gaW50ZXJ2YWxJRCwgYnV0IHdhcyByZXNjaGVkdWxlZCB3aXRoIGEgZGlmZmVyZW50XG4gICAgICAgIC8vIGBkZWxheWAgdGltZSwgY2FuY2VsIHRoZSBjdXJyZW50IGludGVydmFsSUQgYW5kIGNhbGwgYHNldEludGVydmFsYCB3aXRoXG4gICAgICAgIC8vIHRoZSBuZXcgYGRlbGF5YCB0aW1lLlxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICAgICAgICByb290XzEucm9vdC5jbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBJbXBvcnRhbnQgaW1wbGVtZW50YXRpb24gbm90ZTpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgRnV0dXJlQWN0aW9uIG9ubHkgZXhlY3V0ZXMgb25jZS4gSG93ZXZlciwgQWN0aW9ucyBoYXZlIHRoZVxuICAgICAgICAvLyBhYmlsaXR5IHRvIGJlIHJlc2NoZWR1bGVkIGZyb20gd2l0aGluIHRoZSBzY2hlZHVsZWQgY2FsbGJhY2sgKG1pbWlja2luZ1xuICAgICAgICAvLyByZWN1cnNpb24gZm9yIGFzeW5jaHJvbm91cyBtZXRob2RzKS4gVGhpcyBhbGxvd3MgdXMgdG8gaW1wbGVtZW50IHNpbmdsZVxuICAgICAgICAvLyBhbmQgcmVwZWF0ZWQgYWN0aW9ucyB3aXRoIHRoZSBzYW1lIGNvZGUgcGF0aCB3aXRob3V0IGFkZGluZyBBUEkgc3VyZmFjZVxuICAgICAgICAvLyBhcmVhLCBhbmQgaW1wbGVtZW50IHRhaWwtY2FsbCBvcHRpbWl6YXRpb24gb3ZlciBhc3luY2hyb25vdXMgYm91bmRhcmllcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSG93ZXZlciwgSlMgcnVudGltZXMgbWFrZSBhIGRpc3RpbmN0aW9uIGJldHdlZW4gaW50ZXJ2YWxzIHNjaGVkdWxlZCBieVxuICAgICAgICAvLyByZXBlYXRlZGx5IGNhbGxpbmcgYHNldFRpbWVvdXRgIHZzLiBhIHNpbmdsZSBgc2V0SW50ZXJ2YWxgIGNhbGwsIHdpdGhcbiAgICAgICAgLy8gdGhlIGxhdHRlciBwcm92aWRpbmcgYSBiZXR0ZXIgZ3VhcmFudGVlIG9mIHByZWNpc2lvbi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW4gb3JkZXIgdG8gYWNjb21tb2RhdGUgYm90aCBzaW5nbGUgYW5kIHJlcGVhdGVkbHkgcmVzY2hlZHVsZWQgYWN0aW9ucyxcbiAgICAgICAgLy8gdXNlIGBzZXRJbnRlcnZhbGAgaGVyZSBmb3IgYm90aCBjYXNlcy4gQnkgZGVmYXVsdCwgdGhlIGludGVydmFsIHdpbGwgYmVcbiAgICAgICAgLy8gY2FuY2VsZWQgYWZ0ZXIgaXRzIGZpcnN0IGV4ZWN1dGlvbiwgb3IgaWYgdGhlIGFjdGlvbiBzY2hlZHVsZXMgaXRzZWxmIHRvXG4gICAgICAgIC8vIHJ1biBhZ2FpbiB3aXRoIGEgZGlmZmVyZW50IGBkZWxheWAgdGltZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSWYgdGhlIGFjdGlvbiByZWN1cnNpdmVseSBzY2hlZHVsZXMgaXRzZWxmIHRvIHJ1biBhZ2FpbiB3aXRoIHRoZSBzYW1lXG4gICAgICAgIC8vIGBkZWxheWAgdGltZSwgdGhlIGludGVydmFsIGlzIG5vdCBjYW5jZWxlZCwgYnV0IGFsbG93ZWQgdG8gbG9vcCBhZ2Fpbi5cbiAgICAgICAgLy8gVGhlIGNoZWNrIG9mIHdoZXRoZXIgdGhlIGludGVydmFsIHNob3VsZCBiZSBjYW5jZWxlZCBvciBub3QgaXMgcnVuIGV2ZXJ5XG4gICAgICAgIC8vIHRpbWUgdGhlIGludGVydmFsIGlzIGV4ZWN1dGVkLiBUaGUgZmlyc3QgdGltZSBhbiBhY3Rpb24gZmFpbHMgdG9cbiAgICAgICAgLy8gcmVzY2hlZHVsZSBpdHNlbGYsIHRoZSBpbnRlcnZhbCBpcyBjYW5jZWxlZC5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5pZCA9IHJvb3RfMS5yb290LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLCBpZCA9IF9hLmlkLCBzY2hlZHVsZXIgPSBfYS5zY2hlZHVsZXI7XG4gICAgICAgICAgICBzY2hlZHVsZXIuYWN0aW9ucy5wdXNoKF90aGlzKTtcbiAgICAgICAgICAgIHNjaGVkdWxlci5mbHVzaCgpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRlcm1pbmF0ZSB0aGlzIGludGVydmFsIGlmIHRoZSBhY3Rpb24gZGlkbid0IHJlc2NoZWR1bGUgaXRzZWxmLlxuICAgICAgICAgICAgLy8gRG9uJ3QgY2FsbCBgdGhpcy51bnN1YnNjcmliZSgpYCBoZXJlLCBiZWNhdXNlIHRoZSBhY3Rpb24gY291bGQgYmVcbiAgICAgICAgICAgIC8vIHJlc2NoZWR1bGVkIGxhdGVyLiBGb3IgZXhhbXBsZTpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBgYGBcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiBkb1dvcmsoY291bnRlcikge1xuICAgICAgICAgICAgLy8gICAvKiAuLi4gSSdtIGEgYnVzeSB3b3JrZXIgYmVlIC4uLiAqL1xuICAgICAgICAgICAgLy8gICB2YXIgb3JpZ2luYWxBY3Rpb24gPSB0aGlzO1xuICAgICAgICAgICAgLy8gICAvKiB3YWl0IDEwMG1zIGJlZm9yZSByZXNjaGVkdWxpbmcgdGhpcyBhY3Rpb24gYWdhaW4gKi9cbiAgICAgICAgICAgIC8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgb3JpZ2luYWxBY3Rpb24uc2NoZWR1bGUoY291bnRlciArIDEpO1xuICAgICAgICAgICAgLy8gICB9LCAxMDApO1xuICAgICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgICAgICAvLyBgYGBcbiAgICAgICAgICAgIGlmIChfdGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiBpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJvb3RfMS5yb290LmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRnV0dXJlQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBpZCA9IF9hLmlkLCBzY2hlZHVsZXIgPSBfYS5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgICAgICAgICAgcm9vdF8xLnJvb3QuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29yayA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gRnV0dXJlQWN0aW9uO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuRnV0dXJlQWN0aW9uID0gRnV0dXJlQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RnV0dXJlQWN0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc2NoZWR1bGVyL0Z1dHVyZUFjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAnYm9vbGVhbic6IGZhbHNlLFxuICAgICdmdW5jdGlvbic6IHRydWUsXG4gICAgJ29iamVjdCc6IHRydWUsXG4gICAgJ251bWJlcic6IGZhbHNlLFxuICAgICdzdHJpbmcnOiBmYWxzZSxcbiAgICAndW5kZWZpbmVkJzogZmFsc2Vcbn07XG5leHBvcnRzLnJvb3QgPSAob2JqZWN0VHlwZXNbdHlwZW9mIHNlbGZdICYmIHNlbGYpIHx8IChvYmplY3RUeXBlc1t0eXBlb2Ygd2luZG93XSAmJiB3aW5kb3cpO1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlICovXG52YXIgZnJlZUV4cG9ydHMgPSBvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xudmFyIGZyZWVNb2R1bGUgPSBvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG52YXIgZnJlZUdsb2JhbCA9IG9iamVjdFR5cGVzW3R5cGVvZiBnbG9iYWxdICYmIGdsb2JhbDtcbmlmIChmcmVlR2xvYmFsICYmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkpIHtcbiAgICBleHBvcnRzLnJvb3QgPSBmcmVlR2xvYmFsO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm9vdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvcm9vdC5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoJy4vdXRpbC9pc0FycmF5Jyk7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoJy4vdXRpbC9pc09iamVjdCcpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoJy4vdXRpbC9pc0Z1bmN0aW9uJyk7XG52YXIgdHJ5Q2F0Y2hfMSA9IHJlcXVpcmUoJy4vdXRpbC90cnlDYXRjaCcpO1xudmFyIGVycm9yT2JqZWN0XzEgPSByZXF1aXJlKCcuL3V0aWwvZXJyb3JPYmplY3QnKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKCcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcicpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFt1bnN1YnNjcmliZV0gQSBmdW5jdGlvbiBkZXNjcmliaW5nIGhvdyB0b1xuICAgICAqIHBlcmZvcm0gdGhlIGRpc3Bvc2FsIG9mIHJlc291cmNlcyB3aGVuIHRoZSBgdW5zdWJzY3JpYmVgIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIFN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZC5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgICAqIGFuIG9uZ29pbmcgT2JzZXJ2YWJsZSBleGVjdXRpb24gb3IgY2FuY2VsIGFueSBvdGhlciB0eXBlIG9mIHdvcmsgdGhhdFxuICAgICAqIHN0YXJ0ZWQgd2hlbiB0aGUgU3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfdW5zdWJzY3JpYmUgPSBfYS5fdW5zdWJzY3JpYmUsIF9zdWJzY3JpcHRpb25zID0gX2EuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgdmFyIHRyaWFsID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaChfdW5zdWJzY3JpYmUpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChlcnJvcnMgPSBlcnJvcnMgfHwgW10pLnB1c2goZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0XzEuaXNPYmplY3Qoc3ViKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJpYWwgPSB0cnlDYXRjaF8xLnRyeUNhdGNoKHN1Yi51bnN1YnNjcmliZSkuY2FsbChzdWIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChlcnIuZXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0Vycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0ZWFyIGRvd24gdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdW5zdWJzY3JpYmUoKSBvZiB0aGlzXG4gICAgICogU3Vic2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogSWYgdGhlIHRlYXIgZG93biBiZWluZyBhZGRlZCBpcyBhIHN1YnNjcmlwdGlvbiB0aGF0IGlzIGFscmVhZHlcbiAgICAgKiB1bnN1YnNjcmliZWQsIGlzIHRoZSBzYW1lIHJlZmVyZW5jZSBgYWRkYCBpcyBiZWluZyBjYWxsZWQgb24sIG9yIGlzXG4gICAgICogYFN1YnNjcmlwdGlvbi5FTVBUWWAsIGl0IHdpbGwgbm90IGJlIGFkZGVkLlxuICAgICAqXG4gICAgICogSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSBpbiBhbiBgaXNVbnN1YnNjcmliZWRgIHN0YXRlLCB0aGUgcGFzc2VkXG4gICAgICogdGVhciBkb3duIGxvZ2ljIHdpbGwgYmUgZXhlY3V0ZWQgaW1tZWRpYXRlbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RlYXJkb3duTG9naWN9IHRlYXJkb3duIFRoZSBhZGRpdGlvbmFsIGxvZ2ljIHRvIGV4ZWN1dGUgb25cbiAgICAgKiB0ZWFyZG93bi5cbiAgICAgKiBAcmV0dXJuIHtTdWJzY3JpcHRpb259IFJldHVybnMgdGhlIFN1YnNjcmlwdGlvbiB1c2VkIG9yIGNyZWF0ZWQgdG8gYmVcbiAgICAgKiBhZGRlZCB0byB0aGUgaW5uZXIgc3Vic2NyaXB0aW9ucyBsaXN0LiBUaGlzIFN1YnNjcmlwdGlvbiBjYW4gYmUgdXNlZCB3aXRoXG4gICAgICogYHJlbW92ZSgpYCB0byByZW1vdmUgdGhlIHBhc3NlZCB0ZWFyZG93biBsb2dpYyBmcm9tIHRoZSBpbm5lciBzdWJzY3JpcHRpb25zXG4gICAgICogbGlzdC5cbiAgICAgKi9cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICBpZiAoIXRlYXJkb3duIHx8ICh0ZWFyZG93biA9PT0gdGhpcykgfHwgKHRlYXJkb3duID09PSBTdWJzY3JpcHRpb24uRU1QVFkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YiA9IHRlYXJkb3duO1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3ViLmlzVW5zdWJzY3JpYmVkIHx8IHR5cGVvZiBzdWIudW5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5fc3Vic2NyaXB0aW9ucyB8fCAodGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdKSkucHVzaChzdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBTdWJzY3JpcHRpb24gZnJvbSB0aGUgaW50ZXJuYWwgbGlzdCBvZiBzdWJzY3JpcHRpb25zIHRoYXQgd2lsbFxuICAgICAqIHVuc3Vic2NyaWJlIGR1cmluZyB0aGUgdW5zdWJzY3JpYmUgcHJvY2VzcyBvZiB0aGlzIFN1YnNjcmlwdGlvbi5cbiAgICAgKiBAcGFyYW0ge1N1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gdG8gcmVtb3ZlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIEhBQ0s6IFRoaXMgbWlnaHQgYmUgcmVkdW5kYW50IGJlY2F1c2Ugb2YgdGhlIGxvZ2ljIGluIGBhZGQoKWBcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PSBudWxsIHx8IChzdWJzY3JpcHRpb24gPT09IHRoaXMpIHx8IChzdWJzY3JpcHRpb24gPT09IFN1YnNjcmlwdGlvbi5FTVBUWSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoZW1wdHkpIHtcbiAgICAgICAgZW1wdHkuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfShuZXcgU3Vic2NyaXB0aW9uKCkpKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydHMuU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvU3Vic2NyaXB0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYmplY3QuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXJyb3JPYmplY3RfMSA9IHJlcXVpcmUoJy4vZXJyb3JPYmplY3QnKTtcbnZhciB0cnlDYXRjaFRhcmdldDtcbmZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyeUNhdGNoVGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgdHJ5Q2F0Y2hUYXJnZXQgPSBmbjtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hlcjtcbn1cbmV4cG9ydHMudHJ5Q2F0Y2ggPSB0cnlDYXRjaDtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyeUNhdGNoLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC90cnlDYXRjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8vIHR5cGVvZiBhbnkgc28gdGhhdCBpdCB3ZSBkb24ndCBoYXZlIHRvIGNhc3Qgd2hlbiBjb21wYXJpbmcgYSByZXN1bHQgdG8gdGhlIGVycm9yIG9iamVjdFxuZXhwb3J0cy5lcnJvck9iamVjdCA9IHsgZToge30gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yT2JqZWN0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9lcnJvck9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBvbmUgb3IgbW9yZSBlcnJvcnMgaGF2ZSBvY2N1cnJlZCBkdXJpbmcgdGhlXG4gKiBgdW5zdWJzY3JpYmVgIG9mIGEge0BsaW5rIFN1YnNjcmlwdGlvbn0uXG4gKi9cbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdWJzY3JpcHRpb25FcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIHZhciBlcnIgPSBFcnJvci5jYWxsKHRoaXMsIGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG4gIFwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiAoKGkgKyAxKSArIFwiKSBcIiArIGVyci50b1N0cmluZygpKTsgfSkuam9pbignXFxuICAnKSA6ICcnKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXJyLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBlcnIuc3RhY2s7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gVW5zdWJzY3JpcHRpb25FcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydHMuVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgRnV0dXJlQWN0aW9uXzEgPSByZXF1aXJlKCcuL0Z1dHVyZUFjdGlvbicpO1xudmFyIEFuaW1hdGlvbkZyYW1lXzEgPSByZXF1aXJlKCcuLi91dGlsL0FuaW1hdGlvbkZyYW1lJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIEFuaW1hdGlvbkZyYW1lQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uRnJhbWVBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVBY3Rpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBbmltYXRpb25GcmFtZUFjdGlvbi5wcm90b3R5cGUuX3NjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3NjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBzY2hlZHVsZXIuYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICBpZiAoIXNjaGVkdWxlci5zY2hlZHVsZWRJZCkge1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZElkID0gQW5pbWF0aW9uRnJhbWVfMS5BbmltYXRpb25GcmFtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyLmZsdXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFuaW1hdGlvbkZyYW1lQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIHNjaGVkdWxlZElkID0gc2NoZWR1bGVyLnNjaGVkdWxlZElkLCBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2NoZWR1bGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNjaGVkdWxlZElkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGVkSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIEFuaW1hdGlvbkZyYW1lXzEuQW5pbWF0aW9uRnJhbWUuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVkSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWVBY3Rpb247XG59KEZ1dHVyZUFjdGlvbl8xLkZ1dHVyZUFjdGlvbikpO1xuZXhwb3J0cy5BbmltYXRpb25GcmFtZUFjdGlvbiA9IEFuaW1hdGlvbkZyYW1lQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QW5pbWF0aW9uRnJhbWVBY3Rpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9zY2hlZHVsZXIvQW5pbWF0aW9uRnJhbWVBY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi9yb290Jyk7XG52YXIgUmVxdWVzdEFuaW1hdGlvbkZyYW1lRGVmaW5pdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVxdWVzdEFuaW1hdGlvbkZyYW1lRGVmaW5pdGlvbihyb290KSB7XG4gICAgICAgIGlmIChyb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHJvb3QubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcm9vdC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHJvb3Qud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcm9vdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gcm9vdC5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQocm9vdCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3QubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb290Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSByb290Lm9DYW5jZWxBbmltYXRpb25GcmFtZS5iaW5kKHJvb3QpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByb290Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSByb290LmNsZWFyVGltZW91dC5iaW5kKHJvb3QpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIHJvb3Quc2V0VGltZW91dChjYiwgMTAwMCAvIDYwKTsgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUmVxdWVzdEFuaW1hdGlvbkZyYW1lRGVmaW5pdGlvbjtcbn0oKSk7XG5leHBvcnRzLlJlcXVlc3RBbmltYXRpb25GcmFtZURlZmluaXRpb24gPSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVEZWZpbml0aW9uO1xuZXhwb3J0cy5BbmltYXRpb25GcmFtZSA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVEZWZpbml0aW9uKHJvb3RfMS5yb290KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9BbmltYXRpb25GcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgc3Vic2NyaWJlT25fMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL3N1YnNjcmliZU9uJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlT24gPSBzdWJzY3JpYmVPbl8xLnN1YnNjcmliZU9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlT24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3Ivc3Vic2NyaWJlT24uanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi91dGlsL3Jvb3QnKTtcbnZhciB0b1N1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4vdXRpbC90b1N1YnNjcmliZXInKTtcbnZhciBzeW1ib2xfb2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhbnkgc2V0IG9mIHZhbHVlcyBvdmVyIGFueSBhbW91bnQgb2YgdGltZS4gVGhpcyB0aGUgbW9zdCBiYXNpYyBidWlsZGluZyBibG9ja1xuICogb2YgUnhKUy5cbiAqXG4gKiBAY2xhc3MgT2JzZXJ2YWJsZTxUPlxuICovXG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIHRoZSBmdW5jdGlvbiB0aGF0IGlzICBjYWxsZWQgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpc1xuICAgICAqIGluaXRpYWxseSBzdWJzY3JpYmVkIHRvLiBUaGlzIGZ1bmN0aW9uIGlzIGdpdmVuIGEgU3Vic2NyaWJlciwgdG8gd2hpY2ggbmV3IHZhbHVlc1xuICAgICAqIGNhbiBiZSBgbmV4dGBlZCwgb3IgYW4gYGVycm9yYCBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byByYWlzZSBhbiBlcnJvciwgb3JcbiAgICAgKiBgY29tcGxldGVgIGNhbiBiZSBjYWxsZWQgdG8gbm90aWZ5IG9mIGEgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE9ic2VydmFibGUsIHdpdGggdGhpcyBPYnNlcnZhYmxlIGFzIHRoZSBzb3VyY2UsIGFuZCB0aGUgcGFzc2VkXG4gICAgICogb3BlcmF0b3IgZGVmaW5lZCBhcyB0aGUgbmV3IG9ic2VydmFibGUncyBvcGVyYXRvci5cbiAgICAgKiBAbWV0aG9kIGxpZnRcbiAgICAgKiBAcGFyYW0ge09wZXJhdG9yfSBvcGVyYXRvciB0aGUgb3BlcmF0b3IgZGVmaW5pbmcgdGhlIG9wZXJhdGlvbiB0byB0YWtlIG9uIHRoZSBvYnNlcnZhYmxlXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgb2JzZXJ2YWJsZSB3aXRoIHRoZSBPcGVyYXRvciBhcHBsaWVkXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBoYW5kbGVycyBmb3IgaGFuZGxpbmcgZW1pdHRlZCB2YWx1ZXMsIGVycm9yIGFuZCBjb21wbGV0aW9ucyBmcm9tIHRoZSBvYnNlcnZhYmxlLCBhbmRcbiAgICAgKiAgZXhlY3V0ZXMgdGhlIG9ic2VydmFibGUncyBzdWJzY3JpYmVyIGZ1bmN0aW9uLCB3aGljaCB3aWxsIHRha2UgYWN0aW9uIHRvIHNldCB1cCB0aGUgdW5kZXJseWluZyBkYXRhIHN0cmVhbVxuICAgICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHtQYXJ0aWFsT2JzZXJ2ZXJ8RnVuY3Rpb259IG9ic2VydmVyT3JOZXh0IChvcHRpb25hbCkgZWl0aGVyIGFuIG9ic2VydmVyIGRlZmluaW5nIGFsbCBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkLFxuICAgICAqICBvciB0aGUgZmlyc3Qgb2YgdGhyZWUgcG9zc2libGUgaGFuZGxlcnMsIHdoaWNoIGlzIHRoZSBoYW5kbGVyIGZvciBlYWNoIHZhbHVlIGVtaXR0ZWQgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAob3B0aW9uYWwpIGEgaGFuZGxlciBmb3IgYSB0ZXJtaW5hbCBldmVudCByZXN1bHRpbmcgZnJvbSBhbiBlcnJvci4gSWYgbm8gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCxcbiAgICAgKiAgdGhlIGVycm9yIHdpbGwgYmUgdGhyb3duIGFzIHVuaGFuZGxlZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBsZXRlIChvcHRpb25hbCkgYSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAgICAgKiBAcmV0dXJuIHtJU3Vic2NyaXB0aW9ufSBhIHN1YnNjcmlwdGlvbiByZWZlcmVuY2UgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yO1xuICAgICAgICB2YXIgc2luayA9IHRvU3Vic2NyaWJlcl8xLnRvU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBvcGVyYXRvci5jYWxsKHNpbmssIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luay5hZGQodGhpcy5fc3Vic2NyaWJlKHNpbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW5rO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBmb3JFYWNoXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dCBhIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgb2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB7UHJvbWlzZUNvbnN0cnVjdG9yfSBbUHJvbWlzZUN0b3JdIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgUHJvbWlzZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyBvbiBvYnNlcnZhYmxlIGNvbXBsZXRpb24gb3JcbiAgICAgKiAgcmVqZWN0cyB3aXRoIHRoZSBoYW5kbGVkIGVycm9yXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChuZXh0LCBQcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICAgICAgICBpZiAocm9vdF8xLnJvb3QuUnggJiYgcm9vdF8xLnJvb3QuUnguY29uZmlnICYmIHJvb3RfMS5yb290LlJ4LmNvbmZpZy5Qcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5SeC5jb25maWcuUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvb3RfMS5yb290LlByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlQ3RvciA9IHJvb3RfMS5yb290LlByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQcm9taXNlQ3Rvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHN1YnNjcmlwdGlvbiwgdGhlbiB3ZSBjYW4gc3VybWlzZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBoYW5kbGluZyBpcyBhc3luY2hyb25vdXMuIEFueSBlcnJvcnMgdGhyb3duXG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYmUgcmVqZWN0ZWQgZXhwbGljaXRseSBhbmQgdW5zdWJzY3JpYmUgbXVzdCBiZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsZWQgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIE5PIHN1YnNjcmlwdGlvbiwgdGhlbiB3ZSdyZSBnZXR0aW5nIGEgbmV4dGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIHN5bmNocm9ub3VzbHkgZHVyaW5nIHN1YnNjcmlwdGlvbi4gV2UgY2FuIGp1c3QgY2FsbCBpdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZXJyb3JzLCBPYnNlcnZhYmxlJ3MgYHN1YnNjcmliZWAgaW1wbGUgd2lsbCBlbnN1cmUgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuc3Vic2NyaXB0aW9uIGxvZ2ljIGlzIGNhbGxlZCwgdGhlbiBzeW5jaHJvbm91c2x5IHJldGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciB0aGF0LCBQcm9taXNlIHdpbGwgdHJhcCB0aGUgZXJyb3IgYW5kIHNlbmQgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG93biB0aGUgcmVqZWN0aW9uIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm9wIHBvaW50IGRlZmluZWQgYnkgdGhlIGVzNy1vYnNlcnZhYmxlIHNwZWMgaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgICAqIEBtZXRob2QgU3ltYm9sLm9ic2VydmFibGVcbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGlzIGluc3RhbmNlIG9mIHRoZSBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbc3ltYm9sX29ic2VydmFibGVfMS5kZWZhdWx0XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvLyBIQUNLOiBTaW5jZSBUeXBlU2NyaXB0IGluaGVyaXRzIHN0YXRpYyBwcm9wZXJ0aWVzIHRvbywgd2UgaGF2ZSB0b1xuICAgIC8vIGZpZ2h0IGFnYWluc3QgVHlwZVNjcmlwdCBoZXJlIHNvIFN1YmplY3QgY2FuIGhhdmUgYSBkaWZmZXJlbnQgc3RhdGljIGNyZWF0ZSBzaWduYXR1cmVcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGQgT2JzZXJ2YWJsZSBieSBjYWxsaW5nIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAgICogQHN0YXRpYyB0cnVlXG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZT8gdGhlIHN1YnNjcmliZXIgZnVuY3Rpb24gdG8gYmUgcGFzc2VkIHRvIHRoZSBPYnNlcnZhYmxlIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYSBuZXcgY29sZCBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9PYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL3N5bWJvbC9yeFN1YnNjcmliZXInKTtcbmZ1bmN0aW9uIHRvU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgaWYgKG5leHRPck9ic2VydmVyKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLiQkcnhTdWJzY3JpYmVyXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLiQkcnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG5leHBvcnRzLnRvU3Vic2NyaWJlciA9IHRvU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvU3Vic2NyaWJlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvdG9TdWJzY3JpYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgaXNGdW5jdGlvbl8xID0gcmVxdWlyZSgnLi91dGlsL2lzRnVuY3Rpb24nKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoJy4vU3Vic2NyaXB0aW9uJyk7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoJy4vT2JzZXJ2ZXInKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4vc3ltYm9sL3J4U3Vic2NyaWJlcicpO1xuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGludGVyZmFjZSBhbmQgZXh0ZW5kcyB0aGVcbiAqIHtAbGluayBTdWJzY3JpcHRpb259IGNsYXNzLiBXaGlsZSB0aGUge0BsaW5rIE9ic2VydmVyfSBpcyB0aGUgcHVibGljIEFQSSBmb3JcbiAqIGNvbnN1bWluZyB0aGUgdmFsdWVzIG9mIGFuIHtAbGluayBPYnNlcnZhYmxlfSwgYWxsIE9ic2VydmVycyBnZXQgY29udmVydGVkIHRvXG4gKiBhIFN1YnNjcmliZXIsIGluIG9yZGVyIHRvIHByb3ZpZGUgU3Vic2NyaXB0aW9uLWxpa2UgY2FwYWJpbGl0aWVzIHN1Y2ggYXNcbiAqIGB1bnN1YnNjcmliZWAuIFN1YnNjcmliZXIgaXMgYSBjb21tb24gdHlwZSBpbiBSeEpTLCBhbmQgY3J1Y2lhbCBmb3JcbiAqIGltcGxlbWVudGluZyBvcGVyYXRvcnMsIGJ1dCBpdCBpcyByYXJlbHkgdXNlZCBhcyBhIHB1YmxpYyBBUEkuXG4gKlxuICogQGNsYXNzIFN1YnNjcmliZXI8VD5cbiAqL1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8ZnVuY3Rpb24odmFsdWU6IFQpOiB2b2lkfSBbZGVzdGluYXRpb25Pck5leHRdIEEgcGFydGlhbGx5XG4gICAgICogZGVmaW5lZCBPYnNlcnZlciBvciBhIGBuZXh0YCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGU6ID9hbnkpOiB2b2lkfSBbZXJyb3JdIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnN5bmNFcnJvclZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25Pck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk9yTmV4dCBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbk9yTmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uYWRkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcih0aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcih0aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS4kJHJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIC8qKlxuICAgICAqIEEgc3RhdGljIGZhY3RvcnkgZm9yIGEgU3Vic2NyaWJlciwgZ2l2ZW4gYSAocG90ZW50aWFsbHkgcGFydGlhbCkgZGVmaW5pdGlvblxuICAgICAqIG9mIGFuIE9ic2VydmVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oeDogP1QpOiB2b2lkfSBbbmV4dF0gVGhlIGBuZXh0YCBjYWxsYmFjayBvZiBhbiBPYnNlcnZlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGU6ID9hbnkpOiB2b2lkfSBbZXJyb3JdIFRoZSBgZXJyb3JgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIFRoZSBgY29tcGxldGVgIGNhbGxiYWNrIG9mIGFuXG4gICAgICogT2JzZXJ2ZXIuXG4gICAgICogQHJldHVybiB7U3Vic2NyaWJlcjxUPn0gQSBTdWJzY3JpYmVyIHdyYXBwaW5nIHRoZSAocGFydGlhbGx5IGRlZmluZWQpXG4gICAgICogT2JzZXJ2ZXIgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSB7QGxpbmsgT2JzZXJ2ZXJ9IGNhbGxiYWNrIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvZiB0eXBlIGBuZXh0YCBmcm9tXG4gICAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYSB2YWx1ZS4gVGhlIE9ic2VydmFibGUgbWF5IGNhbGwgdGhpcyBtZXRob2QgMCBvciBtb3JlXG4gICAgICogdGltZXMuXG4gICAgICogQHBhcmFtIHtUfSBbdmFsdWVdIFRoZSBgbmV4dGAgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgZXJyb3JgIGZyb21cbiAgICAgKiB0aGUgT2JzZXJ2YWJsZSwgd2l0aCBhbiBhdHRhY2hlZCB7QGxpbmsgRXJyb3J9LiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdFxuICAgICAqIHRoZSBPYnNlcnZhYmxlIGhhcyBleHBlcmllbmNlZCBhbiBlcnJvciBjb25kaXRpb24uXG4gICAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIGEgdmFsdWVsZXNzIG5vdGlmaWNhdGlvbiBvZiB0eXBlXG4gICAgICogYGNvbXBsZXRlYCBmcm9tIHRoZSBPYnNlcnZhYmxlLiBOb3RpZmllcyB0aGUgT2JzZXJ2ZXIgdGhhdCB0aGUgT2JzZXJ2YWJsZVxuICAgICAqIGhhcyBmaW5pc2hlZCBzZW5kaW5nIHB1c2gtYmFzZWQgbm90aWZpY2F0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3Vic2NyaWJlciA9IFN1YnNjcmliZXI7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudCwgb2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSB0aGlzLnVuc3Vic2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuX25leHQgPSBuZXh0O1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50ID0gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgaWYgKCFfcGFyZW50LnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX25leHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnQsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghX3BhcmVudC5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnQsIHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIV9wYXJlbnQuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9wYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgX3BhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3BhcmVudC5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50LCB0aGlzLl9jb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICBfcGFyZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9TdWJzY3JpYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5lbXB0eSA9IHtcbiAgICBpc1Vuc3Vic2NyaWJlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyB0aHJvdyBlcnI7IH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvT2JzZXJ2ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9yb290Jyk7XG52YXIgU3ltYm9sID0gcm9vdF8xLnJvb3QuU3ltYm9sO1xuZXhwb3J0cy4kJHJ4U3Vic2NyaWJlciA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKSA/XG4gICAgU3ltYm9sLmZvcigncnhTdWJzY3JpYmVyJykgOiAnQEByeFN1YnNjcmliZXInO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnhTdWJzY3JpYmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc3ltYm9sL3J4U3Vic2NyaWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcG9ueWZpbGwgPSByZXF1aXJlKCcuL3BvbnlmaWxsJyk7XG5cbnZhciBfcG9ueWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm9vdCA9IHVuZGVmaW5lZDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0cm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0cm9vdCA9IHdpbmRvdztcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyLmRlZmF1bHQpKHJvb3QpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVzdWx0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBTdWJzY3JpYmVPbk9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL29ic2VydmFibGUvU3Vic2NyaWJlT25PYnNlcnZhYmxlJyk7XG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHN1YnNjcmliZXMgT2JzZXJ2ZXJzIHRvIHRoaXMgT2JzZXJ2YWJsZSBvbiB0aGUgc3BlY2lmaWVkIFNjaGVkdWxlci5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3N1YnNjcmliZU9uLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSB0aGUgU2NoZWR1bGVyIHRvIHBlcmZvcm0gc3Vic2NyaXB0aW9uIGFjdGlvbnMgb24uXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSB0aGUgc291cmNlIE9ic2VydmFibGUgbW9kaWZpZWQgc28gdGhhdCBpdHMgc3Vic2NyaXB0aW9ucyBoYXBwZW4gb24gdGhlIHNwZWNpZmllZCBTY2hlZHVsZXJcbiAuXG4gKiBAbWV0aG9kIHN1YnNjcmliZU9uXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBzdWJzY3JpYmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVPbk9ic2VydmFibGVfMS5TdWJzY3JpYmVPbk9ic2VydmFibGUodGhpcywgZGVsYXksIHNjaGVkdWxlcik7XG59XG5leHBvcnRzLnN1YnNjcmliZU9uID0gc3Vic2NyaWJlT247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVPbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL3N1YnNjcmliZU9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIGFzYXBfMSA9IHJlcXVpcmUoJy4uL3NjaGVkdWxlci9hc2FwJyk7XG52YXIgaXNOdW1lcmljXzEgPSByZXF1aXJlKCcuLi91dGlsL2lzTnVtZXJpYycpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBTdWJzY3JpYmVPbk9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVPbk9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlT25PYnNlcnZhYmxlKHNvdXJjZSwgZGVsYXlUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgaWYgKGRlbGF5VGltZSA9PT0gdm9pZCAwKSB7IGRlbGF5VGltZSA9IDA7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzYXBfMS5hc2FwOyB9XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5kZWxheVRpbWUgPSBkZWxheVRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBpZiAoIWlzTnVtZXJpY18xLmlzTnVtZXJpYyhkZWxheVRpbWUpIHx8IGRlbGF5VGltZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXlUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IGFzYXBfMS5hc2FwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN1YnNjcmliZU9uT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc291cmNlLCBkZWxheSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXNhcF8xLmFzYXA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVPbk9ic2VydmFibGUoc291cmNlLCBkZWxheSwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZU9uT2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZy5zb3VyY2UsIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVPbk9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZGVsYXkgPSB0aGlzLmRlbGF5VGltZTtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoU3Vic2NyaWJlT25PYnNlcnZhYmxlLmRpc3BhdGNoLCBkZWxheSwge1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlT25PYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5TdWJzY3JpYmVPbk9ic2VydmFibGUgPSBTdWJzY3JpYmVPbk9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVPbk9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vYnNlcnZhYmxlL1N1YnNjcmliZU9uT2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBBc2FwU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuL0FzYXBTY2hlZHVsZXInKTtcbmV4cG9ydHMuYXNhcCA9IG5ldyBBc2FwU2NoZWR1bGVyXzEuQXNhcFNjaGVkdWxlcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXNhcC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9hc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQXNhcEFjdGlvbl8xID0gcmVxdWlyZSgnLi9Bc2FwQWN0aW9uJyk7XG52YXIgUXVldWVTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4vUXVldWVTY2hlZHVsZXInKTtcbnZhciBBc2FwU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXNhcFNjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc2FwU2NoZWR1bGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQXNhcFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVOb3cgPSBmdW5jdGlvbiAod29yaywgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc2FwQWN0aW9uXzEuQXNhcEFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXNhcFNjaGVkdWxlcjtcbn0oUXVldWVTY2hlZHVsZXJfMS5RdWV1ZVNjaGVkdWxlcikpO1xuZXhwb3J0cy5Bc2FwU2NoZWR1bGVyID0gQXNhcFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzYXBTY2hlZHVsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9zY2hlZHVsZXIvQXNhcFNjaGVkdWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIEltbWVkaWF0ZV8xID0gcmVxdWlyZSgnLi4vdXRpbC9JbW1lZGlhdGUnKTtcbnZhciBGdXR1cmVBY3Rpb25fMSA9IHJlcXVpcmUoJy4vRnV0dXJlQWN0aW9uJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIEFzYXBBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc2FwQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzYXBBY3Rpb24oKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5fc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fc2NoZWR1bGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIGlmICghc2NoZWR1bGVyLnNjaGVkdWxlZElkKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGVkSWQgPSBJbW1lZGlhdGVfMS5JbW1lZGlhdGUuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGVkSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlci5mbHVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIHNjaGVkdWxlZElkID0gc2NoZWR1bGVyLnNjaGVkdWxlZElkLCBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2NoZWR1bGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNjaGVkdWxlZElkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGVkSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIEltbWVkaWF0ZV8xLkltbWVkaWF0ZS5jbGVhckltbWVkaWF0ZShzY2hlZHVsZWRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc2FwQWN0aW9uO1xufShGdXR1cmVBY3Rpb25fMS5GdXR1cmVBY3Rpb24pKTtcbmV4cG9ydHMuQXNhcEFjdGlvbiA9IEFzYXBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc2FwQWN0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc2NoZWR1bGVyL0FzYXBBY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG5Tb21lIGNyZWRpdCBmb3IgdGhpcyBoZWxwZXIgZ29lcyB0byBodHRwOi8vZ2l0aHViLmNvbS9ZdXp1SlMvc2V0SW1tZWRpYXRlXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi9yb290Jyk7XG52YXIgSW1tZWRpYXRlRGVmaW5pdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1tZWRpYXRlRGVmaW5pdGlvbihyb290KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIGlmIChyb290LnNldEltbWVkaWF0ZSAmJiB0eXBlb2Ygcm9vdC5zZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1tZWRpYXRlID0gcm9vdC5zZXRJbW1lZGlhdGUuYmluZChyb290KTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJbW1lZGlhdGUgPSByb290LmNsZWFySW1tZWRpYXRlLmJpbmQocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5leHRIYW5kbGUgPSAxO1xuICAgICAgICAgICAgdGhpcy50YXNrc0J5SGFuZGxlID0ge307XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuVXNlUHJvY2Vzc05leHRUaWNrKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbW1lZGlhdGUgPSB0aGlzLmNyZWF0ZVByb2Nlc3NOZXh0VGlja1NldEltbWVkaWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW1tZWRpYXRlID0gdGhpcy5jcmVhdGVQb3N0TWVzc2FnZVNldEltbWVkaWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5Vc2VNZXNzYWdlQ2hhbm5lbCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICB0aGlzLnNldEltbWVkaWF0ZSA9IHRoaXMuY3JlYXRlTWVzc2FnZUNoYW5uZWxTZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuVXNlUmVhZHlTdGF0ZUNoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbW1lZGlhdGUgPSB0aGlzLmNyZWF0ZVJlYWR5U3RhdGVDaGFuZ2VTZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW1tZWRpYXRlID0gdGhpcy5jcmVhdGVTZXRUaW1lb3V0U2V0SW1tZWRpYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2kgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY2xlYXJJbW1lZGlhdGUuaW5zdGFuY2UudGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNpLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJbW1lZGlhdGUgPSBjaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBJbW1lZGlhdGVEZWZpbml0aW9uLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xuICAgIH07XG4gICAgSW1tZWRpYXRlRGVmaW5pdGlvbi5wcm90b3R5cGUuY2FuVXNlUHJvY2Vzc05leHRUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZGVudGlmeSh0aGlzLnJvb3QucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbiAgICB9O1xuICAgIEltbWVkaWF0ZURlZmluaXRpb24ucHJvdG90eXBlLmNhblVzZU1lc3NhZ2VDaGFubmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnJvb3QuTWVzc2FnZUNoYW5uZWwpO1xuICAgIH07XG4gICAgSW1tZWRpYXRlRGVmaW5pdGlvbi5wcm90b3R5cGUuY2FuVXNlUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50ID0gdGhpcy5yb290LmRvY3VtZW50O1xuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSk7XG4gICAgfTtcbiAgICBJbW1lZGlhdGVEZWZpbml0aW9uLnByb3RvdHlwZS5jYW5Vc2VQb3N0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3Q7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYHJvb3QucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAocm9vdC5wb3N0TWVzc2FnZSAmJiAhcm9vdC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91c18xID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSByb290Lm9ubWVzc2FnZTtcbiAgICAgICAgICAgIHJvb3Qub25tZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXNfMSA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJvb3QucG9zdE1lc3NhZ2UoJycsICcqJyk7XG4gICAgICAgICAgICByb290Lm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzXzE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhY2NlcHRzIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyBzZXRJbW1lZGlhdGUsIGJ1dFxuICAgIC8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIG5vIGFyZ3VtZW50cy5cbiAgICBJbW1lZGlhdGVEZWZpbml0aW9uLnByb3RvdHlwZS5wYXJ0aWFsbHlBcHBsaWVkID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LCBoYW5kbGVyID0gX2EuaGFuZGxlciwgYXJncyA9IF9hLmFyZ3M7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAobmV3IEZ1bmN0aW9uKCcnICsgaGFuZGxlcikpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZuLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICBmbi5hcmdzID0gYXJncztcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgIH07XG4gICAgSW1tZWRpYXRlRGVmaW5pdGlvbi5wcm90b3R5cGUuYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHRoaXMudGFza3NCeUhhbmRsZVt0aGlzLm5leHRIYW5kbGVdID0gdGhpcy5wYXJ0aWFsbHlBcHBsaWVkLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLm5leHRIYW5kbGUrKztcbiAgICB9O1xuICAgIEltbWVkaWF0ZURlZmluaXRpb24ucHJvdG90eXBlLmNyZWF0ZVByb2Nlc3NOZXh0VGlja1NldEltbWVkaWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gc2V0SW1tZWRpYXRlLmluc3RhbmNlO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnJvb3QucHJvY2Vzcy5uZXh0VGljayhpbnN0YW5jZS5wYXJ0aWFsbHlBcHBsaWVkKGluc3RhbmNlLnJ1bklmUHJlc2VudCwgaGFuZGxlKSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgICAgICBmbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9O1xuICAgIEltbWVkaWF0ZURlZmluaXRpb24ucHJvdG90eXBlLmNyZWF0ZVBvc3RNZXNzYWdlU2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3Q7XG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gJ3NldEltbWVkaWF0ZSQnICsgcm9vdC5NYXRoLnJhbmRvbSgpICsgJyQnO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24gZ2xvYmFsTWVzc2FnZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGdsb2JhbE1lc3NhZ2VIYW5kbGVyLmluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gcm9vdCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkdsb2JhbE1lc3NhZ2UuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gc2V0SW1tZWRpYXRlLCBtZXNzYWdlUHJlZml4ID0gX2EubWVzc2FnZVByZWZpeCwgaW5zdGFuY2UgPSBfYS5pbnN0YW5jZTtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBpbnN0YW5jZS5hZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpbnN0YW5jZS5yb290LnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsICcqJyk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgICAgICBmbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGZuLm1lc3NhZ2VQcmVmaXggPSBtZXNzYWdlUHJlZml4O1xuICAgICAgICByZXR1cm4gZm47XG4gICAgfTtcbiAgICBJbW1lZGlhdGVEZWZpbml0aW9uLnByb3RvdHlwZS5ydW5JZlByZXNlbnQgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6ICdXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC4nXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vICd0b28gbXVjaCByZWN1cnNpb24nIGVycm9yLlxuICAgICAgICAgICAgdGhpcy5yb290LnNldFRpbWVvdXQodGhpcy5wYXJ0aWFsbHlBcHBsaWVkKHRoaXMucnVuSWZQcmVzZW50LCBoYW5kbGUpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGhpcy50YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbW1lZGlhdGVEZWZpbml0aW9uLnByb3RvdHlwZS5jcmVhdGVNZXNzYWdlQ2hhbm5lbFNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgdGhpcy5yb290Lk1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIF90aGlzLnJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBzZXRJbW1lZGlhdGUsIGNoYW5uZWwgPSBfYS5jaGFubmVsLCBpbnN0YW5jZSA9IF9hLmluc3RhbmNlO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgICAgIGZuLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICBmbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9O1xuICAgIEltbWVkaWF0ZURlZmluaXRpb24ucHJvdG90eXBlLmNyZWF0ZVJlYWR5U3RhdGVDaGFuZ2VTZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHNldEltbWVkaWF0ZS5pbnN0YW5jZTtcbiAgICAgICAgICAgIHZhciByb290ID0gaW5zdGFuY2Uucm9vdDtcbiAgICAgICAgICAgIHZhciBkb2MgPSByb290LmRvY3VtZW50O1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgICAgIGZuLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgIH07XG4gICAgSW1tZWRpYXRlRGVmaW5pdGlvbi5wcm90b3R5cGUuY3JlYXRlU2V0VGltZW91dFNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gc2V0SW1tZWRpYXRlLmluc3RhbmNlO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGluc3RhbmNlLmFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnJvb3Quc2V0VGltZW91dChpbnN0YW5jZS5wYXJ0aWFsbHlBcHBsaWVkKGluc3RhbmNlLnJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgICAgICBmbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9O1xuICAgIHJldHVybiBJbW1lZGlhdGVEZWZpbml0aW9uO1xufSgpKTtcbmV4cG9ydHMuSW1tZWRpYXRlRGVmaW5pdGlvbiA9IEltbWVkaWF0ZURlZmluaXRpb247XG5leHBvcnRzLkltbWVkaWF0ZSA9IG5ldyBJbW1lZGlhdGVEZWZpbml0aW9uKHJvb3RfMS5yb290KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUltbWVkaWF0ZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvSW1tZWRpYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZSgnLi4vdXRpbC9pc0FycmF5Jyk7XG5mdW5jdGlvbiBpc051bWVyaWModmFsKSB7XG4gICAgLy8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKG51bGx8dHJ1ZXxmYWxzZXxcIlwiKVxuICAgIC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcbiAgICAvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cbiAgICAvLyBhZGRpbmcgMSBjb3JyZWN0cyBsb3NzIG9mIHByZWNpc2lvbiBmcm9tIHBhcnNlRmxvYXQgKCMxNTEwMClcbiAgICByZXR1cm4gIWlzQXJyYXlfMS5pc0FycmF5KHZhbCkgJiYgKHZhbCAtIHBhcnNlRmxvYXQodmFsKSArIDEpID49IDA7XG59XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzTnVtZXJpYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvaXNOdW1lcmljLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxyXG5pbXBvcnQgcmFmIGZyb20gXCJyYWZcIlxyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ludGVydmFsJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9wYWlyd2lzZSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZVRpbWUnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3RhcnRXaXRoJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5J1xyXG5pbXBvcnQgY3VycmVudHdpbmRvd3NpemUgZnJvbSBcIi4vY3VycmVudHdpbmRvd3NpemVcIlxyXG5pbXBvcnQgZW5zdXJlcG9zIGZyb20gXCIuL2Vuc3VyZXBvc1wiXHJcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tIFwiLi9jc3NcIlxyXG5cclxuXHJcbmNvbnN0IHdpbmRvd3NpemVzJCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAudGhyb3R0bGVUaW1lKDMzKVxyXG4gICAgLm1hcChldiA9PiBjdXJyZW50d2luZG93c2l6ZSgpKVxyXG4gICAgLnN0YXJ0V2l0aChjdXJyZW50d2luZG93c2l6ZSgpKVxyXG4gICAgLnNoYXJlKClcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29uZmlnKSA9PiB7XHJcblxyXG4gIGNvbnN0IHt0YXJnZXQsIG1heE9mZnNldHR9ID0gY29uZmlnXHJcblxyXG4gIGNvbnN0IG1vdXNlbGVhdmVzJCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRhcmdldCwgJ21vdXNlbGVhdmUnKVxyXG4gIGNvbnN0IG1vdXNlZW50ZXJzJCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRhcmdldCwgJ21vdXNlZW50ZXInKVxyXG5cclxuICBjb25zdCBtb3VzZW1vdmVzJCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRhcmdldCwgJ21vdXNlbW92ZScpXHJcbiAgY29uc3QgbW91c2Vwb3MkID0gbW91c2Vtb3ZlcyRcclxuICAgIC50aHJvdHRsZVRpbWUoMzMpXHJcbiAgICAubWFwKGV2ID0+ICh7eDogZXYuY2xpZW50WCwgeTogZXYuY2xpZW50WX0pKVxyXG5cclxuICBjb25zdCBwYXJhbGxheCQgPSBtb3VzZXBvcyQud2l0aExhdGVzdEZyb20oXHJcbiAgICB3aW5kb3dzaXplcyQsXHJcbiAgICAobXBvcywgc2NyZWVuKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBzY3JlZW5DZW50ZXJZID0gc2NyZWVuLnkgLyAyXHJcbiAgICAgIGNvbnN0IHNjcmVlbkNlbnRlclggPSBzY3JlZW4ueCAvIDJcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG9mZnNldHRZID0gc2NyZWVuQ2VudGVyWSAtIG1wb3MueVxyXG4gICAgICBjb25zdCBvZmZzZXR0WCA9IHNjcmVlbkNlbnRlclggLSBtcG9zLnhcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG9mZnNldFlQcmN0ID0gZW5zdXJlcG9zKG9mZnNldHRZKSAvIHNjcmVlbkNlbnRlclkgKiAxMDBcclxuICAgICAgY29uc3Qgb2Zmc2V0WFByY3QgPSBlbnN1cmVwb3Mob2Zmc2V0dFgpIC8gc2NyZWVuQ2VudGVyWCAqIDEwMFxyXG4gICAgICBcclxuICAgICAgbGV0IHRvcCA9IG1heE9mZnNldHQgLyAxMDAgKiBvZmZzZXRZUHJjdFxyXG4gICAgICBsZXQgbGVmdCA9IG1heE9mZnNldHQgLyAxMDAgKiBvZmZzZXRYUHJjdFxyXG4gICAgICBcclxuICAgICAgaWYobXBvcy55ID4gc2NyZWVuQ2VudGVyWSlcclxuICAgICAgICB0b3AgPSAtMSAqIHRvcFxyXG4gICAgICBcclxuICAgICAgaWYobXBvcy54ID4gc2NyZWVuQ2VudGVyWClcclxuICAgICAgICBsZWZ0ID0gLTEgKiBsZWZ0XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge3RvcCwgbGVmdH1cclxuICAgIH1cclxuICApXHJcblxyXG4gIG1vdXNlbGVhdmVzJC5zdWJzY3JpYmUoZXYgPT4gXHJcbiAgICB0YXJnZXQuYWRkQ2xhc3MoXCJhbmltYXRlLXRyYW5zbGF0ZVwiKSlcclxuICAgIFxyXG4gIG1vdXNlZW50ZXJzJFxyXG4gICAgLmRlbGF5KDQwMClcclxuICAgIC5zdWJzY3JpYmUoZXYgPT4gXHJcbiAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhcImFuaW1hdGUtdHJhbnNsYXRlXCIpKVxyXG5cclxuXHJcbiAgcmV0dXJuIHBhcmFsbGF4JFxyXG4gICAgXHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvbGliL3BhcmFsbGF4aW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIGZyb21FdmVudF8xID0gcmVxdWlyZSgnLi4vLi4vb2JzZXJ2YWJsZS9mcm9tRXZlbnQnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmZyb21FdmVudCA9IGZyb21FdmVudF8xLmZyb21FdmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBGcm9tRXZlbnRPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0Zyb21FdmVudE9ic2VydmFibGUnKTtcbmV4cG9ydHMuZnJvbUV2ZW50ID0gRnJvbUV2ZW50T2JzZXJ2YWJsZV8xLkZyb21FdmVudE9ic2VydmFibGUuY3JlYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUV2ZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG52YXIgdHJ5Q2F0Y2hfMSA9IHJlcXVpcmUoJy4uL3V0aWwvdHJ5Q2F0Y2gnKTtcbnZhciBlcnJvck9iamVjdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9lcnJvck9iamVjdCcpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaXB0aW9uJyk7XG5mdW5jdGlvbiBpc05vZGVTdHlsZUV2ZW50RW1taXR0ZXIoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmouYWRkTGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmoub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5vZmYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc05vZGVMaXN0KHNvdXJjZU9iaikge1xuICAgIHJldHVybiAhIXNvdXJjZU9iaiAmJiBzb3VyY2VPYmoudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJztcbn1cbmZ1bmN0aW9uIGlzSFRNTENvbGxlY3Rpb24oc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHNvdXJjZU9iai50b1N0cmluZygpID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nO1xufVxuZnVuY3Rpb24gaXNFdmVudFRhcmdldChzb3VyY2VPYmopIHtcbiAgICByZXR1cm4gISFzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgRnJvbUV2ZW50T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZyb21FdmVudE9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRnJvbUV2ZW50T2JzZXJ2YWJsZShzb3VyY2VPYmosIGV2ZW50TmFtZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlT2JqID0gc291cmNlT2JqO1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBldmVudHMgb2YgYSBzcGVjaWZpYyB0eXBlIGNvbWluZyBmcm9tIHRoZVxuICAgICAqIGdpdmVuIGV2ZW50IHRhcmdldC5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5DcmVhdGVzIGFuIE9ic2VydmFibGUgZnJvbSBET00gZXZlbnRzLCBvciBOb2RlXG4gICAgICogRXZlbnRFbWl0dGVyIGV2ZW50cyBvciBvdGhlcnMuPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy9mcm9tRXZlbnQucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgYnkgYXR0YWNoaW5nIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFuIFwiZXZlbnQgdGFyZ2V0XCIsXG4gICAgICogd2hpY2ggbWF5IGJlIGFuIG9iamVjdCB3aXRoIGBhZGRFdmVudExpc3RlbmVyYCBhbmQgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLFxuICAgICAqIGEgTm9kZS5qcyBFdmVudEVtaXR0ZXIsIGEgalF1ZXJ5IHN0eWxlIEV2ZW50RW1pdHRlciwgYSBOb2RlTGlzdCBmcm9tIHRoZVxuICAgICAqIERPTSwgb3IgYW4gSFRNTENvbGxlY3Rpb24gZnJvbSB0aGUgRE9NLiBUaGUgZXZlbnQgaGFuZGxlciBpcyBhdHRhY2hlZCB3aGVuXG4gICAgICogdGhlIG91dHB1dCBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQsIGFuZCByZW1vdmVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBpc1xuICAgICAqIHVuc3Vic2NyaWJlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXRzIGNsaWNrcyBoYXBwZW5pbmcgb24gdGhlIERPTSBkb2N1bWVudDwvY2FwdGlvbj5cbiAgICAgKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICAgICAqIGNsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBmcm9tfVxuICAgICAqIEBzZWUge0BsaW5rIGZyb21FdmVudFBhdHRlcm59XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IFRoZSBET01FbGVtZW50LCBldmVudCB0YXJnZXQsIE5vZGUuanNcbiAgICAgKiBFdmVudEVtaXR0ZXIsIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uIHRvIGF0dGFjaCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIG9mIGludGVyZXN0LCBiZWluZyBlbWl0dGVkIGJ5IHRoZVxuICAgICAqIGB0YXJnZXRgLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oLi4uYXJnczogYW55KTogVH0gW3NlbGVjdG9yXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0b1xuICAgICAqIHBvc3QtcHJvY2VzcyByZXN1bHRzLiBJdCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGV2ZW50IGhhbmRsZXIgYW5kXG4gICAgICogc2hvdWxkIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fVxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIGZyb21FdmVudFxuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAodGFyZ2V0LCBldmVudE5hbWUsIHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnJvbUV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgc2VsZWN0b3IpO1xuICAgIH07XG4gICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5zZXR1cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzb3VyY2VPYmosIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmU7XG4gICAgICAgIGlmIChpc05vZGVMaXN0KHNvdXJjZU9iaikgfHwgaXNIVE1MQ29sbGVjdGlvbihzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlT2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5zZXR1cFN1YnNjcmlwdGlvbihzb3VyY2VPYmpbaV0sIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFdmVudFRhcmdldChzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlXzEgPSBzb3VyY2VPYmo7XG4gICAgICAgICAgICBzb3VyY2VPYmouYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlXzIgPSBzb3VyY2VPYmo7XG4gICAgICAgICAgICBzb3VyY2VPYmoub24oZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzIub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOb2RlU3R5bGVFdmVudEVtbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VfMyA9IHNvdXJjZU9iajtcbiAgICAgICAgICAgIHNvdXJjZU9iai5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpKTtcbiAgICB9O1xuICAgIEZyb21FdmVudE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlT2JqID0gdGhpcy5zb3VyY2VPYmo7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSB0aGlzLmV2ZW50TmFtZTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBzZWxlY3RvciA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaChzZWxlY3RvcikuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQoZSk7IH07XG4gICAgICAgIEZyb21FdmVudE9ic2VydmFibGUuc2V0dXBTdWJzY3JpcHRpb24oc291cmNlT2JqLCBldmVudE5hbWUsIGhhbmRsZXIsIHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIEZyb21FdmVudE9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkZyb21FdmVudE9ic2VydmFibGUgPSBGcm9tRXZlbnRPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RnJvbUV2ZW50T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvRnJvbUV2ZW50T2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgaW50ZXJ2YWxfMSA9IHJlcXVpcmUoJy4uLy4uL29ic2VydmFibGUvaW50ZXJ2YWwnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmludGVydmFsID0gaW50ZXJ2YWxfMS5pbnRlcnZhbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29ic2VydmFibGUvaW50ZXJ2YWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgSW50ZXJ2YWxPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0ludGVydmFsT2JzZXJ2YWJsZScpO1xuZXhwb3J0cy5pbnRlcnZhbCA9IEludGVydmFsT2JzZXJ2YWJsZV8xLkludGVydmFsT2JzZXJ2YWJsZS5jcmVhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvaW50ZXJ2YWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBpc051bWVyaWNfMSA9IHJlcXVpcmUoJy4uL3V0aWwvaXNOdW1lcmljJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKCcuLi9zY2hlZHVsZXIvYXN5bmMnKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgSW50ZXJ2YWxPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50ZXJ2YWxPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVydmFsT2JzZXJ2YWJsZShwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAocGVyaW9kID09PSB2b2lkIDApIHsgcGVyaW9kID0gMDsgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYzsgfVxuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBpZiAoIWlzTnVtZXJpY18xLmlzTnVtZXJpYyhwZXJpb2QpIHx8IHBlcmlvZCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucGVyaW9kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgc2VxdWVudGlhbCBudW1iZXJzIGV2ZXJ5IHNwZWNpZmllZFxuICAgICAqIGludGVydmFsIG9mIHRpbWUsIG9uIGEgc3BlY2lmaWVkIFNjaGVkdWxlci5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbWl0cyBpbmNyZW1lbnRhbCBudW1iZXJzIHBlcmlvZGljYWxseSBpbiB0aW1lLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvaW50ZXJ2YWwucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBgaW50ZXJ2YWxgIHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFuIGluZmluaXRlIHNlcXVlbmNlIG9mXG4gICAgICogYXNjZW5kaW5nIGludGVnZXJzLCB3aXRoIGEgY29uc3RhbnQgaW50ZXJ2YWwgb2YgdGltZSBvZiB5b3VyIGNob29zaW5nXG4gICAgICogYmV0d2VlbiB0aG9zZSBlbWlzc2lvbnMuIFRoZSBmaXJzdCBlbWlzc2lvbiBpcyBub3Qgc2VudCBpbW1lZGlhdGVseSwgYnV0XG4gICAgICogb25seSBhZnRlciB0aGUgZmlyc3QgcGVyaW9kIGhhcyBwYXNzZWQuIEJ5IGRlZmF1bHQsIHRoaXMgb3BlcmF0b3IgdXNlcyB0aGVcbiAgICAgKiBgYXN5bmNgIFNjaGVkdWxlciB0byBwcm92aWRlIGEgbm90aW9uIG9mIHRpbWUsIGJ1dCB5b3UgbWF5IHBhc3MgYW55XG4gICAgICogU2NoZWR1bGVyIHRvIGl0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdHMgYXNjZW5kaW5nIG51bWJlcnMsIG9uZSBldmVyeSBzZWNvbmQgKDEwMDBtcyk8L2NhcHRpb24+XG4gICAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgICAqIG51bWJlcnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgdGltZXJ9XG4gICAgICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3BlcmlvZD0wXSBUaGUgaW50ZXJ2YWwgc2l6ZSBpbiBtaWxsaXNlY29uZHMgKGJ5IGRlZmF1bHQpXG4gICAgICogb3IgdGhlIHRpbWUgdW5pdCBkZXRlcm1pbmVkIGJ5IHRoZSBzY2hlZHVsZXIncyBjbG9jay5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1hc3luY10gVGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICAgKiB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLCBhbmQgcHJvdmlkaW5nIGEgbm90aW9uIG9mIFwidGltZVwiLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhIHNlcXVlbnRpYWwgbnVtYmVyIGVhY2ggdGltZVxuICAgICAqIGludGVydmFsLlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIGludGVydmFsXG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBJbnRlcnZhbE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgeyBwZXJpb2QgPSAwOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWxPYnNlcnZhYmxlKHBlcmlvZCwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIEludGVydmFsT2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIHBlcmlvZCA9IHN0YXRlLnBlcmlvZDtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGluZGV4KTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pbmRleCArPSAxO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBwZXJpb2QpO1xuICAgIH07XG4gICAgSW50ZXJ2YWxPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHBlcmlvZCA9IHRoaXMucGVyaW9kO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShJbnRlcnZhbE9ic2VydmFibGUuZGlzcGF0Y2gsIHBlcmlvZCwge1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4LCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBwZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJ2YWxPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5JbnRlcnZhbE9ic2VydmFibGUgPSBJbnRlcnZhbE9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlcnZhbE9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vYnNlcnZhYmxlL0ludGVydmFsT2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBBc3luY1NjaGVkdWxlcl8xID0gcmVxdWlyZSgnLi9Bc3luY1NjaGVkdWxlcicpO1xuZXhwb3J0cy5hc3luYyA9IG5ldyBBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9hc3luYy5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIEZ1dHVyZUFjdGlvbl8xID0gcmVxdWlyZSgnLi9GdXR1cmVBY3Rpb24nKTtcbnZhciBRdWV1ZVNjaGVkdWxlcl8xID0gcmVxdWlyZSgnLi9RdWV1ZVNjaGVkdWxlcicpO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoKSB7XG4gICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVOb3cgPSBmdW5jdGlvbiAod29yaywgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdXR1cmVBY3Rpb25fMS5GdXR1cmVBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIDApO1xuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShRdWV1ZVNjaGVkdWxlcl8xLlF1ZXVlU2NoZWR1bGVyKSk7XG5leHBvcnRzLkFzeW5jU2NoZWR1bGVyID0gQXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgbWFwXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci9tYXAnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5tYXAgPSBtYXBfMS5tYXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3IvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gYHByb2plY3RgIGZ1bmN0aW9uIHRvIGVhY2ggdmFsdWUgZW1pdHRlZCBieSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLCBhbmQgZW1pdHMgdGhlIHJlc3VsdGluZyB2YWx1ZXMgYXMgYW4gT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGlrZSBbQXJyYXkucHJvdG90eXBlLm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLFxuICogaXQgcGFzc2VzIGVhY2ggc291cmNlIHZhbHVlIHRocm91Z2ggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0byBnZXRcbiAqIGNvcnJlc3BvbmRpbmcgb3V0cHV0IHZhbHVlcy48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tYXAucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogU2ltaWxhciB0byB0aGUgd2VsbCBrbm93biBgQXJyYXkucHJvdG90eXBlLm1hcGAgZnVuY3Rpb24sIHRoaXMgb3BlcmF0b3JcbiAqIGFwcGxpZXMgYSBwcm9qZWN0aW9uIHRvIGVhY2ggdmFsdWUgYW5kIGVtaXRzIHRoYXQgcHJvamVjdGlvbiBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBldmVyeSBldmVyeSBjbGljayB0byB0aGUgY2xpZW50WCBwb3NpdGlvbiBvZiB0aGF0IGNsaWNrPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBwb3NpdGlvbnMgPSBjbGlja3MubWFwKGV2ID0+IGV2LmNsaWVudFgpO1xuICogcG9zaXRpb25zLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBtYXBUb31cbiAqIEBzZWUge0BsaW5rIHBsdWNrfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsIGluZGV4OiBudW1iZXIpOiBSfSBwcm9qZWN0IFRoZSBmdW5jdGlvbiB0byBhcHBseVxuICogdG8gZWFjaCBgdmFsdWVgIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBUaGUgYGluZGV4YCBwYXJhbWV0ZXIgaXNcbiAqIHRoZSBudW1iZXIgYGlgIGZvciB0aGUgaS10aCBlbWlzc2lvbiB0aGF0IGhhcyBoYXBwZW5lZCBzaW5jZSB0aGVcbiAqIHN1YnNjcmlwdGlvbiwgc3RhcnRpbmcgZnJvbSB0aGUgbnVtYmVyIGAwYC5cbiAqIEBwYXJhbSB7YW55fSBbdGhpc0FyZ10gQW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gZGVmaW5lIHdoYXQgYHRoaXNgIGlzIGluIHRoZVxuICogYHByb2plY3RgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxSPn0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSB2YWx1ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIHRyYW5zZm9ybWVkIGJ5IHRoZSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKiBAbWV0aG9kIG1hcFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICBpZiAodHlwZW9mIHByb2plY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBNYXBPcGVyYXRvcihwcm9qZWN0LCB0aGlzQXJnKSk7XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBNYXBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgdGhpcztcbiAgICB9XG4gICAgLy8gTk9URTogVGhpcyBsb29rcyB1bm9wdGltaXplZCwgYnV0IGl0J3MgYWN0dWFsbHkgcHVycG9zZWZ1bGx5IE5PVFxuICAgIC8vIHVzaW5nIHRyeS9jYXRjaCBvcHRpbWl6YXRpb25zLlxuICAgIE1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3IvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBwYWlyd2lzZV8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvcGFpcndpc2UnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5wYWlyd2lzZSA9IHBhaXJ3aXNlXzEucGFpcndpc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWlyd2lzZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9wYWlyd2lzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbi8qKlxuICogR3JvdXBzIHBhaXJzIG9mIGNvbnNlY3V0aXZlIGVtaXNzaW9ucyB0b2dldGhlciBhbmQgZW1pdHMgdGhlbSBhcyBhbiBhcnJheSBvZlxuICogdHdvIHZhbHVlcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+UHV0cyB0aGUgY3VycmVudCB2YWx1ZSBhbmQgcHJldmlvdXMgdmFsdWUgdG9nZXRoZXIgYXNcbiAqIGFuIGFycmF5LCBhbmQgZW1pdHMgdGhhdC48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9wYWlyd2lzZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBUaGUgTnRoIGVtaXNzaW9uIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHdpbGwgY2F1c2UgdGhlIG91dHB1dCBPYnNlcnZhYmxlXG4gKiB0byBlbWl0IGFuIGFycmF5IFsoTi0xKXRoLCBOdGhdIG9mIHRoZSBwcmV2aW91cyBhbmQgdGhlIGN1cnJlbnQgdmFsdWUsIGFzIGFcbiAqIHBhaXIuIEZvciB0aGlzIHJlYXNvbiwgYHBhaXJ3aXNlYCBlbWl0cyBvbiB0aGUgc2Vjb25kIGFuZCBzdWJzZXF1ZW50XG4gKiBlbWlzc2lvbnMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUsIGJ1dCBub3Qgb24gdGhlIGZpcnN0IGVtaXNzaW9uLCBiZWNhdXNlXG4gKiB0aGVyZSBpcyBubyBwcmV2aW91cyB2YWx1ZSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T24gZXZlcnkgY2xpY2sgKHN0YXJ0aW5nIGZyb20gdGhlIHNlY29uZCksIGVtaXQgdGhlIHJlbGF0aXZlIGRpc3RhbmNlIHRvIHRoZSBwcmV2aW91cyBjbGljazwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcGFpcnMgPSBjbGlja3MucGFpcndpc2UoKTtcbiAqIHZhciBkaXN0YW5jZSA9IHBhaXJzLm1hcChwYWlyID0+IHtcbiAqICAgdmFyIHgwID0gcGFpclswXS5jbGllbnRYO1xuICogICB2YXIgeTAgPSBwYWlyWzBdLmNsaWVudFk7XG4gKiAgIHZhciB4MSA9IHBhaXJbMV0uY2xpZW50WDtcbiAqICAgdmFyIHkxID0gcGFpclsxXS5jbGllbnRZO1xuICogICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHgwIC0geDEsIDIpICsgTWF0aC5wb3coeTAgLSB5MSwgMikpO1xuICogfSk7XG4gKiBkaXN0YW5jZS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYnVmZmVyfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyQ291bnR9XG4gKlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxBcnJheTxUPj59IEFuIE9ic2VydmFibGUgb2YgcGFpcnMgKGFzIGFycmF5cykgb2ZcbiAqIGNvbnNlY3V0aXZlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgcGFpcndpc2VcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIHBhaXJ3aXNlKCkge1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IFBhaXJ3aXNlT3BlcmF0b3IoKSk7XG59XG5leHBvcnRzLnBhaXJ3aXNlID0gcGFpcndpc2U7XG52YXIgUGFpcndpc2VPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFpcndpc2VPcGVyYXRvcigpIHtcbiAgICB9XG4gICAgUGFpcndpc2VPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBQYWlyd2lzZVN1YnNjcmliZXIoc3Vic2NyaWJlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIFBhaXJ3aXNlT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBQYWlyd2lzZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYWlyd2lzZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGFpcndpc2VTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5oYXNQcmV2ID0gZmFsc2U7XG4gICAgfVxuICAgIFBhaXJ3aXNlU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJldikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KFt0aGlzLnByZXYsIHZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc1ByZXYgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldiA9IHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIFBhaXJ3aXNlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhaXJ3aXNlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3IvcGFpcndpc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHRocm90dGxlVGltZV8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvdGhyb3R0bGVUaW1lJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUudGhyb3R0bGVUaW1lID0gdGhyb3R0bGVUaW1lXzEudGhyb3R0bGVUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3R0bGVUaW1lLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlVGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbnZhciBhc3luY18xID0gcmVxdWlyZSgnLi4vc2NoZWR1bGVyL2FzeW5jJyk7XG4vKipcbiAqIEVtaXRzIGEgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUsIHRoZW4gaWdub3JlcyBzdWJzZXF1ZW50IHNvdXJjZVxuICogdmFsdWVzIGZvciBgZHVyYXRpb25gIG1pbGxpc2Vjb25kcywgdGhlbiByZXBlYXRzIHRoaXMgcHJvY2Vzcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGV0cyBhIHZhbHVlIHBhc3MsIHRoZW4gaWdub3JlcyBzb3VyY2UgdmFsdWVzIGZvciB0aGVcbiAqIG5leHQgYGR1cmF0aW9uYCBtaWxsaXNlY29uZHMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvdGhyb3R0bGVUaW1lLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGB0aHJvdHRsZVRpbWVgIGVtaXRzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB2YWx1ZXMgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlXG4gKiB3aGVuIGl0cyBpbnRlcm5hbCB0aW1lciBpcyBkaXNhYmxlZCwgYW5kIGlnbm9yZXMgc291cmNlIHZhbHVlcyB3aGVuIHRoZSB0aW1lclxuICogaXMgZW5hYmxlZC4gSW5pdGlhbGx5LCB0aGUgdGltZXIgaXMgZGlzYWJsZWQuIEFzIHNvb24gYXMgdGhlIGZpcnN0IHNvdXJjZVxuICogdmFsdWUgYXJyaXZlcywgaXQgaXMgZm9yd2FyZGVkIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSwgYW5kIHRoZW4gdGhlIHRpbWVyXG4gKiBpcyBlbmFibGVkLiBBZnRlciBgZHVyYXRpb25gIG1pbGxpc2Vjb25kcyAob3IgdGhlIHRpbWUgdW5pdCBkZXRlcm1pbmVkXG4gKiBpbnRlcm5hbGx5IGJ5IHRoZSBvcHRpb25hbCBgc2NoZWR1bGVyYCkgaGFzIHBhc3NlZCwgdGhlIHRpbWVyIGlzIGRpc2FibGVkLFxuICogYW5kIHRoaXMgcHJvY2VzcyByZXBlYXRzIGZvciB0aGUgbmV4dCBzb3VyY2UgdmFsdWUuIE9wdGlvbmFsbHkgdGFrZXMgYVxuICoge0BsaW5rIFNjaGVkdWxlcn0gZm9yIG1hbmFnaW5nIHRpbWVycy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IGNsaWNrcyBhdCBhIHJhdGUgb2YgYXQgbW9zdCBvbmUgY2xpY2sgcGVyIHNlY29uZDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLnRocm90dGxlVGltZSgxMDAwKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKiBAc2VlIHtAbGluayBzYW1wbGVUaW1lfVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGV9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRpbWUgdG8gd2FpdCBiZWZvcmUgZW1pdHRpbmcgYW5vdGhlciB2YWx1ZSBhZnRlclxuICogZW1pdHRpbmcgdGhlIGxhc3QgdmFsdWUsIG1lYXN1cmVkIGluIG1pbGxpc2Vjb25kcyBvciB0aGUgdGltZSB1bml0IGRldGVybWluZWRcbiAqIGludGVybmFsbHkgYnkgdGhlIG9wdGlvbmFsIGBzY2hlZHVsZXJgLlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9YXN5bmNdIFRoZSB7QGxpbmsgU2NoZWR1bGVyfSB0byB1c2UgZm9yXG4gKiBtYW5hZ2luZyB0aGUgdGltZXJzIHRoYXQgaGFuZGxlIHRoZSBzYW1wbGluZy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59IEFuIE9ic2VydmFibGUgdGhhdCBwZXJmb3JtcyB0aGUgdGhyb3R0bGUgb3BlcmF0aW9uIHRvXG4gKiBsaW1pdCB0aGUgcmF0ZSBvZiBlbWlzc2lvbnMgZnJvbSB0aGUgc291cmNlLlxuICogQG1ldGhvZCB0aHJvdHRsZVRpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlVGltZShkdXJhdGlvbiwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBUaHJvdHRsZVRpbWVPcGVyYXRvcihkdXJhdGlvbiwgc2NoZWR1bGVyKSk7XG59XG5leHBvcnRzLnRocm90dGxlVGltZSA9IHRocm90dGxlVGltZTtcbnZhciBUaHJvdHRsZVRpbWVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGhyb3R0bGVUaW1lT3BlcmF0b3IoZHVyYXRpb24sIHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICBUaHJvdHRsZVRpbWVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZHVyYXRpb24sIHRoaXMuc2NoZWR1bGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGhyb3R0bGVUaW1lT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGhyb3R0bGVUaW1lU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgVGhyb3R0bGVUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRocm90dGxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy50aHJvdHRsZWQgPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZHVyYXRpb24sIHsgc3Vic2NyaWJlcjogdGhpcyB9KSk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5jbGVhclRocm90dGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhyb3R0bGVkID0gdGhpcy50aHJvdHRsZWQ7XG4gICAgICAgIGlmICh0aHJvdHRsZWQpIHtcbiAgICAgICAgICAgIHRocm90dGxlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhyb3R0bGVkKTtcbiAgICAgICAgICAgIHRoaXMudGhyb3R0bGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlVGltZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoYXJnKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLmNsZWFyVGhyb3R0bGUoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm90dGxlVGltZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL3Rocm90dGxlVGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgc3RhcnRXaXRoXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci9zdGFydFdpdGgnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5zdGFydFdpdGggPSBzdGFydFdpdGhfMS5zdGFydFdpdGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFydFdpdGguanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3Ivc3RhcnRXaXRoLmpzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIEFycmF5T2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUnKTtcbnZhciBTY2FsYXJPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9vYnNlcnZhYmxlL1NjYWxhck9ic2VydmFibGUnKTtcbnZhciBFbXB0eU9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL29ic2VydmFibGUvRW1wdHlPYnNlcnZhYmxlJyk7XG52YXIgY29uY2F0XzEgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuLi91dGlsL2lzU2NoZWR1bGVyJyk7XG4vKipcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBpdGVtcyBpbiBhIHNwZWNpZmllZCBJdGVyYWJsZSBiZWZvcmUgaXQgYmVnaW5zIHRvIGVtaXQgaXRlbXMgZW1pdHRlZCBieSB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlLlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvc3RhcnRXaXRoLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEBwYXJhbSB7VmFsdWVzfSBhbiBJdGVyYWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBpdGVtcyB5b3Ugd2FudCB0aGUgbW9kaWZpZWQgT2JzZXJ2YWJsZSB0byBlbWl0IGZpcnN0LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBpdGVtcyBpbiB0aGUgc3BlY2lmaWVkIEl0ZXJhYmxlIGFuZCB0aGVuIGVtaXRzIHRoZSBpdGVtc1xuICogZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAbWV0aG9kIHN0YXJ0V2l0aFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gc3RhcnRXaXRoKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFycmF5W19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgc2NoZWR1bGVyID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSkge1xuICAgICAgICBhcnJheS5wb3AoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlciA9IG51bGw7XG4gICAgfVxuICAgIHZhciBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGxlbiA9PT0gMSkge1xuICAgICAgICByZXR1cm4gY29uY2F0XzEuY29uY2F0U3RhdGljKG5ldyBTY2FsYXJPYnNlcnZhYmxlXzEuU2NhbGFyT2JzZXJ2YWJsZShhcnJheVswXSwgc2NoZWR1bGVyKSwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGNvbmNhdF8xLmNvbmNhdFN0YXRpYyhuZXcgQXJyYXlPYnNlcnZhYmxlXzEuQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25jYXRfMS5jb25jYXRTdGF0aWMobmV3IEVtcHR5T2JzZXJ2YWJsZV8xLkVtcHR5T2JzZXJ2YWJsZShzY2hlZHVsZXIpLCB0aGlzKTtcbiAgICB9XG59XG5leHBvcnRzLnN0YXJ0V2l0aCA9IHN0YXJ0V2l0aDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXJ0V2l0aC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL3N0YXJ0V2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG52YXIgU2NhbGFyT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi9TY2FsYXJPYnNlcnZhYmxlJyk7XG52YXIgRW1wdHlPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0VtcHR5T2JzZXJ2YWJsZScpO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuLi91dGlsL2lzU2NoZWR1bGVyJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xudmFyIEFycmF5T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFycmF5T2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgaWYgKCFzY2hlZHVsZXIgJiYgYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NjYWxhciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXlPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcnJheSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgc29tZSB2YWx1ZXMgeW91IHNwZWNpZnkgYXMgYXJndW1lbnRzLFxuICAgICAqIGltbWVkaWF0ZWx5IG9uZSBhZnRlciB0aGUgb3RoZXIsIGFuZCB0aGVuIGVtaXRzIGEgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkVtaXRzIHRoZSBhcmd1bWVudHMgeW91IHByb3ZpZGUsIHRoZW4gY29tcGxldGVzLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvb2YucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBUaGlzIHN0YXRpYyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5XG4gICAgICogZW1pdHMgdGhlIGFyZ3VtZW50cyBnaXZlbiwgYW5kIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24gdGhlcmVhZnRlci4gSXQgY2FuXG4gICAgICogYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXIgT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgd2l0aCB7QGxpbmsgY29uY2F0fS5cbiAgICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIGEgYG51bGxgIFNjaGVkdWxlciwgd2hpY2ggbWVhbnMgdGhlIGBuZXh0YFxuICAgICAqIG5vdGlmaWNhdGlvbnMgYXJlIHNlbnQgc3luY2hyb25vdXNseSwgYWx0aG91Z2ggd2l0aCBhIGRpZmZlcmVudCBTY2hlZHVsZXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgd2hlbiB0aG9zZSBub3RpZmljYXRpb25zIHdpbGwgYmUgZGVsaXZlcmVkLlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdCAxMCwgMjAsIDMwLCB0aGVuICdhJywgJ2InLCAnYycsIHRoZW4gc3RhcnQgdGlja2luZyBldmVyeSBzZWNvbmQuPC9jYXB0aW9uPlxuICAgICAqIHZhciBudW1iZXJzID0gUnguT2JzZXJ2YWJsZS5vZigxMCwgMjAsIDMwKTtcbiAgICAgKiB2YXIgbGV0dGVycyA9IFJ4Lk9ic2VydmFibGUub2YoJ2EnLCAnYicsICdjJyk7XG4gICAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICAgKiB2YXIgcmVzdWx0ID0gbnVtYmVycy5jb25jYXQobGV0dGVycykuY29uY2F0KGludGVydmFsKTtcbiAgICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgICAqIEBzZWUge0BsaW5rIHRocm93fVxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5UfSB2YWx1ZXMgQXJndW1lbnRzIHRoYXQgcmVwcmVzZW50IGBuZXh0YCB2YWx1ZXMgdG8gYmUgZW1pdHRlZC5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gQSB7QGxpbmsgU2NoZWR1bGVyfSB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICAgKiB0aGUgZW1pc3Npb25zIG9mIHRoZSBgbmV4dGAgbm90aWZpY2F0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgZWFjaCBnaXZlbiBpbnB1dCB2YWx1ZS5cbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAbmFtZSBvZlxuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgQXJyYXlPYnNlcnZhYmxlLm9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFycmF5W19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSkge1xuICAgICAgICAgICAgYXJyYXkucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5T2JzZXJ2YWJsZShhcnJheSwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2NhbGFyT2JzZXJ2YWJsZV8xLlNjYWxhck9ic2VydmFibGUoYXJyYXlbMF0sIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZV8xLkVtcHR5T2JzZXJ2YWJsZShzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcnJheU9ic2VydmFibGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gc3RhdGUuYXJyYXksIGluZGV4ID0gc3RhdGUuaW5kZXgsIGNvdW50ID0gc3RhdGUuY291bnQsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgICAgICBpZiAoaW5kZXggPj0gY291bnQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaW5kZXhdKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShzdGF0ZSk7XG4gICAgfTtcbiAgICBBcnJheU9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgICAgICB2YXIgY291bnQgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShBcnJheU9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBhcnJheTogYXJyYXksIGluZGV4OiBpbmRleCwgY291bnQ6IGNvdW50LCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQgJiYgIXN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBcnJheU9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkFycmF5T2JzZXJ2YWJsZSA9IEFycmF5T2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL09ic2VydmFibGUnKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgU2NhbGFyT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjYWxhck9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2NhbGFyT2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IHRydWU7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NhbGFyT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IFNjYWxhck9ic2VydmFibGUodmFsdWUsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICBTY2FsYXJPYnNlcnZhYmxlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBkb25lID0gc3RhdGUuZG9uZSwgdmFsdWUgPSBzdGF0ZS52YWx1ZSwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXI7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShzdGF0ZSk7XG4gICAgfTtcbiAgICBTY2FsYXJPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKFNjYWxhck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSwgdmFsdWU6IHZhbHVlLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTY2FsYXJPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5TY2FsYXJPYnNlcnZhYmxlID0gU2NhbGFyT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjYWxhck9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vYnNlcnZhYmxlL1NjYWxhck9ic2VydmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBFbXB0eU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbXB0eU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG5vIGl0ZW1zIHRvIHRoZSBPYnNlcnZlciBhbmQgaW1tZWRpYXRlbHlcbiAgICAgKiBlbWl0cyBhIGNvbXBsZXRlIG5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdjb21wbGV0ZScsIGFuZCBub3RoaW5nIGVsc2UuXG4gICAgICogPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy9lbXB0eS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgKlxuICAgICAqIFRoaXMgc3RhdGljIG9wZXJhdG9yIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHlcbiAgICAgKiBlbWl0cyB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXJcbiAgICAgKiBPYnNlcnZhYmxlcywgc3VjaCBhcyBpbiBhIHtAbGluayBtZXJnZU1hcH0uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBudW1iZXIgNywgdGhlbiBjb21wbGV0ZS48L2NhcHRpb24+XG4gICAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUuZW1wdHkoKS5zdGFydFdpdGgoNyk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPk1hcCBhbmQgZmxhdHRlbiBvbmx5IG9kZCBudW1iZXJzIHRvIHRoZSBzZXF1ZW5jZSAnYScsICdiJywgJ2MnPC9jYXB0aW9uPlxuICAgICAqIHZhciBpbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAgICogdmFyIHJlc3VsdCA9IGludGVydmFsLm1lcmdlTWFwKHggPT5cbiAgICAgKiAgIHggJSAyID09PSAxID8gUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKSA6IFJ4Lk9ic2VydmFibGUuZW1wdHkoKVxuICAgICAqICk7XG4gICAgICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICAgKiBAc2VlIHtAbGluayBvZn1cbiAgICAgKiBAc2VlIHtAbGluayB0aHJvd31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBBIHtAbGluayBTY2hlZHVsZXJ9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgICAqIHRoZSBlbWlzc2lvbiBvZiB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIFwiZW1wdHlcIiBPYnNlcnZhYmxlOiBlbWl0cyBvbmx5IHRoZSBjb21wbGV0ZVxuICAgICAqIG5vdGlmaWNhdGlvbi5cbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAbmFtZSBlbXB0eVxuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRW1wdHlPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIEVtcHR5T2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgRW1wdHlPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEVtcHR5T2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwgeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRW1wdHlPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5FbXB0eU9ic2VydmFibGUgPSBFbXB0eU9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FbXB0eU9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vYnNlcnZhYmxlL0VtcHR5T2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuc2NoZWR1bGUgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzU2NoZWR1bGVyID0gaXNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1NjaGVkdWxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvaXNTY2hlZHVsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKCcuLi91dGlsL2lzU2NoZWR1bGVyJyk7XG52YXIgQXJyYXlPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9vYnNlcnZhYmxlL0FycmF5T2JzZXJ2YWJsZScpO1xudmFyIG1lcmdlQWxsXzEgPSByZXF1aXJlKCcuL21lcmdlQWxsJyk7XG4vKipcbiAqIENyZWF0ZXMgYW4gb3V0cHV0IE9ic2VydmFibGUgd2hpY2ggc2VxdWVudGlhbGx5IGVtaXRzIGFsbCB2YWx1ZXMgZnJvbSBldmVyeVxuICogZ2l2ZW4gaW5wdXQgT2JzZXJ2YWJsZSBhZnRlciB0aGUgY3VycmVudCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db25jYXRlbmF0ZXMgbXVsdGlwbGUgT2JzZXJ2YWJsZXMgdG9nZXRoZXIgYnlcbiAqIHNlcXVlbnRpYWxseSBlbWl0dGluZyB0aGVpciB2YWx1ZXMsIG9uZSBPYnNlcnZhYmxlIGFmdGVyIHRoZSBvdGhlci48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9jb25jYXQucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogSm9pbnMgdGhpcyBPYnNlcnZhYmxlIHdpdGggbXVsdGlwbGUgb3RoZXIgT2JzZXJ2YWJsZXMgYnkgc3Vic2NyaWJpbmcgdG8gdGhlbVxuICogb25lIGF0IGEgdGltZSwgc3RhcnRpbmcgd2l0aCB0aGUgc291cmNlLCBhbmQgbWVyZ2luZyB0aGVpciByZXN1bHRzIGludG8gdGhlXG4gKiBvdXRwdXQgT2JzZXJ2YWJsZS4gV2lsbCB3YWl0IGZvciBlYWNoIE9ic2VydmFibGUgdG8gY29tcGxldGUgYmVmb3JlIG1vdmluZ1xuICogb24gdG8gdGhlIG5leHQuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Q29uY2F0ZW5hdGUgYSB0aW1lciBjb3VudGluZyBmcm9tIDAgdG8gMyB3aXRoIGEgc3luY2hyb25vdXMgc2VxdWVuY2UgZnJvbSAxIHRvIDEwPC9jYXB0aW9uPlxuICogdmFyIHRpbWVyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDQpO1xuICogdmFyIHNlcXVlbmNlID0gUnguT2JzZXJ2YWJsZS5yYW5nZSgxLCAxMCk7XG4gKiB2YXIgcmVzdWx0ID0gdGltZXIuY29uY2F0KHNlcXVlbmNlKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Q29uY2F0ZW5hdGUgMyBPYnNlcnZhYmxlczwvY2FwdGlvbj5cbiAqIHZhciB0aW1lcjEgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApLnRha2UoMTApO1xuICogdmFyIHRpbWVyMiA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMjAwMCkudGFrZSg2KTtcbiAqIHZhciB0aW1lcjMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDUwMCkudGFrZSgxMCk7XG4gKiB2YXIgcmVzdWx0ID0gdGltZXIxLmNvbmNhdCh0aW1lcjIsIHRpbWVyMyk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gb3RoZXIgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBjb25jYXRlbmF0ZSBhZnRlciB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLiBNb3JlIHRoYW4gb25lIGlucHV0IE9ic2VydmFibGVzIG1heSBiZSBnaXZlbiBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPW51bGxdIEFuIG9wdGlvbmFsIFNjaGVkdWxlciB0byBzY2hlZHVsZSBlYWNoXG4gKiBPYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBvbi5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFsbCB2YWx1ZXMgb2YgZWFjaCBwYXNzZWQgT2JzZXJ2YWJsZSBtZXJnZWQgaW50byBhXG4gKiBzaW5nbGUgT2JzZXJ2YWJsZSwgaW4gb3JkZXIsIGluIHNlcmlhbCBmYXNoaW9uLlxuICogQG1ldGhvZCBjb25jYXRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmNhdFN0YXRpYy5hcHBseSh2b2lkIDAsIFt0aGlzXS5jb25jYXQob2JzZXJ2YWJsZXMpKTtcbn1cbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogQ3JlYXRlcyBhbiBvdXRwdXQgT2JzZXJ2YWJsZSB3aGljaCBzZXF1ZW50aWFsbHkgZW1pdHMgYWxsIHZhbHVlcyBmcm9tIGV2ZXJ5XG4gKiBnaXZlbiBpbnB1dCBPYnNlcnZhYmxlIGFmdGVyIHRoZSBjdXJyZW50IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbmNhdGVuYXRlcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieVxuICogc2VxdWVudGlhbGx5IGVtaXR0aW5nIHRoZWlyIHZhbHVlcywgb25lIE9ic2VydmFibGUgYWZ0ZXIgdGhlIG90aGVyLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2NvbmNhdC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBKb2lucyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieSBzdWJzY3JpYmluZyB0byB0aGVtIG9uZSBhdCBhIHRpbWUgYW5kXG4gKiBtZXJnaW5nIHRoZWlyIHJlc3VsdHMgaW50byB0aGUgb3V0cHV0IE9ic2VydmFibGUuIFdpbGwgd2FpdCBmb3IgZWFjaFxuICogT2JzZXJ2YWJsZSB0byBjb21wbGV0ZSBiZWZvcmUgbW92aW5nIG9uIHRvIHRoZSBuZXh0LlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvbmNhdGVuYXRlIGEgdGltZXIgY291bnRpbmcgZnJvbSAwIHRvIDMgd2l0aCBhIHN5bmNocm9ub3VzIHNlcXVlbmNlIGZyb20gMSB0byAxMDwvY2FwdGlvbj5cbiAqIHZhciB0aW1lciA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSg0KTtcbiAqIHZhciBzZXF1ZW5jZSA9IFJ4Lk9ic2VydmFibGUucmFuZ2UoMSwgMTApO1xuICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUuY29uY2F0KHRpbWVyLCBzZXF1ZW5jZSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvbmNhdGVuYXRlIDMgT2JzZXJ2YWJsZXM8L2NhcHRpb24+XG4gKiB2YXIgdGltZXIxID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDEwKTtcbiAqIHZhciB0aW1lcjIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDIwMDApLnRha2UoNik7XG4gKiB2YXIgdGltZXIzID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCg1MDApLnRha2UoMTApO1xuICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUuY29uY2F0KHRpbWVyMSwgdGltZXIyLCB0aW1lcjMpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXB9XG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IGlucHV0MSBBbiBpbnB1dCBPYnNlcnZhYmxlIHRvIGNvbmNhdGVuYXRlIHdpdGggb3RoZXJzLlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBpbnB1dDIgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBjb25jYXRlbmF0ZSB3aXRoIG90aGVycy5cbiAqIE1vcmUgdGhhbiBvbmUgaW5wdXQgT2JzZXJ2YWJsZXMgbWF5IGJlIGdpdmVuIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9bnVsbF0gQW4gb3B0aW9uYWwgU2NoZWR1bGVyIHRvIHNjaGVkdWxlIGVhY2hcbiAqIE9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG9uLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQWxsIHZhbHVlcyBvZiBlYWNoIHBhc3NlZCBPYnNlcnZhYmxlIG1lcmdlZCBpbnRvIGFcbiAqIHNpbmdsZSBPYnNlcnZhYmxlLCBpbiBvcmRlciwgaW4gc2VyaWFsIGZhc2hpb24uXG4gKiBAc3RhdGljIHRydWVcbiAqIEBuYW1lIGNvbmNhdFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gY29uY2F0U3RhdGljKCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgc2NoZWR1bGVyID0gbnVsbDtcbiAgICB2YXIgYXJncyA9IG9ic2VydmFibGVzO1xuICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKGFyZ3Nbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IGFyZ3MucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlXzEuQXJyYXlPYnNlcnZhYmxlKG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IG1lcmdlQWxsXzEuTWVyZ2VBbGxPcGVyYXRvcigxKSk7XG59XG5leHBvcnRzLmNvbmNhdFN0YXRpYyA9IGNvbmNhdFN0YXRpYztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmNhdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL2NvbmNhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPdXRlclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL091dGVyU3Vic2NyaWJlcicpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKCcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0Jyk7XG4vKipcbiAqIENvbnZlcnRzIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUgaW50byBhIGZpcnN0LW9yZGVyIE9ic2VydmFibGUgd2hpY2hcbiAqIGNvbmN1cnJlbnRseSBkZWxpdmVycyBhbGwgdmFsdWVzIHRoYXQgYXJlIGVtaXR0ZWQgb24gdGhlIGlubmVyIE9ic2VydmFibGVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBhbiBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL21lcmdlQWxsLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGBtZXJnZUFsbGAgc3Vic2NyaWJlcyB0byBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgT2JzZXJ2YWJsZXMsIGFsc28ga25vd24gYXNcbiAqIGEgaGlnaGVyLW9yZGVyIE9ic2VydmFibGUuIEVhY2ggdGltZSBpdCBvYnNlcnZlcyBvbmUgb2YgdGhlc2UgZW1pdHRlZCBpbm5lclxuICogT2JzZXJ2YWJsZXMsIGl0IHN1YnNjcmliZXMgdG8gdGhhdCBhbmQgZGVsaXZlcnMgYWxsIHRoZSB2YWx1ZXMgZnJvbSB0aGVcbiAqIGlubmVyIE9ic2VydmFibGUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBUaGUgb3V0cHV0IE9ic2VydmFibGUgb25seVxuICogY29tcGxldGVzIG9uY2UgYWxsIGlubmVyIE9ic2VydmFibGVzIGhhdmUgY29tcGxldGVkLiBBbnkgZXJyb3IgZGVsaXZlcmVkIGJ5XG4gKiBhIGlubmVyIE9ic2VydmFibGUgd2lsbCBiZSBpbW1lZGlhdGVseSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5TcGF3biBhIG5ldyBpbnRlcnZhbCBPYnNlcnZhYmxlIGZvciBlYWNoIGNsaWNrIGV2ZW50LCBhbmQgYmxlbmQgdGhlaXIgb3V0cHV0cyBhcyBvbmUgT2JzZXJ2YWJsZTwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgaGlnaGVyT3JkZXIgPSBjbGlja3MubWFwKChldikgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKSk7XG4gKiB2YXIgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLm1lcmdlQWxsKCk7XG4gKiBmaXJzdE9yZGVyLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db3VudCBmcm9tIDAgdG8gOSBldmVyeSBzZWNvbmQgZm9yIGVhY2ggY2xpY2ssIGJ1dCBvbmx5IGFsbG93IDIgY29uY3VycmVudCB0aW1lcnM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGhpZ2hlck9yZGVyID0gY2xpY2tzLm1hcCgoZXYpID0+IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSgxMCkpO1xuICogdmFyIGZpcnN0T3JkZXIgPSBoaWdoZXJPcmRlci5tZXJnZUFsbCgyKTtcbiAqIGZpcnN0T3JkZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbWJpbmVBbGx9XG4gKiBAc2VlIHtAbGluayBjb25jYXRBbGx9XG4gKiBAc2VlIHtAbGluayBleGhhdXN0fVxuICogQHNlZSB7QGxpbmsgbWVyZ2V9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayBzd2l0Y2h9XG4gKiBAc2VlIHtAbGluayB6aXBBbGx9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PU51bWJlci5QT1NJVElWRV9JTkZJTklUWV0gTWF4aW11bSBudW1iZXIgb2YgaW5uZXJcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHZhbHVlcyBjb21pbmcgZnJvbSBhbGwgdGhlXG4gKiBpbm5lciBPYnNlcnZhYmxlcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2QgbWVyZ2VBbGxcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQWxsKGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBNZXJnZUFsbE9wZXJhdG9yKGNvbmN1cnJlbnQpKTtcbn1cbmV4cG9ydHMubWVyZ2VBbGwgPSBtZXJnZUFsbDtcbnZhciBNZXJnZUFsbE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXJnZUFsbE9wZXJhdG9yKGNvbmN1cnJlbnQpIHtcbiAgICAgICAgdGhpcy5jb25jdXJyZW50ID0gY29uY3VycmVudDtcbiAgICB9XG4gICAgTWVyZ2VBbGxPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChvYnNlcnZlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgTWVyZ2VBbGxTdWJzY3JpYmVyKG9ic2VydmVyLCB0aGlzLmNvbmN1cnJlbnQpKTtcbiAgICB9O1xuICAgIHJldHVybiBNZXJnZUFsbE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydHMuTWVyZ2VBbGxPcGVyYXRvciA9IE1lcmdlQWxsT3BlcmF0b3I7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIE1lcmdlQWxsU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lcmdlQWxsU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZXJnZUFsbFN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbmN1cnJlbnQpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmNvbmN1cnJlbnQgPSBjb25jdXJyZW50O1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgfVxuICAgIE1lcmdlQWxsU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPCB0aGlzLmNvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlKys7XG4gICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlQWxsU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmJ1ZmZlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWVyZ2VBbGxTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHRoaXMucmVtb3ZlKGlubmVyU3ViKTtcbiAgICAgICAgdGhpcy5hY3RpdmUtLTtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KGJ1ZmZlci5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWVyZ2VBbGxTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydHMuTWVyZ2VBbGxTdWJzY3JpYmVyID0gTWVyZ2VBbGxTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VBbGwuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vcGVyYXRvci9tZXJnZUFsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuL1N1YnNjcmliZXInKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgT3V0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICAgIE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE91dGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuT3V0ZXJTdWJzY3JpYmVyID0gT3V0ZXJTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3V0ZXJTdWJzY3JpYmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvT3V0ZXJTdWJzY3JpYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciByb290XzEgPSByZXF1aXJlKCcuL3Jvb3QnKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbnZhciBpc1Byb21pc2VfMSA9IHJlcXVpcmUoJy4vaXNQcm9taXNlJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIGl0ZXJhdG9yXzEgPSByZXF1aXJlKCcuLi9zeW1ib2wvaXRlcmF0b3InKTtcbnZhciBJbm5lclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL0lubmVyU3Vic2NyaWJlcicpO1xudmFyIHN5bWJvbF9vYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdzeW1ib2wtb2JzZXJ2YWJsZScpO1xuZnVuY3Rpb24gc3Vic2NyaWJlVG9SZXN1bHQob3V0ZXJTdWJzY3JpYmVyLCByZXN1bHQsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSBuZXcgSW5uZXJTdWJzY3JpYmVyXzEuSW5uZXJTdWJzY3JpYmVyKG91dGVyU3Vic2NyaWJlciwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgIGlmIChyZXN1bHQuX2lzU2NhbGFyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzY3JpYmUoZGVzdGluYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc0FycmF5XzEuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuICYmICFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZDsgaSsrKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHJlc3VsdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1Byb21pc2VfMS5pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBkZXN0aW5hdGlvbi5lcnJvcihlcnIpOyB9KVxuICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLy8gRXNjYXBpbmcgdGhlIFByb21pc2UgdHJhcDogZ2xvYmFsbHkgdGhyb3cgdW5oYW5kbGVkIGVycm9yc1xuICAgICAgICAgICAgcm9vdF8xLnJvb3Quc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRocm93IGVycjsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVzdGluYXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRbaXRlcmF0b3JfMS4kJGl0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcmVzdWx0OyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYVtfaV07XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzdWx0W3N5bWJvbF9vYnNlcnZhYmxlXzEuZGVmYXVsdF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG9icyA9IHJlc3VsdFtzeW1ib2xfb2JzZXJ2YWJsZV8xLmRlZmF1bHRdKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoJ2ludmFsaWQgb2JzZXJ2YWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUobmV3IElubmVyU3Vic2NyaWJlcl8xLklubmVyU3Vic2NyaWJlcihvdXRlclN1YnNjcmliZXIsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVzdGluYXRpb24uZXJyb3IobmV3IFR5cGVFcnJvcigndW5rbm93biB0eXBlIHJldHVybmVkJykpO1xuICAgIH1cbn1cbmV4cG9ydHMuc3Vic2NyaWJlVG9SZXN1bHQgPSBzdWJzY3JpYmVUb1Jlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUmVzdWx0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQcm9taXNlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc1Byb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvcm9vdCcpO1xudmFyIFN5bWJvbCA9IHJvb3RfMS5yb290LlN5bWJvbDtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgICBleHBvcnRzLiQkaXRlcmF0b3IgPSBTeW1ib2wuaXRlcmF0b3I7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV4cG9ydHMuJCRpdGVyYXRvciA9IFN5bWJvbC5mb3IoJ2l0ZXJhdG9yJyk7XG4gICAgfVxufVxuZWxzZSB7XG4gICAgaWYgKHJvb3RfMS5yb290LlNldCAmJiB0eXBlb2YgbmV3IHJvb3RfMS5yb290LlNldCgpWydAQGl0ZXJhdG9yJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQnVnIGZvciBtb3ppbGxhIHZlcnNpb25cbiAgICAgICAgZXhwb3J0cy4kJGl0ZXJhdG9yID0gJ0BAaXRlcmF0b3InO1xuICAgIH1cbiAgICBlbHNlIGlmIChyb290XzEucm9vdC5NYXApIHtcbiAgICAgICAgLy8gZXM2LXNoaW0gc3BlY2lmaWMgbG9naWNcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhyb290XzEucm9vdC5NYXAucHJvdG90eXBlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdlbnRyaWVzJyAmJiBrZXkgIT09ICdzaXplJyAmJiByb290XzEucm9vdC5NYXAucHJvdG90eXBlW2tleV0gPT09IHJvb3RfMS5yb290Lk1hcC5wcm90b3R5cGVbJ2VudHJpZXMnXSkge1xuICAgICAgICAgICAgICAgIGV4cG9ydHMuJCRpdGVyYXRvciA9IGtleTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy4kJGl0ZXJhdG9yID0gJ0BAaXRlcmF0b3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4vU3Vic2NyaWJlcicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBJbm5lclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbm5lclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJTdWJzY3JpYmVyKHBhcmVudCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIHRoaXMub3V0ZXJJbmRleCA9IG91dGVySW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeU5leHQodGhpcy5vdXRlclZhbHVlLCB2YWx1ZSwgdGhpcy5vdXRlckluZGV4LCB0aGlzLmluZGV4KyssIHRoaXMpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5RXJyb3IoZXJyb3IsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5Q29tcGxldGUodGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBJbm5lclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLklubmVyU3Vic2NyaWJlciA9IElubmVyU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlubmVyU3Vic2NyaWJlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL0lubmVyU3Vic2NyaWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHdpdGhMYXRlc3RGcm9tXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci93aXRoTGF0ZXN0RnJvbScpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLndpdGhMYXRlc3RGcm9tID0gd2l0aExhdGVzdEZyb21fMS53aXRoTGF0ZXN0RnJvbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGhMYXRlc3RGcm9tLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gMTEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vT3V0ZXJTdWJzY3JpYmVyJyk7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnKTtcbi8qKlxuICogQ29tYmluZXMgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHdpdGggb3RoZXIgT2JzZXJ2YWJsZXMgdG8gY3JlYXRlIGFuIE9ic2VydmFibGVcbiAqIHdob3NlIHZhbHVlcyBhcmUgY2FsY3VsYXRlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVzIG9mIGVhY2gsIG9ubHkgd2hlbiB0aGVcbiAqIHNvdXJjZSBlbWl0cy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+V2hlbmV2ZXIgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGVtaXRzIGEgdmFsdWUsIGl0XG4gKiBjb21wdXRlcyBhIGZvcm11bGEgdXNpbmcgdGhhdCB2YWx1ZSBwbHVzIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gb3RoZXIgaW5wdXRcbiAqIE9ic2VydmFibGVzLCB0aGVuIGVtaXRzIHRoZSBvdXRwdXQgb2YgdGhhdCBmb3JtdWxhLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3dpdGhMYXRlc3RGcm9tLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGB3aXRoTGF0ZXN0RnJvbWAgY29tYmluZXMgZWFjaCB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSAodGhlXG4gKiBpbnN0YW5jZSkgd2l0aCB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIHRoZSBvdGhlciBpbnB1dCBPYnNlcnZhYmxlcyBvbmx5IHdoZW5cbiAqIHRoZSBzb3VyY2UgZW1pdHMgYSB2YWx1ZSwgb3B0aW9uYWxseSB1c2luZyBhIGBwcm9qZWN0YCBmdW5jdGlvbiB0byBkZXRlcm1pbmVcbiAqIHRoZSB2YWx1ZSB0byBiZSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gQWxsIGlucHV0IE9ic2VydmFibGVzIG11c3RcbiAqIGVtaXQgYXQgbGVhc3Qgb25lIHZhbHVlIGJlZm9yZSB0aGUgb3V0cHV0IE9ic2VydmFibGUgd2lsbCBlbWl0IGEgdmFsdWUuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T24gZXZlcnkgY2xpY2sgZXZlbnQsIGVtaXQgYW4gYXJyYXkgd2l0aCB0aGUgbGF0ZXN0IHRpbWVyIGV2ZW50IHBsdXMgdGhlIGNsaWNrIGV2ZW50PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciB0aW1lciA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLndpdGhMYXRlc3RGcm9tKHRpbWVyKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUxhdGVzdH1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IG90aGVyIEFuIGlucHV0IE9ic2VydmFibGUgdG8gY29tYmluZSB3aXRoIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIE1vcmUgdGhhbiBvbmUgaW5wdXQgT2JzZXJ2YWJsZXMgbWF5IGJlIGdpdmVuIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb2plY3RdIFByb2plY3Rpb24gZnVuY3Rpb24gZm9yIGNvbWJpbmluZyB2YWx1ZXNcbiAqIHRvZ2V0aGVyLiBSZWNlaXZlcyBhbGwgdmFsdWVzIGluIG9yZGVyIG9mIHRoZSBPYnNlcnZhYmxlcyBwYXNzZWQsIHdoZXJlIHRoZVxuICogZmlyc3QgcGFyYW1ldGVyIGlzIGEgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUuIChlLmcuXG4gKiBgYS53aXRoTGF0ZXN0RnJvbShiLCBjLCAoYTEsIGIxLCBjMSkgPT4gYTEgKyBiMSArIGMxKWApLiBJZiB0aGlzIGlzIG5vdFxuICogcGFzc2VkLCBhcnJheXMgd2lsbCBiZSBlbWl0dGVkIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgcHJvamVjdGVkIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWVzIGZyb20gZWFjaCBpbnB1dCBPYnNlcnZhYmxlLCBvciBhbiBhcnJheSBvZiB0aGUgbW9zdCByZWNlbnQgdmFsdWVzIGZyb21cbiAqIGVhY2ggaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2Qgd2l0aExhdGVzdEZyb21cbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIHdpdGhMYXRlc3RGcm9tKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHByb2plY3Q7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvamVjdCA9IGFyZ3MucG9wKCk7XG4gICAgfVxuICAgIHZhciBvYnNlcnZhYmxlcyA9IGFyZ3M7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgV2l0aExhdGVzdEZyb21PcGVyYXRvcihvYnNlcnZhYmxlcywgcHJvamVjdCkpO1xufVxuZXhwb3J0cy53aXRoTGF0ZXN0RnJvbSA9IHdpdGhMYXRlc3RGcm9tO1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbnZhciBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yKG9ic2VydmFibGVzLCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlcztcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgV2l0aExhdGVzdEZyb21PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBXaXRoTGF0ZXN0RnJvbVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5vYnNlcnZhYmxlcywgdGhpcy5wcm9qZWN0KSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2l0aExhdGVzdEZyb21PcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBXaXRoTGF0ZXN0RnJvbVN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9ic2VydmFibGVzLCBwcm9qZWN0KSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRvUmVzcG9uZCA9IFtdO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2YWJsZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRvUmVzcG9uZC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBXaXRoTGF0ZXN0RnJvbVN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbb3V0ZXJJbmRleF0gPSBpbm5lclZhbHVlO1xuICAgICAgICB2YXIgdG9SZXNwb25kID0gdGhpcy50b1Jlc3BvbmQ7XG4gICAgICAgIGlmICh0b1Jlc3BvbmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gdG9SZXNwb25kLmluZGV4T2Yob3V0ZXJJbmRleCk7XG4gICAgICAgICAgICBpZiAoZm91bmQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdG9SZXNwb25kLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9O1xuICAgIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudG9SZXNwb25kLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbdmFsdWVdLmNvbmNhdCh0aGlzLnZhbHVlcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5UHJvamVjdChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5UHJvamVjdCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnByb2plY3QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoTGF0ZXN0RnJvbS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gMTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgc2hhcmVfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL3NoYXJlJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2hhcmUgPSBzaGFyZV8xLnNoYXJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcmUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIG11bHRpY2FzdF8xID0gcmVxdWlyZSgnLi9tdWx0aWNhc3QnKTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKCcuLi9TdWJqZWN0Jyk7XG5mdW5jdGlvbiBzaGFyZVN1YmplY3RGYWN0b3J5KCkge1xuICAgIHJldHVybiBuZXcgU3ViamVjdF8xLlN1YmplY3QoKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIG5ldyBPYnNlcnZhYmxlIHRoYXQgbXVsdGljYXN0cyAoc2hhcmVzKSB0aGUgb3JpZ2luYWwgT2JzZXJ2YWJsZS4gQXMgbG9uZyBhcyB0aGVyZSBpcyBhdCBsZWFzdCBvbmVcbiAqIFN1YnNjcmliZXIgdGhpcyBPYnNlcnZhYmxlIHdpbGwgYmUgc3Vic2NyaWJlZCBhbmQgZW1pdHRpbmcgZGF0YS4gV2hlbiBhbGwgc3Vic2NyaWJlcnMgaGF2ZSB1bnN1YnNjcmliZWQgaXQgd2lsbFxuICogdW5zdWJzY3JpYmUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUuIEJlY2F1c2UgdGhlIE9ic2VydmFibGUgaXMgbXVsdGljYXN0aW5nIGl0IG1ha2VzIHRoZSBzdHJlYW0gYGhvdGAuXG4gKiBUaGlzIGlzIGFuIGFsaWFzIGZvciAucHVibGlzaCgpLnJlZkNvdW50KCkuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9zaGFyZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fSBhbiBPYnNlcnZhYmxlIHRoYXQgdXBvbiBjb25uZWN0aW9uIGNhdXNlcyB0aGUgc291cmNlIE9ic2VydmFibGUgdG8gZW1pdCBpdGVtcyB0byBpdHMgT2JzZXJ2ZXJzXG4gKiBAbWV0aG9kIHNoYXJlXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBzaGFyZSgpIHtcbiAgICByZXR1cm4gbXVsdGljYXN0XzEubXVsdGljYXN0LmNhbGwodGhpcywgc2hhcmVTdWJqZWN0RmFjdG9yeSkucmVmQ291bnQoKTtcbn1cbmV4cG9ydHMuc2hhcmUgPSBzaGFyZTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYXJlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3Ivc2hhcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE11bHRpY2FzdE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL29ic2VydmFibGUvTXVsdGljYXN0T2JzZXJ2YWJsZScpO1xudmFyIENvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUnKTtcbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdHMgb2YgaW52b2tpbmcgYSBzcGVjaWZpZWQgc2VsZWN0b3Igb24gaXRlbXNcbiAqIGVtaXR0ZWQgYnkgYSBDb25uZWN0YWJsZU9ic2VydmFibGUgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHN0cmVhbS5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL211bHRpY2FzdC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN1YmplY3R9IEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGludGVybWVkaWF0ZSBzdWJqZWN0IHRocm91Z2hcbiAqIHdoaWNoIHRoZSBzb3VyY2Ugc2VxdWVuY2UncyBlbGVtZW50cyB3aWxsIGJlIG11bHRpY2FzdCB0byB0aGUgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIG9yIFN1YmplY3QgdG8gcHVzaCBzb3VyY2UgZWxlbWVudHMgaW50by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IE9wdGlvbmFsIHNlbGVjdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHN0cmVhbVxuICogYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc3RyZWFtLlxuICogU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIHJlY2VpdmUgYWxsIG5vdGlmaWNhdGlvbnMgb2YgdGhlIHNvdXJjZSBmcm9tIHRoZVxuICogdGltZSBvZiB0aGUgc3Vic2NyaXB0aW9uIGZvcndhcmQuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdHMgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yXG4gKiBvbiB0aGUgaXRlbXMgZW1pdHRlZCBieSBhIGBDb25uZWN0YWJsZU9ic2VydmFibGVgIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0b1xuICogdGhlIHVuZGVybHlpbmcgc3RyZWFtLlxuICogQG1ldGhvZCBtdWx0aWNhc3RcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIG11bHRpY2FzdChzdWJqZWN0T3JTdWJqZWN0RmFjdG9yeSwgc2VsZWN0b3IpIHtcbiAgICB2YXIgc3ViamVjdEZhY3Rvcnk7XG4gICAgaWYgKHR5cGVvZiBzdWJqZWN0T3JTdWJqZWN0RmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdWJqZWN0RmFjdG9yeSA9IHN1YmplY3RPclN1YmplY3RGYWN0b3J5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3ViamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBzdWJqZWN0RmFjdG9yeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJqZWN0T3JTdWJqZWN0RmFjdG9yeTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICFzZWxlY3RvciA/XG4gICAgICAgIG5ldyBDb25uZWN0YWJsZU9ic2VydmFibGVfMS5Db25uZWN0YWJsZU9ic2VydmFibGUodGhpcywgc3ViamVjdEZhY3RvcnkpIDpcbiAgICAgICAgbmV3IE11bHRpY2FzdE9ic2VydmFibGVfMS5NdWx0aWNhc3RPYnNlcnZhYmxlKHRoaXMsIHN1YmplY3RGYWN0b3J5LCBzZWxlY3Rvcik7XG59XG5leHBvcnRzLm11bHRpY2FzdCA9IG11bHRpY2FzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW11bHRpY2FzdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL211bHRpY2FzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG52YXIgQ29ubmVjdGFibGVPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZScpO1xudmFyIE11bHRpY2FzdE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNdWx0aWNhc3RPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE11bHRpY2FzdE9ic2VydmFibGUoc291cmNlLCBzdWJqZWN0RmFjdG9yeSwgc2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLnN1YmplY3RGYWN0b3J5ID0gc3ViamVjdEZhY3Rvcnk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB9XG4gICAgTXVsdGljYXN0T2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHNlbGVjdG9yID0gX2Euc2VsZWN0b3IsIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gbmV3IENvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xLkNvbm5lY3RhYmxlT2JzZXJ2YWJsZShzb3VyY2UsIHRoaXMuc3ViamVjdEZhY3RvcnkpO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc2VsZWN0b3IoY29ubmVjdGFibGUpLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChjb25uZWN0YWJsZS5jb25uZWN0KCkpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpY2FzdE9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLk11bHRpY2FzdE9ic2VydmFibGUgPSBNdWx0aWNhc3RPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TXVsdGljYXN0T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvTXVsdGljYXN0T2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKCcuLi9TdWJqZWN0Jyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmlwdGlvbicpO1xuLyoqXG4gKiBAY2xhc3MgQ29ubmVjdGFibGVPYnNlcnZhYmxlPFQ+XG4gKi9cbnZhciBDb25uZWN0YWJsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb25uZWN0YWJsZU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVPYnNlcnZhYmxlKHNvdXJjZSwgc3ViamVjdEZhY3RvcnkpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLnN1YmplY3RGYWN0b3J5ID0gc3ViamVjdEZhY3Rvcnk7XG4gICAgICAgIHRoaXMuX3JlZkNvdW50ID0gMDtcbiAgICB9XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViamVjdCgpLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuZ2V0U3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSB0aGlzLl9zdWJqZWN0O1xuICAgICAgICBpZiAoIXN1YmplY3QgfHwgc3ViamVjdC5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLnN1YmplY3RGYWN0b3J5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YmplY3Q7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbjtcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkKHRoaXMuc291cmNlXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShuZXcgQ29ubmVjdGFibGVTdWJzY3JpYmVyKHRoaXMuZ2V0U3ViamVjdCgpLCB0aGlzKSkpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLnJlZkNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBSZWZDb3VudE9wZXJhdG9yKHRoaXMpKTtcbiAgICB9O1xuICAgIHJldHVybiBDb25uZWN0YWJsZU9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkNvbm5lY3RhYmxlT2JzZXJ2YWJsZSA9IENvbm5lY3RhYmxlT2JzZXJ2YWJsZTtcbnZhciBDb25uZWN0YWJsZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb25uZWN0YWJsZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjb25uZWN0YWJsZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgQ29ubmVjdGFibGVTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2Vycm9yLmNhbGwodGhpcywgZXJyKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmIChjb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbm5lY3RhYmxlLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGFibGVTdWJzY3JpYmVyO1xufShTdWJqZWN0XzEuU3ViamVjdFN1YnNjcmliZXIpKTtcbnZhciBSZWZDb3VudE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWZDb3VudE9wZXJhdG9yKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgUmVmQ291bnRPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50Kys7XG4gICAgICAgIHZhciByZWZDb3VudGVyID0gbmV3IFJlZkNvdW50U3Vic2NyaWJlcihzdWJzY3JpYmVyLCBjb25uZWN0YWJsZSk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2UuX3N1YnNjcmliZShyZWZDb3VudGVyKTtcbiAgICAgICAgaWYgKCFyZWZDb3VudGVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZWZDb3VudGVyLmNvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudE9wZXJhdG9yO1xufSgpKTtcbnZhciBSZWZDb3VudFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWZDb3VudFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjb25uZWN0YWJsZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgUmVmQ291bnRTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmICghY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgIHZhciByZWZDb3VudCA9IGNvbm5lY3RhYmxlLl9yZWZDb3VudDtcbiAgICAgICAgaWYgKHJlZkNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gcmVmQ291bnQgLSAxO1xuICAgICAgICBpZiAocmVmQ291bnQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vL1xuICAgICAgICAvLyBDb21wYXJlIHRoZSBsb2NhbCBSZWZDb3VudFN1YnNjcmliZXIncyBjb25uZWN0aW9uIFN1YnNjcmlwdGlvbiB0byB0aGVcbiAgICAgICAgLy8gY29ubmVjdGlvbiBTdWJzY3JpcHRpb24gb24gdGhlIHNoYXJlZCBDb25uZWN0YWJsZU9ic2VydmFibGUuIEluIGNhc2VzXG4gICAgICAgIC8vIHdoZXJlIHRoZSBDb25uZWN0YWJsZU9ic2VydmFibGUgc291cmNlIHN5bmNocm9ub3VzbHkgZW1pdHMgdmFsdWVzLCBhbmRcbiAgICAgICAgLy8gdGhlIFJlZkNvdW50U3Vic2NyaWJlcidzIGRvd3N0cmVhbSBPYnNlcnZlcnMgc3luY2hyb25vdXNseSB1bnN1YnNjcmliZSxcbiAgICAgICAgLy8gZXhlY3V0aW9uIGNvbnRpbnVlcyB0byBoZXJlIGJlZm9yZSB0aGUgUmVmQ291bnRPcGVyYXRvciBoYXMgYSBjaGFuY2UgdG9cbiAgICAgICAgLy8gc3VwcGx5IHRoZSBSZWZDb3VudFN1YnNjcmliZXIgd2l0aCB0aGUgc2hhcmVkIGNvbm5lY3Rpb24gU3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBGb3IgZXhhbXBsZTpcbiAgICAgICAgLy8gYGBgXG4gICAgICAgIC8vIE9ic2VydmFibGUucmFuZ2UoMCwgMTApXG4gICAgICAgIC8vICAgLnB1Ymxpc2goKVxuICAgICAgICAvLyAgIC5yZWZDb3VudCgpXG4gICAgICAgIC8vICAgLnRha2UoNSlcbiAgICAgICAgLy8gICAuc3Vic2NyaWJlKCk7XG4gICAgICAgIC8vIGBgYFxuICAgICAgICAvLyBJbiBvcmRlciB0byBhY2NvdW50IGZvciB0aGlzIGNhc2UsIFJlZkNvdW50U3Vic2NyaWJlciBzaG91bGQgb25seSBkaXNwb3NlXG4gICAgICAgIC8vIHRoZSBDb25uZWN0YWJsZU9ic2VydmFibGUncyBzaGFyZWQgY29ubmVjdGlvbiBTdWJzY3JpcHRpb24gaWYgdGhlXG4gICAgICAgIC8vIGNvbm5lY3Rpb24gU3Vic2NyaXB0aW9uIGV4aXN0cywgKmFuZCogZWl0aGVyOlxuICAgICAgICAvLyAgIGEuIFJlZkNvdW50U3Vic2NyaWJlciBkb2Vzbid0IGhhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHNoYXJlZCBjb25uZWN0aW9uXG4gICAgICAgIC8vICAgICAgU3Vic2NyaXB0aW9uIHlldCwgb3IsXG4gICAgICAgIC8vICAgYi4gUmVmQ291bnRTdWJzY3JpYmVyJ3MgY29ubmVjdGlvbiBTdWJzY3JpcHRpb24gcmVmZXJlbmNlIGlzIGlkZW50aWNhbFxuICAgICAgICAvLyAgICAgIHRvIHRoZSBzaGFyZWQgY29ubmVjdGlvbiBTdWJzY3JpcHRpb25cbiAgICAgICAgLy8vXG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB2YXIgc2hhcmVkQ29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAoc2hhcmVkQ29ubmVjdGlvbiAmJiAoIWNvbm5lY3Rpb24gfHwgc2hhcmVkQ29ubmVjdGlvbiA9PT0gY29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHNoYXJlZENvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbm5lY3RhYmxlT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vT2JzZXJ2YWJsZScpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4vU3Vic2NyaWJlcicpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi9TdWJzY3JpcHRpb24nKTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xID0gcmVxdWlyZSgnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJyk7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi9TdWJqZWN0U3Vic2NyaXB0aW9uJyk7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuL3N5bWJvbC9yeFN1YnNjcmliZXInKTtcbi8qKlxuICogQGNsYXNzIFN1YmplY3RTdWJzY3JpYmVyPFQ+XG4gKi9cbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YmplY3RTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gU3ViamVjdFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLlN1YmplY3RTdWJzY3JpYmVyID0gU3ViamVjdFN1YnNjcmliZXI7XG4vKipcbiAqIEBjbGFzcyBTdWJqZWN0PFQ+XG4gKi9cbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1Vuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS4kJHJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3ViamVjdFN1YnNjcmliZXIodGhpcyk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gbmV3IEFub255bW91c1N1YmplY3QodGhpcywgdGhpcyk7XG4gICAgICAgIHN1YmplY3Qub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5W2ldLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uXzEuU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuU3ViamVjdCA9IFN1YmplY3Q7XG4vKipcbiAqIEBjbGFzcyBBbm9ueW1vdXNTdWJqZWN0PFQ+XG4gKi9cbnZhciBBbm9ueW1vdXNTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5vbnltb3VzU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm5leHQpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnRzLkFub255bW91c1N1YmplY3QgPSBBbm9ueW1vdXNTdWJqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL1N1YmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGFuIGFjdGlvbiBpcyBpbnZhbGlkIGJlY2F1c2UgdGhlIG9iamVjdCBoYXMgYmVlblxuICogdW5zdWJzY3JpYmVkLlxuICpcbiAqIEBzZWUge0BsaW5rIFN1YmplY3R9XG4gKiBAc2VlIHtAbGluayBCZWhhdmlvclN1YmplY3R9XG4gKlxuICogQGNsYXNzIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXG4gKi9cbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9iamVjdFVuc3Vic2NyaWJlZEVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCkge1xuICAgICAgICB2YXIgZXJyID0gX3N1cGVyLmNhbGwodGhpcywgJ29iamVjdCB1bnN1YnNjcmliZWQnKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXJyLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgICB0aGlzLnN0YWNrID0gZXJyLnN0YWNrO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0cy5PYmplY3RVbnN1YnNjcmliZWRFcnJvciA9IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi9TdWJzY3JpcHRpb24nKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YmplY3RTdWJzY3JpcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ViamVjdFN1YnNjcmlwdGlvbihzdWJqZWN0LCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICB0aGlzLnN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB2YXIgc3ViamVjdCA9IHRoaXMuc3ViamVjdDtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHN1YmplY3Qub2JzZXJ2ZXJzO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBudWxsO1xuICAgICAgICBpZiAoIW9ic2VydmVycyB8fCBvYnNlcnZlcnMubGVuZ3RoID09PSAwIHx8IHN1YmplY3QuaXNTdG9wcGVkIHx8IHN1YmplY3QuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaXB0aW9uID0gU3ViamVjdFN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3RTdWJzY3JpcHRpb24uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgZGVsYXlfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2RlbGF5Jyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGVsYXkgPSBkZWxheV8xLmRlbGF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVsYXkuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3IvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoJy4uL3NjaGVkdWxlci9hc3luYycpO1xudmFyIGlzRGF0ZV8xID0gcmVxdWlyZSgnLi4vdXRpbC9pc0RhdGUnKTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG52YXIgTm90aWZpY2F0aW9uXzEgPSByZXF1aXJlKCcuLi9Ob3RpZmljYXRpb24nKTtcbi8qKlxuICogRGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhIGdpdmVuIHRpbWVvdXQgb3JcbiAqIHVudGlsIGEgZ2l2ZW4gRGF0ZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGltZSBzaGlmdHMgZWFjaCBpdGVtIGJ5IHNvbWUgc3BlY2lmaWVkIGFtb3VudCBvZlxuICogbWlsbGlzZWNvbmRzLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2RlbGF5LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIE51bWJlciwgdGhpcyBvcGVyYXRvciB0aW1lIHNoaWZ0cyB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoYXQgYW1vdW50IG9mIHRpbWUgZXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcy4gVGhlIHJlbGF0aXZlXG4gKiB0aW1lIGludGVydmFscyBiZXR3ZWVuIHRoZSB2YWx1ZXMgYXJlIHByZXNlcnZlZC5cbiAqXG4gKiBJZiB0aGUgZGVsYXkgYXJndW1lbnQgaXMgYSBEYXRlLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzdGFydCBvZiB0aGVcbiAqIE9ic2VydmFibGUgZXhlY3V0aW9uIHVudGlsIHRoZSBnaXZlbiBkYXRlIG9jY3Vycy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5EZWxheSBlYWNoIGNsaWNrIGJ5IG9uZSBzZWNvbmQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGRlbGF5ZWRDbGlja3MgPSBjbGlja3MuZGVsYXkoMTAwMCk7IC8vIGVhY2ggY2xpY2sgZW1pdHRlZCBhZnRlciAxIHNlY29uZFxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RGVsYXkgYWxsIGNsaWNrcyB1bnRpbCBhIGZ1dHVyZSBkYXRlIGhhcHBlbnM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGRhdGUgPSBuZXcgRGF0ZSgnTWFyY2ggMTUsIDIwNTAgMTI6MDA6MDAnKTsgLy8gaW4gdGhlIGZ1dHVyZVxuICogdmFyIGRlbGF5ZWRDbGlja3MgPSBjbGlja3MuZGVsYXkoZGF0ZSk7IC8vIGNsaWNrIGVtaXR0ZWQgb25seSBhZnRlciB0aGF0IGRhdGVcbiAqIGRlbGF5ZWRDbGlja3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlVGltZX1cbiAqIEBzZWUge0BsaW5rIGRlbGF5V2hlbn1cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxEYXRlfSBkZWxheSBUaGUgZGVsYXkgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChhIGBudW1iZXJgKSBvclxuICogYSBgRGF0ZWAgdW50aWwgd2hpY2ggdGhlIGVtaXNzaW9uIG9mIHRoZSBzb3VyY2UgaXRlbXMgaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUgU2NoZWR1bGVyIHRvIHVzZSBmb3JcbiAqIG1hbmFnaW5nIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGhlIHRpbWUtc2hpZnQgZm9yIGVhY2ggaXRlbS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZiB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoZSBzcGVjaWZpZWQgdGltZW91dCBvciBEYXRlLlxuICogQG1ldGhvZCBkZWxheVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gZGVsYXkoZGVsYXksIHNjaGVkdWxlcikge1xuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgdmFyIGFic29sdXRlRGVsYXkgPSBpc0RhdGVfMS5pc0RhdGUoZGVsYXkpO1xuICAgIHZhciBkZWxheUZvciA9IGFic29sdXRlRGVsYXkgPyAoK2RlbGF5IC0gc2NoZWR1bGVyLm5vdygpKSA6IE1hdGguYWJzKGRlbGF5KTtcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEZWxheU9wZXJhdG9yKGRlbGF5Rm9yLCBzY2hlZHVsZXIpKTtcbn1cbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbnZhciBEZWxheU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWxheU9wZXJhdG9yKGRlbGF5LCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgRGVsYXlPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBEZWxheVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kZWxheSwgdGhpcy5zY2hlZHVsZXIpKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWxheU9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgRGVsYXlTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVsYXlTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlbGF5U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgZGVsYXksIHNjaGVkdWxlcikge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvcmVkID0gZmFsc2U7XG4gICAgfVxuICAgIERlbGF5U3Vic2NyaWJlci5kaXNwYXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgc291cmNlID0gc3RhdGUuc291cmNlO1xuICAgICAgICB2YXIgcXVldWUgPSBzb3VyY2UucXVldWU7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSBzdGF0ZS5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHN0YXRlLmRlc3RpbmF0aW9uO1xuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCAmJiAocXVldWVbMF0udGltZSAtIHNjaGVkdWxlci5ub3coKSkgPD0gMCkge1xuICAgICAgICAgICAgcXVldWUuc2hpZnQoKS5ub3RpZmljYXRpb24ub2JzZXJ2ZShkZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBkZWxheV8xID0gTWF0aC5tYXgoMCwgcXVldWVbMF0udGltZSAtIHNjaGVkdWxlci5ub3coKSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBkZWxheV8xKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVsYXlTdWJzY3JpYmVyLnByb3RvdHlwZS5fc2NoZWR1bGUgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKERlbGF5U3Vic2NyaWJlci5kaXNwYXRjaCwgdGhpcy5kZWxheSwge1xuICAgICAgICAgICAgc291cmNlOiB0aGlzLCBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvbiwgc2NoZWR1bGVyOiBzY2hlZHVsZXJcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgRGVsYXlTdWJzY3JpYmVyLnByb3RvdHlwZS5zY2hlZHVsZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBuZXcgRGVsYXlNZXNzYWdlKHNjaGVkdWxlci5ub3coKSArIHRoaXMuZGVsYXksIG5vdGlmaWNhdGlvbik7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChtZXNzYWdlKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVsYXlTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KHZhbHVlKSk7XG4gICAgfTtcbiAgICBEZWxheVN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5lcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfTtcbiAgICBEZWxheVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25fMS5Ob3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVsYXlTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xudmFyIERlbGF5TWVzc2FnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVsYXlNZXNzYWdlKHRpbWUsIG5vdGlmaWNhdGlvbikge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIERlbGF5TWVzc2FnZTtcbn0oKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWxheS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKCt2YWx1ZSk7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRGF0ZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvaXNEYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL09ic2VydmFibGUnKTtcbi8qKlxuICogUmVwcmVzZW50cyBhIHB1c2gtYmFzZWQgZXZlbnQgb3IgdmFsdWUgdGhhdCBhbiB7QGxpbmsgT2JzZXJ2YWJsZX0gY2FuIGVtaXQuXG4gKiBUaGlzIGNsYXNzIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIG9wZXJhdG9ycyB0aGF0IG1hbmFnZSBub3RpZmljYXRpb25zLFxuICogbGlrZSB7QGxpbmsgbWF0ZXJpYWxpemV9LCB7QGxpbmsgZGVtYXRlcmlhbGl6ZX0sIHtAbGluayBvYnNlcnZlT259LCBhbmRcbiAqIG90aGVycy4gQmVzaWRlcyB3cmFwcGluZyB0aGUgYWN0dWFsIGRlbGl2ZXJlZCB2YWx1ZSwgaXQgYWxzbyBhbm5vdGF0ZXMgaXRcbiAqIHdpdGggbWV0YWRhdGEgb2YsIGZvciBpbnN0YW5jZSwgd2hhdCB0eXBlIG9mIHB1c2ggbWVzc2FnZSBpdCBpcyAoYG5leHRgLFxuICogYGVycm9yYCwgb3IgYGNvbXBsZXRlYCkuXG4gKlxuICogQHNlZSB7QGxpbmsgbWF0ZXJpYWxpemV9XG4gKiBAc2VlIHtAbGluayBkZW1hdGVyaWFsaXplfVxuICogQHNlZSB7QGxpbmsgb2JzZXJ2ZU9ufVxuICpcbiAqIEBjbGFzcyBOb3RpZmljYXRpb248VD5cbiAqL1xudmFyIE5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm90aWZpY2F0aW9uKGtpbmQsIHZhbHVlLCBleGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbjtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGtpbmQgPT09ICdOJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsaXZlcnMgdG8gdGhlIGdpdmVuIGBvYnNlcnZlcmAgdGhlIHZhbHVlIHdyYXBwZWQgYnkgdGhpcyBOb3RpZmljYXRpb24uXG4gICAgICogQHBhcmFtIHtPYnNlcnZlcn0gb2JzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5raW5kKSB7XG4gICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yICYmIG9ic2VydmVyLmVycm9yKHRoaXMuZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSAmJiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBzb21lIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2tzLCBkZWxpdmVyIHRoZSB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGVcbiAgICAgKiBjdXJyZW50IE5vdGlmaWNhdGlvbiB0byB0aGUgY29ycmVjdGx5IGNvcnJlc3BvbmRpbmcgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCk6IHZvaWR9IG5leHQgQW4gT2JzZXJ2ZXIgYG5leHRgIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyOiBhbnkpOiB2b2lkfSBbZXJyb3JdIEFuIE9ic2VydmVyIGBlcnJvcmAgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIEFuIE9ic2VydmVyIGBjb21wbGV0ZWAgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7YW55fVxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBraW5kID0gdGhpcy5raW5kO1xuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0ICYmIG5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IgJiYgZXJyb3IodGhpcy5leGNlcHRpb24pO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRha2VzIGFuIE9ic2VydmVyIG9yIGl0cyBpbmRpdmlkdWFsIGNhbGxiYWNrIGZ1bmN0aW9ucywgYW5kIGNhbGxzIGBvYnNlcnZlYFxuICAgICAqIG9yIGBkb2AgbWV0aG9kcyBhY2NvcmRpbmdseS5cbiAgICAgKiBAcGFyYW0ge09ic2VydmVyfGZ1bmN0aW9uKHZhbHVlOiBUKTogdm9pZH0gbmV4dE9yT2JzZXJ2ZXIgQW4gT2JzZXJ2ZXIgb3JcbiAgICAgKiB0aGUgYG5leHRgIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyOiBhbnkpOiB2b2lkfSBbZXJyb3JdIEFuIE9ic2VydmVyIGBlcnJvcmAgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBbY29tcGxldGVdIEFuIE9ic2VydmVyIGBjb21wbGV0ZWAgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7YW55fVxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyICYmIHR5cGVvZiBuZXh0T3JPYnNlcnZlci5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKG5leHRPck9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBqdXN0IGRlbGl2ZXJzIHRoZSBub3RpZmljYXRpb24gcmVwcmVzZW50ZWRcbiAgICAgKiBieSB0aGlzIE5vdGlmaWNhdGlvbiBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHthbnl9XG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS50b09ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBraW5kID0gdGhpcy5raW5kO1xuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5vZih0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyh0aGlzLmV4Y2VwdGlvbik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCB0byBjcmVhdGUgYSBOb3RpZmljYXRpb24gaW5zdGFuY2Ugb2YgdGhlIHR5cGUgYG5leHRgIGZyb20gYVxuICAgICAqIGdpdmVuIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7VH0gdmFsdWUgVGhlIGBuZXh0YCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248VD59IFRoZSBcIm5leHRcIiBOb3RpZmljYXRpb24gcmVwcmVzZW50aW5nIHRoZVxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignTicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy51bmRlZmluZWRWYWx1ZU5vdGlmaWNhdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgc2hvcnRjdXQgdG8gY3JlYXRlIGEgTm90aWZpY2F0aW9uIGluc3RhbmNlIG9mIHRoZSB0eXBlIGBlcnJvcmAgZnJvbSBhXG4gICAgICogZ2l2ZW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHthbnl9IFtlcnJdIFRoZSBgZXJyb3JgIGV4Y2VwdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248VD59IFRoZSBcImVycm9yXCIgTm90aWZpY2F0aW9uIHJlcHJlc2VudGluZyB0aGVcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCB0byBjcmVhdGUgYSBOb3RpZmljYXRpb24gaW5zdGFuY2Ugb2YgdGhlIHR5cGUgYGNvbXBsZXRlYC5cbiAgICAgKiBAcmV0dXJuIHtOb3RpZmljYXRpb248YW55Pn0gVGhlIHZhbHVlbGVzcyBcImNvbXBsZXRlXCIgTm90aWZpY2F0aW9uLlxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVOb3RpZmljYXRpb247XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24uY29tcGxldGVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdDJyk7XG4gICAgTm90aWZpY2F0aW9uLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbignTicsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbjtcbn0oKSk7XG5leHBvcnRzLk5vdGlmaWNhdGlvbiA9IE5vdGlmaWNhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGlmaWNhdGlvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL05vdGlmaWNhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnR3aW5kb3dzaXplKCkge1xyXG4gIHJldHVybiB7eTogd2luZG93LmlubmVySGVpZ2h0LCB4OiB3aW5kb3cuaW5uZXJXaWR0aH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY2xpZW50c3JjL2pzL2xpYi9jdXJyZW50d2luZG93c2l6ZS5qc1xuICoqLyIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnN1cmVwb3Mobikge1xyXG4gIHJldHVybiBuID49IDAgPyBuIDogLTEgKiBuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvbGliL2Vuc3VyZXBvcy5qc1xuICoqLyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUcmFuc2Zvcm0oZWwsIHRyYW5zZm9ybSkge1xyXG4gIGVsLnN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVxyXG4gIGVsLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcbiAgZWwuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcbiAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoZWwsIHgsIHkpIHtcclxuICByZXR1cm4gYXBwbHlUcmFuc2Zvcm0oZWwsIFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIpXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9saWIvY3NzLmpzXG4gKiovIiwiXHJcbmltcG9ydCByYWYgZnJvbSBcInJhZlwiXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50J1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvaW50ZXJ2YWwnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N0YXJ0V2l0aCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zY2FuJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJ1xyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcGFpcndpc2UnXHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZVRpbWUnXHJcblxyXG5cclxuXHJcbmNvbnN0IHNjcm9sbFRvcCA9IF8gPT4gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuXHJcblxyXG5jb25zdCBzY3JvbGxUb3BzJCA9IE9ic2VydmFibGVcclxuICAuZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpXHJcbiAgLm1hcChfID0+ICh7IHNjcm9sbFRvcDogc2Nyb2xsVG9wKCkgfSkpXHJcbiAgLnNoYXJlKClcclxuXHJcblxyXG5jb25zdCBzY3JvbGxzJCA9IHNjcm9sbFRvcHMkXHJcbiAgLnNjYW4oKGFjYywgc2Nyb2xsKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY2MsIHNjcm9sbClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNjcm9sbFRvcDogc2Nyb2xsLnNjcm9sbFRvcCxcclxuICAgICAgZGlyOiBhY2Muc2Nyb2xsVG9wIDwgc2Nyb2xsLnNjcm9sbFRvcCA/IFwiZG93blwiIDogXCJ1cFwiXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4ge1xyXG5cclxuICBcclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2Uvc2Nyb2xsaW5nLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHNjYW5fMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL3NjYW4nKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5zY2FuID0gc2Nhbl8xLnNjYW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2FuLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29wZXJhdG9yL3NjYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xuLyoqXG4gKiBBcHBsaWVzIGFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIG92ZXIgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBhbmQgcmV0dXJucyBlYWNoXG4gKiBpbnRlcm1lZGlhdGUgcmVzdWx0LCB3aXRoIGFuIG9wdGlvbmFsIHNlZWQgdmFsdWUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgcmVkdWNlfSwgYnV0IGVtaXRzIHRoZSBjdXJyZW50XG4gKiBhY2N1bXVsYXRpb24gd2hlbmV2ZXIgdGhlIHNvdXJjZSBlbWl0cyBhIHZhbHVlLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3NjYW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQ29tYmluZXMgdG9nZXRoZXIgYWxsIHZhbHVlcyBlbWl0dGVkIG9uIHRoZSBzb3VyY2UsIHVzaW5nIGFuIGFjY3VtdWxhdG9yXG4gKiBmdW5jdGlvbiB0aGF0IGtub3dzIGhvdyB0byBqb2luIGEgbmV3IHNvdXJjZSB2YWx1ZSBpbnRvIHRoZSBhY2N1bXVsYXRpb24gZnJvbVxuICogdGhlIHBhc3QuIElzIHNpbWlsYXIgdG8ge0BsaW5rIHJlZHVjZX0sIGJ1dCBlbWl0cyB0aGUgaW50ZXJtZWRpYXRlXG4gKiBhY2N1bXVsYXRpb25zLlxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGFwcGxpZXMgYSBzcGVjaWZpZWQgYGFjY3VtdWxhdG9yYCBmdW5jdGlvbiB0byBlYWNoXG4gKiBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLiBJZiBhIGBzZWVkYCB2YWx1ZSBpcyBzcGVjaWZpZWQsIHRoZW5cbiAqIHRoYXQgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgYWNjdW11bGF0b3IuIElmIG5vIHNlZWRcbiAqIHZhbHVlIGlzIHNwZWNpZmllZCwgdGhlIGZpcnN0IGl0ZW0gb2YgdGhlIHNvdXJjZSBpcyB1c2VkIGFzIHRoZSBzZWVkLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvdW50IHRoZSBudW1iZXIgb2YgY2xpY2sgZXZlbnRzPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBvbmVzID0gY2xpY2tzLm1hcFRvKDEpO1xuICogdmFyIHNlZWQgPSAwO1xuICogdmFyIGNvdW50ID0gb25lcy5zY2FuKChhY2MsIG9uZSkgPT4gYWNjICsgb25lLCBzZWVkKTtcbiAqIGNvdW50LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBleHBhbmR9XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayByZWR1Y2V9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihhY2M6IFIsIHZhbHVlOiBULCBpbmRleDogbnVtYmVyKTogUn0gYWNjdW11bGF0b3JcbiAqIFRoZSBhY2N1bXVsYXRvciBmdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge1R8Un0gW3NlZWRdIFRoZSBpbml0aWFsIGFjY3VtdWxhdGlvbiB2YWx1ZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8Uj59IEFuIG9ic2VydmFibGUgb2YgdGhlIGFjY3VtdWxhdGVkIHZhbHVlcy5cbiAqIEBtZXRob2Qgc2NhblxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gc2NhbihhY2N1bXVsYXRvciwgc2VlZCkge1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IFNjYW5PcGVyYXRvcihhY2N1bXVsYXRvciwgc2VlZCkpO1xufVxuZXhwb3J0cy5zY2FuID0gc2NhbjtcbnZhciBTY2FuT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjYW5PcGVyYXRvcihhY2N1bXVsYXRvciwgc2VlZCkge1xuICAgICAgICB0aGlzLmFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3I7XG4gICAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XG4gICAgfVxuICAgIFNjYW5PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBTY2FuU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmFjY3VtdWxhdG9yLCB0aGlzLnNlZWQpKTtcbiAgICB9O1xuICAgIHJldHVybiBTY2FuT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBTY2FuU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjYW5TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNjYW5TdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBhY2N1bXVsYXRvciwgc2VlZCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcjtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuYWNjdW11bGF0b3JTZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcbiAgICAgICAgdGhpcy5hY2N1bXVsYXRvclNldCA9IHR5cGVvZiBzZWVkICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjYW5TdWJzY3JpYmVyLnByb3RvdHlwZSwgXCJzZWVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjdW11bGF0b3JTZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2VlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY3VtdWxhdG9yU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNlZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJ5TmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjYW5TdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5TmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4Kys7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFjY3VtdWxhdG9yKHRoaXMuc2VlZCwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWVkID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBTY2FuU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYW4uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vcGVyYXRvci9zY2FuLmpzXG4gKiogbW9kdWxlIGlkID0gMTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgZGlzdGluY3RVbnRpbENoYW5nZWRfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZGlzdGluY3RVbnRpbENoYW5nZWQgPSBkaXN0aW5jdFVudGlsQ2hhbmdlZF8xLmRpc3RpbmN0VW50aWxDaGFuZ2VkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlzdGluY3RVbnRpbENoYW5nZWQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xudmFyIHRyeUNhdGNoXzEgPSByZXF1aXJlKCcuLi91dGlsL3RyeUNhdGNoJyk7XG52YXIgZXJyb3JPYmplY3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvZXJyb3JPYmplY3QnKTtcbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYWxsIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHRoYXQgYXJlIGRpc3RpbmN0IGJ5IGNvbXBhcmlzb24gZnJvbSB0aGUgcHJldmlvdXMgaXRlbS5cbiAqIElmIGEgY29tcGFyYXRvciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgdGhlbiBpdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBpdGVtIHRvIHRlc3QgZm9yIHdoZXRoZXIgb3Igbm90IHRoYXQgdmFsdWUgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gKiBJZiBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gaXMgbm90IHByb3ZpZGVkLCBhbiBlcXVhbGl0eSBjaGVjayBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY29tcGFyZV0gb3B0aW9uYWwgY29tcGFyaXNvbiBmdW5jdGlvbiBjYWxsZWQgdG8gdGVzdCBpZiBhbiBpdGVtIGlzIGRpc3RpbmN0IGZyb20gdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB3aXRoIGRpc3RpbmN0IHZhbHVlcy5cbiAqIEBtZXRob2QgZGlzdGluY3RVbnRpbENoYW5nZWRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0VW50aWxDaGFuZ2VkKGNvbXBhcmUsIGtleVNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgRGlzdGluY3RVbnRpbENoYW5nZWRPcGVyYXRvcihjb21wYXJlLCBrZXlTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5kaXN0aW5jdFVudGlsQ2hhbmdlZCA9IGRpc3RpbmN0VW50aWxDaGFuZ2VkO1xudmFyIERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkT3BlcmF0b3IoY29tcGFyZSwga2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICAgICAgdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgIH1cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmNvbXBhcmUsIHRoaXMua2V5U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlzdGluY3RVbnRpbENoYW5nZWRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29tcGFyZSwga2V5U2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmtleVNlbGVjdG9yID0ga2V5U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuaGFzS2V5ID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcGFyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4geCA9PT0geTtcbiAgICB9O1xuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleVNlbGVjdG9yID0gdGhpcy5rZXlTZWxlY3RvcjtcbiAgICAgICAgdmFyIGtleSA9IHZhbHVlO1xuICAgICAgICBpZiAoa2V5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGtleSA9IHRyeUNhdGNoXzEudHJ5Q2F0Y2godGhpcy5rZXlTZWxlY3RvcikodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5oYXNLZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoXzEudHJ5Q2F0Y2godGhpcy5jb21wYXJlKSh0aGlzLmtleSwga2V5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0LmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNLZXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb29sZWFuKHJlc3VsdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXN0aW5jdFVudGlsQ2hhbmdlZC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkLmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9