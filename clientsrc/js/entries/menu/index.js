

const sidebar = $("#main-sidebar")
const toggleButton = $("#cover .hamburger")
const nav = $("#main-nav")
const cover = $("#cover")

let menuCloseTime = 5 * 1000
let state = {open: false, closeTimer: null}


toggleButton.on("click", event => {
  setMenu(!state.open)
})


const setMenu = open => {
  let transform = null

  state.open = open

  $(document).off('click.menuclose')

  if(state.closeTimer) {
    clearTimeout(state.closeTimer)
    state.closeTimer = null
  }

  if(state.open) {
    transform = 'translatex(-' + nav.outerWidth() + 'px)'
    setTimeout(_ => $(document).one('click.menuclose', _ => setMenu(false)))
    state.closeTimer = setTimeout(_ => setMenu(false), menuCloseTime)
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
}
