
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
          (Math.random() * 170) + (x.length * 1.5)
        )
    })
    .concatMap(function(word) {
      var letters$ = Observable.from(word.split("").concat(" "))
      var typestream$ = letters$
        .concatMap(function(letter) {
          return Observable.of(letter)
            .delay(
              (Math.random() * 110)
            )
        })
      return typestream$
    })
  
  
  textarea.focus()
  textarea.addEventListener('keydown', function(e) {
    e.preventDefault()
  })
  
  
  typestream$
    .delay(937)
    .subscribe(
      function next(char) {
        textarea.value = textarea.value + char
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
  
  typeStream({
    el: "#hero h1 textarea",
    onComplete: function() {
      setTimeout(function() {
        var arrow = document.querySelectorAll(".footer .arrow")[0]
        arrow.className = arrow.className + " show"
      }, 500)
    }
  })
  
})();
