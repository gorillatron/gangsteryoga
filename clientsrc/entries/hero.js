
import raf from "raf"
import {Observable, Scheduler} from "rxjs"
import typestream from "../lib/typestream"
import ensurepos from "../lib/ensurepos"
import currentwindowsize from "../lib/currentwindowsize"
import {translate} from "../lib/transform"



/**
 * Hero Load animations
 */

const loader = document.getElementById("loader")
const root = document.getElementById("root-container")
const heroBackground = document.getElementById("hero-background")
const logo = document.getElementById("main-logo")
const backgroundUrl = heroBackground.attributes.getNamedItem("data-background").value

const image = new Image()
const load$ = Observable.fromEvent(image, 'load').take(1)

image.src = backgroundUrl

load$.subscribe(_ => {
  
  raf(_ => heroBackground.style['background-image'] = 'url(' + backgroundUrl + ')')
  raf(_ => root.classList.add("show"))
  raf(_ => loader.remove())
  
  setTimeout(_ => {
    
    raf(_ => logo.classList.add("show"))
    
    const textarea = document.querySelectorAll("#hero h1 textarea")[0]
    
    textarea.focus()
    textarea.addEventListener('keydown', e => {
      e.preventDefault()
    })
      
    setTimeout(_ => {
      typestream({
        el: textarea,
        onComplete: _ => {
          setTimeout(_ => {
            const arrow = document.querySelectorAll(".footer .arrow")[0]
            arrow.className = arrow.className + " show"
          }, 500)
        }
      })
    }, 1330)
    
  }, 600)
  
})



/**
 * Hero Parallaxing
 */

const hero = document.getElementById("hero")

const windowsizes$ = Observable.fromEvent(window, 'resize')
  .throttleTime(33)
  .map(ev => currentwindowsize())
  .startWith(currentwindowsize())

const mouseleaves$ = Observable.fromEvent(hero, 'mouseleave')
const mouseenters$ = Observable.fromEvent(hero, 'mouseenter')

const mousemoves$ = Observable.fromEvent(hero, 'mousemove')
const mousepos$ = mousemoves$
  .throttleTime(33)
  .map(ev => ({x: ev.clientX, y: ev.clientY}))


const parallax$ = mousepos$.withLatestFrom(
  windowsizes$,
  (mpos, screen) => {
    
    const maxOffsett = 5
    
    const screenCenterY = screen.y / 2
    const screenCenterX = screen.x / 2
    
    const offsettY = screenCenterY - mpos.y
    const offsettX = screenCenterX - mpos.x
    
    const offsetYPrct = ensurepos(offsettY) / screenCenterY * 100
    const offsetXPrct = ensurepos(offsettX) / screenCenterX * 100
    
    let top = maxOffsett / 100 * offsetYPrct
    let left = maxOffsett / 100 * offsetXPrct
    
    if(mpos.y > screenCenterY)
      top = -1 * top
    
    if(mpos.x > screenCenterX)
      left = -1 * left
    
    return {top, left}
  }
)


mouseleaves$.subscribe(ev => 
  hero.classList.add("animate-translate"))
  
mouseenters$
  .delay(400)
  .subscribe(ev => 
    hero.classList.remove("animate-translate"))


parallax$
  .subscribeOn(Scheduler.animationFrame)
  .subscribe(frame => 
    translate(heroBackground, frame.left, frame.top))