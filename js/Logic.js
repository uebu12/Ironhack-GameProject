const foods = document.getElementById("foods");
let hunger = document.getElementById("hunger");
let hp = document.getElementById("hp");
let petPlacement = document.getElementById("pet");
let petName = document.getElementById("nome");

const game = new Game(petPlacement, petName, hunger, hp);

window.addEventListener("load", () => {
  game.startHungerInterval();
  game.petSprite();
});

foods.addEventListener("click", () => {
  if (game.pet.hp > 0) {
    game.pet.hungerPoints += 40;
console.log("teste")
    game.attHunger();
  }
});
