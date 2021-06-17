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

