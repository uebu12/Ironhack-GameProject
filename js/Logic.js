
let hunger = document.getElementById("hunger");
let hp = document.getElementById("hp");
let petPlacement = document.getElementById("pet");
let petName = document.getElementById("nome");
let foodContainer = document.getElementById("foods")


const game = new Game(petPlacement, petName, hunger, hp);
game.createFoodObjects()
game.foodObjects.forEach((food)=>{
  foodContainer.appendChild(food.domElement)
})

window.addEventListener("load", () => {
  game.startHungerInterval();
  game.petSprite();
});

// foodContainer.addEventListener("click", () => {
//   if (game.pet.hp > 0) {
//     game.pet.hungerPoints += 40;
// console.log("teste")
//     game.attHunger();
//   }
// });
Array.from(foodContainer.children).forEach((food)=>{
  food.addEventListener("click", ()=>{
    game.feeding(food)   
  })
})