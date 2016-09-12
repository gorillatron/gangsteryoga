
import raf from "raf"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/pairwise'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/withLatestFrom'
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/delay'
import currentwindowsize from "./currentwindowsize"
import ensurepos from "./ensurepos"
import {translate} from "./css"


const windowsizes$ = Observable.fromEvent(window, 'resize')
    .throttleTime(33)
    .map(ev => currentwindowsize())
    .startWith(currentwindowsize())
    .share()


export default (config) => {

  const {target, maxOffsett} = config

  const mouseleaves$ = Observable.fromEvent(target, 'mouseleave')
  const mouseenters$ = Observable.fromEvent(target, 'mouseenter')

  const mousemoves$ = Observable.fromEvent(target, 'mousemove')
  const mousepos$ = mousemoves$
    .throttleTime(33)
    .map(ev => ({x: ev.clientX, y: ev.clientY}))

  const parallax$ = mousepos$.withLatestFrom(
    windowsizes$,
    (mpos, screen) => {
      
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
    target.addClass("animate-translate"))
    
  mouseenters$
    .delay(400)
    .subscribe(ev => 
      target.removeClass("animate-translate"))


  return parallax$
    

}