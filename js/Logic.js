const foods = document.getElementById("foods");
let hunger = document.getElementById("hunger");
let hp = document.getElementById("hp");

const pets = [
  { name: "Pipa", img: "../img/Feliz.png" },
  { name: "Mushi", img: "../img/Mushi sentado.png" },
];
const randomIndex = Math.floor(Math.random() * pets.length);
let pet = new Pet(pets[randomIndex].name, pets[randomIndex].img);
let petPlacement = document.getElementById("pet");
let petName = document.getElementById("nome");
//Atualizar sprite e nome pro pet sorteado
function petSprite(pet) {
  if (pet.name === "Pipa") {
    petPlacement.classList.add("petPipa");
    petName.classList.add("nameAjst")
    petName.innerText = "Pipa e Pipo";
    return;
  } else {
    petPlacement.classList.add("petMushi");
    petName.innerText = "Mushi";
    return;
  }
}
// Atualizar sprite dependendo do hp e hunger
function pipaStatus(petHp, petHunger) {
  if (pet.name === "Pipa") {
    if (petHp < 100 && petHp > 0 && petHunger === 0) {
      petPlacement.classList.remove("petPipa");
      petPlacement.classList.add("petPipaSick");
    } else if (petHp < 100 && petHunger > 0) {
      petPlacement.classList.remove("petPipaSick");
      petPlacement.classList.add("petPipa");
    } else if (petHp === 0) {
      petPlacement.classList.remove("petPipaSick");
      petPlacement.classList.remove("petPipa");
      petPlacement.classList.add("petPipaDead");
    }
  }
}

function mushiStatus(petHp, petHunger) {
  if (pet.name === "Mushi") {
    if (petHp < 100 && petHp > 0 && petHunger === 0) {
      petPlacement.classList.remove("petMushi");
      petPlacement.classList.add("petMushiSick");
    } else if (petHp < 100 && petHunger > 0) {
      petPlacement.classList.remove("petMushiSick");
      petPlacement.classList.add("petMushi");
    } else if (petHp === 0) {
      petPlacement.classList.remove("petMushiSick");
      petPlacement.classList.remove("petMushi");
      petPlacement.classList.add("petMushiDead");
    }
  }
}

function attHunger() {
  hunger.innerText = pet.hungerPoints;
  if (pet.hp === 0) {
    return;
  }
}

function attHp() {
  hp.innerText = pet.hp;
}

window.addEventListener("load", () => {
  pet.startHungerInterval(attHunger, attHp);
  petSprite(pet);
  pipaStatus(pet.hp, pet.hungerPoints);
});

foods.addEventListener("click", () => {
  pet.hungerPoints += 40;
  attHunger();
});



// Alterar background-image para doente quando fome = 0 e saude diminuindo (talvez usando classes em css)
// Alterar background-image para morto quando ponto de saude = 0 (talvez usando classes em css)
// Bonus: Sons/música, função de carinho/dormir, tela inicial, dialogo, barras de saúde e fome
