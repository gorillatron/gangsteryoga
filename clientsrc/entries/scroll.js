
import raf from "raf"
import {Observable, Scheduler} from "rxjs"
import {tween, timeline, easing} from "popmotion"
import ensurepos from "../lib/ensurepos"
import currentwindowsize from "../lib/currentwindowsize"
import {translate3d} from "../lib/css"

const seperator = 80
const seperatorPadding = 40

const parallaxImagesContainer = document.querySelector("#parallax-images")
const parallaxImages = document.querySelectorAll("#parallax-images .img")
const fullBlocks = document.querySelectorAll("#content .block.full")
const scrolls$ = Observable.fromEvent(window, "mousewheel")
const windowsizes$ = Observable.fromEvent(window, 'resize')
  .throttleTime(33)
  .map(ev => currentwindowsize())
  .startWith(currentwindowsize())


const parallaxImageSize$ = windowsizes$.map((size) => size)


const setScrollTop = event => {
  const y = document.body.scrollTop * 0.760
  translate3d(parallaxImagesContainer, 0, -y)
}


parallaxImageSize$
  .subscribeOn(Scheduler.animationFrame)
  .subscribe(size => {
    parallaxImages.forEach(img => {
      img.style.height = size.y + seperator + "px"
    })
    fullBlocks.forEach(block => {
      block.style.height = size.y + "px"
    })
  })

scrolls$
  .subscribeOn(Scheduler.animationFrame)
  .subscribe(setScrollTop)


const downChevron = document.querySelector(".button.down")
const downChevronClicks$ = Observable.fromEvent(downChevron, "click")


downChevronClicks$.subscribe(() => {
  const animation = tween({
    values: {
      top: {
        ease: easing.easeOut,
        from: document.body.scrollTop,
        to: document.querySelector(".block.first").offsetTop - 20
      },
    },
    duration: 667,
    onFrame: (val) => {
      raf(() => window.scrollTo(0, val.top))
      raf(() => setScrollTop())
    }
  })
  animation.start()
})

raf(() => setScrollTop())

raf(() => {
  document.body.classList.add("show")
})