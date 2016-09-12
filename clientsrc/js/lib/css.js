
export function applyTransform(el, transform) {
  el.style.mozTransform = transform
  el.style.msTransform = transform
  el.style.webkitTransform = transform
  return el
}

export function translate(el, x, y) {
  return applyTransform(el, "translate(" + x + "px, " + y + "px)")
}

export function translate3d(el, x = 0, y = 0, z = 0) {
  return applyTransform(el, `translate3d( ${x}px, ${y}px, ${z}px)`)
}

