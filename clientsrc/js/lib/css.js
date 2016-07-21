
export function applyTransform(el, transform) {
  el.style.mozTransform = transform
  el.style.msTransform = transform
  el.style.webkitTransform = transform
  return el
}

export function translate(el, x, y) {
  return applyTransform(el, "translate(" + x + "px, " + y + "px)")
}