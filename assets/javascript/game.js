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
    startingWordLetters = startingWord.split(""); // gives an array of in the individual letters in string
    spaces = startingWordLetters.length; // the number of letters in a given word

    console.log(startingWord);
    console.log(startingWordLetters);

    guessesLeft = 8;
    blanksAndCorrect = [];
    wrongGuesses = [];

    for (var i = 0; i < spaces; i++){
      blanksAndCorrect.push("_");
    }

    console.log(blanksAndCorrect);
$("#current-word").html(blanksAndCorrect.join(" ")); //.join removes the commmas between each letter
$("#remaining-guesses").html(guessesLeft);
$("#letters-guessed").html(wrongGuesses.join(" "));

  }

function checkLetters(letter) {
  var letterInWord = false;
// check to see if the letter guessed exists anywhere in the word
  for (var i = 0; i < spaces; i++) {
    if (startingWord[i] === letter) {
      letterInWord = true;
    }
  }
// check where in the word the letter exists
  if (letterInWord) {
    for ( var j = 0; j < spaces; j++) {
      if (startingWord[j] === letter) {
      blanksAndCorrect[j] = letter;
    }
  }
}
// letter wasn't found
    else if (wrongGuesses == letter) {
    alert("That letter is still wrong..");
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

    var answerImage = 'assets/images/' + startingWord + '.jpg';
    var img = $("<img>");
    img.attr('src', answerImage);
    $("#winner-image").html(img);

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

