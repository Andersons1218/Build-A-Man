//different variables
let selectWord;
console.log(selectWord);
const winningMessage = document.querySelector('.winningmesg')
const gameovermessage = document.querySelector('.gameover')
const wordContel = document.querySelector(".wordCont");
const letterButton = document.querySelector(".letterbuttons");
const numberOfTries = document.querySelector(".numberOfTries");
const guesses = document.querySelector(".guesses");
let words = ["pizza", "chips", "fries", "pancake"];
let tries = 5;
let theWord;

//page refreshes picks random Word
function randomWord() {
  return (theWord = words[Math.floor(Math.random() * words.length)]);
}
randomWord();
console.log(theWord.length);

//adding letters to HTML
const initiate = function (game) {
  numberOfTries.textContent = tries;
  // spaces.innerHTML = ' ';
  if (game === "start") {
    for (const i of "abcdefghijklmnopqrstuvwxyz") {
      const html = `<button class="alphabet">${i.toUpperCase()}</button>`;
      letterButton.insertAdjacentHTML("beforeend", html);
    }
  } else if (game === "reset") {
    lettersButtons.forEach((button) => {
      button.classList.remove("disabled");
    });
  }
  selectWord = randomWord(wordContel);
  console.log(selectWord);

  creatWordCont = function () {
    for (let z = 0; z < selectWord.length; z++) {
      //console.log(selectWord[z])
      let letterCont = document.createElement("div");
      letterCont.classList.add(selectWord[z]);
      letterCont.classList.add("letter");
      // console.log(letterCont)
      wordContel.appendChild(letterCont);
    }
  };
  creatWordCont();

  letterButtons = document.querySelectorAll(".alphabet");
  function checkButtons() {
    let wrongLetter = false;
    for (const letter of letterButtons) {
      
      // console.log(letter)
      letter.addEventListener("click", function () {
        console.log(tries); // console.log(`${letter.innerText} was clicked`)

        let letterText = letter.innerText;
        // console.log(letterText);
        let letterels = document.querySelectorAll(".letter");
        // console.log(letterels)
        for (const letterel of letterels) {
          // console.log(letterel.classList);
          // console.log(letterText);
          if (letterel.classList.contains(letterText.toLowerCase())) {
            letterel.innerText = letterText;
          } else {
            wrongLetter = true;
            tries -= (1 / theWord.length) ;
            numberOfTries.textContent = Math.ceil(tries);
          }
        } if (Math.ceil(tries) <= 0){
        console.log("you lost")
          tries = 0;
          numberOfTries.textContent = tries;
         gameovermessage.innerText = 'You lost!'
        }
        console.log(tries);
      })
    
    }
  }
  checkButtons();
};

console.log(wordContel);

initiate("start");


