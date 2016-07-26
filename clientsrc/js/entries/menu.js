
const sidebar = $("#main-sidebar")
const toggleButton = $("#cover .hamburger")
const nav = $("#main-nav")
const cover = $("#cover")

let open = false

toggleButton.on("click", event => {
  open = !open
  
  let transform = null

  if(open) {
    transform = 'translatex(-' + nav.outerWidth() + 'px)'
  }
  else {
    transform = 'translatex(0px)'
  }
  
  cover.css({
    '-ms-transform': transform,
    '-moz-transform': transform,
    '-webkit-transform': transform,
    'transform': transform
  })

  toggleButton.toggleClass("cross")
})
