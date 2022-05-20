const showButton = 800;
const Button = document.querySelector(".go-up")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showButton) {
    Button.classList.remove("hidden")
  } else {
    Button.classList.add("hidden")
  }
})

var scrollUp = window.pageYOffset;
getNavbar = document.getElementById("nav-bar");
window.onscroll = function() {
var scrollDown = window.pageYOffset;
  if (scrollUp > scrollDown) {
    getNavbar.style.top = "0";
  } else {
    getNavbar.style.top = "-100px";
  }
  scrollUp = scrollDown;
}

const li = document.querySelectorAll(".nav-models");
const sec = document.querySelectorAll("section");

function activeMenu(){
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);