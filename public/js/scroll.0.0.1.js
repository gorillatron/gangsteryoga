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

	"use strict";
	
	var _raf = __webpack_require__(341);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _rxjs = __webpack_require__(1);
	
	var _popmotion = __webpack_require__(347);
	
	var _ensurepos = __webpack_require__(344);
	
	var _ensurepos2 = _interopRequireDefault(_ensurepos);
	
	var _currentwindowsize = __webpack_require__(345);
	
	var _currentwindowsize2 = _interopRequireDefault(_currentwindowsize);
	
	var _css = __webpack_require__(346);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var seperatorHeight = 200;
	var seperatorPadding = 40;
	
	var parallaxImagesContainer = document.querySelector("#parallax-images");
	var parallaxImages = document.querySelectorAll("#parallax-images .img");
	var fullBlocks = document.querySelectorAll("#content .block.full");
	var scrolls$ = _rxjs.Observable.fromEvent(window, "mousewheel");
	var windowsizes$ = _rxjs.Observable.fromEvent(window, 'resize').throttleTime(33).map(function (ev) {
	  return (0, _currentwindowsize2.default)();
	}).startWith((0, _currentwindowsize2.default)());
	
	var parallaxImageSize$ = windowsizes$.map(function (size) {
	  return size;
	});
	
	var setScrollTop = function setScrollTop(event) {
	  var y = document.body.scrollTop * 0.760;
	  (0, _css.translate)(parallaxImagesContainer, 0, -y);
	};
	
	parallaxImageSize$.subscribe(function (size) {
	  parallaxImages.forEach(function (img) {
	    img.style.height = size.y + (seperatorHeight - seperatorPadding) / 2 + "px";
	  });
	  fullBlocks.forEach(function (block) {
	    block.style.height = size.y + "px";
	  });
	});
	
	scrolls$.subscribe(setScrollTop);
	
	var downChevron = document.querySelector(".button.down");
	var downChevronClicks$ = _rxjs.Observable.fromEvent(downChevron, "click");
	
	downChevronClicks$.subscribe(function () {
	  var animation = (0, _popmotion.tween)({
	    values: {
	      top: {
	        from: document.body.scrollTop,
	        to: document.querySelector(".block.first").offsetTop - 20
	      }
	    },
	    duration: 667,
	    onFrame: function onFrame(val) {
	      (0, _raf2.default)(function () {
	        return window.scrollTo(0, val.top);
	      });
	      (0, _raf2.default)(function () {
	        return setScrollTop();
	      });
	    }
	  });
	  animation.start();
	});
	
	(0, _raf2.default)(function () {
	  return setScrollTop();
	});
	(0, _raf2.default)(function () {
	  document.body.classList.add("show");
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	var Subject_1 = __webpack_require__(2);
	exports.Subject = Subject_1.Subject;
	/* tslint:enable:no-unused-variable */
	var Observable_1 = __webpack_require__(3);
	exports.Observable = Observable_1.Observable;
	// statics
	/* tslint:disable:no-use-before-declare */
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(28);
	__webpack_require__(40);
	__webpack_require__(44);
	__webpack_require__(47);
	__webpack_require__(49);
	__webpack_require__(52);
	__webpack_require__(60);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(73);
	__webpack_require__(82);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(95);
	__webpack_require__(98);
	__webpack_require__(101);
	__webpack_require__(104);
	__webpack_require__(108);
	//dom
	__webpack_require__(111);
	__webpack_require__(114);
	//operators
	__webpack_require__(120);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(130);
	__webpack_require__(136);
	__webpack_require__(138);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(144);
	__webpack_require__(147);
	__webpack_require__(150);
	__webpack_require__(152);
	__webpack_require__(154);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(166);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(172);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(178);
	__webpack_require__(180);
	__webpack_require__(183);
	__webpack_require__(185);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(194);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(203);
	__webpack_require__(205);
	__webpack_require__(207);
	__webpack_require__(209);
	__webpack_require__(211);
	__webpack_require__(213);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(219);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(235);
	__webpack_require__(238);
	__webpack_require__(240);
	__webpack_require__(242);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(257);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(271);
	__webpack_require__(273);
	__webpack_require__(275);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(288);
	__webpack_require__(290);
	__webpack_require__(292);
	__webpack_require__(294);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(306);
	__webpack_require__(308);
	__webpack_require__(310);
	__webpack_require__(312);
	__webpack_require__(314);
	__webpack_require__(316);
	__webpack_require__(318);
	__webpack_require__(320);
	__webpack_require__(322);
	__webpack_require__(324);
	__webpack_require__(326);
	__webpack_require__(327);
	/* tslint:disable:no-unused-variable */
	var Operator_1 = __webpack_require__(329);
	exports.Operator = Operator_1.Operator;
	var Subscription_1 = __webpack_require__(9);
	exports.Subscription = Subscription_1.Subscription;
	var Subscriber_1 = __webpack_require__(7);
	exports.Subscriber = Subscriber_1.Subscriber;
	var AsyncSubject_1 = __webpack_require__(24);
	exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
	var ReplaySubject_1 = __webpack_require__(117);
	exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
	var BehaviorSubject_1 = __webpack_require__(244);
	exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
	var MulticastObservable_1 = __webpack_require__(134);
	exports.MulticastObservable = MulticastObservable_1.MulticastObservable;
	var ConnectableObservable_1 = __webpack_require__(135);
	exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
	var Notification_1 = __webpack_require__(59);
	exports.Notification = Notification_1.Notification;
	var EmptyError_1 = __webpack_require__(193);
	exports.EmptyError = EmptyError_1.EmptyError;
	var ArgumentOutOfRangeError_1 = __webpack_require__(182);
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	var ObjectUnsubscribedError_1 = __webpack_require__(19);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
	var UnsubscriptionError_1 = __webpack_require__(14);
	exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
	var timeInterval_1 = __webpack_require__(303);
	exports.TimeInterval = timeInterval_1.TimeInterval;
	var timestamp_1 = __webpack_require__(309);
	exports.Timestamp = timestamp_1.Timestamp;
	var TestScheduler_1 = __webpack_require__(330);
	exports.TestScheduler = TestScheduler_1.TestScheduler;
	var VirtualTimeScheduler_1 = __webpack_require__(331);
	exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
	var AjaxObservable_1 = __webpack_require__(113);
	exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
	exports.AjaxError = AjaxObservable_1.AjaxError;
	exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
	var asap_1 = __webpack_require__(278);
	var async_1 = __webpack_require__(77);
	var queue_1 = __webpack_require__(118);
	var animationFrame_1 = __webpack_require__(337);
	var rxSubscriber_1 = __webpack_require__(16);
	var iterator_1 = __webpack_require__(38);
	var observable = __webpack_require__(17);
	/* tslint:enable:no-unused-variable */
	/**
	 * @typedef {Object} Rx.Scheduler
	 * @property {Scheduler} queue Schedules on a queue in the current event frame
	 * (trampoline scheduler). Use this for iteration operations.
	 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
	 * fastest transport mechanism available, either Node.js' `process.nextTick()`
	 * or Web Worker MessageChannel or setTimeout or others. Use this for
	 * asynchronous conversions.
	 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
	 * time-based operations.
	 */
	var Scheduler = {
	    asap: asap_1.asap,
	    async: async_1.async,
	    queue: queue_1.queue,
	    animationFrame: animationFrame_1.animationFrame
	};
	exports.Scheduler = Scheduler;
	/**
	 * @typedef {Object} Rx.Symbol
	 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
	 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
	 * an object that has all of the traits of an Rx Subscriber, including the
	 * ability to add and remove subscriptions to the subscription chain and
	 * guarantees involving event triggering (can't "next" after unsubscription,
	 * etc).
	 * @property {Symbol|string} observable A symbol to use as a property name to
	 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
	 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
	 * to retrieve an iterator from an object.
	 */
	var Symbol = {
	    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
	    observable: observable,
	    iterator: iterator_1.$$iterator
	};
	exports.Symbol = Symbol;
	//# sourceMappingURL=Rx.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(9);
	var ObjectUnsubscribedError_1 = __webpack_require__(19);
	var SubjectSubscription_1 = __webpack_require__(20);
	var rxSubscriber_1 = __webpack_require__(16);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var toSubscriber_1 = __webpack_require__(6);
	var $$observable = __webpack_require__(17);
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
	    Observable.prototype[$$observable] = function () {
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
/* 4 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module), (function() { return this; }())))

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(7);
	var rxSubscriber_1 = __webpack_require__(16);
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(9);
	var Observer_1 = __webpack_require__(15);
	var rxSubscriber_1 = __webpack_require__(16);
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(10);
	var isObject_1 = __webpack_require__(11);
	var isFunction_1 = __webpack_require__(8);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var UnsubscriptionError_1 = __webpack_require__(14);
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
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(13);
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
/* 13 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 14 */
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
	        this.name = 'UnsubscriptionError';
	        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(18)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 19 */
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
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(9);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bindCallback_1 = __webpack_require__(22);
	Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundCallbackObservable_1 = __webpack_require__(23);
	exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var AsyncSubject_1 = __webpack_require__(24);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a callback API to a function that returns an Observable.
	     *
	     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
	     * it will return a function `g` that when called as `g(x)` will output an
	     * Observable.</span>
	     *
	     * `bindCallback` is not an operator because its input and output are not
	     * Observables. The input is a function `func` with some parameters, but the
	     * last parameter must be a callback function that `func` calls when it is
	     * done. The output of `bindCallback` is a function that takes the same
	     * parameters as `func`, except the last one (the callback). When the output
	     * function is called with arguments, it will return an Observable where the
	     * results will be delivered to.
	     *
	     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
	     * // Suppose we have jQuery.getJSON('/my/url', callback)
	     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
	     * var result = getJSONAsObservable('/my/url');
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindNodeCallback}
	     * @see {@link from}
	     * @see {@link fromPromise}
	     *
	     * @param {function} func Function with a callback as the last parameter.
	     * @param {function} selector A function which takes the arguments from the
	     * callback and maps those a value to emit on the output Observable.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * callbacks.
	     * @return {function(...params: *): Observable} A function which returns the
	     * Observable that delivers the same values the callback would deliver.
	     * @static true
	     * @name bindCallback
	     * @owner Observable
	     */
	    BoundCallbackObservable.create = function (func, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(func, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(9);
	/**
	 * @class AsyncSubject<T>
	 */
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.apply(this, arguments);
	        this.value = null;
	        this.hasNext = false;
	        this.hasCompleted = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.hasCompleted && this.hasNext) {
	            subscriber.next(this.value);
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype.next = function (value) {
	        this.value = value;
	        this.hasNext = true;
	    };
	    AsyncSubject.prototype.complete = function () {
	        this.hasCompleted = true;
	        if (this.hasNext) {
	            _super.prototype.next.call(this, this.value);
	        }
	        _super.prototype.complete.call(this);
	    };
	    return AsyncSubject;
	}(Subject_1.Subject));
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bindNodeCallback_1 = __webpack_require__(26);
	Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundNodeCallbackObservable_1 = __webpack_require__(27);
	exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var AsyncSubject_1 = __webpack_require__(24);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundNodeCallbackObservable = (function (_super) {
	    __extends(BoundNodeCallbackObservable, _super);
	    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a Node.js-style callback API to a function that returns an
	     * Observable.
	     *
	     * <span class="informal">It's just like {@link bindCallback}, but the
	     * callback is expected to be of type `callback(error, result)`.</span>
	     *
	     * `bindNodeCallback` is not an operator because its input and output are not
	     * Observables. The input is a function `func` with some parameters, but the
	     * last parameter must be a callback function that `func` calls when it is
	     * done. The callback function is expected to follow Node.js conventions,
	     * where the first argument to the callback is an error, while remaining
	     * arguments are the callback result. The output of `bindNodeCallback` is a
	     * function that takes the same parameters as `func`, except the last one (the
	     * callback). When the output function is called with arguments, it will
	     * return an Observable where the results will be delivered to.
	     *
	     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
	     * import * as fs from 'fs';
	     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
	     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     * @see {@link fromPromise}
	     *
	     * @param {function} func Function with a callback as the last parameter.
	     * @param {function} selector A function which takes the arguments from the
	     * callback and maps those a value to emit on the output Observable.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * callbacks.
	     * @return {function(...params: *): Observable} A function which returns the
	     * Observable that delivers the same values the Node.js callback would
	     * deliver.
	     * @static true
	     * @name bindNodeCallback
	     * @owner Observable
	     */
	    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundNodeCallbackObservable(func, selector, args, scheduler);
	        };
	    };
	    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    var err = innerArgs.shift();
	                    if (err) {
	                        subject.error(err);
	                    }
	                    else if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundNodeCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            var err = innerArgs.shift();
	            if (err) {
	                subject.error(err);
	            }
	            else if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineLatest_1 = __webpack_require__(29);
	Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(30);
	var isArray_1 = __webpack_require__(10);
	var ArrayObservable_1 = __webpack_require__(31);
	var combineLatest_1 = __webpack_require__(34);
	/* tslint:enable:max-line-length */
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from all the Observables passed as
	 * arguments. This is done by subscribing to each Observable, in order, and
	 * collecting an array of each of the most recent values any time any of the
	 * input Observables emits, then either taking that array and passing it as
	 * arguments to an optional `project` function and emitting the return value of
	 * that, or just emitting the array of recent values directly if there is no
	 * `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} observable1 An input Observable to combine with the
	 * source Observable.
	 * @param {Observable} observable2 An input Observable to combine with the
	 * source Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
	 * each input Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @static true
	 * @name combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(32);
	var EmptyObservable_1 = __webpack_require__(33);
	var isScheduler_1 = __webpack_require__(30);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(31);
	var isArray_1 = __webpack_require__(10);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	var none = {};
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from this Observable with values from
	 * Observables passed as arguments. This is done by subscribing to each
	 * Observable, in order, and collecting an array of each of the most recent
	 * values any time any of the input Observables emits, then either taking that
	 * array and passing it as arguments to an optional `project` function and
	 * emitting the return value of that, or just emitting the array of recent
	 * values directly if there is no `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        this.values.push(none);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            this.toRespond = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        var oldVal = values[outerIndex];
	        var toRespond = !this.toRespond
	            ? 0
	            : oldVal === none ? --this.toRespond : this.toRespond;
	        values[outerIndex] = innerValue;
	        if (toRespond === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var isArray_1 = __webpack_require__(10);
	var isPromise_1 = __webpack_require__(37);
	var Observable_1 = __webpack_require__(3);
	var iterator_1 = __webpack_require__(38);
	var InnerSubscriber_1 = __webpack_require__(39);
	var $$observable = __webpack_require__(17);
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
	    else if (typeof result[$$observable] === 'function') {
	        var obs = result[$$observable]();
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
/* 37 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(41);
	Observable_1.Observable.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(42);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(30);
	var ArrayObservable_1 = __webpack_require__(31);
	var mergeAll_1 = __webpack_require__(43);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var defer_1 = __webpack_require__(45);
	Observable_1.Observable.defer = defer_1.defer;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DeferObservable_1 = __webpack_require__(46);
	exports.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    /**
	     * Creates an Observable that, on subscribe, calls an Observable factory to
	     * make an Observable for each new Observer.
	     *
	     * <span class="informal">Creates the Observable lazily, that is, only when it
	     * is subscribed.
	     * </span>
	     *
	     * <img src="./img/defer.png" width="100%">
	     *
	     * `defer` allows you to create the Observable only when the Observer
	     * subscribes, and create a fresh Observable for each Observer. It waits until
	     * an Observer subscribes to it, and then it generates an Observable,
	     * typically with an Observable factory function. It does this afresh for each
	     * subscriber, so although each subscriber may think it is subscribing to the
	     * same Observable, in fact each subscriber gets its own individual
	     * Observable.
	     *
	     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
	     * var clicksOrInterval = Rx.Observable.defer(function () {
	     *   if (Math.random() > 0.5) {
	     *     return Rx.Observable.fromEvent(document, 'click');
	     *   } else {
	     *     return Rx.Observable.interval(1000);
	     *   }
	     * });
	     * clicksOrInterval.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     *
	     * @param {function(): Observable|Promise} observableFactory The Observable
	     * factory function to invoke for each Observer that subscribes to the output
	     * Observable. May also return a Promise, which will be converted on the fly
	     * to an Observable.
	     * @return {Observable} An Observable whose Observers' subscriptions trigger
	     * an invocation of the given Observable factory function.
	     * @static true
	     * @name defer
	     * @owner Observable
	     */
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        return new DeferSubscriber(subscriber, this.observableFactory);
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	var DeferSubscriber = (function (_super) {
	    __extends(DeferSubscriber, _super);
	    function DeferSubscriber(destination, factory) {
	        _super.call(this, destination);
	        this.factory = factory;
	        this.tryDefer();
	    }
	    DeferSubscriber.prototype.tryDefer = function () {
	        try {
	            this._callFactory();
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    DeferSubscriber.prototype._callFactory = function () {
	        var result = this.factory();
	        if (result) {
	            this.add(subscribeToResult_1.subscribeToResult(this, result));
	        }
	    };
	    return DeferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var empty_1 = __webpack_require__(48);
	Observable_1.Observable.empty = empty_1.empty;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EmptyObservable_1 = __webpack_require__(33);
	exports.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var forkJoin_1 = __webpack_require__(50);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(51);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var EmptyObservable_1 = __webpack_require__(33);
	var isArray_1 = __webpack_require__(10);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var from_1 = __webpack_require__(53);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(54);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(10);
	var isFunction_1 = __webpack_require__(8);
	var isPromise_1 = __webpack_require__(37);
	var isScheduler_1 = __webpack_require__(30);
	var PromiseObservable_1 = __webpack_require__(55);
	var IteratorObservable_1 = __webpack_require__(56);
	var ArrayObservable_1 = __webpack_require__(31);
	var ArrayLikeObservable_1 = __webpack_require__(57);
	var iterator_1 = __webpack_require__(38);
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(58);
	var $$observable = __webpack_require__(17);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable from an Array, an array-like object, a Promise, an
	     * iterable object, or an Observable-like object.
	     *
	     * <span class="informal">Converts almost anything to an Observable.</span>
	     *
	     * <img src="./img/from.png" width="100%">
	     *
	     * Convert various other objects and data types into Observables. `from`
	     * converts a Promise or an array-like or an
	     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	     * object into an Observable that emits the items in that promise or array or
	     * iterable. A String, in this context, is treated as an array of characters.
	     * Observable-like objects (contains a function named with the ES2015 Symbol
	     * for Observable) can also be converted through this operator.
	     *
	     * @example <caption>Converts an array to an Observable</caption>
	     * var array = [10, 20, 30];
	     * var result = Rx.Observable.from(array);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
	     * function* generateDoubles(seed) {
	     *   var i = seed;
	     *   while (true) {
	     *     yield i;
	     *     i = 2 * i; // double it
	     *   }
	     * }
	     *
	     * var iterator = generateDoubles(3);
	     * var result = Rx.Observable.from(iterator).take(10);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link fromEvent}
	     * @see {@link fromEventPattern}
	     * @see {@link fromPromise}
	     *
	     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
	     * Observable-like, an Array, an iterable or an array-like object to be
	     * converted.
	     * @param {function(x: any, i: number): T} [mapFn] A "map" function to call
	     * when converting array-like objects, where `x` is a value from the
	     * array-like and `i` is the index of that value in the sequence.
	     * @param {any} [thisArg] The context object to use when calling the `mapFn`,
	     * if provided.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * emissions of values.
	     * @return {Observable<T>} The Observable whose values are originally from the
	     * input object that was converted.
	     * @static true
	     * @name from
	     * @owner Observable
	     */
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Converts a Promise to an Observable.
	     *
	     * <span class="informal">Returns an Observable that just emits the Promise's
	     * resolved value, then completes.</span>
	     *
	     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
	     * Observable. If the Promise resolves with a value, the output Observable
	     * emits that resolved value as a `next`, and then completes. If the Promise
	     * is rejected, then the output Observable emits the corresponding Error.
	     *
	     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
	     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     *
	     * @param {Promise<T>} promise The promise to be converted.
	     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
	     * the delivery of the resolved value (or the rejection).
	     * @return {Observable<T>} An Observable which wraps the Promise.
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var isObject_1 = __webpack_require__(11);
	var tryCatch_1 = __webpack_require__(12);
	var Observable_1 = __webpack_require__(3);
	var isFunction_1 = __webpack_require__(8);
	var iterator_1 = __webpack_require__(38);
	var errorObject_1 = __webpack_require__(13);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(32);
	var EmptyObservable_1 = __webpack_require__(33);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Notification_1 = __webpack_require__(59);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromEvent_1 = __webpack_require__(61);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(62);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var Subscription_1 = __webpack_require__(9);
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
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromEventPattern_1 = __webpack_require__(64);
	Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventPatternObservable_1 = __webpack_require__(65);
	exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscription_1 = __webpack_require__(9);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    /**
	     * Creates an Observable from an API based on addHandler/removeHandler
	     * functions.
	     *
	     * <span class="informal">Converts any addHandler/removeHandler API to an
	     * Observable.</span>
	     *
	     * <img src="./img/fromEventPattern.png" width="100%">
	     *
	     * Creates an Observable by using the `addHandler` and `removeHandler`
	     * functions to add and remove the handlers, with an optional selector
	     * function to project the event arguments to a result. The `addHandler` is
	     * called when the output Observable is subscribed, and `removeHandler` is
	     * called when the Subscription is unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * function addClickHandler(handler) {
	     *   document.addEventListener('click', handler);
	     * }
	     *
	     * function removeClickHandler(handler) {
	     *   document.removeEventListener('click', handler);
	     * }
	     *
	     * var clicks = Rx.Observable.fromEventPattern(
	     *   addClickHandler,
	     *   removeClickHandler
	     * );
	     * clicks.subscribe(x => console.log(x));
	     *
	     * @see {@link from}
	     * @see {@link fromEvent}
	     *
	     * @param {function(handler: Function): any} addHandler A function that takes
	     * a `handler` function as argument and attaches it somehow to the actual
	     * source of events.
	     * @param {function(handler: Function): void} removeHandler A function that
	     * takes a `handler` function as argument and removes it in case it was
	     * previously attached using `addHandler`.
	     * @param {function(...args: any): T} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEventPattern
	     * @owner Observable
	     */
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	}(Observable_1.Observable));
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var fromPromise_1 = __webpack_require__(67);
	Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(55);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var GenerateObservable_1 = __webpack_require__(69);
	Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
	//# sourceMappingURL=generate.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var isScheduler_1 = __webpack_require__(30);
	var selfSelector = function (value) { return value; };
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var GenerateObservable = (function (_super) {
	    __extends(GenerateObservable, _super);
	    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
	        _super.call(this);
	        this.initialState = initialState;
	        this.condition = condition;
	        this.iterate = iterate;
	        this.resultSelector = resultSelector;
	        this.scheduler = scheduler;
	    }
	    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
	        if (arguments.length == 1) {
	            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
	        }
	        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
	            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
	        }
	        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
	    };
	    GenerateObservable.prototype._subscribe = function (subscriber) {
	        var state = this.initialState;
	        if (this.scheduler) {
	            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
	                subscriber: subscriber,
	                iterate: this.iterate,
	                condition: this.condition,
	                resultSelector: this.resultSelector,
	                state: state });
	        }
	        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
	        do {
	            if (condition) {
	                var conditionResult = void 0;
	                try {
	                    conditionResult = condition(state);
	                }
	                catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	                if (!conditionResult) {
	                    subscriber.complete();
	                    break;
	                }
	            }
	            var value = void 0;
	            try {
	                value = resultSelector(state);
	            }
	            catch (err) {
	                subscriber.error(err);
	                return;
	            }
	            subscriber.next(value);
	            if (subscriber.isUnsubscribed) {
	                break;
	            }
	            try {
	                state = iterate(state);
	            }
	            catch (err) {
	                subscriber.error(err);
	                return;
	            }
	        } while (true);
	    };
	    GenerateObservable.dispatch = function (state) {
	        var subscriber = state.subscriber, condition = state.condition;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (state.needIterate) {
	            try {
	                state.state = state.iterate(state.state);
	            }
	            catch (err) {
	                subscriber.error(err);
	                return;
	            }
	        }
	        else {
	            state.needIterate = true;
	        }
	        if (condition) {
	            var conditionResult = void 0;
	            try {
	                conditionResult = condition(state.state);
	            }
	            catch (err) {
	                subscriber.error(err);
	                return;
	            }
	            if (!conditionResult) {
	                subscriber.complete();
	                return;
	            }
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	        }
	        var value;
	        try {
	            value = state.resultSelector(state.state);
	        }
	        catch (err) {
	            subscriber.error(err);
	            return;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        return this.schedule(state);
	    };
	    return GenerateObservable;
	}(Observable_1.Observable));
	exports.GenerateObservable = GenerateObservable;
	//# sourceMappingURL=GenerateObservable.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var if_1 = __webpack_require__(71);
	Observable_1.Observable.if = if_1._if;
	//# sourceMappingURL=if.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IfObservable_1 = __webpack_require__(72);
	exports._if = IfObservable_1.IfObservable.create;
	//# sourceMappingURL=if.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IfObservable = (function (_super) {
	    __extends(IfObservable, _super);
	    function IfObservable(condition, thenSource, elseSource) {
	        _super.call(this);
	        this.condition = condition;
	        this.thenSource = thenSource;
	        this.elseSource = elseSource;
	    }
	    IfObservable.create = function (condition, thenSource, elseSource) {
	        return new IfObservable(condition, thenSource, elseSource);
	    };
	    IfObservable.prototype._subscribe = function (subscriber) {
	        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
	        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
	    };
	    return IfObservable;
	}(Observable_1.Observable));
	exports.IfObservable = IfObservable;
	var IfSubscriber = (function (_super) {
	    __extends(IfSubscriber, _super);
	    function IfSubscriber(destination, condition, thenSource, elseSource) {
	        _super.call(this, destination);
	        this.condition = condition;
	        this.thenSource = thenSource;
	        this.elseSource = elseSource;
	        this.tryIf();
	    }
	    IfSubscriber.prototype.tryIf = function () {
	        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
	        var result;
	        try {
	            result = condition();
	            var source = result ? thenSource : elseSource;
	            if (source) {
	                this.add(subscribeToResult_1.subscribeToResult(this, source));
	            }
	            else {
	                this._complete();
	            }
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    return IfSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=IfObservable.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var interval_1 = __webpack_require__(74);
	Observable_1.Observable.interval = interval_1.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IntervalObservable_1 = __webpack_require__(75);
	exports.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(76);
	var Observable_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(77);
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(10);
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(78);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(79);
	var QueueScheduler_1 = __webpack_require__(80);
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var Subscription_1 = __webpack_require__(9);
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(81);
	var FutureAction_1 = __webpack_require__(79);
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(79);
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(83);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(84);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(31);
	var mergeAll_1 = __webpack_require__(43);
	var isScheduler_1 = __webpack_require__(30);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var race_1 = __webpack_require__(86);
	Observable_1.Observable.race = race_1.raceStatic;
	//# sourceMappingURL=race.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(10);
	var ArrayObservable_1 = __webpack_require__(31);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item
	 * from the combination of this Observable and supplied Observables
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 * @method race
	 * @owner Observable
	 */
	function race() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return raceStatic.apply(this, observables);
	}
	exports.race = race;
	function raceStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1) {
	        if (isArray_1.isArray(observables[0])) {
	            observables = observables[0];
	        }
	        else {
	            return observables[0];
	        }
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
	}
	exports.raceStatic = raceStatic;
	var RaceOperator = (function () {
	    function RaceOperator() {
	    }
	    RaceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RaceSubscriber(subscriber));
	    };
	    return RaceOperator;
	}());
	exports.RaceOperator = RaceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RaceSubscriber = (function (_super) {
	    __extends(RaceSubscriber, _super);
	    function RaceSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasFirst = false;
	        this.observables = [];
	        this.subscriptions = [];
	    }
	    RaceSubscriber.prototype._next = function (observable) {
	        this.observables.push(observable);
	    };
	    RaceSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
	                if (this.subscriptions) {
	                    this.subscriptions.push(subscription);
	                    this.add(subscription);
	                }
	            }
	            this.observables = null;
	        }
	    };
	    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (!this.hasFirst) {
	            this.hasFirst = true;
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                if (i !== outerIndex) {
	                    var subscription = this.subscriptions[i];
	                    subscription.unsubscribe();
	                    this.remove(subscription);
	                }
	            }
	            this.subscriptions = null;
	        }
	        this.destination.next(innerValue);
	    };
	    return RaceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.RaceSubscriber = RaceSubscriber;
	//# sourceMappingURL=race.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var never_1 = __webpack_require__(88);
	Observable_1.Observable.never = never_1.never;
	//# sourceMappingURL=never.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NeverObservable_1 = __webpack_require__(89);
	exports.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var noop_1 = __webpack_require__(90);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer.
	     *
	     * <span class="informal">An Observable that never emits anything.</span>
	     *
	     * <img src="./img/never.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that emits
	     * neither values nor errors nor the completion notification. It can be used
	     * for testing purposes or for composing with other Observables. Please not
	     * that by never emitting a complete notification, this Observable keeps the
	     * subscription from being disposed automatically. Subscriptions need to be
	     * manually disposed.
	     *
	     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
	     * function info() {
	     *   console.log('Will not be called');
	     * }
	     * var result = Rx.Observable.never().startWith(7);
	     * result.subscribe(x => console.log(x), info, info);
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @return {Observable} A "never" Observable: never emits anything.
	     * @static true
	     * @name never
	     * @owner Observable
	     */
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var of_1 = __webpack_require__(92);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(31);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var onErrorResumeNext_1 = __webpack_require__(94);
	Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FromObservable_1 = __webpack_require__(54);
	var isArray_1 = __webpack_require__(10);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	function onErrorResumeNext() {
	    var nextSources = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        nextSources[_i - 0] = arguments[_i];
	    }
	    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
	        nextSources = nextSources[0];
	    }
	    return this.lift(new OnErrorResumeNextOperator(nextSources));
	}
	exports.onErrorResumeNext = onErrorResumeNext;
	/* tslint:enable:max-line-length */
	function onErrorResumeNextStatic() {
	    var nextSources = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        nextSources[_i - 0] = arguments[_i];
	    }
	    var source = null;
	    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
	        nextSources = nextSources[0];
	    }
	    source = nextSources.shift();
	    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
	}
	exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
	var OnErrorResumeNextOperator = (function () {
	    function OnErrorResumeNextOperator(nextSources) {
	        this.nextSources = nextSources;
	    }
	    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
	    };
	    return OnErrorResumeNextOperator;
	}());
	var OnErrorResumeNextSubscriber = (function (_super) {
	    __extends(OnErrorResumeNextSubscriber, _super);
	    function OnErrorResumeNextSubscriber(destination, nextSources) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.nextSources = nextSources;
	    }
	    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.subscribeToNextSource();
	    };
	    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.subscribeToNextSource();
	    };
	    OnErrorResumeNextSubscriber.prototype._error = function (err) {
	        this.subscribeToNextSource();
	    };
	    OnErrorResumeNextSubscriber.prototype._complete = function () {
	        this.subscribeToNextSource();
	    };
	    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
	        var next = this.nextSources.shift();
	        if (next) {
	            this.add(subscribeToResult_1.subscribeToResult(this, next));
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return OnErrorResumeNextSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var range_1 = __webpack_require__(96);
	Observable_1.Observable.range = range_1.range;
	//# sourceMappingURL=range.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RangeObservable_1 = __webpack_require__(97);
	exports.range = RangeObservable_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, count, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this._count = count;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits a sequence of numbers within a specified
	     * range.
	     *
	     * <span class="informal">Emits a sequence of numbers in a range.</span>
	     *
	     * <img src="./img/range.png" width="100%">
	     *
	     * `range` operator emits a range of sequential integers, in order, where you
	     * select the `start` of the range and its `length`. By default, uses no
	     * Scheduler and just delivers the notifications synchronously, but may use
	     * an optional Scheduler to regulate those deliveries.
	     *
	     * @example <caption>Emits the numbers 1 to 10</caption>
	     * var numbers = Rx.Observable.range(1, 10);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link interval}
	     *
	     * @param {number} [start=0] The value of the first integer in the sequence.
	     * @param {number} [count=0] The number of sequential integers to generate.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the notifications.
	     * @return {Observable} An Observable of numbers that emits a finite range of
	     * sequential integers.
	     * @static true
	     * @name range
	     * @owner Observable
	     */
	    RangeObservable.create = function (start, count, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (count === void 0) { count = 0; }
	        return new RangeObservable(start, count, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var count = this._count;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, count: count, start: start, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                if (index++ >= count) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	}(Observable_1.Observable));
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var using_1 = __webpack_require__(99);
	Observable_1.Observable.using = using_1.using;
	//# sourceMappingURL=using.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var UsingObservable_1 = __webpack_require__(100);
	exports.using = UsingObservable_1.UsingObservable.create;
	//# sourceMappingURL=using.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var UsingObservable = (function (_super) {
	    __extends(UsingObservable, _super);
	    function UsingObservable(resourceFactory, observableFactory) {
	        _super.call(this);
	        this.resourceFactory = resourceFactory;
	        this.observableFactory = observableFactory;
	    }
	    UsingObservable.create = function (resourceFactory, observableFactory) {
	        return new UsingObservable(resourceFactory, observableFactory);
	    };
	    UsingObservable.prototype._subscribe = function (subscriber) {
	        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
	        var resource;
	        try {
	            resource = resourceFactory();
	            return new UsingSubscriber(subscriber, resource, observableFactory);
	        }
	        catch (err) {
	            subscriber.error(err);
	        }
	    };
	    return UsingObservable;
	}(Observable_1.Observable));
	exports.UsingObservable = UsingObservable;
	var UsingSubscriber = (function (_super) {
	    __extends(UsingSubscriber, _super);
	    function UsingSubscriber(destination, resource, observableFactory) {
	        _super.call(this, destination);
	        this.resource = resource;
	        this.observableFactory = observableFactory;
	        destination.add(resource);
	        this.tryUse();
	    }
	    UsingSubscriber.prototype.tryUse = function () {
	        try {
	            var source = this.observableFactory.call(this, this.resource);
	            if (source) {
	                this.add(subscribeToResult_1.subscribeToResult(this, source));
	            }
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    return UsingSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=UsingObservable.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throw_1 = __webpack_require__(102);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(103);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (arg) {
	        var error = arg.error, subscriber = arg.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timer_1 = __webpack_require__(105);
	Observable_1.Observable.timer = timer_1.timer;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TimerObservable_1 = __webpack_require__(106);
	exports.timer = TimerObservable_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(76);
	var Observable_1 = __webpack_require__(3);
	var async_1 = __webpack_require__(77);
	var isScheduler_1 = __webpack_require__(30);
	var isDate_1 = __webpack_require__(107);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = -1;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this.period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = async_1.async;
	        }
	        this.scheduler = scheduler;
	        this.dueTime = isDate_1.isDate(dueTime) ?
	            (+dueTime - this.scheduler.now()) :
	            dueTime;
	    }
	    /**
	     * Creates an Observable that starts emitting after an `initialDelay` and
	     * emits ever increasing numbers after each `period` of time thereafter.
	     *
	     * <span class="informal">Its like {@link interval}, but you can specify when
	     * should the emissions start.</span>
	     *
	     * <img src="./img/timer.png" width="100%">
	     *
	     * `timer` returns an Observable that emits an infinite sequence of ascending
	     * integers, with a constant interval of time, `period` of your choosing
	     * between those emissions. The first emission happens after the specified
	     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
	     * operator uses the `async` Scheduler to provide a notion of time, but you
	     * may pass any Scheduler to it. If `period` is not specified, the output
	     * Observable emits only one value, `0`. Otherwise, it emits an infinite
	     * sequence.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
	     * var numbers = Rx.Observable.timer(3000, 1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @example <caption>Emits one number after five seconds</caption>
	     * var numbers = Rx.Observable.timer(5000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link interval}
	     * @see {@link delay}
	     *
	     * @param {number|Date} initialDelay The initial delay time to wait before
	     * emitting the first value of `0`.
	     * @param {number} [period] The period of time between emissions of the
	     * subsequent numbers.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a `0` after the
	     * `initialDelay` and ever increasing numbers after each `period` of time
	     * thereafter.
	     * @static true
	     * @name timer
	     * @owner Observable
	     */
	    TimerObservable.create = function (initialDelay, period, scheduler) {
	        if (initialDelay === void 0) { initialDelay = 0; }
	        return new TimerObservable(initialDelay, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (period === -1) {
	            return subscriber.complete();
	        }
	        state.index = index + 1;
	        action.schedule(state, period);
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
	        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	            index: index, period: period, subscriber: subscriber
	        });
	    };
	    return TimerObservable;
	}(Observable_1.Observable));
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zip_1 = __webpack_require__(109);
	Observable_1.Observable.zip = zip_1.zip;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(110);
	exports.zip = zip_1.zipStatic;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(31);
	var isArray_1 = __webpack_require__(10);
	var Subscriber_1 = __webpack_require__(7);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	var iterator_1 = __webpack_require__(38);
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @method zip
	 * @owner Observable
	 */
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	exports.zipProto = zipProto;
	/* tslint:enable:max-line-length */
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @static true
	 * @name zip
	 * @owner Observable
	 */
	function zipStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
	}
	exports.zipStatic = zipStatic;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ZipSubscriber(subscriber, this.project));
	    };
	    return ZipOperator;
	}());
	exports.ZipOperator = ZipOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray_1.isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[iterator_1.$$iterator] === 'function') {
	            iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                this.add(iterator.subscribe(iterator, i));
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        if (this.project) {
	            this._tryProject(args);
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    ZipSubscriber.prototype._tryProject = function (args) {
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
	    return ZipSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	}());
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
	    };
	    return ZipBufferIterator;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=zip.js.map

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var ajax_1 = __webpack_require__(112);
	Observable_1.Observable.ajax = ajax_1.ajax;
	//# sourceMappingURL=ajax.js.map

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AjaxObservable_1 = __webpack_require__(113);
	exports.ajax = AjaxObservable_1.AjaxObservable.create;
	//# sourceMappingURL=ajax.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(4);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(7);
	function createXHRDefault() {
	    var xhr = new root_1.root.XMLHttpRequest();
	    if (this.crossDomain) {
	        if ('withCredentials' in xhr) {
	            xhr.withCredentials = true;
	            return xhr;
	        }
	        else if (!!root_1.root.XDomainRequest) {
	            return new root_1.root.XDomainRequest();
	        }
	        else {
	            throw new Error('CORS is not supported by your browser');
	        }
	    }
	    else {
	        return xhr;
	    }
	}
	function defaultGetResultSelector(response) {
	    return response.response;
	}
	function ajaxGet(url, resultSelector, headers) {
	    if (resultSelector === void 0) { resultSelector = defaultGetResultSelector; }
	    if (headers === void 0) { headers = null; }
	    return new AjaxObservable({ method: 'GET', url: url, resultSelector: resultSelector, headers: headers });
	}
	exports.ajaxGet = ajaxGet;
	;
	function ajaxPost(url, body, headers) {
	    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
	}
	exports.ajaxPost = ajaxPost;
	;
	function ajaxDelete(url, headers) {
	    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
	}
	exports.ajaxDelete = ajaxDelete;
	;
	function ajaxPut(url, body, headers) {
	    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
	}
	exports.ajaxPut = ajaxPut;
	;
	function ajaxGetJSON(url, resultSelector, headers) {
	    var finalResultSelector = resultSelector ? function (res) { return resultSelector(res.response); } : function (res) { return res.response; };
	    return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', resultSelector: finalResultSelector, headers: headers });
	}
	exports.ajaxGetJSON = ajaxGetJSON;
	;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var AjaxObservable = (function (_super) {
	    __extends(AjaxObservable, _super);
	    function AjaxObservable(urlOrRequest) {
	        _super.call(this);
	        var request = {
	            async: true,
	            createXHR: createXHRDefault,
	            crossDomain: false,
	            headers: {},
	            method: 'GET',
	            responseType: 'json',
	            timeout: 0
	        };
	        if (typeof urlOrRequest === 'string') {
	            request.url = urlOrRequest;
	        }
	        else {
	            for (var prop in urlOrRequest) {
	                if (urlOrRequest.hasOwnProperty(prop)) {
	                    request[prop] = urlOrRequest[prop];
	                }
	            }
	        }
	        this.request = request;
	    }
	    /**
	     * Creates an observable for an Ajax request with either a request object with
	     * url, headers, etc or a string for a URL.
	     *
	     * @example
	     * source = Rx.Observable.ajax('/products');
	     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
	     *
	     * @param {string|Object} request Can be one of the following:
	     *   A string of the URL to make the Ajax call.
	     *   An object with the following properties
	     *   - url: URL of the request
	     *   - body: The body of the request
	     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
	     *   - async: Whether the request is async
	     *   - headers: Optional headers
	     *   - crossDomain: true if a cross domain request, else false
	     *   - createXHR: a function to override if you need to use an alternate
	     *   XMLHttpRequest implementation.
	     *   - resultSelector: a function to use to alter the output value type of
	     *   the Observable. Gets {@link AjaxResponse} as an argument.
	     * @return {Observable} An observable sequence containing the XMLHttpRequest.
	     * @static true
	     * @name ajax
	     * @owner Observable
	    */
	    AjaxObservable._create_stub = function () { return null; };
	    AjaxObservable.prototype._subscribe = function (subscriber) {
	        return new AjaxSubscriber(subscriber, this.request);
	    };
	    AjaxObservable.create = (function () {
	        var create = function (urlOrRequest) {
	            return new AjaxObservable(urlOrRequest);
	        };
	        create.get = ajaxGet;
	        create.post = ajaxPost;
	        create.delete = ajaxDelete;
	        create.put = ajaxPut;
	        create.getJSON = ajaxGetJSON;
	        return create;
	    })();
	    return AjaxObservable;
	}(Observable_1.Observable));
	exports.AjaxObservable = AjaxObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AjaxSubscriber = (function (_super) {
	    __extends(AjaxSubscriber, _super);
	    function AjaxSubscriber(destination, request) {
	        _super.call(this, destination);
	        this.request = request;
	        this.done = false;
	        var headers = request.headers = request.headers || {};
	        // force CORS if requested
	        if (!request.crossDomain && !headers['X-Requested-With']) {
	            headers['X-Requested-With'] = 'XMLHttpRequest';
	        }
	        // ensure content type is set
	        if (!('Content-Type' in headers)) {
	            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	        }
	        // properly serialize body
	        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
	        this.resultSelector = request.resultSelector;
	        this.send();
	    }
	    AjaxSubscriber.prototype.next = function (e) {
	        this.done = true;
	        var _a = this, resultSelector = _a.resultSelector, xhr = _a.xhr, request = _a.request, destination = _a.destination;
	        var response = new AjaxResponse(e, xhr, request);
	        if (resultSelector) {
	            var result = tryCatch_1.tryCatch(resultSelector)(response);
	            if (result === errorObject_1.errorObject) {
	                this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(response);
	        }
	    };
	    AjaxSubscriber.prototype.send = function () {
	        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
	        var createXHR = request.createXHR;
	        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
	        if (xhr === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.xhr = xhr;
	            // open XHR first
	            var result = void 0;
	            if (user) {
	                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
	            }
	            else {
	                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
	            }
	            if (result === errorObject_1.errorObject) {
	                this.error(errorObject_1.errorObject.e);
	                return;
	            }
	            // timeout and responseType can be set once the XHR is open
	            xhr.timeout = request.timeout;
	            xhr.responseType = request.responseType;
	            // set headers
	            this.setHeaders(xhr, headers);
	            // now set up the events
	            this.setupEvents(xhr, request);
	            // finally send the request
	            if (body) {
	                xhr.send(body);
	            }
	            else {
	                xhr.send();
	            }
	        }
	    };
	    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
	        if (!body || typeof body === 'string') {
	            return body;
	        }
	        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
	            return body;
	        }
	        var splitIndex = contentType.indexOf(';');
	        if (splitIndex !== -1) {
	            contentType = contentType.substring(0, splitIndex);
	        }
	        switch (contentType) {
	            case 'application/x-www-form-urlencoded':
	                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
	            case 'application/json':
	                return JSON.stringify(body);
	        }
	    };
	    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
	        for (var key in headers) {
	            if (headers.hasOwnProperty(key)) {
	                xhr.setRequestHeader(key, headers[key]);
	            }
	        }
	    };
	    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
	        var progressSubscriber = request.progressSubscriber;
	        xhr.ontimeout = function xhrTimeout(e) {
	            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
	            if (progressSubscriber) {
	                progressSubscriber.error(e);
	            }
	            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
	        };
	        xhr.ontimeout.request = request;
	        xhr.ontimeout.subscriber = this;
	        xhr.ontimeout.progressSubscriber = progressSubscriber;
	        if (xhr.upload && 'withCredentials' in xhr && root_1.root.XDomainRequest) {
	            if (progressSubscriber) {
	                xhr.onprogress = function xhrProgress(e) {
	                    var progressSubscriber = xhrProgress.progressSubscriber;
	                    progressSubscriber.next(e);
	                };
	                xhr.onprogress.progressSubscriber = progressSubscriber;
	            }
	            xhr.onerror = function xhrError(e) {
	                var _a = xhrError, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
	                if (progressSubscriber) {
	                    progressSubscriber.error(e);
	                }
	                subscriber.error(new AjaxError('ajax error', this, request));
	            };
	            xhr.onerror.request = request;
	            xhr.onerror.subscriber = this;
	            xhr.onerror.progressSubscriber = progressSubscriber;
	        }
	        xhr.onreadystatechange = function xhrReadyStateChange(e) {
	            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
	            if (this.readyState === 4) {
	                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                var status_1 = this.status === 1223 ? 204 : this.status;
	                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
	                // fix status code when it is 0 (0 status is undocumented).
	                // Occurs when accessing file resources or on Android 4.1 stock browser
	                // while retrieving files from application cache.
	                if (status_1 === 0) {
	                    status_1 = response ? 200 : 0;
	                }
	                if (200 <= status_1 && status_1 < 300) {
	                    if (progressSubscriber) {
	                        progressSubscriber.complete();
	                    }
	                    subscriber.next(e);
	                    subscriber.complete();
	                }
	                else {
	                    if (progressSubscriber) {
	                        progressSubscriber.error(e);
	                    }
	                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
	                }
	            }
	        };
	        xhr.onreadystatechange.subscriber = this;
	        xhr.onreadystatechange.progressSubscriber = progressSubscriber;
	        xhr.onreadystatechange.request = request;
	    };
	    AjaxSubscriber.prototype.unsubscribe = function () {
	        var _a = this, done = _a.done, xhr = _a.xhr;
	        if (!done && xhr && xhr.readyState !== 4) {
	            xhr.abort();
	        }
	        _super.prototype.unsubscribe.call(this);
	    };
	    return AjaxSubscriber;
	}(Subscriber_1.Subscriber));
	exports.AjaxSubscriber = AjaxSubscriber;
	/**
	 * A normalized AJAX response.
	 *
	 * @see {@link ajax}
	 *
	 * @class AjaxResponse
	 */
	var AjaxResponse = (function () {
	    function AjaxResponse(originalEvent, xhr, request) {
	        this.originalEvent = originalEvent;
	        this.xhr = xhr;
	        this.request = request;
	        this.status = xhr.status;
	        this.responseType = xhr.responseType || request.responseType;
	        switch (this.responseType) {
	            case 'json':
	                if ('response' in xhr) {
	                    //IE does not support json as responseType, parse it internally
	                    this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || '');
	                }
	                else {
	                    this.response = JSON.parse(xhr.responseText || '');
	                }
	                break;
	            case 'xml':
	                this.response = xhr.responseXML;
	                break;
	            case 'text':
	            default:
	                this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
	                break;
	        }
	    }
	    return AjaxResponse;
	}());
	exports.AjaxResponse = AjaxResponse;
	/**
	 * A normalized AJAX error.
	 *
	 * @see {@link ajax}
	 *
	 * @class AjaxError
	 */
	var AjaxError = (function (_super) {
	    __extends(AjaxError, _super);
	    function AjaxError(message, xhr, request) {
	        _super.call(this, message);
	        this.message = message;
	        this.xhr = xhr;
	        this.request = request;
	        this.status = xhr.status;
	    }
	    return AjaxError;
	}(Error));
	exports.AjaxError = AjaxError;
	/**
	 * @see {@link ajax}
	 *
	 * @class AjaxTimeoutError
	 */
	var AjaxTimeoutError = (function (_super) {
	    __extends(AjaxTimeoutError, _super);
	    function AjaxTimeoutError(xhr, request) {
	        _super.call(this, 'ajax timeout', xhr, request);
	    }
	    return AjaxTimeoutError;
	}(AjaxError));
	exports.AjaxTimeoutError = AjaxTimeoutError;
	//# sourceMappingURL=AjaxObservable.js.map

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var webSocket_1 = __webpack_require__(115);
	Observable_1.Observable.webSocket = webSocket_1.webSocket;
	//# sourceMappingURL=webSocket.js.map

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var WebSocketSubject_1 = __webpack_require__(116);
	exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
	//# sourceMappingURL=webSocket.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Subscriber_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(3);
	var Subscription_1 = __webpack_require__(9);
	var root_1 = __webpack_require__(4);
	var ReplaySubject_1 = __webpack_require__(117);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var assign_1 = __webpack_require__(119);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var WebSocketSubject = (function (_super) {
	    __extends(WebSocketSubject, _super);
	    function WebSocketSubject(urlConfigOrSource, destination) {
	        _super.call(this);
	        this._output = new Subject_1.Subject();
	        this.WebSocketCtor = root_1.root.WebSocket;
	        if (typeof urlConfigOrSource === 'string') {
	            this.url = urlConfigOrSource;
	        }
	        else {
	            // WARNING: config object could override important members here.
	            assign_1.assign(this, urlConfigOrSource);
	        }
	        if (!this.WebSocketCtor) {
	            throw new Error('no WebSocket constructor can be found');
	        }
	        this.destination = new ReplaySubject_1.ReplaySubject();
	    }
	    WebSocketSubject.prototype.resultSelector = function (e) {
	        return JSON.parse(e.data);
	    };
	    /**
	     * @param urlConfigOrSource
	     * @return {WebSocketSubject}
	     * @static true
	     * @name webSocket
	     * @owner Observable
	     */
	    WebSocketSubject.create = function (urlConfigOrSource) {
	        return new WebSocketSubject(urlConfigOrSource);
	    };
	    WebSocketSubject.prototype.lift = function (operator) {
	        var sock = new WebSocketSubject(this, this.destination);
	        sock.operator = operator;
	        return sock;
	    };
	    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
	    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
	        var self = this;
	        return new Observable_1.Observable(function (observer) {
	            var result = tryCatch_1.tryCatch(subMsg)();
	            if (result === errorObject_1.errorObject) {
	                observer.error(errorObject_1.errorObject.e);
	            }
	            else {
	                self.next(result);
	            }
	            var subscription = self.subscribe(function (x) {
	                var result = tryCatch_1.tryCatch(messageFilter)(x);
	                if (result === errorObject_1.errorObject) {
	                    observer.error(errorObject_1.errorObject.e);
	                }
	                else if (result) {
	                    observer.next(x);
	                }
	            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
	            return function () {
	                var result = tryCatch_1.tryCatch(unsubMsg)();
	                if (result === errorObject_1.errorObject) {
	                    observer.error(errorObject_1.errorObject.e);
	                }
	                else {
	                    self.next(result);
	                }
	                subscription.unsubscribe();
	            };
	        });
	    };
	    WebSocketSubject.prototype._connectSocket = function () {
	        var _this = this;
	        var socket = this.protocol ? new WebSocket(this.url, this.protocol) : new WebSocket(this.url);
	        this.socket = socket;
	        var subscription = new Subscription_1.Subscription(function () {
	            _this.socket = null;
	            if (socket && socket.readyState === 1) {
	                socket.close();
	            }
	        });
	        var observer = this._output;
	        socket.onopen = function (e) {
	            var openObserver = _this.openObserver;
	            if (openObserver) {
	                openObserver.next(e);
	            }
	            var queue = _this.destination;
	            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
	                var closingObserver = _this.closingObserver;
	                if (closingObserver) {
	                    closingObserver.next(undefined);
	                }
	                if (e && e.code) {
	                    socket.close(e.code, e.reason);
	                }
	                else {
	                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
	                        'and an optional reason: { code: number, reason: string }'));
	                }
	                _this.destination = new ReplaySubject_1.ReplaySubject();
	                _this.socket = null;
	            }, function () {
	                var closingObserver = _this.closingObserver;
	                if (closingObserver) {
	                    closingObserver.next(undefined);
	                }
	                socket.close();
	                _this.destination = new ReplaySubject_1.ReplaySubject();
	                _this.socket = null;
	            });
	            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
	                subscription.add(queue.subscribe(_this.destination));
	            }
	        };
	        socket.onerror = function (e) { return observer.error(e); };
	        socket.onclose = function (e) {
	            var closeObserver = _this.closeObserver;
	            if (closeObserver) {
	                closeObserver.next(e);
	            }
	            if (e.wasClean) {
	                observer.complete();
	            }
	            else {
	                observer.error(e);
	            }
	        };
	        socket.onmessage = function (e) {
	            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
	            if (result === errorObject_1.errorObject) {
	                observer.error(errorObject_1.errorObject.e);
	            }
	            else {
	                observer.next(result);
	            }
	        };
	    };
	    WebSocketSubject.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        if (!this.socket) {
	            this._connectSocket();
	        }
	        var subscription = new Subscription_1.Subscription();
	        subscription.add(this._output.subscribe(subscriber));
	        subscription.add(function () {
	            var socket = _this.socket;
	            if (socket && socket.readyState === 1) {
	                socket.close();
	                _this.socket = null;
	            }
	        });
	        return subscription;
	    };
	    WebSocketSubject.prototype.unsubscribe = function () {
	        var socket = this.socket;
	        if (socket && socket.readyState === 1) {
	            socket.close();
	            this.socket = null;
	        }
	        _super.prototype.unsubscribe.call(this);
	        this.destination = new ReplaySubject_1.ReplaySubject();
	    };
	    return WebSocketSubject;
	}(Subject_1.AnonymousSubject));
	exports.WebSocketSubject = WebSocketSubject;
	//# sourceMappingURL=WebSocketSubject.js.map

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var queue_1 = __webpack_require__(118);
	var observeOn_1 = __webpack_require__(58);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.scheduler = scheduler;
	        this._events = [];
	        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype.next = function (value) {
	        var now = this._getNow();
	        this._events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents();
	        _super.prototype.next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var _events = this._trimBufferThenGetEvents();
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var len = _events.length;
	        for (var i = 0; i < len && !subscriber.isUnsubscribed; i++) {
	            subscriber.next(_events[i].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
	        var now = this._getNow();
	        var _bufferSize = this._bufferSize;
	        var _windowTime = this._windowTime;
	        var _events = this._events;
	        var eventsCount = _events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - _events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount++;
	        }
	        if (eventsCount > _bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
	        }
	        if (spliceCount > 0) {
	            _events.splice(0, spliceCount);
	        }
	        return _events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(80);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var Object = root_1.root.Object;
	if (typeof Object.assign != 'function') {
	    (function () {
	        Object.assign = function assignPolyfill(target) {
	            var sources = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                sources[_i - 1] = arguments[_i];
	            }
	            if (target === undefined || target === null) {
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	            var output = Object(target);
	            var len = sources.length;
	            for (var index = 0; index < len; index++) {
	                var source = sources[index];
	                if (source !== undefined && source !== null) {
	                    for (var key in source) {
	                        if (source.hasOwnProperty(key)) {
	                            output[key] = source[key];
	                        }
	                    }
	                }
	            }
	            return output;
	        };
	    })();
	}
	exports.assign = Object.assign;
	//# sourceMappingURL=assign.js.map

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var buffer_1 = __webpack_require__(121);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Buffers the source Observable values until `closingNotifier` emits.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when another Observable emits.</span>
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * Buffers the incoming Observable values until the given `closingNotifier`
	 * Observable emits a value, at which point it emits the buffer on the output
	 * Observable and starts a new buffer internally, awaiting the next time
	 * `closingNotifier` emits.
	 *
	 * @example <caption>On every click, emit array of most recent interval events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var buffered = interval.buffer(clicks);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link window}
	 *
	 * @param {Observable<any>} closingNotifier An Observable that signals the
	 * buffer to be emitted on the output Observable.
	 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
	 * values.
	 * @method buffer
	 * @owner Observable
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
	    };
	    return BufferOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	    };
	    return BufferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferCount_1 = __webpack_require__(123);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Buffers the source Observable values until the size hits the maximum
	 * `bufferSize` given.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when its size reaches `bufferSize`.</span>
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * Buffers a number of values from the source Observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * @example <caption>Emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>On every click, emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2, 1);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link pairwise}
	 * @see {@link windowCount}
	 *
	 * @param {number} bufferSize The maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
	 * For example if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source. A new buffer is started at the
	 * beginning of the source by default.
	 * @return {Observable<T[]>} An Observable of arrays of buffered values.
	 * @method bufferCount
	 * @owner Observable
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
	    };
	    return BufferCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    return BufferCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferTime_1 = __webpack_require__(125);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
	var isScheduler_1 = __webpack_require__(30);
	/**
	 * Buffers the source Observable values for a specific time period.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * those arrays periodically in time.</span>
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
	 * Unless the optional argument `bufferCreationInterval` is given, it emits and
	 * resets the buffer every `bufferTimeSpan` milliseconds. If
	 * `bufferCreationInterval` is given, this operator opens the buffer every
	 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
	 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
	 * `maxBufferSize` is specified, the buffer will be closed either after
	 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
	 *
	 * @example <caption>Every second, emit an array of the recent click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(1000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(2000, 5000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowTime}
	 *
	 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
	 * @param {number} [bufferCreationInterval] The interval at which to start new
	 * buffers.
	 * @param {number} [maxBufferSize] The maximum buffer size.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine buffer boundaries.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferTime
	 * @owner Observable
	 */
	function bufferTime(bufferTimeSpan) {
	    var length = arguments.length;
	    var scheduler = async_1.async;
	    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
	        scheduler = arguments[arguments.length - 1];
	        length--;
	    }
	    var bufferCreationInterval = null;
	    if (length >= 2) {
	        bufferCreationInterval = arguments[1];
	    }
	    var maxBufferSize = Number.POSITIVE_INFINITY;
	    if (length >= 3) {
	        maxBufferSize = arguments[2];
	    }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.maxBufferSize = maxBufferSize;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
	    };
	    return BufferTimeOperator;
	}());
	var Context = (function () {
	    function Context() {
	        this.buffer = [];
	    }
	    return Context;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.maxBufferSize = maxBufferSize;
	        this.scheduler = scheduler;
	        this.contexts = [];
	        var context = this.openContext();
	        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
	        if (this.timespanOnly) {
	            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
	            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	        else {
	            var closeState = { subscriber: this, context: context };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        var filledBufferContext;
	        for (var i = 0; i < len; i++) {
	            var context = contexts[i];
	            var buffer = context.buffer;
	            buffer.push(value);
	            if (buffer.length == this.maxBufferSize) {
	                filledBufferContext = context;
	            }
	        }
	        if (filledBufferContext) {
	            this.onBufferFull(filledBufferContext);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.contexts.length = 0;
	        _super.prototype._error.call(this, err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var _a = this, contexts = _a.contexts, destination = _a.destination;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            destination.next(context.buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferTimeSubscriber.prototype._unsubscribe = function () {
	        this.contexts = null;
	    };
	    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
	        this.closeContext(context);
	        var closeAction = context.closeAction;
	        closeAction.unsubscribe();
	        this.remove(closeAction);
	        if (this.timespanOnly) {
	            context = this.openContext();
	            var bufferTimeSpan = this.bufferTimeSpan;
	            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
	            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    };
	    BufferTimeSubscriber.prototype.openContext = function () {
	        var context = new Context();
	        this.contexts.push(context);
	        return context;
	    };
	    BufferTimeSubscriber.prototype.closeContext = function (context) {
	        this.destination.next(context.buffer);
	        var contexts = this.contexts;
	        contexts.splice(contexts.indexOf(context), 1);
	    };
	    return BufferTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevContext = state.context;
	    if (prevContext) {
	        subscriber.closeContext(prevContext);
	    }
	    state.context = subscriber.openContext();
	    if (!subscriber.isUnsubscribed) {
	        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var context = subscriber.openContext();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(arg) {
	    var subscriber = arg.subscriber, context = arg.context;
	    subscriber.closeContext(context);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferToggle_1 = __webpack_require__(127);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * Buffers the source Observable values starting from an emission from
	 * `openings` and ending when the output of `closingSelector` emits.
	 *
	 * <span class="informal">Collects values from the past as an array. Starts
	 * collecting only when `opening` emits, and calls the `closingSelector`
	 * function to get an Observable that tells when to close the buffer.</span>
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * a Subscribable or Promise returned by the `closingSelector` function emits.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var buffered = clicks.bufferToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferWhen}
	 * @see {@link windowToggle}
	 *
	 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
	 * buffers.
	 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
	 * which, when it emits, signals that the associated buffer should be emitted
	 * and cleared.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferToggle
	 * @owner Observable
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return BufferToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, openings));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._error.call(this, err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._complete.call(this);
	    };
	    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
	    };
	    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.closeBuffer(innerSub.context);
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        try {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = closingSelector.call(this, value);
	            if (closingNotifier) {
	                this.trySubscribe(closingNotifier);
	            }
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts && context) {
	            var buffer = context.buffer, subscription = context.subscription;
	            this.destination.next(buffer);
	            contexts.splice(contexts.indexOf(context), 1);
	            this.remove(subscription);
	            subscription.unsubscribe();
	        }
	    };
	    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
	        var contexts = this.contexts;
	        var buffer = [];
	        var subscription = new Subscription_1.Subscription();
	        var context = { buffer: buffer, subscription: subscription };
	        contexts.push(context);
	        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            this.closeBuffer(context);
	        }
	        else {
	            innerSubscription.context = context;
	            this.add(innerSubscription);
	            subscription.add(innerSubscription);
	        }
	    };
	    return BufferToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var bufferWhen_1 = __webpack_require__(129);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(9);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Buffers the source Observable values, using a factory function of closing
	 * Observables to determine when to close, emit, and reset the buffer.
	 *
	 * <span class="informal">Collects values from the past as an array. When it
	 * starts collecting values, it calls a function that returns an Observable that
	 * tells when to close the buffer and restart collecting.</span>
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` function emits a value. When it closes
	 * the buffer, it immediately opens a new buffer and repeats the process.
	 *
	 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferWhen(() =>
	 *   Rx.Observable.interval(1000 + Math.random() * 4000)
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link windowWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals buffer closure.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferWhen
	 * @owner Observable
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
	    };
	    return BufferWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.subscribing = false;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferWhenSubscriber.prototype._unsubscribe = function () {
	        this.buffer = null;
	        this.subscribing = false;
	    };
	    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openBuffer();
	    };
	    BufferWhenSubscriber.prototype.notifyComplete = function () {
	        if (this.subscribing) {
	            this.complete();
	        }
	        else {
	            this.openBuffer();
	        }
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var closingSubscription = this.closingSubscription;
	        if (closingSubscription) {
	            this.remove(closingSubscription);
	            closingSubscription.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (this.buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            closingSubscription = new Subscription_1.Subscription();
	            this.closingSubscription = closingSubscription;
	            this.add(closingSubscription);
	            this.subscribing = true;
	            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.subscribing = false;
	        }
	    };
	    return BufferWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var cache_1 = __webpack_require__(131);
	Observable_1.Observable.prototype.cache = cache_1.cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var publishReplay_1 = __webpack_require__(132);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {Observable<any>}
	 * @method cache
	 * @owner Observable
	 */
	function cache(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
	}
	exports.cache = cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(117);
	var multicast_1 = __webpack_require__(133);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MulticastObservable_1 = __webpack_require__(134);
	var ConnectableObservable_1 = __webpack_require__(135);
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
	    var connectable = new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	    return selector ? new MulticastObservable_1.MulticastObservable(this, connectable, selector) : connectable;
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var MulticastObservable = (function (_super) {
	    __extends(MulticastObservable, _super);
	    function MulticastObservable(source, connectable, selector) {
	        _super.call(this);
	        this.source = source;
	        this.connectable = connectable;
	        this.selector = selector;
	    }
	    MulticastObservable.prototype._subscribe = function (subscriber) {
	        var _a = this, selector = _a.selector, connectable = _a.connectable;
	        var subscription = selector(connectable).subscribe(subscriber);
	        subscription.add(connectable.connect());
	        return subscription;
	    };
	    return MulticastObservable;
	}(Observable_1.Observable));
	exports.MulticastObservable = MulticastObservable;
	//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(9);
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
	            connection = this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this));
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
	            connectable._refCount = 0;
	            connectable._subject = null;
	            connectable._connection = null;
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
	        var connection = this.connection;
	        if (connection) {
	            this.connection = null;
	            connection.unsubscribe();
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var catch_1 = __webpack_require__(137);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineAll_1 = __webpack_require__(139);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var combineLatest_1 = __webpack_require__(34);
	/**
	 * Converts a higher-order Observable into a first-order Observable by waiting
	 * for the outer Observable to complete, then applying {@link combineLatest}.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by applying
	 * {@link combineLatest} when the Observable-of-Observables completes.</span>
	 *
	 * <img src="./img/combineAll.png" width="100%">
	 *
	 * Takes an Observable of Observables, and collects all Observables from it.
	 * Once the outer Observable completes, it subscribes to all collected
	 * Observables and combines their values using the {@link combineLatest}
	 * strategy, such that:
	 * - Every time an inner Observable emits, the output Observable emits.
	 * - When the returned observable emits, it emits all of the latest values by:
	 *   - If a `project` function is provided, it is called with each recent value
	 *     from each inner Observable in whatever order they arrived, and the result
	 *     of the `project` function is what is emitted by the output Observable.
	 *   - If there is no `project` function, an array of all of the most recent
	 *     values is emitted by the output Observable.
	 *
	 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev =>
	 *   Rx.Observable.interval(Math.random()*2000).take(3)
	 * ).take(2);
	 * var result = higherOrder.combineAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 * @see {@link mergeAll}
	 *
	 * @param {function} [project] An optional function to map the most recent
	 * values from each inner Observable into a new result. Takes each of the most
	 * recent values from each collected inner Observable as arguments, in order.
	 * @return {Observable} An Observable of projected results or arrays of recent
	 * values.
	 * @method combineAll
	 * @owner Observable
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var combineLatest_1 = __webpack_require__(34);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(42);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatAll_1 = __webpack_require__(143);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(43);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMap_1 = __webpack_require__(145);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(146);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
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
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMapTo_1 = __webpack_require__(148);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMapTo_1 = __webpack_require__(149);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in a serialized fashion on the output Observable.
	 *
	 * <span class="informal">It's like {@link concatMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/concatMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. Each new `innerObservable`
	 * instance emitted on the output Observable is concatenated with the previous
	 * `innerObservable` instance.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
	 * set to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link mergeMapTo}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An observable of values merged together by joining the
	 * passed observable with itself, one after the other, for each value emitted
	 * from the source.
	 * @method concatMapTo
	 * @owner Observable
	 */
	function concatMapTo(innerObservable, resultSelector) {
	    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in the output Observable.
	 *
	 * <span class="informal">It's like {@link mergeMap}, but maps each value always
	 * to the same inner Observable.</span>
	 *
	 * <img src="./img/mergeMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then merges those resulting Observables into one
	 * single Observable, which is the output Observable.
	 *
	 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeScan}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable.
	 * @method mergeMapTo
	 * @owner Observable
	 */
	function mergeMapTo(innerObservable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
	//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
	    };
	    return MergeMapToOperator;
	}());
	exports.MergeMapToOperator = MergeMapToOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
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
	    return MergeMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var count_1 = __webpack_require__(151);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Counts the number of emissions on the source and emits that number when the
	 * source completes.
	 *
	 * <span class="informal">Tells how many values were emitted, when the source
	 * completes.</span>
	 *
	 * <img src="./img/count.png" width="100%">
	 *
	 * `count` transforms an Observable that emits values into an Observable that
	 * emits a single value that represents the number of values emitted by the
	 * source Observable. If the source Observable terminates with an error, `count`
	 * will pass this error notification along without emitting an value first. If
	 * the source Observable does not terminate at all, `count` will neither emit
	 * a value nor terminate. This operator takes an optional `predicate` function
	 * as argument, in which case the output emission will represent the number of
	 * source values that matched `true` with the `predicate`.
	 *
	 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var secondsBeforeClick = seconds.takeUntil(clicks);
	 * var result = secondsBeforeClick.count();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
	 * var numbers = Rx.Observable.range(1, 7);
	 * var result = numbers.count(i => i % 2 === 1);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link max}
	 * @see {@link min}
	 * @see {@link reduce}
	 *
	 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
	 * boolean function to select what values are to be counted. It is provided with
	 * arguments of:
	 * - `value`: the value from the source Observable.
	 * - `index`: the (zero-based) "index" of the value from the source Observable.
	 * - `source`: the source Observable instance itself.
	 * @return {Observable} An Observable of one number that represents the count as
	 * described above.
	 * @method count
	 * @owner Observable
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
	    };
	    return CountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        if (this.predicate) {
	            this._tryPredicate(value);
	        }
	        else {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._tryPredicate = function (value) {
	        var result;
	        try {
	            result = this.predicate(value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=count.js.map

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var dematerialize_1 = __webpack_require__(153);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Converts an Observable of {@link Notification} objects into the emissions
	 * that they represent.
	 *
	 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
	 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
	 *
	 * <img src="./img/dematerialize.png" width="100%">
	 *
	 * `dematerialize` is assumed to operate an Observable that only emits
	 * {@link Notification} objects as `next` emissions, and does not emit any
	 * `error`. Such Observable is the output of a `materialize` operation. Those
	 * notifications are then unwrapped using the metadata they contain, and emitted
	 * as `next`, `error`, and `complete` on the output Observable.
	 *
	 * Use this operator in conjunction with {@link materialize}.
	 *
	 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
	 * var notifA = new Rx.Notification('N', 'A');
	 * var notifB = new Rx.Notification('N', 'B');
	 * var notifE = new Rx.Notification('E', void 0,
	 *   new TypeError('x.toUpperCase is not a function')
	 * );
	 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
	 * var upperCase = materialized.dematerialize();
	 * upperCase.subscribe(x => console.log(x), e => console.error(e));
	 *
	 * @see {@link Notification}
	 * @see {@link materialize}
	 *
	 * @return {Observable} An Observable that emits items and notifications
	 * embedded in Notification objects emitted by the source Observable.
	 * @method dematerialize
	 * @owner Observable
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DeMaterializeSubscriber(subscriber));
	    };
	    return DeMaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var debounce_1 = __webpack_require__(155);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Emits a value from the source Observable only after a particular time span
	 * determined by another Observable has passed without another source emission.
	 *
	 * <span class="informal">It's like {@link debounceTime}, but the time span of
	 * emission silence is determined by a second Observable.</span>
	 *
	 * <img src="./img/debounce.png" width="100%">
	 *
	 * `debounce` delays values emitted by the source Observable, but drops previous
	 * pending delayed emissions if a new value arrives on the source Observable.
	 * This operator keeps track of the most recent value from the source
	 * Observable, and spawns a duration Observable by calling the
	 * `durationSelector` function. The value is emitted only when the duration
	 * Observable emits a value or completes, and if no other value was emitted on
	 * the source Observable since the duration Observable was spawned. If a new
	 * value appears before the duration Observable emits, the previous value will
	 * be dropped and will not be emitted on the output Observable.
	 *
	 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
	 * delay-like operator since output emissions do not necessarily occur at the
	 * same time as they did on the source Observable.
	 *
	 * @example <caption>Emit the most recent click after a burst of clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 * @see {@link throttle}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the timeout
	 * duration for each source value, returned as an Observable or a Promise.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified duration Observable returned by
	 * `durationSelector`, and may drop some values if they occur too frequently.
	 * @method debounce
	 * @owner Observable
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
	    };
	    return DebounceOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	        this.durationSubscription = null;
	    }
	    DebounceSubscriber.prototype._next = function (value) {
	        try {
	            var result = this.durationSelector.call(this, value);
	            if (result) {
	                this._tryNext(value, result);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.emitValue();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype._tryNext = function (value, duration) {
	        var subscription = this.durationSubscription;
	        this.value = value;
	        this.hasValue = true;
	        if (subscription) {
	            subscription.unsubscribe();
	            this.remove(subscription);
	        }
	        subscription = subscribeToResult_1.subscribeToResult(this, duration);
	        if (!subscription.isUnsubscribed) {
	            this.add(this.durationSubscription = subscription);
	        }
	    };
	    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            var value = this.value;
	            var subscription = this.durationSubscription;
	            if (subscription) {
	                this.durationSubscription = null;
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            this.value = null;
	            this.hasValue = false;
	            _super.prototype._next.call(this, value);
	        }
	    };
	    return DebounceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var debounceTime_1 = __webpack_require__(157);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
	/**
	 * Emits a value from the source Observable only after a particular time span
	 * has passed without another source emission.
	 *
	 * <span class="informal">It's like {@link delay}, but passes only the most
	 * recent value from each burst of emissions.</span>
	 *
	 * <img src="./img/debounceTime.png" width="100%">
	 *
	 * `debounceTime` delays values emitted by the source Observable, but drops
	 * previous pending delayed emissions if a new value arrives on the source
	 * Observable. This operator keeps track of the most recent value from the
	 * source Observable, and emits that only when `dueTime` enough time has passed
	 * without any other value appearing on the source Observable. If a new value
	 * appears before `dueTime` silence occurs, the previous value will be dropped
	 * and will not be emitted on the output Observable.
	 *
	 * This is a rate-limiting operator, because it is impossible for more than one
	 * value to be emitted in any time window of duration `dueTime`, but it is also
	 * a delay-like operator since output emissions do not occur at the same time as
	 * they did on the source Observable. Optionally takes a {@link Scheduler} for
	 * managing timers.
	 *
	 * @example <caption>Emit the most recent click after a burst of clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.debounceTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounce}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttleTime}
	 *
	 * @param {number} dueTime The timeout duration in milliseconds (or the time
	 * unit determined internally by the optional `scheduler`) for the window of
	 * time required to wait for emission silence before emitting the most recent
	 * source value.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the timeout for each value.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified `dueTime`, and may drop some values if they occur
	 * too frequently.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var defaultIfEmpty_1 = __webpack_require__(159);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Emits a given value if the source Observable completes without emitting any
	 * `next` value, otherwise mirrors the source Observable.
	 *
	 * <span class="informal">If the source Observable turns out to be empty, then
	 * this operator will emit a default value.</span>
	 *
	 * <img src="./img/defaultIfEmpty.png" width="100%">
	 *
	 * `defaultIfEmpty` emits the values emitted by the source Observable or a
	 * specified default value if the source Observable is empty (completes without
	 * having emitted any `next` value).
	 *
	 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
	 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link empty}
	 * @see {@link last}
	 *
	 * @param {any} [defaultValue=null] The default value used if the source
	 * Observable is empty.
	 * @return {Observable} An Observable that emits either the specified
	 * `defaultValue` if the source Observable emits no items, or the values emitted
	 * by the source Observable.
	 * @method defaultIfEmpty
	 * @owner Observable
	 */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	    };
	    return DefaultIfEmptyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var delay_1 = __webpack_require__(161);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(77);
	var isDate_1 = __webpack_require__(107);
	var Subscriber_1 = __webpack_require__(7);
	var Notification_1 = __webpack_require__(59);
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
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var delayWhen_1 = __webpack_require__(163);
	Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(3);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Delays the emission of items from the source Observable by a given time span
	 * determined by the emissions of another Observable.
	 *
	 * <span class="informal">It's like {@link delay}, but the time span of the
	 * delay duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/delayWhen.png" width="100%">
	 *
	 * `delayWhen` time shifts each emitted value from the source Observable by a
	 * time span determined by another Observable. When the source emits a value,
	 * the `delayDurationSelector` function is called with the source value as
	 * argument, and should return an Observable, called the "duration" Observable.
	 * The source value is emitted on the output Observable only when the duration
	 * Observable emits a value or completes.
	 *
	 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
	 * is an Observable. When `subscriptionDelay` emits its first value or
	 * completes, the source Observable is subscribed to and starts behaving like
	 * described in the previous paragraph. If `subscriptionDelay` is not provided,
	 * `delayWhen` will subscribe to the source Observable as soon as the output
	 * Observable is subscribed.
	 *
	 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delayWhen(event =>
	 *   Rx.Observable.interval(Math.random() * 5000)
	 * );
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounce}
	 * @see {@link delay}
	 *
	 * @param {function(value: T): Observable} delayDurationSelector A function that
	 * returns an Observable for each value emitted by the source Observable, which
	 * is then used to delay the emission of that item on the output Observable
	 * until the Observable returned from this function emits a value.
	 * @param {Observable} subscriptionDelay An Observable that triggers the
	 * subscription to the source Observable once it emits any value.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by an amount of time specified by the Observable returned by
	 * `delayDurationSelector`.
	 * @method delayWhen
	 * @owner Observable
	 */
	function delayWhen(delayDurationSelector, subscriptionDelay) {
	    if (subscriptionDelay) {
	        return new SubscriptionDelayObservable(this, subscriptionDelay)
	            .lift(new DelayWhenOperator(delayDurationSelector));
	    }
	    return this.lift(new DelayWhenOperator(delayDurationSelector));
	}
	exports.delayWhen = delayWhen;
	var DelayWhenOperator = (function () {
	    function DelayWhenOperator(delayDurationSelector) {
	        this.delayDurationSelector = delayDurationSelector;
	    }
	    DelayWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
	    };
	    return DelayWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelayWhenSubscriber = (function (_super) {
	    __extends(DelayWhenSubscriber, _super);
	    function DelayWhenSubscriber(destination, delayDurationSelector) {
	        _super.call(this, destination);
	        this.delayDurationSelector = delayDurationSelector;
	        this.completed = false;
	        this.delayNotifierSubscriptions = [];
	        this.values = [];
	    }
	    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(outerValue);
	        this.removeSubscription(innerSub);
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
	        var value = this.removeSubscription(innerSub);
	        if (value) {
	            this.destination.next(value);
	        }
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype._next = function (value) {
	        try {
	            var delayNotifier = this.delayDurationSelector(value);
	            if (delayNotifier) {
	                this.tryDelay(delayNotifier, value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DelayWhenSubscriber.prototype._complete = function () {
	        this.completed = true;
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
	        subscription.unsubscribe();
	        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
	        var value = null;
	        if (subscriptionIdx !== -1) {
	            value = this.values[subscriptionIdx];
	            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
	            this.values.splice(subscriptionIdx, 1);
	        }
	        return value;
	    };
	    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
	        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
	        this.add(notifierSubscription);
	        this.delayNotifierSubscriptions.push(notifierSubscription);
	        this.values.push(value);
	    };
	    DelayWhenSubscriber.prototype.tryComplete = function () {
	        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
	            this.destination.complete();
	        }
	    };
	    return DelayWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelayObservable = (function (_super) {
	    __extends(SubscriptionDelayObservable, _super);
	    function SubscriptionDelayObservable(source, subscriptionDelay) {
	        _super.call(this);
	        this.source = source;
	        this.subscriptionDelay = subscriptionDelay;
	    }
	    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
	        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
	    };
	    return SubscriptionDelayObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelaySubscriber = (function (_super) {
	    __extends(SubscriptionDelaySubscriber, _super);
	    function SubscriptionDelaySubscriber(parent, source) {
	        _super.call(this);
	        this.parent = parent;
	        this.source = source;
	        this.sourceSubscribed = false;
	    }
	    SubscriptionDelaySubscriber.prototype._next = function (unused) {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype._error = function (err) {
	        this.unsubscribe();
	        this.parent.error(err);
	    };
	    SubscriptionDelaySubscriber.prototype._complete = function () {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
	        if (!this.sourceSubscribed) {
	            this.sourceSubscribed = true;
	            this.unsubscribe();
	            this.source.subscribe(this.parent);
	        }
	    };
	    return SubscriptionDelaySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinct_1 = __webpack_require__(165);
	Observable_1.Observable.prototype.distinct = distinct_1.distinct;
	//# sourceMappingURL=distinct.js.map

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
	 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
	 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinct
	 * @owner Observable
	 */
	function distinct(compare, flushes) {
	    return this.lift(new DistinctOperator(compare, flushes));
	}
	exports.distinct = distinct;
	var DistinctOperator = (function () {
	    function DistinctOperator(compare, flushes) {
	        this.compare = compare;
	        this.flushes = flushes;
	    }
	    DistinctOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
	    };
	    return DistinctOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctSubscriber = (function (_super) {
	    __extends(DistinctSubscriber, _super);
	    function DistinctSubscriber(destination, compare, flushes) {
	        _super.call(this, destination);
	        this.values = [];
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	        if (flushes) {
	            this.add(subscribeToResult_1.subscribeToResult(this, flushes));
	        }
	    }
	    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values.length = 0;
	    };
	    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    DistinctSubscriber.prototype._next = function (value) {
	        var found = false;
	        var values = this.values;
	        var len = values.length;
	        try {
	            for (var i = 0; i < len; i++) {
	                if (this.compare(values[i], value)) {
	                    found = true;
	                    return;
	                }
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.values.push(value);
	        this.destination.next(value);
	    };
	    DistinctSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    return DistinctSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.DistinctSubscriber = DistinctSubscriber;
	//# sourceMappingURL=distinct.js.map

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctKey_1 = __webpack_require__(167);
	Observable_1.Observable.prototype.distinctKey = distinctKey_1.distinctKey;
	//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var distinct_1 = __webpack_require__(165);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
	 * using a property accessed by using the key provided to check if the two items are distinct.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
	 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
	 * @param {string} key string key for object property lookup on each item.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
	 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctKey
	 * @owner Observable
	 */
	function distinctKey(key, compare, flushes) {
	    return distinct_1.distinct.call(this, function (x, y) {
	        if (compare) {
	            return compare(x[key], y[key]);
	        }
	        return x[key] === y[key];
	    }, flushes);
	}
	exports.distinctKey = distinctKey;
	//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctUntilChanged_1 = __webpack_require__(169);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
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

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctUntilKeyChanged_1 = __webpack_require__(171);
	Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var distinctUntilChanged_1 = __webpack_require__(169);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
	 * using a property accessed by using the key provided to check if the two items are distinct.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {string} key string key for object property lookup on each item.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
	 * @method distinctUntilKeyChanged
	 * @owner Observable
	 */
	function distinctUntilKeyChanged(key, compare) {
	    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
	        if (compare) {
	            return compare(x[key], y[key]);
	        }
	        return x[key] === y[key];
	    });
	}
	exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var do_1 = __webpack_require__(173);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var exhaust_1 = __webpack_require__(175);
	Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Converts a higher-order Observable into a first-order Observable by dropping
	 * inner Observables while the previous inner Observable has not yet completed.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * next inner Observables while the current inner is still executing.</span>
	 *
	 * <img src="./img/exhaust.png" width="100%">
	 *
	 * `exhaust` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable begins emitting the items emitted by that
	 * inner Observable. So far, it behaves like {@link mergeAll}. However,
	 * `exhaust` ignores every new inner Observable if the previous Observable has
	 * not yet completed. Once that one completes, it will accept and flatten the
	 * next inner Observable and repeat this process.
	 *
	 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var result = higherOrder.exhaust();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link switch}
	 * @see {@link mergeAll}
	 * @see {@link exhaustMap}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} Returns an Observable that takes a source of Observables
	 * and propagates the first observable exclusively until it completes before
	 * subscribing to the next.
	 * @method exhaust
	 * @owner Observable
	 */
	function exhaust() {
	    return this.lift(new SwitchFirstOperator());
	}
	exports.exhaust = exhaust;
	var SwitchFirstOperator = (function () {
	    function SwitchFirstOperator() {
	    }
	    SwitchFirstOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchFirstSubscriber(subscriber));
	    };
	    return SwitchFirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchFirstSubscriber = (function (_super) {
	    __extends(SwitchFirstSubscriber, _super);
	    function SwitchFirstSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasCompleted = false;
	        this.hasSubscription = false;
	    }
	    SwitchFirstSubscriber.prototype._next = function (value) {
	        if (!this.hasSubscription) {
	            this.hasSubscription = true;
	            this.add(subscribeToResult_1.subscribeToResult(this, value));
	        }
	    };
	    SwitchFirstSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (!this.hasSubscription) {
	            this.destination.complete();
	        }
	    };
	    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.hasSubscription = false;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return SwitchFirstSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var exhaustMap_1 = __webpack_require__(177);
	Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable only if the previous projected Observable has completed.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link exhaust}.</span>
	 *
	 * <img src="./img/exhaustMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. When it projects a source value to
	 * an Observable, the output Observable begins emitting the items emitted by
	 * that projected Observable. However, `exhaustMap` ignores every new projected
	 * Observable if the previous projected Observable has not yet completed. Once
	 * that one completes, it will accept and flatten the next projected Observable
	 * and repeat this process.
	 *
	 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaust}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable containing projected Observables
	 * of each item of the source, ignoring projected Observables that start before
	 * their preceding Observable has completed.
	 * @method exhaustMap
	 * @owner Observable
	 */
	function exhaustMap(project, resultSelector) {
	    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
	}
	exports.exhaustMap = exhaustMap;
	var SwitchFirstMapOperator = (function () {
	    function SwitchFirstMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchFirstMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchFirstMapSubscriber = (function (_super) {
	    __extends(SwitchFirstMapSubscriber, _super);
	    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.hasSubscription = false;
	        this.hasCompleted = false;
	        this.index = 0;
	    }
	    SwitchFirstMapSubscriber.prototype._next = function (value) {
	        if (!this.hasSubscription) {
	            this.tryNext(value);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
	        var index = this.index++;
	        var destination = this.destination;
	        try {
	            var result = this.project(value, index);
	            this.hasSubscription = true;
	            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	        }
	        catch (err) {
	            destination.error(err);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (!this.hasSubscription) {
	            this.destination.complete();
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        try {
	            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            destination.next(result);
	        }
	        catch (err) {
	            destination.error(err);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.hasSubscription = false;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return SwitchFirstMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var expand_1 = __webpack_require__(179);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
	 * resulting in a new value to then be applied again with the function.
	 * @param {function} project the function for projecting the next emitted item of the Observable.
	 * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
	 * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
	 * @return {Observable} an Observable containing the expansions of the source Observable.
	 * @method expand
	 * @owner Observable
	 */
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
	    };
	    return ExpandOperator;
	}());
	exports.ExpandOperator = ExpandOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (arg) {
	        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        this.active++;
	        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._next(innerValue);
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return ExpandSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var elementAt_1 = __webpack_require__(181);
	Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var ArgumentOutOfRangeError_1 = __webpack_require__(182);
	/**
	 * Emits the single value at the specified `index` in a sequence of emissions
	 * from the source Observable.
	 *
	 * <span class="informal">Emits only the i-th value, then completes.</span>
	 *
	 * <img src="./img/elementAt.png" width="100%">
	 *
	 * `elementAt` returns an Observable that emits the item at the specified
	 * `index` in the source Observable, or a default value if that `index` is out
	 * of range and the `default` argument is provided. If the `default` argument is
	 * not given and the `index` is out of range, the output Observable will emit an
	 * `ArgumentOutOfRangeError` error.
	 *
	 * @example <caption>Emit only the third click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.elementAt(2);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link skip}
	 * @see {@link single}
	 * @see {@link take}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
	 * Observable has completed before emitting the i-th `next` notification.
	 *
	 * @param {number} index Is the number `i` for the i-th source emission that has
	 * happened since the subscription, starting from the number `0`.
	 * @param {T} [defaultValue] The default value returned for missing indices.
	 * @return {Observable} An Observable that emits a single item, if it is found.
	 * Otherwise, will emit the default value if given. If not, then emits an error.
	 * @method elementAt
	 * @owner Observable
	 */
	function elementAt(index, defaultValue) {
	    return this.lift(new ElementAtOperator(index, defaultValue));
	}
	exports.elementAt = elementAt;
	var ElementAtOperator = (function () {
	    function ElementAtOperator(index, defaultValue) {
	        this.index = index;
	        this.defaultValue = defaultValue;
	        if (index < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    ElementAtOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
	    };
	    return ElementAtOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ElementAtSubscriber = (function (_super) {
	    __extends(ElementAtSubscriber, _super);
	    function ElementAtSubscriber(destination, index, defaultValue) {
	        _super.call(this, destination);
	        this.index = index;
	        this.defaultValue = defaultValue;
	    }
	    ElementAtSubscriber.prototype._next = function (x) {
	        if (this.index-- === 0) {
	            this.destination.next(x);
	            this.destination.complete();
	        }
	    };
	    ElementAtSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index >= 0) {
	            if (typeof this.defaultValue !== 'undefined') {
	                destination.next(this.defaultValue);
	            }
	            else {
	                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
	            }
	        }
	        destination.complete();
	    };
	    return ElementAtSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var filter_1 = __webpack_require__(184);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var finally_1 = __webpack_require__(186);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(9);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} callback function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(callback) {
	    return this.lift(new FinallyOperator(callback));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(callback) {
	        this.callback = callback;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.callback));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, callback) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(callback));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var find_1 = __webpack_require__(188);
	Observable_1.Observable.prototype.find = find_1.find;
	//# sourceMappingURL=find.js.map

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Emits only the first value emitted by the source Observable that meets some
	 * condition.
	 *
	 * <span class="informal">Finds the first value that passes some test and emits
	 * that.</span>
	 *
	 * <img src="./img/find.png" width="100%">
	 *
	 * `find` searches for the first item in the source Observable that matches the
	 * specified condition embodied by the `predicate`, and returns the first
	 * occurrence in the source. Unlike {@link first}, the `predicate` is required
	 * in `find`, and does not emit an error if a valid value is not found.
	 *
	 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link first}
	 * @see {@link findIndex}
	 * @see {@link take}
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
	 * A function called with each item to test for condition matching.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable<T>} An Observable of the first item that matches the
	 * condition.
	 * @method find
	 * @owner Observable
	 */
	function find(predicate, thisArg) {
	    if (typeof predicate !== 'function') {
	        throw new TypeError('predicate is not a function');
	    }
	    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
	}
	exports.find = find;
	var FindValueOperator = (function () {
	    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
	        this.predicate = predicate;
	        this.source = source;
	        this.yieldIndex = yieldIndex;
	        this.thisArg = thisArg;
	    }
	    FindValueOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
	    };
	    return FindValueOperator;
	}());
	exports.FindValueOperator = FindValueOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FindValueSubscriber = (function (_super) {
	    __extends(FindValueSubscriber, _super);
	    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.yieldIndex = yieldIndex;
	        this.thisArg = thisArg;
	        this.index = 0;
	    }
	    FindValueSubscriber.prototype.notifyComplete = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	    };
	    FindValueSubscriber.prototype._next = function (value) {
	        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
	        var index = this.index++;
	        try {
	            var result = predicate.call(thisArg || this, value, index, this.source);
	            if (result) {
	                this.notifyComplete(this.yieldIndex ? index : value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    FindValueSubscriber.prototype._complete = function () {
	        this.notifyComplete(this.yieldIndex ? -1 : undefined);
	    };
	    return FindValueSubscriber;
	}(Subscriber_1.Subscriber));
	exports.FindValueSubscriber = FindValueSubscriber;
	//# sourceMappingURL=find.js.map

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var findIndex_1 = __webpack_require__(190);
	Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var find_1 = __webpack_require__(188);
	/**
	 * Emits only the index of the first value emitted by the source Observable that
	 * meets some condition.
	 *
	 * <span class="informal">It's like {@link find}, but emits the index of the
	 * found value, not the value itself.</span>
	 *
	 * <img src="./img/findIndex.png" width="100%">
	 *
	 * `findIndex` searches for the first item in the source Observable that matches
	 * the specified condition embodied by the `predicate`, and returns the
	 * (zero-based) index of the first occurrence in the source. Unlike
	 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
	 * an error if a valid value is not found.
	 *
	 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link first}
	 * @see {@link take}
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
	 * A function called with each item to test for condition matching.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of the index of the first item that
	 * matches the condition.
	 * @method find
	 * @owner Observable
	 */
	function findIndex(predicate, thisArg) {
	    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
	}
	exports.findIndex = findIndex;
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var first_1 = __webpack_require__(192);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var EmptyError_1 = __webpack_require__(193);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var groupBy_1 = __webpack_require__(195);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Subscription_1 = __webpack_require__(9);
	var Observable_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(2);
	var Map_1 = __webpack_require__(196);
	var FastMap_1 = __webpack_require__(198);
	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one
	 * {@link GroupedObservable} per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {function(value: T): K} keySelector a function that extracts the key
	 * for each item.
	 * @param {function(value: T): R} [elementSelector] a function that extracts the
	 * return element for each item.
	 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
	 * a function that returns an Observable to determine how long each group should
	 * exist.
	 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
	 * GroupedObservables, each of which corresponds to a unique key value and each
	 * of which emits those items from the source Observable that share that key
	 * value.
	 * @method groupBy
	 * @owner Observable
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}
	exports.groupBy = groupBy;
	var GroupByOperator = (function () {
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
	    };
	    return GroupByOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.attemptedToUnsubscribe = false;
	        this.count = 0;
	    }
	    GroupBySubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            key = this.keySelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this._group(value, key);
	    };
	    GroupBySubscriber.prototype._group = function (value, key) {
	        var groups = this.groups;
	        if (!groups) {
	            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	        }
	        var group = groups.get(key);
	        var element;
	        if (this.elementSelector) {
	            try {
	                element = this.elementSelector(value);
	            }
	            catch (err) {
	                this.error(err);
	            }
	        }
	        else {
	            element = value;
	        }
	        if (!group) {
	            groups.set(key, group = new Subject_1.Subject());
	            var groupedObservable = new GroupedObservable(key, group, this);
	            this.destination.next(groupedObservable);
	            if (this.durationSelector) {
	                var duration = void 0;
	                try {
	                    duration = this.durationSelector(new GroupedObservable(key, group));
	                }
	                catch (err) {
	                    this.error(err);
	                    return;
	                }
	                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	            }
	        }
	        if (!group.isUnsubscribed) {
	            group.next(element);
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	            });
	            groups.clear();
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	            });
	            groups.clear();
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    GroupBySubscriber.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
	            this.attemptedToUnsubscribe = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	            }
	        }
	    };
	    return GroupBySubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this._complete();
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.error(err);
	        }
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.complete();
	        }
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * An Observable representing values belonging to the same group represented by
	 * a common key. The values emitted by a GroupedObservable come from the source
	 * Observable. The common key is available as the field `key` on a
	 * GroupedObservable instance.
	 *
	 * @class GroupedObservable<K, T>
	 */
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
	        if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(refCountSubscription));
	        }
	        subscription.add(groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	}(Observable_1.Observable));
	exports.GroupedObservable = GroupedObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        var parent = this.parent;
	        if (!parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            parent.count -= 1;
	            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                parent.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	var MapPolyfill_1 = __webpack_require__(197);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 197 */
/***/ function(module, exports) {

	"use strict";
	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this.size = 0;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	}());
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 198 */
/***/ function(module, exports) {

	"use strict";
	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	}());
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var ignoreElements_1 = __webpack_require__(200);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var noop_1 = __webpack_require__(90);
	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @return {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 * @method ignoreElements
	 * @owner Observable
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new IgnoreElementsSubscriber(subscriber));
	    };
	    return IgnoreElementsOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var isEmpty_1 = __webpack_require__(202);
	Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
	 *
	 * <img src="./img/isEmpty.png" width="100%">
	 *
	 * @return {Observable} an Observable that emits a Boolean.
	 * @method isEmpty
	 * @owner Observable
	 */
	function isEmpty() {
	    return this.lift(new IsEmptyOperator());
	}
	exports.isEmpty = isEmpty;
	var IsEmptyOperator = (function () {
	    function IsEmptyOperator() {
	    }
	    IsEmptyOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new IsEmptySubscriber(observer));
	    };
	    return IsEmptyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var IsEmptySubscriber = (function (_super) {
	    __extends(IsEmptySubscriber, _super);
	    function IsEmptySubscriber(destination) {
	        _super.call(this, destination);
	    }
	    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
	        var destination = this.destination;
	        destination.next(isEmpty);
	        destination.complete();
	    };
	    IsEmptySubscriber.prototype._next = function (value) {
	        this.notifyComplete(false);
	    };
	    IsEmptySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return IsEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var audit_1 = __webpack_require__(204);
	Observable_1.Observable.prototype.audit = audit_1.audit;
	//# sourceMappingURL=audit.js.map

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Ignores source values for a duration determined by another Observable, then
	 * emits the most recent value from the source Observable, then repeats this
	 * process.
	 *
	 * <span class="informal">It's like {@link auditTime}, but the silencing
	 * duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/audit.png" width="100%">
	 *
	 * `audit` is similar to `throttle`, but emits the last value from the silenced
	 * time window, instead of the first value. `audit` emits the most recent value
	 * from the source Observable on the output Observable as soon as its internal
	 * timer becomes disabled, and ignores source values while the timer is enabled.
	 * Initially, the timer is disabled. As soon as the first source value arrives,
	 * the timer is enabled by calling the `durationSelector` function with the
	 * source value, which returns the "duration" Observable. When the duration
	 * Observable emits a value or completes, the timer is disabled, then the most
	 * recent source value is emitted on the output Observable, and this process
	 * repeats for the next source value.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounce}
	 * @see {@link delayWhen}
	 * @see {@link sample}
	 * @see {@link throttle}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the silencing
	 * duration, returned as an Observable or a Promise.
	 * @return {Observable<T>} An Observable that performs rate-limiting of
	 * emissions from the source Observable.
	 * @method audit
	 * @owner Observable
	 */
	function audit(durationSelector) {
	    return this.lift(new AuditOperator(durationSelector));
	}
	exports.audit = audit;
	var AuditOperator = (function () {
	    function AuditOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    AuditOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
	    };
	    return AuditOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditSubscriber = (function (_super) {
	    __extends(AuditSubscriber, _super);
	    function AuditSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	    }
	    AuditSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	            }
	        }
	    };
	    AuditSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    AuditSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return AuditSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=audit.js.map

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var auditTime_1 = __webpack_require__(206);
	Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(77);
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Ignores source values for `duration` milliseconds, then emits the most recent
	 * value from the source Observable, then repeats this process.
	 *
	 * <span class="informal">When it sees a source values, it ignores that plus
	 * the next ones for `duration` milliseconds, and then it emits the most recent
	 * value from the source.</span>
	 *
	 * <img src="./img/auditTime.png" width="100%">
	 *
	 * `auditTime` is similar to `throttleTime`, but emits the last value from the
	 * silenced time window, instead of the first value. `auditTime` emits the most
	 * recent value from the source Observable on the output Observable as soon as
	 * its internal timer becomes disabled, and ignores source values while the
	 * timer is enabled. Initially, the timer is disabled. As soon as the first
	 * source value arrives, the timer is enabled. After `duration` milliseconds (or
	 * the time unit determined internally by the optional `scheduler`) has passed,
	 * the timer is disabled, then the most recent source value is emitted on the
	 * output Observable, and this process repeats for the next source value.
	 * Optionally takes a {@link Scheduler} for managing timers.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.auditTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttleTime}
	 *
	 * @param {number} duration Time to wait before emitting the most recent source
	 * value, measured in milliseconds or the time unit determined internally
	 * by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the rate-limiting behavior.
	 * @return {Observable<T>} An Observable that performs rate-limiting of
	 * emissions from the source Observable.
	 * @method auditTime
	 * @owner Observable
	 */
	function auditTime(duration, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new AuditTimeOperator(duration, scheduler));
	}
	exports.auditTime = auditTime;
	var AuditTimeOperator = (function () {
	    function AuditTimeOperator(duration, scheduler) {
	        this.duration = duration;
	        this.scheduler = scheduler;
	    }
	    AuditTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
	    };
	    return AuditTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditTimeSubscriber = (function (_super) {
	    __extends(AuditTimeSubscriber, _super);
	    function AuditTimeSubscriber(destination, duration, scheduler) {
	        _super.call(this, destination);
	        this.duration = duration;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	    }
	    AuditTimeSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
	        }
	    };
	    AuditTimeSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    return AuditTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var last_1 = __webpack_require__(208);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var EmptyError_1 = __webpack_require__(193);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @return {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 * @method last
	 * @owner Observable
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return LastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var let_1 = __webpack_require__(210);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 210 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var every_1 = __webpack_require__(212);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    return this.lift(new EveryOperator(predicate, thisArg, this));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var map_1 = __webpack_require__(214);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
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
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mapTo_1 = __webpack_require__(216);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var materialize_1 = __webpack_require__(218);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Notification_1 = __webpack_require__(59);
	/**
	 * Represents all of the notifications from the source Observable as `next`
	 * emissions marked with their original types within {@link Notification}
	 * objects.
	 *
	 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
	 * {@link Notification} objects, emitted as `next` on the output Observable.
	 * </span>
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * `materialize` returns an Observable that emits a `next` notification for each
	 * `next`, `error`, or `complete` emission of the source Observable. When the
	 * source Observable emits `complete`, the output Observable will emit `next` as
	 * a Notification of type "complete", and then it will emit `complete` as well.
	 * When the source Observable emits `error`, the output will emit `next` as a
	 * Notification of type "error", and then `complete`.
	 *
	 * This operator is useful for producing metadata of the source Observable, to
	 * be consumed as `next` emissions. Use it in conjunction with
	 * {@link dematerialize}.
	 *
	 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
	 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
	 * var upperCase = letters.map(x => x.toUpperCase());
	 * var materialized = upperCase.materialize();
	 * materialized.subscribe(x => console.log(x));
	 *
	 * @see {@link Notification}
	 * @see {@link dematerialize}
	 *
	 * @return {Observable<Notification<T>>} An Observable that emits
	 * {@link Notification} objects that wrap the original emissions from the source
	 * Observable with metadata.
	 * @method materialize
	 * @owner Observable
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MaterializeSubscriber(subscriber));
	    };
	    return MaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var max_1 = __webpack_require__(220);
	Observable_1.Observable.prototype.max = max_1.max;
	//# sourceMappingURL=max.js.map

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reduce_1 = __webpack_require__(221);
	/**
	 * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the largest number.
	 *
	 * <img src="./img/max.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
	 * items.
	 * @return {Observable} an Observable that emits item with the largest number.
	 * @method max
	 * @owner Observable
	 */
	function max(comparer) {
	    var max = (typeof comparer === 'function')
	        ? comparer
	        : function (x, y) { return x > y ? x : y; };
	    return this.lift(new reduce_1.ReduceOperator(max));
	}
	exports.max = max;
	//# sourceMappingURL=max.js.map

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Applies an accumulator function over the source Observable, and returns the
	 * accumulated result when the source completes, given an optional seed value.
	 *
	 * <span class="informal">Combines together all values emitted on the source,
	 * using an accumulator function that knows how to join a new source value into
	 * the accumulation from the past.</span>
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * Like
	 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
	 * `reduce` applies an `accumulator` function against an accumulation and each
	 * value of the source Observable (from the past) to reduce it to a single
	 * value, emitted on the output Observable. Note that `reduce` will only emit
	 * one value, only when the source Observable completes. It is equivalent to
	 * applying operator {@link scan} followed by operator {@link last}.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
	 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
	 *   .takeUntil(Rx.Observable.interval(5000));
	 * var ones = clicksInFiveSeconds.mapTo(1);
	 * var seed = 0;
	 * var count = ones.reduce((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link count}
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link scan}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @return {Observable<R>} An Observable that emits a single value that is the
	 * result of accumulating the values emitted by the source Observable.
	 * @method reduce
	 * @owner Observable
	 */
	function reduce(accumulator, seed) {
	    return this.lift(new ReduceOperator(accumulator, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.hasValue = false;
	        this.acc = seed;
	        this.accumulator = accumulator;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(84);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeAll_1 = __webpack_require__(43);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMap_1 = __webpack_require__(146);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMapTo_1 = __webpack_require__(149);
	Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeScan_1 = __webpack_require__(227);
	Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var subscribeToResult_1 = __webpack_require__(36);
	var OuterSubscriber_1 = __webpack_require__(35);
	/**
	 * @param project
	 * @param seed
	 * @param concurrent
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method mergeScan
	 * @owner Observable
	 */
	function mergeScan(project, seed, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeScanOperator(project, seed, concurrent));
	}
	exports.mergeScan = mergeScan;
	var MergeScanOperator = (function () {
	    function MergeScanOperator(project, seed, concurrent) {
	        this.project = project;
	        this.seed = seed;
	        this.concurrent = concurrent;
	    }
	    MergeScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
	    };
	    return MergeScanOperator;
	}());
	exports.MergeScanOperator = MergeScanOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeScanSubscriber = (function (_super) {
	    __extends(MergeScanSubscriber, _super);
	    function MergeScanSubscriber(destination, project, acc, concurrent) {
	        _super.call(this, destination);
	        this.project = project;
	        this.acc = acc;
	        this.concurrent = concurrent;
	        this.hasValue = false;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeScanSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var index = this.index++;
	            var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
	            var destination = this.destination;
	            if (ish === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.active++;
	                this._innerSub(ish, value, index);
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeScanSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            if (this.hasValue === false) {
	                this.destination.next(this.acc);
	            }
	            this.destination.complete();
	        }
	    };
	    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var destination = this.destination;
	        this.acc = innerValue;
	        this.hasValue = true;
	        destination.next(innerValue);
	    };
	    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            if (this.hasValue === false) {
	                this.destination.next(this.acc);
	            }
	            this.destination.complete();
	        }
	    };
	    return MergeScanSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeScanSubscriber = MergeScanSubscriber;
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var min_1 = __webpack_require__(229);
	Observable_1.Observable.prototype.min = min_1.min;
	//# sourceMappingURL=min.js.map

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reduce_1 = __webpack_require__(221);
	/**
	 * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the smallest number.
	 *
	 * <img src="./img/min.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
	 * @return {Observable<R>} an Observable that emits item with the smallest number.
	 * @method min
	 * @owner Observable
	 */
	function min(comparer) {
	    var min = (typeof comparer === 'function')
	        ? comparer
	        : function (x, y) { return x < y ? x : y; };
	    return this.lift(new reduce_1.ReduceOperator(min));
	}
	exports.min = min;
	//# sourceMappingURL=min.js.map

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var multicast_1 = __webpack_require__(133);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(58);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var onErrorResumeNext_1 = __webpack_require__(94);
	Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var pairwise_1 = __webpack_require__(234);
	Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
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
	 * @return {Observable<[T, T]>} An Observable of pairs of consecutive values
	 * from the source Observable.
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
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var partition_1 = __webpack_require__(236);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var not_1 = __webpack_require__(237);
	var filter_1 = __webpack_require__(184);
	/**
	 * Splits the source Observable into two, one with values that satisfy a
	 * predicate, and another with values that don't satisfy the predicate.
	 *
	 * <span class="informal">It's like {@link filter}, but returns two Observables:
	 * one like the output of {@link filter}, and the other with values that did not
	 * pass the condition.</span>
	 *
	 * <img src="./img/partition.png" width="100%">
	 *
	 * `partition` outputs an array with two Observables that partition the values
	 * from the source Observable through the given `predicate` function. The first
	 * Observable in that array emits source values for which the predicate argument
	 * returns true. The second Observable emits source values for which the
	 * predicate returns false. The first behaves like {@link filter} and the second
	 * behaves like {@link filter} with the predicate negated.
	 *
	 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
	 * var clicksOnDivs = parts[0];
	 * var clicksElsewhere = parts[1];
	 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
	 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
	 *
	 * @see {@link filter}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted on the first Observable in the returned array, if
	 * `false` the value is emitted on the second Observable in the array. The
	 * `index` parameter is the number `i` for the i-th source emission that has
	 * happened since the subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
	 * with values that passed the predicate, and another with values that did not
	 * pass the predicate.
	 * @method partition
	 * @owner Observable
	 */
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";
	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var pluck_1 = __webpack_require__(239);
	Observable_1.Observable.prototype.pluck = pluck_1.pluck;
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(214);
	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publish_1 = __webpack_require__(241);
	Observable_1.Observable.prototype.publish = publish_1.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subject_1 = __webpack_require__(2);
	var multicast_1 = __webpack_require__(133);
	/**
	 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
	 * before it begins emitting items to those Observers that have subscribed to it.
	 *
	 * <img src="./img/publish.png" width="100%">
	 *
	 * @param {Function} Optional selector function which can use the multicasted source sequence as many times as needed,
	 * without causing multiple subscriptions to the source sequence.
	 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	 * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
	 * @method publish
	 * @owner Observable
	 */
	function publish(selector) {
	    return selector ? multicast_1.multicast.call(this, function () { return new Subject_1.Subject(); }, selector) :
	        multicast_1.multicast.call(this, new Subject_1.Subject());
	}
	exports.publish = publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishBehavior_1 = __webpack_require__(243);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BehaviorSubject_1 = __webpack_require__(244);
	var multicast_1 = __webpack_require__(133);
	/**
	 * @param value
	 * @return {ConnectableObservable<T>}
	 * @method publishBehavior
	 * @owner Observable
	 */
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var throwError_1 = __webpack_require__(245);
	var ObjectUnsubscribedError_1 = __webpack_require__(19);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasError) {
	            throwError_1.throwError(this.thrownError);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype.next = function (value) {
	        _super.prototype.next.call(this, this._value = value);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishReplay_1 = __webpack_require__(132);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishLast_1 = __webpack_require__(248);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncSubject_1 = __webpack_require__(24);
	var multicast_1 = __webpack_require__(133);
	/**
	 * @return {ConnectableObservable<T>}
	 * @method publishLast
	 * @owner Observable
	 */
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var race_1 = __webpack_require__(86);
	Observable_1.Observable.prototype.race = race_1.race;
	//# sourceMappingURL=race.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var reduce_1 = __webpack_require__(221);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var repeat_1 = __webpack_require__(252);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var EmptyObservable_1 = __webpack_require__(33);
	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 * @method repeat
	 * @owner Observable
	 */
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    }
	    else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
	    };
	    return RepeatOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RepeatSubscriber = (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RepeatSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.complete.call(this);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RepeatSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var retry_1 = __webpack_require__(254);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @return {Observable} the source Observable modified with the retry logic.
	 * @method retry
	 * @owner Observable
	 */
	function retry(count) {
	    if (count === void 0) { count = -1; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
	    };
	    return RetryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetrySubscriber = (function (_super) {
	    __extends(RetrySubscriber, _super);
	    function RetrySubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RetrySubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.error.call(this, err);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RetrySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=retry.js.map

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var retryWhen_1 = __webpack_require__(256);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @return {Observable} the source Observable modified with retry logic.
	 * @method retryWhen
	 * @owner Observable
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
	    };
	    return RetryWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetryWhenSubscriber = (function (_super) {
	    __extends(RetryWhenSubscriber, _super);
	    function RetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;
	            if (!retries) {
	                errors = new Subject_1.Subject();
	                retries = tryCatch_1.tryCatch(this.notifier)(errors);
	                if (retries === errorObject_1.errorObject) {
	                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
	                }
	                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
	            }
	            else {
	                this.errors = null;
	                this.retriesSubscription = null;
	            }
	            this.unsubscribe();
	            this.isUnsubscribed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            errors.next(err);
	        }
	    };
	    RetryWhenSubscriber.prototype._unsubscribe = function () {
	        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
	        if (errors) {
	            errors.unsubscribe();
	            this.errors = null;
	        }
	        if (retriesSubscription) {
	            retriesSubscription.unsubscribe();
	            this.retriesSubscription = null;
	        }
	        this.retries = null;
	    };
	    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
	        this.errors = null;
	        this.retries = null;
	        this.retriesSubscription = null;
	        this.unsubscribe();
	        this.isStopped = false;
	        this.isUnsubscribed = false;
	        this.errors = errors;
	        this.retries = retries;
	        this.retriesSubscription = retriesSubscription;
	        this.source.subscribe(this);
	    };
	    return RetryWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var sample_1 = __webpack_require__(258);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Emits the most recently emitted value from the source Observable whenever
	 * another Observable, the `notifier`, emits.
	 *
	 * <span class="informal">It's like {@link sampleTime}, but samples whenever
	 * the `notifier` Observable emits something.</span>
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * Whenever the `notifier` Observable emits a value or completes, `sample`
	 * looks at the source Observable and emits whichever value it has most recently
	 * emitted since the previous sampling, unless the source has not emitted
	 * anything since the previous sampling. The `notifier` is subscribed to as soon
	 * as the output Observable is subscribed.
	 *
	 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = seconds.sample(clicks);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounce}
	 * @see {@link sampleTime}
	 * @see {@link throttle}
	 *
	 * @param {Observable<any>} notifier The Observable to use for sampling the
	 * source Observable.
	 * @return {Observable<T>} An Observable that emits the results of sampling the
	 * values emitted by the source Observable whenever the notifier Observable
	 * emits value or completes.
	 * @method sample
	 * @owner Observable
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
	    };
	    return SampleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.value);
	        }
	    };
	    return SampleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=sample.js.map

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var sampleTime_1 = __webpack_require__(260);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
	/**
	 * Emits the most recently emitted value from the source Observable within
	 * periodic time intervals.
	 *
	 * <span class="informal">Samples the source Observable at periodic time
	 * intervals, emitting what it samples.</span>
	 *
	 * <img src="./img/sampleTime.png" width="100%">
	 *
	 * `sampleTime` periodically looks at the source Observable and emits whichever
	 * value it has most recently emitted since the previous sampling, unless the
	 * source has not emitted anything since the previous sampling. The sampling
	 * happens periodically in time every `period` milliseconds (or the time unit
	 * defined by the optional `scheduler` argument). The sampling starts as soon as
	 * the output Observable is subscribed.
	 *
	 * @example <caption>Every second, emit the most recent click at most once</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.sampleTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sample}
	 * @see {@link throttleTime}
	 *
	 * @param {number} period The sampling period expressed in milliseconds or the
	 * time unit determined internally by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the sampling.
	 * @return {Observable<T>} An Observable that emits the results of sampling the
	 * values emitted by the source Observable at the specified time interval.
	 * @method sampleTime
	 * @owner Observable
	 */
	function sampleTime(period, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new SampleTimeOperator(period, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(period, scheduler) {
	        this.period = period;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
	    };
	    return SampleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, period, scheduler) {
	        _super.call(this, destination);
	        this.period = period;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, period = state.period;
	    subscriber.notifyNext();
	    this.schedule(state, period);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var scan_1 = __webpack_require__(262);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
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
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var share_1 = __webpack_require__(264);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(133);
	var Subject_1 = __webpack_require__(2);
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
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var single_1 = __webpack_require__(266);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var EmptyError_1 = __webpack_require__(193);
	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 * @method single
	 * @owner Observable
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
	    };
	    return SingleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        this.index++;
	        if (predicate) {
	            this.tryNext(value);
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype.tryNext = function (value) {
	        try {
	            var result = this.predicate(value, this.index, this.source);
	            if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=single.js.map

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skip_1 = __webpack_require__(268);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipSubscriber(subscriber, this.total));
	    };
	    return SkipOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skipUntil_1 = __webpack_require__(270);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	 *
	 * <img src="./img/skipUntil.png" width="100%">
	 *
	 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	 * be mirrored by the resulting Observable.
	 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	 * an item, then emits the remaining items.
	 * @method skipUntil
	 * @owner Observable
	 */
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
	    };
	    return SkipUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.isInnerStopped = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.hasValue) {
	            _super.prototype._next.call(this, value);
	        }
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.isInnerStopped) {
	            _super.prototype._complete.call(this);
	        }
	        else {
	            this.unsubscribe();
	        }
	    };
	    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.hasValue = true;
	    };
	    SkipUntilSubscriber.prototype.notifyComplete = function () {
	        this.isInnerStopped = true;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var skipWhile_1 = __webpack_require__(272);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 * @method skipWhile
	 * @owner Observable
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
	    };
	    return SkipWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var startWith_1 = __webpack_require__(274);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(31);
	var ScalarObservable_1 = __webpack_require__(32);
	var EmptyObservable_1 = __webpack_require__(33);
	var concat_1 = __webpack_require__(42);
	var isScheduler_1 = __webpack_require__(30);
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
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var subscribeOn_1 = __webpack_require__(276);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(277);
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
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var asap_1 = __webpack_require__(278);
	var isNumeric_1 = __webpack_require__(76);
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
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(279);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(280);
	var QueueScheduler_1 = __webpack_require__(80);
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
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(281);
	var FutureAction_1 = __webpack_require__(79);
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
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(4);
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(282).clearImmediate, __webpack_require__(282).setImmediate))

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(283).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(282).setImmediate, __webpack_require__(282).clearImmediate))

/***/ },
/* 283 */
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switch_1 = __webpack_require__(285);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * subscribing to only the most recently emitted of those inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * previous inner Observable once a new one appears.</span>
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * `switch` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable subscribes to the inner Observable and
	 * begins emitting the items emitted by that. So far, it behaves
	 * like {@link mergeAll}. However, when a new inner Observable is emitted,
	 * `switch` unsubscribes from the earlier-emitted inner Observable and
	 * subscribes to the new inner Observable and begins emitting items from it. It
	 * continues to behave like this for subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * // Each click event is mapped to an Observable that ticks every second
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var switched = higherOrder.switch();
	 * // The outcome is that `switched` is essentially a timer that restarts
	 * // on every click. The interval Observables from older clicks do not merge
	 * // with the current interval Observable.
	 * switched.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switchMap}
	 * @see {@link switchMapTo}
	 * @see {@link zipAll}
	 *
	 * @return {Observable<T>} An Observable that emits the items emitted by the
	 * Observable most recently emitted by the source Observable.
	 * @method switch
	 * @name switch
	 * @owner Observable
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchSubscriber(subscriber));
	    };
	    return SwitchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switch.js.map

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMap_1 = __webpack_require__(287);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMapTo_1 = __webpack_require__(289);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	    };
	    return SwitchMapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var take_1 = __webpack_require__(291);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var ArgumentOutOfRangeError_1 = __webpack_require__(182);
	var EmptyObservable_1 = __webpack_require__(33);
	/**
	 * Emits only the first `count` values emitted by the source Observable.
	 *
	 * <span class="informal">Takes the first `count` values from the source, then
	 * completes.</span>
	 *
	 * <img src="./img/take.png" width="100%">
	 *
	 * `take` returns an Observable that emits only the first `count` values emitted
	 * by the source Observable. If the source emits fewer than `count` values then
	 * all of its values are emitted. After that, it completes, regardless if the
	 * source completes.
	 *
	 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var five = interval.take(5);
	 * five.subscribe(x => console.log(x));
	 *
	 * @see {@link takeLast}
	 * @see {@link takeUntil}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 *
	 * @param {number} count The maximum number of `next` values to emit.
	 * @return {Observable<T>} An Observable that emits only the first `count`
	 * values emitted by the source Observable, or all of the values from the source
	 * if the source emits fewer than `count` values.
	 * @method take
	 * @owner Observable
	 */
	function take(count) {
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(count));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeLast_1 = __webpack_require__(293);
	Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var ArgumentOutOfRangeError_1 = __webpack_require__(182);
	var EmptyObservable_1 = __webpack_require__(33);
	/**
	 * Emits only the last `count` values emitted by the source Observable.
	 *
	 * <span class="informal">Remembers the latest `count` values, then emits those
	 * only when the source completes.</span>
	 *
	 * <img src="./img/takeLast.png" width="100%">
	 *
	 * `takeLast` returns an Observable that emits at most the last `count` values
	 * emitted by the source Observable. If the source emits fewer than `count`
	 * values then all of its values are emitted. This operator must wait until the
	 * `complete` notification emission from the source in order to emit the `next`
	 * values on the output Observable, because otherwise it is impossible to know
	 * whether or not more values will be emitted on the source. For this reason,
	 * all values are emitted synchronously, followed by the complete notification.
	 *
	 * @example <caption>Take the last 3 values of an Observable with many values</caption>
	 * var many = Rx.Observable.range(1, 100);
	 * var lastThree = many.takeLast(3);
	 * lastThree.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeUntil}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 *
	 * @param {number} count The maximum number of values to emit from the end of
	 * the sequence of values emitted by the source Observable.
	 * @return {Observable<T>} An Observable that emits at most the last count
	 * values emitted by the source Observable.
	 * @method takeLast
	 * @owner Observable
	 */
	function takeLast(count) {
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeLastOperator(count));
	    }
	}
	exports.takeLast = takeLast;
	var TakeLastOperator = (function () {
	    function TakeLastOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeLastOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
	    };
	    return TakeLastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeLastSubscriber = (function (_super) {
	    __extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.ring = new Array();
	        this.count = 0;
	    }
	    TakeLastSubscriber.prototype._next = function (value) {
	        var ring = this.ring;
	        var total = this.total;
	        var count = this.count++;
	        if (ring.length < total) {
	            ring.push(value);
	        }
	        else {
	            var index = count % total;
	            ring[index] = value;
	        }
	    };
	    TakeLastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var count = this.count;
	        if (count > 0) {
	            var total = this.count >= this.total ? this.total : this.count;
	            var ring = this.ring;
	            for (var i = 0; i < total; i++) {
	                var idx = (count++) % total;
	                destination.next(ring[idx]);
	            }
	        }
	        destination.complete();
	    };
	    return TakeLastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeUntil_1 = __webpack_require__(295);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Emits the values emitted by the source Observable until a `notifier`
	 * Observable emits a value.
	 *
	 * <span class="informal">Lets values pass until a second Observable,
	 * `notifier`, emits something. Then, it completes.</span>
	 *
	 * <img src="./img/takeUntil.png" width="100%">
	 *
	 * `takeUntil` subscribes and begins mirroring the source Observable. It also
	 * monitors a second Observable, `notifier` that you provide. If the `notifier`
	 * emits a value or a complete notification, the output Observable stops
	 * mirroring the source Observable and completes.
	 *
	 * @example <caption>Tick every second until the first click happens</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = interval.takeUntil(clicks);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeLast}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @param {Observable} notifier The Observable whose first emitted value will
	 * cause the output Observable of `takeUntil` to stop emitting values from the
	 * source Observable.
	 * @return {Observable<T>} An Observable that emits the values from the source
	 * Observable until such time as `notifier` emits its first value.
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	    };
	    return TakeUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var takeWhile_1 = __webpack_require__(297);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Emits values emitted by the source Observable so long as each value satisfies
	 * the given `predicate`, and then completes as soon as this `predicate` is not
	 * satisfied.
	 *
	 * <span class="informal">Takes values from the source only while they pass the
	 * condition given. When the first value does not satisfy, it completes.</span>
	 *
	 * <img src="./img/takeWhile.png" width="100%">
	 *
	 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
	 * emitted on the source is given to the `predicate` function which returns a
	 * boolean, representing a condition to be satisfied by the source values. The
	 * output Observable emits the source values until such time as the `predicate`
	 * returns false, at which point `takeWhile` stops mirroring the source
	 * Observable and completes the output Observable.
	 *
	 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.takeWhile(ev => ev.clientX > 200);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeLast}
	 * @see {@link takeUntil}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates a value emitted by the source Observable and returns a boolean.
	 * Also takes the (zero-based) index as the second argument.
	 * @return {Observable<T>} An Observable that emits the values from the source
	 * Observable so long as each value satisfies the condition defined by the
	 * `predicate`, then completes.
	 * @method takeWhile
	 * @owner Observable
	 */
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
	    };
	    return TakeWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result;
	        try {
	            result = this.predicate(value, this.index++);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        this.nextOrComplete(value, result);
	    };
	    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
	        var destination = this.destination;
	        if (Boolean(predicateResult)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throttle_1 = __webpack_require__(299);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Emits a value from the source Observable, then ignores subsequent source
	 * values for a duration determined by another Observable, then repeats this
	 * process.
	 *
	 * <span class="informal">It's like {@link throttleTime}, but the silencing
	 * duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/throttle.png" width="100%">
	 *
	 * `throttle` emits the source Observable values on the output Observable
	 * when its internal timer is disabled, and ignores source values when the timer
	 * is enabled. Initially, the timer is disabled. As soon as the first source
	 * value arrives, it is forwarded to the output Observable, and then the timer
	 * is enabled by calling the `durationSelector` function with the source value,
	 * which returns the "duration" Observable. When the duration Observable emits a
	 * value or completes, the timer is disabled, and this process repeats for the
	 * next source value.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounce}
	 * @see {@link delayWhen}
	 * @see {@link sample}
	 * @see {@link throttleTime}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the silencing
	 * duration for each source value, returned as an Observable or a Promise.
	 * @return {Observable<T>} An Observable that performs the throttle operation to
	 * limit the rate of emissions from the source.
	 * @method throttle
	 * @owner Observable
	 */
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
	    };
	    return ThrottleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.tryDurationSelector(value);
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        var duration = null;
	        try {
	            duration = this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.emitAndThrottle(value, duration);
	    };
	    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
	        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	        this.destination.next(value);
	    };
	    ThrottleSubscriber.prototype._unsubscribe = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._unsubscribe();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this._unsubscribe();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var throttleTime_1 = __webpack_require__(301);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
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
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timeInterval_1 = __webpack_require__(303);
	Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
	/**
	 * @param scheduler
	 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
	 * @method timeInterval
	 * @owner Observable
	 */
	function timeInterval(scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new TimeIntervalOperator(scheduler));
	}
	exports.timeInterval = timeInterval;
	var TimeInterval = (function () {
	    function TimeInterval(value, interval) {
	        this.value = value;
	        this.interval = interval;
	    }
	    return TimeInterval;
	}());
	exports.TimeInterval = TimeInterval;
	;
	var TimeIntervalOperator = (function () {
	    function TimeIntervalOperator(scheduler) {
	        this.scheduler = scheduler;
	    }
	    TimeIntervalOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
	    };
	    return TimeIntervalOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeIntervalSubscriber = (function (_super) {
	    __extends(TimeIntervalSubscriber, _super);
	    function TimeIntervalSubscriber(destination, scheduler) {
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.lastTime = 0;
	        this.lastTime = scheduler.now();
	    }
	    TimeIntervalSubscriber.prototype._next = function (value) {
	        var now = this.scheduler.now();
	        var span = now - this.lastTime;
	        this.lastTime = now;
	        this.destination.next(new TimeInterval(value, span));
	    };
	    return TimeIntervalSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timeout_1 = __webpack_require__(305);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(77);
	var isDate_1 = __webpack_require__(107);
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * @param due
	 * @param errorToSend
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeout
	 * @owner Observable
	 */
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
	    };
	    return TimeoutOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timeoutWith_1 = __webpack_require__(307);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(77);
	var isDate_1 = __webpack_require__(107);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * @param due
	 * @param withObservable
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeoutWith
	 * @owner Observable
	 */
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
	    };
	    return TimeoutWithOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var timestamp_1 = __webpack_require__(309);
	Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
	//# sourceMappingURL=timestamp.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var async_1 = __webpack_require__(77);
	/**
	 * @param scheduler
	 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
	 * @method timestamp
	 * @owner Observable
	 */
	function timestamp(scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new TimestampOperator(scheduler));
	}
	exports.timestamp = timestamp;
	var Timestamp = (function () {
	    function Timestamp(value, timestamp) {
	        this.value = value;
	        this.timestamp = timestamp;
	    }
	    return Timestamp;
	}());
	exports.Timestamp = Timestamp;
	;
	var TimestampOperator = (function () {
	    function TimestampOperator(scheduler) {
	        this.scheduler = scheduler;
	    }
	    TimestampOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
	    };
	    return TimestampOperator;
	}());
	var TimestampSubscriber = (function (_super) {
	    __extends(TimestampSubscriber, _super);
	    function TimestampSubscriber(destination, scheduler) {
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	    }
	    TimestampSubscriber.prototype._next = function (value) {
	        var now = this.scheduler.now();
	        this.destination.next(new Timestamp(value, now));
	    };
	    return TimestampSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timestamp.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toArray_1 = __webpack_require__(311);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toPromise_1 = __webpack_require__(313);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
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
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var window_1 = __webpack_require__(315);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Branch out the source Observable values as a nested Observable whenever
	 * `windowBoundaries` emits.
	 *
	 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
	 * instead of an array.</span>
	 *
	 * <img src="./img/window.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping
	 * windows. It emits the current window and opens a new one whenever the
	 * Observable `windowBoundaries` emits an item. Because each window is an
	 * Observable, the output is a higher-order Observable.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var result = clicks.window(interval)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link buffer}
	 *
	 * @param {Observable<any>} windowBoundaries An Observable that completes the
	 * previous window and starts a new window.
	 * @return {Observable<Observable<T>>} An Observable of windows, which are
	 * Observables emitting values of the source Observable.
	 * @method window
	 * @owner Observable
	 */
	function window(windowBoundaries) {
	    return this.lift(new WindowOperator(windowBoundaries));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(windowBoundaries) {
	        this.windowBoundaries = windowBoundaries;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.windowBoundaries));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, windowBoundaries) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowBoundaries = windowBoundaries;
	        this.add(subscribeToResult_1.subscribeToResult(this, windowBoundaries));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow();
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this._complete();
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=window.js.map

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowCount_1 = __webpack_require__(317);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Subject_1 = __webpack_require__(2);
	/**
	 * Branch out the source Observable values as a nested Observable with each
	 * nested Observable emitting at most `windowSize` values.
	 *
	 * <span class="informal">It's like {@link bufferCount}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowCount.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows every `startWindowEvery`
	 * items, each containing no more than `windowSize` items. When the source
	 * Observable completes or encounters an error, the output Observable emits
	 * the current window and propagates the notification from the source
	 * Observable. If `startWindowEvery` is not provided, then new windows are
	 * started immediately at the start of the source and when each window completes
	 * with size `windowSize`.
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(3)
	 *   .map(win => win.skip(1)) // skip first of every 3 clicks
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(2, 3)
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferCount}
	 *
	 * @param {number} windowSize The maximum number of values emitted by each
	 * window.
	 * @param {number} [startWindowEvery] Interval at which to start a new window.
	 * For example if `startWindowEvery` is `2`, then a new window will be started
	 * on every other value from the source. A new window is started at the
	 * beginning of the source by default.
	 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
	 * are Observable of values.
	 * @method windowCount
	 * @owner Observable
	 */
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
	    };
	    return WindowCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowTime_1 = __webpack_require__(319);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	var Subject_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(77);
	/**
	 * Branch out the source Observable values as a nested Observable periodically
	 * in time.
	 *
	 * <span class="informal">It's like {@link bufferTime}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowTime.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable starts a new window periodically, as
	 * determined by the `windowCreationInterval` argument. It emits each window
	 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
	 * source Observable completes or encounters an error, the output Observable
	 * emits the current window and propagates the notification from the source
	 * Observable. If `windowCreationInterval` is not provided, the output
	 * Observable starts a new window when the previous window of duration
	 * `windowTimeSpan` completes.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000, 5000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferTime}
	 *
	 * @param {number} windowTimeSpan The amount of time to fill each window.
	 * @param {number} [windowCreationInterval] The interval at which to start new
	 * windows.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine window boundaries.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowTime
	 * @owner Observable
	 */
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
	    };
	    return WindowTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            var window_3 = windows[i];
	            if (!window_3.isUnsubscribed) {
	                window_3.next(value);
	            }
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            var window_4 = windows.shift();
	            if (!window_4.isUnsubscribed) {
	                window_4.complete();
	            }
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(arg) {
	    var subscriber = arg.subscriber, window = arg.window, context = arg.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowToggle_1 = __webpack_require__(321);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(9);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Branch out the source Observable values as a nested Observable starting from
	 * an emission from `openings` and ending when the output of `closingSelector`
	 * emits.
	 *
	 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowToggle.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows that contain those items
	 * emitted by the source Observable between the time when the `openings`
	 * Observable emits an item and when the Observable returned by
	 * `closingSelector` emits an item.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var result = clicks.windowToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * ).mergeAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowWhen}
	 * @see {@link bufferToggle}
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * windows.
	 * @param {function(value: O): Observable} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns an Observable,
	 * which, when it emits (either `next` or `complete`), signals that the
	 * associated window should complete.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowToggle
	 * @owner Observable
	 */
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return WindowToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        if (contexts) {
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].window.next(value);
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.error(err);
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._error.call(this, err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.complete();
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    WindowToggleSubscriber.prototype._unsubscribe = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.unsubscribe();
	                context.subscription.unsubscribe();
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (outerValue === this.openings) {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
	            if (closingNotifier === errorObject_1.errorObject) {
	                return this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                var window_1 = new Subject_1.Subject();
	                var subscription = new Subscription_1.Subscription();
	                var context = { window: window_1, subscription: subscription };
	                this.contexts.push(context);
	                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	                if (innerSubscription.isUnsubscribed) {
	                    this.closeWindow(this.contexts.length - 1);
	                }
	                else {
	                    innerSubscription.context = context;
	                    subscription.add(innerSubscription);
	                }
	                this.destination.next(window_1);
	            }
	        }
	        else {
	            this.closeWindow(this.contexts.indexOf(outerValue));
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyError = function (err) {
	        this.error(err);
	    };
	    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
	        if (inner !== this.openSubscription) {
	            this.closeWindow(this.contexts.indexOf(inner.context));
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (index) {
	        if (index === -1) {
	            return;
	        }
	        var contexts = this.contexts;
	        var context = contexts[index];
	        var window = context.window, subscription = context.subscription;
	        contexts.splice(index, 1);
	        window.complete();
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var windowWhen_1 = __webpack_require__(323);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
	/**
	 * Branch out the source Observable values as a nested Observable using a
	 * factory function of closing Observables to determine when to start a new
	 * window.
	 *
	 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowWhen.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping windows.
	 * It emits the current window and opens a new one whenever the Observable
	 * produced by the specified `closingSelector` function emits an item. The first
	 * window is opened immediately when subscribing to the output Observable.
	 *
	 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks
	 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link bufferWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals (on either `next` or
	 * `complete`) when to close the previous window and start a new one.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowWhen
	 * @owner Observable
	 */
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
	        if (this.closingNotification) {
	            this.closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function (innerSub) {
	        if (innerSub === void 0) { innerSub = null; }
	        if (innerSub) {
	            this.remove(innerSub);
	            innerSub.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = errorObject_1.errorObject.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var withLatestFrom_1 = __webpack_require__(325);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(35);
	var subscribeToResult_1 = __webpack_require__(36);
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
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zip_1 = __webpack_require__(110);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var zipAll_1 = __webpack_require__(328);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(110);
	/**
	 * @param project
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method zipAll
	 * @owner Observable
	 */
	function zipAll(project) {
	    return this.lift(new zip_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(7);
	var Operator = (function () {
	    function Operator() {
	    }
	    Operator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new Subscriber_1.Subscriber(subscriber));
	    };
	    return Operator;
	}());
	exports.Operator = Operator;
	//# sourceMappingURL=Operator.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var VirtualTimeScheduler_1 = __webpack_require__(331);
	var Notification_1 = __webpack_require__(59);
	var ColdObservable_1 = __webpack_require__(332);
	var HotObservable_1 = __webpack_require__(336);
	var SubscriptionLog_1 = __webpack_require__(334);
	var TestScheduler = (function (_super) {
	    __extends(TestScheduler, _super);
	    function TestScheduler(assertDeepEqual) {
	        _super.call(this);
	        this.assertDeepEqual = assertDeepEqual;
	        this.hotObservables = [];
	        this.coldObservables = [];
	        this.flushTests = [];
	    }
	    TestScheduler.prototype.createTime = function (marbles) {
	        var indexOf = marbles.indexOf('|');
	        if (indexOf === -1) {
	            throw new Error('Marble diagram for time should have a completion marker "|"');
	        }
	        return indexOf * TestScheduler.frameTimeFactor;
	    };
	    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
	        if (marbles.indexOf('^') !== -1) {
	            throw new Error('Cold observable cannot have subscription offset "^"');
	        }
	        if (marbles.indexOf('!') !== -1) {
	            throw new Error('Cold observable cannot have unsubscription marker "!"');
	        }
	        var messages = TestScheduler.parseMarbles(marbles, values, error);
	        var cold = new ColdObservable_1.ColdObservable(messages, this);
	        this.coldObservables.push(cold);
	        return cold;
	    };
	    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
	        if (marbles.indexOf('!') !== -1) {
	            throw new Error('Hot observable cannot have unsubscription marker "!"');
	        }
	        var messages = TestScheduler.parseMarbles(marbles, values, error);
	        var subject = new HotObservable_1.HotObservable(messages, this);
	        this.hotObservables.push(subject);
	        return subject;
	    };
	    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
	        var _this = this;
	        var messages = [];
	        observable.subscribe(function (value) {
	            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
	        }, function (err) {
	            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
	        }, function () {
	            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
	        });
	        return messages;
	    };
	    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
	        var _this = this;
	        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
	        var actual = [];
	        var flushTest = { actual: actual, ready: false };
	        var unsubscriptionFrame = TestScheduler
	            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
	        var subscription;
	        this.schedule(function () {
	            subscription = observable.subscribe(function (x) {
	                var value = x;
	                // Support Observable-of-Observables
	                if (x instanceof Observable_1.Observable) {
	                    value = _this.materializeInnerObservable(value, _this.frame);
	                }
	                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
	            }, function (err) {
	                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
	            }, function () {
	                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
	            });
	        }, 0);
	        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
	            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
	        }
	        this.flushTests.push(flushTest);
	        return {
	            toBe: function (marbles, values, errorValue) {
	                flushTest.ready = true;
	                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
	            }
	        };
	    };
	    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
	        var flushTest = { actual: actualSubscriptionLogs, ready: false };
	        this.flushTests.push(flushTest);
	        return {
	            toBe: function (marbles) {
	                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
	                flushTest.ready = true;
	                flushTest.expected = marblesArray.map(function (marbles) {
	                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
	                });
	            }
	        };
	    };
	    TestScheduler.prototype.flush = function () {
	        var hotObservables = this.hotObservables;
	        while (hotObservables.length > 0) {
	            hotObservables.shift().setup();
	        }
	        _super.prototype.flush.call(this);
	        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
	        while (readyFlushTests.length > 0) {
	            var test = readyFlushTests.shift();
	            this.assertDeepEqual(test.actual, test.expected);
	        }
	    };
	    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
	        if (typeof marbles !== 'string') {
	            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
	        }
	        var len = marbles.length;
	        var groupStart = -1;
	        var subscriptionFrame = Number.POSITIVE_INFINITY;
	        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
	        for (var i = 0; i < len; i++) {
	            var frame = i * this.frameTimeFactor;
	            var c = marbles[i];
	            switch (c) {
	                case '-':
	                case ' ':
	                    break;
	                case '(':
	                    groupStart = frame;
	                    break;
	                case ')':
	                    groupStart = -1;
	                    break;
	                case '^':
	                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
	                        throw new Error('Found a second subscription point \'^\' in a ' +
	                            'subscription marble diagram. There can only be one.');
	                    }
	                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
	                    break;
	                case '!':
	                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
	                        throw new Error('Found a second subscription point \'^\' in a ' +
	                            'subscription marble diagram. There can only be one.');
	                    }
	                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
	                    break;
	                default:
	                    throw new Error('There can only be \'^\' and \'!\' markers in a ' +
	                        'subscription marble diagram. Found instead \'' + c + '\'.');
	            }
	        }
	        if (unsubscriptionFrame < 0) {
	            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
	        }
	        else {
	            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
	        }
	    };
	    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
	        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
	        if (marbles.indexOf('!') !== -1) {
	            throw new Error('Conventional marble diagrams cannot have the ' +
	                'unsubscription marker "!"');
	        }
	        var len = marbles.length;
	        var testMessages = [];
	        var subIndex = marbles.indexOf('^');
	        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
	        var getValue = typeof values !== 'object' ?
	            function (x) { return x; } :
	            function (x) {
	                // Support Observable-of-Observables
	                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
	                    return values[x].messages;
	                }
	                return values[x];
	            };
	        var groupStart = -1;
	        for (var i = 0; i < len; i++) {
	            var frame = i * this.frameTimeFactor + frameOffset;
	            var notification = void 0;
	            var c = marbles[i];
	            switch (c) {
	                case '-':
	                case ' ':
	                    break;
	                case '(':
	                    groupStart = frame;
	                    break;
	                case ')':
	                    groupStart = -1;
	                    break;
	                case '|':
	                    notification = Notification_1.Notification.createComplete();
	                    break;
	                case '^':
	                    break;
	                case '#':
	                    notification = Notification_1.Notification.createError(errorValue || 'error');
	                    break;
	                default:
	                    notification = Notification_1.Notification.createNext(getValue(c));
	                    break;
	            }
	            if (notification) {
	                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
	            }
	        }
	        return testMessages;
	    };
	    return TestScheduler;
	}(VirtualTimeScheduler_1.VirtualTimeScheduler));
	exports.TestScheduler = TestScheduler;
	//# sourceMappingURL=TestScheduler.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(9);
	var VirtualTimeScheduler = (function () {
	    function VirtualTimeScheduler() {
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.active = false;
	        this.scheduledId = null;
	        this.index = 0;
	        this.sorted = false;
	        this.frame = 0;
	        this.maxFrames = 750;
	    }
	    VirtualTimeScheduler.prototype.now = function () {
	        return this.frame;
	    };
	    VirtualTimeScheduler.prototype.flush = function () {
	        var actions = this.actions;
	        var maxFrames = this.maxFrames;
	        while (actions.length > 0) {
	            var action = actions.shift();
	            this.frame = action.delay;
	            if (this.frame <= maxFrames) {
	                action.execute();
	                if (action.error) {
	                    actions.length = 0;
	                    this.frame = 0;
	                    throw action.error;
	                }
	            }
	            else {
	                break;
	            }
	        }
	        actions.length = 0;
	        this.frame = 0;
	    };
	    VirtualTimeScheduler.prototype.addAction = function (action) {
	        var actions = this.actions;
	        actions.push(action);
	        actions.sort(function (a, b) {
	            if (a.delay === b.delay) {
	                if (a.index === b.index) {
	                    return 0;
	                }
	                else if (a.index > b.index) {
	                    return 1;
	                }
	                else {
	                    return -1;
	                }
	            }
	            else if (a.delay > b.delay) {
	                return 1;
	            }
	            else {
	                return -1;
	            }
	        });
	    };
	    VirtualTimeScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        this.sorted = false;
	        return new VirtualAction(this, work, this.index++).schedule(state, delay);
	    };
	    VirtualTimeScheduler.frameTimeFactor = 10;
	    return VirtualTimeScheduler;
	}());
	exports.VirtualTimeScheduler = VirtualTimeScheduler;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var VirtualAction = (function (_super) {
	    __extends(VirtualAction, _super);
	    function VirtualAction(scheduler, work, index) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.index = index;
	        this.calls = 0;
	    }
	    VirtualAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        var scheduler = this.scheduler;
	        var action = null;
	        if (this.calls++ === 0) {
	            // the action is not being rescheduled.
	            action = this;
	        }
	        else {
	            // the action is being rescheduled, and we can't mutate the one in the actions list
	            // in the scheduler, so we'll create a new one.
	            action = new VirtualAction(scheduler, this.work, scheduler.index += 1);
	            this.add(action);
	        }
	        action.state = state;
	        action.delay = scheduler.frame + delay;
	        scheduler.addAction(action);
	        return this;
	    };
	    VirtualAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            throw new Error('How did did we execute a canceled Action?');
	        }
	        this.work(this.state);
	    };
	    VirtualAction.prototype.unsubscribe = function () {
	        var actions = this.scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = void 0;
	        this.state = void 0;
	        this.scheduler = void 0;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        _super.prototype.unsubscribe.call(this);
	    };
	    return VirtualAction;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscription_1 = __webpack_require__(9);
	var SubscriptionLoggable_1 = __webpack_require__(333);
	var applyMixins_1 = __webpack_require__(335);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ColdObservable = (function (_super) {
	    __extends(ColdObservable, _super);
	    function ColdObservable(messages, scheduler) {
	        _super.call(this, function (subscriber) {
	            var observable = this;
	            var index = observable.logSubscribedFrame();
	            subscriber.add(new Subscription_1.Subscription(function () {
	                observable.logUnsubscribedFrame(index);
	            }));
	            observable.scheduleMessages(subscriber);
	            return subscriber;
	        });
	        this.messages = messages;
	        this.subscriptions = [];
	        this.scheduler = scheduler;
	    }
	    ColdObservable.prototype.scheduleMessages = function (subscriber) {
	        var messagesLength = this.messages.length;
	        for (var i = 0; i < messagesLength; i++) {
	            var message = this.messages[i];
	            subscriber.add(this.scheduler.schedule(function (_a) {
	                var message = _a.message, subscriber = _a.subscriber;
	                message.notification.observe(subscriber);
	            }, message.frame, { message: message, subscriber: subscriber }));
	        }
	    };
	    return ColdObservable;
	}(Observable_1.Observable));
	exports.ColdObservable = ColdObservable;
	applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
	//# sourceMappingURL=ColdObservable.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscriptionLog_1 = __webpack_require__(334);
	var SubscriptionLoggable = (function () {
	    function SubscriptionLoggable() {
	        this.subscriptions = [];
	    }
	    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
	        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
	        return this.subscriptions.length - 1;
	    };
	    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
	        var subscriptionLogs = this.subscriptions;
	        var oldSubscriptionLog = subscriptionLogs[index];
	        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
	    };
	    return SubscriptionLoggable;
	}());
	exports.SubscriptionLoggable = SubscriptionLoggable;
	//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ },
/* 334 */
/***/ function(module, exports) {

	"use strict";
	var SubscriptionLog = (function () {
	    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
	        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
	        this.subscribedFrame = subscribedFrame;
	        this.unsubscribedFrame = unsubscribedFrame;
	    }
	    return SubscriptionLog;
	}());
	exports.SubscriptionLog = SubscriptionLog;
	//# sourceMappingURL=SubscriptionLog.js.map

/***/ },
/* 335 */
/***/ function(module, exports) {

	"use strict";
	function applyMixins(derivedCtor, baseCtors) {
	    for (var i = 0, len = baseCtors.length; i < len; i++) {
	        var baseCtor = baseCtors[i];
	        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
	        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
	            var name_1 = propertyKeys[j];
	            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
	        }
	    }
	}
	exports.applyMixins = applyMixins;
	//# sourceMappingURL=applyMixins.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(9);
	var SubscriptionLoggable_1 = __webpack_require__(333);
	var applyMixins_1 = __webpack_require__(335);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var HotObservable = (function (_super) {
	    __extends(HotObservable, _super);
	    function HotObservable(messages, scheduler) {
	        _super.call(this);
	        this.messages = messages;
	        this.subscriptions = [];
	        this.scheduler = scheduler;
	    }
	    HotObservable.prototype._subscribe = function (subscriber) {
	        var subject = this;
	        var index = subject.logSubscribedFrame();
	        subscriber.add(new Subscription_1.Subscription(function () {
	            subject.logUnsubscribedFrame(index);
	        }));
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    HotObservable.prototype.setup = function () {
	        var subject = this;
	        var messagesLength = subject.messages.length;
	        /* tslint:disable:no-var-keyword */
	        for (var i = 0; i < messagesLength; i++) {
	            (function () {
	                var message = subject.messages[i];
	                /* tslint:enable */
	                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
	            })();
	        }
	    };
	    return HotObservable;
	}(Subject_1.Subject));
	exports.HotObservable = HotObservable;
	applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
	//# sourceMappingURL=HotObservable.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AnimationFrameScheduler_1 = __webpack_require__(338);
	exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler();
	//# sourceMappingURL=animationFrame.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var QueueScheduler_1 = __webpack_require__(80);
	var AnimationFrameAction_1 = __webpack_require__(339);
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
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(79);
	var AnimationFrame_1 = __webpack_require__(340);
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
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(4);
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
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(342)
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
/* 342 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(283)))

/***/ },
/* 343 */,
/* 344 */
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
/* 345 */
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
/* 346 */
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
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Action = exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.svgPath = exports.svg = exports.object = exports.css = exports.attr = exports.createAdapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
	var _timer = __webpack_require__(348);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Action = __webpack_require__(350);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(386);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	var _Tween = __webpack_require__(388);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(392);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(393);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Task = __webpack_require__(351);
	
	var _Task2 = _interopRequireDefault(_Task);
	
	var _Input = __webpack_require__(395);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(396);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(397);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _attrAdapter = __webpack_require__(383);
	
	var _attrAdapter2 = _interopRequireDefault(_attrAdapter);
	
	var _cssAdapter = __webpack_require__(369);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _objectAdapter = __webpack_require__(367);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _svgAdapter = __webpack_require__(380);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(384);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	var _presetEasing = __webpack_require__(389);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _getFlow = __webpack_require__(398);
	
	var _getFlow2 = _interopRequireDefault(_getFlow);
	
	var _calc2 = __webpack_require__(355);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(349);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(373);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(372);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _color = __webpack_require__(357);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(363);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(362);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(361);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _px = __webpack_require__(376);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(358);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(374);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(375);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _unit = __webpack_require__(364);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _transformers2 = __webpack_require__(399);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export factory functions
	var flow = exports.flow = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(_Flow2.default, [null].concat(args)))();
	}; // Import classes - long term goal to move towards composition
	
	var tween = exports.tween = function (props) {
	  return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	  return new _Physics2.default(props);
	};
	var track = exports.track = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
	};
	var input = exports.input = function () {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
	};
	var task = exports.task = function () {
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  return new (Function.prototype.bind.apply(_Task2.default, [null].concat(args)))();
	};
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
	// Adapters
	
	exports.createAdapter = _adapter2.default;
	exports.attr = _attrAdapter2.default;
	exports.css = _cssAdapter2.default;
	exports.object = _objectAdapter2.default;
	exports.svg = _svgAdapter2.default;
	exports.svgPath = _svgPathAdapter2.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	var detectFlow = exports.detectFlow = _getFlow2.default;
	
	// Utils
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	var valueType = exports.valueType = { alpha: _alpha2.default, angle: _angle2.default, color: _color2.default, complex: _complex2.default, hex: _hex2.default, hsl: _hsl2.default, px: _px2.default, rgb: _rgb2.default, scale: _scale2.default, shadow: _shadow2.default, unit: _unit2.default };
	
	// Transformers
	exports.transformers = _transformers;
	
	/*
	  Returns a version of the Action bound to a Flow
	
	  We're adding `on` here because Flow extends Action,
	  otherwise creating a circular modular dependency. Future
	  refactoring, ie moving to a compositional model will
	  remove the need for us to do this here.
	*/
	
	_Action2.default.prototype.on = function (element) {
	  if (!element.connect) {
	    element = (0, _getFlow2.default)(element);
	  }
	
	  return element.connect(this);
	};
	
	exports.Action = _Action2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1M7Ozs7QUFsQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF0Q08sSUFBTSxzQkFBTztvQ0FBSTs7OzswRUFBcUI7Q0FBekI7O0FBQ2IsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO3FDQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSxzQkFBTztxQ0FBSTs7OzswRUFBcUI7Q0FBekI7UUFDYjtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7QUFFQSxJQUFNLG1EQUFOOzs7UUFHSztRQUNBOzs7O0FBZUwsSUFBTSxnQ0FBWSxFQUFFLHNCQUFGLEVBQVMsc0JBQVQsRUFBZ0Isc0JBQWhCLEVBQXVCLDBCQUF2QixFQUFnQyxrQkFBaEMsRUFBcUMsa0JBQXJDLEVBQTBDLGdCQUExQyxFQUE4QyxrQkFBOUMsRUFBbUQsc0JBQW5ELEVBQTBELHdCQUExRCxFQUFrRSxvQkFBbEUsRUFBWjs7O1FBR0Q7Ozs7Ozs7Ozs7O0FBVVosaUJBQU8sU0FBUCxDQUFpQixFQUFqQixHQUFzQixVQUFVLE9BQVYsRUFBbUI7QUFDdkMsTUFBSSxDQUFDLFFBQVEsT0FBUixFQUFpQjtBQUNwQixjQUFVLHVCQUFRLE9BQVIsQ0FBVixDQURvQjtHQUF0Qjs7QUFJQSxTQUFPLFFBQVEsT0FBUixDQUFnQixJQUFoQixDQUFQLENBTHVDO0NBQW5COztRQVFiIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBjbGFzc2VzIC0gbG9uZyB0ZXJtIGdvYWwgdG8gbW92ZSB0b3dhcmRzIGNvbXBvc2l0aW9uXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IEZsb3cgZnJvbSAnLi9hY3Rpb25zL0Zsb3cnO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi5hcmdzKSA9PiBuZXcgRmxvdyguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0d2VlbiA9IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbmV4cG9ydCBjb25zdCBwaHlzaWNzID0gKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG5leHBvcnQgY29uc3QgdHJhY2sgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCB0YXNrID0gKC4uLmFyZ3MpID0+IG5ldyBUYXNrKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHIgZnJvbSAnLi9hZGFwdGVyL2F0dHItYWRhcHRlcic7XG5leHBvcnQgY3NzIGZyb20gJy4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5leHBvcnQgb2JqZWN0IGZyb20gJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG5leHBvcnQgc3ZnIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aCBmcm9tICcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbi8vIEVhc2luZ1xuZXhwb3J0IGVhc2luZyBmcm9tICcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IGdldEZsb3cgZnJvbSAnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnO1xuZXhwb3J0IGNvbnN0IGRldGVjdEZsb3cgPSBnZXRGbG93O1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vaW5jL3V0aWxzJztcbmV4cG9ydCB7IHNldEdsb2JhbERpbGF0aW9uIH0gZnJvbSAnLi90YXNrL3RpbWVyJztcblxuLy8gVmFsdWUgdHlwZXNcbmltcG9ydCBhbHBoYSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBhbmdsZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBjb2xvciBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgaGV4IGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmltcG9ydCBoc2wgZnJvbSAnLi92YWx1ZS10eXBlcy9oc2wnO1xuaW1wb3J0IHB4IGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuaW1wb3J0IHJnYiBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCB1bml0IGZyb20gJy4vdmFsdWUtdHlwZXMvdW5pdCc7XG5leHBvcnQgY29uc3QgdmFsdWVUeXBlID0geyBhbHBoYSwgYW5nbGUsIGNvbG9yLCBjb21wbGV4LCBoZXgsIGhzbCwgcHgsIHJnYiwgc2NhbGUsIHNoYWRvdywgdW5pdCB9O1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnO1xuXG4vKlxuICBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgQWN0aW9uIGJvdW5kIHRvIGEgRmxvd1xuXG4gIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICByZWZhY3RvcmluZywgaWUgbW92aW5nIHRvIGEgY29tcG9zaXRpb25hbCBtb2RlbCB3aWxsXG4gIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cbkFjdGlvbi5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgIGVsZW1lbnQgPSBnZXRGbG93KGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuY29ubmVjdCh0aGlzKTtcbn07XG5cbmV4cG9ydCB7IEFjdGlvbiB9OyJdfQ==

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(349);
	
	var MAX_ELAPSED = 33;
	
	var current = 0;
	var elapsed = 16.7;
	var dilation = 1;
	
	exports.default = {
	  update: function (framestamp) {
	    elapsed = Math.max(Math.min(framestamp - current, MAX_ELAPSED), 1) * dilation;
	    current = framestamp;
	  },
	
	  start: function () {
	    return current = (0, _utils.currentTime)();
	  },
	
	  getElapsed: function () {
	    return elapsed;
	  }
	};
	var setGlobalDilation = exports.setGlobalDilation = function (newDilation) {
	  return dilation = newDilation;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxjQUFjLEVBQWQ7O0FBRU4sSUFBSSxVQUFVLENBQVY7QUFDSixJQUFJLFVBQVUsSUFBVjtBQUNKLElBQUksV0FBVyxDQUFYOztrQkFFVztBQUNiLFVBQVEsVUFBQyxVQUFELEVBQWdCO0FBQ3RCLGNBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkQsUUFBM0QsQ0FEWTtBQUV0QixjQUFVLFVBQVYsQ0FGc0I7R0FBaEI7O0FBS1IsU0FBTztXQUFNLFVBQVUseUJBQVY7R0FBTjs7QUFFUCxjQUFZO1dBQU07R0FBTjs7QUFHUCxJQUFNLGdEQUFvQixVQUFDLFdBQUQ7U0FBaUIsV0FBVyxXQUFYO0NBQWpCIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHVwZGF0ZTogKGZyYW1lc3RhbXApID0+IHtcbiAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgfSxcblxuICBzdGFydDogKCkgPT4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCksXG5cbiAgZ2V0RWxhcHNlZDogKCkgPT4gZWxhcHNlZFxufTtcblxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbERpbGF0aW9uID0gKG5ld0RpbGF0aW9uKSA9PiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uOyJdfQ==

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
	var REPLACE_TEMPLATE = '$1-$2';
	var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;
	
	/*
	  Get var type as string
	  
	  @param: Variable to test
	  @return [string]: Returns, for instance 'Object' if [object Object]
	*/
	var varType = function (variable) {
	  return Object.prototype.toString.call(variable).slice(8, -1);
	};
	
	/*
	  Convert camelCase to dash-case
	
	  @param [string]
	  @return [string]
	*/
	var camelToDash = exports.camelToDash = function (string) {
	  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
	};
	
	var createDelimited = exports.createDelimited = function (values, terms, delimiter, chop) {
	  var numTerms = terms.length;
	  var combined = '';
	
	  for (var i = 0; i < numTerms; i++) {
	    var term = terms[i];
	    if (values.hasOwnProperty(term)) {
	      combined += values[term] + delimiter;
	    }
	  }
	
	  if (chop) {
	    combined = combined.slice(0, -chop);
	  }
	
	  return combined;
	};
	
	/*
	  Create a function string
	
	  '20px', 'translate' -> 'translate(20px)'
	
	  @param [string]
	  @param [string]
	  @return [string]
	*/
	var createFunctionString = exports.createFunctionString = function (value, prefix) {
	  return prefix + '(' + value + ')';
	};
	
	/*
	  Generate current timestamp
	  
	  @return [timestamp]: Current UNIX timestamp
	*/
	var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
	  return performance.now();
	} : function () {
	  return new Date().getTime();
	};
	
	/*
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
	  if (value.match) {
	    var splitValue = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	      value: parseFloat(splitValue[1]),
	      unit: splitValue[2]
	    };
	  } else {
	    return { value: value };
	  }
	};
	
	/*
	  Split color string into map of color properties
	
	  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	  { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	  var numColorTerms = colorTerms.length;
	  var colorValues = {};
	  var colors = splitCommaDelimited(getValueFromFunctionString(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	
	/*
	  Get value from function string
	
	  "translateX(20px)" -> "20px"
	*/
	var getValueFromFunctionString = exports.getValueFromFunctionString = function (value) {
	  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};
	
	/*
	  Check if two objects have changed from each other
	  
	  @param [object]: Input A
	  @param [object]: Input B
	  @return [boolean]: True if different
	*/
	var hasChanged = exports.hasChanged = function (a, b) {
	  var changed = false;
	
	  for (var key in a) {
	    if (a.hasOwnProperty(key)) {
	      if (hasProperty(b, key)) {
	        if (a[key] !== b[key]) {
	          changed = true;
	        }
	      } else {
	        changed = true;
	      }
	    }
	  }
	
	  return changed;
	};
	
	/*
	  Check if object has property and it isn't undefined
	
	  @param [object]
	  @param [string]
	  @return [boolean]
	*/
	var hasProperty = exports.hasProperty = function (object, propertyName) {
	  return object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;
	};
	
	/*
	  Is utils var an array ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Array'
	*/
	var isArray = exports.isArray = function (arr) {
	  return varType(arr) === 'Array';
	};
	
	/*
	  Is utils var a function ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Function'
	*/
	var isFunc = exports.isFunc = function (obj) {
	  return varType(obj) === 'Function';
	};
	
	/*
	  Is utils var a number?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'number'
	*/
	var isNum = exports.isNum = function (num) {
	  return typeof num === 'number';
	};
	
	/*
	  Is utils var an object?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'object'
	*/
	var isObj = exports.isObj = function (obj) {
	  return typeof obj === 'object';
	};
	
	/*
	  Is utils a relative value assignment?
	  
	  @param [string]: Variable to test
	  @return [boolean]: If utils looks like a relative value assignment
	*/
	var isRelativeValue = exports.isRelativeValue = function (value) {
	  return value && value.indexOf && value.indexOf('=') > 0 ? true : false;
	};
	
	/*
	  Is utils var a string ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof str === 'string'
	*/
	var isString = exports.isString = function (str) {
	  return typeof str === 'string';
	};
	
	/*
	  @param [string || NodeList]:
	    If string, treated as selector.
	    If not, treated as preexisting NodeList
	
	  @return [Array]
	*/
	var selectDom = exports.selectDom = function (selector) {
	  var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
	  return nodes.length ? [].slice.call(nodes) : [].push(nodes);
	};
	
	/*
	  Split comma-delimited string
	
	  "foo,bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
	  return isString(value) ? value.split(/,\s*/) : [value];
	};
	
	/*
	  Split space-delimited string
	
	  "foo bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitSpaceDelimited = exports.splitSpaceDelimited = function (value) {
	  return isString(value) ? value.split(' ') : [value];
	};
	
	/*
	  Convert number to x decimal places
	
	  @param [number]
	  @param [number]
	  @return [number]
	*/
	var toDecimal = exports.toDecimal = function (num) {
	  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  precision = Math.pow(10, precision);
	  return Math.round(num * precision) / precision;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxxQkFBcUIsaUJBQXJCO0FBQ04sSUFBTSxtQkFBbUIsT0FBbkI7QUFDTixJQUFNLHNCQUF1QixPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsWUFBWSxHQUFaOzs7Ozs7OztBQVFuRSxJQUFNLFVBQVU7U0FBWSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFEO0NBQTlEOzs7Ozs7OztBQVFULElBQU0sb0NBQWMsVUFBQyxNQUFEO1NBQVksT0FBTyxPQUFQLENBQWUsa0JBQWYsRUFBbUMsZ0JBQW5DLEVBQXFELFdBQXJEO0NBQVo7O0FBRXBCLElBQU0sNENBQWtCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsU0FBaEIsRUFBMkIsSUFBM0IsRUFBb0M7QUFDakUsTUFBTSxXQUFXLE1BQU0sTUFBTixDQURnRDtBQUVqRSxNQUFJLFdBQVcsRUFBWCxDQUY2RDs7QUFJakUsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksUUFBSixFQUFjLEdBQTlCLEVBQW1DO0FBQ2pDLFFBQU0sT0FBTyxNQUFNLENBQU4sQ0FBUCxDQUQyQjtBQUVqQyxRQUFJLE9BQU8sY0FBUCxDQUFzQixJQUF0QixDQUFKLEVBQWlDO0FBQy9CLGtCQUFZLE9BQU8sSUFBUCxJQUFlLFNBQWYsQ0FEbUI7S0FBakM7R0FGRjs7QUFPQSxNQUFJLElBQUosRUFBVTtBQUNSLGVBQVcsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFDLElBQUQsQ0FBN0IsQ0FEUTtHQUFWOztBQUlBLFNBQU8sUUFBUCxDQWZpRTtDQUFwQzs7Ozs7Ozs7Ozs7QUEyQnhCLElBQU0sc0RBQXVCLFVBQUMsS0FBRCxFQUFRLE1BQVI7U0FBc0IsZUFBVTtDQUFoQzs7Ozs7OztBQU83QixJQUFNLG9DQUFjLHNCQUFzQjtTQUFNLFlBQVksR0FBWjtDQUFOLEdBQTBCO1NBQU0sSUFBSSxJQUFKLEdBQVcsT0FBWDtDQUFOOzs7Ozs7Ozs7O0FBVXBFLElBQU0sOENBQW1CLFVBQUMsS0FBRCxFQUFXO0FBQ3pDLE1BQUksTUFBTSxLQUFOLEVBQWE7QUFDZixRQUFNLGFBQWEsTUFBTSxLQUFOLENBQVksbUJBQVosQ0FBYixDQURTOztBQUdmLFdBQU87QUFDTCxhQUFPLFdBQVcsV0FBVyxDQUFYLENBQVgsQ0FBUDtBQUNBLFlBQU8sV0FBVyxDQUFYLENBQVA7S0FGRixDQUhlO0dBQWpCLE1BT087QUFDTCxXQUFPLEVBQUUsWUFBRixFQUFQLENBREs7R0FQUDtDQUQ4Qjs7Ozs7Ozs7O0FBb0J6QixJQUFNLDBDQUFpQixVQUFDLEtBQUQsRUFBUSxVQUFSLEVBQXVCO0FBQ25ELE1BQU0sZ0JBQWdCLFdBQVcsTUFBWCxDQUQ2QjtBQUVuRCxNQUFNLGNBQWMsRUFBZCxDQUY2QztBQUduRCxNQUFNLFNBQVMsb0JBQW9CLDJCQUEyQixLQUEzQixDQUFwQixDQUFULENBSDZDOztBQUtuRCxPQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxhQUFKLEVBQW1CLEdBQW5DLEVBQXdDO0FBQ3RDLGdCQUFZLFdBQVcsQ0FBWCxDQUFaLElBQTZCLE1BQUMsQ0FBTyxDQUFQLE1BQWMsU0FBZCxHQUEyQixPQUFPLENBQVAsQ0FBNUIsR0FBd0MsQ0FBeEMsQ0FEUztHQUF4Qzs7QUFJQSxTQUFPLFdBQVAsQ0FUbUQ7Q0FBdkI7Ozs7Ozs7QUFpQnZCLElBQU0sa0VBQTZCLFVBQUMsS0FBRDtTQUFXLE1BQU0sU0FBTixDQUFnQixNQUFNLE9BQU4sQ0FBYyxHQUFkLElBQXFCLENBQXJCLEVBQXdCLE1BQU0sV0FBTixDQUFrQixHQUFsQixDQUF4QztDQUFYOzs7Ozs7Ozs7QUFTbkMsSUFBTSxrQ0FBYSxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDbEMsTUFBSSxVQUFVLEtBQVYsQ0FEOEI7O0FBR2xDLE9BQUssSUFBSSxHQUFKLElBQVcsQ0FBaEIsRUFBbUI7QUFDakIsUUFBSSxFQUFFLGNBQUYsQ0FBaUIsR0FBakIsQ0FBSixFQUEyQjtBQUN6QixVQUFJLFlBQVksQ0FBWixFQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QixZQUFJLEVBQUUsR0FBRixNQUFXLEVBQUUsR0FBRixDQUFYLEVBQW1CO0FBQ3JCLG9CQUFVLElBQVYsQ0FEcUI7U0FBdkI7T0FERixNQUlPO0FBQ0wsa0JBQVUsSUFBVixDQURLO09BSlA7S0FERjtHQURGOztBQVlBLFNBQU8sT0FBUCxDQWZrQztDQUFWOzs7Ozs7Ozs7QUF5Qm5CLElBQU0sb0NBQWMsVUFBQyxNQUFELEVBQVMsWUFBVDtTQUEwQixPQUFPLGNBQVAsQ0FBc0IsWUFBdEIsS0FBdUMsT0FBTyxZQUFQLE1BQXlCLFNBQXpCO0NBQWpFOzs7Ozs7OztBQVFwQixJQUFNLDRCQUFVLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixPQUFqQjtDQUFUOzs7Ozs7OztBQVFoQixJQUFNLDBCQUFTLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixVQUFqQjtDQUFUOzs7Ozs7OztBQVFmLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sNENBQWtCLFVBQUMsS0FBRDtTQUFXLEtBQUMsSUFBUyxNQUFNLE9BQU4sSUFBaUIsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFyQixHQUEwQixJQUFyRCxHQUE0RCxLQUE1RDtDQUFYOzs7Ozs7OztBQVF4QixJQUFNLDhCQUFXLFVBQUMsR0FBRDtTQUFTLE9BQU8sR0FBUCxLQUFlLFFBQWY7Q0FBVDs7Ozs7Ozs7O0FBU2pCLElBQU0sZ0NBQVksVUFBQyxRQUFELEVBQWM7QUFDckMsTUFBTSxRQUFRLE9BQVEsUUFBUCxLQUFvQixRQUFwQixHQUFnQyxTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQWpDLEdBQXVFLFFBQXZFLENBRHVCO0FBRXJDLFNBQU8sS0FBQyxDQUFNLE1BQU4sR0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBakIsR0FBd0MsR0FBRyxJQUFILENBQVEsS0FBUixDQUF4QyxDQUY4QjtDQUFkOzs7Ozs7Ozs7O0FBYWxCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtTQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUMsS0FBRCxDQUF4QztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtTQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFyQztDQUFYOzs7Ozs7Ozs7QUFTNUIsSUFBTSxnQ0FBWSxVQUFDLEdBQUQsRUFBd0I7TUFBbEIsa0VBQVksaUJBQU07O0FBQy9DLHVCQUFZLElBQU0sVUFBbEIsQ0FEK0M7QUFFL0MsU0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFNLFNBQU4sQ0FBWCxHQUE4QixTQUE5QixDQUZ3QztDQUF4QiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG5jb25zdCB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVsaW1pdGVkID0gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkgPT4ge1xuICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1zW2ldO1xuICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY2hvcCkge1xuICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3QgZmluZFZhbHVlQW5kVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiAgc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICBjb25zdCBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKlxuICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gIFxuICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gIHJldHVybiAobm9kZXMubGVuZ3RoKSA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9IChudW0sIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbiJdfQ==

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(351);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(355);
	
	var _utils = __webpack_require__(349);
	
	var _detect = __webpack_require__(356);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(365);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	var _detectAdapter = __webpack_require__(366);
	
	var _detectAdapter2 = _interopRequireDefault(_detectAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	var defaultRenderer = function (_ref) {
	  var state = _ref.state;
	  var adapter = _ref.adapter;
	  var adapterData = _ref.adapterData;
	  var element = _ref.element;
	  return adapter(element, state, adapterData);
	};
	
	var convertIfShouldBeNumber = function (value) {
	  return !isNaN(value) ? parseFloat(value) : value;
	};
	
	var Action = function (_Task) {
	  _inherits(Action, _Task);
	
	  function Action() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Action);
	
	    props.state = {};
	    props.valueKeys = [];
	    props.parentKeys = [];
	    return _possibleConstructorReturn(this, _Task.call(this, props));
	  }
	
	  /*
	    # Set Action properties
	    ## Set user-defined Action properties
	     @param [object]
	    @return [Action]
	  */
	
	
	  Action.prototype.set = function set() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    this.values = this.values || {};
	
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var inheritable = {};
	
	    // Set non-consumed properties
	    _Task.prototype.set.call(this, propsToSet);
	
	    // Detect correct `adapter` if none exists and `element` is being set
	    if (this.element) {
	      if (!this.adapter) {
	        // Ducktypish check for Adapter
	        this.adapter = (0, _detectAdapter2.default)(this.element);
	
	        if (this.adapter.getElementData) {
	          this.adapterData = this.adapter.getElementData(this.element);
	        }
	      }
	
	      if (!this.onRender) {
	        this.onRender = defaultRenderer;
	      }
	    }
	
	    // Prime an object to inherit from, with only `value` properties
	    for (var key in this.defaultValue) {
	      if (this.defaultValue.hasOwnProperty(key)) {
	        if (propsToSet.hasOwnProperty(key)) {
	          inheritable[key] = propsToSet[key];
	        } else if (this[key] !== undefined) {
	          inheritable[key] = this[key];
	        }
	      }
	    }
	
	    // Update existing values with inheritable properties
	    for (var _key in this.values) {
	      if (this.values.hasOwnProperty(_key)) {
	        this.values[_key] = _extends({}, this.values[_key], inheritable);
	      }
	    }
	
	    // Update
	    if (values) {
	      this.setValues(values, inheritable);
	
	      // Precompute number of value key and parent keys to avoid per-frame measurement
	      this.numValueKeys = this.valueKeys.length;
	      this.numParentKeys = this.parentKeys.length;
	    }
	
	    return this;
	  };
	
	  Action.prototype.setValues = function setValues(values, inherit) {
	    // Iterate over all incoming values and set
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        var hasChildren = false;
	        var children = {};
	
	        // Merge into existing value or create new
	        var valueAlreadyExists = this.values[key] !== undefined;
	        var newValue = valueAlreadyExists ? _extends({}, this.values[key]) : _extends({}, inherit);
	
	        // If values is not an object, assign value to default prop
	        if (!(0, _utils.isObj)(values[key])) {
	          newValue[this.defaultValueProp] = values[key];
	        } else {
	          newValue = _extends({}, newValue, values[key]);
	        }
	
	        // If we've got an adapter, get the current value
	        if (newValue.current === undefined && this.adapter) {
	          newValue.current = convertIfShouldBeNumber(this.adapter.get(this.element, key));
	        }
	
	        if (newValue.from === undefined && this.adapter) {
	          newValue.from = newValue.current;
	        }
	
	        // Apply default value properties
	        if (!valueAlreadyExists) {
	          newValue = _extends({}, this.defaultValue, newValue);
	        }
	
	        // If we don't have a value type and we do have an Adapter, check for type with value key
	        if (!newValue.type && this.adapter && this.adapter.checkValueType) {
	          newValue.type = this.adapter.checkValueType(key);
	        }
	
	        // If we still don't have a value type and this is the first time we've set this value, check numerical values for strings and test
	        if (!newValue.type && !this.values[key]) {
	          newValue.type = (0, _detect2.default)(newValue);
	        }
	
	        // If we have a value type, handle. This is my least favourite part of Popmotion, so... enjoy.
	        if (newValue.type) {
	          for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	            var propName = _numericalValues2.default[i];
	            var valueProp = newValue[propName];
	
	            // If this prop is a string and we have a splitter, split
	            if (newValue.type.hasOwnProperty('split')) {
	              var splitProp = (0, _utils.isString)(valueProp) ? newValue.type.split(valueProp) : {};
	
	              for (var splitKey in splitProp) {
	                if (splitProp.hasOwnProperty(splitKey)) {
	                  var combinedKey = key + splitKey;
	
	                  // If we don't have a child value for this key, make one
	                  if (!children[combinedKey]) {
	                    var defaultValue = newValue.type.defaultProps && newValue.type.defaultProps[splitKey] ? newValue.type.defaultProps[splitKey] : newValue.type.defaultProps || {};
	
	                    children[combinedKey] = _extends({}, newValue, defaultValue, {
	                      parent: key,
	                      childKey: splitKey
	                    });
	
	                    delete children[combinedKey].type;
	                  }
	
	                  hasChildren = true;
	                  children[combinedKey][propName] = parseFloat(splitProp[splitKey]);
	                }
	              }
	
	              // If we have a template function, generate
	              if (!newValue.template && newValue.type.template && (0, _utils.isString)(valueProp)) {
	                newValue.template = newValue.type.template(valueProp);
	              }
	            } else if (newValue.type.defaultProps) {
	              newValue = _extends({}, newValue, newValue.type.defaultProps);
	            }
	
	            if (valueProp !== undefined && newValue.type.parse) {
	              newValue[propName] = newValue.type.parse(valueProp, newValue);
	            }
	          }
	        } // End value type nonsense
	
	        // Set `prev` to `current` for first frame after set
	        newValue.prev = newValue.current;
	
	        // If this value doesn't have children, add to valueKeys
	        if (!hasChildren) {
	          if (this.valueKeys.indexOf(key) === -1) {
	            this.valueKeys.push(key);
	          }
	
	          // Or add to parentKeys
	        } else {
	            newValue.children = newValue.children || {};
	
	            if (this.parentKeys.indexOf(key) === -1) {
	              this.parentKeys.push(key);
	            }
	
	            this.setValues(children);
	          }
	
	        this.values[key] = newValue;
	      }
	    }
	  };
	
	  /*
	    Decide whether this Action will render on next frame
	     @param [Action]
	    @param [number]
	    @param [number]
	    @return [boolean]: Return true to render
	  */
	
	
	  Action.prototype.willRender = function willRender(action, frameStamp, elapsed) {
	    var hasChanged = false;
	
	    // Check if base values have updated
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	
	      // Run transform function (if present)
	      if (value.transform) {
	        value.current = value.transform(value.current, key, this);
	      }
	
	      // Cap minimum
	      if ((0, _utils.isNum)(value.min)) {
	        value.current = Math.max(value.current, value.min);
	      }
	
	      // Cap maximum
	      if ((0, _utils.isNum)(value.max)) {
	        value.current = Math.min(value.current, value.max);
	      }
	
	      // Round number
	      if (value.round) {
	        value.current = Math.round(value.current);
	      }
	
	      value.frameChange = value.current - value.prev;
	
	      // Update velocity
	      if (!this.calculatesVelocity) {
	        value.velocity = (0, _calc.speedPerSecond)(value.frameChange, elapsed);
	      }
	
	      // If this value has changed
	      if (value.prev !== value.current) {
	        hasChanged = true;
	        value.prev = value.current;
	      }
	
	      // Append unit
	      var valueForState = value.type && value.type.serialize ? value.type.serialize(value.current, value) : value.current;
	
	      // Add to state if this is not a child vaue
	      if (!value.parent) {
	        this.state[key] = valueForState;
	      } else {
	        this.values[value.parent].children[value.childKey] = valueForState;
	      }
	    }
	
	    // Update parent values
	    for (var _i = 0; _i < this.numParentKeys; _i++) {
	      var _key2 = this.parentKeys[_i];
	      var _value = this.values[_key2];
	
	      _value.current = _value.type.combine(_value.children, _value.template);
	
	      this.state[_key2] = _value.current;
	    }
	
	    if (this.onFrame) {
	      this.onFrame(this.state, this);
	    }
	
	    return this.onCleanup ? true : hasChanged;
	  };
	
	  Action.prototype.inherit = function inherit() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var newAction = _Task.prototype.inherit.call(this, propsToSet);
	
	    if (values) {
	      newAction.set({ values: values });
	    }
	
	    return newAction;
	  };
	
	  Action.prototype.pause = function pause() {
	    _Task.prototype.stop.call(this);
	    return this;
	  };
	
	  Action.prototype.resume = function resume() {
	    _Task.prototype.start.call(this);
	    return this;
	  };
	
	  Action.prototype.toggle = function toggle() {
	    return this.isActive ? this.pause() : this.resume();
	  };
	
	  Action.prototype.start = function start() {
	    var values = this.values;
	    _Task.prototype.start.call(this);
	
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        values[key].prev = values[key].origin = values[key].current;
	      }
	    }
	
	    return this;
	  };
	
	  Action.extendDefaultValue = function extendDefaultValue(props) {
	    return _extends({}, this.prototype.defaultValue, props);
	  };
	
	  Action.extendDefaultProps = function extendDefaultProps(props) {
	    return _extends({}, this.prototype.defaultProps, props);
	  };
	
	  return Action;
	}(_Task3.default);
	
	Action.prototype.defaultValueProp = 'current';
	Action.prototype.defaultValue = {
	  current: 0,
	  velocity: 0,
	  round: false,
	  min: undefined,
	  max: undefined,
	  transform: undefined
	};
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBakI7O0FBRTdCLElBQU0sa0JBQWtCO01BQUc7TUFBTztNQUFTO01BQWE7U0FBYyxRQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBd0IsV0FBeEI7Q0FBOUM7O0FBRXhCLElBQU0sMEJBQTBCLFVBQUMsS0FBRDtTQUFXLENBQUMsTUFBTSxLQUFOLENBQUQsR0FBZ0IsV0FBVyxLQUFYLENBQWhCLEdBQW9DLEtBQXBDO0NBQVg7O0lBRTFCOzs7QUFDSixXQURJLE1BQ0osR0FBd0I7UUFBWiw4REFBUSxrQkFBSTs7MEJBRHBCLFFBQ29COztBQUN0QixVQUFNLEtBQU4sR0FBYyxFQUFkLENBRHNCO0FBRXRCLFVBQU0sU0FBTixHQUFrQixFQUFsQixDQUZzQjtBQUd0QixVQUFNLFVBQU4sR0FBbUIsRUFBbkIsQ0FIc0I7NENBSXRCLGlCQUFNLEtBQU4sR0FKc0I7R0FBeEI7Ozs7Ozs7Ozs7QUFESSxtQkFlSixxQkFBZ0I7UUFBWiw4REFBUSxrQkFBSTs7QUFDZCxTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUFmLENBREE7O1FBR04sU0FBMEIsTUFBMUIsT0FITTs7UUFHSyxzQ0FBZSxtQkFIcEI7O0FBSWQsUUFBTSxjQUFjLEVBQWQ7OztBQUpRLG9CQU9SLEdBQU4sWUFBVSxVQUFWOzs7QUFQYyxRQVVWLEtBQUssT0FBTCxFQUFjO0FBQ2hCLFVBQUksQ0FBQyxLQUFLLE9BQUwsRUFBYzs7QUFFakIsYUFBSyxPQUFMLEdBQWUsNkJBQWMsS0FBSyxPQUFMLENBQTdCLENBRmlCOztBQUlqQixZQUFJLEtBQUssT0FBTCxDQUFhLGNBQWIsRUFBNkI7QUFDL0IsZUFBSyxXQUFMLEdBQW1CLEtBQUssT0FBTCxDQUFhLGNBQWIsQ0FBNEIsS0FBSyxPQUFMLENBQS9DLENBRCtCO1NBQWpDO09BSkY7O0FBU0EsVUFBSSxDQUFDLEtBQUssUUFBTCxFQUFlO0FBQ2xCLGFBQUssUUFBTCxHQUFnQixlQUFoQixDQURrQjtPQUFwQjtLQVZGOzs7QUFWYyxTQTBCVCxJQUFJLEdBQUosSUFBVyxLQUFLLFlBQUwsRUFBbUI7QUFDakMsVUFBSSxLQUFLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBaUMsR0FBakMsQ0FBSixFQUEyQztBQUN6QyxZQUFJLFdBQVcsY0FBWCxDQUEwQixHQUExQixDQUFKLEVBQW9DO0FBQ2xDLHNCQUFZLEdBQVosSUFBbUIsV0FBVyxHQUFYLENBQW5CLENBRGtDO1NBQXBDLE1BRU8sSUFBSSxLQUFLLEdBQUwsTUFBYyxTQUFkLEVBQXlCO0FBQ2xDLHNCQUFZLEdBQVosSUFBbUIsS0FBSyxHQUFMLENBQW5CLENBRGtDO1NBQTdCO09BSFQ7S0FERjs7O0FBMUJjLFNBcUNULElBQUksSUFBSixJQUFXLEtBQUssTUFBTCxFQUFhO0FBQzNCLFVBQUksS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixJQUEzQixDQUFKLEVBQXFDO0FBQ25DLGFBQUssTUFBTCxDQUFZLElBQVosaUJBQXdCLEtBQUssTUFBTCxDQUFZLElBQVosR0FBcUIsWUFBN0MsQ0FEbUM7T0FBckM7S0FERjs7O0FBckNjLFFBNENWLE1BQUosRUFBWTtBQUNWLFdBQUssU0FBTCxDQUFlLE1BQWYsRUFBdUIsV0FBdkI7OztBQURVLFVBSVYsQ0FBSyxZQUFMLEdBQW9CLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FKVjtBQUtWLFdBQUssYUFBTCxHQUFxQixLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FMWDtLQUFaOztBQVFBLFdBQU8sSUFBUCxDQXBEYzs7O0FBZlosbUJBc0VKLCtCQUFVLFFBQVEsU0FBUzs7QUFFekIsU0FBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLFlBQUksY0FBYyxLQUFkLENBRDBCO0FBRTlCLFlBQU0sV0FBVyxFQUFYOzs7QUFGd0IsWUFLeEIscUJBQXFCLEtBQUssTUFBTCxDQUFZLEdBQVosTUFBcUIsU0FBckIsQ0FMRztBQU05QixZQUFJLFdBQVcsa0NBQTBCLEtBQUssTUFBTCxDQUFZLEdBQVosRUFBMUIsZ0JBQW9ELFFBQXBEOzs7QUFOZSxZQVMxQixDQUFDLGtCQUFNLE9BQU8sR0FBUCxDQUFOLENBQUQsRUFBcUI7QUFDdkIsbUJBQVMsS0FBSyxnQkFBTCxDQUFULEdBQWtDLE9BQU8sR0FBUCxDQUFsQyxDQUR1QjtTQUF6QixNQUVPO0FBQ0wsa0NBQWdCLFVBQWEsT0FBTyxHQUFQLEVBQTdCLENBREs7U0FGUDs7O0FBVDhCLFlBZ0IxQixTQUFTLE9BQVQsS0FBcUIsU0FBckIsSUFBa0MsS0FBSyxPQUFMLEVBQWM7QUFDbEQsbUJBQVMsT0FBVCxHQUFtQix3QkFBd0IsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixLQUFLLE9BQUwsRUFBYyxHQUEvQixDQUF4QixDQUFuQixDQURrRDtTQUFwRDs7QUFJQSxZQUFJLFNBQVMsSUFBVCxLQUFrQixTQUFsQixJQUErQixLQUFLLE9BQUwsRUFBYztBQUMvQyxtQkFBUyxJQUFULEdBQWdCLFNBQVMsT0FBVCxDQUQrQjtTQUFqRDs7O0FBcEI4QixZQXlCMUIsQ0FBQyxrQkFBRCxFQUFxQjtBQUN2QixrQ0FBZ0IsS0FBSyxZQUFMLEVBQXNCLFNBQXRDLENBRHVCO1NBQXpCOzs7QUF6QjhCLFlBOEIxQixDQUFDLFNBQVMsSUFBVCxJQUFpQixLQUFLLE9BQUwsSUFBZ0IsS0FBSyxPQUFMLENBQWEsY0FBYixFQUE2QjtBQUNqRSxtQkFBUyxJQUFULEdBQWdCLEtBQUssT0FBTCxDQUFhLGNBQWIsQ0FBNEIsR0FBNUIsQ0FBaEIsQ0FEaUU7U0FBbkU7OztBQTlCOEIsWUFtQzFCLENBQUMsU0FBUyxJQUFULElBQWlCLENBQUMsS0FBSyxNQUFMLENBQVksR0FBWixDQUFELEVBQW1CO0FBQ3ZDLG1CQUFTLElBQVQsR0FBZ0Isc0JBQWdCLFFBQWhCLENBQWhCLENBRHVDO1NBQXpDOzs7QUFuQzhCLFlBd0MxQixTQUFTLElBQVQsRUFBZTtBQUNqQixlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxvQkFBSixFQUEwQixHQUExQyxFQUErQztBQUM3QyxnQkFBTSxXQUFXLDBCQUFpQixDQUFqQixDQUFYLENBRHVDO0FBRTdDLGdCQUFNLFlBQVksU0FBUyxRQUFULENBQVo7OztBQUZ1QyxnQkFLekMsU0FBUyxJQUFULENBQWMsY0FBZCxDQUE2QixPQUE3QixDQUFKLEVBQTJDO0FBQ3pDLGtCQUFNLFlBQVkscUJBQVMsU0FBVCxJQUFzQixTQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFNBQXBCLENBQXRCLEdBQXVELEVBQXZELENBRHVCOztBQUd6QyxtQkFBSyxJQUFJLFFBQUosSUFBZ0IsU0FBckIsRUFBZ0M7QUFDOUIsb0JBQUksVUFBVSxjQUFWLENBQXlCLFFBQXpCLENBQUosRUFBd0M7QUFDdEMsc0JBQU0sY0FBYyxNQUFNLFFBQU47OztBQURrQixzQkFJbEMsQ0FBQyxTQUFTLFdBQVQsQ0FBRCxFQUF3QjtBQUMxQix3QkFBTSxlQUFlLFFBQUMsQ0FBUyxJQUFULENBQWMsWUFBZCxJQUE4QixTQUFTLElBQVQsQ0FBYyxZQUFkLENBQTJCLFFBQTNCLENBQTlCLEdBQXNFLFNBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBMkIsUUFBM0IsQ0FBdkUsR0FBOEcsU0FBUyxJQUFULENBQWMsWUFBZCxJQUE4QixFQUE5QixDQUR6Rzs7QUFHMUIsNkJBQVMsV0FBVCxpQkFDSyxVQUNBO0FBQ0gsOEJBQVEsR0FBUjtBQUNBLGdDQUFVLFFBQVY7c0JBSkYsQ0FIMEI7O0FBVTFCLDJCQUFPLFNBQVMsV0FBVCxFQUFzQixJQUF0QixDQVZtQjttQkFBNUI7O0FBYUEsZ0NBQWMsSUFBZCxDQWpCc0M7QUFrQnRDLDJCQUFTLFdBQVQsRUFBc0IsUUFBdEIsSUFBa0MsV0FBVyxVQUFVLFFBQVYsQ0FBWCxDQUFsQyxDQWxCc0M7aUJBQXhDO2VBREY7OztBQUh5QyxrQkEyQnJDLENBQUMsU0FBUyxRQUFULElBQXFCLFNBQVMsSUFBVCxDQUFjLFFBQWQsSUFBMEIscUJBQVMsU0FBVCxDQUFoRCxFQUFxRTtBQUN2RSx5QkFBUyxRQUFULEdBQW9CLFNBQVMsSUFBVCxDQUFjLFFBQWQsQ0FBdUIsU0FBdkIsQ0FBcEIsQ0FEdUU7ZUFBekU7YUEzQkYsTUE4Qk8sSUFBSSxTQUFTLElBQVQsQ0FBYyxZQUFkLEVBQTRCO0FBQ3JDLHNDQUFnQixVQUFhLFNBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBN0IsQ0FEcUM7YUFBaEM7O0FBSVAsZ0JBQUksY0FBYyxTQUFkLElBQTJCLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDbEQsdUJBQVMsUUFBVCxJQUFxQixTQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQXJCLENBRGtEO2FBQXBEO1dBdkNGO1NBREY7OztBQXhDOEIsZ0JBdUY5QixDQUFTLElBQVQsR0FBZ0IsU0FBUyxPQUFUOzs7QUF2RmMsWUEwRjFCLENBQUMsV0FBRCxFQUFjO0FBQ2hCLGNBQUksS0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixHQUF2QixNQUFnQyxDQUFDLENBQUQsRUFBSTtBQUN0QyxpQkFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixHQUFwQixFQURzQztXQUF4Qzs7O0FBRGdCLFNBQWxCLE1BTU87QUFDTCxxQkFBUyxRQUFULEdBQW9CLFNBQVMsUUFBVCxJQUFxQixFQUFyQixDQURmOztBQUdMLGdCQUFJLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFDLENBQUQsRUFBSTtBQUN2QyxtQkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEdBQXJCLEVBRHVDO2FBQXpDOztBQUlBLGlCQUFLLFNBQUwsQ0FBZSxRQUFmLEVBUEs7V0FOUDs7QUFnQkEsYUFBSyxNQUFMLENBQVksR0FBWixJQUFtQixRQUFuQixDQTFHOEI7T0FBaEM7S0FERjs7Ozs7Ozs7Ozs7O0FBeEVFLG1CQWdNSixpQ0FBVyxRQUFRLFlBQVksU0FBUztBQUN0QyxRQUFJLGFBQWEsS0FBYjs7O0FBRGtDLFNBSWpDLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURvQztBQUUxQyxVQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSOzs7QUFGb0MsVUFLdEMsTUFBTSxTQUFOLEVBQWlCO0FBQ25CLGNBQU0sT0FBTixHQUFnQixNQUFNLFNBQU4sQ0FBZ0IsTUFBTSxPQUFOLEVBQWUsR0FBL0IsRUFBb0MsSUFBcEMsQ0FBaEIsQ0FEbUI7T0FBckI7OztBQUwwQyxVQVV0QyxrQkFBTSxNQUFNLEdBQU4sQ0FBVixFQUFzQjtBQUNwQixjQUFNLE9BQU4sR0FBZ0IsS0FBSyxHQUFMLENBQVMsTUFBTSxPQUFOLEVBQWUsTUFBTSxHQUFOLENBQXhDLENBRG9CO09BQXRCOzs7QUFWMEMsVUFldEMsa0JBQU0sTUFBTSxHQUFOLENBQVYsRUFBc0I7QUFDcEIsY0FBTSxPQUFOLEdBQWdCLEtBQUssR0FBTCxDQUFTLE1BQU0sT0FBTixFQUFlLE1BQU0sR0FBTixDQUF4QyxDQURvQjtPQUF0Qjs7O0FBZjBDLFVBb0J0QyxNQUFNLEtBQU4sRUFBYTtBQUNmLGNBQU0sT0FBTixHQUFnQixLQUFLLEtBQUwsQ0FBVyxNQUFNLE9BQU4sQ0FBM0IsQ0FEZTtPQUFqQjs7QUFJQSxZQUFNLFdBQU4sR0FBb0IsTUFBTSxPQUFOLEdBQWdCLE1BQU0sSUFBTjs7O0FBeEJNLFVBMkJ0QyxDQUFDLEtBQUssa0JBQUwsRUFBeUI7QUFDNUIsY0FBTSxRQUFOLEdBQWlCLDBCQUFlLE1BQU0sV0FBTixFQUFtQixPQUFsQyxDQUFqQixDQUQ0QjtPQUE5Qjs7O0FBM0IwQyxVQWdDdEMsTUFBTSxJQUFOLEtBQWUsTUFBTSxPQUFOLEVBQWU7QUFDaEMscUJBQWEsSUFBYixDQURnQztBQUVoQyxjQUFNLElBQU4sR0FBYSxNQUFNLE9BQU4sQ0FGbUI7T0FBbEM7OztBQWhDMEMsVUFzQ3BDLGdCQUFnQixLQUFDLENBQU0sSUFBTixJQUFjLE1BQU0sSUFBTixDQUFXLFNBQVgsR0FBd0IsTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFxQixNQUFNLE9BQU4sRUFBZSxLQUFwQyxDQUF2QyxHQUFvRixNQUFNLE9BQU47OztBQXRDaEUsVUF5Q3RDLENBQUMsTUFBTSxNQUFOLEVBQWM7QUFDakIsYUFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQixhQUFsQixDQURpQjtPQUFuQixNQUVPO0FBQ0wsYUFBSyxNQUFMLENBQVksTUFBTSxNQUFOLENBQVosQ0FBMEIsUUFBMUIsQ0FBbUMsTUFBTSxRQUFOLENBQW5DLEdBQXFELGFBQXJELENBREs7T0FGUDtLQXpDRjs7O0FBSnNDLFNBcURqQyxJQUFJLEtBQUksQ0FBSixFQUFPLEtBQUksS0FBSyxhQUFMLEVBQW9CLElBQXhDLEVBQTZDO0FBQzNDLFVBQU0sUUFBTSxLQUFLLFVBQUwsQ0FBZ0IsRUFBaEIsQ0FBTixDQURxQztBQUUzQyxVQUFNLFNBQVEsS0FBSyxNQUFMLENBQVksS0FBWixDQUFSLENBRnFDOztBQUkzQyxhQUFNLE9BQU4sR0FBZ0IsT0FBTSxJQUFOLENBQVcsT0FBWCxDQUFtQixPQUFNLFFBQU4sRUFBZ0IsT0FBTSxRQUFOLENBQW5ELENBSjJDOztBQU0zQyxXQUFLLEtBQUwsQ0FBVyxLQUFYLElBQWtCLE9BQU0sT0FBTixDQU55QjtLQUE3Qzs7QUFTQSxRQUFJLEtBQUssT0FBTCxFQUFjO0FBQ2hCLFdBQUssT0FBTCxDQUFhLEtBQUssS0FBTCxFQUFZLElBQXpCLEVBRGdCO0tBQWxCOztBQUlBLFdBQU8sSUFBQyxDQUFLLFNBQUwsR0FBa0IsSUFBbkIsR0FBMEIsVUFBMUIsQ0FsRStCOzs7QUFoTXBDLG1CQXFRSiw2QkFBb0I7UUFBWiw4REFBUSxrQkFBSTtRQUNWLFNBQTBCLE1BQTFCLE9BRFU7O1FBQ0Msc0NBQWUsbUJBRGhCOztBQUVsQixRQUFNLFlBQVksZ0JBQU0sT0FBTixZQUFjLFVBQWQsQ0FBWixDQUZZOztBQUlsQixRQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFVLEdBQVYsQ0FBYyxFQUFFLGNBQUYsRUFBZCxFQURVO0tBQVo7O0FBSUEsV0FBTyxTQUFQLENBUmtCOzs7QUFyUWhCLG1CQWdSSix5QkFBUTtBQUNOLG9CQUFNLElBQU4sWUFETTtBQUVOLFdBQU8sSUFBUCxDQUZNOzs7QUFoUkosbUJBcVJKLDJCQUFTO0FBQ1Asb0JBQU0sS0FBTixZQURPO0FBRVAsV0FBTyxJQUFQLENBRk87OztBQXJSTCxtQkEwUkosMkJBQVM7QUFDUCxXQUFPLEtBQUssUUFBTCxHQUFnQixLQUFLLEtBQUwsRUFBaEIsR0FBK0IsS0FBSyxNQUFMLEVBQS9CLENBREE7OztBQTFSTCxtQkE4UkoseUJBQVE7QUFDTixRQUFNLFNBQVMsS0FBSyxNQUFMLENBRFQ7QUFFTixvQkFBTSxLQUFOLFlBRk07O0FBSU4sU0FBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLGVBQU8sR0FBUCxFQUFZLElBQVosR0FBbUIsT0FBTyxHQUFQLEVBQVksTUFBWixHQUFxQixPQUFPLEdBQVAsRUFBWSxPQUFaLENBRFY7T0FBaEM7S0FERjs7QUFNQSxXQUFPLElBQVAsQ0FWTTs7O0FBOVJKLFNBMlNHLGlEQUFtQixPQUFPO0FBQy9CLHdCQUFZLEtBQUssU0FBTCxDQUFlLFlBQWYsRUFBZ0MsTUFBNUMsQ0FEK0I7OztBQTNTN0IsU0ErU0csaURBQW1CLE9BQU87QUFDL0Isd0JBQVksS0FBSyxTQUFMLENBQWUsWUFBZixFQUFnQyxNQUE1QyxDQUQrQjs7O1NBL1M3Qjs7O0FBb1ROLE9BQU8sU0FBUCxDQUFpQixnQkFBakIsR0FBb0MsU0FBcEM7QUFDQSxPQUFPLFNBQVAsQ0FBaUIsWUFBakIsR0FBZ0M7QUFDOUIsV0FBUyxDQUFUO0FBQ0EsWUFBVSxDQUFWO0FBQ0EsU0FBTyxLQUFQO0FBQ0EsT0FBSyxTQUFMO0FBQ0EsT0FBSyxTQUFMO0FBQ0EsYUFBVyxTQUFYO0NBTkY7O2tCQVNlIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2svVGFzayc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiwgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IGRldGVjdFZhbHVlVHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9kZXRlY3QnO1xuaW1wb3J0IE5VTUVSSUNBTF9WQUxVRVMgZnJvbSAnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnO1xuaW1wb3J0IGRldGVjdEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2RldGVjdC1hZGFwdGVyJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuY29uc3QgZGVmYXVsdFJlbmRlcmVyID0gKHsgc3RhdGUsIGFkYXB0ZXIsIGFkYXB0ZXJEYXRhLCBlbGVtZW50IH0pID0+IGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcblxuY29uc3QgY29udmVydElmU2hvdWxkQmVOdW1iZXIgPSAodmFsdWUpID0+ICFpc05hTih2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xuXG5jbGFzcyBBY3Rpb24gZXh0ZW5kcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8qXG4gICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICovXG4gIHNldChwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBkZXRlY3RBZGFwdGVyKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHsgLi4udGhpcy52YWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IHsgLi4udGhpcy52YWx1ZXNba2V5XSB9IDogeyAuLi5pbmhlcml0IH07XG5cbiAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgaWYgKCFpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZXNba2V5XSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0SWZTaG91bGRCZU51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0KHRoaXMuZWxlbWVudCwga2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghdmFsdWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gZGV0ZWN0VmFsdWVUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICBjb25zdCBzcGxpdFByb3AgPSBpc1N0cmluZyh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NvbWJpbmVkS2V5XS50eXBlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gcGFyc2VGbG9hdChzcGxpdFByb3Bbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi5uZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgKi9cbiAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgIGlmIChpc051bSh2YWx1ZS5taW4pKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgaWYgKGlzTnVtKHZhbHVlLm1heCkpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2O1xuXG4gICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgIGNvbnN0IHZhbHVlRm9yU3RhdGUgPSAodmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSkgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gIH1cblxuICBpbmhlcml0KHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgY29uc3QgbmV3QWN0aW9uID0gc3VwZXIuaW5oZXJpdChwcm9wc1RvU2V0KTtcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIG5ld0FjdGlvbi5zZXQoeyB2YWx1ZXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3VtZSgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCAuLi5wcm9wcyB9O1xuICB9XG5cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfTtcbiAgfVxufVxuXG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnY3VycmVudCc7XG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IHtcbiAgY3VycmVudDogMCxcbiAgdmVsb2NpdHk6IDAsXG4gIHJvdW5kOiBmYWxzZSxcbiAgbWluOiB1bmRlZmluZWQsXG4gIG1heDogdW5kZWZpbmVkLFxuICB0cmFuc2Zvcm06IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _loop = __webpack_require__(352);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                            Base Task class for creating a task on the main render loop.
	                                                                                                                                                          */
	
	
	function cleanup() {
	  this.onCleanup = undefined;
	  loop.deactivate(this.id);
	}
	
	function activate() {
	  this.onCleanup = cleanup;
	}
	
	var Task = function () {
	  function Task(props) {
	    _classCallCheck(this, Task);
	
	    this.id = loop.getTaskId();
	    this.isActive = false;
	
	    if (this.defaultProps) {
	      for (var key in this.defaultProps) {
	        if (this.defaultProps.hasOwnProperty(key)) {
	          this[key] = this.defaultProps[key];
	        }
	      }
	    }
	
	    this.set(props);
	  }
	
	  Task.prototype.set = function set(props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        this[key] = props[key];
	      }
	    }
	
	    return this;
	  };
	
	  Task.prototype.start = function start() {
	    loop.activate(this.id, this);
	
	    this.onActivateLoop = this.onCleanup = undefined;
	    this.isComplete = false;
	
	    if (this.onStart) {
	      this.onStart(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.stop = function stop() {
	    loop.deactivate(this.id);
	
	    if (this.onStop) {
	      this.onStop(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.once = function once() {
	    loop.activate(this.id, this);
	    this.onCleanup = undefined;
	    this.onActivateLoop = activate;
	
	    return this;
	  };
	
	  Task.prototype.complete = function complete() {
	    this.stop();
	
	    if (this.onComplete) {
	      this.onComplete(this);
	    }
	  };
	
	  /*
	    # Extend this Process with new properties
	    ## Returns new instance of this Process's `prototype` with existing and new properties
	     @param [object] (optional)
	    @return [Process]
	  */
	
	
	  Task.prototype.inherit = function inherit(props) {
	    var id = this.id;
	
	    var inheritedProps = _objectWithoutProperties(this, ['id']);
	
	    return new this.constructor(_extends({}, inheritedProps, props));
	  };
	
	  return Task;
	}();
	
	exports.default = Task;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0lBQVk7Ozs7Ozs7Ozs7O0FBRVosU0FBUyxPQUFULEdBQW1CO0FBQ2pCLE9BQUssU0FBTCxHQUFpQixTQUFqQixDQURpQjtBQUVqQixPQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBRmlCO0NBQW5COztBQUtBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixPQUFLLFNBQUwsR0FBaUIsT0FBakIsQ0FEa0I7Q0FBcEI7O0lBSXFCO0FBQ25CLFdBRG1CLElBQ25CLENBQVksS0FBWixFQUFtQjswQkFEQSxNQUNBOztBQUNqQixTQUFLLEVBQUwsR0FBVSxLQUFLLFNBQUwsRUFBVixDQURpQjtBQUVqQixTQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FGaUI7O0FBSWpCLFFBQUksS0FBSyxZQUFMLEVBQW1CO0FBQ3JCLFdBQUssSUFBSSxHQUFKLElBQVcsS0FBSyxZQUFMLEVBQW1CO0FBQ2pDLFlBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDekMsZUFBSyxHQUFMLElBQVksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQVosQ0FEeUM7U0FBM0M7T0FERjtLQURGOztBQVFBLFNBQUssR0FBTCxDQUFTLEtBQVQsRUFaaUI7R0FBbkI7O0FBRG1CLGlCQWdCbkIsbUJBQUksT0FBTztBQUNULFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsVUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixhQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQ2QjtPQUEvQjtLQURGOztBQU1BLFdBQU8sSUFBUCxDQVBTOzs7QUFoQlEsaUJBMEJuQix5QkFBUTtBQUNOLFNBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRE07O0FBR04sU0FBSyxjQUFMLEdBQXNCLEtBQUssU0FBTCxHQUFpQixTQUFqQixDQUhoQjtBQUlOLFNBQUssVUFBTCxHQUFrQixLQUFsQixDQUpNOztBQU1OLFFBQUksS0FBSyxPQUFMLEVBQWM7QUFDaEIsV0FBSyxPQUFMLENBQWEsSUFBYixFQURnQjtLQUFsQjs7QUFJQSxXQUFPLElBQVAsQ0FWTTs7O0FBMUJXLGlCQXVDbkIsdUJBQU87QUFDTCxTQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBREs7O0FBR0wsUUFBSSxLQUFLLE1BQUwsRUFBYTtBQUNmLFdBQUssTUFBTCxDQUFZLElBQVosRUFEZTtLQUFqQjs7QUFJQSxXQUFPLElBQVAsQ0FQSzs7O0FBdkNZLGlCQWlEbkIsdUJBQU87QUFDTCxTQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsRUFBUyxJQUF2QixFQURLO0FBRUwsU0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBRks7QUFHTCxTQUFLLGNBQUwsR0FBc0IsUUFBdEIsQ0FISzs7QUFLTCxXQUFPLElBQVAsQ0FMSzs7O0FBakRZLGlCQXlEbkIsK0JBQVc7QUFDVCxTQUFLLElBQUwsR0FEUzs7QUFHVCxRQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNuQixXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFEbUI7S0FBckI7Ozs7Ozs7Ozs7O0FBNURpQixpQkF3RW5CLDJCQUFRLE9BQU87UUFDTCxLQUEwQixLQUExQixHQURLOztRQUNFLDBDQUFtQixjQURyQjs7QUFFYixXQUFPLElBQUksS0FBSyxXQUFMLGNBQXNCLGdCQUFtQixNQUE3QyxDQUFQLENBRmE7OztTQXhFSSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4qL1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5mdW5jdGlvbiBjbGVhbnVwKCkge1xuICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSBjbGVhbnVwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldChwcm9wcyk7XG4gIH1cblxuICBzZXQocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgXG4gICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uY2UoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAqL1xuICBpbmhlcml0KHByb3BzKSB7XG4gICAgY29uc3QgeyBpZCwgLi4uaW5oZXJpdGVkUHJvcHMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4uaW5oZXJpdGVkUHJvcHMsIC4uLnByb3BzIH0pO1xuICB9XG59Il19

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(348);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(353);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(354);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
	                                                                                                                                                                                                                                                                                            Core render loop
	                                                                                                                                                                                                                                                                                          
	                                                                                                                                                                                                                                                                                            Some decicisons here have been taken in the name of performance. All hail performance.
	                                                                                                                                                                                                                                                                                            (It turns out microoptimisations do matter when you have 16ms)
	                                                                                                                                                                                                                                                                                          */
	
	var numTaskSteps = taskStepOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	/*
	  [timestamp]: Frame timestamp
	  [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	  var activeIds = _manager2.default.getActiveIds();
	  var activeTaskCount = activeIds.length;
	
	  for (var i = 0; i < numTaskSteps; i++) {
	    var step = taskStepOrder[i];
	
	    for (var i2 = 0; i2 < activeTaskCount; i2++) {
	      var task = _manager2.default.activeTasks[activeIds[i2]];
	      var result = false;
	
	      // Check if this task has this step, or if it's a render step that we're rendering this frame
	      if (task && task[step.name] && (!step.isRender || step.isRender && task._renderThisFrame === true)) {
	        result = task[step.name].call(task, task, frameStamp, elapsed);
	      }
	
	      // If this is a decide render step and it returns `false`, set willRender to false
	      if (step.decideRender) {
	        task._renderThisFrame = task[step.name] && result !== true ? false : true;
	      }
	    }
	  }
	
	  return _manager2.default.getNonBackgroundRunningCount();
	}
	
	// Function to fire every frame
	function frame(frameStamp) {
	  _timer2.default.update(frameStamp);
	  isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
	
	  if (isRunning) {
	    (0, _tick2.default)(frame);
	  }
	}
	
	// Start loop
	function start() {
	  if (!isRunning) {
	    _timer2.default.start();
	    isRunning = true;
	    (0, _tick2.default)(frame);
	  }
	}
	
	// Exports
	var getTaskId = exports.getTaskId = _manager2.default.getTaskId;
	
	/*
	  [int]: task ID to activate
	  [task]: task to activate
	*/
	function activate(id, task) {
	  _manager2.default.activate(id, task);
	
	  if (!isRunning) {
	    start();
	  }
	}
	
	/*
	  [int]: task ID to deactivate
	*/
	var deactivate = exports.deactivate = _manager2.default.deactivate;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWlGZ0I7O0FBM0VoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLENBQ3BCLEVBQUUsTUFBTSxjQUFOLEVBRGtCLEVBRXBCLEVBQUUsTUFBTSxVQUFOLEVBRmtCLEVBR3BCLEVBQUUsTUFBTSxZQUFOLEVBQW9CLGNBQWMsSUFBZCxFQUhGLEVBSXBCLEVBQUUsTUFBTSxhQUFOLEVBQXFCLFVBQVUsSUFBVixFQUpILEVBS3BCLEVBQUUsTUFBTSxVQUFOLEVBQWtCLFVBQVUsSUFBVixFQUxBLEVBTXBCLEVBQUUsTUFBTSxjQUFOLEVBQXNCLFVBQVUsSUFBVixFQU5KLEVBT3BCLEVBQUUsTUFBTSxZQUFOLEVBUGtCLEVBUXBCLEVBQUUsTUFBTSxXQUFOLEVBUmtCLENBQWhCOzs7Ozs7O0FBVU4sSUFBTSxlQUFlLGNBQWMsTUFBZDs7O0FBR3JCLElBQUksWUFBWSxLQUFaOzs7Ozs7QUFNSixTQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDcEMsTUFBTSxZQUFZLGtCQUFRLFlBQVIsRUFBWixDQUQ4QjtBQUVwQyxNQUFNLGtCQUFrQixVQUFVLE1BQVYsQ0FGWTs7QUFJcEMsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksWUFBSixFQUFrQixHQUFsQyxFQUF1QztBQUNyQyxRQUFNLE9BQU8sY0FBYyxDQUFkLENBQVAsQ0FEK0I7O0FBR3JDLFNBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLGVBQUwsRUFBc0IsSUFBdkMsRUFBNkM7QUFDM0MsVUFBTSxPQUFPLGtCQUFRLFdBQVIsQ0FBb0IsVUFBVSxFQUFWLENBQXBCLENBQVAsQ0FEcUM7QUFFM0MsVUFBSSxTQUFTLEtBQVQ7OztBQUZ1QyxVQUt2QyxRQUFRLEtBQUssS0FBSyxJQUFMLENBQWIsS0FBNEIsQ0FBQyxLQUFLLFFBQUwsSUFBa0IsS0FBSyxRQUFMLElBQWlCLEtBQUssZ0JBQUwsS0FBMEIsSUFBMUIsQ0FBaEUsRUFBa0c7QUFDcEcsaUJBQVMsS0FBSyxLQUFLLElBQUwsQ0FBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUFULENBRG9HO09BQXRHOzs7QUFMMkMsVUFVdkMsS0FBSyxZQUFMLEVBQW1CO0FBQ3JCLGFBQUssZ0JBQUwsR0FBd0IsSUFBQyxDQUFLLEtBQUssSUFBTCxDQUFMLElBQW1CLFdBQVcsSUFBWCxHQUFtQixLQUF2QyxHQUErQyxJQUEvQyxDQURIO09BQXZCO0tBVkY7R0FIRjs7QUFtQkEsU0FBTyxrQkFBUSw0QkFBUixFQUFQLENBdkJvQztDQUF0Qzs7O0FBMkJBLFNBQVMsS0FBVCxDQUFlLFVBQWYsRUFBMkI7QUFDekIsa0JBQU0sTUFBTixDQUFhLFVBQWIsRUFEeUI7QUFFekIsY0FBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBRnlCOztBQUl6QixNQUFJLFNBQUosRUFBZTtBQUNiLHdCQUFLLEtBQUwsRUFEYTtHQUFmO0NBSkY7OztBQVVBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLE1BQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxvQkFBTSxLQUFOLEdBRGM7QUFFZCxnQkFBWSxJQUFaLENBRmM7QUFHZCx3QkFBSyxLQUFMLEVBSGM7R0FBaEI7Q0FERjs7O0FBU08sSUFBTSxnQ0FBWSxrQkFBUSxTQUFSOzs7Ozs7QUFNbEIsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLElBQXRCLEVBQTRCO0FBQ2pDLG9CQUFRLFFBQVIsQ0FBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFEaUM7O0FBR2pDLE1BQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxZQURjO0dBQWhCO0NBSEs7Ozs7O0FBV0EsSUFBTSxrQ0FBYSxrQkFBUSxVQUFSIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3JlIHJlbmRlciBsb29wXG5cbiAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiovXG5pbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcblxuY29uc3QgdGFza1N0ZXBPcmRlciA9IFtcbiAgeyBuYW1lOiAnb25GcmFtZVN0YXJ0JyB9LFxuICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvblByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgeyBuYW1lOiAnb25GcmFtZUVuZCcgfSxcbiAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtVGFza1N0ZXBzID0gdGFza1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgY29uc3QgYWN0aXZlVGFza0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRhc2tTdGVwczsgaSsrKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRhc2tTdGVwT3JkZXJbaV07XG5cbiAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlVGFza0NvdW50OyBpMisrKSB7XG4gICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5hY3RpdmVUYXNrc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB0YXNrIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICBpZiAodGFzayAmJiB0YXNrW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IChzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRhc2tbc3RlcC5uYW1lXS5jYWxsKHRhc2ssIHRhc2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID0gKHRhc2tbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYW5hZ2VyLmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgdGljayhmcmFtZSk7XG4gIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgdGltZXIuc3RhcnQoKTtcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIHRpY2soZnJhbWUpO1xuICB9XG59XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBjb25zdCBnZXRUYXNrSWQgPSBtYW5hZ2VyLmdldFRhc2tJZDtcblxuLypcbiAgW2ludF06IHRhc2sgSUQgdG8gYWN0aXZhdGVcbiAgW3Rhc2tdOiB0YXNrIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCB0YXNrKSB7XG4gIG1hbmFnZXIuYWN0aXZhdGUoaWQsIHRhc2spO1xuXG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgc3RhcnQoKTtcbiAgfVxufVxuXG4vKlxuICBbaW50XTogdGFzayBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGNvbnN0IGRlYWN0aXZhdGUgPSBtYW5hZ2VyLmRlYWN0aXZhdGU7Il19

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = void 0;
	
	if (hasRAF) {
	  tick = function (callback) {
	    return window.requestAnimationFrame(callback);
	  };
	} else {
	  (function () {
	    /*
	      requestAnimationFrame polyfill
	      
	      For IE8/9 Flinstones and non-browser environments
	       Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
	      
	      http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	      http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	       
	      requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	       
	      MIT license
	    */
	    var lastTime = 0;
	
	    tick = function (callback) {
	      var currentTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
	
	      lastTime = currentTime + timeToCall;
	
	      setTimeout(function () {
	        return callback(lastTime);
	      }, timeToCall);
	    };
	  })();
	}
	
	exports.default = tick;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGFBQUo7O0FBRUEsSUFBSSxNQUFKLEVBQVk7QUFDVixTQUFPLFVBQUMsUUFBRDtXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7R0FBZCxDQURHO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUwsUUFBSSxXQUFXLENBQVg7O0FBRUosV0FBTyxVQUFDLFFBQUQsRUFBYztBQUNuQixVQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFkLENBRGE7QUFFbkIsVUFBTSxhQUFhLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNLGNBQWMsUUFBZCxDQUFOLENBQXpCLENBRmE7O0FBSW5CLGlCQUFXLGNBQWMsVUFBZCxDQUpROztBQU1uQixpQkFBVztlQUFNLFNBQVMsUUFBVDtPQUFOLEVBQTBCLFVBQXJDLEVBTm1CO0tBQWQ7T0FqQkY7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG5jb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCB0aWNrO1xuXG5pZiAoaGFzUkFGKSB7XG4gIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuICAqL1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gIHRpY2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=

/***/ },
/* 354 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	// [int]: Incremented for each new running task
	var currentTaskId = 0;
	
	// [int]: Number of all running taskes
	var totalRunningCount = 0;
	
	// [int]: Number of running taskes excluding background taskes
	var nonBackgroundRunningCount = 0;
	
	// [array]: Array of running task IDs
	var runningIds = [];
	
	// [object]: Map of running taskes
	var activeTasks = {};
	
	// [array]: Array of task IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of task IDs queued for deactivation
	var deactivateQueue = [];
	
	/*
	  Update activate/deactivate queues
	
	  @param [number]
	  @param [array]
	  @param [array]
	*/
	var updateQueues = function (id, inList, outList) {
	  var inPosition = inList.indexOf(id);
	  var outPosition = outList.indexOf(id);
	
	  if (inPosition === -1) {
	    inList.push(id);
	  }
	
	  if (outPosition > -1) {
	    outList.splice(outPosition, 1);
	  }
	};
	
	/*
	  Update running
	
	  [boolean]: `true` to add
	  [boolean]: `true` if lazy
	*/
	var updateRunningCount = function (add, isLazy) {
	  var modify = add ? 1 : -1;
	
	  totalRunningCount += modify;
	
	  if (!isLazy) {
	    nonBackgroundRunningCount += modify;
	  }
	};
	
	exports.default = {
	  activeTasks: activeTasks,
	
	  // Activate a task
	  activate: function (id, task) {
	    activeTasks[id] = task;
	    task.isActive = true;
	    updateQueues(id, activateQueue, deactivateQueue);
	
	    if (task.onActivate) {
	      task.onActivate(task);
	    }
	
	    if (task.onActivateOnce) {
	      task.onActivateOnce(task);
	    }
	  },
	
	  // Deactivate a task
	  deactivate: function (id) {
	    var task = activeTasks[id];
	
	    if (task) {
	      updateQueues(id, deactivateQueue, activateQueue);
	      task.isActive = false;
	
	      if (task.onDeactivate) {
	        task.onDeactivate(task);
	      }
	    }
	  },
	
	  // Number background taskes
	  getNonBackgroundRunningCount: function () {
	    return nonBackgroundRunningCount;
	  },
	
	  // Increment current task ID and return
	  getTaskId: function () {
	    return currentTaskId++;
	  },
	
	  // Resolve activate/deactivate taskes and return active ids
	  getActiveIds: function () {
	    /*
	      task deactivate queue
	    */
	    var deactivateQueueLength = deactivateQueue.length;
	
	    for (var i = 0; i < deactivateQueueLength; i++) {
	      var id = deactivateQueue[i];
	      var activeIdIndex = runningIds.indexOf(id);
	      var task = activeTasks[id];
	
	      // If this is a running task, deactivate
	      if (activeIdIndex > -1) {
	        runningIds.splice(activeIdIndex, 1);
	        updateRunningCount(false, task.isLazy);
	        delete activeTasks[id];
	      }
	    }
	
	    /*
	      Empty deactivate queue. We use `Array.splice` because it doesn't
	      works on the original array so we don't have to garbage collect anything
	    */
	    deactivateQueue.splice(0, deactivateQueueLength);
	
	    /*
	      task activate queue
	    */
	    var activateQueueLength = activateQueue.length;
	
	    for (var _i = 0; _i < activateQueueLength; _i++) {
	      var _id = activateQueue[_i];
	      var _activeIdIndex = runningIds.indexOf(_id);
	      var _task = activeTasks[_id];
	
	      // If task isn't already running, activate
	      if (_activeIdIndex === -1 && _task) {
	        if (_task.isPriority) {
	          runningIds.unshift(_id);
	        } else {
	          runningIds.push(_id);
	        }
	
	        if (_task.onActivateLoop) {
	          _task.onActivateLoop();
	        }
	
	        updateRunningCount(true, _task.isLazy);
	      }
	    }
	
	    activateQueue.splice(0, activateQueueLength);
	
	    return runningIds;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQUksZ0JBQWdCLENBQWhCOzs7QUFHSixJQUFJLG9CQUFvQixDQUFwQjs7O0FBR0osSUFBSSw0QkFBNEIsQ0FBNUI7OztBQUdKLElBQU0sYUFBYSxFQUFiOzs7QUFHTixJQUFNLGNBQWMsRUFBZDs7O0FBR04sSUFBTSxnQkFBZ0IsRUFBaEI7OztBQUdOLElBQU0sa0JBQWtCLEVBQWxCOzs7Ozs7Ozs7QUFTTixJQUFNLGVBQWUsVUFBQyxFQUFELEVBQUssTUFBTCxFQUFhLE9BQWIsRUFBeUI7QUFDNUMsTUFBTSxhQUFhLE9BQU8sT0FBUCxDQUFlLEVBQWYsQ0FBYixDQURzQztBQUU1QyxNQUFNLGNBQWMsUUFBUSxPQUFSLENBQWdCLEVBQWhCLENBQWQsQ0FGc0M7O0FBSTVDLE1BQUksZUFBZSxDQUFDLENBQUQsRUFBSTtBQUNyQixXQUFPLElBQVAsQ0FBWSxFQUFaLEVBRHFCO0dBQXZCOztBQUlBLE1BQUksY0FBYyxDQUFDLENBQUQsRUFBSTtBQUNwQixZQUFRLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLENBQTVCLEVBRG9CO0dBQXRCO0NBUm1COzs7Ozs7OztBQW1CckIsSUFBTSxxQkFBcUIsVUFBQyxHQUFELEVBQU0sTUFBTixFQUFpQjtBQUMxQyxNQUFNLFNBQVMsTUFBTSxDQUFOLEdBQVUsQ0FBQyxDQUFELENBRGlCOztBQUcxQyx1QkFBcUIsTUFBckIsQ0FIMEM7O0FBSzFDLE1BQUksQ0FBQyxNQUFELEVBQVM7QUFDWCxpQ0FBNkIsTUFBN0IsQ0FEVztHQUFiO0NBTHlCOztrQkFVWjtBQUNiLDBCQURhOzs7QUFJYixZQUFVLFVBQUMsRUFBRCxFQUFLLElBQUwsRUFBYztBQUN0QixnQkFBWSxFQUFaLElBQWtCLElBQWxCLENBRHNCO0FBRXRCLFNBQUssUUFBTCxHQUFnQixJQUFoQixDQUZzQjtBQUd0QixpQkFBYSxFQUFiLEVBQWlCLGFBQWpCLEVBQWdDLGVBQWhDLEVBSHNCOztBQUt0QixRQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNuQixXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFEbUI7S0FBckI7O0FBSUEsUUFBSSxLQUFLLGNBQUwsRUFBcUI7QUFDdkIsV0FBSyxjQUFMLENBQW9CLElBQXBCLEVBRHVCO0tBQXpCO0dBVFE7OztBQWVWLGNBQVksVUFBQyxFQUFELEVBQVE7QUFDbEIsUUFBTSxPQUFPLFlBQVksRUFBWixDQUFQLENBRFk7O0FBR2xCLFFBQUksSUFBSixFQUFVO0FBQ1IsbUJBQWEsRUFBYixFQUFpQixlQUFqQixFQUFrQyxhQUFsQyxFQURRO0FBRVIsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBRlE7O0FBSVIsVUFBSSxLQUFLLFlBQUwsRUFBbUI7QUFDckIsYUFBSyxZQUFMLENBQWtCLElBQWxCLEVBRHFCO09BQXZCO0tBSkY7R0FIVTs7O0FBY1osZ0NBQThCO1dBQU07R0FBTjs7O0FBRzlCLGFBQVc7V0FBTTtHQUFOOzs7QUFHWCxnQkFBYyxZQUFNOzs7O0FBSWxCLFFBQU0sd0JBQXdCLGdCQUFnQixNQUFoQixDQUpaOztBQU1sQixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxxQkFBSixFQUEyQixHQUEzQyxFQUFnRDtBQUM5QyxVQUFNLEtBQUssZ0JBQWdCLENBQWhCLENBQUwsQ0FEd0M7QUFFOUMsVUFBTSxnQkFBZ0IsV0FBVyxPQUFYLENBQW1CLEVBQW5CLENBQWhCLENBRndDO0FBRzlDLFVBQU0sT0FBTyxZQUFZLEVBQVosQ0FBUDs7O0FBSHdDLFVBTTFDLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUN0QixtQkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRHNCO0FBRXRCLDJCQUFtQixLQUFuQixFQUEwQixLQUFLLE1BQUwsQ0FBMUIsQ0FGc0I7QUFHdEIsZUFBTyxZQUFZLEVBQVosQ0FBUCxDQUhzQjtPQUF4QjtLQU5GOzs7Ozs7QUFOa0IsbUJBdUJsQixDQUFnQixNQUFoQixDQUF1QixDQUF2QixFQUEwQixxQkFBMUI7Ozs7O0FBdkJrQixRQTRCWixzQkFBc0IsY0FBYyxNQUFkLENBNUJWOztBQThCbEIsU0FBSyxJQUFJLEtBQUksQ0FBSixFQUFPLEtBQUksbUJBQUosRUFBeUIsSUFBekMsRUFBOEM7QUFDNUMsVUFBTSxNQUFLLGNBQWMsRUFBZCxDQUFMLENBRHNDO0FBRTVDLFVBQU0saUJBQWdCLFdBQVcsT0FBWCxDQUFtQixHQUFuQixDQUFoQixDQUZzQztBQUc1QyxVQUFNLFFBQU8sWUFBWSxHQUFaLENBQVA7OztBQUhzQyxVQU14QyxtQkFBa0IsQ0FBQyxDQUFELElBQU0sS0FBeEIsRUFBOEI7QUFDaEMsWUFBSSxNQUFLLFVBQUwsRUFBaUI7QUFDbkIscUJBQVcsT0FBWCxDQUFtQixHQUFuQixFQURtQjtTQUFyQixNQUVPO0FBQ0wscUJBQVcsSUFBWCxDQUFnQixHQUFoQixFQURLO1NBRlA7O0FBTUEsWUFBSSxNQUFLLGNBQUwsRUFBcUI7QUFDdkIsZ0JBQUssY0FBTCxHQUR1QjtTQUF6Qjs7QUFJQSwyQkFBbUIsSUFBbkIsRUFBeUIsTUFBSyxNQUFMLENBQXpCLENBWGdDO09BQWxDO0tBTkY7O0FBcUJBLGtCQUFjLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsbUJBQXhCLEVBbkRrQjs7QUFxRGxCLFdBQU8sVUFBUCxDQXJEa0I7R0FBTiIsImZpbGUiOiJtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbYXJyYXldXG4gIEBwYXJhbSBbYXJyYXldXG4qL1xuY29uc3QgdXBkYXRlUXVldWVzID0gKGlkLCBpbkxpc3QsIG91dExpc3QpID0+IHtcbiAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgfVxuXG4gIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICB9XG59O1xuXG4vKlxuICBVcGRhdGUgcnVubmluZ1xuXG4gIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgaWYgKCFpc0xhenkpIHtcbiAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVUYXNrcyxcblxuICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgYWN0aXZhdGU6IChpZCwgdGFzaykgPT4ge1xuICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgIH1cblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGVPbmNlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGVPbmNlKHRhc2spO1xuICAgIH1cbiAgfSxcblxuICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICBkZWFjdGl2YXRlOiAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogKCkgPT4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCxcblxuICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgZ2V0VGFza0lkOiAoKSA9PiBjdXJyZW50VGFza0lkKyssXG5cbiAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHRhc2tlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgLypcbiAgICAgIHRhc2sgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAvKlxuICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgdGFzaykge1xuICAgICAgICBpZiAodGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sub25BY3RpdmF0ZUxvb3ApIHtcbiAgICAgICAgICB0YXNrLm9uQWN0aXZhdGVMb29wKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgdGFzay5pc0xhenkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gIH1cbn07XG4iXX0=

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(349);
	
	var ZERO_POINT = {
	  x: 0,
	  y: 0,
	  z: 0
	};
	
	var distance1D = function (a, b) {
	  return Math.abs(a - b);
	};
	
	/*
	  Angle between points
	  
	  Translates the hypothetical line so that the 'from' coordinates
	  are at 0,0
	  
	  @param [object]: X and Y coordinates of from point
	  @param [object]: X and Y cordinates of to point
	  @return [radian]: Angle between the two points in radians
	*/
	var angle = exports.angle = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	  return radiansToDegrees(Math.atan2(a.x - b.x, a.y - b.y));
	};
	
	/*
	  Convert degrees to radians
	  
	  @param [number]: Value in degrees
	  @return [number]: Value in radians
	*/
	var degreesToRadians = exports.degreesToRadians = function (degrees) {
	  return degrees * Math.PI / 180;
	};
	
	/*
	  Dilate
	  
	  Change the progression between a and b according to dilation.
	  
	  So dilation = 0.5 would change
	  
	  a --------- b
	  
	  to
	  
	  a ---- b
	  
	  @param [number]: Previous value
	  @param [number]: Current value
	  @param [number]: Dilate progress by x
	  @return [number]: Previous value plus the dilated difference
	*/
	var dilate = exports.dilate = function (a, b, dilation) {
	  return a + (b - a) * dilation;
	};
	
	/*
	  Distance
	  
	  Returns the distance between two n dimensional points.
	  
	  @param [object/number]: x and y or just x of point A
	  @param [object/number]: (optional): x and y or just x of point B
	  @return [number]: The distance between the two points
	*/
	var distance = exports.distance = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	
	  // 1D dimensions
	  if ((0, _utils.isNum)(a)) {
	    return distance1D(a, b);
	
	    // Multi-dimensional
	  } else {
	      var xDelta = distance1D(a.x, b.x);
	      var yDelta = distance1D(a.y, b.y);
	      var zDelta = (0, _utils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;
	
	      return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
	    }
	};
	
	/*
	  Ease value within ranged parameters
	  
	  @param [number]: Progress between 0 and 1
	  @param [number]: Value of 0 progress
	  @param [number]: Value of 1 progress
	  @param [string || function]: Name of preset easing
	    to use or generated easing function
	  @return [number]: Value of eased progress in range
	*/
	var ease = exports.ease = function (progress, from, to, ease) {
	  var progressLimited = restrict(progress, 0, 1);
	  var easedProgress = ease(progressLimited);
	
	  return getValueFromProgress(easedProgress, from, to);
	};
	
	/*
	  Hypotenuse
	  
	  Returns the hypotenuse, side C, given the lengths of sides A and B.
	  
	  @param [number]: Length of A
	  @param [number]: Length of B
	  @return [number]: Length of C
	*/
	var hypotenuse = exports.hypotenuse = function (a, b) {
	  return Math.sqrt(a * a + b * b);
	};
	
	/*
	  Value in range from progress
	  
	  Given a lower limit and an upper limit, we return the value within
	  that range as expressed by progress (a number from 0-1)
	  
	  @param [number]: The progress between lower and upper limits expressed 0-1
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as calculated from progress within range (not limited within range)
	*/
	var getValueFromProgress = exports.getValueFromProgress = function (progress, from, to) {
	  return -progress * from + progress * to + from;
	};
	
	/*
	  Progress within given range
	  
	  Given a lower limit and an upper limit, we return the progress
	  (expressed as a number 0-1) represented by the given value, and
	  limit that progress to within 0-1.
	  
	  @param [number]: Value to find progress within given range
	  @param [number]: Lower limit 
	  @param [number]: Upper limit
	  @return [number]: Progress of value within range as expressed 0-1
	*/
	var getProgressFromValue = exports.getProgressFromValue = function (value, from, to) {
	  return (value - from) / (to - from);
	};
	
	/*
	  Offset between two objects of numbers
	
	  If property is found in b not present in a, it will return `0` for that prop.
	  
	  @param [Point]: First object
	  @param [Point]: Second object
	  @return [Offset]: Distance metrics between two points
	*/
	var offset = exports.offset = function (a, b) {
	  var offset = {};
	
	  for (var key in b) {
	    if (b.hasOwnProperty(key)) {
	      offset[key] = (0, _utils.hasProperty)(a, key) ? b[key] - a[key] : 0;
	    }
	  }
	
	  return offset;
	};
	
	/*
	  Point from angle and distance
	  
	  @param [object]: 2D point of origin
	  @param [number]: Angle from origin
	  @param [number]: Distance from origin
	  @return [object]: Calculated 2D point
	*/
	var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function (origin, angle, distance) {
	  angle = degreesToRadians(angle);
	
	  return {
	    x: distance * Math.cos(angle) + origin.x,
	    y: distance * Math.sin(angle) + origin.y
	  };
	};
	
	/*
	  Convert radians to degrees
	  
	  @param [number]: Value in radians
	  @return [number]: Value in degrees
	*/
	var radiansToDegrees = exports.radiansToDegrees = function (radians) {
	  return radians * 180 / Math.PI;
	};
	
	/*
	  Return random number between range
	  
	  @param [number] (optional): Output minimum
	  @param [number] (optional): Output maximum
	  @return [number]: Random number within range, or 0 and 1 if none provided
	*/
	var random = exports.random = function () {
	  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	  return Math.random() * (max - min) + min;
	};
	
	/*
	  Calculate relative value
	  
	  Takes the operator and value from a string, ie "+=5", and applies
	  to the current value to resolve a new target.
	  
	  @param [number]: Current value
	  @param [string]: Relative value
	  @return [number]: New value
	*/
	var relativeValue = exports.relativeValue = function (current, relative) {
	  var newValue = current;
	  var equation = relative.split('=');
	  var operator = equation[0];
	
	  var _findValueAndUnit = (0, _utils.findValueAndUnit)(equation[1]);
	
	  var unit = _findValueAndUnit.unit;
	  var value = _findValueAndUnit.value;
	
	
	  value = parseFloat(value);
	
	  switch (operator) {
	    case '+':
	      newValue += value;
	      break;
	    case '-':
	      newValue -= value;
	      break;
	    case '*':
	      newValue *= value;
	      break;
	    case '/':
	      newValue /= value;
	      break;
	  }
	
	  if (unit) {
	    newValue += unit;
	  }
	
	  return newValue;
	};
	
	/*
	  Restrict value to range
	  
	  Return value within the range of lowerLimit and upperLimit
	  
	  @param [number]: Value to keep within range
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as limited within given range
	*/
	var restrict = exports.restrict = function (value, min, max) {
	  return Math.max(Math.min(value, max), min);
	};
	
	/*
	  Framerate-independent smoothing
	
	  @param [number]: New value
	  @param [number]: Old value
	  @param [number]: Frame duration
	  @param [number] (optional): Smoothing (0 is none)
	*/
	var smooth = exports.smooth = function (newValue, oldValue, duration) {
	  var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  return (0, _utils.toDecimal)(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
	};
	
	/*
	  Convert x per second to per frame velocity based on fps
	  
	  @param [number]: Unit per second
	  @param [number]: Frame duration in ms
	*/
	var speedPerFrame = exports.speedPerFrame = function (xps, frameDuration) {
	  return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
	};
	
	/*
	  Convert velocity into velicity per second
	  
	  @param [number]: Unit per frame
	  @param [number]: Frame duration in ms
	*/
	var speedPerSecond = exports.speedPerSecond = function (velocity, frameDuration) {
	  return velocity * (1000 / frameDuration);
	};
	
	/*
	  Create stepped version of 0-1 progress
	  
	  @param [number]: Current value
	  @param [int]: Number of steps
	  @return [number]: Stepped value
	*/
	var stepProgress = exports.stepProgress = function (progress, steps) {
	  var segment = 1 / (steps - 1);
	  var target = 1 - 1 / steps;
	  var progressOfTarget = Math.min(progress / target, 1);
	
	  return Math.floor(progressOfTarget / segment) * segment;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU9BLElBQU0sYUFBYTtBQUNqQixLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7Q0FISTs7QUFNTixJQUFNLGFBQWEsVUFBQyxDQUFELEVBQUksQ0FBSjtTQUFVLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBSjtDQUFuQjs7Ozs7Ozs7Ozs7O0FBWVosSUFBTSx3QkFBUSxVQUFDLENBQUQ7TUFBSSwwREFBSTtTQUFlLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsQ0FBN0M7Q0FBdkI7Ozs7Ozs7O0FBUWQsSUFBTSw4Q0FBbUIsVUFBQyxPQUFEO1NBQWEsVUFBVSxLQUFLLEVBQUwsR0FBVSxHQUFwQjtDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CekIsSUFBTSwwQkFBUyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUDtTQUFvQixJQUFLLENBQUMsSUFBSSxDQUFKLENBQUQsR0FBVSxRQUFWO0NBQXpCOzs7Ozs7Ozs7OztBQVdmLElBQU0sOEJBQVcsVUFBQyxDQUFELEVBQXVCO01BQW5CLDBEQUFJLDBCQUFlOzs7QUFFN0MsTUFBSSxrQkFBTSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU8sV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQOzs7QUFEWSxHQUFkLE1BSU87QUFDTCxVQUFNLFNBQVMsV0FBVyxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsQ0FBekIsQ0FERDtBQUVMLFVBQU0sU0FBUyxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUF6QixDQUZEO0FBR0wsVUFBTSxTQUFTLGlCQUFDLENBQU0sRUFBRSxDQUFGLENBQVAsR0FBZSxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUEvQixHQUFzQyxDQUF0QyxDQUhWOztBQUtMLGFBQU8sS0FBSyxJQUFMLENBQVUsU0FBQyxRQUFVLEVBQVgsWUFBaUIsUUFBVSxFQUEzQixZQUFpQyxRQUFVLEVBQTNDLENBQWpCLENBTEs7S0FKUDtDQUZzQjs7Ozs7Ozs7Ozs7O0FBeUJqQixJQUFNLHNCQUFPLFVBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFBOEI7QUFDaEQsTUFBTSxrQkFBa0IsU0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCLENBRDBDO0FBRWhELE1BQU0sZ0JBQWdCLEtBQUssZUFBTCxDQUFoQixDQUYwQzs7QUFJaEQsU0FBTyxxQkFBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUpnRDtDQUE5Qjs7Ozs7Ozs7Ozs7QUFnQmIsSUFBTSxrQ0FBYSxVQUFDLENBQUQsRUFBSSxDQUFKO1NBQVUsS0FBSyxJQUFMLENBQVUsQ0FBQyxHQUFJLENBQUosR0FBVSxJQUFJLENBQUo7Q0FBL0I7Ozs7Ozs7Ozs7Ozs7QUFhbkIsSUFBTSxzREFBdUIsVUFBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixFQUFqQjtTQUF3QixDQUFHLFFBQUYsR0FBYSxJQUFiLEdBQXNCLFdBQVcsRUFBWCxHQUFpQixJQUF4QztDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7QUFjN0IsSUFBTSxzREFBdUIsVUFBQyxLQUFELEVBQVEsSUFBUixFQUFjLEVBQWQ7U0FBcUIsQ0FBQyxRQUFRLElBQVIsQ0FBRCxJQUFrQixLQUFLLElBQUwsQ0FBbEI7Q0FBckI7Ozs7Ozs7Ozs7O0FBVzdCLElBQU0sMEJBQVMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQzlCLE1BQU0sU0FBUyxFQUFULENBRHdCOztBQUc5QixPQUFLLElBQUksR0FBSixJQUFXLENBQWhCLEVBQW1CO0FBQ2pCLFFBQUksRUFBRSxjQUFGLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDekIsYUFBTyxHQUFQLElBQWMsd0JBQVksQ0FBWixFQUFlLEdBQWYsSUFBc0IsRUFBRSxHQUFGLElBQVMsRUFBRSxHQUFGLENBQVQsR0FBa0IsQ0FBeEMsQ0FEVztLQUEzQjtHQURGOztBQU1BLFNBQU8sTUFBUCxDQVQ4QjtDQUFWOzs7Ozs7Ozs7O0FBb0JmLElBQU0sZ0VBQTRCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBNkI7QUFDcEUsVUFBUSxpQkFBaUIsS0FBakIsQ0FBUixDQURvRTs7QUFHcEUsU0FBTztBQUNMLE9BQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0FBQ2hDLE9BQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0dBRmxDLENBSG9FO0NBQTdCOzs7Ozs7OztBQWVsQyxJQUFNLDhDQUFtQixVQUFDLE9BQUQ7U0FBYSxVQUFVLEdBQVYsR0FBZ0IsS0FBSyxFQUFMO0NBQTdCOzs7Ozs7Ozs7QUFTekIsSUFBTSwwQkFBUztNQUFDLDREQUFNO01BQUcsNERBQU07U0FBTSxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLENBQWpCLEdBQThCLEdBQTlCO0NBQXRCOzs7Ozs7Ozs7Ozs7QUFZZixJQUFNLHdDQUFnQixVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQXVCO0FBQ2xELE1BQUksV0FBVyxPQUFYLENBRDhDO0FBRWxELE1BQU0sV0FBVyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQVgsQ0FGNEM7QUFHbEQsTUFBTSxXQUFXLFNBQVMsQ0FBVCxDQUFYLENBSDRDOzswQkFJNUIsNkJBQWlCLFNBQVMsQ0FBVCxDQUFqQixFQUo0Qjs7TUFJNUMsOEJBSjRDO01BSXRDLGdDQUpzQzs7O0FBTWxELFVBQVEsV0FBVyxLQUFYLENBQVIsQ0FOa0Q7O0FBUWxELFVBQVEsUUFBUjtBQUNBLFNBQUssR0FBTDtBQUNFLGtCQUFZLEtBQVosQ0FERjtBQUVFLFlBRkY7QUFEQSxTQUlLLEdBQUw7QUFDRSxrQkFBWSxLQUFaLENBREY7QUFFRSxZQUZGO0FBSkEsU0FPSyxHQUFMO0FBQ0Usa0JBQVksS0FBWixDQURGO0FBRUUsWUFGRjtBQVBBLFNBVUssR0FBTDtBQUNFLGtCQUFZLEtBQVosQ0FERjtBQUVFLFlBRkY7QUFWQSxHQVJrRDs7QUF1QmxELE1BQUksSUFBSixFQUFVO0FBQ1IsZ0JBQVksSUFBWixDQURRO0dBQVY7O0FBSUEsU0FBTyxRQUFQLENBM0JrRDtDQUF2Qjs7Ozs7Ozs7Ozs7O0FBd0N0QixJQUFNLDhCQUFXLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBYSxHQUFiO1NBQXFCLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBVCxFQUErQixHQUEvQjtDQUFyQjs7Ozs7Ozs7OztBQVVqQixJQUFNLDBCQUFTLFVBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckI7TUFBK0Isa0VBQVk7U0FBTSxzQkFBVSxXQUFZLFlBQVksV0FBVyxRQUFYLENBQVosR0FBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUFuQztDQUF2RTs7Ozs7Ozs7QUFRZixJQUFNLHdDQUFnQixVQUFDLEdBQUQsRUFBTSxhQUFOO1NBQXdCLGlCQUFDLENBQU0sR0FBTixDQUFELEdBQWUsT0FBTyxPQUFPLGFBQVAsQ0FBUCxHQUErQixDQUE5QztDQUF4Qjs7Ozs7Ozs7QUFRdEIsSUFBTSwwQ0FBaUIsVUFBQyxRQUFELEVBQVcsYUFBWDtTQUE2QixZQUFZLE9BQU8sYUFBUCxDQUFaO0NBQTdCOzs7Ozs7Ozs7QUFTdkIsSUFBTSxzQ0FBZSxVQUFDLFFBQUQsRUFBVyxLQUFYLEVBQXFCO0FBQy9DLE1BQU0sVUFBVSxLQUFLLFFBQVEsQ0FBUixDQUFMLENBRCtCO0FBRS9DLE1BQU0sU0FBUyxJQUFLLElBQUksS0FBSixDQUYyQjtBQUcvQyxNQUFNLG1CQUFtQixLQUFLLEdBQUwsQ0FBUyxXQUFXLE1BQVgsRUFBbUIsQ0FBNUIsQ0FBbkIsQ0FIeUM7O0FBSy9DLFNBQU8sS0FBSyxLQUFMLENBQVcsbUJBQW1CLE9BQW5CLENBQVgsR0FBeUMsT0FBekMsQ0FMd0M7Q0FBckIiLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhhc1Byb3BlcnR5LFxuICBpc051bSxcbiAgZmluZFZhbHVlQW5kVW5pdCxcbiAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmIChpc051bShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICB9XG59O1xuXG4vKlxuICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmV4cG9ydCBjb25zdCBlYXNlID0gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkgPT4ge1xuICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG4gXG4vKlxuICBIeXBvdGVudXNlXG4gIFxuICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gIFxuICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9IHt9O1xuXG4gIGZvciAobGV0IGtleSBpbiBiKSB7XG4gICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgb2Zmc2V0W2tleV0gPSBoYXNQcm9wZXJ0eShhLCBrZXkpID8gYltrZXldIC0gYVtrZXldIDogMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICBsZXQgbmV3VmFsdWUgPSBjdXJyZW50O1xuICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gIGxldCB7IHVuaXQsIHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KGVxdWF0aW9uWzFdKTtcblxuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgY2FzZSAnKyc6XG4gICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJy0nOlxuICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcqJzpcbiAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLyc6XG4gICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIH1cbiAgXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gIFxuICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbmV4cG9ydCBjb25zdCByZXN0cmljdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG5leHBvcnQgY29uc3Qgc3RlcFByb2dyZXNzID0gKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gIGNvbnN0IHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(357);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(363);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(364);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _utils = __webpack_require__(349);
	
	var _numericalValues = __webpack_require__(365);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	exports.default = function (value) {
	  for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	    var valueProp = value[_numericalValues2.default[i]];
	    if ((0, _utils.isString)(valueProp)) {
	      if (_color2.default.test(valueProp)) {
	        return _color2.default;
	      } else if (_complex2.default.test(valueProp)) {
	        return _complex2.default;
	      } else if (_unit2.default.test(valueProp)) {
	        return _unit2.default;
	      }
	    }
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBakI7O2tCQUVkLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLG9CQUFKLEVBQTBCLEdBQTFDLEVBQStDO0FBQzdDLFFBQU0sWUFBWSxNQUFNLDBCQUFpQixDQUFqQixDQUFOLENBQVosQ0FEdUM7QUFFN0MsUUFBSSxxQkFBUyxTQUFULENBQUosRUFBeUI7QUFDdkIsVUFBSSxnQkFBVSxJQUFWLENBQWUsU0FBZixDQUFKLEVBQStCO0FBQzdCLCtCQUQ2QjtPQUEvQixNQUVPLElBQUksa0JBQVksSUFBWixDQUFpQixTQUFqQixDQUFKLEVBQWlDO0FBQ3RDLGlDQURzQztPQUFqQyxNQUVBLElBQUksZUFBUyxJQUFULENBQWMsU0FBZCxDQUFKLEVBQThCO0FBQ25DLDhCQURtQztPQUE5QjtLQUxUO0dBRkY7Q0FEYSIsImZpbGUiOiJkZXRlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlUHJvcCA9IHZhbHVlW05VTUVSSUNBTF9WQUxVRVNbaV1dO1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICBpZiAoY29sb3JUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlO1xuICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXhUeXBlO1xuICAgICAgfSBlbHNlIGlmICh1bml0VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIHVuaXRUeXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsiXX0=

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _rgb = __webpack_require__(358);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(361);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(362);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var colorTypes = [_rgb2.default, _hsl2.default, _hex2.default];
	var numColorTypes = colorTypes.length;
	
	exports.default = {
	  defaultProps: _extends({}, _rgb2.default.defaultProps, _hsl2.default.defaultProps),
	
	  test: function (value) {
	    return _rgb2.default.test(value) || _hex2.default.test(value) || _hsl2.default.test(value);
	  },
	
	  split: function (value) {
	    for (var i = 0; i < numColorTypes; i++) {
	      if (colorTypes[i].test(value)) {
	        return colorTypes[i].split(value);
	      }
	    }
	  },
	
	  combine: function (values) {
	    return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDYiw2QkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxRQUFNLFVBQUMsS0FBRDtXQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0dBQVg7O0FBRU4sU0FBTyxVQUFDLEtBQUQsRUFBVztBQUNoQixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxhQUFKLEVBQW1CLEdBQW5DLEVBQXdDO0FBQ3RDLFVBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixLQUFwQixDQUFQLENBRDZCO09BQS9CO0tBREY7R0FESzs7QUFRUCxXQUFTLFVBQUMsTUFBRDtXQUFZLE1BQUMsQ0FBTyxHQUFQLEtBQWUsU0FBZixHQUE0QixjQUFJLE9BQUosQ0FBWSxNQUFaLENBQTdCLEdBQW1ELGNBQUksT0FBSixDQUFZLE1BQVosQ0FBbkQ7R0FBWiIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZ2IgZnJvbSAnLi9yZ2InO1xuaW1wb3J0IGhzbCBmcm9tICcuL2hzbCc7XG5pbXBvcnQgaGV4IGZyb20gJy4vaGV4JztcblxuY29uc3QgY29sb3JUeXBlcyA9IFtyZ2IsIGhzbCwgaGV4XTtcbmNvbnN0IG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHsgLi4ucmdiLmRlZmF1bHRQcm9wcywgLi4uaHNsLmRlZmF1bHRQcm9wcyB9LFxuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(349);
	
	var _dictionary = __webpack_require__(359);
	
	var _defaultProps = __webpack_require__(360);
	
	exports.default = {
	  defaultProps: {
	    Red: _defaultProps.rgb,
	    Green: _defaultProps.rgb,
	    Blue: _defaultProps.rgb,
	    Alpha: _defaultProps.opacity
	  },
	
	  test: function (value) {
	    return value && value.indexOf('rgb') > -1;
	  },
	
	  split: function (value) {
	    return (0, _utils.getColorValues)(value, _dictionary.rgb);
	  },
	
	  combine: function (values) {
	    return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osMEJBRFk7QUFFWiw0QkFGWTtBQUdaLDJCQUhZO0FBSVosZ0NBSlk7R0FBZDs7QUFPQSxRQUFNLFVBQUMsS0FBRDtXQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7R0FBNUM7O0FBRU4sU0FBTyxVQUFDLEtBQUQ7V0FBVywyQkFBZSxLQUFmO0dBQVg7O0FBRVAsV0FBUyxVQUFDLE1BQUQ7V0FBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtHQUFaIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgY3JlYXRlRnVuY3Rpb25TdHJpbmcsIGdldENvbG9yVmFsdWVzIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IHJnYiBhcyByZ2JUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyByZ2IgYXMgZGVmYXVsdFJHQiwgb3BhY2l0eSBhcyBkZWZhdWx0T3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgUmVkOiBkZWZhdWx0UkdCLFxuICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgQWxwaGE6IGRlZmF1bHRPcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHJnYlRlcm1zKSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var X = 'X';
	var Y = 'Y';
	var ALPHA = 'Alpha';
	
	var axes = exports.axes = [X, Y, 'Z'];
	var rgb = exports.rgb = ['Red', 'Green', 'Blue', ALPHA];
	var hsl = exports.hsl = ['Hue', 'Saturation', 'Lightness', ALPHA];
	var positions = exports.positions = ['Top', 'Right', 'Bottom', 'Left'];
	var shadow = exports.shadow = [X, Y, 'Radius', 'Spread', 'Color'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFggPSAnWCc7XG5jb25zdCBZID0gJ1knO1xuY29uc3QgQUxQSEEgPSAnQWxwaGEnO1xuXG5leHBvcnQgY29uc3QgYXhlcyA9IFtYLCBZLCAnWiddO1xuZXhwb3J0IGNvbnN0IHJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG5leHBvcnQgY29uc3QgaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG5leHBvcnQgY29uc3QgcG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbmV4cG9ydCBjb25zdCBzaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTsiXX0=

/***/ },
/* 360 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var rgb = exports.rgb = {
	  min: 0,
	  max: 255,
	  round: true
	};
	
	var opacity = exports.opacity = {
	  min: 0,
	  max: 1
	};
	
	var percent = exports.percent = {
	  min: 0,
	  max: 100,
	  unit: '%'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDakIsT0FBSyxDQUFMO0FBQ0EsT0FBSyxHQUFMO0FBQ0EsU0FBTyxJQUFQO0NBSFc7O0FBTU4sSUFBTSw0QkFBVTtBQUNyQixPQUFLLENBQUw7QUFDQSxPQUFLLENBQUw7Q0FGVzs7QUFLTixJQUFNLDRCQUFVO0FBQ3JCLE9BQUssQ0FBTDtBQUNBLE9BQUssR0FBTDtBQUNBLFFBQU0sR0FBTjtDQUhXIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICBtaW46IDAsXG4gIG1heDogMjU1LFxuICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDEwMCxcbiAgdW5pdDogJyUnXG59OyJdfQ==

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(360);
	
	var _dictionary = __webpack_require__(359);
	
	var _utils = __webpack_require__(349);
	
	exports.default = {
	  defaultProps: {
	    Hue: {
	      min: 0,
	      max: 360
	    },
	    Saturation: _defaultProps.percent,
	    Lightness: _defaultProps.percent,
	    Alpha: _defaultProps.opacity
	  },
	
	  test: function (value) {
	    return value && value.indexOf('hsl') > -1;
	  },
	
	  split: function (value) {
	    return (0, _utils.getColorValues)(value, _dictionary.hsl);
	  },
	
	  combine: function (values) {
	    return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.hsl, ', ', 2), 'hsla');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osU0FBSztBQUNILFdBQUssQ0FBTDtBQUNBLFdBQUssR0FBTDtLQUZGO0FBSUEscUNBTFk7QUFNWixvQ0FOWTtBQU9aLGdDQVBZO0dBQWQ7O0FBVUEsUUFBTSxVQUFDLEtBQUQ7V0FBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUFEO0dBQTVDOztBQUVOLFNBQU8sVUFBQyxLQUFEO1dBQVcsMkJBQWUsS0FBZjtHQUFYOztBQUVQLFdBQVMsVUFBQyxNQUFEO1dBQVksaUNBQXFCLDRCQUFnQixNQUFoQixtQkFBa0MsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBckIsRUFBaUUsTUFBakU7R0FBWiIsImZpbGUiOiJoc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgSHVlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDM2MFxuICAgIH0sXG4gICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgQWxwaGE6IG9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgaHNsVGVybXMpLFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(358);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: _rgb2.default.defaultProps,
	
	  test: function (value) {
	    return value && value.indexOf('#') > -1;
	  },
	
	  split: function (value) {
	    var r = void 0,
	        g = void 0,
	        b = void 0;
	
	    // If we have 6 characters, ie #FF0000
	    if (value.length > 4) {
	      r = value.substr(1, 2);
	      g = value.substr(3, 2);
	      b = value.substr(5, 2);
	
	      // Or we have 3 characters, ie #F00
	    } else {
	        r = value.substr(1, 1);
	        g = value.substr(2, 1);
	        b = value.substr(3, 1);
	        r += r;
	        g += g;
	        b += b;
	      }
	
	    return {
	      Red: parseInt(r, 16),
	      Green: parseInt(g, 16),
	      Blue: parseInt(b, 16),
	      Alpha: 1
	    };
	  },
	
	  combine: function (values) {
	    return _rgb2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYixnQkFBYyxjQUFJLFlBQUo7O0FBRWQsUUFBTSxVQUFDLEtBQUQ7V0FBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBQyxDQUFEO0dBQTFDOztBQUVOLFNBQU8sVUFBQyxLQUFELEVBQVc7QUFDaEIsUUFBSSxVQUFKO1FBQU8sVUFBUDtRQUFVLFVBQVY7OztBQURnQixRQUlaLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FEb0I7QUFFcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGb0I7QUFHcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhvQixLQUF0QixNQU1PO0FBQ0wsWUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FESztBQUVMLFlBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRks7QUFHTCxZQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhLO0FBSUwsYUFBSyxDQUFMLENBSks7QUFLTCxhQUFLLENBQUwsQ0FMSztBQU1MLGFBQUssQ0FBTCxDQU5LO09BTlA7O0FBZUEsV0FBTztBQUNMLFdBQUssU0FBUyxDQUFULEVBQVksRUFBWixDQUFMO0FBQ0EsYUFBTyxTQUFTLENBQVQsRUFBWSxFQUFaLENBQVA7QUFDQSxZQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLGFBQU8sQ0FBUDtLQUpGLENBbkJnQjtHQUFYOztBQTJCUCxXQUFTLFVBQUMsTUFBRDtXQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7R0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpLFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBsZXQgciwgZywgYjtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(349);
	
	var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
	var generateToken = function (token) {
	  return '${' + token + '}';
	};
	
	exports.default = {
	
	  test: function (value) {
	    var matches = value.match(FLOAT_REGEX);
	    return (0, _utils.isArray)(matches) && matches.length > 1;
	  },
	
	  template: function (value) {
	    var counter = 0;
	    return value.replace(FLOAT_REGEX, function () {
	      return generateToken(counter++);
	    });
	  },
	
	  split: function (value) {
	    var splitValue = {};
	
	    value.match(FLOAT_REGEX).forEach(function (value, i) {
	      return splitValue[i] = value;
	    });
	
	    return splitValue;
	  },
	
	  combine: function (values, template) {
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        template = template.replace(generateToken(key), values[key]);
	      }
	    }
	
	    return template;
	  }
	
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGNBQWMsa0JBQWQ7QUFDTixJQUFNLGdCQUFnQixVQUFDLEtBQUQ7U0FBVyxPQUFPLEtBQVAsR0FBZSxHQUFmO0NBQVg7O2tCQUVQOztBQUViLFFBQU0sVUFBQyxLQUFELEVBQVc7QUFDZixRQUFNLFVBQVUsTUFBTSxLQUFOLENBQVksV0FBWixDQUFWLENBRFM7QUFFZixXQUFRLG9CQUFRLE9BQVIsS0FBb0IsUUFBUSxNQUFSLEdBQWlCLENBQWpCLENBRmI7R0FBWDs7QUFLTixZQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ25CLFFBQUksVUFBVSxDQUFWLENBRGU7QUFFbkIsV0FBTyxNQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCO2FBQU0sY0FBYyxTQUFkO0tBQU4sQ0FBbEMsQ0FGbUI7R0FBWDs7QUFLVixTQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLFFBQU0sYUFBYSxFQUFiLENBRFU7O0FBR2hCLFVBQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsVUFBQyxLQUFELEVBQVEsQ0FBUjthQUFjLFdBQVcsQ0FBWCxJQUFnQixLQUFoQjtLQUFkLENBQWpDLENBSGdCOztBQUtoQixXQUFPLFVBQVAsQ0FMZ0I7R0FBWDs7QUFRUCxXQUFTLFVBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDN0IsU0FBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLG1CQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVgsQ0FEOEI7T0FBaEM7S0FERjs7QUFNQSxXQUFPLFFBQVAsQ0FQNkI7R0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgcmV0dXJuIChpc0FycmF5KG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XG4gIH0sXG5cbiAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgfSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gIH0sXG5cbiAgY29tYmluZTogKHZhbHVlcywgdGVtcGxhdGUpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG59OyJdfQ==

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(349);
	
	exports.default = {
	  test: function (unparsed) {
	    var _findValueAndUnit = (0, _utils.findValueAndUnit)(unparsed);
	
	    var value = _findValueAndUnit.value;
	
	    return (0, _utils.isNum)(value) && !isNaN(value) ? true : false;
	  },
	
	  parse: function (unparsed, parent) {
	    var _findValueAndUnit2 = (0, _utils.findValueAndUnit)(unparsed);
	
	    var value = _findValueAndUnit2.value;
	    var unit = _findValueAndUnit2.unit;
	
	
	    if (unit && unit !== unit) {
	      parent.unit = unit;
	    }
	
	    return value;
	  },
	
	  serialize: function (parsed, parent) {
	    return parsed + (parent.unit || '');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYixRQUFNLFVBQVUsUUFBVixFQUFvQjs0QkFDTiw2QkFBaUIsUUFBakIsRUFETTs7UUFDaEIsZ0NBRGdCOztBQUV4QixXQUFPLGlCQUFDLENBQU0sS0FBTixLQUFnQixDQUFDLE1BQU0sS0FBTixDQUFELEdBQWlCLElBQWxDLEdBQXlDLEtBQXpDLENBRmlCO0dBQXBCOztBQUtOLFNBQU8sVUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCOzZCQUNULDZCQUFpQixRQUFqQixFQURTOztRQUN6QixpQ0FEeUI7UUFDbEIsK0JBRGtCOzs7QUFHakMsUUFBSSxRQUFRLFNBQVMsSUFBVCxFQUFlO0FBQ3pCLGFBQU8sSUFBUCxHQUFjLElBQWQsQ0FEeUI7S0FBM0I7O0FBSUEsV0FBTyxLQUFQLENBUGlDO0dBQTVCOztBQVVQLGFBQVcsVUFBQyxNQUFELEVBQVMsTUFBVDtXQUFvQixVQUFVLE9BQU8sSUFBUCxJQUFlLEVBQWYsQ0FBVjtHQUFwQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW0sIGZpbmRWYWx1ZUFuZFVuaXQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuICAgIHJldHVybiAoaXNOdW0odmFsdWUpICYmICFpc05hTih2YWx1ZSkpID8gdHJ1ZSA6IGZhbHNlO1xuICB9LFxuXG4gIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXJpYWxpemU6IChwYXJzZWQsIHBhcmVudCkgPT4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKVxufTtcbiJdfQ==

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQiIsImZpbGUiOiJudW1lcmljYWwtdmFsdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgWydjdXJyZW50JywgJ2Zyb20nLCAndG8nLCAndmVsb2NpdHknXTsiXX0=

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectAdapter = __webpack_require__(367);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _cssAdapter = __webpack_require__(369);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(380);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(384);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (element) {
	  var detectedAdapter = _objectAdapter2.default;
	
	  // If HTMLElement load CSS
	  if (element instanceof HTMLElement || element.tagName === 'svg') {
	    detectedAdapter = _cssAdapter2.default;
	
	    // Or SVG
	  } else if (element instanceof SVGElement) {
	      if (element.tagName === 'path') {
	        detectedAdapter = _svgPathAdapter2.default;
	      } else {
	        detectedAdapter = _svgAdapter2.default;
	      }
	    }
	
	  return detectedAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIsTUFBSSx5Q0FBSjs7O0FBRDBCLE1BSXRCLG1CQUFtQixXQUFuQixJQUFrQyxRQUFRLE9BQVIsS0FBb0IsS0FBcEIsRUFBMkI7QUFDL0Q7OztBQUQrRCxHQUFqRSxNQUlPLElBQUksbUJBQW1CLFVBQW5CLEVBQStCO0FBQ3hDLFVBQUksUUFBUSxPQUFSLEtBQW9CLE1BQXBCLEVBQTRCO0FBQzlCLG1EQUQ4QjtPQUFoQyxNQUVPO0FBQ0wsK0NBREs7T0FGUDtLQURLOztBQVFQLFNBQU8sZUFBUCxDQWhCMEI7Q0FBYiIsImZpbGUiOiJkZXRlY3QtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYmplY3RBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuaW1wb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5pbXBvcnQgc3ZnQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBzdmdQYXRoQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICBsZXQgZGV0ZWN0ZWRBZGFwdGVyID0gb2JqZWN0QWRhcHRlcjtcblxuICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICBkZXRlY3RlZEFkYXB0ZXIgPSBjc3NBZGFwdGVyO1xuXG4gIC8vIE9yIFNWR1xuICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbiJdfQ==

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (object, key) {
	    return object[key];
	  },
	  setter: function (object, props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        object[key] = props[key];
	      }
	    }
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQzNCLFVBQVEsVUFBQyxNQUFELEVBQVMsR0FBVDtXQUFpQixPQUFPLEdBQVA7R0FBakI7QUFDUixVQUFRLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7QUFDekIsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNyQixVQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sR0FBUCxJQUFjLE1BQU0sR0FBTixDQUFkLENBRDZCO09BQS9CO0tBREY7R0FETTtDQUZLIiwiZmlsZSI6Im9iamVjdC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gIGdldHRlcjogKG9iamVjdCwga2V5KSA9PiBvYmplY3Rba2V5XSxcbiAgc2V0dGVyOiAob2JqZWN0LCBwcm9wcykgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19

/***/ },
/* 368 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	/*
	  Override `getter` and `setter` to reimplement the interface for new element types.
	
	  Set `.stateMap` as an object key/value map to translate incoming keys to
	  API-specific keys. For instance, { x: 'translateX' }. 
	
	  Set `.valueTypeMap` as an object key/value map to return a value type with
	  `getValueType(key)` (key will be mapped according to `stateMap`)
	*/
	
	var mapKey = function (key, map) {
	  return map ? map[key] || key : key;
	};
	
	exports.default = function (options) {
	  /*
	    Adapter is setter function
	     @param [object]: Object to set properties on
	    @param [object]: Key/value properties to set
	  */
	  var adapter = function (element, props, data) {
	    if (options.stateMap) {
	      // Translate props
	      for (var key in props) {
	        if (props.hasOwnProperty(key)) {
	          var mappedKey = mapKey(key, options.stateMap);
	
	          if (mappedKey !== key) {
	            props[mappedKey] = props[key];
	            delete props[key];
	          }
	        }
	      }
	    }
	
	    return options.setter(element, props, data);
	  };
	
	  adapter.get = function (element, key) {
	    return options.getter(element, mapKey(key, options.stateMap));
	  };
	  adapter.checkValueType = function (key) {
	    return options.valueTypeMap ? options.valueTypeMap[mapKey(key, options.stateMap)] : false;
	  };
	  adapter.getElementData = options.getElementData;
	
	  return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxHQUFOO1NBQWMsTUFBTSxJQUFJLEdBQUosS0FBWSxHQUFaLEdBQWtCLEdBQXhCO0NBQWQ7O2tCQUVBLFVBQUMsT0FBRCxFQUFhOzs7Ozs7QUFPMUIsTUFBTSxVQUFVLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakIsRUFBMEI7QUFDeEMsUUFBSSxRQUFRLFFBQVIsRUFBa0I7O0FBRXBCLFdBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFNLFlBQVksT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQXhCLENBRHVCOztBQUc3QixjQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUNyQixrQkFBTSxTQUFOLElBQW1CLE1BQU0sR0FBTixDQUFuQixDQURxQjtBQUVyQixtQkFBTyxNQUFNLEdBQU4sQ0FBUCxDQUZxQjtXQUF2QjtTQUhGO09BREY7S0FGRjs7QUFjQSxXQUFPLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsQ0FBUCxDQWZ3QztHQUExQixDQVBVOztBQXlCMUIsVUFBUSxHQUFSLEdBQWMsVUFBQyxPQUFELEVBQVUsR0FBVjtXQUFrQixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLE9BQU8sR0FBUCxFQUFZLFFBQVEsUUFBUixDQUFwQztHQUFsQixDQXpCWTtBQTBCMUIsVUFBUSxjQUFSLEdBQXlCLFVBQUMsR0FBRDtXQUFTLFFBQVEsWUFBUixHQUF1QixRQUFRLFlBQVIsQ0FBcUIsT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQWpDLENBQXZCLEdBQTZFLEtBQTdFO0dBQVQsQ0ExQkM7QUEyQjFCLFVBQVEsY0FBUixHQUF5QixRQUFRLGNBQVIsQ0EzQkM7O0FBNkIxQixTQUFPLE9BQVAsQ0E3QjBCO0NBQWIiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICBTZXQgYC5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgU2V0IGAudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxuY29uc3QgbWFwS2V5ID0gKGtleSwgbWFwKSA9PiBtYXAgPyBtYXBba2V5XSB8fCBrZXkgOiBrZXk7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zKSA9PiB7XG4gIC8qXG4gICAgQWRhcHRlciBpcyBzZXR0ZXIgZnVuY3Rpb25cblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHNldCBwcm9wZXJ0aWVzIG9uXG4gICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgKi9cbiAgY29uc3QgYWRhcHRlciA9IChlbGVtZW50LCBwcm9wcywgZGF0YSkgPT4ge1xuICAgIGlmIChvcHRpb25zLnN0YXRlTWFwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChtYXBwZWRLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgcHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zZXR0ZXIoZWxlbWVudCwgcHJvcHMsIGRhdGEpO1xuICB9O1xuXG4gIGFkYXB0ZXIuZ2V0ID0gKGVsZW1lbnQsIGtleSkgPT4gb3B0aW9ucy5nZXR0ZXIoZWxlbWVudCwgbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCkpO1xuICBhZGFwdGVyLmNoZWNrVmFsdWVUeXBlID0gKGtleSkgPT4gb3B0aW9ucy52YWx1ZVR5cGVNYXAgPyBvcHRpb25zLnZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKV0gOiBmYWxzZTtcbiAgYWRhcHRlci5nZXRFbGVtZW50RGF0YSA9IG9wdGlvbnMuZ2V0RWxlbWVudERhdGE7XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59OyJdfQ==

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(370);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(371);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(377);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(379);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(378);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (element, key) {
	    return !_transformProps2.default[key] ? window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
	  },
	  setter: function (element, props) {
	    return element.style.cssText += (0, _build2.default)(props);
	  },
	  valueTypeMap: _valueTypeMap2.default,
	  stateMap: _stateMap2.default
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUMzQixVQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDeEIsV0FBTyxDQUFFLHlCQUFlLEdBQWYsQ0FBRCxHQUNOLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURLLEdBRUwsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUExQyxDQUhzQjtHQUFsQjtBQUtSLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtXQUFvQixRQUFRLEtBQVIsQ0FBYyxPQUFkLElBQXlCLHFCQUFvQixLQUFwQixDQUF6QjtHQUFwQjtBQUNSLHNDQVAyQjtBQVEzQiw4QkFSMkI7Q0FBZCIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgcmV0dXJuICghdHJhbnNmb3JtUHJvcHNba2V5XSkgP1xuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfSxcbiAgc2V0dGVyOiAoZWxlbWVudCwgcHJvcHMpID0+IGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKSxcbiAgdmFsdWVUeXBlTWFwLFxuICBzdGF0ZU1hcFxufSk7XG5cbiJdfQ==

/***/ },
/* 370 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var TRANSLATE = 'translate';
	
	exports.default = {
	  x: TRANSLATE + 'X',
	  y: TRANSLATE + 'Y',
	  z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQVo7O2tCQUVTO0FBQ2IsS0FBRyxZQUFZLEdBQVo7QUFDSCxLQUFHLFlBQVksR0FBWjtBQUNILEtBQUcsWUFBWSxHQUFaIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(372);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(373);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(357);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(374);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(375);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _px = __webpack_require__(376);
	
	var _px2 = _interopRequireDefault(_px);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  // Color props
	  color: _color2.default,
	  backgroundColor: _color2.default,
	  outlineColor: _color2.default,
	  fill: _color2.default,
	  stroke: _color2.default,
	
	  // Border props
	  borderColor: _color2.default,
	  borderTopColor: _color2.default,
	  borderRightColor: _color2.default,
	  borderBottomColor: _color2.default,
	  borderLeftColor: _color2.default,
	  borderRadius: _px2.default,
	
	  // Positioning
	  width: _px2.default,
	  height: _px2.default,
	
	  // Shadows
	  textShadow: _shadow2.default,
	  boxShadow: _shadow2.default,
	
	  // Transform properties
	  rotate: _angle2.default,
	  rotateX: _angle2.default,
	  rotateY: _angle2.default,
	  rotateZ: _angle2.default,
	  scale: _scale2.default,
	  scaleX: _scale2.default,
	  scaleY: _scale2.default,
	  scaleZ: _scale2.default,
	  skewX: _angle2.default,
	  skewY: _angle2.default,
	  distance: _px2.default,
	  translateX: _px2.default,
	  translateY: _px2.default,
	  translateZ: _px2.default,
	  perspective: _px2.default,
	  opacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7O0FBRWIsd0JBRmE7QUFHYixrQ0FIYTtBQUliLCtCQUphO0FBS2IsdUJBTGE7QUFNYix5QkFOYTs7O0FBU2IsOEJBVGE7QUFVYixpQ0FWYTtBQVdiLG1DQVhhO0FBWWIsb0NBWmE7QUFhYixrQ0FiYTtBQWNiLDRCQWRhOzs7QUFpQmIscUJBakJhO0FBa0JiLHNCQWxCYTs7O0FBcUJiLDhCQXJCYTtBQXNCYiw2QkF0QmE7OztBQXlCYix5QkF6QmE7QUEwQmIsMEJBMUJhO0FBMkJiLDBCQTNCYTtBQTRCYiwwQkE1QmE7QUE2QmIsd0JBN0JhO0FBOEJiLHlCQTlCYTtBQStCYix5QkEvQmE7QUFnQ2IseUJBaENhO0FBaUNiLHdCQWpDYTtBQWtDYix3QkFsQ2E7QUFtQ2Isd0JBbkNhO0FBb0NiLDBCQXBDYTtBQXFDYiwwQkFyQ2E7QUFzQ2IsMEJBdENhO0FBdUNiLDJCQXZDYTtBQXdDYiwwQkF4Q2EiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5nbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsXG5cbiAgLy8gU2hhZG93c1xuICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogYW5nbGUsXG4gIHJvdGF0ZVg6IGFuZ2xlLFxuICByb3RhdGVZOiBhbmdsZSxcbiAgcm90YXRlWjogYW5nbGUsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGFuZ2xlLFxuICBza2V3WTogYW5nbGUsXG4gIGRpc3RhbmNlOiBweCxcbiAgdHJhbnNsYXRlWDogcHgsXG4gIHRyYW5zbGF0ZVk6IHB4LFxuICB0cmFuc2xhdGVaOiBweCxcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(364);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: {
	    unit: 'deg',
	    type: _unit2.default
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxLQUFOO0FBQ0Esd0JBRlk7R0FBZCIsImZpbGUiOiJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bml0VHlwZSBmcm9tICcuL3VuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHVuaXQ6ICdkZWcnLFxuICAgIHR5cGU6IHVuaXRUeXBlXG4gIH1cbn07Il19

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(360);
	
	exports.default = {
	  defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2IscUNBRGEiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IG9wYWNpdHlcbn07Il19

/***/ },
/* 374 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  defaultProps: {
	    current: 1
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDYixnQkFBYztBQUNaLGFBQVMsQ0FBVDtHQURGIiwiZmlsZSI6InNjYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBjdXJyZW50OiAxXG4gIH1cbn07Il19

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _color = __webpack_require__(357);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(376);
	
	var _dictionary = __webpack_require__(359);
	
	var _utils = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shadowWithoutColorTerms = _dictionary.shadow.slice(0, 4);
	
	exports.default = {
	  defaultProps: _extends({}, _color2.default.defaultProps, {
	    X: _px.defaultProps,
	    Y: _px.defaultProps,
	    Radius: _px.defaultProps,
	    Spread: _px.defaultProps
	  }),
	
	  split: function (value) {
	    var bits = (0, _utils.splitSpaceDelimited)(value);
	    var hasReachedColor = false;
	    var colorProp = '';
	    var splitValue = {};
	
	    bits.forEach(function (bit, i) {
	      // If we've reached the color props, append to color string
	      if (hasReachedColor || _color2.default.test(bit)) {
	        hasReachedColor = true;
	        colorProp += bit;
	
	        // Else process shadow value
	      } else {
	          splitValue[_dictionary.shadow[i]] = bit;
	        }
	    });
	
	    var splitColorProps = _color2.default.split(colorProp);
	
	    return _extends({}, splitValue, { splitColorProps: splitColorProps });
	  },
	
	  combine: function (values) {
	    return (0, _utils.createDelimited)(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU0sMEJBQTBCLG1CQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBMUI7O2tCQUVTO0FBQ2IsNkJBQ0ssZ0JBQU0sWUFBTjtBQUNIO0FBQ0E7QUFDQTtBQUNBO0lBTEY7O0FBUUEsU0FBTyxVQUFDLEtBQUQsRUFBVztBQUNoQixRQUFNLE9BQU8sZ0NBQW9CLEtBQXBCLENBQVAsQ0FEVTtBQUVoQixRQUFJLGtCQUFrQixLQUFsQixDQUZZO0FBR2hCLFFBQUksWUFBWSxFQUFaLENBSFk7QUFJaEIsUUFBSSxhQUFhLEVBQWIsQ0FKWTs7QUFNaEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUV2QixVQUFJLG1CQUFtQixnQkFBTSxJQUFOLENBQVcsR0FBWCxDQUFuQixFQUFvQztBQUN0QywwQkFBa0IsSUFBbEIsQ0FEc0M7QUFFdEMscUJBQWEsR0FBYjs7O0FBRnNDLE9BQXhDLE1BS087QUFDTCxxQkFBVyxtQkFBWSxDQUFaLENBQVgsSUFBNkIsR0FBN0IsQ0FESztTQUxQO0tBRlcsQ0FBYixDQU5nQjs7QUFrQmhCLFFBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQWxCLENBbEJVOztBQW9CaEIsd0JBQVksY0FBWSxtQ0FBeEIsQ0FwQmdCO0dBQVg7O0FBdUJQLFdBQVMsVUFBQyxNQUFEO1dBQVksNEJBQWdCLE1BQWhCLEVBQXdCLHVCQUF4QixFQUFpRCxHQUFqRCxJQUF3RCxnQkFBTSxPQUFOLENBQWMsTUFBZCxDQUF4RDtHQUFaIiwiZmlsZSI6InNoYWRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvciBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcyBhcyBweERlZmF1bHRQcm9wcyB9IGZyb20gJy4vcHgnO1xuaW1wb3J0IHsgc2hhZG93IGFzIHNoYWRvd1Rlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHNwbGl0U3BhY2VEZWxpbWl0ZWQsIGNyZWF0ZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gc2hhZG93VGVybXMuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgLi4uY29sb3IuZGVmYXVsdFByb3BzLFxuICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgIFk6IHB4RGVmYXVsdFByb3BzLFxuICAgIFJhZGl1czogcHhEZWZhdWx0UHJvcHMsXG4gICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICB9LFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBjb25zdCBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgIGxldCBjb2xvclByb3AgPSAnJztcbiAgICBsZXQgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNwbGl0Q29sb3JQcm9wcyA9IGNvbG9yLnNwbGl0KGNvbG9yUHJvcCk7XG5cbiAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKVxufTtcbiJdfQ==

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(364);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: {
	    unit: 'px',
	    type: _unit2.default
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxJQUFOO0FBQ0Esd0JBRlk7R0FBZCIsImZpbGUiOiJweC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bml0VHlwZSBmcm9tICcuL3VuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHVuaXQ6ICdweCcsXG4gICAgdHlwZTogdW5pdFR5cGVcbiAgfVxufTsiXX0=

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(378);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(379);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE_Z = 'translateZ';
	
	exports.default = function (state, disableHardwareAcceleration) {
	  var propertyString = '';
	  var transformString = '';
	  var transformHasZ = false;
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      var value = state[key];
	
	      if (_transformProps2.default[key]) {
	        transformString += key + '(' + value + ') ';
	        transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
	      } else {
	        propertyString += ';' + (0, _prefixer2.default)(key, true) + ':' + value;
	      }
	    }
	  }
	
	  if (transformString !== '') {
	    if (!transformHasZ && !disableHardwareAcceleration) {
	      transformString += TRANSLATE_Z + '(0px)';
	    }
	
	    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
	  }
	
	  return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ3JELE1BQUksaUJBQWlCLEVBQWpCLENBRGlEO0FBRXJELE1BQUksa0JBQWtCLEVBQWxCLENBRmlEO0FBR3JELE1BQUksZ0JBQWdCLEtBQWhCLENBSGlEOztBQUtyRCxPQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBTSxRQUFRLE1BQU0sR0FBTixDQUFSLENBRHVCOztBQUc3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QiwyQkFBbUIsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUFwQixDQURJO0FBRXZCLHdCQUFnQixHQUFDLEtBQVEsV0FBUixHQUF1QixJQUF4QixHQUErQixhQUEvQixDQUZPO09BQXpCLE1BSU87QUFDTCwwQkFBa0IsTUFBTSx3QkFBUyxHQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDLEtBQWxDLENBRGI7T0FKUDtLQUhGO0dBREY7O0FBY0EsTUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDMUIsUUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNsRCx5QkFBbUIsY0FBYyxPQUFkLENBRCtCO0tBQXBEOztBQUlBLHNCQUFrQixNQUFNLHdCQUFTLFdBQVQsRUFBcUIsSUFBckIsQ0FBTixHQUFtQyxHQUFuQyxHQUF5QyxlQUF6QyxDQUxRO0dBQTVCOztBQVFBLFNBQU8sY0FBUCxDQTNCcUQ7Q0FBeEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(359);
	
	var transformProps = {};
	
	var SCALE = 'scale';
	var ROTATE = 'rotate';
	var TRANSFORM_PERSPECTIVE = 'transformPerspective';
	var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];
	
	transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
	
	TERMS.forEach(function (term) {
	  return _dictionary.axes.forEach(function (axis) {
	    return transformProps[term + axis] = true;
	  });
	});
	
	exports.default = transformProps;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQUksaUJBQWlCLEVBQWpCOztBQUVKLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxTQUFTLFFBQVQ7QUFDTixJQUFNLHdCQUF3QixzQkFBeEI7QUFDTixJQUFNLFFBQVEsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxxQkFBckMsQ0FBUjs7QUFFTixlQUFlLE1BQWYsSUFBeUIsZUFBZSxLQUFmLElBQXdCLGVBQWUscUJBQWYsSUFBd0MsSUFBeEM7O0FBRWpELE1BQU0sT0FBTixDQUFjLFVBQUMsSUFBRDtTQUFVLGlCQUFLLE9BQUwsQ0FBYSxVQUFDLElBQUQ7V0FBVSxlQUFlLE9BQU8sSUFBUCxDQUFmLEdBQThCLElBQTlCO0dBQVY7Q0FBdkIsQ0FBZDs7a0JBRWUiLCJmaWxlIjoidHJhbnNmb3JtLXByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhlcyB9IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(349);
	
	var camelCache = {};
	var dashCache = {};
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var testElement = void 0;
	
	/*
	  Test style property for prefixed version
	  
	  @param [string]: Style property
	  @return [string]: Cached property name
	*/
	var testPrefix = function (key) {
	  testElement = testElement || document.createElement('div');
	
	  for (var i = 0; i < numPrefixes; i++) {
	    var prefix = prefixes[i];
	    var noPrefix = prefix === '';
	    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	    if (prefixedPropertyName in testElement.style) {
	      camelCache[key] = prefixedPropertyName;
	      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
	    }
	  }
	};
	
	exports.default = function (key, asDashCase) {
	  var cache = asDashCase ? dashCache : camelCache;
	
	  if (!cache[key]) {
	    testPrefix(key);
	  }
	
	  return cache[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTSxhQUFhLEVBQWI7QUFDTixJQUFNLFlBQVksRUFBWjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksb0JBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQzFCLGdCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEWTs7QUFHMUIsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNwQyxRQUFNLFNBQVMsU0FBUyxDQUFULENBQVQsQ0FEOEI7QUFFcEMsUUFBTSxXQUFZLFdBQVcsRUFBWCxDQUZrQjtBQUdwQyxRQUFNLHVCQUF1QixXQUFXLEdBQVgsR0FBaUIsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FIVjs7QUFLcEMsUUFBSSx3QkFBd0IsWUFBWSxLQUFaLEVBQW1CO0FBQzdDLGlCQUFXLEdBQVgsSUFBa0Isb0JBQWxCLENBRDZDO0FBRTdDLGdCQUFVLEdBQVYsVUFBcUIsV0FBVyxFQUFYLEdBQWdCLEdBQWhCLElBQXVCLHdCQUFZLG9CQUFaLENBQTVDLENBRjZDO0tBQS9DO0dBTEY7Q0FIaUI7O2tCQWVKLFVBQUMsR0FBRCxFQUFNLFVBQU4sRUFBcUI7QUFDbEMsTUFBTSxRQUFRLGFBQWEsU0FBYixHQUF5QixVQUF6QixDQURvQjs7QUFHbEMsTUFBSSxDQUFDLE1BQU0sR0FBTixDQUFELEVBQWE7QUFDZixlQUFXLEdBQVgsRUFEZTtHQUFqQjs7QUFJQSxTQUFPLE1BQU0sR0FBTixDQUFQLENBUGtDO0NBQXJCIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjYW1lbENhY2hlID0ge307XG5jb25zdCBkYXNoQ2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3Qgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XG4gICAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9IGAkeyhub1ByZWZpeCA/ICcnIDogJy0nKX0ke2NhbWVsVG9EYXNoKHByZWZpeGVkUHJvcGVydHlOYW1lKX1gO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSwgYXNEYXNoQ2FzZSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbiJdfQ==

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getElementData = exports.setter = exports.getter = undefined;
	
	var _stateMap = __webpack_require__(370);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(381);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(378);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(382);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(383);
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return !_transformProps2.default[key] ? (0, _attrAdapter.getter)(element, key) : _valueTypeMap2.default[key] && _valueTypeMap2.default[key].defaultProps ? _valueTypeMap2.default[key].defaultProps.current : 0;
	};
	var setter = exports.setter = function (element, props, data) {
	  return (0, _attrAdapter.setter)(element, (0, _build2.default)(props, data));
	};
	var getElementData = exports.getElementData = function (element) {
	  var bBox = element.getBBox();
	  return {
	    x: bBox.x,
	    y: bBox.y,
	    width: bBox.width,
	    height: bBox.height
	  };
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getElementData: getElementData });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO1NBQWtCLENBQUUseUJBQWUsR0FBZixDQUFELEdBQXdCLHlCQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBekIsR0FBb0Qsc0JBQUMsQ0FBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBbEIsR0FBa0MsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixHQUF5QyxDQUFqRztDQUF0RTtBQUNmLElBQU0sMEJBQVMsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQjtTQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCO0NBQTFCO0FBQ2YsSUFBTSwwQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDekMsTUFBTSxPQUFPLFFBQVEsT0FBUixFQUFQLENBRG1DO0FBRXpDLFNBQU87QUFDTCxPQUFHLEtBQUssQ0FBTDtBQUNILE9BQUcsS0FBSyxDQUFMO0FBQ0gsV0FBTyxLQUFLLEtBQUw7QUFDUCxZQUFRLEtBQUssTUFBTDtHQUpWLENBRnlDO0NBQWI7O2tCQVVmLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBa0IsNEJBQWxCLEVBQTRCLG9DQUE1QixFQUEwQyw4QkFBMUMsRUFBZCIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5pbXBvcnQgeyBnZXR0ZXIgYXMgYXR0ckdldHRlciwgc2V0dGVyIGFzIGF0dHJTZXR0ZXIgfSBmcm9tICcuL2F0dHItYWRhcHRlcic7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0dGVyID0gKGVsZW1lbnQsIGtleSkgPT4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/IGF0dHJHZXR0ZXIoZWxlbWVudCwga2V5KSA6ICh2YWx1ZVR5cGVNYXBba2V5XSAmJiB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgOiAwO1xuZXhwb3J0IGNvbnN0IHNldHRlciA9IChlbGVtZW50LCBwcm9wcywgZGF0YSkgPT4gYXR0clNldHRlcihlbGVtZW50LCBidWlsZChwcm9wcywgZGF0YSkpO1xuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnREYXRhID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICByZXR1cm4ge1xuICAgIHg6IGJCb3gueCxcbiAgICB5OiBiQm94LnksXG4gICAgd2lkdGg6IGJCb3gud2lkdGgsIFxuICAgIGhlaWdodDogYkJveC5oZWlnaHRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoeyBnZXR0ZXIsIHNldHRlciwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0RWxlbWVudERhdGEgfSk7XG4iXX0=

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(373);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(357);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(363);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(374);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  fill: _color2.default,
	  stroke: _color2.default,
	  scale: _scale2.default,
	  scaleX: _scale2.default,
	  scaleY: _scale2.default,
	  d: _complex2.default,
	  points: _complex2.default,
	  opacity: _alpha2.default,
	  fillOpacity: _alpha2.default,
	  strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiLHVCQURhO0FBRWIseUJBRmE7QUFHYix3QkFIYTtBQUliLHlCQUphO0FBS2IseUJBTGE7QUFNYixzQkFOYTtBQU9iLDJCQVBhO0FBUWIsMEJBUmE7QUFTYiw4QkFUYTtBQVViLGdDQVZhIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgZDogY29tcGxleCxcbiAgcG9pbnRzOiBjb21wbGV4LFxuICBvcGFjaXR5OiBhbHBoYSxcbiAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(349);
	
	var _transformProps = __webpack_require__(378);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZERO_NOT_ZERO = 0.0001;
	
	function build(state, data) {
	  var hasTransform = false;
	  var props = {};
	  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
	  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
	  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
	  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
	  var scaleTransformX = -transformOriginX * (scale * 1);
	  var scaleTransformY = -transformOriginY * (scaleY * 1);
	  var scaleReplaceX = transformOriginX / scale;
	  var scaleReplaceY = transformOriginY / scaleY;
	  var transform = {
	    translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
	    scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
	    rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
	    skewX: 'skewX(' + state.skewX + ') ',
	    skewY: 'skewY(' + state.skewY + ') '
	  };
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      if (_transformProps2.default[key]) {
	        hasTransform = true;
	      } else {
	        props[(0, _utils.camelToDash)(key)] = state[key];
	      }
	    }
	  }
	
	  if (hasTransform) {
	    props.transform = '';
	
	    for (var _key in transform) {
	      if (transform.hasOwnProperty(_key)) {
	        var defaultValue = _key === 'scale' ? '1' : '0';
	        props.transform += transform[_key].replace(/undefined/g, defaultValue);
	      }
	    }
	  }
	
	  return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QjtBQUN6QyxNQUFJLGVBQWUsS0FBZixDQURxQztBQUV6QyxNQUFNLFFBQVEsRUFBUixDQUZtQztBQUd6QyxNQUFNLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCLENBSGhDO0FBSXpDLE1BQU0sU0FBUyxNQUFNLE1BQU4sS0FBaUIsU0FBakIsR0FBNkIsTUFBTSxNQUFOLElBQWdCLGFBQWhCLEdBQWdDLFNBQVMsQ0FBVCxDQUpuQztBQUt6QyxNQUFNLG1CQUFtQixLQUFLLEtBQUwsSUFBYyxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFqQixDQUFELEdBQXdCLEdBQXhCLENBQWQsR0FBNkMsS0FBSyxDQUFMLENBTDdCO0FBTXpDLE1BQU0sbUJBQW1CLEtBQUssTUFBTCxJQUFlLENBQUMsTUFBTSxPQUFOLElBQWlCLEVBQWpCLENBQUQsR0FBd0IsR0FBeEIsQ0FBZixHQUE4QyxLQUFLLENBQUwsQ0FOOUI7QUFPekMsTUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixRQUFRLENBQVIsQ0FBdEIsQ0FQaUI7QUFRekMsTUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEIsQ0FSaUI7QUFTekMsTUFBTSxnQkFBZ0IsbUJBQW1CLEtBQW5CLENBVG1CO0FBVXpDLE1BQU0sZ0JBQWdCLG1CQUFtQixNQUFuQixDQVZtQjtBQVd6QyxNQUFNLFlBQVk7QUFDaEIsOEJBQXdCLE1BQU0sVUFBTixVQUFxQixNQUFNLFVBQU4sT0FBN0M7QUFDQSwwQkFBb0IseUJBQW9CLCtCQUEwQixlQUFVLDBCQUFxQix1QkFBa0Isb0JBQW5IO0FBQ0Esd0JBQWtCLE1BQU0sTUFBTixVQUFpQiwwQkFBcUIsdUJBQXhEO0FBQ0Esc0JBQWdCLE1BQU0sS0FBTixPQUFoQjtBQUNBLHNCQUFnQixNQUFNLEtBQU4sT0FBaEI7R0FMSSxDQVhtQzs7QUFtQnpDLE9BQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2Qix1QkFBZSxJQUFmLENBRHVCO09BQXpCLE1BRU87QUFDTCxjQUFNLHdCQUFZLEdBQVosQ0FBTixJQUEwQixNQUFNLEdBQU4sQ0FBMUIsQ0FESztPQUZQO0tBREY7R0FERjs7QUFVQSxNQUFJLFlBQUosRUFBa0I7QUFDaEIsVUFBTSxTQUFOLEdBQWtCLEVBQWxCLENBRGdCOztBQUdoQixTQUFLLElBQUksSUFBSixJQUFXLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBbUM7QUFDakMsWUFBTSxlQUFlLElBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRFk7QUFFakMsY0FBTSxTQUFOLElBQW1CLFVBQVUsSUFBVixFQUFlLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckMsQ0FBbkIsQ0FGaUM7T0FBbkM7S0FERjtHQUhGOztBQVdBLFNBQU8sS0FBUCxDQXhDeUM7Q0FBNUIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgY29uc3QgcHJvcHMgPSB7fTtcbiAgY29uc3Qgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICBjb25zdCBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIGNvbnN0IHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIGNvbnN0IHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIGNvbnN0IHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICBjb25zdCB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgc2NhbGU6IGB0cmFuc2xhdGUoJHtzY2FsZVRyYW5zZm9ybVh9LCAke3NjYWxlVHJhbnNmb3JtWX0pIHNjYWxlKCR7c2NhbGV9LCAke3NjYWxlWX0pIHRyYW5zbGF0ZSgke3NjYWxlUmVwbGFjZVh9LCAke3NjYWxlUmVwbGFjZVl9KSBgLFxuICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICBza2V3WTogYHNrZXdZKCR7c3RhdGUuc2tld1l9KSBgXG4gIH07XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufSJdfQ==

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = exports.getter = undefined;
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return element.getAttribute(key);
	};
	var setter = exports.setter = function (element, props) {
	  for (var key in props) {
	    if (props.hasOwnProperty(key)) {
	      element.setAttribute(key, props[key]);
	    }
	  }
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7U0FBa0IsUUFBUSxZQUFSLENBQXFCLEdBQXJCO0NBQWxCO0FBQ2YsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3hDLE9BQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFRLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsTUFBTSxHQUFOLENBQTFCLEVBRDZCO0tBQS9CO0dBREY7Q0FEb0I7O2tCQVFQLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBZCIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0dGVyID0gKGVsZW1lbnQsIGtleSkgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbmV4cG9ydCBjb25zdCBzZXR0ZXIgPSAoZWxlbWVudCwgcHJvcHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHsgZ2V0dGVyLCBzZXR0ZXIgfSk7XG4iXX0=

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _build = __webpack_require__(385);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(370);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(380);
	
	var _adapter = __webpack_require__(368);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: _svgAdapter.getter,
	  setter: function (element, props, opts) {
	    var pathLength = opts ? opts.pathLength : 0;
	    return (0, _svgAdapter.setter)(element, (0, _build2.default)(props, pathLength), opts);
	  },
	  stateMap: _stateMap2.default,
	  getElementData: function (element) {
	    return _extends({ pathLength: element.getTotalLength() }, (0, _svgAdapter.getElementData)(element));
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsdUJBQWM7QUFDM0IsNEJBRDJCO0FBRTNCLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUNoQyxRQUFNLGFBQWEsT0FBTyxLQUFLLFVBQUwsR0FBa0IsQ0FBekIsQ0FEYTtBQUVoQyxXQUFPLHdCQUFPLE9BQVAsRUFBZ0IscUJBQU0sS0FBTixFQUFhLFVBQWIsQ0FBaEIsRUFBMEMsSUFBMUMsQ0FBUCxDQUZnQztHQUExQjtBQUlSLDhCQU4yQjtBQU8zQixrQkFBZ0IsVUFBQyxPQUFEO3NCQUFnQixZQUFZLFFBQVEsY0FBUixFQUFaLElBQXlDLGdDQUFlLE9BQWY7R0FBekQ7Q0FQSCIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciwgZ2V0RWxlbWVudERhdGEgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXIsXG4gIHNldHRlcjogKGVsZW1lbnQsIHByb3BzLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgIHJldHVybiBzZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgfSxcbiAgc3RhdGVNYXAsXG4gIGdldEVsZW1lbnREYXRhOiAoZWxlbWVudCkgPT4gKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpLCAuLi5nZXRFbGVtZW50RGF0YShlbGVtZW50KSB9KVxufSk7XG4iXX0=

/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Convert percentage to pixels
	  
	  @param [number]: Percentage of total length
	  @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	  return parseFloat(percent) / 100 * length + 'px';
	};
	
	exports.default = function (state, length) {
	  var styles = {};
	  var dashArrayStyles = {
	    length: 0,
	    spacing: length + 'px'
	  };
	  var hasDashArray = false;
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      var value = state[key];
	
	      switch (key) {
	        case 'length':
	        case 'spacing':
	          hasDashArray = true;
	          dashArrayStyles[key] = percentToPixels(value, length);
	          break;
	        case 'offset':
	          styles['stroke-dashoffset'] = percentToPixels(-value, length);
	          break;
	        default:
	          styles[key] = value;
	      }
	    }
	  }
	
	  if (hasDashArray) {
	    styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	  }
	
	  return styles;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLElBQU0sa0JBQWtCLFVBQUMsT0FBRCxFQUFVLE1BQVY7U0FBcUIsVUFBQyxDQUFXLE9BQVgsSUFBc0IsR0FBdEIsR0FBNkIsTUFBOUIsR0FBdUMsSUFBdkM7Q0FBckI7O2tCQUVULFVBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDaEMsTUFBTSxTQUFTLEVBQVQsQ0FEMEI7QUFFaEMsTUFBTSxrQkFBa0I7QUFDdEIsWUFBUSxDQUFSO0FBQ0EsYUFBUyxTQUFTLElBQVQ7R0FGTCxDQUYwQjtBQU1oQyxNQUFJLGVBQWUsS0FBZixDQU40Qjs7QUFRaEMsT0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNyQixRQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQUR1Qjs7QUFHN0IsY0FBUSxHQUFSO0FBQ0EsYUFBSyxRQUFMLENBREE7QUFFQSxhQUFLLFNBQUw7QUFDRSx5QkFBZSxJQUFmLENBREY7QUFFRSwwQkFBZ0IsR0FBaEIsSUFBdUIsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQXZCLENBRkY7QUFHRSxnQkFIRjtBQUZBLGFBTUssUUFBTDtBQUNFLGlCQUFPLG1CQUFQLElBQThCLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxNQUF4QixDQUE5QixDQURGO0FBRUUsZ0JBRkY7QUFOQTtBQVVFLGlCQUFPLEdBQVAsSUFBYyxLQUFkLENBREY7QUFUQSxPQUg2QjtLQUEvQjtHQURGOztBQW1CQSxNQUFJLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQWhCLENBRDVDO0dBQWxCOztBQUlBLFNBQU8sTUFBUCxDQS9CZ0M7Q0FBbkIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge307XG4gIGNvbnN0IGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICBsZXQgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59OyJdfQ==

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(350);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(387);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Methods and properties to add to bound Actions
	*/
	var boundOnStart = function (action) {
	  return action.flow.activateAction(action.id, action);
	};
	var boundOnStop = function (action) {
	  return action.flow.deactivateAction(action.id);
	};
	var boundProps = function (flow) {
	  return {
	    flow: flow,
	    isPriority: true,
	    onActivate: boundOnStart,
	    onDeactivate: boundOnStop
	  };
	};
	
	var Flow = function (_Action) {
	  _inherits(Flow, _Action);
	
	  function Flow(props) {
	    _classCallCheck(this, Flow);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	    _this.activeActions = {};
	    _this.numActiveActions = 0;
	    return _this;
	  }
	
	  Flow.prototype.set = function set(props) {
	    _Action.prototype.set.call(this, props);
	
	    this.once();
	
	    return this;
	  };
	
	  /*
	    Bind Action to Actor
	  */
	
	
	  Flow.prototype.connect = function connect(action) {
	    var inheritedAction = action.inherit();
	    var newValues = {};
	    var hasNewValues = false;
	
	    // Create values on actor that don't exist
	    for (var key in inheritedAction.values) {
	      if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
	        newValues[key] = {};
	        hasNewValues = true;
	      }
	    }
	
	    if (hasNewValues) {
	      this.set({ values: newValues });
	    }
	
	    inheritedAction.parentId = action.id;
	
	    return inheritedAction.set(boundProps(this, inheritedAction));
	  };
	
	  /*
	    Start Actor
	     If Action is provided, bind it to this Actor and start
	     @param (optional) [Action]
	  */
	
	
	  Flow.prototype.start = function start() {
	    _Action.prototype.start.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        var action = this.activeActions[key];
	        if (!action.isActive) {
	          action.start();
	        }
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        this.activeActions[key].stop();
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	      var driver = value.numDrivers ? this.activeActions[value.drivers[0]] : false;
	      var newCurrent = value.numDrivers ? driver.values[key].current : value.current;
	
	      /**
	       * TODO: replace with blend tree resolver
	       * Additive motion
	       * Bezier tween blend
	       */
	      if (value.blendCurve) {
	        newCurrent = value.blendCurve();
	      }
	
	      value.current = newCurrent;
	    }
	
	    return _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
	  };
	
	  /*
	    Add active actions
	     @param [number]
	    @param [Action]
	  */
	
	
	  Flow.prototype.activateAction = function activateAction(id, action) {
	    this.activeActions[id] = action;
	    this.numActiveActions++;
	
	    for (var i = 0; i < action.numValueKeys; i++) {
	      var key = action.valueKeys[i];
	      var actionValue = action.values[key];
	      var value = this.values[key];
	
	      // If we're blending this action, and there's on already in progress
	      if (action.blend && value.numDrivers && !value.blendCurve && value.drivers[0].prototype === action.prototype) {
	        value.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, value, key);
	      } else if (!action.isScrubbing) {
	        value.blendCurve = undefined;
	        // Pass Actor value properties to Action
	        if (actionValue.velocity === 0) {
	          actionValue.velocity = value.velocity;
	        }
	
	        if (actionValue.from === undefined) {
	          actionValue.from = actionValue.current = value.current;
	        }
	      }
	
	      value.drivers = [id];
	      value.numDrivers = value.drivers.length;
	    }
	
	    if (this.numActiveActions) {
	      _Action.prototype.start.call(this);
	    }
	  };
	
	  /*
	    Remove active actions
	     @param [number]
	  */
	
	
	  Flow.prototype.deactivateAction = function deactivateAction(id) {
	    var action = this.activeActions[id];
	
	    if (action) {
	      for (var i = 0; i < action.numValueKeys; i++) {
	        var key = action.valueKeys[i];
	        var value = this.values[key];
	        var driverIndex = value.drivers.indexOf(id);
	
	        if (driverIndex !== -1) {
	          value.drivers.splice(driverIndex, 1);
	          value.numDrivers--;
	        }
	      }
	
	      delete this.activeActions[id];
	      this.numActiveActions--;
	    }
	
	    if (!this.numActiveActions && this.isActive) {
	      _Action.prototype.stop.call(this);
	    }
	  };
	
	  return Flow;
	}(_Action3.default);
	
	Flow.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  drivers: [],
	  numDrivers: 0
	});
	
	exports.default = Flow;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sZUFBZSxVQUFDLE1BQUQ7U0FBWSxPQUFPLElBQVAsQ0FBWSxjQUFaLENBQTJCLE9BQU8sRUFBUCxFQUFXLE1BQXRDO0NBQVo7QUFDckIsSUFBTSxjQUFjLFVBQUMsTUFBRDtTQUFZLE9BQU8sSUFBUCxDQUFZLGdCQUFaLENBQTZCLE9BQU8sRUFBUDtDQUF6QztBQUNwQixJQUFNLGFBQWEsVUFBQyxJQUFEO1NBQVc7QUFDNUIsY0FENEI7QUFFNUIsZ0JBQVksSUFBWjtBQUNBLGdCQUFZLFlBQVo7QUFDQSxrQkFBYyxXQUFkOztDQUppQjs7SUFPYjs7O0FBQ0osV0FESSxJQUNKLENBQVksS0FBWixFQUFtQjswQkFEZixNQUNlOztpREFDakIsbUJBQU0sS0FBTixHQURpQjs7QUFFakIsVUFBSyxhQUFMLEdBQXFCLEVBQXJCLENBRmlCO0FBR2pCLFVBQUssZ0JBQUwsR0FBd0IsQ0FBeEIsQ0FIaUI7O0dBQW5COztBQURJLGlCQU9KLG1CQUFJLE9BQU87QUFDVCxzQkFBTSxHQUFOLFlBQVUsS0FBVixFQURTOztBQUdULFNBQUssSUFBTCxHQUhTOztBQUtULFdBQU8sSUFBUCxDQUxTOzs7Ozs7OztBQVBQLGlCQWtCSiwyQkFBUSxRQUFRO0FBQ2QsUUFBTSxrQkFBa0IsT0FBTyxPQUFQLEVBQWxCLENBRFE7QUFFZCxRQUFJLFlBQVksRUFBWixDQUZVO0FBR2QsUUFBSSxlQUFlLEtBQWY7OztBQUhVLFNBTVQsSUFBSSxHQUFKLElBQVcsZ0JBQWdCLE1BQWhCLEVBQXdCO0FBQ3RDLFVBQUksZ0JBQWdCLE1BQWhCLENBQXVCLGNBQXZCLENBQXNDLEdBQXRDLEtBQThDLENBQUMsS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixHQUEzQixDQUFELEVBQWtDO0FBQ2xGLGtCQUFVLEdBQVYsSUFBaUIsRUFBakIsQ0FEa0Y7QUFFbEYsdUJBQWUsSUFBZixDQUZrRjtPQUFwRjtLQURGOztBQU9BLFFBQUksWUFBSixFQUFrQjtBQUNoQixXQUFLLEdBQUwsQ0FBUyxFQUFFLFFBQVEsU0FBUixFQUFYLEVBRGdCO0tBQWxCOztBQUlBLG9CQUFnQixRQUFoQixHQUEyQixPQUFPLEVBQVAsQ0FqQmI7O0FBbUJkLFdBQU8sZ0JBQWdCLEdBQWhCLENBQW9CLFdBQVcsSUFBWCxFQUFpQixlQUFqQixDQUFwQixDQUFQLENBbkJjOzs7Ozs7Ozs7O0FBbEJaLGlCQStDSix5QkFBUTtBQUNOLHNCQUFNLEtBQU4sWUFETTs7QUFHTixTQUFLLElBQUksR0FBSixJQUFXLEtBQUssYUFBTCxFQUFvQjtBQUNsQyxVQUFJLEtBQUssYUFBTCxDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFKLEVBQTRDO0FBQzFDLFlBQU0sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBVCxDQURvQztBQUUxQyxZQUFJLENBQUMsT0FBTyxRQUFQLEVBQWlCO0FBQ3BCLGlCQUFPLEtBQVAsR0FEb0I7U0FBdEI7T0FGRjtLQURGOztBQVNBLFdBQU8sSUFBUCxDQVpNOzs7QUEvQ0osaUJBOERKLHVCQUFPO0FBQ0wsc0JBQU0sSUFBTixZQURLOztBQUdMLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBSyxhQUFMLEVBQW9CO0FBQ2xDLFVBQUksS0FBSyxhQUFMLENBQW1CLGNBQW5CLENBQWtDLEdBQWxDLENBQUosRUFBNEM7QUFDMUMsYUFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCLElBQXhCLEdBRDBDO09BQTVDO0tBREY7O0FBTUEsV0FBTyxJQUFQLENBVEs7OztBQTlESCxpQkEwRUosaUNBQVcsT0FBTyxZQUFZLFNBQVM7QUFDckMsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQzFDLFVBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEb0M7QUFFMUMsVUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZvQztBQUcxQyxVQUFNLFNBQVMsTUFBTSxVQUFOLEdBQW1CLEtBQUssYUFBTCxDQUFtQixNQUFNLE9BQU4sQ0FBYyxDQUFkLENBQW5CLENBQW5CLEdBQTBELEtBQTFELENBSDJCO0FBSTFDLFVBQUksYUFBYSxNQUFNLFVBQU4sR0FBbUIsT0FBTyxNQUFQLENBQWMsR0FBZCxFQUFtQixPQUFuQixHQUE2QixNQUFNLE9BQU47Ozs7Ozs7QUFKdkIsVUFXdEMsTUFBTSxVQUFOLEVBQWtCO0FBQ3BCLHFCQUFhLE1BQU0sVUFBTixFQUFiLENBRG9CO09BQXRCOztBQUlBLFlBQU0sT0FBTixHQUFnQixVQUFoQixDQWYwQztLQUE1Qzs7QUFrQkEsV0FBTyxrQkFBTSxVQUFOLFlBQWlCLEtBQWpCLEVBQXdCLFVBQXhCLEVBQW9DLE9BQXBDLENBQVAsQ0FuQnFDOzs7Ozs7Ozs7O0FBMUVuQyxpQkFzR0oseUNBQWUsSUFBSSxRQUFRO0FBQ3pCLFNBQUssYUFBTCxDQUFtQixFQUFuQixJQUF5QixNQUF6QixDQUR5QjtBQUV6QixTQUFLLGdCQUFMLEdBRnlCOztBQUl6QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLFlBQVAsRUFBcUIsR0FBekMsRUFBOEM7QUFDNUMsVUFBTSxNQUFNLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUFOLENBRHNDO0FBRTVDLFVBQU0sY0FBYyxPQUFPLE1BQVAsQ0FBYyxHQUFkLENBQWQsQ0FGc0M7QUFHNUMsVUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUjs7O0FBSHNDLFVBTXhDLE9BQU8sS0FBUCxJQUFnQixNQUFNLFVBQU4sSUFBb0IsQ0FBQyxNQUFNLFVBQU4sSUFBcUIsTUFBTSxPQUFOLENBQWMsQ0FBZCxFQUFpQixTQUFqQixLQUErQixPQUFPLFNBQVAsRUFBbUI7QUFDOUcsY0FBTSxVQUFOLEdBQW1CLGtDQUFtQixLQUFLLGFBQUwsQ0FBbUIsTUFBTSxPQUFOLENBQWMsQ0FBZCxDQUFuQixDQUFuQixFQUF5RCxNQUF6RCxFQUFpRSxLQUFqRSxFQUF3RSxHQUF4RSxDQUFuQixDQUQ4RztPQUFoSCxNQUVPLElBQUksQ0FBQyxPQUFPLFdBQVAsRUFBb0I7QUFDOUIsY0FBTSxVQUFOLEdBQW1CLFNBQW5COztBQUQ4QixZQUcxQixZQUFZLFFBQVosS0FBeUIsQ0FBekIsRUFBNEI7QUFDOUIsc0JBQVksUUFBWixHQUF1QixNQUFNLFFBQU4sQ0FETztTQUFoQzs7QUFJQSxZQUFJLFlBQVksSUFBWixLQUFxQixTQUFyQixFQUFnQztBQUNsQyxzQkFBWSxJQUFaLEdBQW1CLFlBQVksT0FBWixHQUFzQixNQUFNLE9BQU4sQ0FEUDtTQUFwQztPQVBLOztBQVlQLFlBQU0sT0FBTixHQUFnQixDQUFDLEVBQUQsQ0FBaEIsQ0FwQjRDO0FBcUI1QyxZQUFNLFVBQU4sR0FBbUIsTUFBTSxPQUFOLENBQWMsTUFBZCxDQXJCeUI7S0FBOUM7O0FBd0JBLFFBQUksS0FBSyxnQkFBTCxFQUF1QjtBQUN6Qix3QkFBTSxLQUFOLFlBRHlCO0tBQTNCOzs7Ozs7Ozs7QUFsSUUsaUJBNElKLDZDQUFpQixJQUFJO0FBQ25CLFFBQU0sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBVCxDQURhOztBQUduQixRQUFJLE1BQUosRUFBWTtBQUNWLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sWUFBUCxFQUFxQixHQUF6QyxFQUE4QztBQUM1QyxZQUFNLE1BQU0sT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQU4sQ0FEc0M7QUFFNUMsWUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZzQztBQUc1QyxZQUFNLGNBQWMsTUFBTSxPQUFOLENBQWMsT0FBZCxDQUFzQixFQUF0QixDQUFkLENBSHNDOztBQUs1QyxZQUFJLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUN0QixnQkFBTSxPQUFOLENBQWMsTUFBZCxDQUFxQixXQUFyQixFQUFrQyxDQUFsQyxFQURzQjtBQUV0QixnQkFBTSxVQUFOLEdBRnNCO1NBQXhCO09BTEY7O0FBV0EsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsRUFBbkIsQ0FBUCxDQVpVO0FBYVYsV0FBSyxnQkFBTCxHQWJVO0tBQVo7O0FBZ0JBLFFBQUksQ0FBQyxLQUFLLGdCQUFMLElBQXlCLEtBQUssUUFBTCxFQUFlO0FBQzNDLHdCQUFNLElBQU4sWUFEMkM7S0FBN0M7OztTQS9KRTs7O0FBcUtOLEtBQUssU0FBTCxDQUFlLFlBQWYsR0FBOEIsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDdEQsV0FBUyxFQUFUO0FBQ0EsY0FBWSxDQUFaO0NBRjRCLENBQTlCOztrQkFLZSIsImZpbGUiOiJGbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG5jb25zdCBib3VuZE9uU3RhcnQgPSAoYWN0aW9uKSA9PiBhY3Rpb24uZmxvdy5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbmNvbnN0IGJvdW5kUHJvcHMgPSAoZmxvdykgPT4gKHtcbiAgZmxvdyxcbiAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgb25BY3RpdmF0ZTogYm91bmRPblN0YXJ0LFxuICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG59KTtcblxuY2xhc3MgRmxvdyBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gIH1cblxuICBzZXQocHJvcHMpIHtcbiAgICBzdXBlci5zZXQocHJvcHMpO1xuXG4gICAgdGhpcy5vbmNlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qXG4gICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgKi9cbiAgY29ubmVjdChhY3Rpb24pIHtcbiAgICBjb25zdCBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IHt9O1xuICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgfVxuXG4gICAgaW5oZXJpdGVkQWN0aW9uLnBhcmVudElkID0gYWN0aW9uLmlkO1xuXG4gICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgfVxuXG4gIC8qXG4gICAgU3RhcnQgQWN0b3JcblxuICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgKi9cbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICBjb25zdCBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICBsZXQgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogVE9ETzogcmVwbGFjZSB3aXRoIGJsZW5kIHRyZWUgcmVzb2x2ZXJcbiAgICAgICAqIEFkZGl0aXZlIG1vdGlvblxuICAgICAgICogQmV6aWVyIHR3ZWVuIGJsZW5kXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZS5ibGVuZEN1cnZlKSB7XG4gICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgfVxuXG4gIC8qXG4gICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW0FjdGlvbl1cbiAgKi9cbiAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzICYmICF2YWx1ZS5ibGVuZEN1cnZlICYmICh2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICBpZiAoYWN0aW9uVmFsdWUudmVsb2NpdHkgPT09IDApIHtcbiAgICAgICAgICBhY3Rpb25WYWx1ZS52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvblZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFjdGlvblZhbHVlLmZyb20gPSBhY3Rpb25WYWx1ZS5jdXJyZW50ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YWx1ZS5kcml2ZXJzID0gW2lkXTtcbiAgICAgIHZhbHVlLm51bURyaXZlcnMgPSB2YWx1ZS5kcml2ZXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICBzdXBlci5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgKi9cbiAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICB9XG4gIH1cbn1cblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRyaXZlcnM6IFtdLFxuICBudW1Ecml2ZXJzOiAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvdztcbiJdfQ==

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(355);
	
	var BLEND_ACCURACY = 60;
	
	exports.default = function (outAction, inAction, flowValue, key) {
	  var outValue = outAction.values[key];
	
	  if (outAction.elapsed === undefined || !outValue) {
	    return;
	  }
	
	  var inValue = inAction.values[key];
	  var outTotalDuration = outValue.delay + outValue.duration;
	  var timeUntilOutEnd = Math.min(outTotalDuration - outAction.elapsed, inValue.delay + inValue.duration);
	  var inPositionAtOutEnd = (0, _calc.ease)((0, _calc.restrict)((0, _calc.getProgressFromValue)(timeUntilOutEnd, 0, inValue.delay + inValue.duration), 0, 1), inValue.from, inValue.to, inValue.ease);
	  var inBiggerThanOutAtStart = inValue.from > outValue.current;
	  var inBiggerThanOutAtEnd = inPositionAtOutEnd > outValue.to;
	  var tweensIntersect = inBiggerThanOutAtStart !== inBiggerThanOutAtEnd;
	
	  var blendCurve = [[0, outValue.current], [timeUntilOutEnd, inPositionAtOutEnd]];
	
	  // If tweens intersect, resolve tweens at a resolution to find exactly where
	  if (tweensIntersect) {
	    var timeStepToTest = timeUntilOutEnd / BLEND_ACCURACY;
	    var foundP1 = false;
	    var foundP2 = false;
	
	    for (var i = 0; i <= BLEND_ACCURACY; i++) {
	      var timeStep = i * timeStepToTest;
	      var outAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(outAction.elapsed + timeStep, outValue.delay, outValue.duration), outValue.from, outValue.to, outValue.ease);
	      var inAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(inAction.elapsed + timeStep, inValue.delay, inValue.duration), inValue.from, inValue.to, inValue.ease);
	
	      if (!foundP1 && (inBiggerThanOutAtStart && inAtTime < outAtTime || !inBiggerThanOutAtStart && inAtTime > outAtTime)) {
	        blendCurve.splice(1, 0, [timeStep, inAtTime]);
	        foundP1 = true;
	      }
	
	      if (foundP1 && (inBiggerThanOutAtStart && inAtTime < outValue.current || !inBiggerThanOutAtStart && inAtTime > outValue.current)) {
	        blendCurve[2] = [timeStep, inAtTime];
	        foundP2 = true;
	      }
	
	      if (foundP2) {
	        break;
	      }
	    }
	  }
	
	  if (blendCurve.length === 2) {
	    // Pass between tweens using incoming easing if just two points
	    return function () {
	      var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[1][0]), 0, 1);
	
	      if (blendProgress === 1) {
	        flowValue.blendCurve = undefined;
	      }
	
	      return (0, _calc.ease)(blendProgress, outValue.current, inValue.current, inValue.ease);
	    };
	  } else {
	    // Pass between tweens using bezier interpolation
	    return function () {
	      var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[2][0]), 0, 1);
	      var aP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[0][1], blendCurve[1][1]);
	      var bP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[1][1], blendCurve[2][1]);
	
	      if (blendProgress === 1) {
	        flowValue.blendCurve = undefined;
	        return inValue.current;
	      }
	
	      return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	    };
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU0saUJBQWlCLEVBQWpCOztrQkFFUyxVQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEdBQWpDLEVBQXlDO0FBQ3RELE1BQU0sV0FBVyxVQUFVLE1BQVYsQ0FBaUIsR0FBakIsQ0FBWCxDQURnRDs7QUFHdEQsTUFBSSxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsQ0FBQyxRQUFELEVBQVc7QUFDaEQsV0FEZ0Q7R0FBbEQ7O0FBSUEsTUFBTSxVQUFVLFNBQVMsTUFBVCxDQUFnQixHQUFoQixDQUFWLENBUGdEO0FBUXRELE1BQU0sbUJBQW1CLFNBQVMsS0FBVCxHQUFpQixTQUFTLFFBQVQsQ0FSWTtBQVN0RCxNQUFNLGtCQUFrQixLQUFLLEdBQUwsQ0FBUyxtQkFBbUIsVUFBVSxPQUFWLEVBQW1CLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBakYsQ0FUZ0Q7QUFVdEQsTUFBTSxxQkFBcUIsZ0JBQUssb0JBQVMsZ0NBQXFCLGVBQXJCLEVBQXNDLENBQXRDLEVBQXlDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBbEUsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBTCxFQUFpRyxRQUFRLElBQVIsRUFBYyxRQUFRLEVBQVIsRUFBWSxRQUFRLElBQVIsQ0FBaEosQ0FWZ0Q7QUFXdEQsTUFBTSx5QkFBeUIsUUFBUSxJQUFSLEdBQWUsU0FBUyxPQUFULENBWFE7QUFZdEQsTUFBTSx1QkFBdUIscUJBQXFCLFNBQVMsRUFBVCxDQVpJO0FBYXRELE1BQU0sa0JBQWtCLDJCQUEyQixvQkFBM0IsQ0FiOEI7O0FBZXRELE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQVMsT0FBVCxDQUFMLEVBQXdCLENBQUMsZUFBRCxFQUFrQixrQkFBbEIsQ0FBeEIsQ0FBYjs7O0FBZmdELE1Ba0JsRCxlQUFKLEVBQXFCO0FBQ25CLFFBQU0saUJBQWlCLGtCQUFrQixjQUFsQixDQURKO0FBRW5CLFFBQUksVUFBVSxLQUFWLENBRmU7QUFHbkIsUUFBSSxVQUFVLEtBQVYsQ0FIZTs7QUFLbkIsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLEtBQUssY0FBTCxFQUFxQixHQUFyQyxFQUEwQztBQUN4QyxVQUFNLFdBQVcsSUFBSSxjQUFKLENBRHVCO0FBRXhDLFVBQU0sWUFBWSxnQkFBSyxnQ0FBcUIsVUFBVSxPQUFWLEdBQW9CLFFBQXBCLEVBQThCLFNBQVMsS0FBVCxFQUFnQixTQUFTLFFBQVQsQ0FBeEUsRUFBNEYsU0FBUyxJQUFULEVBQWUsU0FBUyxFQUFULEVBQWEsU0FBUyxJQUFULENBQXBJLENBRmtDO0FBR3hDLFVBQU0sV0FBVyxnQkFBSyxnQ0FBcUIsU0FBUyxPQUFULEdBQW1CLFFBQW5CLEVBQTZCLFFBQVEsS0FBUixFQUFlLFFBQVEsUUFBUixDQUF0RSxFQUF5RixRQUFRLElBQVIsRUFBYyxRQUFRLEVBQVIsRUFBWSxRQUFRLElBQVIsQ0FBOUgsQ0FIa0M7O0FBS3hDLFVBQUksQ0FBQyxPQUFELEtBQWEsc0JBQUMsSUFBMEIsV0FBVyxTQUFYLElBQTBCLENBQUMsc0JBQUQsSUFBMkIsV0FBVyxTQUFYLENBQTdGLEVBQXFIO0FBQ3ZILG1CQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUF4QixFQUR1SDtBQUV2SCxrQkFBVSxJQUFWLENBRnVIO09BQXpIOztBQUtBLFVBQUksWUFBWSxzQkFBQyxJQUEwQixXQUFXLFNBQVMsT0FBVCxJQUFzQixDQUFDLHNCQUFELElBQTJCLFdBQVcsU0FBUyxPQUFULENBQTlHLEVBQWtJO0FBQ3BJLG1CQUFXLENBQVgsSUFBZ0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFoQixDQURvSTtBQUVwSSxrQkFBVSxJQUFWLENBRm9JO09BQXRJOztBQUtBLFVBQUksT0FBSixFQUFhO0FBQ1gsY0FEVztPQUFiO0tBZkY7R0FMRjs7QUEwQkEsTUFBSSxXQUFXLE1BQVgsS0FBc0IsQ0FBdEIsRUFBeUI7O0FBRTNCLFdBQU8sWUFBTTtBQUNYLFVBQU0sZ0JBQWdCLG9CQUFTLGdDQUFxQixTQUFTLE9BQVQsRUFBa0IsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF2QyxFQUF5RCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXpELENBQVQsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBaEIsQ0FESzs7QUFHWCxVQUFJLGtCQUFrQixDQUFsQixFQUFxQjtBQUN2QixrQkFBVSxVQUFWLEdBQXVCLFNBQXZCLENBRHVCO09BQXpCOztBQUlBLGFBQU8sZ0JBQUssYUFBTCxFQUFvQixTQUFTLE9BQVQsRUFBa0IsUUFBUSxPQUFSLEVBQWlCLFFBQVEsSUFBUixDQUE5RCxDQVBXO0tBQU4sQ0FGb0I7R0FBN0IsTUFXTzs7QUFFTCxXQUFPLFlBQU07QUFDWCxVQUFNLGdCQUFnQixvQkFBUyxnQ0FBcUIsU0FBUyxPQUFULEVBQWtCLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdkMsRUFBeUQsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF6RCxDQUFULEVBQXFGLENBQXJGLEVBQXdGLENBQXhGLENBQWhCLENBREs7QUFFWCxVQUFNLEtBQUssZ0NBQXFCLGFBQXJCLEVBQW9DLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0QsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF0RCxDQUFMLENBRks7QUFHWCxVQUFNLEtBQUssZ0NBQXFCLGFBQXJCLEVBQW9DLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0QsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF0RCxDQUFMLENBSEs7O0FBS1gsVUFBSSxrQkFBa0IsQ0FBbEIsRUFBcUI7QUFDdkIsa0JBQVUsVUFBVixHQUF1QixTQUF2QixDQUR1QjtBQUV2QixlQUFPLFFBQVEsT0FBUixDQUZnQjtPQUF6Qjs7QUFLQSxhQUFPLGdDQUFxQixhQUFyQixFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QyxDQUFQLENBVlc7S0FBTixDQUZGO0dBWFA7Q0E1Q2EiLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIGVhc2UsIHJlc3RyaWN0IH0gZnJvbSAnLi4vLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnQgZGVmYXVsdCAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpID0+IHtcbiAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgaWYgKG91dEFjdGlvbi5lbGFwc2VkID09PSB1bmRlZmluZWQgfHwgIW91dFZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgY29uc3QgdGltZVVudGlsT3V0RW5kID0gTWF0aC5taW4ob3V0VG90YWxEdXJhdGlvbiAtIG91dEFjdGlvbi5lbGFwc2VkLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbik7XG4gIGNvbnN0IGluUG9zaXRpb25BdE91dEVuZCA9IGVhc2UocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICBjb25zdCB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICBjb25zdCBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgY29uc3QgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICBjb25zdCB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgIGNvbnN0IG91dEF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgY29uc3QgaW5BdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkpIHtcbiAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpKSB7XG4gICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsyXVswXSksIDAsIDEpO1xuICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzBdWzFdLCBibGVuZEN1cnZlWzFdWzFdKTtcbiAgICAgIGNvbnN0IGJQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVsxXVsxXSwgYmxlbmRDdXJ2ZVsyXVsxXSk7XG5cbiAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICB9O1xuICB9XG59O1xuIl19

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(350);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(389);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(349);
	
	var _calc = __webpack_require__(355);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var COUNT = 'Count';
	var NEXT_STEPS = {
	  loop: 'restart',
	  yoyo: 'reverse',
	  flip: 'flipValues'
	};
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.start = function start() {
	    this.elapsed = 0;
	    this.flipCount = this.yoyoCount = this.loopCount = 0;
	    this.isScrubbing = false;
	
	    // Set default `from` if none set
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	      if (value.from === undefined) {
	        value.from = 0;
	      }
	    }
	
	    return _Action.prototype.start.call(this);
	  };
	
	  Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	    var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	    this.ended = true;
	
	    if (!this.isScrubbing) {
	      this.elapsed += elapsed * this.dilate * this.playDirection;
	    }
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	
	      var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(this.elapsed - value.delay, 0, value.duration), 0, 1);
	
	      // Mark Tween as NOT ended if still in progress
	      if (progress !== progressTarget) {
	        this.ended = false;
	      }
	
	      // Step progress if we're stepping
	      if (value.steps) {
	        progress = (0, _calc.stepProgress)(progress, value.steps);
	      }
	
	      // Ease progress
	      value.current = (0, _calc.ease)(progress, value.from, value.to, value.ease);
	    }
	  };
	
	  Tween.prototype.onFrameEnd = function onFrameEnd() {
	    if (this.ended && !this.isScrubbing) {
	      var stepTaken = false;
	
	      for (var key in NEXT_STEPS) {
	        if (NEXT_STEPS.hasOwnProperty(key)) {
	          if ((0, _utils.isNum)(this[key]) && this[key] > this[key + COUNT]) {
	            this[key + COUNT]++;
	            stepTaken = true;
	            this[NEXT_STEPS[key]]();
	          }
	        }
	      }
	
	      if (!stepTaken) {
	        this.complete();
	      }
	    }
	  };
	
	  Tween.prototype.flipValues = function flipValues() {
	    var values = this.values;
	
	    this.elapsed = this.duration - this.elapsed;
	
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        var value = values[key];
	        var _ref = [value.from, value.to];
	        value.to = _ref[0];
	        value.from = _ref[1];
	      }
	    }
	
	    return this;
	  };
	
	  Tween.prototype.reverse = function reverse() {
	    this.playDirection *= -1;
	    return this;
	  };
	
	  Tween.prototype.restart = function restart() {
	    this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	    this.started = (0, _utils.currentTime)();
	    return this;
	  };
	
	  Tween.prototype.seek = function seek(progress) {
	    this.seekTime(this.duration * progress);
	    return this;
	  };
	
	  Tween.prototype.seekTime = function seekTime(elapsed) {
	    if (!this.isActive || this.isScrubbing) {
	      this.once();
	      this.isScrubbing = true;
	    }
	
	    this.elapsed = elapsed;
	
	    return this;
	  };
	
	  return Tween;
	}(_Action3.default);
	
	Tween.prototype.defaultValueProp = 'to';
	Tween.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  delay: 0,
	  duration: 300,
	  ease: _presetEasing2.default.easeOut,
	  elapsed: 0,
	  steps: 0,
	  to: 0,
	  round: false
	});
	Tween.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  blend: false,
	  dilate: 1,
	  loop: 0,
	  yoyo: 0,
	  flip: 0,
	  loopCount: 0,
	  yoyoCount: 0,
	  flipCount: 0,
	  playDirection: 1,
	  isScrubbing: false,
	  ended: false,
	  elapsed: 0
	});
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sYUFBYTtBQUNqQixRQUFNLFNBQU47QUFDQSxRQUFNLFNBQU47QUFDQSxRQUFNLFlBQU47Q0FISTs7SUFNQTs7Ozs7Ozs7O2tCQUNKLHlCQUFRO0FBQ04sU0FBSyxPQUFMLEdBQWUsQ0FBZixDQURNO0FBRU4sU0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsQ0FBakIsQ0FGNUI7QUFHTixTQUFLLFdBQUwsR0FBbUIsS0FBbkI7OztBQUhNLFNBTUQsSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxVQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRG9DO0FBRTFDLFVBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGb0M7QUFHMUMsVUFBSSxNQUFNLElBQU4sS0FBZSxTQUFmLEVBQTBCO0FBQzVCLGNBQU0sSUFBTixHQUFhLENBQWIsQ0FENEI7T0FBOUI7S0FIRjs7QUFRQSxXQUFPLGtCQUFNLEtBQU4sV0FBUCxDQWRNOzs7QUFESixrQkFrQkosNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDbkMsUUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEWTs7QUFHbkMsU0FBSyxLQUFMLEdBQWEsSUFBYixDQUhtQzs7QUFLbkMsUUFBSSxDQUFDLEtBQUssV0FBTCxFQUFrQjtBQUNyQixXQUFLLE9BQUwsSUFBZ0IsT0FBQyxHQUFVLEtBQUssTUFBTCxHQUFlLEtBQUssYUFBTCxDQURyQjtLQUF2Qjs7QUFJQSxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURvQztBQUUxQyxVQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRm9DOztBQUkxQyxVQUFJLFdBQVcsb0JBQVMsZ0NBQXFCLEtBQUssT0FBTCxHQUFlLE1BQU0sS0FBTixFQUFhLENBQWpELEVBQW9ELE1BQU0sUUFBTixDQUE3RCxFQUE4RSxDQUE5RSxFQUFpRixDQUFqRixDQUFYOzs7QUFKc0MsVUFPdEMsYUFBYSxjQUFiLEVBQTZCO0FBQy9CLGFBQUssS0FBTCxHQUFhLEtBQWIsQ0FEK0I7T0FBakM7OztBQVAwQyxVQVl0QyxNQUFNLEtBQU4sRUFBYTtBQUNmLG1CQUFXLHdCQUFhLFFBQWIsRUFBdUIsTUFBTSxLQUFOLENBQWxDLENBRGU7T0FBakI7OztBQVowQyxXQWlCMUMsQ0FBTSxPQUFOLEdBQWdCLGdCQUFLLFFBQUwsRUFBZSxNQUFNLElBQU4sRUFBWSxNQUFNLEVBQU4sRUFBVSxNQUFNLElBQU4sQ0FBckQsQ0FqQjBDO0tBQTVDOzs7QUEzQkUsa0JBZ0RKLG1DQUFhO0FBQ1gsUUFBSSxLQUFLLEtBQUwsSUFBYyxDQUFDLEtBQUssV0FBTCxFQUFrQjtBQUNuQyxVQUFJLFlBQVksS0FBWixDQUQrQjs7QUFHbkMsV0FBSyxJQUFJLEdBQUosSUFBVyxVQUFoQixFQUE0QjtBQUMxQixZQUFJLFdBQVcsY0FBWCxDQUEwQixHQUExQixDQUFKLEVBQW9DO0FBQ2xDLGNBQUksa0JBQU0sS0FBSyxHQUFMLENBQU4sS0FBb0IsS0FBSyxHQUFMLElBQVksS0FBSyxNQUFNLEtBQU4sQ0FBakIsRUFBK0I7QUFDckQsaUJBQUssTUFBTSxLQUFOLENBQUwsR0FEcUQ7QUFFckQsd0JBQVksSUFBWixDQUZxRDtBQUdyRCxpQkFBSyxXQUFXLEdBQVgsQ0FBTCxJQUhxRDtXQUF2RDtTQURGO09BREY7O0FBVUEsVUFBSSxDQUFDLFNBQUQsRUFBWTtBQUNkLGFBQUssUUFBTCxHQURjO09BQWhCO0tBYkY7OztBQWpERSxrQkFvRUosbUNBQWE7QUFDWCxRQUFNLFNBQVMsS0FBSyxNQUFMLENBREo7O0FBR1gsU0FBSyxPQUFMLEdBQWUsS0FBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUhwQjs7QUFLWCxTQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3RCLFVBQUksT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQUosRUFBZ0M7QUFDOUIsWUFBTSxRQUFRLE9BQU8sR0FBUCxDQUFSLENBRHdCO21CQUVMLENBQUMsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEVBRlI7QUFFN0IsY0FBTSxFQUFOLFdBRjZCO0FBRW5CLGNBQU0sSUFBTixXQUZtQjtPQUFoQztLQURGOztBQU9BLFdBQU8sSUFBUCxDQVpXOzs7QUFwRVQsa0JBbUZKLDZCQUFVO0FBQ1IsU0FBSyxhQUFMLElBQXNCLENBQUMsQ0FBRCxDQURkO0FBRVIsV0FBTyxJQUFQLENBRlE7OztBQW5GTixrQkF3RkosNkJBQVU7QUFDUixTQUFLLE9BQUwsR0FBZSxJQUFDLENBQUssYUFBTCxLQUF1QixDQUF2QixHQUE0QixDQUE3QixHQUFpQyxLQUFLLFFBQUwsQ0FEeEM7QUFFUixTQUFLLE9BQUwsR0FBZSx5QkFBZixDQUZRO0FBR1IsV0FBTyxJQUFQLENBSFE7OztBQXhGTixrQkE4RkoscUJBQUssVUFBVTtBQUNiLFNBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxHQUFnQixRQUFoQixDQUFkLENBRGE7QUFFYixXQUFPLElBQVAsQ0FGYTs7O0FBOUZYLGtCQW1HSiw2QkFBUyxTQUFTO0FBQ2hCLFFBQUksQ0FBQyxLQUFLLFFBQUwsSUFBaUIsS0FBSyxXQUFMLEVBQWtCO0FBQ3RDLFdBQUssSUFBTCxHQURzQztBQUV0QyxXQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FGc0M7S0FBeEM7O0FBS0EsU0FBSyxPQUFMLEdBQWUsT0FBZixDQU5nQjs7QUFRaEIsV0FBTyxJQUFQLENBUmdCOzs7U0FuR2Q7OztBQStHTixNQUFNLFNBQU4sQ0FBZ0IsZ0JBQWhCLEdBQW1DLElBQW5DO0FBQ0EsTUFBTSxTQUFOLENBQWdCLFlBQWhCLEdBQStCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3ZELFNBQU8sQ0FBUDtBQUNBLFlBQVUsR0FBVjtBQUNBLFFBQU0sdUJBQU8sT0FBUDtBQUNOLFdBQVMsQ0FBVDtBQUNBLFNBQU8sQ0FBUDtBQUNBLE1BQUksQ0FBSjtBQUNBLFNBQU8sS0FBUDtDQVA2QixDQUEvQjtBQVNBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUN2RCxTQUFPLEtBQVA7QUFDQSxVQUFRLENBQVI7QUFDQSxRQUFNLENBQU47QUFDQSxRQUFNLENBQU47QUFDQSxRQUFNLENBQU47QUFDQSxhQUFXLENBQVg7QUFDQSxhQUFXLENBQVg7QUFDQSxhQUFXLENBQVg7QUFDQSxpQkFBZSxDQUFmO0FBQ0EsZUFBYSxLQUFiO0FBQ0EsU0FBTyxLQUFQO0FBQ0EsV0FBUyxDQUFUO0NBWjZCLENBQS9COztrQkFlZSIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lLCBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyBlYXNlLCByZXN0cmljdCwgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIHN0ZXBQcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogJ3Jlc3RhcnQnLFxuICB5b3lvOiAncmV2ZXJzZScsXG4gIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgYGZyb21gIGlmIG5vbmUgc2V0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIGlmICh2YWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUuZnJvbSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnN0YXJ0KCk7XG4gIH1cblxuICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgfVxuICB9XG5cbiAgb25GcmFtZUVuZCgpIHtcbiAgICBpZiAodGhpcy5lbmRlZCAmJiAhdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKGlzTnVtKHRoaXNba2V5XSkgJiYgdGhpc1trZXldID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmbGlwVmFsdWVzKCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWVrKHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLm9uY2UoKTtcbiAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBlYXNpbmcuZWFzZU91dCxcbiAgZWxhcHNlZDogMCxcbiAgc3RlcHM6IDAsXG4gIHRvOiAwLFxuICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBibGVuZDogZmFsc2UsXG4gIGRpbGF0ZTogMSxcbiAgbG9vcDogMCxcbiAgeW95bzogMCxcbiAgZmxpcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMSxcbiAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICBlbmRlZDogZmFsc2UsXG4gIGVsYXBzZWQ6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUd2VlbjtcbiJdfQ==

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(390);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(391);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Values
	/*
	  Easing functions
	  ----------------------------------------
	  
	  Generates and provides easing functions based on baseFunction definitions
	  
	  A call to easingFunction.get('functionName') returns a function that can be passed:
	    @param [number]: Progress 0-1
	    @param [number] (optional): Amp modifier, only accepted in some easing functions
	                  and is used to adjust overall strength
	    @return [number]: Eased progress
	    
	  We can generate new functions by sending an easing function through easingFunction.extend(name, method).
	  Which will make nameIn, nameOut and nameInOut functions available to use.
	    
	  Easing functions from Robert Penner
	  http://www.robertpenner.com/easing/
	    
	  Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
	  https://github.com/gre/bezier-easing/blob/master/index.js  
	  https://github.com/gre/bezier-easing/blob/master/LICENSE
	
	  Anticipate easing created by Elliot Gino
	  https://twitter.com/ElliotGeno
	*/
	// Imports
	var DEFAULT_BACK_STRENGTH = 1.525;
	var DEFAULT_POW_STRENGTH = 2;
	
	/*
	  Each of these base functions is an easeIn
	  
	  On init, we use .mirror and .reverse to generate easeInOut and
	  easeOut functions respectively.
	*/
	var baseEasing = {
	  ease: function (progress) {
	    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_POW_STRENGTH : arguments[1];
	    return Math.pow(progress, strength);
	  },
	  circ: function (progress) {
	    return 1 - Math.sin(Math.acos(progress));
	  },
	  back: function (progress) {
	    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	    return progress * progress * ((strength + 1) * progress - strength);
	  }
	};
	
	// Utility functions
	var generatePowerEasing = function (strength) {
	  return function (progress) {
	    return baseEasing.ease(progress, strength);
	  };
	};
	
	['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
	  return baseEasing[easingName] = generatePowerEasing(i + 3);
	});
	
	// Generate in/out/inOut variations
	for (var key in baseEasing) {
	  if (baseEasing.hasOwnProperty(key)) {
	    var easingFunction = (0, _createEasing2.default)(baseEasing[key]);
	    baseEasing[key + 'In'] = easingFunction.in;
	    baseEasing[key + 'Out'] = easingFunction.out;
	    baseEasing[key + 'InOut'] = easingFunction.inOut;
	  }
	}
	
	baseEasing.linear = function (progress) {
	  return progress;
	};
	baseEasing.anticipate = function (progress) {
	  var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	  return (progress *= 2) < 1 ? 0.5 * baseEasing.backIn(progress, strength) : 0.5 * (2 - Math.pow(2, -10 * (progress - 1)));
	};
	
	baseEasing.createVariations = _createEasing2.default;
	baseEasing.cubicBezier = _createBezier2.default;
	baseEasing.modify = function (easing) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return function (progress) {
	    return easing.apply(undefined, [progress].concat(args));
	  };
	};
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUEwQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSx3QkFBd0IsS0FBeEI7QUFDTixJQUFNLHVCQUF1QixDQUF2Qjs7Ozs7Ozs7QUFRTixJQUFNLGFBQWE7QUFDakIsUUFBTSxVQUFDLFFBQUQ7UUFBVyxpRUFBVztvQkFBeUIsVUFBWTtHQUEzRDtBQUNOLFFBQU07V0FBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0dBQVo7QUFDTixRQUFNLFVBQUMsUUFBRDtRQUFXLGlFQUFXO1dBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7R0FBaEQ7Q0FIRjs7O0FBT04sSUFBTSxzQkFBc0IsVUFBQyxRQUFEO1NBQWMsVUFBQyxRQUFEO1dBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCO0dBQWQ7Q0FBZDs7QUFFNUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO1NBQW1CLFdBQVcsVUFBWCxJQUF5QixvQkFBb0IsSUFBSSxDQUFKLENBQTdDO0NBQW5CLENBQXBDOzs7QUFHQSxLQUFLLElBQUksR0FBSixJQUFXLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDbEMsUUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUFqQixDQUQ0QjtBQUVsQyxlQUFjLFVBQWQsSUFBeUIsZUFBZSxFQUFmLENBRlM7QUFHbEMsZUFBYyxXQUFkLElBQTBCLGVBQWUsR0FBZixDQUhRO0FBSWxDLGVBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKTTtHQUFwQztDQURGOztBQVNBLFdBQVcsTUFBWCxHQUFvQjtTQUFZO0NBQVo7QUFDcEIsV0FBVyxVQUFYLEdBQXdCLFVBQUMsUUFBRDtNQUFXLGlFQUFXO1NBQzVDLENBQUUsWUFBVSxDQUFWLENBQUQsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBTSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBTixHQUErQyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBWCxDQUFQLENBQWhCLENBQVA7Q0FEL0M7O0FBR3hCLFdBQVcsZ0JBQVg7QUFDQSxXQUFXLFdBQVg7QUFDQSxXQUFXLE1BQVgsR0FBb0IsVUFBQyxNQUFEO29DQUFZOzs7O1NBQVMsVUFBQyxRQUFEO1dBQWMseUJBQU8saUJBQWEsS0FBcEI7R0FBZDtDQUFyQjs7a0JBRUwiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEVhc2luZyBmdW5jdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICBcbiAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgXG4gIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICBcbiAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICBcbiAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICBcbiAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmNvbnN0IGJhc2VFYXNpbmcgPSB7XG4gIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgYmFjazogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aClcbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG5jb25zdCBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gKHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MpID0+IGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaCgoZWFzaW5nTmFtZSwgaSkgPT4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpKTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAobGV0IGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==

/***/ },
/* 390 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createEasingFunction;
	/*
	  Mirror easing
	  
	  Mirrors the provided easing function, used here for mirroring an
	  easeIn into an easeInOut
	  
	  @param [number]: Progress, from 0 - 1, of current shift
	  @param [function]: The easing function to mirror
	  @returns [number]: The easing-adjusted delta
	*/
	var mirrorEasing = function (method) {
	  return function (progress, strength) {
	    return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
	  };
	};
	
	/*
	  Reverse easing
	  
	  Reverses the output of the provided easing function, used for flipping easeIn
	  curve to an easeOut.
	  
	  @param [number]: Progress, from 0 - 1, of current shift
	  @param [function]: The easing function to reverse
	  @returns [number]: The easing-adjusted delta
	*/
	var reverseEasing = function (method) {
	  return function (progress, strength) {
	    return 1 - method(1 - progress, strength);
	  };
	};
	
	/*
	  Easing class
	
	  If provided easing function, returns easing function with 
	  in/out/inOut variations
	
	  If provided four arguments, returns new Bezier class instead.
	*/
	function createEasingFunction(method) {
	  var easingFunction = function (progress, strength) {
	    return method(progress, strength);
	  };
	
	  easingFunction.in = function (progress, strength) {
	    return method(progress, strength);
	  };
	  easingFunction.out = reverseEasing(method);
	  easingFunction.inOut = mirrorEasing(method);
	
	  return easingFunction;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCOzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtTQUFZLFVBQUMsUUFBRCxFQUFXLFFBQVg7V0FBd0IsUUFBQyxJQUFZLEdBQVosR0FBbUIsT0FBTyxJQUFJLFFBQUosRUFBYyxRQUFyQixJQUFpQyxDQUFqQyxHQUFxQyxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBSixDQUFMLEVBQW9CLFFBQTNCLENBQUosQ0FBRCxHQUE2QyxDQUE3QztHQUFqRjtDQUFaOzs7Ozs7Ozs7Ozs7QUFZckIsSUFBTSxnQkFBZ0IsVUFBQyxNQUFEO1NBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtXQUF3QixJQUFJLE9BQU8sSUFBSSxRQUFKLEVBQWMsUUFBckIsQ0FBSjtHQUF4QjtDQUFaOzs7Ozs7Ozs7O0FBVVAsU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQztBQUNuRCxNQUFJLGlCQUFpQixVQUFDLFFBQUQsRUFBVyxRQUFYO1dBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtHQUF4QixDQUQ4Qjs7QUFHbkQsaUJBQWUsRUFBZixHQUFvQixVQUFDLFFBQUQsRUFBVyxRQUFYO1dBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtHQUF4QixDQUgrQjtBQUluRCxpQkFBZSxHQUFmLEdBQXFCLGNBQWMsTUFBZCxDQUFyQixDQUptRDtBQUtuRCxpQkFBZSxLQUFmLEdBQXVCLGFBQWEsTUFBYixDQUF2QixDQUxtRDs7QUFPbkQsU0FBTyxjQUFQLENBUG1EO0NBQXRDIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBNaXJyb3IgZWFzaW5nXG4gIFxuICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCBtaXJyb3JFYXNpbmcgPSAobWV0aG9kKSA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIFxuLypcbiAgUmV2ZXJzZSBlYXNpbmdcbiAgXG4gIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCByZXZlcnNlRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgRWFzaW5nIGNsYXNzXG5cbiAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgbGV0IGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbiAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbiJdfQ==

/***/ },
/* 391 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = cubicBezier;
	/*
	  Bezier function generator
	    
	  Gaëtan Renaudeau's BezierEasing
	  https://github.com/gre/bezier-easing/blob/master/index.js  
	  https://github.com/gre/bezier-easing/blob/master/LICENSE
	  You're a hero
	  
	  Use
	  
	    var easeOut = new Bezier(.17,.67,.83,.67),
	      x = easeOut(0.5); // returns 0.627...
	*/
	
	// Constants
	var NEWTON_ITERATIONS = 8;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;
	var K_SPLINE_TABLE_SIZE = 11;
	var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
	var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
	
	// Helper methods
	var a = function (a1, a2) {
	  return 1.0 - 3.0 * a2 + 3.0 * a1;
	};
	var b = function (a1, a2) {
	  return 3.0 * a2 - 6.0 * a1;
	};
	var c = function (a1) {
	  return 3.0 * a1;
	};
	
	var getSlope = function (t, a1, a2) {
	  return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
	};
	
	var calcBezier = function (t, a1, a2) {
	  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
	};
	
	/*
	  Create a cubic bezier resolver
	*/
	function cubicBezier(mX1, mY1, mX2, mY2) {
	  var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
	  var _precomputed = false;
	
	  var binarySubdivide = function (aX, aA, aB) {
	    var i = 0;
	    var currentX = void 0;
	    var currentT = void 0;
	
	    do {
	      currentT = aA + (aB - aA) / 2.0;
	      currentX = calcBezier(currentT, mX1, mX2) - aX;
	      if (currentX > 0.0) {
	        aB = currentT;
	      } else {
	        aA = currentT;
	      }
	    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	    return currentT;
	  };
	
	  var newtonRaphsonIterate = function (aX, aGuessT) {
	    var i = 0;
	    var currentSlope = 0;
	    var currentX = void 0;
	
	    for (; i < NEWTON_ITERATIONS; ++i) {
	      currentSlope = getSlope(aGuessT, mX1, mX2);
	
	      if (currentSlope === 0.0) {
	        return aGuessT;
	      }
	
	      currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	      aGuessT -= currentX / currentSlope;
	    }
	
	    return aGuessT;
	  };
	
	  var calcSampleValues = function () {
	    for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
	      sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
	    }
	  };
	
	  var getTForX = function (aX) {
	    var intervalStart = 0.0;
	    var currentSample = 1;
	    var lastSample = K_SPLINE_TABLE_SIZE - 1;
	    var dist = 0.0;
	    var guessForT = 0.0;
	    var initialSlope = 0.0;
	
	    for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
	      intervalStart += K_SAMPLE_STEP_SIZE;
	    }
	
	    --currentSample;
	
	    dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
	    guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
	
	    initialSlope = getSlope(guessForT, mX1, mX2);
	
	    // If slope is greater than min
	    if (initialSlope >= NEWTON_MIN_SLOPE) {
	      return newtonRaphsonIterate(aX, guessForT);
	      // Slope is equal to min
	    } else if (initialSlope === 0.0) {
	        return guessForT;
	        // Slope is less than min
	      } else {
	          return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
	        }
	  };
	
	  var precompute = function () {
	    _precomputed = true;
	    if (mX1 != mY1 || mX2 != mY2) {
	      calcSampleValues();
	    }
	  };
	
	  var resolver = function (aX) {
	    var returnValue = void 0;
	
	    if (!_precomputed) {
	      precompute();
	    }
	
	    // If linear gradient, return X as T
	    if (mX1 === mY1 && mX2 === mY2) {
	      returnValue = aX;
	
	      // If at start, return 0
	    } else if (aX === 0) {
	        returnValue = 0;
	
	        // If at end, return 1
	      } else if (aX === 1) {
	          returnValue = 1;
	        } else {
	          returnValue = calcBezier(getTForX(aX), mY1, mY2);
	        }
	
	    return returnValue;
	  };
	
	  return resolver;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ4QixJQUFNLG9CQUFvQixDQUFwQjtBQUNOLElBQU0sbUJBQW1CLEtBQW5CO0FBQ04sSUFBTSx3QkFBd0IsU0FBeEI7QUFDTixJQUFNLDZCQUE2QixFQUE3QjtBQUNOLElBQU0sc0JBQXNCLEVBQXRCO0FBQ04sSUFBTSxxQkFBcUIsT0FBTyxzQkFBc0IsR0FBdEIsQ0FBUDtBQUMzQixJQUFNLHFCQUFzQixPQUFPLFlBQVAsS0FBd0IsV0FBeEI7OztBQUc1QixJQUFNLElBQUksVUFBQyxFQUFELEVBQUssRUFBTDtTQUFZLE1BQU0sTUFBTSxFQUFOLEdBQVcsTUFBTSxFQUFOO0NBQTdCO0FBQ1YsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7U0FBWSxNQUFNLEVBQU4sR0FBVyxNQUFNLEVBQU47Q0FBdkI7QUFDVixJQUFNLElBQUksVUFBQyxFQUFEO1NBQVEsTUFBTSxFQUFOO0NBQVI7O0FBRVYsSUFBTSxXQUFXLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSO1NBQWUsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxFQUFGLENBQWhEO0NBQWY7O0FBRWpCLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtTQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUYsRUFBTSxFQUFOLElBQVksQ0FBWixHQUFnQixFQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBQUQsR0FBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQWxDLENBQUQsR0FBNEMsQ0FBNUM7Q0FBZjs7Ozs7QUFLSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUM7QUFDdEQsTUFBTSxlQUFlLHFCQUFxQixJQUFJLFlBQUosQ0FBaUIsbUJBQWpCLENBQXJCLEdBQTZELElBQUksS0FBSixDQUFVLG1CQUFWLENBQTdELENBRGlDO0FBRXRELE1BQUksZUFBZSxLQUFmLENBRmtEOztBQUl0RCxNQUFNLGtCQUFrQixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFnQjtBQUN0QyxRQUFJLElBQUksQ0FBSixDQURrQztBQUV0QyxRQUFJLGlCQUFKLENBRnNDO0FBR3RDLFFBQUksaUJBQUosQ0FIc0M7O0FBS3RDLE9BQUc7QUFDRCxpQkFBVyxLQUFLLENBQUMsS0FBSyxFQUFMLENBQUQsR0FBWSxHQUFaLENBRGY7QUFFRCxpQkFBVyxXQUFXLFFBQVgsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsSUFBaUMsRUFBakMsQ0FGVjtBQUdELFVBQUksV0FBVyxHQUFYLEVBQWdCO0FBQ2xCLGFBQUssUUFBTCxDQURrQjtPQUFwQixNQUVPO0FBQ0wsYUFBSyxRQUFMLENBREs7T0FGUDtLQUhGLFFBUVMsS0FBSyxHQUFMLENBQVMsUUFBVCxJQUFxQixxQkFBckIsSUFBOEMsRUFBRSxDQUFGLEdBQU0sMEJBQU4sRUFiakI7O0FBZXRDLFdBQU8sUUFBUCxDQWZzQztHQUFoQixDQUo4Qjs7QUFzQnRELE1BQU0sdUJBQXVCLFVBQUMsRUFBRCxFQUFLLE9BQUwsRUFBaUI7QUFDNUMsUUFBSSxJQUFJLENBQUosQ0FEd0M7QUFFNUMsUUFBSSxlQUFlLENBQWYsQ0FGd0M7QUFHNUMsUUFBSSxpQkFBSixDQUg0Qzs7QUFLNUMsV0FBTyxJQUFJLGlCQUFKLEVBQXVCLEVBQUUsQ0FBRixFQUFLO0FBQ2pDLHFCQUFlLFNBQVMsT0FBVCxFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQUFmLENBRGlDOztBQUdqQyxVQUFJLGlCQUFpQixHQUFqQixFQUFzQjtBQUN4QixlQUFPLE9BQVAsQ0FEd0I7T0FBMUI7O0FBSUEsaUJBQVcsV0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLElBQWdDLEVBQWhDLENBUHNCO0FBUWpDLGlCQUFXLFdBQVcsWUFBWCxDQVJzQjtLQUFuQzs7QUFXQSxXQUFPLE9BQVAsQ0FoQjRDO0dBQWpCLENBdEJ5Qjs7QUF5Q3RELE1BQU0sbUJBQW1CLFlBQU07QUFDN0IsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksbUJBQUosRUFBeUIsRUFBRSxDQUFGLEVBQUs7QUFDNUMsbUJBQWEsQ0FBYixJQUFrQixXQUFXLElBQUksa0JBQUosRUFBd0IsR0FBbkMsRUFBd0MsR0FBeEMsQ0FBbEIsQ0FENEM7S0FBOUM7R0FEdUIsQ0F6QzZCOztBQStDdEQsTUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3ZCLFFBQUksZ0JBQWdCLEdBQWhCLENBRG1CO0FBRXZCLFFBQUksZ0JBQWdCLENBQWhCLENBRm1CO0FBR3ZCLFFBQUksYUFBYSxzQkFBc0IsQ0FBdEIsQ0FITTtBQUl2QixRQUFJLE9BQU8sR0FBUCxDQUptQjtBQUt2QixRQUFJLFlBQVksR0FBWixDQUxtQjtBQU12QixRQUFJLGVBQWUsR0FBZixDQU5tQjs7QUFRdkIsV0FBTyxpQkFBaUIsVUFBakIsSUFBK0IsYUFBYSxhQUFiLEtBQStCLEVBQS9CLEVBQW1DLEVBQUUsYUFBRixFQUFpQjtBQUN4Rix1QkFBaUIsa0JBQWpCLENBRHdGO0tBQTFGOztBQUlBLE1BQUUsYUFBRixDQVp1Qjs7QUFjdkIsV0FBTyxDQUFDLEtBQUssYUFBYSxhQUFiLENBQUwsQ0FBRCxJQUFzQyxhQUFhLGdCQUFjLENBQWQsQ0FBYixHQUFnQyxhQUFhLGFBQWIsQ0FBaEMsQ0FBdEMsQ0FkZ0I7QUFldkIsZ0JBQVksZ0JBQWdCLE9BQU8sa0JBQVAsQ0FmTDs7QUFpQnZCLG1CQUFlLFNBQVMsU0FBVCxFQUFvQixHQUFwQixFQUF5QixHQUF6QixDQUFmOzs7QUFqQnVCLFFBb0JuQixnQkFBZ0IsZ0JBQWhCLEVBQWtDO0FBQ3BDLGFBQU8scUJBQXFCLEVBQXJCLEVBQXlCLFNBQXpCLENBQVA7O0FBRG9DLEtBQXRDLE1BR08sSUFBSSxpQkFBaUIsR0FBakIsRUFBc0I7QUFDL0IsZUFBTyxTQUFQOztBQUQrQixPQUExQixNQUdBO0FBQ0wsaUJBQU8sZ0JBQWdCLEVBQWhCLEVBQW9CLGFBQXBCLEVBQW1DLGdCQUFnQixrQkFBaEIsQ0FBMUMsQ0FESztTQUhBO0dBdkJRLENBL0NxQzs7QUE4RXRELE1BQU0sYUFBYSxZQUFNO0FBQ3ZCLG1CQUFlLElBQWYsQ0FEdUI7QUFFdkIsUUFBSSxPQUFPLEdBQVAsSUFBYyxPQUFPLEdBQVAsRUFBWTtBQUM1Qix5QkFENEI7S0FBOUI7R0FGaUIsQ0E5RW1DOztBQXFGdEQsTUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3ZCLFFBQUksb0JBQUosQ0FEdUI7O0FBR3ZCLFFBQUksQ0FBQyxZQUFELEVBQWU7QUFDakIsbUJBRGlCO0tBQW5COzs7QUFIdUIsUUFRbkIsUUFBUSxHQUFSLElBQWUsUUFBUSxHQUFSLEVBQWE7QUFDOUIsb0JBQWMsRUFBZDs7O0FBRDhCLEtBQWhDLE1BSU8sSUFBSSxPQUFPLENBQVAsRUFBVTtBQUNuQixzQkFBYyxDQUFkOzs7QUFEbUIsT0FBZCxNQUlBLElBQUksT0FBTyxDQUFQLEVBQVU7QUFDbkIsd0JBQWMsQ0FBZCxDQURtQjtTQUFkLE1BR0E7QUFDTCx3QkFBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQsQ0FESztTQUhBOztBQU9QLFdBQU8sV0FBUCxDQXZCdUI7R0FBUixDQXJGcUM7O0FBK0d0RCxTQUFPLFFBQVAsQ0EvR3NEO0NBQXpDIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgXG4gIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gIFlvdSdyZSBhIGhlcm9cbiAgXG4gIFVzZVxuICBcbiAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xuY29uc3QgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuY29uc3QgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuY29uc3QgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbmNvbnN0IEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbmNvbnN0IEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbmNvbnN0IEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIEhlbHBlciBtZXRob2RzXG5jb25zdCBhID0gKGExLCBhMikgPT4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbmNvbnN0IGIgPSAoYTEsIGEyKSA9PiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuY29uc3QgYyA9IChhMSkgPT4gMy4wICogYTE7XG5cbmNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG5cbi8qXG4gIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICBsZXQgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYmluYXJ5U3ViZGl2aWRlID0gKGFYLCBhQSwgYUIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnRYO1xuICAgIGxldCBjdXJyZW50VDtcblxuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH07XG5cbiAgY29uc3QgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSAoYVgsIGFHdWVzc1QpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgbGV0IGN1cnJlbnRYO1xuXG4gICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICBcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH07XG5cbiAgY29uc3QgY2FsY1NhbXBsZVZhbHVlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRGb3JYID0gKGFYKSA9PiB7XG4gICAgbGV0IGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIGxldCBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgbGV0IGRpc3QgPSAwLjA7XG4gICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICBsZXQgaW5pdGlhbFNsb3BlID0gMC4wO1xuICAgICAgXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgfVxuICAgIFxuICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICBcbiAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgXG4gICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgXG4gICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlY29tcHV0ZSA9ICgpID0+IHtcbiAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICBsZXQgcmV0dXJuVmFsdWU7XG5cbiAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgcHJlY29tcHV0ZSgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICBcbiAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICBcbiAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cbiJdfQ==

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(350);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(355);
	
	var _utils = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Physics = function (_Action) {
	  _inherits(Physics, _Action);
	
	  function Physics() {
	    _classCallCheck(this, Physics);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));
	
	    _this.inactiveFrames = 0;
	    _this.calculatesVelocity = true;
	    return _this;
	  }
	
	  Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
	    this.hasChanged = false;
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	      var previousValue = value.prev;
	
	      // Apply acceleration
	      value.velocity += (0, _calc.speedPerFrame)(value.acceleration, elapsed);
	
	      // Apply friction
	      value.velocity *= Math.pow(1 - value.friction, elapsed / 100);
	
	      // Apply spring
	      if (value.spring && (0, _utils.isNum)(value.to)) {
	        var distanceToTarget = value.to - value.current;
	        value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
	      }
	
	      // Apply latest velocity
	      value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
	
	      // Detect bounce
	      if (value.min !== undefined && value.current < value.min || value.max !== undefined && value.current > value.max) {
	        value.velocity *= -value.bounce;
	      }
	
	      // Check if value has changed
	      if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || value.spring && value.current !== value.to) {
	        this.hasChanged = true;
	      }
	    }
	  };
	
	  Physics.prototype.onFrameEnd = function onFrameEnd() {
	    if (this.maxInactiveFrames !== Infinity) {
	      this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	      if (this.inactiveFrames >= this.maxInactiveFrames) {
	        this.complete();
	      }
	    }
	  };
	
	  return Physics;
	}(_Action3.default);
	
	Physics.prototype.defaultValueProp = 'velocity';
	Physics.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  acceleration: 0, // [number]: Acceleration to apply to value, in units per second
	  bounce: 0, // [number]: Factor to multiply velocity by on bounce
	  spring: 0, // [number]: Spring strength during 'string'
	  stopSpeed: 0.001, // [number]: Stop simulation under this speed
	  friction: 0 // [number]: Friction to apply per frame, 0-1
	});
	Physics.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  maxInactiveFrames: 3
	});
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLEdBQXFCOzBCQURqQixTQUNpQjs7c0NBQU47O0tBQU07O2lEQUNuQiwwQ0FBUyxLQUFULEdBRG1COztBQUVuQixVQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FGbUI7QUFHbkIsVUFBSyxrQkFBTCxHQUEwQixJQUExQixDQUhtQjs7R0FBckI7O0FBREksb0JBT0osNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDckMsU0FBSyxVQUFMLEdBQWtCLEtBQWxCLENBRHFDOztBQUdyQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURvQztBQUUxQyxVQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRm9DO0FBRzFDLFVBQU0sZ0JBQWdCLE1BQU0sSUFBTjs7O0FBSG9CLFdBTTFDLENBQU0sUUFBTixJQUFrQix5QkFBYyxNQUFNLFlBQU4sRUFBb0IsT0FBbEMsQ0FBbEI7OztBQU4wQyxXQVMxQyxDQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQU4sRUFBb0IsVUFBVSxHQUFWLENBQTNDOzs7QUFUMEMsVUFZdEMsTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNuQyxZQUFNLG1CQUFtQixNQUFNLEVBQU4sR0FBVyxNQUFNLE9BQU4sQ0FERDtBQUVuQyxjQUFNLFFBQU4sSUFBa0IsbUJBQW1CLHlCQUFjLE1BQU0sTUFBTixFQUFjLE9BQTVCLENBQW5CLENBRmlCO09BQXJDOzs7QUFaMEMsV0FrQjFDLENBQU0sT0FBTixJQUFpQix5QkFBYyxNQUFNLFFBQU4sRUFBZ0IsT0FBOUIsQ0FBakI7OztBQWxCMEMsVUFxQnRDLEtBQUMsQ0FBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFOLElBQWUsTUFBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFOLEVBQVk7QUFDcEgsY0FBTSxRQUFOLElBQWtCLENBQUUsTUFBTSxNQUFOLENBRGdHO09BQXRIOzs7QUFyQjBDLFVBMEJ0QyxNQUFNLE9BQU4sS0FBa0IsYUFBbEIsSUFBbUMsS0FBSyxHQUFMLENBQVMsTUFBTSxRQUFOLENBQVQsSUFBNEIsTUFBTSxTQUFOLElBQW9CLE1BQU0sTUFBTixJQUFnQixNQUFNLE9BQU4sS0FBa0IsTUFBTSxFQUFOLEVBQVc7QUFDbEksYUFBSyxVQUFMLEdBQWtCLElBQWxCLENBRGtJO09BQXBJO0tBMUJGOzs7QUFWRSxvQkEwQ0osbUNBQWE7QUFDWCxRQUFJLEtBQUssaUJBQUwsS0FBMkIsUUFBM0IsRUFBcUM7QUFDdkMsV0FBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FETDs7QUFHdkMsVUFBSSxLQUFLLGNBQUwsSUFBdUIsS0FBSyxpQkFBTCxFQUF3QjtBQUNqRCxhQUFLLFFBQUwsR0FEaUQ7T0FBbkQ7S0FIRjs7O1NBM0NFOzs7QUFxRE4sUUFBUSxTQUFSLENBQWtCLGdCQUFsQixHQUFxQyxVQUFyQztBQUNBLFFBQVEsU0FBUixDQUFrQixZQUFsQixHQUFpQyxpQkFBTyxrQkFBUCxDQUEwQjtBQUN6RCxnQkFBYyxDQUFkO0FBQ0EsVUFBUSxDQUFSO0FBQ0EsVUFBUSxDQUFSO0FBQ0EsYUFBVyxLQUFYO0FBQ0EsWUFBVSxDQUFWO0FBTHlELENBQTFCLENBQWpDO0FBT0EsUUFBUSxTQUFSLENBQWtCLFlBQWxCLEdBQWlDLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3pELHFCQUFtQixDQUFuQjtDQUQrQixDQUFqQzs7a0JBSWUiLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gIH1cblxuICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKj0gKDEgLSB2YWx1ZS5mcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgdmFsdWUuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgLy8gRGV0ZWN0IGJvdW5jZVxuICAgICAgaWYgKCh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50IDwgdmFsdWUubWluKSB8fCAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA+IHZhbHVlLm1heCkpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLSB2YWx1ZS5ib3VuY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8ICh2YWx1ZS5zcHJpbmcgJiYgdmFsdWUuY3VycmVudCAhPT0gdmFsdWUudG8pKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GcmFtZUVuZCgpIHtcbiAgICBpZiAodGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyAhPT0gSW5maW5pdHkpIHtcbiAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3ZlbG9jaXR5JztcblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gQWN0aW9uLmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljcztcbiJdfQ==

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Action2 = __webpack_require__(350);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(394);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(355);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Scrape x/y coordinates from provided event
	
	  @param [event]
	  @return [object]
	*/
	var mouseEventToPoint = function (e) {
	  return {
	    x: e.pageX,
	    y: e.pageY
	  };
	};
	
	var touchEventToPoint = function (_ref) {
	  var changedTouches = _ref.changedTouches;
	  return {
	    x: changedTouches[0].clientX,
	    y: changedTouches[0].clientY
	  };
	};
	
	var createPointer = function (e) {
	  return e.touches ? new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint) : new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint);
	};
	
	var getActualEvent = function (e) {
	  return e.originalEvent || e;
	};
	
	var Track = function (_Action) {
	  _inherits(Track, _Action);
	
	  function Track() {
	    _classCallCheck(this, Track);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Track.prototype.start = function start(input) {
	    _Action.prototype.start.call(this);
	
	    if (input) {
	      this.input = input.state ? input : createPointer(getActualEvent(input));
	    }
	
	    this.inputOffset = {};
	    this.inputOrigin = _extends({}, this.input.state);
	    this.input.start();
	  };
	
	  Track.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	    this.input.stop();
	  };
	
	  Track.prototype.onUpdate = function onUpdate(track, frameStamp, elapsed) {
	    this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	
	      if (this.inputOffset.hasOwnProperty(key)) {
	        var value = this.values[key];
	        var inputProp = value.hasOwnProperty('watch') ? value.watch : key;
	
	        if (value.direct) {
	          value.current = this.input.state[inputProp];
	        } else {
	          value.current = value.from + this.inputOffset[inputProp];
	        }
	
	        // Smooth value if we have smoothing
	        if (value.smooth) {
	          value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
	        }
	      }
	    }
	  };
	
	  return Track;
	}(_Action3.default);
	
	Track.prototype.defaultValueProp = 'watch';
	Track.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  direct: false
	});
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtTQUFRO0FBQ2hDLE9BQUcsRUFBRSxLQUFGO0FBQ0gsT0FBRyxFQUFFLEtBQUY7O0NBRnFCOztBQUsxQixJQUFNLG9CQUFvQjtNQUFHO1NBQXNCO0FBQ2pELE9BQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsT0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRnFCOztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7U0FBTyxFQUFFLE9BQUYsR0FDM0Isc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRDJCLEdBRTNCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUYyQjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7U0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFakI7Ozs7Ozs7OztrQkFDSix1QkFBTSxPQUFPO0FBQ1gsc0JBQU0sS0FBTixZQURXOztBQUdYLFFBQUksS0FBSixFQUFXO0FBQ1QsV0FBSyxLQUFMLEdBQWEsTUFBTSxLQUFOLEdBQWMsS0FBZCxHQUFzQixjQUFjLGVBQWUsS0FBZixDQUFkLENBQXRCLENBREo7S0FBWDs7QUFJQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkIsQ0FQVztBQVFYLFNBQUssV0FBTCxnQkFBd0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUF4QixDQVJXO0FBU1gsU0FBSyxLQUFMLENBQVcsS0FBWCxHQVRXOzs7QUFEVCxrQkFhSix1QkFBTztBQUNMLHNCQUFNLElBQU4sWUFESztBQUVMLFNBQUssS0FBTCxDQUFXLElBQVgsR0FGSzs7O0FBYkgsa0JBa0JKLDZCQUFTLE9BQU8sWUFBWSxTQUFTO0FBQ25DLFNBQUssV0FBTCxHQUFtQixrQkFBTyxLQUFLLFdBQUwsRUFBa0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUE1QyxDQURtQzs7QUFHbkMsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQzFDLFVBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEb0M7O0FBRzFDLFVBQUksS0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLEdBQWhDLENBQUosRUFBMEM7QUFDeEMsWUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQURrQztBQUV4QyxZQUFNLFlBQVksTUFBTSxjQUFOLENBQXFCLE9BQXJCLElBQWdDLE1BQU0sS0FBTixHQUFjLEdBQTlDLENBRnNCOztBQUl4QyxZQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2hCLGdCQUFNLE9BQU4sR0FBZ0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixTQUFqQixDQUFoQixDQURnQjtTQUFsQixNQUVPO0FBQ0wsZ0JBQU0sT0FBTixHQUFnQixNQUFNLElBQU4sR0FBYSxLQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FBYixDQURYO1NBRlA7OztBQUp3QyxZQVdwQyxNQUFNLE1BQU4sRUFBYztBQUNoQixnQkFBTSxPQUFOLEdBQWdCLGtCQUFPLE1BQU0sT0FBTixFQUFlLE1BQU0sSUFBTixFQUFZLE9BQWxDLEVBQTJDLE1BQU0sTUFBTixDQUEzRCxDQURnQjtTQUFsQjtPQVhGO0tBSEY7OztTQXJCRTs7O0FBMkNOLE1BQU0sU0FBTixDQUFnQixnQkFBaEIsR0FBbUMsT0FBbkM7QUFDQSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDdkQsVUFBUSxLQUFSO0NBRDZCLENBQS9COztrQkFJZSIsImZpbGUiOiJUcmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi4vaW5wdXQvUG9pbnRlcic7XG5pbXBvcnQgeyBzbW9vdGgsIG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgQHBhcmFtIFtldmVudF1cbiAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/XG4gIG5ldyBQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogXG4gIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGFydChpbnB1dCkge1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICB0aGlzLmlucHV0T3JpZ2luID0geyAuLi50aGlzLmlucHV0LnN0YXRlIH07XG4gICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG4gICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gIH1cblxuICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3dhdGNoJykgPyB2YWx1ZS53YXRjaCA6IGtleTtcblxuICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbaW5wdXRQcm9wXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbaW5wdXRQcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGlyZWN0OiBmYWxzZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(395);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pointer = function (_Input) {
	  _inherits(Pointer, _Input);
	
	  function Pointer(initialState, moveEvent, eventToPoint) {
	    _classCallCheck(this, Pointer);
	
	    var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));
	
	    _this.eventToPoint = eventToPoint;
	    _this.moveEvent = moveEvent;
	    _this.boundLatest = _this.latest.bind(_this);
	    return _this;
	  }
	
	  Pointer.prototype.latest = function latest(e) {
	    _Input.prototype.latest.call(this, this.eventToPoint(e));
	    e.preventDefault();
	  };
	
	  Pointer.prototype.start = function start() {
	    _Input.prototype.start.call(this);
	    document.documentElement.addEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  Pointer.prototype.stop = function stop() {
	    _Input.prototype.stop.call(this);
	    document.documentElement.removeEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsT0FDbkIsQ0FBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1EOzBCQURoQyxTQUNnQzs7aURBQ2pELGtCQUFNLFlBQU4sR0FEaUQ7O0FBRWpELFVBQUssWUFBTCxHQUFvQixZQUFwQixDQUZpRDtBQUdqRCxVQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FIaUQ7QUFJakQsVUFBSyxXQUFMLEdBQW1CLE1BQUssTUFBTCxDQUFZLElBQVosT0FBbkIsQ0FKaUQ7O0dBQW5EOztBQURtQixvQkFRbkIseUJBQU8sR0FBRztBQUNSLHFCQUFNLE1BQU4sWUFBYSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBYixFQURRO0FBRVIsTUFBRSxjQUFGLEdBRlE7OztBQVJTLG9CQWFuQix5QkFBUTtBQUNOLHFCQUFNLEtBQU4sWUFETTtBQUVOLGFBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUFMLEVBQWdCLEtBQUssV0FBTCxDQUExRCxDQUZNOzs7QUFiVyxvQkFrQm5CLHVCQUFPO0FBQ0wscUJBQU0sSUFBTixZQURLO0FBRUwsYUFBUyxlQUFULENBQXlCLG1CQUF6QixDQUE2QyxLQUFLLFNBQUwsRUFBZ0IsS0FBSyxXQUFMLENBQTdELENBRks7OztTQWxCWSIsImZpbGUiOiJQb2ludGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgSW5wdXQge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgc3VwZXIoaW5pdGlhbFN0YXRlKTtcbiAgICB0aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICB0aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICB0aGlzLmJvdW5kTGF0ZXN0ID0gdGhpcy5sYXRlc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGxhdGVzdChlKSB7XG4gICAgc3VwZXIubGF0ZXN0KHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfVxufVxuIl19

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(351);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _utils = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Task) {
	  _inherits(Input, _Task);
	
	  function Input(initialValues, poll) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, _Task.call(this));
	
	    _this.state = initialValues;
	
	    if ((0, _utils.isFunc)(poll)) {
	      _this.onFrameStart = function () {
	        return _this.latest(_this.poll());
	      };
	    }
	    return _this;
	  }
	
	  /*
	    Manually add latest values
	     @param [object]
	  */
	
	
	  Input.prototype.latest = function latest(props) {
	    this.state = _extends({}, this.state, props);
	  };
	
	  return Input;
	}(_Task3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsS0FDbkIsQ0FBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDOzBCQURkLE9BQ2M7O2lEQUMvQixrQkFEK0I7O0FBRS9CLFVBQUssS0FBTCxHQUFhLGFBQWIsQ0FGK0I7O0FBSS9CLFFBQUksbUJBQU8sSUFBUCxDQUFKLEVBQWtCO0FBQ2hCLFlBQUssWUFBTCxHQUFvQjtlQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaO09BQU4sQ0FESjtLQUFsQjtpQkFKK0I7R0FBakM7Ozs7Ozs7O0FBRG1CLGtCQWVuQix5QkFBTyxPQUFPO0FBQ1osU0FBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsRUFBZSxNQUFqQyxDQURZOzs7U0FmSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2svVGFzayc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAqL1xuICBsYXRlc3QocHJvcHMpIHtcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICB9XG59XG4iXX0=

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _timeline = __webpack_require__(397);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _utils = __webpack_require__(349);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	exports.default = function (tweens, props) {
	  var propsIsDuration = (0, _utils.isNum)(props);
	  var interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
	  var at = 0;
	  var timelineDefinition = tweens.map(function (tween) {
	    var def = { tween: tween, at: at };
	    at += interval;
	    return def;
	  });
	
	  return (0, _timeline2.default)(timelineDefinition, props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sbUJBQW1CLEdBQW5COztrQkFFUyxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ2hDLE1BQU0sa0JBQWtCLGtCQUFNLEtBQU4sQ0FBbEIsQ0FEMEI7QUFFaEMsTUFBTSxXQUFXLGtCQUFrQixLQUFsQixHQUEwQixRQUFRLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsR0FBcUMsZ0JBQTdDLENBRlg7QUFHaEMsTUFBSSxLQUFLLENBQUwsQ0FINEI7QUFJaEMsTUFBTSxxQkFBcUIsT0FBTyxHQUFQLENBQVcsVUFBQyxLQUFELEVBQVc7QUFDL0MsUUFBTSxNQUFNLEVBQUUsWUFBRixFQUFTLE1BQVQsRUFBTixDQUR5QztBQUUvQyxVQUFNLFFBQU4sQ0FGK0M7QUFHL0MsV0FBTyxHQUFQLENBSCtDO0dBQVgsQ0FBaEMsQ0FKMEI7O0FBVWhDLFNBQU8sd0JBQVMsa0JBQVQsRUFBNkIsS0FBN0IsQ0FBUCxDQVZnQztDQUFuQiIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVsaW5lIGZyb20gJy4vdGltZWxpbmUnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgKHR3ZWVucywgcHJvcHMpID0+IHtcbiAgY29uc3QgcHJvcHNJc0R1cmF0aW9uID0gaXNOdW0ocHJvcHMpO1xuICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNEdXJhdGlvbiA/IHByb3BzIDogcHJvcHMgPyBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMIDogREVGQVVMVF9JTlRFUlZBTDtcbiAgbGV0IGF0ID0gMDtcbiAgY29uc3QgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcCgodHdlZW4pID0+IHtcbiAgICBjb25zdCBkZWYgPSB7IHR3ZWVuLCBhdCB9O1xuICAgIGF0ICs9IGludGVydmFsO1xuICAgIHJldHVybiBkZWY7XG4gIH0pO1xuXG4gIHJldHVybiB0aW1lbGluZSh0aW1lbGluZURlZmluaXRpb24sIHByb3BzKTtcbn07Il19

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = timeline;
	
	var _Tween = __webpack_require__(388);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(389);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(355);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	  @param [array]
	    Sequential array of tweens, each item can be a tween or definition obj:
	
	    [
	      new Tween(),
	      stagger(),
	      timeline(),
	      {
	        tween: new Tween(),
	        at: 100,
	        offset: "+=100"
	      }
	    ]
	*/
	var analyze = function (defs) {
	  var timeline = [];
	  var numDefs = defs.length;
	  var currentPlayhead = 0;
	
	  var _loop = function (i) {
	    var def = defs[i];
	    var defIsObj = def.tween ? true : false;
	    var tween = defIsObj ? def.tween : def;
	
	    if (defIsObj) {
	      if (def.offset !== undefined) {
	        currentPlayhead = (0, _calc.relativeValue)(currentPlayhead, def.offset);
	      } else if (def.at !== undefined) {
	        currentPlayhead = def.at;
	      }
	    }
	
	    var duration = 0;
	    for (var key in tween.values) {
	      if (tween.values.hasOwnProperty(key)) {
	        var value = tween.values[key];
	        duration = Math.max(duration, value.duration);
	      }
	    }
	
	    timeline.push({
	      from: currentPlayhead,
	      duration: duration,
	      fire: function (time) {
	        return tween.seekTime(time);
	      }
	    });
	
	    currentPlayhead += duration;
	  };
	
	  for (var i = 0; i < numDefs; i++) {
	    _loop(i);
	  }
	
	  return { totalTime: currentPlayhead, timeline: timeline };
	};
	
	var setTweens = function (_ref) {
	  var timeline = _ref.timeline;
	  var timelineLength = _ref.timelineLength;
	  var values = _ref.values;
	  var duration = _ref.duration;
	
	  for (var i = 0; i < timelineLength; i++) {
	    var _tween = timeline[i];
	    var tweenTime = values.p.current * duration - _tween.from;
	
	    if (tweenTime >= -50 && tweenTime <= _tween.duration + 50) {
	      _tween.fire(tweenTime);
	    }
	  }
	};
	
	function timeline(def) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _analyze = analyze(def);
	
	  var totalTime = _analyze.totalTime;
	  var timeline = _analyze.timeline;
	
	
	  return new _Tween2.default(_extends({
	    ease: _presetEasing2.default.linear
	  }, props, {
	    duration: totalTime,
	    values: {
	      p: 1
	    },
	    timeline: timeline,
	    timelineLength: timeline.length,
	    onRender: setTweens
	  }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQW9Fd0I7O0FBcEV4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTSxVQUFVLFVBQUMsSUFBRCxFQUFVO0FBQ3hCLE1BQU0sV0FBVyxFQUFYLENBRGtCO0FBRXhCLE1BQU0sVUFBVSxLQUFLLE1BQUwsQ0FGUTtBQUd4QixNQUFJLGtCQUFrQixDQUFsQixDQUhvQjs7d0JBS2Y7QUFDUCxRQUFNLE1BQU0sS0FBSyxDQUFMLENBQU47QUFDTixRQUFNLFdBQVcsSUFBSSxLQUFKLEdBQVksSUFBWixHQUFtQixLQUFuQjtBQUNqQixRQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6Qjs7QUFFZCxRQUFJLFFBQUosRUFBYztBQUNaLFVBQUksSUFBSSxNQUFKLEtBQWUsU0FBZixFQUEwQjtBQUM1QiwwQkFBa0IseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBakQsQ0FENEI7T0FBOUIsTUFFTyxJQUFJLElBQUksRUFBSixLQUFXLFNBQVgsRUFBc0I7QUFDL0IsMEJBQWtCLElBQUksRUFBSixDQURhO09BQTFCO0tBSFQ7O0FBUUEsUUFBSSxXQUFXLENBQVg7QUFDSixTQUFLLElBQUksR0FBSixJQUFXLE1BQU0sTUFBTixFQUFjO0FBQzVCLFVBQUksTUFBTSxNQUFOLENBQWEsY0FBYixDQUE0QixHQUE1QixDQUFKLEVBQXNDO0FBQ3BDLFlBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FEOEI7QUFFcEMsbUJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGb0M7T0FBdEM7S0FERjs7QUFPQSxhQUFTLElBQVQsQ0FBYztBQUNaLFlBQU0sZUFBTjtBQUNBLGdCQUFVLFFBQVY7QUFDQSxZQUFNLFVBQUMsSUFBRDtlQUFVLE1BQU0sUUFBTixDQUFlLElBQWY7T0FBVjtLQUhSOztBQU1BLHVCQUFtQixRQUFuQjtJQWhDc0I7O0FBS3hCLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQUosRUFBYSxHQUE3QixFQUFrQztVQUF6QixHQUF5QjtHQUFsQzs7QUE4QkEsU0FBTyxFQUFFLFdBQVcsZUFBWCxFQUE0QixrQkFBOUIsRUFBUCxDQW5Dd0I7Q0FBVjs7QUFzQ2hCLElBQU0sWUFBWSxnQkFBb0Q7TUFBakQseUJBQWlEO01BQXZDLHFDQUF1QztNQUF2QixxQkFBdUI7TUFBZix5QkFBZTs7QUFDcEUsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBSixFQUFvQixHQUFwQyxFQUF5QztBQUN2QyxRQUFNLFNBQVEsU0FBUyxDQUFULENBQVIsQ0FEaUM7QUFFdkMsUUFBTSxZQUFZLE1BQUMsQ0FBTyxDQUFQLENBQVMsT0FBVCxHQUFtQixRQUFuQixHQUErQixPQUFNLElBQU4sQ0FGWDs7QUFJdkMsUUFBSSxhQUFhLENBQUMsRUFBRCxJQUFPLGFBQWEsT0FBTSxRQUFOLEdBQWlCLEVBQWpCLEVBQXFCO0FBQ3hELGFBQU0sSUFBTixDQUFXLFNBQVgsRUFEd0Q7S0FBMUQ7R0FKRjtDQURnQjs7QUFXSCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBbUM7TUFBWiw4REFBUSxrQkFBSTs7aUJBQ2hCLFFBQVEsR0FBUixFQURnQjs7TUFDeEMsK0JBRHdDO01BQzdCLDZCQUQ2Qjs7O0FBR2hELFNBQU87QUFDTCxVQUFNLHVCQUFPLE1BQVA7S0FDSDtBQUNILGNBQVUsU0FBVjtBQUNBLFlBQVE7QUFDTixTQUFHLENBQUg7S0FERjtBQUdBLGNBQVUsUUFBVjtBQUNBLG9CQUFnQixTQUFTLE1BQVQ7QUFDaEIsY0FBVSxTQUFWO0lBVEssQ0FBUCxDQUhnRDtDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyByZWxhdGl2ZVZhbHVlIH0gZnJvbSAnLi9jYWxjJztcblxuLypcbiAgQHBhcmFtIFthcnJheV1cbiAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgW1xuICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICBzdGFnZ2VyKCksXG4gICAgICB0aW1lbGluZSgpLFxuICAgICAge1xuICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgIGF0OiAxMDAsXG4gICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICB9XG4gICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICBjb25zdCBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFBsYXloZWFkID0gcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpO1xuICAgICAgfSBlbHNlIGlmIChkZWYuYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UGxheWhlYWQgPSBkZWYuYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICBmb3IgKGxldCBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZmlyZTogKHRpbWUpID0+IHR3ZWVuLnNlZWtUaW1lKHRpbWUpXG4gICAgfSk7XG5cbiAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmUgfTtcbn07XG5cbmNvbnN0IHNldFR3ZWVucyA9ICh7IHRpbWVsaW5lLCB0aW1lbGluZUxlbmd0aCwgdmFsdWVzLCBkdXJhdGlvbiB9KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHR3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgY29uc3QgdHdlZW5UaW1lID0gKHZhbHVlcy5wLmN1cnJlbnQgKiBkdXJhdGlvbikgLSB0d2Vlbi5mcm9tO1xuXG4gICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IHR3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICBjb25zdCB7IHRvdGFsVGltZSwgdGltZWxpbmUgfSA9IGFuYWx5emUoZGVmKTtcblxuICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgIC4uLnByb3BzLFxuICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgdmFsdWVzOiB7XG4gICAgICBwOiAxXG4gICAgfSxcbiAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gIH0pO1xufSJdfQ==

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(386);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element, adapter) {
	  if (element[SAVE_PROP]) {
	    return element[SAVE_PROP];
	  } else {
	    var flow = new _Flow2.default({ element: element, adapter: adapter });
	
	    // Bind adapter to element
	    Object.defineProperty(element, SAVE_PROP, {
	      enumerable: false,
	      writable: false,
	      value: flow
	    });
	
	    return flow;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLFlBQVksV0FBWjs7a0JBRVMsVUFBQyxPQUFELEVBQVUsT0FBVixFQUFzQjtBQUNuQyxNQUFJLFFBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3RCLFdBQU8sUUFBUSxTQUFSLENBQVAsQ0FEc0I7R0FBeEIsTUFFTztBQUNMLFFBQU0sT0FBTyxtQkFBUyxFQUFFLGdCQUFGLEVBQVcsZ0JBQVgsRUFBVCxDQUFQOzs7QUFERCxVQUlMLENBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN4QyxrQkFBWSxLQUFaO0FBQ0EsZ0JBQVUsS0FBVjtBQUNBLGFBQU8sSUFBUDtLQUhGLEVBSks7O0FBVUwsV0FBTyxJQUFQLENBVks7R0FGUDtDQURhIiwiZmlsZSI6ImdldC1mbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb3cgZnJvbSAnLi4vRmxvdyc7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCwgYWRhcHRlcikgPT4ge1xuICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmbG93ID0gbmV3IEZsb3coeyBlbGVtZW50LCBhZGFwdGVyIH0pO1xuXG4gICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmbG93XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxvdztcbiAgfVxufTtcblxuXG4iXX0=

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(355);
	
	var createMapper = exports.createMapper = function (input, output) {
	  var mapLength = input.length;
	  var finalIndex = mapLength - 1;
	
	  return function (value) {
	    // If value outside minimum input range, quickly return
	    if (value <= input[0]) {
	      return output[0];
	    }
	
	    // If value outside maximum input range, quickly return
	    if (value >= input[finalIndex]) {
	      return output[finalIndex];
	    }
	
	    // If within overall input range, find specific range
	    for (var i = 1; i < mapLength; i++) {
	      if (value < input[i] || i === finalIndex) {
	        var progressInRange = (0, _calc.getProgressFromValue)(value, input[i - 1], input[i]);
	        return (0, _calc.getValueFromProgress)(progressInRange, output[i - 1], output[i]);
	      }
	    }
	  };
	};
	
	var circularMotion = exports.circularMotion = function (v, key, _ref) {
	  var values = _ref.values;
	
	  var originX = values.originX ? values.originX.current : 0;
	  var originY = values.originY ? values.originY.current : 0;
	
	  return (0, _calc.pointFromAngleAndDistance)({
	    x: originX,
	    y: originY
	  }, values.angle.current, values.distance.current)[key];
	};
	
	/*
	  Combine transformers into one function that calls every
	  transformer in the array and returns the result
	
	  @param [array]
	  @return [function]
	*/
	var chain = exports.chain = function (transformers) {
	  var numTransformers = transformers.length;
	  var i = 0;
	
	  /*
	    @param [number]
	    @param [string]
	    @param [Action]
	    @return [number]
	  */
	  return function (v, key, a) {
	    for (i = 0; i < numTransformers; i++) {
	      v = transformers[i](v, key, a);
	    }
	
	    return v;
	  };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTSxzQ0FBZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzdDLE1BQU0sWUFBWSxNQUFNLE1BQU4sQ0FEMkI7QUFFN0MsTUFBTSxhQUFhLFlBQVksQ0FBWixDQUYwQjs7QUFJN0MsU0FBTyxVQUFDLEtBQUQsRUFBVzs7QUFFaEIsUUFBSSxTQUFTLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ3JCLGFBQU8sT0FBTyxDQUFQLENBQVAsQ0FEcUI7S0FBdkI7OztBQUZnQixRQU9aLFNBQVMsTUFBTSxVQUFOLENBQVQsRUFBNEI7QUFDOUIsYUFBTyxPQUFPLFVBQVAsQ0FBUCxDQUQ4QjtLQUFoQzs7O0FBUGdCLFNBWVgsSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQUosRUFBZSxHQUEvQixFQUFvQztBQUNsQyxVQUFJLFFBQVEsTUFBTSxDQUFOLENBQVIsSUFBb0IsTUFBTSxVQUFOLEVBQWtCO0FBQ3hDLFlBQU0sa0JBQWtCLGdDQUFxQixLQUFyQixFQUE0QixNQUFNLElBQUksQ0FBSixDQUFsQyxFQUEwQyxNQUFNLENBQU4sQ0FBMUMsQ0FBbEIsQ0FEa0M7QUFFeEMsZUFBTyxnQ0FBcUIsZUFBckIsRUFBc0MsT0FBTyxJQUFJLENBQUosQ0FBN0MsRUFBcUQsT0FBTyxDQUFQLENBQXJELENBQVAsQ0FGd0M7T0FBMUM7S0FERjtHQVpLLENBSnNDO0NBQW5COztBQXlCckIsSUFBTSwwQ0FBaUIsVUFBQyxDQUFELEVBQUksR0FBSixRQUF3QjtNQUFiLHFCQUFhOztBQUNwRCxNQUFNLFVBQVUsTUFBQyxDQUFPLE9BQVAsR0FBa0IsT0FBTyxPQUFQLENBQWUsT0FBZixHQUF5QixDQUE1QyxDQURvQztBQUVwRCxNQUFNLFVBQVUsTUFBQyxDQUFPLE9BQVAsR0FBa0IsT0FBTyxPQUFQLENBQWUsT0FBZixHQUF5QixDQUE1QyxDQUZvQzs7QUFJcEQsU0FBTyxxQ0FBMEI7QUFDL0IsT0FBRyxPQUFIO0FBQ0EsT0FBRyxPQUFIO0dBRkssRUFHSixPQUFPLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUhsQixDQUcyQyxHQUgzQyxDQUFQLENBSm9EO0NBQXhCOzs7Ozs7Ozs7QUFpQnZCLElBQU0sd0JBQVEsVUFBQyxZQUFELEVBQWtCO0FBQ3JDLE1BQU0sa0JBQWtCLGFBQWEsTUFBYixDQURhO0FBRXJDLE1BQUksSUFBSSxDQUFKOzs7Ozs7OztBQUZpQyxTQVU5QixVQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxFQUFlO0FBQ3BCLFNBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxlQUFKLEVBQXFCLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUksYUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQUosQ0FEb0M7S0FBdEM7O0FBSUEsV0FBTyxDQUFQLENBTG9CO0dBQWYsQ0FWOEI7Q0FBbEIiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFwcGVyID0gKGlucHV0LCBvdXRwdXQpID0+IHtcbiAgY29uc3QgbWFwTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gbWFwTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIC8vIElmIHdpdGhpbiBvdmVyYWxsIGlucHV0IHJhbmdlLCBmaW5kIHNwZWNpZmljIHJhbmdlXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSk7XG4gICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhwcm9ncmVzc0luUmFuZ2UsIG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4ge1xuICBjb25zdCBvcmlnaW5YID0gKHZhbHVlcy5vcmlnaW5YKSA/IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQgOiAwO1xuICBjb25zdCBvcmlnaW5ZID0gKHZhbHVlcy5vcmlnaW5ZKSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gIHJldHVybiBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKHtcbiAgICB4OiBvcmlnaW5YLFxuICAgIHk6IG9yaWdpblkgXG4gIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG5cbi8qXG4gIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICBAcGFyYW0gW2FycmF5XVxuICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAodHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICAvKlxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiAgKi9cbiAgcmV0dXJuICh2LCBrZXksIGEpID0+IHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07Il19

/***/ }
/******/ ]);