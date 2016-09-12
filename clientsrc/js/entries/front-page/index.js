
import routing from './routing'
import parallaxing from './parallaxing'
import scrolling from './scrolling'

routing()

$(document).ready(() => {

  $('.subpage').scroll((event) => {
    event.stopPropagation()
    event.preventDefault()
    return false
  })

  
  scrolling()
  parallaxing()

})
