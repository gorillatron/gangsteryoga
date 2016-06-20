
export function toggleClass(el, predicate, [a, b]) {
  if(predicate) {
    el.classList.add(a)
    el.classList.remove(b)
  }
  else {
    el.classList.add(b)
    el.classList.remove(a)
  }
  return el
}