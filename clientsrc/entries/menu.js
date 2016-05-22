
const sidebar = document.getElementById("main-sidebar")
const toggleButton = document.getElementById("menu-toggle")
const menuClick$ = Rx.Observable.fromEvent(toggleButton, 'click')

let open = false

menuClick$
  .subscribe(event => {
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
