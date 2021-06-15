class Pets {
  constructor(petNum, petImg) {
    this.hp = 100;
    this.hungerPoints = 100;
    this.name = petNum.name;
    this.petImg = petImg;
  }
  checkIfDead() {
    return this.hp <= 0;
  }
}

class Comidas {
  constructor(food) {
    this.quality = food.quality;
    this.foodImg = food.img;
  }
}
