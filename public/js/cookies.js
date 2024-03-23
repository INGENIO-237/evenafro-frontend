const cookies = document.getElementById("cookies");

window.addEventListener("load", () => {
  const cookiesHasBeenShownOnce = JSON.parse(localStorage.getItem("cookies"));

  cookiesHasBeenShownOnce ? dismissCookiesPopUp() : displayCookiesPopUp();
});

function persistUserChoice() {
  localStorage.setItem("cookies", JSON.stringify(true));
}

function dismissCookiesPopUp() {
  persistUserChoice();
  cookies.classList.add("dismiss");
}

function displayCookiesPopUp() {
  cookies.classList.remove("dismiss");
}
