
import {Observable, Scheduler} from "rxjs"

const gallery = document.querySelectorAll(".gallery")[0]

const mousein$ = Observable.fromEvent(gallery, "mousein")
const mouseout$ = Observable.fromEvent(gallery, "mouseout")

const mousemoves$ = Observable.fromEvent(gallery, 'mousemove')

const mousepos$ = mousemoves$
  .throttleTime(33)
  .map(ev => ({x: ev.clientX, y: ev.clientY}))