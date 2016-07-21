
import raf from "raf"
import {Observable, Scheduler} from "rxjs"
import currentwindowsize from "./currentwindowsize"
import ensurepos from "./ensurepos"
import {translate} from "./css"

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