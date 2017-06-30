
var BowlingGame = function() {
	this.rolls = [];
	this.rollIndex = 0;
};

BowlingGame.prototype.roll = function(pins) {
	this.rolls.push(pins);
	this.rollIndex ++;
}


BowlingGame.prototype.score = function() {
	return this.rolls.reduce(function(acc, v) {
		return acc + v;
	}, 0);
}

module.exports = BowlingGame;