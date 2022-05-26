//different variables
const playAgain = document.querySelector('.playagain')
const reset = document.querySelector('.reset')
const spaces = document.querySelector('.spaces')
const letterButton = document.querySelector('.letterbuttons')
const numberOfTries = document.querySelector('.numberOfTries');
const guesses = document.querySelector('.guesses')
let words = ["pizza", "cheeseburger", "fries", "pancake"]
let tries;

    

 //picks random Word
function randomWord (){
   return theWord = words[Math.floor(Math.random()*words.length)];
  
}
randomWord();


let selectWord;
//adding letters to HTML
const initiate = function (game) {
  spaces.innerHTML = '';
  if (game === 'start') {
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alphabet">${i.toUpperCase()}</button>`;
      letterButton.insertAdjacentHTML('beforeend', html);
    }
  } else if (game === 'reset') {
    lettersButtons.forEach(button => {
      button.classList.remove('disabled');
    });
  }
  selectWord = randomWord(spaces);
  tries = 5;

 letterButtons = document.querySelectorAll('.alphabet');
 numberOfTries.textContent = tries;

 // creating lines and selecting the words 
 for (let i = 0; i < theWord.length; i++) {
   const html = `<p class="spaces">_</p>`;
   spaces.insertAdjacentHTML('beforeend', html);
 }
};

initiate('start');


// Amount of tries go down and alerts loser
const triesGoDown = function () {
 tries--;
 numberOfTries.textContent = tries;
 if (tries === 0) {
   alert('lost');
 }
};
// check if there is a complete word
const checkWord = function () {
 let guessedWord = true;
 for (let i = 0; i < spaces.children.length; i++) {
   if (spaces.children[i].textContent === '_') {
     guessedWord = false;
   }
 }
 return guessedWord;
};
//checks to see if letter fits into word
const getindexes = function (letter) {
 let indexes = [];
 [spaces].forEach((y, i) => {
   if (y === letter) {
     const index = i;
     indexes.push(index);
   }
 });
 //console.log(indexes)
 return indexes;
};


// letters event listener function
const letterPress = function () {
    const letter = this.textContent.toLowerCase();
  console.log(selectWord)
    if (selectWord.includes(letter)) {
      const indexes_list = getindexes(letter);
      indexes_list.forEach((xy, i) => {
        spaces.children[xy].textContent = this.textContent;
      });
      if (checkWord()) display('won');
    } else {
      triesGoDown();
    }

       this.classList.add('disabled');
       
  };
  
  // listening to letter buttons presses
  letterButtons.forEach(button => {   
   button.addEventListener('click', letterPress);
  });
  
  
  
  // listening to reset btn
//   resetButton.addEventListener('click', function () {
//     initiate('reset');
//   });
  
//   // listening to play again button
//   playAgain.addEventListener('click', function () {
//     initiate('reset');
//   });