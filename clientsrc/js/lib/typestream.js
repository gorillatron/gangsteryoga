
import {Observable, Scheduler} from "rxjs"

/**
 * typestream.js
 * Stream text to a field like its being typed
 */
export default function typestream(opts) {
  
  const textarea = opts.el
  const text = opts.text || textarea.attributes.getNamedItem("data-text").value
  const words = text.split(" ")
  const words$ = Observable.from(words)
  const speed = opts.speed || 1

  textarea.addEventListener('keydown', e => e.preventDefault())

  const typestream$ = words$
    .concatMap(x => 
      Observable.of(x)
        .delay(
          (Math.random() * 180 / speed) + ((x.length * 1.57) / speed)
    ))
    .concatMap(word => {
      const letters$ = Observable.from(word.split("").concat(" "))
      const typestream$ = letters$
        .concatMap(letter =>
          Observable.of(letter)
            .delay(
              (Math.random() * 120) / speed
            ))
      return typestream$
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