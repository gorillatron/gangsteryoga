
import routing from './routing'
import parallaxing from './parallaxing'

$('.subpage').scroll((event) => {
  event.stopPropagation()
  event.preventDefault()
  return false
})

routing()
parallaxing()