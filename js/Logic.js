const pets = [{ name: "placeholder", img: "../img/Feliz.png" }];

// window.addEventListener("load", )

const foods = document.getElementById("foods");
let hunger = document.getElementById("hunger").innerText;

foods.addEventListener("click", () => {
  return (hunger = hunger + 100);
});

// Sortear entre 2 pets ao carregar a pagina
// Exibir nome do pet
// Contador para diminuir pontos de fome por segundo(iniciar ao carregar pagina)
// Interação entre clicar em comida e aumentar contador de fome
// Contador para diminuir ponto de saúde por segundo quando fome = 0
// Alterar background-image para doente quando fome = 0 e saude diminuindo (talvez usando classes em css)
// Alterar background-image para morto quando ponto de saude = 0 (talvez usando classes em css)
// Bonus: Sons/música, função de carinho/dormir, tela inicial, dialogo, barras de saúde e fome
