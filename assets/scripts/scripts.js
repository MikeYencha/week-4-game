// global variables
var mainRandom = Math.floor(Math.random() * 101) + 19 ; //
var win = 0;
var loss = 0;
var crystalValue = '';
var sum = 0;

$(document).ready(function() {

// available functions

  // set starting value for computer match
  function computerMatch() {
    $('.computer-display').html(mainRandom);
  }
  // sets click value in html
  function sumDisplay() {
    $('.user-display').html(sum);
  }
  // sets loss value in html
  function computerWin() {
    $('.losses').html(loss);
  }
  // sets win value in html
  function youWin() {
    $('.wins').html(win);
  }
  //evaluates if there is a user or computer win or loss
  function evaluate() {
    crystalValue = sum;
    if((crystalValue > 0) && (crystalValue > mainRandom)) {
      loss++;
    } else if ((crystalValue > 0) && (crystalValue == mainRandom)){
      win++;
    }
  }
  // tells user if there is a win or loss
  function winOrLose() {
    if(win == 1) {
      alert('You Win');
      youWin();
    }
    if(loss == 1) {
      alert('You Lose');
      computerWin();
    }
  }

  // reset function that isn't working damn it
  function reset () {
    $(".computer-display").html(mainRandom);
    $("user-display").html('0');
  }

  // click event starts game
  $('.crystal').on('click', function(e) {
    if(this.value == 0 ) {
      //sets value of click to random number between 1 and 12
      this.value = Math.floor(Math.random() * 12) + 1;
    }
      // calculates sum value
      sum += Number($(this).val());
      console.log(this.value); // console log for testing
      // sets sum value in html
      sumDisplay();
      // evaluates click value vs computer value
      evaluate();
      //establishes win or lose
      winOrLose();
    });
  // starts game with computer value displayed
  computerMatch();
});
