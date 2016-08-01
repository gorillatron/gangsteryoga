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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$('.subpage').scroll(function (event) {
	  event.stopPropagation();
	  event.preventDefault();
	  return false;
	});
	
	(0, _routing2.default)();
	(0, _parallaxing2.default)();

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
	
	var _concat = __webpack_require__(52);
	
	var _concat2 = _interopRequireDefault(_concat);
	
	var _Observable = __webpack_require__(67);
	
	__webpack_require__(84);
	
	__webpack_require__(87);
	
	__webpack_require__(96);
	
	__webpack_require__(98);
	
	__webpack_require__(100);
	
	__webpack_require__(102);
	
	__webpack_require__(115);
	
	__webpack_require__(117);
	
	var _currentwindowsize = __webpack_require__(121);
	
	var _currentwindowsize2 = _interopRequireDefault(_currentwindowsize);
	
	var _ensurepos = __webpack_require__(122);
	
	var _ensurepos2 = _interopRequireDefault(_ensurepos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	
	  $(document).on('ready', function (event) {});
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(53),
	    baseFlatten = __webpack_require__(54),
	    copyArray = __webpack_require__(66),
	    isArray = __webpack_require__(65);
	
	/**
	 * Creates a new array concatenating `array` with any additional arrays
	 * and/or values.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to concatenate.
	 * @param {...*} [values] The values to concatenate.
	 * @returns {Array} Returns the new concatenated array.
	 * @example
	 *
	 * var array = [1];
	 * var other = _.concat(array, 2, [3], [[4]]);
	 *
	 * console.log(other);
	 * // => [1, 2, 3, [4]]
	 *
	 * console.log(array);
	 * // => [1]
	 */
	function concat() {
	  var length = arguments.length,
	      args = Array(length ? length - 1 : 0),
	      array = arguments[0],
	      index = length;
	
	  while (index--) {
	    args[index - 1] = arguments[index];
	  }
	  return length
	    ? arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1))
	    : [];
	}
	
	module.exports = concat;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(53),
	    isFlattenable = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(56),
	    isArray = __webpack_require__(65);
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value);
	}
	
	module.exports = isFlattenable;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(57);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(58),
	    isObjectLike = __webpack_require__(64);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(59),
	    isFunction = __webpack_require__(61),
	    isLength = __webpack_require__(63);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(60);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(62);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(68);
	var toSubscriber_1 = __webpack_require__(70);
	var symbol_observable_1 = __webpack_require__(81);
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
/* 68 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module), (function() { return this; }())))

/***/ },
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(71);
	var rxSubscriber_1 = __webpack_require__(80);
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(72);
	var Subscription_1 = __webpack_require__(73);
	var Observer_1 = __webpack_require__(79);
	var rxSubscriber_1 = __webpack_require__(80);
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
/* 72 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(74);
	var isObject_1 = __webpack_require__(75);
	var isFunction_1 = __webpack_require__(72);
	var tryCatch_1 = __webpack_require__(76);
	var errorObject_1 = __webpack_require__(77);
	var UnsubscriptionError_1 = __webpack_require__(78);
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
/* 74 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(77);
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
/* 77 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(68);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(82);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _ponyfill = __webpack_require__(83);
	
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var fromEvent_1 = __webpack_require__(85);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(86);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(67);
	var tryCatch_1 = __webpack_require__(76);
	var errorObject_1 = __webpack_require__(77);
	var Subscription_1 = __webpack_require__(73);
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var interval_1 = __webpack_require__(88);
	Observable_1.Observable.interval = interval_1.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IntervalObservable_1 = __webpack_require__(89);
	exports.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(90);
	var Observable_1 = __webpack_require__(67);
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(74);
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
	var FutureAction_1 = __webpack_require__(93);
	var QueueScheduler_1 = __webpack_require__(94);
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
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(68);
	var Subscription_1 = __webpack_require__(73);
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(95);
	var FutureAction_1 = __webpack_require__(93);
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(93);
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var map_1 = __webpack_require__(97);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(71);
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var pairwise_1 = __webpack_require__(99);
	Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(71);
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var throttleTime_1 = __webpack_require__(101);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(71);
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var startWith_1 = __webpack_require__(103);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(104);
	var ScalarObservable_1 = __webpack_require__(105);
	var EmptyObservable_1 = __webpack_require__(106);
	var concat_1 = __webpack_require__(108);
	var isScheduler_1 = __webpack_require__(107);
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(67);
	var ScalarObservable_1 = __webpack_require__(105);
	var EmptyObservable_1 = __webpack_require__(106);
	var isScheduler_1 = __webpack_require__(107);
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(67);
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(67);
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
/* 107 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(107);
	var ArrayObservable_1 = __webpack_require__(104);
	var mergeAll_1 = __webpack_require__(109);
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(110);
	var subscribeToResult_1 = __webpack_require__(111);
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(71);
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(68);
	var isArray_1 = __webpack_require__(74);
	var isPromise_1 = __webpack_require__(112);
	var Observable_1 = __webpack_require__(67);
	var iterator_1 = __webpack_require__(113);
	var InnerSubscriber_1 = __webpack_require__(114);
	var symbol_observable_1 = __webpack_require__(81);
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
/* 112 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(68);
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(71);
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var withLatestFrom_1 = __webpack_require__(116);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(110);
	var subscribeToResult_1 = __webpack_require__(111);
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
	var delay_1 = __webpack_require__(118);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(91);
	var isDate_1 = __webpack_require__(119);
	var Subscriber_1 = __webpack_require__(71);
	var Notification_1 = __webpack_require__(120);
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
/* 119 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(67);
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
/* 121 */
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
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ensurepos;
	function ensurepos(n) {
	  return n >= 0 ? n : -1 * n;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzY5MWIzNzFkYjZiYTI3M2FjOGQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvZnJvbnQtcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnRzcmMvanMvZW50cmllcy9mcm9udC1wYWdlL3JvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcGFnZS9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9saWIvcXJhZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2UvcGFyYWxsYXhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uY2F0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvcm9vdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC90cnlDYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9lcnJvck9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc3ltYm9sL3J4U3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvZnJvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL0Zyb21FdmVudE9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vYnNlcnZhYmxlL0ludGVydmFsT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc051bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvRnV0dXJlQWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9zY2hlZHVsZXIvUXVldWVTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3NjaGVkdWxlci9RdWV1ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvYWRkL29wZXJhdG9yL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvbWFwLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvcGFpcndpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3BhaXJ3aXNlLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci90aHJvdHRsZVRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9zdGFydFdpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3N0YXJ0V2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29ic2VydmFibGUvU2NhbGFyT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvb3BlcmF0b3IvbWVyZ2VBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvdXRpbC9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvSW5uZXJTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tLmpzIiwid2VicGFjazovLy8uL34vcnhqcy9hZGQvb3BlcmF0b3IvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL2RlbGF5LmpzIiwid2VicGFjazovLy8uL34vcnhqcy91dGlsL2lzRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3J4anMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudHNyYy9qcy9saWIvY3VycmVudHdpbmRvd3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2xpYi9lbnN1cmVwb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTs7OztBQUNBOzs7Ozs7QUFFQSxHQUFFLFVBQUYsRUFBYyxNQUFkLENBQXFCLFVBQUMsS0FBRCxFQUFXO0FBQzlCLFNBQU0sZUFBTixHQUQ4QjtBQUU5QixTQUFNLGNBQU4sR0FGOEI7QUFHOUIsVUFBTyxLQUFQLENBSDhCO0VBQVgsQ0FBckI7O0FBTUE7QUFDQSw4Qjs7Ozs7Ozs7Ozs7O0FDVkE7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QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDN21CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDMUZ0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsbUJBQW1CO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsa0JBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBLG9DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLE1BQU07QUFDbEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxNQUFNO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksTUFBTTtBQUNsQixhQUFZLE1BQU07QUFDbEIsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksTUFBTTtBQUNsQixhQUFZLE9BQU87QUFDbkIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksTUFBTTtBQUNsQixhQUFZLE1BQU07QUFDbEIsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsNkRBQTZEO0FBQzNFO0FBQ0EsYUFBWSxzQkFBc0I7QUFDbEMsYUFBWSxNQUFNO0FBQ2xCLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3JZQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0NBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkQ7Ozs7OztBQUVBLEtBQU0sU0FBUyxTQUFULE1BQVMsQ0FBQyxHQUFELEVBQVM7QUFDdEIsT0FBTSxPQUFPLElBQUksQ0FBSixDQUFQLENBRGdCO0FBRXRCLE9BQU0sT0FBTyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQVAsQ0FGZ0I7QUFHdEIsVUFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQVAsQ0FIc0I7RUFBVDs7QUFNZixLQUFNLE1BQU0sU0FBTixHQUFNLE9BQWtCOzs7T0FBaEIsZ0JBQWdCO09BQVYsZ0JBQVU7O0FBQzVCLE9BQUcsSUFBSCxFQUFTO0FBQ1Asd0JBQUksSUFBSixFQURPO0FBRVAsWUFBTyxJQUFJLE9BQU8sSUFBUCxDQUFKLENBQVAsQ0FGTztJQUFUO0VBRFU7O21CQU9HLFVBQUMsR0FBRCxFQUFTO0FBQ3RCLFVBQU8sSUFBSSxPQUFPLEdBQVAsQ0FBSixDQUFQLENBRHNCO0VBQVQsQzs7Ozs7O0FDaEJmOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBd0QsK0JBQStCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEc7Ozs7OztBQ2xERCxtQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBO0FBQ0EsMEM7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxpRTs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLGVBQWM7QUFDZCxrQkFBaUI7QUFDakI7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCOzs7Ozs7QUNqQ0EsNkJBQTRCLGU7Ozs7OztBQ0E1QjtBQUNBLFdBQVU7QUFDVixHOzs7Ozs7QUNGQSxxQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkEsa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTRCLGFBQWE7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0Msb0NBQW9DO0FBQzVFLDZDQUE0QyxvQ0FBb0M7QUFDaEYsTUFBSywyQkFBMkIsb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBLG9DQUFtQywyQkFBMkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDakVBLHVCOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRTtBQUNuRSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxnRUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZUFBYztBQUNkLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZiwwQjs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QyxnQzs7Ozs7O0FDSHZDLDhCQUE2QjtBQUM3QixzQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQSwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0Esa0NBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxFQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkEsd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEZBQWtGLGFBQWEsRUFBRTs7QUFFakc7QUFDQSx3REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0EsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQWtFLCtCQUErQjtBQUNqRyxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25EO0FBQ0Esd0NBQXVDO0FBQ3ZDLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLGVBQWM7QUFDZDtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVU7QUFDVixFQUFDLEU7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLGtCQUFrQixFQUFFOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNmQSxtQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBO0FBQ0EsMEM7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBR2UsWUFBTTs7QUFFbkIsS0FBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQyxLQUFELEVBQVcsRUFBWCxDQUF4QixDQUZtQjtFQUFOLEM7Ozs7OztBQ2ZmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxLQUFLO0FBQ2hCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsT0FBTztBQUNsQixZQUFXLFFBQVE7QUFDbkIsWUFBVyxRQUFRO0FBQ25CLFlBQVcsTUFBTTtBQUNqQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLEVBQUU7QUFDZjtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCLGlCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSx5QkFBeUI7QUFDeEM7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0EsZ0JBQWUsU0FBUztBQUN4QixpQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsU0FBUztBQUN4QixnQkFBZSxtQkFBbUI7QUFDbEMsaUJBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCLGlCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixlQUFlO0FBQ2xDLEtBQUksbUJBQW1CLG1CQUFtQixlQUFlO0FBQ3pELGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsa0NBQWtDO0FBQ2pEO0FBQ0EsZ0JBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXVFLGFBQWE7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsc0JBQXNCO0FBQ3JDLGdCQUFlLHdCQUF3QjtBQUN2QztBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBLGlCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLGdCQUFlLEVBQUU7QUFDakIsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxlQUFlO0FBQzNCLDBDQUF5QyxZQUFZO0FBQ3JEO0FBQ0EsZ0JBQWUsSUFBSTtBQUNuQixpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QsdUM7Ozs7OztBQ3hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFrQztBQUNqRDtBQUNBLGdCQUFlLHlCQUF5QjtBQUN4QyxnQkFBZSxpQkFBaUI7QUFDaEMsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxFQUFFO0FBQ2pCLGlCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLElBQUk7QUFDbkIsaUJBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx5Qzs7Ozs7Ozs7Ozs7bUJDNUh3QjtBQUFULFVBQVMsaUJBQVQsR0FBNkI7QUFDMUMsVUFBTyxFQUFDLEdBQUcsT0FBTyxXQUFQLEVBQW9CLEdBQUcsT0FBTyxVQUFQLEVBQWxDLENBRDBDOzs7Ozs7Ozs7Ozs7bUJDQXBCO0FBQVQsVUFBUyxTQUFULENBQW1CLENBQW5CLEVBQXNCO0FBQ25DLFVBQU8sS0FBSyxDQUFMLEdBQVMsQ0FBVCxHQUFhLENBQUMsQ0FBRCxHQUFLLENBQUwsQ0FEZSIsImZpbGUiOiJmcm9udC1wYWdlLjAuMC4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzY5MWIzNzFkYjZiYTI3M2FjOGRcbiAqKi8iLCJcclxuaW1wb3J0IHJvdXRpbmcgZnJvbSAnLi9yb3V0aW5nJ1xyXG5pbXBvcnQgcGFyYWxsYXhpbmcgZnJvbSAnLi9wYXJhbGxheGluZydcclxuXHJcbiQoJy5zdWJwYWdlJykuc2Nyb2xsKChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIHJldHVybiBmYWxzZVxyXG59KVxyXG5cclxucm91dGluZygpXHJcbnBhcmFsbGF4aW5nKClcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2UvaW5kZXguanNcbiAqKi8iLCJcclxuaW1wb3J0IHBhZ2UgZnJvbSAncGFnZSdcclxuaW1wb3J0IHJhZiBmcm9tICdyYWYnXHJcbmltcG9ydCBxcmFmIGZyb20gJy4uLy4uL2xpYi9xcmFmJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHJcbiAgcGFnZSgnLycsIGNsb3NlT3BlblBhZ2UpXHJcbiAgcGFnZSgnLzpwYWdlJywgY2xvc2VPcGVuUGFnZSwgc2hvd1BhZ2UpXHJcbiAgcGFnZSgnLzpwYWdlLyonLCBzaG93UGFnZSlcclxuICBwYWdlKCcvaW5zdHJ1a3RvZXJlci8nLCBjbG9zZU9wZW5JbnN0cnVjdG9yKVxyXG4gIHBhZ2UoJy9pbnN0cnVrdG9lcmVyLzppbnN0cnVjdG9yJywgY2xvc2VPcGVuSW5zdHJ1Y3Rvciwgc2hvd0luc3RydWN0b3IpXHJcblxyXG4gIGFuaW1hdGVQYWdlSW4oKVxyXG5cclxuICBsaXN0ZW5Gb3JFc2NhcGVCdXR0b24oXyA9PiBoaXN0b3J5LmJhY2soKSlcclxuXHJcbiAgcGFnZSgpXHJcbiAgXHJcbn1cclxuXHJcblxyXG5sZXQgJG9wZW5QYWdlID0gbnVsbFxyXG5sZXQgJG9wZW5JbnN0cnVjdG9yRGV0YWlscyA9IG51bGxcclxuXHJcblxyXG5jb25zdCBzaG93UGFnZSA9IChjdHgsIG5leHQpID0+IHtcclxuICBjb25zdCB7cGFnZX0gPSBjdHgucGFyYW1zXHJcbiAgY29uc3QgJHBhZ2UgPSAkKGAuc3VicGFnZS4ke3BhZ2V9YClcclxuXHJcbiAgaWYoJHBhZ2UubGVuZ3RoICYmICEkcGFnZS5pcygkb3BlblBhZ2UpKSB7XHJcbiAgICAkb3BlblBhZ2UgPSAkcGFnZVxyXG4gICAgcmFmKF8gPT4gYW5pbWF0ZVN1YnBhZ2VJbigkb3BlblBhZ2UsIG5leHQpKVxyXG4gIH1cclxuICBlbHNlIGlmKCRwYWdlLmxlbmd0aCkge1xyXG4gICAgbmV4dCgpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKFwidW5oYW5kbGVkIDQwNFwiLCBwYWdlKVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbmNvbnN0IGNsb3NlT3BlblBhZ2UgPSAoY3R4LCBuZXh0KSA9PiB7XHJcbiAgaWYoJG9wZW5QYWdlICYmICEkb3BlblBhZ2UuaGFzQ2xhc3MoY3R4LnBhcmFtcy5wYWdlKSkge1xyXG4gICAgYW5pbWF0ZVN1YnBhZ2VPdXQoJG9wZW5QYWdlLCBfID0+IHtcclxuICAgICAgJG9wZW5QYWdlID0gbnVsbFxyXG4gICAgICBuZXh0KClcclxuICAgIH0pXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbmV4dCgpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVBhZ2VJbiA9IChjYiA9IGYgPT4gZikgPT4ge1xyXG4gIHNldFRpbWVvdXQoXyA9PiB7XHJcbiAgICAkKFwiI2Zyb250LXBhZ2VcIikuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgIGNiKClcclxuICB9LCA2NilcclxufVxyXG5cclxuXHJcbmNvbnN0IGFuaW1hdGVTdWJwYWdlSW4gPSAoJHBhZ2UsIGNiKSA9PiB7XHJcbiAgcXJhZihbXHJcbiAgICBfID0+IFxyXG4gICAgICAkcGFnZS5jc3Moe1xyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgb3BhY2l0eTogMC4wMDAwMVxyXG4gICAgICB9KSxcclxuICAgIF8gPT4gXHJcbiAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSwgMTM3LCBjYilcclxuICBdKVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVN1YnBhZ2VPdXQgPSAoJHBhZ2UsIGNiID0gZiA9PiBmKSA9PiB7XHJcbiAgcmFmKF8gPT4ge1xyXG4gICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIDEzNywgXyA9PiB7XHJcbiAgICAgICRwYWdlLmhpZGUoKVxyXG4gICAgICBjYigpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG93SW5zdHJ1Y3RvciA9IChjdHgpID0+IHtcclxuICBjb25zdCAkaW5zdHJ1Y3Rvckxpc3QgPSAkKCcuaW5zdHJ1Y3Rvci1saXN0JylcclxuICBjb25zdCAkaW5zdHJ1Y3RvckRldGFpbHMgPSAkKGAuaW5zdHJ1Y3Rvci1kZXRhaWxbZGF0YS1pbnN0cnVjdG9yLWtleT0ke2N0eC5wYXJhbXMuaW5zdHJ1Y3Rvcn1dYClcclxuICBcclxuICAkb3Blbkluc3RydWN0b3JEZXRhaWxzID0gJGluc3RydWN0b3JEZXRhaWxzXHJcbiAgXHJcbiAgcXJhZihbXHJcbiAgICBfID0+ICRpbnN0cnVjdG9yTGlzdC5mYWRlT3V0KDEzNyksXHJcbiAgICBfID0+ICRvcGVuUGFnZS5zY3JvbGxUb3AoMCksXHJcbiAgICBfID0+ICRpbnN0cnVjdG9yRGV0YWlsc1xyXG4gICAgICAgICAgIC5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJylcclxuICAgICAgICAgICAuY3NzKCdvcGFjaXR5JywgMC4wMDAxKVxyXG4gICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAxMzcpXHJcbiAgXSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGNsb3NlT3Blbkluc3RydWN0b3IgPSAoY3R4LCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgJGluc3RydWN0b3JMaXN0ID0gJCgnLmluc3RydWN0b3ItbGlzdCcpXHJcbiAgcXJhZihbXHJcbiAgICBfID0+ICRpbnN0cnVjdG9yTGlzdC5mYWRlSW4oMTM3KSxcclxuICAgICRvcGVuSW5zdHJ1Y3RvckRldGFpbHMgP1xyXG4gICAgICAgXyA9PlxyXG4gICAgICAgICRvcGVuSW5zdHJ1Y3RvckRldGFpbHNcclxuICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMC4wMDAxIH0sIDEzNywgKCkgPT4ge1xyXG4gICAgICAgICAgICAkb3Blbkluc3RydWN0b3JEZXRhaWxzLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKVxyXG4gICAgICAgICAgICAkb3Blbkluc3RydWN0b3JEZXRhaWxzID0gbnVsbFxyXG4gICAgICAgICAgICBuZXh0KClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIDpcclxuICAgICAgbmV4dFxyXG4gIF0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBsaXN0ZW5Gb3JFc2NhcGVCdXR0b24gPSAoY2IpID0+IHtcclxuICAkKCdib2R5Jykua2V5dXAoZXZlbnQgPT4ge1xyXG4gICAgKGV2ZW50LmtleUNvZGUgPT0gMjcgJiYgJG9wZW5QYWdlKSAmJlxyXG4gICAgICBjYigpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2Uvcm91dGluZy5qc1xuICoqLyIsIiAgLyogZ2xvYmFscyByZXF1aXJlLCBtb2R1bGUgKi9cblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAqL1xuXG4gIHZhciBwYXRodG9SZWdleHAgPSByZXF1aXJlKCdwYXRoLXRvLXJlZ2V4cCcpO1xuXG4gIC8qKlxuICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICovXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBwYWdlO1xuXG4gIC8qKlxuICAgKiBEZXRlY3QgY2xpY2sgZXZlbnRcbiAgICovXG4gIHZhciBjbGlja0V2ZW50ID0gKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgZG9jdW1lbnQpICYmIGRvY3VtZW50Lm9udG91Y2hzdGFydCA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG5cbiAgLyoqXG4gICAqIFRvIHdvcmsgcHJvcGVybHkgd2l0aCB0aGUgVVJMXG4gICAqIGhpc3RvcnkubG9jYXRpb24gZ2VuZXJhdGVkIHBvbHlmaWxsIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZvdGUvSFRNTDUtSGlzdG9yeS1BUElcbiAgICovXG5cbiAgdmFyIGxvY2F0aW9uID0gKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygd2luZG93KSAmJiAod2luZG93Lmhpc3RvcnkubG9jYXRpb24gfHwgd2luZG93LmxvY2F0aW9uKTtcblxuICAvKipcbiAgICogUGVyZm9ybSBpbml0aWFsIGRpc3BhdGNoLlxuICAgKi9cblxuICB2YXIgZGlzcGF0Y2ggPSB0cnVlO1xuXG5cbiAgLyoqXG4gICAqIERlY29kZSBVUkwgY29tcG9uZW50cyAocXVlcnkgc3RyaW5nLCBwYXRobmFtZSwgaGFzaCkuXG4gICAqIEFjY29tbW9kYXRlcyBib3RoIHJlZ3VsYXIgcGVyY2VudCBlbmNvZGluZyBhbmQgeC13d3ctZm9ybS11cmxlbmNvZGVkIGZvcm1hdC5cbiAgICovXG4gIHZhciBkZWNvZGVVUkxDb21wb25lbnRzID0gdHJ1ZTtcblxuICAvKipcbiAgICogQmFzZSBwYXRoLlxuICAgKi9cblxuICB2YXIgYmFzZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBSdW5uaW5nIGZsYWcuXG4gICAqL1xuXG4gIHZhciBydW5uaW5nO1xuXG4gIC8qKlxuICAgKiBIYXNoQmFuZyBvcHRpb25cbiAgICovXG5cbiAgdmFyIGhhc2hiYW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFByZXZpb3VzIGNvbnRleHQsIGZvciBjYXB0dXJpbmdcbiAgICogcGFnZSBleGl0IGV2ZW50cy5cbiAgICovXG5cbiAgdmFyIHByZXZDb250ZXh0O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBgcGF0aGAgd2l0aCBjYWxsYmFjayBgZm4oKWAsXG4gICAqIG9yIHJvdXRlIGBwYXRoYCwgb3IgcmVkaXJlY3Rpb24sXG4gICAqIG9yIGBwYWdlLnN0YXJ0KClgLlxuICAgKlxuICAgKiAgIHBhZ2UoZm4pO1xuICAgKiAgIHBhZ2UoJyonLCBmbik7XG4gICAqICAgcGFnZSgnL3VzZXIvOmlkJywgbG9hZCwgdXNlcik7XG4gICAqICAgcGFnZSgnL3VzZXIvJyArIHVzZXIuaWQsIHsgc29tZTogJ3RoaW5nJyB9KTtcbiAgICogICBwYWdlKCcvdXNlci8nICsgdXNlci5pZCk7XG4gICAqICAgcGFnZSgnL2Zyb20nLCAnL3RvJylcbiAgICogICBwYWdlKCk7XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfCFGdW5jdGlvbnwhT2JqZWN0fSBwYXRoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb249fSBmblxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBwYWdlKHBhdGgsIGZuKSB7XG4gICAgLy8gPGNhbGxiYWNrPlxuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgcGF0aCkge1xuICAgICAgcmV0dXJuIHBhZ2UoJyonLCBwYXRoKTtcbiAgICB9XG5cbiAgICAvLyByb3V0ZSA8cGF0aD4gdG8gPGNhbGxiYWNrIC4uLj5cbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZuKSB7XG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSk7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBwYWdlLmNhbGxiYWNrcy5wdXNoKHJvdXRlLm1pZGRsZXdhcmUoYXJndW1lbnRzW2ldKSk7XG4gICAgICB9XG4gICAgICAvLyBzaG93IDxwYXRoPiB3aXRoIFtzdGF0ZV1cbiAgICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcGF0aCkge1xuICAgICAgcGFnZVsnc3RyaW5nJyA9PT0gdHlwZW9mIGZuID8gJ3JlZGlyZWN0JyA6ICdzaG93J10ocGF0aCwgZm4pO1xuICAgICAgLy8gc3RhcnQgW29wdGlvbnNdXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2Uuc3RhcnQocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9ucy5cbiAgICovXG5cbiAgcGFnZS5jYWxsYmFja3MgPSBbXTtcbiAgcGFnZS5leGl0cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IHBhdGggYmVpbmcgcHJvY2Vzc2VkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwYWdlLmN1cnJlbnQgPSAnJztcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHBhZ2VzIG5hdmlnYXRlZCB0by5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICpcbiAgICogICAgIHBhZ2UubGVuID09IDA7XG4gICAqICAgICBwYWdlKCcvbG9naW4nKTtcbiAgICogICAgIHBhZ2UubGVuID09IDE7XG4gICAqL1xuXG4gIHBhZ2UubGVuID0gMDtcblxuICAvKipcbiAgICogR2V0IG9yIHNldCBiYXNlcGF0aCB0byBgcGF0aGAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2UuYmFzZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoMCA9PT0gYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGJhc2U7XG4gICAgYmFzZSA9IHBhdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgd2l0aCB0aGUgZ2l2ZW4gYG9wdGlvbnNgLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgICAtIGBjbGlja2AgYmluZCB0byBjbGljayBldmVudHMgW3RydWVdXG4gICAqICAgIC0gYHBvcHN0YXRlYCBiaW5kIHRvIHBvcHN0YXRlIFt0cnVlXVxuICAgKiAgICAtIGBkaXNwYXRjaGAgcGVyZm9ybSBpbml0aWFsIGRpc3BhdGNoIFt0cnVlXVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLnN0YXJ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmIChydW5uaW5nKSByZXR1cm47XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgaWYgKGZhbHNlID09PSBvcHRpb25zLmRpc3BhdGNoKSBkaXNwYXRjaCA9IGZhbHNlO1xuICAgIGlmIChmYWxzZSA9PT0gb3B0aW9ucy5kZWNvZGVVUkxDb21wb25lbnRzKSBkZWNvZGVVUkxDb21wb25lbnRzID0gZmFsc2U7XG4gICAgaWYgKGZhbHNlICE9PSBvcHRpb25zLnBvcHN0YXRlKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvbnBvcHN0YXRlLCBmYWxzZSk7XG4gICAgaWYgKGZhbHNlICE9PSBvcHRpb25zLmNsaWNrKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIG9uY2xpY2ssIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHRydWUgPT09IG9wdGlvbnMuaGFzaGJhbmcpIGhhc2hiYW5nID0gdHJ1ZTtcbiAgICBpZiAoIWRpc3BhdGNoKSByZXR1cm47XG4gICAgdmFyIHVybCA9IChoYXNoYmFuZyAmJiB+bG9jYXRpb24uaGFzaC5pbmRleE9mKCcjIScpKSA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDIpICsgbG9jYXRpb24uc2VhcmNoIDogbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoO1xuICAgIHBhZ2UucmVwbGFjZSh1cmwsIG51bGwsIHRydWUsIGRpc3BhdGNoKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGNsaWNrIGFuZCBwb3BzdGF0ZSBldmVudCBoYW5kbGVycy5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFydW5uaW5nKSByZXR1cm47XG4gICAgcGFnZS5jdXJyZW50ID0gJyc7XG4gICAgcGFnZS5sZW4gPSAwO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIG9uY2xpY2ssIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvbnBvcHN0YXRlLCBmYWxzZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYHBhdGhgIHdpdGggb3B0aW9uYWwgYHN0YXRlYCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gc3RhdGVcbiAgICogQHBhcmFtIHtib29sZWFuPX0gZGlzcGF0Y2hcbiAgICogQHBhcmFtIHtib29sZWFuPX0gcHVzaFxuICAgKiBAcmV0dXJuIHshQ29udGV4dH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5zaG93ID0gZnVuY3Rpb24ocGF0aCwgc3RhdGUsIGRpc3BhdGNoLCBwdXNoKSB7XG4gICAgdmFyIGN0eCA9IG5ldyBDb250ZXh0KHBhdGgsIHN0YXRlKTtcbiAgICBwYWdlLmN1cnJlbnQgPSBjdHgucGF0aDtcbiAgICBpZiAoZmFsc2UgIT09IGRpc3BhdGNoKSBwYWdlLmRpc3BhdGNoKGN0eCk7XG4gICAgaWYgKGZhbHNlICE9PSBjdHguaGFuZGxlZCAmJiBmYWxzZSAhPT0gcHVzaCkgY3R4LnB1c2hTdGF0ZSgpO1xuICAgIHJldHVybiBjdHg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdvZXMgYmFjayBpbiB0aGUgaGlzdG9yeVxuICAgKiBCYWNrIHNob3VsZCBhbHdheXMgbGV0IHRoZSBjdXJyZW50IHJvdXRlIHB1c2ggc3RhdGUgYW5kIHRoZW4gZ28gYmFjay5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBmYWxsYmFjayBwYXRoIHRvIGdvIGJhY2sgaWYgbm8gbW9yZSBoaXN0b3J5IGV4aXN0cywgaWYgdW5kZWZpbmVkIGRlZmF1bHRzIHRvIHBhZ2UuYmFzZVxuICAgKiBAcGFyYW0ge09iamVjdD19IHN0YXRlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2UuYmFjayA9IGZ1bmN0aW9uKHBhdGgsIHN0YXRlKSB7XG4gICAgaWYgKHBhZ2UubGVuID4gMCkge1xuICAgICAgLy8gdGhpcyBtYXkgbmVlZCBtb3JlIHRlc3RpbmcgdG8gc2VlIGlmIGFsbCBicm93c2Vyc1xuICAgICAgLy8gd2FpdCBmb3IgdGhlIG5leHQgdGljayB0byBnbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgcGFnZS5sZW4tLTtcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2Uuc2hvdyhwYXRoLCBzdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2Uuc2hvdyhiYXNlLCBzdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuICAvKipcbiAgICogUmVnaXN0ZXIgcm91dGUgdG8gcmVkaXJlY3QgZnJvbSBvbmUgcGF0aCB0byBvdGhlclxuICAgKiBvciBqdXN0IHJlZGlyZWN0IHRvIGFub3RoZXIgcm91dGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZyb20gLSBpZiBwYXJhbSAndG8nIGlzIHVuZGVmaW5lZCByZWRpcmVjdHMgdG8gJ2Zyb20nXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gdG9cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBhZ2UucmVkaXJlY3QgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICAgIC8vIERlZmluZSByb3V0ZSBmcm9tIGEgcGF0aCB0byBhbm90aGVyXG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZnJvbSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHRvKSB7XG4gICAgICBwYWdlKGZyb20sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwYWdlLnJlcGxhY2UoLyoqIEB0eXBlIHshc3RyaW5nfSAqLyAodG8pKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciB0aGUgcHVzaCBzdGF0ZSBhbmQgcmVwbGFjZSBpdCB3aXRoIGFub3RoZXJcbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBmcm9tICYmICd1bmRlZmluZWQnID09PSB0eXBlb2YgdG8pIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2UucmVwbGFjZShmcm9tKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZSBgcGF0aGAgd2l0aCBvcHRpb25hbCBgc3RhdGVgIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBzdGF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBpbml0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRpc3BhdGNoXG4gICAqIEByZXR1cm4geyFDb250ZXh0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuXG4gIHBhZ2UucmVwbGFjZSA9IGZ1bmN0aW9uKHBhdGgsIHN0YXRlLCBpbml0LCBkaXNwYXRjaCkge1xuICAgIHZhciBjdHggPSBuZXcgQ29udGV4dChwYXRoLCBzdGF0ZSk7XG4gICAgcGFnZS5jdXJyZW50ID0gY3R4LnBhdGg7XG4gICAgY3R4LmluaXQgPSBpbml0O1xuICAgIGN0eC5zYXZlKCk7IC8vIHNhdmUgYmVmb3JlIGRpc3BhdGNoaW5nLCB3aGljaCBtYXkgcmVkaXJlY3RcbiAgICBpZiAoZmFsc2UgIT09IGRpc3BhdGNoKSBwYWdlLmRpc3BhdGNoKGN0eCk7XG4gICAgcmV0dXJuIGN0eDtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGdpdmVuIGBjdHhgLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbnRleHR9IGN0eFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHBhZ2UuZGlzcGF0Y2ggPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgcHJldiA9IHByZXZDb250ZXh0LFxuICAgICAgaSA9IDAsXG4gICAgICBqID0gMDtcblxuICAgIHByZXZDb250ZXh0ID0gY3R4O1xuXG4gICAgZnVuY3Rpb24gbmV4dEV4aXQoKSB7XG4gICAgICB2YXIgZm4gPSBwYWdlLmV4aXRzW2orK107XG4gICAgICBpZiAoIWZuKSByZXR1cm4gbmV4dEVudGVyKCk7XG4gICAgICBmbihwcmV2LCBuZXh0RXhpdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dEVudGVyKCkge1xuICAgICAgdmFyIGZuID0gcGFnZS5jYWxsYmFja3NbaSsrXTtcblxuICAgICAgaWYgKGN0eC5wYXRoICE9PSBwYWdlLmN1cnJlbnQpIHtcbiAgICAgICAgY3R4LmhhbmRsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFmbikgcmV0dXJuIHVuaGFuZGxlZChjdHgpO1xuICAgICAgZm4oY3R4LCBuZXh0RW50ZXIpO1xuICAgIH1cblxuICAgIGlmIChwcmV2KSB7XG4gICAgICBuZXh0RXhpdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0RW50ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuaGFuZGxlZCBgY3R4YC4gV2hlbiBpdCdzIG5vdCB0aGUgaW5pdGlhbFxuICAgKiBwb3BzdGF0ZSB0aGVuIHJlZGlyZWN0LiBJZiB5b3Ugd2lzaCB0byBoYW5kbGVcbiAgICogNDA0cyBvbiB5b3VyIG93biB1c2UgYHBhZ2UoJyonLCBjYWxsYmFjaylgLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbnRleHR9IGN0eFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHVuaGFuZGxlZChjdHgpIHtcbiAgICBpZiAoY3R4LmhhbmRsZWQpIHJldHVybjtcbiAgICB2YXIgY3VycmVudDtcblxuICAgIGlmIChoYXNoYmFuZykge1xuICAgICAgY3VycmVudCA9IGJhc2UgKyBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnQgPT09IGN0eC5jYW5vbmljYWxQYXRoKSByZXR1cm47XG4gICAgcGFnZS5zdG9wKCk7XG4gICAgY3R4LmhhbmRsZWQgPSBmYWxzZTtcbiAgICBsb2NhdGlvbi5ocmVmID0gY3R4LmNhbm9uaWNhbFBhdGg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXhpdCByb3V0ZSBvbiBgcGF0aGAgd2l0aFxuICAgKiBjYWxsYmFjayBgZm4oKWAsIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG4gICAqIG9uIHRoZSBwcmV2aW91cyBjb250ZXh0IHdoZW4gYSBuZXdcbiAgICogcGFnZSBpcyB2aXNpdGVkLlxuICAgKi9cbiAgcGFnZS5leGl0ID0gZnVuY3Rpb24ocGF0aCwgZm4pIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwYWdlLmV4aXQoJyonLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUocGF0aCk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHBhZ2UuZXhpdHMucHVzaChyb3V0ZS5taWRkbGV3YXJlKGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIFVSTCBlbmNvZGluZyBmcm9tIHRoZSBnaXZlbiBgc3RyYC5cbiAgICogQWNjb21tb2RhdGVzIHdoaXRlc3BhY2UgaW4gYm90aCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICogYW5kIHJlZ3VsYXIgcGVyY2VudC1lbmNvZGVkIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgLSBVUkwgY29tcG9uZW50IHRvIGRlY29kZVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjb2RlVVJMRW5jb2RlZFVSSUNvbXBvbmVudCh2YWwpIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHsgcmV0dXJuIHZhbDsgfVxuICAgIHJldHVybiBkZWNvZGVVUkxDb21wb25lbnRzID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbC5yZXBsYWNlKC9cXCsvZywgJyAnKSkgOiB2YWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBcInJlcXVlc3RcIiBgQ29udGV4dGBcbiAgICogd2l0aCB0aGUgZ2l2ZW4gYHBhdGhgIGFuZCBvcHRpb25hbCBpbml0aWFsIGBzdGF0ZWAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdD19IHN0YXRlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIENvbnRleHQocGF0aCwgc3RhdGUpIHtcbiAgICBpZiAoJy8nID09PSBwYXRoWzBdICYmIDAgIT09IHBhdGguaW5kZXhPZihiYXNlKSkgcGF0aCA9IGJhc2UgKyAoaGFzaGJhbmcgPyAnIyEnIDogJycpICsgcGF0aDtcbiAgICB2YXIgaSA9IHBhdGguaW5kZXhPZignPycpO1xuXG4gICAgdGhpcy5jYW5vbmljYWxQYXRoID0gcGF0aDtcbiAgICB0aGlzLnBhdGggPSBwYXRoLnJlcGxhY2UoYmFzZSwgJycpIHx8ICcvJztcbiAgICBpZiAoaGFzaGJhbmcpIHRoaXMucGF0aCA9IHRoaXMucGF0aC5yZXBsYWNlKCcjIScsICcnKSB8fCAnLyc7XG5cbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlIHx8IHt9O1xuICAgIHRoaXMuc3RhdGUucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5xdWVyeXN0cmluZyA9IH5pID8gZGVjb2RlVVJMRW5jb2RlZFVSSUNvbXBvbmVudChwYXRoLnNsaWNlKGkgKyAxKSkgOiAnJztcbiAgICB0aGlzLnBhdGhuYW1lID0gZGVjb2RlVVJMRW5jb2RlZFVSSUNvbXBvbmVudCh+aSA/IHBhdGguc2xpY2UoMCwgaSkgOiBwYXRoKTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuXG4gICAgLy8gZnJhZ21lbnRcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICBpZiAoIWhhc2hiYW5nKSB7XG4gICAgICBpZiAoIX50aGlzLnBhdGguaW5kZXhPZignIycpKSByZXR1cm47XG4gICAgICB2YXIgcGFydHMgPSB0aGlzLnBhdGguc3BsaXQoJyMnKTtcbiAgICAgIHRoaXMucGF0aCA9IHBhcnRzWzBdO1xuICAgICAgdGhpcy5oYXNoID0gZGVjb2RlVVJMRW5jb2RlZFVSSUNvbXBvbmVudChwYXJ0c1sxXSkgfHwgJyc7XG4gICAgICB0aGlzLnF1ZXJ5c3RyaW5nID0gdGhpcy5xdWVyeXN0cmluZy5zcGxpdCgnIycpWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvc2UgYENvbnRleHRgLlxuICAgKi9cblxuICBwYWdlLkNvbnRleHQgPSBDb250ZXh0O1xuXG4gIC8qKlxuICAgKiBQdXNoIHN0YXRlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcGFnZS5sZW4rKztcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnRpdGxlLCBoYXNoYmFuZyAmJiB0aGlzLnBhdGggIT09ICcvJyA/ICcjIScgKyB0aGlzLnBhdGggOiB0aGlzLmNhbm9uaWNhbFBhdGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSBjb250ZXh0IHN0YXRlLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBDb250ZXh0LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUodGhpcy5zdGF0ZSwgdGhpcy50aXRsZSwgaGFzaGJhbmcgJiYgdGhpcy5wYXRoICE9PSAnLycgPyAnIyEnICsgdGhpcy5wYXRoIDogdGhpcy5jYW5vbmljYWxQYXRoKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBgUm91dGVgIHdpdGggdGhlIGdpdmVuIEhUVFAgYHBhdGhgLFxuICAgKiBhbmQgYW4gYXJyYXkgb2YgYGNhbGxiYWNrc2AgYW5kIGBvcHRpb25zYC5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICpcbiAgICogICAtIGBzZW5zaXRpdmVgICAgIGVuYWJsZSBjYXNlLXNlbnNpdGl2ZSByb3V0ZXNcbiAgICogICAtIGBzdHJpY3RgICAgICAgIGVuYWJsZSBzdHJpY3QgbWF0Y2hpbmcgZm9yIHRyYWlsaW5nIHNsYXNoZXNcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZnVuY3Rpb24gUm91dGUocGF0aCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMucGF0aCA9IChwYXRoID09PSAnKicpID8gJyguKiknIDogcGF0aDtcbiAgICB0aGlzLm1ldGhvZCA9ICdHRVQnO1xuICAgIHRoaXMucmVnZXhwID0gcGF0aHRvUmVnZXhwKHRoaXMucGF0aCxcbiAgICAgIHRoaXMua2V5cyA9IFtdLFxuICAgICAgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3NlIGBSb3V0ZWAuXG4gICAqL1xuXG4gIHBhZ2UuUm91dGUgPSBSb3V0ZTtcblxuICAvKipcbiAgICogUmV0dXJuIHJvdXRlIG1pZGRsZXdhcmUgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gY2FsbGJhY2sgYGZuKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgUm91dGUucHJvdG90eXBlLm1pZGRsZXdhcmUgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24oY3R4LCBuZXh0KSB7XG4gICAgICBpZiAoc2VsZi5tYXRjaChjdHgucGF0aCwgY3R4LnBhcmFtcykpIHJldHVybiBmbihjdHgsIG5leHQpO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgcm91dGUgbWF0Y2hlcyBgcGF0aGAsIGlmIHNvXG4gICAqIHBvcHVsYXRlIGBwYXJhbXNgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBSb3V0ZS5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbihwYXRoLCBwYXJhbXMpIHtcbiAgICB2YXIga2V5cyA9IHRoaXMua2V5cyxcbiAgICAgIHFzSW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKSxcbiAgICAgIHBhdGhuYW1lID0gfnFzSW5kZXggPyBwYXRoLnNsaWNlKDAsIHFzSW5kZXgpIDogcGF0aCxcbiAgICAgIG0gPSB0aGlzLnJlZ2V4cC5leGVjKGRlY29kZVVSSUNvbXBvbmVudChwYXRobmFtZSkpO1xuXG4gICAgaWYgKCFtKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgdmFyIHZhbCA9IGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQobVtpXSk7XG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgfHwgIShoYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtcywga2V5Lm5hbWUpKSkge1xuICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIEhhbmRsZSBcInBvcHVsYXRlXCIgZXZlbnRzLlxuICAgKi9cblxuICB2YXIgb25wb3BzdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHdpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gb25wb3BzdGF0ZShlKSB7XG4gICAgICBpZiAoIWxvYWRlZCkgcmV0dXJuO1xuICAgICAgaWYgKGUuc3RhdGUpIHtcbiAgICAgICAgdmFyIHBhdGggPSBlLnN0YXRlLnBhdGg7XG4gICAgICAgIHBhZ2UucmVwbGFjZShwYXRoLCBlLnN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2Uuc2hvdyhsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLmhhc2gsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbiAgLyoqXG4gICAqIEhhbmRsZSBcImNsaWNrXCIgZXZlbnRzLlxuICAgKi9cblxuICBmdW5jdGlvbiBvbmNsaWNrKGUpIHtcblxuICAgIGlmICgxICE9PSB3aGljaChlKSkgcmV0dXJuO1xuXG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgcmV0dXJuO1xuICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcblxuXG5cbiAgICAvLyBlbnN1cmUgbGlua1xuICAgIC8vIHVzZSBzaGFkb3cgZG9tIHdoZW4gYXZhaWxhYmxlXG4gICAgdmFyIGVsID0gZS5wYXRoID8gZS5wYXRoWzBdIDogZS50YXJnZXQ7XG4gICAgd2hpbGUgKGVsICYmICdBJyAhPT0gZWwubm9kZU5hbWUpIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICBpZiAoIWVsIHx8ICdBJyAhPT0gZWwubm9kZU5hbWUpIHJldHVybjtcblxuXG5cbiAgICAvLyBJZ25vcmUgaWYgdGFnIGhhc1xuICAgIC8vIDEuIFwiZG93bmxvYWRcIiBhdHRyaWJ1dGVcbiAgICAvLyAyLiByZWw9XCJleHRlcm5hbFwiIGF0dHJpYnV0ZVxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgfHwgZWwuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ2V4dGVybmFsJykgcmV0dXJuO1xuXG4gICAgLy8gZW5zdXJlIG5vbi1oYXNoIGZvciB0aGUgc2FtZSBwYXRoXG4gICAgdmFyIGxpbmsgPSBlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBpZiAoIWhhc2hiYW5nICYmIGVsLnBhdGhuYW1lID09PSBsb2NhdGlvbi5wYXRobmFtZSAmJiAoZWwuaGFzaCB8fCAnIycgPT09IGxpbmspKSByZXR1cm47XG5cblxuXG4gICAgLy8gQ2hlY2sgZm9yIG1haWx0bzogaW4gdGhlIGhyZWZcbiAgICBpZiAobGluayAmJiBsaW5rLmluZGV4T2YoJ21haWx0bzonKSA+IC0xKSByZXR1cm47XG5cbiAgICAvLyBjaGVjayB0YXJnZXRcbiAgICBpZiAoZWwudGFyZ2V0KSByZXR1cm47XG5cbiAgICAvLyB4LW9yaWdpblxuICAgIGlmICghc2FtZU9yaWdpbihlbC5ocmVmKSkgcmV0dXJuO1xuXG5cblxuICAgIC8vIHJlYnVpbGQgcGF0aFxuICAgIHZhciBwYXRoID0gZWwucGF0aG5hbWUgKyBlbC5zZWFyY2ggKyAoZWwuaGFzaCB8fCAnJyk7XG5cbiAgICAvLyBzdHJpcCBsZWFkaW5nIFwiL1tkcml2ZSBsZXR0ZXJdOlwiIG9uIE5XLmpzIG9uIFdpbmRvd3NcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHBhdGgubWF0Y2goL15cXC9bYS16QS1aXTpcXC8vKSkge1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcL1thLXpBLVpdOlxcLy8sICcvJyk7XG4gICAgfVxuXG4gICAgLy8gc2FtZSBwYWdlXG4gICAgdmFyIG9yaWcgPSBwYXRoO1xuXG4gICAgaWYgKHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKGJhc2UubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzaGJhbmcpIHBhdGggPSBwYXRoLnJlcGxhY2UoJyMhJywgJycpO1xuXG4gICAgaWYgKGJhc2UgJiYgb3JpZyA9PT0gcGF0aCkgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhZ2Uuc2hvdyhvcmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBidXR0b24uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHdoaWNoKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgcmV0dXJuIG51bGwgPT09IGUud2hpY2ggPyBlLmJ1dHRvbiA6IGUud2hpY2g7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYGhyZWZgIGlzIHRoZSBzYW1lIG9yaWdpbi5cbiAgICovXG5cbiAgZnVuY3Rpb24gc2FtZU9yaWdpbihocmVmKSB7XG4gICAgdmFyIG9yaWdpbiA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIGlmIChsb2NhdGlvbi5wb3J0KSBvcmlnaW4gKz0gJzonICsgbG9jYXRpb24ucG9ydDtcbiAgICByZXR1cm4gKGhyZWYgJiYgKDAgPT09IGhyZWYuaW5kZXhPZihvcmlnaW4pKSk7XG4gIH1cblxuICBwYWdlLnNhbWVPcmlnaW4gPSBzYW1lT3JpZ2luO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGFnZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzYXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZVxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W14oKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0cikge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBzdWZmaXggPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIHZhciByZXBlYXQgPSBzdWZmaXggPT09ICcrJyB8fCBzdWZmaXggPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IHN1ZmZpeCA9PT0gJz8nIHx8IHN1ZmZpeCA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHByZWZpeCB8fCAnLydcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXAgfHwgKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBkZWxpbWl0ZXIgKyAnXSs/JylcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXR0ZXJuOiBlc2NhcGVHcm91cChwYXR0ZXJuKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgc3RyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0cikpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBcIicgKyB2YWx1ZSArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9dKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBncm91cFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHtSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7UmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBwYXJzZShwYXRoKVxuICB2YXIgcmUgPSB0b2tlbnNUb1JlZ0V4cCh0b2tlbnMsIG9wdGlvbnMpXG5cbiAgLy8gQXR0YWNoIGtleXMgYmFjayB0byB0aGUgcmVnZXhwLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAga2V5cy5wdXNoKHRva2Vuc1tpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZSwga2V5cylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgdG9rZW5zXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcbiAgdmFyIGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1cbiAgdmFyIGVuZHNXaXRoU2xhc2ggPSB0eXBlb2YgbGFzdFRva2VuID09PSAnc3RyaW5nJyAmJiAvXFwvJC8udGVzdChsYXN0VG9rZW4pXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSB0b2tlbi5wYXR0ZXJuXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhTbGFzaCA/IHJvdXRlLnNsaWNlKDAsIC0yKSA6IHJvdXRlKSArICcoPzpcXFxcLyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aFNsYXNoID8gJycgOiAnKD89XFxcXC98JCknXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgICAgICAgICAgICAgICAgW2tleXNdXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICAgIFtvcHRpb25zXVxuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAga2V5cyA9IGtleXMgfHwgW11cblxuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0ga2V5c1xuICAgIGtleXMgPSBbXVxuICB9IGVsc2UgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYWdlL34vcGF0aC10by1yZWdleHAvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc2FycmF5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcclxuaW1wb3J0IHJhZiBmcm9tICdyYWYnXHJcblxyXG5jb25zdCBsaW5rZWQgPSAoYXJyKSA9PiB7XHJcbiAgY29uc3QgaGVhZCA9IGFyclswXVxyXG4gIGNvbnN0IHRhaWwgPSBhcnIuc2xpY2UoMSlcclxuICByZXR1cm4gW2hlYWQsIHRhaWxdXHJcbn1cclxuXHJcbmNvbnN0IHJ1biA9IChbaGVhZCwgdGFpbF0pID0+IHtcclxuICBpZihoZWFkKSB7XHJcbiAgICByYWYoaGVhZClcclxuICAgIHJldHVybiBydW4obGlua2VkKHRhaWwpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZucykgPT4ge1xyXG4gIHJldHVybiBydW4obGlua2VkKGZucykpXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9saWIvcXJhZi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXHJcbmltcG9ydCBjb25jYXQgZnJvbSAnbG9kYXNoL2NvbmNhdCdcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnXHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnXHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9pbnRlcnZhbCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcGFpcndpc2UnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N0YXJ0V2l0aCdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci93aXRoTGF0ZXN0RnJvbSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSdcclxuaW1wb3J0IGN1cnJlbnR3aW5kb3dzaXplIGZyb20gJy4uLy4uL2xpYi9jdXJyZW50d2luZG93c2l6ZSdcclxuaW1wb3J0IGVuc3VyZXBvcyBmcm9tICcuLi8uLi9saWIvZW5zdXJlcG9zJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIFxyXG4gICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIChldmVudCkgPT4ge1xyXG4gICAgXHJcbiAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL2Zyb250LXBhZ2UvcGFyYWxsYXhpbmcuanNcbiAqKi8iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IGNvbmNhdGVuYXRpbmcgYGFycmF5YCB3aXRoIGFueSBhZGRpdGlvbmFsIGFycmF5c1xuICogYW5kL29yIHZhbHVlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb25jYXRlbmF0ZS5cbiAqIEBwYXJhbSB7Li4uKn0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjb25jYXRlbmF0ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGNvbmNhdGVuYXRlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5ID0gWzFdO1xuICogdmFyIG90aGVyID0gXy5jb25jYXQoYXJyYXksIDIsIFszXSwgW1s0XV0pO1xuICpcbiAqIGNvbnNvbGUubG9nKG90aGVyKTtcbiAqIC8vID0+IFsxLCAyLCAzLCBbNF1dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXkpO1xuICogLy8gPT4gWzFdXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBhcmdzID0gQXJyYXkobGVuZ3RoID8gbGVuZ3RoIC0gMSA6IDApLFxuICAgICAgYXJyYXkgPSBhcmd1bWVudHNbMF0sXG4gICAgICBpbmRleCA9IGxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGFyZ3NbaW5kZXggLSAxXSA9IGFyZ3VtZW50c1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGxlbmd0aFxuICAgID8gYXJyYXlQdXNoKGlzQXJyYXkoYXJyYXkpID8gY29weUFycmF5KGFycmF5KSA6IFthcnJheV0sIGJhc2VGbGF0dGVuKGFyZ3MsIDEpKVxuICAgIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uY2F0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2NvbmNhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBUaGUgbWF4aW11bSByZWN1cnNpb24gZGVwdGguXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVkaWNhdGU9aXNGbGF0dGVuYWJsZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCB0byB2YWx1ZXMgdGhhdCBwYXNzIGBwcmVkaWNhdGVgIGNoZWNrcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBpbmNvcnJlY3RseSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL19nZXRMZW5ndGgnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGFcbiAqIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKSB0aGF0IGFmZmVjdHNcbiAqIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgd2VhayBtYXAgY29uc3RydWN0b3JzLFxuICAvLyBhbmQgUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciByb290XzEgPSByZXF1aXJlKCcuL3V0aWwvcm9vdCcpO1xudmFyIHRvU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi91dGlsL3RvU3Vic2NyaWJlcicpO1xudmFyIHN5bWJvbF9vYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdzeW1ib2wtb2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIGFueSBzZXQgb2YgdmFsdWVzIG92ZXIgYW55IGFtb3VudCBvZiB0aW1lLiBUaGlzIHRoZSBtb3N0IGJhc2ljIGJ1aWxkaW5nIGJsb2NrXG4gKiBvZiBSeEpTLlxuICpcbiAqIEBjbGFzcyBPYnNlcnZhYmxlPFQ+XG4gKi9cbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJzY3JpYmUgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgIGNhbGxlZCB3aGVuIHRoZSBPYnNlcnZhYmxlIGlzXG4gICAgICogaW5pdGlhbGx5IHN1YnNjcmliZWQgdG8uIFRoaXMgZnVuY3Rpb24gaXMgZ2l2ZW4gYSBTdWJzY3JpYmVyLCB0byB3aGljaCBuZXcgdmFsdWVzXG4gICAgICogY2FuIGJlIGBuZXh0YGVkLCBvciBhbiBgZXJyb3JgIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIHJhaXNlIGFuIGVycm9yLCBvclxuICAgICAqIGBjb21wbGV0ZWAgY2FuIGJlIGNhbGxlZCB0byBub3RpZnkgb2YgYSBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSwgd2l0aCB0aGlzIE9ic2VydmFibGUgYXMgdGhlIHNvdXJjZSwgYW5kIHRoZSBwYXNzZWRcbiAgICAgKiBvcGVyYXRvciBkZWZpbmVkIGFzIHRoZSBuZXcgb2JzZXJ2YWJsZSdzIG9wZXJhdG9yLlxuICAgICAqIEBtZXRob2QgbGlmdFxuICAgICAqIEBwYXJhbSB7T3BlcmF0b3J9IG9wZXJhdG9yIHRoZSBvcGVyYXRvciBkZWZpbmluZyB0aGUgb3BlcmF0aW9uIHRvIHRha2Ugb24gdGhlIG9ic2VydmFibGVcbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBvYnNlcnZhYmxlIHdpdGggdGhlIE9wZXJhdG9yIGFwcGxpZWRcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGhhbmRsZXJzIGZvciBoYW5kbGluZyBlbWl0dGVkIHZhbHVlcywgZXJyb3IgYW5kIGNvbXBsZXRpb25zIGZyb20gdGhlIG9ic2VydmFibGUsIGFuZFxuICAgICAqICBleGVjdXRlcyB0aGUgb2JzZXJ2YWJsZSdzIHN1YnNjcmliZXIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgdGFrZSBhY3Rpb24gdG8gc2V0IHVwIHRoZSB1bmRlcmx5aW5nIGRhdGEgc3RyZWFtXG4gICAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0ge1BhcnRpYWxPYnNlcnZlcnxGdW5jdGlvbn0gb2JzZXJ2ZXJPck5leHQgKG9wdGlvbmFsKSBlaXRoZXIgYW4gb2JzZXJ2ZXIgZGVmaW5pbmcgYWxsIGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQsXG4gICAgICogIG9yIHRoZSBmaXJzdCBvZiB0aHJlZSBwb3NzaWJsZSBoYW5kbGVycywgd2hpY2ggaXMgdGhlIGhhbmRsZXIgZm9yIGVhY2ggdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIChvcHRpb25hbCkgYSBoYW5kbGVyIGZvciBhIHRlcm1pbmFsIGV2ZW50IHJlc3VsdGluZyBmcm9tIGFuIGVycm9yLiBJZiBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkLFxuICAgICAqICB0aGUgZXJyb3Igd2lsbCBiZSB0aHJvd24gYXMgdW5oYW5kbGVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGxldGUgKG9wdGlvbmFsKSBhIGhhbmRsZXIgZm9yIGEgdGVybWluYWwgZXZlbnQgcmVzdWx0aW5nIGZyb20gc3VjY2Vzc2Z1bCBjb21wbGV0aW9uLlxuICAgICAqIEByZXR1cm4ge0lTdWJzY3JpcHRpb259IGEgc3Vic2NyaXB0aW9uIHJlZmVyZW5jZSB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVyc1xuICAgICAqL1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyXzEudG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5rLmFkZCh0aGlzLl9zdWJzY3JpYmUoc2luaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIHRocm93IHNpbmsuc3luY0Vycm9yVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbms7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGZvckVhY2hcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0IGEgaGFuZGxlciBmb3IgZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBvYnNlcnZhYmxlXG4gICAgICogQHBhcmFtIHtQcm9taXNlQ29uc3RydWN0b3J9IFtQcm9taXNlQ3Rvcl0gYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBQcm9taXNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9uIG9ic2VydmFibGUgY29tcGxldGlvbiBvclxuICAgICAqICByZWplY3RzIHdpdGggdGhlIGhhbmRsZWQgZXJyb3JcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIFByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgICAgIGlmIChyb290XzEucm9vdC5SeCAmJiByb290XzEucm9vdC5SeC5jb25maWcgJiYgcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlQ3RvciA9IHJvb3RfMS5yb290LlJ4LmNvbmZpZy5Qcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocm9vdF8xLnJvb3QuUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIFByb21pc2VDdG9yID0gcm9vdF8xLnJvb3QuUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uLCB0aGVuIHdlIGNhbiBzdXJtaXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXh0IGhhbmRsaW5nIGlzIGFzeW5jaHJvbm91cy4gQW55IGVycm9ycyB0aHJvd25cbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBiZSByZWplY3RlZCBleHBsaWNpdGx5IGFuZCB1bnN1YnNjcmliZSBtdXN0IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxlZCBtYW51YWxseVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgTk8gc3Vic2NyaXB0aW9uLCB0aGVuIHdlJ3JlIGdldHRpbmcgYSBuZXh0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgc3luY2hyb25vdXNseSBkdXJpbmcgc3Vic2NyaXB0aW9uLiBXZSBjYW4ganVzdCBjYWxsIGl0LlxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBlcnJvcnMsIE9ic2VydmFibGUncyBgc3Vic2NyaWJlYCBpbXBsZSB3aWxsIGVuc3VyZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5zdWJzY3JpcHRpb24gbG9naWMgaXMgY2FsbGVkLCB0aGVuIHN5bmNocm9ub3VzbHkgcmV0aHJvdyB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIHRoYXQsIFByb21pc2Ugd2lsbCB0cmFwIHRoZSBlcnJvciBhbmQgc2VuZCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBkb3duIHRoZSByZWplY3Rpb24gcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFuIGludGVyb3AgcG9pbnQgZGVmaW5lZCBieSB0aGUgZXM3LW9ic2VydmFibGUgc3BlYyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAgICogQG1ldGhvZCBTeW1ib2wub2JzZXJ2YWJsZVxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IHRoaXMgaW5zdGFuY2Ugb2YgdGhlIG9ic2VydmFibGVcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtzeW1ib2xfb2JzZXJ2YWJsZV8xLmRlZmF1bHRdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vIEhBQ0s6IFNpbmNlIFR5cGVTY3JpcHQgaW5oZXJpdHMgc3RhdGljIHByb3BlcnRpZXMgdG9vLCB3ZSBoYXZlIHRvXG4gICAgLy8gZmlnaHQgYWdhaW5zdCBUeXBlU2NyaXB0IGhlcmUgc28gU3ViamVjdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBzdGF0aWMgY3JlYXRlIHNpZ25hdHVyZVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sZCBPYnNlcnZhYmxlIGJ5IGNhbGxpbmcgdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICAgKiBAc3RhdGljIHRydWVcbiAgICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlPyB0aGUgc3Vic2NyaWJlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIE9ic2VydmFibGUgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhIG5ldyBjb2xkIG9ic2VydmFibGVcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL09ic2VydmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgb2JqZWN0VHlwZXMgPSB7XG4gICAgJ2Jvb2xlYW4nOiBmYWxzZSxcbiAgICAnZnVuY3Rpb24nOiB0cnVlLFxuICAgICdvYmplY3QnOiB0cnVlLFxuICAgICdudW1iZXInOiBmYWxzZSxcbiAgICAnc3RyaW5nJzogZmFsc2UsXG4gICAgJ3VuZGVmaW5lZCc6IGZhbHNlXG59O1xuZXhwb3J0cy5yb290ID0gKG9iamVjdFR5cGVzW3R5cGVvZiBzZWxmXSAmJiBzZWxmKSB8fCAob2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93KTtcbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSAqL1xudmFyIGZyZWVFeHBvcnRzID0gb2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcbnZhciBmcmVlTW9kdWxlID0gb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xudmFyIGZyZWVHbG9iYWwgPSBvYmplY3RUeXBlc1t0eXBlb2YgZ2xvYmFsXSAmJiBnbG9iYWw7XG5pZiAoZnJlZUdsb2JhbCAmJiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwpKSB7XG4gICAgZXhwb3J0cy5yb290ID0gZnJlZUdsb2JhbDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvb3QuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL3Jvb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9zeW1ib2wvcnhTdWJzY3JpYmVyJyk7XG5mdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS4kJHJ4U3Vic2NyaWJlcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS4kJHJ4U3Vic2NyaWJlcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcigpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuZXhwb3J0cy50b1N1YnNjcmliZXIgPSB0b1N1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL3RvU3Vic2NyaWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoJy4vdXRpbC9pc0Z1bmN0aW9uJyk7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKCcuL1N1YnNjcmlwdGlvbicpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKCcuL09ic2VydmVyJyk7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuL3N5bWJvbC9yeFN1YnNjcmliZXInKTtcbi8qKlxuICogSW1wbGVtZW50cyB0aGUge0BsaW5rIE9ic2VydmVyfSBpbnRlcmZhY2UgYW5kIGV4dGVuZHMgdGhlXG4gKiB7QGxpbmsgU3Vic2NyaXB0aW9ufSBjbGFzcy4gV2hpbGUgdGhlIHtAbGluayBPYnNlcnZlcn0gaXMgdGhlIHB1YmxpYyBBUEkgZm9yXG4gKiBjb25zdW1pbmcgdGhlIHZhbHVlcyBvZiBhbiB7QGxpbmsgT2JzZXJ2YWJsZX0sIGFsbCBPYnNlcnZlcnMgZ2V0IGNvbnZlcnRlZCB0b1xuICogYSBTdWJzY3JpYmVyLCBpbiBvcmRlciB0byBwcm92aWRlIFN1YnNjcmlwdGlvbi1saWtlIGNhcGFiaWxpdGllcyBzdWNoIGFzXG4gKiBgdW5zdWJzY3JpYmVgLiBTdWJzY3JpYmVyIGlzIGEgY29tbW9uIHR5cGUgaW4gUnhKUywgYW5kIGNydWNpYWwgZm9yXG4gKiBpbXBsZW1lbnRpbmcgb3BlcmF0b3JzLCBidXQgaXQgaXMgcmFyZWx5IHVzZWQgYXMgYSBwdWJsaWMgQVBJLlxuICpcbiAqIEBjbGFzcyBTdWJzY3JpYmVyPFQ+XG4gKi9cbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09ic2VydmVyfGZ1bmN0aW9uKHZhbHVlOiBUKTogdm9pZH0gW2Rlc3RpbmF0aW9uT3JOZXh0XSBBIHBhcnRpYWxseVxuICAgICAqIGRlZmluZWQgT2JzZXJ2ZXIgb3IgYSBgbmV4dGAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihlOiA/YW55KTogdm9pZH0gW2Vycm9yXSBUaGUgYGVycm9yYCBjYWxsYmFjayBvZiBhblxuICAgICAqIE9ic2VydmVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogdm9pZH0gW2NvbXBsZXRlXSBUaGUgYGNvbXBsZXRlYCBjYWxsYmFjayBvZiBhblxuICAgICAqIE9ic2VydmVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zeW5jRXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3luY0Vycm9yVGhyb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBPYnNlcnZlcl8xLmVtcHR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICghZGVzdGluYXRpb25Pck5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25Pck5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmFkZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIodGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU2FmZVN1YnNjcmliZXIodGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGVbcnhTdWJzY3JpYmVyXzEuJCRyeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICAvKipcbiAgICAgKiBBIHN0YXRpYyBmYWN0b3J5IGZvciBhIFN1YnNjcmliZXIsIGdpdmVuIGEgKHBvdGVudGlhbGx5IHBhcnRpYWwpIGRlZmluaXRpb25cbiAgICAgKiBvZiBhbiBPYnNlcnZlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHg6ID9UKTogdm9pZH0gW25leHRdIFRoZSBgbmV4dGAgY2FsbGJhY2sgb2YgYW4gT2JzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihlOiA/YW55KTogdm9pZH0gW2Vycm9yXSBUaGUgYGVycm9yYCBjYWxsYmFjayBvZiBhblxuICAgICAqIE9ic2VydmVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogdm9pZH0gW2NvbXBsZXRlXSBUaGUgYGNvbXBsZXRlYCBjYWxsYmFjayBvZiBhblxuICAgICAqIE9ic2VydmVyLlxuICAgICAqIEByZXR1cm4ge1N1YnNjcmliZXI8VD59IEEgU3Vic2NyaWJlciB3cmFwcGluZyB0aGUgKHBhcnRpYWxseSBkZWZpbmVkKVxuICAgICAqIE9ic2VydmVyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICAgICovXG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgc3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFjayB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgb2YgdHlwZSBgbmV4dGAgZnJvbVxuICAgICAqIHRoZSBPYnNlcnZhYmxlLCB3aXRoIGEgdmFsdWUuIFRoZSBPYnNlcnZhYmxlIG1heSBjYWxsIHRoaXMgbWV0aG9kIDAgb3IgbW9yZVxuICAgICAqIHRpbWVzLlxuICAgICAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBUaGUgYG5leHRgIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9mIHR5cGUgYGVycm9yYCBmcm9tXG4gICAgICogdGhlIE9ic2VydmFibGUsIHdpdGggYW4gYXR0YWNoZWQge0BsaW5rIEVycm9yfS4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXRcbiAgICAgKiB0aGUgT2JzZXJ2YWJsZSBoYXMgZXhwZXJpZW5jZWQgYW4gZXJyb3IgY29uZGl0aW9uLlxuICAgICAqIEBwYXJhbSB7YW55fSBbZXJyXSBUaGUgYGVycm9yYCBleGNlcHRpb24uXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHtAbGluayBPYnNlcnZlcn0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBhIHZhbHVlbGVzcyBub3RpZmljYXRpb24gb2YgdHlwZVxuICAgICAqIGBjb21wbGV0ZWAgZnJvbSB0aGUgT2JzZXJ2YWJsZS4gTm90aWZpZXMgdGhlIE9ic2VydmVyIHRoYXQgdGhlIE9ic2VydmFibGVcbiAgICAgKiBoYXMgZmluaXNoZWQgc2VuZGluZyBwdXNoLWJhc2VkIG5vdGlmaWNhdGlvbnMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBTYWZlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNhZmVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNhZmVTdWJzY3JpYmVyKF9wYXJlbnQsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0Lm5leHQ7XG4gICAgICAgICAgICBlcnJvciA9IG9ic2VydmVyT3JOZXh0LmVycm9yO1xuICAgICAgICAgICAgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihjb250ZXh0LnVuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGNvbnRleHQudW5zdWJzY3JpYmUuYmluZChjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gdGhpcy51bnN1YnNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLl9uZXh0ID0gbmV4dDtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLl9uZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICAgICAgICAgIGlmICghX3BhcmVudC5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50LCB0aGlzLl9uZXh0LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9wYXJlbnQuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50LCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50LnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcGFyZW50LnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgIF9wYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9wYXJlbnQuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2NvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudCwgdGhpcy5fY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclVuc3ViID0gZnVuY3Rpb24gKGZuLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclNldEVycm9yID0gZnVuY3Rpb24gKHBhcmVudCwgZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50ID0gdGhpcy5fcGFyZW50O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgX3BhcmVudC51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvU3Vic2NyaWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0Z1bmN0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoJy4vdXRpbC9pc0FycmF5Jyk7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoJy4vdXRpbC9pc09iamVjdCcpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoJy4vdXRpbC9pc0Z1bmN0aW9uJyk7XG52YXIgdHJ5Q2F0Y2hfMSA9IHJlcXVpcmUoJy4vdXRpbC90cnlDYXRjaCcpO1xudmFyIGVycm9yT2JqZWN0XzEgPSByZXF1aXJlKCcuL3V0aWwvZXJyb3JPYmplY3QnKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKCcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcicpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGlzcG9zYWJsZSByZXNvdXJjZSwgc3VjaCBhcyB0aGUgZXhlY3V0aW9uIG9mIGFuIE9ic2VydmFibGUuIEFcbiAqIFN1YnNjcmlwdGlvbiBoYXMgb25lIGltcG9ydGFudCBtZXRob2QsIGB1bnN1YnNjcmliZWAsIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRcbiAqIGFuZCBqdXN0IGRpc3Bvc2VzIHRoZSByZXNvdXJjZSBoZWxkIGJ5IHRoZSBzdWJzY3JpcHRpb24uXG4gKlxuICogQWRkaXRpb25hbGx5LCBzdWJzY3JpcHRpb25zIG1heSBiZSBncm91cGVkIHRvZ2V0aGVyIHRocm91Z2ggdGhlIGBhZGQoKWBcbiAqIG1ldGhvZCwgd2hpY2ggd2lsbCBhdHRhY2ggYSBjaGlsZCBTdWJzY3JpcHRpb24gdG8gdGhlIGN1cnJlbnQgU3Vic2NyaXB0aW9uLlxuICogV2hlbiBhIFN1YnNjcmlwdGlvbiBpcyB1bnN1YnNjcmliZWQsIGFsbCBpdHMgY2hpbGRyZW4gKGFuZCBpdHMgZ3JhbmRjaGlsZHJlbilcbiAqIHdpbGwgYmUgdW5zdWJzY3JpYmVkIGFzIHdlbGwuXG4gKlxuICogQGNsYXNzIFN1YnNjcmlwdGlvblxuICovXG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFt1bnN1YnNjcmliZV0gQSBmdW5jdGlvbiBkZXNjcmliaW5nIGhvdyB0b1xuICAgICAqIHBlcmZvcm0gdGhlIGRpc3Bvc2FsIG9mIHJlc291cmNlcyB3aGVuIHRoZSBgdW5zdWJzY3JpYmVgIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIFN1YnNjcmlwdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVuc3Vic2NyaWJlZC5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzIGhlbGQgYnkgdGhlIHN1YnNjcmlwdGlvbi4gTWF5LCBmb3IgaW5zdGFuY2UsIGNhbmNlbFxuICAgICAqIGFuIG9uZ29pbmcgT2JzZXJ2YWJsZSBleGVjdXRpb24gb3IgY2FuY2VsIGFueSBvdGhlciB0eXBlIG9mIHdvcmsgdGhhdFxuICAgICAqIHN0YXJ0ZWQgd2hlbiB0aGUgU3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAodGhpcy5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfdW5zdWJzY3JpYmUgPSBfYS5fdW5zdWJzY3JpYmUsIF9zdWJzY3JpcHRpb25zID0gX2EuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oX3Vuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgdmFyIHRyaWFsID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaChfdW5zdWJzY3JpYmUpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChlcnJvcnMgPSBlcnJvcnMgfHwgW10pLnB1c2goZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0XzEuaXNPYmplY3Qoc3ViKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJpYWwgPSB0cnlDYXRjaF8xLnRyeUNhdGNoKHN1Yi51bnN1YnNjcmliZSkuY2FsbChzdWIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJpYWwgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdC5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChlcnIuZXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0Vycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0ZWFyIGRvd24gdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdW5zdWJzY3JpYmUoKSBvZiB0aGlzXG4gICAgICogU3Vic2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogSWYgdGhlIHRlYXIgZG93biBiZWluZyBhZGRlZCBpcyBhIHN1YnNjcmlwdGlvbiB0aGF0IGlzIGFscmVhZHlcbiAgICAgKiB1bnN1YnNjcmliZWQsIGlzIHRoZSBzYW1lIHJlZmVyZW5jZSBgYWRkYCBpcyBiZWluZyBjYWxsZWQgb24sIG9yIGlzXG4gICAgICogYFN1YnNjcmlwdGlvbi5FTVBUWWAsIGl0IHdpbGwgbm90IGJlIGFkZGVkLlxuICAgICAqXG4gICAgICogSWYgdGhpcyBzdWJzY3JpcHRpb24gaXMgYWxyZWFkeSBpbiBhbiBgaXNVbnN1YnNjcmliZWRgIHN0YXRlLCB0aGUgcGFzc2VkXG4gICAgICogdGVhciBkb3duIGxvZ2ljIHdpbGwgYmUgZXhlY3V0ZWQgaW1tZWRpYXRlbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RlYXJkb3duTG9naWN9IHRlYXJkb3duIFRoZSBhZGRpdGlvbmFsIGxvZ2ljIHRvIGV4ZWN1dGUgb25cbiAgICAgKiB0ZWFyZG93bi5cbiAgICAgKiBAcmV0dXJuIHtTdWJzY3JpcHRpb259IFJldHVybnMgdGhlIFN1YnNjcmlwdGlvbiB1c2VkIG9yIGNyZWF0ZWQgdG8gYmVcbiAgICAgKiBhZGRlZCB0byB0aGUgaW5uZXIgc3Vic2NyaXB0aW9ucyBsaXN0LiBUaGlzIFN1YnNjcmlwdGlvbiBjYW4gYmUgdXNlZCB3aXRoXG4gICAgICogYHJlbW92ZSgpYCB0byByZW1vdmUgdGhlIHBhc3NlZCB0ZWFyZG93biBsb2dpYyBmcm9tIHRoZSBpbm5lciBzdWJzY3JpcHRpb25zXG4gICAgICogbGlzdC5cbiAgICAgKi9cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICBpZiAoIXRlYXJkb3duIHx8ICh0ZWFyZG93biA9PT0gdGhpcykgfHwgKHRlYXJkb3duID09PSBTdWJzY3JpcHRpb24uRU1QVFkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YiA9IHRlYXJkb3duO1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3ViLmlzVW5zdWJzY3JpYmVkIHx8IHR5cGVvZiBzdWIudW5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5fc3Vic2NyaXB0aW9ucyB8fCAodGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdKSkucHVzaChzdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBTdWJzY3JpcHRpb24gZnJvbSB0aGUgaW50ZXJuYWwgbGlzdCBvZiBzdWJzY3JpcHRpb25zIHRoYXQgd2lsbFxuICAgICAqIHVuc3Vic2NyaWJlIGR1cmluZyB0aGUgdW5zdWJzY3JpYmUgcHJvY2VzcyBvZiB0aGlzIFN1YnNjcmlwdGlvbi5cbiAgICAgKiBAcGFyYW0ge1N1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gdG8gcmVtb3ZlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIEhBQ0s6IFRoaXMgbWlnaHQgYmUgcmVkdW5kYW50IGJlY2F1c2Ugb2YgdGhlIGxvZ2ljIGluIGBhZGQoKWBcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PSBudWxsIHx8IChzdWJzY3JpcHRpb24gPT09IHRoaXMpIHx8IChzdWJzY3JpcHRpb24gPT09IFN1YnNjcmlwdGlvbi5FTVBUWSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uSW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnNwbGljZShzdWJzY3JpcHRpb25JbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoZW1wdHkpIHtcbiAgICAgICAgZW1wdHkuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfShuZXcgU3Vic2NyaXB0aW9uKCkpKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydHMuU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvU3Vic2NyaXB0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYmplY3QuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIGVycm9yT2JqZWN0XzEgPSByZXF1aXJlKCcuL2Vycm9yT2JqZWN0Jyk7XG52YXIgdHJ5Q2F0Y2hUYXJnZXQ7XG5mdW5jdGlvbiB0cnlDYXRjaGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0cnlDYXRjaFRhcmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iamVjdF8xLmVycm9yT2JqZWN0LmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmplY3RfMS5lcnJvck9iamVjdDtcbiAgICB9XG59XG5mdW5jdGlvbiB0cnlDYXRjaChmbikge1xuICAgIHRyeUNhdGNoVGFyZ2V0ID0gZm47XG4gICAgcmV0dXJuIHRyeUNhdGNoZXI7XG59XG5leHBvcnRzLnRyeUNhdGNoID0gdHJ5Q2F0Y2g7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cnlDYXRjaC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvdHJ5Q2F0Y2guanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyB0eXBlb2YgYW55IHNvIHRoYXQgaXQgd2UgZG9uJ3QgaGF2ZSB0byBjYXN0IHdoZW4gY29tcGFyaW5nIGEgcmVzdWx0IHRvIHRoZSBlcnJvciBvYmplY3RcbmV4cG9ydHMuZXJyb3JPYmplY3QgPSB7IGU6IHt9IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvck9iamVjdC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvZXJyb3JPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gb25lIG9yIG1vcmUgZXJyb3JzIGhhdmUgb2NjdXJyZWQgZHVyaW5nIHRoZVxuICogYHVuc3Vic2NyaWJlYCBvZiBhIHtAbGluayBTdWJzY3JpcHRpb259LlxuICovXG52YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3Vic2NyaXB0aW9uRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB2YXIgZXJyID0gRXJyb3IuY2FsbCh0aGlzLCBlcnJvcnMgP1xuICAgICAgICAgICAgZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuICBcIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gKChpICsgMSkgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKSk7IH0pLmpvaW4oJ1xcbiAgJykgOiAnJyk7XG4gICAgICAgIHRoaXMubmFtZSA9IGVyci5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLnN0YWNrID0gZXJyLnN0YWNrO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZW1wdHkgPSB7XG4gICAgaXNVbnN1YnNjcmliZWQ6IHRydWUsXG4gICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgdGhyb3cgZXJyOyB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL09ic2VydmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvcm9vdCcpO1xudmFyIFN5bWJvbCA9IHJvb3RfMS5yb290LlN5bWJvbDtcbmV4cG9ydHMuJCRyeFN1YnNjcmliZXIgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgIFN5bWJvbC5mb3IoJ3J4U3Vic2NyaWJlcicpIDogJ0BAcnhTdWJzY3JpYmVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ4U3Vic2NyaWJlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3N5bWJvbC9yeFN1YnNjcmliZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJvb3QgPSB1bmRlZmluZWQ7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdHJvb3QgPSB3aW5kb3c7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMi5kZWZhdWx0KShyb290KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlc3VsdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIGZyb21FdmVudF8xID0gcmVxdWlyZSgnLi4vLi4vb2JzZXJ2YWJsZS9mcm9tRXZlbnQnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmZyb21FdmVudCA9IGZyb21FdmVudF8xLmZyb21FdmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBGcm9tRXZlbnRPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0Zyb21FdmVudE9ic2VydmFibGUnKTtcbmV4cG9ydHMuZnJvbUV2ZW50ID0gRnJvbUV2ZW50T2JzZXJ2YWJsZV8xLkZyb21FdmVudE9ic2VydmFibGUuY3JlYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUV2ZW50LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG52YXIgdHJ5Q2F0Y2hfMSA9IHJlcXVpcmUoJy4uL3V0aWwvdHJ5Q2F0Y2gnKTtcbnZhciBlcnJvck9iamVjdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9lcnJvck9iamVjdCcpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaXB0aW9uJyk7XG5mdW5jdGlvbiBpc05vZGVTdHlsZUV2ZW50RW1taXR0ZXIoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmouYWRkTGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmoub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5vZmYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc05vZGVMaXN0KHNvdXJjZU9iaikge1xuICAgIHJldHVybiAhIXNvdXJjZU9iaiAmJiBzb3VyY2VPYmoudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJztcbn1cbmZ1bmN0aW9uIGlzSFRNTENvbGxlY3Rpb24oc291cmNlT2JqKSB7XG4gICAgcmV0dXJuICEhc291cmNlT2JqICYmIHNvdXJjZU9iai50b1N0cmluZygpID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nO1xufVxuZnVuY3Rpb24gaXNFdmVudFRhcmdldChzb3VyY2VPYmopIHtcbiAgICByZXR1cm4gISFzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgRnJvbUV2ZW50T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZyb21FdmVudE9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRnJvbUV2ZW50T2JzZXJ2YWJsZShzb3VyY2VPYmosIGV2ZW50TmFtZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlT2JqID0gc291cmNlT2JqO1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBldmVudHMgb2YgYSBzcGVjaWZpYyB0eXBlIGNvbWluZyBmcm9tIHRoZVxuICAgICAqIGdpdmVuIGV2ZW50IHRhcmdldC5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5DcmVhdGVzIGFuIE9ic2VydmFibGUgZnJvbSBET00gZXZlbnRzLCBvciBOb2RlXG4gICAgICogRXZlbnRFbWl0dGVyIGV2ZW50cyBvciBvdGhlcnMuPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy9mcm9tRXZlbnQucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgYnkgYXR0YWNoaW5nIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFuIFwiZXZlbnQgdGFyZ2V0XCIsXG4gICAgICogd2hpY2ggbWF5IGJlIGFuIG9iamVjdCB3aXRoIGBhZGRFdmVudExpc3RlbmVyYCBhbmQgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLFxuICAgICAqIGEgTm9kZS5qcyBFdmVudEVtaXR0ZXIsIGEgalF1ZXJ5IHN0eWxlIEV2ZW50RW1pdHRlciwgYSBOb2RlTGlzdCBmcm9tIHRoZVxuICAgICAqIERPTSwgb3IgYW4gSFRNTENvbGxlY3Rpb24gZnJvbSB0aGUgRE9NLiBUaGUgZXZlbnQgaGFuZGxlciBpcyBhdHRhY2hlZCB3aGVuXG4gICAgICogdGhlIG91dHB1dCBPYnNlcnZhYmxlIGlzIHN1YnNjcmliZWQsIGFuZCByZW1vdmVkIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBpc1xuICAgICAqIHVuc3Vic2NyaWJlZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXRzIGNsaWNrcyBoYXBwZW5pbmcgb24gdGhlIERPTSBkb2N1bWVudDwvY2FwdGlvbj5cbiAgICAgKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICAgICAqIGNsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBmcm9tfVxuICAgICAqIEBzZWUge0BsaW5rIGZyb21FdmVudFBhdHRlcm59XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IFRoZSBET01FbGVtZW50LCBldmVudCB0YXJnZXQsIE5vZGUuanNcbiAgICAgKiBFdmVudEVtaXR0ZXIsIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uIHRvIGF0dGFjaCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIG9mIGludGVyZXN0LCBiZWluZyBlbWl0dGVkIGJ5IHRoZVxuICAgICAqIGB0YXJnZXRgLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oLi4uYXJnczogYW55KTogVH0gW3NlbGVjdG9yXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0b1xuICAgICAqIHBvc3QtcHJvY2VzcyByZXN1bHRzLiBJdCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGV2ZW50IGhhbmRsZXIgYW5kXG4gICAgICogc2hvdWxkIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQ+fVxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIGZyb21FdmVudFxuICAgICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAodGFyZ2V0LCBldmVudE5hbWUsIHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnJvbUV2ZW50T2JzZXJ2YWJsZSh0YXJnZXQsIGV2ZW50TmFtZSwgc2VsZWN0b3IpO1xuICAgIH07XG4gICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5zZXR1cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzb3VyY2VPYmosIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmU7XG4gICAgICAgIGlmIChpc05vZGVMaXN0KHNvdXJjZU9iaikgfHwgaXNIVE1MQ29sbGVjdGlvbihzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlT2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgRnJvbUV2ZW50T2JzZXJ2YWJsZS5zZXR1cFN1YnNjcmlwdGlvbihzb3VyY2VPYmpbaV0sIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFdmVudFRhcmdldChzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlXzEgPSBzb3VyY2VPYmo7XG4gICAgICAgICAgICBzb3VyY2VPYmouYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlXzIgPSBzb3VyY2VPYmo7XG4gICAgICAgICAgICBzb3VyY2VPYmoub24oZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzIub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOb2RlU3R5bGVFdmVudEVtbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VfMyA9IHNvdXJjZU9iajtcbiAgICAgICAgICAgIHNvdXJjZU9iai5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpKTtcbiAgICB9O1xuICAgIEZyb21FdmVudE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlT2JqID0gdGhpcy5zb3VyY2VPYmo7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSB0aGlzLmV2ZW50TmFtZTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBzZWxlY3RvciA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2hfMS50cnlDYXRjaChzZWxlY3RvcikuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yT2JqZWN0XzEuZXJyb3JPYmplY3QuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQoZSk7IH07XG4gICAgICAgIEZyb21FdmVudE9ic2VydmFibGUuc2V0dXBTdWJzY3JpcHRpb24oc291cmNlT2JqLCBldmVudE5hbWUsIGhhbmRsZXIsIHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIEZyb21FdmVudE9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkZyb21FdmVudE9ic2VydmFibGUgPSBGcm9tRXZlbnRPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RnJvbUV2ZW50T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvRnJvbUV2ZW50T2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgaW50ZXJ2YWxfMSA9IHJlcXVpcmUoJy4uLy4uL29ic2VydmFibGUvaW50ZXJ2YWwnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLmludGVydmFsID0gaW50ZXJ2YWxfMS5pbnRlcnZhbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29ic2VydmFibGUvaW50ZXJ2YWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgSW50ZXJ2YWxPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL0ludGVydmFsT2JzZXJ2YWJsZScpO1xuZXhwb3J0cy5pbnRlcnZhbCA9IEludGVydmFsT2JzZXJ2YWJsZV8xLkludGVydmFsT2JzZXJ2YWJsZS5jcmVhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvaW50ZXJ2YWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBpc051bWVyaWNfMSA9IHJlcXVpcmUoJy4uL3V0aWwvaXNOdW1lcmljJyk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xudmFyIGFzeW5jXzEgPSByZXF1aXJlKCcuLi9zY2hlZHVsZXIvYXN5bmMnKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgSW50ZXJ2YWxPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50ZXJ2YWxPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVydmFsT2JzZXJ2YWJsZShwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAocGVyaW9kID09PSB2b2lkIDApIHsgcGVyaW9kID0gMDsgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYzsgfVxuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBpZiAoIWlzTnVtZXJpY18xLmlzTnVtZXJpYyhwZXJpb2QpIHx8IHBlcmlvZCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucGVyaW9kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgc2VxdWVudGlhbCBudW1iZXJzIGV2ZXJ5IHNwZWNpZmllZFxuICAgICAqIGludGVydmFsIG9mIHRpbWUsIG9uIGEgc3BlY2lmaWVkIFNjaGVkdWxlci5cbiAgICAgKlxuICAgICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbWl0cyBpbmNyZW1lbnRhbCBudW1iZXJzIHBlcmlvZGljYWxseSBpbiB0aW1lLlxuICAgICAqIDwvc3Bhbj5cbiAgICAgKlxuICAgICAqIDxpbWcgc3JjPVwiLi9pbWcvaW50ZXJ2YWwucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICpcbiAgICAgKiBgaW50ZXJ2YWxgIHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFuIGluZmluaXRlIHNlcXVlbmNlIG9mXG4gICAgICogYXNjZW5kaW5nIGludGVnZXJzLCB3aXRoIGEgY29uc3RhbnQgaW50ZXJ2YWwgb2YgdGltZSBvZiB5b3VyIGNob29zaW5nXG4gICAgICogYmV0d2VlbiB0aG9zZSBlbWlzc2lvbnMuIFRoZSBmaXJzdCBlbWlzc2lvbiBpcyBub3Qgc2VudCBpbW1lZGlhdGVseSwgYnV0XG4gICAgICogb25seSBhZnRlciB0aGUgZmlyc3QgcGVyaW9kIGhhcyBwYXNzZWQuIEJ5IGRlZmF1bHQsIHRoaXMgb3BlcmF0b3IgdXNlcyB0aGVcbiAgICAgKiBgYXN5bmNgIFNjaGVkdWxlciB0byBwcm92aWRlIGEgbm90aW9uIG9mIHRpbWUsIGJ1dCB5b3UgbWF5IHBhc3MgYW55XG4gICAgICogU2NoZWR1bGVyIHRvIGl0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdHMgYXNjZW5kaW5nIG51bWJlcnMsIG9uZSBldmVyeSBzZWNvbmQgKDEwMDBtcyk8L2NhcHRpb24+XG4gICAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgICAqIG51bWJlcnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgdGltZXJ9XG4gICAgICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3BlcmlvZD0wXSBUaGUgaW50ZXJ2YWwgc2l6ZSBpbiBtaWxsaXNlY29uZHMgKGJ5IGRlZmF1bHQpXG4gICAgICogb3IgdGhlIHRpbWUgdW5pdCBkZXRlcm1pbmVkIGJ5IHRoZSBzY2hlZHVsZXIncyBjbG9jay5cbiAgICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1hc3luY10gVGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICAgKiB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLCBhbmQgcHJvdmlkaW5nIGEgbm90aW9uIG9mIFwidGltZVwiLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhIHNlcXVlbnRpYWwgbnVtYmVyIGVhY2ggdGltZVxuICAgICAqIGludGVydmFsLlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIGludGVydmFsXG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBJbnRlcnZhbE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgeyBwZXJpb2QgPSAwOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkgeyBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jOyB9XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWxPYnNlcnZhYmxlKHBlcmlvZCwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIEludGVydmFsT2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIHBlcmlvZCA9IHN0YXRlLnBlcmlvZDtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGluZGV4KTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5pbmRleCArPSAxO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBwZXJpb2QpO1xuICAgIH07XG4gICAgSW50ZXJ2YWxPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHBlcmlvZCA9IHRoaXMucGVyaW9kO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShJbnRlcnZhbE9ic2VydmFibGUuZGlzcGF0Y2gsIHBlcmlvZCwge1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4LCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBwZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJ2YWxPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSkpO1xuZXhwb3J0cy5JbnRlcnZhbE9ic2VydmFibGUgPSBJbnRlcnZhbE9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlcnZhbE9ic2VydmFibGUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vYnNlcnZhYmxlL0ludGVydmFsT2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKCcuLi91dGlsL2lzQXJyYXknKTtcbmZ1bmN0aW9uIGlzTnVtZXJpYyh2YWwpIHtcbiAgICAvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAobnVsbHx0cnVlfGZhbHNlfFwiXCIpXG4gICAgLy8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuICAgIC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuICAgIC8vIGFkZGluZyAxIGNvcnJlY3RzIGxvc3Mgb2YgcHJlY2lzaW9uIGZyb20gcGFyc2VGbG9hdCAoIzE1MTAwKVxuICAgIHJldHVybiAhaXNBcnJheV8xLmlzQXJyYXkodmFsKSAmJiAodmFsIC0gcGFyc2VGbG9hdCh2YWwpICsgMSkgPj0gMDtcbn1cbmV4cG9ydHMuaXNOdW1lcmljID0gaXNOdW1lcmljO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNOdW1lcmljLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc051bWVyaWMuanNcbiAqKiBtb2R1bGUgaWQgPSA5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXN5bmNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4vQXN5bmNTY2hlZHVsZXInKTtcbmV4cG9ydHMuYXN5bmMgPSBuZXcgQXN5bmNTY2hlZHVsZXJfMS5Bc3luY1NjaGVkdWxlcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9zY2hlZHVsZXIvYXN5bmMuanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBGdXR1cmVBY3Rpb25fMSA9IHJlcXVpcmUoJy4vRnV0dXJlQWN0aW9uJyk7XG52YXIgUXVldWVTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4vUXVldWVTY2hlZHVsZXInKTtcbnZhciBBc3luY1NjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jU2NoZWR1bGVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlTm93ID0gZnVuY3Rpb24gKHdvcmssIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnV0dXJlQWN0aW9uXzEuRnV0dXJlQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCAwKTtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oUXVldWVTY2hlZHVsZXJfMS5RdWV1ZVNjaGVkdWxlcikpO1xuZXhwb3J0cy5Bc3luY1NjaGVkdWxlciA9IEFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTY2hlZHVsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciByb290XzEgPSByZXF1aXJlKCcuLi91dGlsL3Jvb3QnKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmlwdGlvbicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBGdXR1cmVBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGdXR1cmVBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRnV0dXJlQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMud29yayA9IHdvcms7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBGdXR1cmVBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMud29yayh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBGdXR1cmVBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgRnV0dXJlQWN0aW9uLnByb3RvdHlwZS5fc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICAvLyBBbHdheXMgcmVwbGFjZSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIHRoZSBuZXcgc3RhdGUuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgLy8gU2V0IHRoZSBwZW5kaW5nIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgYWN0aW9uIGhhcyBiZWVuIHNjaGVkdWxlZCwgb3JcbiAgICAgICAgLy8gaGFzIHJlY3Vyc2l2ZWx5IHJlc2NoZWR1bGVkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gaGFzIGFuIGludGVydmFsSUQgYW5kIHRoZSBzcGVjaWZpZWQgZGVsYXkgbWF0Y2hlcyB0aGVcbiAgICAgICAgLy8gZGVsYXkgd2UgdXNlZCB0byBjcmVhdGUgdGhlIGludGVydmFsSUQsIGRvbid0IGNhbGwgYHNldEludGVydmFsYCBhZ2Fpbi5cbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gaGFzIGFuIGludGVydmFsSUQsIGJ1dCB3YXMgcmVzY2hlZHVsZWQgd2l0aCBhIGRpZmZlcmVudFxuICAgICAgICAvLyBgZGVsYXlgIHRpbWUsIGNhbmNlbCB0aGUgY3VycmVudCBpbnRlcnZhbElEIGFuZCBjYWxsIGBzZXRJbnRlcnZhbGAgd2l0aFxuICAgICAgICAvLyB0aGUgbmV3IGBkZWxheWAgdGltZS5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgICAgICAgICAgcm9vdF8xLnJvb3QuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW1wb3J0YW50IGltcGxlbWVudGF0aW9uIG5vdGU6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIEZ1dHVyZUFjdGlvbiBvbmx5IGV4ZWN1dGVzIG9uY2UuIEhvd2V2ZXIsIEFjdGlvbnMgaGF2ZSB0aGVcbiAgICAgICAgLy8gYWJpbGl0eSB0byBiZSByZXNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGUgc2NoZWR1bGVkIGNhbGxiYWNrIChtaW1pY2tpbmdcbiAgICAgICAgLy8gcmVjdXJzaW9uIGZvciBhc3luY2hyb25vdXMgbWV0aG9kcykuIFRoaXMgYWxsb3dzIHVzIHRvIGltcGxlbWVudCBzaW5nbGVcbiAgICAgICAgLy8gYW5kIHJlcGVhdGVkIGFjdGlvbnMgd2l0aCB0aGUgc2FtZSBjb2RlIHBhdGggd2l0aG91dCBhZGRpbmcgQVBJIHN1cmZhY2VcbiAgICAgICAgLy8gYXJlYSwgYW5kIGltcGxlbWVudCB0YWlsLWNhbGwgb3B0aW1pemF0aW9uIG92ZXIgYXN5bmNocm9ub3VzIGJvdW5kYXJpZXMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEhvd2V2ZXIsIEpTIHJ1bnRpbWVzIG1ha2UgYSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGludGVydmFscyBzY2hlZHVsZWQgYnlcbiAgICAgICAgLy8gcmVwZWF0ZWRseSBjYWxsaW5nIGBzZXRUaW1lb3V0YCB2cy4gYSBzaW5nbGUgYHNldEludGVydmFsYCBjYWxsLCB3aXRoXG4gICAgICAgIC8vIHRoZSBsYXR0ZXIgcHJvdmlkaW5nIGEgYmV0dGVyIGd1YXJhbnRlZSBvZiBwcmVjaXNpb24uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluIG9yZGVyIHRvIGFjY29tbW9kYXRlIGJvdGggc2luZ2xlIGFuZCByZXBlYXRlZGx5IHJlc2NoZWR1bGVkIGFjdGlvbnMsXG4gICAgICAgIC8vIHVzZSBgc2V0SW50ZXJ2YWxgIGhlcmUgZm9yIGJvdGggY2FzZXMuIEJ5IGRlZmF1bHQsIHRoZSBpbnRlcnZhbCB3aWxsIGJlXG4gICAgICAgIC8vIGNhbmNlbGVkIGFmdGVyIGl0cyBmaXJzdCBleGVjdXRpb24sIG9yIGlmIHRoZSBhY3Rpb24gc2NoZWR1bGVzIGl0c2VsZiB0b1xuICAgICAgICAvLyBydW4gYWdhaW4gd2l0aCBhIGRpZmZlcmVudCBgZGVsYXlgIHRpbWUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHRoZSBhY3Rpb24gcmVjdXJzaXZlbHkgc2NoZWR1bGVzIGl0c2VsZiB0byBydW4gYWdhaW4gd2l0aCB0aGUgc2FtZVxuICAgICAgICAvLyBgZGVsYXlgIHRpbWUsIHRoZSBpbnRlcnZhbCBpcyBub3QgY2FuY2VsZWQsIGJ1dCBhbGxvd2VkIHRvIGxvb3AgYWdhaW4uXG4gICAgICAgIC8vIFRoZSBjaGVjayBvZiB3aGV0aGVyIHRoZSBpbnRlcnZhbCBzaG91bGQgYmUgY2FuY2VsZWQgb3Igbm90IGlzIHJ1biBldmVyeVxuICAgICAgICAvLyB0aW1lIHRoZSBpbnRlcnZhbCBpcyBleGVjdXRlZC4gVGhlIGZpcnN0IHRpbWUgYW4gYWN0aW9uIGZhaWxzIHRvXG4gICAgICAgIC8vIHJlc2NoZWR1bGUgaXRzZWxmLCB0aGUgaW50ZXJ2YWwgaXMgY2FuY2VsZWQuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuaWQgPSByb290XzEucm9vdC5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgaWQgPSBfYS5pZCwgc2NoZWR1bGVyID0gX2Euc2NoZWR1bGVyO1xuICAgICAgICAgICAgc2NoZWR1bGVyLmFjdGlvbnMucHVzaChfdGhpcyk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuZmx1c2goKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBUZXJtaW5hdGUgdGhpcyBpbnRlcnZhbCBpZiB0aGUgYWN0aW9uIGRpZG4ndCByZXNjaGVkdWxlIGl0c2VsZi5cbiAgICAgICAgICAgIC8vIERvbid0IGNhbGwgYHRoaXMudW5zdWJzY3JpYmUoKWAgaGVyZSwgYmVjYXVzZSB0aGUgYWN0aW9uIGNvdWxkIGJlXG4gICAgICAgICAgICAvLyByZXNjaGVkdWxlZCBsYXRlci4gRm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gYGBgXG4gICAgICAgICAgICAvLyBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gZG9Xb3JrKGNvdW50ZXIpIHtcbiAgICAgICAgICAgIC8vICAgLyogLi4uIEknbSBhIGJ1c3kgd29ya2VyIGJlZSAuLi4gKi9cbiAgICAgICAgICAgIC8vICAgdmFyIG9yaWdpbmFsQWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgIC8vICAgLyogd2FpdCAxMDBtcyBiZWZvcmUgcmVzY2hlZHVsaW5nIHRoaXMgYWN0aW9uIGFnYWluICovXG4gICAgICAgICAgICAvLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIG9yaWdpbmFsQWN0aW9uLnNjaGVkdWxlKGNvdW50ZXIgKyAxKTtcbiAgICAgICAgICAgIC8vICAgfSwgMTAwKTtcbiAgICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICAgICAgLy8gYGBgXG4gICAgICAgICAgICBpZiAoX3RoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlkID0gbnVsbDtcbiAgICAgICAgICAgICAgICByb290XzEucm9vdC5jbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEZ1dHVyZUFjdGlvbi5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgaWQgPSBfYS5pZCwgc2NoZWR1bGVyID0gX2Euc2NoZWR1bGVyO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICB2YXIgaW5kZXggPSBhY3Rpb25zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICAgICAgICAgIHJvb3RfMS5yb290LmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEZ1dHVyZUFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLkZ1dHVyZUFjdGlvbiA9IEZ1dHVyZUFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZ1dHVyZUFjdGlvbi5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL3NjaGVkdWxlci9GdXR1cmVBY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgUXVldWVBY3Rpb25fMSA9IHJlcXVpcmUoJy4vUXVldWVBY3Rpb24nKTtcbnZhciBGdXR1cmVBY3Rpb25fMSA9IHJlcXVpcmUoJy4vRnV0dXJlQWN0aW9uJyk7XG52YXIgUXVldWVTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXVlU2NoZWR1bGVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTsgLy8gWFhYOiB1c2UgYGFueWAgdG8gcmVtb3ZlIHR5cGUgcGFyYW0gYFRgIGZyb20gYFZpcnR1YWxUaW1lU2NoZWR1bGVyYC5cbiAgICAgICAgdGhpcy5zY2hlZHVsZWRJZCA9IG51bGw7XG4gICAgfVxuICAgIFF1ZXVlU2NoZWR1bGVyLnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgIH07XG4gICAgUXVldWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgfHwgdGhpcy5zY2hlZHVsZWRJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIC8vIFhYWDogdXNlIGBhbnlgIHRvIHJlbW92ZSB0eXBlIHBhcmFtIGBUYCBmcm9tIGBWaXJ0dWFsVGltZVNjaGVkdWxlcmAuXG4gICAgICAgIGZvciAodmFyIGFjdGlvbiA9IG51bGw7IGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKTspIHtcbiAgICAgICAgICAgIGFjdGlvbi5leGVjdXRlKCk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXVlU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh3b3JrLCBkZWxheSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiAoZGVsYXkgPD0gMCkgP1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU5vdyh3b3JrLCBzdGF0ZSkgOlxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUxhdGVyKHdvcmssIGRlbGF5LCBzdGF0ZSk7XG4gICAgfTtcbiAgICBRdWV1ZVNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVOb3cgPSBmdW5jdGlvbiAod29yaywgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBRdWV1ZUFjdGlvbl8xLlF1ZXVlQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlKTtcbiAgICB9O1xuICAgIFF1ZXVlU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZUxhdGVyID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEZ1dHVyZUFjdGlvbl8xLkZ1dHVyZUFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydHMuUXVldWVTY2hlZHVsZXIgPSBRdWV1ZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlU2NoZWR1bGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc2NoZWR1bGVyL1F1ZXVlU2NoZWR1bGVyLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgRnV0dXJlQWN0aW9uXzEgPSByZXF1aXJlKCcuL0Z1dHVyZUFjdGlvbicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBRdWV1ZUFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1ZXVlQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1ZXVlQWN0aW9uKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLl9zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLl9zY2hlZHVsZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgc2NoZWR1bGVyLmFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgc2NoZWR1bGVyLmZsdXNoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlQWN0aW9uO1xufShGdXR1cmVBY3Rpb25fMS5GdXR1cmVBY3Rpb24pKTtcbmV4cG9ydHMuUXVldWVBY3Rpb24gPSBRdWV1ZUFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlQWN0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvc2NoZWR1bGVyL1F1ZXVlQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBtYXBfMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL21hcCcpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLm1hcCA9IG1hcF8xLm1hcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9TdWJzY3JpYmVyJyk7XG4vKipcbiAqIEFwcGxpZXMgYSBnaXZlbiBgcHJvamVjdGAgZnVuY3Rpb24gdG8gZWFjaCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUsIGFuZCBlbWl0cyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBhcyBhbiBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIFtBcnJheS5wcm90b3R5cGUubWFwKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcCksXG4gKiBpdCBwYXNzZXMgZWFjaCBzb3VyY2UgdmFsdWUgdGhyb3VnaCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRvIGdldFxuICogY29ycmVzcG9uZGluZyBvdXRwdXQgdmFsdWVzLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL21hcC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBTaW1pbGFyIHRvIHRoZSB3ZWxsIGtub3duIGBBcnJheS5wcm90b3R5cGUubWFwYCBmdW5jdGlvbiwgdGhpcyBvcGVyYXRvclxuICogYXBwbGllcyBhIHByb2plY3Rpb24gdG8gZWFjaCB2YWx1ZSBhbmQgZW1pdHMgdGhhdCBwcm9qZWN0aW9uIGluIHRoZSBvdXRwdXRcbiAqIE9ic2VydmFibGUuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGV2ZXJ5IGV2ZXJ5IGNsaWNrIHRvIHRoZSBjbGllbnRYIHBvc2l0aW9uIG9mIHRoYXQgY2xpY2s8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHBvc2l0aW9ucyA9IGNsaWNrcy5tYXAoZXYgPT4gZXYuY2xpZW50WCk7XG4gKiBwb3NpdGlvbnMuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIG1hcFRvfVxuICogQHNlZSB7QGxpbmsgcGx1Y2t9XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbih2YWx1ZTogVCwgaW5kZXg6IG51bWJlcik6IFJ9IHByb2plY3QgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5XG4gKiB0byBlYWNoIGB2YWx1ZWAgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUuIFRoZSBgaW5kZXhgIHBhcmFtZXRlciBpc1xuICogdGhlIG51bWJlciBgaWAgZm9yIHRoZSBpLXRoIGVtaXNzaW9uIHRoYXQgaGFzIGhhcHBlbmVkIHNpbmNlIHRoZVxuICogc3Vic2NyaXB0aW9uLCBzdGFydGluZyBmcm9tIHRoZSBudW1iZXIgYDBgLlxuICogQHBhcmFtIHthbnl9IFt0aGlzQXJnXSBBbiBvcHRpb25hbCBhcmd1bWVudCB0byBkZWZpbmUgd2hhdCBgdGhpc2AgaXMgaW4gdGhlXG4gKiBgcHJvamVjdGAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFI+fSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgdHJhbnNmb3JtZWQgYnkgdGhlIGdpdmVuIGBwcm9qZWN0YCBmdW5jdGlvbi5cbiAqIEBtZXRob2QgbWFwXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBpcyBub3QgYSBmdW5jdGlvbi4gQXJlIHlvdSBsb29raW5nIGZvciBgbWFwVG8oKWA/Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpKTtcbn1cbmV4cG9ydHMubWFwID0gbWFwO1xudmFyIE1hcE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBPcGVyYXRvcihwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgfVxuICAgIE1hcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZyB8fCB0aGlzO1xuICAgIH1cbiAgICAvLyBOT1RFOiBUaGlzIGxvb2tzIHVub3B0aW1pemVkLCBidXQgaXQncyBhY3R1YWxseSBwdXJwb3NlZnVsbHkgTk9UXG4gICAgLy8gdXNpbmcgdHJ5L2NhdGNoIG9wdGltaXphdGlvbnMuXG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vcGVyYXRvci9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHBhaXJ3aXNlXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci9wYWlyd2lzZScpO1xuT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUucHJvdG90eXBlLnBhaXJ3aXNlID0gcGFpcndpc2VfMS5wYWlyd2lzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhaXJ3aXNlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29wZXJhdG9yL3BhaXJ3aXNlLmpzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vU3Vic2NyaWJlcicpO1xuLyoqXG4gKiBHcm91cHMgcGFpcnMgb2YgY29uc2VjdXRpdmUgZW1pc3Npb25zIHRvZ2V0aGVyIGFuZCBlbWl0cyB0aGVtIGFzIGFuIGFycmF5IG9mXG4gKiB0d28gdmFsdWVzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5QdXRzIHRoZSBjdXJyZW50IHZhbHVlIGFuZCBwcmV2aW91cyB2YWx1ZSB0b2dldGhlciBhc1xuICogYW4gYXJyYXksIGFuZCBlbWl0cyB0aGF0Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3BhaXJ3aXNlLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIFRoZSBOdGggZW1pc3Npb24gZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgd2lsbCBjYXVzZSB0aGUgb3V0cHV0IE9ic2VydmFibGVcbiAqIHRvIGVtaXQgYW4gYXJyYXkgWyhOLTEpdGgsIE50aF0gb2YgdGhlIHByZXZpb3VzIGFuZCB0aGUgY3VycmVudCB2YWx1ZSwgYXMgYVxuICogcGFpci4gRm9yIHRoaXMgcmVhc29uLCBgcGFpcndpc2VgIGVtaXRzIG9uIHRoZSBzZWNvbmQgYW5kIHN1YnNlcXVlbnRcbiAqIGVtaXNzaW9ucyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgYnV0IG5vdCBvbiB0aGUgZmlyc3QgZW1pc3Npb24sIGJlY2F1c2VcbiAqIHRoZXJlIGlzIG5vIHByZXZpb3VzIHZhbHVlIGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5PbiBldmVyeSBjbGljayAoc3RhcnRpbmcgZnJvbSB0aGUgc2Vjb25kKSwgZW1pdCB0aGUgcmVsYXRpdmUgZGlzdGFuY2UgdG8gdGhlIHByZXZpb3VzIGNsaWNrPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBwYWlycyA9IGNsaWNrcy5wYWlyd2lzZSgpO1xuICogdmFyIGRpc3RhbmNlID0gcGFpcnMubWFwKHBhaXIgPT4ge1xuICogICB2YXIgeDAgPSBwYWlyWzBdLmNsaWVudFg7XG4gKiAgIHZhciB5MCA9IHBhaXJbMF0uY2xpZW50WTtcbiAqICAgdmFyIHgxID0gcGFpclsxXS5jbGllbnRYO1xuICogICB2YXIgeTEgPSBwYWlyWzFdLmNsaWVudFk7XG4gKiAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeDAgLSB4MSwgMikgKyBNYXRoLnBvdyh5MCAtIHkxLCAyKSk7XG4gKiB9KTtcbiAqIGRpc3RhbmNlLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBidWZmZXJ9XG4gKiBAc2VlIHtAbGluayBidWZmZXJDb3VudH1cbiAqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPEFycmF5PFQ+Pn0gQW4gT2JzZXJ2YWJsZSBvZiBwYWlycyAoYXMgYXJyYXlzKSBvZlxuICogY29uc2VjdXRpdmUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBwYWlyd2lzZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gcGFpcndpc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlmdChuZXcgUGFpcndpc2VPcGVyYXRvcigpKTtcbn1cbmV4cG9ydHMucGFpcndpc2UgPSBwYWlyd2lzZTtcbnZhciBQYWlyd2lzZU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYWlyd2lzZU9wZXJhdG9yKCkge1xuICAgIH1cbiAgICBQYWlyd2lzZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFBhaXJ3aXNlU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUGFpcndpc2VPcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIFBhaXJ3aXNlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBhaXJ3aXNlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYWlyd2lzZVN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmhhc1ByZXYgPSBmYWxzZTtcbiAgICB9XG4gICAgUGFpcndpc2VTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcmV2KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoW3RoaXMucHJldiwgdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUHJldiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ID0gdmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gUGFpcndpc2VTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFpcndpc2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9vcGVyYXRvci9wYWlyd2lzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgdGhyb3R0bGVUaW1lXzEgPSByZXF1aXJlKCcuLi8uLi9vcGVyYXRvci90aHJvdHRsZVRpbWUnKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS50aHJvdHRsZVRpbWUgPSB0aHJvdHRsZVRpbWVfMS50aHJvdHRsZVRpbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHJvdHRsZVRpbWUuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbnZhciBhc3luY18xID0gcmVxdWlyZSgnLi4vc2NoZWR1bGVyL2FzeW5jJyk7XG4vKipcbiAqIEVtaXRzIGEgdmFsdWUgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUsIHRoZW4gaWdub3JlcyBzdWJzZXF1ZW50IHNvdXJjZVxuICogdmFsdWVzIGZvciBgZHVyYXRpb25gIG1pbGxpc2Vjb25kcywgdGhlbiByZXBlYXRzIHRoaXMgcHJvY2Vzcy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+TGV0cyBhIHZhbHVlIHBhc3MsIHRoZW4gaWdub3JlcyBzb3VyY2UgdmFsdWVzIGZvciB0aGVcbiAqIG5leHQgYGR1cmF0aW9uYCBtaWxsaXNlY29uZHMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvdGhyb3R0bGVUaW1lLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIGB0aHJvdHRsZVRpbWVgIGVtaXRzIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB2YWx1ZXMgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlXG4gKiB3aGVuIGl0cyBpbnRlcm5hbCB0aW1lciBpcyBkaXNhYmxlZCwgYW5kIGlnbm9yZXMgc291cmNlIHZhbHVlcyB3aGVuIHRoZSB0aW1lclxuICogaXMgZW5hYmxlZC4gSW5pdGlhbGx5LCB0aGUgdGltZXIgaXMgZGlzYWJsZWQuIEFzIHNvb24gYXMgdGhlIGZpcnN0IHNvdXJjZVxuICogdmFsdWUgYXJyaXZlcywgaXQgaXMgZm9yd2FyZGVkIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSwgYW5kIHRoZW4gdGhlIHRpbWVyXG4gKiBpcyBlbmFibGVkLiBBZnRlciBgZHVyYXRpb25gIG1pbGxpc2Vjb25kcyAob3IgdGhlIHRpbWUgdW5pdCBkZXRlcm1pbmVkXG4gKiBpbnRlcm5hbGx5IGJ5IHRoZSBvcHRpb25hbCBgc2NoZWR1bGVyYCkgaGFzIHBhc3NlZCwgdGhlIHRpbWVyIGlzIGRpc2FibGVkLFxuICogYW5kIHRoaXMgcHJvY2VzcyByZXBlYXRzIGZvciB0aGUgbmV4dCBzb3VyY2UgdmFsdWUuIE9wdGlvbmFsbHkgdGFrZXMgYVxuICoge0BsaW5rIFNjaGVkdWxlcn0gZm9yIG1hbmFnaW5nIHRpbWVycy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IGNsaWNrcyBhdCBhIHJhdGUgb2YgYXQgbW9zdCBvbmUgY2xpY2sgcGVyIHNlY29uZDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLnRocm90dGxlVGltZSgxMDAwKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYXVkaXRUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVsYXl9XG4gKiBAc2VlIHtAbGluayBzYW1wbGVUaW1lfVxuICogQHNlZSB7QGxpbmsgdGhyb3R0bGV9XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRpbWUgdG8gd2FpdCBiZWZvcmUgZW1pdHRpbmcgYW5vdGhlciB2YWx1ZSBhZnRlclxuICogZW1pdHRpbmcgdGhlIGxhc3QgdmFsdWUsIG1lYXN1cmVkIGluIG1pbGxpc2Vjb25kcyBvciB0aGUgdGltZSB1bml0IGRldGVybWluZWRcbiAqIGludGVybmFsbHkgYnkgdGhlIG9wdGlvbmFsIGBzY2hlZHVsZXJgLlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9YXN5bmNdIFRoZSB7QGxpbmsgU2NoZWR1bGVyfSB0byB1c2UgZm9yXG4gKiBtYW5hZ2luZyB0aGUgdGltZXJzIHRoYXQgaGFuZGxlIHRoZSBzYW1wbGluZy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59IEFuIE9ic2VydmFibGUgdGhhdCBwZXJmb3JtcyB0aGUgdGhyb3R0bGUgb3BlcmF0aW9uIHRvXG4gKiBsaW1pdCB0aGUgcmF0ZSBvZiBlbWlzc2lvbnMgZnJvbSB0aGUgc291cmNlLlxuICogQG1ldGhvZCB0aHJvdHRsZVRpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlVGltZShkdXJhdGlvbiwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBUaHJvdHRsZVRpbWVPcGVyYXRvcihkdXJhdGlvbiwgc2NoZWR1bGVyKSk7XG59XG5leHBvcnRzLnRocm90dGxlVGltZSA9IHRocm90dGxlVGltZTtcbnZhciBUaHJvdHRsZVRpbWVPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGhyb3R0bGVUaW1lT3BlcmF0b3IoZHVyYXRpb24sIHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICBUaHJvdHRsZVRpbWVPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZHVyYXRpb24sIHRoaXMuc2NoZWR1bGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGhyb3R0bGVUaW1lT3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGhyb3R0bGVUaW1lU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgVGhyb3R0bGVUaW1lU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRocm90dGxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy50aHJvdHRsZWQgPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZHVyYXRpb24sIHsgc3Vic2NyaWJlcjogdGhpcyB9KSk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaHJvdHRsZVRpbWVTdWJzY3JpYmVyLnByb3RvdHlwZS5jbGVhclRocm90dGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhyb3R0bGVkID0gdGhpcy50aHJvdHRsZWQ7XG4gICAgICAgIGlmICh0aHJvdHRsZWQpIHtcbiAgICAgICAgICAgIHRocm90dGxlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhyb3R0bGVkKTtcbiAgICAgICAgICAgIHRoaXMudGhyb3R0bGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlVGltZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoYXJnKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBhcmcuc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLmNsZWFyVGhyb3R0bGUoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm90dGxlVGltZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL3Rocm90dGxlVGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHN0YXJ0V2l0aF8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3Ivc3RhcnRXaXRoJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3RhcnRXaXRoID0gc3RhcnRXaXRoXzEuc3RhcnRXaXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhcnRXaXRoLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvYWRkL29wZXJhdG9yL3N0YXJ0V2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXJyYXlPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9vYnNlcnZhYmxlL0FycmF5T2JzZXJ2YWJsZScpO1xudmFyIFNjYWxhck9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL29ic2VydmFibGUvU2NhbGFyT2JzZXJ2YWJsZScpO1xudmFyIEVtcHR5T2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vb2JzZXJ2YWJsZS9FbXB0eU9ic2VydmFibGUnKTtcbnZhciBjb25jYXRfMSA9IHJlcXVpcmUoJy4vY29uY2F0Jyk7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4uL3V0aWwvaXNTY2hlZHVsZXInKTtcbi8qKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGluIGEgc3BlY2lmaWVkIEl0ZXJhYmxlIGJlZm9yZSBpdCBiZWdpbnMgdG8gZW1pdCBpdGVtcyBlbWl0dGVkIGJ5IHRoZVxuICogc291cmNlIE9ic2VydmFibGUuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9zdGFydFdpdGgucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtWYWx1ZXN9IGFuIEl0ZXJhYmxlIHRoYXQgY29udGFpbnMgdGhlIGl0ZW1zIHlvdSB3YW50IHRoZSBtb2RpZmllZCBPYnNlcnZhYmxlIHRvIGVtaXQgZmlyc3QuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIGl0ZW1zIGluIHRoZSBzcGVjaWZpZWQgSXRlcmFibGUgYW5kIHRoZW4gZW1pdHMgdGhlIGl0ZW1zXG4gKiBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2Qgc3RhcnRXaXRoXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBzdGFydFdpdGgoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJyYXlbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICAgIGFycmF5LnBvcCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2NoZWR1bGVyID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjb25jYXRfMS5jb25jYXRTdGF0aWMobmV3IFNjYWxhck9ic2VydmFibGVfMS5TY2FsYXJPYnNlcnZhYmxlKGFycmF5WzBdLCBzY2hlZHVsZXIpLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGVuID4gMSkge1xuICAgICAgICByZXR1cm4gY29uY2F0XzEuY29uY2F0U3RhdGljKG5ldyBBcnJheU9ic2VydmFibGVfMS5BcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlciksIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbmNhdF8xLmNvbmNhdFN0YXRpYyhuZXcgRW1wdHlPYnNlcnZhYmxlXzEuRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlciksIHRoaXMpO1xuICAgIH1cbn1cbmV4cG9ydHMuc3RhcnRXaXRoID0gc3RhcnRXaXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhcnRXaXRoLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3Ivc3RhcnRXaXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL09ic2VydmFibGUnKTtcbnZhciBTY2FsYXJPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuL1NjYWxhck9ic2VydmFibGUnKTtcbnZhciBFbXB0eU9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vRW1wdHlPYnNlcnZhYmxlJyk7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4uL3V0aWwvaXNTY2hlZHVsZXInKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG52YXIgQXJyYXlPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlPYnNlcnZhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFycmF5T2JzZXJ2YWJsZShhcnJheSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBpZiAoIXNjaGVkdWxlciAmJiBhcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheU9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGFycmF5LCBzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBzb21lIHZhbHVlcyB5b3Ugc3BlY2lmeSBhcyBhcmd1bWVudHMsXG4gICAgICogaW1tZWRpYXRlbHkgb25lIGFmdGVyIHRoZSBvdGhlciwgYW5kIHRoZW4gZW1pdHMgYSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gICAgICpcbiAgICAgKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+RW1pdHMgdGhlIGFyZ3VtZW50cyB5b3UgcHJvdmlkZSwgdGhlbiBjb21wbGV0ZXMuXG4gICAgICogPC9zcGFuPlxuICAgICAqXG4gICAgICogPGltZyBzcmM9XCIuL2ltZy9vZi5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgKlxuICAgICAqIFRoaXMgc3RhdGljIG9wZXJhdG9yIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IG9ubHlcbiAgICAgKiBlbWl0cyB0aGUgYXJndW1lbnRzIGdpdmVuLCBhbmQgdGhlIGNvbXBsZXRlIG5vdGlmaWNhdGlvbiB0aGVyZWFmdGVyLiBJdCBjYW5cbiAgICAgKiBiZSB1c2VkIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlciBPYnNlcnZhYmxlcywgc3VjaCBhcyB3aXRoIHtAbGluayBjb25jYXR9LlxuICAgICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgYSBgbnVsbGAgU2NoZWR1bGVyLCB3aGljaCBtZWFucyB0aGUgYG5leHRgXG4gICAgICogbm90aWZpY2F0aW9ucyBhcmUgc2VudCBzeW5jaHJvbm91c2x5LCBhbHRob3VnaCB3aXRoIGEgZGlmZmVyZW50IFNjaGVkdWxlclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIHRvIGRldGVybWluZSB3aGVuIHRob3NlIG5vdGlmaWNhdGlvbnMgd2lsbCBiZSBkZWxpdmVyZWQuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IDEwLCAyMCwgMzAsIHRoZW4gJ2EnLCAnYicsICdjJywgdGhlbiBzdGFydCB0aWNraW5nIGV2ZXJ5IHNlY29uZC48L2NhcHRpb24+XG4gICAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLm9mKDEwLCAyMCwgMzApO1xuICAgICAqIHZhciBsZXR0ZXJzID0gUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKTtcbiAgICAgKiB2YXIgaW50ZXJ2YWwgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgICAqIHZhciByZXN1bHQgPSBudW1iZXJzLmNvbmNhdChsZXR0ZXJzKS5jb25jYXQoaW50ZXJ2YWwpO1xuICAgICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBjcmVhdGV9XG4gICAgICogQHNlZSB7QGxpbmsgZW1wdHl9XG4gICAgICogQHNlZSB7QGxpbmsgbmV2ZXJ9XG4gICAgICogQHNlZSB7QGxpbmsgdGhyb3d9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLlR9IHZhbHVlcyBBcmd1bWVudHMgdGhhdCByZXByZXNlbnQgYG5leHRgIHZhbHVlcyB0byBiZSBlbWl0dGVkLlxuICAgICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBBIHtAbGluayBTY2hlZHVsZXJ9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgICAqIHRoZSBlbWlzc2lvbnMgb2YgdGhlIGBuZXh0YCBub3RpZmljYXRpb25zLlxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGU8VD59IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBlYWNoIGdpdmVuIGlucHV0IHZhbHVlLlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIG9mXG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBBcnJheU9ic2VydmFibGUub2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJyYXlbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICAgICAgICBhcnJheS5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTY2FsYXJPYnNlcnZhYmxlXzEuU2NhbGFyT2JzZXJ2YWJsZShhcnJheVswXSwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW1wdHlPYnNlcnZhYmxlXzEuRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFycmF5T2JzZXJ2YWJsZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYXJyYXkgPSBzdGF0ZS5hcnJheSwgaW5kZXggPSBzdGF0ZS5pbmRleCwgY291bnQgPSBzdGF0ZS5jb3VudCwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXI7XG4gICAgICAgIGlmIChpbmRleCA+PSBjb3VudCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpbmRleF0pO1xuICAgICAgICBpZiAoc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbiAgICB9O1xuICAgIEFycmF5T2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgICAgIHZhciBjb3VudCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEFycmF5T2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGFycmF5OiBhcnJheSwgaW5kZXg6IGluZGV4LCBjb3VudDogY291bnQsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiAhc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFycmF5T2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuQXJyYXlPYnNlcnZhYmxlID0gQXJyYXlPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlPYnNlcnZhYmxlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbnZhciBTY2FsYXJPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2NhbGFyT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTY2FsYXJPYnNlcnZhYmxlKHZhbHVlLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTY2FsYXJPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2NhbGFyT2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKTtcbiAgICB9O1xuICAgIFNjYWxhck9ic2VydmFibGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGRvbmUgPSBzdGF0ZS5kb25lLCB2YWx1ZSA9IHN0YXRlLnZhbHVlLCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbiAgICB9O1xuICAgIFNjYWxhck9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoU2NhbGFyT2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLCB2YWx1ZTogdmFsdWUsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjYWxhck9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLlNjYWxhck9ic2VydmFibGUgPSBTY2FsYXJPYnNlcnZhYmxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NhbGFyT2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvU2NhbGFyT2JzZXJ2YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xudmFyIEVtcHR5T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVtcHR5T2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbm8gaXRlbXMgdG8gdGhlIE9ic2VydmVyIGFuZCBpbW1lZGlhdGVseVxuICAgICAqIGVtaXRzIGEgY29tcGxldGUgbm90aWZpY2F0aW9uLlxuICAgICAqXG4gICAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkp1c3QgZW1pdHMgJ2NvbXBsZXRlJywgYW5kIG5vdGhpbmcgZWxzZS5cbiAgICAgKiA8L3NwYW4+XG4gICAgICpcbiAgICAgKiA8aW1nIHNyYz1cIi4vaW1nL2VtcHR5LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAqXG4gICAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seVxuICAgICAqIGVtaXRzIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24uIEl0IGNhbiBiZSB1c2VkIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlclxuICAgICAqIE9ic2VydmFibGVzLCBzdWNoIGFzIGluIGEge0BsaW5rIG1lcmdlTWFwfS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgdGhlIG51bWJlciA3LCB0aGVuIGNvbXBsZXRlLjwvY2FwdGlvbj5cbiAgICAgKiB2YXIgcmVzdWx0ID0gUnguT2JzZXJ2YWJsZS5lbXB0eSgpLnN0YXJ0V2l0aCg3KTtcbiAgICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGFuZCBmbGF0dGVuIG9ubHkgb2RkIG51bWJlcnMgdG8gdGhlIHNlcXVlbmNlICdhJywgJ2InLCAnYyc8L2NhcHRpb24+XG4gICAgICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICAgKiB2YXIgcmVzdWx0ID0gaW50ZXJ2YWwubWVyZ2VNYXAoeCA9PlxuICAgICAqICAgeCAlIDIgPT09IDEgPyBSeC5PYnNlcnZhYmxlLm9mKCdhJywgJ2InLCAnYycpIDogUnguT2JzZXJ2YWJsZS5lbXB0eSgpXG4gICAgICogKTtcbiAgICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmsgY3JlYXRlfVxuICAgICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgICAqIEBzZWUge0BsaW5rIG9mfVxuICAgICAqIEBzZWUge0BsaW5rIHRocm93fVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIEEge0BsaW5rIFNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAgICogdGhlIGVtaXNzaW9uIG9mIHRoZSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gXCJlbXB0eVwiIE9ic2VydmFibGU6IGVtaXRzIG9ubHkgdGhlIGNvbXBsZXRlXG4gICAgICogbm90aWZpY2F0aW9uLlxuICAgICAqIEBzdGF0aWMgdHJ1ZVxuICAgICAqIEBuYW1lIGVtcHR5XG4gICAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICAgKi9cbiAgICBFbXB0eU9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZShzY2hlZHVsZXIpO1xuICAgIH07XG4gICAgRW1wdHlPYnNlcnZhYmxlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IGFyZy5zdWJzY3JpYmVyO1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBFbXB0eU9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoRW1wdHlPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7IHN1YnNjcmliZXI6IHN1YnNjcmliZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFbXB0eU9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkVtcHR5T2JzZXJ2YWJsZSA9IEVtcHR5T2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVtcHR5T2JzZXJ2YWJsZS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29ic2VydmFibGUvRW1wdHlPYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zY2hlZHVsZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNTY2hlZHVsZXIgPSBpc1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzU2NoZWR1bGVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc1NjaGVkdWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoJy4uL3V0aWwvaXNTY2hlZHVsZXInKTtcbnZhciBBcnJheU9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlJyk7XG52YXIgbWVyZ2VBbGxfMSA9IHJlcXVpcmUoJy4vbWVyZ2VBbGwnKTtcbi8qKlxuICogQ3JlYXRlcyBhbiBvdXRwdXQgT2JzZXJ2YWJsZSB3aGljaCBzZXF1ZW50aWFsbHkgZW1pdHMgYWxsIHZhbHVlcyBmcm9tIGV2ZXJ5XG4gKiBnaXZlbiBpbnB1dCBPYnNlcnZhYmxlIGFmdGVyIHRoZSBjdXJyZW50IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkNvbmNhdGVuYXRlcyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieVxuICogc2VxdWVudGlhbGx5IGVtaXR0aW5nIHRoZWlyIHZhbHVlcywgb25lIE9ic2VydmFibGUgYWZ0ZXIgdGhlIG90aGVyLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2NvbmNhdC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBKb2lucyB0aGlzIE9ic2VydmFibGUgd2l0aCBtdWx0aXBsZSBvdGhlciBPYnNlcnZhYmxlcyBieSBzdWJzY3JpYmluZyB0byB0aGVtXG4gKiBvbmUgYXQgYSB0aW1lLCBzdGFydGluZyB3aXRoIHRoZSBzb3VyY2UsIGFuZCBtZXJnaW5nIHRoZWlyIHJlc3VsdHMgaW50byB0aGVcbiAqIG91dHB1dCBPYnNlcnZhYmxlLiBXaWxsIHdhaXQgZm9yIGVhY2ggT2JzZXJ2YWJsZSB0byBjb21wbGV0ZSBiZWZvcmUgbW92aW5nXG4gKiBvbiB0byB0aGUgbmV4dC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db25jYXRlbmF0ZSBhIHRpbWVyIGNvdW50aW5nIGZyb20gMCB0byAzIHdpdGggYSBzeW5jaHJvbm91cyBzZXF1ZW5jZSBmcm9tIDEgdG8gMTA8L2NhcHRpb24+XG4gKiB2YXIgdGltZXIgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApLnRha2UoNCk7XG4gKiB2YXIgc2VxdWVuY2UgPSBSeC5PYnNlcnZhYmxlLnJhbmdlKDEsIDEwKTtcbiAqIHZhciByZXN1bHQgPSB0aW1lci5jb25jYXQoc2VxdWVuY2UpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Db25jYXRlbmF0ZSAzIE9ic2VydmFibGVzPC9jYXB0aW9uPlxuICogdmFyIHRpbWVyMSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkudGFrZSgxMCk7XG4gKiB2YXIgdGltZXIyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgyMDAwKS50YWtlKDYpO1xuICogdmFyIHRpbWVyMyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoNTAwKS50YWtlKDEwKTtcbiAqIHZhciByZXN1bHQgPSB0aW1lcjEuY29uY2F0KHRpbWVyMiwgdGltZXIzKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0QWxsfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwfVxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBvdGhlciBBbiBpbnB1dCBPYnNlcnZhYmxlIHRvIGNvbmNhdGVuYXRlIGFmdGVyIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIE1vcmUgdGhhbiBvbmUgaW5wdXQgT2JzZXJ2YWJsZXMgbWF5IGJlIGdpdmVuIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9bnVsbF0gQW4gb3B0aW9uYWwgU2NoZWR1bGVyIHRvIHNjaGVkdWxlIGVhY2hcbiAqIE9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG9uLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQWxsIHZhbHVlcyBvZiBlYWNoIHBhc3NlZCBPYnNlcnZhYmxlIG1lcmdlZCBpbnRvIGFcbiAqIHNpbmdsZSBPYnNlcnZhYmxlLCBpbiBvcmRlciwgaW4gc2VyaWFsIGZhc2hpb24uXG4gKiBAbWV0aG9kIGNvbmNhdFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29uY2F0U3RhdGljLmFwcGx5KHZvaWQgMCwgW3RoaXNdLmNvbmNhdChvYnNlcnZhYmxlcykpO1xufVxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuLyoqXG4gKiBDcmVhdGVzIGFuIG91dHB1dCBPYnNlcnZhYmxlIHdoaWNoIHNlcXVlbnRpYWxseSBlbWl0cyBhbGwgdmFsdWVzIGZyb20gZXZlcnlcbiAqIGdpdmVuIGlucHV0IE9ic2VydmFibGUgYWZ0ZXIgdGhlIGN1cnJlbnQgT2JzZXJ2YWJsZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29uY2F0ZW5hdGVzIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyIGJ5XG4gKiBzZXF1ZW50aWFsbHkgZW1pdHRpbmcgdGhlaXIgdmFsdWVzLCBvbmUgT2JzZXJ2YWJsZSBhZnRlciB0aGUgb3RoZXIuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvY29uY2F0LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIEpvaW5zIG11bHRpcGxlIE9ic2VydmFibGVzIHRvZ2V0aGVyIGJ5IHN1YnNjcmliaW5nIHRvIHRoZW0gb25lIGF0IGEgdGltZSBhbmRcbiAqIG1lcmdpbmcgdGhlaXIgcmVzdWx0cyBpbnRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gV2lsbCB3YWl0IGZvciBlYWNoXG4gKiBPYnNlcnZhYmxlIHRvIGNvbXBsZXRlIGJlZm9yZSBtb3Zpbmcgb24gdG8gdGhlIG5leHQuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Q29uY2F0ZW5hdGUgYSB0aW1lciBjb3VudGluZyBmcm9tIDAgdG8gMyB3aXRoIGEgc3luY2hyb25vdXMgc2VxdWVuY2UgZnJvbSAxIHRvIDEwPC9jYXB0aW9uPlxuICogdmFyIHRpbWVyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDQpO1xuICogdmFyIHNlcXVlbmNlID0gUnguT2JzZXJ2YWJsZS5yYW5nZSgxLCAxMCk7XG4gKiB2YXIgcmVzdWx0ID0gUnguT2JzZXJ2YWJsZS5jb25jYXQodGltZXIsIHNlcXVlbmNlKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Q29uY2F0ZW5hdGUgMyBPYnNlcnZhYmxlczwvY2FwdGlvbj5cbiAqIHZhciB0aW1lcjEgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApLnRha2UoMTApO1xuICogdmFyIHRpbWVyMiA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMjAwMCkudGFrZSg2KTtcbiAqIHZhciB0aW1lcjMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDUwMCkudGFrZSgxMCk7XG4gKiB2YXIgcmVzdWx0ID0gUnguT2JzZXJ2YWJsZS5jb25jYXQodGltZXIxLCB0aW1lcjIsIHRpbWVyMyk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gaW5wdXQxIEFuIGlucHV0IE9ic2VydmFibGUgdG8gY29uY2F0ZW5hdGUgd2l0aCBvdGhlcnMuXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IGlucHV0MiBBbiBpbnB1dCBPYnNlcnZhYmxlIHRvIGNvbmNhdGVuYXRlIHdpdGggb3RoZXJzLlxuICogTW9yZSB0aGFuIG9uZSBpbnB1dCBPYnNlcnZhYmxlcyBtYXkgYmUgZ2l2ZW4gYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1udWxsXSBBbiBvcHRpb25hbCBTY2hlZHVsZXIgdG8gc2NoZWR1bGUgZWFjaFxuICogT2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gb24uXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbGwgdmFsdWVzIG9mIGVhY2ggcGFzc2VkIE9ic2VydmFibGUgbWVyZ2VkIGludG8gYVxuICogc2luZ2xlIE9ic2VydmFibGUsIGluIG9yZGVyLCBpbiBzZXJpYWwgZmFzaGlvbi5cbiAqIEBzdGF0aWMgdHJ1ZVxuICogQG5hbWUgY29uY2F0XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBjb25jYXRTdGF0aWMoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2kgLSAwXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBudWxsO1xuICAgIHZhciBhcmdzID0gb2JzZXJ2YWJsZXM7XG4gICAgaWYgKGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIoYXJnc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXJncy5wb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGVfMS5BcnJheU9ic2VydmFibGUob2JzZXJ2YWJsZXMsIHNjaGVkdWxlcikubGlmdChuZXcgbWVyZ2VBbGxfMS5NZXJnZUFsbE9wZXJhdG9yKDEpKTtcbn1cbmV4cG9ydHMuY29uY2F0U3RhdGljID0gY29uY2F0U3RhdGljO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uY2F0LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3IvY29uY2F0LmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIE91dGVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vT3V0ZXJTdWJzY3JpYmVyJyk7XG52YXIgc3Vic2NyaWJlVG9SZXN1bHRfMSA9IHJlcXVpcmUoJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnKTtcbi8qKlxuICogQ29udmVydHMgYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZSBpbnRvIGEgZmlyc3Qtb3JkZXIgT2JzZXJ2YWJsZSB3aGljaFxuICogY29uY3VycmVudGx5IGRlbGl2ZXJzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgZW1pdHRlZCBvbiB0aGUgaW5uZXIgT2JzZXJ2YWJsZXMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkZsYXR0ZW5zIGFuIE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvbWVyZ2VBbGwucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYG1lcmdlQWxsYCBzdWJzY3JpYmVzIHRvIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBPYnNlcnZhYmxlcywgYWxzbyBrbm93biBhc1xuICogYSBoaWdoZXItb3JkZXIgT2JzZXJ2YWJsZS4gRWFjaCB0aW1lIGl0IG9ic2VydmVzIG9uZSBvZiB0aGVzZSBlbWl0dGVkIGlubmVyXG4gKiBPYnNlcnZhYmxlcywgaXQgc3Vic2NyaWJlcyB0byB0aGF0IGFuZCBkZWxpdmVycyBhbGwgdGhlIHZhbHVlcyBmcm9tIHRoZVxuICogaW5uZXIgT2JzZXJ2YWJsZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBvbmx5XG4gKiBjb21wbGV0ZXMgb25jZSBhbGwgaW5uZXIgT2JzZXJ2YWJsZXMgaGF2ZSBjb21wbGV0ZWQuIEFueSBlcnJvciBkZWxpdmVyZWQgYnlcbiAqIGEgaW5uZXIgT2JzZXJ2YWJsZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlNwYXduIGEgbmV3IGludGVydmFsIE9ic2VydmFibGUgZm9yIGVhY2ggY2xpY2sgZXZlbnQsIGFuZCBibGVuZCB0aGVpciBvdXRwdXRzIGFzIG9uZSBPYnNlcnZhYmxlPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBoaWdoZXJPcmRlciA9IGNsaWNrcy5tYXAoKGV2KSA9PiBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApKTtcbiAqIHZhciBmaXJzdE9yZGVyID0gaGlnaGVyT3JkZXIubWVyZ2VBbGwoKTtcbiAqIGZpcnN0T3JkZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkNvdW50IGZyb20gMCB0byA5IGV2ZXJ5IHNlY29uZCBmb3IgZWFjaCBjbGljaywgYnV0IG9ubHkgYWxsb3cgMiBjb25jdXJyZW50IHRpbWVyczwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgaGlnaGVyT3JkZXIgPSBjbGlja3MubWFwKChldikgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS50YWtlKDEwKSk7XG4gKiB2YXIgZmlyc3RPcmRlciA9IGhpZ2hlck9yZGVyLm1lcmdlQWxsKDIpO1xuICogZmlyc3RPcmRlci5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29tYmluZUFsbH1cbiAqIEBzZWUge0BsaW5rIGNvbmNhdEFsbH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3R9XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXBUb31cbiAqIEBzZWUge0BsaW5rIG1lcmdlU2Nhbn1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaH1cbiAqIEBzZWUge0BsaW5rIHppcEFsbH1cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvbmN1cnJlbnQ9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXSBNYXhpbXVtIG51bWJlciBvZiBpbm5lclxuICogT2JzZXJ2YWJsZXMgYmVpbmcgc3Vic2NyaWJlZCB0byBjb25jdXJyZW50bHkuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdmFsdWVzIGNvbWluZyBmcm9tIGFsbCB0aGVcbiAqIGlubmVyIE9ic2VydmFibGVzIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBtZXJnZUFsbFxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gbWVyZ2VBbGwoY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHsgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTsgfVxuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IE1lcmdlQWxsT3BlcmF0b3IoY29uY3VycmVudCkpO1xufVxuZXhwb3J0cy5tZXJnZUFsbCA9IG1lcmdlQWxsO1xudmFyIE1lcmdlQWxsT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lcmdlQWxsT3BlcmF0b3IoY29uY3VycmVudCkge1xuICAgICAgICB0aGlzLmNvbmN1cnJlbnQgPSBjb25jdXJyZW50O1xuICAgIH1cbiAgICBNZXJnZUFsbE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKG9ic2VydmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBNZXJnZUFsbFN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMuY29uY3VycmVudCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1lcmdlQWxsT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5NZXJnZUFsbE9wZXJhdG9yID0gTWVyZ2VBbGxPcGVyYXRvcjtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgTWVyZ2VBbGxTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWVyZ2VBbGxTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1lcmdlQWxsU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29uY3VycmVudCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuY29uY3VycmVudCA9IGNvbmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB9XG4gICAgTWVyZ2VBbGxTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA8IHRoaXMuY29uY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUrKztcbiAgICAgICAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgb2JzZXJ2YWJsZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaChvYnNlcnZhYmxlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWVyZ2VBbGxTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuYnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZXJnZUFsbFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5yZW1vdmUoaW5uZXJTdWIpO1xuICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQoYnVmZmVyLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZXJnZUFsbFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5NZXJnZUFsbFN1YnNjcmliZXIgPSBNZXJnZUFsbFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZUFsbC5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL29wZXJhdG9yL21lcmdlQWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4vU3Vic2NyaWJlcicpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBPdXRlclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPdXRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3V0ZXJTdWJzY3JpYmVyKCkge1xuICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5PdXRlclN1YnNjcmliZXIgPSBPdXRlclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PdXRlclN1YnNjcmliZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9PdXRlclN1YnNjcmliZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4vcm9vdCcpO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xudmFyIGlzUHJvbWlzZV8xID0gcmVxdWlyZSgnLi9pc1Byb21pc2UnKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi9PYnNlcnZhYmxlJyk7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoJy4uL3N5bWJvbC9pdGVyYXRvcicpO1xudmFyIElubmVyU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi4vSW5uZXJTdWJzY3JpYmVyJyk7XG52YXIgc3ltYm9sX29ic2VydmFibGVfMSA9IHJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5mdW5jdGlvbiBzdWJzY3JpYmVUb1Jlc3VsdChvdXRlclN1YnNjcmliZXIsIHJlc3VsdCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IG5ldyBJbm5lclN1YnNjcmliZXJfMS5Jbm5lclN1YnNjcmliZXIob3V0ZXJTdWJzY3JpYmVyLCBvdXRlclZhbHVlLCBvdXRlckluZGV4KTtcbiAgICBpZiAoZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5faXNTY2FsYXIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShkZXN0aW5hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQXJyYXlfMS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW4gJiYgIWRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkOyBpKyspIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQocmVzdWx0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZV8xLmlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbi5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGRlc3RpbmF0aW9uLmVycm9yKGVycik7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAvLyBFc2NhcGluZyB0aGUgUHJvbWlzZSB0cmFwOiBnbG9iYWxseSB0aHJvdyB1bmhhbmRsZWQgZXJyb3JzXG4gICAgICAgICAgICByb290XzEucm9vdC5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdFtpdGVyYXRvcl8xLiQkaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSByZXN1bHQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9hW19pXTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQoaXRlbSk7XG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlc3RpbmF0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRbc3ltYm9sX29ic2VydmFibGVfMS5kZWZhdWx0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgb2JzID0gcmVzdWx0W3N5bWJvbF9vYnNlcnZhYmxlXzEuZGVmYXVsdF0oKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnMuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcignaW52YWxpZCBvYnNlcnZhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShuZXcgSW5uZXJTdWJzY3JpYmVyXzEuSW5uZXJTdWJzY3JpYmVyKG91dGVyU3Vic2NyaWJlciwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihuZXcgVHlwZUVycm9yKCd1bmtub3duIHR5cGUgcmV0dXJuZWQnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5zdWJzY3JpYmVUb1Jlc3VsdCA9IHN1YnNjcmliZVRvUmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9SZXN1bHQuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Byb21pc2UuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy91dGlsL2lzUHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm9vdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9yb290Jyk7XG52YXIgU3ltYm9sID0gcm9vdF8xLnJvb3QuU3ltYm9sO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICAgIGV4cG9ydHMuJCRpdGVyYXRvciA9IFN5bWJvbC5pdGVyYXRvcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXhwb3J0cy4kJGl0ZXJhdG9yID0gU3ltYm9sLmZvcignaXRlcmF0b3InKTtcbiAgICB9XG59XG5lbHNlIHtcbiAgICBpZiAocm9vdF8xLnJvb3QuU2V0ICYmIHR5cGVvZiBuZXcgcm9vdF8xLnJvb3QuU2V0KClbJ0BAaXRlcmF0b3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBCdWcgZm9yIG1vemlsbGEgdmVyc2lvblxuICAgICAgICBleHBvcnRzLiQkaXRlcmF0b3IgPSAnQEBpdGVyYXRvcic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJvb3RfMS5yb290Lk1hcCkge1xuICAgICAgICAvLyBlczYtc2hpbSBzcGVjaWZpYyBsb2dpY1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHJvb3RfMS5yb290Lk1hcC5wcm90b3R5cGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2VudHJpZXMnICYmIGtleSAhPT0gJ3NpemUnICYmIHJvb3RfMS5yb290Lk1hcC5wcm90b3R5cGVba2V5XSA9PT0gcm9vdF8xLnJvb3QuTWFwLnByb3RvdHlwZVsnZW50cmllcyddKSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0cy4kJGl0ZXJhdG9yID0ga2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBleHBvcnRzLiQkaXRlcmF0b3IgPSAnQEBpdGVyYXRvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXRlcmF0b3IuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9zeW1ib2wvaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZSgnLi9TdWJzY3JpYmVyJyk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIElubmVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vdXRlclZhbHVlID0gb3V0ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5vdXRlckluZGV4ID0gb3V0ZXJJbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5TmV4dCh0aGlzLm91dGVyVmFsdWUsIHZhbHVlLCB0aGlzLm91dGVySW5kZXgsIHRoaXMuaW5kZXgrKywgdGhpcyk7XG4gICAgfTtcbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlFcnJvcihlcnJvciwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlDb21wbGV0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIElubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuSW5uZXJTdWJzY3JpYmVyID0gSW5uZXJTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5uZXJTdWJzY3JpYmVyLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvSW5uZXJTdWJzY3JpYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCcuLi8uLi9PYnNlcnZhYmxlJyk7XG52YXIgd2l0aExhdGVzdEZyb21fMSA9IHJlcXVpcmUoJy4uLy4uL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUud2l0aExhdGVzdEZyb20gPSB3aXRoTGF0ZXN0RnJvbV8xLndpdGhMYXRlc3RGcm9tO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aExhdGVzdEZyb20uanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9PdXRlclN1YnNjcmliZXInKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCcpO1xuLyoqXG4gKiBDb21iaW5lcyB0aGUgc291cmNlIE9ic2VydmFibGUgd2l0aCBvdGhlciBPYnNlcnZhYmxlcyB0byBjcmVhdGUgYW4gT2JzZXJ2YWJsZVxuICogd2hvc2UgdmFsdWVzIGFyZSBjYWxjdWxhdGVkIGZyb20gdGhlIGxhdGVzdCB2YWx1ZXMgb2YgZWFjaCwgb25seSB3aGVuIHRoZVxuICogc291cmNlIGVtaXRzLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5XaGVuZXZlciB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMgYSB2YWx1ZSwgaXRcbiAqIGNvbXB1dGVzIGEgZm9ybXVsYSB1c2luZyB0aGF0IHZhbHVlIHBsdXMgdGhlIGxhdGVzdCB2YWx1ZXMgZnJvbSBvdGhlciBpbnB1dFxuICogT2JzZXJ2YWJsZXMsIHRoZW4gZW1pdHMgdGhlIG91dHB1dCBvZiB0aGF0IGZvcm11bGEuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvd2l0aExhdGVzdEZyb20ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogYHdpdGhMYXRlc3RGcm9tYCBjb21iaW5lcyBlYWNoIHZhbHVlIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlICh0aGVcbiAqIGluc3RhbmNlKSB3aXRoIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gdGhlIG90aGVyIGlucHV0IE9ic2VydmFibGVzIG9ubHkgd2hlblxuICogdGhlIHNvdXJjZSBlbWl0cyBhIHZhbHVlLCBvcHRpb25hbGx5IHVzaW5nIGEgYHByb2plY3RgIGZ1bmN0aW9uIHRvIGRldGVybWluZVxuICogdGhlIHZhbHVlIHRvIGJlIGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLiBBbGwgaW5wdXQgT2JzZXJ2YWJsZXMgbXVzdFxuICogZW1pdCBhdCBsZWFzdCBvbmUgdmFsdWUgYmVmb3JlIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSB3aWxsIGVtaXQgYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5PbiBldmVyeSBjbGljayBldmVudCwgZW1pdCBhbiBhcnJheSB3aXRoIHRoZSBsYXRlc3QgdGltZXIgZXZlbnQgcGx1cyB0aGUgY2xpY2sgZXZlbnQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHRpbWVyID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3Mud2l0aExhdGVzdEZyb20odGltZXIpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb21iaW5lTGF0ZXN0fVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gb3RoZXIgQW4gaW5wdXQgT2JzZXJ2YWJsZSB0byBjb21iaW5lIHdpdGggdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gTW9yZSB0aGFuIG9uZSBpbnB1dCBPYnNlcnZhYmxlcyBtYXkgYmUgZ2l2ZW4gYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvamVjdF0gUHJvamVjdGlvbiBmdW5jdGlvbiBmb3IgY29tYmluaW5nIHZhbHVlc1xuICogdG9nZXRoZXIuIFJlY2VpdmVzIGFsbCB2YWx1ZXMgaW4gb3JkZXIgb2YgdGhlIE9ic2VydmFibGVzIHBhc3NlZCwgd2hlcmUgdGhlXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaXMgYSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS4gKGUuZy5cbiAqIGBhLndpdGhMYXRlc3RGcm9tKGIsIGMsIChhMSwgYjEsIGMxKSA9PiBhMSArIGIxICsgYzEpYCkuIElmIHRoaXMgaXMgbm90XG4gKiBwYXNzZWQsIGFycmF5cyB3aWxsIGJlIGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBvZiBwcm9qZWN0ZWQgdmFsdWVzIGZyb20gdGhlIG1vc3QgcmVjZW50XG4gKiB2YWx1ZXMgZnJvbSBlYWNoIGlucHV0IE9ic2VydmFibGUsIG9yIGFuIGFycmF5IG9mIHRoZSBtb3N0IHJlY2VudCB2YWx1ZXMgZnJvbVxuICogZWFjaCBpbnB1dCBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCB3aXRoTGF0ZXN0RnJvbVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gd2l0aExhdGVzdEZyb20oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcHJvamVjdDtcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9qZWN0ID0gYXJncy5wb3AoKTtcbiAgICB9XG4gICAgdmFyIG9ic2VydmFibGVzID0gYXJncztcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yKG9ic2VydmFibGVzLCBwcm9qZWN0KSk7XG59XG5leHBvcnRzLndpdGhMYXRlc3RGcm9tID0gd2l0aExhdGVzdEZyb207XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xudmFyIFdpdGhMYXRlc3RGcm9tT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpdGhMYXRlc3RGcm9tT3BlcmF0b3Iob2JzZXJ2YWJsZXMsIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbiAgICBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLm9ic2VydmFibGVzLCB0aGlzLnByb2plY3QpKTtcbiAgICB9O1xuICAgIHJldHVybiBXaXRoTGF0ZXN0RnJvbU9wZXJhdG9yO1xufSgpKTtcbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG52YXIgV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb2JzZXJ2YWJsZXMsIHByb2plY3QpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gb2JzZXJ2YWJsZXM7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudG9SZXNwb25kID0gW107XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudG9SZXNwb25kLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgb2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZSwgaSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdpdGhMYXRlc3RGcm9tU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLnZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgICAgIHZhciB0b1Jlc3BvbmQgPSB0aGlzLnRvUmVzcG9uZDtcbiAgICAgICAgaWYgKHRvUmVzcG9uZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0b1Jlc3BvbmQuaW5kZXhPZihvdXRlckluZGV4KTtcbiAgICAgICAgICAgIGlmIChmb3VuZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0b1Jlc3BvbmQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH07XG4gICAgV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy50b1Jlc3BvbmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFt2YWx1ZV0uY29uY2F0KHRoaXMudmFsdWVzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlQcm9qZWN0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBXaXRoTGF0ZXN0RnJvbVN1YnNjcmliZXIucHJvdG90eXBlLl90cnlQcm9qZWN0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gV2l0aExhdGVzdEZyb21TdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGhMYXRlc3RGcm9tLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4uLy4uL09ic2VydmFibGUnKTtcbnZhciBkZWxheV8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3IvZGVsYXknKTtcbk9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnByb3RvdHlwZS5kZWxheSA9IGRlbGF5XzEuZGVsYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWxheS5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9kZWxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBhc3luY18xID0gcmVxdWlyZSgnLi4vc2NoZWR1bGVyL2FzeW5jJyk7XG52YXIgaXNEYXRlXzEgPSByZXF1aXJlKCcuLi91dGlsL2lzRGF0ZScpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoJy4uL1N1YnNjcmliZXInKTtcbnZhciBOb3RpZmljYXRpb25fMSA9IHJlcXVpcmUoJy4uL05vdGlmaWNhdGlvbicpO1xuLyoqXG4gKiBEZWxheXMgdGhlIGVtaXNzaW9uIG9mIGl0ZW1zIGZyb20gdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGJ5IGEgZ2l2ZW4gdGltZW91dCBvclxuICogdW50aWwgYSBnaXZlbiBEYXRlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5UaW1lIHNoaWZ0cyBlYWNoIGl0ZW0gYnkgc29tZSBzcGVjaWZpZWQgYW1vdW50IG9mXG4gKiBtaWxsaXNlY29uZHMuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvZGVsYXkucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogSWYgdGhlIGRlbGF5IGFyZ3VtZW50IGlzIGEgTnVtYmVyLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgYnkgdGhhdCBhbW91bnQgb2YgdGltZSBleHByZXNzZWQgaW4gbWlsbGlzZWNvbmRzLiBUaGUgcmVsYXRpdmVcbiAqIHRpbWUgaW50ZXJ2YWxzIGJldHdlZW4gdGhlIHZhbHVlcyBhcmUgcHJlc2VydmVkLlxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIERhdGUsIHRoaXMgb3BlcmF0b3IgdGltZSBzaGlmdHMgdGhlIHN0YXJ0IG9mIHRoZVxuICogT2JzZXJ2YWJsZSBleGVjdXRpb24gdW50aWwgdGhlIGdpdmVuIGRhdGUgb2NjdXJzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkRlbGF5IGVhY2ggY2xpY2sgYnkgb25lIHNlY29uZDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5kZWxheSgxMDAwKTsgLy8gZWFjaCBjbGljayBlbWl0dGVkIGFmdGVyIDEgc2Vjb25kXG4gKiBkZWxheWVkQ2xpY2tzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5EZWxheSBhbGwgY2xpY2tzIHVudGlsIGEgZnV0dXJlIGRhdGUgaGFwcGVuczwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgZGF0ZSA9IG5ldyBEYXRlKCdNYXJjaCAxNSwgMjA1MCAxMjowMDowMCcpOyAvLyBpbiB0aGUgZnV0dXJlXG4gKiB2YXIgZGVsYXllZENsaWNrcyA9IGNsaWNrcy5kZWxheShkYXRlKTsgLy8gY2xpY2sgZW1pdHRlZCBvbmx5IGFmdGVyIHRoYXQgZGF0ZVxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgZGVib3VuY2VUaW1lfVxuICogQHNlZSB7QGxpbmsgZGVsYXlXaGVufVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfERhdGV9IGRlbGF5IFRoZSBkZWxheSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKGEgYG51bWJlcmApIG9yXG4gKiBhIGBEYXRlYCB1bnRpbCB3aGljaCB0aGUgZW1pc3Npb24gb2YgdGhlIHNvdXJjZSBpdGVtcyBpcyBkZWxheWVkLlxuICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXI9YXN5bmNdIFRoZSBTY2hlZHVsZXIgdG8gdXNlIGZvclxuICogbWFuYWdpbmcgdGhlIHRpbWVycyB0aGF0IGhhbmRsZSB0aGUgdGltZS1zaGlmdCBmb3IgZWFjaCBpdGVtLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGRlbGF5cyB0aGUgZW1pc3Npb25zIG9mIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUgYnkgdGhlIHNwZWNpZmllZCB0aW1lb3V0IG9yIERhdGUuXG4gKiBAbWV0aG9kIGRlbGF5XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBkZWxheShkZWxheSwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICB2YXIgYWJzb2x1dGVEZWxheSA9IGlzRGF0ZV8xLmlzRGF0ZShkZWxheSk7XG4gICAgdmFyIGRlbGF5Rm9yID0gYWJzb2x1dGVEZWxheSA/ICgrZGVsYXkgLSBzY2hlZHVsZXIubm93KCkpIDogTWF0aC5hYnMoZGVsYXkpO1xuICAgIHJldHVybiB0aGlzLmxpZnQobmV3IERlbGF5T3BlcmF0b3IoZGVsYXlGb3IsIHNjaGVkdWxlcikpO1xufVxuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xudmFyIERlbGF5T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlbGF5T3BlcmF0b3IoZGVsYXksIHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cbiAgICBEZWxheU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IERlbGF5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmRlbGF5LCB0aGlzLnNjaGVkdWxlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIERlbGF5T3BlcmF0b3I7XG59KCkpO1xuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbnZhciBEZWxheVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWxheVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVsYXlTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBkZWxheSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgRGVsYXlTdWJzY3JpYmVyLmRpc3BhdGNoID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBzdGF0ZS5zb3VyY2U7XG4gICAgICAgIHZhciBxdWV1ZSA9IHNvdXJjZS5xdWV1ZTtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHN0YXRlLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gc3RhdGUuZGVzdGluYXRpb247XG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIChxdWV1ZVswXS50aW1lIC0gc2NoZWR1bGVyLm5vdygpKSA8PSAwKSB7XG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpLm5vdGlmaWNhdGlvbi5vYnNlcnZlKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGRlbGF5XzEgPSBNYXRoLm1heCgwLCBxdWV1ZVswXS50aW1lIC0gc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoc3RhdGUsIGRlbGF5XzEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc291cmNlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWxheVN1YnNjcmliZXIucHJvdG90eXBlLl9zY2hlZHVsZSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoRGVsYXlTdWJzY3JpYmVyLmRpc3BhdGNoLCB0aGlzLmRlbGF5LCB7XG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMsIGRlc3RpbmF0aW9uOiB0aGlzLmRlc3RpbmF0aW9uLCBzY2hlZHVsZXI6IHNjaGVkdWxlclxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBEZWxheVN1YnNjcmliZXIucHJvdG90eXBlLnNjaGVkdWxlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5lcnJvcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyBEZWxheU1lc3NhZ2Uoc2NoZWR1bGVyLm5vdygpICsgdGhpcy5kZWxheSwgbm90aWZpY2F0aW9uKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZShzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWxheVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uXzEuTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpKTtcbiAgICB9O1xuICAgIERlbGF5U3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmVycm9yZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICB9O1xuICAgIERlbGF5U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSgpKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWxheVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG52YXIgRGVsYXlNZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWxheU1lc3NhZ2UodGltZSwgbm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gRGVsYXlNZXNzYWdlO1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbGF5LmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvb3BlcmF0b3IvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oK3ZhbHVlKTtcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNEYXRlLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvdXRpbC9pc0RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJy4vT2JzZXJ2YWJsZScpO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcHVzaC1iYXNlZCBldmVudCBvciB2YWx1ZSB0aGF0IGFuIHtAbGluayBPYnNlcnZhYmxlfSBjYW4gZW1pdC5cbiAqIFRoaXMgY2xhc3MgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igb3BlcmF0b3JzIHRoYXQgbWFuYWdlIG5vdGlmaWNhdGlvbnMsXG4gKiBsaWtlIHtAbGluayBtYXRlcmlhbGl6ZX0sIHtAbGluayBkZW1hdGVyaWFsaXplfSwge0BsaW5rIG9ic2VydmVPbn0sIGFuZFxuICogb3RoZXJzLiBCZXNpZGVzIHdyYXBwaW5nIHRoZSBhY3R1YWwgZGVsaXZlcmVkIHZhbHVlLCBpdCBhbHNvIGFubm90YXRlcyBpdFxuICogd2l0aCBtZXRhZGF0YSBvZiwgZm9yIGluc3RhbmNlLCB3aGF0IHR5cGUgb2YgcHVzaCBtZXNzYWdlIGl0IGlzIChgbmV4dGAsXG4gKiBgZXJyb3JgLCBvciBgY29tcGxldGVgKS5cbiAqXG4gKiBAc2VlIHtAbGluayBtYXRlcmlhbGl6ZX1cbiAqIEBzZWUge0BsaW5rIGRlbWF0ZXJpYWxpemV9XG4gKiBAc2VlIHtAbGluayBvYnNlcnZlT259XG4gKlxuICogQGNsYXNzIE5vdGlmaWNhdGlvbjxUPlxuICovXG52YXIgTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb24oa2luZCwgdmFsdWUsIGV4Y2VwdGlvbikge1xuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0ga2luZCA9PT0gJ04nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxpdmVycyB0byB0aGUgZ2l2ZW4gYG9ic2VydmVyYCB0aGUgdmFsdWUgd3JhcHBlZCBieSB0aGlzIE5vdGlmaWNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge09ic2VydmVyfSBvYnNlcnZlclxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0ICYmIG9ic2VydmVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IgJiYgb2JzZXJ2ZXIuZXJyb3IodGhpcy5leGNlcHRpb24pO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmNvbXBsZXRlICYmIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHNvbWUge0BsaW5rIE9ic2VydmVyfSBjYWxsYmFja3MsIGRlbGl2ZXIgdGhlIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZVxuICAgICAqIGN1cnJlbnQgTm90aWZpY2F0aW9uIHRvIHRoZSBjb3JyZWN0bHkgY29ycmVzcG9uZGluZyBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHZhbHVlOiBUKTogdm9pZH0gbmV4dCBBbiBPYnNlcnZlciBgbmV4dGAgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihlcnI6IGFueSk6IHZvaWR9IFtlcnJvcl0gQW4gT2JzZXJ2ZXIgYGVycm9yYCBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFtjb21wbGV0ZV0gQW4gT2JzZXJ2ZXIgYGNvbXBsZXRlYCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHthbnl9XG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQgJiYgbmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvcih0aGlzLmV4Y2VwdGlvbik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGFrZXMgYW4gT2JzZXJ2ZXIgb3IgaXRzIGluZGl2aWR1YWwgY2FsbGJhY2sgZnVuY3Rpb25zLCBhbmQgY2FsbHMgYG9ic2VydmVgXG4gICAgICogb3IgYGRvYCBtZXRob2RzIGFjY29yZGluZ2x5LlxuICAgICAqIEBwYXJhbSB7T2JzZXJ2ZXJ8ZnVuY3Rpb24odmFsdWU6IFQpOiB2b2lkfSBuZXh0T3JPYnNlcnZlciBBbiBPYnNlcnZlciBvclxuICAgICAqIHRoZSBgbmV4dGAgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihlcnI6IGFueSk6IHZvaWR9IFtlcnJvcl0gQW4gT2JzZXJ2ZXIgYGVycm9yYCBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IFtjb21wbGV0ZV0gQW4gT2JzZXJ2ZXIgYGNvbXBsZXRlYCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHthbnl9XG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbiAobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgJiYgdHlwZW9mIG5leHRPck9ic2VydmVyLm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUobmV4dE9yT2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG8obmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaW1wbGUgT2JzZXJ2YWJsZSB0aGF0IGp1c3QgZGVsaXZlcnMgdGhlIG5vdGlmaWNhdGlvbiByZXByZXNlbnRlZFxuICAgICAqIGJ5IHRoaXMgTm90aWZpY2F0aW9uIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLm9mKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KHRoaXMuZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IHRvIGNyZWF0ZSBhIE5vdGlmaWNhdGlvbiBpbnN0YW5jZSBvZiB0aGUgdHlwZSBgbmV4dGAgZnJvbSBhXG4gICAgICogZ2l2ZW4gdmFsdWUuXG4gICAgICogQHBhcmFtIHtUfSB2YWx1ZSBUaGUgYG5leHRgIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge05vdGlmaWNhdGlvbjxUPn0gVGhlIFwibmV4dFwiIE5vdGlmaWNhdGlvbiByZXByZXNlbnRpbmcgdGhlXG4gICAgICogYXJndW1lbnQuXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKCdOJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCB0byBjcmVhdGUgYSBOb3RpZmljYXRpb24gaW5zdGFuY2Ugb2YgdGhlIHR5cGUgYGVycm9yYCBmcm9tIGFcbiAgICAgKiBnaXZlbiBlcnJvci5cbiAgICAgKiBAcGFyYW0ge2FueX0gW2Vycl0gVGhlIGBlcnJvcmAgZXhjZXB0aW9uLlxuICAgICAqIEByZXR1cm4ge05vdGlmaWNhdGlvbjxUPn0gVGhlIFwiZXJyb3JcIiBOb3RpZmljYXRpb24gcmVwcmVzZW50aW5nIHRoZVxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb24oJ0UnLCB1bmRlZmluZWQsIGVycik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IHRvIGNyZWF0ZSBhIE5vdGlmaWNhdGlvbiBpbnN0YW5jZSBvZiB0aGUgdHlwZSBgY29tcGxldGVgLlxuICAgICAqIEByZXR1cm4ge05vdGlmaWNhdGlvbjxhbnk+fSBUaGUgdmFsdWVsZXNzIFwiY29tcGxldGVcIiBOb3RpZmljYXRpb24uXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZU5vdGlmaWNhdGlvbjtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ0MnKTtcbiAgICBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdOJywgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xufSgpKTtcbmV4cG9ydHMuTm90aWZpY2F0aW9uID0gTm90aWZpY2F0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3J4anMvTm90aWZpY2F0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVudHdpbmRvd3NpemUoKSB7XHJcbiAgcmV0dXJuIHt5OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHg6IHdpbmRvdy5pbm5lcldpZHRofVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jbGllbnRzcmMvanMvbGliL2N1cnJlbnR3aW5kb3dzaXplLmpzXG4gKiovIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuc3VyZXBvcyhuKSB7XHJcbiAgcmV0dXJuIG4gPj0gMCA/IG4gOiAtMSAqIG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9saWIvZW5zdXJlcG9zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==