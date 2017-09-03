// global variables
var mainRandom = 0;
var win = 0;
var loss = 0;
var crystalValue = '';
var sum = 0;

$(document).ready(function() {
// available functions

  // sets click value in html
  function sumDisplay() {
    $('.user-display').html(sum);
  }
  // set starting value for computer match
  function computerMatch() {
    mainRandom = Math.floor(Math.random() * 101) + 19;
    $('.computer-display').html(mainRandom);
    sum = 0;
    sumDisplay();
    $('.crystal').each(function () {
      this.value = 0;
    });
  }
  // sets loss value in html
  function computerWin() {
    $('.losses').html(loss);
    alert('You\'ve Lost!')
  }
  // sets win value in html
  function youWin() {
    $('.wins').html(win);
    alert('You\'ve Won!')
  }
  //evaluates if there is a user or computer win or loss and restarts to the next level of the game
  function evaluate() {
    crystalValue = sum;
    if((crystalValue > 0) && (crystalValue > mainRandom)) {
      loss++;
      computerWin();
      computerMatch();
    } else if ((crystalValue > 0) && (crystalValue == mainRandom)) {
      win++;
      youWin();
      computerMatch();
    }
  }
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
    });
  // starts game with computer value displayed
  computerMatch();
});
