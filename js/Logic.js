const pets = [{ name: "placeholder", img: "../img/Feliz.png" }];

// window.addEventListener("load", )

let foods = document.getElementsByClassName("foods");
let hunger = document.getElementsByClassName("hunger").innerText;

foods.addEventListener("click", () => {
  return hunger + 100;
});
