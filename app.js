//different variables
let selectWord;
const winningMessage = document.querySelector(".winningmesg");
const gameovermessage = document.querySelector(".gameover");
const wordContel = document.querySelector(".wordCont");
const letterButton = document.querySelector(".letterbuttons");
const numberOfTries = document.querySelector(".numberOfTries");
const guesses = document.querySelector(".guesses");
let words = ["tacos", "chips", "fries", "nachos"];
let tries = 5;
let theWord;
let currentGuess = "";
let targetWord = "";
let wrongLetter = null;

//page refreshes picks random Word
function randomWord() {
  return (theWord = words[Math.floor(Math.random() * words.length)]);
}
randomWord();
// console.log(theWord.length);

//adding letters to HTML
const initiate = function (game) {
  numberOfTries.textContent = tries;
  if (game === "start") {
    for (const i of "abcdefghijklmnopqrstuvwxyz") {
      const html = `<button class="alphabet">${i.toUpperCase()}</button>`;
      letterButton.insertAdjacentHTML("beforeend", html);
    }
  } else if (game === "reset") {
    letterButton.forEach((button) => {
      button.classList.remove("disabled");
    });
  }
  selectWord = randomWord(wordContel);
  // console.log(selectWord);

  //takes word and puts it in guess div
  creatWordCont = function () {
    for (let z = 0; z < selectWord.length; z++) {
      //console.log(selectWord[z])
      let letterCont = document.createElement("div");
      letterCont.id = selectWord[z];
      letterCont.classList.add("letter");
      wordContel.appendChild(letterCont);
      targetWord += selectWord[z];
    }
  };
  creatWordCont();

  // console.log(targetWord);

  // Game logic

  let letterButtons = document.querySelectorAll(".alphabet");
  function checkButtons() {
    let wrongLetter = false;
    for (const letter of letterButtons) {
      // console.log(letter)
      letter.addEventListener("click", function () {
        // console.log(tries);
        // console.log(`${letter.innerText} was clicked`)
        let letterText = letter.innerText;
        currentGuess += letterText;
        // console.log(letterText);
        let letterels = document.querySelectorAll(".letter");
        // console.log(letterels)
        if (selectWord.includes(letterText.toLowerCase())) {
          let letterel = document.getElementById(letterText.toLowerCase());
          console.log(letterel);
          letterel.innerText = letterText;
          if (isWin(currentGuess, targetWord)) {
              winningMessage.innerText = "You Win!!!";
              // console.log("you win");
            }}else {
            wrongLetter = true;
            tries -= 1 
            numberOfTries.textContent = Math.ceil(tries);
            console.log(wrongLetter);
          if (Math.ceil(tries) <= 0) {
            // console.log("you lost")
            tries = 0;
            numberOfTries.textContent = tries;
            gameovermessage.innerText = "You lost!";
          }}
      }
       ) }
      

       }
  checkButtons();
};

// console.log(wordContel);
initiate("start");

// winning condition
function isWin(guess, word) {
  if (guess.toLowerCase() == word) {
    return true;
  } else {
    return false;
  }
}
