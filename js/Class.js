class Pet {
  constructor(name, petImg) {
    this.hp = 100;
    this.hungerPoints = 100;
    this.name = name;
    this.petImg = petImg;
    this.hungerInterval;
    this.healthInterval;
  }

  checkIfDead() {
    return this.hp <= 0;
  }
  startHungerInterval(callbackHunger, callbackHealth) {
    this.hungerInterval = setInterval(() => {
      if (this.hungerPoints > 0) {
        this.hungerPoints -= 20;
        callbackHunger();
      } else {
        if (this.healthInterval === undefined) {
          this.startHealthInterval(callbackHealth);
        }
      }
    }, 1000);
  }
  startHealthInterval(callback) {
    this.healthInterval = setInterval(() => {
      if (this.hp > 0) {
        this.hp -= 10;
        callback();
      } 
    }, 1000);
  }
}

class Comidas {
  constructor(food) {
    this.quality = food.quality;
    this.foodImg = food.img;
  }
}
