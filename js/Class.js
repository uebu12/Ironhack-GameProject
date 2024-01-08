
class Game{
  constructor(petPlacement, petName, hunger, hp){
    this.list = [
      { name: "Pipa", img: "../img/Feliz.png" , artist: "vampeluso"},
      { name: "Mushi", img: "../img/Mushi sentado.png", artist:"likanakaza" },
    ];
    this.randomIndex = Math.floor(Math.random() * this.list.length);
    this.pet = new Pet(this.list[this.randomIndex].name, this.list[this.randomIndex].img, this.list[this.randomIndex].artist);
    this.petPlacement = petPlacement
    this.petName = petName
    this.hunger = hunger
    this.hp = hp
  }
  //Atualizar sprite e nome pro pet sorteado

  petSprite() {
    if (this.pet.name === "Pipa") {
      this.petPlacement.classList.add("petPipa");
      this.petName.classList.add("nameAjst2");
      this.petName.innerText = "Pipa & Pipo";
      return;
    } else {
      this.petPlacement.classList.add("petMushi");
      this.petName.classList.add("nameAjst");
      this.petName.innerText = "Mushi";
      return;
    }
  }

  petStatus() {
    if (this.pet.name === "Pipa") {
      if (this.pet.hp < 100 && this.pet.hp > 0 && this.pet.hungerPoints === 0) {
        this.petPlacement.classList.remove("petPipa");
        this.petPlacement.classList.add("petPipaSick");
        console.log("petHp < 100 && petHp > 0 && petHunger === 0");
      } else if (this.pet.hp < 100 && this.pet.hungerPoints > 0) {
        this.petPlacement.classList.remove("petPipaSick");
        this.petPlacement.classList.add("petPipa");
        console.log("petHp < 100 && petHunger > 0");
      } else if (this.pet.hp === 0) {
        this.petPlacement.classList.remove("petPipaSick");
        this.petPlacement.classList.remove("petPipa");
        this.petPlacement.classList.add("petPipaDead");
      }
    } else if (this.pet.name === "Mushi") {
      if (this.pet.hp < 100 && this.pet.hp > 0 && this.pet.hungerPoints === 0) {
        this.petPlacement.classList.remove("petMushi");
        this.petPlacement.classList.add("petMushiSick");
      } else if (this.pet.hp < 100 && this.pet.hungerPoints > 0) {
        this.petPlacement.classList.remove("petMushiSick");
        this.petPlacement.classList.add("petMushi");
      } else if (this.pet.hp === 0) {
        this.petPlacement.classList.remove("petMushiSick");
        this.petPlacement.classList.remove("petMushi");
        this.petPlacement.classList.add("petMushiDead");
      }
    }
  }
  attHunger() {
    this.hunger.innerText = this.pet.hungerPoints;
  }
  attHp() {
    this.hp.innerText = this.pet.hp;
  }

}



class Pet {
  constructor(name, petImg, artist) {
    this.hp = 100;
    this.hungerPoints = 100;
    this.name = name;
    this.petImg = petImg;
    this.hungerInterval;
    this.healthInterval;
    this.artist = artist
  }

  checkIfDead() {
    return this.hp <= 0;
  }
  startHungerInterval(callbackHunger, callbackHealth, spriteCallback) {
    this.hungerInterval = setInterval(() => {
      if (this.hungerPoints > 0) {
        this.hungerPoints -= 20;
        callbackHunger();
        clearInterval(this.healthInterval);
        this.healthInterval = undefined;
        spriteCallback(this.hp, this.hungerPoints);
      } else {
        if (this.healthInterval === undefined) {
          this.startHealthInterval(callbackHealth, spriteCallback);
        }
      }
    }, 1000);
  }
  startHealthInterval(callback, spriteCallback) {
    this.healthInterval = setInterval(() => {
      if (this.hp > 0) {
        this.hp -= 10;
        callback();
        spriteCallback(this.hp, this.hungerPoints);
      }
    }, 1000);
  }
}
// class Food{
//   constructor(artist){
// this.artist = artist

//   }

// }

