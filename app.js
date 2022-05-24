//different variables
let alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let words = ["pizza", "cheeseburger", "fries", "pancake"]


//picks Word
function randomWord (){
    let theWord = words[Math.floor(Math.random()*words.length)];
}
randomWord()
//set up answer array
let answerArray = [];
for (let i = 0; i < words.length; i++){
    answerArray[i] = "_";
}
let remainingLetters = words.length;

//Game Loop
while(remainingLetters > 0) {
    let guess = promt("Guess a letter");
}if (guess === null) {
    break ;
}else if (guess.length !== 1) {
}else{
    for (let x = 0; x < words.length; x++){
        if (word[x]=== guess){
            answerArray[x] = guess;
            remainingLetter - -;
        }
    }
}


