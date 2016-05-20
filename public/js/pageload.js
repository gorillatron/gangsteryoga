
var raf = window.requestAnimationFrame || function(cb) { setTimeout(cb, 33) }


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

!(function() {
  
  var loader = document.getElementById("loader")
  var root = document.getElementById("root-container")
  var hero = document.getElementById("hero")
  var logo = document.getElementById("main-logo")
  var backgroundUrl = hero.attributes.getNamedItem("data-background").value
  
  var image = new Image()
  var load$ = Rx.Observable.fromEvent(image, 'load').take(1)
  
  image.src = backgroundUrl
  
  load$.subscribe(function() {
    
    raf(function() {
      hero.style['background-image'] = 'url(' + backgroundUrl + ')'
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
