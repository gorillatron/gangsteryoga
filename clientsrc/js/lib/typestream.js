
import {Observable, Scheduler} from "rxjs"

/**
 * typestream.js
 * Stream text to a field like its being typed
 */
export default function typestream(opts) {
  
  const textarea = opts.el
  const text = opts.text || textarea.text()
  const words = text.split(" ")
  const words$ = Observable.from(words)
  const speed = opts.speed || 1.5

  textarea.on('keydown', e => e.preventDefault())

  textarea.text("")
  

  const typestream$ = words$
    .concatMap(x => 
      Observable.of(x)
        .delay(
          (Math.random() * 180 / speed) + ((x.length * 2.17) / speed)
    ))
    .concatMap(word => {
      const letters$ = Observable.from(word.split("").concat(" "))
      const typestream$ = letters$
        .concatMap(letter =>
          Observable.of(letter)
            .delay(
              (Math.random() * 220) / speed
            ))
      return typestream$
    })
  
  
  typestream$
    .subscribeOn(Scheduler.animationFrame)
    .subscribe(
      char => {
        let val = textarea.text() + char
        textarea.text(val)
      },
      null,
      _ => opts.onComplete && opts.onComplete()
      )
  
  return typestream$
}