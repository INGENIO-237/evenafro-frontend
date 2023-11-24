
const telechargements = document.getElementById("telechargements");

const telechargementsReach = 7800;
let telechargementsCounter = 0;

setInterval(() => {
  if (telechargementsCounter < telechargementsReach) {
    telechargementsCounter += 1;
    telechargements.innerText = telechargementsCounter + "+";
  } else {
    clearInterval();
  }
}, 5);

const utilisateurs = document.getElementById("utilisateurs");

const utilisateursReach = 6500;
let utilisateursCounter = 0;

setInterval(() => {
  if (utilisateursCounter < utilisateursReach) {
    utilisateursCounter += 1;
    utilisateurs.innerText = utilisateursCounter + "+";
  } else {
    clearInterval();
  }
}, 5);

const annonces = document.getElementById("annonces");

const annoncesReach = 10000;
let annoncesCounter = 0;

setInterval(() => {
  if (annoncesCounter < annoncesReach) {
    annoncesCounter += 1;
    annonces.innerText = annoncesCounter + "+";
  } else {
    clearInterval();
  }
}, 5);
