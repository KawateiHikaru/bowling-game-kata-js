var expect    = require("chai").expect;
var BowlingGame = require("../js/BowlingGame.js")

describe("BowlingGame", function() {

	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollSpare(v) {
		v = v || 5;
		game.roll(v);
		game.roll(10 - v);
	}

	function rollStrike() {
		game.roll(10);
	}

	describe("score()", function() {

		it("should handle gutter game", function() {
			rollMany(20, 0);
			expect(game.score()).to.equal(0);
		});

		it("should handle all ones", function() {
			rollMany(20, 1);
			expect(game.score()).to.equal(20);
		});

		it("should handle one spare", function() {
			rollSpare();
			game.roll(3);
			rollMany(17, 0);
			expect(game.score()).to.equal(16);
		});

		it("should handle one strike", function() {
			rollStrike();
			game.roll(3);
			game.roll(4);
			rollMany(16, 0);
			expect(game.score()).to.equal(24);
		});

		it("should handle a perfect game", function() {
			rollMany(12, 10);
			expect(game.score()).to.equal(300);
		});

		it("should handle no miss", function() {
			rollSpare(5);
			rollSpare(8);
			rollSpare(6);
			rollSpare(7);
			rollSpare(7);
			rollSpare(9);
			rollSpare(5);
			rollSpare(8);
			rollSpare(9);
			rollSpare(9);
			rollStrike();
			expect(game.score()).to.equal(178);
		});

		it("should handle strike-spare", function() {
			rollStrike();
			rollSpare(9);
			rollStrike();
			rollSpare(7);
			rollStrike();
			rollSpare(2);
			rollStrike();
			rollSpare(5);
			rollStrike();
			rollSpare(1);
			rollStrike();
			expect(game.score()).to.equal(200);
		});

	});
});	