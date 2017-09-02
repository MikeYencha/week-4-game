
// global variables
var mainRandom = Math.floor(Math.random() * 101) + 19 ; //
var win = 0;
var loss = 0;
var guess = '';
var crystalValue = '';
var sum = 0;
var val = '';
var click = 0;

$(document).ready(function() {

  // set starting value for computer match
  function computerMatch() {
    $('.computer-display').html(mainRandom);
  }
  function sumDisplay() {
    $('.user-display').html(sum);
  }
  // display sum of user guesses in the user-display
  // click event
  $('.crystal').on('click', function(e) {
    if(this.value == 0 ) {
      //sets value of click to random number between 1
      this.value = Math.floor(Math.random() * 12) + 1;
    }
    // continually adds click value to sum value
      sum += Number($(this).val());
    // console log crystalValue for testing
      console.log(this.value);
    // adds sum value to user-display
      sumDisplay();
      crystalValue = sum;
      // evaluate if crystalValue and computer number match and wind or loss is calculated
      if((crystalValue >= 0) && (crystalValue !== mainRandom)) {
        loss++;
      } else {
        win++;
      }
      $('.wins').html(win);
      $('.losses').html(loss);
    });

  // starts game with computer random number set and displayed
  computerMatch();
});

  // evaluate();
  // function evaluate() {
  //   if((sum !== mainRandom) && (click === 4)) {
  //     win++;
  //     $('.wins').html(1);
  //   }
  // }
  // set value of each crystal
