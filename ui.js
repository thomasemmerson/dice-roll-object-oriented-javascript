//updates the dice with the new random number value
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

//selects button element
var button = document.getElementById("button");
//selects text input element
var numberOfSides = document.getElementById("numberOfSides");


//when button is clicked
button.onclick = function() {
  //calls roll method from within dice object
  var result = dice.roll();
  //calls printNumber function
  printNumber(result);
};

//when the value of this input changes
numberOfSides.onchange = function() {
	//if the value is a number
	if (isNumber(numberOfSides.value)) {
		//do nothing
	}
	//if it is not a number
	else {
		//warn the user and revert
		alert("Uh oh! This is not a number!");
		numberOfSides.value = "";
	}
}

//validates if parameter is a number
function isNumber(n) {
  	return !isNaN(parseFloat(n)) && isFinite(n);
}