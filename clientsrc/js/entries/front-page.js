
import page from 'page'
import raf from 'raf'

let openPage = null

page('/', (ctx, next) => {
  if(openPage) {
    openPage.removeClass('pre-open open').addClass('closed')
  }
})

page('*', (ctx, next) => {
  if(openPage) {
    openPage.removeClass('pre-open open').addClass('closed')
  }
  next()
})

page('/:page', (ctx, next) => {
  const {page} = ctx.params
  const $page = $(`.content-container.${page}`)

  openPage = $page

  raf(_ => $page.addClass('pre-open'))
  setTimeout(_ => $page.addClass('open'), 33)
  
})


page()