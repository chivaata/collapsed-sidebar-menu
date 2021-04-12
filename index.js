///////////////screen sizes///////////////

// var mobile = window.matchMedia("(max-width:425px;)");
// var tablet = window.matchMedia("(max-width:768px;)");
// var laptop = window.matchMedia("(max-width:1440px;)");
// var bigScreen = window.matchMedia("(min-width:1441px;)");

//////////////////////////////////////////
var menu = document.querySelector(".sideNav");
var main = document.querySelector(".main-content");
var btn = document.querySelector(".openSideNav");
var open = false;

////////////////functions/////////////////
function toggleMenu() {
  console.log("click");
  if (!open) {
    open = true;
    btn.innerHTML = "&lt";
    menu.style.width = "160px";
    main.style.marginLeft = "160px";
  } else if (open) {
    open = false;
    btn.innerHTML = "&gt";
    menu.style.width = "0";
    main.style.marginLeft = "0";
  }
}
