const buttons = document.querySelectorAll("button");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resultsEl = document.getElementById("result");

let userScore = 0;
let computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const userPick = e.target.id;
    const computerPick = getComputerPick();
    const result = getResult(userPick, computerPick);

    resultsEl.textContent = result;
  });
});

function getComputerPick() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userPick, computerPick) {
  if (userPick === computerPick) {
    return "It's a Tie";
  } else if (
    (userPick === "rock" && computerPick === "scissor") ||
    (userPick === "paper" && computerPick === "rock") ||
    (userPick === "scissors" && computerPick === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    return `You Win! ${userPick} beats ${computerPick}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You Lose! ${computerPick} beats ${userPick}`;
  }
}
