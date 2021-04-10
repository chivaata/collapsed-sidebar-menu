let openBtn = document.querySelector(".openSideNav");
openBtn.addEventListener("click", () => {
  showNav();
});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  hideNav();
});
function showNav() {
  document.querySelector(".sideNav").style.width = "200px";
  document.querySelector(".main-content").style.marginLeft = "200px";
}
function hideNav() {
  document.querySelector(".sideNav").style.width = "0";
  document.querySelector(".main-content").style.marginLeft = "0px";
}
