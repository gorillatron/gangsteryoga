
const sidebar = $("#main-sidebar")
const toggleButton = $("#menu-toggle")

toggleButton.on("click", event => {
  sidebar.toggleClass("open")
  toggleButton.toggleClass("cross")
})
