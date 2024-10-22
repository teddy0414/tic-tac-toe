let cont1 = document.querySelectorAll(".container1");

let boxes = document.querySelectorAll(".boxes");
let rstBtn = document.querySelector("#reset");
let msg = document.querySelector(".text");
let playerChance = document.querySelector(".chance");
let stgame = document.querySelector("#newgame");
let winr = false;

let turnO = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// const textMsg = (posVal1) => {
//     msg.innerText = `Congratulations Player ${posVal1}`
// }

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("hello");
    if (turnO) {
      playerChance.innerText = "Player O Chance";
      box.innerText = "X";
      turnO = false;
      box.disabled = true;
    } else {
      playerChance.innerText = "Player X Chance";
      box.innerText = "O";
      turnO = true;
      box.disabled = true;
    }

    checkWinner();
  });
});

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winningCombinations) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], [pattern[1]], [pattern[2]]);

    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    // let blankcell = ;
    // let winCell = ;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // alert(`Winner ${posVal1}`)
        disableBox();
        textMsg(posVal1);
        winr = true;
        return;
      }
    }
  }
  if (isDraw()) {
    disableBox();
    tie();
  }
};
const isDraw = () => {
  for (let box of boxes) {
    if (box.innerText === "") {
      return false;
    }
  }
  return true;
};

function tie() {
  msg.innerText = `Match Tie No Winner`;
}

function textMsg(posVal1) {
  msg.innerText = `Congratulations Player ${posVal1} Winner`;
}

const resetGame = () => {
  turnO = true;
  enableBox();
  msg.innerHTML = "";
};

rstBtn.addEventListener("click", resetGame);

const newGame = () => {
  turnO = true;
  enableBox();
  msg.innerHTML = "";
};
stgame.addEventListener("click", newGame);
