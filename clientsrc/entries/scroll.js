
import raf from "raf"
import {Observable, Scheduler} from "rxjs"
import ensurepos from "../lib/ensurepos"


const container = document.getElementById("root-container")
const scrolls$ = Observable.fromEvent(window, "mousewheel")


const flipStarts$ = scrolls$
  .filter((ev) => ev.deltaY > 20 || ev.deltaY < -20)

flips$.subscribe(ev => {
  console.log(ev.deltaY) 
})