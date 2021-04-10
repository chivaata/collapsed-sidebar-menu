var menu = document.querySelector(".sideNav");
var main = document.querySelector(".main-content");
var btn = document.querySelector(".openSideNav");
var open = false;
function toggleMenu() {
  if (!open) {
    open = true;
    menu.style.width = "200px";
    main.style.marginLeft = "200px";
    btn.innerHTML = "&lt";
  } else if (open) {
    open = false;
    menu.style.width = "0";
    main.style.marginLeft = "0";
    btn.innerHTML = "&gt";
  }
}
