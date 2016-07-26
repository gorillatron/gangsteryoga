
import page from 'page'
import raf from 'raf'


let openPage = null


const animatePageIn = (cb = f => f) => {
  setTimeout(_ => {
    $("#front-page").css('opacity', 1)
    cb()
  }, 66)
}


const animateSubpageIn = ($page, cb) => {
  $page.show()
  raf(_ => {
    $page.animate({
      opacity: 1
    }, 137, cb)
  })
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


export default () => {

  page('*', (ctx, next) => {
    animatePageIn()
    if(openPage) {
      animateSubpageOut(openPage, next)
    }
    else {
      next()
    }
  })

  page('/', (ctx, next) => {
    if(openPage) {
      animateSubpageOut(openPage)
    }
  })

  page('/:page', (ctx, next) => {
    const {page} = ctx.params
    const $page = $(`.content-container.${page}`)

    openPage = $page
    console.log("LOL")
    raf(_ => animateSubpageIn($page))
    
  })

  page()

}

