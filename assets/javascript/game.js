var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



var words = [
    "pizza",
    "mozzarella",  // list of answers
    "lasagna",
    "penne",
    "fettuccine",
    "linguine",
    "cannoli",
    "parmesan",
]
 //start game
 var chosenWord = ""
var answerblanks = [];
var guesses = 15

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    // reset array
    for (var i = 0; i < chosenWord.length; i++) { 
        answerblanks[i] = "_";
    }
    guesses = 15
    document.getElementById("guesses").innerHTML="Remaining guesses: " + guesses;
    document.getElementById("spaces").innerHTML = answerblanks.join(" ");
}
//document.getElementById("spaces").innerHTML = randomwords;


//user guesses
document.onkeyup = function (event) {
    guesses = guesses - 1;
    document.getElementById("guesses").innerHTML="Remaining guesses: " + guesses;

    //wrong guess
    if (chosenWord.indexOf(event.key) === -1) {
        console.log("wrong")
        // not found; subtract a guess and continue
    } 
    // correct guess
    else {
        console.log("correct")
        var correctGuess = event.key
    
        var chosenWordLetters = chosenWord.split('')
        console.log(chosenWordLetters)
        for(var i=0; i<chosenWordLetters.length; i++) {
            console.log("position:", i)
            if(correctGuess === chosenWordLetters[i]) {
                console.log(answerblanks)
                answerblanks[i] = correctGuess
                console.log(answerblanks)
            }
        } 
        document.getElementById("spaces").innerHTML = answerblanks.join(" "); //display of guess
        if(!answerblanks.includes("_")) {
            alert("You Win!")
            startGame()
        }
    }
    
    if (guesses === 0) {
        alert("Game Over!!!")
        startGame()
    }



    
    // letter found!
    //Add the letter to the word display
    // Subtract a guess
    // Continue
    // 

}
startGame()
