
import concat from 'lodash/concat'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/pairwise'
import 'rxjs/add/operator/throttleTime'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/withLatestFrom'
import 'rxjs/add/operator/delay'
import currentwindowsize from '../../lib/currentwindowsize'
import ensurepos from '../../lib/ensurepos'


const photoBlocks = $('.photo')
const textBlocks = $('.text')
const linkBlocks = $('.link')


const blocks = concat(photoBlocks, textBlocks, linkBlocks)

const scrollTop = _ => $(document).scrollTop()

const windowsizes$ = Observable.fromEvent(window, 'resize')
  .map(ev => currentwindowsize())
  .startWith(currentwindowsize())

const scrollTops$ = Observable.fromEvent(document, 'scroll')
  .map(ev => scrollTop())
  .startWith(scrollTop())

const scrollDeltas$ = scrollTops$
  .pairwise()
  .map(([prev, curr]) => ensurepos(curr - prev))

const scrollEasing$ = Observable.interval(330)
  .withLatestFrom(scrollDeltas$)


export default () => {
  
  scrollEasing$.subscribe(_ => {
   
  })

}