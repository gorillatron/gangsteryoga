
import page from 'page'
import raf from 'raf'


let openPage = null


const animatePageIn = ($page, cb) => {
  $page.show()
  raf(_ => {
    $page.animate({
      opacity: 1
    }, 137, cb)
  })
}


const animatePageOut = ($page, cb = f => f) => {
  raf(_ => {
    $page.animate({
      opacity: 0
    }, 137, _ => {
      $page.hide()
      cb()
    })
  })
}


page('/', (ctx, next) => {
  if(openPage) {
    animatePageOut(openPage)
  }
})


page('*', (ctx, next) => {
  if(openPage) {
    animatePageOut(openPage, next)
  }
  else {
    next()
  }
})


page('/:page', (ctx, next) => {
  const {page} = ctx.params
  const $page = $(`.content-container.${page}`)

  openPage = $page
  console.log("LOL")
  raf(_ => animatePageIn($page))
  
})


page()

setTimeout(_ => $("#front-page").css('opacity', 1), 66)

$('.content-container').on('mousewheel', e => e.preventDefault())