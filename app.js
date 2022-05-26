//different variables
let selectWord;

const spaces = document.querySelector('.spaces')
const letterButton = document.querySelector('.letterbuttons')
const numberOfTries = document.querySelector('.numberOfTries');
const guesses = document.querySelector('.guesses')
let words = ["pizza", "cheeseburger", "fries", "pancake"]
let tries;

    

 //page refreshes picks random Word
function randomWord (){
   return theWord = words[Math.floor(Math.random()*words.length)];
  
}
randomWord();



//adding letters to HTML
const initiate = function (game) {
  spaces.innerHTML = ' ';
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

 return indexes;
};


// winning and losing conditions
const letterPress = function () {
    const letter = this.textContent.toLowerCase();
  console.log(selectWord)
    if (selectWord.includes(letter)) {
      const indexes_list = getindexes(letter);
      indexes_list.forEach((x, i) => {
        spaces.children[x].textContent = this.textContent;
      });
      if (checkWord()) alert('you win');
    } else {
      triesGoDown();
    }

       this.classList.add('disabled');
       
  };
  
  // buttons presses
  letterButtons.forEach(button => {   
   button.addEventListener('click', letterPress);
  });
  
  
  
  
  
