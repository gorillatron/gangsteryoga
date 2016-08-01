
import page from 'page'
import raf from 'raf'



export default () => {

  let $openPage = null

  page('*', (ctx, next) => {
    animatePageIn()
    if($openPage) {
      animateSubpageOut($openPage, _ => {
        $openPage = null
        next()
      })
    }
    else {
      next()
    }
  })

  page('/', (ctx, next) => {
    if($openPage) {
      animateSubpageOut($openPage)
    }
  })

  page('/:page', (ctx, next) => {
    const {page} = ctx.params
    const $page = $(`.subpage.${page}`)

    if($page.length) {
      $openPage = $page
      raf(_ => animateSubpageIn($openPage))
    }
    else {
      console.warn("unhandled 404", page)
    }
    
    
  })

  page()

}


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




