
import raf from "raf"
import {Observable, Scheduler} from "rxjs"
import ensurepos from "../lib/ensurepos"
import currentwindowsize from "../lib/currentwindowsize"
import {translate} from "../lib/css"

const seperatorHeight = 240
const seperatorPadding = 40

const parallaxImagesContainer = document.querySelector("#parallax-images")
const parallaxImages = document.querySelectorAll("#parallax-images .img")
const fullBlocks = document.querySelectorAll("#content .block.full")
const scrolls$ = Observable.fromEvent(window, "mousewheel")
const windowsizes$ = Observable.fromEvent(window, 'resize')
  .throttleTime(33)
  .map(ev => currentwindowsize())
  .startWith(currentwindowsize())

const parallaxImageSize$ = windowsizes$.map(size => size)

parallaxImageSize$.subscribe(size => {
  parallaxImages.forEach(img => {
    img.style.height = size.y + ((seperatorHeight - seperatorPadding) / 2) + "px"
  })
  fullBlocks.forEach(block => {
    block.style.height = size.y + "px"
  })
})

scrolls$.subscribe(event => {
  const y = document.body.scrollTop * 0.8
  translate(parallaxImagesContainer, 0, -y)
})