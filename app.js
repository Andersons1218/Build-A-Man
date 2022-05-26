//different variables
const playAgain = document.querySelector('.playagain')
const reset = document.querySelector('.reset')
const spaces = document.querySelector('.spaces')
const letterButton = document.querySelector('.letterbuttons')
const numberOfTires = document.querySelector('.numberOfTries');
const guesses = document.querySelector('.guesses')
let words = ["pizza", "cheeseburger", "fries", "pancake"]
let tires;

    

 //picks random Word
function randomWord (){
    theWord = words[Math.floor(Math.random()*words.length)];
  
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
  tires = 5;

 letterButtons = document.querySelectorAll('.alphabet');
 numberOfTires.textContent = tires;

 // creating lines and selecting the words 
 for (let i = 0; i < theWord.length; i++) {
   const html = `<p class="spaces">_</p>`;
   spaces.insertAdjacentHTML('beforeend', html);
 }
};

initiate('start');


// Amount of tires go down
const tiresGoDown = function () {
 tires--;
 numberOfTires.textContent = tries;
 if (tries === 0) {
   showNotif('lost');
 }
};

// 
const getindexes = function (whichLetter) {
 let indexes = [];
 [words].forEach((y, i) => {
   if (y === letter) {
     const index = i;
     indexes.push(index);
   }
 });
 return indexes;
};

// check if there is a complete word
const checkWord = function () {
 let guessedWord = true;
 for (let i = 0; i < wordDiv.children.length; i++) {
   if (word.children[i].textContent === '_') {
     guessedWord = false;
   }
 }
 return guessedWord;
};
// letters event listener function
const letterPress = function () {
    const letter = this.textContent.toLowerCase();
  
    if (word.includes(letter)) {
      const indexes_list = getindexes(letter);
      indexes_list.forEach((xy, i) => {
        word.children[xy].textContent = this.textContent;
      });
      if (checkWord()) display('won');
    } else {
      decreaseLife();
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