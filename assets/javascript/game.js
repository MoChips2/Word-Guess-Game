var words = [
    "pizza",
    "mozzarella",  // list of answers
    "lasagna",
    "penne",
    "parmesan",
    "fettuccine",
    "linguine",
    "cannoli",
    "risotto",
    "gelato",
    "calzone",
    "frittata",
    "ravioli",
]
//start game
var chosenWord = ""
var answerblanks = [];
var guesses = 15;
var counter = 0;

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    answerblanks = []; // resets array
    for (var i = 0; i < chosenWord.length; i++) {
        answerblanks[i] = "_";
    }
    guesses = 15
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + guesses;
    document.getElementById("spaces").innerHTML = answerblanks.join(" ");
}
//document.getElementById("spaces").innerHTML = randomwords;


//user guesses
document.onkeyup = function (event) {
    guesses = guesses - 1;
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + guesses;

    //wrong guess
    if (chosenWord.indexOf(event.key) === -1) {
        console.log("wrong")
        
        document.getElementById("remainders").innerHTML = "Letters guessed: " + event.key;
        // not found; subtract a guess and continue
    }
    // correct guess
    else {
        console.log("correct")
        var correctGuess = event.key

        var chosenWordLetters = chosenWord.split('')
        console.log(chosenWordLetters)
        for (var i = 0; i < chosenWordLetters.length; i++) {
            console.log("position:", i)
            if (correctGuess === chosenWordLetters[i]) {
                console.log(answerblanks)
                answerblanks[i] = correctGuess
                console.log(answerblanks)
            }
        }
        //displaying wrong or correct guess
        document.getElementById("spaces").innerHTML = answerblanks.join(" "); 
        if (!answerblanks.includes("_")) {
            
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

//we need a wintotal counter here

document.getElementById("WinTotal").innerHTML = "Win Total: " + counter;
//this restarts the game with a new word
startGame()
