// On récupère les éléments HTML
const valueEl = document.getElementById("value");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");

// On initialise la valeur à 0
let value = 0;

// Fonction pour mettre à jour la valeur affichée à l'écran
function updateValue() {
  valueEl.textContent = value;
}

// Ajout d'un écouteur d'événement pour le bouton "Moins"
minusBtn.addEventListener("click", function() {
  if (value > 0) {
    value--;
    updateValue();
  }
});

// Ajout d'un écouteur d'événement pour le bouton "Plus"
plusBtn.addEventListener("click", function() {
  value++;
  updateValue();
});

// Ajout d'un écouteur d'événement pour le bouton "Reset"
resetBtn.addEventListener("click", function() {
  value = 0;
  updateValue();
});
