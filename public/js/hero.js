
var raf = window.requestAnimationFrame || function(cb) { setTimeout(cb, 33) }

/**
 * Hero Load page
 */

!(function() {
  
  

  function typeStream(opts) {
    var Observable = Rx.Observable
    
    var textarea = document.querySelectorAll(opts.el)[0]
    var text = opts.text || textarea.attributes.getNamedItem("data-text").value
    var words = text.split(" ")
    var words$ = Observable.from(words)
    
    
    var typestream$ = words$
      .concatMap(function(x) {
        return Observable.of(x)
          .delay(
            (Math.random() * 180) + (x.length * 1.57)
          )
      })
      .concatMap(function(word) {
        var letters$ = Observable.from(word.split("").concat(" "))
        var typestream$ = letters$
          .concatMap(function(letter) {
            return Observable.of(letter)
              .delay(
                (Math.random() * 120)
              )
          })
        return typestream$
      })
    
    
    textarea.focus()
    textarea.addEventListener('keydown', function(e) {
      e.preventDefault()
    })
    
    
    typestream$
      .subscribe(
        function next(char) {
          raf(function() {
            textarea.value = textarea.value + char
          })
        },
        null,
        function complete() {
          if(opts.onComplete) {
            opts.onComplete()
          }
        })
    
    return typestream$
  }
  
  var loader = document.getElementById("loader")
  var root = document.getElementById("root-container")
  var heroBackground = document.getElementById("hero-background")
  var logo = document.getElementById("main-logo")
  var backgroundUrl = heroBackground.attributes.getNamedItem("data-background").value
  
  var image = new Image()
  var load$ = Rx.Observable.fromEvent(image, 'load').take(1)
  
  image.src = backgroundUrl
  
  load$.subscribe(function() {
    
    raf(function() {
      heroBackground.style['background-image'] = 'url(' + backgroundUrl + ')'
    })
    
    raf(function() {
      root.classList.add("show")
    })
    
    raf(function() {
      loader.remove()
    })
    
    setTimeout(function() {
      
      raf(function() {
        logo.classList.add("show")
      })
      
      setTimeout(function() {
        typeStream({
          el: "#hero h1 textarea",
          onComplete: function() {
            setTimeout(function() {
              var arrow = document.querySelectorAll(".footer .arrow")[0]
              arrow.className = arrow.className + " show"
            }, 500)
          }
        })
      }, 1330)
      
    }, 600)
    
  })
    
})();



/**
 * Hero Parallaxing
 */

!(function() {
  
  var heroBackground = document.getElementById("hero-background")
  
  var screensizes$ = Rx.Observable.fromEvent(window, 'resize')
    .map(function(e) {
      return currentSize()
    })
    .throttle(66)
    .startWith(currentSize())
  
  
  var mousemoves$ = Rx.Observable.fromEvent(heroBackground, 'mousemove')
  var mousepos$ = mousemoves$.map(function(e) {
    return {x: e.clientX, y: e.clientY}
  })
  .throttle(66)
  
  
  var parallax$ = mousepos$.withLatestFrom(
    screensizes$,
    function(mpos, screen) {
      
      var maxOffsett = 7
      
      var screenCenterY = screen.y / 2
      var screenCenterX = screen.x / 2
      
      var offsettY = screenCenterY - mpos.y
      var offsettX = screenCenterX - mpos.x
      
      var offsetYPrct = ensurepos(offsettY) / screenCenterY * 100
      var offsetXPrct = ensurepos(offsettX) / screenCenterX * 100
      
      var top = maxOffsett / 100 * offsetYPrct
      var left = maxOffsett / 100 * offsetXPrct
      
      if(mpos.y > screenCenterY)
        top = -1 * top
      
      if(mpos.x > screenCenterX)
        left = -1 * left
      
      return {top: top, left: left}
    }
  )
  
  parallax$.subscribe(function(frame) {
    var transform = "translate(" +frame.left+ "px, " + frame.top + "px)"
    raf(function() {
      heroBackground.style.mozTransform = transform;
      heroBackground.style.msTransform = transform;
      heroBackground.style.webkitTransform = transform;
    })
  })
  
  function currentSize() {
    return {y: window.innerHeight, x: window.innerWidth}
  }

  function ensurepos(n) {
    return n > 0 ? n : -1 * n
  }

  
})();