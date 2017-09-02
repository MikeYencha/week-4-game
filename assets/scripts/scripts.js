
// global variables

var mainRandom = Math.floor(Math.random() * 101) + 19 ;
console.log(mainRandom);
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
  $('.crystal').on('click', function(e) {

    if(this.value == 0 ) {
      //sets value of click to random number between 1
      this.value = Math.floor(Math.random() * 12) + 1;
    }
      sum += Number($(this).val());
      sumDisplay();
    if((sum > 0) && (sum !== mainRandom)) {
      loss++;
    } else {
      win++;
    }
    $('.wins').html(win);
    $('.losses').html(loss);
  })
  computerMatch();



  // evaluate();
  // function evaluate() {
  //   if((sum !== mainRandom) && (click === 4)) {
  //     win++;
  //     $('.wins').html(1);
  //   }
  // }
  // set value of each crystal








  // sum +(= this.value;
    // $('.user-display').html(sum);
  //capture the value of crystal on click into var


});
