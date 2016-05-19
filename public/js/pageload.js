

!(function() {
  
  var Observable = Rx.Observable
  
  var text = "For de som tørr å møte seg selv."
  var words = text.split(" ")
  
  var input = document.querySelectorAll("#hero h1 textarea")[0]
  
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
  
  input.focus()
  
  typestream$
    .delay(937)
    .subscribe(
      function next(char) {
        input.value = input.value + char
      },
      null,
      function complete() {
        setTimeout(function() {
          var arrow = document.querySelectorAll(".footer .arrow")[0]
          arrow.className = arrow.className + " show"
        }, 500)
      })
  
})();