  // Array of possible words to be guessed
      var safariWords = ["elephant",
                         "antelope",
                         "cheetah",
                         "zebra",
                         "buffalo",
                         "giraffe",
                         "hippo",
                         "hyena"];

    
      // // Variables for tracking our wins
      var userWins = 0;
      var guessesLeft = 8;
      // blanks
      var spaces = 0;
      // word chosen by computer at random
      var startingWord = "";    
      // user's guessed letters
      var lettersGuessed = "";
      // incorrect letters
      var wrongGuesses = [];
      // letters in the random word
      var startingWordLetters = [];
      // correct and incorrect letters
      var blanksAndCorrect = [];


  function newGame() {

    startingWord = safariWords[Math.floor(Math.random() * safariWords.length)];
    startingWordLetters = startingWord.split("");
    spaces = startingWordLetters.length;

    console.log(startingWord);

    guessesLeft = 8;
    blanksAndCorrect = [];
    wrongGuesses = [];

    for (var i = 0; i < spaces; i++){
      blanksAndCorrect.push("_");
    }

    console.log(blanksAndCorrect);
$("#current-word").html(blanksAndCorrect.join(" "));
$("#remaining-guesses").html(guessesLeft);
$("#letters-guessed").html(wrongGuesses.join(" "));

  }

function checkLetters(letter) {
  var letterInWord = false;

  for (var i = 0; i < spaces; i++) {
    if (startingWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for ( var j = 0; j < spaces; j++) {
      if (startingWord[j] === letter) {
      blanksAndCorrect[j] = letter;
}
    }
  }

  else {
    wrongGuesses.push(letter);
    guessesLeft--;
  }
}

function afterLetterGuessed(){
  $("#current-word").html(blanksAndCorrect.join(" "));
  $("#remaining-guesses").html(guessesLeft);
  $("#letters-guessed").html(wrongGuesses.join(" "));

  if (startingWordLetters.toString() === blanksAndCorrect.toString()) {
    userWins++;
    alert("You Win! The word is " + startingWord);
    $("#wins").html(userWins);
    newGame();
  }

  else if (guessesLeft === 0) {
    alert("You Lose");
    newGame();
  }

}

newGame();

$(document).keyup(function(event) {
  lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(lettersGuessed);
  afterLetterGuessed();
});

