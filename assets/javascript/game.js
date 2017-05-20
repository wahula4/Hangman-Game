    // 1. I need to display a word for the user to guess
    // 2. I need the user to make a letter choice
    // 3. I need to capture the users choice
    // 4. If the letter guessed is in the word, it should appear on the blank
    // 5. If the letter guessed is not in the word, it should appear in "guessed letters"
    // 6. If the letter is a repeat letter, nothing should happen
    // 7. If the letter guessed is wrong, the number of guesses left should decrease by 1
    // 8. When the word is complete the # of wins should increase by 1
    // 9. After a win or a loss, a new word to guess should appear from the array



      	// When  the user presses a key it will run the following function
     	  document.onkeyup = function() {
        }

         document.ready = function() {
          console.log("Ready!");
        }
      	
     	// Determine which key was pressed
        	var userGuess = event.key;			
      