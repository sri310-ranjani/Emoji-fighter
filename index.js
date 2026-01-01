const fighters = ["😀", "😎", "🤖", "👽", "👻", "🐱", "🐉"];

const stage = document.getElementById("stage");
const button = document.getElementById("fightButton");

button.addEventListener("click", function () {
  const fighter1 = fighters[Math.floor(Math.random() * fighters.length)];
  const fighter2 = fighters[Math.floor(Math.random() * fighters.length)];

  stage.textContent = fighter1 + " VS " + fighter2;
});
