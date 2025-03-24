const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const userPick = e.target.id;
    const computerPick = getComputerPick()
    getResult(userPick, computerPick)
  });
});

function getComputerPick() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userPick, computerPick){
    if(userPick === computerPick) {
        console.log("Tie")
    }     
}
