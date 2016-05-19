
!(function() {
  
  var sidebar = document.getElementById("main-sidebar")
  var toggleButton = document.getElementById("menu-toggle")
  var menuClick$ = Rx.Observable.fromEvent(toggleButton, 'click')
  
  var open = false
  
  menuClick$
    .subscribe(function(event) {
      open = !open
      if(open) {
        sidebar.classList.add("open")
        toggleButton.classList.add("cross")
      }
      else {
        sidebar.classList.remove("open")
        toggleButton.classList.remove("cross")
      }
    })
  
})();
