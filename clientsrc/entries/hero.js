
import raf from "raf"
import {Observable, Scheduler} from "rxjs"


function typeStream(opts) {
  
  var textarea = document.querySelectorAll(opts.el)[0]
  var text = opts.text || textarea.attributes.getNamedItem("data-text").value
  var words = text.split(" ")
  var words$ = Observable.from(words)
  
  
  var typestream$ = words$
    .concatMap(x => 
      Observable.of(x)
        .delay(
          (Math.random() * 180) + (x.length * 1.57)
    ))
    .concatMap(word => {
      var letters$ = Observable.from(word.split("").concat(" "))
      var typestream$ = letters$
        .concatMap(letter =>
          Observable.of(letter)
            .delay(
              (Math.random() * 120)
            ))
      return typestream$
    })
  
  
  textarea.focus()
  textarea.addEventListener('keydown', e => {
    e.preventDefault()
  })
  
  
  typestream$
    .subscribeOn(Scheduler.animationFrame)
    .subscribe(
      char => textarea.value = textarea.value + char,
      null,
      _ => opts.onComplete && opts.onComplete()
      )
  
  return typestream$
}

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
    
    setTimeout(_ => {
      typeStream({
        el: "#hero h1 textarea",
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

const screensizes$ = Observable.fromEvent(window, 'resize')
  .throttleTime(33)
  .map((e) => currentSize())
  .startWith(currentSize())


const mousemoves$ = Observable.fromEvent(document, 'mousemove')
const mousepos$ = mousemoves$
  .throttleTime(33)
  .map((e) => ({x: e.clientX, y: e.clientY}))


const parallax$ = mousepos$.withLatestFrom(
  screensizes$,
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

parallax$
  .subscribeOn(Scheduler.animationFrame)
  .subscribe(frame => {
    const transform = "translate(" +frame.left+ "px, " + frame.top + "px)"
    heroBackground.style.mozTransform = transform
    heroBackground.style.msTransform = transform
    heroBackground.style.webkitTransform = transform
  })

function currentSize() {
  return {y: window.innerHeight, x: window.innerWidth}
}

function ensurepos(n) {
  return n >= 0 ? n : -1 * n
}
