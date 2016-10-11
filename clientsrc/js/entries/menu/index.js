

$(document).ready(() => {


  const menu = $("#main-menu")
  const root = $("#root")
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
    
    const menuWidth = menu.outerWidth()
    state.open = open

    $(document).off('click.menuclose')

    if(state.closeTimer) {
      clearTimeout(state.closeTimer)
      state.closeTimer = null
    }

    if(state.open) {
      root.css({transform: `translateX(-${menuWidth}px)`})
      toggleButton.css({position: `fixed`})
      menu.addClass("open")
      toggleButton.addClass('cross')
      state.closeTimer = setTimeout(_ => setMenu(false), menuCloseTime)
    }
    else {
      root.css({transform: `translateX(-${0}px)`})
      toggleButton.css({position: `absolute`})
      menu.removeClass("open")
      toggleButton.removeClass('cross')
    }
  }


})