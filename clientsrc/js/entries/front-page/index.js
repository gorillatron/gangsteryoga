
import video from '../../lib/video'
import gallery from '../../lib/gallery'


$(document).ready(() => {

   setTimeout(_ => {
      $("#front-page").css('opacity', 1)
    }, 66)

    gallery($('#gallery'))

    video($('#featured-video'))
    video($('#mobile-video'))

})
