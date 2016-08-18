

const menu = $("#main-menu")
const toggleButton = $(".hamburger")
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
    toggleButton.addClass('close')
    menu.removeClass('closed')
    state.closeTimer = setTimeout(_ => setMenu(false), menuCloseTime)
  }
  else {
    menu.addClass('closed')
    toggleButton.removeClass('close')
  }
}
