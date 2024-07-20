let input = document.getElementById("input");
let question = document.getElementById("question");
let ShowScore = document.getElementById("score");
let scoreBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("reset");
let form = document.querySelector("form");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

question.innerHTML = `What is ${num1} multiply by ${num2}?`;

let coorectAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("finalScr"));

if (!score) {
  score = 0;
  lclstrg();
}
ShowScore.innerHTML = `score: ${score}`;

form.addEventListener("submit", () => {
  const userAns = parseInt(input.value);
  if (userAns === coorectAns) {
    score++;
    lclstrg();
  } else {
    score--;
    lclstrg();
  }
});

function lclstrg() {
  localStorage.setItem("finalScr", JSON.stringify(score));
}
resetBtn.addEventListener("submit", () => {
  localStorage.clear();
});
