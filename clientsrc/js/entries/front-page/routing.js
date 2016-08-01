
import page from 'page'
import raf from 'raf'
import qraf from '../../lib/qraf'


let $openPage = null
let $openInstructorDetails = null


const showPage = (ctx, next) => {
  const {page} = ctx.params
  const $page = $(`.subpage.${page}`)

  if($page.length && !$page.is($openPage)) {
    $openPage = $page
    raf(_ => animateSubpageIn($openPage, next))
  }
  else if($page.length) {
    next()
  }
  else {
    console.warn("unhandled 404", page)
  }
  
}


const closeOpenPage = (ctx, next) => {
  if($openPage && !$openPage.hasClass(ctx.params.page)) {
    animateSubpageOut($openPage, _ => {
      $openPage = null
      next()
    })
  }
  else {
    next()
  }
}


const animatePageIn = (cb = f => f) => {
  setTimeout(_ => {
    $("#front-page").css('opacity', 1)
    cb()
  }, 66)
}


const animateSubpageIn = ($page, cb) => {
  qraf([
    _ => 
      $page.css({
        display: 'block',
        opacity: 0.00001
      }),
    _ => 
      $page.animate({
        opacity: 1
      }, 137, cb)
  ])
}


const animateSubpageOut = ($page, cb = f => f) => {
  raf(_ => {
    $page.animate({
      opacity: 0
    }, 137, _ => {
      $page.hide()
      cb()
    })
  })
}


const showInstructor = (ctx) => {
  const $instructorList = $('.instructor-list')
  const $instructorDetails = $(`.instructor-detail[data-instructor-key=${ctx.params.instructor}]`)
  
  $openInstructorDetails = $instructorDetails
  
  qraf([
    _ => $instructorList.fadeOut(137),
    _ => $openPage.scrollTop(0),
    _ => $instructorDetails
           .removeClass('display-none')
           .css('opacity', 0.0001)
           .animate({ opacity: 1 }, 137)
  ])
}


const closeOpenInstructor = (ctx, next) => {
  const $instructorList = $('.instructor-list')
  qraf([
    _ => $instructorList.fadeIn(137),
    $openInstructorDetails ?
       _ =>
        $openInstructorDetails
          .animate({ opacity: 0.0001 }, 137, () => {
            $openInstructorDetails.addClass('display-none')
            $openInstructorDetails = null
            next()
          })
      :
      next
  ])
}


const listenForEscapeButton = (cb) => {
  $('body').keyup(event => {
    (event.keyCode == 27 && $openPage) &&
      cb()
  })
}


page('/', closeOpenPage)
page('/:page', closeOpenPage, showPage)
page('/:page/*', showPage)
page('/instruktoerer/', closeOpenInstructor)
page('/instruktoerer/:instructor', closeOpenInstructor, showInstructor)


export default () => {
  animatePageIn()
  listenForEscapeButton(_ => history.back())
  page()
}



