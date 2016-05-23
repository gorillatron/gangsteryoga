

const sidebar = document.getElementById("main-sidebar")
const toggleButton = document.getElementById("menu-toggle")

let open = false

toggleButton.addEventListener("click", event => {
  open = !open
  if(open) {
    sidebar.classList.add("open")
    toggleButton.classList.add("cross")
  }
  else {
    sidebar.classList.remove("open")
    toggleButton.classList.remove("cross")
  }
})
