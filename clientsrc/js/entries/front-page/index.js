
import video from '../../lib/video'
import gallery from '../../lib/gallery'
import minitooltip from 'minitooltip'


$(document).ready(() => {

   setTimeout(_ => {
      $("#front-page").css('opacity', 1)
    }, 66)

    gallery($('#gallery'))

    video($('#main-header'))
    video($('#mobile-video'))

})
