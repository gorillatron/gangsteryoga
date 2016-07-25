
const sidebar = $("#main-sidebar")
const toggleButton = $("#cover .hamburger")
const nav = $("nav")
const cover = $("#cover")

let open = false

toggleButton.on("click", event => {
  open = !open
  console.log(nav.width())
  if(open) {
    cover.css('transform', 'translatex(-' + nav.outerWidth() + 'px)')
  }
  else {
    cover.css('transform', 'translatex(0px)')
  }
  cover.toggleClass("show-menu")
  toggleButton.toggleClass("cross")
})
