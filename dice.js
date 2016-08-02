function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * numberOfSides.value) + 1;
    return randomNumber;
}

var dice = new Dice(6);