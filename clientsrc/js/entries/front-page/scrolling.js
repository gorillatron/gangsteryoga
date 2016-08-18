
import raf from "raf"
import {Observable} from 'rxjs/Observable'
import filter from 'lodash/filter'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/distinctUntilChanged'
import typestream from '../../lib/typestream'


export default (config) => {

  const scrollTop = _ => $(document).scrollTop()

  const waypoints = $(".waypoint")
    .toArray()
    .map((el) => {
      return {
        el: $(el),
        hit: false
      } 
    })


  const scrollTops$ = Observable
    .fromEvent(window, 'scroll')
    .map(_ => scrollTop())
    .startWith(scrollTop())


  const scrolls$ = scrollTops$
    .map((scrollTop) => {
      const wps  = waypoints.filter(wp => {

        const windowWidth = $(window).width()

        let offsettAttr = 'data-waypoint-offset'

        if(windowWidth > 1600 && wp.el.attr('data-waypoint-offset-xlg')) {
          offsettAttr = 'data-waypoint-offset-xlg'
        }

        if(windowWidth > 900 && wp.el.attr('data-waypoint-offset-md')) {
          offsettAttr = 'data-waypoint-offset-md'
        }

        console.log(offsettAttr)
        const offset = parseInt(wp.el.attr(offsettAttr) || 300)


        return !wp.hit && wp.el.offset().top + offset < scrollTop
      })
      wps.forEach(wp => wp.hit = true)
      return wps
    })

  scrolls$.subscribe((waypoints) => {
    waypoints.forEach(wp => {
      wp.el.addClass("wp-in")
      if(wp.el.hasClass("wide-text")) {
        typestream({ el: wp.el.find(".text-content") })
      }
    })
  })

}