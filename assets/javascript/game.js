

// the computer guesses a letter at random from a - z
// the user needs to guess the letter 
// the letter is stored in a variable
// the stored variable is compared to the variable of the computer
// display w/l/gl/ and guesses //

// computers letters //

 var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];

// outcome variables global //

 var wins=0;
 var losses=0;
 var guess=9;
 var guessLeft=9;
 var lettersGuessed= [ ]


//begin instructions of what happens on the page //

document.onkeyup = function(event)
 {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //this users letter guess is being held in var userGuess

    var computerGuess = letters[Math.floor(Math.random()*letters.length)]; //computer selects random letter
        lettersGuessed.push(userGuess); //takes the userGuess and stores it in lettersGuessed

    if (userGuess == computerGuess) {
        wins++;  							// change win of 0 and add 1
        alert('Way to go! You Won!');		// say "you won"
        guessLeft = 9;						 //reseting the guesses back to 9 so that the user can play again
        lettersGuessed.length = 0; 			//this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessLeft == 0){
        losses++;
        alert('Ohhh, No baby what is you doin? Play Again!,and Guess Right');
        guessLeft = 9;					 //reseting the guesses back to 9 so that the user can play again
        lettersGuessed.length = 0;			//this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (userGuess !== computerGuess){
        guessLeft--; //decrementing the guesses left
    }  

    // variable html is printing the data from the to the HTML page
    var html = "<h1>The Psychic Game</h1>" +  
    "<p>Guess what letter I'm thinking of!!!!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    lettersGuessed +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}