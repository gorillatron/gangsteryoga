
import raf from 'raf'

const linked = (arr) => {
  const head = arr[0]
  const tail = arr.slice(1)
  return [head, tail]
}

const run = ([head, tail]) => {
  if(head) {
    raf(head)
    return run(linked(tail))
  }
}

export default (fns) => {
  return run(linked(fns))
}