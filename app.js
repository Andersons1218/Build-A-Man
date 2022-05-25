//different variables
const playAgain = document.querySelector('.playagain')
const reset = document.querySelector('.reset')
const word = document.querySelector('.word')
const letterbutton = document.querySelector('.letterbutton')

let words = ["pizza", "cheeseburger", "fries", "pancake"]
let theWord= null;
let letter;


    

// //picks Word
function randomWord (){
    theWord = words[Math.floor(Math.random()*words.length)];
    
}
randomWord();

// 
let select_word;

const main = function (state) {
  word.innerHTML = '';
  if (state === 'start') {
    // putting all letters into html
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letter.insertAdjacentHTML('beforeend', html);
    }
 
