
export function translate(el, x, y) {
  const transform = "translate(" + x + "px, " + y + "px)"
  el.style.mozTransform = transform
  el.style.msTransform = transform
  el.style.webkitTransform = transform
  return el
}