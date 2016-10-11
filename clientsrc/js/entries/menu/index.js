

$(document).ready(() => {


  const menu = $("#main-menu")
  const toggleButton = $(".hamburger")

  let menuCloseTime = 5 * 1000
  let state = {open: false, closeTimer: null}


  toggleButton.on("click", event => {
    setMenu(!state.open)
  })

  menu.on('click', (event) => {
    if(menu.hasClass('closed')) {
      event.preventDefault()
      return false
    }
  })

  const setMenu = open => {
    
    state.open = open

    $(document).off('click.menuclose')

    if(state.closeTimer) {
      clearTimeout(state.closeTimer)
      state.closeTimer = null
    }

    if(state.open) {
      menu.addClass("open")
      toggleButton.addClass('cross black')
      state.closeTimer = setTimeout(_ => setMenu(false), menuCloseTime)
    }
    else {
      menu.removeClass("open")
      toggleButton.removeClass('cross black')
    }
  }


})