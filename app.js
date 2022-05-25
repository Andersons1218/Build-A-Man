//different variables
let alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let words = ["pizza", "cheeseburger", "fries", "pancake"]
let theWord= null;


function main () {
    

//picks Word
function randomWord (){
    theWord = words[Math.floor(Math.random()*words.length)];
    
}
randomWord()
//set up answer array
let answerArray = [];
for (let i = 0; i < theWord.length; i++){
    answerArray[i] = "_";
}
let remainingLetters = theWord.length;


//Game Loop
while(remainingLetters > 0) {
}if (guess === null) {
}else if (guess.length !== 1) {
}else{
    for (let x = 0; x < words.length; x++){
        if (words[x]=== guess){
            answerArray[x] = guess;
            remainingLetters--;
        }
    }
}
}
main();

for (let z = 0; z < alphabet.length; i++){
// const buttons =  document.getElementsByClassName('.buttons');
const butttons = document.createElement("buttons")
butttons.setAttribute('id', alphabet[z])
}
    


