const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.style.cssText += 'transform:translateX(0)';
});

close.addEventListener("click", () => {
  nav.style.cssText = 'transform:translateX(-102%)';
});
