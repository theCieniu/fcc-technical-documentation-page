let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

burger.addEventListener("click", opened);

overlay.addEventListener("click", closed);

menu.addEventListener("click", closed);

function opened() {
  overlay.classList.remove("open");
  menu.classList.remove("open");
  burger.classList.add("open");
  console.log("open")
}

function closed() {
  overlay.classList.add("open");
  menu.classList.add("open");
  burger.classList.remove("open");
  console.log("closed")
}
