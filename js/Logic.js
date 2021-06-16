const foods = document.getElementById("foods");
let hunger = document.getElementById("hunger");
let hp = document.getElementById("hp");

const pets = [
  { name: "Pipa", img: "../img/Feliz.png" },
  { name: "Mushi", img: "../img/Mushi sentado.png" },
];
const randomIndex = Math.floor(Math.random() * pets.length);
let pet = new Pet(pets[randomIndex].name, pets[randomIndex].img);

function attHunger() {
  hunger.innerText = pet.hungerPoints;
}

function attHp() {
  hp.innerText = pet.hp;
}

window.addEventListener("load", () => {
  pet.startHungerInterval(attHunger, attHp);
});

foods.addEventListener("click", () => {
  pet.hungerPoints += 10;
  attHunger();
});

// Sortear entre 2 pets ao carregar a pagina
// Exibir nome do pet

// Interação entre clicar em comida e aumentar contador de fome

// Alterar background-image para doente quando fome = 0 e saude diminuindo (talvez usando classes em css)
// Alterar background-image para morto quando ponto de saude = 0 (talvez usando classes em css)
// Bonus: Sons/música, função de carinho/dormir, tela inicial, dialogo, barras de saúde e fome
