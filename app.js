//different variables
let alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let categoryTitle = [ 'City', 'Drink']
let words = [['New York', 'London','Seoul', 'Tokyo','Los Angeles'
], [ 'Martini', 'Mojito', 'Margarita', 'Cosmopolitan', 'Mimosa']]
let hints = [[" Most populated city in America","Everyone loves a queen","Blank Food", "Get amazing sushi from here","City of Angles" ], ["This drink can be shaken not stirred", "A popular Mexican drink","A drink made famous by tv show for single women", "A Drink originated in cuba","a Sunday funday drink"]]



//picks Word

const letters = document.querySelectorAll('.letters')
for (const letter of letters){
    // if (letter === pickedLetter){
    //     return true 
    // }
    letter.addEventListener('click', function(){
        return letter.innerText
    })
}
//guesses for words
wordLine = function () {;
    for (let i = 0; i < words.length; i++)
    if(words[i]=== "_") {
        guess.innerHTML = "_";
        space = 1;

    }else {
        guess.innerhtml = "_";
    }
}

//play again function 

