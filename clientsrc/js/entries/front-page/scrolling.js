
import raf from "raf"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/distinctUntilChanged'
//import 'rxjs/add/operator/pairwise'
//import 'rxjs/add/operator/throttleTime'



const scrollTop = _ => $(document).scrollTop()


const scrollTops$ = Observable
  .fromEvent(window, 'scroll')
  .map(_ => ({ scrollTop: scrollTop() }))
  .share()


const scrolls$ = scrollTops$
  .scan((acc, scroll) => {
    console.log(acc, scroll)
    return {
      scrollTop: scroll.scrollTop,
      dir: acc.scrollTop < scroll.scrollTop ? "down" : "up"
    }
  })



export default (config) => {

  

}