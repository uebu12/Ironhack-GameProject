const foods = document.getElementById("foods");
 let hunger = document.getElementById("hunger");
 let hp = document.getElementById("hp");
// const pets = [
//   { name: "Pipa", img: "../img/Feliz.png" , artist: "vampeluso"},
//   { name: "Mushi", img: "../img/Mushi sentado.png", artist:"likanakaza" },
// ];
// const randomIndex = Math.floor(Math.random() * pets.length);
// let pet = new Pet(pets[randomIndex].name, pets[randomIndex].img);

 let petPlacement = document.getElementById("pet");
 let petName = document.getElementById("nome");

//Atualizar sprite e nome pro pet sorteado

// function petSprite(pet) {
//   if (pet.name === "Pipa") {
//     petPlacement.classList.add("petPipa");
//     petName.classList.add("nameAjst2");
//     petName.innerText = "Pipa & Pipo";
//     return;
//   } else {
//     petPlacement.classList.add("petMushi");
//     petName.classList.add("nameAjst");
//     petName.innerText = "Mushi";
//     return;
//   }
// }

// Atualizar sprite dependendo do hp e hunger

// function petStatus(petHp, petHunger) {
//   if (pet.name === "Pipa") {
//     if (petHp < 100 && petHp > 0 && petHunger === 0) {
//       petPlacement.classList.remove("petPipa");
//       petPlacement.classList.add("petPipaSick");
//       console.log("petHp < 100 && petHp > 0 && petHunger === 0");
//     } else if (petHp < 100 && petHunger > 0) {
//       petPlacement.classList.remove("petPipaSick");
//       petPlacement.classList.add("petPipa");
//       console.log("petHp < 100 && petHunger > 0");
//     } else if (petHp === 0) {
//       petPlacement.classList.remove("petPipaSick");
//       petPlacement.classList.remove("petPipa");
//       petPlacement.classList.add("petPipaDead");
//     }
//   } else if (pet.name === "Mushi") {
//     if (petHp < 100 && petHp > 0 && petHunger === 0) {
//       petPlacement.classList.remove("petMushi");
//       petPlacement.classList.add("petMushiSick");
//     } else if (petHp < 100 && petHunger > 0) {
//       petPlacement.classList.remove("petMushiSick");
//       petPlacement.classList.add("petMushi");
//     } else if (petHp === 0) {
//       petPlacement.classList.remove("petMushiSick");
//       petPlacement.classList.remove("petMushi");
//       petPlacement.classList.add("petMushiDead");
//     }
//   }
// }

// function attHunger() {
//   hunger.innerText = pet.hungerPoints;
//   if (pet.hp === 0) {
//   }
// }

// function attHp() {
//   hp.innerText = pet.hp;
// }

const game = new Game(petPlacement, petName, hunger, hp)

window.addEventListener("load", () => {
  game.pet.startHungerInterval(game.attHunger, game.attHp, game.petStatus);
  game.petSprite();
});

foods.addEventListener("click", () => {
  if (game.pet.hp > 0) {
    game.pet.hungerPoints += 40;

    game.attHunger();
  }
});


// window.location.reload()
