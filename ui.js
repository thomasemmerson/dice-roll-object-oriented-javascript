//updates the dice with the new random number value
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

//selects button element
var button = document.getElementById("button");

//when button is clicked
button.onclick = function() {
  //calls roll method from within dice object
  var result = dice.roll();
  //calls printNumber function
  printNumber(result);
};