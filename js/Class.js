class Pets {
  constructor(petNum, petImg) {
    this.hp = petNum.hp;
    this.hungerPoints = petNum.HungerPoints;
    this.name = petNum.name;
    this.petImg = petImg;
  }
}

class Comidas {
  constructor(food) {
    this.quality = food.quality;
    this.foodImg = food.img
  
  }
}
