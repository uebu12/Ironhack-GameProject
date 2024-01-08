
class Game {
  constructor(petPlacement, petName, hunger, hp) {
    this.list = [
      { name: "Pipa", img: "../img/Feliz.png", artist: "vampeluso" },
      { name: "Mushi", img: "../img/Mushi sentado.png", artist: "likanakaza" },
    ];
    this.randomIndex = Math.floor(Math.random() * this.list.length);
    this.pet = new Pet(
      this.list[this.randomIndex].name,
      this.list[this.randomIndex].img,
      this.list[this.randomIndex].artist
    );
    this.petPlacement = petPlacement;
    this.petName = petName;
    this.hunger = hunger;
    this.hp = hp;
    this.hungerInterval;
    this.healthInterval;
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

  // Atualizar sprite dependendo do hp e hunger
  petStatus() {
    if (this.pet.name === "Pipa") {
      if (this.pet.hp < 100 && this.pet.hp > 0 && this.pet.hungerPoints <= 0) {
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
    console.log();
    this.hunger.innerText = this.pet.hungerPoints;
  }
  attHp() {
    this.hp.innerText = this.pet.hp;
  }
  checkIfDead() {
    return this.pet.hp <= 0;
  }

  //Intervalo para o contador de fome
  startHungerInterval() {
    this.hungerInterval = setInterval(() => {
      if (this.pet.hungerPoints > 0) {
        this.pet.hungerPoints -= 20;
        // callbackHunger();
        this.attHunger();
        console.log(this.pet.hungerPoints);
        clearInterval(this.healthInterval);
        this.healthInterval = undefined;
        this.petStatus();
      } else {
        if (this.healthInterval === undefined) {
          this.startHealthInterval();
        }
      }
    }, 1000);
  }

  //Intervalo para o contador de vida
  startHealthInterval() {
    this.healthInterval = setInterval(() => {
      if (this.pet.hp > 0) {
        this.pet.hp -= 10;
        this.attHp();
        this.petSprite();
        this.petStatus();
      }
    }, 1000);
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
    this.artist = artist;
  }
}
