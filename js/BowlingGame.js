
var BowlingGame = function() {
	this.rolls = [];
	this.rollIndex = 0;

};

BowlingGame.prototype.roll = function(pins) {
	this.rolls.push(pins);
	this.rollIndex ++;
}


BowlingGame.prototype.score = function() {
	const NumberOfFrames = 10;
	var frameIdx = 0;
	var sum = 0;
	var self = this;

	function isStrike() {
		return self.rolls[frameIdx] === 10;
	}

	function strikeBonus() {
		return self.rolls[frameIdx + 1] + self.rolls[frameIdx + 2];
	}

	function isSpare() {
		return (self.rolls[frameIdx] + self.rolls[frameIdx + 1]) === 10;
	}

	function spareBonus() {
		return self.rolls[frameIdx+2];
	}


	for (var i=0; i < NumberOfFrames;i++) {

		if (isStrike()) {
			sum += 10 + strikeBonus();
			frameIdx ++;
		} else if (isSpare()) {
			sum += 10 + spareBonus();
			frameIdx += 2;
		} else {
			sum += self.rolls[frameIdx] + self.rolls[frameIdx+1];
			frameIdx += 2;
		}
	}

	return sum;
}

module.exports = BowlingGame;